module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/covid-ampel-widget/' : '/',
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            hack: `true; @import "@/assets/theme-vars.less";`,
          },
        },
      },
    },
  }
}
