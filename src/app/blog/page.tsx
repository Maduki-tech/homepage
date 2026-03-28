import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getAllPosts } from "~/lib/blog";

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <main className="dark:bg-page-dark relative min-h-full overflow-y-auto bg-white md:h-full md:overflow-hidden">
            {/* Background glows */}
            <div className="bg-brand/10 dark:bg-brand/15 absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full blur-3xl" />
            <div className="bg-brand/8 dark:bg-brand/10 absolute bottom-0 left-1/3 h-72 w-72 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col gap-4 px-4 py-6 md:h-full md:px-8">
                {/* Header strip */}
                <div className="border-brand/20 bg-brand/5 dark:bg-brand/10 flex items-center justify-between rounded-2xl border px-6 py-4">
                    <div>
                        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                            Writing
                        </h1>
                        <p className="text-brand text-sm">
                            Thoughts on backend, tooling, and the craft of building software
                        </p>
                    </div>
                    <span className="bg-brand/10 text-brand dark:bg-brand/20 rounded-full px-3 py-1 text-xs font-medium">
                        {posts.length} posts
                    </span>
                </div>

                {/* Post grid */}
                <div className="grid grid-cols-1 gap-4 md:min-h-0 md:flex-1 md:grid-cols-3">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group border-brand/20 bg-brand/5 dark:bg-brand/10 hover:border-brand/40 dark:hover:bg-brand/15 flex flex-col overflow-hidden rounded-2xl border transition-all hover:shadow-lg"
                        >
                            {/* Image */}
                            <div className="bg-brand/10 dark:bg-brand/20 relative h-40 w-full overflow-hidden">
                                {post.image ? (
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                ) : (
                                    <div className="bg-brand/20 h-full w-full" />
                                )}
                                {/* Tag overlay */}
                                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                                    {post.tags.slice(0, 2).map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-black/50 rounded-full px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col gap-2 p-5">
                                {/* Meta row */}
                                <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-white/40">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="size-3" />
                                        {new Date(post.date).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="size-3" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h2 className="group-hover:text-brand font-semibold leading-snug text-gray-900 transition-colors dark:text-white">
                                    {post.title}
                                </h2>

                                <p className="flex-1 text-sm leading-relaxed text-gray-500 dark:text-white/55">
                                    {post.description}
                                </p>

                                {/* Read more */}
                                <div className="text-brand mt-1 flex items-center gap-1 text-xs font-medium">
                                    Read more
                                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
