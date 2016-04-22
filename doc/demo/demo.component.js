'use strict';var _react=require('react');var _react2=_interopRequireDefault(_react);var _ap_captcha=require('../../lib/ap_captcha');var _ap_captcha2=_interopRequireDefault(_ap_captcha);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var Demo=_react2.default.createClass({displayName:'Demo',getInitialState:function getInitialState(){return {captchaSrc:'./images/mock-captcha.svg'}},render:function render(){var s=this,state=s.state;return _react2.default.createElement('div',null,_react2.default.createElement(_ap_captcha2.default,{src:state.captchaSrc,refreshText:'refresh',spinning:state.spinning,onRefresh:s.refreshCaptcha}))},refreshCaptcha:function refreshCaptcha(){var s=this;var time=new Date().getTime();console.log('refreshCaptcha',time);s.setState({spinning:true,captchaSrc:null});setTimeout(function(){s.setState({captchaSrc:'./images/mock-captcha.svg?t='+time,spinning:false})},1500)}});module.exports=Demo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUVBLHVFQUNBLHVMQUVBLElBQUksS0FBTyxnQkFBTSxXQUFOLENBQWtCLG9CQUN6QiwwQ0FBbUIsQ0FDZixPQUFPLENBQ0gsV0FBWSwyQkFBWixDQURKLENBRGUsQ0FLbkIsd0JBQVUsQ0FDTixJQUFNLEVBQUksSUFBSixDQUNGLE1BQVEsRUFBRSxLQUFGLENBRk4sT0FJRix5Q0FDSSxvREFBVyxJQUFLLE1BQU0sVUFBTixDQUNMLFlBQVksU0FBWixDQUNBLFNBQVUsTUFBTSxRQUFOLENBQ1YsVUFBVyxFQUFFLGNBQUYsQ0FIdEIsQ0FESixDQURKLENBSE0sQ0FZVix3Q0FBaUIsQ0FDYixJQUFNLEVBQUksSUFBSixDQURPLElBRVQsS0FBTyxJQUFJLElBQUosR0FBVyxPQUFYLEVBQVAsQ0FGUyxPQUdiLENBQVEsR0FBUixDQUFZLGdCQUFaLENBQThCLElBQTlCLEVBSGEsQ0FJYixDQUFFLFFBQUYsQ0FBVyxDQUNQLFNBQVUsSUFBVixDQUNBLFdBQVksSUFBWixDQUZKLEVBSmEsVUFRYixDQUFXLFVBQU0sQ0FDYixFQUFFLFFBQUYsQ0FBVyxDQUNQLDBDQUEyQyxJQUEzQyxDQUNBLFNBQVUsS0FBVixDQUZKLEVBRGEsQ0FLZCxJQUxILEVBUmEsQ0FsQlYsQ0FBUCxDQW1DSixPQUFPLE9BQVAsQ0FBaUIsSUFBakIiLCJmaWxlIjoiZGVtby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29rdW5pc2hpbmlzaGkvUHJvamVjdHMvYXBlbWFuLXByb2plY3RzL2FwZW1hbi1yZWFjdC1jYXB0Y2hhL2RvYy9kZW1vIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBcENhcHRjaGEgZnJvbSAnLi4vLi4vbGliL2FwX2NhcHRjaGEnXG5cbmxldCBEZW1vID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGdldEluaXRpYWxTdGF0ZSAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYXB0Y2hhU3JjOiBcIi4vaW1hZ2VzL21vY2stY2FwdGNoYS5zdmdcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICByZW5kZXIgKCkge1xuICAgICAgICBjb25zdCBzID0gdGhpcyxcbiAgICAgICAgICAgIHN0YXRlID0gcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEFwQ2FwdGNoYSBzcmM9e3N0YXRlLmNhcHRjaGFTcmN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoVGV4dD1cInJlZnJlc2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bpbm5pbmc9e3N0YXRlLnNwaW5uaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZWZyZXNoPXtzLnJlZnJlc2hDYXB0Y2hhfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH0sXG4gICAgcmVmcmVzaENhcHRjaGEoKSB7XG4gICAgICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgICAgIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZnJlc2hDYXB0Y2hhJywgdGltZSlcbiAgICAgICAgcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzcGlubmluZzogdHJ1ZSxcbiAgICAgICAgICAgIGNhcHRjaGFTcmM6IG51bGxcbiAgICAgICAgfSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjYXB0Y2hhU3JjOiBgLi9pbWFnZXMvbW9jay1jYXB0Y2hhLnN2Zz90PSR7dGltZX1gLFxuICAgICAgICAgICAgICAgIHNwaW5uaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgMTUwMClcbiAgICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlbW87Il19