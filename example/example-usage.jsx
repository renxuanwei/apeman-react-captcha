"use strict";

const React = require('react'),
    apemanReactCaptcha = require('apeman-react-captcha');

const ApCaptcha = apemanReactCaptcha.ApCaptcha,
    ApCaptchaStyle = apemanReactCaptcha.ApCaptchaStyle;

let ExampleComponent = React.createClass({
    render: function () {
        return (
            <div>
                <ApCaptchaStyle scoped></ApCaptchaStyle>
                <ApCaptcha></ApCaptcha>
            </div>
        )
    }
});
