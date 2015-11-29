/**
 * Test case for apCaptchaStyle.
 * Runs with mocha.
 */
"use strict";

const ApCaptchaStyle = require('../lib/ap_captcha_style.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-captcha-style', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Render style component', (done) => {
        let style = ReactDOM.renderToString(
            React.createElement(ApCaptchaStyle, {})
        );
        console.log(style);
        assert.ok(style);
        done();
    });
});

