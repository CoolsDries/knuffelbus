/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'titel': ['titan one'],
      },
      colors: {
        'yellow': '#E7E19E',
        'red': '#EF3E3E',
        'orange': '#F9A65F',
        'orange-dark': '#F26A48',
        'blue': '#007D90',
      },
    },
  },
  plugins: [],
}

