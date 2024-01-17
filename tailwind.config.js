/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "body-bg": "#eee7e1", // Ajout de la couleur personnalisée
            },
            fontFamily: {
                grandstander: ["Grandstander", "sans-serif"], // Ajout de la police Grandstander
                prompt: ["Prompt", "sans-serif"], // Ajout de la police Prompt
            },
            backgroundImage: {
                "radial-gradient":
                    "radial-gradient(circle at center, #222, #000)",
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
