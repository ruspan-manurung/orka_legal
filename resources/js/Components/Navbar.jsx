import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lang/LanguageContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { lang, toggleLang } = useLang();

    const t = {
        en: {
            home: "Home",
            about: "About",
            services: "Services",
            blogs: "Blogs",
            contact: "Contact Us",
            wa: `Hello Orka Legal,

I would like to request a consultation regarding your legal services.
Please advise on the next steps and available schedule.

Thank you.`,
        },
        id: {
            home: "Beranda",
            about: "Tentang",
            services: "Layanan",
            blogs: "Blog",
            contact: "Hubungi Kami",
            wa: `Halo Orka Legal,

Saya ingin meminta konsultasi terkait layanan hukum yang Anda sediakan.
Mohon informasikan langkah selanjutnya dan jadwal yang tersedia.

Terima kasih.`,
        },
    }[lang];

    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (!el) return;

        setIsOpen(false);

        window.scrollTo({
            top: el.offsetTop - 80,
            behavior: "smooth",
        });
    };

    const handleWhatsApp = () => {
        window.open(
            "https://wa.me/628118003088?text=" + encodeURIComponent(t.wa),
            "_blank"
        );
    };

    // Safe wrapper so any toggles (desktop or mobile) also close the mobile menu
    const handleToggleLang = () => {
        toggleLang();
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-zinc-200 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* LOGO */}
                <button
                    onClick={() => handleScroll("home")}
                    className="flex items-center gap-2"
                >
                    <img src="/logo.png" alt="Orka Legal Logo" className="h-8" />
                </button>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-700">
                    <button onClick={() => handleScroll("home")} className="hover:text-orkayellow">
                        {t.home}
                    </button>

                    <button onClick={() => handleScroll("whyorka")} className="hover:text-orkayellow">
                        {t.about}
                    </button>

                    <button onClick={() => handleScroll("services")} className="hover:text-orkayellow">
                        {t.services}
                    </button>

                    {/* <button onClick={() => handleScroll("blogs")} className="hover:text-orkayellow">
                        {t.blogs}
                    </button> */}

                    {/* Language Toggle (desktop) */}
                    <button
                        onClick={handleToggleLang}
                        className="px-3 py-1 border border-zinc-400 rounded-md text-xs hover:bg-zinc-100 transition"
                        aria-label="Toggle language"
                    >
                        {lang === "en" ? "ID" : "EN"}
                    </button>

                    <button
                        onClick={handleWhatsApp}
                        className="bg-orkayellow text-orkablack px-5 py-2 rounded-full font-semibold shadow-md 
                                   hover:shadow-lg hover:bg-yellow-400 transition-all duration-200"
                    >
                        {t.contact}
                    </button>
                </div>

                {/* MOBILE MENU TOGGLE */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-orkablack" aria-label="Toggle menu">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`md:hidden absolute left-0 right-0 top-full overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="bg-white/95 backdrop-blur-lg border-t border-zinc-200 mx-4 mt-2 rounded-2xl shadow-lg px-6 py-5 space-y-4">
                    <button onClick={() => handleScroll("home")} className="block text-left hover:text-orkayellow">
                        {t.home}
                    </button>

                    <button onClick={() => handleScroll("whyorka")} className="block text-left hover:text-orkayellow">
                        {t.about}
                    </button>

                    <button onClick={() => handleScroll("services")} className="block text-left hover:text-orkayellow">
                        {t.services}
                    </button>

                    <button onClick={() => handleScroll("blogs")} className="block text-left hover:text-orkayellow">
                        {t.blogs}
                    </button>

                    {/* Language toggle (mobile) */}
                    <button
                        onClick={() => {
                            handleToggleLang();
                        }}
                        className="block text-left hover:text-orkayellow"
                    >
                        {lang === "en" ? "Bahasa Indonesia" : "English"}
                    </button>

                    <button
                        onClick={() => {
                            setIsOpen(false);
                            handleWhatsApp();
                        }}
                        className="w-fit bg-orkayellow text-orkablack px-4 py-2 rounded-full font-medium shadow-sm 
                                   hover:bg-yellow-400 active:bg-yellow-500 transition-all"
                    >
                        {t.contact}
                    </button>
                </div>
            </div>
        </nav>
    );
}
