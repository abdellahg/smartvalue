module.exports = {
  mode: "jit",

  theme: {
    extend: {
      colors: {
        primary: `#D32F2F`,
        secondary: `#1D293E`,
        gray: `#959595`,
        light: `#fff`,
        dark: `#090e16`,
      },
    },

    fontFamily: {
      display: ['Zain', 'sans-serif'],
      body: ['Zain', 'sans-serif'],
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1170px',
    },

    container: {
      center: true,
      padding: '15px',
    },
  },

  variants: {},

  plugins: [
    // require('tailwindcss-logical'),
    // require('tailwindcss-dark-mode')()
  ],

  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
}
