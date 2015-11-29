/**
 * SVG captcha.
 * DO NOT use svg base captcha in production, since it may be parsable by bots.
 * You need to convert to bitmap like png beforehand.
 * @constructor ApCaptchaSvg
 */

"use strict";

const React = require('react'),
    ReactDOM = require('react-dom'),
    types = React.PropTypes;

/** @lends ApCaptchaSvg */
let ApCaptchaSvg = React.createClass({

    //--------------------
    // Specs
    //--------------------

    propsTypes: {
        version: types.string,
        text: types.string.isRequired
    },

    getDefaultProps: function () {
        return {
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            text: null
        };
    },

    render: function () {
        let s = this,
            props = s.props;

        let text = props.text.split('').map((letter, i)=> {
            return (
                <g key={`letter-group-${i}`}>
                    {s._renderLetter(letter)}
                </g>
            );
        });
        return (
            <svg version={props.version}>
                <g>
                    {text}
                </g>
            </svg>
        )
    },

    //--------------------
    // Specs
    //--------------------

    _renderLetter: function (letter, i) {
        let s = this;

        let x = 0,
            y = 20,
            color = '#555';

        return (
            <text x={x}
                  y={y}
                  fill={color}
            >{letter}</text>
        )
    }
});

module.exports = ApCaptchaSvg;
