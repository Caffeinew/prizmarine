const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  target: "web",
  entry: {
    app: ["./src/front.js"]
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
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
    }),
  ],
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle-front.js",
  },
  devServer: {
    host: '0.0.0.0',
    publicPath: '/build/',
    contentBase: path.resolve(__dirname, "./build"),
    watchContentBase: true,
    compress: true,
    hot: true
  },
  devtool: 'source-map',
}