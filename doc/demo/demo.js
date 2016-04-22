(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';var _react=require('react');var _react2=_interopRequireDefault(_react);var _ap_captcha=require('../../lib/ap_captcha');var _ap_captcha2=_interopRequireDefault(_ap_captcha);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var Demo=_react2.default.createClass({displayName:'Demo',getInitialState:function getInitialState(){return {captchaSrc:'./images/mock-captcha.svg'}},render:function render(){var s=this,state=s.state;return _react2.default.createElement('div',null,_react2.default.createElement(_ap_captcha2.default,{src:state.captchaSrc,refreshText:'refresh',spinning:state.spinning,onRefresh:s.refreshCaptcha}))},refreshCaptcha:function refreshCaptcha(){var s=this;var time=new Date().getTime();console.log('refreshCaptcha',time);s.setState({spinning:true,captchaSrc:null});setTimeout(function(){s.setState({captchaSrc:'./images/mock-captcha.svg?t='+time,spinning:false})},1500)}});module.exports=Demo;

},{"../../lib/ap_captcha":3,"react":"react"}],2:[function(require,module,exports){
'use strict'

const React = require('react')
const ReactDOM = require('react-dom')

const Demo = require('./demo.component.js')

window.addEventListener('load', function onLoad () {
  window.React = React
  let DemoFactory = React.createFactory(Demo)
  ReactDOM.render(DemoFactory(), document.getElementById('demo-wrap'))
})

},{"./demo.component.js":1,"react":"react","react-dom":"react-dom"}],3:[function(require,module,exports){
/**
 * apeman react package for captcha component.
 * @constructor ApCaptcha
 */

'use strict';

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
    var s = false;
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

module.exports = ApCaptcha;

},{"apeman-react-icon":"apeman-react-icon","apeman-react-image":6,"apeman-react-spinner":11,"apeman-react-touchable":14,"classnames":"classnames","react":"react"}],4:[function(require,module,exports){
/**
 * apeman react package for image component.
 * @constructor ApImage
 */

'use strict';

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

module.exports = ApImage;

},{"./sizing/scaled_size":7,"apeman-react-mixins":"apeman-react-mixins","apeman-react-spinner":11,"classnames":"classnames","numcal":16,"react":"react","react-dom":"react-dom"}],5:[function(require,module,exports){
/**
 * Style for ApImage.
 * @constructor ApImageStyle
 */

'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _apemanReactStyle = require('apeman-react-style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @lends ApImageStyle */
var ApImageStyle = _react2.default.createClass({
  displayName: 'ApImageStyle',

  propTypes: {
    scoped: _react.PropTypes.bool,
    style: _react.PropTypes.object,
    backgroundColor: _react.PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      scoped: false,
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
      { scoped: props.scoped,
        data: Object.assign(data, props.style),
        smallMediaData: smallMediaData,
        mediumMediaData: mediumMediaData,
        largeMediaData: largeMediaData
      },
      props.children
    );
  }
});

module.exports = ApImageStyle;

},{"apeman-react-style":"apeman-react-style","react":"react"}],6:[function(require,module,exports){
/**
 * apeman react package for image component.
 * @module apeman-react-image
 */

'use strict'

module.exports = {
  /**
   * @name ApImageStyle
   */
  get ApImageStyle () { return require('./ap_image_style') },
  /**
   * @name ApImage
   */
  get ApImage () { return require('./ap_image') }
}

},{"./ap_image":4,"./ap_image_style":5}],7:[function(require,module,exports){
/**
 * @function _scaledSize
 */

'use strict';

var _numcal = require('numcal');

var _numcal2 = _interopRequireDefault(_numcal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scaledSize(contentSize, frameSize, policy) {
  var cw = contentSize.width;
  var ch = contentSize.height;
  var fw = frameSize.width;
  var fh = frameSize.height;

  var wRate = _numcal2.default.min(1, fw / cw);
  var hRate = _numcal2.default.min(1, fh / ch);

  var sizeWithRate = function sizeWithRate(rate) {
    return {
      width: contentSize.width * rate,
      height: contentSize.height * rate
    };
  };

  switch (policy) {
    case 'none':
      return sizeWithRate(1);
    case 'fit':
      return sizeWithRate(_numcal2.default.min(wRate, hRate));
    case 'fill':
      return sizeWithRate(_numcal2.default.max(wRate, hRate));
    default:
      throw new Error('Unknown policy: ' + policy);
  }
}

module.exports = scaledSize;

},{"numcal":16}],8:[function(require,module,exports){
/**
 * apeman react package for spinner.
 * @constructor ApSpinner
 */

'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _numcal = require('numcal');

var _numcal2 = _interopRequireDefault(_numcal);

var _apemanReactMixins = require('apeman-react-mixins');

var _consts = require('./consts');

var _consts2 = _interopRequireDefault(_consts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_THEME = 'c';

/** @lends ApSpinner */
var ApSpinner = _react2.default.createClass({
  displayName: 'ApSpinner',

  // --------------------
  // Specs
  // --------------------

  propTypes: {
    enabled: _react.PropTypes.bool,
    theme: _react.PropTypes.oneOf(Object.keys(_consts2.default.themes))
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

    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('ap-spinner', props.className, {
          'ap-spinner-visible': !!layouts.spinner,
          'ap-spinner-enabled': !!props.enabled
        }),
        style: Object.assign({}, layouts.spinner, props.style) },
      _react2.default.createElement(
        'span',
        { className: 'ap-spinner-aligner' },
        ' '
      ),
      _react2.default.createElement('span', { ref: 'icon',
        className: (0, _classnames2.default)('ap-spinner-icon', _consts2.default.themes[props.theme]),
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

module.exports = ApSpinner;

},{"./consts":10,"apeman-react-mixins":"apeman-react-mixins","classnames":"classnames","numcal":16,"react":"react","react-dom":"react-dom"}],9:[function(require,module,exports){
/**
 * Style for ApSpinner.
 * @constructor ApSpinnerStyle
 */

'use strict';

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
    scoped: _react.PropTypes.bool,
    type: _react.PropTypes.string,
    style: _react.PropTypes.object
  },
  getDefaultProps: function getDefaultProps() {
    return {
      scoped: false,
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
      { scoped: props.scoped,
        data: Object.assign(data, props.style),
        smallMediaData: smallMediaData,
        mediumMediaData: mediumMediaData,
        largeMediaData: largeMediaData
      },
      props.children
    );
  }
});

module.exports = ApSpinnerStyle;

},{"apeman-react-style":"apeman-react-style","react":"react"}],10:[function(require,module,exports){
'use strict';

exports.themes = {
  a: ['fa', 'fa-spin', 'fa-spinner'],
  b: ['fa', 'fa-spin', 'fa-circle-o-notch'],
  c: ['fa', 'fa-spin', 'fa-refresh'],
  d: ['fa', 'fa-spin', 'fa-gear'],
  e: ['fa', 'fa-spin', 'fa-pulse']
};

},{}],11:[function(require,module,exports){
/**
 * apeman react package for spinner.
 * @module apeman-react-spinner
 */

'use strict'

module.exports = {
  /**
   * @name ApSpinnerStyle
   */
  get ApSpinnerStyle () { return require('./ap_spinner_style') },
  /**
   * @name ApSpinner
   */
  get ApSpinner () { return require('./ap_spinner') },
  get consts () { return require('./consts') }
}

},{"./ap_spinner":8,"./ap_spinner_style":9,"./consts":10}],12:[function(require,module,exports){
/**
 * apeman react package for touchable component.
 * @constructor ApTouchable
 */

'use strict';

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
  },

  // --------------------
  // Lifecycle
  // --------------------

  componentDidMount: function componentDidMount() {
    var s = this;
  },
  componentWillUnmount: function componentWillUnmount() {
    var s = this;
  }
});

// ------------------
// Helper
// ------------------

// ------------------
// Private
// ------------------

module.exports = ApTouchable;

},{"apeman-react-mixins":"apeman-react-mixins","classnames":"classnames","react":"react","react-dom":"react-dom"}],13:[function(require,module,exports){
/**
 * Style for ApTouchable.
 * @constructor ApTouchableStyle
 */

'use strict';

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
      scoped: false,
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

module.exports = ApTouchableStyle;

},{"apeman-react-style":"apeman-react-style","react":"react"}],14:[function(require,module,exports){
/**
 * apeman react package for touchable component.
 * @module apeman-react-touchable
 */

'use strict'

module.exports = {
  /**
   * @name ApTouchableStyle
   */
  get ApTouchableStyle () { return require('./ap_touchable_style') },
  /**
   * @name ApTouchable
   */
  get ApTouchable () { return require('./ap_touchable') }
}

},{"./ap_touchable":12,"./ap_touchable_style":13}],15:[function(require,module,exports){
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


},{"./sum":19}],16:[function(require,module,exports){
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
},{"./ave":15,"./max":17,"./min":18,"./sum":19}],17:[function(require,module,exports){
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


},{}],18:[function(require,module,exports){
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


},{}],19:[function(require,module,exports){
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


},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92NS4zLjAvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvb2t1bmlzaGluaXNoaS9Qcm9qZWN0cy9hcGVtYW4tcHJvamVjdHMvYXBlbWFuLXJlYWN0LWNhcHRjaGEvZG9jL2RlbW8vZGVtby5jb21wb25lbnQuanN4IiwiZG9jL2RlbW8vZGVtby5ub2RlLmpzIiwiL1VzZXJzL29rdW5pc2hpbmlzaGkvUHJvamVjdHMvYXBlbWFuLXByb2plY3RzL2FwZW1hbi1yZWFjdC1jYXB0Y2hhL2xpYi9hcF9jYXB0Y2hhLmpzeCIsIi9Vc2Vycy9va3VuaXNoaW5pc2hpL1Byb2plY3RzL2FwZW1hbi1wcm9qZWN0cy9hcGVtYW4tcmVhY3QtaW1hZ2UvbGliL2FwX2ltYWdlLmpzeCIsIi9Vc2Vycy9va3VuaXNoaW5pc2hpL1Byb2plY3RzL2FwZW1hbi1wcm9qZWN0cy9hcGVtYW4tcmVhY3QtaW1hZ2UvbGliL2FwX2ltYWdlX3N0eWxlLmpzeCIsIm5vZGVfbW9kdWxlcy9hcGVtYW4tcmVhY3QtaW1hZ2UvbGliL2luZGV4LmpzIiwiL1VzZXJzL29rdW5pc2hpbmlzaGkvUHJvamVjdHMvYXBlbWFuLXByb2plY3RzL2FwZW1hbi1yZWFjdC1pbWFnZS9saWIvc2NhbGVkX3NpemUuanN4IiwiL1VzZXJzL29rdW5pc2hpbmlzaGkvUHJvamVjdHMvYXBlbWFuLXByb2plY3RzL2FwZW1hbi1yZWFjdC1zcGlubmVyL2xpYi9hcF9zcGlubmVyLmpzeCIsIi9Vc2Vycy9va3VuaXNoaW5pc2hpL1Byb2plY3RzL2FwZW1hbi1wcm9qZWN0cy9hcGVtYW4tcmVhY3Qtc3Bpbm5lci9saWIvYXBfc3Bpbm5lcl9zdHlsZS5qc3giLCIvVXNlcnMvb2t1bmlzaGluaXNoaS9Qcm9qZWN0cy9hcGVtYW4tcHJvamVjdHMvYXBlbWFuLXJlYWN0LXNwaW5uZXIvbGliL2NvbnN0cy5qc3giLCJub2RlX21vZHVsZXMvYXBlbWFuLXJlYWN0LXNwaW5uZXIvbGliL2luZGV4LmpzIiwiL1VzZXJzL29rdW5pc2hpbmlzaGkvUHJvamVjdHMvYXBlbWFuLXByb2plY3RzL2FwZW1hbi1yZWFjdC10b3VjaGFibGUvbGliL2FwX3RvdWNoYWJsZS5qc3giLCIvVXNlcnMvb2t1bmlzaGluaXNoaS9Qcm9qZWN0cy9hcGVtYW4tcHJvamVjdHMvYXBlbWFuLXJlYWN0LXRvdWNoYWJsZS9saWIvYXBfdG91Y2hhYmxlX3N0eWxlLmpzeCIsIm5vZGVfbW9kdWxlcy9hcGVtYW4tcmVhY3QtdG91Y2hhYmxlL2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9udW1jYWwvbGliL2F2ZS5qcyIsIm5vZGVfbW9kdWxlcy9udW1jYWwvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL251bWNhbC9saWIvbWF4LmpzIiwibm9kZV9tb2R1bGVzL251bWNhbC9saWIvbWluLmpzIiwibm9kZV9tb2R1bGVzL251bWNhbC9saWIvc3VtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsYUFFQSx1RUFDQSx1TEFFQSxJQUFJLEtBQU8sZ0JBQU0sV0FBTixDQUFrQixvQkFDekIsMENBQW1CLENBQ2YsT0FBTyxDQUNILFdBQVksMkJBQVosQ0FESixDQURlLENBS25CLHdCQUFVLENBQ04sSUFBTSxFQUFJLElBQUosQ0FDRixNQUFRLEVBQUUsS0FBRixDQUZOLE9BSUYseUNBQ0ksb0RBQVcsSUFBSyxNQUFNLFVBQU4sQ0FDTCxZQUFZLFNBQVosQ0FDQSxTQUFVLE1BQU0sUUFBTixDQUNWLFVBQVcsRUFBRSxjQUFGLENBSHRCLENBREosQ0FESixDQUhNLENBWVYsd0NBQWlCLENBQ2IsSUFBTSxFQUFJLElBQUosQ0FETyxJQUVULEtBQU8sSUFBSSxJQUFKLEdBQVcsT0FBWCxFQUFQLENBRlMsT0FHYixDQUFRLEdBQVIsQ0FBWSxnQkFBWixDQUE4QixJQUE5QixFQUhhLENBSWIsQ0FBRSxRQUFGLENBQVcs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O0dBWCtCO0NBQWxCLENBQW5COztBQWtCTixPQUFPLE9BQVAsR0FBaUIsZ0JBQWpCOzs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBDYXB0Y2hhIGZyb20gJy4uLy4uL2xpYi9hcF9jYXB0Y2hhJ1xuXG5sZXQgRGVtbyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBnZXRJbml0aWFsU3RhdGUgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2FwdGNoYVNyYzogXCIuL2ltYWdlcy9tb2NrLWNhcHRjaGEuc3ZnXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgY29uc3QgcyA9IHRoaXMsXG4gICAgICAgICAgICBzdGF0ZSA9IHMuc3RhdGU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxBcENhcHRjaGEgc3JjPXtzdGF0ZS5jYXB0Y2hhU3JjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaFRleHQ9XCJyZWZyZXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5uaW5nPXtzdGF0ZS5zcGlubmluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVmcmVzaD17cy5yZWZyZXNoQ2FwdGNoYX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9LFxuICAgIHJlZnJlc2hDYXB0Y2hhKCkge1xuICAgICAgICBjb25zdCBzID0gdGhpc1xuICAgICAgICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWZyZXNoQ2FwdGNoYScsIHRpbWUpXG4gICAgICAgIHMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3Bpbm5pbmc6IHRydWUsXG4gICAgICAgICAgICBjYXB0Y2hhU3JjOiBudWxsXG4gICAgICAgIH0pXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY2FwdGNoYVNyYzogYC4vaW1hZ2VzL21vY2stY2FwdGNoYS5zdmc/dD0ke3RpbWV9YCxcbiAgICAgICAgICAgICAgICBzcGlubmluZzogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDE1MDApXG4gICAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBEZW1vOyIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JylcbmNvbnN0IFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJylcblxuY29uc3QgRGVtbyA9IHJlcXVpcmUoJy4vZGVtby5jb21wb25lbnQuanMnKVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIG9uTG9hZCAoKSB7XG4gIHdpbmRvdy5SZWFjdCA9IFJlYWN0XG4gIGxldCBEZW1vRmFjdG9yeSA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkoRGVtbylcbiAgUmVhY3RET00ucmVuZGVyKERlbW9GYWN0b3J5KCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZW1vLXdyYXAnKSlcbn0pXG4iLCIvKipcbiAqIGFwZW1hbiByZWFjdCBwYWNrYWdlIGZvciBjYXB0Y2hhIGNvbXBvbmVudC5cbiAqIEBjb25zdHJ1Y3RvciBBcENhcHRjaGFcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmltcG9ydCB7QXBJY29ufSBmcm9tICdhcGVtYW4tcmVhY3QtaWNvbidcbmltcG9ydCB7QXBJbWFnZX0gZnJvbSAnYXBlbWFuLXJlYWN0LWltYWdlJ1xuaW1wb3J0IHtBcFNwaW5uZXJ9IGZyb20gJ2FwZW1hbi1yZWFjdC1zcGlubmVyJ1xuaW1wb3J0IHtBcFRvdWNoYWJsZX0gZnJvbSAnYXBlbWFuLXJlYWN0LXRvdWNoYWJsZSdcblxuLyoqIEBsZW5kcyBBcENhcHRjaGEgKi9cbmxldCBBcENhcHRjaGEgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU3BlY3NcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcm9wVHlwZXM6IHtcbiAgICAvKiogSW1hZ2Ugc291cmNlIHVybCAqL1xuICAgIHNyYzogdHlwZXMuc3RyaW5nLFxuICAgIC8qKiBIYW5kbGVyIGZvciByZWZyZXNoICovXG4gICAgb25SZWZyZXNoOiB0eXBlcy5mdW5jLFxuICAgIHJlZnJlc2hJY29uOiB0eXBlcy5zdHJpbmcsXG4gICAgcmVmcmVzaFRleHQ6IHR5cGVzLnN0cmluZyxcbiAgICBpbWFnZVdpZHRoOiB0eXBlcy5udW1iZXIsXG4gICAgaW1hZ2VIZWlnaHQ6IHR5cGVzLm51bWJlcixcbiAgICBvbkltYWdlTG9hZDogdHlwZXMuZnVuYyxcbiAgICBvbkltYWdlRXJyb3I6IHR5cGVzLmZ1bmMsXG4gICAgc3Bpbm5pbmc6IHR5cGVzLmJvb2wsXG4gICAgc3Bpbm5lclRoZW1lOiB0eXBlcy5zdHJpbmdcbiAgfSxcblxuICBtaXhpbnM6IFtdLFxuXG4gIHN0YXRpY3M6IHt9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSAoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3JjOiBudWxsLFxuICAgICAgb25SZWZyZXNoOiBudWxsLFxuICAgICAgcmVmcmVzaEljb246ICdmYSBmYS1yZWZyZXNoJyxcbiAgICAgIHJlZnJlc2hUZXh0OiAnJyxcbiAgICAgIGltYWdlV2lkdGg6IDI0MCxcbiAgICAgIGltYWdlSGVpZ2h0OiA5NCxcbiAgICAgIG9uSW1hZ2VMb2FkOiBudWxsLFxuICAgICAgb25JbWFnZUVycm9yOiBudWxsLFxuICAgICAgc3Bpbm5pbmc6IGZhbHNlLFxuICAgICAgc3Bpbm5lclRoZW1lOiBBcFNwaW5uZXIuREVGQVVMVF9USEVNRVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc25hbWVzKCdhcC1jYXB0Y2hhJywgcHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICAgc3R5bGU9e09iamVjdC5hc3NpZ24oe30sIHByb3BzLnN0eWxlKX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEFwU3Bpbm5lciBjbGFzc05hbWU9XCJhcC1jYXB0Y2hhLXNwaW5uZXJcIlxuICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZD17IHByb3BzLnNwaW5uaW5nIH1cbiAgICAgICAgICAgICAgICAgICAgIHRoZW1lPXsgcHJvcHMuc3Bpbm5lclRoZW1lIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxBcEltYWdlIGNsYXNzTmFtZT1cImFwLWNhcHRjaGEtaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgIHNyYz17IHByb3BzLnNyYyB9XG4gICAgICAgICAgICAgICAgICAgd2lkdGg9eyBwcm9wcy5pbWFnZVdpZHRoIH1cbiAgICAgICAgICAgICAgICAgICBoZWlnaHQ9eyBwcm9wcy5pbWFnZUhlaWdodCB9XG4gICAgICAgICAgICAgICAgICAgb25Mb2FkPXsgcy5oYW5kbGVJbWFnZUxvYWQgfVxuICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9eyBzLmhhbmRsZUltYWdlRXJyb3IgfVxuICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYXAtY2FwdGNoYS1yZWZyZXNoLWJ1dHRvblwiPlxuICAgICAgICAgICAgPEFwVG91Y2hhYmxlIG9uVGFwPXsgcy5oYW5kbGVUYXAgfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXBJY29uIGNsYXNzTmFtZT17IGNsYXNzbmFtZXMoJ2FwLWNhcHRjaGEtcmVmcmVzaC1pY29uJyxwcm9wcy5yZWZyZXNoSWNvbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhLXNwaW4nOiBwcm9wcy5zcGlubmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkgfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57IHByb3BzLnJlZnJlc2hUZXh0IH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvQXBUb3VjaGFibGU+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSxcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBMaWZlY3ljbGVcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV4dFByb3BzKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgfSxcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUgKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICByZXR1cm4gdHJ1ZVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGUgKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGUgKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgbGV0IHMgPSBmYWxzZVxuICB9LFxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBDdXN0b21cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaGFuZGxlVGFwICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGxldCB7IHByb3BzIH0gPSBzXG4gICAgaWYgKHByb3BzLm9uUmVmcmVzaCkge1xuICAgICAgcHJvcHMub25SZWZyZXNoKClcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlSW1hZ2VMb2FkIChldikge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcbiAgICBpZiAocHJvcHMub25JbWFnZUxvYWQpIHtcbiAgICAgIHByb3BzLm9uSW1hZ2VMb2FkKGV2KVxuICAgIH1cbiAgfSxcblxuICBoYW5kbGVJbWFnZUVycm9yIChlcnIpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGxldCB7IHByb3BzIH0gPSBzXG4gICAgaWYgKHByb3BzLm9uSW1hZ2VFcnJvcikge1xuICAgICAgcHJvcHMub25JbWFnZUVycm9yKGVycilcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUHJpdmF0ZVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS1cbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gQXBDYXB0Y2hhXG4iLCIvKipcbiAqIGFwZW1hbiByZWFjdCBwYWNrYWdlIGZvciBpbWFnZSBjb21wb25lbnQuXG4gKiBAY29uc3RydWN0b3IgQXBJbWFnZVxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgbnVtY2FsIGZyb20gJ251bWNhbCdcbmltcG9ydCBzY2FsZWRTaXplIGZyb20gJy4vc2l6aW5nL3NjYWxlZF9zaXplJ1xuaW1wb3J0IHtBcFNwaW5uZXJ9IGZyb20gJ2FwZW1hbi1yZWFjdC1zcGlubmVyJ1xuaW1wb3J0IHtBcFB1cmVNaXhpbn0gZnJvbSAnYXBlbWFuLXJlYWN0LW1peGlucydcblxuLyoqIEBsZW5kcyBBcEltYWdlICovXG5jb25zdCBBcEltYWdlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNwZWNzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgLyoqIEltYWdlIHNjYWxpbmcgcG9saWN5ICovXG4gICAgc2NhbGU6IHR5cGVzLm9uZU9mKFtcbiAgICAgICdmaXQnLFxuICAgICAgJ2ZpbGwnLFxuICAgICAgJ25vbmUnXG4gICAgXSksXG4gICAgLyoqIEltYWdlIHdpZHRoICovXG4gICAgd2lkdGg6IHR5cGVzLm9uZU9mVHlwZShbIHR5cGVzLm51bWJlciwgdHlwZXMuc3RyaW5nIF0pLFxuICAgIC8qKiBJbWFnZSBoZWlnaHQgKi9cbiAgICBoZWlnaHQ6IHR5cGVzLm9uZU9mVHlwZShbIHR5cGVzLm51bWJlciwgdHlwZXMuc3RyaW5nIF0pLFxuICAgIC8qKiBJbWFnZSBzcmMgc3RyaW5nICovXG4gICAgc3JjOiB0eXBlcy5zdHJpbmcsXG4gICAgLyoqIEFsdCB0ZXN0ICovXG4gICAgYWx0OiB0eXBlcy5zdHJpbmcsXG4gICAgLyoqIFRoZW0gb2Ygc3Bpbm5lciAqL1xuICAgIHNwaW5uZXJUaGVtZTogdHlwZXMuc3RyaW5nLFxuICAgIC8qKiBIYW5kbGVyIG9uIGltYWdlIGxvYWQgKi9cbiAgICBvbkxvYWQ6IHR5cGVzLmZ1bmMsXG4gICAgLyoqIEhhbmRsZXIgb24gaW1hZ2UgZXJyb3IuICovXG4gICAgb25FcnJvcjogdHlwZXMuZnVuY1xuICB9LFxuXG4gIG1peGluczogW1xuICAgIEFwUHVyZU1peGluXG4gIF0sXG5cbiAgc3RhdGljczoge1xuICAgIHNjYWxlZFNpemUsXG4gICAgemVyb0lmTmFOICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGlzTmFOKHZhbHVlKSA/IDAgOiB2YWx1ZVxuICAgIH0sXG4gICAgbnVsbElmTmFOICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGlzTmFOKHZhbHVlKSA/IG51bGwgOiB2YWx1ZVxuICAgIH1cbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgcmV0dXJuIHtcbiAgICAgIGltZ1dpZHRoOiBudWxsLFxuICAgICAgaW1nSGVpZ2h0OiBudWxsLFxuICAgICAgbW91bnRlZDogZmFsc2UsXG4gICAgICByZWFkeTogZmFsc2UsXG4gICAgICBsb2FkaW5nOiAhIXMucHJvcHMuc3JjLFxuICAgICAgZXJyb3I6IG51bGxcbiAgICB9XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NhbGU6ICdub25lJyxcbiAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgc3JjOiBudWxsLFxuICAgICAgYWx0OiAnTk8gSU1BR0UnLFxuICAgICAgc3Bpbm5lclRoZW1lOiBBcFNwaW5uZXIuREVGQVVMVF9USEVNRSxcbiAgICAgIG9uTG9hZDogbnVsbCxcbiAgICAgIG9uRXJyb3I6IG51bGxcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGxldCB7IHN0YXRlLCBwcm9wcyB9ID0gc1xuXG4gICAgbGV0IHNpemUgPSB7XG4gICAgICB3aWR0aDogcHJvcHMud2lkdGggfHwgbnVsbCxcbiAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0IHx8IG51bGxcbiAgICB9XG5cbiAgICBsZXQgeyBtb3VudGVkLCBlcnJvciwgcmVhZHksIGxvYWRpbmcgfSA9IHN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NuYW1lcygnYXAtaW1hZ2UnLCBwcm9wcy5jbGFzc05hbWUsIHtcbiAgICAgICAgICAgICAgICAnYXAtaW1hZ2UtbG9hZGluZyc6IHByb3BzLnNyYyAmJiBsb2FkaW5nLFxuICAgICAgICAgICAgICAgICdhcC1pbWFnZS1yZWFkeSc6IHByb3BzLnNyYyAmJiByZWFkeVxuICAgICAgICAgICAgfSkgfVxuICAgICAgICAgICBzdHlsZT17IE9iamVjdC5hc3NpZ24oe30sIHNpemUsIHByb3BzLnN0eWxlKSB9PlxuICAgICAgICB7IG1vdW50ZWQgJiYgZXJyb3IgPyBzLl9yZW5kZXJOb3Rmb3VuZChzaXplKSA6IG51bGx9XG4gICAgICAgIHsgbW91bnRlZCAmJiAhZXJyb3IgPyBzLl9yZW5kZXJJbWcoc2l6ZSwgbW91bnRlZCkgOiBudWxsIH1cbiAgICAgICAgeyBsb2FkaW5nID8gcy5fcmVuZGVyU3Bpbm5lcihzaXplKSA6IG51bGwgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9LFxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIExpZmVjeWNsZVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBzLnNldFN0YXRlKHtcbiAgICAgIG1vdW50ZWQ6IHRydWVcbiAgICB9KVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzLnJlc2l6ZUltYWdlKClcbiAgICB9LCAwKVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHMgPSB0aGlzXG5cbiAgICBsZXQgc3JjID0gcy5wcm9wcy5zcmNcbiAgICBsZXQgbmV4dFNyYyA9IG5leHRQcm9wcy5zcmNcbiAgICBsZXQgc3JjQ2hhbmdlZCA9ICEhbmV4dFNyYyAmJiAobmV4dFNyYyAhPT0gc3JjKVxuICAgIGlmIChzcmNDaGFuZ2VkKSB7XG4gICAgICBzLnNldFN0YXRlKHtcbiAgICAgICAgcmVhZHk6IGZhbHNlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICBlcnJvcjogbnVsbFxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZSAobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIHMucmVzaXplSW1hZ2UoKVxuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICB9LFxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBIZWxwZXJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaGFuZGxlTG9hZCAoZSkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcblxuICAgIGlmIChwcm9wcy5vbkxvYWQpIHtcbiAgICAgIHByb3BzLm9uTG9hZChlKVxuICAgIH1cblxuICAgIHMucmVzaXplSW1hZ2UoZS50YXJnZXQud2lkdGgsIGUudGFyZ2V0LmhlaWdodClcbiAgfSxcblxuICBoYW5kbGVFcnJvciAoZSkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcblxuICAgIHMuc2V0U3RhdGUoe1xuICAgICAgZXJyb3I6IGUsXG4gICAgICBsb2FkaW5nOiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAocHJvcHMub25FcnJvcikge1xuICAgICAgcHJvcHMub25FcnJvcihlKVxuICAgIH1cbiAgfSxcblxuICByZXNpemVJbWFnZSAoaW1nQ29udGVudFdpZHRoLCBpbWdDb250ZW50SGVpZ2h0KSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBzdGF0ZSwgcHJvcHMgfSA9IHNcblxuICAgIGltZ0NvbnRlbnRXaWR0aCA9IGltZ0NvbnRlbnRXaWR0aCB8fCBzdGF0ZS5pbWdDb250ZW50V2lkdGhcbiAgICBpbWdDb250ZW50SGVpZ2h0ID0gaW1nQ29udGVudEhlaWdodCB8fCBzdGF0ZS5pbWdDb250ZW50SGVpZ2h0XG5cbiAgICBsZXQgdmFsaWQgPSBpbWdDb250ZW50V2lkdGggJiYgaW1nQ29udGVudEhlaWdodFxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBlbG0gPSBSZWFjdERPTS5maW5kRE9NTm9kZShzKVxuICAgIGxldCBmcmFtZVNpemUgPSB7XG4gICAgICB3aWR0aDogZWxtLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBlbG0ub2Zmc2V0SGVpZ2h0XG4gICAgfVxuICAgIGxldCBjb250ZW50U2l6ZSA9IHtcbiAgICAgIGhlaWdodDogaW1nQ29udGVudEhlaWdodCxcbiAgICAgIHdpZHRoOiBpbWdDb250ZW50V2lkdGhcbiAgICB9XG4gICAgbGV0IHNjYWxlZFNpemUgPSBBcEltYWdlLnNjYWxlZFNpemUoXG4gICAgICBjb250ZW50U2l6ZSwgZnJhbWVTaXplLCBwcm9wcy5zY2FsZVxuICAgIClcblxuICAgIHMuc2V0U3RhdGUoe1xuICAgICAgaW1nQ29udGVudFdpZHRoOiBpbWdDb250ZW50V2lkdGgsXG4gICAgICBpbWdDb250ZW50SGVpZ2h0OiBpbWdDb250ZW50SGVpZ2h0LFxuICAgICAgaW1nV2lkdGg6IHNjYWxlZFNpemUud2lkdGgsXG4gICAgICBpbWdIZWlnaHQ6IHNjYWxlZFNpemUuaGVpZ2h0LFxuICAgICAgcmVhZHk6IHRydWUsXG4gICAgICBsb2FkaW5nOiBmYWxzZVxuICAgIH0pXG4gIH0sXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFByaXZhdGVcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG4gIF9yZW5kZXJJbWcgKHNpemUpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGxldCB7IHN0YXRlLCBwcm9wcyB9ID0gc1xuXG4gICAgbGV0IHsgbnVsbElmTmFOLCB6ZXJvSWZOYU4gfSA9IEFwSW1hZ2VcblxuICAgIHJldHVybiAoXG4gICAgICA8aW1nIHNyYz17IHByb3BzLnNyYyB9XG4gICAgICAgICAgIGFsdD17IHByb3BzLmFsdCB9XG4gICAgICAgICAgIGNsYXNzTmFtZT17IGNsYXNzbmFtZXMoJ2FwLWltYWdlLWNvbnRlbnQnKSB9XG4gICAgICAgICAgIHN0eWxlPXsge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB6ZXJvSWZOYU4oKHNpemUuaGVpZ2h0IC0gc3RhdGUuaW1nSGVpZ2h0KSAvIDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogemVyb0lmTmFOKChzaXplLndpZHRoIC0gc3RhdGUuaW1nV2lkdGgpIC8gMiksXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbnVsbElmTmFOKHN0YXRlLmltZ1dpZHRoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogbnVsbElmTmFOKHN0YXRlLmltZ0hlaWdodClcbiAgICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICBvbkxvYWQ9eyBzLmhhbmRsZUxvYWQgfVxuICAgICAgICAgICBvbkVycm9yPXsgcy5oYW5kbGVFcnJvciB9XG4gICAgICAvPlxuICAgIClcbiAgfSxcblxuICBfcmVuZGVyTm90Zm91bmQgKHNpemUpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGxldCB7IHByb3BzIH0gPSBzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcC1pbWFnZS1ub3Rmb3VuZFwiXG4gICAgICAgICAgIHN0eWxlPXsge1xuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBgJHtzaXplLmhlaWdodH1weGAsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBgJHtudW1jYWwubWluKHNpemUuaGVpZ2h0ICogMC40LCAxOCl9YFxuICAgICAgICAgICAgICAgICB9IH1cbiAgICAgID57IHByb3BzLmFsdCB9PC9kaXY+XG4gICAgKVxuICB9LFxuXG4gIF9yZW5kZXJTcGlubmVyIChzaXplKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBwcm9wcyB9ID0gc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBcFNwaW5uZXIgY2xhc3NOYW1lPVwiYXAtaW1hZ2Utc3Bpbm5lclwiXG4gICAgICAgICAgICAgICAgIHRoZW1lPXsgcHJvcHMuc3Bpbm5lclRoZW1lIH1cbiAgICAgICAgICAgICAgICAgc3R5bGU9eyB7XG4gICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHNpemUuaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgIH0gfS8+XG4gICAgKVxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwSW1hZ2VcbiIsIi8qKlxuICogU3R5bGUgZm9yIEFwSW1hZ2UuXG4gKiBAY29uc3RydWN0b3IgQXBJbWFnZVN0eWxlXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQge0FwU3R5bGV9IGZyb20gJ2FwZW1hbi1yZWFjdC1zdHlsZSdcblxuLyoqIEBsZW5kcyBBcEltYWdlU3R5bGUgKi9cbmNvbnN0IEFwSW1hZ2VTdHlsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgc2NvcGVkOiB0eXBlcy5ib29sLFxuICAgIHN0eWxlOiB0eXBlcy5vYmplY3QsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0eXBlcy5zdHJpbmdcbiAgfSxcbiAgZ2V0RGVmYXVsdFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NvcGVkOiBmYWxzZSxcbiAgICAgIHN0eWxlOiB7fSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNEREQnLFxuICAgICAgc3BpbkNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJ1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGxldCB7IHByb3BzIH0gPSBzXG5cbiAgICBsZXQgeyBiYWNrZ3JvdW5kQ29sb3IsIHNwaW5Db2xvciB9ID0gcHJvcHNcblxuICAgIGxldCB0cmFuc2l0aW9uRHVyYXRpb24gPSAxMDBcblxuICAgIGxldCBkYXRhID0ge1xuICAgICAgJy5hcC1pbWFnZSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtiYWNrZ3JvdW5kQ29sb3J9YCxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgIH0sXG4gICAgICAnLmFwLWltYWdlIGltZyc6IHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgdHJhbnNpdGlvbjogYHdpZHRoICR7dHJhbnNpdGlvbkR1cmF0aW9ufW1zLCBvcGFjaXR5ICR7dHJhbnNpdGlvbkR1cmF0aW9ufW1zYFxuICAgICAgfSxcbiAgICAgICcuYXAtaW1hZ2UtcmVhZHkgaW1nJzoge1xuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9LFxuICAgICAgJy5hcC1pbWFnZS1jb250ZW50Jzoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICAgIH0sXG4gICAgICAnLmFwLWltYWdlLXNwaW5uZXInOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHpJbmRleDogOCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjEpJyxcbiAgICAgICAgY29sb3I6IGAke3NwaW5Db2xvcn1gXG4gICAgICB9LFxuICAgICAgJy5hcC1pbWFnZS1ub3Rmb3VuZCc6IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgY29sb3I6ICdyZ2JhKDAsMCwwLDAuMSknLFxuICAgICAgICBmb250RmFtaWx5OiAnbW9ub3NwYWNlJ1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc21hbGxNZWRpYURhdGEgPSB7fVxuICAgIGxldCBtZWRpdW1NZWRpYURhdGEgPSB7fVxuICAgIGxldCBsYXJnZU1lZGlhRGF0YSA9IHt9XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcFN0eWxlIHNjb3BlZD17IHByb3BzLnNjb3BlZCB9XG4gICAgICAgICAgICAgICBkYXRhPXsgT2JqZWN0LmFzc2lnbihkYXRhLCBwcm9wcy5zdHlsZSkgfVxuICAgICAgICAgICAgICAgc21hbGxNZWRpYURhdGE9eyBzbWFsbE1lZGlhRGF0YSB9XG4gICAgICAgICAgICAgICBtZWRpdW1NZWRpYURhdGE9eyBtZWRpdW1NZWRpYURhdGEgfVxuICAgICAgICAgICAgICAgbGFyZ2VNZWRpYURhdGE9eyBsYXJnZU1lZGlhRGF0YSB9XG4gICAgICA+eyBwcm9wcy5jaGlsZHJlbiB9PC9BcFN0eWxlPlxuICAgIClcbiAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBBcEltYWdlU3R5bGVcbiIsIi8qKlxuICogYXBlbWFuIHJlYWN0IHBhY2thZ2UgZm9yIGltYWdlIGNvbXBvbmVudC5cbiAqIEBtb2R1bGUgYXBlbWFuLXJlYWN0LWltYWdlXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvKipcbiAgICogQG5hbWUgQXBJbWFnZVN0eWxlXG4gICAqL1xuICBnZXQgQXBJbWFnZVN0eWxlICgpIHsgcmV0dXJuIHJlcXVpcmUoJy4vYXBfaW1hZ2Vfc3R5bGUnKSB9LFxuICAvKipcbiAgICogQG5hbWUgQXBJbWFnZVxuICAgKi9cbiAgZ2V0IEFwSW1hZ2UgKCkgeyByZXR1cm4gcmVxdWlyZSgnLi9hcF9pbWFnZScpIH1cbn1cbiIsIi8qKlxuICogQGZ1bmN0aW9uIF9zY2FsZWRTaXplXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBudW1jYWwgZnJvbSAnbnVtY2FsJ1xuXG5mdW5jdGlvbiBzY2FsZWRTaXplIChjb250ZW50U2l6ZSwgZnJhbWVTaXplLCBwb2xpY3kpIHtcbiAgbGV0IGN3ID0gY29udGVudFNpemUud2lkdGhcbiAgbGV0IGNoID0gY29udGVudFNpemUuaGVpZ2h0XG4gIGxldCBmdyA9IGZyYW1lU2l6ZS53aWR0aFxuICBsZXQgZmggPSBmcmFtZVNpemUuaGVpZ2h0XG5cbiAgbGV0IHdSYXRlID0gbnVtY2FsLm1pbigxLCBmdyAvIGN3KVxuICBsZXQgaFJhdGUgPSBudW1jYWwubWluKDEsIGZoIC8gY2gpXG5cbiAgbGV0IHNpemVXaXRoUmF0ZSA9IChyYXRlKSA9PiAoe1xuICAgIHdpZHRoOiBjb250ZW50U2l6ZS53aWR0aCAqIHJhdGUsXG4gICAgaGVpZ2h0OiBjb250ZW50U2l6ZS5oZWlnaHQgKiByYXRlXG4gIH0pXG5cbiAgc3dpdGNoIChwb2xpY3kpIHtcbiAgICBjYXNlICdub25lJzpcbiAgICAgIHJldHVybiBzaXplV2l0aFJhdGUoMSlcbiAgICBjYXNlICdmaXQnOlxuICAgICAgcmV0dXJuIHNpemVXaXRoUmF0ZShcbiAgICAgICAgbnVtY2FsLm1pbih3UmF0ZSwgaFJhdGUpXG4gICAgICApXG4gICAgY2FzZSAnZmlsbCc6XG4gICAgICByZXR1cm4gc2l6ZVdpdGhSYXRlKFxuICAgICAgICBudW1jYWwubWF4KHdSYXRlLCBoUmF0ZSlcbiAgICAgIClcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHBvbGljeTogJHtwb2xpY3l9YClcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNjYWxlZFNpemU7XG4iLCIvKipcbiAqIGFwZW1hbiByZWFjdCBwYWNrYWdlIGZvciBzcGlubmVyLlxuICogQGNvbnN0cnVjdG9yIEFwU3Bpbm5lclxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgbnVtY2FsIGZyb20gJ251bWNhbCdcbmltcG9ydCB7QXBQdXJlTWl4aW4sIEFwTGF5b3V0TWl4aW59IGZyb20gJ2FwZW1hbi1yZWFjdC1taXhpbnMnXG5pbXBvcnQgY29uc3RzIGZyb20gJy4vY29uc3RzJ1xuXG5jb25zdCBERUZBVUxUX1RIRU1FID0gJ2MnXG5cbi8qKiBAbGVuZHMgQXBTcGlubmVyICovXG5jb25zdCBBcFNwaW5uZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU3BlY3NcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcm9wVHlwZXM6IHtcbiAgICBlbmFibGVkOiB0eXBlcy5ib29sLFxuICAgIHRoZW1lOiB0eXBlcy5vbmVPZihcbiAgICAgIE9iamVjdC5rZXlzKGNvbnN0cy50aGVtZXMpXG4gICAgKVxuICB9LFxuXG4gIG1peGluczogW1xuICAgIEFwUHVyZU1peGluLFxuICAgIEFwTGF5b3V0TWl4aW5cbiAgXSxcblxuICBzdGF0aWNzOiB7XG4gICAgREVGQVVMVF9USEVNRTogREVGQVVMVF9USEVNRVxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSAoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICB0aGVtZTogREVGQVVMVF9USEVNRVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMsIGxheW91dHMgfSA9IHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc25hbWVzKCdhcC1zcGlubmVyJywgcHJvcHMuY2xhc3NOYW1lLCB7XG4gICAgICAgICAgICAgICAgJ2FwLXNwaW5uZXItdmlzaWJsZSc6ICEhbGF5b3V0cy5zcGlubmVyLFxuICAgICAgICAgICAgICAgICdhcC1zcGlubmVyLWVuYWJsZWQnOiAhIXByb3BzLmVuYWJsZWRcbiAgICAgICAgICAgIH0pIH1cbiAgICAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBsYXlvdXRzLnNwaW5uZXIsIHByb3BzLnN0eWxlKVxuICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXAtc3Bpbm5lci1hbGlnbmVyXCI+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIHJlZj1cImljb25cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc25hbWVzKCdhcC1zcGlubmVyLWljb24nLCBjb25zdHMudGhlbWVzW3Byb3BzLnRoZW1lXSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyBsYXlvdXRzLmljb24gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0sXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTGlmZWN5Y2xlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgcy5zZXRTdGF0ZSh7XG4gICAgICBpY29uVmlzaWJsZTogdHJ1ZVxuICAgIH0pXG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gIH0sXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gRm9yIEFwTGF5b3V0TWl4aW5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBnZXRJbml0aWFsTGF5b3V0cyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNwaW5uZXI6IG51bGwsXG4gICAgICBpY29uOiBudWxsXG4gICAgfVxuICB9LFxuXG4gIGNhbGNMYXlvdXRzICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGxldCBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUocylcblxuICAgIGxldCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGUgfHwgbm9kZS5wYXJlbnRFbGVtZW50XG4gICAgbGV0IHcgPSBudW1jYWwubWF4KHBhcmVudC5vZmZzZXRXaWR0aCwgbm9kZS5vZmZzZXRXaWR0aClcbiAgICBsZXQgaCA9IG51bWNhbC5tYXgocGFyZW50Lm9mZnNldEhlaWdodCwgbm9kZS5vZmZzZXRIZWlnaHQpXG4gICAgbGV0IHNpemUgPSBudW1jYWwubWluKHcsIGgpXG4gICAgbGV0IGljb25TaXplID0gbnVtY2FsLm1pbihzaXplICogMC41LCA2MClcblxuICAgIHJldHVybiB7XG4gICAgICBzcGlubmVyOiB7XG4gICAgICAgIGxpbmVIZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICBmb250U2l6ZTogYCR7aWNvblNpemV9cHhgXG4gICAgICB9LFxuICAgICAgaWNvbjoge1xuICAgICAgICB3aWR0aDogYCR7aWNvblNpemV9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAke2ljb25TaXplfXB4YFxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBBcFNwaW5uZXJcbiIsIi8qKlxuICogU3R5bGUgZm9yIEFwU3Bpbm5lci5cbiAqIEBjb25zdHJ1Y3RvciBBcFNwaW5uZXJTdHlsZVxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtBcFN0eWxlfSBmcm9tICdhcGVtYW4tcmVhY3Qtc3R5bGUnXG5cbi8qKiBAbGVuZHMgQXBTcGlubmVyU3R5bGUgKi9cbmNvbnN0IEFwU3Bpbm5lclN0eWxlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBzdGF0aWNzOiB7XG4gICAgYWxpZ25lclN0eWxlOiB7XG4gICAgICB3aWR0aDogMSxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luUmlnaHQ6ICctMXB4JyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9XG4gIH0sXG4gIHByb3BUeXBlczoge1xuICAgIHNjb3BlZDogdHlwZXMuYm9vbCxcbiAgICB0eXBlOiB0eXBlcy5zdHJpbmcsXG4gICAgc3R5bGU6IHR5cGVzLm9iamVjdFxuICB9LFxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NvcGVkOiBmYWxzZSxcbiAgICAgIHR5cGU6ICd0ZXh0L2NzcycsXG4gICAgICBzdHlsZToge31cbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcblxuICAgIGxldCBkYXRhID0ge1xuICAgICAgJy5hcC1zcGlubmVyJzoge1xuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAnLmFwLXNwaW5uZXIuYXAtc3Bpbm5lci1lbmFibGVkJzoge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICB9LFxuICAgICAgJy5hcC1zcGlubmVyLWljb24nOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXJnaW46ICcwIDRweCcsXG4gICAgICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDEwMG1zJyxcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSxcbiAgICAgICcuYXAtc3Bpbm5lci12aXNpYmxlIC5hcC1zcGlubmVyLWljb24nOiB7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0sXG4gICAgICAnLmFwLXNwaW5uZXItYWxpZ25lcic6IEFwU3Bpbm5lclN0eWxlLmFsaWduZXJTdHlsZVxuICAgIH1cbiAgICBsZXQgc21hbGxNZWRpYURhdGEgPSB7fVxuICAgIGxldCBtZWRpdW1NZWRpYURhdGEgPSB7fVxuICAgIGxldCBsYXJnZU1lZGlhRGF0YSA9IHt9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFwU3R5bGUgc2NvcGVkPXsgcHJvcHMuc2NvcGVkIH1cbiAgICAgICAgICAgICAgIGRhdGE9eyBPYmplY3QuYXNzaWduKGRhdGEsIHByb3BzLnN0eWxlKSB9XG4gICAgICAgICAgICAgICBzbWFsbE1lZGlhRGF0YT17IHNtYWxsTWVkaWFEYXRhIH1cbiAgICAgICAgICAgICAgIG1lZGl1bU1lZGlhRGF0YT17IG1lZGl1bU1lZGlhRGF0YSB9XG4gICAgICAgICAgICAgICBsYXJnZU1lZGlhRGF0YT17IGxhcmdlTWVkaWFEYXRhIH1cbiAgICAgID57cHJvcHMuY2hpbGRyZW59PC9BcFN0eWxlPlxuICAgIClcbiAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBBcFNwaW5uZXJTdHlsZVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMudGhlbWVzID0ge1xuICBhOiBbICdmYScsICdmYS1zcGluJywgJ2ZhLXNwaW5uZXInIF0sXG4gIGI6IFsgJ2ZhJywgJ2ZhLXNwaW4nLCAnZmEtY2lyY2xlLW8tbm90Y2gnIF0sXG4gIGM6IFsgJ2ZhJywgJ2ZhLXNwaW4nLCAnZmEtcmVmcmVzaCcgXSxcbiAgZDogWyAnZmEnLCAnZmEtc3BpbicsICdmYS1nZWFyJyBdLFxuICBlOiBbICdmYScsICdmYS1zcGluJywgJ2ZhLXB1bHNlJyBdXG59XG4iLCIvKipcbiAqIGFwZW1hbiByZWFjdCBwYWNrYWdlIGZvciBzcGlubmVyLlxuICogQG1vZHVsZSBhcGVtYW4tcmVhY3Qtc3Bpbm5lclxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIEFwU3Bpbm5lclN0eWxlXG4gICAqL1xuICBnZXQgQXBTcGlubmVyU3R5bGUgKCkgeyByZXR1cm4gcmVxdWlyZSgnLi9hcF9zcGlubmVyX3N0eWxlJykgfSxcbiAgLyoqXG4gICAqIEBuYW1lIEFwU3Bpbm5lclxuICAgKi9cbiAgZ2V0IEFwU3Bpbm5lciAoKSB7IHJldHVybiByZXF1aXJlKCcuL2FwX3NwaW5uZXInKSB9LFxuICBnZXQgY29uc3RzICgpIHsgcmV0dXJuIHJlcXVpcmUoJy4vY29uc3RzJykgfVxufVxuIiwiLyoqXG4gKiBhcGVtYW4gcmVhY3QgcGFja2FnZSBmb3IgdG91Y2hhYmxlIGNvbXBvbmVudC5cbiAqIEBjb25zdHJ1Y3RvciBBcFRvdWNoYWJsZVxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQge0FwVG91Y2hNaXhpbn0gZnJvbSAnYXBlbWFuLXJlYWN0LW1peGlucydcblxuLyoqIEBsZW5kcyBBcFRvdWNoYWJsZSAqL1xuY29uc3QgQXBUb3VjaGFibGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU3BlY3NcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJvcFR5cGVzOiB7fSxcblxuICBtaXhpbnM6IFtcbiAgICBBcFRvdWNoTWl4aW5cbiAgXSxcblxuICBzdGF0aWNzOiB7fSxcblxuICBnZXRJbml0aWFsU3RhdGUgKCkge1xuICAgIHJldHVybiB7fVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH0sXG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGxldCB7IHByb3BzIH0gPSBzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgeyAuLi5wcm9wcyB9XG4gICAgICAgIGNsYXNzTmFtZT17IGNsYXNzbmFtZXMoJ2FwLXRvdWNoYWJsZScsIHByb3BzLmNsYXNzTmFtZSkgfVxuICAgICAgICBzdHlsZT17IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLnN0eWxlKSB9PlxuICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSxcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBMaWZlY3ljbGVcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgfSxcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gSGVscGVyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBQcml2YXRlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwVG91Y2hhYmxlXG4iLCIvKipcbiAqIFN0eWxlIGZvciBBcFRvdWNoYWJsZS5cbiAqIEBjb25zdHJ1Y3RvciBBcFRvdWNoYWJsZVN0eWxlXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7QXBTdHlsZX0gZnJvbSAnYXBlbWFuLXJlYWN0LXN0eWxlJ1xuXG4vKiogQGxlbmRzIEFwVG91Y2hhYmxlU3R5bGUgKi9cbmNvbnN0IEFwVG91Y2hhYmxlU3R5bGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHByb3BUeXBlczogQXBTdHlsZS5wcm9wVHlwZXMsXG4gIGdldERlZmF1bHRQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjb3BlZDogZmFsc2UsXG4gICAgICBkYXRhOiB7XG4gICAgICAgICcuYXAtdG91Y2hhYmxlJzoge31cbiAgICAgIH0sXG4gICAgICB0eXBlOiAndGV4dC9jc3MnXG4gICAgfVxuICB9LFxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcbiAgICByZXR1cm4gPEFwU3R5bGUgeyAuLi5wcm9wcyB9PnsgcHJvcHMuY2hpbGRyZW4gfTwvQXBTdHlsZT5cbiAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBBcFRvdWNoYWJsZVN0eWxlXG4iLCIvKipcbiAqIGFwZW1hbiByZWFjdCBwYWNrYWdlIGZvciB0b3VjaGFibGUgY29tcG9uZW50LlxuICogQG1vZHVsZSBhcGVtYW4tcmVhY3QtdG91Y2hhYmxlXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvKipcbiAgICogQG5hbWUgQXBUb3VjaGFibGVTdHlsZVxuICAgKi9cbiAgZ2V0IEFwVG91Y2hhYmxlU3R5bGUgKCkgeyByZXR1cm4gcmVxdWlyZSgnLi9hcF90b3VjaGFibGVfc3R5bGUnKSB9LFxuICAvKipcbiAgICogQG5hbWUgQXBUb3VjaGFibGVcbiAgICovXG4gIGdldCBBcFRvdWNoYWJsZSAoKSB7IHJldHVybiByZXF1aXJlKCcuL2FwX3RvdWNoYWJsZScpIH1cbn1cbiIsIi8qKlxuICogR2V0IGF2ZXJhZ2UgdmFsdWUuXG4gKiBAZnVuY3Rpb24gYXZlXG4gKiBAcGFyYW0gey4uLm51bWJlcn0gdmFsdWVzIC0gVmFsdWVzIHRvIGF2ZS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IC0gQXZlcmFnZSB2YWx1ZS5cbiAqL1xuXG5cblwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBzdW0gPSByZXF1aXJlKCcuL3N1bScpO1xuXG4vKiogQGxlbmRzIGF2ZSAqL1xuZnVuY3Rpb24gYXZlKCkge1xuICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGxldCB2YWx1ZXMgPSAwLCBzaXplID0gMDtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJncy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBsZXQgdmFsID0gYXJnc1tpXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICAgICAgc2l6ZSArPSB2YWwubGVuZ3RoO1xuICAgICAgICAgICAgdmFsID0gc3VtLmFwcGx5KHN1bSwgdmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNpemUgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZXMgKz0gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzIC8gc2l6ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhdmU7XG5cbiIsIi8qKlxuICogQmFzaWMgbnVtZXJpYyBjYWxjdWxhdGlvbiBmdW5jdGlvbnMuXG4gKiBAbW9kdWxlIG51bWNhbFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBnZXQgYXZlKCkgeyByZXR1cm4gcmVxdWlyZSgnLi9hdmUnKTsgfSxcbiAgICBnZXQgbWF4KCkgeyByZXR1cm4gcmVxdWlyZSgnLi9tYXgnKTsgfSxcbiAgICBnZXQgbWluKCkgeyByZXR1cm4gcmVxdWlyZSgnLi9taW4nKTsgfSxcbiAgICBnZXQgc3VtKCkgeyByZXR1cm4gcmVxdWlyZSgnLi9zdW0nKTsgfVxufTsiLCIvKipcbiAqIEZpbmQgbWF4IHZhbHVlLlxuICogQGZ1bmN0aW9uIG1heFxuICogQHBhcmFtIHsuLi5udW1iZXJ9IHZhbHVlcyAtIFZhbHVlcyB0byBjb21wYXJlLlxuICogQHJldHVybnMge251bWJlcn0gLSBNYXggbnVtYmVyLlxuICovXG5cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKiBAbGVuZHMgbWF4ICovXG5mdW5jdGlvbiBtYXgoKSB7XG4gICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGV0IHJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJncy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBsZXQgdmFsID0gYXJnc1tpXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICAgICAgdmFsID0gbWF4LmFwcGx5KG1heCwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaGl0ID0gKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB8fCAodmFsID4gcmVzdWx0KTtcbiAgICAgICAgaWYgKGhpdCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdmFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWF4O1xuXG4iLCIvKipcbiAqIEZpbmQgbWluIHZhbHVlLlxuICogQGZ1bmN0aW9uIG1pblxuICogQHBhcmFtIHsuLi5udW1iZXJ9IHZhbHVlcyAtIFZhbHVlcyB0byBjb21wYXJlLlxuICogQHJldHVybnMge251bWJlcn0gLSBNaW4gbnVtYmVyLlxuICovXG5cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKiBAbGVuZHMgbWluICovXG5mdW5jdGlvbiBtaW4oKSB7XG4gICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGV0IHJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJncy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBsZXQgdmFsID0gYXJnc1tpXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICAgICAgdmFsID0gbWluLmFwcGx5KG1pbiwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaGl0ID0gKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB8fCAodmFsIDwgcmVzdWx0KTtcbiAgICAgICAgaWYgKGhpdCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdmFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWluO1xuXG4iLCIvKipcbiAqIEdldCBzdW0gdmFsdWUuXG4gKiBAZnVuY3Rpb24gc3VtXG4gKiBAcGFyYW0gey4uLm51bWJlcn0gdmFsdWVzIC0gVmFsdWVzIHRvIHN1bS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IC0gU3VtIHZhbHVlLlxuICovXG5cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKiBAbGVuZHMgc3VtICovXG5mdW5jdGlvbiBzdW0oKSB7XG4gICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFyZ3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGV0IHZhbCA9IGFyZ3NbaV07XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICAgIHZhbCA9IHN1bS5hcHBseShzdW0sIHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9IHZhbDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdW07XG5cbiJdfQ==
