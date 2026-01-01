// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // for js
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // for html
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // for css
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      }, // for images loaded in html file
      { 
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      } // for images loaded in js
    ],
  },
};