(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict'

const React = require('react')
const ReactDOM = require('react-dom')

const Demo = require('./demo.component.js').default

window.addEventListener('load', function onLoad () {
  window.React = React
  let DemoFactory = React.createFactory(Demo)
  ReactDOM.render(DemoFactory(), document.getElementById('demo-wrap'))
})

},{"./demo.component.js":2,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);var _ap_captcha=require('../../lib/ap_captcha');var _ap_captcha2=_interopRequireDefault(_ap_captcha);var _apemanReactButton=require('apeman-react-button');var _apemanReactImage=require('apeman-react-image');var _apemanReactSpinner=require('apeman-react-spinner');var _ap_captcha_style=require('../../lib/ap_captcha_style');var _ap_captcha_style2=_interopRequireDefault(_ap_captcha_style);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var Demo=_react2.default.createClass({displayName:'Demo',getInitialState:function getInitialState(){return {captchaSrc:'./images/mock-captcha.svg'}},render:function render(){var s=this;var state=s.state;return _react2.default.createElement('div',null,_react2.default.createElement(_apemanReactSpinner.ApSpinnerStyle,{highlightColor:'#b35600'}),_react2.default.createElement(_apemanReactButton.ApButtonStyle,{highlightColor:'#b35600'}),_react2.default.createElement(_apemanReactImage.ApImageStyle,null),_react2.default.createElement(_ap_captcha_style2.default,null),_react2.default.createElement(_ap_captcha2.default,{src:state.captchaSrc,refreshText:'refresh',spinning:state.spinning,onRefresh:s.refreshCaptcha}))},refreshCaptcha:function refreshCaptcha(){var s=this;var time=new Date().getTime();console.log('refreshCaptcha',time);s.setState({spinning:true,captchaSrc:null});setTimeout(function(){s.setState({captchaSrc:'./images/mock-captcha.svg?t='+time,spinning:false})},1500)}});exports.default=Demo;

},{"../../lib/ap_captcha":3,"../../lib/ap_captcha_style":4,"apeman-react-button":15,"apeman-react-image":18,"apeman-react-spinner":22,"react":"react"}],3:[function(require,module,exports){
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

},{"apeman-react-icon":"apeman-react-icon","apeman-react-image":18,"apeman-react-spinner":22,"apeman-react-touchable":25,"classnames":"classnames","react":"react"}],4:[function(require,module,exports){
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
/**
 * Big button component.
 * @class ApBigButton
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ap_button = require('./ap_button');

var _ap_button2 = _interopRequireDefault(_ap_button);

var _apemanReactMixins = require('apeman-react-mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @lends ApBigButton */
var ApBigButton = _react2.default.createClass({
  displayName: 'ApBigButton',


  // --------------------
  // Specs
  // --------------------

  propTypes: {
    disabled: _react.PropTypes.bool,
    onTap: _react.PropTypes.func,
    text: _react.PropTypes.string,
    size: _react.PropTypes.number
  },

  mixins: [_apemanReactMixins.ApPureMixin],

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      onTap: null,
      text: null,
      size: 94
    };
  },
  render: function render() {
    var s = this;
    var props = s.props;
    var size = props.size;

    var style = Object.assign({
      width: size, height: size
    }, props.style);
    return _react2.default.createElement(
      _ap_button2.default,
      _extends({}, props, {
        className: (0, _classnames2.default)('ap-big-button', props.className),
        wide: false,
        style: style
      }),
      _react2.default.createElement(
        'span',
        { className: 'ap-big-button-text' },
        props.text
      ),
      props.children
    );
  }
});

exports.default = ApBigButton;

},{"./ap_button":6,"apeman-react-mixins":"apeman-react-mixins","classnames":"classnames","react":"react"}],6:[function(require,module,exports){
/**
 * Button component.
 * @class ApButton
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _apemanReactMixins = require('apeman-react-mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @lends ApButton */
var ApButton = _react2.default.createClass({
  displayName: 'ApButton',


  // --------------------
  // Specs
  // --------------------

  propTypes: {
    /** Disable button tap */
    disabled: _react.PropTypes.bool,
    /** Render with primary style */
    primary: _react.PropTypes.bool,
    /** Render with danger style */
    danger: _react.PropTypes.bool,
    /** Render with wide style */
    wide: _react.PropTypes.bool,
    /** Anchor href */
    href: _react.PropTypes.string,
    /** Document id */
    id: _react.PropTypes.string,
    /** Hide button */
    hidden: _react.PropTypes.bool,
    /** Render with simple style */
    simple: _react.PropTypes.bool,
    /** Data for touch events */
    data: _react.PropTypes.any
  },

  mixins: [_apemanReactMixins.ApTouchMixin, _apemanReactMixins.ApPureMixin],

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      /** For bit tapping */
      disabled: false,
      /** Render with primary style */
      primary: false,
      /** Render with danger style */
      danger: false,
      wide: false,
      href: null,
      /** Document id */
      id: null,
      /** Display hidden */
      hidden: false,
      /** Simple style */
      simple: false,
      /** Data for event */
      data: null
    };
  },
  render: function render() {
    var s = this;
    var props = s.props;


    var className = (0, _classnames2.default)('ap-button', props.className, {
      'ap-button-primary': props.primary,
      'ap-button-danger': props.danger,
      'ap-button-wide': props.wide,
      'ap-button-disabled': props.disabled,
      'ap-button-simple': props.simple,
      'ap-button-hidden': props.hidden
    });
    return _react2.default.createElement(
      'a',
      { className: className,
        href: props.href,
        id: props.id,
        style: Object.assign({}, props.style)
      },
      props.children
    );
  },


  // --------------------
  // For ApTouchMixin
  // --------------------
  getTouchData: function getTouchData() {
    var s = this;
    var props = s.props;

    return props.data;
  }
});

exports.default = ApButton;

},{"apeman-react-mixins":"apeman-react-mixins","classnames":"classnames","react":"react"}],7:[function(require,module,exports){
/**
 * Button group component.
 * @class ApButtonGroup
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _apemanReactMixins = require('apeman-react-mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @lends ApButtonGroup */
var ApButtonGroup = _react2.default.createClass({
  displayName: 'ApButtonGroup',


  // --------------------
  // Specs
  // --------------------

  propTypes: {},

  mixins: [_apemanReactMixins.ApPureMixin],

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {};
  },
  render: function render() {
    var s = this;
    var props = s.props;


    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('ap-button-group', props.className) },
      props.children
    );
  }
});

exports.default = ApButtonGroup;

},{"apeman-react-mixins":"apeman-react-mixins","classnames":"classnames","react":"react"}],8:[function(require,module,exports){
/**
 * Style for ApButton.
 * @class ApButtonStyle
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _apemanReactStyle = require('apeman-react-style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @lends ApButtonStyle */
var ApButtonStyle = _react2.default.createClass({
  displayName: 'ApButtonStyle',

  propTypes: {

    style: _react.PropTypes.object,
    highlightColor: _react.PropTypes.string,
    backgroundColor: _react.PropTypes.string,
    dangerColor: _react.PropTypes.string,
    disabledColor: _react.PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      scope: false,
      style: {},
      highlightColor: _apemanReactStyle.ApStyle.DEFAULT_HIGHLIGHT_COLOR,
      backgroundColor: _apemanReactStyle.ApStyle.DEFAULT_BACKGROUND_COLOR,
      dangerColor: _apemanReactStyle.ApStyle.DEFAULT_DANGER_COLOR,
      disabledColor: '#AAA'
    };
  },
  render: function render() {
    var s = this;
    var props = s.props;
    var highlightColor = props.highlightColor;
    var backgroundColor = props.backgroundColor;
    var dangerColor = props.dangerColor;
    var disabledColor = props.disabledColor;


    var data = {
      '.ap-button': {
        display: 'inline-block',
        boxSizing: 'border-box',
        padding: '0.5em 1em',
        borderRadius: '2px',
        margin: '4px',
        color: '' + highlightColor,
        border: '1px solid ' + highlightColor,
        background: '' + backgroundColor,
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        UserSelect: 'none',
        whiteSpace: 'nowrap'
      },
      '.ap-big-button': {
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: '4px',
        padding: 0,
        boxShadow: '2px 2px 4px rgba(0,0,0,0.2)',
        whiteSpace: 'normal'
      },
      '.ap-big-button:active': {
        boxShadow: 'none'
      },
      '.ap-button > *': {
        pointerEvents: 'none'
      },
      '.ap-button:hover': {
        cursor: 'pointer',
        opacity: 0.9
      },
      '.ap-button:active': {
        boxShadow: '1px 1px 2px rgba(0,0,0,0.1) inset',
        opacity: 0.8
      },
      '.ap-button.ap-button-disabled,.ap-button.ap-button-disabled:hover,.ap-button.ap-button-disabled:active': {
        cursor: 'default',
        boxShadow: 'none',
        color: '' + disabledColor,
        borderColor: '' + disabledColor,
        backgroundColor: '#F0F0F0'
      },
      '.ap-button-primary': {
        color: 'white',
        background: '' + highlightColor
      },
      '.ap-button-danger': {
        color: 'white',
        background: '' + dangerColor
      },
      '.ap-button-wide': {
        width: '100%',
        boxSizing: 'border-box',
        maxWidth: '240px',
        marginLeft: 0,
        marginRight: 0
      },
      '.ap-icon-button': {
        textAlign: 'center',
        display: 'inline-block',
        justifyContent: 'inherit',
        flexDirection: 'column',
        alignItems: 'center'
      },
      '.ap-icon-button-simple': {
        border: 'none',
        background: 'transparent'
      },
      '.ap-icon-button-simple:active': {
        boxShadow: 'none',
        opacity: '0.8'
      },
      '.ap-icon-button-simple .ap-icon-button-icon': {
        fontSize: 'inherit'
      },
      '.ap-icon-button-icon': {
        margin: '2px 0',
        display: 'block',
        fontSize: '2em'
      },
      '.ap-icon-button-text': {
        display: 'block',
        fontSize: '0.66em',
        padding: '2px 0'
      },
      '.ap-icon-button-row': {
        display: 'flex',
        maxWidth: _apemanReactStyle.ApStyle.CONTENT_WIDTH,
        margin: '0 auto'
      },
      '.ap-icon-button-row .ap-button': {
        display: 'block',
        width: '100%'
      },
      '.ap-cell-button': {
        textAlign: 'center',
        background: 'transparent',
        lineHeight: '1em',
        fontSize: '14px',
        margin: 0,
        borderRadius: 0,
        boxSizing: 'border-box'
      },
      '.ap-cell-button-aligner': {
        opacity: 0,
        display: 'inline-block',
        width: '1px',
        marginRight: '-1px',
        boxSizing: 'border-box',
        padding: '8px 0',
        verticalAlign: 'middle'
      },
      '.ap-cell-button-text': {
        display: 'inline-block',
        verticalAlign: 'middle'
      },
      '.ap-cell-button-row': {
        display: 'flex',
        maxWidth: _apemanReactStyle.ApStyle.CONTENT_WIDTH,
        width: '100%',
        margin: '8px auto'
      },
      '.ap-cell-button-row .ap-cell-button': {
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        width: '100%'
      },
      '.ap-cell-button-row .ap-cell-button:first-child': {
        borderLeftColor: 'transparent'
      },
      '.ap-cell-button-row .ap-button': {
        display: 'block',
        width: '100%'
      },
      '.ap-next-button,.ap-prev-button': {
        padding: '0.25em 1em'
      },
      '.ap-next-button-icon': {
        marginLeft: '4px',
        marginRight: 0
      },
      '.ap-prev-button-icon': {
        marginLeft: 0,
        marginRight: '4px'
      },
      '.ap-button-hidden': {
        display: 'none !important'
      },
      '.ap-button-simple': {
        border: 'none',
        background: 'transparent'
      },
      '.ap-button-simple:active': {
        boxShadow: 'none',
        opacity: '0.8'
      },
      '.ap-button-group': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
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

exports.default = ApButtonStyle;

},{"apeman-react-style":"apeman-react-style","react":"react"}],9:[function(require,module,exports){
/**
 * Cell button component.
 * @class ApCellButton
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ap_button = require('./ap_button');

var _ap_button2 = _interopRequireDefault(_ap_button);

var _apemanReactMixins = require('apeman-react-mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @lends ApCellButton */
var ApCellButton = _react2.default.createClass({
  displayName: 'ApCellButton',


  // --------------------
  // Specs
  // --------------------

  propTypes: {
    disabled: _react.PropTypes.bool,
    onTap: _react.PropTypes.func,
    text: _react.PropTypes.string
  },

  mixins: [_apemanReactMixins.ApPureMixin],

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      onTap: null,
      text: null
    };
  },
  render: function render() {
    var s = this;
    var props = s.props;

    return _react2.default.createElement(
      _ap_button2.default,
      _extends({}, props, {
        className: (0, _classnames2.default)('ap-cell-button', props.className),
        wide: false
      }),
      _react2.default.createElement(
        'span',
        { className: 'ap-cell-button-aligner' },
        ' '
      ),
      _react2.default.createElement(
        'span',
        { className: 'ap-cell-button-text' },
        props.text
      )
    );
  }
});

exports.default = ApCellButton;

},{"./ap_button":6,"apeman-react-mixins":"apeman-react-mixins","classnames":"classnames","react":"react"}],10:[function(require,module,exports){
/**
 * Row for Cell buttons.
 * @class ApCellButtonRow
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @lends ApCellButtonRow */
var ApCellButtonRow = _react2.default.createClass({
  displayName: 'ApCellButtonRow',


  // --------------------
  // Specs
  // --------------------

  propTypes: {},

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {};
  },
  render: function render() {
    var s = this;
    var props = s.props;

    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('ap-cell-button-row', props.className) },
      props.children
    );
  }
});

exports.default = ApCellButtonRow;

},{"classnames":"classnames","react":"react"}],11:[function(require,module,exports){
/**
 * Icon button component.
 * @class ApIconButton
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _apemanReactIcon = require('apeman-react-icon');

var _ap_button = require('./ap_button');

var _ap_button2 = _interopRequireDefault(_ap_button);

var _apemanReactMixins = require('apeman-react-mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @lends ApIconButton */
var ApIconButton = _react2.default.createClass({
  displayName: 'ApIconButton',


  // --------------------
  // Specs
  // --------------------

  propTypes: {
    icon: _react.PropTypes.string,
    text: _react.PropTypes.string,
    simple: _react.PropTypes.bool
  },

  statics: {
    /**
     * Create a icon button.
     * @param {string} text - Text
     * @param {string} icon - Icon class
     * @param {function} onTap - Tap callback
     * @param {Object} props - Other props.
     * @returns {Object} - React element.
     */

    createButton: function createButton(text, icon, onTap, props) {
      return _react2.default.createElement(ApIconButton, _extends({ text: text,
        icon: icon,
        onTap: onTap
      }, props));
    }
  },

  mixins: [_apemanReactMixins.ApPureMixin],

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      icon: null,
      text: null
    };
  },
  render: function render() {
    var s = this;
    var props = s.props;

    return _react2.default.createElement(
      _ap_button2.default,
      _extends({}, props, {
        className: (0, _classnames2.default)('ap-icon-button', {
          'ap-icon-button-simple': !!props.simple
        }, props.className),
        wide: false
      }),
      _react2.default.createElement(_apemanReactIcon.ApIcon, { className: (0, _classnames2.default)('ap-icon-button-icon', props.icon, {}) }),
      props.text ? _react2.default.createElement(
        'span',
        { className: 'ap-icon-button-text' },
        props.text
      ) : null
    );
  }
});

exports.default = ApIconButton;

},{"./ap_button":6,"apeman-react-icon":"apeman-react-icon","apeman-react-mixins":"apeman-react-mixins","classnames":"classnames","react":"react"}],12:[function(require,module,exports){
/**
 * Row for Icon buttons.
 * @class ApIconButtonRow
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @lends ApIconButtonRow */
var ApIconButtonRow = _react2.default.createClass({
  displayName: 'ApIconButtonRow',


  // --------------------
  // Specs
  // --------------------

  propTypes: {},

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {};
  },
  render: function render() {
    var s = this;
    var props = s.props;

    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('ap-icon-button-row', props.className) },
      props.children
    );
  }
});

