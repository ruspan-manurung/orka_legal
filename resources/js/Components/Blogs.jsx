import { useLang } from "@/lang/LanguageContext";

export default function Blogs() {
    const { lang } = useLang();

    const content = {
        en: {
            header: "Latest Legal Insights",
            sub: "Stay informed with legal updates, case insights, and expert opinions from the Orka Legal team.",
            readMore: "Read More →",
            viewAll: "View All Articles",
            blogs: [
                {
                    title: "Understanding Contract Law in Indonesia",
                    summary:
                        "A simple breakdown of contract essentials every business owner must know before signing any agreement.",
                    date: "Feb 10, 2025",
                    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
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
            ],
        },

        id: {
            header: "Wawasan Hukum Terbaru",
            sub: "Tetap terinformasi dengan pembaruan hukum, wawasan kasus, dan opini dari tim Orka Legal.",
            readMore: "Baca Selengkapnya →",
            viewAll: "Lihat Semua Artikel",
            blogs: [
                {
                    title: "Memahami Hukum Kontrak di Indonesia",
                    summary:
                        "Penjelasan sederhana tentang hal-hal penting dalam kontrak yang perlu dipahami pemilik bisnis sebelum menandatangani perjanjian apa pun.",
                    date: "10 Feb 2025",
                    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
                    link: "#",
                },
                {
                    title: "Hak Anda dalam Pemutusan Hubungan Kerja (PHK)",
                    summary:
                        "PHK bisa terjadi. Berikut penjelasan hukum yang perlu dipahami oleh karyawan dan pemberi kerja di Indonesia.",
                    date: "15 Jan 2025",
                    image: "https://images.unsplash.com/photo-1521790361543-f645cf042ec4?auto=format&fit=crop&w=1200&q=80",
                    link: "#",
                },
            ],
        },
    };

    const t = content[lang];

    return (
        <section
            id="blogs"
            className="bg-white py-20 sm:py-24 md:py-28 px-6 sm:px-10 md:px-20 border-t border-zinc-200"
        >
            {/* HEADER */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-orkablack leading-tight mb-4">
                    {t.header}
                </h2>

                <p className="text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto">
                    {t.sub}
                </p>

                <div className="w-16 sm:w-20 h-1 bg-orkayellow mx-auto mt-6" />
            </div>

            {/* BLOG CARDS */}
            <div className="max-w-7xl mx-auto grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
                {t.blogs.map((b, i) => (
                    <div
                        key={i}
                        onClick={() => window.open(b.link, "_blank")}
                        className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md border border-zinc-100 
                                   hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={b.image}
                                alt={b.title}
                                className="w-full h-56 object-cover group-hover:scale-105 transition-all duration-500"
                            />
                        </div>

                        <div className="p-6">
                            <p className="text-sm text-zinc-500 mb-2">
                                {b.date}
                            </p>

                            <h3 className="text-xl font-semibold text-orkablack mb-3 group-hover:text-orkayellow transition-colors">
                                {b.title}
                            </h3>

                            <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                                {b.summary}
                            </p>

                            <span className="text-orkayellow font-semibold group-hover:underline">
                                {t.readMore}
                            </span>
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
                    {t.viewAll}
                </button>
            </div>
        </section>
    );
}
