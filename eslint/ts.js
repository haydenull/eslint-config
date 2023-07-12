module.exports = {
  extends: [
    // introduce eslint-recommended and my own rules
    '@haydenull/fabric/eslint/basic',
    // disables rules from eslint:recommended which are already handled by TypeScript https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
    'plugin:@typescript-eslint/eslint-recommended',
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts
    'plugin:@typescript-eslint/recommended',
    // disable formatting rules https://typescript-eslint.io/linting/troubleshooting/formatting
    'prettier',
  ],
  settings: {
    // support import modules from TypeScript files in JavaScript files
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        // https://typescript-eslint.io/packages/parser/#project
        project: ['tsconfig.json'],
      },
    },
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  }
}