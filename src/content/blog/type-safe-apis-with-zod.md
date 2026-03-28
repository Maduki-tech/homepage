---
title: "Type-Safe APIs with Zod and TypeScript"
date: "2025-06-05"
description: "A practical guide to validating API boundaries, parsing external data safely, and catching runtime errors before they become production incidents."
image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop"
tags: ["TypeScript", "Zod", "API", "Backend"]
readTime: "7 min read"
---

## TypeScript Lies to You (Sometimes)

TypeScript is fantastic. It also has a critical blind spot: it can't help you at runtime when the shape of external data doesn't match your types.

You annotate an API response as `User[]`. The request succeeds. TypeScript is happy. But the API returned `null` for `user.email` because a vendor updated their schema without telling you. Your code tries to call `.toLowerCase()` on `null`. Production breaks.

Zod closes this gap.

## The Core Pattern

```typescript
import { z } from "zod";

const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  role: z.enum(["admin", "user", "viewer"]),
  createdAt: z.coerce.date(),
});

type User = z.infer<typeof UserSchema>;
```

Two things happening here:
1. `UserSchema` is the runtime validator — it runs when data arrives
2. `z.infer<typeof UserSchema>` derives the TypeScript type automatically

You write the schema once. The type follows for free.

## Validating API Responses

```ts
async function getUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  const raw = await response.json();

  const result = UserSchema.safeParse(raw);
  if (!result.success) {
    console.error("Unexpected API shape:", result.error.format());
    throw new Error("Invalid user data from API");
  }

  return result.data; // typed as User, guaranteed valid
}
```

`safeParse` never throws — it returns a discriminated union. Use `parse` if you want Zod to throw on failure instead.

## Schema Composition

The real power is composing schemas:

```typescript
const PaginatedSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    items: z.array(itemSchema),
    total: z.number().int().nonnegative(),
    page: z.number().int().positive(),
  });

const PaginatedUsers = PaginatedSchema(UserSchema);
```

Now `PaginatedUsers` is fully typed and validated. Change the underlying schema, the paginated version updates automatically.

## Transformations and Preprocessing

Zod can transform data as it parses:

```typescript
const DateRangeSchema = z.object({
  from: z.string().transform((s) => new Date(s)),
  to: z.string().transform((s) => new Date(s)),
}).refine(
  ({ from, to }) => from < to,
  { message: "Start date must be before end date" }
);
```

`.refine()` adds cross-field validation that TypeScript can't express at the type level.

## Where to Validate

Validate at every trust boundary:
- **Incoming API responses** (external services, your own endpoints from the client)
- **User input** (forms, query params, URL segments)
- **Environment variables** — parse them at startup with Zod, crash fast if they're wrong

Don't validate internal function calls where TypeScript already covers you. That's noise.

## The Payoff

Once you have schemas, you also have:
- Auto-generated documentation via `zod-to-json-schema`
- OpenAPI spec generation
- Form validation with `react-hook-form` + Zod resolver
- tRPC input validation for free

Write the schema once. Everything else derives from it.
