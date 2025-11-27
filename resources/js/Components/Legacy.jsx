import { useLang } from "@/lang/LanguageContext";

export default function Legacy() {
    const { lang } = useLang();

    const t = {
        en: {
            title: "Professional Integrity",
            paragraph: `At Orka Legal, credibility isn’t measured by numbers — it's built through consistency, ethics, and unwavering dedication to our clients.

Our foundations come from real legal work, handled with precision, confidentiality, and professionalism. You don’t need decades of history to deliver excellence. You need integrity — and we have it.`,
        },
        id: {
            title: "Integritas Profesional",
            paragraph: `Di Orka Legal, kredibilitas bukan diukur dari angka, tetapi dibangun melalui konsistensi, etika, dan dedikasi yang teguh kepada setiap klien.

Dasar kami berasal dari pekerjaan hukum yang nyata, dikerjakan dengan ketelitian, kerahasiaan, dan profesionalisme. Anda tidak perlu puluhan tahun sejarah untuk memberikan layanan terbaik. Yang Anda butuhkan adalah integritas — dan kami memilikinya.`,
        },
    }[lang];

    const images = [
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=1200&auto=format&fit=crop",
        // keeping your second image commented out, same as original
        // "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad4?q=80&w=1200&auto=format&fit=crop",
    ];

    return (
        <section
            id="legacy"
            className="bg-white py-20 sm:py-24 md:py-28 px-6 sm:px-10 md:px-20 border-t border-zinc-100"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* TEXT */}
                <div className="text-center md:text-left">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 text-orkablack leading-tight">
                        {t.title}
                    </h2>

                    <div className="w-16 sm:w-20 h-1 bg-orkayellow mx-auto md:mx-0 mb-8 sm:mb-10" />

                    <p className="text-zinc-700 leading-relaxed text-base sm:text-lg max-w-lg whitespace-pre-line">
                        {t.paragraph}
                    </p>
                </div>

                {/* IMAGE(S) */}
                <div className="grid gap-6 sm:gap-8">
                    <img
                        src={images[0]}
                        className="rounded-xl w-full h-56 sm:h-64 md:h-72 object-cover shadow-md hover:scale-[1.02] transition-all duration-300"
                        alt="Legal office environment"
                    />
                </div>
            </div>
        </section>
    );
}
