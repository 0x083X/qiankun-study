const { defineConfig } = require('@vue/cli-service')
const {name} = require('./package.json')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
    // 为子应用配置跨域请求头，支持子应用跨域请求
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    entry: './src/main.js',
    output: {
      library: 'vueApp',
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    }
  }
})
