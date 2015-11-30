/**
 * apeman react package for captcha component.
 * @constructor ApCaptcha
 */

"use strict";

const React = require('react'),
    extend = require('extend'),
    classnames = require('classnames'),
    ApIcon = require('apeman-react-icon')['ApIcon'],
    ApImage = require('apeman-react-image')['ApImage'],
    ApTouchable = require('apeman-react-touchable')['ApTouchable'],
    types = React.PropTypes;

/** @lends ApCaptcha */
let ApCaptcha = React.createClass({

    //--------------------
    // Specs
    //--------------------

    propTypes: {
        src: types.string.isRequired,
        onRefresh: types.func.isRequired,
        refreshIcon: types.string,
        refreshText: types.string,
        imageWidth: types.number,
        imageHeight: types.number
    },

    mixins: [],

    statics: {},

    getInitialState: function () {
        return {};
    },

    getDefaultProps: function () {
        return {
            src: null,
            onRefresh: null,
            refreshIcon: 'fa fa-refresh',
            refreshText: '',
            imageWidth: 240,
            imageHeight: null
        };
    },

    render: function () {
        let s = this,
            props = s.props;
        return (
            <div className={classnames('ap-captcha', props.className)}
                 style={extend({}, props.style)}>
                <div>
                    <ApImage className="ap-captcha-image"
                             src={props.src}
                             width={props.imageWidth}
                             height={props.imageHeight}
                    ></ApImage>
                </div>
                <div>
                    <a className="ap-captcha-refresh-button">
                        <ApTouchable onTap={s.handleTap}>
                    <span>
                        <ApIcon className={classnames('ap-captcha-refresh-icon',props.refreshIcon)}/>
                        <span>{props.refreshText}</span>
                    </span>
                        </ApTouchable>
                    </a>
                </div>
            </div>
        );
    },


    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount: function () {
        let s = this;
    },

    componentDidMount: function () {
        let s = this;
    },

    componentWillReceiveProps: function (nextProps) {
        let s = this;
    },

    shouldComponentUpdate: function (nextProps, nextState) {
        let s = this;
        return true;
    },

    componentWillUpdate: function (nextProps, nextState) {
        let s = this;
    },

    componentDidUpdate: function (prevProps, prevState) {
        let s = this;
    },

    componentWillUnmount: function () {
        let s = this;
    },

    //------------------
    // Helper
    //------------------

    handleTap: function () {
        let s = this,
            props = s.props;
        if (props.onRefresh) {
            props.onRefresh();
        }
    }

    //------------------
    // Private
    //------------------
});

module.exports = ApCaptcha;