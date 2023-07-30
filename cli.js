#!/usr/bin/env node

const { Command } = require('commander')
const verifyCommit = require('./verifyCommit/index.js')
const packageJSON = require('./package.json')

const program = new Command()

program
  .name('@haydenull/fabric')
  .description('haydenull\'s code standard')
  .version(packageJSON.version)

program.command('verify-commit')
  .description('verify commit message')
  .action(() => {
    verifyCommit()
  })

program.parse()