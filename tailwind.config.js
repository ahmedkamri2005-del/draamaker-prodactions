/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#FFFFFF",
                foreground: "#050505",
                gold: "#D4AF37",
            },
            fontFamily: {
                serif: ['Borscha', 'serif'],
                sans: ['Borscha', 'Inter', 'sans-serif'],
                borscha: ['Borscha', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
