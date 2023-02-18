export default {
  // server: {
  //   host: process.env.NUXT_HOST,
  //   port: process.env.NUXT_PORT,
  // },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'VALERKINO - %s',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'valerkino', name: 'ValerKino WEb Site', content: 'Portfolio web site' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/dbed6b6114.js',  crossorigin: 'anonymous', async: true}
    ]
  },

  router: {
    base: '/'
  },

  axios: {
    proxy: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  },

  publicRuntimeConfig: {
    backendUrl: process.env.BACKEND_API_URL
  },

  proxy: {
    changeOrigin: true,
    '/api/': {
      target: process.env.BACKEND_API_URL || 'http://localhost:8085/api/v1/',
      pathRewrite: { '^/api/': '' }
    }
  },

  // Customize the progress-bar color
  loading: {
    name: 'pulse',
    color: '#86c232',
    background: '#10120d'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vee-validate.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],},
}
