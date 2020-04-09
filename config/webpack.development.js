const merge = require('webpack-merge');
const path = require('path');

module.exports = merge.smart(require('./webpack.base.js'), {
  mode: 'development',
  devtool: 'inline-source-map',

  output: {
    path: path.resolve('./debug'),
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: path.resolve('./debug'),
    compress: true,
    hot: true,
  },
});