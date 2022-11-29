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
    project: [
      "./src/tsconfig.json",
      "./src/app/client/tsconfig.json",
      "./src/app/server/tsconfig.json",
    ],
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint"],
  root: true,
  ignorePatterns: ["webpack.config.js", ".eslintrc.js"],
};
