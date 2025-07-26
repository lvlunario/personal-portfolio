module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        background: 'var(--background)'
      },
      textColor: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)'
      },
      borderColor: {
        DEFAULT: 'var(--secondary)'
      }
    },
  },
  plugins: [],
}