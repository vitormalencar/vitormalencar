/* eslint-disable no-undef */
module.exports = {
  env: { browser: true, es6: true },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: { "react/prop-types": 0 },
}
