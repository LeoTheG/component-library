const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction =
  typeof NODE_ENV !== "undefined" && NODE_ENV === "production";
const mode = isProduction ? "production" : "development";
const devtool = isProduction ? false : "inline-source-map";
const devMode = !isProduction;
module.exports = {
  entry: "./src/index.tsx",
  target: "web",
  mode,
  devtool,
  //   plugins: [
  //     new MiniCssExtractPlugin({
  //       // Options similar to the same options in webpackOptions.output
  //       // all options are optional
  //       ignoreOrder: false, // Enable to remove warnings about conflicting order
  //       filename: devMode ? "[name].css" : "[name].[hash].css",
  //       chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
  //     }),
  //   ],

  //   optimization: {
  //     splitChunks: {
  //       cacheGroups: {
  //         styles: {
  //           name: "styles",
  //           test: /\.css$/,
  //           chunks: "all",
  //           enforce: true,
  //         },
  //       },
  //     },
  //   },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      //   {
      //     test: /\.css$/i,
      //     use: [
      //       {
      //         loader: MiniCssExtractPlugin.loader,
      //         options: {
      //           // only enable hot in development
      //           hmr: process.env.NODE_ENV === "development",
      //           // if hmr does not work, this is a forceful method.
      //           reloadAll: true,
      //         },
      //       },
      //       "css-loader",
      //     ],
      //   },
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
    extensions: [".tsx", ".ts", ".js", ".css"],
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
