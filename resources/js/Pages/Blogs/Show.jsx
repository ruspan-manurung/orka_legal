import { BLOGS } from "@/data/blogs";
import { Link, usePage } from "@inertiajs/react";

export default function BlogShow({ slug }) {
    const blog = BLOGS.find((b) => b.slug === slug);

    if (!blog) {
        return (
            <div className="px-6 py-20 text-center text-zinc-600">
                Article not found.
            </div>
        );
    }

    return (
        <div className="px-6 sm:px-10 md:px-20 py-24 max-w-4xl mx-auto">
            <Link
                href="/blogs"
                className="text-orkayellow hover:underline text-sm"
            >
                ← Back to Articles
            </Link>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold my-6 text-orkablack">
                {blog.title}
            </h1>

            <p className="text-sm text-zinc-500 mb-6">{blog.date}</p>

            <img
                src={blog.image}
                className="rounded-xl w-full mb-10 shadow-md"
            />

            <article
                className="prose prose-zinc max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            ></article>
        </div>
    );
}
