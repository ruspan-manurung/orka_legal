export default function WhyOrka() {
    return (
        <section
            id="whyorka"
            className="bg-white py-20 sm:py-24 md:py-28 px-6 sm:px-10 md:px-20 border-t border-zinc-100"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* LEFT SIDE */}
                <div className="text-center md:text-left">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-5 text-orkablack leading-tight">
                        Why Choose Orka Legal?
                    </h2>

                    <p className="text-orkayellow text-lg sm:text-xl md:text-2xl font-semibold mb-5">
                        Because your case deserves commitment.
                    </p>

                    <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                        We combine local expertise with international standards
                        to deliver seamless legal solutions that protect your
                        interests and elevate your confidence in every
                        transaction, negotiation, or dispute.
                    </p>
                </div>

                {/* RIGHT SIDE (PROFILE CARD) */}
                <div className="bg-orkablack text-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 w-fit max-w-md mx-auto md:max-w-none">
                    <img
                        src="/Tasha.png"
                        alt="Senior Partner"
                        className="w-fit h-64 sm:h-80 md:h-[360px] object-cover"
                    />
                    <div className="p-4 sm:p-2 text-center md:text-center">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-1">
                            Kira Natasha
                        </h3>
                        <p className="text-zinc-400 text-xs sm:text-sm tracking-wide uppercase">
                            Senior Officer
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
