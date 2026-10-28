/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue,html}",
    ],
    theme: {
        extend: {
        colors: {
            border: "hsl(var(--border))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
            },
        },
        },
    },
    plugins: [],
}