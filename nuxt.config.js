const primary = '#219b86' // Updated

const accent = '#273539'

export default {
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    GTM_ID: process.env.GTM_ID
  },

  target: 'static',

  buildModules: [
    'nuxt-font-loader',
    '@nuxt/postcss8'
  ],

  modules: [
    '@nuxtjs/axios',
    'nuxt-i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/toast',
    '@nuxtjs/gtm',
    ['vue-scrollto/nuxt', { duration: 250 }]
  ],

  plugins: [
    '@/plugins/axios',
    '@/plugins/mixins',
    '@/plugins/wow',
    { src: '@/plugins/swiper', mode: 'client' }
  ],

  css: [
    '@/assets/sass/app.scss',
    '@/assets/css/tailwind.css',
    '@/assets/css/swiper.css'
  ],

  gtm: {
    id: process.env.GTM_ID,
    scriptDefer: true,
  },

  router: { middleware: ['errors', 'nav'] },

  axios: { baseURL: process.env.API_URL },

  toast: { duration: 5000, keepOnHover: true },

  fontLoader: { url: '/fonts/fonts.css' },

  sitemap: {
    hostname: 'https://smart-values.sa',
    gzip: true,
    i18n: { defaultLocale: 'ar', locales: ['ar', 'en'], routesNameSeparator: '___' }
  },

  i18n: {
    seo: false,
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ar',
    strategy: 'prefix_except_default',
    vueI18nLoader: true,
    detectBrowserLanguage: false,
    vueI18n: { fallbackLocale: 'ar' },
    locales: [
      { code: 'ar', name: 'عربي', file: 'ar.js' },
      { code: 'en', name: 'English', file: 'en.js' }
    ]
  },

  loading: { color: primary },

  render: { http2: { push: true } },

  pwa: { manifest: { lang: 'ar', theme_color: primary } },

  generate: { fallback: true },

  build: {
    splitChunks: { layouts: true, pages: true, commons: true },

    extractCSS: true,

    optimizeCSS: true,

    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: { name: 'styles', test: /\.(css|vue)$/, chunks: 'all', enforce: true }
        }
      }
    },

    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },

      preset: {
        features: { "focus-within-pseudo-class": false }
      }
    },
  },

  head: {
    title: 'القيم الذكية - Smart Values',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'نقدم مجموعة شاملة من الخدمات التقنية الاحترافية التى تساعد الشركات على التطور، التوسع، وتحقيق أهدافها الرقمية بكفاءة عالية.' },
      { hid: 'google', name: 'google', content: 'notranslate' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Inter:wght@300;400;500;600;700;800;900&display=swap' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/css/all.min.css' }
    ]
  }
}
