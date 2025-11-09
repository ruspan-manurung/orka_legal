export default function Legacy() {
    return (
        <section
            id="legacy"
            className="bg-white py-20 sm:py-24 md:py-28 px-6 sm:px-10 md:px-20 border-t border-zinc-100"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* LEFT: TEXT CONTENT */}
                <div className="order-1 md:order-2 text-center md:text-left">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 text-orkablack leading-tight">
                        Our Legacy
                    </h2>
                    <div className="w-16 sm:w-20 h-1 bg-orkayellow mx-auto md:mx-0 mb-8 sm:mb-10" />

                    <div className="grid grid-cols-2 gap-8 sm:gap-10 justify-items-center md:justify-items-start">
                        {[
                            { label: "Cases Solved", value: "450+" },
                            { label: "Corporate Clients", value: "120+" },
                            { label: "Court Wins", value: "300+" },
                            { label: "Years Combined", value: "25+" },
                        ].map((item, i) => (
                            <div key={i}>
                                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-orkablack">
                                    {item.value}
                                </p>
                                <p className="text-sm sm:text-base text-zinc-600">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: IMAGE PANEL */}
                <div className="order-2 md:order-1 bg-orkablack text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="grid gap-6 sm:gap-8">
                        <img
                            src="https://images.unsplash.com/photo-1530026405186-ed1f139313f9?auto=format&fit=crop&w=900&q=80"
                            alt="Courtroom"
                            className="rounded-lg w-full h-48 sm:h-56 md:h-64 object-cover transform hover:scale-[1.02] transition-transform duration-300"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-ec72b9f07e1a?auto=format&fit=crop&w=900&q=80"
                            alt="Law books"
                            className="rounded-lg w-full h-48 sm:h-56 md:h-64 object-cover transform hover:scale-[1.02] transition-transform duration-300 ml-0 md:ml-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
