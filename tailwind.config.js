/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        colors: {
            background: 'rgb(var(--color-background) / <alpha-value>)',
            foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
            primary: {
            DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
            foreground: 'rgb(var(--color-primary-foreground) / <alpha-value>)',
            },
            secondary: {
            DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
            foreground: 'rgb(var(--color-primary-foreground) / <alpha-value>)',
            },
            accent: {
            DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
            foreground: 'rgb(var(--color-primary-foreground) / <alpha-value>)',
            },
            'card-bg': 'rgb(var(--color-card-bg) / <alpha-value>)',
            'card-border': 'rgb(var(--color-card-border) / <alpha-value>)',
            'header-text': 'rgb(var(--color-header-text) / <alpha-value>)',
            'footer-bg': 'rgb(var(--color-footer-bg) / <alpha-value>)',
        },
        transitionDuration: {
            '300': '300ms',
        },
        textBalance: ['responsive'],
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('tailwindcss-animate'),
    ],
}