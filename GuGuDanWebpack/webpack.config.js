const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'word-relay-setting',
  mode: 'development', // 실서비스: production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  
  entry: {
    app: ['./client'],
  },  // 입력

  target: 'web',

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR'],
            },
            debug: true,
          }], 
          '@babel/preset-react'
        ],
        plugins: [],
      },
    }],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },  // 출력
}