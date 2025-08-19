module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
        colors: {
            background: 'var(--color-background)',
            foreground: 'var(--color-foreground)',
            primary: 'var(--color-primary)',
            'primary-foreground': 'var(--color-primary-foreground)',
            secondary: 'var(--color-secondary)',
            accent: 'var(--color-accent)',
            'card-bg': 'var(--color-card-bg)',
            'card-border': 'var(--color-card-border)',
        },
        textColor: {
            'header': 'rgb(var(--color-header-text) / <alpha-value>)',
        },
        backgroundColor: {
            'footer': 'rgb(var(--color-footer-bg) / <alpha-value>)',
        },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('tailwindcss-animate'),
    ],
}