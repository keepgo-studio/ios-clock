const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const tsConfigPath = path.join(__dirname, "tsconfig.es.json");
const sassRootPath = path.join(__dirname, "process", "app");

module.exports = {
  mode: "development",

  resolve: {
    modules: ["node_modules"],

    extensions: [".ts", ".js"],

    plugins: [
      new TsconfigPathsPlugin({
        configFile: tsConfigPath,
      }),
    ],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: tsConfigPath,
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["css-loader", "sass-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};
