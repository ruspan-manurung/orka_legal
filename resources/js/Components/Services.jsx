import { useState, useEffect, useCallback } from "react";
import {
    BriefcaseIcon,
    ScaleIcon,
    BanknoteIcon,
    HeartHandshakeIcon,
    UsersIcon,
    FileCheck2Icon,
    InfinityIcon,
} from "lucide-react";

const SERVICES = [
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

export default function Services() {
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

    // disable scroll + close on ESC
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
            <div className="max-w-7xl mx-auto text-center opacity-0 animate-fadeUp">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-orkablack mb-6">
                    Our Legal Services
                </h2>
                <p className="text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                    Comprehensive legal solutions tailored to individuals and
                    businesses — built on expertise, clarity, and integrity.
                </p>
                <div className="w-16 sm:w-24 h-1 bg-orkayellow mx-auto mt-6 mb-14" />
            </div>

            {/* grid */}
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

            {/* modal */}
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
                                const message = `Hello Orka Legal,

I would like to request a consultation regarding:
${selected.title}

Please advise on the next steps and the available consultation schedule.

Thank you.`;

                                window.open(
                                    "https://wa.me/628118003088?text=" +
                                        encodeURIComponent(message),
                                    "_blank"
                                );
                            }}
                            className="w-full bg-orkayellow text-orkablack py-3 rounded-lg font-semibold 
                                       hover:bg-yellow-400 active:bg-yellow-500 transition-all"
                        >
                            Consult Now
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
