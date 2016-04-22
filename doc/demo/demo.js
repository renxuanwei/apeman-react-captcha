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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92NS4zLjAvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvb2t1bmlzaGluaXNoaS9Qcm9qZWN0cy9hcGVtYW4tcHJvamVjdHMvYXBlbWFuLXJlYWN0LWNhcHRjaGEvZG9jL2RlbW8vZGVtby5jb21wb25lbnQuanN4IiwiZG9jL2RlbW8vZGVtby5ub2RlLmpzIiwiL1VzZXJzL29rdW5pc2hpbmlzaGkvUHJvamVjdHMvYXBlbWFuLXByb2plY3RzL2FwZW1hbi1yZWFjdC1jYXB0Y2hhL2xpYi9hcF9jYXB0Y2hhLmpzeCIsIi9Vc2Vycy9va3VuaXNoaW5pc2hpL1Byb2plY3RzL2FwZW1hbi1wcm9qZWN0cy9hcGVtYW4tcmVhY3QtaW1hZ2UvbGliL2FwX2ltYWdlLmpzeCIsIi9Vc2Vycy9va3VuaXNoaW5pc2hpL1Byb2plY3RzL2FwZW1hbi1wcm9qZWN0cy9hcGVtYW4tcmVhY3QtaW1hZ2UvbGliL2FwX2ltYWdlX3N0eWxlLmpzeCIsIm5vZGVfbW9kdWxlcy9hcGVtYW4tcmVhY3QtaW1hZ2UvbGliL2luZGV4LmpzIiwiL1VzZXJzL29rdW5pc2hpbmlzaGkvUHJvamVjdHMvYXBlbWFuLXByb2plY3RzL2FwZW1hbi1yZWFjdC1pbWFnZS9saWIvc2NhbGVkX3NpemUuanN4IiwiL1VzZXJzL29rdW5pc2hpbmlzaGkvUHJvamVjdHMvYXBlbWFuLXByb2plY3RzL2FwZW1hbi1yZWFjdC1zcGlubmVyL2xpYi9hcF9zcGlubmVyLmpzeCIsIi9Vc2Vycy9va3VuaXNoaW5pc2hpL1Byb2plY3RzL2FwZW1hbi1wcm9qZWN0cy9hcGVtYW4tcmVhY3Qtc3Bpbm5lci9saWIvYXBfc3Bpbm5lcl9zdHlsZS5qc3giLCIvVXNlcnMvb2t1bmlzaGluaXNoaS9Qcm9qZWN0cy9hcGVtYW4tcHJvamVjdHMvYXBlbWFuLXJlYWN0LXNwaW5uZXIvbGliL2NvbnN0cy5qc3giLCJub2RlX21vZHVsZXMvYXBlbWFuLXJlYWN0LXNwaW5uZXIvbGliL2luZGV4LmpzIiwiL1VzZXJzL29rdW5pc2hpbmlzaGkvUHJvamVjdHMvYXBlbWFuLXByb2plY3RzL2FwZW1hbi1yZWFjdC10b3VjaGFibGUvbGliL2FwX3RvdWNoYWJsZS5qc3giLCIvVXNlcnMvb2t1bmlzaGluaXNoaS9Qcm9qZWN0cy9hcGVtYW4tcHJvamVjdHMvYXBlbWFuLXJlYWN0LXRvdWNoYWJsZS9saWIvYXBfdG91Y2hhYmxlX3N0eWxlLmpzeCIsIm5vZGVfbW9kdWxlcy9hcGVtYW4tcmVhY3QtdG91Y2hhYmxlL2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9udW1jYWwvbGliL2F2ZS5qcyIsIm5vZGVfbW9kdWxlcy9udW1jYWwvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL251bWNhbC9saWIvbWF4LmpzIiwibm9kZV9tb2R1bGVzL251bWNhbC9saWIvbWluLmpzIiwibm9kZV9tb2R1bGVzL251bWNhbC9saWIvc3VtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsYUFFQSx1RUFDQSx1TEFFQSxJQUFJLEtBQU8sZ0JBQU0sV0FBTixDQUFrQixvQkFDM0IsMENBQW1CLENBQ2pCLE9BQU8sQ0FDTCxXQUFZLDJCQUFaLENBREYsQ0FEaUIsQ0FLbkIsd0JBQVUsQ0FDUixJQUFNLEVBQUksSUFBSixDQUNKLE1BQVEsRUFBRSxLQUFGLENBRkYsT0FJTix5Q0FDRSxvREFBVyxJQUFLLE1BQU0sVUFBTixDQUNMLFlBQVksU0FBWixDQUNBLFNBQVUsTUFBTSxRQUFOLENBQ1YsVUFBVyxFQUFFLGNBQUYsQ0FIdEIsQ0FERixDQURGLENBSFEsQ0FZVix3Q0FBaUIsQ0FDZixJQUFNLEVBQUksSUFBSixDQURTLElBRVgsS0FBTyxJQUFJLElBQUosR0FBVyxPQUFYLEVBQVAsQ0FGVyxPQUdmLENBQVEsR0FBUixDQUFZLGdCQUFaLENBQThCLElBQTlCLEVBSGUsQ0FJZixDQUFFLFFBQUYsQ0FBVyxDQUNULFNBQVUsSUFBVixDQUNBLFdBQVksSUFBWixDQUZGLEVBSmUsVUFRZixDQUFXLFVBQU0sQ0FDZixFQUFFLFFBQUYsQ0FBVyxDQUNULDBDQUEyQyxJQUEzQyxDQUNBLFNBQVUsS0FBVixDQUZGLEVBRGUsQ0FLZCxJQUxILEVBUmUsQ0FsQlIsQ0FBUCxDQW1DSixPQUFPLE9BQVAsQ0FBaUIsSUFBakI7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1BBOztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7QUFHQSxJQUFJLFlBQVksZ0JBQU0sV0FBTixDQUFrQjs7Ozs7OztBQU1oQyxhQUFXOztBQUVULFNBQUssaUJBQU0sTUFBTjs7QUFFTCxlQUFXLGlCQUFNLElBQU47QUFDWCxpQkFBYSxpQkFBTSxNQUFOO0FBQ2IsaUJBQWEsaUJBQU0sTUFBTjtBQUNiLGdCQUFZLGlCQUFNLE1BQU47QUFDWixpQkFBYSxpQkFBTSxNQUFOO0FBQ2IsaUJBQWEsaUJBQU0sSUFBTjtBQUNiLGtCQUFjLGlCQUFNLElBQU47QUFDZCxjQUFVLGlCQUFNLElBQU47QUFDVixrQkFBYyxpQkFBTSxNQUFOO0dBWmhCOztBQWVBLFVBQVEsRUFBUjs7QUFFQSxXQUFTLEVBQVQ7O0FBRUEsOENBQW1CO0FBQ2pCLFdBQU8sRUFBUCxDQURpQjtHQXpCYTtBQTZCaEMsOENBQW1CO0FBQ2pCLFdBQU87QUFDTCxXQUFLLElBQUw7QUFDQSxpQkFBVyxJQUFYO0FBQ0EsbUJBQWEsZUFBYjtBQUNBLG1CQUFhLEVBQWI7QUFDQSxrQkFBWSxHQUFaO0FBQ0EsbUJBQWEsRUFBYjtBQUNBLG1CQUFhLElBQWI7QUFDQSxvQkFBYyxJQUFkO0FBQ0EsZ0JBQVUsS0FBVjtBQUNBLG9CQUFjLDhCQUFVLGFBQVY7S0FWaEIsQ0FEaUI7R0E3QmE7QUE0Q2hDLDRCQUFVO0FBQ1IsUUFBTSxJQUFJLElBQUosQ0FERTtRQUVGLFFBQVUsRUFBVixNQUZFOztBQUdSLFdBQ0U7O1FBQUssV0FBWSwwQkFBVyxZQUFYLEVBQXlCLE1BQU0sU0FBTixDQUFyQztBQUNBLGVBQU8sT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixNQUFNLEtBQU4sQ0FBekIsRUFETDtNQUVFOzs7UUFDRSwrREFBVyxXQUFVLG9CQUFWO0FBQ0EsbUJBQVUsTUFBTSxRQUFOO0FBQ1YsaUJBQVEsTUFBTSxZQUFOO1NBRm5CLENBREY7UUFLRSwyREFBUyxXQUFVLGtCQUFWO0FBQ0EsZUFBTSxNQUFNLEdBQU47QUFDTixpQkFBUSxNQUFNLFVBQU47QUFDUixrQkFBUyxNQUFNLFdBQU47QUFDVCxrQkFBUyxFQUFFLGVBQUY7QUFDVCxtQkFBVSxFQUFFLGdCQUFGO0FBQ1YsZUFBSSxFQUFKO1NBTlQsQ0FMRjtPQUZGO01BZ0JFOzs7UUFDRTs7WUFBRyxXQUFVLDJCQUFWLEVBQUg7VUFDRTs7Y0FBYSxPQUFRLEVBQUUsU0FBRixFQUFyQjtZQUNROzs7Y0FDSSx5REFBUSxXQUFZLDBCQUFXLHlCQUFYLEVBQXFDLE1BQU0sV0FBTixFQUFtQjtBQUM1RSw2QkFBVyxNQUFNLFFBQU47aUJBRFMsQ0FBWixFQUFSLENBREo7Y0FJSTs7O2dCQUFRLE1BQU0sV0FBTjtlQUpaO2FBRFI7V0FERjtTQURGO09BaEJGO0tBREYsQ0FIUTtHQTVDc0I7Ozs7OztBQW9GaEMsb0RBQXNCO0FBQ3BCLFFBQU0sSUFBSSxJQUFKLENBRGM7R0FwRlU7QUF3RmhDLGtEQUFxQjtBQUNuQixRQUFNLElBQUksSUFBSixDQURhO0dBeEZXO0FBNEZoQyxnRUFBMkIsV0FBVztBQUNwQyxRQUFNLElBQUksSUFBSixDQUQ4QjtHQTVGTjtBQWdHaEMsd0RBQXVCLFdBQVcsV0FBVztBQUMzQyxRQUFNLElBQUksSUFBSixDQURxQztBQUUzQyxXQUFPLElBQVAsQ0FGMkM7R0FoR2I7QUFxR2hDLG9EQUFxQixXQUFXLFdBQVc7QUFDekMsUUFBTSxJQUFJLElBQUosQ0FEbUM7R0FyR1g7QUF5R2hDLGtEQUFvQixXQUFXLFdBQVc7QUFDeEMsUUFBTSxJQUFJLElBQUosQ0FEa0M7R0F6R1Y7QUE2R2hDLHdEQUF3QjtBQUN0QixRQUFJLElBQUksS0FBSixDQURrQjtHQTdHUTs7Ozs7O0FBcUhoQyxrQ0FBYTtBQUNYLFFBQU0sSUFBSSxJQUFKLENBREs7UUFFTCxRQUFVLEVBQVYsTUFGSzs7QUFHWCxRQUFJLE1BQU0sU0FBTixFQUFpQjtBQUNuQixZQUFNLFNBQU4sR0FEbUI7S0FBckI7R0F4SDhCO0FBNkhoQyw0Q0FBaUIsSUFBSTtBQUNuQixRQUFNLElBQUksSUFBSixDQURhO1FBRWIsUUFBVSxFQUFWLE1BRmE7O0FBR25CLFFBQUksTUFBTSxXQUFOLEVBQW1CO0FBQ3JCLFlBQU0sV0FBTixDQUFrQixFQUFsQixFQURxQjtLQUF2QjtHQWhJOEI7QUFxSWhDLDhDQUFrQixLQUFLO0FBQ3JCLFFBQU0sSUFBSSxJQUFKLENBRGU7UUFFZixRQUFVLEVBQVYsTUFGZTs7QUFHckIsUUFBSSxNQUFNLFlBQU4sRUFBb0I7QUFDdEIsWUFBTSxZQUFOLENBQW1CLEdBQW5CLEVBRHNCO0tBQXhCOzs7Ozs7QUF4SThCO0NBQWxCLENBQVo7O0FBa0pKLE9BQU8sT0FBUCxHQUFpQixTQUFqQjs7Ozs7Ozs7QUM3SkE7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7OztBQUdBLElBQU0sVUFBVSxnQkFBTSxXQUFOLENBQWtCOzs7Ozs7O0FBTWhDLGFBQVc7O0FBRVQsV0FBTyxpQkFBTSxLQUFOLENBQVksQ0FDakIsS0FEaUIsRUFFakIsTUFGaUIsRUFHakIsTUFIaUIsQ0FBWixDQUFQOztBQU1BLFdBQU8saUJBQU0sU0FBTixDQUFnQixDQUFFLGlCQUFNLE1BQU4sRUFBYyxpQkFBTSxNQUFOLENBQWhDLENBQVA7O0FBRUEsWUFBUSxpQkFBTSxTQUFOLENBQWdCLENBQUUsaUJBQU0sTUFBTixFQUFjLGlCQUFNLE1BQU4sQ0FBaEMsQ0FBUjs7QUFFQSxTQUFLLGlCQUFNLE1BQU47O0FBRUwsU0FBSyxpQkFBTSxNQUFOOztBQUVMLGtCQUFjLGlCQUFNLE1BQU47O0FBRWQsWUFBUSxpQkFBTSxJQUFOOztBQUVSLGFBQVMsaUJBQU0sSUFBTjtHQXBCWDs7QUF1QkEsVUFBUSxnQ0FBUjs7QUFJQSxXQUFTO0FBQ1AscUNBRE87QUFFUCxrQ0FBVyxPQUFPO0FBQ2hCLGFBQU8sTUFBTSxLQUFOLElBQWUsQ0FBZixHQUFtQixLQUFuQixDQURTO0tBRlg7QUFLUCxrQ0FBVyxPQUFPO0FBQ2hCLGFBQU8sTUFBTSxLQUFOLElBQWUsSUFBZixHQUFzQixLQUF0QixDQURTO0tBTFg7R0FBVDs7QUFVQSw4Q0FBbUI7QUFDakIsUUFBTSxJQUFJLElBQUosQ0FEVztBQUVqQixXQUFPO0FBQ0wsZ0JBQVUsSUFBVjtBQUNBLGlCQUFXLElBQVg7QUFDQSxlQUFTLEtBQVQ7QUFDQSxhQUFPLEtBQVA7QUFDQSxlQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUYsQ0FBUSxHQUFSO0FBQ1gsYUFBTyxJQUFQO0tBTkYsQ0FGaUI7R0EzQ2E7QUF1RGhDLDhDQUFtQjtBQUNqQixXQUFPO0FBQ0wsYUFBTyxNQUFQO0FBQ0EsYUFBTyxJQUFQO0FBQ0EsY0FBUSxJQUFSO0FBQ0EsV0FBSyxJQUFMO0FBQ0EsV0FBSyxVQUFMO0FBQ0Esb0JBQWMsOEJBQVUsYUFBVjtBQUNkLGNBQVEsSUFBUjtBQUNBLGVBQVMsSUFBVDtLQVJGLENBRGlCO0dBdkRhO0FBb0VoQyw0QkFBVTtBQUNSLFFBQU0sSUFBSSxJQUFKLENBREU7UUFFRixRQUFpQixFQUFqQixNQUZFO1FBRUssUUFBVSxFQUFWLE1BRkw7O0FBSVIsUUFBSSxPQUFPO0FBQ1QsYUFBTyxNQUFNLEtBQU4sSUFBZSxJQUFmO0FBQ1AsY0FBUSxNQUFNLE1BQU4sSUFBZ0IsSUFBaEI7S0FGTixDQUpJOztRQVNGLFVBQW1DLE1BQW5DLFFBVEU7UUFTTyxRQUEwQixNQUExQixNQVRQO1FBU2MsUUFBbUIsTUFBbkIsTUFUZDtRQVNxQixVQUFZLE1BQVosUUFUckI7O0FBVVIsV0FDRTs7UUFBSyxXQUFZLDBCQUFXLFVBQVgsRUFBdUIsTUFBTSxTQUFOLEVBQWlCO0FBQy9DLDhCQUFvQixNQUFNLEdBQU4sSUFBYSxPQUFiO0FBQ3BCLDRCQUFrQixNQUFNLEdBQU4sSUFBYSxLQUFiO1NBRlgsQ0FBWjtBQUlBLGVBQVEsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixJQUFsQixFQUF3QixNQUFNLEtBQU4sQ0FBaEMsRUFKTDtNQUtJLFdBQVcsS0FBWCxHQUFtQixFQUFFLGVBQUYsQ0FBa0IsSUFBbEIsQ0FBbkIsR0FBNkMsSUFBN0M7TUFDQSxXQUFXLENBQUMsS0FBRCxHQUFTLEVBQUUsVUFBRixDQUFhLElBQWIsRUFBbUIsT0FBbkIsQ0FBcEIsR0FBa0QsSUFBbEQ7TUFDQSxVQUFVLEVBQUUsY0FBRixDQUFpQixJQUFqQixDQUFWLEdBQW1DLElBQW5DO0tBUk4sQ0FWUTtHQXBFc0I7Ozs7OztBQStGaEMsb0RBQXNCO0FBQ3BCLFFBQU0sSUFBSSxJQUFKLENBRGM7R0EvRlU7QUFtR2hDLGtEQUFxQjtBQUNuQixRQUFNLElBQUksSUFBSixDQURhO0FBRW5CLE1BQUUsUUFBRixDQUFXO0FBQ1QsZUFBUyxJQUFUO0tBREYsRUFGbUI7O0FBTW5CLGVBQVcsWUFBTTtBQUNmLFFBQUUsV0FBRixHQURlO0tBQU4sRUFFUixDQUZILEVBTm1CO0dBbkdXO0FBOEdoQyxnRUFBMkIsV0FBVztBQUNwQyxRQUFNLElBQUksSUFBSixDQUQ4Qjs7QUFHcEMsUUFBSSxNQUFNLEVBQUUsS0FBRixDQUFRLEdBQVIsQ0FIMEI7QUFJcEMsUUFBSSxVQUFVLFVBQVUsR0FBVixDQUpzQjtBQUtwQyxRQUFJLGFBQWEsQ0FBQyxDQUFDLE9BQUQsSUFBYSxZQUFZLEdBQVosQ0FMSztBQU1wQyxRQUFJLFVBQUosRUFBZ0I7QUFDZCxRQUFFLFFBQUYsQ0FBVztBQUNULGVBQU8sS0FBUDtBQUNBLGlCQUFTLElBQVQ7QUFDQSxlQUFPLElBQVA7T0FIRixFQURjO0tBQWhCO0dBcEg4QjtBQTZIaEMsb0RBQXFCLFdBQVcsV0FBVztBQUN6QyxRQUFNLElBQUksSUFBSixDQURtQztBQUV6QyxNQUFFLFdBQUYsR0FGeUM7R0E3SFg7QUFrSWhDLGtEQUFvQixXQUFXLFdBQVc7QUFDeEMsUUFBTSxJQUFJLElBQUosQ0FEa0M7R0FsSVY7QUFzSWhDLHdEQUF3QjtBQUN0QixRQUFNLElBQUksSUFBSixDQURnQjtHQXRJUTs7Ozs7O0FBOEloQyxrQ0FBWSxHQUFHO0FBQ2IsUUFBTSxJQUFJLElBQUosQ0FETztRQUVQLFFBQVUsRUFBVixNQUZPOztBQUliLFFBQUksTUFBTSxNQUFOLEVBQWM7QUFDaEIsWUFBTSxNQUFOLENBQWEsQ0FBYixFQURnQjtLQUFsQjs7QUFJQSxNQUFFLFdBQUYsQ0FBYyxFQUFFLE1BQUYsQ0FBUyxLQUFULEVBQWdCLEVBQUUsTUFBRixDQUFTLE1BQVQsQ0FBOUIsQ0FSYTtHQTlJaUI7QUF5SmhDLG9DQUFhLEdBQUc7QUFDZCxRQUFNLElBQUksSUFBSixDQURRO1FBRVIsUUFBVSxFQUFWLE1BRlE7O0FBSWQsTUFBRSxRQUFGLENBQVc7QUFDVCxhQUFPLENBQVA7QUFDQSxlQUFTLEtBQVQ7S0FGRixFQUpjOztBQVNkLFFBQUksTUFBTSxPQUFOLEVBQWU7QUFDakIsWUFBTSxPQUFOLENBQWMsQ0FBZCxFQURpQjtLQUFuQjtHQWxLOEI7QUF1S2hDLG9DQUFhLGlCQUFpQixrQkFBa0I7QUFDOUMsUUFBTSxJQUFJLElBQUosQ0FEd0M7UUFFeEMsUUFBaUIsRUFBakIsTUFGd0M7UUFFakMsUUFBVSxFQUFWLE1BRmlDOztBQUk5QyxzQkFBa0IsbUJBQW1CLE1BQU0sZUFBTixDQUpTO0FBSzlDLHVCQUFtQixvQkFBb0IsTUFBTSxnQkFBTixDQUxPOztBQU85QyxRQUFJLFFBQVEsbUJBQW1CLGdCQUFuQixDQVBrQztBQVE5QyxRQUFJLENBQUMsS0FBRCxFQUFRO0FBQ1YsYUFEVTtLQUFaOztBQUlBLFFBQUksTUFBTSxtQkFBUyxXQUFULENBQXFCLENBQXJCLENBQU4sQ0FaMEM7QUFhOUMsUUFBSSxZQUFZO0FBQ2QsYUFBTyxJQUFJLFdBQUo7QUFDUCxjQUFRLElBQUksWUFBSjtLQUZOLENBYjBDO0FBaUI5QyxRQUFJLGNBQWM7QUFDaEIsY0FBUSxnQkFBUjtBQUNBLGFBQU8sZUFBUDtLQUZFLENBakIwQztBQXFCOUMsUUFBSSxhQUFhLFFBQVEsVUFBUixDQUNmLFdBRGUsRUFDRixTQURFLEVBQ1MsTUFBTSxLQUFOLENBRHRCLENBckIwQzs7QUF5QjlDLE1BQUUsUUFBRixDQUFXO0FBQ1QsdUJBQWlCLGVBQWpCO0FBQ0Esd0JBQWtCLGdCQUFsQjtBQUNBLGdCQUFVLFdBQVcsS0FBWDtBQUNWLGlCQUFXLFdBQVcsTUFBWDtBQUNYLGFBQU8sSUFBUDtBQUNBLGVBQVMsS0FBVDtLQU5GLEVBekI4QztHQXZLaEI7Ozs7O0FBNk1oQyxrQ0FBWSxNQUFNO0FBQ2hCLFFBQU0sSUFBSSxJQUFKLENBRFU7UUFFVixRQUFpQixFQUFqQixNQUZVO1FBRUgsUUFBVSxFQUFWLE1BRkc7UUFJVixZQUF5QixRQUF6QixVQUpVO1FBSUMsWUFBYyxRQUFkLFVBSkQ7O0FBTWhCLFdBQ0UsdUNBQUssS0FBTSxNQUFNLEdBQU47QUFDTixXQUFNLE1BQU0sR0FBTjtBQUNOLGlCQUFZLDBCQUFXLGtCQUFYLENBQVo7QUFDQSxhQUFRO0FBQ0ssYUFBSyxVQUFVLENBQUMsS0FBSyxNQUFMLEdBQWMsTUFBTSxTQUFOLENBQWYsR0FBa0MsQ0FBbEMsQ0FBZjtBQUNBLGNBQU0sVUFBVSxDQUFDLEtBQUssS0FBTCxHQUFhLE1BQU0sUUFBTixDQUFkLEdBQWdDLENBQWhDLENBQWhCO0FBQ0EsZUFBTyxVQUFVLE1BQU0sUUFBTixDQUFqQjtBQUNBLGdCQUFRLFVBQVUsTUFBTSxTQUFOLENBQWxCO09BSmI7QUFNQSxjQUFTLEVBQUUsVUFBRjtBQUNULGVBQVUsRUFBRSxXQUFGO0tBVmYsQ0FERixDQU5nQjtHQTdNYztBQW1PaEMsNENBQWlCLE1BQU07QUFDckIsUUFBTSxJQUFJLElBQUosQ0FEZTtRQUVmLFFBQVUsRUFBVixNQUZlOztBQUlyQixXQUNFOztRQUFLLFdBQVUsbUJBQVY7QUFDQSxlQUFRO0FBQ0Msc0JBQWUsS0FBSyxNQUFMLE9BQWY7QUFDQSx5QkFBYSxpQkFBTyxHQUFQLENBQVcsS0FBSyxNQUFMLEdBQWMsR0FBZCxFQUFtQixFQUE5QixDQUFiO1NBRlQ7T0FETDtNQUtHLE1BQU0sR0FBTjtLQU5MLENBSnFCO0dBbk9TO0FBaVBoQywwQ0FBZ0IsTUFBTTtBQUNwQixRQUFNLElBQUksSUFBSixDQURjO1FBRWQsUUFBVSxFQUFWLE1BRmM7O0FBSXBCLFdBQ0UsK0RBQVcsV0FBVSxrQkFBVjtBQUNBLGFBQVEsTUFBTSxZQUFOO0FBQ1IsYUFBUTtBQUNGLGVBQU8sS0FBSyxLQUFMO0FBQ1AsZ0JBQVEsS0FBSyxNQUFMO09BRmQsRUFGWCxDQURGLENBSm9CO0dBalBVO0NBQWxCLENBQVY7O0FBZ1FOLE9BQU8sT0FBUCxHQUFpQixPQUFqQjs7Ozs7Ozs7QUMzUUE7O0FBRUE7Ozs7QUFDQTs7Ozs7QUFHQSxJQUFNLGVBQWUsZ0JBQU0sV0FBTixDQUFrQjs7O0FBQ3JDLGFBQVc7QUFDVCxZQUFRLGlCQUFNLElBQU47QUFDUixXQUFPLGlCQUFNLE1BQU47QUFDUCxxQkFBaUIsaUJBQU0sTUFBTjtHQUhuQjtBQUtBLDhDQUFtQjtBQUNqQixXQUFPO0FBQ0wsY0FBUSxLQUFSO0FBQ0EsYUFBTyxFQUFQO0FBQ0EsdUJBQWlCLE1BQWpCO0FBQ0EsaUJBQVcsdUJBQVg7S0FKRixDQURpQjtHQU5rQjtBQWNyQyw0QkFBVTtBQUNSLFFBQU0sSUFBSSxJQUFKLENBREU7UUFFRixRQUFVLEVBQVYsTUFGRTtRQUlGLGtCQUErQixNQUEvQixnQkFKRTtRQUllLFlBQWMsTUFBZCxVQUpmOztBQU1SLFFBQUkscUJBQXFCLEdBQXJCLENBTkk7O0FBUVIsUUFBSSxPQUFPO0FBQ1QsbUJBQWE7QUFDWCw4QkFBb0IsZUFBcEI7QUFDQSxrQkFBVSxRQUFWO0FBQ0EsbUJBQVcsUUFBWDtBQUNBLGlCQUFTLGNBQVQ7QUFDQSxrQkFBVSxVQUFWO09BTEY7QUFPQSx1QkFBaUI7QUFDZixpQkFBUyxDQUFUO0FBQ0EsK0JBQXFCLHNDQUFpQyx5QkFBdEQ7T0FGRjtBQUlBLDZCQUF1QjtBQUNyQixpQkFBUyxDQUFUO09BREY7QUFHQSwyQkFBcUI7QUFDbkIsa0JBQVUsVUFBVjtBQUNBLGlCQUFTLGNBQVQ7T0FGRjtBQUlBLDJCQUFxQjtBQUNuQixrQkFBVSxVQUFWO0FBQ0EsY0FBTSxDQUFOO0FBQ0EsYUFBSyxDQUFMO0FBQ0EsZUFBTyxDQUFQO0FBQ0EsZ0JBQVEsQ0FBUjtBQUNBLG1CQUFXLFFBQVg7QUFDQSxpQkFBUyxPQUFUO0FBQ0EsZ0JBQVEsQ0FBUjtBQUNBLHlCQUFpQixpQkFBakI7QUFDQSxvQkFBVSxTQUFWO09BVkY7QUFZQSw0QkFBc0I7QUFDcEIsaUJBQVMsT0FBVDtBQUNBLG1CQUFXLFFBQVg7QUFDQSxlQUFPLGlCQUFQO0FBQ0Esb0JBQVksV0FBWjtPQUpGO0tBL0JFLENBUkk7QUE4Q1IsUUFBSSxpQkFBaUIsRUFBakIsQ0E5Q0k7QUErQ1IsUUFBSSxrQkFBa0IsRUFBbEIsQ0EvQ0k7QUFnRFIsUUFBSSxpQkFBaUIsRUFBakIsQ0FoREk7QUFpRFIsV0FDRTs7UUFBUyxRQUFTLE1BQU0sTUFBTjtBQUNULGNBQU8sT0FBTyxNQUFQLENBQWMsSUFBZCxFQUFvQixNQUFNLEtBQU4sQ0FBM0I7QUFDQSx3QkFBaUIsY0FBakI7QUFDQSx5QkFBa0IsZUFBbEI7QUFDQSx3QkFBaUIsY0FBakI7T0FKVDtNQUtHLE1BQU0sUUFBTjtLQU5MLENBakRRO0dBZDJCO0NBQWxCLENBQWY7O0FBMEVOLE9BQU8sT0FBUCxHQUFpQixZQUFqQjs7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDYkE7O0FBRUE7Ozs7OztBQUVBLFNBQVMsVUFBVCxDQUFxQixXQUFyQixFQUFrQyxTQUFsQyxFQUE2QyxNQUE3QyxFQUFxRDtBQUNuRCxNQUFJLEtBQUssWUFBWSxLQUFaLENBRDBDO0FBRW5ELE1BQUksS0FBSyxZQUFZLE1BQVosQ0FGMEM7QUFHbkQsTUFBSSxLQUFLLFVBQVUsS0FBVixDQUgwQztBQUluRCxNQUFJLEtBQUssVUFBVSxNQUFWLENBSjBDOztBQU1uRCxNQUFJLFFBQVEsaUJBQU8sR0FBUCxDQUFXLENBQVgsRUFBYyxLQUFLLEVBQUwsQ0FBdEIsQ0FOK0M7QUFPbkQsTUFBSSxRQUFRLGlCQUFPLEdBQVAsQ0FBVyxDQUFYLEVBQWMsS0FBSyxFQUFMLENBQXRCLENBUCtDOztBQVNuRCxNQUFJLGVBQWUsU0FBZixZQUFlLENBQUMsSUFBRDtXQUFXO0FBQzVCLGFBQU8sWUFBWSxLQUFaLEdBQW9CLElBQXBCO0FBQ1AsY0FBUSxZQUFZLE1BQVosR0FBcUIsSUFBckI7O0dBRlMsQ0FUZ0M7O0FBY25ELFVBQVEsTUFBUjtBQUNFLFNBQUssTUFBTDtBQUNFLGFBQU8sYUFBYSxDQUFiLENBQVAsQ0FERjtBQURGLFNBR08sS0FBTDtBQUNFLGFBQU8sYUFDTCxpQkFBTyxHQUFQLENBQVcsS0FBWCxFQUFrQixLQUFsQixDQURLLENBQVAsQ0FERjtBQUhGLFNBT08sTUFBTDtBQUNFLGFBQU8sYUFDTCxpQkFBTyxHQUFQLENBQVcsS0FBWCxFQUFrQixLQUFsQixDQURLLENBQVAsQ0FERjtBQVBGO0FBWUksWUFBTSxJQUFJLEtBQUosc0JBQTZCLE1BQTdCLENBQU4sQ0FERjtBQVhGLEdBZG1EO0NBQXJEOztBQThCQSxPQUFPLE9BQVAsR0FBaUIsVUFBakI7Ozs7Ozs7O0FDakNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU0sZ0JBQWdCLEdBQWhCOzs7QUFHTixJQUFNLFlBQVksZ0JBQU0sV0FBTixDQUFrQjs7Ozs7OztBQU1sQyxhQUFXO0FBQ1QsYUFBUyxpQkFBTSxJQUFOO0FBQ1QsV0FBTyxpQkFBTSxLQUFOLENBQ0wsT0FBTyxJQUFQLENBQVksaUJBQU8sTUFBUCxDQURQLENBQVA7R0FGRjs7QUFPQSxVQUFRLGtFQUFSOztBQUtBLFdBQVM7QUFDUCxtQkFBZSxhQUFmO0dBREY7O0FBSUEsOENBQW1CO0FBQ2pCLFdBQU8sRUFBUCxDQURpQjtHQXRCZTtBQTBCbEMsOENBQW1CO0FBQ2pCLFdBQU87QUFDTCxlQUFTLEtBQVQ7QUFDQSxhQUFPLGFBQVA7S0FGRixDQURpQjtHQTFCZTtBQWlDbEMsNEJBQVU7QUFDUixRQUFNLElBQUksSUFBSixDQURFO1FBRUYsUUFBbUIsRUFBbkIsTUFGRTtRQUVLLFVBQVksRUFBWixRQUZMOztBQUdSLFdBQ0U7O1FBQUssV0FBWSwwQkFBVyxZQUFYLEVBQXlCLE1BQU0sU0FBTixFQUFpQjtBQUNqRCxnQ0FBc0IsQ0FBQyxDQUFDLFFBQVEsT0FBUjtBQUN4QixnQ0FBc0IsQ0FBQyxDQUFDLE1BQU0sT0FBTjtTQUZqQixDQUFaO0FBSUEsZUFDUyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLFFBQVEsT0FBUixFQUFpQixNQUFNLEtBQU4sQ0FENUMsRUFKTDtNQU9FOztVQUFNLFdBQVUsb0JBQVYsRUFBTjs7T0FQRjtNQVFVLHdDQUFNLEtBQUksTUFBSjtBQUNBLG1CQUNFLDBCQUFXLGlCQUFYLEVBQThCLGlCQUFPLE1BQVAsQ0FBYyxNQUFNLEtBQU4sQ0FBNUMsQ0FERjtBQUdBLGVBQVEsUUFBUSxJQUFSO09BSmQsQ0FSVjtLQURGLENBSFE7R0FqQ3dCOzs7Ozs7QUE0RGxDLGtEQUFxQjtBQUNuQixRQUFNLElBQUksSUFBSixDQURhO0FBRW5CLE1BQUUsUUFBRixDQUFXO0FBQ1QsbUJBQWEsSUFBYjtLQURGLEVBRm1CO0dBNURhO0FBbUVsQyx3REFBd0I7QUFDdEIsUUFBTSxJQUFJLElBQUosQ0FEZ0I7R0FuRVU7Ozs7OztBQTJFbEMsa0RBQXFCO0FBQ25CLFdBQU87QUFDTCxlQUFTLElBQVQ7QUFDQSxZQUFNLElBQU47S0FGRixDQURtQjtHQTNFYTtBQWtGbEMsc0NBQWU7QUFDYixRQUFNLElBQUksSUFBSixDQURPO0FBRWIsUUFBSSxPQUFPLG1CQUFTLFdBQVQsQ0FBcUIsQ0FBckIsQ0FBUCxDQUZTOztBQUliLFFBQUksU0FBUyxLQUFLLFVBQUwsSUFBbUIsS0FBSyxhQUFMLENBSm5CO0FBS2IsUUFBSSxJQUFJLGlCQUFPLEdBQVAsQ0FBVyxPQUFPLFdBQVAsRUFBb0IsS0FBSyxXQUFMLENBQW5DLENBTFM7QUFNYixRQUFJLElBQUksaUJBQU8sR0FBUCxDQUFXLE9BQU8sWUFBUCxFQUFxQixLQUFLLFlBQUwsQ0FBcEMsQ0FOUztBQU9iLFFBQUksT0FBTyxpQkFBTyxHQUFQLENBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBUCxDQVBTO0FBUWIsUUFBSSxXQUFXLGlCQUFPLEdBQVAsQ0FBVyxPQUFPLEdBQVAsRUFBWSxFQUF2QixDQUFYLENBUlM7O0FBVWIsV0FBTztBQUNMLGVBQVM7QUFDUCxvQkFBZSxXQUFmO0FBQ0Esa0JBQWEsZUFBYjtPQUZGO0FBSUEsWUFBTTtBQUNKLGVBQVUsZUFBVjtBQUNBLGdCQUFXLGVBQVg7T0FGRjtLQUxGLENBVmE7R0FsRm1CO0NBQWxCLENBQVo7O0FBeUdOLE9BQU8sT0FBUCxHQUFpQixTQUFqQjs7Ozs7Ozs7QUNySEE7O0FBRUE7Ozs7QUFDQTs7Ozs7QUFHQSxJQUFNLGlCQUFpQixnQkFBTSxXQUFOLENBQWtCOzs7QUFDdkMsV0FBUztBQUNQLGtCQUFjO0FBQ1osYUFBTyxDQUFQO0FBQ0EsZ0JBQVUsUUFBVjtBQUNBLGVBQVMsY0FBVDtBQUNBLG1CQUFhLE1BQWI7QUFDQSxxQkFBZSxRQUFmO0FBQ0EsYUFBTyxhQUFQO0FBQ0EsZUFBUyxDQUFUO0FBQ0EsY0FBUSxNQUFSO0tBUkY7R0FERjtBQVlBLGFBQVc7QUFDVCxZQUFRLGlCQUFNLElBQU47QUFDUixVQUFNLGlCQUFNLE1BQU47QUFDTixXQUFPLGlCQUFNLE1BQU47R0FIVDtBQUtBLG1CQUFpQiwyQkFBWTtBQUMzQixXQUFPO0FBQ0wsY0FBUSxLQUFSO0FBQ0EsWUFBTSxVQUFOO0FBQ0EsYUFBTyxFQUFQO0tBSEYsQ0FEMkI7R0FBWjtBQU9qQixVQUFRLGtCQUFZO0FBQ2xCLFFBQU0sSUFBSSxJQUFKLENBRFk7UUFFWixRQUFVLEVBQVYsTUFGWTs7QUFJbEIsUUFBSSxPQUFPO0FBQ1QscUJBQWU7QUFDYixtQkFBVyxRQUFYO0FBQ0EsaUJBQVMsTUFBVDtPQUZGO0FBSUEsd0NBQWtDO0FBQ2hDLGlCQUFTLE9BQVQ7T0FERjtBQUdBLDBCQUFvQjtBQUNsQixpQkFBUyxjQUFUO0FBQ0EsZ0JBQVEsT0FBUjtBQUNBLG9CQUFZLGVBQVo7QUFDQSxpQkFBUyxDQUFUO09BSkY7QUFNQSw4Q0FBd0M7QUFDdEMsaUJBQVMsQ0FBVDtPQURGO0FBR0EsNkJBQXVCLGVBQWUsWUFBZjtLQWpCckIsQ0FKYztBQXVCbEIsUUFBSSxpQkFBaUIsRUFBakIsQ0F2QmM7QUF3QmxCLFFBQUksa0JBQWtCLEVBQWxCLENBeEJjO0FBeUJsQixRQUFJLGlCQUFpQixFQUFqQixDQXpCYzs7QUEyQmxCLFdBQ0U7O1FBQVMsUUFBUyxNQUFNLE1BQU47QUFDVCxjQUFPLE9BQU8sTUFBUCxDQUFjLElBQWQsRUFBb0IsTUFBTSxLQUFOLENBQTNCO0FBQ0Esd0JBQWlCLGNBQWpCO0FBQ0EseUJBQWtCLGVBQWxCO0FBQ0Esd0JBQWlCLGNBQWpCO09BSlQ7TUFLRSxNQUFNLFFBQU47S0FOSixDQTNCa0I7R0FBWjtDQXpCYSxDQUFqQjs7QUErRE4sT0FBTyxPQUFQLEdBQWlCLGNBQWpCOzs7QUMxRUE7O0FBRUEsUUFBUSxNQUFSLEdBQWlCO0FBQ2YsS0FBRyxDQUFFLElBQUYsRUFBUSxTQUFSLEVBQW1CLFlBQW5CLENBQUg7QUFDQSxLQUFHLENBQUUsSUFBRixFQUFRLFNBQVIsRUFBbUIsbUJBQW5CLENBQUg7QUFDQSxLQUFHLENBQUUsSUFBRixFQUFRLFNBQVIsRUFBbUIsWUFBbkIsQ0FBSDtBQUNBLEtBQUcsQ0FBRSxJQUFGLEVBQVEsU0FBUixFQUFtQixTQUFuQixDQUFIO0FBQ0EsS0FBRyxDQUFFLElBQUYsRUFBUSxTQUFSLEVBQW1CLFVBQW5CLENBQUg7Q0FMRjs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNiQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7OztBQUdBLElBQU0sY0FBYyxnQkFBTSxXQUFOLENBQWtCOzs7Ozs7QUFLcEMsYUFBVyxFQUFYOztBQUVBLFVBQVEsaUNBQVI7O0FBSUEsV0FBUyxFQUFUOztBQUVBLDhDQUFtQjtBQUNqQixXQUFPLEVBQVAsQ0FEaUI7R0FiaUI7QUFpQnBDLDhDQUFtQjtBQUNqQixXQUFPLEVBQVAsQ0FEaUI7R0FqQmlCO0FBcUJwQyw0QkFBVTtBQUNSLFFBQU0sSUFBSSxJQUFKLENBREU7UUFFRixRQUFVLEVBQVYsTUFGRTs7QUFHUixXQUNFOzttQkFBVTtBQUNSLG1CQUFZLDBCQUFXLGNBQVgsRUFBMkIsTUFBTSxTQUFOLENBQXZDO0FBQ0EsZUFBUSxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLE1BQU0sS0FBTixDQUExQixHQUZGO01BR0ksTUFBTSxRQUFOO0tBSk4sQ0FIUTtHQXJCMEI7Ozs7OztBQXFDcEMsa0RBQXFCO0FBQ25CLFFBQU0sSUFBSSxJQUFKLENBRGE7R0FyQ2U7QUF5Q3BDLHdEQUF3QjtBQUN0QixRQUFNLElBQUksSUFBSixDQURnQjtHQXpDWTtDQUFsQixDQUFkOzs7Ozs7Ozs7O0FBdUROLE9BQU8sT0FBUCxHQUFpQixXQUFqQjs7Ozs7Ozs7QUMvREE7O0FBRUE7Ozs7QUFDQTs7Ozs7QUFHQSxJQUFNLG1CQUFtQixnQkFBTSxXQUFOLENBQWtCOzs7QUFDekMsYUFBVywwQkFBUSxTQUFSO0FBQ1gsOENBQW1CO0FBQ2pCLFdBQU87QUFDTCxjQUFRLEtBQVI7QUFDQSxZQUFNO0FBQ0oseUJBQWlCLEVBQWpCO09BREY7QUFHQSxZQUFNLFVBQU47S0FMRixDQURpQjtHQUZzQjtBQVd6Qyw0QkFBVTtBQUNSLFFBQU0sSUFBSSxJQUFKLENBREU7UUFFRixRQUFVLEVBQVYsTUFGRTs7QUFHUixXQUFPOztNQUFjLEtBQWQ7TUFBd0IsTUFBTSxRQUFOO0tBQS9CLENBSFE7R0FYK0I7Q0FBbEIsQ0FBbkI7O0FBa0JOLE9BQU8sT0FBUCxHQUFpQixnQkFBakI7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBcENhcHRjaGEgZnJvbSAnLi4vLi4vbGliL2FwX2NhcHRjaGEnXG5cbmxldCBEZW1vID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYXB0Y2hhU3JjOiBcIi4vaW1hZ2VzL21vY2stY2FwdGNoYS5zdmdcIlxuICAgIH1cbiAgfSxcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBzID0gdGhpcyxcbiAgICAgIHN0YXRlID0gcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEFwQ2FwdGNoYSBzcmM9e3N0YXRlLmNhcHRjaGFTcmN9XG4gICAgICAgICAgICAgICAgICAgcmVmcmVzaFRleHQ9XCJyZWZyZXNoXCJcbiAgICAgICAgICAgICAgICAgICBzcGlubmluZz17c3RhdGUuc3Bpbm5pbmd9XG4gICAgICAgICAgICAgICAgICAgb25SZWZyZXNoPXtzLnJlZnJlc2hDYXB0Y2hhfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0sXG4gIHJlZnJlc2hDYXB0Y2hhKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgIGNvbnNvbGUubG9nKCdyZWZyZXNoQ2FwdGNoYScsIHRpbWUpXG4gICAgcy5zZXRTdGF0ZSh7XG4gICAgICBzcGlubmluZzogdHJ1ZSxcbiAgICAgIGNhcHRjaGFTcmM6IG51bGxcbiAgICB9KVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNhcHRjaGFTcmM6IGAuL2ltYWdlcy9tb2NrLWNhcHRjaGEuc3ZnP3Q9JHt0aW1lfWAsXG4gICAgICAgIHNwaW5uaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9LCAxNTAwKVxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlbW87IiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKVxuY29uc3QgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKVxuXG5jb25zdCBEZW1vID0gcmVxdWlyZSgnLi9kZW1vLmNvbXBvbmVudC5qcycpXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gb25Mb2FkICgpIHtcbiAgd2luZG93LlJlYWN0ID0gUmVhY3RcbiAgbGV0IERlbW9GYWN0b3J5ID0gUmVhY3QuY3JlYXRlRmFjdG9yeShEZW1vKVxuICBSZWFjdERPTS5yZW5kZXIoRGVtb0ZhY3RvcnkoKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbW8td3JhcCcpKVxufSlcbiIsIi8qKlxuICogYXBlbWFuIHJlYWN0IHBhY2thZ2UgZm9yIGNhcHRjaGEgY29tcG9uZW50LlxuICogQGNvbnN0cnVjdG9yIEFwQ2FwdGNoYVxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuaW1wb3J0IHtBcEljb259IGZyb20gJ2FwZW1hbi1yZWFjdC1pY29uJ1xuaW1wb3J0IHtBcEltYWdlfSBmcm9tICdhcGVtYW4tcmVhY3QtaW1hZ2UnXG5pbXBvcnQge0FwU3Bpbm5lcn0gZnJvbSAnYXBlbWFuLXJlYWN0LXNwaW5uZXInXG5pbXBvcnQge0FwVG91Y2hhYmxlfSBmcm9tICdhcGVtYW4tcmVhY3QtdG91Y2hhYmxlJ1xuXG4vKiogQGxlbmRzIEFwQ2FwdGNoYSAqL1xubGV0IEFwQ2FwdGNoYSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTcGVjc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHByb3BUeXBlczoge1xuICAgIC8qKiBJbWFnZSBzb3VyY2UgdXJsICovXG4gICAgc3JjOiB0eXBlcy5zdHJpbmcsXG4gICAgLyoqIEhhbmRsZXIgZm9yIHJlZnJlc2ggKi9cbiAgICBvblJlZnJlc2g6IHR5cGVzLmZ1bmMsXG4gICAgcmVmcmVzaEljb246IHR5cGVzLnN0cmluZyxcbiAgICByZWZyZXNoVGV4dDogdHlwZXMuc3RyaW5nLFxuICAgIGltYWdlV2lkdGg6IHR5cGVzLm51bWJlcixcbiAgICBpbWFnZUhlaWdodDogdHlwZXMubnVtYmVyLFxuICAgIG9uSW1hZ2VMb2FkOiB0eXBlcy5mdW5jLFxuICAgIG9uSW1hZ2VFcnJvcjogdHlwZXMuZnVuYyxcbiAgICBzcGlubmluZzogdHlwZXMuYm9vbCxcbiAgICBzcGlubmVyVGhlbWU6IHR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIG1peGluczogW10sXG5cbiAgc3RhdGljczoge30sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlICgpIHtcbiAgICByZXR1cm4ge31cbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzcmM6IG51bGwsXG4gICAgICBvblJlZnJlc2g6IG51bGwsXG4gICAgICByZWZyZXNoSWNvbjogJ2ZhIGZhLXJlZnJlc2gnLFxuICAgICAgcmVmcmVzaFRleHQ6ICcnLFxuICAgICAgaW1hZ2VXaWR0aDogMjQwLFxuICAgICAgaW1hZ2VIZWlnaHQ6IDk0LFxuICAgICAgb25JbWFnZUxvYWQ6IG51bGwsXG4gICAgICBvbkltYWdlRXJyb3I6IG51bGwsXG4gICAgICBzcGlubmluZzogZmFsc2UsXG4gICAgICBzcGlubmVyVGhlbWU6IEFwU3Bpbm5lci5ERUZBVUxUX1RIRU1FXG4gICAgfVxuICB9LFxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBwcm9wcyB9ID0gc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzbmFtZXMoJ2FwLWNhcHRjaGEnLCBwcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgICBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgcHJvcHMuc3R5bGUpfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QXBTcGlubmVyIGNsYXNzTmFtZT1cImFwLWNhcHRjaGEtc3Bpbm5lclwiXG4gICAgICAgICAgICAgICAgICAgICBlbmFibGVkPXsgcHJvcHMuc3Bpbm5pbmcgfVxuICAgICAgICAgICAgICAgICAgICAgdGhlbWU9eyBwcm9wcy5zcGlubmVyVGhlbWUgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEFwSW1hZ2UgY2xhc3NOYW1lPVwiYXAtY2FwdGNoYS1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvcHMuc3JjIH1cbiAgICAgICAgICAgICAgICAgICB3aWR0aD17IHByb3BzLmltYWdlV2lkdGggfVxuICAgICAgICAgICAgICAgICAgIGhlaWdodD17IHByb3BzLmltYWdlSGVpZ2h0IH1cbiAgICAgICAgICAgICAgICAgICBvbkxvYWQ9eyBzLmhhbmRsZUltYWdlTG9hZCB9XG4gICAgICAgICAgICAgICAgICAgb25FcnJvcj17IHMuaGFuZGxlSW1hZ2VFcnJvciB9XG4gICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhcC1jYXB0Y2hhLXJlZnJlc2gtYnV0dG9uXCI+XG4gICAgICAgICAgICA8QXBUb3VjaGFibGUgb25UYXA9eyBzLmhhbmRsZVRhcCB9PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcEljb24gY2xhc3NOYW1lPXsgY2xhc3NuYW1lcygnYXAtY2FwdGNoYS1yZWZyZXNoLWljb24nLHByb3BzLnJlZnJlc2hJY29uLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnZmEtc3Bpbic6IHByb3BzLnNwaW5uaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnsgcHJvcHMucmVmcmVzaFRleHQgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9BcFRvdWNoYWJsZT5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9LFxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIExpZmVjeWNsZVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXh0UHJvcHMpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICB9LFxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZSAobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIHJldHVybiB0cnVlXG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZSAobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICBsZXQgcyA9IGZhbHNlXG4gIH0sXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEN1c3RvbVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS1cblxuICBoYW5kbGVUYXAgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcbiAgICBpZiAocHJvcHMub25SZWZyZXNoKSB7XG4gICAgICBwcm9wcy5vblJlZnJlc2goKVxuICAgIH1cbiAgfSxcblxuICBoYW5kbGVJbWFnZUxvYWQgKGV2KSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBwcm9wcyB9ID0gc1xuICAgIGlmIChwcm9wcy5vbkltYWdlTG9hZCkge1xuICAgICAgcHJvcHMub25JbWFnZUxvYWQoZXYpXG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZUltYWdlRXJyb3IgKGVycikge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcbiAgICBpZiAocHJvcHMub25JbWFnZUVycm9yKSB7XG4gICAgICBwcm9wcy5vbkltYWdlRXJyb3IoZXJyKVxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBQcml2YXRlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBBcENhcHRjaGFcbiIsIi8qKlxuICogYXBlbWFuIHJlYWN0IHBhY2thZ2UgZm9yIGltYWdlIGNvbXBvbmVudC5cbiAqIEBjb25zdHJ1Y3RvciBBcEltYWdlXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBudW1jYWwgZnJvbSAnbnVtY2FsJ1xuaW1wb3J0IHNjYWxlZFNpemUgZnJvbSAnLi9zaXppbmcvc2NhbGVkX3NpemUnXG5pbXBvcnQge0FwU3Bpbm5lcn0gZnJvbSAnYXBlbWFuLXJlYWN0LXNwaW5uZXInXG5pbXBvcnQge0FwUHVyZU1peGlufSBmcm9tICdhcGVtYW4tcmVhY3QtbWl4aW5zJ1xuXG4vKiogQGxlbmRzIEFwSW1hZ2UgKi9cbmNvbnN0IEFwSW1hZ2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU3BlY3NcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcm9wVHlwZXM6IHtcbiAgICAvKiogSW1hZ2Ugc2NhbGluZyBwb2xpY3kgKi9cbiAgICBzY2FsZTogdHlwZXMub25lT2YoW1xuICAgICAgJ2ZpdCcsXG4gICAgICAnZmlsbCcsXG4gICAgICAnbm9uZSdcbiAgICBdKSxcbiAgICAvKiogSW1hZ2Ugd2lkdGggKi9cbiAgICB3aWR0aDogdHlwZXMub25lT2ZUeXBlKFsgdHlwZXMubnVtYmVyLCB0eXBlcy5zdHJpbmcgXSksXG4gICAgLyoqIEltYWdlIGhlaWdodCAqL1xuICAgIGhlaWdodDogdHlwZXMub25lT2ZUeXBlKFsgdHlwZXMubnVtYmVyLCB0eXBlcy5zdHJpbmcgXSksXG4gICAgLyoqIEltYWdlIHNyYyBzdHJpbmcgKi9cbiAgICBzcmM6IHR5cGVzLnN0cmluZyxcbiAgICAvKiogQWx0IHRlc3QgKi9cbiAgICBhbHQ6IHR5cGVzLnN0cmluZyxcbiAgICAvKiogVGhlbSBvZiBzcGlubmVyICovXG4gICAgc3Bpbm5lclRoZW1lOiB0eXBlcy5zdHJpbmcsXG4gICAgLyoqIEhhbmRsZXIgb24gaW1hZ2UgbG9hZCAqL1xuICAgIG9uTG9hZDogdHlwZXMuZnVuYyxcbiAgICAvKiogSGFuZGxlciBvbiBpbWFnZSBlcnJvci4gKi9cbiAgICBvbkVycm9yOiB0eXBlcy5mdW5jXG4gIH0sXG5cbiAgbWl4aW5zOiBbXG4gICAgQXBQdXJlTWl4aW5cbiAgXSxcblxuICBzdGF0aWNzOiB7XG4gICAgc2NhbGVkU2l6ZSxcbiAgICB6ZXJvSWZOYU4gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gaXNOYU4odmFsdWUpID8gMCA6IHZhbHVlXG4gICAgfSxcbiAgICBudWxsSWZOYU4gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gaXNOYU4odmFsdWUpID8gbnVsbCA6IHZhbHVlXG4gICAgfVxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICByZXR1cm4ge1xuICAgICAgaW1nV2lkdGg6IG51bGwsXG4gICAgICBpbWdIZWlnaHQ6IG51bGwsXG4gICAgICBtb3VudGVkOiBmYWxzZSxcbiAgICAgIHJlYWR5OiBmYWxzZSxcbiAgICAgIGxvYWRpbmc6ICEhcy5wcm9wcy5zcmMsXG4gICAgICBlcnJvcjogbnVsbFxuICAgIH1cbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzY2FsZTogJ25vbmUnLFxuICAgICAgd2lkdGg6IG51bGwsXG4gICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICBzcmM6IG51bGwsXG4gICAgICBhbHQ6ICdOTyBJTUFHRScsXG4gICAgICBzcGlubmVyVGhlbWU6IEFwU3Bpbm5lci5ERUZBVUxUX1RIRU1FLFxuICAgICAgb25Mb2FkOiBudWxsLFxuICAgICAgb25FcnJvcjogbnVsbFxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgc3RhdGUsIHByb3BzIH0gPSBzXG5cbiAgICBsZXQgc2l6ZSA9IHtcbiAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCB8fCBudWxsLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQgfHwgbnVsbFxuICAgIH1cblxuICAgIGxldCB7IG1vdW50ZWQsIGVycm9yLCByZWFkeSwgbG9hZGluZyB9ID0gc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc25hbWVzKCdhcC1pbWFnZScsIHByb3BzLmNsYXNzTmFtZSwge1xuICAgICAgICAgICAgICAgICdhcC1pbWFnZS1sb2FkaW5nJzogcHJvcHMuc3JjICYmIGxvYWRpbmcsXG4gICAgICAgICAgICAgICAgJ2FwLWltYWdlLXJlYWR5JzogcHJvcHMuc3JjICYmIHJlYWR5XG4gICAgICAgICAgICB9KSB9XG4gICAgICAgICAgIHN0eWxlPXsgT2JqZWN0LmFzc2lnbih7fSwgc2l6ZSwgcHJvcHMuc3R5bGUpIH0+XG4gICAgICAgIHsgbW91bnRlZCAmJiBlcnJvciA/IHMuX3JlbmRlck5vdGZvdW5kKHNpemUpIDogbnVsbH1cbiAgICAgICAgeyBtb3VudGVkICYmICFlcnJvciA/IHMuX3JlbmRlckltZyhzaXplLCBtb3VudGVkKSA6IG51bGwgfVxuICAgICAgICB7IGxvYWRpbmcgPyBzLl9yZW5kZXJTcGlubmVyKHNpemUpIDogbnVsbCB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0sXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTGlmZWN5Y2xlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIHMuc2V0U3RhdGUoe1xuICAgICAgbW91bnRlZDogdHJ1ZVxuICAgIH0pXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHMucmVzaXplSW1hZ2UoKVxuICAgIH0sIDApXG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV4dFByb3BzKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcblxuICAgIGxldCBzcmMgPSBzLnByb3BzLnNyY1xuICAgIGxldCBuZXh0U3JjID0gbmV4dFByb3BzLnNyY1xuICAgIGxldCBzcmNDaGFuZ2VkID0gISFuZXh0U3JjICYmIChuZXh0U3JjICE9PSBzcmMpXG4gICAgaWYgKHNyY0NoYW5nZWQpIHtcbiAgICAgIHMuc2V0U3RhdGUoe1xuICAgICAgICByZWFkeTogZmFsc2UsXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGVycm9yOiBudWxsXG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsVXBkYXRlIChuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgcy5yZXNpemVJbWFnZSgpXG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gIH0sXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEhlbHBlclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS1cblxuICBoYW5kbGVMb2FkIChlKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBwcm9wcyB9ID0gc1xuXG4gICAgaWYgKHByb3BzLm9uTG9hZCkge1xuICAgICAgcHJvcHMub25Mb2FkKGUpXG4gICAgfVxuXG4gICAgcy5yZXNpemVJbWFnZShlLnRhcmdldC53aWR0aCwgZS50YXJnZXQuaGVpZ2h0KVxuICB9LFxuXG4gIGhhbmRsZUVycm9yIChlKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBwcm9wcyB9ID0gc1xuXG4gICAgcy5zZXRTdGF0ZSh7XG4gICAgICBlcnJvcjogZSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfSlcblxuICAgIGlmIChwcm9wcy5vbkVycm9yKSB7XG4gICAgICBwcm9wcy5vbkVycm9yKGUpXG4gICAgfVxuICB9LFxuXG4gIHJlc2l6ZUltYWdlIChpbWdDb250ZW50V2lkdGgsIGltZ0NvbnRlbnRIZWlnaHQpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGxldCB7IHN0YXRlLCBwcm9wcyB9ID0gc1xuXG4gICAgaW1nQ29udGVudFdpZHRoID0gaW1nQ29udGVudFdpZHRoIHx8IHN0YXRlLmltZ0NvbnRlbnRXaWR0aFxuICAgIGltZ0NvbnRlbnRIZWlnaHQgPSBpbWdDb250ZW50SGVpZ2h0IHx8IHN0YXRlLmltZ0NvbnRlbnRIZWlnaHRcblxuICAgIGxldCB2YWxpZCA9IGltZ0NvbnRlbnRXaWR0aCAmJiBpbWdDb250ZW50SGVpZ2h0XG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGVsbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHMpXG4gICAgbGV0IGZyYW1lU2l6ZSA9IHtcbiAgICAgIHdpZHRoOiBlbG0ub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGVsbS5vZmZzZXRIZWlnaHRcbiAgICB9XG4gICAgbGV0IGNvbnRlbnRTaXplID0ge1xuICAgICAgaGVpZ2h0OiBpbWdDb250ZW50SGVpZ2h0LFxuICAgICAgd2lkdGg6IGltZ0NvbnRlbnRXaWR0aFxuICAgIH1cbiAgICBsZXQgc2NhbGVkU2l6ZSA9IEFwSW1hZ2Uuc2NhbGVkU2l6ZShcbiAgICAgIGNvbnRlbnRTaXplLCBmcmFtZVNpemUsIHByb3BzLnNjYWxlXG4gICAgKVxuXG4gICAgcy5zZXRTdGF0ZSh7XG4gICAgICBpbWdDb250ZW50V2lkdGg6IGltZ0NvbnRlbnRXaWR0aCxcbiAgICAgIGltZ0NvbnRlbnRIZWlnaHQ6IGltZ0NvbnRlbnRIZWlnaHQsXG4gICAgICBpbWdXaWR0aDogc2NhbGVkU2l6ZS53aWR0aCxcbiAgICAgIGltZ0hlaWdodDogc2NhbGVkU2l6ZS5oZWlnaHQsXG4gICAgICByZWFkeTogdHJ1ZSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfSlcbiAgfSxcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUHJpdmF0ZVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS1cbiAgX3JlbmRlckltZyAoc2l6ZSkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgc3RhdGUsIHByb3BzIH0gPSBzXG5cbiAgICBsZXQgeyBudWxsSWZOYU4sIHplcm9JZk5hTiB9ID0gQXBJbWFnZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxpbWcgc3JjPXsgcHJvcHMuc3JjIH1cbiAgICAgICAgICAgYWx0PXsgcHJvcHMuYWx0IH1cbiAgICAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NuYW1lcygnYXAtaW1hZ2UtY29udGVudCcpIH1cbiAgICAgICAgICAgc3R5bGU9eyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHplcm9JZk5hTigoc2l6ZS5oZWlnaHQgLSBzdGF0ZS5pbWdIZWlnaHQpIC8gMiksXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiB6ZXJvSWZOYU4oKHNpemUud2lkdGggLSBzdGF0ZS5pbWdXaWR0aCkgLyAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBudWxsSWZOYU4oc3RhdGUuaW1nV2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBudWxsSWZOYU4oc3RhdGUuaW1nSGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgIG9uTG9hZD17IHMuaGFuZGxlTG9hZCB9XG4gICAgICAgICAgIG9uRXJyb3I9eyBzLmhhbmRsZUVycm9yIH1cbiAgICAgIC8+XG4gICAgKVxuICB9LFxuXG4gIF9yZW5kZXJOb3Rmb3VuZCAoc2l6ZSkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwLWltYWdlLW5vdGZvdW5kXCJcbiAgICAgICAgICAgc3R5bGU9eyB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IGAke3NpemUuaGVpZ2h0fXB4YCxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGAke251bWNhbC5taW4oc2l6ZS5oZWlnaHQgKiAwLjQsIDE4KX1gXG4gICAgICAgICAgICAgICAgIH0gfVxuICAgICAgPnsgcHJvcHMuYWx0IH08L2Rpdj5cbiAgICApXG4gIH0sXG5cbiAgX3JlbmRlclNwaW5uZXIgKHNpemUpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGxldCB7IHByb3BzIH0gPSBzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFwU3Bpbm5lciBjbGFzc05hbWU9XCJhcC1pbWFnZS1zcGlubmVyXCJcbiAgICAgICAgICAgICAgICAgdGhlbWU9eyBwcm9wcy5zcGlubmVyVGhlbWUgfVxuICAgICAgICAgICAgICAgICBzdHlsZT17IHtcbiAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogc2l6ZS5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgfSB9Lz5cbiAgICApXG4gIH1cbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gQXBJbWFnZVxuIiwiLyoqXG4gKiBTdHlsZSBmb3IgQXBJbWFnZS5cbiAqIEBjb25zdHJ1Y3RvciBBcEltYWdlU3R5bGVcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7QXBTdHlsZX0gZnJvbSAnYXBlbWFuLXJlYWN0LXN0eWxlJ1xuXG4vKiogQGxlbmRzIEFwSW1hZ2VTdHlsZSAqL1xuY29uc3QgQXBJbWFnZVN0eWxlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICBzY29wZWQ6IHR5cGVzLmJvb2wsXG4gICAgc3R5bGU6IHR5cGVzLm9iamVjdCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHR5cGVzLnN0cmluZ1xuICB9LFxuICBnZXREZWZhdWx0UHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzY29wZWQ6IGZhbHNlLFxuICAgICAgc3R5bGU6IHt9LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0RERCcsXG4gICAgICBzcGluQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknXG4gICAgfVxuICB9LFxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcblxuICAgIGxldCB7IGJhY2tncm91bmRDb2xvciwgc3BpbkNvbG9yIH0gPSBwcm9wc1xuXG4gICAgbGV0IHRyYW5zaXRpb25EdXJhdGlvbiA9IDEwMFxuXG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICAnLmFwLWltYWdlJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke2JhY2tncm91bmRDb2xvcn1gLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgfSxcbiAgICAgICcuYXAtaW1hZ2UgaW1nJzoge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB0cmFuc2l0aW9uOiBgd2lkdGggJHt0cmFuc2l0aW9uRHVyYXRpb259bXMsIG9wYWNpdHkgJHt0cmFuc2l0aW9uRHVyYXRpb259bXNgXG4gICAgICB9LFxuICAgICAgJy5hcC1pbWFnZS1yZWFkeSBpbWcnOiB7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0sXG4gICAgICAnLmFwLWltYWdlLWNvbnRlbnQnOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgICAgfSxcbiAgICAgICcuYXAtaW1hZ2Utc3Bpbm5lcic6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgekluZGV4OiA4LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuMSknLFxuICAgICAgICBjb2xvcjogYCR7c3BpbkNvbG9yfWBcbiAgICAgIH0sXG4gICAgICAnLmFwLWltYWdlLW5vdGZvdW5kJzoge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBjb2xvcjogJ3JnYmEoMCwwLDAsMC4xKScsXG4gICAgICAgIGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnXG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzbWFsbE1lZGlhRGF0YSA9IHt9XG4gICAgbGV0IG1lZGl1bU1lZGlhRGF0YSA9IHt9XG4gICAgbGV0IGxhcmdlTWVkaWFEYXRhID0ge31cbiAgICByZXR1cm4gKFxuICAgICAgPEFwU3R5bGUgc2NvcGVkPXsgcHJvcHMuc2NvcGVkIH1cbiAgICAgICAgICAgICAgIGRhdGE9eyBPYmplY3QuYXNzaWduKGRhdGEsIHByb3BzLnN0eWxlKSB9XG4gICAgICAgICAgICAgICBzbWFsbE1lZGlhRGF0YT17IHNtYWxsTWVkaWFEYXRhIH1cbiAgICAgICAgICAgICAgIG1lZGl1bU1lZGlhRGF0YT17IG1lZGl1bU1lZGlhRGF0YSB9XG4gICAgICAgICAgICAgICBsYXJnZU1lZGlhRGF0YT17IGxhcmdlTWVkaWFEYXRhIH1cbiAgICAgID57IHByb3BzLmNoaWxkcmVuIH08L0FwU3R5bGU+XG4gICAgKVxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwSW1hZ2VTdHlsZVxuIiwiLyoqXG4gKiBhcGVtYW4gcmVhY3QgcGFja2FnZSBmb3IgaW1hZ2UgY29tcG9uZW50LlxuICogQG1vZHVsZSBhcGVtYW4tcmVhY3QtaW1hZ2VcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBBcEltYWdlU3R5bGVcbiAgICovXG4gIGdldCBBcEltYWdlU3R5bGUgKCkgeyByZXR1cm4gcmVxdWlyZSgnLi9hcF9pbWFnZV9zdHlsZScpIH0sXG4gIC8qKlxuICAgKiBAbmFtZSBBcEltYWdlXG4gICAqL1xuICBnZXQgQXBJbWFnZSAoKSB7IHJldHVybiByZXF1aXJlKCcuL2FwX2ltYWdlJykgfVxufVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gX3NjYWxlZFNpemVcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuaW1wb3J0IG51bWNhbCBmcm9tICdudW1jYWwnXG5cbmZ1bmN0aW9uIHNjYWxlZFNpemUgKGNvbnRlbnRTaXplLCBmcmFtZVNpemUsIHBvbGljeSkge1xuICBsZXQgY3cgPSBjb250ZW50U2l6ZS53aWR0aFxuICBsZXQgY2ggPSBjb250ZW50U2l6ZS5oZWlnaHRcbiAgbGV0IGZ3ID0gZnJhbWVTaXplLndpZHRoXG4gIGxldCBmaCA9IGZyYW1lU2l6ZS5oZWlnaHRcblxuICBsZXQgd1JhdGUgPSBudW1jYWwubWluKDEsIGZ3IC8gY3cpXG4gIGxldCBoUmF0ZSA9IG51bWNhbC5taW4oMSwgZmggLyBjaClcblxuICBsZXQgc2l6ZVdpdGhSYXRlID0gKHJhdGUpID0+ICh7XG4gICAgd2lkdGg6IGNvbnRlbnRTaXplLndpZHRoICogcmF0ZSxcbiAgICBoZWlnaHQ6IGNvbnRlbnRTaXplLmhlaWdodCAqIHJhdGVcbiAgfSlcblxuICBzd2l0Y2ggKHBvbGljeSkge1xuICAgIGNhc2UgJ25vbmUnOlxuICAgICAgcmV0dXJuIHNpemVXaXRoUmF0ZSgxKVxuICAgIGNhc2UgJ2ZpdCc6XG4gICAgICByZXR1cm4gc2l6ZVdpdGhSYXRlKFxuICAgICAgICBudW1jYWwubWluKHdSYXRlLCBoUmF0ZSlcbiAgICAgIClcbiAgICBjYXNlICdmaWxsJzpcbiAgICAgIHJldHVybiBzaXplV2l0aFJhdGUoXG4gICAgICAgIG51bWNhbC5tYXgod1JhdGUsIGhSYXRlKVxuICAgICAgKVxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gcG9saWN5OiAke3BvbGljeX1gKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2NhbGVkU2l6ZTtcbiIsIi8qKlxuICogYXBlbWFuIHJlYWN0IHBhY2thZ2UgZm9yIHNwaW5uZXIuXG4gKiBAY29uc3RydWN0b3IgQXBTcGlubmVyXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBudW1jYWwgZnJvbSAnbnVtY2FsJ1xuaW1wb3J0IHtBcFB1cmVNaXhpbiwgQXBMYXlvdXRNaXhpbn0gZnJvbSAnYXBlbWFuLXJlYWN0LW1peGlucydcbmltcG9ydCBjb25zdHMgZnJvbSAnLi9jb25zdHMnXG5cbmNvbnN0IERFRkFVTFRfVEhFTUUgPSAnYydcblxuLyoqIEBsZW5kcyBBcFNwaW5uZXIgKi9cbmNvbnN0IEFwU3Bpbm5lciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTcGVjc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHByb3BUeXBlczoge1xuICAgIGVuYWJsZWQ6IHR5cGVzLmJvb2wsXG4gICAgdGhlbWU6IHR5cGVzLm9uZU9mKFxuICAgICAgT2JqZWN0LmtleXMoY29uc3RzLnRoZW1lcylcbiAgICApXG4gIH0sXG5cbiAgbWl4aW5zOiBbXG4gICAgQXBQdXJlTWl4aW4sXG4gICAgQXBMYXlvdXRNaXhpblxuICBdLFxuXG4gIHN0YXRpY3M6IHtcbiAgICBERUZBVUxUX1RIRU1FOiBERUZBVUxUX1RIRU1FXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlICgpIHtcbiAgICByZXR1cm4ge31cbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIHRoZW1lOiBERUZBVUxUX1RIRU1FXG4gICAgfVxuICB9LFxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBwcm9wcywgbGF5b3V0cyB9ID0gc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzbmFtZXMoJ2FwLXNwaW5uZXInLCBwcm9wcy5jbGFzc05hbWUsIHtcbiAgICAgICAgICAgICAgICAnYXAtc3Bpbm5lci12aXNpYmxlJzogISFsYXlvdXRzLnNwaW5uZXIsXG4gICAgICAgICAgICAgICAgJ2FwLXNwaW5uZXItZW5hYmxlZCc6ICEhcHJvcHMuZW5hYmxlZFxuICAgICAgICAgICAgfSkgfVxuICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGxheW91dHMuc3Bpbm5lciwgcHJvcHMuc3R5bGUpXG4gICAgICAgICAgICAgICAgICB9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcC1zcGlubmVyLWFsaWduZXJcIj4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gcmVmPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZXMoJ2FwLXNwaW5uZXItaWNvbicsIGNvbnN0cy50aGVtZXNbcHJvcHMudGhlbWVdKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IGxheW91dHMuaWNvbiB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSxcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBMaWZlY3ljbGVcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBzLnNldFN0YXRlKHtcbiAgICAgIGljb25WaXNpYmxlOiB0cnVlXG4gICAgfSlcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgfSxcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBGb3IgQXBMYXlvdXRNaXhpblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGdldEluaXRpYWxMYXlvdXRzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3Bpbm5lcjogbnVsbCxcbiAgICAgIGljb246IG51bGxcbiAgICB9XG4gIH0sXG5cbiAgY2FsY0xheW91dHMgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShzKVxuXG4gICAgbGV0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZSB8fCBub2RlLnBhcmVudEVsZW1lbnRcbiAgICBsZXQgdyA9IG51bWNhbC5tYXgocGFyZW50Lm9mZnNldFdpZHRoLCBub2RlLm9mZnNldFdpZHRoKVxuICAgIGxldCBoID0gbnVtY2FsLm1heChwYXJlbnQub2Zmc2V0SGVpZ2h0LCBub2RlLm9mZnNldEhlaWdodClcbiAgICBsZXQgc2l6ZSA9IG51bWNhbC5taW4odywgaClcbiAgICBsZXQgaWNvblNpemUgPSBudW1jYWwubWluKHNpemUgKiAwLjUsIDYwKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNwaW5uZXI6IHtcbiAgICAgICAgbGluZUhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgIGZvbnRTaXplOiBgJHtpY29uU2l6ZX1weGBcbiAgICAgIH0sXG4gICAgICBpY29uOiB7XG4gICAgICAgIHdpZHRoOiBgJHtpY29uU2l6ZX1weGAsXG4gICAgICAgIGhlaWdodDogYCR7aWNvblNpemV9cHhgXG4gICAgICB9XG4gICAgfVxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwU3Bpbm5lclxuIiwiLyoqXG4gKiBTdHlsZSBmb3IgQXBTcGlubmVyLlxuICogQGNvbnN0cnVjdG9yIEFwU3Bpbm5lclN0eWxlXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQge0FwU3R5bGV9IGZyb20gJ2FwZW1hbi1yZWFjdC1zdHlsZSdcblxuLyoqIEBsZW5kcyBBcFNwaW5uZXJTdHlsZSAqL1xuY29uc3QgQXBTcGlubmVyU3R5bGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHN0YXRpY3M6IHtcbiAgICBhbGlnbmVyU3R5bGU6IHtcbiAgICAgIHdpZHRoOiAxLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5SaWdodDogJy0xcHgnLFxuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgIH1cbiAgfSxcbiAgcHJvcFR5cGVzOiB7XG4gICAgc2NvcGVkOiB0eXBlcy5ib29sLFxuICAgIHR5cGU6IHR5cGVzLnN0cmluZyxcbiAgICBzdHlsZTogdHlwZXMub2JqZWN0XG4gIH0sXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzY29wZWQ6IGZhbHNlLFxuICAgICAgdHlwZTogJ3RleHQvY3NzJyxcbiAgICAgIHN0eWxlOiB7fVxuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBwcm9wcyB9ID0gc1xuXG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICAnLmFwLXNwaW5uZXInOiB7XG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSxcbiAgICAgICcuYXAtc3Bpbm5lci5hcC1zcGlubmVyLWVuYWJsZWQnOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgIH0sXG4gICAgICAnLmFwLXNwaW5uZXItaWNvbic6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1hcmdpbjogJzAgNHB4JyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMTAwbXMnLFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9LFxuICAgICAgJy5hcC1zcGlubmVyLXZpc2libGUgLmFwLXNwaW5uZXItaWNvbic6IHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSxcbiAgICAgICcuYXAtc3Bpbm5lci1hbGlnbmVyJzogQXBTcGlubmVyU3R5bGUuYWxpZ25lclN0eWxlXG4gICAgfVxuICAgIGxldCBzbWFsbE1lZGlhRGF0YSA9IHt9XG4gICAgbGV0IG1lZGl1bU1lZGlhRGF0YSA9IHt9XG4gICAgbGV0IGxhcmdlTWVkaWFEYXRhID0ge31cblxuICAgIHJldHVybiAoXG4gICAgICA8QXBTdHlsZSBzY29wZWQ9eyBwcm9wcy5zY29wZWQgfVxuICAgICAgICAgICAgICAgZGF0YT17IE9iamVjdC5hc3NpZ24oZGF0YSwgcHJvcHMuc3R5bGUpIH1cbiAgICAgICAgICAgICAgIHNtYWxsTWVkaWFEYXRhPXsgc21hbGxNZWRpYURhdGEgfVxuICAgICAgICAgICAgICAgbWVkaXVtTWVkaWFEYXRhPXsgbWVkaXVtTWVkaWFEYXRhIH1cbiAgICAgICAgICAgICAgIGxhcmdlTWVkaWFEYXRhPXsgbGFyZ2VNZWRpYURhdGEgfVxuICAgICAgPntwcm9wcy5jaGlsZHJlbn08L0FwU3R5bGU+XG4gICAgKVxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwU3Bpbm5lclN0eWxlXG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy50aGVtZXMgPSB7XG4gIGE6IFsgJ2ZhJywgJ2ZhLXNwaW4nLCAnZmEtc3Bpbm5lcicgXSxcbiAgYjogWyAnZmEnLCAnZmEtc3BpbicsICdmYS1jaXJjbGUtby1ub3RjaCcgXSxcbiAgYzogWyAnZmEnLCAnZmEtc3BpbicsICdmYS1yZWZyZXNoJyBdLFxuICBkOiBbICdmYScsICdmYS1zcGluJywgJ2ZhLWdlYXInIF0sXG4gIGU6IFsgJ2ZhJywgJ2ZhLXNwaW4nLCAnZmEtcHVsc2UnIF1cbn1cbiIsIi8qKlxuICogYXBlbWFuIHJlYWN0IHBhY2thZ2UgZm9yIHNwaW5uZXIuXG4gKiBAbW9kdWxlIGFwZW1hbi1yZWFjdC1zcGlubmVyXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvKipcbiAgICogQG5hbWUgQXBTcGlubmVyU3R5bGVcbiAgICovXG4gIGdldCBBcFNwaW5uZXJTdHlsZSAoKSB7IHJldHVybiByZXF1aXJlKCcuL2FwX3NwaW5uZXJfc3R5bGUnKSB9LFxuICAvKipcbiAgICogQG5hbWUgQXBTcGlubmVyXG4gICAqL1xuICBnZXQgQXBTcGlubmVyICgpIHsgcmV0dXJuIHJlcXVpcmUoJy4vYXBfc3Bpbm5lcicpIH0sXG4gIGdldCBjb25zdHMgKCkgeyByZXR1cm4gcmVxdWlyZSgnLi9jb25zdHMnKSB9XG59XG4iLCIvKipcbiAqIGFwZW1hbiByZWFjdCBwYWNrYWdlIGZvciB0b3VjaGFibGUgY29tcG9uZW50LlxuICogQGNvbnN0cnVjdG9yIEFwVG91Y2hhYmxlXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7QXBUb3VjaE1peGlufSBmcm9tICdhcGVtYW4tcmVhY3QtbWl4aW5zJ1xuXG4vKiogQGxlbmRzIEFwVG91Y2hhYmxlICovXG5jb25zdCBBcFRvdWNoYWJsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTcGVjc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcm9wVHlwZXM6IHt9LFxuXG4gIG1peGluczogW1xuICAgIEFwVG91Y2hNaXhpblxuICBdLFxuXG4gIHN0YXRpY3M6IHt9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSAoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzICgpIHtcbiAgICByZXR1cm4ge31cbiAgfSxcblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgbGV0IHsgcHJvcHMgfSA9IHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiB7IC4uLnByb3BzIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NuYW1lcygnYXAtdG91Y2hhYmxlJywgcHJvcHMuY2xhc3NOYW1lKSB9XG4gICAgICAgIHN0eWxlPXsgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMuc3R5bGUpIH0+XG4gICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9LFxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIExpZmVjeWNsZVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICB9LFxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBIZWxwZXJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFByaXZhdGVcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG5cbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gQXBUb3VjaGFibGVcbiIsIi8qKlxuICogU3R5bGUgZm9yIEFwVG91Y2hhYmxlLlxuICogQGNvbnN0cnVjdG9yIEFwVG91Y2hhYmxlU3R5bGVcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtBcFN0eWxlfSBmcm9tICdhcGVtYW4tcmVhY3Qtc3R5bGUnXG5cbi8qKiBAbGVuZHMgQXBUb3VjaGFibGVTdHlsZSAqL1xuY29uc3QgQXBUb3VjaGFibGVTdHlsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiBBcFN0eWxlLnByb3BUeXBlcyxcbiAgZ2V0RGVmYXVsdFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NvcGVkOiBmYWxzZSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgJy5hcC10b3VjaGFibGUnOiB7fVxuICAgICAgfSxcbiAgICAgIHR5cGU6ICd0ZXh0L2NzcydcbiAgICB9XG4gIH0sXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBsZXQgeyBwcm9wcyB9ID0gc1xuICAgIHJldHVybiA8QXBTdHlsZSB7IC4uLnByb3BzIH0+eyBwcm9wcy5jaGlsZHJlbiB9PC9BcFN0eWxlPlxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwVG91Y2hhYmxlU3R5bGVcbiIsIi8qKlxuICogYXBlbWFuIHJlYWN0IHBhY2thZ2UgZm9yIHRvdWNoYWJsZSBjb21wb25lbnQuXG4gKiBAbW9kdWxlIGFwZW1hbi1yZWFjdC10b3VjaGFibGVcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBBcFRvdWNoYWJsZVN0eWxlXG4gICAqL1xuICBnZXQgQXBUb3VjaGFibGVTdHlsZSAoKSB7IHJldHVybiByZXF1aXJlKCcuL2FwX3RvdWNoYWJsZV9zdHlsZScpIH0sXG4gIC8qKlxuICAgKiBAbmFtZSBBcFRvdWNoYWJsZVxuICAgKi9cbiAgZ2V0IEFwVG91Y2hhYmxlICgpIHsgcmV0dXJuIHJlcXVpcmUoJy4vYXBfdG91Y2hhYmxlJykgfVxufVxuIiwiLyoqXG4gKiBHZXQgYXZlcmFnZSB2YWx1ZS5cbiAqIEBmdW5jdGlvbiBhdmVcbiAqIEBwYXJhbSB7Li4ubnVtYmVyfSB2YWx1ZXMgLSBWYWx1ZXMgdG8gYXZlLlxuICogQHJldHVybnMge251bWJlcn0gLSBBdmVyYWdlIHZhbHVlLlxuICovXG5cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHN1bSA9IHJlcXVpcmUoJy4vc3VtJyk7XG5cbi8qKiBAbGVuZHMgYXZlICovXG5mdW5jdGlvbiBhdmUoKSB7XG4gICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGV0IHZhbHVlcyA9IDAsIHNpemUgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhcmdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxldCB2YWwgPSBhcmdzW2ldO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgICAgICBzaXplICs9IHZhbC5sZW5ndGg7XG4gICAgICAgICAgICB2YWwgPSBzdW0uYXBwbHkoc3VtLCB2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2l6ZSArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlcyArPSB2YWw7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXMgLyBzaXplO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGF2ZTtcblxuIiwiLyoqXG4gKiBCYXNpYyBudW1lcmljIGNhbGN1bGF0aW9uIGZ1bmN0aW9ucy5cbiAqIEBtb2R1bGUgbnVtY2FsXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGdldCBhdmUoKSB7IHJldHVybiByZXF1aXJlKCcuL2F2ZScpOyB9LFxuICAgIGdldCBtYXgoKSB7IHJldHVybiByZXF1aXJlKCcuL21heCcpOyB9LFxuICAgIGdldCBtaW4oKSB7IHJldHVybiByZXF1aXJlKCcuL21pbicpOyB9LFxuICAgIGdldCBzdW0oKSB7IHJldHVybiByZXF1aXJlKCcuL3N1bScpOyB9XG59OyIsIi8qKlxuICogRmluZCBtYXggdmFsdWUuXG4gKiBAZnVuY3Rpb24gbWF4XG4gKiBAcGFyYW0gey4uLm51bWJlcn0gdmFsdWVzIC0gVmFsdWVzIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSAtIE1heCBudW1iZXIuXG4gKi9cblxuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqIEBsZW5kcyBtYXggKi9cbmZ1bmN0aW9uIG1heCgpIHtcbiAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICBsZXQgcmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhcmdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxldCB2YWwgPSBhcmdzW2ldO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgICAgICB2YWwgPSBtYXguYXBwbHkobWF4LCB2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBoaXQgPSAocmVzdWx0ID09PSB1bmRlZmluZWQpIHx8ICh2YWwgPiByZXN1bHQpO1xuICAgICAgICBpZiAoaGl0KSB7XG4gICAgICAgICAgICByZXN1bHQgPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXg7XG5cbiIsIi8qKlxuICogRmluZCBtaW4gdmFsdWUuXG4gKiBAZnVuY3Rpb24gbWluXG4gKiBAcGFyYW0gey4uLm51bWJlcn0gdmFsdWVzIC0gVmFsdWVzIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSAtIE1pbiBudW1iZXIuXG4gKi9cblxuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqIEBsZW5kcyBtaW4gKi9cbmZ1bmN0aW9uIG1pbigpIHtcbiAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICBsZXQgcmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhcmdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxldCB2YWwgPSBhcmdzW2ldO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgICAgICB2YWwgPSBtaW4uYXBwbHkobWluLCB2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBoaXQgPSAocmVzdWx0ID09PSB1bmRlZmluZWQpIHx8ICh2YWwgPCByZXN1bHQpO1xuICAgICAgICBpZiAoaGl0KSB7XG4gICAgICAgICAgICByZXN1bHQgPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtaW47XG5cbiIsIi8qKlxuICogR2V0IHN1bSB2YWx1ZS5cbiAqIEBmdW5jdGlvbiBzdW1cbiAqIEBwYXJhbSB7Li4ubnVtYmVyfSB2YWx1ZXMgLSBWYWx1ZXMgdG8gc3VtLlxuICogQHJldHVybnMge251bWJlcn0gLSBTdW0gdmFsdWUuXG4gKi9cblxuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqIEBsZW5kcyBzdW0gKi9cbmZ1bmN0aW9uIHN1bSgpIHtcbiAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJncy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBsZXQgdmFsID0gYXJnc1tpXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICAgICAgdmFsID0gc3VtLmFwcGx5KHN1bSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN1bTtcblxuIl19
