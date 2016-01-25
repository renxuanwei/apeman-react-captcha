/**
 * Style for ApCaptcha.
 * @constructor ApCaptchaStyle
 */

"use strict";

import React, {PropTypes as types} from 'react';
import {ApStyle} from 'apeman-react-style';

/** @lends ApCaptchaStyle */
let ApCaptchaStyle = React.createClass({
    propTypes: {
        scoped: types.bool,
        style: types.object
    },
    getDefaultProps() {
        return {
            scoped: false,
            style: {}
        }
    },
    render() {
        let s = this,
            props = s.props;
        let data = {
                '.ap-captcha': {
                    display: `block`,
                    position: `relative`,
                    background: `#FAFAFA`,
                    padding: `8px`,
                    boxSizing: `border-box`,
                    textAlign: `center`
                },
                '.ap-captcha-image': {
                    background: `white`,
                    border: `1px solid #E0E0E0`
                },
                '.ap-captcha-image .ap-image-spinner': {
                    background: `transparent`
                },
                '.ap-captcha-refresh-button': {
                    display: `block`,
                    textAlign: `right`,
                    cursor: `pointer`,
                    padding: `4px 8px`,
                    position: `absolute`,
                    fontSize: `12px`,
                    right: 0,
                    bottom: 0,
                    background: `rgba(255,255,255,0.9)`
                },
                '.ap-captcha-refresh-button:active': {
                    opacity: 0.8
                },
                '.ap-captcha-spinner': {
                    position: `absolute`,
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 4,
                    background: `rgba(255,255,255,0.9)`,
                    color: `#CCC`
                }
            },
            smallMediaData = {},
            mediumMediaData = {},
            largeMediaData = {};
        return (
            <ApStyle scoped={props.scoped}
                     data={Object.assign(data, props.style)}
                     smallMediaData={smallMediaData}
                     mediumMediaData={mediumMediaData}
                     largeMediaData={largeMediaData}
            >{props.children}</ApStyle>
        );
    }
});

module.exports = ApCaptchaStyle;
