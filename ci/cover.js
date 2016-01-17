#!/usr/bin/env node

/**
 * Measure test coverage.
 */

"use strict";

process.chdir(__dirname + '/..');

const apeTasking = require('ape-tasking'),
    apeCovering = require('ape-covering');

apeTasking.runTasks('cover', [
    (callback) => {
        apeCovering.measureCoverage('_mocha', [
            '-t', 4000, 'test/*_test.js'
        ], {
            dir: 'coverage'
        }, callback);
    }
], true);
