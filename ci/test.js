#!/usr/bin/env node

/**
 * Run tests.
 */

'use strict'

process.chdir(`${__dirname}/..`)
require('../test/_setup')

const { runTasks } = require('ape-tasking')
const amocha = require('amocha')

runTasks('test', [
  () => amocha('test/*_test.jsx', {})
], true)
