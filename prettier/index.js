/** @type {import("prettier").Config} */
module.exports = {
  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],
  // https://prettier.io/docs/en/options.html
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'all',
  printWidth: 120,
  proseWrap: 'never',
  endOfLine: 'lf',
  semi: false,
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
}
