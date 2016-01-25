/**
 * SVG captcha.
 * DO NOT use svg base captcha in production, since it may be parsable by bots.
 * You need to convert to bitmap like png beforehand.
 * @constructor ApCaptchaSvg
 */

"use strict";

import React, {PropTypes as types} from 'react';
import randomval from 'randomval';

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

    getDefaultProps() {
        return {
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            text: null,
            width: 256,
            height: 92
        };
    },

    render() {
        let s = this,
            props = s.props;

        let color = '#555';

        let width = props.width,
            height = props.height;

        let backgrounds = [0, 1, 2, 3].map((val, i, arr)=> {
            let len = arr.length;
            let margin = width * 0.2;
            let rate = (i + 0.5) / len;
            return s._stripeBlock(rate, color, {
                key: `bg-${i}`,
                width: parseInt(width / len + (margin * 2)),
                height: parseInt(height + (margin * 2)),
                x: parseInt(width * rate - margin),
                y: parseInt(0 - margin)
            });
        });

        let texts = props.text.split('').map((letter, i, letters)=> {
            let indices = [0, 1, 2, 3, 4, 5],
                real = randomval.randomInt(0, indices.length - 1);
            let texts = indices.map((j) => {
                let rate = i / letters.length,
                    key = `letter-${i}-${j}`;
                if (j === real) {
                    return s._renderLetter(letter, rate, {
                        key: key,
                        fill: color
                    });
                } else {
                    return s._renderLetter(s._dummyLetter(), rate, {
                        key: key,
                        fill: `rgba(255,255,255,${0.01 * randomval.randomInt(0,30)})`
                    });
                }
            });
            return (
                <g key={`letter-group-${i}`}>{texts}</g>
            );
        });
        return (
            <svg version={props.version}
                 width={width}
                 height={height}
                 xmlns={props.xmlns}
                 viewBox={`0 0 ${width} ${height}`}
            >
                <g>{backgrounds}</g>
                <g>{texts}</g>
            </svg>
        )
    },

    //--------------------
    // Specs
    //--------------------

    _renderLetter(letter, rate, textProps) {
        let s = this,
            props = s.props;

        let padding = 16;

        let w = props.width - (padding * 2),
            h = props.height;

        let moveRange = h / 20,
            move = randomval.randomInt.bind(randomval, moveRange * -1, moveRange);

        let fontSize = h * 0.8;
        let x = padding + w * rate + (fontSize / 4),
            y = fontSize,
            rotateRange = 40,
            rotate = randomval.randomInt(-rotateRange, rotateRange);

        return (
            <text x={parseInt(x)}
                  y={parseInt(y)}
                  fontSize={parseInt(fontSize)}
                  transform={`translate(${move()}, ${move()}) rotate(${parseInt(rotate)}, ${parseInt(x)}, ${parseInt(y)})`}
                {...textProps}
            >{letter}</text>
        )
    },

    _dummyLetter() {
        const letters = "1234567890abcdefg";
        let len = letters.length;
        return letters[randomval.randomInt(0, len - 1)];
    },

    _stripeBlock(rate, color, blockProps) {
        let s = this,
            props = s.props;

        let rotate = randomval.randomInt(-90, 90);

        let lines = [],
            lineWidth = 1;
        let w = blockProps.width,
            h = blockProps.height;

        let left = w * -0.5,
            right = w * 1.5;

        for (let x = left; x < right; x += lineWidth * 6) {
            lines.push(
                <line x1={parseInt(x)}
                      y1={parseInt(0)}
                      x2={parseInt(x)}
                      y2={parseInt(h)}
                      lineWidth={parseInt(lineWidth)}
                      key={`line-${x}`}
                      stroke={color}
                />
            );
        }

        return (
            <svg {...blockProps}>
                <g transform={`scale(1.3) rotate(${parseInt(rotate)}, ${parseInt(blockProps.width / 2)}, ${parseInt(blockProps.height / 2)})`}>
                    {lines}
                </g>
            </svg>
        )
    }

});

module.exports = ApCaptchaSvg;
