/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#0d0616',
        panel: '#170b26',
        panel2: '#1f0f33',
        primary: '#a855f7',
        primary2: '#ec4899',
        accent: '#c026d3',
        muted: '#a390b8',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #a855f7 0%, #ec4899 100%)',
      },
    },
  },
  plugins: [],
}
