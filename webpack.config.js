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
      {
        test: /\.(jpg|png|svg)$/,
        loader: "url-loader",
        include: path.resolve(__dirname, "./src/public"),
        options: {
          esModule: false,
        },
      },
      //   {
      //     test: /\.(jpg|png|svg)$/,
      //     loader: "url-loader",
      //   },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      react: path.resolve("./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
      //   webpack: path.resolve(__dirname, "./node_modules/webpack"),
      public: path.resolve(__dirname, "src", "public"),
    },
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs2",
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
  },
  //   devServer: {
  //     contentBase: path.join(__dirname, "dist"),
  //     compress: true,
  //     port: 9000,
  //   },
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
