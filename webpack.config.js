const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer:{
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '开发环境'
    }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin()
  ]
}
