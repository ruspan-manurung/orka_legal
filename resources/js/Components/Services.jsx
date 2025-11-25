import { useState, useEffect } from "react";
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
            "Deed Amendments (Perubahan Akta)",
            "Shares Sale and Purchase",
            "Legal Due Diligence",
        ],
    },
    {
        title: "Litigation & Dispute Resolution",
        icon: <ScaleIcon className="w-8 h-8 text-orkayellow" />,
        details: [
            "General Litigation",
            "Arbitration",
            "Small Claim Court (Gugatan Sederhana)",
        ],
    },
    {
        title: "Tax & Regulatory",
        icon: <BanknoteIcon className="w-8 h-8 text-orkayellow" />,
        details: [
            "Pelaporan",
            "NPWP",
            "Tax Document Review",
            "Regulatory Compliance Advisory",
        ],
    },
    {
        title: "Family Law",
        icon: <HeartHandshakeIcon className="w-8 h-8 text-orkayellow" />,
        details: [
            "Divorce",
            "Prenuptial & Post-nuptial agreements",
            "Adoption",
            "Child’s birth certificate (foreign parents)",
            "Inheritance",
        ],
    },
    {
        title: "Manpower / Employment Law",
        icon: <UsersIcon className="w-8 h-8 text-orkayellow" />,
        details: [
            "PKWTT (Permanent Employment Agreement)",
            "PKWT (Fixed-term Employment Agreement)",
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
            "Licensing (NIB, Sertifikat Standard, PJP)",
            "PBG",
            "Halal Certification",
            "Construction Licensing",
        ],
    },
    {
        title: "Legal Retainer",
        icon: <InfinityIcon className="w-8 h-8 text-orkayellow" />,
        details: [
            "Monthly Legal Advisory",
            "Document Review",
            "Priority Consultation",
            "Corporate Monitoring & Compliance",
        ],
    },
];

export default function Services() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const openModal = (service) => {
        setSelected(service);
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
        setSelected(null);
    };

    // Disable body scroll on modal
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
    }, [open]);

    return (
        <section
            id="services"
            className="bg-white py-20 sm:py-24 md:py-28 px-6 sm:px-10 md:px-20 border-t border-zinc-100"
        >
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-orkablack mb-6">
                    Our Legal Services
                </h2>
                <p className="text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                    Comprehensive legal solutions tailored to individuals and
                    businesses — built on expertise, clarity, and integrity.
                </p>
                <div className="w-16 sm:w-24 h-1 bg-orkayellow mx-auto mt-6 mb-14" />
            </div>

            {/* SERVICES GRID */}
            <div className="max-w-7xl mx-auto grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
                {SERVICES.map((srv, i) => (
                    <div
                        key={i}
                        onClick={() => openModal(srv)}
                        className="group cursor-pointer bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm 
                                   hover:shadow-lg hover:border-orkayellow transition-all duration-200"
                    >
                        <div className="flex items-center justify-center w-16 h-16 bg-orkayellow/10 rounded-full mb-6 group-hover:bg-orkayellow/20 transition">
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
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 z-50">
                    <div className="bg-white w-full max-w-lg rounded-2xl p-8 shadow-lg relative">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-700"
                        >
                            ✕
                        </button>

                        {/* Modal Title */}
                        <h3 className="text-2xl font-serif font-bold mb-4 text-orkablack">
                            {selected.title}
                        </h3>

                        {/* List of Services */}
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

                        {/* CTA Button */}
                        <button
                            onClick={() =>
                                window.open(
                                    "https://wa.me/628118003088?text=Hello%20Orka%20Legal,%20I%20need%20help%20regarding:%20" +
                                        encodeURIComponent(selected.title),
                                    "_blank"
                                )
                            }
                            className="w-full bg-orkayellow text-orkablack py-3 rounded-lg font-semibold hover:bg-yellow-400 active:bg-yellow-500 transition-all"
                        >
                            Consult Now
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
