(function () {
  'use strict';

  var n,
      u,
      i,
      t,
      r,
      o,
      f = {},
      e = [],
      c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

  function s(n, l) {
    for (var u in l) n[u] = l[u];

    return n;
  }

  function a(n) {
    var l = n.parentNode;
    l && l.removeChild(n);
  }

  function v(n, l, u) {
    var i,
        t = arguments,
        r = {};

    for (i in l) "key" !== i && "ref" !== i && (r[i] = l[i]);

    if (arguments.length > 3) for (u = [u], i = 3; i < arguments.length; i++) u.push(t[i]);
    if (null != u && (r.children = u), "function" == typeof n && null != n.defaultProps) for (i in n.defaultProps) void 0 === r[i] && (r[i] = n.defaultProps[i]);
    return h(n, r, l && l.key, l && l.ref, null);
  }

  function h(l, u, i, t, r) {
    var o = {
      type: l,
      props: u,
      key: i,
      ref: t,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      constructor: void 0,
      __v: r
    };
    return null == r && (o.__v = o), n.vnode && n.vnode(o), o;
  }

  function p(n) {
    return n.children;
  }

  function d(n, l) {
    this.props = n, this.context = l;
  }

  function _(n, l) {
    if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;

    for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

    return "function" == typeof n.type ? _(n) : null;
  }

  function k(n) {
    var l, u;

    if (null != (n = n.__) && null != n.__c) {
      for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
        n.__e = n.__c.base = u.__e;
        break;
      }

      return k(n);
    }
  }

  function w(l) {
    (!l.__d && (l.__d = !0) && u.push(l) && !m.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(m);
  }

  function m() {
    for (var n; m.__r = u.length;) n = u.sort(function (n, l) {
      return n.__v.__b - l.__v.__b;
    }), u = [], n.some(function (n) {
      var l, u, i, t, r, o, f;
      n.__d && (o = (r = (l = n).__v).__e, (f = l.__P) && (u = [], (i = s({}, r)).__v = i, t = T(f, r, i, l.__n, void 0 !== f.ownerSVGElement, null, u, null == o ? _(r) : o), $(u, r), t != o && k(r)));
    });
  }

  function g(n, l, u, i, t, r, o, c, s, v) {
    var y,
        d,
        k,
        w,
        m,
        g,
        b,
        A = i && i.__k || e,
        P = A.length;

    for (s == f && (s = null != o ? o[0] : P ? _(i, 0) : null), u.__k = [], y = 0; y < l.length; y++) if (null != (w = u.__k[y] = null == (w = l[y]) || "boolean" == typeof w ? null : "string" == typeof w || "number" == typeof w ? h(null, w, null, null, w) : Array.isArray(w) ? h(p, {
      children: w
    }, null, null, null) : null != w.__e || null != w.__c ? h(w.type, w.props, w.key, null, w.__v) : w)) {
      if (w.__ = u, w.__b = u.__b + 1, null === (k = A[y]) || k && w.key == k.key && w.type === k.type) A[y] = void 0;else for (d = 0; d < P; d++) {
        if ((k = A[d]) && w.key == k.key && w.type === k.type) {
          A[d] = void 0;
          break;
        }

        k = null;
      }
      m = T(n, w, k = k || f, t, r, o, c, s, v), (d = w.ref) && k.ref != d && (b || (b = []), k.ref && b.push(k.ref, null, w), b.push(d, w.__c || m, w)), null != m ? (null == g && (g = m), s = x(n, w, k, A, o, m, s), "option" == u.type ? n.value = "" : "function" == typeof u.type && (u.__d = s)) : s && k.__e == s && s.parentNode != n && (s = _(k));
    }

    if (u.__e = g, null != o && "function" != typeof u.type) for (y = o.length; y--;) null != o[y] && a(o[y]);

    for (y = P; y--;) null != A[y] && I(A[y], A[y]);

    if (b) for (y = 0; y < b.length; y++) H(b[y], b[++y], b[++y]);
  }

  function x(n, l, u, i, t, r, o) {
    var f, e, c;
    if (void 0 !== l.__d) f = l.__d, l.__d = void 0;else if (t == u || r != o || null == r.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(r), f = null;else {
      for (e = o, c = 0; (e = e.nextSibling) && c < i.length; c += 2) if (e == r) break n;

      n.insertBefore(r, o), f = o;
    }
    return void 0 !== f ? f : r.nextSibling;
  }

  function A(n, l, u, i, t) {
    var r;

    for (r in u) "children" === r || "key" === r || r in l || C(n, r, null, u[r], i);

    for (r in l) t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || C(n, r, l[r], u[r], i);
  }

  function P(n, l, u) {
    "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === c.test(l) ? u + "px" : null == u ? "" : u;
  }

  function C(n, l, u, i, t) {
    var r, o, f, e, c;
    if (t ? "className" === l && (l = "class") : "class" === l && (l = "className"), "style" === l) {
      if (r = n.style, "string" == typeof u) r.cssText = u;else {
        if ("string" == typeof i && (r.cssText = "", i = null), i) for (e in i) u && e in u || P(r, e, "");
        if (u) for (c in u) i && u[c] === i[c] || P(r, c, u[c]);
      }
    } else "o" === l[0] && "n" === l[1] ? (o = l !== (l = l.replace(/Capture$/, "")), f = l.toLowerCase(), l = (f in n ? f : l).slice(2), u ? (i || n.addEventListener(l, N, o), (n.l || (n.l = {}))[l] = u) : n.removeEventListener(l, N, o)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && "size" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u));
  }

  function N(l) {
    this.l[l.type](n.event ? n.event(l) : l);
  }

  function z(n, l, u) {
    var i, t;

    for (i = 0; i < n.__k.length; i++) (t = n.__k[i]) && (t.__ = n, t.__e && ("function" == typeof t.type && t.__k.length > 1 && z(t, l, u), l = x(u, t, t, n.__k, null, t.__e, l), "function" == typeof n.type && (n.__d = l)));
  }

  function T(l, u, i, t, r, o, f, e, c) {
    var a,
        v,
        h,
        y,
        _,
        k,
        w,
        m,
        b,
        x,
        A,
        P = u.type;

    if (void 0 !== u.constructor) return null;
    (a = n.__b) && a(u);

    try {
      n: if ("function" == typeof P) {
        if (m = u.props, b = (a = P.contextType) && t[a.__c], x = a ? b ? b.props.value : a.__ : t, i.__c ? w = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(m, x) : (u.__c = v = new d(m, x), v.constructor = P, v.render = L), b && b.sub(v), v.props = m, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = s({}, v.__s)), s(v.__s, P.getDerivedStateFromProps(m, v.__s))), y = v.props, _ = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {
          if (null == P.getDerivedStateFromProps && m !== y && null != v.componentWillReceiveProps && v.componentWillReceiveProps(m, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(m, v.__s, x) || u.__v === i.__v) {
            v.props = m, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v), z(u, e, l);
            break n;
          }

          null != v.componentWillUpdate && v.componentWillUpdate(m, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {
            v.componentDidUpdate(y, _, k);
          });
        }
        v.context = x, v.props = m, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), v.state = v.__s, null != v.getChildContext && (t = s(s({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (k = v.getSnapshotBeforeUpdate(y, _)), A = null != a && a.type == p && null == a.key ? a.props.children : a, g(l, Array.isArray(A) ? A : [A], u, i, t, r, o, f, e, c), v.base = u.__e, v.__h.length && f.push(v), w && (v.__E = v.__ = null), v.__e = !1;
      } else null == o && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = j(i.__e, u, i, t, r, o, f, c);

      (a = n.diffed) && a(u);
    } catch (l) {
      u.__v = null, n.__e(l, u, i);
    }

    return u.__e;
  }

  function $(l, u) {
    n.__c && n.__c(u, l), l.some(function (u) {
      try {
        l = u.__h, u.__h = [], l.some(function (n) {
          n.call(u);
        });
      } catch (l) {
        n.__e(l, u.__v);
      }
    });
  }

  function j(n, l, u, i, t, r, o, c) {
    var s,
        a,
        v,
        h,
        y,
        p = u.props,
        d = l.props;
    if (t = "svg" === l.type || t, null != r) for (s = 0; s < r.length; s++) if (null != (a = r[s]) && ((null === l.type ? 3 === a.nodeType : a.localName === l.type) || n == a)) {
      n = a, r[s] = null;
      break;
    }

    if (null == n) {
      if (null === l.type) return document.createTextNode(d);
      n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type, d.is && {
        is: d.is
      }), r = null, c = !1;
    }

    if (null === l.type) p !== d && n.data != d && (n.data = d);else {
      if (null != r && (r = e.slice.call(n.childNodes)), v = (p = u.props || f).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !c) {
        if (null != r) for (p = {}, y = 0; y < n.attributes.length; y++) p[n.attributes[y].name] = n.attributes[y].value;
        (h || v) && (h && v && h.__html == v.__html || (n.innerHTML = h && h.__html || ""));
      }

      A(n, d, p, t, c), h ? l.__k = [] : (s = l.props.children, g(n, Array.isArray(s) ? s : [s], l, u, i, "foreignObject" !== l.type && t, r, o, f, c)), c || ("value" in d && void 0 !== (s = d.value) && s !== n.value && C(n, "value", s, p.value, !1), "checked" in d && void 0 !== (s = d.checked) && s !== n.checked && C(n, "checked", s, p.checked, !1));
    }
    return n;
  }

  function H(l, u, i) {
    try {
      "function" == typeof l ? l(u) : l.current = u;
    } catch (l) {
      n.__e(l, i);
    }
  }

  function I(l, u, i) {
    var t, r, o;

    if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || H(t, null, u)), i || "function" == typeof l.type || (i = null != (r = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
      if (t.componentWillUnmount) try {
        t.componentWillUnmount();
      } catch (l) {
        n.__e(l, u);
      }
      t.base = t.__P = null;
    }

    if (t = l.__k) for (o = 0; o < t.length; o++) t[o] && I(t[o], u, i);
    null != r && a(r);
  }

  function L(n, l, u) {
    return this.constructor(n, u);
  }

  function M(l, u, i) {
    var t, o, c;
    n.__ && n.__(l, u), o = (t = i === r) ? null : i && i.__k || u.__k, l = v(p, null, [l]), c = [], T(u, (t ? u : i || u).__k = l, o || f, f, void 0 !== u.ownerSVGElement, i && !t ? [i] : o ? null : u.childNodes.length ? e.slice.call(u.childNodes) : null, c, i || f, t), $(c, l);
  }

  n = {
    __e: function (n, l) {
      for (var u, i; l = l.__;) if ((u = l.__c) && !u.__) try {
        if (u.constructor && null != u.constructor.getDerivedStateFromError && (i = !0, u.setState(u.constructor.getDerivedStateFromError(n))), null != u.componentDidCatch && (i = !0, u.componentDidCatch(n)), i) return w(u.__E = u);
      } catch (l) {
        n = l;
      }

      throw n;
    }
  }, d.prototype.setState = function (n, l) {
    var u;
    u = this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(u, this.props)), n && s(u, n), null != n && this.__v && (l && this.__h.push(l), w(this));
  }, d.prototype.forceUpdate = function (n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), w(this));
  }, d.prototype.render = p, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, m.__r = 0, r = f, o = 0;

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var t$1,
      u$1,
      r$1,
      o$1 = 0,
      i$1 = [],
      c$1 = n.__r,
      f$1 = n.diffed,
      e$1 = n.__c,
      a$1 = n.unmount;

  function v$1(t, r) {
    n.__h && n.__h(u$1, t, o$1 || r), o$1 = 0;
    var i = u$1.__H || (u$1.__H = {
      __: [],
      __h: []
    });
    return t >= i.__.length && i.__.push({}), i.__[t];
  }

  function m$1(n) {
    return o$1 = 1, p$1(k$1, n);
  }

  function p$1(n, r, o) {
    var i = v$1(t$1++, 2);
    return i.t = n, i.__c || (i.__c = u$1, i.__ = [o ? o(r) : k$1(void 0, r), function (n) {
      var t = i.t(i.__[0], n);
      i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
    }]), i.__;
  }

  function q() {
    i$1.some(function (t) {
      if (t.__P) try {
        t.__H.__h.forEach(b), t.__H.__h.forEach(g$1), t.__H.__h = [];
      } catch (u) {
        return t.__H.__h = [], n.__e(u, t.__v), !0;
      }
    }), i$1 = [];
  }

  n.__r = function (n) {
    c$1 && c$1(n), t$1 = 0;
    var r = (u$1 = n.__c).__H;
    r && (r.__h.forEach(b), r.__h.forEach(g$1), r.__h = []);
  }, n.diffed = function (t) {
    f$1 && f$1(t);
    var u = t.__c;
    u && u.__H && u.__H.__h.length && (1 !== i$1.push(u) && r$1 === n.requestAnimationFrame || ((r$1 = n.requestAnimationFrame) || function (n) {
      var t,
          u = function () {
        clearTimeout(r), x$1 && cancelAnimationFrame(t), setTimeout(n);
      },
          r = setTimeout(u, 100);

      x$1 && (t = requestAnimationFrame(u));
    })(q));
  }, n.__c = function (t, u) {
    u.some(function (t) {
      try {
        t.__h.forEach(b), t.__h = t.__h.filter(function (n) {
          return !n.__ || g$1(n);
        });
      } catch (r) {
        u.some(function (n) {
          n.__h && (n.__h = []);
        }), u = [], n.__e(r, t.__v);
      }
    }), e$1 && e$1(t, u);
  }, n.unmount = function (t) {
    a$1 && a$1(t);
    var u = t.__c;
    if (u && u.__H) try {
      u.__H.__.forEach(b);
    } catch (t) {
      n.__e(t, u.__v);
    }
  };
  var x$1 = "function" == typeof requestAnimationFrame;

  function b(n) {
    "function" == typeof n.u && n.u();
  }

  function g$1(n) {
    n.u = n.__();
  }

  function k$1(n, t) {
    return "function" == typeof t ? t(n) : t;
  }

  let e$2 = {
    data: ""
  },
      t$2 = t => {
    if ("undefined" != typeof window) {
      let e = t ? t.querySelector("#_goober") : window._goober;
      return e || (e = (t || document.head).appendChild(document.createElement("style")), e.innerHTML = " ", e.id = "_goober"), e.firstChild;
    }

    return t || e$2;
  },
      l = /(?:([A-Z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,
      a$2 = /\/\*[\s\S]*?\*\/|\s{2,}|\n/gm,
      n$1 = (e, t) => {
    let r,
        l = "",
        a = "",
        o = "";

    for (let c in e) {
      let s = e[c];
      "object" == typeof s ? (r = t ? t.replace(/([^,])+/g, e => c.replace(/([^,])+/g, t => /&/g.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : c, a += "@" == c[0] ? "f" == c[1] ? n$1(s, c) : c + "{" + n$1(s, "k" == c[1] ? "" : t) + "}" : n$1(s, r)) : "@" == c[0] && "i" == c[1] ? l = c + " " + s + ";" : o += n$1.p ? n$1.p(c.replace(/[A-Z]/g, "-$&").toLowerCase(), s) : c.replace(/[A-Z]/g, "-$&").toLowerCase() + ":" + s + ";";
    }

    return o[0] ? (r = t ? t + "{" + o + "}" : o, l + r + a) : l + a;
  },
      o$2 = {},
      c$2 = e => {
    let t = "";

    for (let r in e) t += r + ("object" == typeof e[r] ? c$2(e[r]) : e[r]);

    return t;
  },
      s$1 = (e, t, r, s, i) => {
    let p = "object" == typeof e ? c$2(e) : e,
        f = o$2[p] || (o$2[p] = (e => {
      let t = 0,
          r = e.length,
          l = 11;

      for (; t < r;) l = 101 * l + e.charCodeAt(t++) >>> 0;

      return "go" + l;
    })(p));

    if (!o$2[f]) {
      let t = "object" == typeof e ? e : (e => {
        let t,
            r = [{}];

        for (; t = l.exec(e.replace(a$2, ""));) t[4] && r.shift(), t[3] ? r.unshift(r[0][t[3]] = r[0][t[3]] || {}) : t[4] || (r[0][t[1]] = t[2]);

        return r[0];
      })(e);
      o$2[f] = n$1(i ? {
        ["@keyframes " + f]: t
      } : t, r ? "" : "." + f);
    }

    return ((e, t, r) => {
      -1 == t.data.indexOf(e) && (t.data = r ? e + t.data : t.data + e);
    })(o$2[f], t, s), f;
  },
      i$2 = (e, t, r) => e.reduce((e, l, a) => {
    let o = t[a];

    if (o && o.call) {
      let e = o(r),
          t = e && e.props && e.props.className || /^go/.test(e) && e;
      o = t ? "." + t : e && "object" == typeof e ? e.props ? "" : n$1(e, "") : e;
    }

    return e + l + (null == o ? "" : o);
  }, "");

  function p$2(e) {
    let r = this || {},
        l = e.call ? e(r.p) : e;
    return s$1(l.unshift ? l.raw ? i$2(l, [].slice.call(arguments, 1), r.p) : l.reduce((e, t) => t ? Object.assign(e, t.call ? t(r.p) : t) : e, {}) : l, t$2(r.target), r.g, r.o, r.k);
  }

  let f$2,
      u$2,
      d$1,
      g$2 = p$2.bind({
    g: 1
  }),
      b$1 = p$2.bind({
    k: 1
  });

  function h$1(e, t, r, l) {
    n$1.p = t, f$2 = e, u$2 = r, d$1 = l;
  }

  function m$2(e, t) {
    let r = this || {};
    return function () {
      let l = arguments;

      function a(n, o) {
        let c = Object.assign({}, n),
            s = c.className || a.className;
        r.p = Object.assign({
          theme: u$2 && u$2()
        }, c), r.o = / *go\d+/g.test(s), c.className = p$2.apply(r, l) + (s ? " " + s : ""), t && (c.ref = o);
        let i = c.as || e;
        return d$1 && i[0] && d$1(c), f$2(i, c);
      }

      return t ? t(a) : a;
    };
  }

  // //@ts-check
  let states = {};
  function setState(key, value) {
    for (const hook of states[key].hooks) {
      // console.log(hook);
      hook(value);
    }
  }
  function useStore(key, init_value) {
    const [value, setValue] = m$1(init_value !== undefined ? init_value : (states[key] || {}).initState);

    if (key in states) {
      !~states[key].hooks.indexOf(setValue) && states[key].hooks.push(setValue);
    } else states[key] = {
      hooks: [setValue],
      initState: init_value
    };

    return [value, setState.bind(null, key)];
  }
  function initStore(init_dict) {
    for (const key in init_dict) {
      states[key] = {
        hooks: [],
        initState: init_dict[key]
      };
    }
  }

  const Button = props => {
    const [text] = m$1('minus');
    const [count, setCount] = useStore('count', 0); // const { dispatch, count } = useStoreon('count')

    return v(p, null, v("hr", null), v("div", null, v("button", {
      onClick: e => setCount(count - 1)
    }, text, " (", count, ")")));
  };

  function _templateObject2() {
    const data = _taggedTemplateLiteral(["\n  background-color: lightgray;\n"]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    const data = _taggedTemplateLiteral(["\n  text-align: center;\n  color: red;\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }
  h$1(v);
  const Title = m$2("h1")(_templateObject());
  const BtnClassName = p$2(_templateObject2());

  const App = props => {
    const [message] = m$1('Preact App');
    const [count, setCount] = useStore('count'); // const { dispatch, count } = useStoreon('count')

    return v(p, null, v("header", null), v("main", {
      class: BtnClassName
    }, v("h1", {
      class: "title"
    }, message), v("button", {
      onClick: e => setCount(count + 1)
    }, count)), v(Button, null), v(Title, null, "789"));
  };

  initStore({
    count: 9
  });
  M(v(App, null), document.getElementById('root'));

}());
//# sourceMappingURL=bundle.js.map
