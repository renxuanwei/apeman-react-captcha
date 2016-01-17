/**
 * apeman react package for captcha component.
 * @constructor ApCaptcha
 */

"use strict";

import React, {PropTypes as types} from 'react';
import classnames from 'classnames';

import {ApIcon} from 'apeman-react-icon';
import {ApImage} from 'apeman-react-image';
import {ApTouchable} from 'apeman-react-touchable';

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

    getInitialState() {
        return {};
    },

    getDefaultProps() {
        return {
            src: null,
            onRefresh: null,
            refreshIcon: 'fa fa-refresh',
            refreshText: '',
            imageWidth: 240,
            imageHeight: 94
        };
    },

    render() {
        let s = this,
            props = s.props;
        return (
            <div className={classnames('ap-captcha', props.className)}
                 style={Object.assign({}, props.style)}>
                <div>
                    <ApImage className="ap-captcha-image"
                             src={props.src}
                             width={props.imageWidth}
                             height={props.imageHeight}
                    />
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

    componentWillMount() {
        let s = this;
    },

    componentDidMount() {
        let s = this;
    },

    componentWillReceiveProps(nextProps) {
        let s = this;
    },

    shouldComponentUpdate(nextProps, nextState) {
        let s = this;
        return true;
    },

    componentWillUpdate(nextProps, nextState) {
        let s = this;
    },

    componentDidUpdate(prevProps, prevState) {
        let s = this;
    },

    componentWillUnmount() {
        let s = this;
    },

    //------------------
    // Helper
    //------------------

    handleTap() {
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