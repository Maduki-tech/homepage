import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getAllPosts, getPost } from "~/lib/blog";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) return {};
    return { title: post.title, description: post.description };
}

export default async function PostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) notFound();

    return (
        <main className="dark:bg-page-dark min-h-full overflow-y-auto bg-white">
            <div className="mx-auto max-w-2xl px-4 py-8 md:px-6">
                {/* Back link */}
                <Link
                    href="/blog"
                    className="hover:text-brand mb-6 inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors dark:text-white/40"
                >
                    <ArrowLeft className="size-4" />
                    All posts
                </Link>

                {/* Title + meta */}
                <div className="mb-6">
                    <div className="mb-3 flex flex-wrap gap-1.5">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-500 dark:bg-white/10 dark:text-white/50"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-2xl font-bold leading-snug text-gray-900 dark:text-white">
                        {post.title}
                    </h1>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-400 dark:text-white/40">
                        <span className="flex items-center gap-1">
                            <Calendar className="size-3" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="size-3" />
                            {post.readTime}
                        </span>
                    </div>
                </div>

                {/* Cover image */}
                {post.image && (
                    <div className="relative mb-8 h-56 w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 md:h-72">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 672px"
                            priority
                        />
                    </div>
                )}

                {/* Article body */}
                <div
                    className="prose prose-sm dark:prose-invert prose-headings:font-semibold prose-headings:text-gray-900 prose-a:text-brand prose-strong:text-gray-900 dark:prose-headings:text-white dark:prose-strong:text-white max-w-none pb-16"
                    dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />
            </div>
        </main>
    );
}
