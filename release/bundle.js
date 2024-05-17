
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
	'use strict';

	var n,l$1,u$1,t$1,i$1,o$1,r$1,f$1,e$1,c$1,s$1,a$1,h$1={},p$1=[],v$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y$1=Array.isArray;function d$1(n,l){for(var u in l)n[u]=l[u];return n}function w$1(n){var l=n.parentNode;l&&l.removeChild(n);}function _$1(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return g$1(l,f,i,o,null)}function g$1(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u$1:r,__i:-1,__u:0};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function m$1(){return {current:null}}function k$1(n){return n.children}function b(n,l){this.props=n,this.context=l;}function x(n,l){if(null==l)return n.__?x(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?x(n):null}function C$2(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C$2(n)}}function M$1(n){(!n.__d&&(n.__d=!0)&&i$1.push(n)&&!P.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||r$1)(P);}function P(){var n,u,t,o,r,e,c,s;for(i$1.sort(f$1);n=i$1.shift();)n.__d&&(u=i$1.length,o=void 0,e=(r=(t=n).__v).__e,c=[],s=[],t.__P&&((o=d$1({},r)).__v=r.__v+1,l$1.vnode&&l$1.vnode(o),O$1(t.__P,o,r,t.__n,t.__P.namespaceURI,32&r.__u?[e]:null,c,null==e?x(r):e,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,j$1(c,o,s),o.__e!=e&&C$2(o)),i$1.length>u&&i$1.sort(f$1));P.__r=0;}function S(n,l,u,t,i,o,r,f,e,c,s){var a,v,y,d,w,_=t&&t.__k||p$1,g=l.length;for(u.__d=e,$$1(u,l,_),e=u.__d,a=0;a<g;a++)null!=(y=u.__k[a])&&"boolean"!=typeof y&&"function"!=typeof y&&(v=-1===y.__i?h$1:_[y.__i]||h$1,y.__i=a,O$1(n,y,v,i,o,r,f,e,c,s),d=y.__e,y.ref&&v.ref!=y.ref&&(v.ref&&N(v.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),65536&y.__u||v.__k===y.__k?(e&&!e.isConnected&&(e=x(v)),e=I(y,e,n)):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=w;}function $$1(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)r=t+a,null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?g$1(null,i,null,null,null):y$1(i)?g$1(k$1,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?g$1(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=L$1(i,u,r,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f===r+1?a++:f>r?s>e-r?a+=f-r:a--:f<r?f==r-1&&(a=f-r):a=0,f!==t+a&&(i.__u|=65536))):(o=u[r])&&null==o.key&&o.__e&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V$1(o,o,!1),u[r]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V$1(o,o));}function I(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=I(t[i],l,u));return l}n.__e!=l&&(u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8===l.nodeType);return l}function H$1(n,l){return l=l||[],null==n||"boolean"==typeof n||(y$1(n)?n.some(function(n){H$1(n,l);}):l.push(n)),l}function L$1(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++;}}return -1}function T$1(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||v$1.test(l)?u:u+"px";}function A$1(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T$1(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=e$1,n.addEventListener(l,o?s$1:c$1,o)):n.removeEventListener(l,o?s$1:c$1,o);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u));}}function F(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=e$1++;else if(u.t<t.u)return;return t(l$1.event?l$1.event(u):u)}}}function O$1(n,u,t,i,o,r,f,e,c,s){var a,h,p,v,w,_,g,m,x,C,M,P,$,I,H,L=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l$1.__b)&&a(u);n:if("function"==typeof L)try{if(m=u.props,x=(a=L.contextType)&&i[a.__c],C=a?x?x.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:("prototype"in L&&L.prototype.render?u.__c=h=new L(m,C):(u.__c=h=new b(m,C),h.constructor=L,h.render=q),x&&x.sub(h),h.props=m,h.state||(h.state={}),h.context=C,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),null==h.__s&&(h.__s=h.state),null!=L.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d$1({},h.__s)),d$1(h.__s,L.getDerivedStateFromProps(m,h.__s))),v=h.props,w=h.state,h.__v=u,p)null==L.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==L.getDerivedStateFromProps&&m!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,C),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,C)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=m,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),M=0;M<h._sb.length;M++)h.__h.push(h._sb[M]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,C),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,w,_);});}if(h.context=C,h.props=m,h.__P=n,h.__e=!1,P=l$1.__r,$=0,"prototype"in L&&L.prototype.render){for(h.state=h.__s,h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),I=0;I<h._sb.length;I++)h.__h.push(h._sb[I]);h._sb=[];}else do{h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++$<25);h.state=h.__s,null!=h.getChildContext&&(i=d$1(d$1({},i),h.getChildContext())),p||null==h.getSnapshotBeforeUpdate||(_=h.getSnapshotBeforeUpdate(v,w)),S(n,y$1(H=null!=a&&a.type===k$1&&null==a.key?a.props.children:a)?H:[H],u,t,i,o,r,f,e,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&f.push(h),g&&(h.__E=h.__=null);}catch(n){u.__v=null,c||null!=r?(u.__e=e,u.__u|=c?160:32,r[r.indexOf(e)]=null):(u.__e=t.__e,u.__k=t.__k),l$1.__e(n,u,t);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z$2(t.__e,u,t,i,o,r,f,c,s);(a=l$1.diffed)&&a(u);}function j$1(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)N(t[i],t[++i],t[++i]);l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function z$2(l,u,t,i,o,r,f,e,c){var s,a,p,v,d,_,g,m=t.props,k=u.props,b=u.type;if("svg"===b?o="http://www.w3.org/2000/svg":"math"===b?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=r)for(s=0;s<r.length;s++)if((d=r[s])&&"setAttribute"in d==!!b&&(b?d.localName===b:3===d.nodeType)){l=d,r[s]=null;break}if(null==l){if(null===b)return document.createTextNode(k);l=document.createElementNS(o,b,k.is&&k),r=null,e=!1;}if(null===b)m===k||e&&l.data===k||(l.data=k);else {if(r=r&&n.call(l.childNodes),m=t.props||h$1,!e&&null!=r)for(m={},s=0;s<l.attributes.length;s++)m[(d=l.attributes[s]).name]=d.value;for(s in m)if(d=m[s],"children"==s);else if("dangerouslySetInnerHTML"==s)p=d;else if("key"!==s&&!(s in k)){if("value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k)continue;A$1(l,s,null,d,o);}for(s in k)d=k[s],"children"==s?v=d:"dangerouslySetInnerHTML"==s?a=d:"value"==s?_=d:"checked"==s?g=d:"key"===s||e&&"function"!=typeof d||m[s]===d||A$1(l,s,d,m[s],o);if(a)e||p&&(a.__html===p.__html||a.__html===l.innerHTML)||(l.innerHTML=a.__html),u.__k=[];else if(p&&(l.innerHTML=""),S(l,y$1(v)?v:[v],u,t,i,"foreignObject"===b?"http://www.w3.org/1999/xhtml":o,r,f,r?r[0]:t.__k&&x(t,0),e,c),null!=r)for(s=r.length;s--;)null!=r[s]&&w$1(r[s]);e||(s="value",void 0!==_&&(_!==l[s]||"progress"===b&&!_||"option"===b&&_!==m[s])&&A$1(l,s,_,m[s],o),s="checked",void 0!==g&&g!==l[s]&&A$1(l,s,g,m[s],o));}return l}function N(n,u,t){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,t);}}function V$1(n,u,t){var i,o;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,u);}i.base=i.__P=null;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&V$1(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||w$1(n.__e),n.__c=n.__=n.__e=n.__d=void 0;}function q(n,l,u){return this.constructor(n,u)}function B$2(u,t,i){var o,r,f,e;l$1.__&&l$1.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],O$1(t,u=(!o&&i||t).__k=_$1(k$1,null,[u]),r||h$1,h$1,t.namespaceURI,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),j$1(f,u,e);}function D$2(n,l){B$2(n,l,D$2);}function E$1(l,u,t){var i,o,r,f,e=d$1({},l.props);for(r in l.type&&l.type.defaultProps&&(f=l.type.defaultProps),u)"key"==r?i=u[r]:"ref"==r?o=u[r]:e[r]=void 0===u[r]&&void 0!==f?f[r]:u[r];return arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):t),g$1(l.type,e,i||l.key,o||l.ref,null)}function G(n,l){var u={__c:l="__cC"+a$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=[],(t={})[l]=this,this.getChildContext=function(){return t},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,M$1(n);});},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=p$1.slice,l$1={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$1=0,t$1=function(n){return null!=n&&null==n.constructor},b.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d$1({},this.state),"function"==typeof n&&(n=n(d$1({},u),this.props)),n&&d$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M$1(this));},b.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M$1(this));},b.prototype.render=k$1,i$1=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$1=function(n,l){return n.__v.__b-l.__v.__b},P.__r=0,e$1=0,c$1=F(!1),s$1=F(!0),a$1=0;

	var preact_module = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Component: b,
		Fragment: k$1,
		cloneElement: E$1,
		createContext: G,
		createElement: _$1,
		createRef: m$1,
		h: _$1,
		hydrate: D$2,
		get isValidElement () { return t$1; },
		get options () { return l$1; },
		render: B$2,
		toChildArray: H$1
	});

	var EMPTY$1 = {};

	function assign(obj, props) {
		// eslint-disable-next-line guard-for-in
		for (var i in props) {
			obj[i] = props[i];
		}
		return obj;
	}

	function exec(url, route, opts) {
		var reg = /(?:\?([^#]*))?(#.*)?$/,
			c = url.match(reg),
			matches = {},
			ret;
		if (c && c[1]) {
			var p = c[1].split('&');
			for (var i=0; i<p.length; i++) {
				var r = p[i].split('=');
				matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
			}
		}
		url = segmentize(url.replace(reg, ''));
		route = segmentize(route || '');
		var max = Math.max(url.length, route.length);
		for (var i$1=0; i$1<max; i$1++) {
			if (route[i$1] && route[i$1].charAt(0)===':') {
				var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
					flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
					plus = ~flags.indexOf('+'),
					star = ~flags.indexOf('*'),
					val = url[i$1] || '';
				if (!val && !star && (flags.indexOf('?')<0 || plus)) {
					ret = false;
					break;
				}
				matches[param] = decodeURIComponent(val);
				if (plus || star) {
					matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
					break;
				}
			}
			else if (route[i$1]!==url[i$1]) {
				ret = false;
				break;
			}
		}
		if (opts.default!==true && ret===false) { return false; }
		return matches;
	}

	function pathRankSort(a, b) {
		return (
			(a.rank < b.rank) ? 1 :
				(a.rank > b.rank) ? -1 :
					(a.index - b.index)
		);
	}

	// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
	function prepareVNodeForRanking(vnode, index) {
		vnode.index = index;
		vnode.rank = rankChild(vnode);
		return vnode.props;
	}

	function segmentize(url) {
		return url.replace(/(^\/+|\/+$)/g, '').split('/');
	}

	function rankSegment(segment) {
		return segment.charAt(0)==':' ? (1 + '*+?'.indexOf(segment.charAt(segment.length-1))) || 4 : 5;
	}

	function rank(path) {
		return segmentize(path).map(rankSegment).join('');
	}

	function rankChild(vnode) {
		return vnode.props.default ? 0 : rank(vnode.props.path);
	}

	var customHistory = null;

	var ROUTERS = [];

	var subscribers = [];

	var EMPTY = {};

	function setUrl(url, type) {
		if ( type === void 0 ) type='push';

		if (customHistory && customHistory[type]) {
			customHistory[type](url);
		}
		else if (typeof history!=='undefined' && history[type+'State']) {
			history[type+'State'](null, null, url);
		}
	}


	function getCurrentUrl() {
		var url;
		if (customHistory && customHistory.location) {
			url = customHistory.location;
		}
		else if (customHistory && customHistory.getCurrentLocation) {
			url = customHistory.getCurrentLocation();
		}
		else {
			url = typeof location!=='undefined' ? location : EMPTY;
		}
		return ("" + (url.pathname || '') + (url.search || ''));
	}



	function route(url, replace) {
		if ( replace === void 0 ) replace=false;

		if (typeof url!=='string' && url.url) {
			replace = url.replace;
			url = url.url;
		}

		// only push URL into history if we can handle it
		if (canRoute(url)) {
			setUrl(url, replace ? 'replace' : 'push');
		}

		return routeTo(url);
	}


	/** Check if the given URL can be handled by any router instances. */
	function canRoute(url) {
		for (var i=ROUTERS.length; i--; ) {
			if (ROUTERS[i].canRoute(url)) { return true; }
		}
		return false;
	}


	/** Tell all router instances to handle the given URL.  */
	function routeTo(url) {
		var didRoute = false;
		for (var i=0; i<ROUTERS.length; i++) {
			if (ROUTERS[i].routeTo(url)===true) {
				didRoute = true;
			}
		}
		for (var i$1=subscribers.length; i$1--; ) {
			subscribers[i$1](url);
		}
		return didRoute;
	}


	function routeFromLink(node) {
		// only valid elements
		if (!node || !node.getAttribute) { return; }

		var href = node.getAttribute('href'),
			target = node.getAttribute('target');

		// ignore links with targets and non-path URLs
		if (!href || !href.match(/^\//g) || (target && !target.match(/^_?self$/i))) { return; }

		// attempt to route, if no match simply cede control to browser
		return route(href);
	}


	function handleLinkClick(e) {
		if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button!==0) { return; }
		routeFromLink(e.currentTarget || e.target || this);
		return prevent(e);
	}


	function prevent(e) {
		if (e) {
			if (e.stopImmediatePropagation) { e.stopImmediatePropagation(); }
			if (e.stopPropagation) { e.stopPropagation(); }
			e.preventDefault();
		}
		return false;
	}


	function delegateLinkHandler(e) {
		// ignore events the browser takes care of already:
		if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button!==0) { return; }

		var t = e.target;
		do {
			if (String(t.nodeName).toUpperCase()==='A' && t.getAttribute('href')) {
				if (t.hasAttribute('native')) { return; }
				// if link is handled by the router, prevent browser defaults
				if (routeFromLink(t)) {
					return prevent(e);
				}
			}
		} while ((t=t.parentNode));
	}


	var eventListenersInitialized = false;

	function initEventListeners() {
		if (eventListenersInitialized) { return; }

		if (typeof addEventListener==='function') {
			if (!customHistory) {
				addEventListener('popstate', function () {
					routeTo(getCurrentUrl());
				});
			}
			addEventListener('click', delegateLinkHandler);
		}
		eventListenersInitialized = true;
	}


	var Router = (function (Component$$1) {
		function Router(props) {
			Component$$1.call(this, props);
			if (props.history) {
				customHistory = props.history;
			}

			this.state = {
				url: props.url || getCurrentUrl()
			};

			initEventListeners();
		}

		if ( Component$$1 ) Router.__proto__ = Component$$1;
		Router.prototype = Object.create( Component$$1 && Component$$1.prototype );
		Router.prototype.constructor = Router;

		Router.prototype.shouldComponentUpdate = function shouldComponentUpdate (props) {
			if (props.static!==true) { return true; }
			return props.url!==this.props.url || props.onChange!==this.props.onChange;
		};

		/** Check if the given URL can be matched against any children */
		Router.prototype.canRoute = function canRoute (url) {
			var children = H$1(this.props.children);
			return this.getMatchingChildren(children, url, false).length > 0;
		};

		/** Re-render children with a new URL to match against. */
		Router.prototype.routeTo = function routeTo (url) {
			this.setState({ url: url });

			var didRoute = this.canRoute(url);

			// trigger a manual re-route if we're not in the middle of an update:
			if (!this.updating) { this.forceUpdate(); }

			return didRoute;
		};

		Router.prototype.componentWillMount = function componentWillMount () {
			ROUTERS.push(this);
			this.updating = true;
		};

		Router.prototype.componentDidMount = function componentDidMount () {
			var this$1$1 = this;

			if (customHistory) {
				this.unlisten = customHistory.listen(function (location) {
					this$1$1.routeTo(("" + (location.pathname || '') + (location.search || '')));
				});
			}
			this.updating = false;
		};

		Router.prototype.componentWillUnmount = function componentWillUnmount () {
			if (typeof this.unlisten==='function') { this.unlisten(); }
			ROUTERS.splice(ROUTERS.indexOf(this), 1);
		};

		Router.prototype.componentWillUpdate = function componentWillUpdate () {
			this.updating = true;
		};

		Router.prototype.componentDidUpdate = function componentDidUpdate () {
			this.updating = false;
		};

		Router.prototype.getMatchingChildren = function getMatchingChildren (children, url, invoke) {
			return children
				.filter(prepareVNodeForRanking)
				.sort(pathRankSort)
				.map( function (vnode) {
					var matches = exec(url, vnode.props.path, vnode.props);
					if (matches) {
						if (invoke !== false) {
							var newProps = { url: url, matches: matches };
							assign(newProps, matches);
							delete newProps.ref;
							delete newProps.key;
							return E$1(vnode, newProps);
						}
						return vnode;
					}
				}).filter(Boolean);
		};

		Router.prototype.render = function render (ref, ref$1) {
			var children = ref.children;
			var onChange = ref.onChange;
			var url = ref$1.url;

			var active = this.getMatchingChildren(H$1(children), url, true);

			var current = active[0] || null;

			var previous = this.previousUrl;
			if (url!==previous) {
				this.previousUrl = url;
				if (typeof onChange==='function') {
					onChange({
						router: this,
						url: url,
						previous: previous,
						active: active,
						current: current
					});
				}
			}

			return current;
		};

		return Router;
	}(b));

	var Link$1 = function (props) { return (
		_$1('a', assign({ onClick: handleLinkClick }, props))
	); };

	var Route = function (props) { return _$1(props.component, props); };

	Router.subscribers = subscribers;
	Router.getCurrentUrl = getCurrentUrl;
	Router.route = route;
	Router.Router = Router;
	Router.Route = Route;
	Router.Link = Link$1;
	Router.exec = exec;

	var preactRouter_es = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Link: Link$1,
		Route: Route,
		Router: Router,
		default: Router,
		exec: exec,
		getCurrentUrl: getCurrentUrl,
		route: route,
		subscribers: subscribers
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

	var match = {};

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(preact_module);

	var require$$1 = /*@__PURE__*/getAugmentedNamespace(preactRouter_es);

	Object.defineProperty(match, "__esModule", {
		value: true
	});
	var Link_1 = match.Link = match.Match = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _preact = require$$0;

	var _preactRouter = require$$1;

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Match = match.Match = function (_Component) {
		_inherits(Match, _Component);

		function Match() {
			var _temp, _this, _ret;

			_classCallCheck(this, Match);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.update = function (url) {
				_this.nextUrl = url;
				_this.setState({});
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		Match.prototype.componentDidMount = function componentDidMount() {
			_preactRouter.subscribers.push(this.update);
		};

		Match.prototype.componentWillUnmount = function componentWillUnmount() {
			_preactRouter.subscribers.splice(_preactRouter.subscribers.indexOf(this.update) >>> 0, 1);
		};

		Match.prototype.render = function render(props) {
			var url = this.nextUrl || (0, _preactRouter.getCurrentUrl)(),
			    path = url.replace(/\?.+$/, '');
			this.nextUrl = null;
			return props.children({
				url: url,
				path: path,
				matches: (0, _preactRouter.exec)(path, props.path, {}) !== false
			});
		};

		return Match;
	}(_preact.Component);

	var Link = function Link(_ref) {
		var activeClassName = _ref.activeClassName,
		    path = _ref.path,
		    props = _objectWithoutProperties(_ref, ['activeClassName', 'path']);

		return (0, _preact.h)(
			Match,
			{ path: path || props.href },
			function (_ref2) {
				var matches = _ref2.matches;
				return (0, _preact.h)(_preactRouter.Link, _extends({}, props, { 'class': [props.class || props.className, matches && activeClassName].filter(Boolean).join(' ') }));
			}
		);
	};

	Link_1 = match.Link = Link;
	match.default = Match;

	Match.Link = Link;

	var t,r,u,i,o=0,f=[],c=[],e=l$1,a=e.__b,v=e.__r,l=e.diffed,m=e.__c,s=e.unmount,d=e.__;function h(n,t){e.__h&&e.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({__V:c}),u.__[n]}function p(n){return o=1,y(D$1,n)}function y(n,u,i){var o=h(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):D$1(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function _(n,u){var i=h(t++,3);!e.__s&&C$1(i.__H,u)&&(i.__=n,i.i=u,r.__H.__h.push(i));}function j(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z$1),n.__H.__h.forEach(B$1),n.__H.__h=[];}catch(t){n.__H.__h=[],e.__e(t,n.__v);}}e.__b=function(n){r=null,a&&a(n);},e.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),d&&d(n,t);},e.__r=function(n){v&&v(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0;})):(i.__h.forEach(z$1),i.__h.forEach(B$1),i.__h=[],t=0)),u=r;},e.diffed=function(n){l&&l(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===e.requestAnimationFrame||((i=e.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c;})),u=r=null;},e.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z$1),n.__h=n.__h.filter(function(n){return !n.__||B$1(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],e.__e(r,n.__v);}}),m&&m(n,t);},e.unmount=function(n){s&&s(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z$1(n);}catch(n){t=n;}}),r.__H=void 0,t&&e.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r));}function z$1(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function B$1(n){var t=r;n.__c=n.__(),r=t;}function C$1(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D$1(n,t){return "function"==typeof t?t(n):t}

	var style$2 = {"header":"style_header__TYMpD","active":"style_active__vF9On"};

	//@ts-check

	// import './style.css';

	// let r = '5'

	const Header = props => {
	  p('cls');

	  // console.log(style.header);

	  return _$1("header", {
	    class: style$2.header
	  }, _$1("h1", null, "Preact App"), _$1("nav", null, _$1(Link_1, {
	    href: "/"
	  }, "Home"), _$1(Link_1, {
	    href: "/profile"
	  }, "Me"), _$1(Link_1, {
	    href: "/profile/john"
	  }, "John")));
	};

	var style$1 = {"home":"style_home__3ShUU"};

	// import './style.css';

	const Home = () => _$1("div", {
	  class: style$1.home
	}, _$1("h1", null, "Home"), _$1("p", null, "This is the Home component."));

	var style = {"profile":"style_profile__vbewj"};

	// import './style.css';

	// Note: `user` comes from the URL, courtesy of our router
	const Profile = ({
	  user
	}) => {
	  const [time, setTime] = p(Date.now());
	  const [count, setCount] = p(10);
	  _(() => {
	    let timer = setInterval(() => setTime(Date.now()), 1000);
	    return () => clearInterval(timer);
	  }, []);
	  return _$1("div", {
	    class: style.profile
	  }, _$1("h1", null, "Profile: ", user), _$1("p", null, "This is the user profile for a user named ", user, "."), _$1("div", null, "Current time: ", new Date(time).toLocaleString()), _$1("p", null, _$1("button", {
	    onClick: () => setCount(count => count + 1)
	  }, "Click Me"), ' ', "Clicked ", count, " times."));
	};

	//@ts-check

	const App = () => _$1("div", {
	  id: "app"
	}, _$1(Header, null), _$1(Router, null, _$1(Route, {
	  path: "/",
	  component: Home
	}), _$1(Route, {
	  path: "/profile",
	  component: Profile,
	  user: "me"
	}), _$1(Route, {
	  path: "/profile/:user",
	  component: Profile
	})));

	function g(n,t){for(var e in t)n[e]=t[e];return n}function E(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function C(n,t){this.props=n,this.context=t;}(C.prototype=new b).isPureReactComponent=!0,C.prototype.shouldComponentUpdate=function(n,t){return E(this.props,n)||E(this.state,t)};var R=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),R&&R(n);};var M=l$1.__e;l$1.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);M(n,t,e,r);};var T=l$1.unmount;function A(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),n.__c.__H=null),null!=(n=g({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return A(n,t,e)})),n}function D(n,t,e){return n&&e&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return D(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=e)),n}function L(){this.__u=0,this.t=null,this.__b=null;}function O(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function U(){this.u=null,this.o=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&32&n.__u&&(n.type=null),T&&T(n);},(L.prototype=new b).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=O(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=D(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate();}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i);},L.prototype.componentWillUnmount=function(){this.t=[];},L.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=A(this.__b,r,o.__O=o.__P);}this.__b=null;}var i=e.__a&&_$1(k$1,null,n.fallback);return i&&(i.__u&=-33),[_$1(k$1,null,e.__a?null:n.children),i]};var V=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};(U.prototype=new b).__a=function(n){var t=this,e=O(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),V(t,n,r)):u();};e?e(o):o();}},U.prototype.render=function(n){this.u=null,this.o=new Map;var t=H$1(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},U.prototype.componentDidUpdate=U.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){V(n,e,t);});};var z="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,B=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,H=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Z=/[A-Z0-9]/g,Y="undefined"!=typeof document,$=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};b.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(b.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n});}});});var J=l$1.event;function K(){}function Q(){return this.cancelBubble}function X(){return this.defaultPrevented}l$1.event=function(n){return J&&(n=J(n)),n.persist=K,n.isPropagationStopped=Q,n.isDefaultPrevented=X,n.nativeEvent=n};var tn={enumerable:!1,configurable:!0,get:function(){return this.class}},en=l$1.vnode;l$1.vnode=function(n){"string"==typeof n.type&&function(n){var t=n.props,e=n.type,u={};for(var o in t){var i=t[o];if(!("value"===o&&"defaultValue"in t&&null==i||Y&&"children"===o&&"noscript"===e||"class"===o||"className"===o)){var l=o.toLowerCase();"defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===i?i="":"translate"===l&&"no"===i?i=!1:"ondoubleclick"===l?o="ondblclick":"onchange"!==l||"input"!==e&&"textarea"!==e||$(t.type)?"onfocus"===l?o="onfocusin":"onblur"===l?o="onfocusout":H.test(o)?o=l:-1===e.indexOf("-")&&B.test(o)?o=o.replace(Z,"-$&").toLowerCase():null===i&&(i=void 0):l=o="oninput","oninput"===l&&u[o=l]&&(o="oninputCapture"),u[o]=i;}}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=H$1(t.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value);})),"select"==e&&null!=u.defaultValue&&(u.value=H$1(t.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value;})),t.class&&!t.className?(u.class=t.class,Object.defineProperty(u,"className",tn)):(t.className&&!t.class||t.class&&t.className)&&(u.class=u.className=t.className),n.props=u;}(n),n.$$typeof=z,en&&en(n);};var rn=l$1.__r;l$1.__r=function(n){rn&&rn(n),n.__c;};var un=l$1.diffed;l$1.diffed=function(n){un&&un(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value);};

	//@ts-check


	// xStore.useStore('count', 8)

	B$2(_$1(App, null), document.getElementById('root'));

})();
//# sourceMappingURL=bundle.js.map
