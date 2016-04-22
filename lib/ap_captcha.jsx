/**
 * apeman react package for captcha component.
 * @constructor ApCaptcha
 */

'use strict'

import React, {PropTypes as types} from 'react'
import classnames from 'classnames'

import {ApIcon} from 'apeman-react-icon'
import {ApImage} from 'apeman-react-image'
import {ApSpinner} from 'apeman-react-spinner'
import {ApTouchable} from 'apeman-react-touchable'

/** @lends ApCaptcha */
let ApCaptcha = React.createClass({

  // --------------------
  // Specs
  // --------------------

  propTypes: {
    /** Image source url */
    src: types.string,
    /** Handler for refresh */
    onRefresh: types.func,
    refreshIcon: types.string,
    refreshText: types.string,
    imageWidth: types.number,
    imageHeight: types.number,
    onImageLoad: types.func,
    onImageError: types.func,
    spinning: types.bool,
    spinnerTheme: types.string
  },

  mixins: [],

  statics: {},

  getInitialState () {
    return {}
  },

  getDefaultProps () {
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
      spinnerTheme: ApSpinner.DEFAULT_THEME
    }
  },

  render () {
    const s = this
    let { props } = s
    return (
      <div className={ classnames('ap-captcha', props.className)}
           style={Object.assign({}, props.style)}>
        <div>
          <ApSpinner className="ap-captcha-spinner"
                     enabled={ props.spinning }
                     theme={ props.spinnerTheme }
          />
          <ApImage className="ap-captcha-image"
                   src={ props.src }
                   width={ props.imageWidth }
                   height={ props.imageHeight }
                   onLoad={ s.handleImageLoad }
                   onError={ s.handleImageError }
                   alt=""
          />
        </div>
        <div>
          <a className="ap-captcha-refresh-button">
            <ApTouchable onTap={ s.handleTap }>
                    <span>
                        <ApIcon className={ classnames('ap-captcha-refresh-icon',props.refreshIcon, {
                        'fa-spin': props.spinning
                        }) }/>
                        <span>{ props.refreshText }</span>
                    </span>
            </ApTouchable>
          </a>
        </div>
      </div>
    )
  },

  // --------------------
  // Lifecycle
  // --------------------

  componentWillMount () {
    const s = this
  },

  componentDidMount () {
    const s = this
  },

  componentWillReceiveProps (nextProps) {
    const s = this
  },

  shouldComponentUpdate (nextProps, nextState) {
    const s = this
    return true
  },

  componentWillUpdate (nextProps, nextState) {
    const s = this
  },

  componentDidUpdate (prevProps, prevState) {
    const s = this
  },

  componentWillUnmount () {
    let s = false
  },

  // ------------------
  // Custom
  // ------------------

  handleTap () {
    const s = this
    let { props } = s
    if (props.onRefresh) {
      props.onRefresh()
    }
  },

  handleImageLoad (ev) {
    const s = this
    let { props } = s
    if (props.onImageLoad) {
      props.onImageLoad(ev)
    }
  },

  handleImageError (err) {
    const s = this
    let { props } = s
    if (props.onImageError) {
      props.onImageError(err)
    }
  }

  // ------------------
  // Private
  // ------------------
})

module.exports = ApCaptcha
