module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // https://eslint.org/docs/latest/use/configure/language-options#specifying-environments
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: [
    /**
     * https://eslint.org/docs/latest/rules/#site_top
     * source code: https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js
     */
    'eslint:recommended',
  ],
  rules: {
    'no-unused-vars': 'warn',
    'no-underscore-dangle': 'off',
    'prefer-object-spread': 'off',
  }
}