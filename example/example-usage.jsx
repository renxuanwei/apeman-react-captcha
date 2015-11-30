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
        return (
            <div>
                <ApCaptchaStyle scoped></ApCaptchaStyle>
                <ApCaptcha></ApCaptcha>
            </div>
        )
    },
    refreshCaptcha: function () {
        let s = this;
        let time = new Date().getTime();
        console.log('refreshCaptcha', time);
        s.setState({
            captchaSrc: `./images/mock-captcha.svg?t=${time}`
        })
    }
});
