/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#111827',
        panel: '#162033',
        muted: '#9aa7b8',
        paper: '#f6f8fb',
        line: '#2a374d',
        accent: '#5eead4',
        steel: '#c5d0df',
      },
    },
  },
  plugins: [],
};
