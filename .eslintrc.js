module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["standard", "plugin:prettier/recommended"],
  plugins: ["json", "prettier"],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        // 传入prettier的配置
        trailingComma: "none",
        printWidth: 120
      }
    ]
  },
  parserOptions: {
    ecmaVersion: 2021
  }
};
