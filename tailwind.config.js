module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./coponents/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
