const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

module.exports = {
  entry: "./app/index.js",
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(js)$/, use: "babel-loader" },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "app/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": dotenv.parsed,
    }),
  ],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
