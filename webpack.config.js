const path = require('path')
<<<<<<< HEAD
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')
const webpack = require('webpack')

module.exports = {
<<<<<<< HEAD
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '开发环境'
    }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
=======
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
>>>>>>> tree-shaking
=======
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: { index: './src/index.js', polyfill: './src/polyfill.js' },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: require.resolve('./src/index.js'),
        use: 'imports-loader?this=>window'
      },
      {
        test: require.resolve('./src/globals.js'),
        use: 'exports-loader?file,parse=helpers.parse'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // _: 'lodash',
      join: ['lodash', 'join']
    })
  ]
>>>>>>> shimming
}
