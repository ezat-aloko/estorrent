module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      color_primary: '#8EC656',
      color_primary_dark: '#243216',
      color_primary_light: '#99cc67',
      color_secondary: '#315C2B',
      color_tertiary: '#1c2811',
    }),
    extend: {
      colors: {
        color_primary: '#8EC656',
        color_primary_dark: '#243216',
        color_primary_light: '#99cc67',
        color_secondary: '#315C2B',
        color_tertiary: '#1c2811',
        accents_0: '#f8f9fa',
        accents_1: '#f1f3f5',
        accents_2: '#e9ecef',
        accents_3: '#dee2e6',
        accents_4: '#ced4da',
        accents_5: '#adb5bd',
        accents_6: '#868e96',
        accents_7: '#495057',
        accents_8: '#343a40',
        accents_9: '#212529',
      },
      zIndex: {
        '-1': '-1',
        1: '1',
      },
      fontSize: {
        medium: [
          '0.945rem',
          {
            lineHeight: '1.275rem',
          },
        ],
      },
    },
    fontFamily: {
      workSans: ['Work Sans', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      openSans: ['Open Sans', 'sans-serif'],
      notoSerifJP: ['Noto Serif JP', 'serif'],
      notoSerif: ['Noto Serif', 'serif'],
      Signika: ['Signika', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
      display: ['hover', 'group-hover'],
      borderWidth: ['hover', 'focus'],
      visibility: ['hover', 'group-hover'],
      inset: ['hover', 'group-hover'],
      borderWidth: ['responsive', 'last', 'hover', 'focus'],
      margin: ['last', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
