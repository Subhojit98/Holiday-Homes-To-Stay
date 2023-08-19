/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'Aleo': ['Aleo', 'serif'],
        'IBM': ['IBM Plex Mono', 'serif'],
        'chakra': ['Chakra Petch'],
        'Manrope': ['Manrope'],
        'Josefin': ['Josefin'],
        'Lato': ['Lato'],
        'Nunito': ['Nunito'],
        'Poppins': ['Poppins'],
        'Quicksand': ['Quicksand'],
        'Raleway': ['Raleway'],
        'Roboto': ['Roboto'],
        'RobotoMono': ['Roboto Mono'],
        'Rubik': ['Rubik'],
        'SpaceMono': ['Space Mono'],
        'TiltNeon': ['Tilt Neon'],
        'Ubuntu': ['Ubuntu'],
        'VarelaRound': ['Varela Round'],
        'ZillaSlab': ['Zilla Slab'],


      },
      backgroundColor: {
        WholePage: '#f0ece9',
        specialBg: '#c6b5aa',
        buttonsBg: '#222222',
        tableBg_1: '#FF1E56',
        tableBg_2: '#323232',
      },
      textColor: {
        defaultTextColor: '#81807f',
        defaultTextColor2: '#7a7977',
      }
    },
    screens: {
      'tablet': '768px',

      'bigTablet': '992px',

      'desktop': '1281px',
    },
  },
  plugins: [require("daisyui"), ('flowbite/plugin')],
  daisyui: {
    themes: [],
  },
}

