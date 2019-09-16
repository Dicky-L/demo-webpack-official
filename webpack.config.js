const path = require('path')

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
