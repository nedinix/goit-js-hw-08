!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var r,i,u,f,a,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function O(e){return c=e,a=setTimeout(h,t),d?b(e):f}function T(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function h(){var e=p();if(T(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-l);return s?g(n,u-(e-c)):n}(e))}function w(e){return a=void 0,v&&r?b(e):(r=i=void 0,f)}function S(){var e=p(),n=T(e);if(r=arguments,i=this,l=e,n){if(void 0===a)return O(l);if(s)return a=setTimeout(h,t),b(l)}return void 0===a&&(a=setTimeout(h,t)),f}return t=j(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=i=a=void 0},S.flush=function(){return void 0===a?f:w(p())},S}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||a.test(t)?l(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var O,T,h,w,S,x={form:document.querySelector(".feedback-form")},N="feedback-form-state",E=JSON.parse(localStorage.getItem(N)),I=null!=E?E:{};x.form.addEventListener("input",e(t)((function(e){var t=e.target;I[t.name]=t.value,localStorage.setItem(N,JSON.stringify(I))}),500)),x.form.addEventListener("submit",(function(e){e.preventDefault(),console.log("data:",I),e.currentTarget.reset(),localStorage.removeItem(N),I={}})),h=x.form.elements,w=h.email,S=h.message,w.value=null!==(O=I.email)&&void 0!==O?O:"",S.value=null!==(T=I.message)&&void 0!==T?T:""}();
//# sourceMappingURL=03-feedback.c93964fb.js.map
