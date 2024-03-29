const webpack = require('webpack')
const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            hack: 'true; @import "@/assets/theme-vars.less";'
          }
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('vue$', path.join(__dirname, 'node_modules/vue'))
    config.resolve.alias.set('highcharts$', path.join(__dirname, 'node_modules/highcharts'))
  },

  configureWebpack: {
    plugins: [new webpack.IgnorePlugin({ resourceRegExp: /\.\/locale$/, contextRegExp: /moment$/ })]
  },

  publicPath: process.env.VUE_APP_BASE_PATH
    ? process.env.VUE_APP_BASE_PATH
    : '/covid-ampel-widget/',

  pwa: {
    name: 'Covid Ampel',
    themeColor: '#323232',
    msTileColor: '#323232',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    manifestOptions: {
      name: 'Covid Ampel',
      short_name: 'Covid Ampel',
      background_color: '#323232',
      icons: [
        {
          src: './img/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-maskable-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: './img/icons/android-chrome-maskable-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: './img/icons/apple-touch-icon-60x60.png',
          sizes: '60x60',
          type: 'image/png'
        },
        {
          src: './img/icons/apple-touch-icon-76x76.png',
          sizes: '76x76',
          type: 'image/png'
        },
        {
          src: './img/icons/apple-touch-icon-120x120.png',
          sizes: '120x120',
          type: 'image/png'
        },
        {
          src: './img/icons/apple-touch-icon-152x152.png',
          sizes: '152x152',
          type: 'image/png'
        },
        {
          src: './img/icons/apple-touch-icon-180x180.png',
          sizes: '180x180',
          type: 'image/png'
        },
        {
          src: './img/icons/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png'
        },
        {
          src: './img/icons/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png'
        },
        {
          src: './img/icons/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          src: './img/icons/msapplication-icon-144x144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: './img/icons/mstile-150x150.png',
          sizes: '150x150',
          type: 'image/png'
        }
      ]
    },
    workboxOptions: {
      // https://github.com/yyx990803/register-service-worker/issues/14
      // https://stackoverflow.com/questions/54145735/vue-pwa-not-getting-new-content-after-refresh
      skipWaiting: true
    }
  }
}
