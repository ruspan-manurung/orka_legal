import { useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleWhatsApp = () => {
        window.open(
            "https://wa.me/6281275001230?text=Hello%20Orka%20Legal,%20I%20would%20like%20to%20request%20a%20consultation.",
            "_blank"
        );
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-zinc-200 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* LOGO */}
                <a href="/" className="flex items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="Orka Legal Logo"
                        className="h-8 transition-all duration-200"
                    />
                </a>

                {/* DESKTOP NAVIGATION */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-700">
                    <ul className="flex gap-8">
                        <li>
                            <a
                                href="#home"
                                className="hover:text-orkayellow transition"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#whyorka"
                                className="hover:text-orkayellow transition"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="hover:text-orkayellow transition"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#partners"
                                className="hover:text-orkayellow transition"
                            >
                                Partners
                            </a>
                        </li>
                        <li>
                            <a
                                href="#testimonials"
                                className="hover:text-orkayellow transition"
                            >
                                Testimonials
                            </a>
                        </li>
                    </ul>

                    {/* CTA BUTTON (DESKTOP) */}
                    <button
                        onClick={handleWhatsApp}
                        className="bg-orkayellow text-orkablack px-5 py-2 rounded-full font-semibold shadow-md 
                       hover:shadow-lg hover:bg-yellow-400 transition-all duration-200"
                    >
                        Contact Us
                    </button>
                </div>

                {/* MOBILE MENU TOGGLE */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-orkablack focus:outline-none"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`md:hidden absolute left-0 right-0 top-full overflow-hidden transform transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "max-h-96 opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-2"
                }`}
            >
                <div className="bg-white/95 backdrop-blur-lg border-t border-zinc-200 mx-4 mt-2 rounded-2xl shadow-lg px-6 py-5 space-y-4">
                    <ul className="flex flex-col gap-4 text-zinc-700 text-sm font-medium">
                        <li>
                            <a
                                href="#home"
                                className="hover:text-orkayellow transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#whyorka"
                                className="hover:text-orkayellow transition"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="hover:text-orkayellow transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#partners"
                                className="hover:text-orkayellow transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Partners
                            </a>
                        </li>
                        <li>
                            <a
                                href="#testimonials"
                                className="hover:text-orkayellow transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Testimonials
                            </a>
                        </li>
                    </ul>

                    {/* MOBILE CTA BUTTON */}
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            handleWhatsApp();
                        }}
                        className="w-fit bg-orkayellow text-orkablack px-4 py-2 rounded-full font-medium shadow-sm 
                       hover:bg-yellow-400 active:bg-yellow-500 transition-all duration-200 block"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </nav>
    );
}
