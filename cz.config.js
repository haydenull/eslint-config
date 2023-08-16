/** @type {import('czg').CommitizenGitOptions} */
module.exports = {
  ...require('./cz'),
  scopes: ['eslint', 'prettier', 'tsconfig', 'verifyCommit', 'cz'],
}