import { useState, useEffect, useCallback } from "react";
import { useLang } from "@/lang/LanguageContext";

import {
    BriefcaseIcon,
    ScaleIcon,
    BanknoteIcon,
    HeartHandshakeIcon,
    UsersIcon,
    FileCheck2Icon,
    InfinityIcon,
} from "lucide-react";

// English version
const SERVICES_EN = [
    {
        title: "Corporate & Business Law",
        icon: <BriefcaseIcon className="w-8 h-8 text-orkayellow" />,
        details: [
            "Contract negotiation",
            "Contract Drafting (PPJB, etc.)",
            "PT, Firma, CV, Koperasi, Yayasan establishment",
            "Mergers & Acquisition",
            "Company Compliance",
            "Deed Amendments",
            "Shares Sale and Purchase",
            "Legal Due Diligence",
        ],
    },
    {
        title: "Litigation & Dispute Resolution",
        icon: <ScaleIcon className="w-8 h-8 text-orkayellow" />,
        details: ["General Litigation", "Arbitration", "Small Claim Court"],
    },
    {
        title: "Tax & Regulatory",
        icon: <BanknoteIcon className="w-8 h-8 text-orkayellow" />,
        details: [
            "Pelaporan",
            "NPWP",
            "Document Review",
            "Compliance Advisory",
        ],
    },
    {
        title: "Family Law",
        icon: <HeartHandshakeIcon className="w-8 h-8 text-orkayellow" />,
        details: [
            "Divorce",
            "Prenup & Post-nup agreements",
            "Adoption",
            "Child birth certificate (foreign parents)",
            "Inheritance",
        ],
    },
    {
        title: "Manpower / Employment Law",
        icon: <UsersIcon className="w-8 h-8 text-orkayellow" />,
        details: [
            "PKWTT",
            "PKWT",
            "Freelance Contracts",
            "Outsourcing Agreements",
            "PHK Letter",
            "Warning Letters (SP)",
            "Company Regulation (PP)",
            "Company Liquidation",
        ],
    },
    {
        title: "Electric Vehicle (EV) Regulatory",
        icon: <FileCheck2Icon className="w-8 h-8 text-orkayellow" />,
        details: [
            "Compliance Consultation",
            "Contract Drafting",
            "Contract Negotiation",
            "NIB",
            "Sertifikat Standard",
            "PJP",
            "PBG",
            "Halal Certification",
            "Construction Licensing",
        ],
    },
    {
        title: "Legal Retainer",
        icon: <InfinityIcon className="w-8 h-8 text-orkayellow" />,
        details: [
            "Monthly Advisory",
            "Priority Consultation",
            "Document Review",
            "Corporate Monitoring",
        ],
    },
];

// Indonesian version
const SERVICES_ID = [
    {
        title: "Hukum Korporasi & Bisnis",
        icon: <BriefcaseIcon className="w-8 h-8 text-orkayellow" />,
        details: [
            "Negosiasi kontrak",
            "Pembuatan Kontrak (PPJB, dll.)",
            "Pendirian PT, Firma, CV, Koperasi, Yayasan",
            "Merger & Akuisisi",
            "Kepatuhan Perusahaan",
            "Perubahan Akta",
            "Jual Beli Saham",
            "Legal Due Diligence",
        ],
    },
    {
        title: "Litigasi & Penyelesaian Sengketa",
        icon: <ScaleIcon className="w-8 h-8 text-orkayellow" />,
        details: ["Litigasi Umum", "Arbitrase", "Small Claim Court"],
    },
    {
        title: "Perpajakan & Regulasi",
        icon: <BanknoteIcon className="w-8 h-8 text-orkayellow" />,
        details: [
            "Pelaporan",
            "NPWP",
            "Review Dokumen",
            "Konsultasi Kepatuhan",
        ],
    },
    {
        title: "Hukum Keluarga",
        icon: <HeartHandshakeIcon className="w-8 h-8 text-orkayellow" />,
        details: [
            "Perceraian",
            "Perjanjian Pra & Pasca Nikah",
            "Adopsi",
            "Akta Kelahiran (orang tua asing)",
            "Waris",
        ],
    },
    {
        title: "Hukum Ketenagakerjaan",
        icon: <UsersIcon className="w-8 h-8 text-orkayellow" />,
        details: [
            "PKWTT",
            "PKWT",
            "Kontrak Freelance",
            "Perjanjian Outsourcing",
            "Surat PHK",
            "Surat Peringatan (SP)",
            "Peraturan Perusahaan (PP)",
            "Likuidasi Perusahaan",
        ],
    },
    {
        title: "Regulasi Kendaraan Listrik (EV)",
        icon: <FileCheck2Icon className="w-8 h-8 text-orkayellow" />,
        details: [
            "Konsultasi Kepatuhan",
            "Pembuatan Kontrak",
            "Negosiasi Kontrak",
            "NIB",
            "Sertifikat Standar",
            "PJP",
            "PBG",
            "Sertifikasi Halal",
            "Perizinan Konstruksi",
        ],
    },
    {
        title: "Retainer Legal",
        icon: <InfinityIcon className="w-8 h-8 text-orkayellow" />,
        details: [
            "Konsultasi Bulanan",
            "Konsultasi Prioritas",
            "Review Dokumen",
            "Monitoring Korporat",
        ],
    },
];

