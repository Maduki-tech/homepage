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
        <main className="dark:bg-page-dark relative h-full overflow-hidden bg-white">
            {/* Background glows */}
            <div className="bg-brand/10 dark:bg-brand/15 absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full blur-3xl" />

            <div className="relative z-10 flex h-full flex-col gap-4 px-4 py-6 md:px-8">
                {/* Back + meta header */}
                <div className="border-brand/20 bg-brand/5 dark:bg-brand/10 flex flex-col gap-3 rounded-2xl border px-6 py-4 md:flex-row md:items-center md:gap-6">
                    <Link
                        href="/blog"
                        className="hover:text-brand flex items-center gap-1.5 text-sm text-gray-400 transition-colors dark:text-white/40"
                    >
                        <ArrowLeft className="size-4" />
                        All posts
                    </Link>
                    <div className="md:border-brand/20 flex-1 md:border-l md:pl-6">
                        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                            {post.title}
                        </h1>
                        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-gray-400 dark:text-white/40">
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
                            <div className="flex flex-wrap gap-1.5">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-brand/10 text-brand dark:bg-brand/20 rounded-full px-2 py-0.5 text-[10px] font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main content area */}
                <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 md:grid-cols-5">
                    {/* Cover image */}
                    {post.image && (
                        <div className="border-brand/20 bg-brand/5 dark:bg-brand/10 relative overflow-hidden rounded-2xl border md:col-span-2">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 40vw"
                                priority
                            />
                        </div>
                    )}

                    {/* Article body */}
                    <div
                        className={`border-brand/20 bg-brand/5 dark:bg-brand/10 overflow-y-auto rounded-2xl border p-6 ${post.image ? "md:col-span-3" : "md:col-span-5"}`}
                    >
                        <div
                            className="prose prose-sm dark:prose-invert prose-headings:text-gray-900 prose-headings:font-semibold prose-a:text-brand prose-code:text-brand prose-strong:text-gray-900 dark:prose-headings:text-white dark:prose-strong:text-white max-w-none"
                            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
