/**
 * Test case for ap-captcha-svg.
 * Runs with mocha.
 */
'use strict'

import ApCaptchaSvg from '../lib/ap_captcha_svg'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('ap-captcha-svg', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <ApCaptchaSvg/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
