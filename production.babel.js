const update = require("immutability-helper");
const webpack = require("webpack");
const SharedConfig = require("./shared.babel.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const prodConfig = {
  bail: { $set: true },
  output: {
    $merge: {
      filename: "[name].bundle.js",
      chunkFilename: "[name].[hash].chunk.js",
      publicPath: "/",
    },
  },
  plugins: {
    $push: [
      new UglifyJSPlugin({
        uglifyOptions: {
          mangle: false,
          output: {
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebookincubator/create-react-app/issues/2488
            ascii_only: true,
          },
        },
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("development"),
        },
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
      }),
    ],
  },
};

module.exports = update(SharedConfig, prodConfig);
