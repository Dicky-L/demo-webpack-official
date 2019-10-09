const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist')
  },
  // optimization: {
  //   usedExports: true
  // }
}
