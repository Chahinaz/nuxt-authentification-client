const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Chahinaz",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon' || 'image/png', href: '/images/icon2.png' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    "~/assets/css/globals.scss",
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'semantic-ui-vue/nuxt'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: 'http://localhost:3333/'
  },

  auth: {
    strategies: {
     local: {
       endpoints: {
         login: {url: 'login', method:'post', propertyName: 'data'},
         user: {url: 'profile', propertyName: 'data'},
         logout: false
       }
     }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, { isDev, isClient }) {
    }
  }
};
