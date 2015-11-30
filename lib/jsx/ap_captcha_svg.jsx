/**
 * SVG captcha.
 * DO NOT use svg base captcha in production, since it may be parsable by bots.
 * You need to convert to bitmap like png beforehand.
 * @constructor ApCaptchaSvg
 */

"use strict";

const React = require('react'),
    ReactDOM = require('react-dom'),
    randomval = require('randomval'),
    numcal = require('numcal'),
    types = React.PropTypes;

/** @lends ApCaptchaSvg */
let ApCaptchaSvg = React.createClass({

    //--------------------
    // Specs
    //--------------------

    propsTypes: {
        version: types.string,
        text: types.string.isRequired,
        width: types.number,
        height: types.number
    },

    getDefaultProps: function () {
        return {
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            text: null,
            width: 240,
            height: 120
        };
    },

    render: function () {
        let s = this,
            props = s.props;

        let color = '#555';
        let text = props.text.split('').map((letter, i, letters)=> {
            let indices = [0, 1, 2, 3, 4, 5],
                real = randomval.randomInt(0, indices.length - 1);

            let texts = indices.map((j) => {
                let rate = (i + 0.5) / letters.length,
                    key = `letter-${i}-${j}`;
                if (j === real) {
                    return s._renderLetter(letter, rate, {
                        key: key,
                        fill: color
                    });
                } else {
                    return s._renderLetter(s._dummyLetter(), rate, {
                        key: key,
                        fill: `rgba(255,255,255,${0.01 * Math.random()})`
                    });
                }
            });
            return (
                <g key={`letter-group-${i}`}>{texts}</g>
            );
        });
        let width = props.width,
            height = props.height;
        return (
            <svg version={props.version}
                 width={width}
                 height={height}
                 viewBox={`0 0 ${width} ${height}`}
            >
                <g>
                    {text}
                </g>
            </svg>
        )
    },

    //--------------------
    // Specs
    //--------------------

    _renderLetter: function (letter, rate, textProps) {
        let s = this,
            props = s.props;

        let padding = 8;

        let w = props.width - (padding * 2),
            h = props.height;

        let moveRange = numcal.min(h / 10, 20),
            move = randomval.randomInt.bind(randomval, moveRange * -1, moveRange);

        let x = padding + w * rate + move(),
            y = h / 2 + move(),
            rotate = randomval.randomInt(-45, 45);

        return (
            <text x={x}
                  y={y}
                  fontSize={h/3}
                  transform={`rotate(${rotate}, ${x}, ${y})`}
                {...textProps}
            >{letter}</text>
        )
    },

    _dummyLetter: function () {
        const letters = "1234567890abcdefg";
        let len = letters.length;
        return letters[randomval.randomInt(0, len - 1)];
    }

});

module.exports = ApCaptchaSvg;
