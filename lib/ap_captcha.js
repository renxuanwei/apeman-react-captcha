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
    displayName: 'ApCaptcha',

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

        return React.createElement('div', { className: classnames('ap-captcha', props.className),
            style: extend({}, props.style) });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzeC9hcF9jYXB0Y2hhLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLFlBQVksQ0FBQzs7QUFFYixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO01BQzFCLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO01BQzFCLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO01BQ2xDLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUzs7O0FBQUMsQUFHNUIsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7Ozs7OztBQU05QixhQUFTLEVBQUUsRUFBRTs7QUFFYixVQUFNLEVBQUUsRUFBRTs7QUFFVixXQUFPLEVBQUUsRUFBRTs7QUFFWCxtQkFBZSxFQUFFLFlBQVk7QUFDekIsZUFBTyxFQUFFLENBQUM7S0FDYjs7QUFFRCxtQkFBZSxFQUFFLFlBQVk7QUFDekIsZUFBTyxFQUFFLENBQUM7S0FDYjs7QUFFRCxVQUFNLEVBQUUsWUFBWTtBQUNoQixZQUFJLENBQUMsR0FBRyxJQUFJO1lBQ1IsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7O0FBRXBCLGVBQ0ksNkJBQUssU0FBUyxFQUFFLFVBQVUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxBQUFDO0FBQ3JELGlCQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEFBQUMsR0FDOUIsQ0FDUjtLQUNMOzs7Ozs7QUFPRCxzQkFBa0IsRUFBRSxZQUFZO0FBQzVCLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNoQjs7QUFFRCxxQkFBaUIsRUFBRSxZQUFZO0FBQzNCLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNoQjs7QUFFRCw2QkFBeUIsRUFBRSxVQUFVLFNBQVMsRUFBRTtBQUM1QyxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDaEI7O0FBRUQseUJBQXFCLEVBQUUsVUFBVSxTQUFTLEVBQUUsU0FBUyxFQUFFO0FBQ25ELFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O0FBRUQsdUJBQW1CLEVBQUUsVUFBVSxTQUFTLEVBQUUsU0FBUyxFQUFFO0FBQ2pELFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNoQjs7QUFFRCxzQkFBa0IsRUFBRSxVQUFVLFNBQVMsRUFBRSxTQUFTLEVBQUU7QUFDaEQsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ2hCOztBQUVELHdCQUFvQixFQUFFLFlBQVk7QUFDOUIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ2hCOzs7Ozs7Ozs7QUFBQSxDQVNKLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyIsImZpbGUiOiJhcF9jYXB0Y2hhLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaXRha2EvcHJvamVjdHMvYXBlbWFuLXJlYWN0LWxhYm8vYXBlbWFuLXJlYWN0LWNhcHRjaGEvbGliL2pzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogYXBlbWFuIHJlYWN0IHBhY2thZ2UgZm9yIGNhcHRjaGEgY29tcG9uZW50LlxuICogQGNvbnN0cnVjdG9yIEFwQ2FwdGNoYVxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgZXh0ZW5kID0gcmVxdWlyZSgnZXh0ZW5kJyksXG4gICAgY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKSxcbiAgICB0eXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxuLyoqIEBsZW5kcyBBcENhcHRjaGEgKi9cbmxldCBBcENhcHRjaGEgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3BlY3NcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBwcm9wVHlwZXM6IHt9LFxuXG4gICAgbWl4aW5zOiBbXSxcblxuICAgIHN0YXRpY3M6IHt9LFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9LFxuXG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcyxcbiAgICAgICAgICAgIHByb3BzID0gcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2FwLWNhcHRjaGEnLCBwcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgICAgICAgICBzdHlsZT17ZXh0ZW5kKHt9LCBwcm9wcy5zdHlsZSl9PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSxcblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIExpZmVjeWNsZVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gKG5leHRQcm9wcykge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgfSxcblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24gKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGU6IGZ1bmN0aW9uIChuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgIH1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSGVscGVyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gUHJpdmF0ZVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcENhcHRjaGE7Il19