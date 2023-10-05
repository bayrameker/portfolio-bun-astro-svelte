/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                jade: {
                    950: '#1B1F1C',
                    900: '#152118',
                    800: '#19291D',
                    700: '#1C3122',
                    600: '#25412D'
                },
                goldenrod: '#B69047',
                alabaster: '#F1F2EB',
                timberwolf: '#D8DAD3',
                oxford: {
                    900: '#0C111D',
                    850: '#0F1624',
                    800: '#121A2B',
                    750: '#19223A',
                    700: '#1F2A49',
                    500: '#2B3A67',
                    400: '#496A81',
                    300: '#66999B'
                },
                accent: {
                    sage: '#66999B',
                    peach: '#FFC482'
                },
                secondary: '#F2F2F2'
            },
            fontFamily: {
                montserrat: ['Montserrat Variable', 'sans-serif'],
                literata: ['Literata Variable', 'serif'],
                ovo: ['Ovo', 'serif'],
            },
            transformOrigin: {
                'center-center': 'center center'
            }
        }
    },
    plugins: []
};
