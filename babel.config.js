module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        // specify less file path
        style: (name) => `${name}/style/less`
      }, 'vant'
    ]
  ]
}
