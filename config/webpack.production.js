const merge = require('webpack-merge');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge.smart(require('./webpack.base.js'), {
  mode: 'production',
  devtool: 'source-map',

  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js',
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});