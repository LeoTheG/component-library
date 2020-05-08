const path = require("path");

const isProduction =
  typeof NODE_ENV !== "undefined" && NODE_ENV === "production";
const mode = isProduction ? "production" : "development";
const devtool = isProduction ? false : "inline-source-map";
module.exports = {
  entry: "./src/index.tsx",
  target: "web",
  mode,
  devtool,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            compilerOptions: {
              sourceMap: !isProduction,
            },
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
    libraryTarget: "umd",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  //   {
  //     entry: "./src/server.ts",
  //     target: "node",
  //     mode,
  //     devtool,
  //     module: {
  //       rules: [
  //         {
  //           test: /\.tsx?$/,
  //           use: "ts-loader",
  //           exclude: /node_modules/,
  //         },
  //       ],
  //     },
  //     resolve: {
  //       extensions: [".tsx", ".ts", ".js"],
  //     },
  //     output: {
  //       filename: "server.js",
  //       path: path.resolve(__dirname, "build"),
  //     },
  //     node: {
  //       __dirname: false,
  //       __filename: false,
  //     },
  //   },
};
