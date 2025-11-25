import { useEffect } from "react";

export default function Hero() {
    // Smooth scroll to Services section
    const scrollToServices = () => {
        const el = document.getElementById("services");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        document.body.style.overflow = "";
    }, []);

    return (
        <section className="relative flex flex-col justify-center px-6 sm:px-10 md:px-20 py-20 md:py-28 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orkablack via-[#1a1a1a] to-black opacity-95 -z-10"></div>

            {/* Hero Content */}
            <div className="text-white max-w-3xl">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-tight mb-6">
                    Strength In Law — Trust In Integrity —{" "}
                    <span className="text-orkayellow">Your</span> Partner in
                    Every Legal Step
                </h1>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-10">
                    Kekuatan dalam Hukum. Kepercayaan dalam Integritas. Mitra
                    Anda di Setiap Langkah Hukum.
                </p>

                <div className="flex flex-wrap gap-4 sm:gap-6">
                    {/* Free Consultation (WhatsApp Link) */}
                    <button
                        onClick={() =>
                            window.open(
                                "https://wa.me/6281275001230?text=Hello%20Orka%20Legal,%20I%20would%20like%20to%20request%20a%20consultation.",
                                "_blank"
                            )
                        }
                        className="bg-orkayellow text-orkablack px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold tracking-wide shadow-md 
                                   hover:bg-[#c09d32] active:bg-[#b38f2e] transition-all duration-200 w-full sm:w-auto text-center"
                    >
                        Free Consultation
                    </button>

                    {/* Scroll to Services Button */}
                    <button
                        onClick={scrollToServices}
                        className="border border-orkayellow text-orkayellow px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold
                                   hover:bg-orkayellow hover:text-orkablack active:bg-[#c09d32] transition-all duration-200 w-full sm:w-auto text-center"
                    >
                        Our Services
                    </button>
                </div>
            </div>
        </section>
    );
}
