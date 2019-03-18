let htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports= {
  mode: 'none',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].[hash:5].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: { // 开发服务器配置
    port:3000,
    progress: true,
    contentBase: './dist',
    // disableHostCheck: true
  },
  module: {
    rules:[{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
          '@babel/preset-env'
          ]
        }
      }]
    }]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
      },
     // hash: true 给引入的文件加上hash
    })
  ]
}