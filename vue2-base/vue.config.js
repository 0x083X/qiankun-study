const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      port: 3303,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  }
})
