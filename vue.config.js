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
  publicPath: process.env.VUE_APP_BASE_PATH
    ? process.env.VUE_APP_BASE_PATH
    : '/covid-ampel-widget/'
}
