/**
 * Test case for apCaptcha.
 * Runs with mocha.
 */
'use strict'

const ApCaptcha = require('../lib/ap_captcha.js').default
const React = require('react')
const ReactDOM = require('react-dom/server')
const assert = require('assert')

describe('ap-captcha', () => {
  before((done) => {
    done()
  })

  after((done) => {
    done()
  })

  it('Render component.', (done) => {
    let html = ReactDOM.renderToString(
      React.createElement('div',
        {},
        React.createElement(ApCaptcha, {})
      )
    )
    console.log(html)
    assert.ok(html)
    done()
  })
})

/* global describe, before, after, it */
