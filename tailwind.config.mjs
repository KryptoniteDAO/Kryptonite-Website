/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: "#FFE500",
        },
        primary: {
          dark: "#052e16",
          DEFAULT: "#14532d",
          lightest: "#f0fdf4",
        },
        'green': {
          '50': '#edfff6',
          '100': '#d5ffec',
          '200': '#aeffd9',
          '300': '#70ffbe',
          '400': '#2bfd9b',
          '500': '#00f583',
          '600': '#00c062',
          '700': '#009650',
          '800': '#067542',
          '900': '#076039',
          '950': '#00371e',
      },

      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%'
      },
      fontFamily: {
        'display': ['"Manrope"', 'ui-sans-serif', 'system-ui'],
        'body': ['"Inter"', 'ui-sans-serif', 'system-ui',]
      },
      backgroundImage: {
        'pattern-black': "url('/logo-black.svg')",
        'pattern-white': "url('/logo-white.svg')",
        'pattern-1': "url('/bg-10.svg')",
        'pattern-3': "url('/bg-30.svg')",
      }
    },

  },
  plugins: [],
};


