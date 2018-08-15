const PUBLIC_PATH = require('path').join(__dirname, 'public');
const { initBackendStub } = require('./utils/backend-stub');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          emitError: true,
          emitWarning: true,
          failOnError: true,
          failOnWarning: false,
        }
      },
    ],
  },
  output: {
    path: PUBLIC_PATH,
    filename: 'index.js'
  },
  devServer: {
    contentBase: PUBLIC_PATH,
    compress: true,
    port: 9000,
    before: initBackendStub
  }
};
