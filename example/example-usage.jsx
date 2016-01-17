"use strict";

import React from 'react';
import {ApCaptcha, ApCaptchaStyle} from 'apeman-react-captcha';

let ExampleComponent = React.createClass({
    getInitialState() {
        return {
            captchaSrc: "./captcha.svg"
        }
    },
    render() {
        let s = this,
            state = s.state;
        return (
            <div>
                <ApCaptchaStyle scoped></ApCaptchaStyle>
                <ApCaptcha src={state.captchaSrc}
                           refreshText="refresh"
                           onRefresh={s.refreshCaptcha}/>
            </div>
        )
    },
    refreshCaptcha() {
        let s = this;
        let time = new Date().getTime();
        console.log('refreshCaptcha:', time);
        s.setState({
            captchaSrc: `./images/mock-captcha.svg?t=${time}`
        })
    }
});
