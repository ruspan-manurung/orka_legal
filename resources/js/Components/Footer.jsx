import { useLang } from "@/lang/LanguageContext";

export default function Footer() {
    const { lang } = useLang();

    const t = {
        en: {
            contactLabel: "Contact Us:",
            servicesTitle: "Services",
            navTitle: "Navigation",
            socialTitle: "Social Media",

            s1: "Company Establishment",
            s2: "Contract Drafting",
            s3: "Deed Amendment",
            s4: "Legal Retainer",

            n1: "About Us",
            n2: "Blog",
            n3: "Services",

            linkedin: "LinkedIn",
            instagram: "Instagram",

            copyright: "© 2025 PT Orka Legal. All rights reserved.",
            tagline: "Made with integrity — Trusted Legal Solutions.",
        },

        id: {
            contactLabel: "Hubungi Kami:",
            servicesTitle: "Layanan",
            navTitle: "Navigasi",
            socialTitle: "Media Sosial",

            s1: "Pendirian PT",
            s2: "Pembuatan Perjanjian",
            s3: "Perubahan Akta",
            s4: "Retainer Legal",

            n1: "Tentang Kami",
            n2: "Blog",
            n3: "Layanan",

            linkedin: "LinkedIn",
            instagram: "Instagram",

            copyright: "© 2025 PT Orka Legal. Seluruh hak cipta dilindungi.",
            tagline: "Dibuat dengan integritas — Solusi Hukum Terpercaya.",
        },
    }[lang];

    return (
        <footer className="bg-orkablack text-white px-6 sm:px-10 md:px-20 py-16 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4 text-sm">
                {/* COMPANY INFO */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="bg-white p-2 rounded-md shadow-sm">
                            <img
                                src="/logo.png"
                                alt="Orka Legal Logo"
                                className="h-8 w-auto"
                            />
                        </div>
                    </div>

                    <p className="mt-4 text-zinc-300">
                        <span className="font-semibold">{t.contactLabel}</span>
                        <br />
                        <a
                            href="tel:+628118003088"
                            className="text-orkayellow hover:text-yellow-400 transition"
                        >
                            +62 811 8003 088
                        </a>
                        <br />
                        <a
                            href="mailto:orkalegal.id@gmail.com"
                            className="text-orkayellow hover:text-yellow-400 transition"
                        >
                            orkalegal.id@gmail.com
                        </a>
                    </p>
                </div>

                {/* SERVICES */}
                <div>
                    <p className="font-semibold text-white mb-3">
                        {t.servicesTitle}
                    </p>
                    <ul className="space-y-2 text-zinc-300">
                        <li>{t.s1}</li>
                        <li>{t.s2}</li>
                        <li>{t.s3}</li>
                        <li>{t.s4}</li>
                    </ul>
                </div>

                {/* NAVIGATION */}
                <div>
                    <p className="font-semibold text-white mb-3">
                        {t.navTitle}
                    </p>
                    <ul className="space-y-2 text-zinc-300">
                        <li>
                            <a
                                href="#whyorka"
                                className="hover:text-orkayellow transition"
                            >
                                {t.n1}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#blogs"
                                className="hover:text-orkayellow transition"
                            >
                                {t.n2}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="hover:text-orkayellow transition"
                            >
                                {t.n3}
                            </a>
                        </li>
                    </ul>

                    <div className="mt-6">
                        <p className="font-semibold text-white mb-2">
                            {t.socialTitle}
                        </p>
                        <div className="flex flex-col gap-2 text-zinc-300">
                            <a
                                href="#"
                                className="hover:text-orkayellow transition"
                            >
                                {t.linkedin}
                            </a>
                            <a
                                href="#"
                                className="hover:text-orkayellow transition"
                            >
                                {t.instagram}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="max-w-7xl mx-auto mt-12 border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-zinc-400 text-xs">
                <p>{t.copyright}</p>
                <p>{t.tagline}</p>
            </div>
        </footer>
    );
}
