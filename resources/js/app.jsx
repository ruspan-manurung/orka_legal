import "./bootstrap";
import "../css/app.css";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

// import the language provider
import { LangProvider } from "../js/lang/LanguageContext";

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        createRoot(el).render(
            <LangProvider>
                <App {...props} />
            </LangProvider>
        );
    },
    progress: {
        color: "#f8e37a",
    },
});
