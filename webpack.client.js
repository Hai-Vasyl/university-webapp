const path = require("path")
const webpack = require("webpack")
const HTMLWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const dotenv = require("dotenv")
// import path from "path"
// import webpack from "webpack"
// import HTMLWebPackPlugin from "html-webpack-plugin"
// import MiniCssExtractPlugin from "mini-css-extract-plugin"
// import { CleanWebpackPlugin } from "clean-webpack-plugin"
// import CopyWebpackPlugin from "copy-webpack-plugin"
// import dotenv from "dotenv"

const env = dotenv.config().parsed

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next])
  return prev
}, {})

const config = {
  target: "web",
  mode: "development",
  entry: "./client/src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist", "client"),
  },
  resolve: {
    extensions: [
      ".js",
      ".json",
      ".jsx",
      ".css",
      ".scss",
      ".tsx",
      ".ts",
      ".svg",
      ".png",
    ],
  },
  module: {
    rules: [
      { test: /\.(png|jpg|jpeg|gif|svg)$/, use: ["file-loader"] },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.module\.(c|sc|sa)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(c|sc|sa)ss$/,
        exclude: /\.module.(c|sc|sa)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(envKeys),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HTMLWebPackPlugin({
      template: "./client/public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "client", "public", "favicon.ico"),
          to: path.resolve(__dirname, "dist", "client"),
        },
      ],
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist", "client"),
    compress: true,
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  devtool: "inline-source-map",
}

module.exports = config
