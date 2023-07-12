const { isPackageExists } = require('local-pkg')

const isTsProject = isPackageExists('typescript')

if (!isTsProject) {
  console.warn('[@haydenull/fabric] TypeScript is not installed, fallback to JS only.')
}

module.exports = {
  extends: [
    isTsProject ? '@haydenull/fabric/eslint/ts' : '@haydenull/fabric/eslint/basic',
  ]
}