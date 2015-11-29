/**
 * Test case for apCaptchaSvg.
 * Runs with mocha.
 */
"use strict";

const ApCaptchaSvg = require('../lib/ap_captcha_svg.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    mkdirp = require('mkdirp'),
    fs = require('fs'),
    assert = require('assert');

describe('ap-captcha-svg', () => {

    const tmpDir = `${__dirname}/../tmp`;

    before((done) => {
        mkdirp.sync(tmpDir);
        done();
    });

    after((done) => {
        done();
    });


    it('Ap captcha svg', (done) => {
        let xml = ReactDOM.renderToStaticMarkup(
            React.createElement('html', {},
                React.createElement('body', {},
                    React.createElement(ApCaptchaSvg, {
                        text: '1234'
                    })
                )
            )
        );
        fs.writeFile(
            `${tmpDir}/testing-svg.html`,
            xml,
            (err) => {
                assert.ifError(err);
                done();
            }
        );
    });
});

