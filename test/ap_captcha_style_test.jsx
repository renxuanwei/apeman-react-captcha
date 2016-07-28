/**
 * Test case for ap-captcha-style.
 * Runs with mocha.
 */
'use strict'

import ApCaptchaStyle from '../lib/ap_captcha_style'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('ap-captcha-style', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <ApCaptchaStyle/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