exports.default = ApIconButtonRow;

},{"classnames":"classnames","react":"react"}],13:[function(require,module,exports){
/**
 * Next button component.
 * @class ApNextButton
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ap_button = require('./ap_button');

var _ap_button2 = _interopRequireDefault(_ap_button);

var _apemanReactIcon = require('apeman-react-icon');

var _apemanReactMixins = require('apeman-react-mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @lends ApNextButton */
var ApNextButton = _react2.default.createClass({
  displayName: 'ApNextButton',


  // --------------------
  // Specs
  // --------------------

  propTypes: {
    disabled: _react.PropTypes.bool,
    onTap: _react.PropTypes.func,
    text: _react.PropTypes.string,
    size: _react.PropTypes.number,
    icon: _react.PropTypes.string
  },

  mixins: [_apemanReactMixins.ApPureMixin],

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      onTap: null,
      text: null,
      icon: 'fa fa-caret-right'
    };
  },
  render: function render() {
    var s = this;
    var props = s.props;

    return _react2.default.createElement(
      _ap_button2.default,
      _extends({}, props, {
        className: (0, _classnames2.default)('ap-next-button', props.className),
        wide: false,
        style: Object.assign({}, props.style)
      }),
      _react2.default.createElement(
        'span',
        { className: 'ap-next-button-text' },
        props.text
      ),
      props.children,
      _react2.default.createElement(_apemanReactIcon.ApIcon, { className: (0, _classnames2.default)('ap-next-button-icon', props.icon) })
    );
  }
});

exports.default = ApNextButton;

},{"./ap_button":6,"apeman-react-icon":"apeman-react-icon","apeman-react-mixins":"apeman-react-mixins","classnames":"classnames","react":"react"}],14:[function(require,module,exports){
/**
 * Prev button component.
 * @class ApPrevButton
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ap_button = require('./ap_button');

var _ap_button2 = _interopRequireDefault(_ap_button);

var _apemanReactIcon = require('apeman-react-icon');

var _apemanReactMixins = require('apeman-react-mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @lends ApPrevButton */
var ApPrevButton = _react2.default.createClass({
  displayName: 'ApPrevButton',


  // --------------------
  // Specs
  // --------------------

  propTypes: {
    disabled: _react.PropTypes.bool,
    onTap: _react.PropTypes.func,
    text: _react.PropTypes.string,
    size: _react.PropTypes.number,
    icon: _react.PropTypes.string
  },

  mixins: [_apemanReactMixins.ApPureMixin],

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      onTap: null,
      text: null,
      icon: 'fa fa-caret-left'
    };
  },
  render: function render() {
    var s = this;
    var props = s.props;

    return _react2.default.createElement(
      _ap_button2.default,
      _extends({}, props, {
        className: (0, _classnames2.default)('ap-prev-button', props.className),
        wide: false,
        style: Object.assign({}, props.style)
      }),
      _react2.default.createElement(_apemanReactIcon.ApIcon, { className: (0, _classnames2.default)('ap-prev-button-icon', props.icon) }),
      _react2.default.createElement(
        'span',
        { className: 'ap-prev-button-text' },
        props.text
      ),
      props.children
    );
  }
});

exports.default = ApPrevButton;

},{"./ap_button":6,"apeman-react-icon":"apeman-react-icon","apeman-react-mixins":"apeman-react-mixins","classnames":"classnames","react":"react"}],15:[function(require,module,exports){
/**
 * apeman react package for button component.
 * @module apeman-react-button
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get ApBigButton () { return d(require('./ap_big_button')) },
  get ApButtonGroup () { return d(require('./ap_button_group')) },
  get ApButtonStyle () { return d(require('./ap_button_style')) },
  get ApButton () { return d(require('./ap_button')) },
  get ApCellButtonRow () { return d(require('./ap_cell_button_row')) },
  get ApCellButton () { return d(require('./ap_cell_button')) },
  get ApIconButtonRow () { return d(require('./ap_icon_button_row')) },
  get ApIconButton () { return d(require('./ap_icon_button')) },
  get ApNextButton () { return d(require('./ap_next_button')) },
  get ApPrevButton () { return d(require('./ap_prev_button')) }
}

},{"./ap_big_button":5,"./ap_button":6,"./ap_button_group":7,"./ap_button_style":8,"./ap_cell_button":9,"./ap_cell_button_row":10,"./ap_icon_button":11,"./ap_icon_button_row":12,"./ap_next_button":13,"./ap_prev_button":14}],16:[function(require,module,exports){
/**
 * apeman react package for image component.
 * @class ApImage
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _numcal = require('numcal');

var _numcal2 = _interopRequireDefault(_numcal);

var _scaled_size = require('./sizing/scaled_size');

var _scaled_size2 = _interopRequireDefault(_scaled_size);

var _apemanReactSpinner = require('apeman-react-spinner');

var _apemanReactMixins = require('apeman-react-mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @lends ApImage */
var ApImage = _react2.default.createClass({
  displayName: 'ApImage',


  // --------------------
  // Specs
  // --------------------

  propTypes: {
    /** Image scaling policy */
    scale: _react.PropTypes.oneOf(['fit', 'fill', 'none']),
    /** Image width */
    width: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    /** Image height */
    height: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    /** Image src string */
    src: _react.PropTypes.string,
    /** Alt test */
    alt: _react.PropTypes.string,
    /** Them of spinner */
    spinnerTheme: _react.PropTypes.string,
    /** Handler on image load */
    onLoad: _react.PropTypes.func,
    /** Handler on image error. */
    onError: _react.PropTypes.func
  },

  mixins: [_apemanReactMixins.ApPureMixin],

  statics: {
    scaledSize: _scaled_size2.default,
    zeroIfNaN: function zeroIfNaN(value) {
      return isNaN(value) ? 0 : value;
    },
    nullIfNaN: function nullIfNaN(value) {
      return isNaN(value) ? null : value;
    }
  },

  getInitialState: function getInitialState() {
    var s = this;
    return {
      imgWidth: null,
      imgHeight: null,
      mounted: false,
      ready: false,
      loading: !!s.props.src,
      error: null
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      scale: 'none',
      width: null,
      height: null,
      src: null,
      alt: 'NO IMAGE',
      spinnerTheme: _apemanReactSpinner.ApSpinner.DEFAULT_THEME,
      onLoad: null,
      onError: null
    };
  },
  render: function render() {
    var s = this;
    var state = s.state;
    var props = s.props;


    var size = {
      width: props.width || null,
      height: props.height || null
    };

    var mounted = state.mounted;
    var error = state.error;
    var ready = state.ready;
    var loading = state.loading;

    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('ap-image', props.className, {
          'ap-image-loading': props.src && loading,
          'ap-image-ready': props.src && ready
        }),
        style: Object.assign({}, size, props.style) },
      mounted && error ? s._renderNotfound(size) : null,
      mounted && !error ? s._renderImg(size, mounted) : null,
      loading ? s._renderSpinner(size) : null
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
    s.setState({
      mounted: true
    });

    setTimeout(function () {
      s.resizeImage();
    }, 0);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var s = this;

    var src = s.props.src;
    var nextSrc = nextProps.src;
    var srcChanged = !!nextSrc && nextSrc !== src;
    if (srcChanged) {
      s.setState({
        ready: false,
        loading: true,
        error: null
      });
    }
  },
  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
    var s = this;
    s.resizeImage();
  },
  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    var s = this;
  },
  componentWillUnmount: function componentWillUnmount() {
    var s = this;
  },


  // ------------------
  // Helper
  // ------------------

  handleLoad: function handleLoad(e) {
    var s = this;
    var props = s.props;


    if (props.onLoad) {
      props.onLoad(e);
    }

    s.resizeImage(e.target.width, e.target.height);
  },
  handleError: function handleError(e) {
    var s = this;
    var props = s.props;


    s.setState({
      error: e,
      loading: false
    });

    if (props.onError) {
      props.onError(e);
    }
  },
  resizeImage: function resizeImage(imgContentWidth, imgContentHeight) {
    var s = this;
    var state = s.state;
    var props = s.props;


    imgContentWidth = imgContentWidth || state.imgContentWidth;
    imgContentHeight = imgContentHeight || state.imgContentHeight;

    var valid = imgContentWidth && imgContentHeight;
    if (!valid) {
      return;
    }

    var elm = _reactDom2.default.findDOMNode(s);
    var frameSize = {
      width: elm.offsetWidth,
      height: elm.offsetHeight
    };
    var contentSize = {
      height: imgContentHeight,
      width: imgContentWidth
    };
    var scaledSize = ApImage.scaledSize(contentSize, frameSize, props.scale);

    s.setState({
      imgContentWidth: imgContentWidth,
      imgContentHeight: imgContentHeight,
      imgWidth: scaledSize.width,
      imgHeight: scaledSize.height,
      ready: true,
      loading: false
    });
  },


  // ------------------
  // Private
  // ------------------
  _renderImg: function _renderImg(size) {
    var s = this;
    var state = s.state;
    var props = s.props;
    var nullIfNaN = ApImage.nullIfNaN;
    var zeroIfNaN = ApImage.zeroIfNaN;


    return _react2.default.createElement('img', { src: props.src,
      alt: props.alt,
      className: (0, _classnames2.default)('ap-image-content'),
      style: {
        top: zeroIfNaN((size.height - state.imgHeight) / 2),
        left: zeroIfNaN((size.width - state.imgWidth) / 2),
        width: nullIfNaN(state.imgWidth),
        height: nullIfNaN(state.imgHeight)
      },
      onLoad: s.handleLoad,
      onError: s.handleError
    });
  },
  _renderNotfound: function _renderNotfound(size) {
    var s = this;
    var props = s.props;


    return _react2.default.createElement(
      'div',
      { className: 'ap-image-notfound',
        style: {
          lineHeight: size.height + 'px',
          fontSize: '' + _numcal2.default.min(size.height * 0.4, 18)
        }
      },
      props.alt
    );
  },
  _renderSpinner: function _renderSpinner(size) {
    var s = this;
    var props = s.props;


    return _react2.default.createElement(_apemanReactSpinner.ApSpinner, { className: 'ap-image-spinner',
      theme: props.spinnerTheme,
      style: {
        width: size.width,
        height: size.height
      } });
  }
});

