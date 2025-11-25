export default function Blogs() {
    const blogs = [
        {
            title: "Understanding Contract Law in Indonesia",
            summary:
                "A simple breakdown of contract essentials every business owner must know before signing any agreement.",
            date: "Feb 10, 2025",
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
            link: "#",
        },
        {
            title: "How to Prepare for a Company Merger",
            summary:
                "A strategic 5-step process to ensure your merger or acquisition flows smoothly from start to finish.",
            date: "Jan 28, 2025",
            image: "https://images.unsplash.com/photo-1554469384-e58fac16e23d?auto=format&fit=crop&w=1200&q=80",
            link: "#",
        },
        {
            title: "Your Rights in Employment Termination",
            summary:
                "PHK happens — here’s what Indonesian employees and employers both need to understand legally.",
            date: "Jan 15, 2025",
            image: "https://images.unsplash.com/photo-1521790361543-f645cf042ec4?auto=format&fit=crop&w=1200&q=80",
            link: "#",
        },
    ];

    return (
        <section
            id="blogs"
            className="bg-white py-20 sm:py-24 md:py-28 px-6 sm:px-10 md:px-20 border-t border-zinc-200"
        >
            {/* HEADER */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-orkablack leading-tight mb-4">
                    Latest Legal Insights
                </h2>

                <p className="text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto">
                    Stay informed with legal tips, company law updates, and
                    expert guidance from Orka Legal.
                </p>

                <div className="w-16 sm:w-20 h-1 bg-orkayellow mx-auto mt-6" />
            </div>

            {/* BLOG CARDS */}
            <div className="max-w-6xl mx-auto grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((b, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl shadow-md border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                        {/* Image */}
                        <img
                            src={b.image}
                            alt={b.title}
                            className="w-full h-52 object-cover"
                        />

                        {/* Content */}
                        <div className="p-6">
                            <p className="text-sm text-zinc-500 mb-2">
                                {b.date}
                            </p>
                            <h3 className="text-xl font-semibold text-orkablack mb-3">
                                {b.title}
                            </h3>
                            <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                                {b.summary}
                            </p>

                            <button
                                onClick={() => window.open(b.link, "_blank")}
                                className="text-orkayellow font-semibold hover:underline"
                            >
                                Read More →
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA BUTTON */}
            <div className="mt-16 flex justify-center">
                <button
                    onClick={() => window.open("#", "_blank")}
                    className="bg-orkayellow text-orkablack px-8 py-3 rounded-full font-semibold shadow-md 
                    hover:shadow-lg hover:bg-yellow-400 active:bg-yellow-500 transition-all duration-200"
                >
                    View All Articles
                </button>
            </div>
        </section>
    );
}
