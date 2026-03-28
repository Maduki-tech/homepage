import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  readTime: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

const postsDir = path.join(process.cwd(), "src/content/blog");

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        description: data.description as string,
        image: (data.image as string) ?? "",
        tags: (data.tags as string[]) ?? [],
        readTime: (data.readTime as string) ?? "5 min read",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const processed = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: { dark: "github-dark-dimmed", light: "github-light" },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(content);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: data.description as string,
    image: (data.image as string) ?? "",
    tags: (data.tags as string[]) ?? [],
    readTime: (data.readTime as string) ?? "5 min read",
    contentHtml: processed.toString(),
  };
}
