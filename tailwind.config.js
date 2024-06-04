/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'body-text': '#eee7e1',
        'radial-gradient': 'radial-gradient(circle at center, #222, #000)',
        'custom-body-bg': '#27272a',
      },
      fontFamily: {
        grandstander: ['Grandstander', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif'],
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-radial': {
          background: 'radial-gradient(circle at center, #222, #000)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
