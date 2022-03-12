const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const copyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './src/main.js',

  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },

      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new copyPlugin({
      patterns: [
        {from: 'static'}
      ]
    }),
    new VueLoaderPlugin()
  ],

  devServer: {
    host: 'localhost'
  }
}