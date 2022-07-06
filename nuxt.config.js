export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mynuxt-app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/style.scss'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // {src: '~/plugins/animepage.js',mode: 'client'},
    {src: '~/plugins/swiper.js', ssr: 'false'},
    
    '~/plugins/abort.js',
    '~/plugins/click-outside.js'
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'nuxt-lazy-load'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
		// Interval in milliseconds between two render cycles to avoid
		// flooding a potential API with calls from the web application.
		interval: 1000
	},
  
}
