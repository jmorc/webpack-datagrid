const path = require("path");

module.exports = {
  test: /\.(js|jsx|ts|tsx)$/,
  include: path.resolve("./app"),
  loader: "babel-loader",
  options: {
    babelrc: true,
    cacheDirectory: "/tmp/babel-cache",
  },
};
