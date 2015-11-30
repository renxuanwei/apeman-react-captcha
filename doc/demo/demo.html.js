"use strict";

const React = require('react'),
      pkg = require('../../package.json'),
      links = require('../links.json'),
      fs = require('fs'),
      apeHighlighting = require('ape-highlighting'),
      highlightJsx = apeHighlighting.highlightJsx,
      stylesheets = require('apeman-asset-stylesheets');

const Demo = require('./demo.component.js'),
      ApCaptchaStyle = require('../../lib/ap_captcha_style'),
      ApThemeStyle = require('apeman-react-theme')['ApThemeStyle'],
      basic = require('apeman-react-basic'),
      ApFaIconStyle = basic.ApFaIconStyle,
      ApStyle = basic.ApStyle,
      ApHead = basic.ApHead,
      ApBody = basic.ApBody,
      ApLinks = basic.ApLinks,
      ApHtml = basic.ApHtml;

const FAVICON_URL = "https://raw.githubusercontent.com/apeman-asset-labo/apeman-asset-images/master/dist/favicon/react-favicon.png";

module.exports = React.createElement(
    ApHtml,
    { className: 'react-demo' },
    React.createElement(
        ApHead,
        { charset: 'UTF-8',
            title: pkg.name + ' Demo',
            version: pkg.version,
            icon: FAVICON_URL },
        React.createElement(ApStyle, { data: fs.readFileSync(stylesheets.reactDemo).toString() }),
        React.createElement(ApFaIconStyle, null),
        React.createElement(ApThemeStyle, { primaryColor: '#b35600' }),
        React.createElement(ApCaptchaStyle, null)
    ),
    React.createElement(
        ApBody,
        null,
        React.createElement('div', { id: 'demo-style' }),
        React.createElement(
            'header',
            { className: 'react-demo-header' },
            React.createElement(
                'div',
                { className: 'react-demo-container' },
                React.createElement(
                    'h1',
                    null,
                    React.createElement(
                        'a',
                        { href: pkg.homepage },
                        pkg.name
                    )
                )
            )
        ),
        React.createElement(
            'main',
            null,
            React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'react-demo-playground' },
                    React.createElement(
                        'div',
                        { className: 'react-demo-container' },
                        React.createElement(
                            'div',
                            { id: 'demo-wrap' },
                            React.createElement(Demo, null)
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'react-demo-container' },
                React.createElement(
                    'div',
                    null,
                    React.createElement('pre', { className: 'react-demo-src', dangerouslySetInnerHTML: { __html: highlightJsx.fromFile(require.resolve('./demo.component.jsx')) } })
                )
            )
        ),
        React.createElement(
            'footer',
            null,
            React.createElement(
                'div',
                { className: 'react-demo-container' },
                React.createElement(ApLinks, { links: links })
            )
        ),
        React.createElement('script', { src: './demo.js' })
    )
);
//# sourceMappingURL=data:application/json;base64,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QVU7S0FDeEI7Q0FDSixBQUNaLENBQUMiLCJmaWxlIjoiZGVtby5odG1sLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaXRha2EvcHJvamVjdHMvYXBlbWFuLXJlYWN0LWxhYm8vYXBlbWFuLXJlYWN0LWNhcHRjaGEvZG9jL2RlbW8iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIHBrZyA9IHJlcXVpcmUoJy4uLy4uL3BhY2thZ2UuanNvbicpLFxuICAgIGxpbmtzID0gcmVxdWlyZSgnLi4vbGlua3MuanNvbicpLFxuICAgIGZzID0gcmVxdWlyZSgnZnMnKSxcbiAgICBhcGVIaWdobGlnaHRpbmcgPSByZXF1aXJlKCdhcGUtaGlnaGxpZ2h0aW5nJyksXG4gICAgaGlnaGxpZ2h0SnN4ID0gYXBlSGlnaGxpZ2h0aW5nLmhpZ2hsaWdodEpzeCxcbiAgICBzdHlsZXNoZWV0cyA9IHJlcXVpcmUoJ2FwZW1hbi1hc3NldC1zdHlsZXNoZWV0cycpO1xuXG5jb25zdCBEZW1vID0gcmVxdWlyZSgnLi9kZW1vLmNvbXBvbmVudC5qcycpLFxuICAgIEFwQ2FwdGNoYVN0eWxlID0gcmVxdWlyZSgnLi4vLi4vbGliL2FwX2NhcHRjaGFfc3R5bGUnKSxcbiAgICBBcFRoZW1lU3R5bGUgPSByZXF1aXJlKCdhcGVtYW4tcmVhY3QtdGhlbWUnKVsnQXBUaGVtZVN0eWxlJ10sXG4gICAgYmFzaWMgPSByZXF1aXJlKCdhcGVtYW4tcmVhY3QtYmFzaWMnKSxcbiAgICBBcEZhSWNvblN0eWxlID0gYmFzaWMuQXBGYUljb25TdHlsZSxcbiAgICBBcFN0eWxlID0gYmFzaWMuQXBTdHlsZSxcbiAgICBBcEhlYWQgPSBiYXNpYy5BcEhlYWQsXG4gICAgQXBCb2R5ID0gYmFzaWMuQXBCb2R5LFxuICAgIEFwTGlua3MgPSBiYXNpYy5BcExpbmtzLFxuICAgIEFwSHRtbCA9IGJhc2ljLkFwSHRtbDtcblxuY29uc3QgRkFWSUNPTl9VUkwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcGVtYW4tYXNzZXQtbGFiby9hcGVtYW4tYXNzZXQtaW1hZ2VzL21hc3Rlci9kaXN0L2Zhdmljb24vcmVhY3QtZmF2aWNvbi5wbmdcIjtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gICAgPEFwSHRtbCBjbGFzc05hbWU9XCJyZWFjdC1kZW1vXCI+XG4gICAgICAgIDxBcEhlYWQgY2hhcnNldD1cIlVURi04XCJcbiAgICAgICAgICAgICAgICB0aXRsZT17cGtnLm5hbWUgKyAnIERlbW8nfVxuICAgICAgICAgICAgICAgIHZlcnNpb249e3BrZy52ZXJzaW9ufVxuICAgICAgICAgICAgICAgIGljb249e0ZBVklDT05fVVJMfT5cbiAgICAgICAgICAgIDxBcFN0eWxlIGRhdGE9e2ZzLnJlYWRGaWxlU3luYyhzdHlsZXNoZWV0cy5yZWFjdERlbW8pLnRvU3RyaW5nKCl9PjwvQXBTdHlsZT5cbiAgICAgICAgICAgIDxBcEZhSWNvblN0eWxlPjwvQXBGYUljb25TdHlsZT5cbiAgICAgICAgICAgIDxBcFRoZW1lU3R5bGUgcHJpbWFyeUNvbG9yPVwiI2IzNTYwMFwiPjwvQXBUaGVtZVN0eWxlPlxuICAgICAgICAgICAgPEFwQ2FwdGNoYVN0eWxlPjwvQXBDYXB0Y2hhU3R5bGU+XG4gICAgICAgIDwvQXBIZWFkPlxuICAgICAgICA8QXBCb2R5PlxuICAgICAgICA8ZGl2IGlkPVwiZGVtby1zdHlsZVwiPjwvZGl2PlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInJlYWN0LWRlbW8taGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWRlbW8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwa2cuaG9tZXBhZ2V9Pntwa2cubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1wbGF5Z3JvdW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJkZW1vLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVtbz48L0RlbW8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuPHByZSBjbGFzc05hbWU9XCJyZWFjdC1kZW1vLXNyY1wiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtcbntfX2h0bWw6aGlnaGxpZ2h0SnN4LmZyb21GaWxlKHJlcXVpcmUucmVzb2x2ZSgnLi9kZW1vLmNvbXBvbmVudC5qc3gnKSl9XG59PlxuPC9wcmU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWRlbW8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPEFwTGlua3MgbGlua3M9e2xpbmtzfT48L0FwTGlua3M+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi9kZW1vLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDwvQXBCb2R5PlxuICAgIDwvQXBIdG1sPlxuKTtcbiJdfQ==