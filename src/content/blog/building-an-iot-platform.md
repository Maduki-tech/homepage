---
title: "Building an IoT Platform That Handles 20k Messages/min"
date: "2025-11-14"
description: "How we migrated 150,000 machines to a new IoT platform — lessons learned from data pipelines, schema design, and surviving the unexpected."
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop"
tags: ["IoT", "Azure", "Java", "Backend"]
readTime: "6 min read"
---

## The Problem

When I joined Wacker Neuson, the IoT platform was already creaking under its own weight. We had construction equipment spread across Europe sending telemetry data — GPS pings, engine hours, fuel levels, fault codes — and the system processing it was struggling to keep up.

The goal: migrate **150,000 machines** to a new platform without losing a single message.

## Designing for Throughput

The first decision was architecture. We were pushing upward of **20,000 messages per minute** during peak hours. A naive "write every message to SQL" approach would have buckled immediately.

The solution was a multi-stage pipeline:

1. **Ingest layer** — Azure Event Hubs acting as a durable buffer
2. **Processing layer** — Java microservices consuming from the event stream, normalising payloads
3. **Storage layer** — time-series data into partitioned Azure SQL tables, enriched state into a document store

The key insight was separating *hot path* (real-time alerts, live map) from *cold path* (analytics, reports). Different SLAs, different optimisations.

## The Migration Strategy

We couldn't just flip a switch. Machines in the field don't care about your deployment schedule.

Our approach was a **shadow period**: the old and new platform ran in parallel for six weeks. Every incoming message was written to both systems. We ran automated comparison jobs nightly to diff the outputs.

This caught three critical bugs:
- Timezone handling for machines in UTC+2 vs UTC+0
- A message deduplication edge case during cellular reconnects
- An off-by-one in fuel percentage parsing (vendor firmware quirk)

## Performance Gains

After optimising the pipeline — connection pooling, batch inserts, smarter indexing — we cut processing latency by **70%**.

The biggest win wasn't clever code; it was rethinking the data model. Instead of storing raw payloads and transforming on read, we normalised at write time. Reads became cheap. The dashboard went from 4-second loads to sub-200ms.

## What I'd Do Differently

**Schema versioning from day one.** We had to retrofit this halfway through and it was painful. Machine firmware updates mean message formats change. Plan for it early.

**Chaos engineering.** We discovered our retry logic had a subtle bug only under network partition — something a properly configured fault injection test would have caught in week one.

The migration completed without incident. 150,000 machines, live, with zero data loss. Worth every late night.
