const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '渐进式网络应用程序'
    }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin(),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
}
