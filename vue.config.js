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
  assetsDir: 'assets'
}
