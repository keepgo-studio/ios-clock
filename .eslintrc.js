module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true,
    commonjs: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./src/tsconfig.node.json", "./src/tsconfig.es.json"],
    tsconfigRootDir: __dirname,
  },
  root: true,
  ignorePatterns: ["/*", "!/src", "**/webpack.config.js"],
  plugins: ["@typescript-eslint"],
};
