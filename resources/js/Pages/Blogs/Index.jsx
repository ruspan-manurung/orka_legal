import { BLOGS } from "@/data/blogs";
import { Link } from "@inertiajs/react";

export default function BlogIndex() {
    return (
        <div className="px-6 sm:px-10 md:px-20 py-24 max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-10 text-orkablack">
                Legal Articles
            </h1>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {BLOGS.map((b, i) => (
                    <Link
                        key={i}
                        href={`/blog/${b.slug}`}
                        className="bg-white rounded-xl overflow-hidden shadow-md border border-zinc-200 hover:shadow-xl hover:-translate-y-1 transition-all"
                    >
                        <img
                            src={b.image}
                            className="w-full h-52 object-cover"
                        />
                        <div className="p-6">
                            <p className="text-sm text-zinc-500 mb-2">
                                {b.date}
                            </p>
                            <h2 className="text-xl font-semibold mb-3 text-orkablack">
                                {b.title}
                            </h2>
                            <p className="text-zinc-600 text-sm">{b.summary}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
