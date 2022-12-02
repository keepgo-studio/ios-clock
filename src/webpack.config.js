const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const tsConfigPath = path.join(__dirname, "tsconfig.es.json");

module.exports = {
  mode: "development",

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
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },

  resolve: {
    modules: ["node_modules"],

    extensions: [".ts", ".js"],

    plugins: [
      new TsconfigPathsPlugin({
        configFile: tsConfigPath,
      }),
    ],
  },
};
