/**
 * apeman react package for captcha component.
 * @module apeman-react-captcha
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get ApCaptchaStyle () { return d(require('./ap_captcha_style')) },
  get ApCaptchaSvg () { return d(require('./ap_captcha_svg')) },
  get ApCaptcha () { return d(require('./ap_captcha')) }
}
