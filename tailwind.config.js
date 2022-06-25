/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './pages/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
        colors: {
            'primary-50': '#F2F8FF',
            'primary-100': '#DCE5EF',
            'primary-200': '#C9D9E9',
            'primary-900': '#061826',
            'transperent-primary-900': 'hsla(206, 100%, 15%, 0.1)',
            'secondary-400': '#4C9EEF',
            'myred-400': '#FF004D',
            'myorange-100': '#FFC48D',
            white: '#ffffff',
        },
    },
    plugins: [
        function ({addVariant}) {
            addVariant('child', '& > *')
            addVariant('child-hover', '& > *:hover')
            addVariant('grand-child', '& > * > *')
            addVariant('grand-child-hover', '& > * > *:hover')
        },
    ],
}
