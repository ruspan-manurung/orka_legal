import { useEffect } from "react";

export default function Hero() {
    const scrollToServices = () => {
        const el = document.getElementById("services");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        document.body.style.overflow = "";
    }, []);

    return (
        <section className="relative flex flex-col justify-center px-6 sm:px-10 md:px-20 py-24 md:py-32 overflow-hidden">
            {/* Background Gradient Motion */}
            <div className="absolute inset-0 bg-gradient-to-br from-orkablack via-[#151515] to-black opacity-[0.97] -z-10 animate-gradient-slow"></div>

            {/* Content */}
            <div className="text-white max-w-4xl animate-fade-in">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-tight mb-6 animate-slide-up">
                    Strength In Law — Trust In Integrity —{" "}
                    <span className="text-orkayellow">Your</span> Partner in
                    Every Legal Step
                </h1>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-12 animate-slide-up delay-200">
                    Kekuatan dalam Hukum. Kepercayaan dalam Integritas. Mitra
                    Anda di Setiap Langkah Hukum.
                </p>

                <div className="flex flex-wrap gap-4 sm:gap-6 animate-slide-up delay-300">
                    {/* WA Button */}
                    <button
                        onClick={() =>
                            window.open(
                                "https://wa.me/628118003088?text=Hello%20Orka%20Legal,%20I%20would%20like%20to%20request%20a%20consultation.",
                                "_blank"
                            )
                        }
                        className="bg-orkayellow text-orkablack px-7 sm:px-9 py-3 rounded-lg font-semibold tracking-wide
                                   shadow-md hover:bg-[#c09d32] hover:shadow-lg 
                                   active:bg-[#b38f2e] transition-all duration-200 
                                   w-full sm:w-auto text-center"
                    >
                        Free Consultation
                    </button>

                    {/* Scroll Button */}
                    <button
                        onClick={scrollToServices}
                        className="border border-orkayellow text-orkayellow px-7 sm:px-9 py-3 rounded-lg font-semibold
                                   hover:bg-orkayellow hover:text-orkablack hover:shadow-lg 
                                   active:bg-[#c09d32] transition-all duration-200
                                   w-full sm:w-auto text-center"
                    >
                        Our Services
                    </button>
                </div>
            </div>
        </section>
    );
}
