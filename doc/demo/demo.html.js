'use strict';var _react=require('react');var _react2=_interopRequireDefault(_react);var _package=require('../../package.json');var _package2=_interopRequireDefault(_package);var _links=require('../links.json');var _links2=_interopRequireDefault(_links);var _fs=require('fs');var _fs2=_interopRequireDefault(_fs);var _apeHighlighting=require('ape-highlighting');var _apemanAssetStylesheets=require('apeman-asset-stylesheets');var _apemanAssetStylesheets2=_interopRequireDefault(_apemanAssetStylesheets);var _demoComponent=require('./demo.component.js');var _demoComponent2=_interopRequireDefault(_demoComponent);var _ap_captcha_style=require('../../lib/ap_captcha_style');var _ap_captcha_style2=_interopRequireDefault(_ap_captcha_style);var _apemanReactTheme=require('apeman-react-theme');var _apemanReactBasic=require('apeman-react-basic');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var FAVICON_URL='https://raw.githubusercontent.com/apeman-asset-labo/apeman-asset-images/master/dist/favicon/react-favicon.png';module.exports=_react2.default.createElement(_apemanReactBasic.ApHtml,{className:'react-demo'},_react2.default.createElement(_apemanReactBasic.ApHead,{charset:'UTF-8',title:_package2.default.name+' Demo',version:_package2.default.version,js:['demo.external.cc.js','demo.js'],icon:FAVICON_URL},_react2.default.createElement(_apemanReactBasic.ApStyle,{data:_fs2.default.readFileSync(_apemanAssetStylesheets2.default.reactDemo).toString()}),_react2.default.createElement(_apemanReactBasic.ApFaIconStyle,null),_react2.default.createElement(_apemanReactTheme.ApThemeStyle,{primaryColor:'#b35600'}),_react2.default.createElement(_ap_captcha_style2.default,null)),_react2.default.createElement(_apemanReactBasic.ApBody,null,_react2.default.createElement('div',{id:'demo-style'}),_react2.default.createElement('header',{className:'react-demo-header'},_react2.default.createElement('div',{className:'react-demo-container'},_react2.default.createElement('h1',null,_react2.default.createElement('a',{href:_package2.default.homepage},_package2.default.name)))),_react2.default.createElement('main',null,_react2.default.createElement('div',null,_react2.default.createElement('div',{className:'react-demo-playground'},_react2.default.createElement('div',{className:'react-demo-container'},_react2.default.createElement('div',{id:'demo-wrap'},_react2.default.createElement(_demoComponent2.default,null))))),_react2.default.createElement('div',{className:'react-demo-container'},_react2.default.createElement('div',null,_react2.default.createElement('pre',{className:'react-demo-src',dangerouslySetInnerHTML:{__html:_apeHighlighting.highlightJsx.fromFile(require.resolve('./demo.component.jsx'))}})))),_react2.default.createElement('footer',null,_react2.default.createElement('div',{className:'react-demo-container'},_react2.default.createElement(_apemanReactBasic.ApLinks,{links:_links2.default})))));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8uaHRtbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFFQSx1RUFDQSwwRkFDQSwrRUFDQSwyREFDQSxpREFDQSw2SUFFQSw2R0FDQSw2SEFDQSxvREFDQSxzSUFFQSxJQUFNLFlBQWMsK0dBQWQsQ0FFTixPQUFPLE9BQVAsQ0FDRSx3REFBUSxVQUFVLFlBQVYsQ0FBUixDQUNFLHdEQUFRLFFBQVEsT0FBUixDQUNBLE1BQVksa0JBQUksSUFBSixRQUFaLENBQ0EsUUFBVSxrQkFBSSxPQUFKLENBQ1YsR0FBSyxDQUFFLHFCQUFGLENBQXlCLFNBQXpCLENBQUwsQ0FDQSxLQUFPLFdBQVAsQ0FKUixDQUtFLHlEQUFTLEtBQU0sYUFBRyxZQUFILENBQWdCLGlDQUFZLFNBQVosQ0FBaEIsQ0FBdUMsUUFBdkMsRUFBTixDQUFULENBTEYsQ0FNRSxtRUFORixDQU9FLDhEQUFjLGFBQWEsU0FBYixDQUFkLENBUEYsQ0FRRSw4REFSRixDQURGLENBV0UsNERBQ0UscUNBQUssR0FBRyxZQUFILENBQUwsQ0FERixDQUVFLHdDQUFRLFVBQVUsbUJBQVYsQ0FBUixDQUNFLHFDQUFLLFVBQVUsc0JBQVYsQ0FBTCxDQUNFLHdDQUNFLG1DQUFHLEtBQU8sa0JBQUksUUFBSixDQUFWLENBQTJCLGtCQUFJLElBQUosQ0FEN0IsQ0FERixDQURGLENBRkYsQ0FTRSwwQ0FDRSx5Q0FDRSxxQ0FBSyxVQUFVLHVCQUFWLENBQUwsQ0FDRSxxQ0FBSyxVQUFVLHNCQUFWLENBQUwsQ0FDRSxxQ0FBSyxHQUFHLFdBQUgsQ0FBTCxDQUNFLDJEQURGLENBREYsQ0FERixDQURGLENBREYsQ0FVRSxxQ0FBSyxVQUFVLHNCQUFWLENBQUwsQ0FDRSx5Q0FDVixxQ0FBSyxVQUFVLGdCQUFWLENBQTJCLHdCQUNoQyxDQUFFLE9BQVEsOEJBQWEsUUFBYixDQUFzQixRQUFRLE9BQVIsQ0FBZ0Isc0JBQWhCLENBQXRCLENBQVIsQ0FEOEIsQ0FBaEMsQ0FEVSxDQURGLENBVkYsQ0FURixDQTZCRSw0Q0FDRSxxQ0FBSyxVQUFVLHNCQUFWLENBQUwsQ0FDRSx5REFBUyxzQkFBVCxDQURGLENBREYsQ0E3QkYsQ0FYRixDQURGIiwiZmlsZSI6ImRlbW8uaHRtbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb2t1bmlzaGluaXNoaS9Qcm9qZWN0cy9hcGVtYW4tcHJvamVjdHMvYXBlbWFuLXJlYWN0LWNhcHRjaGEvZG9jL2RlbW8iLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHBrZyBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgbGlua3MgZnJvbSAnLi4vbGlua3MuanNvbidcbmltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCB7aGlnaGxpZ2h0SnN4fSBmcm9tICdhcGUtaGlnaGxpZ2h0aW5nJ1xuaW1wb3J0IHN0eWxlc2hlZXRzIGZyb20gJ2FwZW1hbi1hc3NldC1zdHlsZXNoZWV0cydcblxuaW1wb3J0IERlbW8gZnJvbSAnLi9kZW1vLmNvbXBvbmVudC5qcydcbmltcG9ydCBBcENhcHRjaGFTdHlsZSBmcm9tICcuLi8uLi9saWIvYXBfY2FwdGNoYV9zdHlsZSdcbmltcG9ydCB7QXBUaGVtZVN0eWxlfSBmcm9tICdhcGVtYW4tcmVhY3QtdGhlbWUnXG5pbXBvcnQge0FwRmFJY29uU3R5bGUsIEFwU3R5bGUsIEFwSGVhZCwgQXBCb2R5LCBBcExpbmtzLCBBcEh0bWx9IGZyb20gJ2FwZW1hbi1yZWFjdC1iYXNpYydcblxuY29uc3QgRkFWSUNPTl9VUkwgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwZW1hbi1hc3NldC1sYWJvL2FwZW1hbi1hc3NldC1pbWFnZXMvbWFzdGVyL2Rpc3QvZmF2aWNvbi9yZWFjdC1mYXZpY29uLnBuZydcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIDxBcEh0bWwgY2xhc3NOYW1lPVwicmVhY3QtZGVtb1wiPlxuICAgIDxBcEhlYWQgY2hhcnNldD1cIlVURi04XCJcbiAgICAgICAgICAgIHRpdGxlPXsgYCR7IHBrZy5uYW1lIH0gRGVtb2AgfVxuICAgICAgICAgICAgdmVyc2lvbj17IHBrZy52ZXJzaW9uIH1cbiAgICAgICAgICAgIGpzPXsgWyAnZGVtby5leHRlcm5hbC5jYy5qcycsICdkZW1vLmpzJyBdIH1cbiAgICAgICAgICAgIGljb249eyBGQVZJQ09OX1VSTCB9PlxuICAgICAgPEFwU3R5bGUgZGF0YT17ZnMucmVhZEZpbGVTeW5jKHN0eWxlc2hlZXRzLnJlYWN0RGVtbykudG9TdHJpbmcoKX0+PC9BcFN0eWxlPlxuICAgICAgPEFwRmFJY29uU3R5bGU+PC9BcEZhSWNvblN0eWxlPlxuICAgICAgPEFwVGhlbWVTdHlsZSBwcmltYXJ5Q29sb3I9XCIjYjM1NjAwXCI+PC9BcFRoZW1lU3R5bGU+XG4gICAgICA8QXBDYXB0Y2hhU3R5bGU+PC9BcENhcHRjaGFTdHlsZT5cbiAgICA8L0FwSGVhZD5cbiAgICA8QXBCb2R5PlxuICAgICAgPGRpdiBpZD1cImRlbW8tc3R5bGVcIj48L2Rpdj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1kZW1vLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIDxhIGhyZWY9eyBwa2cuaG9tZXBhZ2UgfT57IHBrZy5uYW1lIH08L2E+XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1wbGF5Z3JvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWRlbW8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJkZW1vLXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8RGVtbz48L0RlbW8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWRlbW8tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdj5cbjxwcmUgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1zcmNcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17XG57IF9faHRtbDogaGlnaGxpZ2h0SnN4LmZyb21GaWxlKHJlcXVpcmUucmVzb2x2ZSgnLi9kZW1vLmNvbXBvbmVudC5qc3gnKSkgfVxufT5cbjwvcHJlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1kZW1vLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxBcExpbmtzIGxpbmtzPXsgbGlua3MgfT48L0FwTGlua3M+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9BcEJvZHk+XG4gIDwvQXBIdG1sPlxuKVxuIl19