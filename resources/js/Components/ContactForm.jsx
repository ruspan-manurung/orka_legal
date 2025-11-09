import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function ContactForm({ open, onClose }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        website: "", // honeypot
    });

    useEffect(() => {
        if (!open) reset();
    }, [open]);

    const submit = (e) => {
        e.preventDefault();
        post(route("leads.store"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                onClose();
            },
        });
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl w-full max-w-lg shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-zinc-500 hover:text-zinc-800"
                >
                    ✕
                </button>

                <form onSubmit={submit} className="p-8 space-y-5">
                    <h2 className="text-2xl font-semibold text-center mb-2">
                        Free Consultation
                    </h2>
                    <p className="text-sm text-center text-zinc-600 mb-6">
                        Fill out the form and our legal team will contact you
                        soon.
                    </p>

                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="w-full border border-zinc-300 rounded-lg px-4 py-2"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className="w-full border border-zinc-300 rounded-lg px-4 py-2"
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            className="w-full border border-zinc-300 rounded-lg px-4 py-2"
                        />
                        <textarea
                            rows="4"
                            placeholder="Tell us briefly about your matter"
                            value={data.message}
                            onChange={(e) => setData("message", e.target.value)}
                            className="w-full border border-zinc-300 rounded-lg px-4 py-2"
                        ></textarea>
                    </div>

                    {/* Hidden honeypot */}
                    <input
                        type="text"
                        value={data.website}
                        onChange={(e) => setData("website", e.target.value)}
                        className="hidden"
                    />

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-orkayellow text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition"
                    >
                        {processing ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </div>
    );
}
