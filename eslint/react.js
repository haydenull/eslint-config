const { isPackageExists } = require('local-pkg')

const isTsProject = isPackageExists('typescript')

if (!isTsProject) {
  console.warn('[@haydenull/fabric] TypeScript is not installed, fallback to JS only.')
}

module.exports = {
  plugins: ['react'],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    isTsProject ? './ts' : './basic',
  ],
  settings: {
    'react': {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],
  },
}