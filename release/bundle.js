
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
  'use strict';

  var n,l$1,u$1,i$1,o$1,r$1,f$1,e$1,c$1,s$1,a$1,h$1={},p$1=[],v$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y$1=Array.isArray;function d$1(n,l){for(var u in l)n[u]=l[u];return n}function w$2(n){var l=n.parentNode;l&&l.removeChild(n);}function _$1(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return g$2(l,f,i,o,null)}function g$2(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u$1:r,__i:-1,__u:0};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function m$1(){return {current:null}}function k$2(n){return n.children}function b$1(n,l){this.props=n,this.context=l;}function x$2(n,l){if(null==l)return n.__?x$2(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?x$2(n):null}function C$2(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C$2(n)}}function M$1(n){(!n.__d&&(n.__d=!0)&&i$1.push(n)&&!P$2.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||r$1)(P$2);}function P$2(){var n,u,t,o,r,e,c,s;for(i$1.sort(f$1);n=i$1.shift();)n.__d&&(u=i$1.length,o=void 0,e=(r=(t=n).__v).__e,c=[],s=[],t.__P&&((o=d$1({},r)).__v=r.__v+1,l$1.vnode&&l$1.vnode(o),O$1(t.__P,o,r,t.__n,t.__P.namespaceURI,32&r.__u?[e]:null,c,null==e?x$2(r):e,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,j$2(c,o,s),o.__e!=e&&C$2(o)),i$1.length>u&&i$1.sort(f$1));P$2.__r=0;}function S(n,l,u,t,i,o,r,f,e,c,s){var a,v,y,d,w,_=t&&t.__k||p$1,g=l.length;for(u.__d=e,$$1(u,l,_),e=u.__d,a=0;a<g;a++)null!=(y=u.__k[a])&&"boolean"!=typeof y&&"function"!=typeof y&&(v=-1===y.__i?h$1:_[y.__i]||h$1,y.__i=a,O$1(n,y,v,i,o,r,f,e,c,s),d=y.__e,y.ref&&v.ref!=y.ref&&(v.ref&&N$1(v.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),65536&y.__u||v.__k===y.__k?(e&&!e.isConnected&&(e=x$2(v)),e=I$1(y,e,n)):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=w;}function $$1(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)r=t+a,null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?g$2(null,i,null,null,null):y$1(i)?g$2(k$2,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?g$2(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=L$1(i,u,r,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f===r+1?a++:f>r?s>e-r?a+=f-r:a--:f<r?f==r-1&&(a=f-r):a=0,f!==t+a&&(i.__u|=65536))):(o=u[r])&&null==o.key&&o.__e&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x$2(o)),V$2(o,o,!1),u[r]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x$2(o)),V$2(o,o));}function I$1(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=I$1(t[i],l,u));return l}n.__e!=l&&(u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8===l.nodeType);return l}function H$1(n,l){return l=l||[],null==n||"boolean"==typeof n||(y$1(n)?n.some(function(n){H$1(n,l);}):l.push(n)),l}function L$1(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++;}}return -1}function T$2(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||v$1.test(l)?u:u+"px";}function A$2(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T$2(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T$2(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=e$1,n.addEventListener(l,o?s$1:c$1,o)):n.removeEventListener(l,o?s$1:c$1,o);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u));}}function F$2(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=e$1++;else if(u.t<t.u)return;return t(l$1.event?l$1.event(u):u)}}}function O$1(n,u,t,i,o,r,f,e,c,s){var a,h,p,v,w,_,g,m,x,C,M,P,$,I,H,L=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l$1.__b)&&a(u);n:if("function"==typeof L)try{if(m=u.props,x=(a=L.contextType)&&i[a.__c],C=a?x?x.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:("prototype"in L&&L.prototype.render?u.__c=h=new L(m,C):(u.__c=h=new b$1(m,C),h.constructor=L,h.render=q$2),x&&x.sub(h),h.props=m,h.state||(h.state={}),h.context=C,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),null==h.__s&&(h.__s=h.state),null!=L.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d$1({},h.__s)),d$1(h.__s,L.getDerivedStateFromProps(m,h.__s))),v=h.props,w=h.state,h.__v=u,p)null==L.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==L.getDerivedStateFromProps&&m!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,C),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,C)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=m,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),M=0;M<h._sb.length;M++)h.__h.push(h._sb[M]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,C),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,w,_);});}if(h.context=C,h.props=m,h.__P=n,h.__e=!1,P=l$1.__r,$=0,"prototype"in L&&L.prototype.render){for(h.state=h.__s,h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),I=0;I<h._sb.length;I++)h.__h.push(h._sb[I]);h._sb=[];}else do{h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++$<25);h.state=h.__s,null!=h.getChildContext&&(i=d$1(d$1({},i),h.getChildContext())),p||null==h.getSnapshotBeforeUpdate||(_=h.getSnapshotBeforeUpdate(v,w)),S(n,y$1(H=null!=a&&a.type===k$2&&null==a.key?a.props.children:a)?H:[H],u,t,i,o,r,f,e,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&f.push(h),g&&(h.__E=h.__=null);}catch(n){u.__v=null,c||null!=r?(u.__e=e,u.__u|=c?160:32,r[r.indexOf(e)]=null):(u.__e=t.__e,u.__k=t.__k),l$1.__e(n,u,t);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z$2(t.__e,u,t,i,o,r,f,c,s);(a=l$1.diffed)&&a(u);}function j$2(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)N$1(t[i],t[++i],t[++i]);l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function z$2(l,u,t,i,o,r,f,e,c){var s,a,p,v,d,_,g,m=t.props,k=u.props,b=u.type;if("svg"===b?o="http://www.w3.org/2000/svg":"math"===b?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=r)for(s=0;s<r.length;s++)if((d=r[s])&&"setAttribute"in d==!!b&&(b?d.localName===b:3===d.nodeType)){l=d,r[s]=null;break}if(null==l){if(null===b)return document.createTextNode(k);l=document.createElementNS(o,b,k.is&&k),r=null,e=!1;}if(null===b)m===k||e&&l.data===k||(l.data=k);else {if(r=r&&n.call(l.childNodes),m=t.props||h$1,!e&&null!=r)for(m={},s=0;s<l.attributes.length;s++)m[(d=l.attributes[s]).name]=d.value;for(s in m)if(d=m[s],"children"==s);else if("dangerouslySetInnerHTML"==s)p=d;else if("key"!==s&&!(s in k)){if("value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k)continue;A$2(l,s,null,d,o);}for(s in k)d=k[s],"children"==s?v=d:"dangerouslySetInnerHTML"==s?a=d:"value"==s?_=d:"checked"==s?g=d:"key"===s||e&&"function"!=typeof d||m[s]===d||A$2(l,s,d,m[s],o);if(a)e||p&&(a.__html===p.__html||a.__html===l.innerHTML)||(l.innerHTML=a.__html),u.__k=[];else if(p&&(l.innerHTML=""),S(l,y$1(v)?v:[v],u,t,i,"foreignObject"===b?"http://www.w3.org/1999/xhtml":o,r,f,r?r[0]:t.__k&&x$2(t,0),e,c),null!=r)for(s=r.length;s--;)null!=r[s]&&w$2(r[s]);e||(s="value",void 0!==_&&(_!==l[s]||"progress"===b&&!_||"option"===b&&_!==m[s])&&A$2(l,s,_,m[s],o),s="checked",void 0!==g&&g!==l[s]&&A$2(l,s,g,m[s],o));}return l}function N$1(n,u,t){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,t);}}function V$2(n,u,t){var i,o;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N$1(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,u);}i.base=i.__P=null;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&V$2(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||w$2(n.__e),n.__c=n.__=n.__e=n.__d=void 0;}function q$2(n,l,u){return this.constructor(n,u)}function B$2(u,t,i){var o,r,f,e;l$1.__&&l$1.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],O$1(t,u=(!o&&i||t).__k=_$1(k$2,null,[u]),r||h$1,h$1,t.namespaceURI,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),j$2(f,u,e);}function D$2(n,l){B$2(n,l,D$2);}function E$1(l,u,t){var i,o,r,f,e=d$1({},l.props);for(r in l.type&&l.type.defaultProps&&(f=l.type.defaultProps),u)"key"==r?i=u[r]:"ref"==r?o=u[r]:e[r]=void 0===u[r]&&void 0!==f?f[r]:u[r];return arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):t),g$2(l.type,e,i||l.key,o||l.ref,null)}function G$1(n,l){var u={__c:l="__cC"+a$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=[],(t={})[l]=this,this.getChildContext=function(){return t},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,M$1(n);});},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=p$1.slice,l$1={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$1=0,b$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d$1({},this.state),"function"==typeof n&&(n=n(d$1({},u),this.props)),n&&d$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M$1(this));},b$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M$1(this));},b$1.prototype.render=k$2,i$1=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$1=function(n,l){return n.__v.__b-l.__v.__b},P$2.__r=0,e$1=0,c$1=F$2(!1),s$1=F$2(!0),a$1=0;

  var style = {"title":"style-module_title__B9VMB"};

  var t,r,u,i,o=0,f=[],c=[],e=l$1,a=e.__b,v=e.__r,l=e.diffed,m=e.__c,s=e.unmount,d=e.__;function h(n,t){e.__h&&e.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({__V:c}),u.__[n]}function p(n){return o=1,y(D$1,n)}function y(n,u,i){var o=h(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):D$1(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function _(n,u){var i=h(t++,3);!e.__s&&C$1(i.__H,u)&&(i.__=n,i.i=u,r.__H.__h.push(i));}function A$1(n,u){var i=h(t++,4);!e.__s&&C$1(i.__H,u)&&(i.__=n,i.i=u,r.__h.push(i));}function F$1(n){return o=5,q$1(function(){return {current:n}},[])}function T$1(n,t,r){o=6,A$1(function(){return "function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n));}function q$1(n,r){var u=h(t++,7);return C$1(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function x$1(n,t){return o=8,q$1(function(){return n},t)}function P$1(n){var u=r.context[n.__c],i=h(t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r)),u.props.value):n.__}function V$1(n,t){e.useDebugValue&&e.useDebugValue(t?t(n):n);}function b(n){var u=h(t++,10),i=p();return u.__=n,r.componentDidCatch||(r.componentDidCatch=function(n,t){u.__&&u.__(n,t),i[1](n);}),[i[0],function(){i[1](void 0);}]}function g$1(){var n=h(t++,11);if(!n.__){for(var u=r.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++;}return n.__}function j$1(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z$1),n.__H.__h.forEach(B$1),n.__H.__h=[];}catch(t){n.__H.__h=[],e.__e(t,n.__v);}}e.__b=function(n){r=null,a&&a(n);},e.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),d&&d(n,t);},e.__r=function(n){v&&v(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0;})):(i.__h.forEach(z$1),i.__h.forEach(B$1),i.__h=[],t=0)),u=r;},e.diffed=function(n){l&&l(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===e.requestAnimationFrame||((i=e.requestAnimationFrame)||w$1)(j$1)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c;})),u=r=null;},e.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z$1),n.__h=n.__h.filter(function(n){return !n.__||B$1(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],e.__e(r,n.__v);}}),m&&m(n,t);},e.unmount=function(n){s&&s(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z$1(n);}catch(n){t=n;}}),r.__H=void 0,t&&e.__e(t,r.__v));};var k$1="function"==typeof requestAnimationFrame;function w$1(n){var t,r=function(){clearTimeout(u),k$1&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);k$1&&(t=requestAnimationFrame(r));}function z$1(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function B$1(n){var t=r;n.__c=n.__(),r=t;}function C$1(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D$1(n,t){return "function"==typeof t?t(n):t}

  function g(n,t){for(var e in t)n[e]=t[e];return n}function E(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function C(n,t){this.props=n,this.context=t;}function x(n,e){function r(n){var t=this.props.ref,r=t==n.ref;return !r&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!r:E(this.props,n)}function u(e){return this.shouldComponentUpdate=r,_$1(n,e)}return u.displayName="Memo("+(n.displayName||n.name)+")",u.prototype.isReactComponent=!0,u.__f=!0,u}(C.prototype=new b$1).isPureReactComponent=!0,C.prototype.shouldComponentUpdate=function(n,t){return E(this.props,n)||E(this.state,t)};var R=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),R&&R(n);};var w="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function k(n){function t(t){var e=g({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=w,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var I=function(n,t){return null==n?null:H$1(H$1(n).map(t))},N={map:I,forEach:I,count:function(n){return n?H$1(n).length:0},only:function(n){var t=H$1(n);if(1!==t.length)throw "Children.only";return t[0]},toArray:H$1},M=l$1.__e;l$1.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);M(n,t,e,r);};var T=l$1.unmount;function A(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),n.__c.__H=null),null!=(n=g({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return A(n,t,e)})),n}function D(n,t,e){return n&&e&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return D(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=e)),n}function L(){this.__u=0,this.t=null,this.__b=null;}function O(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function F(n){var e,r,u;function o(o){if(e||(e=n()).then(function(n){r=n.default||n;},function(n){u=n;}),u)throw u;if(!r)throw e;return _$1(r,o)}return o.displayName="Lazy",o.__f=!0,o}function U(){this.u=null,this.o=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&32&n.__u&&(n.type=null),T&&T(n);},(L.prototype=new b$1).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=O(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=D(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate();}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i);},L.prototype.componentWillUnmount=function(){this.t=[];},L.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=A(this.__b,r,o.__O=o.__P);}this.__b=null;}var i=e.__a&&_$1(k$2,null,n.fallback);return i&&(i.__u&=-33),[_$1(k$2,null,e.__a?null:n.children),i]};var V=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};function W(n){return this.getChildContext=function(){return n.context},n.children}function P(n){var e=this,r=n.i;e.componentWillUnmount=function(){B$2(null,e.l),e.l=null,e.i=null;},e.i&&e.i!==r&&e.componentWillUnmount(),e.l||(e.i=r,e.l={nodeType:1,parentNode:r,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n);},insertBefore:function(n,t){this.childNodes.push(n),e.i.appendChild(n);},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n);}}),B$2(_$1(W,{context:e.context},n.__v),e.l);}function j(n,e){var r=_$1(P,{__v:n,i:e});return r.containerInfo=e,r}(U.prototype=new b$1).__a=function(n){var t=this,e=O(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),V(t,n,r)):u();};e?e(o):o();}},U.prototype.render=function(n){this.u=null,this.o=new Map;var t=H$1(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},U.prototype.componentDidUpdate=U.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){V(n,e,t);});};var z="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,B=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,H=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Z=/[A-Z0-9]/g,Y="undefined"!=typeof document,$=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};function q(n,t,e){return null==t.__k&&(t.textContent=""),B$2(n,t),"function"==typeof e&&e(),n?n.__c:null}function G(n,t,e){return D$2(n,t),"function"==typeof e&&e(),n?n.__c:null}b$1.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(b$1.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n});}});});var J=l$1.event;function K(){}function Q(){return this.cancelBubble}function X(){return this.defaultPrevented}l$1.event=function(n){return J&&(n=J(n)),n.persist=K,n.isPropagationStopped=Q,n.isDefaultPrevented=X,n.nativeEvent=n};var nn,tn={enumerable:!1,configurable:!0,get:function(){return this.class}},en=l$1.vnode;l$1.vnode=function(n){"string"==typeof n.type&&function(n){var t=n.props,e=n.type,u={};for(var o in t){var i=t[o];if(!("value"===o&&"defaultValue"in t&&null==i||Y&&"children"===o&&"noscript"===e||"class"===o||"className"===o)){var l=o.toLowerCase();"defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===i?i="":"translate"===l&&"no"===i?i=!1:"ondoubleclick"===l?o="ondblclick":"onchange"!==l||"input"!==e&&"textarea"!==e||$(t.type)?"onfocus"===l?o="onfocusin":"onblur"===l?o="onfocusout":H.test(o)?o=l:-1===e.indexOf("-")&&B.test(o)?o=o.replace(Z,"-$&").toLowerCase():null===i&&(i=void 0):l=o="oninput","oninput"===l&&u[o=l]&&(o="oninputCapture"),u[o]=i;}}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=H$1(t.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value);})),"select"==e&&null!=u.defaultValue&&(u.value=H$1(t.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value;})),t.class&&!t.className?(u.class=t.class,Object.defineProperty(u,"className",tn)):(t.className&&!t.class||t.class&&t.className)&&(u.class=u.className=t.className),n.props=u;}(n),n.$$typeof=z,en&&en(n);};var rn=l$1.__r;l$1.__r=function(n){rn&&rn(n),nn=n.__c;};var un=l$1.diffed;l$1.diffed=function(n){un&&un(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value),nn=null;};var on={ReactCurrentDispatcher:{current:{readContext:function(n){return nn.__n[n.__c].props.value},useCallback:x$1,useContext:P$1,useDebugValue:V$1,useDeferredValue:bn,useEffect:_,useId:g$1,useImperativeHandle:T$1,useInsertionEffect:gn,useLayoutEffect:A$1,useMemo:q$1,useReducer:y,useRef:F$1,useState:p,useSyncExternalStore:Cn,useTransition:Sn}}},ln="17.0.2";function cn(n){return _$1.bind(null,n)}function fn(n){return !!n&&n.$$typeof===z}function an(n){return fn(n)&&n.type===k$2}function sn(n){return !!n&&!!n.displayName&&("string"==typeof n.displayName||n.displayName instanceof String)&&n.displayName.startsWith("Memo(")}function hn(n){return fn(n)?E$1.apply(null,arguments):n}function vn(n){return !!n.__k&&(B$2(null,n),!0)}function dn(n){return n&&(n.base||1===n.nodeType&&n)||null}var pn=function(n,t){return n(t)},mn=function(n,t){return n(t)},yn=k$2;function _n(n){n();}function bn(n){return n}function Sn(){return [!1,_n]}var gn=A$1,En=fn;function Cn(n,t){var e=t(),r=p({h:{__:e,v:t}}),u=r[0].h,o=r[1];return A$1(function(){u.__=e,u.v=t,xn(u)&&o({h:u});},[n,e,t]),_(function(){return xn(u)&&o({h:u}),n(function(){xn(u)&&o({h:u});})},[n]),e}function xn(n){var t,e,r=n.v,u=n.__;try{var o=r();return !((t=u)===(e=o)&&(0!==t||1/t==1/e)||t!=t&&e!=e)}catch(n){return !0}}var Rn={useState:p,useId:g$1,useReducer:y,useEffect:_,useLayoutEffect:A$1,useInsertionEffect:gn,useTransition:Sn,useDeferredValue:bn,useSyncExternalStore:Cn,startTransition:_n,useRef:F$1,useImperativeHandle:T$1,useMemo:q$1,useCallback:x$1,useContext:P$1,useDebugValue:V$1,version:"17.0.2",Children:N,render:q,hydrate:G,unmountComponentAtNode:vn,createPortal:j,createElement:_$1,createContext:G$1,createFactory:cn,cloneElement:hn,createRef:m$1,Fragment:k$2,isValidElement:fn,isElement:En,isFragment:an,isMemo:sn,findDOMNode:dn,Component:b$1,PureComponent:C,memo:x,forwardRef:k,flushSync:mn,unstable_batchedUpdates:pn,StrictMode:yn,Suspense:L,SuspenseList:U,lazy:F,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:on};

  var ReactOriginal = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Children: N,
    Component: b$1,
    Fragment: k$2,
    PureComponent: C,
    StrictMode: yn,
    Suspense: L,
    SuspenseList: U,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: on,
    cloneElement: hn,
    createContext: G$1,
    createElement: _$1,
    createFactory: cn,
    createPortal: j,
    createRef: m$1,
    default: Rn,
    findDOMNode: dn,
    flushSync: mn,
    forwardRef: k,
    hydrate: G,
    isElement: En,
    isFragment: an,
    isMemo: sn,
    isValidElement: fn,
    lazy: F,
    memo: x,
    render: q,
    startTransition: _n,
    unmountComponentAtNode: vn,
    unstable_batchedUpdates: pn,
    useCallback: x$1,
    useContext: P$1,
    useDebugValue: V$1,
    useDeferredValue: bn,
    useEffect: _,
    useErrorBoundary: b,
    useId: g$1,
    useImperativeHandle: T$1,
    useInsertionEffect: gn,
    useLayoutEffect: A$1,
    useMemo: q$1,
    useReducer: y,
    useRef: F$1,
    useState: p,
    useSyncExternalStore: Cn,
    useTransition: Sn,
    version: ln
  });

  function getAugmentedNamespace(n) {
    if (n.__esModule) return n;
    var f = n.default;
  	if (typeof f == "function") {
  		var a = function a () {
  			if (this instanceof a) {
          return Reflect.construct(f, arguments, this.constructor);
  			}
  			return f.apply(this, arguments);
  		};
  		a.prototype = f.prototype;
    } else a = {};
    Object.defineProperty(a, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  var withSelector = {exports: {}};

  var useSyncExternalStoreWithSelector_production_min = {};

  var require$$0 = /*@__PURE__*/getAugmentedNamespace(ReactOriginal);

  /**
   * @license React
   * use-sync-external-store-with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var hasRequiredUseSyncExternalStoreWithSelector_production_min;

  function requireUseSyncExternalStoreWithSelector_production_min () {
  	if (hasRequiredUseSyncExternalStoreWithSelector_production_min) return useSyncExternalStoreWithSelector_production_min;
  	hasRequiredUseSyncExternalStoreWithSelector_production_min = 1;
  var g=require$$0;function n(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var p="function"===typeof Object.is?Object.is:n,q=g.useSyncExternalStore,r=g.useRef,t=g.useEffect,u=g.useMemo,v=g.useDebugValue;
  	useSyncExternalStoreWithSelector_production_min.useSyncExternalStoreWithSelector=function(a,b,e,l,h){var c=r(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f;}else f=c.current;c=u(function(){function a(a){if(!c){c=!0;d=a;a=l(a);if(void 0!==h&&f.hasValue){var b=f.value;if(h(b,a))return k=b}return k=a}b=k;if(p(d,a))return b;var e=l(a);if(void 0!==h&&h(b,e))return b;d=a;return k=e}var c=!1,d,k,m=void 0===e?null:e;return [function(){return a(b())},null===m?void 0:function(){return a(m())}]},[b,e,l,h]);var d=q(a,c[0],c[1]);
  	t(function(){f.hasValue=!0;f.value=d;},[d]);v(d);return d};
  	return useSyncExternalStoreWithSelector_production_min;
  }

  var useSyncExternalStoreWithSelector_development = {};

  /**
   * @license React
   * use-sync-external-store-with-selector.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var hasRequiredUseSyncExternalStoreWithSelector_development;

  function requireUseSyncExternalStoreWithSelector_development () {
  	if (hasRequiredUseSyncExternalStoreWithSelector_development) return useSyncExternalStoreWithSelector_development;
  	hasRequiredUseSyncExternalStoreWithSelector_development = 1;

  	if (process.env.NODE_ENV !== "production") {
  	  (function() {

  	/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  	if (
  	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
  	    'function'
  	) {
  	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
  	}
  	          var React = require$$0;

  	/**
  	 * inlined Object.is polyfill to avoid requiring consumers ship their own
  	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
  	 */
  	function is(x, y) {
  	  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  	  ;
  	}

  	var objectIs = typeof Object.is === 'function' ? Object.is : is;

  	var useSyncExternalStore = React.useSyncExternalStore;

  	// for CommonJS interop.

  	var useRef = React.useRef,
  	    useEffect = React.useEffect,
  	    useMemo = React.useMemo,
  	    useDebugValue = React.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.

  	function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
  	  // Use this to track the rendered snapshot.
  	  var instRef = useRef(null);
  	  var inst;

  	  if (instRef.current === null) {
  	    inst = {
  	      hasValue: false,
  	      value: null
  	    };
  	    instRef.current = inst;
  	  } else {
  	    inst = instRef.current;
  	  }

  	  var _useMemo = useMemo(function () {
  	    // Track the memoized state using closure variables that are local to this
  	    // memoized instance of a getSnapshot function. Intentionally not using a
  	    // useRef hook, because that state would be shared across all concurrent
  	    // copies of the hook/component.
  	    var hasMemo = false;
  	    var memoizedSnapshot;
  	    var memoizedSelection;

  	    var memoizedSelector = function (nextSnapshot) {
  	      if (!hasMemo) {
  	        // The first time the hook is called, there is no memoized result.
  	        hasMemo = true;
  	        memoizedSnapshot = nextSnapshot;

  	        var _nextSelection = selector(nextSnapshot);

  	        if (isEqual !== undefined) {
  	          // Even if the selector has changed, the currently rendered selection
  	          // may be equal to the new selection. We should attempt to reuse the
  	          // current value if possible, to preserve downstream memoizations.
  	          if (inst.hasValue) {
  	            var currentSelection = inst.value;

  	            if (isEqual(currentSelection, _nextSelection)) {
  	              memoizedSelection = currentSelection;
  	              return currentSelection;
  	            }
  	          }
  	        }

  	        memoizedSelection = _nextSelection;
  	        return _nextSelection;
  	      } // We may be able to reuse the previous invocation's result.


  	      // We may be able to reuse the previous invocation's result.
  	      var prevSnapshot = memoizedSnapshot;
  	      var prevSelection = memoizedSelection;

  	      if (objectIs(prevSnapshot, nextSnapshot)) {
  	        // The snapshot is the same as last time. Reuse the previous selection.
  	        return prevSelection;
  	      } // The snapshot has changed, so we need to compute a new selection.


  	      // The snapshot has changed, so we need to compute a new selection.
  	      var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data
  	      // has changed. If it hasn't, return the previous selection. That signals
  	      // to React that the selections are conceptually equal, and we can bail
  	      // out of rendering.

  	      // If a custom isEqual function is provided, use that to check if the data
  	      // has changed. If it hasn't, return the previous selection. That signals
  	      // to React that the selections are conceptually equal, and we can bail
  	      // out of rendering.
  	      if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
  	        return prevSelection;
  	      }

  	      memoizedSnapshot = nextSnapshot;
  	      memoizedSelection = nextSelection;
  	      return nextSelection;
  	    }; // Assigning this to a constant so that Flow knows it can't change.


  	    // Assigning this to a constant so that Flow knows it can't change.
  	    var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;

  	    var getSnapshotWithSelector = function () {
  	      return memoizedSelector(getSnapshot());
  	    };

  	    var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function () {
  	      return memoizedSelector(maybeGetServerSnapshot());
  	    };
  	    return [getSnapshotWithSelector, getServerSnapshotWithSelector];
  	  }, [getSnapshot, getServerSnapshot, selector, isEqual]),
  	      getSelection = _useMemo[0],
  	      getServerSelection = _useMemo[1];

  	  var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
  	  useEffect(function () {
  	    inst.hasValue = true;
  	    inst.value = value;
  	  }, [value]);
  	  useDebugValue(value);
  	  return value;
  	}

  	useSyncExternalStoreWithSelector_development.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
  	          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  	if (
  	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
  	    'function'
  	) {
  	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  	}
  	        
  	  })();
  	}
  	return useSyncExternalStoreWithSelector_development;
  }

  if (process.env.NODE_ENV === 'production') {
    withSelector.exports = requireUseSyncExternalStoreWithSelector_production_min();
  } else {
    withSelector.exports = requireUseSyncExternalStoreWithSelector_development();
  }

  var withSelectorExports = withSelector.exports;

  // src/index.ts
  var React = (
    // prettier-ignore
    // @ts-ignore
    "default" in ReactOriginal ? Rn : ReactOriginal
  );

  // src/components/Context.ts
  var ContextKey = Symbol.for(`react-redux-context`);
  var gT = typeof globalThis !== "undefined" ? globalThis : (
    /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
    {}
  );
  function getContext() {
    if (!React.createContext)
      return {};
    const contextMap = gT[ContextKey] ?? (gT[ContextKey] = /* @__PURE__ */ new Map());
    let realContext = contextMap.get(React.createContext);
    if (!realContext) {
      realContext = React.createContext(
        null
      );
      if (process.env.NODE_ENV !== "production") {
        realContext.displayName = "ReactRedux";
      }
      contextMap.set(React.createContext, realContext);
    }
    return realContext;
  }
  var ReactReduxContext = /* @__PURE__ */ getContext();

  // src/utils/useSyncExternalStore.ts
  var notInitialized = () => {
    throw new Error("uSES not initialized!");
  };

  // src/hooks/useReduxContext.ts
  function createReduxContextHook(context = ReactReduxContext) {
    return function useReduxContext2() {
      const contextValue = React.useContext(context);
      if (process.env.NODE_ENV !== "production" && !contextValue) {
        throw new Error(
          "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
        );
      }
      return contextValue;
    };
  }
  var useReduxContext = /* @__PURE__ */ createReduxContextHook();

  // src/hooks/useSelector.ts
  var useSyncExternalStoreWithSelector = notInitialized;
  var initializeUseSelector = (fn) => {
    useSyncExternalStoreWithSelector = fn;
  };
  var refEquality = (a, b) => a === b;
  function createSelectorHook(context = ReactReduxContext) {
    const useReduxContext2 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
    const useSelector2 = (selector, equalityFnOrOptions = {}) => {
      const { equalityFn = refEquality, devModeChecks = {} } = typeof equalityFnOrOptions === "function" ? { equalityFn: equalityFnOrOptions } : equalityFnOrOptions;
      if (process.env.NODE_ENV !== "production") {
        if (!selector) {
          throw new Error(`You must pass a selector to useSelector`);
        }
        if (typeof selector !== "function") {
          throw new Error(`You must pass a function as a selector to useSelector`);
        }
        if (typeof equalityFn !== "function") {
          throw new Error(
            `You must pass a function as an equality function to useSelector`
          );
        }
      }
      const {
        store,
        subscription,
        getServerState,
        stabilityCheck,
        identityFunctionCheck
      } = useReduxContext2();
      const firstRun = React.useRef(true);
      const wrappedSelector = React.useCallback(
        {
          [selector.name](state) {
            const selected = selector(state);
            if (process.env.NODE_ENV !== "production") {
              const {
                identityFunctionCheck: finalIdentityFunctionCheck,
                stabilityCheck: finalStabilityCheck
              } = {
                stabilityCheck,
                identityFunctionCheck,
                ...devModeChecks
              };
              if (finalStabilityCheck === "always" || finalStabilityCheck === "once" && firstRun.current) {
                const toCompare = selector(state);
                if (!equalityFn(selected, toCompare)) {
                  let stack = void 0;
                  try {
                    throw new Error();
                  } catch (e) {
                    ({ stack } = e);
                  }
                  console.warn(
                    "Selector " + (selector.name || "unknown") + " returned a different result when called with the same parameters. This can lead to unnecessary rerenders.\nSelectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization",
                    {
                      state,
                      selected,
                      selected2: toCompare,
                      stack
                    }
                  );
                }
              }
              if (finalIdentityFunctionCheck === "always" || finalIdentityFunctionCheck === "once" && firstRun.current) {
                if (selected === state) {
                  let stack = void 0;
                  try {
                    throw new Error();
                  } catch (e) {
                    ({ stack } = e);
                  }
                  console.warn(
                    "Selector " + (selector.name || "unknown") + " returned the root state when called. This can lead to unnecessary rerenders.\nSelectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.",
                    { stack }
                  );
                }
              }
              if (firstRun.current)
                firstRun.current = false;
            }
            return selected;
          }
        }[selector.name],
        [selector, stabilityCheck, devModeChecks.stabilityCheck]
      );
      const selectedState = useSyncExternalStoreWithSelector(
        subscription.addNestedSub,
        store.getState,
        getServerState || store.getState,
        wrappedSelector,
        equalityFn
      );
      React.useDebugValue(selectedState);
      return selectedState;
    };
    Object.assign(useSelector2, {
      withTypes: () => useSelector2
    });
    return useSelector2;
  }
  var useSelector = /* @__PURE__ */ createSelectorHook();

  // src/utils/batch.ts
  function defaultNoopBatch(callback) {
    callback();
  }

  // src/utils/Subscription.ts
  function createListenerCollection() {
    let first = null;
    let last = null;
    return {
      clear() {
        first = null;
        last = null;
      },
      notify() {
        defaultNoopBatch(() => {
          let listener = first;
          while (listener) {
            listener.callback();
            listener = listener.next;
          }
        });
      },
      get() {
        const listeners = [];
        let listener = first;
        while (listener) {
          listeners.push(listener);
          listener = listener.next;
        }
        return listeners;
      },
      subscribe(callback) {
        let isSubscribed = true;
        const listener = last = {
          callback,
          next: null,
          prev: last
        };
        if (listener.prev) {
          listener.prev.next = listener;
        } else {
          first = listener;
        }
        return function unsubscribe() {
          if (!isSubscribed || first === null)
            return;
          isSubscribed = false;
          if (listener.next) {
            listener.next.prev = listener.prev;
          } else {
            last = listener.prev;
          }
          if (listener.prev) {
            listener.prev.next = listener.next;
          } else {
            first = listener.next;
          }
        };
      }
    };
  }
  var nullListeners = {
    notify() {
    },
    get: () => []
  };
  function createSubscription(store, parentSub) {
    let unsubscribe;
    let listeners = nullListeners;
    let subscriptionsAmount = 0;
    let selfSubscribed = false;
    function addNestedSub(listener) {
      trySubscribe();
      const cleanupListener = listeners.subscribe(listener);
      let removed = false;
      return () => {
        if (!removed) {
          removed = true;
          cleanupListener();
          tryUnsubscribe();
        }
      };
    }
    function notifyNestedSubs() {
      listeners.notify();
    }
    function handleChangeWrapper() {
      if (subscription.onStateChange) {
        subscription.onStateChange();
      }
    }
    function isSubscribed() {
      return selfSubscribed;
    }
    function trySubscribe() {
      subscriptionsAmount++;
      if (!unsubscribe) {
        unsubscribe = store.subscribe(handleChangeWrapper);
        listeners = createListenerCollection();
      }
    }
    function tryUnsubscribe() {
      subscriptionsAmount--;
      if (unsubscribe && subscriptionsAmount === 0) {
        unsubscribe();
        unsubscribe = void 0;
        listeners.clear();
        listeners = nullListeners;
      }
    }
    function trySubscribeSelf() {
      if (!selfSubscribed) {
        selfSubscribed = true;
        trySubscribe();
      }
    }
    function tryUnsubscribeSelf() {
      if (selfSubscribed) {
        selfSubscribed = false;
        tryUnsubscribe();
      }
    }
    const subscription = {
      addNestedSub,
      notifyNestedSubs,
      handleChangeWrapper,
      isSubscribed,
      trySubscribe: trySubscribeSelf,
      tryUnsubscribe: tryUnsubscribeSelf,
      getListeners: () => listeners
    };
    return subscription;
  }

  // src/utils/useIsomorphicLayoutEffect.ts
  var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
  var isReactNative = typeof navigator !== "undefined" && navigator.product === "ReactNative";
  var useIsomorphicLayoutEffect = canUseDOM || isReactNative ? React.useLayoutEffect : React.useEffect;

  // src/components/Provider.tsx
  function Provider({
    store,
    context,
    children,
    serverState,
    stabilityCheck = "once",
    identityFunctionCheck = "once"
  }) {
    const contextValue = React.useMemo(() => {
      const subscription = createSubscription(store);
      return {
        store,
        subscription,
        getServerState: serverState ? () => serverState : void 0,
        stabilityCheck,
        identityFunctionCheck
      };
    }, [store, serverState, stabilityCheck, identityFunctionCheck]);
    const previousState = React.useMemo(() => store.getState(), [store]);
    useIsomorphicLayoutEffect(() => {
      const { subscription } = contextValue;
      subscription.onStateChange = subscription.notifyNestedSubs;
      subscription.trySubscribe();
      if (previousState !== store.getState()) {
        subscription.notifyNestedSubs();
      }
      return () => {
        subscription.tryUnsubscribe();
        subscription.onStateChange = void 0;
      };
    }, [contextValue, previousState]);
    const Context = context || ReactReduxContext;
    return /* @__PURE__ */ React.createElement(Context.Provider, { value: contextValue }, children);
  }
  var Provider_default = Provider;

  // src/hooks/useStore.ts
  function createStoreHook(context = ReactReduxContext) {
    const useReduxContext2 = context === ReactReduxContext ? useReduxContext : (
      // @ts-ignore
      createReduxContextHook(context)
    );
    const useStore2 = () => {
      const { store } = useReduxContext2();
      return store;
    };
    Object.assign(useStore2, {
      withTypes: () => useStore2
    });
    return useStore2;
  }
  var useStore = /* @__PURE__ */ createStoreHook();

  // src/hooks/useDispatch.ts
  function createDispatchHook(context = ReactReduxContext) {
    const useStore2 = context === ReactReduxContext ? useStore : createStoreHook(context);
    const useDispatch2 = () => {
      const store = useStore2();
      return store.dispatch;
    };
    Object.assign(useDispatch2, {
      withTypes: () => useDispatch2
    });
    return useDispatch2;
  }
  var useDispatch = /* @__PURE__ */ createDispatchHook();

  // src/index.ts
  initializeUseSelector(withSelectorExports.useSyncExternalStoreWithSelector);

  // src/utils/formatProdErrorMessage.ts
  function formatProdErrorMessage$1(code) {
    return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
  }

  // src/utils/symbol-observable.ts
  var $$observable = /* @__PURE__ */ (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
  var symbol_observable_default = $$observable;

  // src/utils/actionTypes.ts
  var randomString = () => Math.random().toString(36).substring(7).split("").join(".");
  var ActionTypes = {
    INIT: `@@redux/INIT${/* @__PURE__ */ randomString()}`,
    REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
  };
  var actionTypes_default = ActionTypes;

  // src/utils/isPlainObject.ts
  function isPlainObject$1(obj) {
    if (typeof obj !== "object" || obj === null)
      return false;
    let proto = obj;
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
  }

  // src/utils/kindOf.ts
  function miniKindOf(val) {
    if (val === void 0)
      return "undefined";
    if (val === null)
      return "null";
    const type = typeof val;
    switch (type) {
      case "boolean":
      case "string":
      case "number":
      case "symbol":
      case "function": {
        return type;
      }
    }
    if (Array.isArray(val))
      return "array";
    if (isDate(val))
      return "date";
    if (isError(val))
      return "error";
    const constructorName = ctorName(val);
    switch (constructorName) {
      case "Symbol":
      case "Promise":
      case "WeakMap":
      case "WeakSet":
      case "Map":
      case "Set":
        return constructorName;
    }
    return Object.prototype.toString.call(val).slice(8, -1).toLowerCase().replace(/\s/g, "");
  }
  function ctorName(val) {
    return typeof val.constructor === "function" ? val.constructor.name : null;
  }
  function isError(val) {
    return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
  }
  function isDate(val) {
    if (val instanceof Date)
      return true;
    return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
  }
  function kindOf(val) {
    let typeOfVal = typeof val;
    if (process.env.NODE_ENV !== "production") {
      typeOfVal = miniKindOf(val);
    }
    return typeOfVal;
  }

  // src/createStore.ts
  function createStore(reducer, preloadedState, enhancer) {
    if (typeof reducer !== "function") {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(2) : `Expected the root reducer to be a function. Instead, received: '${kindOf(reducer)}'`);
    }
    if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
    }
    if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
      enhancer = preloadedState;
      preloadedState = void 0;
    }
    if (typeof enhancer !== "undefined") {
      if (typeof enhancer !== "function") {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(1) : `Expected the enhancer to be a function. Instead, received: '${kindOf(enhancer)}'`);
      }
      return enhancer(createStore)(reducer, preloadedState);
    }
    let currentReducer = reducer;
    let currentState = preloadedState;
    let currentListeners = /* @__PURE__ */ new Map();
    let nextListeners = currentListeners;
    let listenerIdCounter = 0;
    let isDispatching = false;
    function ensureCanMutateNextListeners() {
      if (nextListeners === currentListeners) {
        nextListeners = /* @__PURE__ */ new Map();
        currentListeners.forEach((listener, key) => {
          nextListeners.set(key, listener);
        });
      }
    }
    function getState() {
      if (isDispatching) {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
      }
      return currentState;
    }
    function subscribe(listener) {
      if (typeof listener !== "function") {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(4) : `Expected the listener to be a function. Instead, received: '${kindOf(listener)}'`);
      }
      if (isDispatching) {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
      }
      let isSubscribed = true;
      ensureCanMutateNextListeners();
      const listenerId = listenerIdCounter++;
      nextListeners.set(listenerId, listener);
      return function unsubscribe() {
        if (!isSubscribed) {
          return;
        }
        if (isDispatching) {
          throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        }
        isSubscribed = false;
        ensureCanMutateNextListeners();
        nextListeners.delete(listenerId);
        currentListeners = null;
      };
    }
    function dispatch(action) {
      if (!isPlainObject$1(action)) {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(7) : `Actions must be plain objects. Instead, the actual type was: '${kindOf(action)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
      }
      if (typeof action.type === "undefined") {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
      }
      if (typeof action.type !== "string") {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(17) : `Action "type" property must be a string. Instead, the actual type was: '${kindOf(action.type)}'. Value was: '${action.type}' (stringified)`);
      }
      if (isDispatching) {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(9) : "Reducers may not dispatch actions.");
      }
      try {
        isDispatching = true;
        currentState = currentReducer(currentState, action);
      } finally {
        isDispatching = false;
      }
      const listeners = currentListeners = nextListeners;
      listeners.forEach((listener) => {
        listener();
      });
      return action;
    }
    function replaceReducer(nextReducer) {
      if (typeof nextReducer !== "function") {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(10) : `Expected the nextReducer to be a function. Instead, received: '${kindOf(nextReducer)}`);
      }
      currentReducer = nextReducer;
      dispatch({
        type: actionTypes_default.REPLACE
      });
    }
    function observable() {
      const outerSubscribe = subscribe;
      return {
        /**
         * The minimal observable subscription method.
         * @param observer Any object that can be used as an observer.
         * The observer object should have a `next` method.
         * @returns An object with an `unsubscribe` method that can
         * be used to unsubscribe the observable from the store, and prevent further
         * emission of values from the observable.
         */
        subscribe(observer) {
          if (typeof observer !== "object" || observer === null) {
            throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(11) : `Expected the observer to be an object. Instead, received: '${kindOf(observer)}'`);
          }
          function observeState() {
            const observerAsObserver = observer;
            if (observerAsObserver.next) {
              observerAsObserver.next(getState());
            }
          }
          observeState();
          const unsubscribe = outerSubscribe(observeState);
          return {
            unsubscribe
          };
        },
        [symbol_observable_default]() {
          return this;
        }
      };
    }
    dispatch({
      type: actionTypes_default.INIT
    });
    const store = {
      dispatch,
      subscribe,
      getState,
      replaceReducer,
      [symbol_observable_default]: observable
    };
    return store;
  }

  // src/utils/warning.ts
  function warning(message) {
    if (typeof console !== "undefined" && typeof console.error === "function") {
      console.error(message);
    }
    try {
      throw new Error(message);
    } catch (e) {
    }
  }

  // src/combineReducers.ts
  function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
    const reducerKeys = Object.keys(reducers);
    const argumentName = action && action.type === actionTypes_default.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
    if (reducerKeys.length === 0) {
      return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
    }
    if (!isPlainObject$1(inputState)) {
      return `The ${argumentName} has unexpected type of "${kindOf(inputState)}". Expected argument to be an object with the following keys: "${reducerKeys.join('", "')}"`;
    }
    const unexpectedKeys = Object.keys(inputState).filter((key) => !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key]);
    unexpectedKeys.forEach((key) => {
      unexpectedKeyCache[key] = true;
    });
    if (action && action.type === actionTypes_default.REPLACE)
      return;
    if (unexpectedKeys.length > 0) {
      return `Unexpected ${unexpectedKeys.length > 1 ? "keys" : "key"} "${unexpectedKeys.join('", "')}" found in ${argumentName}. Expected to find one of the known reducer keys instead: "${reducerKeys.join('", "')}". Unexpected keys will be ignored.`;
    }
  }
  function assertReducerShape(reducers) {
    Object.keys(reducers).forEach((key) => {
      const reducer = reducers[key];
      const initialState = reducer(void 0, {
        type: actionTypes_default.INIT
      });
      if (typeof initialState === "undefined") {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(12) : `The slice reducer for key "${key}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
      }
      if (typeof reducer(void 0, {
        type: actionTypes_default.PROBE_UNKNOWN_ACTION()
      }) === "undefined") {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(13) : `The slice reducer for key "${key}" returned undefined when probed with a random type. Don't try to handle '${actionTypes_default.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
      }
    });
  }
  function combineReducers(reducers) {
    const reducerKeys = Object.keys(reducers);
    const finalReducers = {};
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      if (process.env.NODE_ENV !== "production") {
        if (typeof reducers[key] === "undefined") {
          warning(`No reducer provided for key "${key}"`);
        }
      }
      if (typeof reducers[key] === "function") {
        finalReducers[key] = reducers[key];
      }
    }
    const finalReducerKeys = Object.keys(finalReducers);
    let unexpectedKeyCache;
    if (process.env.NODE_ENV !== "production") {
      unexpectedKeyCache = {};
    }
    let shapeAssertionError;
    try {
      assertReducerShape(finalReducers);
    } catch (e) {
      shapeAssertionError = e;
    }
    return function combination(state = {}, action) {
      if (shapeAssertionError) {
        throw shapeAssertionError;
      }
      if (process.env.NODE_ENV !== "production") {
        const warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
        if (warningMessage) {
          warning(warningMessage);
        }
      }
      let hasChanged = false;
      const nextState = {};
      for (let i = 0; i < finalReducerKeys.length; i++) {
        const key = finalReducerKeys[i];
        const reducer = finalReducers[key];
        const previousStateForKey = state[key];
        const nextStateForKey = reducer(previousStateForKey, action);
        if (typeof nextStateForKey === "undefined") {
          const actionType = action && action.type;
          throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(14) : `When called with an action of type ${actionType ? `"${String(actionType)}"` : "(unknown type)"}, the slice reducer for key "${key}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
        }
        nextState[key] = nextStateForKey;
        hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
      }
      hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
      return hasChanged ? nextState : state;
    };
  }

  // src/compose.ts
  function compose(...funcs) {
    if (funcs.length === 0) {
      return (arg) => arg;
    }
    if (funcs.length === 1) {
      return funcs[0];
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
  }

  // src/applyMiddleware.ts
  function applyMiddleware(...middlewares) {
    return (createStore2) => (reducer, preloadedState) => {
      const store = createStore2(reducer, preloadedState);
      let dispatch = () => {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      };
      const middlewareAPI = {
        getState: store.getState,
        dispatch: (action, ...args) => dispatch(action, ...args)
      };
      const chain = middlewares.map((middleware) => middleware(middlewareAPI));
      dispatch = compose(...chain)(store.dispatch);
      return {
        ...store,
        dispatch
      };
    };
  }

  // src/utils/isAction.ts
  function isAction(action) {
    return isPlainObject$1(action) && "type" in action && typeof action.type === "string";
  }

  // src/utils/env.ts
  var NOTHING = Symbol.for("immer-nothing");
  var DRAFTABLE = Symbol.for("immer-draftable");
  var DRAFT_STATE = Symbol.for("immer-state");

  // src/utils/errors.ts
  var errors = process.env.NODE_ENV !== "production" ? [
    // All error codes, starting by 0:
    function(plugin) {
      return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
    },
    function(thing) {
      return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
    },
    "This object has been frozen and should not be mutated",
    function(data) {
      return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
    },
    "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
    "Immer forbids circular references",
    "The first or second argument to `produce` must be a function",
    "The third argument to `produce` must be a function or undefined",
    "First argument to `createDraft` must be a plain object, an array, or an immerable object",
    "First argument to `finishDraft` must be a draft returned by `createDraft`",
    function(thing) {
      return `'current' expects a draft, got: ${thing}`;
    },
    "Object.defineProperty() cannot be used on an Immer draft",
    "Object.setPrototypeOf() cannot be used on an Immer draft",
    "Immer only supports deleting array indices",
    "Immer only supports setting array indices and the 'length' property",
    function(thing) {
      return `'original' expects a draft, got: ${thing}`;
    }
    // Note: if more errors are added, the errorOffset in Patches.ts should be increased
    // See Patches.ts for additional errors
  ] : [];
  function die(error, ...args) {
    if (process.env.NODE_ENV !== "production") {
      const e = errors[error];
      const msg = typeof e === "function" ? e.apply(null, args) : e;
      throw new Error(`[Immer] ${msg}`);
    }
    throw new Error(
      `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
    );
  }

  // src/utils/common.ts
  var getPrototypeOf = Object.getPrototypeOf;
  function isDraft(value) {
    return !!value && !!value[DRAFT_STATE];
  }
  function isDraftable(value) {
    if (!value)
      return false;
    return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
  }
  var objectCtorString = Object.prototype.constructor.toString();
  function isPlainObject(value) {
    if (!value || typeof value !== "object")
      return false;
    const proto = getPrototypeOf(value);
    if (proto === null) {
      return true;
    }
    const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
    if (Ctor === Object)
      return true;
    return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
  }
  function each(obj, iter) {
    if (getArchtype(obj) === 0 /* Object */) {
      Reflect.ownKeys(obj).forEach((key) => {
        iter(key, obj[key], obj);
      });
    } else {
      obj.forEach((entry, index) => iter(index, entry, obj));
    }
  }
  function getArchtype(thing) {
    const state = thing[DRAFT_STATE];
    return state ? state.type_ : Array.isArray(thing) ? 1 /* Array */ : isMap(thing) ? 2 /* Map */ : isSet(thing) ? 3 /* Set */ : 0 /* Object */;
  }
  function has(thing, prop) {
    return getArchtype(thing) === 2 /* Map */ ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
  }
  function set(thing, propOrOldValue, value) {
    const t = getArchtype(thing);
    if (t === 2 /* Map */)
      thing.set(propOrOldValue, value);
    else if (t === 3 /* Set */) {
      thing.add(value);
    } else
      thing[propOrOldValue] = value;
  }
  function is(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }
  function isMap(target) {
    return target instanceof Map;
  }
  function isSet(target) {
    return target instanceof Set;
  }
  function latest(state) {
    return state.copy_ || state.base_;
  }
  function shallowCopy(base, strict) {
    if (isMap(base)) {
      return new Map(base);
    }
    if (isSet(base)) {
      return new Set(base);
    }
    if (Array.isArray(base))
      return Array.prototype.slice.call(base);
    const isPlain = isPlainObject(base);
    if (strict === true || strict === "class_only" && !isPlain) {
      const descriptors = Object.getOwnPropertyDescriptors(base);
      delete descriptors[DRAFT_STATE];
      let keys = Reflect.ownKeys(descriptors);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const desc = descriptors[key];
        if (desc.writable === false) {
          desc.writable = true;
          desc.configurable = true;
        }
        if (desc.get || desc.set)
          descriptors[key] = {
            configurable: true,
            writable: true,
            // could live with !!desc.set as well here...
            enumerable: desc.enumerable,
            value: base[key]
          };
      }
      return Object.create(getPrototypeOf(base), descriptors);
    } else {
      const proto = getPrototypeOf(base);
      if (proto !== null && isPlain) {
        return { ...base };
      }
      const obj = Object.create(proto);
      return Object.assign(obj, base);
    }
  }
  function freeze(obj, deep = false) {
    if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
      return obj;
    if (getArchtype(obj) > 1) {
      obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
    }
    Object.freeze(obj);
    if (deep)
      Object.entries(obj).forEach(([key, value]) => freeze(value, true));
    return obj;
  }
  function dontMutateFrozenCollections() {
    die(2);
  }
  function isFrozen(obj) {
    return Object.isFrozen(obj);
  }

  // src/utils/plugins.ts
  var plugins = {};
  function getPlugin(pluginKey) {
    const plugin = plugins[pluginKey];
    if (!plugin) {
      die(0, pluginKey);
    }
    return plugin;
  }

  // src/core/scope.ts
  var currentScope;
  function getCurrentScope() {
    return currentScope;
  }
  function createScope(parent_, immer_) {
    return {
      drafts_: [],
      parent_,
      immer_,
      // Whenever the modified draft contains a draft from another scope, we
      // need to prevent auto-freezing so the unowned draft can be finalized.
      canAutoFreeze_: true,
      unfinalizedDrafts_: 0
    };
  }
  function usePatchesInScope(scope, patchListener) {
    if (patchListener) {
      getPlugin("Patches");
      scope.patches_ = [];
      scope.inversePatches_ = [];
      scope.patchListener_ = patchListener;
    }
  }
  function revokeScope(scope) {
    leaveScope(scope);
    scope.drafts_.forEach(revokeDraft);
    scope.drafts_ = null;
  }
  function leaveScope(scope) {
    if (scope === currentScope) {
      currentScope = scope.parent_;
    }
  }
  function enterScope(immer2) {
    return currentScope = createScope(currentScope, immer2);
  }
  function revokeDraft(draft) {
    const state = draft[DRAFT_STATE];
    if (state.type_ === 0 /* Object */ || state.type_ === 1 /* Array */)
      state.revoke_();
    else
      state.revoked_ = true;
  }

  // src/core/finalize.ts
  function processResult(result, scope) {
    scope.unfinalizedDrafts_ = scope.drafts_.length;
    const baseDraft = scope.drafts_[0];
    const isReplaced = result !== void 0 && result !== baseDraft;
    if (isReplaced) {
      if (baseDraft[DRAFT_STATE].modified_) {
        revokeScope(scope);
        die(4);
      }
      if (isDraftable(result)) {
        result = finalize(scope, result);
        if (!scope.parent_)
          maybeFreeze(scope, result);
      }
      if (scope.patches_) {
        getPlugin("Patches").generateReplacementPatches_(
          baseDraft[DRAFT_STATE].base_,
          result,
          scope.patches_,
          scope.inversePatches_
        );
      }
    } else {
      result = finalize(scope, baseDraft, []);
    }
    revokeScope(scope);
    if (scope.patches_) {
      scope.patchListener_(scope.patches_, scope.inversePatches_);
    }
    return result !== NOTHING ? result : void 0;
  }
  function finalize(rootScope, value, path) {
    if (isFrozen(value))
      return value;
    const state = value[DRAFT_STATE];
    if (!state) {
      each(
        value,
        (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path)
      );
      return value;
    }
    if (state.scope_ !== rootScope)
      return value;
    if (!state.modified_) {
      maybeFreeze(rootScope, state.base_, true);
      return state.base_;
    }
    if (!state.finalized_) {
      state.finalized_ = true;
      state.scope_.unfinalizedDrafts_--;
      const result = state.copy_;
      let resultEach = result;
      let isSet2 = false;
      if (state.type_ === 3 /* Set */) {
        resultEach = new Set(result);
        result.clear();
        isSet2 = true;
      }
      each(
        resultEach,
        (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2)
      );
      maybeFreeze(rootScope, result, false);
      if (path && rootScope.patches_) {
        getPlugin("Patches").generatePatches_(
          state,
          path,
          rootScope.patches_,
          rootScope.inversePatches_
        );
      }
    }
    return state.copy_;
  }
  function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
    if (process.env.NODE_ENV !== "production" && childValue === targetObject)
      die(5);
    if (isDraft(childValue)) {
      const path = rootPath && parentState && parentState.type_ !== 3 /* Set */ && // Set objects are atomic since they have no keys.
      !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
      const res = finalize(rootScope, childValue, path);
      set(targetObject, prop, res);
      if (isDraft(res)) {
        rootScope.canAutoFreeze_ = false;
      } else
        return;
    } else if (targetIsSet) {
      targetObject.add(childValue);
    }
    if (isDraftable(childValue) && !isFrozen(childValue)) {
      if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
        return;
      }
      finalize(rootScope, childValue);
      if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && Object.prototype.propertyIsEnumerable.call(targetObject, prop))
        maybeFreeze(rootScope, childValue);
    }
  }
  function maybeFreeze(scope, value, deep = false) {
    if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
      freeze(value, deep);
    }
  }

  // src/core/proxy.ts
  function createProxyProxy(base, parent) {
    const isArray = Array.isArray(base);
    const state = {
      type_: isArray ? 1 /* Array */ : 0 /* Object */,
      // Track which produce call this is associated with.
      scope_: parent ? parent.scope_ : getCurrentScope(),
      // True for both shallow and deep changes.
      modified_: false,
      // Used during finalization.
      finalized_: false,
      // Track which properties have been assigned (true) or deleted (false).
      assigned_: {},
      // The parent draft state.
      parent_: parent,
      // The base state.
      base_: base,
      // The base proxy.
      draft_: null,
      // set below
      // The base copy with any updated values.
      copy_: null,
      // Called by the `produce` function.
      revoke_: null,
      isManual_: false
    };
    let target = state;
    let traps = objectTraps;
    if (isArray) {
      target = [state];
      traps = arrayTraps;
    }
    const { revoke, proxy } = Proxy.revocable(target, traps);
    state.draft_ = proxy;
    state.revoke_ = revoke;
    return proxy;
  }
  var objectTraps = {
    get(state, prop) {
      if (prop === DRAFT_STATE)
        return state;
      const source = latest(state);
      if (!has(source, prop)) {
        return readPropFromProto(state, source, prop);
      }
      const value = source[prop];
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (value === peek(state.base_, prop)) {
        prepareCopy(state);
        return state.copy_[prop] = createProxy(value, state);
      }
      return value;
    },
    has(state, prop) {
      return prop in latest(state);
    },
    ownKeys(state) {
      return Reflect.ownKeys(latest(state));
    },
    set(state, prop, value) {
      const desc = getDescriptorFromProto(latest(state), prop);
      if (desc?.set) {
        desc.set.call(state.draft_, value);
        return true;
      }
      if (!state.modified_) {
        const current2 = peek(latest(state), prop);
        const currentState = current2?.[DRAFT_STATE];
        if (currentState && currentState.base_ === value) {
          state.copy_[prop] = value;
          state.assigned_[prop] = false;
          return true;
        }
        if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
          return true;
        prepareCopy(state);
        markChanged(state);
      }
      if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
      (value !== void 0 || prop in state.copy_) || // special case: NaN
      Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
        return true;
      state.copy_[prop] = value;
      state.assigned_[prop] = true;
      return true;
    },
    deleteProperty(state, prop) {
      if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
        state.assigned_[prop] = false;
        prepareCopy(state);
        markChanged(state);
      } else {
        delete state.assigned_[prop];
      }
      if (state.copy_) {
        delete state.copy_[prop];
      }
      return true;
    },
    // Note: We never coerce `desc.value` into an Immer draft, because we can't make
    // the same guarantee in ES5 mode.
    getOwnPropertyDescriptor(state, prop) {
      const owner = latest(state);
      const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
      if (!desc)
        return desc;
      return {
        writable: true,
        configurable: state.type_ !== 1 /* Array */ || prop !== "length",
        enumerable: desc.enumerable,
        value: owner[prop]
      };
    },
    defineProperty() {
      die(11);
    },
    getPrototypeOf(state) {
      return getPrototypeOf(state.base_);
    },
    setPrototypeOf() {
      die(12);
    }
  };
  var arrayTraps = {};
  each(objectTraps, (key, fn) => {
    arrayTraps[key] = function() {
      arguments[0] = arguments[0][0];
      return fn.apply(this, arguments);
    };
  });
  arrayTraps.deleteProperty = function(state, prop) {
    if (process.env.NODE_ENV !== "production" && isNaN(parseInt(prop)))
      die(13);
    return arrayTraps.set.call(this, state, prop, void 0);
  };
  arrayTraps.set = function(state, prop, value) {
    if (process.env.NODE_ENV !== "production" && prop !== "length" && isNaN(parseInt(prop)))
      die(14);
    return objectTraps.set.call(this, state[0], prop, value, state[0]);
  };
  function peek(draft, prop) {
    const state = draft[DRAFT_STATE];
    const source = state ? latest(state) : draft;
    return source[prop];
  }
  function readPropFromProto(state, source, prop) {
    const desc = getDescriptorFromProto(source, prop);
    return desc ? `value` in desc ? desc.value : (
      // This is a very special case, if the prop is a getter defined by the
      // prototype, we should invoke it with the draft as context!
      desc.get?.call(state.draft_)
    ) : void 0;
  }
  function getDescriptorFromProto(source, prop) {
    if (!(prop in source))
      return void 0;
    let proto = getPrototypeOf(source);
    while (proto) {
      const desc = Object.getOwnPropertyDescriptor(proto, prop);
      if (desc)
        return desc;
      proto = getPrototypeOf(proto);
    }
    return void 0;
  }
  function markChanged(state) {
    if (!state.modified_) {
      state.modified_ = true;
      if (state.parent_) {
        markChanged(state.parent_);
      }
    }
  }
  function prepareCopy(state) {
    if (!state.copy_) {
      state.copy_ = shallowCopy(
        state.base_,
        state.scope_.immer_.useStrictShallowCopy_
      );
    }
  }

  // src/core/immerClass.ts
  var Immer2 = class {
    constructor(config) {
      this.autoFreeze_ = true;
      this.useStrictShallowCopy_ = false;
      /**
       * The `produce` function takes a value and a "recipe function" (whose
       * return value often depends on the base state). The recipe function is
       * free to mutate its first argument however it wants. All mutations are
       * only ever applied to a __copy__ of the base state.
       *
       * Pass only a function to create a "curried producer" which relieves you
       * from passing the recipe function every time.
       *
       * Only plain objects and arrays are made mutable. All other objects are
       * considered uncopyable.
       *
       * Note: This function is __bound__ to its `Immer` instance.
       *
       * @param {any} base - the initial state
       * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
       * @param {Function} patchListener - optional function that will be called with all the patches produced here
       * @returns {any} a new state, or the initial state if nothing was modified
       */
      this.produce = (base, recipe, patchListener) => {
        if (typeof base === "function" && typeof recipe !== "function") {
          const defaultBase = recipe;
          recipe = base;
          const self = this;
          return function curriedProduce(base2 = defaultBase, ...args) {
            return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
          };
        }
        if (typeof recipe !== "function")
          die(6);
        if (patchListener !== void 0 && typeof patchListener !== "function")
          die(7);
        let result;
        if (isDraftable(base)) {
          const scope = enterScope(this);
          const proxy = createProxy(base, void 0);
          let hasError = true;
          try {
            result = recipe(proxy);
            hasError = false;
          } finally {
            if (hasError)
              revokeScope(scope);
            else
              leaveScope(scope);
          }
          usePatchesInScope(scope, patchListener);
          return processResult(result, scope);
        } else if (!base || typeof base !== "object") {
          result = recipe(base);
          if (result === void 0)
            result = base;
          if (result === NOTHING)
            result = void 0;
          if (this.autoFreeze_)
            freeze(result, true);
          if (patchListener) {
            const p = [];
            const ip = [];
            getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
            patchListener(p, ip);
          }
          return result;
        } else
          die(1, base);
      };
      this.produceWithPatches = (base, recipe) => {
        if (typeof base === "function") {
          return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
        }
        let patches, inversePatches;
        const result = this.produce(base, recipe, (p, ip) => {
          patches = p;
          inversePatches = ip;
        });
        return [result, patches, inversePatches];
      };
      if (typeof config?.autoFreeze === "boolean")
        this.setAutoFreeze(config.autoFreeze);
      if (typeof config?.useStrictShallowCopy === "boolean")
        this.setUseStrictShallowCopy(config.useStrictShallowCopy);
    }
    createDraft(base) {
      if (!isDraftable(base))
        die(8);
      if (isDraft(base))
        base = current(base);
      const scope = enterScope(this);
      const proxy = createProxy(base, void 0);
      proxy[DRAFT_STATE].isManual_ = true;
      leaveScope(scope);
      return proxy;
    }
    finishDraft(draft, patchListener) {
      const state = draft && draft[DRAFT_STATE];
      if (!state || !state.isManual_)
        die(9);
      const { scope_: scope } = state;
      usePatchesInScope(scope, patchListener);
      return processResult(void 0, scope);
    }
    /**
     * Pass true to automatically freeze all copies created by Immer.
     *
     * By default, auto-freezing is enabled.
     */
    setAutoFreeze(value) {
      this.autoFreeze_ = value;
    }
    /**
     * Pass true to enable strict shallow copy.
     *
     * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
     */
    setUseStrictShallowCopy(value) {
      this.useStrictShallowCopy_ = value;
    }
    applyPatches(base, patches) {
      let i;
      for (i = patches.length - 1; i >= 0; i--) {
        const patch = patches[i];
        if (patch.path.length === 0 && patch.op === "replace") {
          base = patch.value;
          break;
        }
      }
      if (i > -1) {
        patches = patches.slice(i + 1);
      }
      const applyPatchesImpl = getPlugin("Patches").applyPatches_;
      if (isDraft(base)) {
        return applyPatchesImpl(base, patches);
      }
      return this.produce(
        base,
        (draft) => applyPatchesImpl(draft, patches)
      );
    }
  };
  function createProxy(value, parent) {
    const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
    const scope = parent ? parent.scope_ : getCurrentScope();
    scope.drafts_.push(draft);
    return draft;
  }

  // src/core/current.ts
  function current(value) {
    if (!isDraft(value))
      die(10, value);
    return currentImpl(value);
  }
  function currentImpl(value) {
    if (!isDraftable(value) || isFrozen(value))
      return value;
    const state = value[DRAFT_STATE];
    let copy;
    if (state) {
      if (!state.modified_)
        return state.base_;
      state.finalized_ = true;
      copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
    } else {
      copy = shallowCopy(value, true);
    }
    each(copy, (key, childValue) => {
      set(copy, key, currentImpl(childValue));
    });
    if (state) {
      state.finalized_ = false;
    }
    return copy;
  }

  // src/immer.ts
  var immer = new Immer2();
  var produce = immer.produce;
  immer.produceWithPatches.bind(
    immer
  );
  immer.setAutoFreeze.bind(immer);
  immer.setUseStrictShallowCopy.bind(immer);
  immer.applyPatches.bind(immer);
  immer.createDraft.bind(immer);
  immer.finishDraft.bind(immer);

  // src/index.ts
  function createThunkMiddleware(extraArgument) {
    const middleware = ({ dispatch, getState }) => (next) => (action) => {
      if (typeof action === "function") {
        return action(dispatch, getState, extraArgument);
      }
      return next(action);
    };
    return middleware;
  }
  var thunk = createThunkMiddleware();
  var withExtraArgument = createThunkMiddleware;

  // src/index.ts
  var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
    if (arguments.length === 0) return void 0;
    if (typeof arguments[0] === "object") return compose;
    return compose.apply(null, arguments);
  };

  // src/tsHelpers.ts
  var hasMatchFunction = (v) => {
    return v && typeof v.match === "function";
  };

  // src/createAction.ts
  function createAction(type, prepareAction) {
    function actionCreator(...args) {
      if (prepareAction) {
        let prepared = prepareAction(...args);
        if (!prepared) {
          throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(0) : "prepareAction did not return an object");
        }
        return {
          type,
          payload: prepared.payload,
          ..."meta" in prepared && {
            meta: prepared.meta
          },
          ..."error" in prepared && {
            error: prepared.error
          }
        };
      }
      return {
        type,
        payload: args[0]
      };
    }
    actionCreator.toString = () => `${type}`;
    actionCreator.type = type;
    actionCreator.match = (action) => isAction(action) && action.type === type;
    return actionCreator;
  }
  function isActionCreator(action) {
    return typeof action === "function" && "type" in action && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
    hasMatchFunction(action);
  }

  // src/actionCreatorInvariantMiddleware.ts
  function getMessage(type) {
    const splitType = type ? `${type}`.split("/") : [];
    const actionName = splitType[splitType.length - 1] || "actionCreator";
    return `Detected an action creator with type "${type || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${actionName}())\` instead of \`dispatch(${actionName})\`. This is necessary even if the action has no payload.`;
  }
  function createActionCreatorInvariantMiddleware(options = {}) {
    if (process.env.NODE_ENV === "production") {
      return () => (next) => (action) => next(action);
    }
    const {
      isActionCreator: isActionCreator2 = isActionCreator
    } = options;
    return () => (next) => (action) => {
      if (isActionCreator2(action)) {
        console.warn(getMessage(action.type));
      }
      return next(action);
    };
  }
  function getTimeMeasureUtils(maxDelay, fnName) {
    let elapsed = 0;
    return {
      measureTime(fn) {
        const started = Date.now();
        try {
          return fn();
        } finally {
          const finished = Date.now();
          elapsed += finished - started;
        }
      },
      warnIfExceeded() {
        if (elapsed > maxDelay) {
          console.warn(`${fnName} took ${elapsed}ms, which is more than the warning threshold of ${maxDelay}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
        }
      }
    };
  }
  var Tuple = class _Tuple extends Array {
    constructor(...items) {
      super(...items);
      Object.setPrototypeOf(this, _Tuple.prototype);
    }
    static get [Symbol.species]() {
      return _Tuple;
    }
    concat(...arr) {
      return super.concat.apply(this, arr);
    }
    prepend(...arr) {
      if (arr.length === 1 && Array.isArray(arr[0])) {
        return new _Tuple(...arr[0].concat(this));
      }
      return new _Tuple(...arr.concat(this));
    }
  };
  function freezeDraftable(val) {
    return isDraftable(val) ? produce(val, () => {
    }) : val;
  }
  function emplace(map, key, handler) {
    if (map.has(key)) {
      let value = map.get(key);
      if (handler.update) {
        value = handler.update(value, key, map);
        map.set(key, value);
      }
      return value;
    }
    if (!handler.insert) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(10) : "No insert provided for key not already in map");
    const inserted = handler.insert(key, map);
    map.set(key, inserted);
    return inserted;
  }

  // src/immutableStateInvariantMiddleware.ts
  function isImmutableDefault(value) {
    return typeof value !== "object" || value == null || Object.isFrozen(value);
  }
  function trackForMutations(isImmutable, ignorePaths, obj) {
    const trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
    return {
      detectMutations() {
        return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
      }
    };
  }
  function trackProperties(isImmutable, ignorePaths = [], obj, path = "", checkedObjects = /* @__PURE__ */ new Set()) {
    const tracked = {
      value: obj
    };
    if (!isImmutable(obj) && !checkedObjects.has(obj)) {
      checkedObjects.add(obj);
      tracked.children = {};
      for (const key in obj) {
        const childPath = path ? path + "." + key : key;
        if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
          continue;
        }
        tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
      }
    }
    return tracked;
  }
  function detectMutations(isImmutable, ignoredPaths = [], trackedProperty, obj, sameParentRef = false, path = "") {
    const prevObj = trackedProperty ? trackedProperty.value : void 0;
    const sameRef = prevObj === obj;
    if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
      return {
        wasMutated: true,
        path
      };
    }
    if (isImmutable(prevObj) || isImmutable(obj)) {
      return {
        wasMutated: false
      };
    }
    const keysToDetect = {};
    for (let key in trackedProperty.children) {
      keysToDetect[key] = true;
    }
    for (let key in obj) {
      keysToDetect[key] = true;
    }
    const hasIgnoredPaths = ignoredPaths.length > 0;
    for (let key in keysToDetect) {
      const nestedPath = path ? path + "." + key : key;
      if (hasIgnoredPaths) {
        const hasMatches = ignoredPaths.some((ignored) => {
          if (ignored instanceof RegExp) {
            return ignored.test(nestedPath);
          }
          return nestedPath === ignored;
        });
        if (hasMatches) {
          continue;
        }
      }
      const result = detectMutations(isImmutable, ignoredPaths, trackedProperty.children[key], obj[key], sameRef, nestedPath);
      if (result.wasMutated) {
        return result;
      }
    }
    return {
      wasMutated: false
    };
  }
  function createImmutableStateInvariantMiddleware(options = {}) {
    if (process.env.NODE_ENV === "production") {
      return () => (next) => (action) => next(action);
    } else {
      let stringify2 = function(obj, serializer, indent, decycler) {
        return JSON.stringify(obj, getSerialize2(serializer, decycler), indent);
      }, getSerialize2 = function(serializer, decycler) {
        let stack = [], keys = [];
        if (!decycler) decycler = function(_, value) {
          if (stack[0] === value) return "[Circular ~]";
          return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
        };
        return function(key, value) {
          if (stack.length > 0) {
            var thisPos = stack.indexOf(this);
            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
            if (~stack.indexOf(value)) value = decycler.call(this, key, value);
          } else stack.push(value);
          return serializer == null ? value : serializer.call(this, key, value);
        };
      };
      let {
        isImmutable = isImmutableDefault,
        ignoredPaths,
        warnAfter = 32
      } = options;
      const track = trackForMutations.bind(null, isImmutable, ignoredPaths);
      return ({
        getState
      }) => {
        let state = getState();
        let tracker = track(state);
        let result;
        return (next) => (action) => {
          const measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
          measureUtils.measureTime(() => {
            state = getState();
            result = tracker.detectMutations();
            tracker = track(state);
            if (result.wasMutated) {
              throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(19) : `A state mutation was detected between dispatches, in the path '${result.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
            }
          });
          const dispatchedAction = next(action);
          measureUtils.measureTime(() => {
            state = getState();
            result = tracker.detectMutations();
            tracker = track(state);
            if (result.wasMutated) {
              throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(20) : `A state mutation was detected inside a dispatch, in the path: ${result.path || ""}. Take a look at the reducer(s) handling the action ${stringify2(action)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
            }
          });
          measureUtils.warnIfExceeded();
          return dispatchedAction;
        };
      };
    }
  }
  function isPlain(val) {
    const type = typeof val;
    return val == null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject$1(val);
  }
  function findNonSerializableValue(value, path = "", isSerializable = isPlain, getEntries, ignoredPaths = [], cache) {
    let foundNestedSerializable;
    if (!isSerializable(value)) {
      return {
        keyPath: path || "<root>",
        value
      };
    }
    if (typeof value !== "object" || value === null) {
      return false;
    }
    if (cache?.has(value)) return false;
    const entries = getEntries != null ? getEntries(value) : Object.entries(value);
    const hasIgnoredPaths = ignoredPaths.length > 0;
    for (const [key, nestedValue] of entries) {
      const nestedPath = path ? path + "." + key : key;
      if (hasIgnoredPaths) {
        const hasMatches = ignoredPaths.some((ignored) => {
          if (ignored instanceof RegExp) {
            return ignored.test(nestedPath);
          }
          return nestedPath === ignored;
        });
        if (hasMatches) {
          continue;
        }
      }
      if (!isSerializable(nestedValue)) {
        return {
          keyPath: nestedPath,
          value: nestedValue
        };
      }
      if (typeof nestedValue === "object") {
        foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths, cache);
        if (foundNestedSerializable) {
          return foundNestedSerializable;
        }
      }
    }
    if (cache && isNestedFrozen(value)) cache.add(value);
    return false;
  }
  function isNestedFrozen(value) {
    if (!Object.isFrozen(value)) return false;
    for (const nestedValue of Object.values(value)) {
      if (typeof nestedValue !== "object" || nestedValue === null) continue;
      if (!isNestedFrozen(nestedValue)) return false;
    }
    return true;
  }
  function createSerializableStateInvariantMiddleware(options = {}) {
    if (process.env.NODE_ENV === "production") {
      return () => (next) => (action) => next(action);
    } else {
      const {
        isSerializable = isPlain,
        getEntries,
        ignoredActions = [],
        ignoredActionPaths = ["meta.arg", "meta.baseQueryMeta"],
        ignoredPaths = [],
        warnAfter = 32,
        ignoreState = false,
        ignoreActions = false,
        disableCache = false
      } = options;
      const cache = !disableCache && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
      return (storeAPI) => (next) => (action) => {
        if (!isAction(action)) {
          return next(action);
        }
        const result = next(action);
        const measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
        if (!ignoreActions && !(ignoredActions.length && ignoredActions.indexOf(action.type) !== -1)) {
          measureUtils.measureTime(() => {
            const foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths, cache);
            if (foundActionNonSerializableValue) {
              const {
                keyPath,
                value
              } = foundActionNonSerializableValue;
              console.error(`A non-serializable value was detected in an action, in the path: \`${keyPath}\`. Value:`, value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
            }
          });
        }
        if (!ignoreState) {
          measureUtils.measureTime(() => {
            const state = storeAPI.getState();
            const foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths, cache);
            if (foundStateNonSerializableValue) {
              const {
                keyPath,
                value
              } = foundStateNonSerializableValue;
              console.error(`A non-serializable value was detected in the state, in the path: \`${keyPath}\`. Value:`, value, `
Take a look at the reducer(s) handling this action type: ${action.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
            }
          });
          measureUtils.warnIfExceeded();
        }
        return result;
      };
    }
  }

  // src/getDefaultMiddleware.ts
  function isBoolean(x) {
    return typeof x === "boolean";
  }
  var buildGetDefaultMiddleware = () => function getDefaultMiddleware(options) {
    const {
      thunk: thunk$1 = true,
      immutableCheck = true,
      serializableCheck = true,
      actionCreatorCheck = true
    } = options ?? {};
    let middlewareArray = new Tuple();
    if (thunk$1) {
      if (isBoolean(thunk$1)) {
        middlewareArray.push(thunk);
      } else {
        middlewareArray.push(withExtraArgument(thunk$1.extraArgument));
      }
    }
    if (process.env.NODE_ENV !== "production") {
      if (immutableCheck) {
        let immutableOptions = {};
        if (!isBoolean(immutableCheck)) {
          immutableOptions = immutableCheck;
        }
        middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
      }
      if (serializableCheck) {
        let serializableOptions = {};
        if (!isBoolean(serializableCheck)) {
          serializableOptions = serializableCheck;
        }
        middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
      }
      if (actionCreatorCheck) {
        let actionCreatorOptions = {};
        if (!isBoolean(actionCreatorCheck)) {
          actionCreatorOptions = actionCreatorCheck;
        }
        middlewareArray.unshift(createActionCreatorInvariantMiddleware(actionCreatorOptions));
      }
    }
    return middlewareArray;
  };

  // src/autoBatchEnhancer.ts
  var SHOULD_AUTOBATCH = "RTK_autoBatch";
  var createQueueWithTimer = (timeout) => {
    return (notify) => {
      setTimeout(notify, timeout);
    };
  };
  var rAF = typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10);
  var autoBatchEnhancer = (options = {
    type: "raf"
  }) => (next) => (...args) => {
    const store = next(...args);
    let notifying = true;
    let shouldNotifyAtEndOfTick = false;
    let notificationQueued = false;
    const listeners = /* @__PURE__ */ new Set();
    const queueCallback = options.type === "tick" ? queueMicrotask : options.type === "raf" ? rAF : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
    const notifyListeners = () => {
      notificationQueued = false;
      if (shouldNotifyAtEndOfTick) {
        shouldNotifyAtEndOfTick = false;
        listeners.forEach((l) => l());
      }
    };
    return Object.assign({}, store, {
      // Override the base `store.subscribe` method to keep original listeners
      // from running if we're delaying notifications
      subscribe(listener2) {
        const wrappedListener = () => notifying && listener2();
        const unsubscribe = store.subscribe(wrappedListener);
        listeners.add(listener2);
        return () => {
          unsubscribe();
          listeners.delete(listener2);
        };
      },
      // Override the base `store.dispatch` method so that we can check actions
      // for the `shouldAutoBatch` flag and determine if batching is active
      dispatch(action) {
        try {
          notifying = !action?.meta?.[SHOULD_AUTOBATCH];
          shouldNotifyAtEndOfTick = !notifying;
          if (shouldNotifyAtEndOfTick) {
            if (!notificationQueued) {
              notificationQueued = true;
              queueCallback(notifyListeners);
            }
          }
          return store.dispatch(action);
        } finally {
          notifying = true;
        }
      }
    });
  };

  // src/getDefaultEnhancers.ts
  var buildGetDefaultEnhancers = (middlewareEnhancer) => function getDefaultEnhancers(options) {
    const {
      autoBatch = true
    } = options ?? {};
    let enhancerArray = new Tuple(middlewareEnhancer);
    if (autoBatch) {
      enhancerArray.push(autoBatchEnhancer(typeof autoBatch === "object" ? autoBatch : void 0));
    }
    return enhancerArray;
  };

  // src/configureStore.ts
  function configureStore(options) {
    const getDefaultMiddleware = buildGetDefaultMiddleware();
    const {
      reducer = void 0,
      middleware,
      devTools = true,
      preloadedState = void 0,
      enhancers = void 0
    } = options || {};
    let rootReducer;
    if (typeof reducer === "function") {
      rootReducer = reducer;
    } else if (isPlainObject$1(reducer)) {
      rootReducer = combineReducers(reducer);
    } else {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
    }
    if (process.env.NODE_ENV !== "production" && middleware && typeof middleware !== "function") {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(2) : "`middleware` field must be a callback");
    }
    let finalMiddleware;
    if (typeof middleware === "function") {
      finalMiddleware = middleware(getDefaultMiddleware);
      if (process.env.NODE_ENV !== "production" && !Array.isArray(finalMiddleware)) {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(3) : "when using a middleware builder function, an array of middleware must be returned");
      }
    } else {
      finalMiddleware = getDefaultMiddleware();
    }
    if (process.env.NODE_ENV !== "production" && finalMiddleware.some((item) => typeof item !== "function")) {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(4) : "each middleware provided to configureStore must be a function");
    }
    let finalCompose = compose;
    if (devTools) {
      finalCompose = composeWithDevTools({
        // Enable capture of stack traces for dispatched Redux actions
        trace: process.env.NODE_ENV !== "production",
        ...typeof devTools === "object" && devTools
      });
    }
    const middlewareEnhancer = applyMiddleware(...finalMiddleware);
    const getDefaultEnhancers = buildGetDefaultEnhancers(middlewareEnhancer);
    if (process.env.NODE_ENV !== "production" && enhancers && typeof enhancers !== "function") {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(5) : "`enhancers` field must be a callback");
    }
    let storeEnhancers = typeof enhancers === "function" ? enhancers(getDefaultEnhancers) : getDefaultEnhancers();
    if (process.env.NODE_ENV !== "production" && !Array.isArray(storeEnhancers)) {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(6) : "`enhancers` callback must return an array");
    }
    if (process.env.NODE_ENV !== "production" && storeEnhancers.some((item) => typeof item !== "function")) {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(7) : "each enhancer provided to configureStore must be a function");
    }
    if (process.env.NODE_ENV !== "production" && finalMiddleware.length && !storeEnhancers.includes(middlewareEnhancer)) {
      console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
    }
    const composedEnhancer = finalCompose(...storeEnhancers);
    return createStore(rootReducer, preloadedState, composedEnhancer);
  }

  // src/mapBuilders.ts
  function executeReducerBuilderCallback(builderCallback) {
    const actionsMap = {};
    const actionMatchers = [];
    let defaultCaseReducer;
    const builder = {
      addCase(typeOrActionCreator, reducer) {
        if (process.env.NODE_ENV !== "production") {
          if (actionMatchers.length > 0) {
            throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
          }
          if (defaultCaseReducer) {
            throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
          }
        }
        const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
        if (!type) {
          throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(28) : "`builder.addCase` cannot be called with an empty action type");
        }
        if (type in actionsMap) {
          throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${type}'`);
        }
        actionsMap[type] = reducer;
        return builder;
      },
      addMatcher(matcher, reducer) {
        if (process.env.NODE_ENV !== "production") {
          if (defaultCaseReducer) {
            throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
          }
        }
        actionMatchers.push({
          matcher,
          reducer
        });
        return builder;
      },
      addDefaultCase(reducer) {
        if (process.env.NODE_ENV !== "production") {
          if (defaultCaseReducer) {
            throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(31) : "`builder.addDefaultCase` can only be called once");
          }
        }
        defaultCaseReducer = reducer;
        return builder;
      }
    };
    builderCallback(builder);
    return [actionsMap, actionMatchers, defaultCaseReducer];
  }

  // src/createReducer.ts
  function isStateFunction(x) {
    return typeof x === "function";
  }
  function createReducer(initialState, mapOrBuilderCallback) {
    if (process.env.NODE_ENV !== "production") {
      if (typeof mapOrBuilderCallback === "object") {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
      }
    }
    let [actionsMap, finalActionMatchers, finalDefaultCaseReducer] = executeReducerBuilderCallback(mapOrBuilderCallback);
    let getInitialState;
    if (isStateFunction(initialState)) {
      getInitialState = () => freezeDraftable(initialState());
    } else {
      const frozenInitialState = freezeDraftable(initialState);
      getInitialState = () => frozenInitialState;
    }
    function reducer(state = getInitialState(), action) {
      let caseReducers = [actionsMap[action.type], ...finalActionMatchers.filter(({
        matcher
      }) => matcher(action)).map(({
        reducer: reducer2
      }) => reducer2)];
      if (caseReducers.filter((cr) => !!cr).length === 0) {
        caseReducers = [finalDefaultCaseReducer];
      }
      return caseReducers.reduce((previousState, caseReducer) => {
        if (caseReducer) {
          if (isDraft(previousState)) {
            const draft = previousState;
            const result = caseReducer(draft, action);
            if (result === void 0) {
              return previousState;
            }
            return result;
          } else if (!isDraftable(previousState)) {
            const result = caseReducer(previousState, action);
            if (result === void 0) {
              if (previousState === null) {
                return previousState;
              }
              throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return result;
          } else {
            return produce(previousState, (draft) => {
              return caseReducer(draft, action);
            });
          }
        }
        return previousState;
      }, state);
    }
    reducer.getInitialState = getInitialState;
    return reducer;
  }

  // src/createSlice.ts
  var asyncThunkSymbol = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
  function getType(slice, actionKey) {
    return `${slice}/${actionKey}`;
  }
  function buildCreateSlice({
    creators
  } = {}) {
    const cAT = creators?.asyncThunk?.[asyncThunkSymbol];
    return function createSlice2(options) {
      const {
        name,
        reducerPath = name
      } = options;
      if (!name) {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(11) : "`name` is a required option for createSlice");
      }
      if (typeof process !== "undefined" && process.env.NODE_ENV === "development") {
        if (options.initialState === void 0) {
          console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
        }
      }
      const reducers = (typeof options.reducers === "function" ? options.reducers(buildReducerCreators()) : options.reducers) || {};
      const reducerNames = Object.keys(reducers);
      const context = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: []
      };
      const contextMethods = {
        addCase(typeOrActionCreator, reducer2) {
          const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
          if (!type) {
            throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(12) : "`context.addCase` cannot be called with an empty action type");
          }
          if (type in context.sliceCaseReducersByType) {
            throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + type);
          }
          context.sliceCaseReducersByType[type] = reducer2;
          return contextMethods;
        },
        addMatcher(matcher, reducer2) {
          context.sliceMatchers.push({
            matcher,
            reducer: reducer2
          });
          return contextMethods;
        },
        exposeAction(name2, actionCreator) {
          context.actionCreators[name2] = actionCreator;
          return contextMethods;
        },
        exposeCaseReducer(name2, reducer2) {
          context.sliceCaseReducersByName[name2] = reducer2;
          return contextMethods;
        }
      };
      reducerNames.forEach((reducerName) => {
        const reducerDefinition = reducers[reducerName];
        const reducerDetails = {
          reducerName,
          type: getType(name, reducerName),
          createNotation: typeof options.reducers === "function"
        };
        if (isAsyncThunkSliceReducerDefinition(reducerDefinition)) {
          handleThunkCaseReducerDefinition(reducerDetails, reducerDefinition, contextMethods, cAT);
        } else {
          handleNormalReducerDefinition(reducerDetails, reducerDefinition, contextMethods);
        }
      });
      function buildReducer() {
        if (process.env.NODE_ENV !== "production") {
          if (typeof options.extraReducers === "object") {
            throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
          }
        }
        const [extraReducers = {}, actionMatchers = [], defaultCaseReducer = void 0] = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers];
        const finalCaseReducers = {
          ...extraReducers,
          ...context.sliceCaseReducersByType
        };
        return createReducer(options.initialState, (builder) => {
          for (let key in finalCaseReducers) {
            builder.addCase(key, finalCaseReducers[key]);
          }
          for (let sM of context.sliceMatchers) {
            builder.addMatcher(sM.matcher, sM.reducer);
          }
          for (let m of actionMatchers) {
            builder.addMatcher(m.matcher, m.reducer);
          }
          if (defaultCaseReducer) {
            builder.addDefaultCase(defaultCaseReducer);
          }
        });
      }
      const selectSelf = (state) => state;
      const injectedSelectorCache = /* @__PURE__ */ new Map();
      let _reducer;
      function reducer(state, action) {
        if (!_reducer) _reducer = buildReducer();
        return _reducer(state, action);
      }
      function getInitialState() {
        if (!_reducer) _reducer = buildReducer();
        return _reducer.getInitialState();
      }
      function makeSelectorProps(reducerPath2, injected = false) {
        function selectSlice(state) {
          let sliceState = state[reducerPath2];
          if (typeof sliceState === "undefined") {
            if (injected) {
              sliceState = getInitialState();
            } else if (process.env.NODE_ENV !== "production") {
              throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(15) : "selectSlice returned undefined for an uninjected slice reducer");
            }
          }
          return sliceState;
        }
        function getSelectors(selectState = selectSelf) {
          const selectorCache = emplace(injectedSelectorCache, injected, {
            insert: () => /* @__PURE__ */ new WeakMap()
          });
          return emplace(selectorCache, selectState, {
            insert: () => {
              const map = {};
              for (const [name2, selector] of Object.entries(options.selectors ?? {})) {
                map[name2] = wrapSelector(selector, selectState, getInitialState, injected);
              }
              return map;
            }
          });
        }
        return {
          reducerPath: reducerPath2,
          getSelectors,
          get selectors() {
            return getSelectors(selectSlice);
          },
          selectSlice
        };
      }
      const slice = {
        name,
        reducer,
        actions: context.actionCreators,
        caseReducers: context.sliceCaseReducersByName,
        getInitialState,
        ...makeSelectorProps(reducerPath),
        injectInto(injectable, {
          reducerPath: pathOpt,
          ...config
        } = {}) {
          const newReducerPath = pathOpt ?? reducerPath;
          injectable.inject({
            reducerPath: newReducerPath,
            reducer
          }, config);
          return {
            ...slice,
            ...makeSelectorProps(newReducerPath, true)
          };
        }
      };
      return slice;
    };
  }
  function wrapSelector(selector, selectState, getInitialState, injected) {
    function wrapper(rootState, ...args) {
      let sliceState = selectState(rootState);
      if (typeof sliceState === "undefined") {
        if (injected) {
          sliceState = getInitialState();
        } else if (process.env.NODE_ENV !== "production") {
          throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(16) : "selectState returned undefined for an uninjected slice reducer");
        }
      }
      return selector(sliceState, ...args);
    }
    wrapper.unwrapped = selector;
    return wrapper;
  }
  var createSlice = /* @__PURE__ */ buildCreateSlice();
  function buildReducerCreators() {
    function asyncThunk(payloadCreator, config) {
      return {
        _reducerDefinitionType: "asyncThunk" /* asyncThunk */,
        payloadCreator,
        ...config
      };
    }
    asyncThunk.withTypes = () => asyncThunk;
    return {
      reducer(caseReducer) {
        return Object.assign({
          // hack so the wrapping function has the same name as the original
          // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
          [caseReducer.name](...args) {
            return caseReducer(...args);
          }
        }[caseReducer.name], {
          _reducerDefinitionType: "reducer" /* reducer */
        });
      },
      preparedReducer(prepare, reducer) {
        return {
          _reducerDefinitionType: "reducerWithPrepare" /* reducerWithPrepare */,
          prepare,
          reducer
        };
      },
      asyncThunk
    };
  }
  function handleNormalReducerDefinition({
    type,
    reducerName,
    createNotation
  }, maybeReducerWithPrepare, context) {
    let caseReducer;
    let prepareCallback;
    if ("reducer" in maybeReducerWithPrepare) {
      if (createNotation && !isCaseReducerWithPrepareDefinition(maybeReducerWithPrepare)) {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
      }
      caseReducer = maybeReducerWithPrepare.reducer;
      prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
      caseReducer = maybeReducerWithPrepare;
    }
    context.addCase(type, caseReducer).exposeCaseReducer(reducerName, caseReducer).exposeAction(reducerName, prepareCallback ? createAction(type, prepareCallback) : createAction(type));
  }
  function isAsyncThunkSliceReducerDefinition(reducerDefinition) {
    return reducerDefinition._reducerDefinitionType === "asyncThunk" /* asyncThunk */;
  }
  function isCaseReducerWithPrepareDefinition(reducerDefinition) {
    return reducerDefinition._reducerDefinitionType === "reducerWithPrepare" /* reducerWithPrepare */;
  }
  function handleThunkCaseReducerDefinition({
    type,
    reducerName
  }, reducerDefinition, context, cAT) {
    if (!cAT) {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
    }
    const {
      payloadCreator,
      fulfilled,
      pending,
      rejected,
      settled,
      options
    } = reducerDefinition;
    const thunk = cAT(type, payloadCreator, options);
    context.exposeAction(reducerName, thunk);
    if (fulfilled) {
      context.addCase(thunk.fulfilled, fulfilled);
    }
    if (pending) {
      context.addCase(thunk.pending, pending);
    }
    if (rejected) {
      context.addCase(thunk.rejected, rejected);
    }
    if (settled) {
      context.addMatcher(thunk.settled, settled);
    }
    context.exposeCaseReducer(reducerName, {
      fulfilled: fulfilled || noop,
      pending: pending || noop,
      rejected: rejected || noop,
      settled: settled || noop
    });
  }
  function noop() {
  }

  // src/formatProdErrorMessage.ts
  function formatProdErrorMessage(code) {
    return `Minified Redux Toolkit error #${code}; visit https://redux-toolkit.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
  }

  // const a: number = 0;

  const counterSlice = createSlice({
      name: 'counter',
      initialState: {
          value: 0
      },
      reducers: {
          incremented: state => {
              // Redux Toolkit allows us to write "mutating" logic in reducers. It
              // doesn't actually mutate the state because it uses the Immer library,
              // which detects changes to a "draft state" and produces a brand new
              // immutable state based off those changes
              state.value += 1;
          },
          decremented: state => {
              state.value -= 1;
          }
      }
  });

  const { incremented, decremented } = counterSlice.actions;

  const store = configureStore({
      reducer: counterSlice.reducer
  });

  function Title() {
    const count = useSelector(state => state.value);
    return _$1("h3", null, "Total count ", count);
  }

  //@ts-check


  /// typescript

  // type Props = PropsWithChildren<{ nameTitle: string }>;

  /// jsx 

  // const App: FC<Props> = ({ nameTitle, children }, context?: unknown) => {
  const App = ({
    nameTitle,
    children
  }, context) => {
    _(() => console.log('effect'));
    const dispatch = useDispatch();
    console.log(context);
    return _$1(k$2, null, _$1("main", null, _$1("h1", {
      className: style.title
    }, nameTitle, "!!"), _$1("p", null, _$1("h4", {
      style: {
        color: 'blueviolet'
      }
    }, "Ready to build something amazing?"), _$1(Title, null), _$1("button", {
      onClick: () => dispatch(incremented())
    }, "increment"), _$1("hr", null), _$1("a", {
      href: "https://github.com/natemoo-re/microsite/tree/main/docs"
    }, "Read the docs"), " to get started.")));
  };

  //@ts-check


  // import { initStore } from "./store/source/store";	// ~8kb min
  // // import "./global.css"

  // const xStore = initStore({
  // 	count: 10
  // })

  // xStore.useStore('count', 8)

  B$2(_$1(Provider_default, {
    store: store
  }, _$1(App, {
    nameTitle: "Welcome to Microsite!!"
  }, " ")),
  // <App />,
  document.getElementById('root'));

})();
//# sourceMappingURL=bundle.js.map
