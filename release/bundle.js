!function(){"use strict";var t,e,n,r,o,i,u,l={},_=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(t,e){for(var n in e)t[n]=e[n];return t}function s(t){var e=t.parentNode;e&&e.removeChild(t)}function p(t,e,n){var r,o=arguments,i={};for(r in e)"key"!==r&&"ref"!==r&&(i[r]=e[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===i[r]&&(i[r]=t.defaultProps[r]);return f(t,i,e&&e.key,e&&e.ref,null)}function f(e,n,r,o,i){var u={type:e,props:n,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i};return null==i&&(u.__v=u),t.vnode&&t.vnode(u),u}function h(t){return t.children}function d(t,e){this.props=t,this.context=e}function v(t,e){if(null==e)return t.__?v(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?v(t):null}function y(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return y(t)}}function m(e){(!e.__d&&(e.__d=!0)&&n.push(e)&&!g.__r++||o!==t.debounceRendering)&&((o=t.debounceRendering)||r)(g)}function g(){for(var t;g.__r=n.length;)t=n.sort((function(t,e){return t.__v.__b-e.__v.__b})),n=[],t.some((function(t){var e,n,r,o,i,u,l;t.__d&&(u=(i=(e=t).__v).__e,(l=e.__P)&&(n=[],(r=a({},i)).__v=r,o=A(l,i,r,e.__n,void 0!==l.ownerSVGElement,null,n,null==u?v(i):u),O(n,i),o!=u&&y(i)))}))}function b(t,e,n,r,o,i,u,c,a,p){var d,y,m,g,b,k,x,w=r&&r.__k||_,P=w.length;for(a==l&&(a=null!=u?u[0]:P?v(r,0):null),n.__k=[],d=0;d<e.length;d++)if(null!=(g=n.__k[d]=null==(g=e[d])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?f(null,g,null,null,g):Array.isArray(g)?f(h,{children:g},null,null,null):null!=g.__e||null!=g.__c?f(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(m=w[d])||m&&g.key==m.key&&g.type===m.type)w[d]=void 0;else for(y=0;y<P;y++){if((m=w[y])&&g.key==m.key&&g.type===m.type){w[y]=void 0;break}m=null}b=A(t,g,m=m||l,o,i,u,c,a,p),(y=g.ref)&&m.ref!=y&&(x||(x=[]),m.ref&&x.push(m.ref,null,g),x.push(y,g.__c||b,g)),null!=b?(null==k&&(k=b),a=C(t,g,m,w,u,b,a),"option"==n.type?t.value="":"function"==typeof n.type&&(n.__d=a)):a&&m.__e==a&&a.parentNode!=t&&(a=v(m))}if(n.__e=k,null!=u&&"function"!=typeof n.type)for(d=u.length;d--;)null!=u[d]&&s(u[d]);for(d=P;d--;)null!=w[d]&&L(w[d],w[d]);if(x)for(d=0;d<x.length;d++)S(x[d],x[++d],x[++d])}function k(t){return null==t||"boolean"==typeof t?[]:Array.isArray(t)?_.concat.apply([],t.map(k)):[t]}function C(t,e,n,r,o,i,u){var l,_,c;if(void 0!==e.__d)l=e.__d,e.__d=void 0;else if(o==n||i!=u||null==i.parentNode)t:if(null==u||u.parentNode!==t)t.appendChild(i),l=null;else{for(_=u,c=0;(_=_.nextSibling)&&c<r.length;c+=2)if(_==i)break t;t.insertBefore(i,u),l=u}return void 0!==l?l:i.nextSibling}function x(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===c.test(e)?n+"px":null==n?"":n}function w(t,e,n,r,o){var i,u,l,_,c;if(o?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(i=t.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(_ in r)n&&_ in n||x(i,_,"");if(n)for(c in n)r&&n[c]===r[c]||x(i,c,n[c])}else"o"===e[0]&&"n"===e[1]?(u=e!==(e=e.replace(/Capture$/,"")),l=e.toLowerCase(),e=(l in t?l:e).slice(2),n?(r||t.addEventListener(e,P,u),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,P,u)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&!o&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function P(e){this.l[e.type](t.event?t.event(e):e)}function U(t,e,n){var r,o;for(r=0;r<t.__k.length;r++)(o=t.__k[r])&&(o.__=t,o.__e&&("function"==typeof o.type&&o.__k.length>1&&U(o,e,n),e=C(n,o,o,t.__k,null,o.__e,e),"function"==typeof t.type&&(t.__d=e)))}function A(e,n,r,o,i,u,l,_,c){var s,p,f,v,y,m,g,k,C,x,w,P=n.type;if(void 0!==n.constructor)return null;(s=t.__b)&&s(n);try{t:if("function"==typeof P){if(k=n.props,C=(s=P.contextType)&&o[s.__c],x=s?C?C.props.value:s.__:o,r.__c?g=(p=n.__c=r.__c).__=p.__E:("prototype"in P&&P.prototype.render?n.__c=p=new P(k,x):(n.__c=p=new d(k,x),p.constructor=P,p.render=M),C&&C.sub(p),p.props=k,p.state||(p.state={}),p.context=x,p.__n=o,f=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=P.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=a({},p.__s)),a(p.__s,P.getDerivedStateFromProps(k,p.__s))),v=p.props,y=p.state,f)null==P.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(k,x),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(k,p.__s,x)||n.__v===r.__v){p.props=k,p.state=p.__s,n.__v!==r.__v&&(p.__d=!1),p.__v=n,n.__e=r.__e,n.__k=r.__k,p.__h.length&&l.push(p),U(n,_,e);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,x),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}p.context=x,p.props=k,p.state=p.__s,(s=t.__r)&&s(n),p.__d=!1,p.__v=n,p.__P=e,s=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=a(a({},o),p.getChildContext())),f||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),w=null!=s&&s.type==h&&null==s.key?s.props.children:s,b(e,Array.isArray(w)?w:[w],n,r,o,i,u,l,_,c),p.base=n.__e,p.__h.length&&l.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==u&&n.__v===r.__v?(n.__k=r.__k,n.__e=r.__e):n.__e=E(r.__e,n,r,o,i,u,l,c);(s=t.diffed)&&s(n)}catch(e){n.__v=null,t.__e(e,n,r)}return n.__e}function O(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(t){t.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function E(t,e,n,r,o,i,u,c){var a,s,p,f,h,d=n.props,v=e.props;if(o="svg"===e.type||o,null!=i)for(a=0;a<i.length;a++)if(null!=(s=i[a])&&((null===e.type?3===s.nodeType:s.localName===e.type)||t==s)){t=s,i[a]=null;break}if(null==t){if(null===e.type)return document.createTextNode(v);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,v.is&&{is:v.is}),i=null,c=!1}if(null===e.type)d!==v&&t.data!=v&&(t.data=v);else{if(null!=i&&(i=_.slice.call(t.childNodes)),p=(d=n.props||l).dangerouslySetInnerHTML,f=v.dangerouslySetInnerHTML,!c){if(null!=i)for(d={},h=0;h<t.attributes.length;h++)d[t.attributes[h].name]=t.attributes[h].value;(f||p)&&(f&&p&&f.__html==p.__html||(t.innerHTML=f&&f.__html||""))}(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||w(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||w(t,i,e[i],n[i],r)})(t,v,d,o,c),f?e.__k=[]:(a=e.props.children,b(t,Array.isArray(a)?a:[a],e,n,r,"foreignObject"!==e.type&&o,i,u,l,c)),c||("value"in v&&void 0!==(a=v.value)&&a!==t.value&&w(t,"value",a,d.value,!1),"checked"in v&&void 0!==(a=v.checked)&&a!==t.checked&&w(t,"checked",a,d.checked,!1))}return t}function S(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,r)}}function L(e,n,r){var o,i,u;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||S(o,null,n)),r||"function"==typeof e.type||(r=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(u=0;u<o.length;u++)o[u]&&L(o[u],n,r);null!=i&&s(i)}function M(t,e,n){return this.constructor(t,n)}function T(e,n,r){var o,u,c;t.__&&t.__(e,n),u=(o=r===i)?null:r&&r.__k||n.__k,e=p(h,null,[e]),c=[],A(n,(o?n:r||n).__k=e,u||l,l,void 0!==n.ownerSVGElement,r&&!o?[r]:u?null:n.childNodes.length?_.slice.call(n.childNodes):null,c,r||l,o),O(c,e)}function j(t,e){var n,r;for(r in e=a(a({},t.props),e),arguments.length>2&&(e.children=_.slice.call(arguments,2)),n={},e)"key"!==r&&"ref"!==r&&(n[r]=e[r]);return f(t.type,n,e.key||t.key,e.ref||t.ref,null)}t={__e:function(t,e){for(var n,r;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(t)),r)return m(n.__E=n)}catch(e){t=e}throw t}},e=function(t){return null!=t&&void 0===t.constructor},d.prototype.setState=function(t,e){var n;n=this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&a(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),m(this))},d.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),m(this))},d.prototype.render=h,n=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,i=l,u=0;var H=Object.freeze({__proto__:null,render:T,hydrate:function(t,e){T(t,e,i)},createElement:p,h:p,Fragment:h,createRef:function(){return{current:null}},get isValidElement(){return e},Component:d,cloneElement:j,createContext:function(t){var e={},n={__c:"__cC"+u++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return e[n.__c]=o,e},this.shouldComponentUpdate=function(t){o.props.value!==t.value&&r.some((function(e){e.context=t.value,m(e)}))},this.sub=function(t){r.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){r.splice(r.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Consumer.contextType=n,n.Provider.__=n,n},toChildArray:k,__u:L,get options(){return t}}),D={};function N(t,e){for(var n in e)t[n]=e[n];return t}function R(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var l=i[1].split("&"),_=0;_<l.length;_++){var c=l[_].split("=");u[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}t=I(t.replace(o,"")),e=I(e||"");for(var a=Math.max(t.length,e.length),s=0;s<a;s++)if(e[s]&&":"===e[s].charAt(0)){var p=e[s].replace(/(^:|[+*?]+$)/g,""),f=(e[s].match(/[+*?]+$/)||D)[0]||"",h=~f.indexOf("+"),d=~f.indexOf("*"),v=t[s]||"";if(!v&&!d&&(f.indexOf("?")<0||h)){r=!1;break}if(u[p]=decodeURIComponent(v),h||d){u[p]=t.slice(s).map(decodeURIComponent).join("/");break}}else if(e[s]!==t[s]){r=!1;break}return(!0===n.default||!1!==r)&&u}function W(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function F(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,I(e).map(K).join(""));var e}(t),t.props}function I(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function K(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var $=null,B=[],q=[],z={};function V(){var t;return""+((t=$&&$.location?$.location:$&&$.getCurrentLocation?$.getCurrentLocation():"undefined"!=typeof location?location:z).pathname||"")+(t.search||"")}function G(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=B.length;e--;)if(B[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),$&&$[e]?$[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),J(t)}function J(t){for(var e=!1,n=0;n<B.length;n++)!0===B[n].routeTo(t)&&(e=!0);for(var r=q.length;r--;)q[r](t);return e}function Q(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return G(e)}}function X(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return Q(t.currentTarget||t.target||this),Y(t)}function Y(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function Z(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(Q(e))return Y(t)}}while(e=e.parentNode)}}var tt=!1;var et=function(t){function e(e){t.call(this,e),e.history&&($=e.history),this.state={url:e.url||V()},tt||("function"==typeof addEventListener&&($||addEventListener("popstate",(function(){J(V())})),addEventListener("click",Z)),tt=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=k(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){B.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;$&&(this.unlisten=$.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),B.splice(B.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(F).sort(W).map((function(t){var r=R(e,t.props.path,t.props);if(r){if(!1!==n){var o={url:e,matches:r};return N(o,r),delete o.ref,delete o.key,j(t,o)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(k(n),o,!0),u=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:u})),u},e}(d),nt=function(t){return p("a",N({onClick:X},t))},rt=function(t){return p(t.component,t)};et.subscribers=q,et.getCurrentUrl=V,et.route=G,et.Router=et,et.Route=rt,et.Link=nt,et.exec=R;var ot=Object.freeze({__proto__:null,subscribers:q,getCurrentUrl:V,route:G,Router:et,Route:rt,Link:nt,exec:R,default:et});function it(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})})),e}var ut,lt,_t,ct,at=it(H),st=it(ot),pt=(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var i=e.Match=function(t){function e(){var n,i;r(this,e);for(var u=arguments.length,l=Array(u),_=0;_<u;_++)l[_]=arguments[_];return n=i=o(this,t.call.apply(t,[this].concat(l))),i.update=function(t){i.nextUrl=t,i.setState({})},o(i,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){st.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){st.subscribers.splice(st.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,st.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,st.exec)(n,t.path,{})})},e}(at.Component),u=function(t){var e=t.activeClassName,r=t.path,o=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,at.h)(i,{path:r||o.href},(function(t){var r=t.matches;return(0,at.h)(st.Link,n({},o,{class:[o.class||o.className,r&&e].filter(Boolean).join(" ")}))}))};e.Link=u,e.default=i,i.Link=u}(ut={exports:{}},ut.exports),ut.exports),ft=0,ht=[],dt=t.__r,vt=t.diffed,yt=t.__c,mt=t.unmount;function gt(e,n){t.__h&&t.__h(_t,e,ft||n),ft=0;var r=_t.__H||(_t.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function bt(t){return ft=1,function(t,e,n){var r=gt(lt++,2);return r.t=t,r.__c||(r.__c=_t,r.__=[n?n(e):Pt(void 0,e),function(t){var e=r.t(r.__[0],t);r.__[0]!==e&&(r.__=[e,r.__[1]],r.__c.setState({}))}]),r.__}(Pt,t)}function kt(){ht.some((function(e){if(e.__P)try{e.__H.__h.forEach(xt),e.__H.__h.forEach(wt),e.__H.__h=[]}catch(n){return e.__H.__h=[],t.__e(n,e.__v),!0}})),ht=[]}t.__r=function(t){dt&&dt(t),lt=0;var e=(_t=t.__c).__H;e&&(e.__h.forEach(xt),e.__h.forEach(wt),e.__h=[])},t.diffed=function(e){vt&&vt(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==ht.push(n)&&ct===t.requestAnimationFrame||((ct=t.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),Ct&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);Ct&&(e=requestAnimationFrame(n))})(kt))},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(xt),e.__h=e.__h.filter((function(t){return!t.__||wt(t)}))}catch(r){n.some((function(t){t.__h&&(t.__h=[])})),n=[],t.__e(r,e.__v)}})),yt&&yt(e,n)},t.unmount=function(e){mt&&mt(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(xt)}catch(e){t.__e(e,n.__v)}};var Ct="function"==typeof requestAnimationFrame;function xt(t){"function"==typeof t.u&&t.u()}function wt(t){t.u=t.__()}function Pt(t,e){return"function"==typeof e?e(t):e}var Ut="style_header__2lFIG";const At=t=>{const[e]=bt("cls");return p("header",{class:Ut},p("h1",null,"Preact App"),p("nav",null,p(pt.Link,{href:"/"},"Home"),p(pt.Link,{href:"/profile"},"Me"),p(pt.Link,{href:"/profile/john"},"John")))};var Ot="style_home__3tvhr";const Et=()=>p("div",{class:Ot},p("h1",null,"Home"),p("p",null,"This is the Home component."));var St="style_profile__xsQVA";const Lt=({user:e})=>{const[n,r]=bt(Date.now()),[o,i]=bt(10);return function(e,n){var r=gt(lt++,3);!t.__s&&function(t,e){return!t||e.some((function(e,n){return e!==t[n]}))}(r.__H,n)&&(r.__=e,r.__H=n,_t.__H.__h.push(r))}(()=>{let t=setInterval(()=>r(Date.now()),1e3);return()=>clearInterval(t)},[]),p("div",{class:St},p("h1",null,"Profile: ",e),p("p",null,"This is the user profile for a user named ",e,"."),p("div",null,"Current time: ",new Date(n).toLocaleString()),p("p",null,p("button",{onClick:()=>i(t=>t+1)},"Click Me")," ","Clicked ",o," times."))};T(p(()=>p("div",{id:"app"},p(At,null),p(et,null,p(Et,{path:"/"}),p(Lt,{path:"/profile/",user:"me"}),p(Lt,{path:"/profile/:user"}))),null),document.getElementById("root"))}();
//# sourceMappingURL=bundle.js.map
