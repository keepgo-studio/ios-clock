const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const common_config = {
  mode: process.env.NODE_ENV || "development",
};

module.exports = [
  {
    ...common_config,

    entry: path.resolve(__dirname, "src", "main"),

    plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "src", "app"),
            to: path.resolve(__dirname, "dist"),
            context: "public",
          },
        ],
      }),
    ],
  },
];
