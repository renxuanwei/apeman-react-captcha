'use strict'

import React from 'react'
import ApCaptcha from '../../lib/ap_captcha'
import {ApButtonStyle} from 'apeman-react-button'
import {ApImageStyle} from 'apeman-react-image'
import {ApSpinnerStyle} from 'apeman-react-spinner'
import ApCaptchaStyle from '../../lib/ap_captcha_style'

const Demo = React.createClass({
  getInitialState () {
    return {
      captchaSrc: "./images/mock-captcha.svg"
    }
  },
  render () {
    const s = this
    let { state } = s
    return (
      <div>
        <ApSpinnerStyle highlightColor="#b35600"/>
        <ApButtonStyle highlightColor="#b35600"/>
        <ApImageStyle />
        <ApCaptchaStyle />
        <ApCaptcha src={ state.captchaSrc }
                   refreshText="refresh"
                   spinning={ state.spinning }
                   onRefresh={ s.refreshCaptcha }/>
      </div>
    )
  },
  refreshCaptcha() {
    const s = this
    let time = new Date().getTime()
    console.log('refreshCaptcha', time)
    s.setState({
      spinning: true,
      captchaSrc: null
    })
    setTimeout(() => {
      s.setState({
        captchaSrc: `./images/mock-captcha.svg?t=${time}`,
        spinning: false
      })
    }, 1500)
  }
})

export default Demo