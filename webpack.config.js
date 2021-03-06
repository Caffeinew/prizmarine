const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  target: "web",
  output: {
    filename: "[fullhash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[name][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/i,
        type: "asset",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s[ac]|c)ss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/favicon.svg",
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/icons", to: "assets/icons" },
        { from: "src/manifest.json", to: "manifest.json" },
        { from: "src/robots.txt", to: "robots.txt" },
        { from: "src/assets/logo.webp", to: "assets/logo.webp" },
      ],
    }),
    new WorkboxPlugin.GenerateSW({exclude: [/\.(?:png)$/]}),
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
