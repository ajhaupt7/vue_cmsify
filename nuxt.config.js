module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Vue CMSify',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Template for building Vue CMS projects w/ Nuxt + Nuxtent + Netlify' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    css: [
      { src: '~assets/css/app.scss', lang: 'scss' }
    ],
    plugins: [
    ],
    module: [
      /* ['@nuxtjs/google-analytics', { ua: 'YOUR_ANALYTICS_ID' }], */
      'nuxt-netlify-cms',
      'nuxtent',
      '@nuxtjs/axios'
    ]
  }
}
