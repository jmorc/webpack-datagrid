const BabelLoader = require("./loaders/babelLoader");
const path = require("path");
const webpack = require("webpack");

const entry = {
  app: [path.resolve("./app/main")],
};

module.exports = {
  output: {
    path: path.resolve("./app/assets/javascripts"),
    filename: "[name].bundle.js",
    publicPath: "/assets/",
  },
  entry: entry,
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx"],
  },
  module: {
    strictExportPresence: true,
    rules: [BabelLoader],
  },
  plugins: [
    new webpack.ProvidePlugin({
      update: "immutability-helper",
    }),
  ],
  mode: "development",
  node: {
    __filename: true,
  },
};
