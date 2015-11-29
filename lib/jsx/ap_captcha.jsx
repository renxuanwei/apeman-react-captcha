/**
 * apeman react package for captcha component.
 * @constructor ApCaptcha
 */

"use strict";

const React = require('react'),
    extend = require('extend'),
    classnames = require('classnames'),
    types = React.PropTypes;

/** @lends ApCaptcha */
let ApCaptcha = React.createClass({

    //--------------------
    // Specs
    //--------------------

    propTypes: {},

    mixins: [],

    statics: {},

    getInitialState: function () {
        return {};
    },

    getDefaultProps: function () {
        return {};
    },

    render: function () {
        let s = this,
            props = s.props;

        return (
            <div className={classnames('ap-captcha', props.className)}
                 style={extend({}, props.style)}>
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
    }

    //------------------
    // Helper
    //------------------

    //------------------
    // Private
    //------------------
});

module.exports = ApCaptcha;