"use strict";

const React = require('react');

const ApCaptcha = require('../../lib/ap_captcha');

let Demo = React.createClass({
    getInitialState: function () {
        return {
            captchaSrc: "./images/mock-captcha.svg"
        }
    },
    render: function () {
        let s = this,
            state = s.state;
        return (
            <div>
                <ApCaptcha src={state.captchaSrc}
                           refreshText="refresh"
                           onRefresh={s.refreshCaptcha}>
                </ApCaptcha>
            </div>
        );
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

module.exports = Demo;