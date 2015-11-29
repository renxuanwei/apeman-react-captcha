"use strict";

const React = require('react');
const ApCaptcha = require('../../lib/ap_captcha');

let Demo = React.createClass({
    render: function () {
        return (
            <div>
                <ApCaptcha></ApCaptcha>
            </div>
        );
    }
});

module.exports = Demo;