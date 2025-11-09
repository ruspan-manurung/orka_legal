export default function Footer() {
    return (
        <footer className="bg-orkablack text-white px-6 sm:px-10 md:px-20 py-16 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4 text-sm">
                {/* COMPANY INFO */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <img
                            src="/logo.png" // place your logo in /public folder
                            alt="Orka Legal Logo"
                            className="h-8 w-auto"
                        />
                        <h3 className="text-xl font-bold">Orka Legal</h3>
                    </div>
                    <p className="text-zinc-300 leading-relaxed">
                        <span className="font-semibold">Main Office:</span>{" "}
                        <br />
                        Equity Tower Lt. 35, Sudirman Central Business District,
                        Jl. Tulodong Atas 2 No. 5, Senayan, Kebayoran Baru,
                        Jakarta Selatan, Indonesia 12190
                    </p>
                    <p className="mt-4 text-zinc-300">
                        <span className="font-semibold">Hubungi Kami:</span>{" "}
                        <br />
                        <a
                            href="tel:+628118003088"
                            className="text-orkayellow hover:text-yellow-400 transition"
                        >
                            +62 811 8003 088
                        </a>
                    </p>
                </div>

                {/* SERVICES */}
                <div>
                    <p className="font-semibold text-white mb-3">Layanan</p>
                    <ul className="space-y-2 text-zinc-300">
                        <li>Pendirian PT</li>
                        <li>Pembuatan Perjanjian</li>
                        <li>Perubahan Akta</li>
                        <li>Retainer Legal</li>
                    </ul>
                </div>

                {/* LINKS */}
                <div>
                    <p className="font-semibold text-white mb-3">Lainnya</p>
                    <ul className="space-y-2 text-zinc-300">
                        <li>
                            <a
                                href="#whyorka"
                                className="hover:text-orkayellow transition"
                            >
                                Tentang
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="hover:text-orkayellow transition"
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-orkayellow transition"
                            >
                                Kontak
                            </a>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <p className="font-semibold text-white mb-2">
                            Media Sosial
                        </p>
                        <div className="flex gap-4 text-zinc-300">
                            <a
                                href="#"
                                className="hover:text-orkayellow transition"
                            >
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </a>
                            <a
                                href="#"
                                className="hover:text-orkayellow transition"
                            >
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                        </div>
                    </div>
                </div>

                {/* ACCREDITATION / SECURITY */}
                <div>
                    <p className="font-semibold text-white mb-3">
                        Keamanan & Privasi
                    </p>
                    <div className="flex items-center gap-4 mb-4">
                        <img
                            src="/oss.png"
                            alt="OSS Logo"
                            className="h-8 w-auto opacity-70 hover:opacity-100 transition"
                        />
                        <img
                            src="/kemenkumham.png"
                            alt="Kemenkumham Logo"
                            className="h-8 w-auto opacity-70 hover:opacity-100 transition"
                        />
                    </div>
                    <p className="text-zinc-400 text-xs">
                        Terdaftar resmi di OSS dan Kemenkumham Indonesia.
                    </p>
                </div>
            </div>

            {/* COPYRIGHT + FLOATING BUTTON */}
            <div className="max-w-7xl mx-auto mt-12 border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-zinc-400 text-xs">
                <p>© 2025 PT Orka Legal. All rights reserved.</p>
                <p>Made with integrity — Trusted Legal Solutions</p>
            </div>

            {/* WHATSAPP FLOATING BUTTON */}
            {/* <a
                href="https://wa.me/628118003088?text=Halo%20Orka%20Legal,%20saya%20ingin%20konsultasi."
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-[#25D366] text-white font-semibold px-5 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-[#1eb255] transition"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                >
                    <path d="M12 0C5.372 0 0 5.373 0 12c0 2.114.55 4.187 1.593 6.016L0 24l6.191-1.576A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.93 9.93 0 0 1-5.058-1.378l-.36-.215-3.677.936.982-3.578-.236-.366A9.96 9.96 0 1 1 22 12c0 5.514-4.486 10-10 10zm4.805-7.396c-.264-.132-1.56-.772-1.803-.86-.243-.088-.42-.132-.597.132s-.683.86-.837 1.037c-.155.176-.308.198-.572.066-.264-.132-1.113-.41-2.12-1.31-.783-.698-1.312-1.56-1.465-1.823-.155-.265-.017-.407.116-.539.12-.12.264-.31.396-.464.132-.155.176-.265.264-.44.088-.176.044-.33-.022-.462-.066-.132-.597-1.436-.817-1.967-.215-.515-.435-.445-.597-.454l-.51-.009c-.176 0-.462.066-.705.33-.243.264-.925.905-.925 2.206 0 1.301.947 2.556 1.08 2.732.132.176 1.863 2.845 4.513 3.986.631.272 1.123.434 1.506.554.633.201 1.207.173 1.661.105.507-.075 1.56-.636 1.782-1.25.22-.617.22-1.145.154-1.25-.065-.105-.242-.17-.506-.302z" />
                </svg>
                Konsultasi Gratis
            </a> */}
        </footer>
    );
}
