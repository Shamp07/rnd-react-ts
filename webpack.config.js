const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index",

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }, {
        test:/\.css$/,
        use:['style-loader','css-loader'],
      }
    ]
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      // index.html에 output에서 만들어진 bundle.js를 적용하여, dist에 새로운 html 파일 생성
      template: `./public/index.html`
    })
  ],

  devServer: {
    static: path.join(__dirname, "dist"), // 이 경로에 있는 파일이 변경될 때 번들을 다시 컴파일
    compress: true,
    port: 8080
  },
};