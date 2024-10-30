/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["nunito", "ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        titel: ["bowlby one"],
      },
      colors: {
        yellow: "#E7E19E",
        red: "#EF3E3E",
        orange: "#F9A65F",
        "orange-dark": "#F26A48",
        blue: "#007D90",
      },
    },
  },
  // Needed for variabl colors, if not in the safelist, tailwind will not allow color
  safelist: ['#E7E19E', '#EF3E3E', '#F9A65F', '#F26A48', '#007D90'],
  plugins: [],
};
