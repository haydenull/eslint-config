/** @type {import('cz-git').CommitizenGitOptions} */
module.exports = {
  ...require('./cz'),
  scopes: ['eslint', 'prettier', 'tsconfig', 'verifyCommit', 'cz'],
}