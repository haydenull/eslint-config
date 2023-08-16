# @haydenull/fabric
A collection of configuration files containing prettier, eslint, tsconfig and more

## Usage

Install the package
```shell
pnpm add @haydenull/fabric -D
```

## ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) eslint-config

in `.eslintrc.cjs`

```js
module.exports = {
  extends: [require.resolve('@haydenull/fabric/eslint/react')],
}
```

## ![Prettier](https://img.shields.io/badge/Prettier-1a2b34?style=for-the-badge&logo=prettier&logoColor=white) prettier

in `prettier.config.cjs`

```js
module.exports = {
  ...require("@haydenull/fabric/prettier"),
}
```

## ![Git](https://img.shields.io/badge/Git-e84e32?style=for-the-badge&logo=git&logoColor=white) verify commit

1. install [husky](https://typicode.github.io/husky/)
2. add commit-msg hook
```shell
npx husky add .husky/commit-msg 'npx haydenull-fabric verify-commit'
```

## ![TypeScript](https://img.shields.io/badge/TypeScript-3078c6?style=for-the-badge&logo=typescript&logoColor=white) tsconfig

in `tsconfig.json`
```json
{
  "extends": "@haydenull/fabric/tsconfig/tsconfig.json",
}
```

## ![czg](https://img.shields.io/badge/czg-1a2b34?style=for-the-badge&logo=cz-git&logoColor=white) [czg](https://cz-git.qbb.sh/cli/)

in `cz.config.js`
```js
/** @type {import('cz-git').CommitizenGitOptions} */
module.exports = {
  ...require('@haydenull/fabric/cz'),
  scopes: [/** your scopes */],
}
```

## Recommended

### Use `lint-staged`

1. Install

```shell
pnpm add -D lint-staged
```

2. in `package.json`

```json
{
  "lint-staged": {
    "**/*.{js,jsx,ts,tsx}": [
      "npx prettier --write",
      "npx eslint --fix"
    ]
  }
}
```

3. add git hooks

```shell
npx husky add .husky/pre-commit 'npx lint-staged'
```

### type check before commit

1. in `package.json`
```json
{
  "scripts": {
    "typecheck": "tsc --noEmit"
  }
}
```
2. add git hooks

```shell
npx husky add .husky/pre-commit 'npm run typecheck'
```

### spell check

Install [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) Plugin for VSCode.
