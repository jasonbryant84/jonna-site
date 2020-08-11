const webpack = require('webpack');

module.exports = {
  entry: './pages/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-inline-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  ...
};