const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html", 
  filename: "./index.html"
});

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
      publicPath: 'main.js',
    },
    port: 8080,
    proxy: {
      '/api': 'http:localhost:3000'
    },
  },
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};