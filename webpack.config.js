const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'client', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|jsx|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.(css|scss)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|JPG)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client', 'index.html'),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, '/build'),
      publicPath: '/',
    },
    hot: true,
    historyApiFallback: true,
    compress: true,
    port: 8080,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:3000',
        // "/api": {
        //   target: "http://localhost:3000",
        //   // target: "http://localhost:3000/api",
        //   // changeOrigin: true,
        //   // rewrite: (path) => path.replace(/^\/api/, ""),
        // },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
