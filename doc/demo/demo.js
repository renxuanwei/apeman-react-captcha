(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict'

const React = require('react')
const ReactDOM = require('react-dom')

const Demo = require('./demo.component.js').default

function onLoad () {
  window.removeEventListener('DOMContentLoaded', onLoad)
  window.React = React
  let DemoFactory = React.createFactory(Demo)
  ReactDOM.render(DemoFactory(), document.getElementById('demo-wrap'), () => {
    console.debug('Demo component mounted.')
  })
}

window.addEventListener('DOMContentLoaded', onLoad)

},{"./demo.component.js":2,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);var _ap_captcha=require('../../lib/ap_captcha');var _ap_captcha2=_interopRequireDefault(_ap_captcha);var _apemanReactButton=require('apeman-react-button');var _apemanReactImage=require('apeman-react-image');var _apemanReactSpinner=require('apeman-react-spinner');var _ap_captcha_style=require('../../lib/ap_captcha_style');var _ap_captcha_style2=_interopRequireDefault(_ap_captcha_style);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var Demo=_react2.default.createClass({displayName:'Demo',getInitialState:function getInitialState(){return {captchaSrc:'./images/mock-captcha.svg'}},render:function render(){var s=this;var state=s.state;return _react2.default.createElement('div',null,_react2.default.createElement(_apemanReactSpinner.ApSpinnerStyle,{highlightColor:'#b35600'}),_react2.default.createElement(_apemanReactButton.ApButtonStyle,{highlightColor:'#b35600'}),_react2.default.createElement(_apemanReactImage.ApImageStyle,null),_react2.default.createElement(_ap_captcha_style2.default,null),_react2.default.createElement(_ap_captcha2.default,{src:state.captchaSrc,refreshText:'refresh',spinning:state.spinning,onRefresh:s.refreshCaptcha}))},refreshCaptcha:function refreshCaptcha(){var s=this;var time=new Date().getTime();console.log('refreshCaptcha',time);s.setState({spinning:true,captchaSrc:null});setTimeout(function(){s.setState({captchaSrc:'./images/mock-captcha.svg?t='+time,spinning:false})},1500)}});exports.default=Demo;

},{"../../lib/ap_captcha":3,"../../lib/ap_captcha_style":4,"apeman-react-button":"apeman-react-button","apeman-react-image":"apeman-react-image","apeman-react-spinner":"apeman-react-spinner","react":"react"}],3:[function(require,module,exports){
/**
 * Captcha component.
 * @class ApCaptcha
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _apemanReactIcon = require('apeman-react-icon');

var _apemanReactImage = require('apeman-react-image');

var _apemanReactSpinner = require('apeman-react-spinner');

var _apemanReactTouchable = require('apeman-react-touchable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @lends ApCaptcha */
var ApCaptcha = _react2.default.createClass({
  displayName: 'ApCaptcha',


  // --------------------
  // Specs
  // --------------------

  propTypes: {
    /** Image source url */
    src: _react.PropTypes.string,
    /** Handler for refresh */
    onRefresh: _react.PropTypes.func,
    refreshIcon: _react.PropTypes.string,
    refreshText: _react.PropTypes.string,
    imageWidth: _react.PropTypes.number,
    imageHeight: _react.PropTypes.number,
    onImageLoad: _react.PropTypes.func,
    onImageError: _react.PropTypes.func,
    spinning: _react.PropTypes.bool,
    spinnerTheme: _react.PropTypes.string
  },

  mixins: [],

  statics: {},

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      src: null,
      onRefresh: null,
      refreshIcon: 'fa fa-refresh',
      refreshText: '',
      imageWidth: 240,
      imageHeight: 94,
      onImageLoad: null,
      onImageError: null,
      spinning: false,
      spinnerTheme: _apemanReactSpinner.ApSpinner.DEFAULT_THEME
    };
  },
  render: function render() {
    var s = this;
    var props = s.props;

    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('ap-captcha', props.className),
        style: Object.assign({}, props.style) },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_apemanReactSpinner.ApSpinner, { className: 'ap-captcha-spinner',
          enabled: props.spinning,
          theme: props.spinnerTheme
        }),
        _react2.default.createElement(_apemanReactImage.ApImage, { className: 'ap-captcha-image',
          src: props.src,
          width: props.imageWidth,
          height: props.imageHeight,
          onLoad: s.handleImageLoad,
          onError: s.handleImageError,
          alt: ''
        })
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'a',
          { className: 'ap-captcha-refresh-button' },
          _react2.default.createElement(
            _apemanReactTouchable.ApTouchable,
            { onTap: s.handleTap },
            _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(_apemanReactIcon.ApIcon, { className: (0, _classnames2.default)('ap-captcha-refresh-icon', props.refreshIcon, {
                  'fa-spin': props.spinning
                }) }),
              _react2.default.createElement(
                'span',
                null,
                props.refreshText
              )
            )
          )
        )
      )
    );
  },


  // --------------------
  // Lifecycle
  // --------------------

  componentWillMount: function componentWillMount() {
    var s = this;
  },
  componentDidMount: function componentDidMount() {
    var s = this;
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var s = this;
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    var s = this;
    return true;
  },
  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
    var s = this;
  },
  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    var s = this;
  },
  componentWillUnmount: function componentWillUnmount() {
    var s = this;
  },


  // ------------------
  // Custom
  // ------------------

  handleTap: function handleTap() {
    var s = this;
    var props = s.props;

    if (props.onRefresh) {
      props.onRefresh();
    }
  },
  handleImageLoad: function handleImageLoad(ev) {
    var s = this;
    var props = s.props;

    if (props.onImageLoad) {
      props.onImageLoad(ev);
    }
  },
  handleImageError: function handleImageError(err) {
    var s = this;
    var props = s.props;

    if (props.onImageError) {
      props.onImageError(err);
    }
  }

  // ------------------
  // Private
  // ------------------

});

