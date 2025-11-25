export default function Footer() {
    return (
        <footer className="bg-orkablack text-white px-6 sm:px-10 md:px-20 py-16 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4 text-sm">
                {/* COMPANY INFO */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <img
                            src="/logo.png"
                            alt="Orka Legal Logo"
                            className="h-8 w-auto"
                        />
                        <h3 className="text-xl font-bold">Orka Legal</h3>
                    </div>

                    <p className="text-zinc-300 leading-relaxed">
                        <span className="font-semibold">Main Office:</span>
                        <br />
                        Equity Tower Lt. 35, SCBD, Jl. Tulodong Atas 2 No. 5,
                        Senayan, Kebayoran Baru, Jakarta Selatan 12190
                    </p>

                    <p className="mt-4 text-zinc-300">
                        <span className="font-semibold">Hubungi Kami:</span>
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
                    <p className="font-semibold text-white mb-3">Navigasi</p>
                    <ul className="space-y-2 text-zinc-300">
                        <li>
                            <a
                                href="#whyorka"
                                className="hover:text-orkayellow transition"
                            >
                                Tentang Kami
                            </a>
                        </li>
                        <li>
                            <a
                                href="#blogs"
                                className="hover:text-orkayellow transition"
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="hover:text-orkayellow transition"
                            >
                                Layanan
                            </a>
                        </li>
                    </ul>

                    <div className="mt-6">
                        <p className="font-semibold text-white mb-2">
                            Media Sosial
                        </p>
                        <div className="flex flex-col gap-2 text-zinc-300">
                            <a
                                href="#"
                                className="hover:text-orkayellow transition"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="#"
                                className="hover:text-orkayellow transition"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>

                {/* ACCREDITATION */}
                <div>
                    <p className="font-semibold text-white mb-3">
                        Legalitas & Registrasi
                    </p>
                    <div className="flex items-center gap-4 mb-4">
                        <img
                            src="/oss.png"
                            alt="OSS"
                            className="h-8 w-auto opacity-70 hover:opacity-100 transition"
                        />
                        <img
                            src="/kemenkumham.png"
                            alt="Kemenkumham"
                            className="h-8 w-auto opacity-70 hover:opacity-100 transition"
                        />
                    </div>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                        Terdaftar resmi di OSS dan Kemenkumham Republik
                        Indonesia.
                    </p>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="max-w-7xl mx-auto mt-12 border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-zinc-400 text-xs">
                <p>© 2025 PT Orka Legal. All rights reserved.</p>
                <p>Made with integrity — Trusted Legal Solutions.</p>
            </div>
        </footer>
    );
}
