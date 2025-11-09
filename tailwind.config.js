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
                orkayellow: "#d4af37", // muted gold, like brass
                orkagray: "#f5f5f4", // soft background tone
            },
            fontFamily: {
                serif: ['"Playfair Display"', "serif"],
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [forms],
};
