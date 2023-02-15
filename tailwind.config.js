/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        button: "#00919E",
      },
      backgroundImage: {
        icon: "url(../public/images/icon.png)",
      },
    },
  },
  plugins: [],
};
