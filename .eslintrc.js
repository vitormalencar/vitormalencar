/* eslint-disable no-undef */
/* eslint-disable no-undef */
module.exports = {
  env: { es6: true },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: { Atomics: "readonly", SharedArrayBuffer: "readonly" },
  parserOptions: { ecmaFeatures: { jsx: true } },
  plugins: ["react"],
  rules: {},
}
