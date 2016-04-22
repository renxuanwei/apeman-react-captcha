'use strict'

import React from 'react'
import ApCaptcha from '../../lib/ap_captcha'

let Demo = React.createClass({
  getInitialState () {
    return {
      captchaSrc: "./images/mock-captcha.svg"
    }
  },
  render () {
    const s = this,
      state = s.state;
    return (
      <div>
        <ApCaptcha src={state.captchaSrc}
                   refreshText="refresh"
                   spinning={state.spinning}
                   onRefresh={s.refreshCaptcha}/>
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

module.exports = Demo;