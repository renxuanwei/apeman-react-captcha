"use strict";

const React = require('react'),
    apemanReactCaptcha = require('apeman-react-captcha');

const ApCaptcha = apemanReactCaptcha.ApCaptcha,
    ApCaptchaStyle = apemanReactCaptcha.ApCaptchaStyle;

let ExampleComponent = React.createClass({
    getInitialState: function () {
        return {
            captchaSrc: "./captcha.svg"
        }
    },
    render: function () {
        let s = this,
            state = s.state;
        return (
            <div>
                <ApCaptchaStyle scoped></ApCaptchaStyle>
                <ApCaptcha src={state.captchaSrc}
                           refreshText="refresh"
                           onRefresh={s.refreshCaptcha} />
            </div>
        )
    },
    refreshCaptcha: function () {
        let s = this;
        let time = new Date().getTime();
        console.log('refreshCaptcha:', time);
        s.setState({
            captchaSrc: `./images/mock-captcha.svg?t=${time}`
        })
    }
});
