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
    displayName: 'ApCaptcha',

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
        return React.createElement(
            'div',
            { className: classnames('ap-captcha', props.className),
                style: extend({}, props.style) },
            React.createElement(
                'div',
                null,
                React.createElement(ApImage, { className: 'ap-captcha-image',
                    src: props.src,
                    width: props.imageWidth,
                    height: props.imageHeight
                })
            ),
            React.createElement(
                'div',
                null,
                React.createElement(
                    'a',
                    { className: 'ap-captcha-refresh-button' },
                    React.createElement(
                        ApTouchable,
                        { onTap: s.handleTap },
                        React.createElement(
                            'span',
                            null,
                            React.createElement(ApIcon, { className: classnames('ap-captcha-refresh-icon', props.refreshIcon) }),
                            React.createElement(
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
//# sourceMappingURL=data:application/json;base64,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QUFVLFNBQVMsRUFBRSxTQUFTLEVBQUU7QUFDbkQsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2IsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUFFRCx1QkFBbUIsRUFBRSxVQUFVLFNBQVMsRUFBRSxTQUFTLEVBQUU7QUFDakQsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ2hCOztBQUVELHNCQUFrQixFQUFFLFVBQVUsU0FBUyxFQUFFLFNBQVMsRUFBRTtBQUNoRCxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDaEI7O0FBRUQsd0JBQW9CLEVBQUUsWUFBWTtBQUM5QixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDaEI7Ozs7OztBQU1ELGFBQVMsRUFBRSxZQUFZO0FBQ25CLFlBQUksQ0FBQyxHQUFHLElBQUk7WUFDUixLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNwQixZQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUU7QUFDakIsaUJBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNyQjtLQUNKOzs7OztBQUFBLENBS0osQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDIiwiZmlsZSI6ImFwX2NhcHRjaGEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29rdW5pc2hpdGFrYS9wcm9qZWN0cy9hcGVtYW4tcmVhY3QtbGFiby9hcGVtYW4tcmVhY3QtY2FwdGNoYS9saWIvanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBhcGVtYW4gcmVhY3QgcGFja2FnZSBmb3IgY2FwdGNoYSBjb21wb25lbnQuXG4gKiBAY29uc3RydWN0b3IgQXBDYXB0Y2hhXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBleHRlbmQgPSByZXF1aXJlKCdleHRlbmQnKSxcbiAgICBjbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpLFxuICAgIEFwSWNvbiA9IHJlcXVpcmUoJ2FwZW1hbi1yZWFjdC1pY29uJylbJ0FwSWNvbiddLFxuICAgIEFwSW1hZ2UgPSByZXF1aXJlKCdhcGVtYW4tcmVhY3QtaW1hZ2UnKVsnQXBJbWFnZSddLFxuICAgIEFwVG91Y2hhYmxlID0gcmVxdWlyZSgnYXBlbWFuLXJlYWN0LXRvdWNoYWJsZScpWydBcFRvdWNoYWJsZSddLFxuICAgIHR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG4vKiogQGxlbmRzIEFwQ2FwdGNoYSAqL1xubGV0IEFwQ2FwdGNoYSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBTcGVjc1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBzcmM6IHR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBvblJlZnJlc2g6IHR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgcmVmcmVzaEljb246IHR5cGVzLnN0cmluZyxcbiAgICAgICAgcmVmcmVzaFRleHQ6IHR5cGVzLnN0cmluZyxcbiAgICAgICAgaW1hZ2VXaWR0aDogdHlwZXMubnVtYmVyLFxuICAgICAgICBpbWFnZUhlaWdodDogdHlwZXMubnVtYmVyXG4gICAgfSxcblxuICAgIG1peGluczogW10sXG5cbiAgICBzdGF0aWNzOiB7fSxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcblxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjOiBudWxsLFxuICAgICAgICAgICAgb25SZWZyZXNoOiBudWxsLFxuICAgICAgICAgICAgcmVmcmVzaEljb246ICdmYSBmYS1yZWZyZXNoJyxcbiAgICAgICAgICAgIHJlZnJlc2hUZXh0OiAnJyxcbiAgICAgICAgICAgIGltYWdlV2lkdGg6IDI0MCxcbiAgICAgICAgICAgIGltYWdlSGVpZ2h0OiBudWxsXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcyA9IHRoaXMsXG4gICAgICAgICAgICBwcm9wcyA9IHMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnYXAtY2FwdGNoYScsIHByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAgIHN0eWxlPXtleHRlbmQoe30sIHByb3BzLnN0eWxlKX0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEFwSW1hZ2UgY2xhc3NOYW1lPVwiYXAtY2FwdGNoYS1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvcHMuc3JjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17cHJvcHMuaW1hZ2VXaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtwcm9wcy5pbWFnZUhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgPjwvQXBJbWFnZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhcC1jYXB0Y2hhLXJlZnJlc2gtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXBUb3VjaGFibGUgb25UYXA9e3MuaGFuZGxlVGFwfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXBJY29uIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnYXAtY2FwdGNoYS1yZWZyZXNoLWljb24nLHByb3BzLnJlZnJlc2hJY29uKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLnJlZnJlc2hUZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BcFRvdWNoYWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSxcblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIExpZmVjeWNsZVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gKG5leHRQcm9wcykge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgfSxcblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24gKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGU6IGZ1bmN0aW9uIChuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgIH0sXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEhlbHBlclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBoYW5kbGVUYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzLFxuICAgICAgICAgICAgcHJvcHMgPSBzLnByb3BzO1xuICAgICAgICBpZiAocHJvcHMub25SZWZyZXNoKSB7XG4gICAgICAgICAgICBwcm9wcy5vblJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gUHJpdmF0ZVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcENhcHRjaGE7Il19