exports.default = ApCaptcha;

},{"apeman-react-icon":"apeman-react-icon","apeman-react-image":"apeman-react-image","apeman-react-spinner":"apeman-react-spinner","apeman-react-touchable":"apeman-react-touchable","classnames":5,"react":"react"}],4:[function(require,module,exports){
/**
 * Style for ApCaptcha.
 * @class ApCaptchaStyle
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _apemanReactStyle = require('apeman-react-style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @lends ApCaptchaStyle */
var ApCaptchaStyle = _react2.default.createClass({
  displayName: 'ApCaptchaStyle',

  propTypes: {
    style: _react.PropTypes.object
  },
  getDefaultProps: function getDefaultProps() {
    return {
      style: {}
    };
  },
  render: function render() {
    var s = this;
    var props = s.props;

    var data = {
      '.ap-captcha': {
        display: 'block',
        position: 'relative',
        background: '#FAFAFA',
        padding: '8px',
        boxSizing: 'border-box',
        textAlign: 'center'
      },
      '.ap-captcha-image': {
        background: 'white',
        border: '1px solid #E0E0E0'
      },
      '.ap-captcha-image .ap-image-spinner': {
        background: 'transparent'
      },
      '.ap-captcha-refresh-button': {
        display: 'block',
        textAlign: 'right',
        cursor: 'pointer',
        padding: '4px 8px',
        position: 'absolute',
        fontSize: '12px',
        right: 0,
        bottom: 0,
        background: 'rgba(255,255,255,0.9)'
      },
      '.ap-captcha-refresh-button:active': {
        opacity: 0.8
      },
      '.ap-captcha-spinner': {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 4,
        background: 'rgba(255,255,255,0.9)',
        color: '#CCC'
      }
    };
    var smallMediaData = {};
    var mediumMediaData = {};
    var largeMediaData = {};
    return _react2.default.createElement(
      _apemanReactStyle.ApStyle,
      {
        data: Object.assign(data, props.style),
        smallMediaData: smallMediaData,
        mediumMediaData: mediumMediaData,
        largeMediaData: largeMediaData
      },
      props.children
    );
  }
});

exports.default = ApCaptchaStyle;

},{"apeman-react-style":"apeman-react-style","react":"react"}],5:[function(require,module,exports){
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92Ni4yLjEvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkb2MvZGVtby9kZW1vLmJyb3dzZXIuanMiLCIvVXNlcnMvb2t1bmlzaGluaXNoaS9Qcm9qZWN0cy9hcGVtYW4tcHJvamVjdHMvYXBlbWFuLXJlYWN0LWNhcHRjaGEvZG9jL2RlbW8vZGVtby5jb21wb25lbnQuanN4IiwiL1VzZXJzL29rdW5pc2hpbmlzaGkvUHJvamVjdHMvYXBlbWFuLXByb2plY3RzL2FwZW1hbi1yZWFjdC1jYXB0Y2hhL2xpYi9hcF9jYXB0Y2hhLmpzeCIsIi9Vc2Vycy9va3VuaXNoaW5pc2hpL1Byb2plY3RzL2FwZW1hbi1wcm9qZWN0cy9hcGVtYW4tcmVhY3QtY2FwdGNoYS9saWIvYXBfY2FwdGNoYV9zdHlsZS5qc3giLCJub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkEsYSx5REFFQSw0QiwyQ0FDQSxnRCxxREFDQSxzREFDQSxvREFDQSx3REFDQSw0RCxtSkFFQSxJQUFNLEtBQU8sZ0JBQU0sV0FBTixDQUFrQixvQkFDN0IsZUFENkIsMkJBQ1YsQ0FDakIsT0FBTyxDQUNMLFdBQVksMkJBRFAsQ0FBUCxBQUdELENBTDRCLENBTTdCLE1BTjZCLGtCQU1uQixDQUNSLElBQU0sRUFBSSxJQUFWLENBRFEsSUFFRixLQUZFLENBRVEsQ0FGUixDQUVGLEtBRkUsQ0FHUixPQUNFLHlDQUNFLGtFQUFnQixlQUFlLFNBQS9CLEVBREYsQ0FFRSxnRUFBZSxlQUFlLFNBQTlCLEVBRkYsQ0FHRSxrRUFIRixDQUlFLDhEQUpGLENB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SSxpQkFBaUIsRUFBckI7QUFDQSxRQUFJLGtCQUFrQixFQUF0QjtBQUNBLFFBQUksaUJBQWlCLEVBQXJCO0FBQ0EsV0FDRTtBQUFBO01BQUE7QUFDRSxjQUFPLE9BQU8sTUFBUCxDQUFjLElBQWQsRUFBb0IsTUFBTSxLQUExQixDQURUO0FBRUUsd0JBQWlCLGNBRm5CO0FBR0UseUJBQWtCLGVBSHBCO0FBSUUsd0JBQWlCO0FBSm5CO01BS0csTUFBTTtBQUxULEtBREY7QUFRRDtBQWhFc0MsQ0FBbEIsQ0FBdkI7O2tCQW1FZSxjOzs7QUM5RWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKVxuY29uc3QgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKVxuXG5jb25zdCBEZW1vID0gcmVxdWlyZSgnLi9kZW1vLmNvbXBvbmVudC5qcycpLmRlZmF1bHRcblxuZnVuY3Rpb24gb25Mb2FkICgpIHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBvbkxvYWQpXG4gIHdpbmRvdy5SZWFjdCA9IFJlYWN0XG4gIGxldCBEZW1vRmFjdG9yeSA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkoRGVtbylcbiAgUmVhY3RET00ucmVuZGVyKERlbW9GYWN0b3J5KCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZW1vLXdyYXAnKSwgKCkgPT4ge1xuICAgIGNvbnNvbGUuZGVidWcoJ0RlbW8gY29tcG9uZW50IG1vdW50ZWQuJylcbiAgfSlcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBvbkxvYWQpXG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFwQ2FwdGNoYSBmcm9tICcuLi8uLi9saWIvYXBfY2FwdGNoYSdcbmltcG9ydCB7QXBCdXR0b25TdHlsZX0gZnJvbSAnYXBlbWFuLXJlYWN0LWJ1dHRvbidcbmltcG9ydCB7QXBJbWFnZVN0eWxlfSBmcm9tICdhcGVtYW4tcmVhY3QtaW1hZ2UnXG5pbXBvcnQge0FwU3Bpbm5lclN0eWxlfSBmcm9tICdhcGVtYW4tcmVhY3Qtc3Bpbm5lcidcbmltcG9ydCBBcENhcHRjaGFTdHlsZSBmcm9tICcuLi8uLi9saWIvYXBfY2FwdGNoYV9zdHlsZSdcblxuY29uc3QgRGVtbyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2FwdGNoYVNyYzogXCIuL2ltYWdlcy9tb2NrLWNhcHRjaGEuc3ZnXCJcbiAgICB9XG4gIH0sXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBzdGF0ZSB9ID0gc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QXBTcGlubmVyU3R5bGUgaGlnaGxpZ2h0Q29sb3I9XCIjYjM1NjAwXCIvPlxuICAgICAgICA8QXBCdXR0b25TdHlsZSBoaWdobGlnaHRDb2xvcj1cIiNiMzU2MDBcIi8+XG4gICAgICAgIDxBcEltYWdlU3R5bGUgLz5cbiAgICAgICAgPEFwQ2FwdGNoYVN0eWxlIC8+XG4gICAgICAgIDxBcENhcHRjaGEgc3JjPXsgc3RhdGUuY2FwdGNoYVNyYyB9XG4gICAgICAgICAgICAgICAgICAgcmVmcmVzaFRleHQ9XCJyZWZyZXNoXCJcbiAgICAgICAgICAgICAgICAgICBzcGlubmluZz17IHN0YXRlLnNwaW5uaW5nIH1cbiAgICAgICAgICAgICAgICAgICBvblJlZnJlc2g9eyBzLnJlZnJlc2hDYXB0Y2hhIH0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9LFxuICByZWZyZXNoQ2FwdGNoYSgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICBjb25zb2xlLmxvZygncmVmcmVzaENhcHRjaGEnLCB0aW1lKVxuICAgIHMuc2V0U3RhdGUoe1xuICAgICAgc3Bpbm5pbmc6IHRydWUsXG4gICAgICBjYXB0Y2hhU3JjOiBudWxsXG4gICAgfSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHMuc2V0U3RhdGUoe1xuICAgICAgICBjYXB0Y2hhU3JjOiBgLi9pbWFnZXMvbW9jay1jYXB0Y2hhLnN2Zz90PSR7dGltZX1gLFxuICAgICAgICBzcGlubmluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfSwgMTUwMClcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRGVtbyIsIi8qKlxuICogQ2FwdGNoYSBjb21wb25lbnQuXG4gKiBAY2xhc3MgQXBDYXB0Y2hhXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbXBvcnQge0FwSWNvbn0gZnJvbSAnYXBlbWFuLXJlYWN0LWljb24nXG5pbXBvcnQge0FwSW1hZ2V9IGZyb20gJ2FwZW1hbi1yZWFjdC1pbWFnZSdcbmltcG9ydCB7QXBTcGlubmVyfSBmcm9tICdhcGVtYW4tcmVhY3Qtc3Bpbm5lcidcbmltcG9ydCB7QXBUb3VjaGFibGV9IGZyb20gJ2FwZW1hbi1yZWFjdC10b3VjaGFibGUnXG5cbi8qKiBAbGVuZHMgQXBDYXB0Y2hhICovXG5jb25zdCBBcENhcHRjaGEgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU3BlY3NcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcm9wVHlwZXM6IHtcbiAgICAvKiogSW1hZ2Ugc291cmNlIHVybCAqL1xuICAgIHNyYzogdHlwZXMuc3RyaW5nLFxuICAgIC8qKiBIYW5kbGVyIGZvciByZWZyZXNoICovXG4gICAgb25SZWZyZXNoOiB0eXBlcy5mdW5jLFxuICAgIHJlZnJlc2hJY29uOiB0eXBlcy5zdHJpbmcsXG4gICAgcmVmcmVzaFRleHQ6IHR5cGVzLnN0cmluZyxcbiAgICBpbWFnZVdpZHRoOiB0eXBlcy5udW1iZXIsXG4gICAgaW1hZ2VIZWlnaHQ6IHR5cGVzLm51bWJlcixcbiAgICBvbkltYWdlTG9hZDogdHlwZXMuZnVuYyxcbiAgICBvbkltYWdlRXJyb3I6IHR5cGVzLmZ1bmMsXG4gICAgc3Bpbm5pbmc6IHR5cGVzLmJvb2wsXG4gICAgc3Bpbm5lclRoZW1lOiB0eXBlcy5zdHJpbmdcbiAgfSxcblxuICBtaXhpbnM6IFtdLFxuXG4gIHN0YXRpY3M6IHt9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSAoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3JjOiBudWxsLFxuICAgICAgb25SZWZyZXNoOiBudWxsLFxuICAgICAgcmVmcmVzaEljb246ICdmYSBmYS1yZWZyZXNoJyxcbiAgICAgIHJlZnJlc2hUZXh0OiAnJyxcbiAgICAgIGltYWdlV2lkdGg6IDI0MCxcbiAgICAgIGltYWdlSGVpZ2h0OiA5NCxcbiAgICAgIG9uSW1hZ2VMb2FkOiBudWxsLFxuICAgICAgb25JbWFnZUVycm9yOiBudWxsLFxuICAgICAgc3Bpbm5pbmc6IGZhbHNlLFxuICAgICAgc3Bpbm5lclRoZW1lOiBBcFNwaW5uZXIuREVGQVVMVF9USEVNRVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc25hbWVzKCdhcC1jYXB0Y2hhJywgcHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICAgc3R5bGU9e09iamVjdC5hc3NpZ24oe30sIHByb3BzLnN0eWxlKSB9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxBcFNwaW5uZXIgY2xhc3NOYW1lPVwiYXAtY2FwdGNoYS1zcGlubmVyXCJcbiAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ9eyBwcm9wcy5zcGlubmluZyB9XG4gICAgICAgICAgICAgICAgICAgICB0aGVtZT17IHByb3BzLnNwaW5uZXJUaGVtZSB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QXBJbWFnZSBjbGFzc05hbWU9XCJhcC1jYXB0Y2hhLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgICBzcmM9eyBwcm9wcy5zcmMgfVxuICAgICAgICAgICAgICAgICAgIHdpZHRoPXsgcHJvcHMuaW1hZ2VXaWR0aCB9XG4gICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsgcHJvcHMuaW1hZ2VIZWlnaHQgfVxuICAgICAgICAgICAgICAgICAgIG9uTG9hZD17IHMuaGFuZGxlSW1hZ2VMb2FkIH1cbiAgICAgICAgICAgICAgICAgICBvbkVycm9yPXsgcy5oYW5kbGVJbWFnZUVycm9yIH1cbiAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFwLWNhcHRjaGEtcmVmcmVzaC1idXR0b25cIj5cbiAgICAgICAgICAgIDxBcFRvdWNoYWJsZSBvblRhcD17IHMuaGFuZGxlVGFwIH0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFwSWNvbiBjbGFzc05hbWU9eyBjbGFzc25hbWVzKCdhcC1jYXB0Y2hhLXJlZnJlc2gtaWNvbicscHJvcHMucmVmcmVzaEljb24sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYS1zcGluJzogcHJvcHMuc3Bpbm5pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pIH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+eyBwcm9wcy5yZWZyZXNoVGV4dCB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L0FwVG91Y2hhYmxlPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0sXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTGlmZWN5Y2xlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gIH0sXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlIChuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgcmV0dXJuIHRydWVcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVXBkYXRlIChuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gIH0sXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEN1c3RvbVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS1cblxuICBoYW5kbGVUYXAgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcbiAgICBpZiAocHJvcHMub25SZWZyZXNoKSB7XG4gICAgICBwcm9wcy5vblJlZnJlc2goKVxuICAgIH1cbiAgfSxcblxuICBoYW5kbGVJbWFnZUxvYWQgKGV2KSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBwcm9wcyB9ID0gc1xuICAgIGlmIChwcm9wcy5vbkltYWdlTG9hZCkge1xuICAgICAgcHJvcHMub25JbWFnZUxvYWQoZXYpXG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZUltYWdlRXJyb3IgKGVycikge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcbiAgICBpZiAocHJvcHMub25JbWFnZUVycm9yKSB7XG4gICAgICBwcm9wcy5vbkltYWdlRXJyb3IoZXJyKVxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBQcml2YXRlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQXBDYXB0Y2hhXG4iLCIvKipcbiAqIFN0eWxlIGZvciBBcENhcHRjaGEuXG4gKiBAY2xhc3MgQXBDYXB0Y2hhU3R5bGVcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7QXBTdHlsZX0gZnJvbSAnYXBlbWFuLXJlYWN0LXN0eWxlJ1xuXG4vKiogQGxlbmRzIEFwQ2FwdGNoYVN0eWxlICovXG5jb25zdCBBcENhcHRjaGFTdHlsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgc3R5bGU6IHR5cGVzLm9iamVjdFxuICB9LFxuICBnZXREZWZhdWx0UHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdHlsZToge31cbiAgICB9XG4gIH0sXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBwcm9wcyB9ID0gc1xuICAgIGxldCBkYXRhID0ge1xuICAgICAgJy5hcC1jYXB0Y2hhJzoge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyNGQUZBRkEnLFxuICAgICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICAgIH0sXG4gICAgICAnLmFwLWNhcHRjaGEtaW1hZ2UnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjRTBFMEUwJ1xuICAgICAgfSxcbiAgICAgICcuYXAtY2FwdGNoYS1pbWFnZSAuYXAtaW1hZ2Utc3Bpbm5lcic6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J1xuICAgICAgfSxcbiAgICAgICcuYXAtY2FwdGNoYS1yZWZyZXNoLWJ1dHRvbic6IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgcGFkZGluZzogJzRweCA4cHgnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LDI1NSwyNTUsMC45KSdcbiAgICAgIH0sXG4gICAgICAnLmFwLWNhcHRjaGEtcmVmcmVzaC1idXR0b246YWN0aXZlJzoge1xuICAgICAgICBvcGFjaXR5OiAwLjhcbiAgICAgIH0sXG4gICAgICAnLmFwLWNhcHRjaGEtc3Bpbm5lcic6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgekluZGV4OiA0LFxuICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsMjU1LDI1NSwwLjkpJyxcbiAgICAgICAgY29sb3I6ICcjQ0NDJ1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc21hbGxNZWRpYURhdGEgPSB7fVxuICAgIGxldCBtZWRpdW1NZWRpYURhdGEgPSB7fVxuICAgIGxldCBsYXJnZU1lZGlhRGF0YSA9IHt9XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcFN0eWxlXG4gICAgICAgIGRhdGE9eyBPYmplY3QuYXNzaWduKGRhdGEsIHByb3BzLnN0eWxlKSB9XG4gICAgICAgIHNtYWxsTWVkaWFEYXRhPXsgc21hbGxNZWRpYURhdGEgfVxuICAgICAgICBtZWRpdW1NZWRpYURhdGE9eyBtZWRpdW1NZWRpYURhdGEgfVxuICAgICAgICBsYXJnZU1lZGlhRGF0YT17IGxhcmdlTWVkaWFEYXRhIH1cbiAgICAgID57IHByb3BzLmNoaWxkcmVuIH08L0FwU3R5bGU+XG4gICAgKVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBBcENhcHRjaGFTdHlsZVxuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iXX0=
