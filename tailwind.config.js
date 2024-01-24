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
                "body-text": "#eee7e1", // Ajout de la couleur personnalisée
                "radial-gradient":
                    "radial-gradient(circle at center, #222, #000)",
            },
            fontFamily: {
                grandstander: ["Grandstander", "sans-serif"], // Ajout de la police Grandstander
                prompt: ["Prompt", "sans-serif"], // Ajout de la police Prompt
            },
            backgroundImage: {
                "radial-gradient":
                    "radial-gradient(circle at center, #222, #000)",
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                ".bg-radial": {
                    background: "radial-gradient(circle at center, #222, #000)",
                },
            };
            addUtilities(newUtilities, ["responsive", "hover"]);
        },
    ],
};
