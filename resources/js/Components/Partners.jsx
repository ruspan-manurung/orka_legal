import { useEffect, useRef } from "react";
import { usePage } from "@inertiajs/react";

export default function Partners() {
    const { partners } = usePage().props;
    const ref = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    // Auto-scroll
    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let currentScroll = 0;
        const scrollSpeed = 0.3; // slower pace for subtle motion
        const id = setInterval(() => {
            if (!isDragging.current) {
                currentScroll += scrollSpeed;
                el.scrollLeft = currentScroll;
                if (currentScroll >= el.scrollWidth / 2) currentScroll = 0;
            }
        }, 20);

        return () => clearInterval(id);
    }, []);

    // Drag-to-scroll
    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const startDrag = (e) => {
            isDragging.current = true;
            el.classList.add("cursor-grabbing");
            startX.current = e.pageX - el.offsetLeft;
            scrollLeft.current = el.scrollLeft;
        };

        const endDrag = () => {
            isDragging.current = false;
            el.classList.remove("cursor-grabbing");
        };

        const onDrag = (e) => {
            if (!isDragging.current) return;
            e.preventDefault();
            const x = e.pageX - el.offsetLeft;
            const walk = (x - startX.current) * 1.5;
            el.scrollLeft = scrollLeft.current - walk;
        };

        el.addEventListener("mousedown", startDrag);
        el.addEventListener("mouseleave", endDrag);
        el.addEventListener("mouseup", endDrag);
        el.addEventListener("mousemove", onDrag);

        return () => {
            el.removeEventListener("mousedown", startDrag);
            el.removeEventListener("mouseleave", endDrag);
            el.removeEventListener("mouseup", endDrag);
            el.removeEventListener("mousemove", onDrag);
        };
    }, []);

    return (
        <section className="relative py-8 sm:py-10 bg-white border-y border-zinc-200 overflow-hidden">
            {/* Section Title */}
            <h3 className="text-center text-[10px] sm:text-xs tracking-[0.25em] text-zinc-500 font-semibold mb-4 sm:mb-6">
                OUR PARTNERS
            </h3>

            {/* Carousel */}
            <div
                ref={ref}
                className="flex gap-6 sm:gap-10 overflow-hidden whitespace-nowrap px-4 sm:px-8 select-none cursor-grab"
            >
                {[...partners, ...partners].map((p, i) => (
                    <div
                        key={i}
                        className="min-w-[70px] sm:min-w-[100px] h-[32px] sm:h-[45px] flex items-center justify-center transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            src={
                                p.logo_url ||
                                "https://via.placeholder.com/120x40?text=Partner"
                            }
                            alt={p.name || "Partner Logo"}
                            className="object-contain w-full h-full opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                ))}
            </div>

            {/* Soft fade edges */}
            <div className="absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </section>
    );
}
