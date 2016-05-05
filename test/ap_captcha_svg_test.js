/**
 * Test case for apCaptchaSvg.
 * Runs with mocha.
 */
'use strict'

const ApCaptchaSvg = require('../lib/ap_captcha_svg.js').default
const React = require('react')
const ReactDOM = require('react-dom/server')
const mkdirp = require('mkdirp')
const fs = require('fs')
const assert = require('assert')

describe('ap-captcha-svg', () => {
  const tmpDir = `${__dirname}/../tmp`

  before((done) => {
    mkdirp.sync(tmpDir)
    done()
  })

  after((done) => {
    done()
  })

  it('Ap captcha svg', (done) => {
    let xml = ReactDOM.renderToStaticMarkup(
      React.createElement('html', {},
        React.createElement('body', {},
          React.createElement(ApCaptchaSvg, {
            text: '1234'
          })
        )
      )
    )
    fs.writeFile(
      `${tmpDir}/testing-svg.html`,
      xml,
      (err) => {
        assert.ifError(err)
        done()
      }
    )
  })
})

/* global describe, before, after, it */