export default function Services() {
    const { lang } = useLang();
    const SERVICES = lang === "en" ? SERVICES_EN : SERVICES_ID;

    const text = {
        en: {
            title: "Our Legal Services",
            desc: "Comprehensive legal solutions tailored to individuals and businesses — built on expertise, clarity, and integrity.",
            modalBtn: "Consult Now",
            wa: (service) => `Hello Orka Legal,

I would like to request a consultation regarding:
${service}

Please advise on the next steps and the available consultation schedule.

Thank you.`,
        },
        id: {
            title: "Layanan Hukum Kami",
            desc: "Solusi hukum lengkap untuk individu dan bisnis — dibangun dengan keahlian, kejelasan, dan integritas.",
            modalBtn: "Konsultasi Sekarang",
            wa: (service) => `Halo Orka Legal,

Saya ingin meminta konsultasi mengenai:
${service}

Mohon informasikan langkah selanjutnya dan jadwal konsultasi yang tersedia.

Terima kasih.`,
        },
    }[lang];

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const openModal = (srv) => {
        setSelected(srv);
        setOpen(true);
    };

    const closeModal = useCallback(() => {
        setOpen(false);
        setSelected(null);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        const keyHandler = (e) => e.key === "Escape" && closeModal();
        window.addEventListener("keydown", keyHandler);
        return () => window.removeEventListener("keydown", keyHandler);
    }, [open, closeModal]);

    return (
        <section
            id="services"
            className="bg-white py-20 sm:py-24 md:py-28 px-6 sm:px-10 md:px-20 border-t border-zinc-100"
        >
            {/* HEADER */}
            <div className="max-w-7xl mx-auto text-center opacity-0 animate-fadeUp">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-orkablack mb-6">
                    {text.title}
                </h2>
                <p className="text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                    {text.desc}
                </p>
                <div className="w-16 sm:w-24 h-1 bg-orkayellow mx-auto mt-6 mb-14" />
            </div>

            {/* GRID */}
            <div className="max-w-7xl mx-auto grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
                {SERVICES.map((srv, i) => (
                    <div
                        key={i}
                        onClick={() => openModal(srv)}
                        className="cursor-pointer bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm 
                                   hover:shadow-xl hover:border-orkayellow transition-all duration-300
                                   opacity-0 animate-fadeUp"
                        style={{ animationDelay: `${i * 0.12}s` }}
                    >
                        <div className="flex items-center justify-center w-16 h-16 bg-orkayellow/10 rounded-full mb-6 transition">
                            {srv.icon}
                        </div>

                        <h3 className="text-xl font-semibold mb-3 text-orkablack">
                            {srv.title}
                        </h3>

                        <p className="text-zinc-600 text-sm leading-relaxed line-clamp-3">
                            {srv.details.join(", ")}
                        </p>
                    </div>
                ))}
            </div>

            {/* MODAL */}
            {open && selected && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4
                               opacity-0 animate-fadeIn"
                    onClick={closeModal}
                >
                    <div
                        className="relative bg-white w-full max-w-lg rounded-2xl p-8 shadow-xl 
                                   transform animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-700 text-lg"
                        >
                            ✕
                        </button>

                        <div className="flex items-center gap-3 mb-4">
                            {selected.icon}
                            <h3 className="text-2xl font-serif font-bold text-orkablack">
                                {selected.title}
                            </h3>
                        </div>

                        <ul className="space-y-3 mb-8">
                            {selected.details.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="text-zinc-700 text-sm flex gap-2"
                                >
                                    <span className="text-orkayellow mt-1">
                                        •
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => {
                                const msg = text.wa(selected.title);
                                window.open(
                                    "https://wa.me/628118003088?text=" +
                                        encodeURIComponent(msg),
                                    "_blank"
                                );
                            }}
                            className="w-full bg-orkayellow text-orkablack py-3 rounded-lg font-semibold 
                                       hover:bg-yellow-400 active:bg-yellow-500 transition-all"
                        >
                            {text.modalBtn}
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
