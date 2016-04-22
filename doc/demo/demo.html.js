'use strict';var _react=require('react');var _react2=_interopRequireDefault(_react);var _package=require('../../package.json');var _package2=_interopRequireDefault(_package);var _links=require('../links.json');var _links2=_interopRequireDefault(_links);var _fs=require('fs');var _fs2=_interopRequireDefault(_fs);var _apeHighlighting=require('ape-highlighting');var _apemanAssetStylesheets=require('apeman-asset-stylesheets');var _apemanAssetStylesheets2=_interopRequireDefault(_apemanAssetStylesheets);var _demoComponent=require('./demo.component.js');var _demoComponent2=_interopRequireDefault(_demoComponent);var _ap_captcha_style=require('../../lib/ap_captcha_style');var _ap_captcha_style2=_interopRequireDefault(_ap_captcha_style);var _apemanReactTheme=require('apeman-react-theme');var _apemanReactBasic=require('apeman-react-basic');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var FAVICON_URL='https://raw.githubusercontent.com/apeman-asset-labo/apeman-asset-images/master/dist/favicon/react-favicon.png';module.exports=_react2.default.createElement(_apemanReactBasic.ApHtml,{className:'react-demo'},_react2.default.createElement(_apemanReactBasic.ApHead,{charset:'UTF-8',title:_package2.default.name+' Demo',version:_package2.default.version,js:['demo.external.cc.js','demo.js'],icon:FAVICON_URL},_react2.default.createElement(_apemanReactBasic.ApStyle,{data:_fs2.default.readFileSync(_apemanAssetStylesheets2.default.reactDemo).toString()}),_react2.default.createElement(_apemanReactBasic.ApFaIconStyle,null),_react2.default.createElement(_apemanReactTheme.ApThemeStyle,{primaryColor:'#b35600'}),_react2.default.createElement(_ap_captcha_style2.default,null)),_react2.default.createElement(_apemanReactBasic.ApBody,null,_react2.default.createElement('div',{id:'demo-style'}),_react2.default.createElement('header',{className:'react-demo-header'},_react2.default.createElement('div',{className:'react-demo-container'},_react2.default.createElement('h1',null,_react2.default.createElement('a',{href:_package2.default.homepage},_package2.default.name)))),_react2.default.createElement('main',null,_react2.default.createElement('div',null,_react2.default.createElement('div',{className:'react-demo-playground'},_react2.default.createElement('div',{className:'react-demo-container'},_react2.default.createElement('div',{id:'demo-wrap'},_react2.default.createElement(_demoComponent2.default,null))))),_react2.default.createElement('div',{className:'react-demo-container'},_react2.default.createElement('div',null,_react2.default.createElement('pre',{className:'react-demo-src',dangerouslySetInnerHTML:{__html:_apeHighlighting.highlightJsx.fromFile(require.resolve('./demo.component.jsx'))}})))),_react2.default.createElement('footer',null,_react2.default.createElement('div',{className:'react-demo-container'},_react2.default.createElement(_apemanReactBasic.ApLinks,{links:_links2.default})))));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8uaHRtbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFFQSx1RUFDQSwwRkFDQSwrRUFDQSwyREFDQSxpREFDQSw2SUFFQSw2R0FDQSw2SEFDQSxvREFDQSxzSUFFQSxJQUFNLFlBQWMsK0dBQWQsQ0FFTixPQUFPLE9BQVAsQ0FDSSx3REFBUSxVQUFVLFlBQVYsQ0FBUixDQUNJLHdEQUFRLFFBQVEsT0FBUixDQUNBLE1BQVksa0JBQUksSUFBSixRQUFaLENBQ0EsUUFBVSxrQkFBSSxPQUFKLENBQ1YsR0FBSyxDQUFFLHFCQUFGLENBQXlCLFNBQXpCLENBQUwsQ0FDQSxLQUFPLFdBQVAsQ0FKUixDQUtJLHlEQUFTLEtBQU0sYUFBRyxZQUFILENBQWdCLGlDQUFZLFNBQVosQ0FBaEIsQ0FBdUMsUUFBdkMsRUFBTixDQUFULENBTEosQ0FNSSxtRUFOSixDQU9JLDhEQUFjLGFBQWEsU0FBYixDQUFkLENBUEosQ0FRSSw4REFSSixDQURKLENBV0ksNERBQ0kscUNBQUssR0FBRyxZQUFILENBQUwsQ0FESixDQUVJLHdDQUFRLFVBQVUsbUJBQVYsQ0FBUixDQUNJLHFDQUFLLFVBQVUsc0JBQVYsQ0FBTCxDQUNJLHdDQUNJLG1DQUFHLEtBQU8sa0JBQUksUUFBSixDQUFWLENBQTJCLGtCQUFJLElBQUosQ0FEL0IsQ0FESixDQURKLENBRkosQ0FTSSwwQ0FDSSx5Q0FDSSxxQ0FBSyxVQUFVLHVCQUFWLENBQUwsQ0FDSSxxQ0FBSyxVQUFVLHNCQUFWLENBQUwsQ0FDSSxxQ0FBSyxHQUFHLFdBQUgsQ0FBTCxDQUNJLDJEQURKLENBREosQ0FESixDQURKLENBREosQ0FVSSxxQ0FBSyxVQUFVLHNCQUFWLENBQUwsQ0FDSSx5Q0FDcEIscUNBQUssVUFBVSxnQkFBVixDQUEyQix3QkFDaEMsQ0FBRSxPQUFRLDhCQUFhLFFBQWIsQ0FBc0IsUUFBUSxPQUFSLENBQWdCLHNCQUFoQixDQUF0QixDQUFSLENBRDhCLENBQWhDLENBRG9CLENBREosQ0FWSixDQVRKLENBNkJJLDRDQUNJLHFDQUFLLFVBQVUsc0JBQVYsQ0FBTCxDQUNJLHlEQUFTLHNCQUFULENBREosQ0FESixDQTdCSixDQVhKLENBREoiLCJmaWxlIjoiZGVtby5odG1sLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaW5pc2hpL1Byb2plY3RzL2FwZW1hbi1wcm9qZWN0cy9hcGVtYW4tcmVhY3QtY2FwdGNoYS9kb2MvZGVtbyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgcGtnIGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcbmltcG9ydCBsaW5rcyBmcm9tICcuLi9saW5rcy5qc29uJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHtoaWdobGlnaHRKc3h9IGZyb20gJ2FwZS1oaWdobGlnaHRpbmcnXG5pbXBvcnQgc3R5bGVzaGVldHMgZnJvbSAnYXBlbWFuLWFzc2V0LXN0eWxlc2hlZXRzJ1xuXG5pbXBvcnQgRGVtbyBmcm9tICcuL2RlbW8uY29tcG9uZW50LmpzJ1xuaW1wb3J0IEFwQ2FwdGNoYVN0eWxlIGZyb20gJy4uLy4uL2xpYi9hcF9jYXB0Y2hhX3N0eWxlJ1xuaW1wb3J0IHtBcFRoZW1lU3R5bGV9IGZyb20gJ2FwZW1hbi1yZWFjdC10aGVtZSdcbmltcG9ydCB7QXBGYUljb25TdHlsZSwgQXBTdHlsZSwgQXBIZWFkLCBBcEJvZHksIEFwTGlua3MsIEFwSHRtbH0gZnJvbSAnYXBlbWFuLXJlYWN0LWJhc2ljJ1xuXG5jb25zdCBGQVZJQ09OX1VSTCA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBlbWFuLWFzc2V0LWxhYm8vYXBlbWFuLWFzc2V0LWltYWdlcy9tYXN0ZXIvZGlzdC9mYXZpY29uL3JlYWN0LWZhdmljb24ucG5nJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgICA8QXBIdG1sIGNsYXNzTmFtZT1cInJlYWN0LWRlbW9cIj5cbiAgICAgICAgPEFwSGVhZCBjaGFyc2V0PVwiVVRGLThcIlxuICAgICAgICAgICAgICAgIHRpdGxlPXsgYCR7IHBrZy5uYW1lIH0gRGVtb2AgfVxuICAgICAgICAgICAgICAgIHZlcnNpb249eyBwa2cudmVyc2lvbiB9XG4gICAgICAgICAgICAgICAganM9eyBbICdkZW1vLmV4dGVybmFsLmNjLmpzJywgJ2RlbW8uanMnIF0gfVxuICAgICAgICAgICAgICAgIGljb249eyBGQVZJQ09OX1VSTCB9PlxuICAgICAgICAgICAgPEFwU3R5bGUgZGF0YT17ZnMucmVhZEZpbGVTeW5jKHN0eWxlc2hlZXRzLnJlYWN0RGVtbykudG9TdHJpbmcoKX0+PC9BcFN0eWxlPlxuICAgICAgICAgICAgPEFwRmFJY29uU3R5bGU+PC9BcEZhSWNvblN0eWxlPlxuICAgICAgICAgICAgPEFwVGhlbWVTdHlsZSBwcmltYXJ5Q29sb3I9XCIjYjM1NjAwXCI+PC9BcFRoZW1lU3R5bGU+XG4gICAgICAgICAgICA8QXBDYXB0Y2hhU3R5bGU+PC9BcENhcHRjaGFTdHlsZT5cbiAgICAgICAgPC9BcEhlYWQ+XG4gICAgICAgIDxBcEJvZHk+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZGVtby1zdHlsZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJyZWFjdC1kZW1vLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IHBrZy5ob21lcGFnZSB9PnsgcGtnLm5hbWUgfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1kZW1vLXBsYXlncm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZGVtby13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZW1vPjwvRGVtbz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWRlbW8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG48cHJlIGNsYXNzTmFtZT1cInJlYWN0LWRlbW8tc3JjXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e1xueyBfX2h0bWw6IGhpZ2hsaWdodEpzeC5mcm9tRmlsZShyZXF1aXJlLnJlc29sdmUoJy4vZGVtby5jb21wb25lbnQuanN4JykpIH1cbn0+XG48L3ByZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1kZW1vLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8QXBMaW5rcyBsaW5rcz17IGxpbmtzIH0+PC9BcExpbmtzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvQXBCb2R5PlxuICAgIDwvQXBIdG1sPlxuKVxuIl19