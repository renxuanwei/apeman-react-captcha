/**
 * Test case for apCaptchaStyle.
 * Runs with mocha.
 */
'use strict'

const ApCaptchaStyle = require('../lib/ap_captcha_style.js')
const React = require('react')
const ReactDOM = require('react-dom/server')
const assert = require('assert')

describe('ap-captcha-style', () => {
  before((done) => {
    done()
  })

  after((done) => {
    done()
  })

  it('Render style component', (done) => {
    let style = ReactDOM.renderToString(
      React.createElement(ApCaptchaStyle, {})
    )
    console.log(style)
    assert.ok(style)
    done()
  })
})

/* global describe, before, after, it */
