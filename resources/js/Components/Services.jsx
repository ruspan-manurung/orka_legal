import {
    BriefcaseIcon,
    ScaleIcon,
    BanknoteIcon,
    HeartHandshakeIcon,
    UsersIcon,
    FileCheck2Icon,
} from "lucide-react";

const SERVICES = [
    {
        title: "Corporate & Business Law",
        desc: "Contract negotiation, drafting, company establishment (PT, CV, Koperasi, Yayasan), M&A, compliance, and due diligence for all business sizes.",
        icon: (
            <BriefcaseIcon className="w-8 h-8 sm:w-10 sm:h-10 text-orkayellow" />
        ),
    },
    {
        title: "Litigation & Dispute Resolution",
        desc: "Representation for general litigation, arbitration, and Small Claim Court (Gugatan Sederhana). We ensure your rights are defended with precision.",
        icon: <ScaleIcon className="w-8 h-8 sm:w-10 sm:h-10 text-orkayellow" />,
    },
    {
        title: "Tax & Regulatory",
        desc: "Comprehensive assistance in NPWP setup, tax reporting, and ongoing regulatory compliance for individuals and corporations.",
        icon: (
            <BanknoteIcon className="w-8 h-8 sm:w-10 sm:h-10 text-orkayellow" />
        ),
    },
    {
        title: "Family Law",
        desc: "Guidance in divorce, adoption, prenuptial and post-nuptial agreements, child custody, and inheritance matters.",
        icon: (
            <HeartHandshakeIcon className="w-8 h-8 sm:w-10 sm:h-10 text-orkayellow" />
        ),
    },
    {
        title: "Employment / Manpower Law",
        desc: "Drafting PKWTT/PKWT, outsourcing and termination agreements, company policies (PP), and labor dispute resolutions.",
        icon: <UsersIcon className="w-8 h-8 sm:w-10 sm:h-10 text-orkayellow" />,
    },
    {
        title: "EV Regulatory & Licensing",
        desc: "Consultation for electric vehicle licensing, compliance certification, and environmental regulation adherence.",
        icon: (
            <FileCheck2Icon className="w-8 h-8 sm:w-10 sm:h-10 text-orkayellow" />
        ),
    },
];

export default function Services() {
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
                    We provide comprehensive legal solutions tailored to both
                    businesses and individuals — driven by professionalism,
                    integrity, and clarity.
                </p>
                <div className="w-16 sm:w-24 h-1 bg-orkayellow mx-auto mt-6 mb-10 sm:mb-14" />
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto grid gap-8 sm:gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {SERVICES.map((srv) => (
                    <div
                        key={srv.title}
                        className="group bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 shadow-sm 
                       hover:shadow-lg hover:border-orkayellow transition-all duration-200"
                    >
                        <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-orkayellow/10 rounded-full mb-5 sm:mb-6 group-hover:bg-orkayellow/20 transition-all duration-200">
                            {srv.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-orkablack">
                            {srv.title}
                        </h3>
                        <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                            {srv.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
