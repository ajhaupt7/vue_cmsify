module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Yasar Kücükkaya',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal Website of Yasar Kücükkaya' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1 KO
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    { src: '~assets/styles/app.scss', lang: 'scss' }
  ],
  plugins: [
    { src: '~plugins/vue-lazyload', ssr: false },
  ],
  modules: [
    'nuxt-netlify-cms',
    'nuxtent'
  ],
  nuxtent: {
    content: {
      permalink: ':slug',
      page: '/_post',
      isPost: false,
      generate: [
        'get',
        'getAll'
      ]
    }
  }
}

