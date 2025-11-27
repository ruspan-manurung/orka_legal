import { createContext, useContext, useState, useEffect } from "react";
import en from "./en";
import id from "./id";

const languages = { en, id };

const LangContext = createContext();

export function LangProvider({ children }) {
    const [lang, setLang] = useState("en");

    useEffect(() => {
        const saved = localStorage.getItem("lang");
        if (saved) setLang(saved);
    }, []);

    const toggleLang = () => {
        const newLang = lang === "en" ? "id" : "en";
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    };

    return (
        <LangContext.Provider value={{ lang, toggleLang, t: languages[lang] }}>
            {children}
        </LangContext.Provider>
    );
}

export const useLang = () => useContext(LangContext);
