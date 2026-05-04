/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
                sans: ['var(--font-neue-kabel)', 'Inter', 'sans-serif'],
                borscha: ['Borscha', 'sans-serif'],
                'neue-kabel': ['var(--font-neue-kabel)', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
