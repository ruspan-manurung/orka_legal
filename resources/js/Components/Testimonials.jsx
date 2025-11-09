export default function Testimonials() {
    const reviews = [
        {
            text: "Orka Legal made me feel understood and protected. Their team handled my case with diligence and empathy.",
            name: "Ruspan Manurung",
        },
        {
            text: "They managed our corporate restructuring smoothly. Professional, efficient, and transparent.",
            name: "Jonathan Lee",
        },
        {
            text: "Highly responsive and legally sharp. The best law firm experience I’ve had.",
            name: "Amira Putri",
        },
    ];

    return (
        <section
            id="testimonials"
            className="bg-white py-20 sm:py-24 md:py-28 px-6 sm:px-10 md:px-20 border-t border-zinc-200"
        >
            {/* HEADER */}
            <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-orkablack leading-tight mb-4">
                    What Our Clients Say About Us
                </h2>
                <p className="text-orkayellow text-sm sm:text-base font-semibold tracking-wide">
                    Read our 5-Star Reviews
                </p>
                <div className="w-16 sm:w-20 h-1 bg-orkayellow mx-auto mt-6" />
            </div>

            {/* TESTIMONIAL CARDS */}
            <div className="max-w-6xl mx-auto grid gap-8 sm:gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {reviews.map((r) => (
                    <div
                        key={r.name}
                        className="rounded-2xl p-6 sm:p-8 text-center shadow-md border border-zinc-100
                       bg-gradient-to-br from-orkablack via-[#1a1a1a] to-black 
                       hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                    >
                        <p className="text-gray-200 italic leading-relaxed mb-6 text-sm sm:text-base">
                            “{r.text}”
                        </p>
                        <p className="font-semibold text-orkayellow text-sm sm:text-base">
                            – {r.name}
                        </p>
                    </div>
                ))}
            </div>

            {/* CTA BUTTON */}
            <div className="mt-12 sm:mt-16 flex justify-center">
                <button
                    onClick={() =>
                        window.open(
                            "https://wa.me/6281275001230?text=Hello%20Orka%20Legal,%20I%20would%20like%20to%20request%20a%20consultation.",
                            "_blank"
                        )
                    }
                    className="bg-orkayellow text-orkablack px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold shadow-md 
                     hover:shadow-lg hover:bg-yellow-400 active:bg-yellow-500 transition-all duration-200 text-sm sm:text-base"
                >
                    Get Yours Now
                </button>
            </div>
        </section>
    );
}
