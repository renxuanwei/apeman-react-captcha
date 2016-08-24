/**
 * Test case for ap-captcha-svg.
 * Runs with mocha.
 */
'use strict'

import ApCaptchaSvg from '../lib/ap_captcha_svg'
import React from 'react'
import assert from 'assert'
import {shallow} from 'enzyme'
import writeout from '../writeout'

describe('ap-captcha-svg', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', (done) => {
    let element = shallow(
      <ApCaptchaSvg text='hoge'/>
    )
    assert.ok(element)

    writeout(
      `${__dirname}/../tmp/foo/bar.json`,
      { count: 10 }
    ).then(() => done())
  })
})

/* global describe, before, after, it */
