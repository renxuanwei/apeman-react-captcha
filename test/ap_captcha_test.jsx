/**
 * Test case for ap-captcha.
 * Runs with mocha.
 */
'use strict'

import ApCaptcha from '../lib/ap_captcha'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('ap-captcha', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <ApCaptcha/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
