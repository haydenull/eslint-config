# eslint-config
A collection of configuration files containing prettier, eslint

## Usage

```shell
pnpm add @haydenull/fabric -D
```

## eslint-config

in `.eslintrc.cjs`

```js
module.exports = {
  extends: [require.resolve('@haydenull/fabric/eslint/react')],
}
```

## prettier

in `prettier.config.cjs`

```js
module.exports = {
  ...require("@haydenull/fabric/prettier"),
}
```

## verify commit

1. install [husky](https://typicode.github.io/husky/)
2. add commit-msg hook
```shell
npx husky add .husky/commit-msg 'npx haydenull-fabric verify-commit'
```
