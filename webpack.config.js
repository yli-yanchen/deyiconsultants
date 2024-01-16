const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "client", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: /\.(css|scss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|JPG)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "client", "index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "/build"),
      publicPath: "/",
    },
    hot: true,
    historyApiFallback: true,
    compress: true,
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        // target: "http://localhost:3000/api",
        // changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/about": {
        target: "http://localhost:3000",
        // target: "http://localhost:3000/about",
        // changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/about/, ""),
      },
      "/expertice": {
        target: "http://localhost:3000",
        // target: "http://localhost:3000/expertice",
        // changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/expertice/, ""),
      },
      "/project": {
        target: "http://localhost:3000",
        // target: "http://localhost:3000/project",
        // changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/project/, ""),
      },
      "/contact": {
        target: "http://localhost:3000",
        // target: "http://localhost:3000/contact",
        // changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/contact/, ""),
      },
      "/login": {
        target: "http://localhost:3000",
        // target: "http://localhost:3000/login",
        // changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/login/, ""),
      },
    },
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
