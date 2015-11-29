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
    displayName: 'ApCaptchaSvg',

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

        let text = props.text.split('').map((letter, i) => {
            return React.createElement(
                'g',
                { key: `letter-group-${ i }` },
                s._renderLetter(letter)
            );
        });
        return React.createElement(
            'svg',
            { version: props.version },
            React.createElement(
                'g',
                null,
                text
            )
        );
    },

    //--------------------
    // Specs
    //--------------------

    _renderLetter: function (letter, i) {
        let s = this;

        let x = 0,
            y = 20,
            color = '#555';

        return React.createElement(
            'text',
            { x: x,
                y: y,
                fill: color
            },
            letter
        );
    }
});

module.exports = ApCaptchaSvg;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzeC9hcF9jYXB0Y2hhX3N2Zy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU9BLFlBQVksQ0FBQzs7QUFFYixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO01BQzFCLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO01BQy9CLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUzs7O0FBQUMsQUFHNUIsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7Ozs7OztBQU1qQyxjQUFVLEVBQUU7QUFDUixlQUFPLEVBQUUsS0FBSyxDQUFDLE1BQU07QUFDckIsWUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVTtLQUNoQzs7QUFFRCxtQkFBZSxFQUFFLFlBQVk7QUFDekIsZUFBTztBQUNILG1CQUFPLEVBQUUsS0FBSztBQUNkLGlCQUFLLEVBQUUsNEJBQTRCO0FBQ25DLGdCQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7S0FDTDs7QUFFRCxVQUFNLEVBQUUsWUFBWTtBQUNoQixZQUFJLENBQUMsR0FBRyxJQUFJO1lBQ1IsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7O0FBRXBCLFlBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUk7QUFDOUMsbUJBQ0k7O2tCQUFHLEdBQUcsRUFBRSxDQUFDLGFBQWEsR0FBRSxDQUFDLEVBQUMsQ0FBQyxBQUFDO2dCQUN2QixDQUFDLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQzthQUN4QixDQUNOO1NBQ0wsQ0FBQyxDQUFDO0FBQ0gsZUFDSTs7Y0FBSyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQUFBQztZQUN4Qjs7O2dCQUNLLElBQUk7YUFDTDtTQUNGLENBQ1Q7S0FDSjs7Ozs7O0FBTUQsaUJBQWEsRUFBRSxVQUFVLE1BQU0sRUFBRSxDQUFDLEVBQUU7QUFDaEMsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDOztBQUViLFlBQUksQ0FBQyxHQUFHLENBQUM7WUFDTCxDQUFDLEdBQUcsRUFBRTtZQUNOLEtBQUssR0FBRyxNQUFNLENBQUM7O0FBRW5CLGVBQ0k7O2NBQU0sQ0FBQyxFQUFFLENBQUMsQUFBQztBQUNMLGlCQUFDLEVBQUUsQ0FBQyxBQUFDO0FBQ0wsb0JBQUksRUFBRSxLQUFLLEFBQUM7O1lBQ2hCLE1BQU07U0FBUSxDQUNuQjtLQUNKO0NBQ0osQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDIiwiZmlsZSI6ImFwX2NhcHRjaGFfc3ZnLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaXRha2EvcHJvamVjdHMvYXBlbWFuLXJlYWN0LWxhYm8vYXBlbWFuLXJlYWN0LWNhcHRjaGEvbGliL2pzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU1ZHIGNhcHRjaGEuXG4gKiBETyBOT1QgdXNlIHN2ZyBiYXNlIGNhcHRjaGEgaW4gcHJvZHVjdGlvbiwgc2luY2UgaXQgbWF5IGJlIHBhcnNhYmxlIGJ5IGJvdHMuXG4gKiBZb3UgbmVlZCB0byBjb252ZXJ0IHRvIGJpdG1hcCBsaWtlIHBuZyBiZWZvcmVoYW5kLlxuICogQGNvbnN0cnVjdG9yIEFwQ2FwdGNoYVN2Z1xuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKSxcbiAgICB0eXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxuLyoqIEBsZW5kcyBBcENhcHRjaGFTdmcgKi9cbmxldCBBcENhcHRjaGFTdmcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3BlY3NcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBwcm9wc1R5cGVzOiB7XG4gICAgICAgIHZlcnNpb246IHR5cGVzLnN0cmluZyxcbiAgICAgICAgdGV4dDogdHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICB9LFxuXG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2ZXJzaW9uOiAnMS4xJyxcbiAgICAgICAgICAgIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICAgICAgICAgICAgdGV4dDogbnVsbFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzLFxuICAgICAgICAgICAgcHJvcHMgPSBzLnByb3BzO1xuXG4gICAgICAgIGxldCB0ZXh0ID0gcHJvcHMudGV4dC5zcGxpdCgnJykubWFwKChsZXR0ZXIsIGkpPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZyBrZXk9e2BsZXR0ZXItZ3JvdXAtJHtpfWB9PlxuICAgICAgICAgICAgICAgICAgICB7cy5fcmVuZGVyTGV0dGVyKGxldHRlcil9XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3ZnIHZlcnNpb249e3Byb3BzLnZlcnNpb259PlxuICAgICAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgKVxuICAgIH0sXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3BlY3NcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBfcmVuZGVyTGV0dGVyOiBmdW5jdGlvbiAobGV0dGVyLCBpKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcblxuICAgICAgICBsZXQgeCA9IDAsXG4gICAgICAgICAgICB5ID0gMjAsXG4gICAgICAgICAgICBjb2xvciA9ICcjNTU1JztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRleHQgeD17eH1cbiAgICAgICAgICAgICAgICAgIHk9e3l9XG4gICAgICAgICAgICAgICAgICBmaWxsPXtjb2xvcn1cbiAgICAgICAgICAgID57bGV0dGVyfTwvdGV4dD5cbiAgICAgICAgKVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwQ2FwdGNoYVN2ZztcbiJdfQ==