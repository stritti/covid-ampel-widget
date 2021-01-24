const webpack = require("webpack")

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
  configureWebpack: {
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 0,
        maxSize: 200000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1]
              return `npm.${packageName.replace("@", "")}`
            }
          }
        }
      }
    }
  },
  publicPath: process.env.VUE_APP_BASE_PATH
    ? process.env.VUE_APP_BASE_PATH
    : '/covid-ampel-widget/'
}
