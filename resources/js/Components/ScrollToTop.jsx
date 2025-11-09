import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    const handleHashChange = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return null;
}
