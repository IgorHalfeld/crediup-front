export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'crediup',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { hid: 'description', name: 'description', content: 'Revolucionando o crédito no brasil' },
      { property: 'og:title', content: 'crediup' },
      { property: 'og:site_name', content: 'crediup' },
      { property: 'og:url', content: 'https://crediup.netlify.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: 'Revolucionando o crédito no brasil' },
      { property: 'og:image', content: 'https://crediup.netlify.com/banner.png' },
      { property: 'twitter:title', content: 'crediup' },
      { property: 'twitter:description', content: 'Revolucionando o crédito no brasil' },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Righteous|Roboto:400,700,900&display=swap' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vueMediaQueries', srr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    ['@nuxtjs/axios', {
      baseURL: 'https://api.spacexdata.com/v3/',
    }],
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
