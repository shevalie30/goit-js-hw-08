!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),m=Object.prototype.toString,d=Math.max,p=Math.min,g=function(){return s.Date.now()};function v(e,t,n){var r,o,u,a,f,c,l=0,s=!1,m=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function S(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function F(e){return l=e,f=setTimeout(O,t),s?S(e):a}function j(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-l>=u}function O(){var e=g();if(j(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-c);return m?p(n,u-(e-l)):n}(e))}function T(e){return f=void 0,v&&r?S(e):(r=o=void 0,a)}function h(){var e=g(),n=j(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return F(c);if(m)return f=setTimeout(O,t),S(c)}return void 0===f&&(f=setTimeout(O,t)),a}return t=b(t)||0,y(n)&&(s=!!n.leading,u=(m="maxWait"in n)?d(b(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},h.flush=function(){return void 0===f?a:T(g())},h}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=u.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const S="feedback-form-state",F={},j={inputFormFeedback:document.querySelector(".feedback-form"),inputFormEmail:document.querySelector('[type="email"]'),inputFormMessage:document.querySelector('[name="message"]'),inputFormSubmitBtn:document.querySelector('[type="submit"]')};!function(){const e=JSON.parse(localStorage.getItem(S));e&&(j.inputFormEmail.value=e.email||"",j.inputFormMessage.value=e.message||"")}(),j.inputFormFeedback.addEventListener("input",e(t)((function(e){F[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify(F))}),500)),j.inputFormFeedback.addEventListener("submit",(function(e){console.log(JSON.parse(localStorage.getItem(S))),e.preventDefault(),e.currentTarget.reset()}))}();
//# sourceMappingURL=03-feedback.00d408bb.js.map