exports.default = ApImage;

},{"./sizing/scaled_size":19,"apeman-react-mixins":"apeman-react-mixins","apeman-react-spinner":22,"classnames":"classnames","numcal":27,"react":"react","react-dom":"react-dom"}],17:[function(require,module,exports){
/**
 * Style for ApImage.
 * @class ApImageStyle
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _apemanReactStyle = require('apeman-react-style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @lends ApImageStyle */
var ApImageStyle = _react2.default.createClass({
  displayName: 'ApImageStyle',

  propTypes: {

    style: _react.PropTypes.object,
    backgroundColor: _react.PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {

      style: {},
      backgroundColor: '#DDD',
      spinColor: 'rgba(255,255,255,0.5)'
    };
  },
  render: function render() {
    var s = this;
    var props = s.props;
    var backgroundColor = props.backgroundColor;
    var spinColor = props.spinColor;


    var transitionDuration = 100;

    var data = {
      '.ap-image': {
        backgroundColor: '' + backgroundColor,
        overflow: 'hidden',
        textAlign: 'center',
        display: 'inline-block',
        position: 'relative'
      },
      '.ap-image img': {
        opacity: 0,
        transition: 'width ' + transitionDuration + 'ms, opacity ' + transitionDuration + 'ms'
      },
      '.ap-image-ready img': {
        opacity: 1
      },
      '.ap-image-content': {
        position: 'absolute',
        display: 'inline-block'
      },
      '.ap-image-spinner': {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        textAlign: 'center',
        display: 'block',
        zIndex: 8,
        backgroundColor: 'rgba(0,0,0,0.1)',
        color: '' + spinColor
      },
      '.ap-image-notfound': {
        display: 'block',
        textAlign: 'center',
        color: 'rgba(0,0,0,0.1)',
        fontFamily: 'monospace'
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

exports.default = ApImageStyle;

},{"apeman-react-style":"apeman-react-style","react":"react"}],18:[function(require,module,exports){
/**
 * apeman react package for image component.
 * @module apeman-react-image
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get ApImageStyle () { return d(require('./ap_image_style')) },
  get ApImage () { return d(require('./ap_image')) }
}

},{"./ap_image":16,"./ap_image_style":17}],19:[function(require,module,exports){
/**
 * @function _scaledSize
 */

'use strict'

const numcal = require('numcal')

function scaledSize (contentSize, frameSize, policy) {
  let cw = contentSize.width
  let ch = contentSize.height
  let fw = frameSize.width
  let fh = frameSize.height

  let wRate = numcal.min(1, fw / cw)
  let hRate = numcal.min(1, fh / ch)

  let sizeWithRate = (rate) => ({
    width: contentSize.width * rate,
    height: contentSize.height * rate
  })

  switch (policy) {
    case 'none':
      return sizeWithRate(1)
    case 'fit':
      return sizeWithRate(
        numcal.min(wRate, hRate)
      )
    case 'fill':
      return sizeWithRate(
        numcal.max(wRate, hRate)
      )
    default:
      throw new Error(`Unknown policy: ${policy}`)
  }
}

module.exports = scaledSize

},{"numcal":27}],20:[function(require,module,exports){
/**
 * apeman react package for spinner.
 * @class ApSpinner
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _numcal = require('numcal');

var _numcal2 = _interopRequireDefault(_numcal);

var _apemanReactMixins = require('apeman-react-mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpinnerThemes = {
  a: ['fa', 'fa-spin', 'fa-spinner'],
  b: ['fa', 'fa-spin', 'fa-circle-o-notch'],
  c: ['fa', 'fa-spin', 'fa-refresh'],
  d: ['fa', 'fa-spin', 'fa-gear'],
  e: ['fa', 'fa-spin', 'fa-pulse']
};
var DEFAULT_THEME = 'c';

/** @lends ApSpinner */
var ApSpinner = _react2.default.createClass({
  displayName: 'ApSpinner',


  // --------------------
  // Specs
  // --------------------

  propTypes: {
    enabled: _react.PropTypes.bool,
    theme: _react.PropTypes.oneOf(Object.keys(SpinnerThemes))
  },

  mixins: [_apemanReactMixins.ApPureMixin, _apemanReactMixins.ApLayoutMixin],

  statics: {
    DEFAULT_THEME: DEFAULT_THEME
  },

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      enabled: false,
      theme: DEFAULT_THEME
    };
  },
  render: function render() {
    var s = this;
    var props = s.props;
    var layouts = s.layouts;

    var className = (0, _classnames2.default)('ap-spinner', props.className, {
      'ap-spinner-visible': !!layouts.spinner,
      'ap-spinner-enabled': !!props.enabled
    });
    return _react2.default.createElement(
      'div',
      { className: className,
        style: Object.assign({}, layouts.spinner, props.style) },
      _react2.default.createElement(
        'span',
        { className: 'ap-spinner-aligner' },
        ' '
      ),
      _react2.default.createElement('span', { ref: 'icon',
        className: (0, _classnames2.default)('ap-spinner-icon', SpinnerThemes[props.theme]),
        style: layouts.icon
      })
    );
  },


  // --------------------
  // Lifecycle
  // --------------------

  componentDidMount: function componentDidMount() {
    var s = this;
    s.setState({
      iconVisible: true
    });
  },
  componentWillUnmount: function componentWillUnmount() {
    var s = this;
  },


  // --------------------
  // For ApLayoutMixin
  // --------------------

  getInitialLayouts: function getInitialLayouts() {
    return {
      spinner: null,
      icon: null
    };
  },
  calcLayouts: function calcLayouts() {
    var s = this;
    var node = _reactDom2.default.findDOMNode(s);

    var parent = node.parentNode || node.parentElement;
    var w = _numcal2.default.max(parent.offsetWidth, node.offsetWidth);
    var h = _numcal2.default.max(parent.offsetHeight, node.offsetHeight);
    var size = _numcal2.default.min(w, h);
    var iconSize = _numcal2.default.min(size * 0.5, 60);

    return {
      spinner: {
        lineHeight: size + 'px',
        fontSize: iconSize + 'px'
      },
      icon: {
        width: iconSize + 'px',
        height: iconSize + 'px'
      }
    };
  }
});

exports.default = ApSpinner;

},{"apeman-react-mixins":"apeman-react-mixins","classnames":"classnames","numcal":27,"react":"react","react-dom":"react-dom"}],21:[function(require,module,exports){
/**
 * Style for ApSpinner.
 * @class ApSpinnerStyle
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _apemanReactStyle = require('apeman-react-style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @lends ApSpinnerStyle */
var ApSpinnerStyle = _react2.default.createClass({
  displayName: 'ApSpinnerStyle',

  statics: {
    alignerStyle: {
      width: 1,
      overflow: 'hidden',
      display: 'inline-block',
      marginRight: '-1px',
      verticalAlign: 'middle',
      color: 'transparent',
      opacity: 0,
      height: '100%'
    }
  },
  propTypes: {

    type: _react.PropTypes.string,
    style: _react.PropTypes.object
  },
  getDefaultProps: function getDefaultProps() {
    return {

      type: 'text/css',
      style: {}
    };
  },
  render: function render() {
    var s = this;
    var props = s.props;


    var data = {
      '.ap-spinner': {
        textAlign: 'center',
        display: 'none'
      },
      '.ap-spinner.ap-spinner-enabled': {
        display: 'block'
      },
      '.ap-spinner-icon': {
        display: 'inline-block',
        margin: '0 4px',
        transition: 'opacity 100ms',
        opacity: 0
      },
      '.ap-spinner-visible .ap-spinner-icon': {
        opacity: 1
      },
      '.ap-spinner-aligner': ApSpinnerStyle.alignerStyle
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

exports.default = ApSpinnerStyle;

},{"apeman-react-style":"apeman-react-style","react":"react"}],22:[function(require,module,exports){
/**
 * apeman react package for spinner.
 * @module apeman-react-spinner
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get ApSpinnerStyle () { return d(require('./ap_spinner_style')) },
  get ApSpinner () { return d(require('./ap_spinner')) }
}

},{"./ap_spinner":20,"./ap_spinner_style":21}],23:[function(require,module,exports){
/**
 * apeman react package for touchable component.
 * @class ApTouchable
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _apemanReactMixins = require('apeman-react-mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @lends ApTouchable */
var ApTouchable = _react2.default.createClass({
  displayName: 'ApTouchable',


  // --------------------
  // Specs
  // --------------------
  propTypes: {},

  mixins: [_apemanReactMixins.ApTouchMixin],

  statics: {},

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {};
  },
  render: function render() {
    var s = this;
    var props = s.props;

    return _react2.default.createElement(
      'div',
      _extends({}, props, {
        className: (0, _classnames2.default)('ap-touchable', props.className),
        style: Object.assign({}, props.style) }),
      props.children
    );
  }

  // --------------------
  // Lifecycle
  // --------------------

  // ------------------
  // Helper
  // ------------------

  // ------------------
  // Private
  // ------------------

});

exports.default = ApTouchable;

},{"apeman-react-mixins":"apeman-react-mixins","classnames":"classnames","react":"react","react-dom":"react-dom"}],24:[function(require,module,exports){
/**
 * Style for ApTouchable.
 * @class ApTouchableStyle
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _apemanReactStyle = require('apeman-react-style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @lends ApTouchableStyle */
var ApTouchableStyle = _react2.default.createClass({
  displayName: 'ApTouchableStyle',

  propTypes: _apemanReactStyle.ApStyle.propTypes,
  getDefaultProps: function getDefaultProps() {
    return {
      data: {
        '.ap-touchable': {}
      },
      type: 'text/css'
    };
  },
  render: function render() {
    var s = this;
    var props = s.props;

    return _react2.default.createElement(
      _apemanReactStyle.ApStyle,
      props,
      props.children
    );
  }
});

exports.default = ApTouchableStyle;

},{"apeman-react-style":"apeman-react-style","react":"react"}],25:[function(require,module,exports){
/**
 * apeman react package for touchable component.
 * @module apeman-react-touchable
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get ApTouchableStyle () { return d(require('./ap_touchable_style')) },
  get ApTouchable () { return d(require('./ap_touchable')) }
}

},{"./ap_touchable":23,"./ap_touchable_style":24}],26:[function(require,module,exports){
/**
 * Get average value.
 * @function ave
 * @param {...number} values - Values to ave.
 * @returns {number} - Average value.
 */


"use strict";

const sum = require('./sum');

/** @lends ave */
function ave() {
    let args = arguments;
    let values = 0, size = 0;
    for (let i = 0, len = args.length; i < len; i++) {
        let val = args[i];
        if (Array.isArray(val)) {
            size += val.length;
            val = sum.apply(sum, val);
        } else {
            size += 1;
        }
        values += val;
    }
    return values / size;
}

module.exports = ave;


},{"./sum":30}],27:[function(require,module,exports){
/**
 * Basic numeric calculation functions.
 * @module numcal
 */

"use strict";

module.exports = {
    get ave() { return require('./ave'); },
    get max() { return require('./max'); },
    get min() { return require('./min'); },
    get sum() { return require('./sum'); }
};
},{"./ave":26,"./max":28,"./min":29,"./sum":30}],28:[function(require,module,exports){
/**
 * Find max value.
 * @function max
 * @param {...number} values - Values to compare.
 * @returns {number} - Max number.
 */


"use strict";

/** @lends max */
function max() {
    let args = arguments;
    let result = undefined;
    for (let i = 0, len = args.length; i < len; i++) {
        let val = args[i];
        if (Array.isArray(val)) {
            val = max.apply(max, val);
        }
        let hit = (result === undefined) || (val > result);
        if (hit) {
            result = val;
        }
    }
    return result;
}

module.exports = max;


},{}],29:[function(require,module,exports){
/**
 * Find min value.
 * @function min
 * @param {...number} values - Values to compare.
 * @returns {number} - Min number.
 */


"use strict";

/** @lends min */
function min() {
    let args = arguments;
    let result = undefined;
    for (let i = 0, len = args.length; i < len; i++) {
        let val = args[i];
        if (Array.isArray(val)) {
            val = min.apply(min, val);
        }
        let hit = (result === undefined) || (val < result);
        if (hit) {
            result = val;
        }
    }
    return result;
}

module.exports = min;


},{}],30:[function(require,module,exports){
/**
 * Get sum value.
 * @function sum
 * @param {...number} values - Values to sum.
 * @returns {number} - Sum value.
 */


"use strict";

/** @lends sum */
function sum() {
    let args = arguments;
    let result = 0;
    for (let i = 0, len = args.length; i < len; i++) {
        let val = args[i];
        if (Array.isArray(val)) {
            val = sum.apply(sum, val);
        }
        result += val;
    }
    return result;
}

module.exports = sum;


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92Ni4wLjAvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkb2MvZGVtby9kZW1vLmJyb3dzZXIuanMiLCIvVXNlcnMvb2t1bmlzaGluaXNoaS9Qcm9qZWN0cy9hcGVtYW4tcHJvamVjdHMvYXBlbWFuLXJlYWN0LWNhcHRjaGEvZG9jL2RlbW8vZGVtby5jb21wb25lbnQuanN4IiwiL1VzZXJzL29rdW5pc2hpbmlzaGkvUHJvamVjdHMvYXBlbWFuLXByb2plY3RzL2FwZW1hbi1yZWFjdC1jYXB0Y2hhL2xpYi9hcF9jYXB0Y2hhLmpzeCIsIi9Vc2Vycy9va3VuaXNoaW5pc2hpL1Byb2plY3RzL2FwZW1hbi1wcm9qZWN0cy9hcGVtYW4tcmVhY3QtY2FwdGNoYS9saWIvYXBfY2FwdGNoYV9zdHlsZS5qc3giLCIvVXNlcnMvb2t1bmlzaGluaXNoaS9Qcm9qZWN0cy9hcGVtYW4tcHJvamVjdHMvYXBlbWFuLXJlYWN0LWJ1dHRvbi9saWIvYXBfYmlnX2J1dHRvbi5qc3giLCIvVXNlcnMvb2t1bmlzaGluaXNoaS9Qcm9qZWN0cy9hcGVtYW4tcHJvamVjdHMvYXBlbWFuLXJlYWN0LWJ1dHRvbi9saWIvYXBfYnV0dG9uLmpzeCIsIi9Vc2Vycy9va3VuaXNoaW5pc2hpL1Byb2plY3RzL2FwZW1hbi1wcm9qZWN0cy9hcGVtYW4tcmVhY3QtYnV0dG9uL2xpYi9hcF9idXR0b25fZ3JvdXAuanN4IiwiL1VzZXJzL29rdW5pc2hpbmlzaGkvUHJvamVjdHMvYXBlbWFuLXByb2plY3RzL2FwZW1hbi1yZWFjdC1idXR0b24vbGliL2FwX2J1dHRvbl9zdHlsZS5qc3giLCIvVXNlcnMvb2t1bmlzaGluaXNoaS9Qcm9qZWN0cy9hcGVtYW4tcHJvamVjdHMvYXBlbWFuLXJlYWN0LWJ1dHRvbi9saWIvYXBfY2VsbF9idXR0b24uanN4IiwiL1VzZXJzL29rdW5pc2hpbmlzaGkvUHJvamVjdHMvYXBlbWFuLXByb2plY3RzL2FwZW1hbi1yZWFjdC1idXR0b24vbGliL2FwX2NlbGxfYnV0dG9uX3Jvdy5qc3giLCIvVXNlcnMvb2t1bmlzaGluaXNoaS9Qcm9qZWN0cy9hcGVtYW4tcHJvamVjdHMvYXBlbWFuLXJlYWN0LWJ1dHRvbi9saWIvYXBfaWNvbl9idXR0b24uanN4IiwiL1VzZXJzL29rdW5pc2hpbmlzaGkvUHJvamVjdHMvYXBlbWFuLXByb2plY3RzL2FwZW1hbi1yZWFjdC1idXR0b24vbGliL2FwX2ljb25fYnV0dG9uX3Jvdy5qc3giLCIvVXNlcnMvb2t1bmlzaGluaXNoaS9Qcm9qZWN0cy9hcGVtYW4tcHJvamVjdHMvYXBlbWFuLXJlYWN0LWJ1dHRvbi9saWIvYXBfbmV4dF9idXR0b24uanN4IiwiL1VzZXJzL29rdW5pc2hpbmlzaGkvUHJvamVjdHMvYXBlbWFuLXByb2plY3RzL2FwZW1hbi1yZWFjdC1idXR0b24vbGliL2FwX3ByZXZfYnV0dG9uLmpzeCIsIm5vZGVfbW9kdWxlcy9hcGVtYW4tcmVhY3QtYnV0dG9uL2xpYi9pbmRleC5qcyIsIi9Vc2Vycy9va3VuaXNoaW5pc2hpL1Byb2plY3RzL2FwZW1hbi1wcm9qZWN0cy9hcGVtYW4tcmVhY3QtaW1hZ2UvbGliL2FwX2ltYWdlLmpzeCIsIi9Vc2Vycy9va3VuaXNoaW5pc2hpL1Byb2plY3RzL2FwZW1hbi1wcm9qZWN0cy9hcGVtYW4tcmVhY3QtaW1hZ2UvbGliL2FwX2ltYWdlX3N0eWxlLmpzeCIsIm5vZGVfbW9kdWxlcy9hcGVtYW4tcmVhY3QtaW1hZ2UvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2FwZW1hbi1yZWFjdC1pbWFnZS9saWIvc2l6aW5nL3NjYWxlZF9zaXplLmpzIiwiL1VzZXJzL29rdW5pc2hpbmlzaGkvUHJvamVjdHMvYXBlbWFuLXByb2plY3RzL2FwZW1hbi1yZWFjdC1zcGlubmVyL2xpYi9hcF9zcGlubmVyLmpzeCIsIi9Vc2Vycy9va3VuaXNoaW5pc2hpL1Byb2plY3RzL2FwZW1hbi1wcm9qZWN0cy9hcGVtYW4tcmVhY3Qtc3Bpbm5lci9saWIvYXBfc3Bpbm5lcl9zdHlsZS5qc3giLCJub2RlX21vZHVsZXMvYXBlbWFuLXJlYWN0LXNwaW5uZXIvbGliL2luZGV4LmpzIiwiL1VzZXJzL29rdW5pc2hpbmlzaGkvUHJvamVjdHMvYXBlbWFuLXByb2plY3RzL2FwZW1hbi1yZWFjdC10b3VjaGFibGUvbGliL2FwX3RvdWNoYWJsZS5qc3giLCIvVXNlcnMvb2t1bmlzaGluaXNoaS9Qcm9qZWN0cy9hcGVtYW4tcHJvamVjdHMvYXBlbWFuLXJlYWN0LXRvdWNoYWJsZS9saWIvYXBfdG91Y2hhYmxlX3N0eWxlLmpzeCIsIm5vZGVfbW9kdWxlcy9hcGVtYW4tcmVhY3QtdG91Y2hhYmxlL2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9udW1jYWwvbGliL2F2ZS5qcyIsIm5vZGVfbW9kdWxlcy9udW1jYWwvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL251bWNhbC9saWIvbWF4LmpzIiwibm9kZV9tb2R1bGVzL251bWNhbC9saWIvbWluLmpzIiwibm9kZV9tb2R1bGVzL251bWNhbC9saWIvc3VtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkEsYSx5REFFQSw0QiwyQ0FDQSxnRCxxREFDQSxzREFDQSxvREFDQSx3REFDQSw0RCxtSkFFQSxJQUFNLEtBQU8sZ0JBQU0sV0FBTixDQUFrQixvQkFDN0IsZUFENkIsMkJBQ1YsQ0FDakIsT0FBTyxDQUNMLFdBQVksMkJBRFAsQ0FBUCxBQUdELENBTDRCLENBTTdCLE1BTjZCLGtCQU1uQixDQUNSLElBQU0sRUFBSSxJQUFWLENBRFEsSUFFRixLQUZFLENBRVEsQ0FGUixDQUVGLEtBRkUsQ0FHUixPQUNFLHlDQUNFLGtFQUFnQixlQUFlLFNBQS9CLEVBREYsQ0FFRSxnRUFBZSxlQUFlLFNBQTlCLEVBRkYsQ0FH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KGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCdcblxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpXG5jb25zdCBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpXG5cbmNvbnN0IERlbW8gPSByZXF1aXJlKCcuL2RlbW8uY29tcG9uZW50LmpzJykuZGVmYXVsdFxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIG9uTG9hZCAoKSB7XG4gIHdpbmRvdy5SZWFjdCA9IFJlYWN0XG4gIGxldCBEZW1vRmFjdG9yeSA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkoRGVtbylcbiAgUmVhY3RET00ucmVuZGVyKERlbW9GYWN0b3J5KCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZW1vLXdyYXAnKSlcbn0pXG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFwQ2FwdGNoYSBmcm9tICcuLi8uLi9saWIvYXBfY2FwdGNoYSdcbmltcG9ydCB7QXBCdXR0b25TdHlsZX0gZnJvbSAnYXBlbWFuLXJlYWN0LWJ1dHRvbidcbmltcG9ydCB7QXBJbWFnZVN0eWxlfSBmcm9tICdhcGVtYW4tcmVhY3QtaW1hZ2UnXG5pbXBvcnQge0FwU3Bpbm5lclN0eWxlfSBmcm9tICdhcGVtYW4tcmVhY3Qtc3Bpbm5lcidcbmltcG9ydCBBcENhcHRjaGFTdHlsZSBmcm9tICcuLi8uLi9saWIvYXBfY2FwdGNoYV9zdHlsZSdcblxuY29uc3QgRGVtbyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2FwdGNoYVNyYzogXCIuL2ltYWdlcy9tb2NrLWNhcHRjaGEuc3ZnXCJcbiAgICB9XG4gIH0sXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBzdGF0ZSB9ID0gc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QXBTcGlubmVyU3R5bGUgaGlnaGxpZ2h0Q29sb3I9XCIjYjM1NjAwXCIvPlxuICAgICAgICA8QXBCdXR0b25TdHlsZSBoaWdobGlnaHRDb2xvcj1cIiNiMzU2MDBcIi8+XG4gICAgICAgIDxBcEltYWdlU3R5bGUgLz5cbiAgICAgICAgPEFwQ2FwdGNoYVN0eWxlIC8+XG4gICAgICAgIDxBcENhcHRjaGEgc3JjPXsgc3RhdGUuY2FwdGNoYVNyYyB9XG4gICAgICAgICAgICAgICAgICAgcmVmcmVzaFRleHQ9XCJyZWZyZXNoXCJcbiAgICAgICAgICAgICAgICAgICBzcGlubmluZz17IHN0YXRlLnNwaW5uaW5nIH1cbiAgICAgICAgICAgICAgICAgICBvblJlZnJlc2g9eyBzLnJlZnJlc2hDYXB0Y2hhIH0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9LFxuICByZWZyZXNoQ2FwdGNoYSgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICBjb25zb2xlLmxvZygncmVmcmVzaENhcHRjaGEnLCB0aW1lKVxuICAgIHMuc2V0U3RhdGUoe1xuICAgICAgc3Bpbm5pbmc6IHRydWUsXG4gICAgICBjYXB0Y2hhU3JjOiBudWxsXG4gICAgfSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHMuc2V0U3RhdGUoe1xuICAgICAgICBjYXB0Y2hhU3JjOiBgLi9pbWFnZXMvbW9jay1jYXB0Y2hhLnN2Zz90PSR7dGltZX1gLFxuICAgICAgICBzcGlubmluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfSwgMTUwMClcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRGVtbyIsIi8qKlxuICogQ2FwdGNoYSBjb21wb25lbnQuXG4gKiBAY2xhc3MgQXBDYXB0Y2hhXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbXBvcnQge0FwSWNvbn0gZnJvbSAnYXBlbWFuLXJlYWN0LWljb24nXG5pbXBvcnQge0FwSW1hZ2V9IGZyb20gJ2FwZW1hbi1yZWFjdC1pbWFnZSdcbmltcG9ydCB7QXBTcGlubmVyfSBmcm9tICdhcGVtYW4tcmVhY3Qtc3Bpbm5lcidcbmltcG9ydCB7QXBUb3VjaGFibGV9IGZyb20gJ2FwZW1hbi1yZWFjdC10b3VjaGFibGUnXG5cbi8qKiBAbGVuZHMgQXBDYXB0Y2hhICovXG5jb25zdCBBcENhcHRjaGEgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU3BlY3NcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcm9wVHlwZXM6IHtcbiAgICAvKiogSW1hZ2Ugc291cmNlIHVybCAqL1xuICAgIHNyYzogdHlwZXMuc3RyaW5nLFxuICAgIC8qKiBIYW5kbGVyIGZvciByZWZyZXNoICovXG4gICAgb25SZWZyZXNoOiB0eXBlcy5mdW5jLFxuICAgIHJlZnJlc2hJY29uOiB0eXBlcy5zdHJpbmcsXG4gICAgcmVmcmVzaFRleHQ6IHR5cGVzLnN0cmluZyxcbiAgICBpbWFnZVdpZHRoOiB0eXBlcy5udW1iZXIsXG4gICAgaW1hZ2VIZWlnaHQ6IHR5cGVzLm51bWJlcixcbiAgICBvbkltYWdlTG9hZDogdHlwZXMuZnVuYyxcbiAgICBvbkltYWdlRXJyb3I6IHR5cGVzLmZ1bmMsXG4gICAgc3Bpbm5pbmc6IHR5cGVzLmJvb2wsXG4gICAgc3Bpbm5lclRoZW1lOiB0eXBlcy5zdHJpbmdcbiAgfSxcblxuICBtaXhpbnM6IFtdLFxuXG4gIHN0YXRpY3M6IHt9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSAoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3JjOiBudWxsLFxuICAgICAgb25SZWZyZXNoOiBudWxsLFxuICAgICAgcmVmcmVzaEljb246ICdmYSBmYS1yZWZyZXNoJyxcbiAgICAgIHJlZnJlc2hUZXh0OiAnJyxcbiAgICAgIGltYWdlV2lkdGg6IDI0MCxcbiAgICAgIGltYWdlSGVpZ2h0OiA5NCxcbiAgICAgIG9uSW1hZ2VMb2FkOiBudWxsLFxuICAgICAgb25JbWFnZUVycm9yOiBudWxsLFxuICAgICAgc3Bpbm5pbmc6IGZhbHNlLFxuICAgICAgc3Bpbm5lclRoZW1lOiBBcFNwaW5uZXIuREVGQVVMVF9USEVNRVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc25hbWVzKCdhcC1jYXB0Y2hhJywgcHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICAgc3R5bGU9e09iamVjdC5hc3NpZ24oe30sIHByb3BzLnN0eWxlKSB9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxBcFNwaW5uZXIgY2xhc3NOYW1lPVwiYXAtY2FwdGNoYS1zcGlubmVyXCJcbiAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ9eyBwcm9wcy5zcGlubmluZyB9XG4gICAgICAgICAgICAgICAgICAgICB0aGVtZT17IHByb3BzLnNwaW5uZXJUaGVtZSB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QXBJbWFnZSBjbGFzc05hbWU9XCJhcC1jYXB0Y2hhLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgICBzcmM9eyBwcm9wcy5zcmMgfVxuICAgICAgICAgICAgICAgICAgIHdpZHRoPXsgcHJvcHMuaW1hZ2VXaWR0aCB9XG4gICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsgcHJvcHMuaW1hZ2VIZWlnaHQgfVxuICAgICAgICAgICAgICAgICAgIG9uTG9hZD17IHMuaGFuZGxlSW1hZ2VMb2FkIH1cbiAgICAgICAgICAgICAgICAgICBvbkVycm9yPXsgcy5oYW5kbGVJbWFnZUVycm9yIH1cbiAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFwLWNhcHRjaGEtcmVmcmVzaC1idXR0b25cIj5cbiAgICAgICAgICAgIDxBcFRvdWNoYWJsZSBvblRhcD17IHMuaGFuZGxlVGFwIH0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFwSWNvbiBjbGFzc05hbWU9eyBjbGFzc25hbWVzKCdhcC1jYXB0Y2hhLXJlZnJlc2gtaWNvbicscHJvcHMucmVmcmVzaEljb24sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYS1zcGluJzogcHJvcHMuc3Bpbm5pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pIH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+eyBwcm9wcy5yZWZyZXNoVGV4dCB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L0FwVG91Y2hhYmxlPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0sXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTGlmZWN5Y2xlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gIH0sXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlIChuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgcmV0dXJuIHRydWVcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVXBkYXRlIChuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gIH0sXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEN1c3RvbVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS1cblxuICBoYW5kbGVUYXAgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcbiAgICBpZiAocHJvcHMub25SZWZyZXNoKSB7XG4gICAgICBwcm9wcy5vblJlZnJlc2goKVxuICAgIH1cbiAgfSxcblxuICBoYW5kbGVJbWFnZUxvYWQgKGV2KSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBwcm9wcyB9ID0gc1xuICAgIGlmIChwcm9wcy5vbkltYWdlTG9hZCkge1xuICAgICAgcHJvcHMub25JbWFnZUxvYWQoZXYpXG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZUltYWdlRXJyb3IgKGVycikge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcbiAgICBpZiAocHJvcHMub25JbWFnZUVycm9yKSB7XG4gICAgICBwcm9wcy5vbkltYWdlRXJyb3IoZXJyKVxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBQcml2YXRlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQXBDYXB0Y2hhXG4iLCIvKipcbiAqIFN0eWxlIGZvciBBcENhcHRjaGEuXG4gKiBAY2xhc3MgQXBDYXB0Y2hhU3R5bGVcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7QXBTdHlsZX0gZnJvbSAnYXBlbWFuLXJlYWN0LXN0eWxlJ1xuXG4vKiogQGxlbmRzIEFwQ2FwdGNoYVN0eWxlICovXG5jb25zdCBBcENhcHRjaGFTdHlsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgc3R5bGU6IHR5cGVzLm9iamVjdFxuICB9LFxuICBnZXREZWZhdWx0UHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdHlsZToge31cbiAgICB9XG4gIH0sXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBwcm9wcyB9ID0gc1xuICAgIGxldCBkYXRhID0ge1xuICAgICAgJy5hcC1jYXB0Y2hhJzoge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyNGQUZBRkEnLFxuICAgICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICAgIH0sXG4gICAgICAnLmFwLWNhcHRjaGEtaW1hZ2UnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjRTBFMEUwJ1xuICAgICAgfSxcbiAgICAgICcuYXAtY2FwdGNoYS1pbWFnZSAuYXAtaW1hZ2Utc3Bpbm5lcic6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J1xuICAgICAgfSxcbiAgICAgICcuYXAtY2FwdGNoYS1yZWZyZXNoLWJ1dHRvbic6IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgcGFkZGluZzogJzRweCA4cHgnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LDI1NSwyNTUsMC45KSdcbiAgICAgIH0sXG4gICAgICAnLmFwLWNhcHRjaGEtcmVmcmVzaC1idXR0b246YWN0aXZlJzoge1xuICAgICAgICBvcGFjaXR5OiAwLjhcbiAgICAgIH0sXG4gICAgICAnLmFwLWNhcHRjaGEtc3Bpbm5lcic6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgekluZGV4OiA0LFxuICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsMjU1LDI1NSwwLjkpJyxcbiAgICAgICAgY29sb3I6ICcjQ0NDJ1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc21hbGxNZWRpYURhdGEgPSB7fVxuICAgIGxldCBtZWRpdW1NZWRpYURhdGEgPSB7fVxuICAgIGxldCBsYXJnZU1lZGlhRGF0YSA9IHt9XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcFN0eWxlXG4gICAgICAgIGRhdGE9eyBPYmplY3QuYXNzaWduKGRhdGEsIHByb3BzLnN0eWxlKSB9XG4gICAgICAgIHNtYWxsTWVkaWFEYXRhPXsgc21hbGxNZWRpYURhdGEgfVxuICAgICAgICBtZWRpdW1NZWRpYURhdGE9eyBtZWRpdW1NZWRpYURhdGEgfVxuICAgICAgICBsYXJnZU1lZGlhRGF0YT17IGxhcmdlTWVkaWFEYXRhIH1cbiAgICAgID57IHByb3BzLmNoaWxkcmVuIH08L0FwU3R5bGU+XG4gICAgKVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBBcENhcHRjaGFTdHlsZVxuIiwiLyoqXG4gKiBCaWcgYnV0dG9uIGNvbXBvbmVudC5cbiAqIEBjbGFzcyBBcEJpZ0J1dHRvblxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBBcEJ1dHRvbiBmcm9tICcuL2FwX2J1dHRvbidcblxuaW1wb3J0IHtBcFB1cmVNaXhpbn0gZnJvbSAnYXBlbWFuLXJlYWN0LW1peGlucydcblxuLyoqIEBsZW5kcyBBcEJpZ0J1dHRvbiAqL1xuY29uc3QgQXBCaWdCdXR0b24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU3BlY3NcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcm9wVHlwZXM6IHtcbiAgICBkaXNhYmxlZDogdHlwZXMuYm9vbCxcbiAgICBvblRhcDogdHlwZXMuZnVuYyxcbiAgICB0ZXh0OiB0eXBlcy5zdHJpbmcsXG4gICAgc2l6ZTogdHlwZXMubnVtYmVyXG4gIH0sXG5cbiAgbWl4aW5zOiBbXG4gICAgQXBQdXJlTWl4aW5cbiAgXSxcblxuICBnZXRJbml0aWFsU3RhdGUgKCkge1xuICAgIHJldHVybiB7fVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIG9uVGFwOiBudWxsLFxuICAgICAgdGV4dDogbnVsbCxcbiAgICAgIHNpemU6IDk0XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBwcm9wcyB9ID0gc1xuICAgIGxldCB7IHNpemUgfSA9IHByb3BzXG4gICAgbGV0IHN0eWxlID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB3aWR0aDogc2l6ZSwgaGVpZ2h0OiBzaXplXG4gICAgfSwgcHJvcHMuc3R5bGUpXG4gICAgcmV0dXJuIChcbiAgICAgIDxBcEJ1dHRvbiB7IC4uLnByb3BzIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NuYW1lcygnYXAtYmlnLWJ1dHRvbicsIHByb3BzLmNsYXNzTmFtZSkgfVxuICAgICAgICB3aWRlPXsgZmFsc2UgfVxuICAgICAgICBzdHlsZT17IHN0eWxlIH1cbiAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcC1iaWctYnV0dG9uLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy50ZXh0IH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgPC9BcEJ1dHRvbj5cbiAgICApXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFwQmlnQnV0dG9uXG4iLCIvKipcbiAqIEJ1dHRvbiBjb21wb25lbnQuXG4gKiBAY2xhc3MgQXBCdXR0b25cbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmltcG9ydCB7QXBUb3VjaE1peGluLCBBcFB1cmVNaXhpbn0gZnJvbSAnYXBlbWFuLXJlYWN0LW1peGlucydcblxuLyoqIEBsZW5kcyBBcEJ1dHRvbiAqL1xubGV0IEFwQnV0dG9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNwZWNzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgLyoqIERpc2FibGUgYnV0dG9uIHRhcCAqL1xuICAgIGRpc2FibGVkOiB0eXBlcy5ib29sLFxuICAgIC8qKiBSZW5kZXIgd2l0aCBwcmltYXJ5IHN0eWxlICovXG4gICAgcHJpbWFyeTogdHlwZXMuYm9vbCxcbiAgICAvKiogUmVuZGVyIHdpdGggZGFuZ2VyIHN0eWxlICovXG4gICAgZGFuZ2VyOiB0eXBlcy5ib29sLFxuICAgIC8qKiBSZW5kZXIgd2l0aCB3aWRlIHN0eWxlICovXG4gICAgd2lkZTogdHlwZXMuYm9vbCxcbiAgICAvKiogQW5jaG9yIGhyZWYgKi9cbiAgICBocmVmOiB0eXBlcy5zdHJpbmcsXG4gICAgLyoqIERvY3VtZW50IGlkICovXG4gICAgaWQ6IHR5cGVzLnN0cmluZyxcbiAgICAvKiogSGlkZSBidXR0b24gKi9cbiAgICBoaWRkZW46IHR5cGVzLmJvb2wsXG4gICAgLyoqIFJlbmRlciB3aXRoIHNpbXBsZSBzdHlsZSAqL1xuICAgIHNpbXBsZTogdHlwZXMuYm9vbCxcbiAgICAvKiogRGF0YSBmb3IgdG91Y2ggZXZlbnRzICovXG4gICAgZGF0YTogdHlwZXMuYW55XG4gIH0sXG5cbiAgbWl4aW5zOiBbXG4gICAgQXBUb3VjaE1peGluLFxuICAgIEFwUHVyZU1peGluXG4gIF0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlICgpIHtcbiAgICByZXR1cm4ge31cbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvKiogRm9yIGJpdCB0YXBwaW5nICovXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAvKiogUmVuZGVyIHdpdGggcHJpbWFyeSBzdHlsZSAqL1xuICAgICAgcHJpbWFyeTogZmFsc2UsXG4gICAgICAvKiogUmVuZGVyIHdpdGggZGFuZ2VyIHN0eWxlICovXG4gICAgICBkYW5nZXI6IGZhbHNlLFxuICAgICAgd2lkZTogZmFsc2UsXG4gICAgICBocmVmOiBudWxsLFxuICAgICAgLyoqIERvY3VtZW50IGlkICovXG4gICAgICBpZDogbnVsbCxcbiAgICAgIC8qKiBEaXNwbGF5IGhpZGRlbiAqL1xuICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgIC8qKiBTaW1wbGUgc3R5bGUgKi9cbiAgICAgIHNpbXBsZTogZmFsc2UsXG4gICAgICAvKiogRGF0YSBmb3IgZXZlbnQgKi9cbiAgICAgIGRhdGE6IG51bGxcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGxldCB7IHByb3BzIH0gPSBzXG5cbiAgICBsZXQgY2xhc3NOYW1lID0gY2xhc3NuYW1lcygnYXAtYnV0dG9uJywgcHJvcHMuY2xhc3NOYW1lLCB7XG4gICAgICAnYXAtYnV0dG9uLXByaW1hcnknOiBwcm9wcy5wcmltYXJ5LFxuICAgICAgJ2FwLWJ1dHRvbi1kYW5nZXInOiBwcm9wcy5kYW5nZXIsXG4gICAgICAnYXAtYnV0dG9uLXdpZGUnOiBwcm9wcy53aWRlLFxuICAgICAgJ2FwLWJ1dHRvbi1kaXNhYmxlZCc6IHByb3BzLmRpc2FibGVkLFxuICAgICAgJ2FwLWJ1dHRvbi1zaW1wbGUnOiBwcm9wcy5zaW1wbGUsXG4gICAgICAnYXAtYnV0dG9uLWhpZGRlbic6IHByb3BzLmhpZGRlblxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG4gICAgICAgICBocmVmPXsgcHJvcHMuaHJlZiB9XG4gICAgICAgICBpZD17IHByb3BzLmlkIH1cbiAgICAgICAgIHN0eWxlPXsgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMuc3R5bGUpIH1cbiAgICAgID57IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgIDwvYT5cbiAgICApXG4gIH0sXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gRm9yIEFwVG91Y2hNaXhpblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRUb3VjaERhdGEgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcbiAgICByZXR1cm4gcHJvcHMuZGF0YVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBBcEJ1dHRvblxuIiwiLyoqXG4gKiBCdXR0b24gZ3JvdXAgY29tcG9uZW50LlxuICogQGNsYXNzIEFwQnV0dG9uR3JvdXBcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmltcG9ydCB7QXBQdXJlTWl4aW59IGZyb20gJ2FwZW1hbi1yZWFjdC1taXhpbnMnXG5cbi8qKiBAbGVuZHMgQXBCdXR0b25Hcm91cCAqL1xuY29uc3QgQXBCdXR0b25Hcm91cCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTcGVjc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHByb3BUeXBlczoge30sXG5cbiAgbWl4aW5zOiBbXG4gICAgQXBQdXJlTWl4aW5cbiAgXSxcblxuICBnZXRJbml0aWFsU3RhdGUgKCkge1xuICAgIHJldHVybiB7fVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH0sXG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGxldCB7IHByb3BzIH0gPSBzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc25hbWVzKCdhcC1idXR0b24tZ3JvdXAnLCBwcm9wcy5jbGFzc05hbWUpIH0+XG4gICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBBcEJ1dHRvbkdyb3VwXG4iLCIvKipcbiAqIFN0eWxlIGZvciBBcEJ1dHRvbi5cbiAqIEBjbGFzcyBBcEJ1dHRvblN0eWxlXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQge0FwU3R5bGV9IGZyb20gJ2FwZW1hbi1yZWFjdC1zdHlsZSdcblxuLyoqIEBsZW5kcyBBcEJ1dHRvblN0eWxlICovXG5jb25zdCBBcEJ1dHRvblN0eWxlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICBcbiAgICBzdHlsZTogdHlwZXMub2JqZWN0LFxuICAgIGhpZ2hsaWdodENvbG9yOiB0eXBlcy5zdHJpbmcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0eXBlcy5zdHJpbmcsXG4gICAgZGFuZ2VyQ29sb3I6IHR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZENvbG9yOiB0eXBlcy5zdHJpbmdcbiAgfSxcbiAgZ2V0RGVmYXVsdFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NvcGU6IGZhbHNlLFxuICAgICAgc3R5bGU6IHt9LFxuICAgICAgaGlnaGxpZ2h0Q29sb3I6IEFwU3R5bGUuREVGQVVMVF9ISUdITElHSFRfQ09MT1IsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IEFwU3R5bGUuREVGQVVMVF9CQUNLR1JPVU5EX0NPTE9SLFxuICAgICAgZGFuZ2VyQ29sb3I6IEFwU3R5bGUuREVGQVVMVF9EQU5HRVJfQ09MT1IsXG4gICAgICBkaXNhYmxlZENvbG9yOiAnI0FBQSdcbiAgICB9XG4gIH0sXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQge3Byb3BzfSA9IHNcblxuICAgIGxldCB7XG4gICAgICBoaWdobGlnaHRDb2xvcixcbiAgICAgIGJhY2tncm91bmRDb2xvcixcbiAgICAgIGRhbmdlckNvbG9yLFxuICAgICAgZGlzYWJsZWRDb2xvclxuICAgIH0gPSBwcm9wc1xuXG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICAnLmFwLWJ1dHRvbic6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBwYWRkaW5nOiAnMC41ZW0gMWVtJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICAgICAgbWFyZ2luOiAnNHB4JyxcbiAgICAgICAgY29sb3I6IGAke2hpZ2hsaWdodENvbG9yfWAsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2hpZ2hsaWdodENvbG9yfWAsXG4gICAgICAgIGJhY2tncm91bmQ6IGAke2JhY2tncm91bmRDb2xvcn1gLFxuICAgICAgICBXZWJraXRVc2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgIE1velVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgTXNVc2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgIFVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgICAgIH0sXG4gICAgICAnLmFwLWJpZy1idXR0b24nOiB7XG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGJvcmRlcldpZHRoOiAnNHB4JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm94U2hhZG93OiAnMnB4IDJweCA0cHggcmdiYSgwLDAsMCwwLjIpJyxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vcm1hbCdcbiAgICAgIH0sXG4gICAgICAnLmFwLWJpZy1idXR0b246YWN0aXZlJzoge1xuICAgICAgICBib3hTaGFkb3c6ICdub25lJ1xuICAgICAgfSxcbiAgICAgICcuYXAtYnV0dG9uID4gKic6IHtcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgICB9LFxuICAgICAgJy5hcC1idXR0b246aG92ZXInOiB7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICBvcGFjaXR5OiAwLjlcbiAgICAgIH0sXG4gICAgICAnLmFwLWJ1dHRvbjphY3RpdmUnOiB7XG4gICAgICAgIGJveFNoYWRvdzogJzFweCAxcHggMnB4IHJnYmEoMCwwLDAsMC4xKSBpbnNldCcsXG4gICAgICAgIG9wYWNpdHk6IDAuOFxuICAgICAgfSxcbiAgICAgICcuYXAtYnV0dG9uLmFwLWJ1dHRvbi1kaXNhYmxlZCwuYXAtYnV0dG9uLmFwLWJ1dHRvbi1kaXNhYmxlZDpob3ZlciwuYXAtYnV0dG9uLmFwLWJ1dHRvbi1kaXNhYmxlZDphY3RpdmUnOiB7XG4gICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgY29sb3I6IGAke2Rpc2FibGVkQ29sb3J9YCxcbiAgICAgICAgYm9yZGVyQ29sb3I6IGAke2Rpc2FibGVkQ29sb3J9YCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0YwRjBGMCdcbiAgICAgIH0sXG4gICAgICAnLmFwLWJ1dHRvbi1wcmltYXJ5Jzoge1xuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgYmFja2dyb3VuZDogYCR7aGlnaGxpZ2h0Q29sb3J9YFxuICAgICAgfSxcbiAgICAgICcuYXAtYnV0dG9uLWRhbmdlcic6IHtcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGJhY2tncm91bmQ6IGAke2RhbmdlckNvbG9yfWBcbiAgICAgIH0sXG4gICAgICAnLmFwLWJ1dHRvbi13aWRlJzoge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWF4V2lkdGg6ICcyNDBweCcsXG4gICAgICAgIG1hcmdpbkxlZnQ6IDAsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAwXG4gICAgICB9LFxuICAgICAgJy5hcC1pY29uLWJ1dHRvbic6IHtcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnaW5oZXJpdCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgICAgfSxcbiAgICAgICcuYXAtaWNvbi1idXR0b24tc2ltcGxlJzoge1xuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J1xuICAgICAgfSxcbiAgICAgICcuYXAtaWNvbi1idXR0b24tc2ltcGxlOmFjdGl2ZSc6IHtcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgIG9wYWNpdHk6ICcwLjgnXG4gICAgICB9LFxuICAgICAgJy5hcC1pY29uLWJ1dHRvbi1zaW1wbGUgLmFwLWljb24tYnV0dG9uLWljb24nOiB7XG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCdcbiAgICAgIH0sXG4gICAgICAnLmFwLWljb24tYnV0dG9uLWljb24nOiB7XG4gICAgICAgIG1hcmdpbjogJzJweCAwJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgZm9udFNpemU6ICcyZW0nXG4gICAgICB9LFxuICAgICAgJy5hcC1pY29uLWJ1dHRvbi10ZXh0Jzoge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBmb250U2l6ZTogJzAuNjZlbScsXG4gICAgICAgIHBhZGRpbmc6ICcycHggMCdcbiAgICAgIH0sXG4gICAgICAnLmFwLWljb24tYnV0dG9uLXJvdyc6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBtYXhXaWR0aDogQXBTdHlsZS5DT05URU5UX1dJRFRILFxuICAgICAgICBtYXJnaW46ICcwIGF1dG8nXG4gICAgICB9LFxuICAgICAgJy5hcC1pY29uLWJ1dHRvbi1yb3cgLmFwLWJ1dHRvbic6IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgfSxcbiAgICAgICcuYXAtY2VsbC1idXR0b24nOiB7XG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxZW0nLFxuICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogMCxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbiAgICAgIH0sXG4gICAgICAnLmFwLWNlbGwtYnV0dG9uLWFsaWduZXInOiB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICB3aWR0aDogJzFweCcsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnLTFweCcsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBwYWRkaW5nOiAnOHB4IDAnLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICAgICAgfSxcbiAgICAgICcuYXAtY2VsbC1idXR0b24tdGV4dCc6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXG4gICAgICB9LFxuICAgICAgJy5hcC1jZWxsLWJ1dHRvbi1yb3cnOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgbWF4V2lkdGg6IEFwU3R5bGUuQ09OVEVOVF9XSURUSCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWFyZ2luOiAnOHB4IGF1dG8nXG4gICAgICB9LFxuICAgICAgJy5hcC1jZWxsLWJ1dHRvbi1yb3cgLmFwLWNlbGwtYnV0dG9uJzoge1xuICAgICAgICBib3JkZXJSaWdodENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgfSxcbiAgICAgICcuYXAtY2VsbC1idXR0b24tcm93IC5hcC1jZWxsLWJ1dHRvbjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgYm9yZGVyTGVmdENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICB9LFxuICAgICAgJy5hcC1jZWxsLWJ1dHRvbi1yb3cgLmFwLWJ1dHRvbic6IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgfSxcbiAgICAgICcuYXAtbmV4dC1idXR0b24sLmFwLXByZXYtYnV0dG9uJzoge1xuICAgICAgICBwYWRkaW5nOiAnMC4yNWVtIDFlbSdcbiAgICAgIH0sXG4gICAgICAnLmFwLW5leHQtYnV0dG9uLWljb24nOiB7XG4gICAgICAgIG1hcmdpbkxlZnQ6ICc0cHgnLFxuICAgICAgICBtYXJnaW5SaWdodDogMFxuICAgICAgfSxcbiAgICAgICcuYXAtcHJldi1idXR0b24taWNvbic6IHtcbiAgICAgICAgbWFyZ2luTGVmdDogMCxcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICc0cHgnXG4gICAgICB9LFxuICAgICAgJy5hcC1idXR0b24taGlkZGVuJzoge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSAhaW1wb3J0YW50J1xuICAgICAgfSxcbiAgICAgICcuYXAtYnV0dG9uLXNpbXBsZSc6IHtcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCdcbiAgICAgIH0sXG4gICAgICAnLmFwLWJ1dHRvbi1zaW1wbGU6YWN0aXZlJzoge1xuICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgb3BhY2l0eTogJzAuOCdcbiAgICAgIH0sXG4gICAgICAnLmFwLWJ1dHRvbi1ncm91cCc6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc21hbGxNZWRpYURhdGEgPSB7fVxuICAgIGxldCBtZWRpdW1NZWRpYURhdGEgPSB7fVxuICAgIGxldCBsYXJnZU1lZGlhRGF0YSA9IHt9XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcFN0eWxlIFxuICAgICAgICAgICAgICAgZGF0YT17IE9iamVjdC5hc3NpZ24oZGF0YSwgcHJvcHMuc3R5bGUpIH1cbiAgICAgICAgICAgICAgIHNtYWxsTWVkaWFEYXRhPXsgc21hbGxNZWRpYURhdGEgfVxuICAgICAgICAgICAgICAgbWVkaXVtTWVkaWFEYXRhPXsgbWVkaXVtTWVkaWFEYXRhIH1cbiAgICAgICAgICAgICAgIGxhcmdlTWVkaWFEYXRhPXsgbGFyZ2VNZWRpYURhdGEgfVxuICAgICAgPnsgcHJvcHMuY2hpbGRyZW4gfTwvQXBTdHlsZT5cbiAgICApXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFwQnV0dG9uU3R5bGVcbiIsIi8qKlxuICogQ2VsbCBidXR0b24gY29tcG9uZW50LlxuICogQGNsYXNzIEFwQ2VsbEJ1dHRvblxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBBcEJ1dHRvbiBmcm9tICcuL2FwX2J1dHRvbidcblxuaW1wb3J0IHtBcFB1cmVNaXhpbn0gZnJvbSAnYXBlbWFuLXJlYWN0LW1peGlucydcblxuLyoqIEBsZW5kcyBBcENlbGxCdXR0b24gKi9cbmNvbnN0IEFwQ2VsbEJ1dHRvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTcGVjc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHByb3BUeXBlczoge1xuICAgIGRpc2FibGVkOiB0eXBlcy5ib29sLFxuICAgIG9uVGFwOiB0eXBlcy5mdW5jLFxuICAgIHRleHQ6IHR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIG1peGluczogW1xuICAgIEFwUHVyZU1peGluXG4gIF0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlICgpIHtcbiAgICByZXR1cm4ge31cbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICBvblRhcDogbnVsbCxcbiAgICAgIHRleHQ6IG51bGxcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGxldCB7cHJvcHN9ID0gc1xuICAgIHJldHVybiAoXG4gICAgICA8QXBCdXR0b24geyAuLi5wcm9wcyB9XG4gICAgICAgIGNsYXNzTmFtZT17IGNsYXNzbmFtZXMoJ2FwLWNlbGwtYnV0dG9uJywgcHJvcHMuY2xhc3NOYW1lKSB9XG4gICAgICAgIHdpZGU9eyBmYWxzZSB9XG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFwLWNlbGwtYnV0dG9uLWFsaWduZXJcIj4mbmJzcDs8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFwLWNlbGwtYnV0dG9uLXRleHRcIj57IHByb3BzLnRleHQgfTwvc3Bhbj5cbiAgICAgIDwvQXBCdXR0b24+XG4gICAgKVxuICB9XG5cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFwQ2VsbEJ1dHRvblxuIiwiLyoqXG4gKiBSb3cgZm9yIENlbGwgYnV0dG9ucy5cbiAqIEBjbGFzcyBBcENlbGxCdXR0b25Sb3dcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbi8qKiBAbGVuZHMgQXBDZWxsQnV0dG9uUm93ICovXG5jb25zdCBBcENlbGxCdXR0b25Sb3cgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU3BlY3NcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcm9wVHlwZXM6IHt9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSAoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzICgpIHtcbiAgICByZXR1cm4ge31cbiAgfSxcblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc25hbWVzKCdhcC1jZWxsLWJ1dHRvbi1yb3cnLCBwcm9wcy5jbGFzc05hbWUpIH0+XG4gICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFwQ2VsbEJ1dHRvblJvd1xuIiwiLyoqXG4gKiBJY29uIGJ1dHRvbiBjb21wb25lbnQuXG4gKiBAY2xhc3MgQXBJY29uQnV0dG9uXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHtBcEljb259IGZyb20gJ2FwZW1hbi1yZWFjdC1pY29uJ1xuaW1wb3J0IEFwQnV0dG9uIGZyb20gJy4vYXBfYnV0dG9uJ1xuXG5pbXBvcnQge0FwUHVyZU1peGlufSBmcm9tICdhcGVtYW4tcmVhY3QtbWl4aW5zJ1xuXG4vKiogQGxlbmRzIEFwSWNvbkJ1dHRvbiAqL1xuY29uc3QgQXBJY29uQnV0dG9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNwZWNzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgaWNvbjogdHlwZXMuc3RyaW5nLFxuICAgIHRleHQ6IHR5cGVzLnN0cmluZyxcbiAgICBzaW1wbGU6IHR5cGVzLmJvb2xcbiAgfSxcblxuICBzdGF0aWNzOiB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgaWNvbiBidXR0b24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGljb24gLSBJY29uIGNsYXNzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25UYXAgLSBUYXAgY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBPdGhlciBwcm9wcy5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSAtIFJlYWN0IGVsZW1lbnQuXG4gICAgICovXG4gICAgY3JlYXRlQnV0dG9uICh0ZXh0LCBpY29uLCBvblRhcCwgcHJvcHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxBcEljb25CdXR0b24gdGV4dD17IHRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgIGljb249eyBpY29uIH1cbiAgICAgICAgICAgICAgICAgICAgICBvblRhcD17IG9uVGFwIH1cbiAgICAgICAgICB7IC4uLnByb3BzIH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG4gIH0sXG5cbiAgbWl4aW5zOiBbXG4gICAgQXBQdXJlTWl4aW5cbiAgXSxcblxuICBnZXRJbml0aWFsU3RhdGUgKCkge1xuICAgIHJldHVybiB7fVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGljb246IG51bGwsXG4gICAgICB0ZXh0OiBudWxsXG4gICAgfVxuICB9LFxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBwcm9wcyB9ID0gc1xuICAgIHJldHVybiAoXG4gICAgICA8QXBCdXR0b24geyAuLi5wcm9wcyB9XG4gICAgICAgIGNsYXNzTmFtZT17IGNsYXNzbmFtZXMoJ2FwLWljb24tYnV0dG9uJywge1xuICAgICAgICAgICAgICAgICdhcC1pY29uLWJ1dHRvbi1zaW1wbGUnOiAhIXByb3BzLnNpbXBsZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb3BzLmNsYXNzTmFtZSkgfVxuICAgICAgICB3aWRlPXsgZmFsc2UgfVxuICAgICAgPlxuICAgICAgICA8QXBJY29uIGNsYXNzTmFtZT17IGNsYXNzbmFtZXMoJ2FwLWljb24tYnV0dG9uLWljb24nLCBwcm9wcy5pY29uLCB7XG4gICAgICAgICAgICAgICAgfSkgfS8+XG4gICAgICAgIHtwcm9wcy50ZXh0ID8gPHNwYW4gY2xhc3NOYW1lPVwiYXAtaWNvbi1idXR0b24tdGV4dFwiPnsgcHJvcHMudGV4dCB9PC9zcGFuPiA6IG51bGx9XG4gICAgICA8L0FwQnV0dG9uPlxuICAgIClcbiAgfVxuXG59KVxuXG5leHBvcnQgZGVmYXVsdCBBcEljb25CdXR0b25cbiIsIi8qKlxuICogUm93IGZvciBJY29uIGJ1dHRvbnMuXG4gKiBAY2xhc3MgQXBJY29uQnV0dG9uUm93XG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbi8qKiBAbGVuZHMgQXBJY29uQnV0dG9uUm93ICovXG5jb25zdCBBcEljb25CdXR0b25Sb3cgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU3BlY3NcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcm9wVHlwZXM6IHt9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSAoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzICgpIHtcbiAgICByZXR1cm4ge31cbiAgfSxcblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc25hbWVzKCdhcC1pY29uLWJ1dHRvbi1yb3cnLCBwcm9wcy5jbGFzc05hbWUpIH0+XG4gICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFwSWNvbkJ1dHRvblJvdztcblxuXG4iLCIvKipcbiAqIE5leHQgYnV0dG9uIGNvbXBvbmVudC5cbiAqIEBjbGFzcyBBcE5leHRCdXR0b25cbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgQXBCdXR0b24gZnJvbSAnLi9hcF9idXR0b24nXG5pbXBvcnQge0FwSWNvbn0gZnJvbSAnYXBlbWFuLXJlYWN0LWljb24nXG5cbmltcG9ydCB7QXBQdXJlTWl4aW59IGZyb20gJ2FwZW1hbi1yZWFjdC1taXhpbnMnXG5cbi8qKiBAbGVuZHMgQXBOZXh0QnV0dG9uICovXG5jb25zdCBBcE5leHRCdXR0b24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU3BlY3NcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcm9wVHlwZXM6IHtcbiAgICBkaXNhYmxlZDogdHlwZXMuYm9vbCxcbiAgICBvblRhcDogdHlwZXMuZnVuYyxcbiAgICB0ZXh0OiB0eXBlcy5zdHJpbmcsXG4gICAgc2l6ZTogdHlwZXMubnVtYmVyLFxuICAgIGljb246IHR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIG1peGluczogW1xuICAgIEFwUHVyZU1peGluXG4gIF0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlICgpIHtcbiAgICByZXR1cm4ge31cbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICBvblRhcDogbnVsbCxcbiAgICAgIHRleHQ6IG51bGwsXG4gICAgICBpY29uOiAnZmEgZmEtY2FyZXQtcmlnaHQnXG4gICAgfVxuICB9LFxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBwcm9wcyB9ID0gc1xuICAgIHJldHVybiAoXG4gICAgICA8QXBCdXR0b24geyAuLi5wcm9wcyB9XG4gICAgICAgIGNsYXNzTmFtZT17IGNsYXNzbmFtZXMoJ2FwLW5leHQtYnV0dG9uJywgcHJvcHMuY2xhc3NOYW1lKSB9XG4gICAgICAgIHdpZGU9eyBmYWxzZSB9XG4gICAgICAgIHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5zdHlsZSl9XG4gICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXAtbmV4dC1idXR0b24tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICB7IHByb3BzLnRleHQgfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgIDxBcEljb24gY2xhc3NOYW1lPXsgY2xhc3NuYW1lcygnYXAtbmV4dC1idXR0b24taWNvbicsIHByb3BzLmljb24pIH0vPlxuICAgICAgPC9BcEJ1dHRvbj5cbiAgICApXG4gIH1cblxufSlcblxuZXhwb3J0IGRlZmF1bHQgQXBOZXh0QnV0dG9uXG4iLCIvKipcbiAqIFByZXYgYnV0dG9uIGNvbXBvbmVudC5cbiAqIEBjbGFzcyBBcFByZXZCdXR0b25cbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgQXBCdXR0b24gZnJvbSAnLi9hcF9idXR0b24nXG5pbXBvcnQge0FwSWNvbn0gZnJvbSAnYXBlbWFuLXJlYWN0LWljb24nXG5cbmltcG9ydCB7QXBQdXJlTWl4aW59IGZyb20gJ2FwZW1hbi1yZWFjdC1taXhpbnMnXG5cbi8qKiBAbGVuZHMgQXBQcmV2QnV0dG9uICovXG5jb25zdCBBcFByZXZCdXR0b24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU3BlY3NcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcm9wVHlwZXM6IHtcbiAgICBkaXNhYmxlZDogdHlwZXMuYm9vbCxcbiAgICBvblRhcDogdHlwZXMuZnVuYyxcbiAgICB0ZXh0OiB0eXBlcy5zdHJpbmcsXG4gICAgc2l6ZTogdHlwZXMubnVtYmVyLFxuICAgIGljb246IHR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIG1peGluczogW1xuICAgIEFwUHVyZU1peGluXG4gIF0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlICgpIHtcbiAgICByZXR1cm4ge31cbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICBvblRhcDogbnVsbCxcbiAgICAgIHRleHQ6IG51bGwsXG4gICAgICBpY29uOiAnZmEgZmEtY2FyZXQtbGVmdCdcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGxldCB7IHByb3BzIH0gPSBzXG4gICAgcmV0dXJuIChcbiAgICAgIDxBcEJ1dHRvbiB7IC4uLnByb3BzIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NuYW1lcygnYXAtcHJldi1idXR0b24nLCBwcm9wcy5jbGFzc05hbWUpIH1cbiAgICAgICAgd2lkZT17IGZhbHNlIH1cbiAgICAgICAgc3R5bGU9e09iamVjdC5hc3NpZ24oe30sIHByb3BzLnN0eWxlKX1cbiAgICAgID5cbiAgICAgICAgPEFwSWNvbiBjbGFzc05hbWU9eyBjbGFzc25hbWVzKCdhcC1wcmV2LWJ1dHRvbi1pY29uJywgcHJvcHMuaWNvbikgfS8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXAtcHJldi1idXR0b24tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICB7IHByb3BzLnRleHQgfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgICA8L0FwQnV0dG9uPlxuICAgIClcbiAgfVxuXG59KVxuXG5leHBvcnQgZGVmYXVsdCBBcFByZXZCdXR0b25cbiIsIi8qKlxuICogYXBlbWFuIHJlYWN0IHBhY2thZ2UgZm9yIGJ1dHRvbiBjb21wb25lbnQuXG4gKiBAbW9kdWxlIGFwZW1hbi1yZWFjdC1idXR0b25cbiAqL1xuXG4ndXNlIHN0cmljdCdcblxubGV0IGQgPSAobW9kdWxlKSA9PiBtb2R1bGUuZGVmYXVsdCB8fCBtb2R1bGVcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldCBBcEJpZ0J1dHRvbiAoKSB7IHJldHVybiBkKHJlcXVpcmUoJy4vYXBfYmlnX2J1dHRvbicpKSB9LFxuICBnZXQgQXBCdXR0b25Hcm91cCAoKSB7IHJldHVybiBkKHJlcXVpcmUoJy4vYXBfYnV0dG9uX2dyb3VwJykpIH0sXG4gIGdldCBBcEJ1dHRvblN0eWxlICgpIHsgcmV0dXJuIGQocmVxdWlyZSgnLi9hcF9idXR0b25fc3R5bGUnKSkgfSxcbiAgZ2V0IEFwQnV0dG9uICgpIHsgcmV0dXJuIGQocmVxdWlyZSgnLi9hcF9idXR0b24nKSkgfSxcbiAgZ2V0IEFwQ2VsbEJ1dHRvblJvdyAoKSB7IHJldHVybiBkKHJlcXVpcmUoJy4vYXBfY2VsbF9idXR0b25fcm93JykpIH0sXG4gIGdldCBBcENlbGxCdXR0b24gKCkgeyByZXR1cm4gZChyZXF1aXJlKCcuL2FwX2NlbGxfYnV0dG9uJykpIH0sXG4gIGdldCBBcEljb25CdXR0b25Sb3cgKCkgeyByZXR1cm4gZChyZXF1aXJlKCcuL2FwX2ljb25fYnV0dG9uX3JvdycpKSB9LFxuICBnZXQgQXBJY29uQnV0dG9uICgpIHsgcmV0dXJuIGQocmVxdWlyZSgnLi9hcF9pY29uX2J1dHRvbicpKSB9LFxuICBnZXQgQXBOZXh0QnV0dG9uICgpIHsgcmV0dXJuIGQocmVxdWlyZSgnLi9hcF9uZXh0X2J1dHRvbicpKSB9LFxuICBnZXQgQXBQcmV2QnV0dG9uICgpIHsgcmV0dXJuIGQocmVxdWlyZSgnLi9hcF9wcmV2X2J1dHRvbicpKSB9XG59XG4iLCIvKipcbiAqIGFwZW1hbiByZWFjdCBwYWNrYWdlIGZvciBpbWFnZSBjb21wb25lbnQuXG4gKiBAY2xhc3MgQXBJbWFnZVxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgbnVtY2FsIGZyb20gJ251bWNhbCdcbmltcG9ydCBzY2FsZWRTaXplIGZyb20gJy4vc2l6aW5nL3NjYWxlZF9zaXplJ1xuaW1wb3J0IHtBcFNwaW5uZXJ9IGZyb20gJ2FwZW1hbi1yZWFjdC1zcGlubmVyJ1xuaW1wb3J0IHtBcFB1cmVNaXhpbn0gZnJvbSAnYXBlbWFuLXJlYWN0LW1peGlucydcblxuLyoqIEBsZW5kcyBBcEltYWdlICovXG5jb25zdCBBcEltYWdlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNwZWNzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgLyoqIEltYWdlIHNjYWxpbmcgcG9saWN5ICovXG4gICAgc2NhbGU6IHR5cGVzLm9uZU9mKFtcbiAgICAgICdmaXQnLFxuICAgICAgJ2ZpbGwnLFxuICAgICAgJ25vbmUnXG4gICAgXSksXG4gICAgLyoqIEltYWdlIHdpZHRoICovXG4gICAgd2lkdGg6IHR5cGVzLm9uZU9mVHlwZShbIHR5cGVzLm51bWJlciwgdHlwZXMuc3RyaW5nIF0pLFxuICAgIC8qKiBJbWFnZSBoZWlnaHQgKi9cbiAgICBoZWlnaHQ6IHR5cGVzLm9uZU9mVHlwZShbIHR5cGVzLm51bWJlciwgdHlwZXMuc3RyaW5nIF0pLFxuICAgIC8qKiBJbWFnZSBzcmMgc3RyaW5nICovXG4gICAgc3JjOiB0eXBlcy5zdHJpbmcsXG4gICAgLyoqIEFsdCB0ZXN0ICovXG4gICAgYWx0OiB0eXBlcy5zdHJpbmcsXG4gICAgLyoqIFRoZW0gb2Ygc3Bpbm5lciAqL1xuICAgIHNwaW5uZXJUaGVtZTogdHlwZXMuc3RyaW5nLFxuICAgIC8qKiBIYW5kbGVyIG9uIGltYWdlIGxvYWQgKi9cbiAgICBvbkxvYWQ6IHR5cGVzLmZ1bmMsXG4gICAgLyoqIEhhbmRsZXIgb24gaW1hZ2UgZXJyb3IuICovXG4gICAgb25FcnJvcjogdHlwZXMuZnVuY1xuICB9LFxuXG4gIG1peGluczogW1xuICAgIEFwUHVyZU1peGluXG4gIF0sXG5cbiAgc3RhdGljczoge1xuICAgIHNjYWxlZFNpemUsXG4gICAgemVyb0lmTmFOICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGlzTmFOKHZhbHVlKSA/IDAgOiB2YWx1ZVxuICAgIH0sXG4gICAgbnVsbElmTmFOICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGlzTmFOKHZhbHVlKSA/IG51bGwgOiB2YWx1ZVxuICAgIH1cbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgcmV0dXJuIHtcbiAgICAgIGltZ1dpZHRoOiBudWxsLFxuICAgICAgaW1nSGVpZ2h0OiBudWxsLFxuICAgICAgbW91bnRlZDogZmFsc2UsXG4gICAgICByZWFkeTogZmFsc2UsXG4gICAgICBsb2FkaW5nOiAhIXMucHJvcHMuc3JjLFxuICAgICAgZXJyb3I6IG51bGxcbiAgICB9XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NhbGU6ICdub25lJyxcbiAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgc3JjOiBudWxsLFxuICAgICAgYWx0OiAnTk8gSU1BR0UnLFxuICAgICAgc3Bpbm5lclRoZW1lOiBBcFNwaW5uZXIuREVGQVVMVF9USEVNRSxcbiAgICAgIG9uTG9hZDogbnVsbCxcbiAgICAgIG9uRXJyb3I6IG51bGxcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGxldCB7IHN0YXRlLCBwcm9wcyB9ID0gc1xuXG4gICAgbGV0IHNpemUgPSB7XG4gICAgICB3aWR0aDogcHJvcHMud2lkdGggfHwgbnVsbCxcbiAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0IHx8IG51bGxcbiAgICB9XG5cbiAgICBsZXQgeyBtb3VudGVkLCBlcnJvciwgcmVhZHksIGxvYWRpbmcgfSA9IHN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NuYW1lcygnYXAtaW1hZ2UnLCBwcm9wcy5jbGFzc05hbWUsIHtcbiAgICAgICAgICAgICAgICAnYXAtaW1hZ2UtbG9hZGluZyc6IHByb3BzLnNyYyAmJiBsb2FkaW5nLFxuICAgICAgICAgICAgICAgICdhcC1pbWFnZS1yZWFkeSc6IHByb3BzLnNyYyAmJiByZWFkeVxuICAgICAgICAgICAgfSkgfVxuICAgICAgICAgICBzdHlsZT17IE9iamVjdC5hc3NpZ24oe30sIHNpemUsIHByb3BzLnN0eWxlKSB9PlxuICAgICAgICB7IG1vdW50ZWQgJiYgZXJyb3IgPyBzLl9yZW5kZXJOb3Rmb3VuZChzaXplKSA6IG51bGx9XG4gICAgICAgIHsgbW91bnRlZCAmJiAhZXJyb3IgPyBzLl9yZW5kZXJJbWcoc2l6ZSwgbW91bnRlZCkgOiBudWxsIH1cbiAgICAgICAgeyBsb2FkaW5nID8gcy5fcmVuZGVyU3Bpbm5lcihzaXplKSA6IG51bGwgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9LFxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIExpZmVjeWNsZVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBzLnNldFN0YXRlKHtcbiAgICAgIG1vdW50ZWQ6IHRydWVcbiAgICB9KVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzLnJlc2l6ZUltYWdlKClcbiAgICB9LCAwKVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHMgPSB0aGlzXG5cbiAgICBsZXQgc3JjID0gcy5wcm9wcy5zcmNcbiAgICBsZXQgbmV4dFNyYyA9IG5leHRQcm9wcy5zcmNcbiAgICBsZXQgc3JjQ2hhbmdlZCA9ICEhbmV4dFNyYyAmJiAobmV4dFNyYyAhPT0gc3JjKVxuICAgIGlmIChzcmNDaGFuZ2VkKSB7XG4gICAgICBzLnNldFN0YXRlKHtcbiAgICAgICAgcmVhZHk6IGZhbHNlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICBlcnJvcjogbnVsbFxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZSAobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIHMucmVzaXplSW1hZ2UoKVxuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICB9LFxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBIZWxwZXJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaGFuZGxlTG9hZCAoZSkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcblxuICAgIGlmIChwcm9wcy5vbkxvYWQpIHtcbiAgICAgIHByb3BzLm9uTG9hZChlKVxuICAgIH1cblxuICAgIHMucmVzaXplSW1hZ2UoZS50YXJnZXQud2lkdGgsIGUudGFyZ2V0LmhlaWdodClcbiAgfSxcblxuICBoYW5kbGVFcnJvciAoZSkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcblxuICAgIHMuc2V0U3RhdGUoe1xuICAgICAgZXJyb3I6IGUsXG4gICAgICBsb2FkaW5nOiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAocHJvcHMub25FcnJvcikge1xuICAgICAgcHJvcHMub25FcnJvcihlKVxuICAgIH1cbiAgfSxcblxuICByZXNpemVJbWFnZSAoaW1nQ29udGVudFdpZHRoLCBpbWdDb250ZW50SGVpZ2h0KSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBzdGF0ZSwgcHJvcHMgfSA9IHNcblxuICAgIGltZ0NvbnRlbnRXaWR0aCA9IGltZ0NvbnRlbnRXaWR0aCB8fCBzdGF0ZS5pbWdDb250ZW50V2lkdGhcbiAgICBpbWdDb250ZW50SGVpZ2h0ID0gaW1nQ29udGVudEhlaWdodCB8fCBzdGF0ZS5pbWdDb250ZW50SGVpZ2h0XG5cbiAgICBsZXQgdmFsaWQgPSBpbWdDb250ZW50V2lkdGggJiYgaW1nQ29udGVudEhlaWdodFxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBlbG0gPSBSZWFjdERPTS5maW5kRE9NTm9kZShzKVxuICAgIGxldCBmcmFtZVNpemUgPSB7XG4gICAgICB3aWR0aDogZWxtLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBlbG0ub2Zmc2V0SGVpZ2h0XG4gICAgfVxuICAgIGxldCBjb250ZW50U2l6ZSA9IHtcbiAgICAgIGhlaWdodDogaW1nQ29udGVudEhlaWdodCxcbiAgICAgIHdpZHRoOiBpbWdDb250ZW50V2lkdGhcbiAgICB9XG4gICAgbGV0IHNjYWxlZFNpemUgPSBBcEltYWdlLnNjYWxlZFNpemUoXG4gICAgICBjb250ZW50U2l6ZSwgZnJhbWVTaXplLCBwcm9wcy5zY2FsZVxuICAgIClcblxuICAgIHMuc2V0U3RhdGUoe1xuICAgICAgaW1nQ29udGVudFdpZHRoOiBpbWdDb250ZW50V2lkdGgsXG4gICAgICBpbWdDb250ZW50SGVpZ2h0OiBpbWdDb250ZW50SGVpZ2h0LFxuICAgICAgaW1nV2lkdGg6IHNjYWxlZFNpemUud2lkdGgsXG4gICAgICBpbWdIZWlnaHQ6IHNjYWxlZFNpemUuaGVpZ2h0LFxuICAgICAgcmVhZHk6IHRydWUsXG4gICAgICBsb2FkaW5nOiBmYWxzZVxuICAgIH0pXG4gIH0sXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFByaXZhdGVcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG4gIF9yZW5kZXJJbWcgKHNpemUpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGxldCB7IHN0YXRlLCBwcm9wcyB9ID0gc1xuXG4gICAgbGV0IHsgbnVsbElmTmFOLCB6ZXJvSWZOYU4gfSA9IEFwSW1hZ2VcblxuICAgIHJldHVybiAoXG4gICAgICA8aW1nIHNyYz17IHByb3BzLnNyYyB9XG4gICAgICAgICAgIGFsdD17IHByb3BzLmFsdCB9XG4gICAgICAgICAgIGNsYXNzTmFtZT17IGNsYXNzbmFtZXMoJ2FwLWltYWdlLWNvbnRlbnQnKSB9XG4gICAgICAgICAgIHN0eWxlPXsge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB6ZXJvSWZOYU4oKHNpemUuaGVpZ2h0IC0gc3RhdGUuaW1nSGVpZ2h0KSAvIDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogemVyb0lmTmFOKChzaXplLndpZHRoIC0gc3RhdGUuaW1nV2lkdGgpIC8gMiksXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbnVsbElmTmFOKHN0YXRlLmltZ1dpZHRoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogbnVsbElmTmFOKHN0YXRlLmltZ0hlaWdodClcbiAgICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICBvbkxvYWQ9eyBzLmhhbmRsZUxvYWQgfVxuICAgICAgICAgICBvbkVycm9yPXsgcy5oYW5kbGVFcnJvciB9XG4gICAgICAvPlxuICAgIClcbiAgfSxcblxuICBfcmVuZGVyTm90Zm91bmQgKHNpemUpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGxldCB7IHByb3BzIH0gPSBzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcC1pbWFnZS1ub3Rmb3VuZFwiXG4gICAgICAgICAgIHN0eWxlPXsge1xuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBgJHtzaXplLmhlaWdodH1weGAsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBgJHtudW1jYWwubWluKHNpemUuaGVpZ2h0ICogMC40LCAxOCl9YFxuICAgICAgICAgICAgICAgICB9IH1cbiAgICAgID57IHByb3BzLmFsdCB9PC9kaXY+XG4gICAgKVxuICB9LFxuXG4gIF9yZW5kZXJTcGlubmVyIChzaXplKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBwcm9wcyB9ID0gc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBcFNwaW5uZXIgY2xhc3NOYW1lPVwiYXAtaW1hZ2Utc3Bpbm5lclwiXG4gICAgICAgICAgICAgICAgIHRoZW1lPXsgcHJvcHMuc3Bpbm5lclRoZW1lIH1cbiAgICAgICAgICAgICAgICAgc3R5bGU9eyB7XG4gICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHNpemUuaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgIH0gfS8+XG4gICAgKVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBBcEltYWdlXG4iLCIvKipcbiAqIFN0eWxlIGZvciBBcEltYWdlLlxuICogQGNsYXNzIEFwSW1hZ2VTdHlsZVxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtBcFN0eWxlfSBmcm9tICdhcGVtYW4tcmVhY3Qtc3R5bGUnXG5cbi8qKiBAbGVuZHMgQXBJbWFnZVN0eWxlICovXG5jb25zdCBBcEltYWdlU3R5bGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIFxuICAgIHN0eWxlOiB0eXBlcy5vYmplY3QsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0eXBlcy5zdHJpbmdcbiAgfSxcbiAgZ2V0RGVmYXVsdFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXG4gICAgICBzdHlsZToge30sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjREREJyxcbiAgICAgIHNwaW5Db2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC41KSdcbiAgICB9XG4gIH0sXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBwcm9wcyB9ID0gc1xuXG4gICAgbGV0IHsgYmFja2dyb3VuZENvbG9yLCBzcGluQ29sb3IgfSA9IHByb3BzXG5cbiAgICBsZXQgdHJhbnNpdGlvbkR1cmF0aW9uID0gMTAwXG5cbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgICcuYXAtaW1hZ2UnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7YmFja2dyb3VuZENvbG9yfWAsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICB9LFxuICAgICAgJy5hcC1pbWFnZSBpbWcnOiB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHRyYW5zaXRpb246IGB3aWR0aCAke3RyYW5zaXRpb25EdXJhdGlvbn1tcywgb3BhY2l0eSAke3RyYW5zaXRpb25EdXJhdGlvbn1tc2BcbiAgICAgIH0sXG4gICAgICAnLmFwLWltYWdlLXJlYWR5IGltZyc6IHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSxcbiAgICAgICcuYXAtaW1hZ2UtY29udGVudCc6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgICB9LFxuICAgICAgJy5hcC1pbWFnZS1zcGlubmVyJzoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB6SW5kZXg6IDgsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC4xKScsXG4gICAgICAgIGNvbG9yOiBgJHtzcGluQ29sb3J9YFxuICAgICAgfSxcbiAgICAgICcuYXAtaW1hZ2Utbm90Zm91bmQnOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGNvbG9yOiAncmdiYSgwLDAsMCwwLjEpJyxcbiAgICAgICAgZm9udEZhbWlseTogJ21vbm9zcGFjZSdcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHNtYWxsTWVkaWFEYXRhID0ge31cbiAgICBsZXQgbWVkaXVtTWVkaWFEYXRhID0ge31cbiAgICBsZXQgbGFyZ2VNZWRpYURhdGEgPSB7fVxuICAgIHJldHVybiAoXG4gICAgICA8QXBTdHlsZSBcbiAgICAgICAgICAgICAgIGRhdGE9eyBPYmplY3QuYXNzaWduKGRhdGEsIHByb3BzLnN0eWxlKSB9XG4gICAgICAgICAgICAgICBzbWFsbE1lZGlhRGF0YT17IHNtYWxsTWVkaWFEYXRhIH1cbiAgICAgICAgICAgICAgIG1lZGl1bU1lZGlhRGF0YT17IG1lZGl1bU1lZGlhRGF0YSB9XG4gICAgICAgICAgICAgICBsYXJnZU1lZGlhRGF0YT17IGxhcmdlTWVkaWFEYXRhIH1cbiAgICAgID57IHByb3BzLmNoaWxkcmVuIH08L0FwU3R5bGU+XG4gICAgKVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBBcEltYWdlU3R5bGVcbiIsIi8qKlxuICogYXBlbWFuIHJlYWN0IHBhY2thZ2UgZm9yIGltYWdlIGNvbXBvbmVudC5cbiAqIEBtb2R1bGUgYXBlbWFuLXJlYWN0LWltYWdlXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmxldCBkID0gKG1vZHVsZSkgPT4gbW9kdWxlLmRlZmF1bHQgfHwgbW9kdWxlXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXQgQXBJbWFnZVN0eWxlICgpIHsgcmV0dXJuIGQocmVxdWlyZSgnLi9hcF9pbWFnZV9zdHlsZScpKSB9LFxuICBnZXQgQXBJbWFnZSAoKSB7IHJldHVybiBkKHJlcXVpcmUoJy4vYXBfaW1hZ2UnKSkgfVxufVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gX3NjYWxlZFNpemVcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuY29uc3QgbnVtY2FsID0gcmVxdWlyZSgnbnVtY2FsJylcblxuZnVuY3Rpb24gc2NhbGVkU2l6ZSAoY29udGVudFNpemUsIGZyYW1lU2l6ZSwgcG9saWN5KSB7XG4gIGxldCBjdyA9IGNvbnRlbnRTaXplLndpZHRoXG4gIGxldCBjaCA9IGNvbnRlbnRTaXplLmhlaWdodFxuICBsZXQgZncgPSBmcmFtZVNpemUud2lkdGhcbiAgbGV0IGZoID0gZnJhbWVTaXplLmhlaWdodFxuXG4gIGxldCB3UmF0ZSA9IG51bWNhbC5taW4oMSwgZncgLyBjdylcbiAgbGV0IGhSYXRlID0gbnVtY2FsLm1pbigxLCBmaCAvIGNoKVxuXG4gIGxldCBzaXplV2l0aFJhdGUgPSAocmF0ZSkgPT4gKHtcbiAgICB3aWR0aDogY29udGVudFNpemUud2lkdGggKiByYXRlLFxuICAgIGhlaWdodDogY29udGVudFNpemUuaGVpZ2h0ICogcmF0ZVxuICB9KVxuXG4gIHN3aXRjaCAocG9saWN5KSB7XG4gICAgY2FzZSAnbm9uZSc6XG4gICAgICByZXR1cm4gc2l6ZVdpdGhSYXRlKDEpXG4gICAgY2FzZSAnZml0JzpcbiAgICAgIHJldHVybiBzaXplV2l0aFJhdGUoXG4gICAgICAgIG51bWNhbC5taW4od1JhdGUsIGhSYXRlKVxuICAgICAgKVxuICAgIGNhc2UgJ2ZpbGwnOlxuICAgICAgcmV0dXJuIHNpemVXaXRoUmF0ZShcbiAgICAgICAgbnVtY2FsLm1heCh3UmF0ZSwgaFJhdGUpXG4gICAgICApXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBwb2xpY3k6ICR7cG9saWN5fWApXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzY2FsZWRTaXplXG4iLCIvKipcbiAqIGFwZW1hbiByZWFjdCBwYWNrYWdlIGZvciBzcGlubmVyLlxuICogQGNsYXNzIEFwU3Bpbm5lclxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgbnVtY2FsIGZyb20gJ251bWNhbCdcbmltcG9ydCB7QXBQdXJlTWl4aW4sIEFwTGF5b3V0TWl4aW59IGZyb20gJ2FwZW1hbi1yZWFjdC1taXhpbnMnXG5cbmNvbnN0IFNwaW5uZXJUaGVtZXMgPSB7XG4gIGE6IFsgJ2ZhJywgJ2ZhLXNwaW4nLCAnZmEtc3Bpbm5lcicgXSxcbiAgYjogWyAnZmEnLCAnZmEtc3BpbicsICdmYS1jaXJjbGUtby1ub3RjaCcgXSxcbiAgYzogWyAnZmEnLCAnZmEtc3BpbicsICdmYS1yZWZyZXNoJyBdLFxuICBkOiBbICdmYScsICdmYS1zcGluJywgJ2ZhLWdlYXInIF0sXG4gIGU6IFsgJ2ZhJywgJ2ZhLXNwaW4nLCAnZmEtcHVsc2UnIF1cbn1cbmNvbnN0IERFRkFVTFRfVEhFTUUgPSAnYydcblxuLyoqIEBsZW5kcyBBcFNwaW5uZXIgKi9cbmNvbnN0IEFwU3Bpbm5lciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTcGVjc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHByb3BUeXBlczoge1xuICAgIGVuYWJsZWQ6IHR5cGVzLmJvb2wsXG4gICAgdGhlbWU6IHR5cGVzLm9uZU9mKFxuICAgICAgT2JqZWN0LmtleXMoU3Bpbm5lclRoZW1lcylcbiAgICApXG4gIH0sXG5cbiAgbWl4aW5zOiBbXG4gICAgQXBQdXJlTWl4aW4sXG4gICAgQXBMYXlvdXRNaXhpblxuICBdLFxuXG4gIHN0YXRpY3M6IHtcbiAgICBERUZBVUxUX1RIRU1FOiBERUZBVUxUX1RIRU1FXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlICgpIHtcbiAgICByZXR1cm4ge31cbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIHRoZW1lOiBERUZBVUxUX1RIRU1FXG4gICAgfVxuICB9LFxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBwcm9wcywgbGF5b3V0cyB9ID0gc1xuICAgIGxldCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKCdhcC1zcGlubmVyJywgcHJvcHMuY2xhc3NOYW1lLCB7XG4gICAgICAnYXAtc3Bpbm5lci12aXNpYmxlJzogISFsYXlvdXRzLnNwaW5uZXIsXG4gICAgICAnYXAtc3Bpbm5lci1lbmFibGVkJzogISFwcm9wcy5lbmFibGVkXG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuICAgICAgICAgICBzdHlsZT17IE9iamVjdC5hc3NpZ24oe30sIGxheW91dHMuc3Bpbm5lciwgcHJvcHMuc3R5bGUpIH0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFwLXNwaW5uZXItYWxpZ25lclwiPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiByZWY9XCJpY29uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBjbGFzc25hbWVzKCdhcC1zcGlubmVyLWljb24nLCBTcGlubmVyVGhlbWVzW3Byb3BzLnRoZW1lXSkgfVxuICAgICAgICAgICAgICAgIHN0eWxlPXsgbGF5b3V0cy5pY29uIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9LFxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIExpZmVjeWNsZVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIHMuc2V0U3RhdGUoe1xuICAgICAgaWNvblZpc2libGU6IHRydWVcbiAgICB9KVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICB9LFxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEZvciBBcExheW91dE1peGluXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgZ2V0SW5pdGlhbExheW91dHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzcGlubmVyOiBudWxsLFxuICAgICAgaWNvbjogbnVsbFxuICAgIH1cbiAgfSxcblxuICBjYWxjTGF5b3V0cyAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHMpXG5cbiAgICBsZXQgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlIHx8IG5vZGUucGFyZW50RWxlbWVudFxuICAgIGxldCB3ID0gbnVtY2FsLm1heChwYXJlbnQub2Zmc2V0V2lkdGgsIG5vZGUub2Zmc2V0V2lkdGgpXG4gICAgbGV0IGggPSBudW1jYWwubWF4KHBhcmVudC5vZmZzZXRIZWlnaHQsIG5vZGUub2Zmc2V0SGVpZ2h0KVxuICAgIGxldCBzaXplID0gbnVtY2FsLm1pbih3LCBoKVxuICAgIGxldCBpY29uU2l6ZSA9IG51bWNhbC5taW4oc2l6ZSAqIDAuNSwgNjApXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3Bpbm5lcjoge1xuICAgICAgICBsaW5lSGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgZm9udFNpemU6IGAke2ljb25TaXplfXB4YFxuICAgICAgfSxcbiAgICAgIGljb246IHtcbiAgICAgICAgd2lkdGg6IGAke2ljb25TaXplfXB4YCxcbiAgICAgICAgaGVpZ2h0OiBgJHtpY29uU2l6ZX1weGBcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFwU3Bpbm5lclxuIiwiLyoqXG4gKiBTdHlsZSBmb3IgQXBTcGlubmVyLlxuICogQGNsYXNzIEFwU3Bpbm5lclN0eWxlXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQge0FwU3R5bGV9IGZyb20gJ2FwZW1hbi1yZWFjdC1zdHlsZSdcblxuLyoqIEBsZW5kcyBBcFNwaW5uZXJTdHlsZSAqL1xuY29uc3QgQXBTcGlubmVyU3R5bGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHN0YXRpY3M6IHtcbiAgICBhbGlnbmVyU3R5bGU6IHtcbiAgICAgIHdpZHRoOiAxLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5SaWdodDogJy0xcHgnLFxuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgIH1cbiAgfSxcbiAgcHJvcFR5cGVzOiB7XG4gICAgXG4gICAgdHlwZTogdHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiB0eXBlcy5vYmplY3RcbiAgfSxcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFxuICAgICAgdHlwZTogJ3RleHQvY3NzJyxcbiAgICAgIHN0eWxlOiB7fVxuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBwcm9wcyB9ID0gc1xuXG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICAnLmFwLXNwaW5uZXInOiB7XG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSxcbiAgICAgICcuYXAtc3Bpbm5lci5hcC1zcGlubmVyLWVuYWJsZWQnOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgIH0sXG4gICAgICAnLmFwLXNwaW5uZXItaWNvbic6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1hcmdpbjogJzAgNHB4JyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMTAwbXMnLFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9LFxuICAgICAgJy5hcC1zcGlubmVyLXZpc2libGUgLmFwLXNwaW5uZXItaWNvbic6IHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSxcbiAgICAgICcuYXAtc3Bpbm5lci1hbGlnbmVyJzogQXBTcGlubmVyU3R5bGUuYWxpZ25lclN0eWxlXG4gICAgfVxuICAgIGxldCBzbWFsbE1lZGlhRGF0YSA9IHt9XG4gICAgbGV0IG1lZGl1bU1lZGlhRGF0YSA9IHt9XG4gICAgbGV0IGxhcmdlTWVkaWFEYXRhID0ge31cblxuICAgIHJldHVybiAoXG4gICAgICA8QXBTdHlsZSBcbiAgICAgICAgICAgICAgIGRhdGE9eyBPYmplY3QuYXNzaWduKGRhdGEsIHByb3BzLnN0eWxlKSB9XG4gICAgICAgICAgICAgICBzbWFsbE1lZGlhRGF0YT17IHNtYWxsTWVkaWFEYXRhIH1cbiAgICAgICAgICAgICAgIG1lZGl1bU1lZGlhRGF0YT17IG1lZGl1bU1lZGlhRGF0YSB9XG4gICAgICAgICAgICAgICBsYXJnZU1lZGlhRGF0YT17IGxhcmdlTWVkaWFEYXRhIH1cbiAgICAgID57IHByb3BzLmNoaWxkcmVuIH08L0FwU3R5bGU+XG4gICAgKVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBBcFNwaW5uZXJTdHlsZVxuIiwiLyoqXG4gKiBhcGVtYW4gcmVhY3QgcGFja2FnZSBmb3Igc3Bpbm5lci5cbiAqIEBtb2R1bGUgYXBlbWFuLXJlYWN0LXNwaW5uZXJcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxubGV0IGQgPSAobW9kdWxlKSA9PiBtb2R1bGUuZGVmYXVsdCB8fCBtb2R1bGVcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldCBBcFNwaW5uZXJTdHlsZSAoKSB7IHJldHVybiBkKHJlcXVpcmUoJy4vYXBfc3Bpbm5lcl9zdHlsZScpKSB9LFxuICBnZXQgQXBTcGlubmVyICgpIHsgcmV0dXJuIGQocmVxdWlyZSgnLi9hcF9zcGlubmVyJykpIH1cbn1cbiIsIi8qKlxuICogYXBlbWFuIHJlYWN0IHBhY2thZ2UgZm9yIHRvdWNoYWJsZSBjb21wb25lbnQuXG4gKiBAY2xhc3MgQXBUb3VjaGFibGVcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHtBcFRvdWNoTWl4aW59IGZyb20gJ2FwZW1hbi1yZWFjdC1taXhpbnMnXG5cbi8qKiBAbGVuZHMgQXBUb3VjaGFibGUgKi9cbmNvbnN0IEFwVG91Y2hhYmxlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNwZWNzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByb3BUeXBlczoge30sXG5cbiAgbWl4aW5zOiBbXG4gICAgQXBUb3VjaE1peGluXG4gIF0sXG5cbiAgc3RhdGljczoge30sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlICgpIHtcbiAgICByZXR1cm4ge31cbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHMgKCkge1xuICAgIHJldHVybiB7fVxuICB9LFxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBwcm9wcyB9ID0gc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHsgLi4ucHJvcHMgfVxuICAgICAgICBjbGFzc05hbWU9eyBjbGFzc25hbWVzKCdhcC10b3VjaGFibGUnLCBwcm9wcy5jbGFzc05hbWUpIH1cbiAgICAgICAgc3R5bGU9eyBPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5zdHlsZSkgfT5cbiAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBMaWZlY3ljbGVcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gSGVscGVyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBQcml2YXRlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuXG59KVxuXG5leHBvcnQgZGVmYXVsdCBBcFRvdWNoYWJsZVxuIiwiLyoqXG4gKiBTdHlsZSBmb3IgQXBUb3VjaGFibGUuXG4gKiBAY2xhc3MgQXBUb3VjaGFibGVTdHlsZVxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0FwU3R5bGV9IGZyb20gJ2FwZW1hbi1yZWFjdC1zdHlsZSdcblxuLyoqIEBsZW5kcyBBcFRvdWNoYWJsZVN0eWxlICovXG5jb25zdCBBcFRvdWNoYWJsZVN0eWxlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBwcm9wVHlwZXM6IEFwU3R5bGUucHJvcFR5cGVzLFxuICBnZXREZWZhdWx0UHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgICcuYXAtdG91Y2hhYmxlJzoge31cbiAgICAgIH0sXG4gICAgICB0eXBlOiAndGV4dC9jc3MnXG4gICAgfVxuICB9LFxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcbiAgICByZXR1cm4gPEFwU3R5bGUgeyAuLi5wcm9wcyB9PnsgcHJvcHMuY2hpbGRyZW4gfTwvQXBTdHlsZT5cbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQXBUb3VjaGFibGVTdHlsZVxuIiwiLyoqXG4gKiBhcGVtYW4gcmVhY3QgcGFja2FnZSBmb3IgdG91Y2hhYmxlIGNvbXBvbmVudC5cbiAqIEBtb2R1bGUgYXBlbWFuLXJlYWN0LXRvdWNoYWJsZVxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5sZXQgZCA9IChtb2R1bGUpID0+IG1vZHVsZS5kZWZhdWx0IHx8IG1vZHVsZVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0IEFwVG91Y2hhYmxlU3R5bGUgKCkgeyByZXR1cm4gZChyZXF1aXJlKCcuL2FwX3RvdWNoYWJsZV9zdHlsZScpKSB9LFxuICBnZXQgQXBUb3VjaGFibGUgKCkgeyByZXR1cm4gZChyZXF1aXJlKCcuL2FwX3RvdWNoYWJsZScpKSB9XG59XG4iLCIvKipcbiAqIEdldCBhdmVyYWdlIHZhbHVlLlxuICogQGZ1bmN0aW9uIGF2ZVxuICogQHBhcmFtIHsuLi5udW1iZXJ9IHZhbHVlcyAtIFZhbHVlcyB0byBhdmUuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSAtIEF2ZXJhZ2UgdmFsdWUuXG4gKi9cblxuXG5cInVzZSBzdHJpY3RcIjtcblxuY29uc3Qgc3VtID0gcmVxdWlyZSgnLi9zdW0nKTtcblxuLyoqIEBsZW5kcyBhdmUgKi9cbmZ1bmN0aW9uIGF2ZSgpIHtcbiAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICBsZXQgdmFsdWVzID0gMCwgc2l6ZSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFyZ3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGV0IHZhbCA9IGFyZ3NbaV07XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICAgIHNpemUgKz0gdmFsLmxlbmd0aDtcbiAgICAgICAgICAgIHZhbCA9IHN1bS5hcHBseShzdW0sIHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaXplICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWVzICs9IHZhbDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcyAvIHNpemU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXZlO1xuXG4iLCIvKipcbiAqIEJhc2ljIG51bWVyaWMgY2FsY3VsYXRpb24gZnVuY3Rpb25zLlxuICogQG1vZHVsZSBudW1jYWxcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZ2V0IGF2ZSgpIHsgcmV0dXJuIHJlcXVpcmUoJy4vYXZlJyk7IH0sXG4gICAgZ2V0IG1heCgpIHsgcmV0dXJuIHJlcXVpcmUoJy4vbWF4Jyk7IH0sXG4gICAgZ2V0IG1pbigpIHsgcmV0dXJuIHJlcXVpcmUoJy4vbWluJyk7IH0sXG4gICAgZ2V0IHN1bSgpIHsgcmV0dXJuIHJlcXVpcmUoJy4vc3VtJyk7IH1cbn07IiwiLyoqXG4gKiBGaW5kIG1heCB2YWx1ZS5cbiAqIEBmdW5jdGlvbiBtYXhcbiAqIEBwYXJhbSB7Li4ubnVtYmVyfSB2YWx1ZXMgLSBWYWx1ZXMgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IC0gTWF4IG51bWJlci5cbiAqL1xuXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKiogQGxlbmRzIG1heCAqL1xuZnVuY3Rpb24gbWF4KCkge1xuICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGxldCByZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFyZ3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGV0IHZhbCA9IGFyZ3NbaV07XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICAgIHZhbCA9IG1heC5hcHBseShtYXgsIHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGhpdCA9IChyZXN1bHQgPT09IHVuZGVmaW5lZCkgfHwgKHZhbCA+IHJlc3VsdCk7XG4gICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHZhbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1heDtcblxuIiwiLyoqXG4gKiBGaW5kIG1pbiB2YWx1ZS5cbiAqIEBmdW5jdGlvbiBtaW5cbiAqIEBwYXJhbSB7Li4ubnVtYmVyfSB2YWx1ZXMgLSBWYWx1ZXMgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IC0gTWluIG51bWJlci5cbiAqL1xuXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKiogQGxlbmRzIG1pbiAqL1xuZnVuY3Rpb24gbWluKCkge1xuICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGxldCByZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFyZ3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGV0IHZhbCA9IGFyZ3NbaV07XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICAgIHZhbCA9IG1pbi5hcHBseShtaW4sIHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGhpdCA9IChyZXN1bHQgPT09IHVuZGVmaW5lZCkgfHwgKHZhbCA8IHJlc3VsdCk7XG4gICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHZhbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1pbjtcblxuIiwiLyoqXG4gKiBHZXQgc3VtIHZhbHVlLlxuICogQGZ1bmN0aW9uIHN1bVxuICogQHBhcmFtIHsuLi5udW1iZXJ9IHZhbHVlcyAtIFZhbHVlcyB0byBzdW0uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSAtIFN1bSB2YWx1ZS5cbiAqL1xuXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKiogQGxlbmRzIHN1bSAqL1xuZnVuY3Rpb24gc3VtKCkge1xuICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhcmdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxldCB2YWwgPSBhcmdzW2ldO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgICAgICB2YWwgPSBzdW0uYXBwbHkoc3VtLCB2YWwpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCArPSB2YWw7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3VtO1xuXG4iXX0=
