import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react"; // npm install lucide-react

export default function ScrollUpButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 bg-orkayellow text-orkablack p-3 rounded-full shadow-lg 
                  hover:bg-yellow-400 active:bg-yellow-500 transition-all duration-200 ${
                    visible ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={22} />
    </button>
  );
}
