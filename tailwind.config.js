import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
    ],
    theme: {
        extend: {
            colors: {
                orkablack: "#0a0a0a", // deep charcoal black
                orkayellow: "#d4af37", // muted gold, balanced gold
                orkagray: "#f5f5f4", // soft background tone
            },
            fontFamily: {
                serif: ['"Playfair Display"', "serif"],
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },

            /* ⭐ ADD THIS BLOCK — DOES NOT AFFECT ANY EXISTING COLORS OR FONTS */
            keyframes: {
                fadeUp: {
                    "0%": { opacity: 0, transform: "translateY(20px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                scaleIn: {
                    "0%": { opacity: 0, transform: "scale(0.95)" },
                    "100%": { opacity: 1, transform: "scale(1)" },
                },
            },
            animation: {
                fadeUp: "fadeUp 0.6s ease-out forwards",
                fadeIn: "fadeIn 0.5s ease-out forwards",
                scaleIn: "scaleIn 0.3s ease-out forwards",
            },
        },
    },
    plugins: [forms],
};
