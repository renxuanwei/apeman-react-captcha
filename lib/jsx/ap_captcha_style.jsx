/**
 * Style for ApCaptcha.
 * @constructor ApCaptchaStyle
 */

"use strict";

const React = require('react'),
    types = React.PropTypes,
    extend = require('extend'),
    ApStyle = require('apeman-react-style')['ApStyle'];

/** @lends ApCaptchaStyle */
let ApCaptchaStyle = React.createClass({
    propTypes: {
        scoped: types.bool,
        style: types.object
    },
    getDefaultProps: function () {
        return {
            scoped: false,
            style: {}
        }
    },
    render: function () {
        let s = this,
            props = s.props;
        let data = {
            '.ap-captcha':{

            }
        },
            smallMediaData = {},
            mediumMediaData = {},
            largeMediaData = {};
        return (
            <ApStyle scoped={props.scoped}
                     data={extend(data, props.style)}
                     smallMediaData={smallMediaData}
                     mediumMediaData={mediumMediaData}
                     largeMediaData={largeMediaData}
            >{props.children}</ApStyle>
        );
    }
});

module.exports = ApCaptchaStyle;
