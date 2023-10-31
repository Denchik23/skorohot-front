const isDev = process.env.NODE_ENV !== 'production'

export default {
  env: {
    APP_API_BASE_URL: process.env.APP_API_BASE_URL || 'http://localhost/api',
    APP_API_AUNT_URL: process.env.APP_API_AUNT_URL || 'http://localhost'
  },
  publicRuntimeConfig: {
    appImagesUrl: process.env.APP_IMAGES_URL || 'http://localhost/storage/images/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Доставка еды в Анапе | Доставка СкороХот',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Заказать пиццу с доставкой на дом или офис - СкороХот. Выбрать самую вкусную пиццу можете на сайте skorohot.ru или по  ☎: 7 (918) 057-67-67З.' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'keywords', name: 'keywords', content: 'пицца, анапа, доставка, заказать, скорохот, на дом' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/node_modules/normalize.css/normalize',
    '~/assets/scss/fonts.scss',
    '~/assets/scss/global.scss'
  ],

  styleResources: {
    scss: [
      '~assets/scss/variables.scss',
      '~assets/scss/mixins/media.scss'
    ]
  },

  router: {
    linkExactActiveClass: 'nav__link_active',
    middleware: ['navigation']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-js-modal.js',
    '~plugins/vue-common-plugins.js',
    // '~plugins/vue-common-plugins.client.js'
    { src: '~/plugins/ymapPlugin.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    ['nuxt-vuex-localstorage', {
      ...(isDev && {
        mode: 'debug'
      }),
      localStorage: ['cart'] //  If not entered, “localStorage” is the default value
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.APP_API_BASE_URL,
    credentials: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  },

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.APP_API_AUNT_URL,
        endpoints: {
          login: {
            url: '/api/login'
          },
          logout: {
            url: '/api/logout'
          }
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'defu'
    ]
  }
}
