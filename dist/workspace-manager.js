import { app as Cl } from "/scripts/app.js";
function uE(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var Vr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var iS = { exports: {} }, Bc = {}, aS = { exports: {} }, se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zs = Symbol.for("react.element"), cE = Symbol.for("react.portal"), dE = Symbol.for("react.fragment"), fE = Symbol.for("react.strict_mode"), pE = Symbol.for("react.profiler"), hE = Symbol.for("react.provider"), mE = Symbol.for("react.context"), vE = Symbol.for("react.forward_ref"), gE = Symbol.for("react.suspense"), yE = Symbol.for("react.memo"), bE = Symbol.for("react.lazy"), Fg = Symbol.iterator;
function SE(e) {
  return e === null || typeof e != "object" ? null : (e = Fg && e[Fg] || e["@@iterator"], typeof e == "function" ? e : null);
}
var sS = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, lS = Object.assign, uS = {};
function ca(e, t, n) {
  this.props = e, this.context = t, this.refs = uS, this.updater = n || sS;
}
ca.prototype.isReactComponent = {};
ca.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ca.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function cS() {
}
cS.prototype = ca.prototype;
function im(e, t, n) {
  this.props = e, this.context = t, this.refs = uS, this.updater = n || sS;
}
var am = im.prototype = new cS();
am.constructor = im;
lS(am, ca.prototype);
am.isPureReactComponent = !0;
var zg = Array.isArray, dS = Object.prototype.hasOwnProperty, sm = { current: null }, fS = { key: !0, ref: !0, __self: !0, __source: !0 };
function pS(e, t, n) {
  var r, o = {}, i = null, a = null;
  if (t != null)
    for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      dS.call(t, r) && !fS.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1)
    o.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++)
      l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in s = e.defaultProps, s)
      o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: Zs, type: e, key: i, ref: a, props: o, _owner: sm.current };
}
function xE(e, t) {
  return { $$typeof: Zs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function lm(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zs;
}
function wE(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Lg = /\/+/g;
function qd(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? wE("" + e.key) : t.toString(36);
}
function cu(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null)
    a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zs:
          case cE:
            a = !0;
        }
    }
  if (a)
    return a = e, o = o(a), e = r === "" ? "." + qd(a, 0) : r, zg(o) ? (n = "", e != null && (n = e.replace(Lg, "$&/") + "/"), cu(o, t, n, "", function(u) {
      return u;
    })) : o != null && (lm(o) && (o = xE(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(Lg, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", zg(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + qd(i, s);
      a += cu(i, t, n, l, o);
    }
  else if (l = SE(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, l = r + qd(i, s++), a += cu(i, t, n, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function kl(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return cu(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function CE(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var Tt = { current: null }, du = { transition: null }, kE = { ReactCurrentDispatcher: Tt, ReactCurrentBatchConfig: du, ReactCurrentOwner: sm };
se.Children = { map: kl, forEach: function(e, t, n) {
  kl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return kl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return kl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!lm(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
se.Component = ca;
se.Fragment = dE;
se.Profiler = pE;
se.PureComponent = im;
se.StrictMode = fE;
se.Suspense = gE;
se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kE;
se.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = lS({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = sm.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      dS.call(t, l) && !fS.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1)
    r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++)
      s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Zs, type: e.type, key: o, ref: i, props: r, _owner: a };
};
se.createContext = function(e) {
  return e = { $$typeof: mE, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: hE, _context: e }, e.Consumer = e;
};
se.createElement = pS;
se.createFactory = function(e) {
  var t = pS.bind(null, e);
  return t.type = e, t;
};
se.createRef = function() {
  return { current: null };
};
se.forwardRef = function(e) {
  return { $$typeof: vE, render: e };
};
se.isValidElement = lm;
se.lazy = function(e) {
  return { $$typeof: bE, _payload: { _status: -1, _result: e }, _init: CE };
};
se.memo = function(e, t) {
  return { $$typeof: yE, type: e, compare: t === void 0 ? null : t };
};
se.startTransition = function(e) {
  var t = du.transition;
  du.transition = {};
  try {
    e();
  } finally {
    du.transition = t;
  }
};
se.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
se.useCallback = function(e, t) {
  return Tt.current.useCallback(e, t);
};
se.useContext = function(e) {
  return Tt.current.useContext(e);
};
se.useDebugValue = function() {
};
se.useDeferredValue = function(e) {
  return Tt.current.useDeferredValue(e);
};
se.useEffect = function(e, t) {
  return Tt.current.useEffect(e, t);
};
se.useId = function() {
  return Tt.current.useId();
};
se.useImperativeHandle = function(e, t, n) {
  return Tt.current.useImperativeHandle(e, t, n);
};
se.useInsertionEffect = function(e, t) {
  return Tt.current.useInsertionEffect(e, t);
};
se.useLayoutEffect = function(e, t) {
  return Tt.current.useLayoutEffect(e, t);
};
se.useMemo = function(e, t) {
  return Tt.current.useMemo(e, t);
};
se.useReducer = function(e, t, n) {
  return Tt.current.useReducer(e, t, n);
};
se.useRef = function(e) {
  return Tt.current.useRef(e);
};
se.useState = function(e) {
  return Tt.current.useState(e);
};
se.useSyncExternalStore = function(e, t, n) {
  return Tt.current.useSyncExternalStore(e, t, n);
};
se.useTransition = function() {
  return Tt.current.useTransition();
};
se.version = "18.2.0";
aS.exports = se;
var y = aS.exports;
const te = /* @__PURE__ */ Qs(y), Vg = /* @__PURE__ */ uE({
  __proto__: null,
  default: te
}, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var PE = y, TE = Symbol.for("react.element"), EE = Symbol.for("react.fragment"), _E = Object.prototype.hasOwnProperty, OE = PE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ME = { key: !0, ref: !0, __self: !0, __source: !0 };
function hS(e, t, n) {
  var r, o = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t)
    _E.call(t, r) && !ME.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: TE, type: e, key: i, ref: a, props: o, _owner: OE.current };
}
Bc.Fragment = EE;
Bc.jsx = hS;
Bc.jsxs = hS;
iS.exports = Bc;
var E = iS.exports, yp = {}, mS = { exports: {} }, Zt = {}, vS = { exports: {} }, gS = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(R, F) {
    var B = R.length;
    R.push(F);
    e:
      for (; 0 < B; ) {
        var N = B - 1 >>> 1, G = R[N];
        if (0 < o(G, F))
          R[N] = F, R[B] = G, B = N;
        else
          break e;
      }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0)
      return null;
    var F = R[0], B = R.pop();
    if (B !== F) {
      R[0] = B;
      e:
        for (var N = 0, G = R.length, z = G >>> 1; N < z; ) {
          var J = 2 * (N + 1) - 1, ae = R[J], re = J + 1, ie = R[re];
          if (0 > o(ae, B))
            re < G && 0 > o(ie, ae) ? (R[N] = ie, R[re] = B, N = re) : (R[N] = ae, R[J] = B, N = J);
          else if (re < G && 0 > o(ie, B))
            R[N] = ie, R[re] = B, N = re;
          else
            break e;
        }
    }
    return F;
  }
  function o(R, F) {
    var B = R.sortIndex - F.sortIndex;
    return B !== 0 ? B : R.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var a = Date, s = a.now();
    e.unstable_now = function() {
      return a.now() - s;
    };
  }
  var l = [], u = [], c = 1, d = null, f = 3, p = !1, v = !1, g = !1, S = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function b(R) {
    for (var F = n(u); F !== null; ) {
      if (F.callback === null)
        r(u);
      else if (F.startTime <= R)
        r(u), F.sortIndex = F.expirationTime, t(l, F);
      else
        break;
      F = n(u);
    }
  }
  function x(R) {
    if (g = !1, b(R), !v)
      if (n(l) !== null)
        v = !0, K(C);
      else {
        var F = n(u);
        F !== null && ne(x, F.startTime - R);
      }
  }
  function C(R, F) {
    v = !1, g && (g = !1, m(T), T = -1), p = !0;
    var B = f;
    try {
      for (b(F), d = n(l); d !== null && (!(d.expirationTime > F) || R && !D()); ) {
        var N = d.callback;
        if (typeof N == "function") {
          d.callback = null, f = d.priorityLevel;
          var G = N(d.expirationTime <= F);
          F = e.unstable_now(), typeof G == "function" ? d.callback = G : d === n(l) && r(l), b(F);
        } else
          r(l);
        d = n(l);
      }
      if (d !== null)
        var z = !0;
      else {
        var J = n(u);
        J !== null && ne(x, J.startTime - F), z = !1;
      }
      return z;
    } finally {
      d = null, f = B, p = !1;
    }
  }
  var k = !1, P = null, T = -1, M = 5, $ = -1;
  function D() {
    return !(e.unstable_now() - $ < M);
  }
  function U() {
    if (P !== null) {
      var R = e.unstable_now();
      $ = R;
      var F = !0;
      try {
        F = P(!0, R);
      } finally {
        F ? W() : (k = !1, P = null);
      }
    } else
      k = !1;
  }
  var W;
  if (typeof h == "function")
    W = function() {
      h(U);
    };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(), H = L.port2;
    L.port1.onmessage = U, W = function() {
      H.postMessage(null);
    };
  } else
    W = function() {
      S(U, 0);
    };
  function K(R) {
    P = R, k || (k = !0, W());
  }
  function ne(R, F) {
    T = S(function() {
      R(e.unstable_now());
    }, F);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, e.unstable_continueExecution = function() {
    v || p || (v = !0, K(C));
  }, e.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < R ? Math.floor(1e3 / R) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(R) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = f;
    }
    var B = f;
    f = F;
    try {
      return R();
    } finally {
      f = B;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(R, F) {
    switch (R) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        R = 3;
    }
    var B = f;
    f = R;
    try {
      return F();
    } finally {
      f = B;
    }
  }, e.unstable_scheduleCallback = function(R, F, B) {
    var N = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? N + B : N) : B = N, R) {
      case 1:
        var G = -1;
        break;
      case 2:
        G = 250;
        break;
      case 5:
        G = 1073741823;
        break;
      case 4:
        G = 1e4;
        break;
      default:
        G = 5e3;
    }
    return G = B + G, R = { id: c++, callback: F, priorityLevel: R, startTime: B, expirationTime: G, sortIndex: -1 }, B > N ? (R.sortIndex = B, t(u, R), n(l) === null && R === n(u) && (g ? (m(T), T = -1) : g = !0, ne(x, B - N))) : (R.sortIndex = G, t(l, R), v || p || (v = !0, K(C))), R;
  }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function(R) {
    var F = f;
    return function() {
      var B = f;
      f = F;
      try {
        return R.apply(this, arguments);
      } finally {
        f = B;
      }
    };
  };
})(gS);
vS.exports = gS;
var IE = vS.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yS = y, qt = IE;
function A(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var bS = /* @__PURE__ */ new Set(), gs = {};
function Bo(e, t) {
  Ui(e, t), Ui(e + "Capture", t);
}
function Ui(e, t) {
  for (gs[e] = t, e = 0; e < t.length; e++)
    bS.add(t[e]);
}
var vr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), bp = Object.prototype.hasOwnProperty, $E = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ng = {}, jg = {};
function RE(e) {
  return bp.call(jg, e) ? !0 : bp.call(Ng, e) ? !1 : $E.test(e) ? jg[e] = !0 : (Ng[e] = !0, !1);
}
function AE(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function DE(e, t, n, r) {
  if (t === null || typeof t > "u" || AE(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Et(e, t, n, r, o, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var dt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  dt[e] = new Et(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  dt[t] = new Et(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  dt[e] = new Et(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  dt[e] = new Et(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  dt[e] = new Et(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  dt[e] = new Et(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  dt[e] = new Et(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  dt[e] = new Et(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  dt[e] = new Et(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var um = /[\-:]([a-z])/g;
function cm(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    um,
    cm
  );
  dt[t] = new Et(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(um, cm);
  dt[t] = new Et(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(um, cm);
  dt[t] = new Et(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  dt[e] = new Et(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
dt.xlinkHref = new Et("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  dt[e] = new Et(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function dm(e, t, n, r) {
  var o = dt.hasOwnProperty(t) ? dt[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (DE(t, n, o, r) && (n = null), r || o === null ? RE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Cr = yS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Pl = Symbol.for("react.element"), ai = Symbol.for("react.portal"), si = Symbol.for("react.fragment"), fm = Symbol.for("react.strict_mode"), Sp = Symbol.for("react.profiler"), SS = Symbol.for("react.provider"), xS = Symbol.for("react.context"), pm = Symbol.for("react.forward_ref"), xp = Symbol.for("react.suspense"), wp = Symbol.for("react.suspense_list"), hm = Symbol.for("react.memo"), Rr = Symbol.for("react.lazy"), wS = Symbol.for("react.offscreen"), Bg = Symbol.iterator;
function Sa(e) {
  return e === null || typeof e != "object" ? null : (e = Bg && e[Bg] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ze = Object.assign, Xd;
function za(e) {
  if (Xd === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Xd = t && t[1] || "";
    }
  return `
` + Xd + e;
}
var Qd = !1;
function Zd(e, t) {
  if (!e || Qd)
    return "";
  Qd = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), i = r.stack.split(`
`), a = o.length - 1, s = i.length - 1; 1 <= a && 0 <= s && o[a] !== i[s]; )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if (a--, s--, 0 > s || o[a] !== i[s]) {
                var l = `
` + o[a].replace(" at new ", " at ");
                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    Qd = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? za(e) : "";
}
function FE(e) {
  switch (e.tag) {
    case 5:
      return za(e.type);
    case 16:
      return za("Lazy");
    case 13:
      return za("Suspense");
    case 19:
      return za("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Zd(e.type, !1), e;
    case 11:
      return e = Zd(e.type.render, !1), e;
    case 1:
      return e = Zd(e.type, !0), e;
    default:
      return "";
  }
}
function Cp(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case si:
      return "Fragment";
    case ai:
      return "Portal";
    case Sp:
      return "Profiler";
    case fm:
      return "StrictMode";
    case xp:
      return "Suspense";
    case wp:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case xS:
        return (e.displayName || "Context") + ".Consumer";
      case SS:
        return (e._context.displayName || "Context") + ".Provider";
      case pm:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case hm:
        return t = e.displayName || null, t !== null ? t : Cp(e.type) || "Memo";
      case Rr:
        t = e._payload, e = e._init;
        try {
          return Cp(e(t));
        } catch {
        }
    }
  return null;
}
function zE(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Cp(t);
    case 8:
      return t === fm ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function Jr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function CS(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function LE(e) {
  var t = CS(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(a) {
      r = "" + a, i.call(this, a);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(a) {
      r = "" + a;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Tl(e) {
  e._valueTracker || (e._valueTracker = LE(e));
}
function kS(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = CS(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Nu(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function kp(e, t) {
  var n = t.checked;
  return ze({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Wg(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Jr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function PS(e, t) {
  t = t.checked, t != null && dm(e, "checked", t, !1);
}
function Pp(e, t) {
  PS(e, t);
  var n = Jr(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Tp(e, t.type, n) : t.hasOwnProperty("defaultValue") && Tp(e, t.type, Jr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Hg(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Tp(e, t, n) {
  (t !== "number" || Nu(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var La = Array.isArray;
function Ii(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Jr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ep(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(A(91));
  return ze({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ug(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(A(92));
      if (La(n)) {
        if (1 < n.length)
          throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Jr(n) };
}
function TS(e, t) {
  var n = Jr(t.value), r = Jr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Gg(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ES(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function _p(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ES(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var El, _S = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (El = El || document.createElement("div"), El.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = El.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function ys(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ka = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, VE = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ka).forEach(function(e) {
  VE.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ka[t] = Ka[e];
  });
});
function OS(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ka.hasOwnProperty(e) && Ka[e] ? ("" + t).trim() : t + "px";
}
function MS(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = OS(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var NE = ze({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Op(e, t) {
  if (t) {
    if (NE[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(A(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(A(62));
  }
}
function Mp(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ip = null;
function mm(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var $p = null, $i = null, Ri = null;
function Yg(e) {
  if (e = tl(e)) {
    if (typeof $p != "function")
      throw Error(A(280));
    var t = e.stateNode;
    t && (t = Yc(t), $p(e.stateNode, e.type, t));
  }
}
function IS(e) {
  $i ? Ri ? Ri.push(e) : Ri = [e] : $i = e;
}
function $S() {
  if ($i) {
    var e = $i, t = Ri;
    if (Ri = $i = null, Yg(e), t)
      for (e = 0; e < t.length; e++)
        Yg(t[e]);
  }
}
function RS(e, t) {
  return e(t);
}
function AS() {
}
var Jd = !1;
function DS(e, t, n) {
  if (Jd)
    return e(t, n);
  Jd = !0;
  try {
    return RS(e, t, n);
  } finally {
    Jd = !1, ($i !== null || Ri !== null) && (AS(), $S());
  }
}
function bs(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Yc(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(A(231, t, typeof n));
  return n;
}
var Rp = !1;
if (vr)
  try {
    var xa = {};
    Object.defineProperty(xa, "passive", { get: function() {
      Rp = !0;
    } }), window.addEventListener("test", xa, xa), window.removeEventListener("test", xa, xa);
  } catch {
    Rp = !1;
  }
function jE(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var qa = !1, ju = null, Bu = !1, Ap = null, BE = { onError: function(e) {
  qa = !0, ju = e;
} };
function WE(e, t, n, r, o, i, a, s, l) {
  qa = !1, ju = null, jE.apply(BE, arguments);
}
function HE(e, t, n, r, o, i, a, s, l) {
  if (WE.apply(this, arguments), qa) {
    if (qa) {
      var u = ju;
      qa = !1, ju = null;
    } else
      throw Error(A(198));
    Bu || (Bu = !0, Ap = u);
  }
}
function Wo(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function FS(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Kg(e) {
  if (Wo(e) !== e)
    throw Error(A(188));
}
function UE(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Wo(e), t === null)
      throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null)
      break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n)
          return Kg(o), e;
        if (i === r)
          return Kg(o), t;
        i = i.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== r.return)
      n = o, r = i;
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === n) {
          a = !0, n = o, r = i;
          break;
        }
        if (s === r) {
          a = !0, r = o, n = i;
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === n) {
            a = !0, n = i, r = o;
            break;
          }
          if (s === r) {
            a = !0, r = i, n = o;
            break;
          }
          s = s.sibling;
        }
        if (!a)
          throw Error(A(189));
      }
    }
    if (n.alternate !== r)
      throw Error(A(190));
  }
  if (n.tag !== 3)
    throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function zS(e) {
  return e = UE(e), e !== null ? LS(e) : null;
}
function LS(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = LS(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var VS = qt.unstable_scheduleCallback, qg = qt.unstable_cancelCallback, GE = qt.unstable_shouldYield, YE = qt.unstable_requestPaint, Ue = qt.unstable_now, KE = qt.unstable_getCurrentPriorityLevel, vm = qt.unstable_ImmediatePriority, NS = qt.unstable_UserBlockingPriority, Wu = qt.unstable_NormalPriority, qE = qt.unstable_LowPriority, jS = qt.unstable_IdlePriority, Wc = null, Un = null;
function XE(e) {
  if (Un && typeof Un.onCommitFiberRoot == "function")
    try {
      Un.onCommitFiberRoot(Wc, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var En = Math.clz32 ? Math.clz32 : JE, QE = Math.log, ZE = Math.LN2;
function JE(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (QE(e) / ZE | 0) | 0;
}
var _l = 64, Ol = 4194304;
function Va(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Hu(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? r = Va(s) : (i &= a, i !== 0 && (r = Va(i)));
  } else
    a = n & ~o, a !== 0 ? r = Va(a) : i !== 0 && (r = Va(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - En(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function e_(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function t_(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - En(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & n) || s & r) && (o[a] = e_(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function Dp(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function BS() {
  var e = _l;
  return _l <<= 1, !(_l & 4194240) && (_l = 64), e;
}
function ef(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Js(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - En(t), e[t] = n;
}
function n_(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - En(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function gm(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - En(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var be = 0;
function WS(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var HS, ym, US, GS, YS, Fp = !1, Ml = [], Br = null, Wr = null, Hr = null, Ss = /* @__PURE__ */ new Map(), xs = /* @__PURE__ */ new Map(), Fr = [], r_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Xg(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Br = null;
      break;
    case "dragenter":
    case "dragleave":
      Wr = null;
      break;
    case "mouseover":
    case "mouseout":
      Hr = null;
      break;
    case "pointerover":
    case "pointerout":
      Ss.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      xs.delete(t.pointerId);
  }
}
function wa(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = tl(t), t !== null && ym(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function o_(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Br = wa(Br, e, t, n, r, o), !0;
    case "dragenter":
      return Wr = wa(Wr, e, t, n, r, o), !0;
    case "mouseover":
      return Hr = wa(Hr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ss.set(i, wa(Ss.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, xs.set(i, wa(xs.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function KS(e) {
  var t = ko(e.target);
  if (t !== null) {
    var n = Wo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = FS(n), t !== null) {
          e.blockedOn = t, YS(e.priority, function() {
            US(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function fu(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = zp(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ip = r, n.target.dispatchEvent(r), Ip = null;
    } else
      return t = tl(n), t !== null && ym(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Qg(e, t, n) {
  fu(e) && n.delete(t);
}
function i_() {
  Fp = !1, Br !== null && fu(Br) && (Br = null), Wr !== null && fu(Wr) && (Wr = null), Hr !== null && fu(Hr) && (Hr = null), Ss.forEach(Qg), xs.forEach(Qg);
}
function Ca(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Fp || (Fp = !0, qt.unstable_scheduleCallback(qt.unstable_NormalPriority, i_)));
}
function ws(e) {
  function t(o) {
    return Ca(o, e);
  }
  if (0 < Ml.length) {
    Ca(Ml[0], e);
    for (var n = 1; n < Ml.length; n++) {
      var r = Ml[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Br !== null && Ca(Br, e), Wr !== null && Ca(Wr, e), Hr !== null && Ca(Hr, e), Ss.forEach(t), xs.forEach(t), n = 0; n < Fr.length; n++)
    r = Fr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Fr.length && (n = Fr[0], n.blockedOn === null); )
    KS(n), n.blockedOn === null && Fr.shift();
}
var Ai = Cr.ReactCurrentBatchConfig, Uu = !0;
function a_(e, t, n, r) {
  var o = be, i = Ai.transition;
  Ai.transition = null;
  try {
    be = 1, bm(e, t, n, r);
  } finally {
    be = o, Ai.transition = i;
  }
}
function s_(e, t, n, r) {
  var o = be, i = Ai.transition;
  Ai.transition = null;
  try {
    be = 4, bm(e, t, n, r);
  } finally {
    be = o, Ai.transition = i;
  }
}
function bm(e, t, n, r) {
  if (Uu) {
    var o = zp(e, t, n, r);
    if (o === null)
      df(e, t, r, Gu, n), Xg(e, r);
    else if (o_(o, e, t, n, r))
      r.stopPropagation();
    else if (Xg(e, r), t & 4 && -1 < r_.indexOf(e)) {
      for (; o !== null; ) {
        var i = tl(o);
        if (i !== null && HS(i), i = zp(e, t, n, r), i === null && df(e, t, r, Gu, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      df(e, t, r, null, n);
  }
}
var Gu = null;
function zp(e, t, n, r) {
  if (Gu = null, e = mm(r), e = ko(e), e !== null)
    if (t = Wo(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = FS(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Gu = e, null;
}
function qS(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (KE()) {
        case vm:
          return 1;
        case NS:
          return 4;
        case Wu:
        case qE:
          return 16;
        case jS:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Nr = null, Sm = null, pu = null;
function XS() {
  if (pu)
    return pu;
  var e, t = Sm, n = t.length, r, o = "value" in Nr ? Nr.value : Nr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++)
    ;
  return pu = o.slice(e, 1 < r ? 1 - r : void 0);
}
function hu(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Il() {
  return !0;
}
function Zg() {
  return !1;
}
function Jt(e) {
  function t(n, r, o, i, a) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Il : Zg, this.isPropagationStopped = Zg, this;
  }
  return ze(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Il);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Il);
  }, persist: function() {
  }, isPersistent: Il }), t;
}
var da = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, xm = Jt(da), el = ze({}, da, { view: 0, detail: 0 }), l_ = Jt(el), tf, nf, ka, Hc = ze({}, el, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: wm, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ka && (ka && e.type === "mousemove" ? (tf = e.screenX - ka.screenX, nf = e.screenY - ka.screenY) : nf = tf = 0, ka = e), tf);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : nf;
} }), Jg = Jt(Hc), u_ = ze({}, Hc, { dataTransfer: 0 }), c_ = Jt(u_), d_ = ze({}, el, { relatedTarget: 0 }), rf = Jt(d_), f_ = ze({}, da, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), p_ = Jt(f_), h_ = ze({}, da, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), m_ = Jt(h_), v_ = ze({}, da, { data: 0 }), e0 = Jt(v_), g_ = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, y_ = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, b_ = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function S_(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = b_[e]) ? !!t[e] : !1;
}
function wm() {
  return S_;
}
var x_ = ze({}, el, { key: function(e) {
  if (e.key) {
    var t = g_[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = hu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? y_[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: wm, charCode: function(e) {
  return e.type === "keypress" ? hu(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? hu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), w_ = Jt(x_), C_ = ze({}, Hc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), t0 = Jt(C_), k_ = ze({}, el, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: wm }), P_ = Jt(k_), T_ = ze({}, da, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), E_ = Jt(T_), __ = ze({}, Hc, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), O_ = Jt(__), M_ = [9, 13, 27, 32], Cm = vr && "CompositionEvent" in window, Xa = null;
vr && "documentMode" in document && (Xa = document.documentMode);
var I_ = vr && "TextEvent" in window && !Xa, QS = vr && (!Cm || Xa && 8 < Xa && 11 >= Xa), n0 = " ", r0 = !1;
function ZS(e, t) {
  switch (e) {
    case "keyup":
      return M_.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function JS(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var li = !1;
function $_(e, t) {
  switch (e) {
    case "compositionend":
      return JS(t);
    case "keypress":
      return t.which !== 32 ? null : (r0 = !0, n0);
    case "textInput":
      return e = t.data, e === n0 && r0 ? null : e;
    default:
      return null;
  }
}
function R_(e, t) {
  if (li)
    return e === "compositionend" || !Cm && ZS(e, t) ? (e = XS(), pu = Sm = Nr = null, li = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return QS && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var A_ = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function o0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!A_[e.type] : t === "textarea";
}
function ex(e, t, n, r) {
  IS(r), t = Yu(t, "onChange"), 0 < t.length && (n = new xm("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Qa = null, Cs = null;
function D_(e) {
  dx(e, 0);
}
function Uc(e) {
  var t = di(e);
  if (kS(t))
    return e;
}
function F_(e, t) {
  if (e === "change")
    return t;
}
var tx = !1;
if (vr) {
  var of;
  if (vr) {
    var af = "oninput" in document;
    if (!af) {
      var i0 = document.createElement("div");
      i0.setAttribute("oninput", "return;"), af = typeof i0.oninput == "function";
    }
    of = af;
  } else
    of = !1;
  tx = of && (!document.documentMode || 9 < document.documentMode);
}
function a0() {
  Qa && (Qa.detachEvent("onpropertychange", nx), Cs = Qa = null);
}
function nx(e) {
  if (e.propertyName === "value" && Uc(Cs)) {
    var t = [];
    ex(t, Cs, e, mm(e)), DS(D_, t);
  }
}
function z_(e, t, n) {
  e === "focusin" ? (a0(), Qa = t, Cs = n, Qa.attachEvent("onpropertychange", nx)) : e === "focusout" && a0();
}
function L_(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Uc(Cs);
}
function V_(e, t) {
  if (e === "click")
    return Uc(t);
}
function N_(e, t) {
  if (e === "input" || e === "change")
    return Uc(t);
}
function j_(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Mn = typeof Object.is == "function" ? Object.is : j_;
function ks(e, t) {
  if (Mn(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!bp.call(t, o) || !Mn(e[o], t[o]))
      return !1;
  }
  return !0;
}
function s0(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function l0(e, t) {
  var n = s0(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = s0(n);
  }
}
function rx(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? rx(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ox() {
  for (var e = window, t = Nu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Nu(e.document);
  }
  return t;
}
function km(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function B_(e) {
  var t = ox(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && rx(n.ownerDocument.documentElement, n)) {
    if (r !== null && km(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = l0(n, i);
        var a = l0(
          n,
          r
        );
        o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var W_ = vr && "documentMode" in document && 11 >= document.documentMode, ui = null, Lp = null, Za = null, Vp = !1;
function u0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vp || ui == null || ui !== Nu(r) || (r = ui, "selectionStart" in r && km(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Za && ks(Za, r) || (Za = r, r = Yu(Lp, "onSelect"), 0 < r.length && (t = new xm("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ui)));
}
function $l(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var ci = { animationend: $l("Animation", "AnimationEnd"), animationiteration: $l("Animation", "AnimationIteration"), animationstart: $l("Animation", "AnimationStart"), transitionend: $l("Transition", "TransitionEnd") }, sf = {}, ix = {};
vr && (ix = document.createElement("div").style, "AnimationEvent" in window || (delete ci.animationend.animation, delete ci.animationiteration.animation, delete ci.animationstart.animation), "TransitionEvent" in window || delete ci.transitionend.transition);
function Gc(e) {
  if (sf[e])
    return sf[e];
  if (!ci[e])
    return e;
  var t = ci[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in ix)
      return sf[e] = t[n];
  return e;
}
var ax = Gc("animationend"), sx = Gc("animationiteration"), lx = Gc("animationstart"), ux = Gc("transitionend"), cx = /* @__PURE__ */ new Map(), c0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ro(e, t) {
  cx.set(e, t), Bo(t, [e]);
}
for (var lf = 0; lf < c0.length; lf++) {
  var uf = c0[lf], H_ = uf.toLowerCase(), U_ = uf[0].toUpperCase() + uf.slice(1);
  ro(H_, "on" + U_);
}
ro(ax, "onAnimationEnd");
ro(sx, "onAnimationIteration");
ro(lx, "onAnimationStart");
ro("dblclick", "onDoubleClick");
ro("focusin", "onFocus");
ro("focusout", "onBlur");
ro(ux, "onTransitionEnd");
Ui("onMouseEnter", ["mouseout", "mouseover"]);
Ui("onMouseLeave", ["mouseout", "mouseover"]);
Ui("onPointerEnter", ["pointerout", "pointerover"]);
Ui("onPointerLeave", ["pointerout", "pointerover"]);
Bo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Bo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Bo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Bo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Bo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Na = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), G_ = new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));
function d0(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, HE(r, t, void 0, e), e.currentTarget = null;
}
function dx(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a], l = s.instance, u = s.currentTarget;
          if (s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          d0(o, s, u), i = l;
        }
      else
        for (a = 0; a < r.length; a++) {
          if (s = r[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          d0(o, s, u), i = l;
        }
    }
  }
  if (Bu)
    throw e = Ap, Bu = !1, Ap = null, e;
}
function _e(e, t) {
  var n = t[Hp];
  n === void 0 && (n = t[Hp] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (fx(t, e, 2, !1), n.add(r));
}
function cf(e, t, n) {
  var r = 0;
  t && (r |= 4), fx(n, e, r, t);
}
var Rl = "_reactListening" + Math.random().toString(36).slice(2);
function Ps(e) {
  if (!e[Rl]) {
    e[Rl] = !0, bS.forEach(function(n) {
      n !== "selectionchange" && (G_.has(n) || cf(n, !1, e), cf(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Rl] || (t[Rl] = !0, cf("selectionchange", !1, t));
  }
}
function fx(e, t, n, r) {
  switch (qS(t)) {
    case 1:
      var o = a_;
      break;
    case 4:
      o = s_;
      break;
    default:
      o = bm;
  }
  n = o.bind(null, t, n, e), o = void 0, !Rp || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function df(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var a = r.tag;
        if (a === 3 || a === 4) {
          var s = r.stateNode.containerInfo;
          if (s === o || s.nodeType === 8 && s.parentNode === o)
            break;
          if (a === 4)
            for (a = r.return; a !== null; ) {
              var l = a.tag;
              if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o))
                return;
              a = a.return;
            }
          for (; s !== null; ) {
            if (a = ko(s), a === null)
              return;
            if (l = a.tag, l === 5 || l === 6) {
              r = i = a;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
  DS(function() {
    var u = i, c = mm(n), d = [];
    e: {
      var f = cx.get(e);
      if (f !== void 0) {
        var p = xm, v = e;
        switch (e) {
          case "keypress":
            if (hu(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = w_;
            break;
          case "focusin":
            v = "focus", p = rf;
            break;
          case "focusout":
            v = "blur", p = rf;
            break;
          case "beforeblur":
          case "afterblur":
            p = rf;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = Jg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = c_;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = P_;
            break;
          case ax:
          case sx:
          case lx:
            p = p_;
            break;
          case ux:
            p = E_;
            break;
          case "scroll":
            p = l_;
            break;
          case "wheel":
            p = O_;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = m_;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = t0;
        }
        var g = (t & 4) !== 0, S = !g && e === "scroll", m = g ? f !== null ? f + "Capture" : null : f;
        g = [];
        for (var h = u, b; h !== null; ) {
          b = h;
          var x = b.stateNode;
          if (b.tag === 5 && x !== null && (b = x, m !== null && (x = bs(h, m), x != null && g.push(Ts(h, x, b)))), S)
            break;
          h = h.return;
        }
        0 < g.length && (f = new p(f, v, null, n, c), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && n !== Ip && (v = n.relatedTarget || n.fromElement) && (ko(v) || v[gr]))
          break e;
        if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (v = n.relatedTarget || n.toElement, p = u, v = v ? ko(v) : null, v !== null && (S = Wo(v), v !== S || v.tag !== 5 && v.tag !== 6) && (v = null)) : (p = null, v = u), p !== v)) {
          if (g = Jg, x = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (g = t0, x = "onPointerLeave", m = "onPointerEnter", h = "pointer"), S = p == null ? f : di(p), b = v == null ? f : di(v), f = new g(x, h + "leave", p, n, c), f.target = S, f.relatedTarget = b, x = null, ko(c) === u && (g = new g(m, h + "enter", v, n, c), g.target = b, g.relatedTarget = S, x = g), S = x, p && v)
            t: {
              for (g = p, m = v, h = 0, b = g; b; b = Zo(b))
                h++;
              for (b = 0, x = m; x; x = Zo(x))
                b++;
              for (; 0 < h - b; )
                g = Zo(g), h--;
              for (; 0 < b - h; )
                m = Zo(m), b--;
              for (; h--; ) {
                if (g === m || m !== null && g === m.alternate)
                  break t;
                g = Zo(g), m = Zo(m);
              }
              g = null;
            }
          else
            g = null;
          p !== null && f0(d, f, p, g, !1), v !== null && S !== null && f0(d, S, v, g, !0);
        }
      }
      e: {
        if (f = u ? di(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file")
          var C = F_;
        else if (o0(f))
          if (tx)
            C = N_;
          else {
            C = L_;
            var k = z_;
          }
        else
          (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = V_);
        if (C && (C = C(e, u))) {
          ex(d, C, n, c);
          break e;
        }
        k && k(e, f, u), e === "focusout" && (k = f._wrapperState) && k.controlled && f.type === "number" && Tp(f, "number", f.value);
      }
      switch (k = u ? di(u) : window, e) {
        case "focusin":
          (o0(k) || k.contentEditable === "true") && (ui = k, Lp = u, Za = null);
          break;
        case "focusout":
          Za = Lp = ui = null;
          break;
        case "mousedown":
          Vp = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Vp = !1, u0(d, n, c);
          break;
        case "selectionchange":
          if (W_)
            break;
        case "keydown":
        case "keyup":
          u0(d, n, c);
      }
      var P;
      if (Cm)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        li ? ZS(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (QS && n.locale !== "ko" && (li || T !== "onCompositionStart" ? T === "onCompositionEnd" && li && (P = XS()) : (Nr = c, Sm = "value" in Nr ? Nr.value : Nr.textContent, li = !0)), k = Yu(u, T), 0 < k.length && (T = new e0(T, e, null, n, c), d.push({ event: T, listeners: k }), P ? T.data = P : (P = JS(n), P !== null && (T.data = P)))), (P = I_ ? $_(e, n) : R_(e, n)) && (u = Yu(u, "onBeforeInput"), 0 < u.length && (c = new e0("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = P));
    }
    dx(d, t);
  });
}
function Ts(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yu(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = bs(e, n), i != null && r.unshift(Ts(e, i, o)), i = bs(e, t), i != null && r.push(Ts(e, i, o))), e = e.return;
  }
  return r;
}
function Zo(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function f0(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n, l = s.alternate, u = s.stateNode;
    if (l !== null && l === r)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (l = bs(n, i), l != null && a.unshift(Ts(n, l, s))) : o || (l = bs(n, i), l != null && a.push(Ts(n, l, s)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Y_ = /\r\n?/g, K_ = /\u0000|\uFFFD/g;
function p0(e) {
  return (typeof e == "string" ? e : "" + e).replace(Y_, `
`).replace(K_, "");
}
function Al(e, t, n) {
  if (t = p0(t), p0(e) !== t && n)
    throw Error(A(425));
}
function Ku() {
}
var Np = null, jp = null;
function Bp(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Wp = typeof setTimeout == "function" ? setTimeout : void 0, q_ = typeof clearTimeout == "function" ? clearTimeout : void 0, h0 = typeof Promise == "function" ? Promise : void 0, X_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof h0 < "u" ? function(e) {
  return h0.resolve(null).then(e).catch(Q_);
} : Wp;
function Q_(e) {
  setTimeout(function() {
    throw e;
  });
}
function ff(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), ws(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  ws(t);
}
function Ur(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function m0(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var fa = Math.random().toString(36).slice(2), Bn = "__reactFiber$" + fa, Es = "__reactProps$" + fa, gr = "__reactContainer$" + fa, Hp = "__reactEvents$" + fa, Z_ = "__reactListeners$" + fa, J_ = "__reactHandles$" + fa;
function ko(e) {
  var t = e[Bn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[gr] || n[Bn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = m0(e); e !== null; ) {
          if (n = e[Bn])
            return n;
          e = m0(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function tl(e) {
  return e = e[Bn] || e[gr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function di(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(A(33));
}
function Yc(e) {
  return e[Es] || null;
}
var Up = [], fi = -1;
function oo(e) {
  return { current: e };
}
function Me(e) {
  0 > fi || (e.current = Up[fi], Up[fi] = null, fi--);
}
function ke(e, t) {
  fi++, Up[fi] = e.current, e.current = t;
}
var eo = {}, bt = oo(eo), It = oo(!1), Do = eo;
function Gi(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return eo;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n)
    o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function $t(e) {
  return e = e.childContextTypes, e != null;
}
function qu() {
  Me(It), Me(bt);
}
function v0(e, t, n) {
  if (bt.current !== eo)
    throw Error(A(168));
  ke(bt, t), ke(It, n);
}
function px(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(A(108, zE(e) || "Unknown", o));
  return ze({}, n, r);
}
function Xu(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || eo, Do = bt.current, ke(bt, e), ke(It, It.current), !0;
}
function g0(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(A(169));
  n ? (e = px(e, t, Do), r.__reactInternalMemoizedMergedChildContext = e, Me(It), Me(bt), ke(bt, e)) : Me(It), ke(It, n);
}
var rr = null, Kc = !1, pf = !1;
function hx(e) {
  rr === null ? rr = [e] : rr.push(e);
}
function eO(e) {
  Kc = !0, hx(e);
}
function io() {
  if (!pf && rr !== null) {
    pf = !0;
    var e = 0, t = be;
    try {
      var n = rr;
      for (be = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      rr = null, Kc = !1;
    } catch (o) {
      throw rr !== null && (rr = rr.slice(e + 1)), VS(vm, io), o;
    } finally {
      be = t, pf = !1;
    }
  }
  return null;
}
var pi = [], hi = 0, Qu = null, Zu = 0, ln = [], un = 0, Fo = null, sr = 1, lr = "";
function go(e, t) {
  pi[hi++] = Zu, pi[hi++] = Qu, Qu = e, Zu = t;
}
function mx(e, t, n) {
  ln[un++] = sr, ln[un++] = lr, ln[un++] = Fo, Fo = e;
  var r = sr;
  e = lr;
  var o = 32 - En(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - En(t) + o;
  if (30 < i) {
    var a = o - o % 5;
    i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, sr = 1 << 32 - En(t) + o | n << o | r, lr = i + e;
  } else
    sr = 1 << i | n << o | r, lr = e;
}
function Pm(e) {
  e.return !== null && (go(e, 1), mx(e, 1, 0));
}
function Tm(e) {
  for (; e === Qu; )
    Qu = pi[--hi], pi[hi] = null, Zu = pi[--hi], pi[hi] = null;
  for (; e === Fo; )
    Fo = ln[--un], ln[un] = null, lr = ln[--un], ln[un] = null, sr = ln[--un], ln[un] = null;
}
var Gt = null, Ut = null, Re = !1, kn = null;
function vx(e, t) {
  var n = cn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function y0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Gt = e, Ut = Ur(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Gt = e, Ut = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Fo !== null ? { id: sr, overflow: lr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = cn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Gt = e, Ut = null, !0) : !1;
    default:
      return !1;
  }
}
function Gp(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yp(e) {
  if (Re) {
    var t = Ut;
    if (t) {
      var n = t;
      if (!y0(e, t)) {
        if (Gp(e))
          throw Error(A(418));
        t = Ur(n.nextSibling);
        var r = Gt;
        t && y0(e, t) ? vx(r, n) : (e.flags = e.flags & -4097 | 2, Re = !1, Gt = e);
      }
    } else {
      if (Gp(e))
        throw Error(A(418));
      e.flags = e.flags & -4097 | 2, Re = !1, Gt = e;
    }
  }
}
function b0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Gt = e;
}
function Dl(e) {
  if (e !== Gt)
    return !1;
  if (!Re)
    return b0(e), Re = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Bp(e.type, e.memoizedProps)), t && (t = Ut)) {
    if (Gp(e))
      throw gx(), Error(A(418));
    for (; t; )
      vx(e, t), t = Ur(t.nextSibling);
  }
  if (b0(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ut = Ur(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ut = null;
    }
  } else
    Ut = Gt ? Ur(e.stateNode.nextSibling) : null;
  return !0;
}
function gx() {
  for (var e = Ut; e; )
    e = Ur(e.nextSibling);
}
function Yi() {
  Ut = Gt = null, Re = !1;
}
function Em(e) {
  kn === null ? kn = [e] : kn.push(e);
}
var tO = Cr.ReactCurrentBatchConfig;
function wn(e, t) {
  if (e && e.defaultProps) {
    t = ze({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ju = oo(null), ec = null, mi = null, _m = null;
function Om() {
  _m = mi = ec = null;
}
function Mm(e) {
  var t = Ju.current;
  Me(Ju), e._currentValue = t;
}
function Kp(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Di(e, t) {
  ec = e, _m = mi = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Mt = !0), e.firstContext = null);
}
function hn(e) {
  var t = e._currentValue;
  if (_m !== e)
    if (e = { context: e, memoizedValue: t, next: null }, mi === null) {
      if (ec === null)
        throw Error(A(308));
      mi = e, ec.dependencies = { lanes: 0, firstContext: e };
    } else
      mi = mi.next = e;
  return t;
}
var Po = null;
function Im(e) {
  Po === null ? Po = [e] : Po.push(e);
}
function yx(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Im(t)) : (n.next = o.next, o.next = n), t.interleaved = n, yr(e, r);
}
function yr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ar = !1;
function $m(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bx(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function dr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Gr(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, fe & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, yr(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Im(r)) : (t.next = o.next, o.next = t), r.interleaved = t, yr(e, n);
}
function mu(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, gm(e, n);
  }
}
function S0(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = a : i = i.next = a, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else
      o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function tc(e, t, n, r) {
  var o = e.updateQueue;
  Ar = !1;
  var i = o.firstBaseUpdate, a = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s, u = l.next;
    l.next = null, a === null ? i = u : a.next = u, a = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== a && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l));
  }
  if (i !== null) {
    var d = o.baseState;
    a = 0, c = u = l = null, s = i;
    do {
      var f = s.lane, p = s.eventTime;
      if ((r & f) === f) {
        c !== null && (c = c.next = {
          eventTime: p,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var v = e, g = s;
          switch (f = t, p = n, g.tag) {
            case 1:
              if (v = g.payload, typeof v == "function") {
                d = v.call(p, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = g.payload, f = typeof v == "function" ? v.call(p, d, f) : v, f == null)
                break e;
              d = ze({}, d, f);
              break e;
            case 2:
              Ar = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [s] : f.push(s));
      } else
        p = { eventTime: p, lane: f, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = p, l = d) : c = c.next = p, a |= f;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null)
          break;
        f = s, s = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = d), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        a |= o.lane, o = o.next;
      while (o !== t);
    } else
      i === null && (o.shared.lanes = 0);
    Lo |= a, e.lanes = a, e.memoizedState = d;
  }
}
function x0(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(A(191, o));
        o.call(r);
      }
    }
}
var Sx = new yS.Component().refs;
function qp(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ze({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var qc = { isMounted: function(e) {
  return (e = e._reactInternals) ? Wo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = kt(), o = Kr(e), i = dr(r, o);
  i.payload = t, n != null && (i.callback = n), t = Gr(e, i, o), t !== null && (_n(t, e, o, r), mu(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = kt(), o = Kr(e), i = dr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Gr(e, i, o), t !== null && (_n(t, e, o, r), mu(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = kt(), r = Kr(e), o = dr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Gr(e, o, r), t !== null && (_n(t, e, r, n), mu(t, e, r));
} };
function w0(e, t, n, r, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !ks(n, r) || !ks(o, i) : !0;
}
function xx(e, t, n) {
  var r = !1, o = eo, i = t.contextType;
  return typeof i == "object" && i !== null ? i = hn(i) : (o = $t(t) ? Do : bt.current, r = t.contextTypes, i = (r = r != null) ? Gi(e, o) : eo), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = qc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function C0(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && qc.enqueueReplaceState(t, t.state, null);
}
function Xp(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = Sx, $m(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = hn(i) : (i = $t(t) ? Do : bt.current, o.context = Gi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (qp(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && qc.enqueueReplaceState(o, o.state, null), tc(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Pa(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(A(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var s = o.refs;
        s === Sx && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(A(284));
    if (!n._owner)
      throw Error(A(290, e));
  }
  return e;
}
function Fl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function k0(e) {
  var t = e._init;
  return t(e._payload);
}
function wx(e) {
  function t(m, h) {
    if (e) {
      var b = m.deletions;
      b === null ? (m.deletions = [h], m.flags |= 16) : b.push(h);
    }
  }
  function n(m, h) {
    if (!e)
      return null;
    for (; h !== null; )
      t(m, h), h = h.sibling;
    return null;
  }
  function r(m, h) {
    for (m = /* @__PURE__ */ new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), h = h.sibling;
    return m;
  }
  function o(m, h) {
    return m = qr(m, h), m.index = 0, m.sibling = null, m;
  }
  function i(m, h, b) {
    return m.index = b, e ? (b = m.alternate, b !== null ? (b = b.index, b < h ? (m.flags |= 2, h) : b) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, h, b, x) {
    return h === null || h.tag !== 6 ? (h = Sf(b, m.mode, x), h.return = m, h) : (h = o(h, b), h.return = m, h);
  }
  function l(m, h, b, x) {
    var C = b.type;
    return C === si ? c(m, h, b.props.children, x, b.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Rr && k0(C) === h.type) ? (x = o(h, b.props), x.ref = Pa(m, h, b), x.return = m, x) : (x = xu(b.type, b.key, b.props, null, m.mode, x), x.ref = Pa(m, h, b), x.return = m, x);
  }
  function u(m, h, b, x) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== b.containerInfo || h.stateNode.implementation !== b.implementation ? (h = xf(b, m.mode, x), h.return = m, h) : (h = o(h, b.children || []), h.return = m, h);
  }
  function c(m, h, b, x, C) {
    return h === null || h.tag !== 7 ? (h = Mo(b, m.mode, x, C), h.return = m, h) : (h = o(h, b), h.return = m, h);
  }
  function d(m, h, b) {
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return h = Sf("" + h, m.mode, b), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Pl:
          return b = xu(h.type, h.key, h.props, null, m.mode, b), b.ref = Pa(m, null, h), b.return = m, b;
        case ai:
          return h = xf(h, m.mode, b), h.return = m, h;
        case Rr:
          var x = h._init;
          return d(m, x(h._payload), b);
      }
      if (La(h) || Sa(h))
        return h = Mo(h, m.mode, b, null), h.return = m, h;
      Fl(m, h);
    }
    return null;
  }
  function f(m, h, b, x) {
    var C = h !== null ? h.key : null;
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return C !== null ? null : s(m, h, "" + b, x);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Pl:
          return b.key === C ? l(m, h, b, x) : null;
        case ai:
          return b.key === C ? u(m, h, b, x) : null;
        case Rr:
          return C = b._init, f(
            m,
            h,
            C(b._payload),
            x
          );
      }
      if (La(b) || Sa(b))
        return C !== null ? null : c(m, h, b, x, null);
      Fl(m, b);
    }
    return null;
  }
  function p(m, h, b, x, C) {
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return m = m.get(b) || null, s(h, m, "" + x, C);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Pl:
          return m = m.get(x.key === null ? b : x.key) || null, l(h, m, x, C);
        case ai:
          return m = m.get(x.key === null ? b : x.key) || null, u(h, m, x, C);
        case Rr:
          var k = x._init;
          return p(m, h, b, k(x._payload), C);
      }
      if (La(x) || Sa(x))
        return m = m.get(b) || null, c(h, m, x, C, null);
      Fl(h, x);
    }
    return null;
  }
  function v(m, h, b, x) {
    for (var C = null, k = null, P = h, T = h = 0, M = null; P !== null && T < b.length; T++) {
      P.index > T ? (M = P, P = null) : M = P.sibling;
      var $ = f(m, P, b[T], x);
      if ($ === null) {
        P === null && (P = M);
        break;
      }
      e && P && $.alternate === null && t(m, P), h = i($, h, T), k === null ? C = $ : k.sibling = $, k = $, P = M;
    }
    if (T === b.length)
      return n(m, P), Re && go(m, T), C;
    if (P === null) {
      for (; T < b.length; T++)
        P = d(m, b[T], x), P !== null && (h = i(P, h, T), k === null ? C = P : k.sibling = P, k = P);
      return Re && go(m, T), C;
    }
    for (P = r(m, P); T < b.length; T++)
      M = p(P, m, T, b[T], x), M !== null && (e && M.alternate !== null && P.delete(M.key === null ? T : M.key), h = i(M, h, T), k === null ? C = M : k.sibling = M, k = M);
    return e && P.forEach(function(D) {
      return t(m, D);
    }), Re && go(m, T), C;
  }
  function g(m, h, b, x) {
    var C = Sa(b);
    if (typeof C != "function")
      throw Error(A(150));
    if (b = C.call(b), b == null)
      throw Error(A(151));
    for (var k = C = null, P = h, T = h = 0, M = null, $ = b.next(); P !== null && !$.done; T++, $ = b.next()) {
      P.index > T ? (M = P, P = null) : M = P.sibling;
      var D = f(m, P, $.value, x);
      if (D === null) {
        P === null && (P = M);
        break;
      }
      e && P && D.alternate === null && t(m, P), h = i(D, h, T), k === null ? C = D : k.sibling = D, k = D, P = M;
    }
    if ($.done)
      return n(
        m,
        P
      ), Re && go(m, T), C;
    if (P === null) {
      for (; !$.done; T++, $ = b.next())
        $ = d(m, $.value, x), $ !== null && (h = i($, h, T), k === null ? C = $ : k.sibling = $, k = $);
      return Re && go(m, T), C;
    }
    for (P = r(m, P); !$.done; T++, $ = b.next())
      $ = p(P, m, T, $.value, x), $ !== null && (e && $.alternate !== null && P.delete($.key === null ? T : $.key), h = i($, h, T), k === null ? C = $ : k.sibling = $, k = $);
    return e && P.forEach(function(U) {
      return t(m, U);
    }), Re && go(m, T), C;
  }
  function S(m, h, b, x) {
    if (typeof b == "object" && b !== null && b.type === si && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Pl:
          e: {
            for (var C = b.key, k = h; k !== null; ) {
              if (k.key === C) {
                if (C = b.type, C === si) {
                  if (k.tag === 7) {
                    n(m, k.sibling), h = o(k, b.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (k.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Rr && k0(C) === k.type) {
                  n(m, k.sibling), h = o(k, b.props), h.ref = Pa(m, k, b), h.return = m, m = h;
                  break e;
                }
                n(m, k);
                break;
              } else
                t(m, k);
              k = k.sibling;
            }
            b.type === si ? (h = Mo(b.props.children, m.mode, x, b.key), h.return = m, m = h) : (x = xu(b.type, b.key, b.props, null, m.mode, x), x.ref = Pa(m, h, b), x.return = m, m = x);
          }
          return a(m);
        case ai:
          e: {
            for (k = b.key; h !== null; ) {
              if (h.key === k)
                if (h.tag === 4 && h.stateNode.containerInfo === b.containerInfo && h.stateNode.implementation === b.implementation) {
                  n(m, h.sibling), h = o(h, b.children || []), h.return = m, m = h;
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else
                t(m, h);
              h = h.sibling;
            }
            h = xf(b, m.mode, x), h.return = m, m = h;
          }
          return a(m);
        case Rr:
          return k = b._init, S(m, h, k(b._payload), x);
      }
      if (La(b))
        return v(m, h, b, x);
      if (Sa(b))
        return g(m, h, b, x);
      Fl(m, b);
    }
    return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, h !== null && h.tag === 6 ? (n(m, h.sibling), h = o(h, b), h.return = m, m = h) : (n(m, h), h = Sf(b, m.mode, x), h.return = m, m = h), a(m)) : n(m, h);
  }
  return S;
}
var Ki = wx(!0), Cx = wx(!1), nl = {}, Gn = oo(nl), _s = oo(nl), Os = oo(nl);
function To(e) {
  if (e === nl)
    throw Error(A(174));
  return e;
}
function Rm(e, t) {
  switch (ke(Os, t), ke(_s, e), ke(Gn, nl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _p(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = _p(t, e);
  }
  Me(Gn), ke(Gn, t);
}
function qi() {
  Me(Gn), Me(_s), Me(Os);
}
function kx(e) {
  To(Os.current);
  var t = To(Gn.current), n = _p(t, e.type);
  t !== n && (ke(_s, e), ke(Gn, n));
}
function Am(e) {
  _s.current === e && (Me(Gn), Me(_s));
}
var Ae = oo(0);
function nc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var hf = [];
function Dm() {
  for (var e = 0; e < hf.length; e++)
    hf[e]._workInProgressVersionPrimary = null;
  hf.length = 0;
}
var vu = Cr.ReactCurrentDispatcher, mf = Cr.ReactCurrentBatchConfig, zo = 0, Fe = null, Ze = null, nt = null, rc = !1, Ja = !1, Ms = 0, nO = 0;
function ht() {
  throw Error(A(321));
}
function Fm(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Mn(e[n], t[n]))
      return !1;
  return !0;
}
function zm(e, t, n, r, o, i) {
  if (zo = i, Fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, vu.current = e === null || e.memoizedState === null ? aO : sO, e = n(r, o), Ja) {
    i = 0;
    do {
      if (Ja = !1, Ms = 0, 25 <= i)
        throw Error(A(301));
      i += 1, nt = Ze = null, t.updateQueue = null, vu.current = lO, e = n(r, o);
    } while (Ja);
  }
  if (vu.current = oc, t = Ze !== null && Ze.next !== null, zo = 0, nt = Ze = Fe = null, rc = !1, t)
    throw Error(A(300));
  return e;
}
function Lm() {
  var e = Ms !== 0;
  return Ms = 0, e;
}
function Fn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return nt === null ? Fe.memoizedState = nt = e : nt = nt.next = e, nt;
}
function mn() {
  if (Ze === null) {
    var e = Fe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = Ze.next;
  var t = nt === null ? Fe.memoizedState : nt.next;
  if (t !== null)
    nt = t, Ze = e;
  else {
    if (e === null)
      throw Error(A(310));
    Ze = e, e = { memoizedState: Ze.memoizedState, baseState: Ze.baseState, baseQueue: Ze.baseQueue, queue: Ze.queue, next: null }, nt === null ? Fe.memoizedState = nt = e : nt = nt.next = e;
  }
  return nt;
}
function Is(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function vf(e) {
  var t = mn(), n = t.queue;
  if (n === null)
    throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = Ze, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      o.next = i.next, i.next = a;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var s = a = null, l = null, u = i;
    do {
      var c = u.lane;
      if ((zo & c) === c)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = d, a = r) : l = l.next = d, Fe.lanes |= c, Lo |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? a = r : l.next = s, Mn(r, t.memoizedState) || (Mt = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Fe.lanes |= i, Lo |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function gf(e) {
  var t = mn(), n = t.queue;
  if (n === null)
    throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = o = o.next;
    do
      i = e(i, a.action), a = a.next;
    while (a !== o);
    Mn(i, t.memoizedState) || (Mt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Px() {
}
function Tx(e, t) {
  var n = Fe, r = mn(), o = t(), i = !Mn(r.memoizedState, o);
  if (i && (r.memoizedState = o, Mt = !0), r = r.queue, Vm(Ox.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || nt !== null && nt.memoizedState.tag & 1) {
    if (n.flags |= 2048, $s(9, _x.bind(null, n, r, o, t), void 0, null), rt === null)
      throw Error(A(349));
    zo & 30 || Ex(n, t, o);
  }
  return o;
}
function Ex(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Fe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function _x(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Mx(t) && Ix(e);
}
function Ox(e, t, n) {
  return n(function() {
    Mx(t) && Ix(e);
  });
}
function Mx(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Mn(e, n);
  } catch {
    return !0;
  }
}
function Ix(e) {
  var t = yr(e, 1);
  t !== null && _n(t, e, 1, -1);
}
function P0(e) {
  var t = Fn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Is, lastRenderedState: e }, t.queue = e, e = e.dispatch = iO.bind(null, Fe, e), [t.memoizedState, e];
}
function $s(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Fe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function $x() {
  return mn().memoizedState;
}
function gu(e, t, n, r) {
  var o = Fn();
  Fe.flags |= e, o.memoizedState = $s(1 | t, n, void 0, r === void 0 ? null : r);
}
function Xc(e, t, n, r) {
  var o = mn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ze !== null) {
    var a = Ze.memoizedState;
    if (i = a.destroy, r !== null && Fm(r, a.deps)) {
      o.memoizedState = $s(t, n, i, r);
      return;
    }
  }
  Fe.flags |= e, o.memoizedState = $s(1 | t, n, i, r);
}
function T0(e, t) {
  return gu(8390656, 8, e, t);
}
function Vm(e, t) {
  return Xc(2048, 8, e, t);
}
function Rx(e, t) {
  return Xc(4, 2, e, t);
}
function Ax(e, t) {
  return Xc(4, 4, e, t);
}
function Dx(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Fx(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Xc(4, 4, Dx.bind(null, t, e), n);
}
function Nm() {
}
function zx(e, t) {
  var n = mn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fm(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Lx(e, t) {
  var n = mn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fm(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Vx(e, t, n) {
  return zo & 21 ? (Mn(n, t) || (n = BS(), Fe.lanes |= n, Lo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Mt = !0), e.memoizedState = n);
}
function rO(e, t) {
  var n = be;
  be = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = mf.transition;
  mf.transition = {};
  try {
    e(!1), t();
  } finally {
    be = n, mf.transition = r;
  }
}
function Nx() {
  return mn().memoizedState;
}
function oO(e, t, n) {
  var r = Kr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, jx(e))
    Bx(t, n);
  else if (n = yx(e, t, n, r), n !== null) {
    var o = kt();
    _n(n, e, r, o), Wx(n, t, r);
  }
}
function iO(e, t, n) {
  var r = Kr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (jx(e))
    Bx(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var a = t.lastRenderedState, s = i(a, n);
        if (o.hasEagerState = !0, o.eagerState = s, Mn(s, a)) {
          var l = t.interleaved;
          l === null ? (o.next = o, Im(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = yx(e, t, o, r), n !== null && (o = kt(), _n(n, e, r, o), Wx(n, t, r));
  }
}
function jx(e) {
  var t = e.alternate;
  return e === Fe || t !== null && t === Fe;
}
function Bx(e, t) {
  Ja = rc = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Wx(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, gm(e, n);
  }
}
var oc = { readContext: hn, useCallback: ht, useContext: ht, useEffect: ht, useImperativeHandle: ht, useInsertionEffect: ht, useLayoutEffect: ht, useMemo: ht, useReducer: ht, useRef: ht, useState: ht, useDebugValue: ht, useDeferredValue: ht, useTransition: ht, useMutableSource: ht, useSyncExternalStore: ht, useId: ht, unstable_isNewReconciler: !1 }, aO = { readContext: hn, useCallback: function(e, t) {
  return Fn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: hn, useEffect: T0, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, gu(
    4194308,
    4,
    Dx.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return gu(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return gu(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Fn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Fn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = oO.bind(null, Fe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Fn();
  return e = { current: e }, t.memoizedState = e;
}, useState: P0, useDebugValue: Nm, useDeferredValue: function(e) {
  return Fn().memoizedState = e;
}, useTransition: function() {
  var e = P0(!1), t = e[0];
  return e = rO.bind(null, e[1]), Fn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Fe, o = Fn();
  if (Re) {
    if (n === void 0)
      throw Error(A(407));
    n = n();
  } else {
    if (n = t(), rt === null)
      throw Error(A(349));
    zo & 30 || Ex(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, T0(Ox.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, $s(9, _x.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Fn(), t = rt.identifierPrefix;
  if (Re) {
    var n = lr, r = sr;
    n = (r & ~(1 << 32 - En(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ms++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = nO++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, sO = {
  readContext: hn,
  useCallback: zx,
  useContext: hn,
  useEffect: Vm,
  useImperativeHandle: Fx,
  useInsertionEffect: Rx,
  useLayoutEffect: Ax,
  useMemo: Lx,
  useReducer: vf,
  useRef: $x,
  useState: function() {
    return vf(Is);
  },
  useDebugValue: Nm,
  useDeferredValue: function(e) {
    var t = mn();
    return Vx(t, Ze.memoizedState, e);
  },
  useTransition: function() {
    var e = vf(Is)[0], t = mn().memoizedState;
    return [e, t];
  },
  useMutableSource: Px,
  useSyncExternalStore: Tx,
  useId: Nx,
  unstable_isNewReconciler: !1
}, lO = { readContext: hn, useCallback: zx, useContext: hn, useEffect: Vm, useImperativeHandle: Fx, useInsertionEffect: Rx, useLayoutEffect: Ax, useMemo: Lx, useReducer: gf, useRef: $x, useState: function() {
  return gf(Is);
}, useDebugValue: Nm, useDeferredValue: function(e) {
  var t = mn();
  return Ze === null ? t.memoizedState = e : Vx(t, Ze.memoizedState, e);
}, useTransition: function() {
  var e = gf(Is)[0], t = mn().memoizedState;
  return [e, t];
}, useMutableSource: Px, useSyncExternalStore: Tx, useId: Nx, unstable_isNewReconciler: !1 };
function Xi(e, t) {
  try {
    var n = "", r = t;
    do
      n += FE(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function yf(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Qp(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var uO = typeof WeakMap == "function" ? WeakMap : Map;
function Hx(e, t, n) {
  n = dr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ac || (ac = !0, sh = r), Qp(e, t);
  }, n;
}
function Ux(e, t, n) {
  n = dr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Qp(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Qp(e, t), typeof r != "function" && (Yr === null ? Yr = /* @__PURE__ */ new Set([this]) : Yr.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function E0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new uO();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = CO.bind(null, e, t, n), t.then(e, e));
}
function _0(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function O0(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = dr(-1, 1), t.tag = 2, Gr(n, t, 1))), n.lanes |= 1), e);
}
var cO = Cr.ReactCurrentOwner, Mt = !1;
function wt(e, t, n, r) {
  t.child = e === null ? Cx(t, null, n, r) : Ki(t, e.child, n, r);
}
function M0(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Di(t, o), r = zm(e, t, n, r, i, o), n = Lm(), e !== null && !Mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, br(e, t, o)) : (Re && n && Pm(t), t.flags |= 1, wt(e, t, r, o), t.child);
}
function I0(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Km(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Gx(e, t, i, r, o)) : (e = xu(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ks, n(a, r) && e.ref === t.ref)
      return br(e, t, o);
  }
  return t.flags |= 1, e = qr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Gx(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ks(i, r) && e.ref === t.ref)
      if (Mt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (Mt = !0);
      else
        return t.lanes = e.lanes, br(e, t, o);
  }
  return Zp(e, t, n, r, o);
}
function Yx(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ke(gi, Wt), Wt |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ke(gi, Wt), Wt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ke(gi, Wt), Wt |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ke(gi, Wt), Wt |= r;
  return wt(e, t, o, n), t.child;
}
function Kx(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Zp(e, t, n, r, o) {
  var i = $t(n) ? Do : bt.current;
  return i = Gi(t, i), Di(t, o), n = zm(e, t, n, r, i, o), r = Lm(), e !== null && !Mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, br(e, t, o)) : (Re && r && Pm(t), t.flags |= 1, wt(e, t, n, o), t.child);
}
function $0(e, t, n, r, o) {
  if ($t(n)) {
    var i = !0;
    Xu(t);
  } else
    i = !1;
  if (Di(t, o), t.stateNode === null)
    yu(e, t), xx(t, n, r), Xp(t, n, r, o), r = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = hn(u) : (u = $t(n) ? Do : bt.current, u = Gi(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || l !== u) && C0(t, a, r, u), Ar = !1;
    var f = t.memoizedState;
    a.state = f, tc(t, r, a, o), l = t.memoizedState, s !== r || f !== l || It.current || Ar ? (typeof c == "function" && (qp(t, n, c, r), l = t.memoizedState), (s = Ar || w0(t, n, s, r, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, bx(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : wn(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, typeof l == "object" && l !== null ? l = hn(l) : (l = $t(n) ? Do : bt.current, l = Gi(t, l));
    var p = n.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && C0(t, a, r, l), Ar = !1, f = t.memoizedState, a.state = f, tc(t, r, a, o);
    var v = t.memoizedState;
    s !== d || f !== v || It.current || Ar ? (typeof p == "function" && (qp(t, n, p, r), v = t.memoizedState), (u = Ar || w0(t, n, u, r, f, v, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, v, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, v, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), a.props = r, a.state = v, a.context = l, r = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Jp(e, t, n, r, i, o);
}
function Jp(e, t, n, r, o, i) {
  Kx(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a)
    return o && g0(t, n, !1), br(e, t, i);
  r = t.stateNode, cO.current = t;
  var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = Ki(t, e.child, null, i), t.child = Ki(t, null, s, i)) : wt(e, t, s, i), t.memoizedState = r.state, o && g0(t, n, !0), t.child;
}
function qx(e) {
  var t = e.stateNode;
  t.pendingContext ? v0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && v0(e, t.context, !1), Rm(e, t.containerInfo);
}
function R0(e, t, n, r, o) {
  return Yi(), Em(o), t.flags |= 256, wt(e, t, n, r), t.child;
}
var eh = { dehydrated: null, treeContext: null, retryLane: 0 };
function th(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Xx(e, t, n) {
  var r = t.pendingProps, o = Ae.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ke(Ae, o & 1), e === null)
    return Yp(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Jc(a, r, 0, null), e = Mo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = th(n), t.memoizedState = eh, e) : jm(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return dO(e, t, a, r, s, o, n);
  if (i) {
    i = r.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = qr(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = qr(s, i) : (i = Mo(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? th(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = eh, r;
  }
  return i = e.child, e = i.sibling, r = qr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function jm(e, t) {
  return t = Jc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function zl(e, t, n, r) {
  return r !== null && Em(r), Ki(t, e.child, null, n), e = jm(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function dO(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = yf(Error(A(422))), zl(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Jc({ mode: "visible", children: r.children }, o, 0, null), i = Mo(i, o, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Ki(t, e.child, null, a), t.child.memoizedState = th(a), t.memoizedState = eh, i);
  if (!(t.mode & 1))
    return zl(e, t, a, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, i = Error(A(419)), r = yf(i, r, void 0), zl(e, t, a, r);
  }
  if (s = (a & e.childLanes) !== 0, Mt || s) {
    if (r = rt, r !== null) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, yr(e, o), _n(r, e, o, -1));
    }
    return Ym(), r = yf(Error(A(421))), zl(e, t, a, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = kO.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ut = Ur(o.nextSibling), Gt = t, Re = !0, kn = null, e !== null && (ln[un++] = sr, ln[un++] = lr, ln[un++] = Fo, sr = e.id, lr = e.overflow, Fo = t), t = jm(t, r.children), t.flags |= 4096, t);
}
function A0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Kp(e.return, t, n);
}
function bf(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Qx(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (wt(e, t, r.children, n), r = Ae.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && A0(e, n, t);
          else if (e.tag === 19)
            A0(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (ke(Ae, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && nc(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), bf(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && nc(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        bf(t, !0, n, null, i);
        break;
      case "together":
        bf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function yu(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function br(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Lo |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(A(153));
  if (t.child !== null) {
    for (e = t.child, n = qr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = qr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function fO(e, t, n) {
  switch (t.tag) {
    case 3:
      qx(t), Yi();
      break;
    case 5:
      kx(t);
      break;
    case 1:
      $t(t.type) && Xu(t);
      break;
    case 4:
      Rm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ke(Ju, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ke(Ae, Ae.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Xx(e, t, n) : (ke(Ae, Ae.current & 1), e = br(e, t, n), e !== null ? e.sibling : null);
      ke(Ae, Ae.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Qx(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ke(Ae, Ae.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Yx(e, t, n);
  }
  return br(e, t, n);
}
var Zx, nh, Jx, ew;
Zx = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
nh = function() {
};
Jx = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, To(Gn.current);
    var i = null;
    switch (n) {
      case "input":
        o = kp(e, o), r = kp(e, r), i = [];
        break;
      case "select":
        o = ze({}, o, { value: void 0 }), r = ze({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Ep(e, o), r = Ep(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ku);
    }
    Op(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s)
            s.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (gs.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (s = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== s && (l != null || s != null))
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
            for (a in l)
              l.hasOwnProperty(a) && s[a] !== l[a] && (n || (n = {}), n[a] = l[a]);
          } else
            n || (i || (i = []), i.push(
              u,
              n
            )), n = l;
        else
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (gs.hasOwnProperty(u) ? (l != null && u === "onScroll" && _e("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
ew = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ta(e, t) {
  if (!Re)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function mt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function pO(e, t, n) {
  var r = t.pendingProps;
  switch (Tm(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return mt(t), null;
    case 1:
      return $t(t.type) && qu(), mt(t), null;
    case 3:
      return r = t.stateNode, qi(), Me(It), Me(bt), Dm(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Dl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, kn !== null && (ch(kn), kn = null))), nh(e, t), mt(t), null;
    case 5:
      Am(t);
      var o = To(Os.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Jx(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(A(166));
          return mt(t), null;
        }
        if (e = To(Gn.current), Dl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Bn] = t, r[Es] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              _e("cancel", r), _e("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              _e("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Na.length; o++)
                _e(Na[o], r);
              break;
            case "source":
              _e("error", r);
              break;
            case "img":
            case "image":
            case "link":
              _e(
                "error",
                r
              ), _e("load", r);
              break;
            case "details":
              _e("toggle", r);
              break;
            case "input":
              Wg(r, i), _e("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, _e("invalid", r);
              break;
            case "textarea":
              Ug(r, i), _e("invalid", r);
          }
          Op(n, i), o = null;
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Al(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Al(
                r.textContent,
                s,
                e
              ), o = ["children", "" + s]) : gs.hasOwnProperty(a) && s != null && a === "onScroll" && _e("scroll", r);
            }
          switch (n) {
            case "input":
              Tl(r), Hg(r, i, !0);
              break;
            case "textarea":
              Tl(r), Gg(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ku);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ES(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Bn] = t, e[Es] = r, Zx(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Mp(n, r), n) {
              case "dialog":
                _e("cancel", e), _e("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                _e("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Na.length; o++)
                  _e(Na[o], e);
                o = r;
                break;
              case "source":
                _e("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                _e(
                  "error",
                  e
                ), _e("load", e), o = r;
                break;
              case "details":
                _e("toggle", e), o = r;
                break;
              case "input":
                Wg(e, r), o = kp(e, r), _e("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ze({}, r, { value: void 0 }), _e("invalid", e);
                break;
              case "textarea":
                Ug(e, r), o = Ep(e, r), _e("invalid", e);
                break;
              default:
                o = r;
            }
            Op(n, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style" ? MS(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && _S(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ys(e, l) : typeof l == "number" && ys(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (gs.hasOwnProperty(i) ? l != null && i === "onScroll" && _e("scroll", e) : l != null && dm(e, i, l, a));
              }
            switch (n) {
              case "input":
                Tl(e), Hg(e, r, !1);
                break;
              case "textarea":
                Tl(e), Gg(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Jr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Ii(e, !!r.multiple, i, !1) : r.defaultValue != null && Ii(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ku);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return mt(t), null;
    case 6:
      if (e && t.stateNode != null)
        ew(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(A(166));
        if (n = To(Os.current), To(Gn.current), Dl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Bn] = t, (i = r.nodeValue !== n) && (e = Gt, e !== null))
            switch (e.tag) {
              case 3:
                Al(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Al(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Bn] = t, t.stateNode = r;
      }
      return mt(t), null;
    case 13:
      if (Me(Ae), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Re && Ut !== null && t.mode & 1 && !(t.flags & 128))
          gx(), Yi(), t.flags |= 98560, i = !1;
        else if (i = Dl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(A(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(A(317));
            i[Bn] = t;
          } else
            Yi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          mt(t), i = !1;
        } else
          kn !== null && (ch(kn), kn = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ae.current & 1 ? Je === 0 && (Je = 3) : Ym())), t.updateQueue !== null && (t.flags |= 4), mt(t), null);
    case 4:
      return qi(), nh(e, t), e === null && Ps(t.stateNode.containerInfo), mt(t), null;
    case 10:
      return Mm(t.type._context), mt(t), null;
    case 17:
      return $t(t.type) && qu(), mt(t), null;
    case 19:
      if (Me(Ae), i = t.memoizedState, i === null)
        return mt(t), null;
      if (r = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (r)
          Ta(i, !1);
        else {
          if (Je !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = nc(e), a !== null) {
                for (t.flags |= 128, Ta(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return ke(Ae, Ae.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Ue() > Qi && (t.flags |= 128, r = !0, Ta(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = nc(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ta(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !Re)
              return mt(t), null;
          } else
            2 * Ue() - i.renderingStartTime > Qi && n !== 1073741824 && (t.flags |= 128, r = !0, Ta(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ue(), t.sibling = null, n = Ae.current, ke(Ae, r ? n & 1 | 2 : n & 1), t) : (mt(t), null);
    case 22:
    case 23:
      return Gm(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Wt & 1073741824 && (mt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : mt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function hO(e, t) {
  switch (Tm(t), t.tag) {
    case 1:
      return $t(t.type) && qu(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return qi(), Me(It), Me(bt), Dm(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Am(t), null;
    case 13:
      if (Me(Ae), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(A(340));
        Yi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Me(Ae), null;
    case 4:
      return qi(), null;
    case 10:
      return Mm(t.type._context), null;
    case 22:
    case 23:
      return Gm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ll = !1, gt = !1, mO = typeof WeakSet == "function" ? WeakSet : Set, j = null;
function vi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ve(e, t, r);
      }
    else
      n.current = null;
}
function rh(e, t, n) {
  try {
    n();
  } catch (r) {
    Ve(e, t, r);
  }
}
var D0 = !1;
function vO(e, t) {
  if (Np = Uu, e = ox(), km(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0, s = -1, l = -1, u = 0, c = 0, d = e, f = null;
          t:
            for (; ; ) {
              for (var p; d !== n || o !== 0 && d.nodeType !== 3 || (s = a + o), d !== i || r !== 0 && d.nodeType !== 3 || (l = a + r), d.nodeType === 3 && (a += d.nodeValue.length), (p = d.firstChild) !== null; )
                f = d, d = p;
              for (; ; ) {
                if (d === e)
                  break t;
                if (f === n && ++u === o && (s = a), f === i && ++c === r && (l = a), (p = d.nextSibling) !== null)
                  break;
                d = f, f = d.parentNode;
              }
              d = p;
            }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (jp = { focusedElem: e, selectionRange: n }, Uu = !1, j = t; j !== null; )
    if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, j = e;
    else
      for (; j !== null; ) {
        t = j;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps, S = v.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : wn(t.type, g), S);
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var b = t.stateNode.containerInfo;
                b.nodeType === 1 ? b.textContent = "" : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(A(163));
            }
        } catch (x) {
          Ve(t, t.return, x);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, j = e;
          break;
        }
        j = t.return;
      }
  return v = D0, D0 = !1, v;
}
function es(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && rh(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Qc(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function oh(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function tw(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, tw(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Bn], delete t[Es], delete t[Hp], delete t[Z_], delete t[J_])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function nw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function F0(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || nw(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function ih(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ku));
  else if (r !== 4 && (e = e.child, e !== null))
    for (ih(e, t, n), e = e.sibling; e !== null; )
      ih(e, t, n), e = e.sibling;
}
function ah(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (ah(e, t, n), e = e.sibling; e !== null; )
      ah(e, t, n), e = e.sibling;
}
var st = null, Cn = !1;
function _r(e, t, n) {
  for (n = n.child; n !== null; )
    rw(e, t, n), n = n.sibling;
}
function rw(e, t, n) {
  if (Un && typeof Un.onCommitFiberUnmount == "function")
    try {
      Un.onCommitFiberUnmount(Wc, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      gt || vi(n, t);
    case 6:
      var r = st, o = Cn;
      st = null, _r(e, t, n), st = r, Cn = o, st !== null && (Cn ? (e = st, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : st.removeChild(n.stateNode));
      break;
    case 18:
      st !== null && (Cn ? (e = st, n = n.stateNode, e.nodeType === 8 ? ff(e.parentNode, n) : e.nodeType === 1 && ff(e, n), ws(e)) : ff(st, n.stateNode));
      break;
    case 4:
      r = st, o = Cn, st = n.stateNode.containerInfo, Cn = !0, _r(e, t, n), st = r, Cn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!gt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && rh(n, t, a), o = o.next;
        } while (o !== r);
      }
      _r(e, t, n);
      break;
    case 1:
      if (!gt && (vi(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (s) {
          Ve(n, t, s);
        }
      _r(e, t, n);
      break;
    case 21:
      _r(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (gt = (r = gt) || n.memoizedState !== null, _r(e, t, n), gt = r) : _r(e, t, n);
      break;
    default:
      _r(e, t, n);
  }
}
function z0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new mO()), t.forEach(function(r) {
      var o = PO.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Sn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e, a = t, s = a;
        e:
          for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                st = s.stateNode, Cn = !1;
                break e;
              case 3:
                st = s.stateNode.containerInfo, Cn = !0;
                break e;
              case 4:
                st = s.stateNode.containerInfo, Cn = !0;
                break e;
            }
            s = s.return;
          }
        if (st === null)
          throw Error(A(160));
        rw(i, a, o), st = null, Cn = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        Ve(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      ow(t, e), t = t.sibling;
}
function ow(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Sn(t, e), Rn(e), r & 4) {
        try {
          es(3, e, e.return), Qc(3, e);
        } catch (g) {
          Ve(e, e.return, g);
        }
        try {
          es(5, e, e.return);
        } catch (g) {
          Ve(e, e.return, g);
        }
      }
      break;
    case 1:
      Sn(t, e), Rn(e), r & 512 && n !== null && vi(n, n.return);
      break;
    case 5:
      if (Sn(t, e), Rn(e), r & 512 && n !== null && vi(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          ys(o, "");
        } catch (g) {
          Ve(e, e.return, g);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && PS(o, i), Mp(s, a);
            var u = Mp(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a], d = l[a + 1];
              c === "style" ? MS(o, d) : c === "dangerouslySetInnerHTML" ? _S(o, d) : c === "children" ? ys(o, d) : dm(o, c, d, u);
            }
            switch (s) {
              case "input":
                Pp(o, i);
                break;
              case "textarea":
                TS(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null ? Ii(o, !!i.multiple, p, !1) : f !== !!i.multiple && (i.defaultValue != null ? Ii(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : Ii(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Es] = i;
          } catch (g) {
            Ve(e, e.return, g);
          }
      }
      break;
    case 6:
      if (Sn(t, e), Rn(e), r & 4) {
        if (e.stateNode === null)
          throw Error(A(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (g) {
          Ve(e, e.return, g);
        }
      }
      break;
    case 3:
      if (Sn(t, e), Rn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          ws(t.containerInfo);
        } catch (g) {
          Ve(e, e.return, g);
        }
      break;
    case 4:
      Sn(t, e), Rn(e);
      break;
    case 13:
      Sn(t, e), Rn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Hm = Ue())), r & 4 && z0(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (gt = (u = gt) || c, Sn(t, e), gt = u) : Sn(t, e), Rn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (j = e, c = e.child; c !== null; ) {
            for (d = j = c; j !== null; ) {
              switch (f = j, p = f.child, f.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  es(4, f, f.return);
                  break;
                case 1:
                  vi(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    r = f, n = f.return;
                    try {
                      t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                    } catch (g) {
                      Ve(r, n, g);
                    }
                  }
                  break;
                case 5:
                  vi(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    V0(d);
                    continue;
                  }
              }
              p !== null ? (p.return = f, j = p) : V0(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = OS("display", a));
                } catch (g) {
                  Ve(e, e.return, g);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (g) {
                  Ve(e, e.return, g);
                }
            } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
              d.child.return = d, d = d.child;
              continue;
            }
            if (d === e)
              break e;
            for (; d.sibling === null; ) {
              if (d.return === null || d.return === e)
                break e;
              c === d && (c = null), d = d.return;
            }
            c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
          }
      }
      break;
    case 19:
      Sn(t, e), Rn(e), r & 4 && z0(e);
      break;
    case 21:
      break;
    default:
      Sn(
        t,
        e
      ), Rn(e);
  }
}
function Rn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (nw(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ys(o, ""), r.flags &= -33);
          var i = F0(e);
          ah(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, s = F0(e);
          ih(e, s, a);
          break;
        default:
          throw Error(A(161));
      }
    } catch (l) {
      Ve(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function gO(e, t, n) {
  j = e, iw(e);
}
function iw(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var o = j, i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Ll;
      if (!a) {
        var s = o.alternate, l = s !== null && s.memoizedState !== null || gt;
        s = Ll;
        var u = gt;
        if (Ll = a, (gt = l) && !u)
          for (j = o; j !== null; )
            a = j, l = a.child, a.tag === 22 && a.memoizedState !== null ? N0(o) : l !== null ? (l.return = a, j = l) : N0(o);
        for (; i !== null; )
          j = i, iw(i), i = i.sibling;
        j = o, Ll = s, gt = u;
      }
      L0(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, j = i) : L0(e);
  }
}
function L0(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              gt || Qc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !gt)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : wn(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && x0(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                x0(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && ws(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
        gt || t.flags & 512 && oh(t);
      } catch (f) {
        Ve(t, t.return, f);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, j = n;
      break;
    }
    j = t.return;
  }
}
function V0(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, j = n;
      break;
    }
    j = t.return;
  }
}
function N0(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Qc(4, t);
          } catch (l) {
            Ve(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ve(t, o, l);
            }
          }
          var i = t.return;
          try {
            oh(t);
          } catch (l) {
            Ve(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            oh(t);
          } catch (l) {
            Ve(t, a, l);
          }
      }
    } catch (l) {
      Ve(t, t.return, l);
    }
    if (t === e) {
      j = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, j = s;
      break;
    }
    j = t.return;
  }
}
var yO = Math.ceil, ic = Cr.ReactCurrentDispatcher, Bm = Cr.ReactCurrentOwner, fn = Cr.ReactCurrentBatchConfig, fe = 0, rt = null, Xe = null, ct = 0, Wt = 0, gi = oo(0), Je = 0, Rs = null, Lo = 0, Zc = 0, Wm = 0, ts = null, _t = null, Hm = 0, Qi = 1 / 0, nr = null, ac = !1, sh = null, Yr = null, Vl = !1, jr = null, sc = 0, ns = 0, lh = null, bu = -1, Su = 0;
function kt() {
  return fe & 6 ? Ue() : bu !== -1 ? bu : bu = Ue();
}
function Kr(e) {
  return e.mode & 1 ? fe & 2 && ct !== 0 ? ct & -ct : tO.transition !== null ? (Su === 0 && (Su = BS()), Su) : (e = be, e !== 0 || (e = window.event, e = e === void 0 ? 16 : qS(e.type)), e) : 1;
}
function _n(e, t, n, r) {
  if (50 < ns)
    throw ns = 0, lh = null, Error(A(185));
  Js(e, n, r), (!(fe & 2) || e !== rt) && (e === rt && (!(fe & 2) && (Zc |= n), Je === 4 && zr(e, ct)), Rt(e, r), n === 1 && fe === 0 && !(t.mode & 1) && (Qi = Ue() + 500, Kc && io()));
}
function Rt(e, t) {
  var n = e.callbackNode;
  t_(e, t);
  var r = Hu(e, e === rt ? ct : 0);
  if (r === 0)
    n !== null && qg(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && qg(n), t === 1)
      e.tag === 0 ? eO(j0.bind(null, e)) : hx(j0.bind(null, e)), X_(function() {
        !(fe & 6) && io();
      }), n = null;
    else {
      switch (WS(r)) {
        case 1:
          n = vm;
          break;
        case 4:
          n = NS;
          break;
        case 16:
          n = Wu;
          break;
        case 536870912:
          n = jS;
          break;
        default:
          n = Wu;
      }
      n = pw(n, aw.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function aw(e, t) {
  if (bu = -1, Su = 0, fe & 6)
    throw Error(A(327));
  var n = e.callbackNode;
  if (Fi() && e.callbackNode !== n)
    return null;
  var r = Hu(e, e === rt ? ct : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = lc(e, r);
  else {
    t = r;
    var o = fe;
    fe |= 2;
    var i = lw();
    (rt !== e || ct !== t) && (nr = null, Qi = Ue() + 500, Oo(e, t));
    do
      try {
        xO();
        break;
      } catch (s) {
        sw(e, s);
      }
    while (!0);
    Om(), ic.current = i, fe = o, Xe !== null ? t = 0 : (rt = null, ct = 0, t = Je);
  }
  if (t !== 0) {
    if (t === 2 && (o = Dp(e), o !== 0 && (r = o, t = uh(e, o))), t === 1)
      throw n = Rs, Oo(e, 0), zr(e, r), Rt(e, Ue()), n;
    if (t === 6)
      zr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !bO(o) && (t = lc(e, r), t === 2 && (i = Dp(e), i !== 0 && (r = i, t = uh(e, i))), t === 1))
        throw n = Rs, Oo(e, 0), zr(e, r), Rt(e, Ue()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          yo(e, _t, nr);
          break;
        case 3:
          if (zr(e, r), (r & 130023424) === r && (t = Hm + 500 - Ue(), 10 < t)) {
            if (Hu(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              kt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Wp(yo.bind(null, e, _t, nr), t);
            break;
          }
          yo(e, _t, nr);
          break;
        case 4:
          if (zr(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - En(r);
            i = 1 << a, a = t[a], a > o && (o = a), r &= ~i;
          }
          if (r = o, r = Ue() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * yO(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Wp(yo.bind(null, e, _t, nr), r);
            break;
          }
          yo(e, _t, nr);
          break;
        case 5:
          yo(e, _t, nr);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return Rt(e, Ue()), e.callbackNode === n ? aw.bind(null, e) : null;
}
function uh(e, t) {
  var n = ts;
  return e.current.memoizedState.isDehydrated && (Oo(e, t).flags |= 256), e = lc(e, t), e !== 2 && (t = _t, _t = n, t !== null && ch(t)), e;
}
function ch(e) {
  _t === null ? _t = e : _t.push.apply(_t, e);
}
function bO(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!Mn(i(), o))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function zr(e, t) {
  for (t &= ~Wm, t &= ~Zc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - En(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function j0(e) {
  if (fe & 6)
    throw Error(A(327));
  Fi();
  var t = Hu(e, 0);
  if (!(t & 1))
    return Rt(e, Ue()), null;
  var n = lc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Dp(e);
    r !== 0 && (t = r, n = uh(e, r));
  }
  if (n === 1)
    throw n = Rs, Oo(e, 0), zr(e, t), Rt(e, Ue()), n;
  if (n === 6)
    throw Error(A(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, yo(e, _t, nr), Rt(e, Ue()), null;
}
function Um(e, t) {
  var n = fe;
  fe |= 1;
  try {
    return e(t);
  } finally {
    fe = n, fe === 0 && (Qi = Ue() + 500, Kc && io());
  }
}
function Vo(e) {
  jr !== null && jr.tag === 0 && !(fe & 6) && Fi();
  var t = fe;
  fe |= 1;
  var n = fn.transition, r = be;
  try {
    if (fn.transition = null, be = 1, e)
      return e();
  } finally {
    be = r, fn.transition = n, fe = t, !(fe & 6) && io();
  }
}
function Gm() {
  Wt = gi.current, Me(gi);
}
function Oo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, q_(n)), Xe !== null)
    for (n = Xe.return; n !== null; ) {
      var r = n;
      switch (Tm(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && qu();
          break;
        case 3:
          qi(), Me(It), Me(bt), Dm();
          break;
        case 5:
          Am(r);
          break;
        case 4:
          qi();
          break;
        case 13:
          Me(Ae);
          break;
        case 19:
          Me(Ae);
          break;
        case 10:
          Mm(r.type._context);
          break;
        case 22:
        case 23:
          Gm();
      }
      n = n.return;
    }
  if (rt = e, Xe = e = qr(e.current, null), ct = Wt = t, Je = 0, Rs = null, Wm = Zc = Lo = 0, _t = ts = null, Po !== null) {
    for (t = 0; t < Po.length; t++)
      if (n = Po[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var a = i.next;
          i.next = o, r.next = a;
        }
        n.pending = r;
      }
    Po = null;
  }
  return e;
}
function sw(e, t) {
  do {
    var n = Xe;
    try {
      if (Om(), vu.current = oc, rc) {
        for (var r = Fe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        rc = !1;
      }
      if (zo = 0, nt = Ze = Fe = null, Ja = !1, Ms = 0, Bm.current = null, n === null || n.return === null) {
        Je = 1, Rs = t, Xe = null;
        break;
      }
      e: {
        var i = e, a = n.return, s = n, l = t;
        if (t = ct, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = s, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var p = _0(a);
          if (p !== null) {
            p.flags &= -257, O0(p, a, s, i, t), p.mode & 1 && E0(i, u, t), t = p, l = u;
            var v = t.updateQueue;
            if (v === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(l), t.updateQueue = g;
            } else
              v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              E0(i, u, t), Ym();
              break e;
            }
            l = Error(A(426));
          }
        } else if (Re && s.mode & 1) {
          var S = _0(a);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), O0(S, a, s, i, t), Em(Xi(l, s));
            break e;
          }
        }
        i = l = Xi(l, s), Je !== 4 && (Je = 2), ts === null ? ts = [i] : ts.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var m = Hx(i, l, t);
              S0(i, m);
              break e;
            case 1:
              s = l;
              var h = i.type, b = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (Yr === null || !Yr.has(b)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var x = Ux(i, s, t);
                S0(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      cw(n);
    } catch (C) {
      t = C, Xe === n && n !== null && (Xe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function lw() {
  var e = ic.current;
  return ic.current = oc, e === null ? oc : e;
}
function Ym() {
  (Je === 0 || Je === 3 || Je === 2) && (Je = 4), rt === null || !(Lo & 268435455) && !(Zc & 268435455) || zr(rt, ct);
}
function lc(e, t) {
  var n = fe;
  fe |= 2;
  var r = lw();
  (rt !== e || ct !== t) && (nr = null, Oo(e, t));
  do
    try {
      SO();
      break;
    } catch (o) {
      sw(e, o);
    }
  while (!0);
  if (Om(), fe = n, ic.current = r, Xe !== null)
    throw Error(A(261));
  return rt = null, ct = 0, Je;
}
function SO() {
  for (; Xe !== null; )
    uw(Xe);
}
function xO() {
  for (; Xe !== null && !GE(); )
    uw(Xe);
}
function uw(e) {
  var t = fw(e.alternate, e, Wt);
  e.memoizedProps = e.pendingProps, t === null ? cw(e) : Xe = t, Bm.current = null;
}
function cw(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = hO(n, t), n !== null) {
        n.flags &= 32767, Xe = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Je = 6, Xe = null;
        return;
      }
    } else if (n = pO(n, t, Wt), n !== null) {
      Xe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Xe = t;
      return;
    }
    Xe = t = e;
  } while (t !== null);
  Je === 0 && (Je = 5);
}
function yo(e, t, n) {
  var r = be, o = fn.transition;
  try {
    fn.transition = null, be = 1, wO(e, t, n, r);
  } finally {
    fn.transition = o, be = r;
  }
  return null;
}
function wO(e, t, n, r) {
  do
    Fi();
  while (jr !== null);
  if (fe & 6)
    throw Error(A(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(A(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (n_(e, i), e === rt && (Xe = rt = null, ct = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Vl || (Vl = !0, pw(Wu, function() {
    return Fi(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = fn.transition, fn.transition = null;
    var a = be;
    be = 1;
    var s = fe;
    fe |= 4, Bm.current = null, vO(e, n), ow(n, e), B_(jp), Uu = !!Np, jp = Np = null, e.current = n, gO(n), YE(), fe = s, be = a, fn.transition = i;
  } else
    e.current = n;
  if (Vl && (Vl = !1, jr = e, sc = o), i = e.pendingLanes, i === 0 && (Yr = null), XE(n.stateNode), Rt(e, Ue()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ac)
    throw ac = !1, e = sh, sh = null, e;
  return sc & 1 && e.tag !== 0 && Fi(), i = e.pendingLanes, i & 1 ? e === lh ? ns++ : (ns = 0, lh = e) : ns = 0, io(), null;
}
function Fi() {
  if (jr !== null) {
    var e = WS(sc), t = fn.transition, n = be;
    try {
      if (fn.transition = null, be = 16 > e ? 16 : e, jr === null)
        var r = !1;
      else {
        if (e = jr, jr = null, sc = 0, fe & 6)
          throw Error(A(331));
        var o = fe;
        for (fe |= 4, j = e.current; j !== null; ) {
          var i = j, a = i.child;
          if (j.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (j = u; j !== null; ) {
                  var c = j;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      es(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, j = d;
                  else
                    for (; j !== null; ) {
                      c = j;
                      var f = c.sibling, p = c.return;
                      if (tw(c), c === u) {
                        j = null;
                        break;
                      }
                      if (f !== null) {
                        f.return = p, j = f;
                        break;
                      }
                      j = p;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var S = g.sibling;
                    g.sibling = null, g = S;
                  } while (g !== null);
                }
              }
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null)
            a.return = i, j = a;
          else
            e:
              for (; j !== null; ) {
                if (i = j, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      es(9, i, i.return);
                  }
                var m = i.sibling;
                if (m !== null) {
                  m.return = i.return, j = m;
                  break e;
                }
                j = i.return;
              }
        }
        var h = e.current;
        for (j = h; j !== null; ) {
          a = j;
          var b = a.child;
          if (a.subtreeFlags & 2064 && b !== null)
            b.return = a, j = b;
          else
            e:
              for (a = h; j !== null; ) {
                if (s = j, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qc(9, s);
                    }
                  } catch (C) {
                    Ve(s, s.return, C);
                  }
                if (s === a) {
                  j = null;
                  break e;
                }
                var x = s.sibling;
                if (x !== null) {
                  x.return = s.return, j = x;
                  break e;
                }
                j = s.return;
              }
        }
        if (fe = o, io(), Un && typeof Un.onPostCommitFiberRoot == "function")
          try {
            Un.onPostCommitFiberRoot(Wc, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      be = n, fn.transition = t;
    }
  }
  return !1;
}
function B0(e, t, n) {
  t = Xi(n, t), t = Hx(e, t, 1), e = Gr(e, t, 1), t = kt(), e !== null && (Js(e, 1, t), Rt(e, t));
}
function Ve(e, t, n) {
  if (e.tag === 3)
    B0(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        B0(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Yr === null || !Yr.has(r))) {
          e = Xi(n, e), e = Ux(t, e, 1), t = Gr(t, e, 1), e = kt(), t !== null && (Js(t, 1, e), Rt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function CO(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = kt(), e.pingedLanes |= e.suspendedLanes & n, rt === e && (ct & n) === n && (Je === 4 || Je === 3 && (ct & 130023424) === ct && 500 > Ue() - Hm ? Oo(e, 0) : Wm |= n), Rt(e, t);
}
function dw(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ol, Ol <<= 1, !(Ol & 130023424) && (Ol = 4194304)) : t = 1);
  var n = kt();
  e = yr(e, t), e !== null && (Js(e, t, n), Rt(e, n));
}
function kO(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), dw(e, n);
}
function PO(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  r !== null && r.delete(t), dw(e, n);
}
var fw;
fw = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || It.current)
      Mt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Mt = !1, fO(e, t, n);
      Mt = !!(e.flags & 131072);
    }
  else
    Mt = !1, Re && t.flags & 1048576 && mx(t, Zu, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      yu(e, t), e = t.pendingProps;
      var o = Gi(t, bt.current);
      Di(t, n), o = zm(null, t, r, e, o, n);
      var i = Lm();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $t(r) ? (i = !0, Xu(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, $m(t), o.updater = qc, t.stateNode = o, o._reactInternals = t, Xp(t, r, e, n), t = Jp(null, t, r, !0, i, n)) : (t.tag = 0, Re && i && Pm(t), wt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (yu(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = EO(r), e = wn(r, e), o) {
          case 0:
            t = Zp(null, t, r, e, n);
            break e;
          case 1:
            t = $0(null, t, r, e, n);
            break e;
          case 11:
            t = M0(null, t, r, e, n);
            break e;
          case 14:
            t = I0(null, t, r, wn(r.type, e), n);
            break e;
        }
        throw Error(A(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : wn(r, o), Zp(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : wn(r, o), $0(e, t, r, o, n);
    case 3:
      e: {
        if (qx(t), e === null)
          throw Error(A(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, bx(e, t), tc(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = Xi(Error(A(423)), t), t = R0(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Xi(Error(A(424)), t), t = R0(e, t, r, n, o);
            break e;
          } else
            for (Ut = Ur(t.stateNode.containerInfo.firstChild), Gt = t, Re = !0, kn = null, n = Cx(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Yi(), r === o) {
            t = br(e, t, n);
            break e;
          }
          wt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return kx(t), e === null && Yp(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, Bp(r, o) ? a = null : i !== null && Bp(r, i) && (t.flags |= 32), Kx(e, t), wt(e, t, a, n), t.child;
    case 6:
      return e === null && Yp(t), null;
    case 13:
      return Xx(e, t, n);
    case 4:
      return Rm(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ki(t, null, r, n) : wt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : wn(r, o), M0(e, t, r, o, n);
    case 7:
      return wt(e, t, t.pendingProps, n), t.child;
    case 8:
      return wt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return wt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, ke(Ju, r._currentValue), r._currentValue = a, i !== null)
          if (Mn(i.value, a)) {
            if (i.children === o.children && !It.current) {
              t = br(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      l = dr(-1, n & -n), l.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                      }
                    }
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Kp(
                      i.return,
                      n,
                      t
                    ), s.lanes |= n;
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10)
                a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (a = i.return, a === null)
                  throw Error(A(341));
                a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), Kp(a, n, t), a = i.sibling;
              } else
                a = i.child;
              if (a !== null)
                a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (i = a.sibling, i !== null) {
                    i.return = a.return, a = i;
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        wt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Di(t, n), o = hn(o), r = r(o), t.flags |= 1, wt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = wn(r, t.pendingProps), o = wn(r.type, o), I0(e, t, r, o, n);
    case 15:
      return Gx(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : wn(r, o), yu(e, t), t.tag = 1, $t(r) ? (e = !0, Xu(t)) : e = !1, Di(t, n), xx(t, r, o), Xp(t, r, o, n), Jp(null, t, r, !0, e, n);
    case 19:
      return Qx(e, t, n);
    case 22:
      return Yx(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function pw(e, t) {
  return VS(e, t);
}
function TO(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function cn(e, t, n, r) {
  return new TO(e, t, n, r);
}
function Km(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function EO(e) {
  if (typeof e == "function")
    return Km(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === pm)
      return 11;
    if (e === hm)
      return 14;
  }
  return 2;
}
function qr(e, t) {
  var n = e.alternate;
  return n === null ? (n = cn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function xu(e, t, n, r, o, i) {
  var a = 2;
  if (r = e, typeof e == "function")
    Km(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case si:
          return Mo(n.children, o, i, t);
        case fm:
          a = 8, o |= 8;
          break;
        case Sp:
          return e = cn(12, n, t, o | 2), e.elementType = Sp, e.lanes = i, e;
        case xp:
          return e = cn(13, n, t, o), e.elementType = xp, e.lanes = i, e;
        case wp:
          return e = cn(19, n, t, o), e.elementType = wp, e.lanes = i, e;
        case wS:
          return Jc(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case SS:
                a = 10;
                break e;
              case xS:
                a = 9;
                break e;
              case pm:
                a = 11;
                break e;
              case hm:
                a = 14;
                break e;
              case Rr:
                a = 16, r = null;
                break e;
            }
          throw Error(A(130, e == null ? e : typeof e, ""));
      }
  return t = cn(a, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Mo(e, t, n, r) {
  return e = cn(7, e, r, t), e.lanes = n, e;
}
function Jc(e, t, n, r) {
  return e = cn(22, e, r, t), e.elementType = wS, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Sf(e, t, n) {
  return e = cn(6, e, null, t), e.lanes = n, e;
}
function xf(e, t, n) {
  return t = cn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function _O(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ef(0), this.expirationTimes = ef(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ef(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function qm(e, t, n, r, o, i, a, s, l) {
  return e = new _O(e, t, n, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = cn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $m(i), e;
}
function OO(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ai, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function hw(e) {
  if (!e)
    return eo;
  e = e._reactInternals;
  e: {
    if (Wo(e) !== e || e.tag !== 1)
      throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($t(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if ($t(n))
      return px(e, n, t);
  }
  return t;
}
function mw(e, t, n, r, o, i, a, s, l) {
  return e = qm(n, r, !0, e, o, i, a, s, l), e.context = hw(null), n = e.current, r = kt(), o = Kr(n), i = dr(r, o), i.callback = t ?? null, Gr(n, i, o), e.current.lanes = o, Js(e, o, r), Rt(e, r), e;
}
function ed(e, t, n, r) {
  var o = t.current, i = kt(), a = Kr(o);
  return n = hw(n), t.context === null ? t.context = n : t.pendingContext = n, t = dr(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Gr(o, t, a), e !== null && (_n(e, o, a, i), mu(e, o, a)), a;
}
function uc(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function W0(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Xm(e, t) {
  W0(e, t), (e = e.alternate) && W0(e, t);
}
function MO() {
  return null;
}
var vw = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Qm(e) {
  this._internalRoot = e;
}
td.prototype.render = Qm.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(A(409));
  ed(e, t, null, null);
};
td.prototype.unmount = Qm.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Vo(function() {
      ed(null, e, null, null);
    }), t[gr] = null;
  }
};
function td(e) {
  this._internalRoot = e;
}
td.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = GS();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Fr.length && t !== 0 && t < Fr[n].priority; n++)
      ;
    Fr.splice(n, 0, e), n === 0 && KS(e);
  }
};
function Zm(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function nd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function H0() {
}
function IO(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = uc(a);
        i.call(u);
      };
    }
    var a = mw(t, r, e, 0, null, !1, !1, "", H0);
    return e._reactRootContainer = a, e[gr] = a.current, Ps(e.nodeType === 8 ? e.parentNode : e), Vo(), a;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = uc(l);
      s.call(u);
    };
  }
  var l = qm(e, 0, !1, null, null, !1, !1, "", H0);
  return e._reactRootContainer = l, e[gr] = l.current, Ps(e.nodeType === 8 ? e.parentNode : e), Vo(function() {
    ed(t, l, n, r);
  }), l;
}
function rd(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var l = uc(a);
        s.call(l);
      };
    }
    ed(t, a, e, o);
  } else
    a = IO(n, t, e, o, r);
  return uc(a);
}
HS = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Va(t.pendingLanes);
        n !== 0 && (gm(t, n | 1), Rt(t, Ue()), !(fe & 6) && (Qi = Ue() + 500, io()));
      }
      break;
    case 13:
      Vo(function() {
        var r = yr(e, 1);
        if (r !== null) {
          var o = kt();
          _n(r, e, 1, o);
        }
      }), Xm(e, 1);
  }
};
ym = function(e) {
  if (e.tag === 13) {
    var t = yr(e, 134217728);
    if (t !== null) {
      var n = kt();
      _n(t, e, 134217728, n);
    }
    Xm(e, 134217728);
  }
};
US = function(e) {
  if (e.tag === 13) {
    var t = Kr(e), n = yr(e, t);
    if (n !== null) {
      var r = kt();
      _n(n, e, t, r);
    }
    Xm(e, t);
  }
};
GS = function() {
  return be;
};
YS = function(e, t) {
  var n = be;
  try {
    return be = e, t();
  } finally {
    be = n;
  }
};
$p = function(e, t, n) {
  switch (t) {
    case "input":
      if (Pp(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Yc(r);
            if (!o)
              throw Error(A(90));
            kS(r), Pp(r, o);
          }
        }
      }
      break;
    case "textarea":
      TS(e, n);
      break;
    case "select":
      t = n.value, t != null && Ii(e, !!n.multiple, t, !1);
  }
};
RS = Um;
AS = Vo;
var $O = { usingClientEntryPoint: !1, Events: [tl, di, Yc, IS, $S, Um] }, Ea = { findFiberByHostInstance: ko, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, RO = { bundleType: Ea.bundleType, version: Ea.version, rendererPackageName: Ea.rendererPackageName, rendererConfig: Ea.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Cr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = zS(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ea.findFiberByHostInstance || MO, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Nl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Nl.isDisabled && Nl.supportsFiber)
    try {
      Wc = Nl.inject(RO), Un = Nl;
    } catch {
    }
}
Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $O;
Zt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Zm(t))
    throw Error(A(200));
  return OO(e, t, null, n);
};
Zt.createRoot = function(e, t) {
  if (!Zm(e))
    throw Error(A(299));
  var n = !1, r = "", o = vw;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = qm(e, 1, !1, null, null, n, !1, r, o), e[gr] = t.current, Ps(e.nodeType === 8 ? e.parentNode : e), new Qm(t);
};
Zt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
  return e = zS(t), e = e === null ? null : e.stateNode, e;
};
Zt.flushSync = function(e) {
  return Vo(e);
};
Zt.hydrate = function(e, t, n) {
  if (!nd(t))
    throw Error(A(200));
  return rd(null, e, t, !0, n);
};
Zt.hydrateRoot = function(e, t, n) {
  if (!Zm(e))
    throw Error(A(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", a = vw;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = mw(t, null, e, 1, n ?? null, o, !1, i, a), e[gr] = t.current, Ps(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new td(t);
};
Zt.render = function(e, t, n) {
  if (!nd(t))
    throw Error(A(200));
  return rd(null, e, t, !1, n);
};
Zt.unmountComponentAtNode = function(e) {
  if (!nd(e))
    throw Error(A(40));
  return e._reactRootContainer ? (Vo(function() {
    rd(null, null, e, !1, function() {
      e._reactRootContainer = null, e[gr] = null;
    });
  }), !0) : !1;
};
Zt.unstable_batchedUpdates = Um;
Zt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!nd(n))
    throw Error(A(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(A(38));
  return rd(e, t, n, !1, r);
};
Zt.version = "18.2.0-next-9e3b772b8-20220608";
function gw() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gw);
    } catch (e) {
      console.error(e);
    }
}
gw(), mS.exports = Zt;
var od = mS.exports, U0 = od;
yp.createRoot = U0.createRoot, yp.hydrateRoot = U0.hydrateRoot;
var yw = "Expected a function", G0 = NaN, AO = "[object Symbol]", DO = /^\s+|\s+$/g, FO = /^[-+]0x[0-9a-f]+$/i, zO = /^0b[01]+$/i, LO = /^0o[0-7]+$/i, VO = parseInt, NO = typeof Vr == "object" && Vr && Vr.Object === Object && Vr, jO = typeof self == "object" && self && self.Object === Object && self, BO = NO || jO || Function("return this")(), WO = Object.prototype, HO = WO.toString, UO = Math.max, GO = Math.min, wf = function() {
  return BO.Date.now();
};
function YO(e, t, n) {
  var r, o, i, a, s, l, u = 0, c = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(yw);
  t = Y0(t) || 0, cc(n) && (c = !!n.leading, d = "maxWait" in n, i = d ? UO(Y0(n.maxWait) || 0, t) : i, f = "trailing" in n ? !!n.trailing : f);
  function p(k) {
    var P = r, T = o;
    return r = o = void 0, u = k, a = e.apply(T, P), a;
  }
  function v(k) {
    return u = k, s = setTimeout(m, t), c ? p(k) : a;
  }
  function g(k) {
    var P = k - l, T = k - u, M = t - P;
    return d ? GO(M, i - T) : M;
  }
  function S(k) {
    var P = k - l, T = k - u;
    return l === void 0 || P >= t || P < 0 || d && T >= i;
  }
  function m() {
    var k = wf();
    if (S(k))
      return h(k);
    s = setTimeout(m, g(k));
  }
  function h(k) {
    return s = void 0, f && r ? p(k) : (r = o = void 0, a);
  }
  function b() {
    s !== void 0 && clearTimeout(s), u = 0, r = l = o = s = void 0;
  }
  function x() {
    return s === void 0 ? a : h(wf());
  }
  function C() {
    var k = wf(), P = S(k);
    if (r = arguments, o = this, l = k, P) {
      if (s === void 0)
        return v(l);
      if (d)
        return s = setTimeout(m, t), p(l);
    }
    return s === void 0 && (s = setTimeout(m, t)), a;
  }
  return C.cancel = b, C.flush = x, C;
}
function KO(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(yw);
  return cc(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), YO(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
function cc(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function qO(e) {
  return !!e && typeof e == "object";
}
function XO(e) {
  return typeof e == "symbol" || qO(e) && HO.call(e) == AO;
}
function Y0(e) {
  if (typeof e == "number")
    return e;
  if (XO(e))
    return G0;
  if (cc(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = cc(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(DO, "");
  var n = zO.test(e);
  return n || LO.test(e) ? VO(e.slice(2), n ? 2 : 8) : FO.test(e) ? G0 : +e;
}
var QO = KO;
const ZO = /* @__PURE__ */ Qs(QO);
function JO(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function eM(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var tM = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(eM(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = JO(o);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), vt = "-ms-", dc = "-moz-", me = "-webkit-", bw = "comm", Jm = "rule", ev = "decl", nM = "@import", Sw = "@keyframes", rM = "@layer", oM = Math.abs, id = String.fromCharCode, iM = Object.assign;
function aM(e, t) {
  return ut(e, 0) ^ 45 ? (((t << 2 ^ ut(e, 0)) << 2 ^ ut(e, 1)) << 2 ^ ut(e, 2)) << 2 ^ ut(e, 3) : 0;
}
function xw(e) {
  return e.trim();
}
function sM(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ve(e, t, n) {
  return e.replace(t, n);
}
function dh(e, t) {
  return e.indexOf(t);
}
function ut(e, t) {
  return e.charCodeAt(t) | 0;
}
function As(e, t, n) {
  return e.slice(t, n);
}
function Nn(e) {
  return e.length;
}
function tv(e) {
  return e.length;
}
function jl(e, t) {
  return t.push(e), e;
}
function lM(e, t) {
  return e.map(t).join("");
}
var ad = 1, Zi = 1, ww = 0, zt = 0, qe = 0, pa = "";
function sd(e, t, n, r, o, i, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: ad, column: Zi, length: a, return: "" };
}
function _a(e, t) {
  return iM(sd("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function uM() {
  return qe;
}
function cM() {
  return qe = zt > 0 ? ut(pa, --zt) : 0, Zi--, qe === 10 && (Zi = 1, ad--), qe;
}
function Yt() {
  return qe = zt < ww ? ut(pa, zt++) : 0, Zi++, qe === 10 && (Zi = 1, ad++), qe;
}
function Yn() {
  return ut(pa, zt);
}
function wu() {
  return zt;
}
function rl(e, t) {
  return As(pa, e, t);
}
function Ds(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Cw(e) {
  return ad = Zi = 1, ww = Nn(pa = e), zt = 0, [];
}
function kw(e) {
  return pa = "", e;
}
function Cu(e) {
  return xw(rl(zt - 1, fh(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function dM(e) {
  for (; (qe = Yn()) && qe < 33; )
    Yt();
  return Ds(e) > 2 || Ds(qe) > 3 ? "" : " ";
}
function fM(e, t) {
  for (; --t && Yt() && !(qe < 48 || qe > 102 || qe > 57 && qe < 65 || qe > 70 && qe < 97); )
    ;
  return rl(e, wu() + (t < 6 && Yn() == 32 && Yt() == 32));
}
function fh(e) {
  for (; Yt(); )
    switch (qe) {
      case e:
        return zt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && fh(qe);
        break;
      case 40:
        e === 41 && fh(e);
        break;
      case 92:
        Yt();
        break;
    }
  return zt;
}
function pM(e, t) {
  for (; Yt() && e + qe !== 57; )
    if (e + qe === 84 && Yn() === 47)
      break;
  return "/*" + rl(t, zt - 1) + "*" + id(e === 47 ? e : Yt());
}
function hM(e) {
  for (; !Ds(Yn()); )
    Yt();
  return rl(e, zt);
}
function mM(e) {
  return kw(ku("", null, null, null, [""], e = Cw(e), 0, [0], e));
}
function ku(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, c = 0, d = a, f = 0, p = 0, v = 0, g = 1, S = 1, m = 1, h = 0, b = "", x = o, C = i, k = r, P = b; S; )
    switch (v = h, h = Yt()) {
      case 40:
        if (v != 108 && ut(P, d - 1) == 58) {
          dh(P += ve(Cu(h), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += Cu(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += dM(v);
        break;
      case 92:
        P += fM(wu() - 1, 7);
        continue;
      case 47:
        switch (Yn()) {
          case 42:
          case 47:
            jl(vM(pM(Yt(), wu()), t, n), l);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * g:
        s[u++] = Nn(P) * m;
      case 125 * g:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            S = 0;
          case 59 + c:
            m == -1 && (P = ve(P, /\f/g, "")), p > 0 && Nn(P) - d && jl(p > 32 ? q0(P + ";", r, n, d - 1) : q0(ve(P, " ", "") + ";", r, n, d - 2), l);
            break;
          case 59:
            P += ";";
          default:
            if (jl(k = K0(P, t, n, u, c, o, s, b, x = [], C = [], d), i), h === 123)
              if (c === 0)
                ku(P, t, k, k, x, i, d, s, C);
              else
                switch (f === 99 && ut(P, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ku(e, k, k, r && jl(K0(e, k, k, 0, 0, o, s, b, o, x = [], d), C), o, C, d, s, r ? x : C);
                    break;
                  default:
                    ku(P, k, k, k, [""], C, 0, s, C);
                }
        }
        u = c = p = 0, g = m = 1, b = P = "", d = a;
        break;
      case 58:
        d = 1 + Nn(P), p = v;
      default:
        if (g < 1) {
          if (h == 123)
            --g;
          else if (h == 125 && g++ == 0 && cM() == 125)
            continue;
        }
        switch (P += id(h), h * g) {
          case 38:
            m = c > 0 ? 1 : (P += "\f", -1);
            break;
          case 44:
            s[u++] = (Nn(P) - 1) * m, m = 1;
            break;
          case 64:
            Yn() === 45 && (P += Cu(Yt())), f = Yn(), c = d = Nn(b = P += hM(wu())), h++;
            break;
          case 45:
            v === 45 && Nn(P) == 2 && (g = 0);
        }
    }
  return i;
}
function K0(e, t, n, r, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = tv(f), v = 0, g = 0, S = 0; v < r; ++v)
    for (var m = 0, h = As(e, d + 1, d = oM(g = a[v])), b = e; m < p; ++m)
      (b = xw(g > 0 ? f[m] + " " + h : ve(h, /&\f/g, f[m]))) && (l[S++] = b);
  return sd(e, t, n, o === 0 ? Jm : s, l, u, c);
}
function vM(e, t, n) {
  return sd(e, t, n, bw, id(uM()), As(e, 2, -2), 0);
}
function q0(e, t, n, r) {
  return sd(e, t, n, ev, As(e, 0, r), As(e, r + 1, -1), r);
}
function zi(e, t) {
  for (var n = "", r = tv(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function gM(e, t, n, r) {
  switch (e.type) {
    case rM:
      if (e.children.length)
        break;
    case nM:
    case ev:
      return e.return = e.return || e.value;
    case bw:
      return "";
    case Sw:
      return e.return = e.value + "{" + zi(e.children, r) + "}";
    case Jm:
      e.value = e.props.join(",");
  }
  return Nn(n = zi(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function yM(e) {
  var t = tv(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function bM(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var X0 = function(t) {
  var n = /* @__PURE__ */ new WeakMap();
  return function(r) {
    if (n.has(r))
      return n.get(r);
    var o = t(r);
    return n.set(r, o), o;
  };
};
function Pw(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var SM = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Yn(), o === 38 && i === 12 && (n[r] = 1), !Ds(i); )
    Yt();
  return rl(t, zt);
}, xM = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Ds(o)) {
      case 0:
        o === 38 && Yn() === 12 && (n[r] = 1), t[r] += SM(zt - 1, n, r);
        break;
      case 2:
        t[r] += Cu(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Yn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += id(o);
    }
  while (o = Yt());
  return t;
}, wM = function(t, n) {
  return kw(xM(Cw(t), n));
}, Q0 = /* @__PURE__ */ new WeakMap(), CM = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Q0.get(r)) && !o) {
      Q0.set(t, !0);
      for (var i = [], a = wM(n, i), s = r.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, kM = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Tw(e, t) {
  switch (aM(e, t)) {
    case 5103:
      return me + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return me + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return me + e + dc + e + vt + e + e;
    case 6828:
    case 4268:
      return me + e + vt + e + e;
    case 6165:
      return me + e + vt + "flex-" + e + e;
    case 5187:
      return me + e + ve(e, /(\w+).+(:[^]+)/, me + "box-$1$2" + vt + "flex-$1$2") + e;
    case 5443:
      return me + e + vt + "flex-item-" + ve(e, /flex-|-self/, "") + e;
    case 4675:
      return me + e + vt + "flex-line-pack" + ve(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return me + e + vt + ve(e, "shrink", "negative") + e;
    case 5292:
      return me + e + vt + ve(e, "basis", "preferred-size") + e;
    case 6060:
      return me + "box-" + ve(e, "-grow", "") + me + e + vt + ve(e, "grow", "positive") + e;
    case 4554:
      return me + ve(e, /([^-])(transform)/g, "$1" + me + "$2") + e;
    case 6187:
      return ve(ve(ve(e, /(zoom-|grab)/, me + "$1"), /(image-set)/, me + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ve(e, /(image-set\([^]*)/, me + "$1$`$1");
    case 4968:
      return ve(ve(e, /(.+:)(flex-)?(.*)/, me + "box-pack:$3" + vt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + me + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ve(e, /(.+)-inline(.+)/, me + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Nn(e) - 1 - t > 6)
        switch (ut(e, t + 1)) {
          case 109:
            if (ut(e, t + 4) !== 45)
              break;
          case 102:
            return ve(e, /(.+:)(.+)-([^]+)/, "$1" + me + "$2-$3$1" + dc + (ut(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~dh(e, "stretch") ? Tw(ve(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ut(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ut(e, Nn(e) - 3 - (~dh(e, "!important") && 10))) {
        case 107:
          return ve(e, ":", ":" + me) + e;
        case 101:
          return ve(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + me + (ut(e, 14) === 45 ? "inline-" : "") + "box$3$1" + me + "$2$3$1" + vt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ut(e, t + 11)) {
        case 114:
          return me + e + vt + ve(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return me + e + vt + ve(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return me + e + vt + ve(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return me + e + vt + e + e;
  }
  return e;
}
var PM = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case ev:
        t.return = Tw(t.value, t.length);
        break;
      case Sw:
        return zi([_a(t, {
          value: ve(t.value, "@", "@" + me)
        })], o);
      case Jm:
        if (t.length)
          return lM(t.props, function(i) {
            switch (sM(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return zi([_a(t, {
                  props: [ve(i, /:(read-\w+)/, ":" + dc + "$1")]
                })], o);
              case "::placeholder":
                return zi([_a(t, {
                  props: [ve(i, /:(plac\w+)/, ":" + me + "input-$1")]
                }), _a(t, {
                  props: [ve(i, /:(plac\w+)/, ":" + dc + "$1")]
                }), _a(t, {
                  props: [ve(i, /:(plac\w+)/, vt + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, TM = [PM], EM = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(g) {
      var S = g.getAttribute("data-emotion");
      S.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || TM, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(g) {
      for (var S = g.getAttribute("data-emotion").split(" "), m = 1; m < S.length; m++)
        i[S[m]] = !0;
      s.push(g);
    }
  );
  var l, u = [CM, kM];
  {
    var c, d = [gM, bM(function(g) {
      c.insert(g);
    })], f = yM(u.concat(o, d)), p = function(S) {
      return zi(mM(S), f);
    };
    l = function(S, m, h, b) {
      c = h, p(S ? S + "{" + m.styles + "}" : m.styles), b && (v.inserted[m.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new tM({
      key: n,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return v.sheet.hydrate(s), v;
};
function Y() {
  return Y = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Y.apply(this, arguments);
}
var Ew = { exports: {} }, xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ot = typeof Symbol == "function" && Symbol.for, nv = ot ? Symbol.for("react.element") : 60103, rv = ot ? Symbol.for("react.portal") : 60106, ld = ot ? Symbol.for("react.fragment") : 60107, ud = ot ? Symbol.for("react.strict_mode") : 60108, cd = ot ? Symbol.for("react.profiler") : 60114, dd = ot ? Symbol.for("react.provider") : 60109, fd = ot ? Symbol.for("react.context") : 60110, ov = ot ? Symbol.for("react.async_mode") : 60111, pd = ot ? Symbol.for("react.concurrent_mode") : 60111, hd = ot ? Symbol.for("react.forward_ref") : 60112, md = ot ? Symbol.for("react.suspense") : 60113, _M = ot ? Symbol.for("react.suspense_list") : 60120, vd = ot ? Symbol.for("react.memo") : 60115, gd = ot ? Symbol.for("react.lazy") : 60116, OM = ot ? Symbol.for("react.block") : 60121, MM = ot ? Symbol.for("react.fundamental") : 60117, IM = ot ? Symbol.for("react.responder") : 60118, $M = ot ? Symbol.for("react.scope") : 60119;
function en(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case nv:
        switch (e = e.type, e) {
          case ov:
          case pd:
          case ld:
          case cd:
          case ud:
          case md:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case fd:
              case hd:
              case gd:
              case vd:
              case dd:
                return e;
              default:
                return t;
            }
        }
      case rv:
        return t;
    }
  }
}
function _w(e) {
  return en(e) === pd;
}
xe.AsyncMode = ov;
xe.ConcurrentMode = pd;
xe.ContextConsumer = fd;
xe.ContextProvider = dd;
xe.Element = nv;
xe.ForwardRef = hd;
xe.Fragment = ld;
xe.Lazy = gd;
xe.Memo = vd;
xe.Portal = rv;
xe.Profiler = cd;
xe.StrictMode = ud;
xe.Suspense = md;
xe.isAsyncMode = function(e) {
  return _w(e) || en(e) === ov;
};
xe.isConcurrentMode = _w;
xe.isContextConsumer = function(e) {
  return en(e) === fd;
};
xe.isContextProvider = function(e) {
  return en(e) === dd;
};
xe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === nv;
};
xe.isForwardRef = function(e) {
  return en(e) === hd;
};
xe.isFragment = function(e) {
  return en(e) === ld;
};
xe.isLazy = function(e) {
  return en(e) === gd;
};
xe.isMemo = function(e) {
  return en(e) === vd;
};
xe.isPortal = function(e) {
  return en(e) === rv;
};
xe.isProfiler = function(e) {
  return en(e) === cd;
};
xe.isStrictMode = function(e) {
  return en(e) === ud;
};
xe.isSuspense = function(e) {
  return en(e) === md;
};
xe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === ld || e === pd || e === cd || e === ud || e === md || e === _M || typeof e == "object" && e !== null && (e.$$typeof === gd || e.$$typeof === vd || e.$$typeof === dd || e.$$typeof === fd || e.$$typeof === hd || e.$$typeof === MM || e.$$typeof === IM || e.$$typeof === $M || e.$$typeof === OM);
};
xe.typeOf = en;
Ew.exports = xe;
var RM = Ew.exports, Ow = RM, AM = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, DM = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Mw = {};
Mw[Ow.ForwardRef] = AM;
Mw[Ow.Memo] = DM;
var FM = !0;
function Iw(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var iv = function(t, n, r) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  FM === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, av = function(t, n, r) {
  iv(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function zM(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var LM = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, VM = /[A-Z]|^ms/g, NM = /_EMO_([^_]+?)_([^]*?)_EMO_/g, $w = function(t) {
  return t.charCodeAt(1) === 45;
}, Z0 = function(t) {
  return t != null && typeof t != "boolean";
}, Cf = /* @__PURE__ */ Pw(function(e) {
  return $w(e) ? e : e.replace(VM, "-$&").toLowerCase();
}), J0 = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(NM, function(r, o, i) {
          return jn = {
            name: o,
            styles: i,
            next: jn
          }, o;
        });
  }
  return LM[t] !== 1 && !$w(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Fs(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return jn = {
          name: n.name,
          styles: n.styles,
          next: jn
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            jn = {
              name: r.name,
              styles: r.styles,
              next: jn
            }, r = r.next;
        var o = n.styles + ";";
        return o;
      }
      return jM(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = jn, a = n(e);
        return jn = i, Fs(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function jM(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Fs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : Z0(a) && (r += Cf(i) + ":" + J0(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          Z0(a[s]) && (r += Cf(i) + ":" + J0(i, a[s]) + ";");
      else {
        var l = Fs(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Cf(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var ey = /label:\s*([^\s;\n{]+)\s*(;|$)/g, jn, yd = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  jn = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += Fs(r, n, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += Fs(r, n, t[s]), o && (i += a[s]);
  ey.lastIndex = 0;
  for (var l = "", u; (u = ey.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = zM(i) + l;
  return {
    name: c,
    styles: i,
    next: jn
  };
}, BM = function(t) {
  return t();
}, Rw = Vg.useInsertionEffect ? Vg.useInsertionEffect : !1, Aw = Rw || BM, ty = Rw || y.useLayoutEffect, sv = {}.hasOwnProperty, Dw = /* @__PURE__ */ y.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ EM({
    key: "css"
  }) : null
);
Dw.Provider;
var lv = function(t) {
  return /* @__PURE__ */ y.forwardRef(function(n, r) {
    var o = y.useContext(Dw);
    return t(n, o, r);
  });
}, Ji = /* @__PURE__ */ y.createContext({}), WM = function(t, n) {
  if (typeof n == "function") {
    var r = n(t);
    return r;
  }
  return Y({}, t, n);
}, HM = /* @__PURE__ */ X0(function(e) {
  return X0(function(t) {
    return WM(e, t);
  });
}), UM = function(t) {
  var n = y.useContext(Ji);
  return t.theme !== n && (n = HM(n)(t.theme)), /* @__PURE__ */ y.createElement(Ji.Provider, {
    value: n
  }, t.children);
}, ph = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", GM = function(t, n) {
  var r = {};
  for (var o in n)
    sv.call(n, o) && (r[o] = n[o]);
  return r[ph] = t, r;
}, YM = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return iv(n, r, o), Aw(function() {
    return av(n, r, o);
  }), null;
}, KM = /* @__PURE__ */ lv(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[ph], i = [r], a = "";
  typeof e.className == "string" ? a = Iw(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = yd(i, void 0, y.useContext(Ji));
  a += t.key + "-" + s.name;
  var l = {};
  for (var u in e)
    sv.call(e, u) && u !== "css" && u !== ph && (l[u] = e[u]);
  return l.ref = n, l.className = a, /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement(YM, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ y.createElement(o, l));
}), qM = KM, Z = function(t, n) {
  var r = arguments;
  if (n == null || !sv.call(n, "css"))
    return y.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = qM, i[1] = GM(t, n);
  for (var a = 2; a < o; a++)
    i[a] = r[a];
  return y.createElement.apply(null, i);
}, bd = /* @__PURE__ */ lv(function(e, t) {
  var n = e.styles, r = yd([n], void 0, y.useContext(Ji)), o = y.useRef();
  return ty(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), ty(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && av(t, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function uv() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return yd(t);
}
var Fw = function() {
  var t = uv.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, zw = String.raw, Lw = zw`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`, XM = () => /* @__PURE__ */ E.jsx(bd, { styles: Lw }), QM = ({ scope: e = "" }) => /* @__PURE__ */ E.jsx(
  bd,
  {
    styles: zw`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${Lw}
    `
  }
);
function ZM(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function St(e = {}) {
  const {
    name: t,
    strict: n = !0,
    hookName: r = "useContext",
    providerName: o = "Provider",
    errorMessage: i,
    defaultValue: a
  } = e, s = y.createContext(a);
  s.displayName = t;
  function l() {
    var u;
    const c = y.useContext(s);
    if (!c && n) {
      const d = new Error(
        i ?? ZM(r, o)
      );
      throw d.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, d, l), d;
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [JM, eI] = St({
  strict: !1,
  name: "PortalManagerContext"
});
function Vw(e) {
  const { children: t, zIndex: n } = e;
  return /* @__PURE__ */ E.jsx(JM, { value: { zIndex: n }, children: t });
}
Vw.displayName = "PortalManager";
var ea = globalThis != null && globalThis.document ? y.useLayoutEffect : y.useEffect, [Nw, tI] = St({
  strict: !1,
  name: "PortalContext"
}), cv = "chakra-portal", nI = ".chakra-portal", rI = (e) => /* @__PURE__ */ E.jsx(
  "div",
  {
    className: "chakra-portal-zIndex",
    style: {
      position: "absolute",
      zIndex: e.zIndex,
      top: 0,
      left: 0,
      right: 0
      // NB: Don't add `bottom: 0`, it makes the entire app unusable
      // @see https://github.com/chakra-ui/chakra-ui/issues/3201
    },
    children: e.children
  }
), oI = (e) => {
  const { appendToParentPortal: t, children: n } = e, [r, o] = y.useState(null), i = y.useRef(null), [, a] = y.useState({});
  y.useEffect(() => a({}), []);
  const s = tI(), l = eI();
  ea(() => {
    if (!r)
      return;
    const c = r.ownerDocument, d = t ? s ?? c.body : c.body;
    if (!d)
      return;
    i.current = c.createElement("div"), i.current.className = cv, d.appendChild(i.current), a({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [r]);
  const u = l != null && l.zIndex ? /* @__PURE__ */ E.jsx(rI, { zIndex: l == null ? void 0 : l.zIndex, children: n }) : n;
  return i.current ? od.createPortal(
    /* @__PURE__ */ E.jsx(Nw, { value: i.current, children: u }),
    i.current
  ) : /* @__PURE__ */ E.jsx(
    "span",
    {
      ref: (c) => {
        c && o(c);
      }
    }
  );
}, iI = (e) => {
  const { children: t, containerRef: n, appendToParentPortal: r } = e, o = n.current, i = o ?? (typeof window < "u" ? document.body : void 0), a = y.useMemo(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = cv), l;
  }, [o]), [, s] = y.useState({});
  return ea(() => s({}), []), ea(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? od.createPortal(
    /* @__PURE__ */ E.jsx(Nw, { value: r ? a : null, children: t }),
    a
  ) : null;
};
function ol(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: n, ...r } = t;
  return n ? /* @__PURE__ */ E.jsx(iI, { containerRef: n, ...r }) : /* @__PURE__ */ E.jsx(oI, { ...r });
}
ol.className = cv;
ol.selector = nI;
ol.displayName = "Portal";
function ao() {
  const e = y.useContext(
    Ji
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var dv = y.createContext({});
dv.displayName = "ColorModeContext";
function ha() {
  const e = y.useContext(dv);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function ny(e, t) {
  const { colorMode: n } = ha();
  return n === "dark" ? t : e;
}
var Bl = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function aI(e = {}) {
  const { preventTransition: t = !0 } = e, n = {
    setDataset: (r) => {
      const o = t ? n.preventTransition() : void 0;
      document.documentElement.dataset.theme = r, document.documentElement.style.colorScheme = r, o == null || o();
    },
    setClassName(r) {
      document.body.classList.add(r ? Bl.dark : Bl.light), document.body.classList.remove(r ? Bl.light : Bl.dark);
    },
    query() {
      return window.matchMedia("(prefers-color-scheme: dark)");
    },
    getSystemTheme(r) {
      var o;
      return ((o = n.query().matches) != null ? o : r === "dark") ? "dark" : "light";
    },
    addListener(r) {
      const o = n.query(), i = (a) => {
        r(a.matches ? "dark" : "light");
      };
      return typeof o.addListener == "function" ? o.addListener(i) : o.addEventListener("change", i), () => {
        typeof o.removeListener == "function" ? o.removeListener(i) : o.removeEventListener("change", i);
      };
    },
    preventTransition() {
      const r = document.createElement("style");
      return r.appendChild(
        document.createTextNode(
          "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
        )
      ), document.head.appendChild(r), () => {
        window.getComputedStyle(document.body), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.head.removeChild(r);
          });
        });
      };
    }
  };
  return n;
}
var sI = "chakra-ui-color-mode";
function lI(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document))
        return t;
      let n;
      try {
        n = localStorage.getItem(e) || t;
      } catch {
      }
      return n || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {
      }
    }
  };
}
var uI = lI(sI), ry = () => {
};
function oy(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function jw(e) {
  const {
    value: t,
    children: n,
    options: {
      useSystemColorMode: r,
      initialColorMode: o,
      disableTransitionOnChange: i
    } = {},
    colorModeManager: a = uI
  } = e, s = o === "dark" ? "dark" : "light", [l, u] = y.useState(
    () => oy(a, s)
  ), [c, d] = y.useState(
    () => oy(a)
  ), { getSystemTheme: f, setClassName: p, setDataset: v, addListener: g } = y.useMemo(
    () => aI({ preventTransition: i }),
    [i]
  ), S = o === "system" && !l ? c : l, m = y.useCallback(
    (x) => {
      const C = x === "system" ? f() : x;
      u(C), p(C === "dark"), v(C), a.set(C);
    },
    [a, f, p, v]
  );
  ea(() => {
    o === "system" && d(f());
  }, []), y.useEffect(() => {
    const x = a.get();
    if (x) {
      m(x);
      return;
    }
    if (o === "system") {
      m("system");
      return;
    }
    m(s);
  }, [a, s, o, m]);
  const h = y.useCallback(() => {
    m(S === "dark" ? "light" : "dark");
  }, [S, m]);
  y.useEffect(() => {
    if (r)
      return g(m);
  }, [r, g, m]);
  const b = y.useMemo(
    () => ({
      colorMode: t ?? S,
      toggleColorMode: t ? ry : h,
      setColorMode: t ? ry : m,
      forced: t !== void 0
    }),
    [S, h, m, t]
  );
  return /* @__PURE__ */ E.jsx(dv.Provider, { value: b, children: n });
}
jw.displayName = "ColorModeProvider";
var cI = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function dI(e) {
  let t = e;
  return cI.has(t) || (t = "light"), t;
}
function fI(e = {}) {
  const {
    initialColorMode: t = "light",
    type: n = "localStorage",
    storageKey: r = "chakra-ui-color-mode"
  } = e, o = dI(t), i = n === "cookie", a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${r}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `, s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${r}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? a : s}`.trim();
}
function pI(e = {}) {
  const { nonce: t } = e;
  return /* @__PURE__ */ E.jsx(
    "script",
    {
      id: "chakra-script",
      nonce: t,
      dangerouslySetInnerHTML: { __html: fI(e) }
    }
  );
}
function hI() {
  const e = ha(), t = ao();
  return { ...e, theme: t };
}
var Se = (...e) => e.filter(Boolean).join(" ");
function At(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function Hn(e, ...t) {
  return mI(e) ? e(...t) : e;
}
var mI = (e) => typeof e == "function", zn = (e) => e ? "" : void 0, kf = (e) => e ? !0 : void 0;
function lt(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
function vI(...e) {
  return function(n) {
    e.forEach((r) => {
      r == null || r(n);
    });
  };
}
var fc = { exports: {} };
fc.exports;
(function(e, t) {
  var n = 200, r = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", v = "[object GeneratorFunction]", g = "[object Map]", S = "[object Number]", m = "[object Null]", h = "[object Object]", b = "[object Proxy]", x = "[object RegExp]", C = "[object Set]", k = "[object String]", P = "[object Undefined]", T = "[object WeakMap]", M = "[object ArrayBuffer]", $ = "[object DataView]", D = "[object Float32Array]", U = "[object Float64Array]", W = "[object Int8Array]", L = "[object Int16Array]", H = "[object Int32Array]", K = "[object Uint8Array]", ne = "[object Uint8ClampedArray]", R = "[object Uint16Array]", F = "[object Uint32Array]", B = /[\\^$.*+?()[\]{}|]/g, N = /^\[object .+?Constructor\]$/, G = /^(?:0|[1-9]\d*)$/, z = {};
  z[D] = z[U] = z[W] = z[L] = z[H] = z[K] = z[ne] = z[R] = z[F] = !0, z[s] = z[l] = z[M] = z[c] = z[$] = z[d] = z[f] = z[p] = z[g] = z[S] = z[h] = z[x] = z[C] = z[k] = z[T] = !1;
  var J = typeof Vr == "object" && Vr && Vr.Object === Object && Vr, ae = typeof self == "object" && self && self.Object === Object && self, re = J || ae || Function("return this")(), ie = t && !t.nodeType && t, pe = ie && !0 && e && !e.nodeType && e, we = pe && pe.exports === ie, Qe = we && J.process, Ye = function() {
    try {
      var w = pe && pe.require && pe.require("util").types;
      return w || Qe && Qe.binding && Qe.binding("util");
    } catch {
    }
  }(), tn = Ye && Ye.isTypedArray;
  function bn(w, _, I) {
    switch (I.length) {
      case 0:
        return w.call(_);
      case 1:
        return w.call(_, I[0]);
      case 2:
        return w.call(_, I[0], I[1]);
      case 3:
        return w.call(_, I[0], I[1], I[2]);
    }
    return w.apply(_, I);
  }
  function Pr(w, _) {
    for (var I = -1, V = Array(w); ++I < w; )
      V[I] = _(I);
    return V;
  }
  function ce(w) {
    return function(_) {
      return w(_);
    };
  }
  function ft(w, _) {
    return w == null ? void 0 : w[_];
  }
  function He(w, _) {
    return function(I) {
      return w(_(I));
    };
  }
  var jt = Array.prototype, Tr = Function.prototype, pt = Object.prototype, $n = re["__core-js_shared__"], Er = Tr.toString, nn = pt.hasOwnProperty, qo = function() {
    var w = /[^.]+$/.exec($n && $n.keys && $n.keys.IE_PROTO || "");
    return w ? "Symbol(src)_1." + w : "";
  }(), va = pt.toString, vl = Er.call(Object), gl = RegExp(
    "^" + Er.call(nn).replace(B, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), co = we ? re.Buffer : void 0, bg = re.Symbol, Sg = re.Uint8Array, xg = co ? co.allocUnsafe : void 0, wg = He(Object.getPrototypeOf, Object), Cg = Object.create, iT = pt.propertyIsEnumerable, aT = jt.splice, fo = bg ? bg.toStringTag : void 0, yl = function() {
    try {
      var w = jd(Object, "defineProperty");
      return w({}, "", {}), w;
    } catch {
    }
  }(), sT = co ? co.isBuffer : void 0, kg = Math.max, lT = Date.now, Pg = jd(re, "Map"), ga = jd(Object, "create"), uT = /* @__PURE__ */ function() {
    function w() {
    }
    return function(_) {
      if (!ho(_))
        return {};
      if (Cg)
        return Cg(_);
      w.prototype = _;
      var I = new w();
      return w.prototype = void 0, I;
    };
  }();
  function po(w) {
    var _ = -1, I = w == null ? 0 : w.length;
    for (this.clear(); ++_ < I; ) {
      var V = w[_];
      this.set(V[0], V[1]);
    }
  }
  function cT() {
    this.__data__ = ga ? ga(null) : {}, this.size = 0;
  }
  function dT(w) {
    var _ = this.has(w) && delete this.__data__[w];
    return this.size -= _ ? 1 : 0, _;
  }
  function fT(w) {
    var _ = this.__data__;
    if (ga) {
      var I = _[w];
      return I === r ? void 0 : I;
    }
    return nn.call(_, w) ? _[w] : void 0;
  }
  function pT(w) {
    var _ = this.__data__;
    return ga ? _[w] !== void 0 : nn.call(_, w);
  }
  function hT(w, _) {
    var I = this.__data__;
    return this.size += this.has(w) ? 0 : 1, I[w] = ga && _ === void 0 ? r : _, this;
  }
  po.prototype.clear = cT, po.prototype.delete = dT, po.prototype.get = fT, po.prototype.has = pT, po.prototype.set = hT;
  function er(w) {
    var _ = -1, I = w == null ? 0 : w.length;
    for (this.clear(); ++_ < I; ) {
      var V = w[_];
      this.set(V[0], V[1]);
    }
  }
  function mT() {
    this.__data__ = [], this.size = 0;
  }
  function vT(w) {
    var _ = this.__data__, I = bl(_, w);
    if (I < 0)
      return !1;
    var V = _.length - 1;
    return I == V ? _.pop() : aT.call(_, I, 1), --this.size, !0;
  }
  function gT(w) {
    var _ = this.__data__, I = bl(_, w);
    return I < 0 ? void 0 : _[I][1];
  }
  function yT(w) {
    return bl(this.__data__, w) > -1;
  }
  function bT(w, _) {
    var I = this.__data__, V = bl(I, w);
    return V < 0 ? (++this.size, I.push([w, _])) : I[V][1] = _, this;
  }
  er.prototype.clear = mT, er.prototype.delete = vT, er.prototype.get = gT, er.prototype.has = yT, er.prototype.set = bT;
  function Xo(w) {
    var _ = -1, I = w == null ? 0 : w.length;
    for (this.clear(); ++_ < I; ) {
      var V = w[_];
      this.set(V[0], V[1]);
    }
  }
  function ST() {
    this.size = 0, this.__data__ = {
      hash: new po(),
      map: new (Pg || er)(),
      string: new po()
    };
  }
  function xT(w) {
    var _ = xl(this, w).delete(w);
    return this.size -= _ ? 1 : 0, _;
  }
  function wT(w) {
    return xl(this, w).get(w);
  }
  function CT(w) {
    return xl(this, w).has(w);
  }
  function kT(w, _) {
    var I = xl(this, w), V = I.size;
    return I.set(w, _), this.size += I.size == V ? 0 : 1, this;
  }
  Xo.prototype.clear = ST, Xo.prototype.delete = xT, Xo.prototype.get = wT, Xo.prototype.has = CT, Xo.prototype.set = kT;
  function Qo(w) {
    var _ = this.__data__ = new er(w);
    this.size = _.size;
  }
  function PT() {
    this.__data__ = new er(), this.size = 0;
  }
  function TT(w) {
    var _ = this.__data__, I = _.delete(w);
    return this.size = _.size, I;
  }
  function ET(w) {
    return this.__data__.get(w);
  }
  function _T(w) {
    return this.__data__.has(w);
  }
  function OT(w, _) {
    var I = this.__data__;
    if (I instanceof er) {
      var V = I.__data__;
      if (!Pg || V.length < n - 1)
        return V.push([w, _]), this.size = ++I.size, this;
      I = this.__data__ = new Xo(V);
    }
    return I.set(w, _), this.size = I.size, this;
  }
  Qo.prototype.clear = PT, Qo.prototype.delete = TT, Qo.prototype.get = ET, Qo.prototype.has = _T, Qo.prototype.set = OT;
  function MT(w, _) {
    var I = Hd(w), V = !I && Wd(w), de = !I && !V && Mg(w), Ce = !I && !V && !de && $g(w), Ie = I || V || de || Ce, le = Ie ? Pr(w.length, String) : [], $e = le.length;
    for (var rn in w)
      (_ || nn.call(w, rn)) && !(Ie && // Safari 9 has enumerable `arguments.length` in strict mode.
      (rn == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      de && (rn == "offset" || rn == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Ce && (rn == "buffer" || rn == "byteLength" || rn == "byteOffset") || // Skip index properties.
      _g(rn, $e))) && le.push(rn);
    return le;
  }
  function Vd(w, _, I) {
    (I !== void 0 && !wl(w[_], I) || I === void 0 && !(_ in w)) && Nd(w, _, I);
  }
  function IT(w, _, I) {
    var V = w[_];
    (!(nn.call(w, _) && wl(V, I)) || I === void 0 && !(_ in w)) && Nd(w, _, I);
  }
  function bl(w, _) {
    for (var I = w.length; I--; )
      if (wl(w[I][0], _))
        return I;
    return -1;
  }
  function Nd(w, _, I) {
    _ == "__proto__" && yl ? yl(w, _, {
      configurable: !0,
      enumerable: !0,
      value: I,
      writable: !0
    }) : w[_] = I;
  }
  var $T = UT();
  function Sl(w) {
    return w == null ? w === void 0 ? P : m : fo && fo in Object(w) ? GT(w) : ZT(w);
  }
  function Tg(w) {
    return ya(w) && Sl(w) == s;
  }
  function RT(w) {
    if (!ho(w) || XT(w))
      return !1;
    var _ = Gd(w) ? gl : N;
    return _.test(nE(w));
  }
  function AT(w) {
    return ya(w) && Ig(w.length) && !!z[Sl(w)];
  }
  function DT(w) {
    if (!ho(w))
      return QT(w);
    var _ = Og(w), I = [];
    for (var V in w)
      V == "constructor" && (_ || !nn.call(w, V)) || I.push(V);
    return I;
  }
  function Eg(w, _, I, V, de) {
    w !== _ && $T(_, function(Ce, Ie) {
      if (de || (de = new Qo()), ho(Ce))
        FT(w, _, Ie, I, Eg, V, de);
      else {
        var le = V ? V(Bd(w, Ie), Ce, Ie + "", w, _, de) : void 0;
        le === void 0 && (le = Ce), Vd(w, Ie, le);
      }
    }, Rg);
  }
  function FT(w, _, I, V, de, Ce, Ie) {
    var le = Bd(w, I), $e = Bd(_, I), rn = Ie.get($e);
    if (rn) {
      Vd(w, I, rn);
      return;
    }
    var Bt = Ce ? Ce(le, $e, I + "", w, _, Ie) : void 0, ba = Bt === void 0;
    if (ba) {
      var Yd = Hd($e), Kd = !Yd && Mg($e), Dg = !Yd && !Kd && $g($e);
      Bt = $e, Yd || Kd || Dg ? Hd(le) ? Bt = le : rE(le) ? Bt = BT(le) : Kd ? (ba = !1, Bt = VT($e, !0)) : Dg ? (ba = !1, Bt = jT($e, !0)) : Bt = [] : oE($e) || Wd($e) ? (Bt = le, Wd(le) ? Bt = iE(le) : (!ho(le) || Gd(le)) && (Bt = YT($e))) : ba = !1;
    }
    ba && (Ie.set($e, Bt), de(Bt, $e, V, Ce, Ie), Ie.delete($e)), Vd(w, I, Bt);
  }
  function zT(w, _) {
    return eE(JT(w, _, Ag), w + "");
  }
  var LT = yl ? function(w, _) {
    return yl(w, "toString", {
      configurable: !0,
      enumerable: !1,
      value: sE(_),
      writable: !0
    });
  } : Ag;
  function VT(w, _) {
    if (_)
      return w.slice();
    var I = w.length, V = xg ? xg(I) : new w.constructor(I);
    return w.copy(V), V;
  }
  function NT(w) {
    var _ = new w.constructor(w.byteLength);
    return new Sg(_).set(new Sg(w)), _;
  }
  function jT(w, _) {
    var I = _ ? NT(w.buffer) : w.buffer;
    return new w.constructor(I, w.byteOffset, w.length);
  }
  function BT(w, _) {
    var I = -1, V = w.length;
    for (_ || (_ = Array(V)); ++I < V; )
      _[I] = w[I];
    return _;
  }
  function WT(w, _, I, V) {
    var de = !I;
    I || (I = {});
    for (var Ce = -1, Ie = _.length; ++Ce < Ie; ) {
      var le = _[Ce], $e = V ? V(I[le], w[le], le, I, w) : void 0;
      $e === void 0 && ($e = w[le]), de ? Nd(I, le, $e) : IT(I, le, $e);
    }
    return I;
  }
  function HT(w) {
    return zT(function(_, I) {
      var V = -1, de = I.length, Ce = de > 1 ? I[de - 1] : void 0, Ie = de > 2 ? I[2] : void 0;
      for (Ce = w.length > 3 && typeof Ce == "function" ? (de--, Ce) : void 0, Ie && KT(I[0], I[1], Ie) && (Ce = de < 3 ? void 0 : Ce, de = 1), _ = Object(_); ++V < de; ) {
        var le = I[V];
        le && w(_, le, V, Ce);
      }
      return _;
    });
  }
  function UT(w) {
    return function(_, I, V) {
      for (var de = -1, Ce = Object(_), Ie = V(_), le = Ie.length; le--; ) {
        var $e = Ie[w ? le : ++de];
        if (I(Ce[$e], $e, Ce) === !1)
          break;
      }
      return _;
    };
  }
  function xl(w, _) {
    var I = w.__data__;
    return qT(_) ? I[typeof _ == "string" ? "string" : "hash"] : I.map;
  }
  function jd(w, _) {
    var I = ft(w, _);
    return RT(I) ? I : void 0;
  }
  function GT(w) {
    var _ = nn.call(w, fo), I = w[fo];
    try {
      w[fo] = void 0;
      var V = !0;
    } catch {
    }
    var de = va.call(w);
    return V && (_ ? w[fo] = I : delete w[fo]), de;
  }
  function YT(w) {
    return typeof w.constructor == "function" && !Og(w) ? uT(wg(w)) : {};
  }
  function _g(w, _) {
    var I = typeof w;
    return _ = _ ?? a, !!_ && (I == "number" || I != "symbol" && G.test(w)) && w > -1 && w % 1 == 0 && w < _;
  }
  function KT(w, _, I) {
    if (!ho(I))
      return !1;
    var V = typeof _;
    return (V == "number" ? Ud(I) && _g(_, I.length) : V == "string" && _ in I) ? wl(I[_], w) : !1;
  }
  function qT(w) {
    var _ = typeof w;
    return _ == "string" || _ == "number" || _ == "symbol" || _ == "boolean" ? w !== "__proto__" : w === null;
  }
  function XT(w) {
    return !!qo && qo in w;
  }
  function Og(w) {
    var _ = w && w.constructor, I = typeof _ == "function" && _.prototype || pt;
    return w === I;
  }
  function QT(w) {
    var _ = [];
    if (w != null)
      for (var I in Object(w))
        _.push(I);
    return _;
  }
  function ZT(w) {
    return va.call(w);
  }
  function JT(w, _, I) {
    return _ = kg(_ === void 0 ? w.length - 1 : _, 0), function() {
      for (var V = arguments, de = -1, Ce = kg(V.length - _, 0), Ie = Array(Ce); ++de < Ce; )
        Ie[de] = V[_ + de];
      de = -1;
      for (var le = Array(_ + 1); ++de < _; )
        le[de] = V[de];
      return le[_] = I(Ie), bn(w, this, le);
    };
  }
  function Bd(w, _) {
    if (!(_ === "constructor" && typeof w[_] == "function") && _ != "__proto__")
      return w[_];
  }
  var eE = tE(LT);
  function tE(w) {
    var _ = 0, I = 0;
    return function() {
      var V = lT(), de = i - (V - I);
      if (I = V, de > 0) {
        if (++_ >= o)
          return arguments[0];
      } else
        _ = 0;
      return w.apply(void 0, arguments);
    };
  }
  function nE(w) {
    if (w != null) {
      try {
        return Er.call(w);
      } catch {
      }
      try {
        return w + "";
      } catch {
      }
    }
    return "";
  }
  function wl(w, _) {
    return w === _ || w !== w && _ !== _;
  }
  var Wd = Tg(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Tg : function(w) {
    return ya(w) && nn.call(w, "callee") && !iT.call(w, "callee");
  }, Hd = Array.isArray;
  function Ud(w) {
    return w != null && Ig(w.length) && !Gd(w);
  }
  function rE(w) {
    return ya(w) && Ud(w);
  }
  var Mg = sT || lE;
  function Gd(w) {
    if (!ho(w))
      return !1;
    var _ = Sl(w);
    return _ == p || _ == v || _ == u || _ == b;
  }
  function Ig(w) {
    return typeof w == "number" && w > -1 && w % 1 == 0 && w <= a;
  }
  function ho(w) {
    var _ = typeof w;
    return w != null && (_ == "object" || _ == "function");
  }
  function ya(w) {
    return w != null && typeof w == "object";
  }
  function oE(w) {
    if (!ya(w) || Sl(w) != h)
      return !1;
    var _ = wg(w);
    if (_ === null)
      return !0;
    var I = nn.call(_, "constructor") && _.constructor;
    return typeof I == "function" && I instanceof I && Er.call(I) == vl;
  }
  var $g = tn ? ce(tn) : AT;
  function iE(w) {
    return WT(w, Rg(w));
  }
  function Rg(w) {
    return Ud(w) ? MT(w, !0) : DT(w);
  }
  var aE = HT(function(w, _, I, V) {
    Eg(w, _, I, V);
  });
  function sE(w) {
    return function() {
      return w;
    };
  }
  function Ag(w) {
    return w;
  }
  function lE() {
    return !1;
  }
  e.exports = aE;
})(fc, fc.exports);
var gI = fc.exports;
const dn = /* @__PURE__ */ Qs(gI);
var yI = (e) => /!(important)?$/.test(e), iy = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, bI = (e, t) => (n) => {
  const r = String(t), o = yI(r), i = iy(r), a = e ? `${e}.${i}` : i;
  let s = At(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : t;
  return s = iy(s), o ? `${s} !important` : s;
};
function fv(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (i, a) => {
    var s;
    const l = bI(t, i)(a);
    let u = (s = n == null ? void 0 : n(l, a)) != null ? s : l;
    return r && (u = r(u, a)), u;
  };
}
var Wl = (...e) => (t) => e.reduce((n, r) => r(n), t);
function on(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return r.transform = fv({
      scale: e,
      transform: t
    }), r;
  };
}
var SI = ({ rtl: e, ltr: t }) => (n) => n.direction === "rtl" ? e : t;
function xI(e) {
  const { property: t, scale: n, transform: r } = e;
  return {
    scale: n,
    property: SI(t),
    transform: n ? fv({
      scale: n,
      compose: r
    }) : r
  };
}
var Bw = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function wI() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...Bw
  ].join(" ");
}
function CI() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...Bw
  ].join(" ");
}
var kI = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: [
    "var(--chakra-blur)",
    "var(--chakra-brightness)",
    "var(--chakra-contrast)",
    "var(--chakra-grayscale)",
    "var(--chakra-hue-rotate)",
    "var(--chakra-invert)",
    "var(--chakra-saturate)",
    "var(--chakra-sepia)",
    "var(--chakra-drop-shadow)"
  ].join(" ")
}, PI = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)"
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function TI(e) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)"
    ].join(", ")
  };
}
var EI = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, hh = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, _I = new Set(Object.values(hh)), mh = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), OI = (e) => e.trim();
function MI(e, t) {
  if (e == null || mh.has(e))
    return e;
  if (!(vh(e) || mh.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...u] = a.split(",").map(OI).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0)
    return e;
  const c = l in hh ? hh[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (_I.has(f))
      return f;
    const p = f.indexOf(" "), [v, g] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], S = vh(g) ? g : g && g.split(" "), m = `colors.${v}`, h = m in t.__cssMap ? t.__cssMap[m].varRef : v;
    return S ? [
      h,
      ...Array.isArray(S) ? S : [S]
    ].join(" ") : h;
  });
  return `${s}(${d.join(", ")})`;
}
var vh = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), II = (e, t) => MI(e, t ?? {});
function $I(e) {
  return /^var\(--.+\)$/.test(e);
}
var RI = (e) => {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}, An = (e) => (t) => `${e}(${t})`, ue = {
  filter(e) {
    return e !== "auto" ? e : kI;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : PI;
  },
  ring(e) {
    return TI(ue.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? wI() : e === "auto-gpu" ? CI() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = RI(e);
    return t || typeof e == "number" ? `${e}px` : e;
  },
  fraction(e) {
    return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
  },
  float(e, t) {
    const n = { left: "right", right: "left" };
    return t.direction === "rtl" ? n[e] : e;
  },
  degree(e) {
    if ($I(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: II,
  blur: An("blur"),
  opacity: An("opacity"),
  brightness: An("brightness"),
  contrast: An("contrast"),
  dropShadow: An("drop-shadow"),
  grayscale: An("grayscale"),
  hueRotate: (e) => An("hue-rotate")(ue.degree(e)),
  invert: An("invert"),
  saturate: An("saturate"),
  sepia: An("sepia"),
  bgImage(e) {
    return e == null || vh(e) || mh.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: n, divide: r } = (t = EI[e]) != null ? t : {}, o = { flexDirection: e };
    return n && (o[n] = 1), r && (o[r] = 1), o;
  }
}, O = {
  borderWidths: on("borderWidths"),
  borderStyles: on("borderStyles"),
  colors: on("colors"),
  borders: on("borders"),
  gradients: on("gradients", ue.gradient),
  radii: on("radii", ue.px),
  space: on("space", Wl(ue.vh, ue.px)),
  spaceT: on("space", Wl(ue.vh, ue.px)),
  degreeT(e) {
    return { property: e, transform: ue.degree };
  },
  prop(e, t, n) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: fv({ scale: t, transform: n })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: on("sizes", Wl(ue.vh, ue.px)),
  sizesT: on("sizes", Wl(ue.vh, ue.fraction)),
  shadows: on("shadows"),
  logical: xI,
  blur: on("blur", ue.blur)
}, Pu = {
  background: O.colors("background"),
  backgroundColor: O.colors("backgroundColor"),
  backgroundImage: O.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: ue.bgClip },
  bgSize: O.prop("backgroundSize"),
  bgPosition: O.prop("backgroundPosition"),
  bg: O.colors("background"),
  bgColor: O.colors("backgroundColor"),
  bgPos: O.prop("backgroundPosition"),
  bgRepeat: O.prop("backgroundRepeat"),
  bgAttachment: O.prop("backgroundAttachment"),
  bgGradient: O.gradients("backgroundImage"),
  bgClip: { transform: ue.bgClip }
};
Object.assign(Pu, {
  bgImage: Pu.backgroundImage,
  bgImg: Pu.backgroundImage
});
var he = {
  border: O.borders("border"),
  borderWidth: O.borderWidths("borderWidth"),
  borderStyle: O.borderStyles("borderStyle"),
  borderColor: O.colors("borderColor"),
  borderRadius: O.radii("borderRadius"),
  borderTop: O.borders("borderTop"),
  borderBlockStart: O.borders("borderBlockStart"),
  borderTopLeftRadius: O.radii("borderTopLeftRadius"),
  borderStartStartRadius: O.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: O.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: O.radii("borderTopRightRadius"),
  borderStartEndRadius: O.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: O.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: O.borders("borderRight"),
  borderInlineEnd: O.borders("borderInlineEnd"),
  borderBottom: O.borders("borderBottom"),
  borderBlockEnd: O.borders("borderBlockEnd"),
  borderBottomLeftRadius: O.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: O.radii("borderBottomRightRadius"),
  borderLeft: O.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: O.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: O.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: O.borders(["borderLeft", "borderRight"]),
  borderInline: O.borders("borderInline"),
  borderY: O.borders(["borderTop", "borderBottom"]),
  borderBlock: O.borders("borderBlock"),
  borderTopWidth: O.borderWidths("borderTopWidth"),
  borderBlockStartWidth: O.borderWidths("borderBlockStartWidth"),
  borderTopColor: O.colors("borderTopColor"),
  borderBlockStartColor: O.colors("borderBlockStartColor"),
  borderTopStyle: O.borderStyles("borderTopStyle"),
  borderBlockStartStyle: O.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: O.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: O.borderWidths("borderBlockEndWidth"),
  borderBottomColor: O.colors("borderBottomColor"),
  borderBlockEndColor: O.colors("borderBlockEndColor"),
  borderBottomStyle: O.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: O.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: O.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: O.borderWidths("borderInlineStartWidth"),
  borderLeftColor: O.colors("borderLeftColor"),
  borderInlineStartColor: O.colors("borderInlineStartColor"),
  borderLeftStyle: O.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: O.borderStyles("borderInlineStartStyle"),
  borderRightWidth: O.borderWidths("borderRightWidth"),
  borderInlineEndWidth: O.borderWidths("borderInlineEndWidth"),
  borderRightColor: O.colors("borderRightColor"),
  borderInlineEndColor: O.colors("borderInlineEndColor"),
  borderRightStyle: O.borderStyles("borderRightStyle"),
  borderInlineEndStyle: O.borderStyles("borderInlineEndStyle"),
  borderTopRadius: O.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: O.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: O.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: O.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(he, {
  rounded: he.borderRadius,
  roundedTop: he.borderTopRadius,
  roundedTopLeft: he.borderTopLeftRadius,
  roundedTopRight: he.borderTopRightRadius,
  roundedTopStart: he.borderStartStartRadius,
  roundedTopEnd: he.borderStartEndRadius,
  roundedBottom: he.borderBottomRadius,
  roundedBottomLeft: he.borderBottomLeftRadius,
  roundedBottomRight: he.borderBottomRightRadius,
  roundedBottomStart: he.borderEndStartRadius,
  roundedBottomEnd: he.borderEndEndRadius,
  roundedLeft: he.borderLeftRadius,
  roundedRight: he.borderRightRadius,
  roundedStart: he.borderInlineStartRadius,
  roundedEnd: he.borderInlineEndRadius,
  borderStart: he.borderInlineStart,
  borderEnd: he.borderInlineEnd,
  borderTopStartRadius: he.borderStartStartRadius,
  borderTopEndRadius: he.borderStartEndRadius,
  borderBottomStartRadius: he.borderEndStartRadius,
  borderBottomEndRadius: he.borderEndEndRadius,
  borderStartRadius: he.borderInlineStartRadius,
  borderEndRadius: he.borderInlineEndRadius,
  borderStartWidth: he.borderInlineStartWidth,
  borderEndWidth: he.borderInlineEndWidth,
  borderStartColor: he.borderInlineStartColor,
  borderEndColor: he.borderInlineEndColor,
  borderStartStyle: he.borderInlineStartStyle,
  borderEndStyle: he.borderInlineEndStyle
});
var AI = {
  color: O.colors("color"),
  textColor: O.colors("color"),
  fill: O.colors("fill"),
  stroke: O.colors("stroke")
}, gh = {
  boxShadow: O.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: O.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: O.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(gh, {
  shadow: gh.boxShadow
});
var DI = {
  filter: { transform: ue.filter },
  blur: O.blur("--chakra-blur"),
  brightness: O.propT("--chakra-brightness", ue.brightness),
  contrast: O.propT("--chakra-contrast", ue.contrast),
  hueRotate: O.propT("--chakra-hue-rotate", ue.hueRotate),
  invert: O.propT("--chakra-invert", ue.invert),
  saturate: O.propT("--chakra-saturate", ue.saturate),
  dropShadow: O.propT("--chakra-drop-shadow", ue.dropShadow),
  backdropFilter: { transform: ue.backdropFilter },
  backdropBlur: O.blur("--chakra-backdrop-blur"),
  backdropBrightness: O.propT(
    "--chakra-backdrop-brightness",
    ue.brightness
  ),
  backdropContrast: O.propT("--chakra-backdrop-contrast", ue.contrast),
  backdropHueRotate: O.propT(
    "--chakra-backdrop-hue-rotate",
    ue.hueRotate
  ),
  backdropInvert: O.propT("--chakra-backdrop-invert", ue.invert),
  backdropSaturate: O.propT("--chakra-backdrop-saturate", ue.saturate)
}, pc = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: ue.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: O.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: O.space("gap"),
  rowGap: O.space("rowGap"),
  columnGap: O.space("columnGap")
};
Object.assign(pc, {
  flexDir: pc.flexDirection
});
var Ww = {
  gridGap: O.space("gridGap"),
  gridColumnGap: O.space("gridColumnGap"),
  gridRowGap: O.space("gridRowGap"),
  gridColumn: !0,
  gridRow: !0,
  gridAutoFlow: !0,
  gridAutoColumns: !0,
  gridColumnStart: !0,
  gridColumnEnd: !0,
  gridRowStart: !0,
  gridRowEnd: !0,
  gridAutoRows: !0,
  gridTemplate: !0,
  gridTemplateColumns: !0,
  gridTemplateRows: !0,
  gridTemplateAreas: !0,
  gridArea: !0
}, FI = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: ue.outline },
  outlineOffset: !0,
  outlineColor: O.colors("outlineColor")
}, sn = {
  width: O.sizesT("width"),
  inlineSize: O.sizesT("inlineSize"),
  height: O.sizes("height"),
  blockSize: O.sizes("blockSize"),
  boxSize: O.sizes(["width", "height"]),
  minWidth: O.sizes("minWidth"),
  minInlineSize: O.sizes("minInlineSize"),
  minHeight: O.sizes("minHeight"),
  minBlockSize: O.sizes("minBlockSize"),
  maxWidth: O.sizes("maxWidth"),
  maxInlineSize: O.sizes("maxInlineSize"),
  maxHeight: O.sizes("maxHeight"),
  maxBlockSize: O.sizes("maxBlockSize"),
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  overscrollBehavior: !0,
  overscrollBehaviorX: !0,
  overscrollBehaviorY: !0,
  display: !0,
  aspectRatio: !0,
  hideFrom: {
    scale: "breakpoints",
    transform: (e, t) => {
      var n, r, o;
      return { [`@media screen and (min-width: ${(o = (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null ? void 0 : r.minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (e, t) => {
      var n, r, o;
      return { [`@media screen and (max-width: ${(o = (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null ? void 0 : r._minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: O.propT("float", ue.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(sn, {
  w: sn.width,
  h: sn.height,
  minW: sn.minWidth,
  maxW: sn.maxWidth,
  minH: sn.minHeight,
  maxH: sn.maxHeight,
  overscroll: sn.overscrollBehavior,
  overscrollX: sn.overscrollBehaviorX,
  overscrollY: sn.overscrollBehaviorY
});
var zI = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: O.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: O.prop("listStyleImage")
};
function LI(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1)
    e = e[o[r]];
  return e === void 0 ? n : e;
}
var VI = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (r, o, i, a) => {
    if (typeof r > "u")
      return e(r, o, i);
    t.has(r) || t.set(r, /* @__PURE__ */ new Map());
    const s = t.get(r);
    if (s.has(o))
      return s.get(o);
    const l = e(r, o, i, a);
    return s.set(o, l), l;
  };
}, NI = VI(LI), jI = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, BI = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Pf = (e, t, n) => {
  const r = {}, o = NI(e, t, {});
  for (const i in o)
    i in n && n[i] != null || (r[i] = o[i]);
  return r;
}, WI = {
  srOnly: {
    transform(e) {
      return e === !0 ? jI : e === "focusable" ? BI : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, n) => Pf(t, `layerStyles.${e}`, n)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, n) => Pf(t, `textStyles.${e}`, n)
  },
  apply: {
    processResult: !0,
    transform: (e, t, n) => Pf(t, e, n)
  }
}, rs = {
  position: !0,
  pos: O.prop("position"),
  zIndex: O.prop("zIndex", "zIndices"),
  inset: O.spaceT("inset"),
  insetX: O.spaceT(["left", "right"]),
  insetInline: O.spaceT("insetInline"),
  insetY: O.spaceT(["top", "bottom"]),
  insetBlock: O.spaceT("insetBlock"),
  top: O.spaceT("top"),
  insetBlockStart: O.spaceT("insetBlockStart"),
  bottom: O.spaceT("bottom"),
  insetBlockEnd: O.spaceT("insetBlockEnd"),
  left: O.spaceT("left"),
  insetInlineStart: O.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: O.spaceT("right"),
  insetInlineEnd: O.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(rs, {
  insetStart: rs.insetInlineStart,
  insetEnd: rs.insetInlineEnd
});
var HI = {
  ring: { transform: ue.ring },
  ringColor: O.colors("--chakra-ring-color"),
  ringOffset: O.prop("--chakra-ring-offset-width"),
  ringOffsetColor: O.colors("--chakra-ring-offset-color"),
  ringInset: O.prop("--chakra-ring-inset")
}, Oe = {
  margin: O.spaceT("margin"),
  marginTop: O.spaceT("marginTop"),
  marginBlockStart: O.spaceT("marginBlockStart"),
  marginRight: O.spaceT("marginRight"),
  marginInlineEnd: O.spaceT("marginInlineEnd"),
  marginBottom: O.spaceT("marginBottom"),
  marginBlockEnd: O.spaceT("marginBlockEnd"),
  marginLeft: O.spaceT("marginLeft"),
  marginInlineStart: O.spaceT("marginInlineStart"),
  marginX: O.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: O.spaceT("marginInline"),
  marginY: O.spaceT(["marginTop", "marginBottom"]),
  marginBlock: O.spaceT("marginBlock"),
  padding: O.space("padding"),
  paddingTop: O.space("paddingTop"),
  paddingBlockStart: O.space("paddingBlockStart"),
  paddingRight: O.space("paddingRight"),
  paddingBottom: O.space("paddingBottom"),
  paddingBlockEnd: O.space("paddingBlockEnd"),
  paddingLeft: O.space("paddingLeft"),
  paddingInlineStart: O.space("paddingInlineStart"),
  paddingInlineEnd: O.space("paddingInlineEnd"),
  paddingX: O.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: O.space("paddingInline"),
  paddingY: O.space(["paddingTop", "paddingBottom"]),
  paddingBlock: O.space("paddingBlock")
};
Object.assign(Oe, {
  m: Oe.margin,
  mt: Oe.marginTop,
  mr: Oe.marginRight,
  me: Oe.marginInlineEnd,
  marginEnd: Oe.marginInlineEnd,
  mb: Oe.marginBottom,
  ml: Oe.marginLeft,
  ms: Oe.marginInlineStart,
  marginStart: Oe.marginInlineStart,
  mx: Oe.marginX,
  my: Oe.marginY,
  p: Oe.padding,
  pt: Oe.paddingTop,
  py: Oe.paddingY,
  px: Oe.paddingX,
  pb: Oe.paddingBottom,
  pl: Oe.paddingLeft,
  ps: Oe.paddingInlineStart,
  paddingStart: Oe.paddingInlineStart,
  pr: Oe.paddingRight,
  pe: Oe.paddingInlineEnd,
  paddingEnd: Oe.paddingInlineEnd
});
var UI = {
  textDecorationColor: O.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: O.shadows("textShadow")
}, GI = {
  clipPath: !0,
  transform: O.propT("transform", ue.transform),
  transformOrigin: !0,
  translateX: O.spaceT("--chakra-translate-x"),
  translateY: O.spaceT("--chakra-translate-y"),
  skewX: O.degreeT("--chakra-skew-x"),
  skewY: O.degreeT("--chakra-skew-y"),
  scaleX: O.prop("--chakra-scale-x"),
  scaleY: O.prop("--chakra-scale-y"),
  scale: O.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: O.degreeT("--chakra-rotate")
}, YI = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: O.prop("transitionDuration", "transition.duration"),
  transitionProperty: O.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: O.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, KI = {
  fontFamily: O.prop("fontFamily", "fonts"),
  fontSize: O.prop("fontSize", "fontSizes", ue.px),
  fontWeight: O.prop("fontWeight", "fontWeights"),
  lineHeight: O.prop("lineHeight", "lineHeights"),
  letterSpacing: O.prop("letterSpacing", "letterSpacings"),
  textAlign: !0,
  fontStyle: !0,
  textIndent: !0,
  wordBreak: !0,
  overflowWrap: !0,
  textOverflow: !0,
  textTransform: !0,
  whiteSpace: !0,
  isTruncated: {
    transform(e) {
      if (e === !0)
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
    }
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      //@ts-ignore
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
}, qI = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: O.spaceT("scrollMargin"),
  scrollMarginTop: O.spaceT("scrollMarginTop"),
  scrollMarginBottom: O.spaceT("scrollMarginBottom"),
  scrollMarginLeft: O.spaceT("scrollMarginLeft"),
  scrollMarginRight: O.spaceT("scrollMarginRight"),
  scrollMarginX: O.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: O.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: O.spaceT("scrollPadding"),
  scrollPaddingTop: O.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: O.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: O.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: O.spaceT("scrollPaddingRight"),
  scrollPaddingX: O.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: O.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function Hw(e) {
  return At(e) && e.reference ? e.reference : String(e);
}
var Sd = (e, ...t) => t.map(Hw).join(` ${e} `).replace(/calc/g, ""), ay = (...e) => `calc(${Sd("+", ...e)})`, sy = (...e) => `calc(${Sd("-", ...e)})`, yh = (...e) => `calc(${Sd("*", ...e)})`, ly = (...e) => `calc(${Sd("/", ...e)})`, uy = (e) => {
  const t = Hw(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : yh(t, -1);
}, wo = Object.assign(
  (e) => ({
    add: (...t) => wo(ay(e, ...t)),
    subtract: (...t) => wo(sy(e, ...t)),
    multiply: (...t) => wo(yh(e, ...t)),
    divide: (...t) => wo(ly(e, ...t)),
    negate: () => wo(uy(e)),
    toString: () => e.toString()
  }),
  {
    add: ay,
    subtract: sy,
    multiply: yh,
    divide: ly,
    negate: uy
  }
);
function XI(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function QI(e) {
  const t = XI(e.toString());
  return JI(ZI(t));
}
function ZI(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function JI(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function e$(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function t$(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function n$(e, t = "") {
  return QI(`--${e$(e, t)}`);
}
function Q(e, t, n) {
  const r = n$(e, n);
  return {
    variable: r,
    reference: t$(r, t)
  };
}
function r$(e, t) {
  const n = {};
  for (const r of t) {
    if (Array.isArray(r)) {
      const [o, i] = r;
      n[o] = Q(`${e}-${o}`, i);
      continue;
    }
    n[r] = Q(`${e}-${r}`);
  }
  return n;
}
function o$(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function i$(e) {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function bh(e) {
  if (e == null)
    return e;
  const { unitless: t } = i$(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var Uw = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, pv = (e) => Object.fromEntries(Object.entries(e).sort(Uw));
function cy(e) {
  const t = pv(e);
  return Object.assign(Object.values(t), t);
}
function a$(e) {
  const t = Object.keys(pv(e));
  return new Set(t);
}
function dy(e) {
  var t;
  if (!e)
    return e;
  e = (t = bh(e)) != null ? t : e;
  const n = -0.02;
  return typeof e == "number" ? `${e + n}` : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + n}`);
}
function ja(e, t) {
  const n = ["@media screen"];
  return e && n.push("and", `(min-width: ${bh(e)})`), t && n.push("and", `(max-width: ${bh(t)})`), n.join(" ");
}
function s$(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const n = cy(e), r = Object.entries(e).sort(Uw).map(([a, s], l, u) => {
    var c;
    let [, d] = (c = u[l + 1]) != null ? c : [];
    return d = parseFloat(d) > 0 ? dy(d) : void 0, {
      _minW: dy(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: ja(null, d),
      minWQuery: ja(s),
      minMaxQuery: ja(s, d)
    };
  }), o = a$(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: n,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: pv(e),
    asArray: cy(e),
    details: r,
    get(a) {
      return r.find((s) => s.breakpoint === a);
    },
    media: [
      null,
      ...n.map((a) => ja(a)).slice(1)
    ],
    /**
     * Converts the object responsive syntax to array syntax
     *
     * @example
     * toArrayValue({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
     */
    toArrayValue(a) {
      if (!At(a))
        throw new Error("toArrayValue: value must be an object");
      const s = i.map((l) => {
        var u;
        return (u = a[l]) != null ? u : null;
      });
      for (; o$(s) === null; )
        s.pop();
      return s;
    },
    /**
     * Converts the array responsive syntax to object syntax
     *
     * @example
     * toObjectValue([1, 2, 3]) // => { base: 1, sm: 2, md: 3 }
     */
    toObjectValue(a) {
      if (!Array.isArray(a))
        throw new Error("toObjectValue: value must be an array");
      return a.reduce((s, l, u) => {
        const c = i[u];
        return c != null && l != null && (s[c] = l), s;
      }, {});
    }
  };
}
var it = {
  hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
  focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
  focusVisible: (e, t) => `${e}:focus-visible ${t}`,
  focusWithin: (e, t) => `${e}:focus-within ${t}`,
  active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
  disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
  invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
  checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
  indeterminate: (e, t) => `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
  readOnly: (e, t) => `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
  expanded: (e, t) => `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
  placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`
}, Or = (e) => Gw((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), tr = (e) => Gw((t) => e(t, "~ &"), "[data-peer]", ".peer"), Gw = (e, ...t) => t.map(e).join(", "), xd = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: "&:hover, &[data-hover]",
  /**
   * Styles for CSS Selector `&:active`
   */
  _active: "&:active, &[data-active]",
  /**
   * Styles for CSS selector `&:focus`
   *
   */
  _focus: "&:focus, &[data-focus]",
  /**
   * Styles for the highlighted state.
   */
  _highlighted: "&[data-highlighted]",
  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin: "&:focus-within",
  /**
   * Styles to apply when this element has received focus via tabbing
   * - CSS Selector `&:focus-visible`
   */
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   * - `&[disabled]`
   */
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  /**
   * Styles for CSS selector `&::before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _before={{content:`""` }}/>
   * ```
   */
  _before: "&::before",
  /**
   * Styles for CSS selector `&::after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _after={{content:`""` }}/>
   * ```
   */
  _after: "&::after",
  /**
   * Styles for CSS selector `&:empty`
   */
  _empty: "&:empty",
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked: "&[aria-checked=true], &[data-checked]",
  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  _valid: "&[data-valid], &[data-state=valid]",
  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  _loading: "&[data-loading], &[aria-busy=true]",
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  _selected: "&[aria-selected=true], &[data-selected]",
  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  _hidden: "&[hidden], &[data-hidden]",
  /**
   * Styles for CSS Selector `&:-webkit-autofill`
   */
  _autofill: "&:-webkit-autofill",
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even: "&:nth-of-type(even)",
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd: "&:nth-of-type(odd)",
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first: "&:first-of-type",
  /**
   * Styles for CSS selector `&::first-letter`
   *
   * NOTE: This selector is only applied for block-level elements and not preceded by an image or table.
   * @example
   * ```jsx
   * <Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>
   * ```
   */
  _firstLetter: "&::first-letter",
  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last: "&:last-of-type",
  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst: "&:not(:first-of-type)",
  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast: "&:not(:last-of-type)",
  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited: "&:visited",
  /**
   * Used to style the active link in a navigation
   * Styles for CSS Selector `&[aria-current=page]`
   */
  _activeLink: "&[aria-current=page]",
  /**
   * Used to style the current step within a process
   * Styles for CSS Selector `&[aria-current=step]`
   */
  _activeStep: "&[aria-current=step]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered
   */
  _groupHover: Or(it.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: tr(it.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: Or(it.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: tr(it.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: Or(it.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: tr(it.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: Or(it.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: tr(it.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: Or(it.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: tr(it.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: Or(it.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: tr(it.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: Or(it.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: tr(it.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: Or(it.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: tr(it.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: tr(it.placeholderShown),
  /**
   * Styles for CSS Selector `&::placeholder`.
   */
  _placeholder: "&::placeholder",
  /**
   * Styles for CSS Selector `&:placeholder-shown`.
   */
  _placeholderShown: "&:placeholder-shown",
  /**
   * Styles for CSS Selector `&:fullscreen`.
   */
  _fullScreen: "&:fullscreen",
  /**
   * Styles for CSS Selector `&::selection`
   */
  _selection: "&::selection",
  /**
   * Styles for CSS Selector `[dir=rtl] &`
   * It is applied when a parent element or this element has `dir="rtl"`
   */
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  /**
   * Styles for CSS Selector `[dir=ltr] &`
   * It is applied when a parent element or this element has `dir="ltr"`
   */
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  /**
   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
   * It is used when the user has requested the system use a light or dark color theme.
   */
  _mediaDark: "@media (prefers-color-scheme: dark)",
  /**
   * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
   * It is used when the user has requested the system to reduce the amount of animations.
   */
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  /**
   * Styles for the CSS Selector `&[data-orientation=horizontal]`
   */
  _horizontal: "&[data-orientation=horizontal]",
  /**
   * Styles for the CSS Selector `&[data-orientation=vertical]`
   */
  _vertical: "&[data-orientation=vertical]"
}, Yw = Object.keys(
  xd
);
function fy(e, t) {
  return Q(String(e).replace(/\./g, "-"), void 0, t);
}
function l$(e, t) {
  let n = {};
  const r = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: u } = fy(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...v] = f, g = `${p}.-${v.join(".")}`, S = wo.negate(s), m = wo.negate(u);
        r[g] = {
          value: S,
          var: l,
          varRef: m
        };
      }
      n[l] = s, r[o] = {
        value: s,
        var: l,
        varRef: u
      };
      continue;
    }
    const c = (f) => {
      const v = [String(o).split(".")[0], f].join(".");
      if (!e[v])
        return f;
      const { reference: S } = fy(v, t == null ? void 0 : t.cssVarPrefix);
      return S;
    }, d = At(s) ? s : { default: s };
    n = dn(
      n,
      Object.entries(d).reduce(
        (f, [p, v]) => {
          var g, S;
          if (!v)
            return f;
          const m = c(`${v}`);
          if (p === "default")
            return f[l] = m, f;
          const h = (S = (g = xd) == null ? void 0 : g[p]) != null ? S : p;
          return f[h] = { [l]: m }, f;
        },
        {}
      )
    ), r[o] = {
      value: u,
      var: l,
      varRef: u
    };
  }
  return {
    cssVars: n,
    cssMap: r
  };
}
function u$(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t)
    r in n && delete n[r];
  return n;
}
function c$(e, t) {
  const n = {};
  for (const r of t)
    r in e && (n[r] = e[r]);
  return n;
}
function d$(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function py(e, t, n = {}) {
  const { stop: r, getKey: o } = n;
  function i(a, s = []) {
    var l;
    if (d$(a) || Array.isArray(a)) {
      const u = {};
      for (const [c, d] of Object.entries(a)) {
        const f = (l = o == null ? void 0 : o(c)) != null ? l : c, p = [...s, f];
        if (r != null && r(a, p))
          return t(a, s);
        u[f] = i(d, p);
      }
      return u;
    }
    return t(a, s);
  }
  return i(e);
}
var f$ = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
  "breakpoints"
];
function p$(e) {
  return c$(e, f$);
}
function h$(e) {
  return e.semanticTokens;
}
function m$(e) {
  const { __cssMap: t, __cssVars: n, __breakpoints: r, ...o } = e;
  return o;
}
var v$ = (e) => Yw.includes(e) || e === "default";
function g$({
  tokens: e,
  semanticTokens: t
}) {
  const n = {};
  return py(e, (r, o) => {
    r != null && (n[o.join(".")] = { isSemantic: !1, value: r });
  }), py(
    t,
    (r, o) => {
      r != null && (n[o.join(".")] = { isSemantic: !0, value: r });
    },
    {
      stop: (r) => Object.keys(r).every(v$)
    }
  ), n;
}
function y$(e) {
  var t;
  const n = m$(e), r = p$(n), o = h$(n), i = g$({ tokens: r, semanticTokens: o }), a = (t = n.config) == null ? void 0 : t.cssVarPrefix, {
    /**
     * This is more like a dictionary of tokens users will type `green.500`,
     * and their equivalent css variable.
     */
    cssMap: s,
    /**
     * The extracted css variables will be stored here, and used in
     * the emotion's <Global/> component to attach variables to `:root`
     */
    cssVars: l
  } = l$(i, { cssVarPrefix: a });
  return Object.assign(n, {
    __cssVars: { ...{
      "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-ring-offset-width": "0px",
      "--chakra-ring-offset-color": "#fff",
      "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
      "--chakra-ring-offset-shadow": "0 0 #0000",
      "--chakra-ring-shadow": "0 0 #0000",
      "--chakra-space-x-reverse": "0",
      "--chakra-space-y-reverse": "0"
    }, ...l },
    __cssMap: s,
    __breakpoints: s$(n.breakpoints)
  }), n;
}
var hv = dn(
  {},
  Pu,
  he,
  AI,
  pc,
  sn,
  DI,
  HI,
  FI,
  Ww,
  WI,
  rs,
  gh,
  Oe,
  qI,
  KI,
  UI,
  GI,
  zI,
  YI
);
Object.assign({}, Oe, sn, pc, Ww, rs);
var b$ = [...Object.keys(hv), ...Yw], S$ = { ...hv, ...xd }, x$ = (e) => e in S$, w$ = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: n, toArrayValue: r, media: o } = t.__breakpoints, i = {};
  for (const a in e) {
    let s = Hn(e[a], t);
    if (s == null)
      continue;
    if (s = At(s) && n(s) ? r(s) : s, !Array.isArray(s)) {
      i[a] = s;
      continue;
    }
    const l = s.slice(0, o.length).length;
    for (let u = 0; u < l; u += 1) {
      const c = o == null ? void 0 : o[u];
      if (!c) {
        i[a] = s[u];
        continue;
      }
      i[c] = i[c] || {}, s[u] != null && (i[c][a] = s[u]);
    }
  }
  return i;
};
function C$(e) {
  const t = [];
  let n = "", r = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (r = !0, n += i) : i === ")" ? (r = !1, n += i) : i === "," && !r ? (t.push(n), n = "") : n += i;
  }
  return n = n.trim(), n && t.push(n), t;
}
function k$(e) {
  return /^var\(--.+\)$/.test(e);
}
var P$ = (e, t) => e.startsWith("--") && typeof t == "string" && !k$(t), T$ = (e, t) => {
  var n, r;
  if (t == null)
    return t;
  const o = (l) => {
    var u, c;
    return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef;
  }, i = (l) => {
    var u;
    return (u = o(l)) != null ? u : l;
  }, [a, s] = C$(t);
  return t = (r = (n = o(a)) != null ? n : i(s)) != null ? r : i(t), t;
};
function E$(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e, o = (i, a = !1) => {
    var s, l, u;
    const c = Hn(i, r), d = w$(c)(r);
    let f = {};
    for (let p in d) {
      const v = d[p];
      let g = Hn(v, r);
      p in n && (p = n[p]), P$(p, g) && (g = T$(r, g));
      let S = t[p];
      if (S === !0 && (S = { property: p }), At(g)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = dn(
          {},
          f[p],
          o(g, !0)
        );
        continue;
      }
      let m = (u = (l = S == null ? void 0 : S.transform) == null ? void 0 : l.call(S, g, r, c)) != null ? u : g;
      m = S != null && S.processResult ? o(m, !0) : m;
      const h = Hn(S == null ? void 0 : S.property, r);
      if (!a && (S != null && S.static)) {
        const b = Hn(S.static, r);
        f = dn({}, f, b);
      }
      if (h && Array.isArray(h)) {
        for (const b of h)
          f[b] = m;
        continue;
      }
      if (h) {
        h === "&" && At(m) ? f = dn({}, f, m) : f[h] = m;
        continue;
      }
      if (At(m)) {
        f = dn({}, f, m);
        continue;
      }
      f[p] = m;
    }
    return f;
  };
  return o;
}
var Kw = (e) => (t) => E$({
  theme: t,
  pseudos: xd,
  configs: hv
})(e);
function Te(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function _$(e, t) {
  if (Array.isArray(e))
    return e;
  if (At(e))
    return t(e);
  if (e != null)
    return [e];
}
function O$(e, t) {
  for (let n = t + 1; n < e.length; n++)
    if (e[n] != null)
      return n;
  return -1;
}
function M$(e) {
  const t = e.__breakpoints;
  return function(r, o, i, a) {
    var s, l;
    if (!t)
      return;
    const u = {}, c = _$(i, t.toArrayValue);
    if (!c)
      return u;
    const d = c.length, f = d === 1, p = !!r.parts;
    for (let v = 0; v < d; v++) {
      const g = t.details[v], S = t.details[O$(c, v)], m = ja(g.minW, S == null ? void 0 : S._minW), h = Hn((s = r[o]) == null ? void 0 : s[c[v]], a);
      if (h) {
        if (p) {
          (l = r.parts) == null || l.forEach((b) => {
            dn(u, {
              [b]: f ? h[b] : { [m]: h[b] }
            });
          });
          continue;
        }
        if (!p) {
          f ? dn(u, h) : u[m] = h;
          continue;
        }
        u[m] = h;
      }
    }
    return u;
  };
}
function I$(e) {
  return (t) => {
    var n;
    const { variant: r, size: o, theme: i } = t, a = M$(i);
    return dn(
      {},
      Hn((n = e.baseStyle) != null ? n : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", r, t)
    );
  };
}
function Zn(e) {
  return u$(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var $$ = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices"
];
function R$(e) {
  return At(e) ? $$.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var A$ = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, D$ = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, F$ = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, z$ = {
  property: A$,
  easing: D$,
  duration: F$
}, L$ = z$, V$ = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
}, N$ = V$, j$ = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, B$ = j$, W$ = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, H$ = W$, U$ = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
}, G$ = U$, Y$ = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, K$ = Y$, q$ = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
}, X$ = q$, Q$ = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, Z$ = Q$, J$ = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
}, qw = J$, Xw = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
}, eR = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
}, tR = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, nR = {
  ...Xw,
  ...eR,
  container: tR
}, Qw = nR, rR = {
  breakpoints: H$,
  zIndices: N$,
  radii: K$,
  blur: Z$,
  colors: G$,
  ...qw,
  sizes: Qw,
  shadows: X$,
  space: Xw,
  borders: B$,
  transition: L$
}, { defineMultiStyleConfig: oR, definePartsStyle: Ba } = Te([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), or = Q("stepper-indicator-size"), yi = Q("stepper-icon-size"), bi = Q("stepper-title-font-size"), Wa = Q("stepper-description-font-size"), Oa = Q("stepper-accent-color"), iR = Ba(({ colorScheme: e }) => ({
  stepper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "4",
    "&[data-orientation=vertical]": {
      flexDirection: "column",
      alignItems: "flex-start"
    },
    "&[data-orientation=horizontal]": {
      flexDirection: "row",
      alignItems: "center"
    },
    [Oa.variable]: `colors.${e}.500`,
    _dark: {
      [Oa.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: bi.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: Wa.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: bi.reference
  },
  step: {
    flexShrink: 0,
    position: "relative",
    display: "flex",
    gap: "2",
    "&[data-orientation=horizontal]": {
      alignItems: "center"
    },
    flex: "1",
    "&:last-of-type:not([data-stretch])": {
      flex: "initial"
    }
  },
  icon: {
    flexShrink: 0,
    width: yi.reference,
    height: yi.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: or.reference,
    height: or.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: Oa.reference
    },
    "&[data-status=complete]": {
      bg: Oa.reference,
      color: "chakra-inverse-text"
    },
    "&[data-status=incomplete]": {
      borderWidth: "2px"
    }
  },
  separator: {
    bg: "chakra-border-color",
    flex: "1",
    "&[data-status=complete]": {
      bg: Oa.reference
    },
    "&[data-orientation=horizontal]": {
      width: "100%",
      height: "2px",
      marginStart: "2"
    },
    "&[data-orientation=vertical]": {
      width: "2px",
      position: "absolute",
      height: "100%",
      maxHeight: `calc(100% - ${or.reference} - 8px)`,
      top: `calc(${or.reference} + 4px)`,
      insetStart: `calc(${or.reference} / 2 - 1px)`
    }
  }
})), aR = oR({
  baseStyle: iR,
  sizes: {
    xs: Ba({
      stepper: {
        [or.variable]: "sizes.4",
        [yi.variable]: "sizes.3",
        [bi.variable]: "fontSizes.xs",
        [Wa.variable]: "fontSizes.xs"
      }
    }),
    sm: Ba({
      stepper: {
        [or.variable]: "sizes.6",
        [yi.variable]: "sizes.4",
        [bi.variable]: "fontSizes.sm",
        [Wa.variable]: "fontSizes.xs"
      }
    }),
    md: Ba({
      stepper: {
        [or.variable]: "sizes.8",
        [yi.variable]: "sizes.5",
        [bi.variable]: "fontSizes.md",
        [Wa.variable]: "fontSizes.sm"
      }
    }),
    lg: Ba({
      stepper: {
        [or.variable]: "sizes.10",
        [yi.variable]: "sizes.6",
        [bi.variable]: "fontSizes.lg",
        [Wa.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function ye(e, t = {}) {
  let n = !1;
  function r() {
    if (!n) {
      n = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function o(...c) {
    r();
    for (const d of c)
      t[d] = l(d);
    return ye(e, t);
  }
  function i(...c) {
    for (const d of c)
      d in t || (t[d] = l(d));
    return ye(e, t);
  }
  function a() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.selector])
    );
  }
  function s() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.className])
    );
  }
  function l(c) {
    const p = `chakra-${(["container", "root"].includes(c ?? "") ? [e] : [e, c]).filter(Boolean).join("__")}`;
    return {
      className: p,
      selector: `.${p}`,
      toString: () => c
    };
  }
  return {
    parts: o,
    toPart: l,
    extend: i,
    selectors: a,
    classnames: s,
    get keys() {
      return Object.keys(t);
    },
    __type: {}
  };
}
var sR = ye("accordion").parts("root", "container", "button", "panel").extend("icon"), lR = ye("alert").parts("title", "description", "container").extend("icon", "spinner"), uR = ye("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), cR = ye("breadcrumb").parts("link", "item", "container").extend("separator");
ye("button").parts();
var dR = ye("checkbox").parts("control", "icon", "container").extend("label");
ye("progress").parts("track", "filledTrack").extend("label");
var fR = ye("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), pR = ye("editable").parts(
  "preview",
  "input",
  "textarea"
), hR = ye("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), mR = ye("formError").parts("text", "icon"), vR = ye("input").parts(
  "addon",
  "field",
  "element",
  "group"
), gR = ye("list").parts("container", "item", "icon"), yR = ye("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), bR = ye("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), SR = ye("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
ye("pininput").parts("field");
var xR = ye("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), wR = ye("progress").parts(
  "label",
  "filledTrack",
  "track"
), CR = ye("radio").parts(
  "container",
  "control",
  "label"
), kR = ye("select").parts("field", "icon"), PR = ye("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), TR = ye("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), ER = ye("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), _R = ye("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), OR = ye("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), MR = ye("tag").parts(
  "container",
  "label",
  "closeButton"
), IR = ye("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
ye("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
function Eo(e, t, n) {
  return Math.min(Math.max(e, n), t);
}
class $R extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Ha = $R;
function mv(e) {
  if (typeof e != "string")
    throw new Ha(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = NR.test(e) ? DR(e) : e;
  const n = FR.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(zs(s, 2), 16)), parseInt(zs(a[3] || "f", 2), 16) / 255];
  }
  const r = zR.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255];
  }
  const o = LR.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || "1")];
  }
  const i = VR.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (Eo(0, 100, s) !== s)
      throw new Ha(e);
    if (Eo(0, 100, l) !== l)
      throw new Ha(e);
    return [...jR(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new Ha(e);
}
function RR(e) {
  let t = 5381, n = e.length;
  for (; n; )
    t = t * 33 ^ e.charCodeAt(--n);
  return (t >>> 0) % 2341;
}
const hy = (e) => parseInt(e.replace(/_/g, ""), 36), AR = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const n = hy(t.substring(0, 3)), r = hy(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - r.length; i++)
    o += "0";
  return e[n] = `${o}${r}`, e;
}, {});
function DR(e) {
  const t = e.toLowerCase().trim(), n = AR[RR(t)];
  if (!n)
    throw new Ha(e);
  return `#${n}`;
}
const zs = (e, t) => Array.from(Array(t)).map(() => e).join(""), FR = new RegExp(`^#${zs("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), zR = new RegExp(`^#${zs("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), LR = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${zs(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), VR = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, NR = /^[a-z]+$/i, my = (e) => Math.round(e * 255), jR = (e, t, n) => {
  let r = n / 100;
  if (t === 0)
    return [r, r, r].map(my);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * r - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
  const c = r - i / 2, d = s + c, f = l + c, p = u + c;
  return [d, f, p].map(my);
};
function BR(e, t, n, r) {
  return `rgba(${Eo(0, 255, e).toFixed()}, ${Eo(0, 255, t).toFixed()}, ${Eo(0, 255, n).toFixed()}, ${parseFloat(Eo(0, 1, r).toFixed(3))})`;
}
function WR(e, t) {
  const [n, r, o, i] = mv(e);
  return BR(n, r, o, i - t);
}
function HR(e) {
  const [t, n, r, o] = mv(e);
  let i = (a) => {
    const s = Eo(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(n)}${i(r)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function UR(e, t, n, r, o) {
  for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++)
    e = e ? e[t[r]] : o;
  return e === o ? n : e;
}
var GR = (e) => Object.keys(e).length === 0, Ct = (e, t, n) => {
  const r = UR(e, `colors.${t}`, t);
  try {
    return HR(r), r;
  } catch {
    return n ?? "#000000";
  }
}, YR = (e) => {
  const [t, n, r] = mv(e);
  return (t * 299 + n * 587 + r * 114) / 1e3;
}, KR = (e) => (t) => {
  const n = Ct(t, e);
  return YR(n) < 128 ? "dark" : "light";
}, qR = (e) => (t) => KR(e)(t) === "dark", ta = (e, t) => (n) => {
  const r = Ct(n, e);
  return WR(r, 1 - t);
};
function vy(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`
  };
}
var XR = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function QR(e) {
  const t = XR();
  return !e || GR(e) ? t : e.string && e.colors ? JR(e.string, e.colors) : e.string && !e.colors ? ZR(e.string) : e.colors && !e.string ? eA(e.colors) : t;
}
function ZR(e) {
  let t = 0;
  if (e.length === 0)
    return t.toString();
  for (let r = 0; r < e.length; r += 1)
    t = e.charCodeAt(r) + ((t << 5) - t), t = t & t;
  let n = "#";
  for (let r = 0; r < 3; r += 1) {
    const o = t >> r * 8 & 255;
    n += `00${o.toString(16)}`.substr(-2);
  }
  return n;
}
function JR(e, t) {
  let n = 0;
  if (e.length === 0)
    return t[0];
  for (let r = 0; r < e.length; r += 1)
    n = e.charCodeAt(r) + ((n << 5) - n), n = n & n;
  return n = (n % t.length + t.length) % t.length, t[n];
}
function eA(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function q(e, t) {
  return (n) => n.colorMode === "dark" ? t : e;
}
function vv(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t ? t === "vertical" ? n : r : {};
}
function Zw(e) {
  return At(e) && e.reference ? e.reference : String(e);
}
var wd = (e, ...t) => t.map(Zw).join(` ${e} `).replace(/calc/g, ""), gy = (...e) => `calc(${wd("+", ...e)})`, yy = (...e) => `calc(${wd("-", ...e)})`, Sh = (...e) => `calc(${wd("*", ...e)})`, by = (...e) => `calc(${wd("/", ...e)})`, Sy = (e) => {
  const t = Zw(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Sh(t, -1);
}, ir = Object.assign(
  (e) => ({
    add: (...t) => ir(gy(e, ...t)),
    subtract: (...t) => ir(yy(e, ...t)),
    multiply: (...t) => ir(Sh(e, ...t)),
    divide: (...t) => ir(by(e, ...t)),
    negate: () => ir(Sy(e)),
    toString: () => e.toString()
  }),
  {
    add: gy,
    subtract: yy,
    multiply: Sh,
    divide: by,
    negate: Sy
  }
);
function tA(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function nA(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function Jw(e) {
  const t = nA(e.toString());
  return t.includes("\\.") ? e : tA(e) ? t.replace(".", "\\.") : e;
}
function rA(e, t = "") {
  return [t, Jw(e)].filter(Boolean).join("-");
}
function oA(e, t) {
  return `var(${Jw(e)}${t ? `, ${t}` : ""})`;
}
function iA(e, t = "") {
  return `--${rA(e, t)}`;
}
function et(e, t) {
  const n = iA(e, t == null ? void 0 : t.prefix);
  return {
    variable: n,
    reference: oA(n, aA(t == null ? void 0 : t.fallback))
  };
}
function aA(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: sA, definePartsStyle: Tu } = Te(ER.keys), os = et("switch-track-width"), Io = et("switch-track-height"), Tf = et("switch-track-diff"), lA = ir.subtract(os, Io), xh = et("switch-thumb-x"), Ma = et("switch-bg"), uA = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [os.reference],
    height: [Io.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [Ma.variable]: "colors.gray.300",
    _dark: {
      [Ma.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [Ma.variable]: `colors.${t}.500`,
      _dark: {
        [Ma.variable]: `colors.${t}.200`
      }
    },
    bg: Ma.reference
  };
}, cA = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [Io.reference],
  height: [Io.reference],
  _checked: {
    transform: `translateX(${xh.reference})`
  }
}, dA = Tu((e) => ({
  container: {
    [Tf.variable]: lA,
    [xh.variable]: Tf.reference,
    _rtl: {
      [xh.variable]: ir(Tf).negate().toString()
    }
  },
  track: uA(e),
  thumb: cA
})), fA = {
  sm: Tu({
    container: {
      [os.variable]: "1.375rem",
      [Io.variable]: "sizes.3"
    }
  }),
  md: Tu({
    container: {
      [os.variable]: "1.875rem",
      [Io.variable]: "sizes.4"
    }
  }),
  lg: Tu({
    container: {
      [os.variable]: "2.875rem",
      [Io.variable]: "sizes.6"
    }
  })
}, pA = sA({
  baseStyle: dA,
  sizes: fA,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: hA, definePartsStyle: Li } = Te(_R.keys), mA = Li({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
}), hc = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, vA = Li((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: q("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: q(`${t}.100`, `${t}.700`)(e),
      ...hc
    },
    td: {
      borderBottom: "1px",
      borderColor: q(`${t}.100`, `${t}.700`)(e),
      ...hc
    },
    caption: {
      color: q("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), gA = Li((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: q("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: q(`${t}.100`, `${t}.700`)(e),
      ...hc
    },
    td: {
      borderBottom: "1px",
      borderColor: q(`${t}.100`, `${t}.700`)(e),
      ...hc
    },
    caption: {
      color: q("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: q(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: q(`${t}.100`, `${t}.700`)(e)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), yA = {
  simple: vA,
  striped: gA,
  unstyled: {}
}, bA = {
  sm: Li({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: Li({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: Li({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
}, SA = hA({
  baseStyle: mA,
  variants: yA,
  sizes: bA,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Ot = Q("tabs-color"), Pn = Q("tabs-bg"), Hl = Q("tabs-border-color"), { defineMultiStyleConfig: xA, definePartsStyle: Kn } = Te(OR.keys), wA = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, CA = (e) => {
  const { isFitted: t } = e;
  return {
    flex: t ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
}, kA = (e) => {
  const { align: t = "start", orientation: n } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: n === "vertical" ? "column" : "row"
  };
}, PA = {
  p: 4
}, TA = Kn((e) => ({
  root: wA(e),
  tab: CA(e),
  tablist: kA(e),
  tabpanel: PA
})), EA = {
  sm: Kn({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: Kn({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: Kn({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, _A = Kn((e) => {
  const { colorScheme: t, orientation: n } = e, r = n === "vertical", o = r ? "borderStart" : "borderBottom", i = r ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [o]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [o]: "2px solid",
      borderColor: "transparent",
      [i]: "-2px",
      _selected: {
        [Ot.variable]: `colors.${t}.600`,
        _dark: {
          [Ot.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [Pn.variable]: "colors.gray.200",
        _dark: {
          [Pn.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: Ot.reference,
      bg: Pn.reference
    }
  };
}), OA = Kn((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [Hl.variable]: "transparent",
      _selected: {
        [Ot.variable]: `colors.${t}.600`,
        [Hl.variable]: "colors.white",
        _dark: {
          [Ot.variable]: `colors.${t}.300`,
          [Hl.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: Hl.reference
      },
      color: Ot.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), MA = Kn((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [Pn.variable]: "colors.gray.50",
      _dark: {
        [Pn.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [Pn.variable]: "colors.white",
        [Ot.variable]: `colors.${t}.600`,
        _dark: {
          [Pn.variable]: "colors.gray.800",
          [Ot.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: Ot.reference,
      bg: Pn.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), IA = Kn((e) => {
  const { colorScheme: t, theme: n } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: Ct(n, `${t}.700`),
        bg: Ct(n, `${t}.100`)
      }
    }
  };
}), $A = Kn((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [Ot.variable]: "colors.gray.600",
      _dark: {
        [Ot.variable]: "inherit"
      },
      _selected: {
        [Ot.variable]: "colors.white",
        [Pn.variable]: `colors.${t}.600`,
        _dark: {
          [Ot.variable]: "colors.gray.800",
          [Pn.variable]: `colors.${t}.300`
        }
      },
      color: Ot.reference,
      bg: Pn.reference
    }
  };
}), RA = Kn({}), AA = {
  line: _A,
  enclosed: OA,
  "enclosed-colored": MA,
  "soft-rounded": IA,
  "solid-rounded": $A,
  unstyled: RA
}, DA = xA({
  baseStyle: TA,
  sizes: EA,
  variants: AA,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), Ge = r$("badge", ["bg", "color", "shadow"]), FA = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: Ge.bg.reference,
  color: Ge.color.reference,
  boxShadow: Ge.shadow.reference
}, zA = (e) => {
  const { colorScheme: t, theme: n } = e, r = ta(`${t}.500`, 0.6)(n);
  return {
    [Ge.bg.variable]: `colors.${t}.500`,
    [Ge.color.variable]: "colors.white",
    _dark: {
      [Ge.bg.variable]: r,
      [Ge.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, LA = (e) => {
  const { colorScheme: t, theme: n } = e, r = ta(`${t}.200`, 0.16)(n);
  return {
    [Ge.bg.variable]: `colors.${t}.100`,
    [Ge.color.variable]: `colors.${t}.800`,
    _dark: {
      [Ge.bg.variable]: r,
      [Ge.color.variable]: `colors.${t}.200`
    }
  };
}, VA = (e) => {
  const { colorScheme: t, theme: n } = e, r = ta(`${t}.200`, 0.8)(n);
  return {
    [Ge.color.variable]: `colors.${t}.500`,
    _dark: {
      [Ge.color.variable]: r
    },
    [Ge.shadow.variable]: `inset 0 0 0px 1px ${Ge.color.reference}`
  };
}, NA = {
  solid: zA,
  subtle: LA,
  outline: VA
}, is = {
  baseStyle: FA,
  variants: NA,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: jA, definePartsStyle: $o } = Te(MR.keys), xy = Q("tag-bg"), wy = Q("tag-color"), Ef = Q("tag-shadow"), Eu = Q("tag-min-height"), _u = Q("tag-min-width"), Ou = Q("tag-font-size"), Mu = Q("tag-padding-inline"), BA = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [wy.variable]: Ge.color.reference,
  [xy.variable]: Ge.bg.reference,
  [Ef.variable]: Ge.shadow.reference,
  color: wy.reference,
  bg: xy.reference,
  boxShadow: Ef.reference,
  borderRadius: "md",
  minH: Eu.reference,
  minW: _u.reference,
  fontSize: Ou.reference,
  px: Mu.reference,
  _focusVisible: {
    [Ef.variable]: "shadows.outline"
  }
}, WA = {
  lineHeight: 1.2,
  overflow: "visible"
}, HA = {
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
}, UA = $o({
  container: BA,
  label: WA,
  closeButton: HA
}), GA = {
  sm: $o({
    container: {
      [Eu.variable]: "sizes.5",
      [_u.variable]: "sizes.5",
      [Ou.variable]: "fontSizes.xs",
      [Mu.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: $o({
    container: {
      [Eu.variable]: "sizes.6",
      [_u.variable]: "sizes.6",
      [Ou.variable]: "fontSizes.sm",
      [Mu.variable]: "space.2"
    }
  }),
  lg: $o({
    container: {
      [Eu.variable]: "sizes.8",
      [_u.variable]: "sizes.8",
      [Ou.variable]: "fontSizes.md",
      [Mu.variable]: "space.3"
    }
  })
}, YA = {
  subtle: $o((e) => {
    var t;
    return {
      container: (t = is.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: $o((e) => {
    var t;
    return {
      container: (t = is.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: $o((e) => {
    var t;
    return {
      container: (t = is.variants) == null ? void 0 : t.outline(e)
    };
  })
}, KA = jA({
  variants: YA,
  baseStyle: UA,
  sizes: GA,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: ur, defineMultiStyleConfig: qA } = Te(vR.keys), Si = Q("input-height"), xi = Q("input-font-size"), wi = Q("input-padding"), Ci = Q("input-border-radius"), XA = ur({
  addon: {
    height: Si.reference,
    fontSize: xi.reference,
    px: wi.reference,
    borderRadius: Ci.reference
  },
  field: {
    width: "100%",
    height: Si.reference,
    fontSize: xi.reference,
    px: wi.reference,
    borderRadius: Ci.reference,
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
}), Mr = {
  lg: {
    [xi.variable]: "fontSizes.lg",
    [wi.variable]: "space.4",
    [Ci.variable]: "radii.md",
    [Si.variable]: "sizes.12"
  },
  md: {
    [xi.variable]: "fontSizes.md",
    [wi.variable]: "space.4",
    [Ci.variable]: "radii.md",
    [Si.variable]: "sizes.10"
  },
  sm: {
    [xi.variable]: "fontSizes.sm",
    [wi.variable]: "space.3",
    [Ci.variable]: "radii.sm",
    [Si.variable]: "sizes.8"
  },
  xs: {
    [xi.variable]: "fontSizes.xs",
    [wi.variable]: "space.2",
    [Ci.variable]: "radii.sm",
    [Si.variable]: "sizes.6"
  }
}, QA = {
  lg: ur({
    field: Mr.lg,
    group: Mr.lg
  }),
  md: ur({
    field: Mr.md,
    group: Mr.md
  }),
  sm: ur({
    field: Mr.sm,
    group: Mr.sm
  }),
  xs: ur({
    field: Mr.xs,
    group: Mr.xs
  })
};
function gv(e) {
  const { focusBorderColor: t, errorBorderColor: n } = e;
  return {
    focusBorderColor: t || q("blue.500", "blue.300")(e),
    errorBorderColor: n || q("red.500", "red.300")(e)
  };
}
var ZA = ur((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = gv(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: q("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Ct(t, r),
        boxShadow: `0 0 0 1px ${Ct(t, r)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: Ct(t, n),
        boxShadow: `0 0 0 1px ${Ct(t, n)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: q("inherit", "whiteAlpha.50")(e),
      bg: q("gray.100", "whiteAlpha.300")(e)
    }
  };
}), JA = ur((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = gv(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: q("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: q("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Ct(t, r)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: Ct(t, n)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: q("gray.100", "whiteAlpha.50")(e)
    }
  };
}), e5 = ur((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = gv(e);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Ct(t, r),
        boxShadow: `0px 1px 0px 0px ${Ct(t, r)}`
      },
      _focusVisible: {
        borderColor: Ct(t, n),
        boxShadow: `0px 1px 0px 0px ${Ct(t, n)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
}), t5 = ur({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
}), n5 = {
  outline: ZA,
  filled: JA,
  flushed: e5,
  unstyled: t5
}, ge = qA({
  baseStyle: XA,
  sizes: QA,
  variants: n5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), Cy, r5 = {
  ...(Cy = ge.baseStyle) == null ? void 0 : Cy.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, ky, Py, o5 = {
  outline: (e) => {
    var t, n;
    return (n = (t = ge.variants) == null ? void 0 : t.outline(e).field) != null ? n : {};
  },
  flushed: (e) => {
    var t, n;
    return (n = (t = ge.variants) == null ? void 0 : t.flushed(e).field) != null ? n : {};
  },
  filled: (e) => {
    var t, n;
    return (n = (t = ge.variants) == null ? void 0 : t.filled(e).field) != null ? n : {};
  },
  unstyled: (Py = (ky = ge.variants) == null ? void 0 : ky.unstyled.field) != null ? Py : {}
}, Ty, Ey, _y, Oy, My, Iy, $y, Ry, i5 = {
  xs: (Ey = (Ty = ge.sizes) == null ? void 0 : Ty.xs.field) != null ? Ey : {},
  sm: (Oy = (_y = ge.sizes) == null ? void 0 : _y.sm.field) != null ? Oy : {},
  md: (Iy = (My = ge.sizes) == null ? void 0 : My.md.field) != null ? Iy : {},
  lg: (Ry = ($y = ge.sizes) == null ? void 0 : $y.lg.field) != null ? Ry : {}
}, a5 = {
  baseStyle: r5,
  sizes: i5,
  variants: o5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, Ul = et("tooltip-bg"), _f = et("tooltip-fg"), s5 = et("popper-arrow-bg"), l5 = {
  bg: Ul.reference,
  color: _f.reference,
  [Ul.variable]: "colors.gray.700",
  [_f.variable]: "colors.whiteAlpha.900",
  _dark: {
    [Ul.variable]: "colors.gray.300",
    [_f.variable]: "colors.gray.900"
  },
  [s5.variable]: Ul.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, u5 = {
  baseStyle: l5
}, { defineMultiStyleConfig: c5, definePartsStyle: Ua } = Te(wR.keys), d5 = (e) => {
  const { colorScheme: t, theme: n, isIndeterminate: r, hasStripe: o } = e, i = q(
    vy(),
    vy("1rem", "rgba(0,0,0,0.1)")
  )(e), a = q(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${Ct(n, a)} 50%,
    transparent 100%
  )`;
  return {
    ...!r && o && i,
    ...r ? { bgImage: s } : { bgColor: a }
  };
}, f5 = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, p5 = (e) => ({
  bg: q("gray.100", "whiteAlpha.300")(e)
}), h5 = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...d5(e)
}), m5 = Ua((e) => ({
  label: f5,
  filledTrack: h5(e),
  track: p5(e)
})), v5 = {
  xs: Ua({
    track: { h: "1" }
  }),
  sm: Ua({
    track: { h: "2" }
  }),
  md: Ua({
    track: { h: "3" }
  }),
  lg: Ua({
    track: { h: "4" }
  })
}, g5 = c5({
  sizes: v5,
  baseStyle: m5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), y5 = (e) => typeof e == "function";
function Pt(e, ...t) {
  return y5(e) ? e(...t) : e;
}
var { definePartsStyle: Iu, defineMultiStyleConfig: b5 } = Te(dR.keys), as = Q("checkbox-size"), S5 = (e) => {
  const { colorScheme: t } = e;
  return {
    w: as.reference,
    h: as.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: q(`${t}.500`, `${t}.200`)(e),
      borderColor: q(`${t}.500`, `${t}.200`)(e),
      color: q("white", "gray.900")(e),
      _hover: {
        bg: q(`${t}.600`, `${t}.300`)(e),
        borderColor: q(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: q("gray.200", "transparent")(e),
        bg: q("gray.200", "whiteAlpha.300")(e),
        color: q("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: q(`${t}.500`, `${t}.200`)(e),
      borderColor: q(`${t}.500`, `${t}.200`)(e),
      color: q("white", "gray.900")(e)
    },
    _disabled: {
      bg: q("gray.100", "whiteAlpha.100")(e),
      borderColor: q("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: q("red.500", "red.300")(e)
    }
  };
}, x5 = {
  _disabled: { cursor: "not-allowed" }
}, w5 = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, C5 = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, k5 = Iu((e) => ({
  icon: C5,
  container: x5,
  control: Pt(S5, e),
  label: w5
})), P5 = {
  sm: Iu({
    control: { [as.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: Iu({
    control: { [as.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: Iu({
    control: { [as.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, mc = b5({
  baseStyle: k5,
  sizes: P5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: T5, definePartsStyle: $u } = Te(CR.keys), E5 = (e) => {
  var t;
  const n = (t = Pt(mc.baseStyle, e)) == null ? void 0 : t.control;
  return {
    ...n,
    borderRadius: "full",
    _checked: {
      ...n == null ? void 0 : n._checked,
      _before: {
        content: '""',
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
}, _5 = $u((e) => {
  var t, n, r, o;
  return {
    label: (n = (t = mc).baseStyle) == null ? void 0 : n.call(t, e).label,
    container: (o = (r = mc).baseStyle) == null ? void 0 : o.call(r, e).container,
    control: E5(e)
  };
}), O5 = {
  md: $u({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: $u({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: $u({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, M5 = T5({
  baseStyle: _5,
  sizes: O5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: I5, definePartsStyle: $5 } = Te(kR.keys), Gl = Q("select-bg"), Ay, R5 = {
  ...(Ay = ge.baseStyle) == null ? void 0 : Ay.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: Gl.reference,
  [Gl.variable]: "colors.white",
  _dark: {
    [Gl.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: Gl.reference
  }
}, A5 = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, D5 = $5({
  field: R5,
  icon: A5
}), Yl = {
  paddingInlineEnd: "8"
}, Dy, Fy, zy, Ly, Vy, Ny, jy, By, F5 = {
  lg: {
    ...(Dy = ge.sizes) == null ? void 0 : Dy.lg,
    field: {
      ...(Fy = ge.sizes) == null ? void 0 : Fy.lg.field,
      ...Yl
    }
  },
  md: {
    ...(zy = ge.sizes) == null ? void 0 : zy.md,
    field: {
      ...(Ly = ge.sizes) == null ? void 0 : Ly.md.field,
      ...Yl
    }
  },
  sm: {
    ...(Vy = ge.sizes) == null ? void 0 : Vy.sm,
    field: {
      ...(Ny = ge.sizes) == null ? void 0 : Ny.sm.field,
      ...Yl
    }
  },
  xs: {
    ...(jy = ge.sizes) == null ? void 0 : jy.xs,
    field: {
      ...(By = ge.sizes) == null ? void 0 : By.xs.field,
      ...Yl
    },
    icon: {
      insetEnd: "1"
    }
  }
}, z5 = I5({
  baseStyle: D5,
  sizes: F5,
  variants: ge.variants,
  defaultProps: ge.defaultProps
}), Of = Q("skeleton-start-color"), Mf = Q("skeleton-end-color"), L5 = {
  [Of.variable]: "colors.gray.100",
  [Mf.variable]: "colors.gray.400",
  _dark: {
    [Of.variable]: "colors.gray.800",
    [Mf.variable]: "colors.gray.600"
  },
  background: Of.reference,
  borderColor: Mf.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, V5 = {
  baseStyle: L5
}, If = Q("skip-link-bg"), N5 = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [If.variable]: "colors.white",
    _dark: {
      [If.variable]: "colors.gray.700"
    },
    bg: If.reference
  }
}, j5 = {
  baseStyle: N5
}, { defineMultiStyleConfig: B5, definePartsStyle: Cd } = Te(PR.keys), Ls = Q("slider-thumb-size"), Vs = Q("slider-track-size"), Lr = Q("slider-bg"), W5 = (e) => {
  const { orientation: t } = e;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...vv({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, H5 = (e) => ({
  ...vv({
    orientation: e.orientation,
    horizontal: { h: Vs.reference },
    vertical: { w: Vs.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [Lr.variable]: "colors.gray.200",
  _dark: {
    [Lr.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [Lr.variable]: "colors.gray.300",
    _dark: {
      [Lr.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: Lr.reference
}), U5 = (e) => {
  const { orientation: t } = e;
  return {
    ...vv({
      orientation: t,
      vertical: {
        left: "50%",
        transform: "translateX(-50%)",
        _active: {
          transform: "translateX(-50%) scale(1.15)"
        }
      },
      horizontal: {
        top: "50%",
        transform: "translateY(-50%)",
        _active: {
          transform: "translateY(-50%) scale(1.15)"
        }
      }
    }),
    w: Ls.reference,
    h: Ls.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
}, G5 = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [Lr.variable]: `colors.${t}.500`,
    _dark: {
      [Lr.variable]: `colors.${t}.200`
    },
    bg: Lr.reference
  };
}, Y5 = Cd((e) => ({
  container: W5(e),
  track: H5(e),
  thumb: U5(e),
  filledTrack: G5(e)
})), K5 = Cd({
  container: {
    [Ls.variable]: "sizes.4",
    [Vs.variable]: "sizes.1"
  }
}), q5 = Cd({
  container: {
    [Ls.variable]: "sizes.3.5",
    [Vs.variable]: "sizes.1"
  }
}), X5 = Cd({
  container: {
    [Ls.variable]: "sizes.2.5",
    [Vs.variable]: "sizes.0.5"
  }
}), Q5 = {
  lg: K5,
  md: q5,
  sm: X5
}, Z5 = B5({
  baseStyle: Y5,
  sizes: Q5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Co = et("spinner-size"), J5 = {
  width: [Co.reference],
  height: [Co.reference]
}, eD = {
  xs: {
    [Co.variable]: "sizes.3"
  },
  sm: {
    [Co.variable]: "sizes.4"
  },
  md: {
    [Co.variable]: "sizes.6"
  },
  lg: {
    [Co.variable]: "sizes.8"
  },
  xl: {
    [Co.variable]: "sizes.12"
  }
}, tD = {
  baseStyle: J5,
  sizes: eD,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: nD, definePartsStyle: eC } = Te(TR.keys), rD = {
  fontWeight: "medium"
}, oD = {
  opacity: 0.8,
  marginBottom: "2"
}, iD = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, aD = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, sD = eC({
  container: {},
  label: rD,
  helpText: oD,
  number: iD,
  icon: aD
}), lD = {
  md: eC({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, uD = nD({
  baseStyle: sD,
  sizes: lD,
  defaultProps: {
    size: "md"
  }
}), $f = Q("kbd-bg"), cD = {
  [$f.variable]: "colors.gray.100",
  _dark: {
    [$f.variable]: "colors.whiteAlpha.100"
  },
  bg: $f.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, dD = {
  baseStyle: cD
}, fD = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
}, pD = {
  baseStyle: fD
}, { defineMultiStyleConfig: hD, definePartsStyle: mD } = Te(gR.keys), vD = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, gD = mD({
  icon: vD
}), yD = hD({
  baseStyle: gD
}), { defineMultiStyleConfig: bD, definePartsStyle: SD } = Te(yR.keys), Vn = Q("menu-bg"), Rf = Q("menu-shadow"), xD = {
  [Vn.variable]: "#fff",
  [Rf.variable]: "shadows.sm",
  _dark: {
    [Vn.variable]: "colors.gray.700",
    [Rf.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Vn.reference,
  boxShadow: Rf.reference
}, wD = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [Vn.variable]: "colors.gray.100",
    _dark: {
      [Vn.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Vn.variable]: "colors.gray.200",
    _dark: {
      [Vn.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [Vn.variable]: "colors.gray.100",
    _dark: {
      [Vn.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: Vn.reference
}, CD = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, kD = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, PD = {
  opacity: 0.6
}, TD = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, ED = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, _D = SD({
  button: ED,
  list: xD,
  item: wD,
  groupTitle: CD,
  icon: kD,
  command: PD,
  divider: TD
}), OD = bD({
  baseStyle: _D
}), { defineMultiStyleConfig: MD, definePartsStyle: wh } = Te(bR.keys), Af = Q("modal-bg"), Df = Q("modal-shadow"), ID = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, $D = (e) => {
  const { isCentered: t, scrollBehavior: n } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: n === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, RD = (e) => {
  const { isCentered: t, scrollBehavior: n } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: n === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [Af.variable]: "colors.white",
    [Df.variable]: "shadows.lg",
    _dark: {
      [Af.variable]: "colors.gray.700",
      [Df.variable]: "shadows.dark-lg"
    },
    bg: Af.reference,
    boxShadow: Df.reference
  };
}, AD = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, DD = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, FD = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, zD = {
  px: "6",
  py: "4"
}, LD = wh((e) => ({
  overlay: ID,
  dialogContainer: Pt($D, e),
  dialog: Pt(RD, e),
  header: AD,
  closeButton: DD,
  body: Pt(FD, e),
  footer: zD
}));
function xn(e) {
  return wh(e === "full" ? {
    dialog: {
      maxW: "100vw",
      minH: "$100vh",
      my: "0",
      borderRadius: "0"
    }
  } : {
    dialog: { maxW: e }
  });
}
var VD = {
  xs: xn("xs"),
  sm: xn("sm"),
  md: xn("md"),
  lg: xn("lg"),
  xl: xn("xl"),
  "2xl": xn("2xl"),
  "3xl": xn("3xl"),
  "4xl": xn("4xl"),
  "5xl": xn("5xl"),
  "6xl": xn("6xl"),
  full: xn("full")
}, ND = MD({
  baseStyle: LD,
  sizes: VD,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: jD, definePartsStyle: tC } = Te(SR.keys), yv = et("number-input-stepper-width"), nC = et("number-input-input-padding"), BD = ir(yv).add("0.5rem").toString(), Ff = et("number-input-bg"), zf = et("number-input-color"), Lf = et("number-input-border-color"), WD = {
  [yv.variable]: "sizes.6",
  [nC.variable]: BD
}, HD = (e) => {
  var t, n;
  return (n = (t = Pt(ge.baseStyle, e)) == null ? void 0 : t.field) != null ? n : {};
}, UD = {
  width: yv.reference
}, GD = {
  borderStart: "1px solid",
  borderStartColor: Lf.reference,
  color: zf.reference,
  bg: Ff.reference,
  [zf.variable]: "colors.chakra-body-text",
  [Lf.variable]: "colors.chakra-border-color",
  _dark: {
    [zf.variable]: "colors.whiteAlpha.800",
    [Lf.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [Ff.variable]: "colors.gray.200",
    _dark: {
      [Ff.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, YD = tC((e) => {
  var t;
  return {
    root: WD,
    field: (t = Pt(HD, e)) != null ? t : {},
    stepperGroup: UD,
    stepper: GD
  };
});
function Kl(e) {
  var t, n, r;
  const o = (t = ge.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (r = (n = o.field) == null ? void 0 : n.fontSize) != null ? r : "md", s = qw.fontSizes[a];
  return tC({
    field: {
      ...o.field,
      paddingInlineEnd: nC.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: ir(s).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: i[e]
      },
      _last: {
        borderBottomEndRadius: i[e],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
var KD = {
  xs: Kl("xs"),
  sm: Kl("sm"),
  md: Kl("md"),
  lg: Kl("lg")
}, qD = jD({
  baseStyle: YD,
  sizes: KD,
  variants: ge.variants,
  defaultProps: ge.defaultProps
}), Wy, XD = {
  ...(Wy = ge.baseStyle) == null ? void 0 : Wy.field,
  textAlign: "center"
}, QD = {
  lg: {
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  }
}, Hy, Uy, ZD = {
  outline: (e) => {
    var t, n, r;
    return (r = (n = Pt((t = ge.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : n.field) != null ? r : {};
  },
  flushed: (e) => {
    var t, n, r;
    return (r = (n = Pt((t = ge.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : n.field) != null ? r : {};
  },
  filled: (e) => {
    var t, n, r;
    return (r = (n = Pt((t = ge.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : n.field) != null ? r : {};
  },
  unstyled: (Uy = (Hy = ge.variants) == null ? void 0 : Hy.unstyled.field) != null ? Uy : {}
}, JD = {
  baseStyle: XD,
  sizes: QD,
  variants: ZD,
  defaultProps: ge.defaultProps
}, { defineMultiStyleConfig: eF, definePartsStyle: tF } = Te(xR.keys), ql = et("popper-bg"), nF = et("popper-arrow-bg"), Gy = et("popper-arrow-shadow-color"), rF = { zIndex: 10 }, oF = {
  [ql.variable]: "colors.white",
  bg: ql.reference,
  [nF.variable]: ql.reference,
  [Gy.variable]: "colors.gray.200",
  _dark: {
    [ql.variable]: "colors.gray.700",
    [Gy.variable]: "colors.whiteAlpha.300"
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
}, iF = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, aF = {
  px: 3,
  py: 2
}, sF = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, lF = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, uF = tF({
  popper: rF,
  content: oF,
  header: iF,
  body: aF,
  footer: sF,
  closeButton: lF
}), cF = eF({
  baseStyle: uF
}), { definePartsStyle: Ch, defineMultiStyleConfig: dF } = Te(fR.keys), Vf = Q("drawer-bg"), Nf = Q("drawer-box-shadow");
function Jo(e) {
  return Ch(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var fF = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, pF = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, hF = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [Vf.variable]: "colors.white",
    [Nf.variable]: "shadows.lg",
    _dark: {
      [Vf.variable]: "colors.gray.700",
      [Nf.variable]: "shadows.dark-lg"
    },
    bg: Vf.reference,
    boxShadow: Nf.reference
  };
}, mF = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, vF = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, gF = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, yF = {
  px: "6",
  py: "4"
}, bF = Ch((e) => ({
  overlay: fF,
  dialogContainer: pF,
  dialog: Pt(hF, e),
  header: mF,
  closeButton: vF,
  body: gF,
  footer: yF
})), SF = {
  xs: Jo("xs"),
  sm: Jo("md"),
  md: Jo("lg"),
  lg: Jo("2xl"),
  xl: Jo("4xl"),
  full: Jo("full")
}, xF = dF({
  baseStyle: bF,
  sizes: SF,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: wF, defineMultiStyleConfig: CF } = Te(pR.keys), kF = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, PF = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, TF = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, EF = wF({
  preview: kF,
  input: PF,
  textarea: TF
}), _F = CF({
  baseStyle: EF
}), { definePartsStyle: OF, defineMultiStyleConfig: MF } = Te(hR.keys), Vi = Q("form-control-color"), IF = {
  marginStart: "1",
  [Vi.variable]: "colors.red.500",
  _dark: {
    [Vi.variable]: "colors.red.300"
  },
  color: Vi.reference
}, $F = {
  mt: "2",
  [Vi.variable]: "colors.gray.600",
  _dark: {
    [Vi.variable]: "colors.whiteAlpha.600"
  },
  color: Vi.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, RF = OF({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: IF,
  helperText: $F
}), AF = MF({
  baseStyle: RF
}), { definePartsStyle: DF, defineMultiStyleConfig: FF } = Te(mR.keys), Ni = Q("form-error-color"), zF = {
  [Ni.variable]: "colors.red.500",
  _dark: {
    [Ni.variable]: "colors.red.300"
  },
  color: Ni.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, LF = {
  marginEnd: "0.5em",
  [Ni.variable]: "colors.red.500",
  _dark: {
    [Ni.variable]: "colors.red.300"
  },
  color: Ni.reference
}, VF = DF({
  text: zF,
  icon: LF
}), NF = FF({
  baseStyle: VF
}), jF = {
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
}, BF = {
  baseStyle: jF
}, WF = {
  fontFamily: "heading",
  fontWeight: "bold"
}, HF = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  },
  "2xl": {
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  },
  md: {
    fontSize: "xl",
    lineHeight: 1.2
  },
  sm: {
    fontSize: "md",
    lineHeight: 1.2
  },
  xs: {
    fontSize: "sm",
    lineHeight: 1.2
  }
}, UF = {
  baseStyle: WF,
  sizes: HF,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: GF, definePartsStyle: YF } = Te(cR.keys), jf = Q("breadcrumb-link-decor"), KF = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: jf.reference,
  [jf.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [jf.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, qF = YF({
  link: KF
}), XF = GF({
  baseStyle: qF
}), QF = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
}, rC = (e) => {
  const { colorScheme: t, theme: n } = e;
  if (t === "gray")
    return {
      color: q("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: q("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: q("gray.200", "whiteAlpha.300")(e) }
    };
  const r = ta(`${t}.200`, 0.12)(n), o = ta(`${t}.200`, 0.24)(n);
  return {
    color: q(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: q(`${t}.50`, r)(e)
    },
    _active: {
      bg: q(`${t}.100`, o)(e)
    }
  };
}, ZF = (e) => {
  const { colorScheme: t } = e, n = q("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? n : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...Pt(rC, e)
  };
}, JF = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
}, ez = (e) => {
  var t;
  const { colorScheme: n } = e;
  if (n === "gray") {
    const l = q("gray.100", "whiteAlpha.200")(e);
    return {
      bg: l,
      color: q("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: q("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: l
        }
      },
      _active: { bg: q("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: r = `${n}.500`,
    color: o = "white",
    hoverBg: i = `${n}.600`,
    activeBg: a = `${n}.700`
  } = (t = JF[n]) != null ? t : {}, s = q(r, `${n}.200`)(e);
  return {
    bg: s,
    color: q(o, "gray.800")(e),
    _hover: {
      bg: q(i, `${n}.300`)(e),
      _disabled: {
        bg: s
      }
    },
    _active: { bg: q(a, `${n}.400`)(e) }
  };
}, tz = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: q(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: q(`${t}.700`, `${t}.500`)(e)
    }
  };
}, nz = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, rz = {
  ghost: rC,
  outline: ZF,
  solid: ez,
  link: tz,
  unstyled: nz
}, oz = {
  lg: {
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  },
  md: {
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  },
  sm: {
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  },
  xs: {
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  }
}, iz = {
  baseStyle: QF,
  variants: rz,
  sizes: oz,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: Ro, defineMultiStyleConfig: az } = Te(IR.keys), vc = Q("card-bg"), fr = Q("card-padding"), oC = Q("card-shadow"), Ru = Q("card-radius"), iC = Q("card-border-width", "0"), aC = Q("card-border-color"), sz = Ro({
  container: {
    [vc.variable]: "colors.chakra-body-bg",
    backgroundColor: vc.reference,
    boxShadow: oC.reference,
    borderRadius: Ru.reference,
    color: "chakra-body-text",
    borderWidth: iC.reference,
    borderColor: aC.reference
  },
  body: {
    padding: fr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: fr.reference
  },
  footer: {
    padding: fr.reference
  }
}), lz = {
  sm: Ro({
    container: {
      [Ru.variable]: "radii.base",
      [fr.variable]: "space.3"
    }
  }),
  md: Ro({
    container: {
      [Ru.variable]: "radii.md",
      [fr.variable]: "space.5"
    }
  }),
  lg: Ro({
    container: {
      [Ru.variable]: "radii.xl",
      [fr.variable]: "space.7"
    }
  })
}, uz = {
  elevated: Ro({
    container: {
      [oC.variable]: "shadows.base",
      _dark: {
        [vc.variable]: "colors.gray.700"
      }
    }
  }),
  outline: Ro({
    container: {
      [iC.variable]: "1px",
      [aC.variable]: "colors.chakra-border-color"
    }
  }),
  filled: Ro({
    container: {
      [vc.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [fr.variable]: 0
    },
    header: {
      [fr.variable]: 0
    },
    footer: {
      [fr.variable]: 0
    }
  }
}, cz = az({
  baseStyle: sz,
  variants: uz,
  sizes: lz,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), ss = et("close-button-size"), Ia = et("close-button-bg"), dz = {
  w: [ss.reference],
  h: [ss.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [Ia.variable]: "colors.blackAlpha.100",
    _dark: {
      [Ia.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Ia.variable]: "colors.blackAlpha.200",
    _dark: {
      [Ia.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: Ia.reference
}, fz = {
  lg: {
    [ss.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [ss.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [ss.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, pz = {
  baseStyle: dz,
  sizes: fz,
  defaultProps: {
    size: "md"
  }
}, { variants: hz, defaultProps: mz } = is, vz = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: Ge.bg.reference,
  color: Ge.color.reference,
  boxShadow: Ge.shadow.reference
}, gz = {
  baseStyle: vz,
  variants: hz,
  defaultProps: mz
}, yz = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, bz = {
  baseStyle: yz
}, Sz = {
  opacity: 0.6,
  borderColor: "inherit"
}, xz = {
  borderStyle: "solid"
}, wz = {
  borderStyle: "dashed"
}, Cz = {
  solid: xz,
  dashed: wz
}, kz = {
  baseStyle: Sz,
  variants: Cz,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: Pz, defineMultiStyleConfig: Tz } = Te(sR.keys), Ez = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, _z = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
}, Oz = {
  pt: "2",
  px: "4",
  pb: "5"
}, Mz = {
  fontSize: "1.25em"
}, Iz = Pz({
  container: Ez,
  button: _z,
  panel: Oz,
  icon: Mz
}), $z = Tz({ baseStyle: Iz }), { definePartsStyle: il, defineMultiStyleConfig: Rz } = Te(lR.keys), Kt = Q("alert-fg"), Sr = Q("alert-bg"), Az = il({
  container: {
    bg: Sr.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: Kt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: Kt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function bv(e) {
  const { theme: t, colorScheme: n } = e, r = ta(`${n}.200`, 0.16)(t);
  return {
    light: `colors.${n}.100`,
    dark: r
  };
}
var Dz = il((e) => {
  const { colorScheme: t } = e, n = bv(e);
  return {
    container: {
      [Kt.variable]: `colors.${t}.600`,
      [Sr.variable]: n.light,
      _dark: {
        [Kt.variable]: `colors.${t}.200`,
        [Sr.variable]: n.dark
      }
    }
  };
}), Fz = il((e) => {
  const { colorScheme: t } = e, n = bv(e);
  return {
    container: {
      [Kt.variable]: `colors.${t}.600`,
      [Sr.variable]: n.light,
      _dark: {
        [Kt.variable]: `colors.${t}.200`,
        [Sr.variable]: n.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: Kt.reference
    }
  };
}), zz = il((e) => {
  const { colorScheme: t } = e, n = bv(e);
  return {
    container: {
      [Kt.variable]: `colors.${t}.600`,
      [Sr.variable]: n.light,
      _dark: {
        [Kt.variable]: `colors.${t}.200`,
        [Sr.variable]: n.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: Kt.reference
    }
  };
}), Lz = il((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [Kt.variable]: "colors.white",
      [Sr.variable]: `colors.${t}.600`,
      _dark: {
        [Kt.variable]: "colors.gray.900",
        [Sr.variable]: `colors.${t}.200`
      },
      color: Kt.reference
    }
  };
}), Vz = {
  subtle: Dz,
  "left-accent": Fz,
  "top-accent": zz,
  solid: Lz
}, Nz = Rz({
  baseStyle: Az,
  variants: Vz,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: sC, defineMultiStyleConfig: jz } = Te(uR.keys), ji = Q("avatar-border-color"), ls = Q("avatar-bg"), Ns = Q("avatar-font-size"), na = Q("avatar-size"), Bz = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: ji.reference,
  [ji.variable]: "white",
  _dark: {
    [ji.variable]: "colors.gray.800"
  }
}, Wz = {
  bg: ls.reference,
  fontSize: Ns.reference,
  width: na.reference,
  height: na.reference,
  lineHeight: "1",
  [ls.variable]: "colors.gray.200",
  _dark: {
    [ls.variable]: "colors.whiteAlpha.400"
  }
}, Hz = (e) => {
  const { name: t, theme: n } = e, r = t ? QR({ string: t }) : "colors.gray.400", o = qR(r)(n);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: ls.reference,
    fontSize: Ns.reference,
    color: i,
    borderColor: ji.reference,
    verticalAlign: "top",
    width: na.reference,
    height: na.reference,
    "&:not([data-loaded])": {
      [ls.variable]: r
    },
    [ji.variable]: "colors.white",
    _dark: {
      [ji.variable]: "colors.gray.800"
    }
  };
}, Uz = {
  fontSize: Ns.reference,
  lineHeight: "1"
}, Gz = sC((e) => ({
  badge: Pt(Bz, e),
  excessLabel: Pt(Wz, e),
  container: Pt(Hz, e),
  label: Uz
}));
function Ir(e) {
  const t = e !== "100%" ? Qw[e] : void 0;
  return sC({
    container: {
      [na.variable]: t ?? e,
      [Ns.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [na.variable]: t ?? e,
      [Ns.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var Yz = {
  "2xs": Ir(4),
  xs: Ir(6),
  sm: Ir(8),
  md: Ir(12),
  lg: Ir(16),
  xl: Ir(24),
  "2xl": Ir(32),
  full: Ir("100%")
}, Kz = jz({
  baseStyle: Gz,
  sizes: Yz,
  defaultProps: {
    size: "md"
  }
}), qz = {
  Accordion: $z,
  Alert: Nz,
  Avatar: Kz,
  Badge: is,
  Breadcrumb: XF,
  Button: iz,
  Checkbox: mc,
  CloseButton: pz,
  Code: gz,
  Container: bz,
  Divider: kz,
  Drawer: xF,
  Editable: _F,
  Form: AF,
  FormError: NF,
  FormLabel: BF,
  Heading: UF,
  Input: ge,
  Kbd: dD,
  Link: pD,
  List: yD,
  Menu: OD,
  Modal: ND,
  NumberInput: qD,
  PinInput: JD,
  Popover: cF,
  Progress: g5,
  Radio: M5,
  Select: z5,
  Skeleton: V5,
  SkipLink: j5,
  Slider: Z5,
  Spinner: tD,
  Stat: uD,
  Switch: pA,
  Table: SA,
  Tabs: DA,
  Tag: KA,
  Textarea: a5,
  Tooltip: u5,
  Card: cz,
  Stepper: aR
}, Xz = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, Qz = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color"
    }
  }
}, Zz = "ltr", Jz = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, lC = {
  semanticTokens: Xz,
  direction: Zz,
  ...rR,
  components: qz,
  styles: Qz,
  config: Jz
};
function Ga(e) {
  return typeof e == "function";
}
function eL(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
var tL = (e) => function(...n) {
  let r = [...n], o = n[n.length - 1];
  return R$(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  r.length > 1 ? r = r.slice(0, r.length - 1) : o = e, eL(
    ...r.map(
      (i) => (a) => Ga(i) ? i(a) : rL(a, i)
    )
  )(o);
}, nL = tL(lC);
function rL(...e) {
  return dn({}, ...e, uC);
}
function uC(e, t, n, r) {
  if ((Ga(e) || Ga(t)) && Object.prototype.hasOwnProperty.call(r, n))
    return (...o) => {
      const i = Ga(e) ? e(...o) : e, a = Ga(t) ? t(...o) : t;
      return dn({}, i, a, uC);
    };
}
function oL(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    t.includes(r) || (n[r] = e[r]);
  }), n;
}
function iL(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1)
    e = e[o[r]];
  return e === void 0 ? n : e;
}
var aL = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (r, o, i, a) => {
    if (typeof r > "u")
      return e(r, o, i);
    t.has(r) || t.set(r, /* @__PURE__ */ new Map());
    const s = t.get(r);
    if (s.has(o))
      return s.get(o);
    const l = e(r, o, i, a);
    return s.set(o, l), l;
  };
}, cC = aL(iL);
function dC(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    const o = e[r];
    t(o, r, e) && (n[r] = o);
  }), n;
}
var fC = (e) => dC(e, (t) => t != null);
function sL(e) {
  return typeof e == "function";
}
function pC(e, ...t) {
  return sL(e) ? e(...t) : e;
}
var lL = typeof Element < "u", uL = typeof Map == "function", cL = typeof Set == "function", dL = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Au(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!Au(e[r], t[r]))
          return !1;
      return !0;
    }
    var i;
    if (uL && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!Au(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (cL && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (dL && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (e[r] !== t[r])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
      return e.toString() === t.toString();
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r]))
        return !1;
    if (lL && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !Au(e[o[r]], t[o[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var fL = function(t, n) {
  try {
    return Au(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const pL = /* @__PURE__ */ Qs(fL);
function hC(e, t = {}) {
  var n;
  const { styleConfig: r, ...o } = t, { theme: i, colorMode: a } = hI(), s = e ? cC(i, `components.${e}`) : void 0, l = r || s, u = dn(
    { theme: i, colorMode: a },
    (n = l == null ? void 0 : l.defaultProps) != null ? n : {},
    fC(oL(o, ["children"]))
  ), c = y.useRef({});
  if (l) {
    const f = I$(l)(u);
    pL(c.current, f) || (c.current = f);
  }
  return c.current;
}
function Ho(e, t = {}) {
  return hC(e, t);
}
function Lt(e, t = {}) {
  return hC(e, t);
}
var hL = /* @__PURE__ */ new Set([
  ...b$,
  "textStyle",
  "layerStyle",
  "apply",
  "noOfLines",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx"
]), mL = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function vL(e) {
  return mL.has(e) || !hL.has(e);
}
function gL(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (o in n && delete n[o], n[o] = r[o]);
  return n;
}
function yL(e) {
  const t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
var bL = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, SL = /* @__PURE__ */ Pw(
  function(e) {
    return bL.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), xL = SL, wL = function(t) {
  return t !== "theme";
}, Yy = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? xL : wL;
}, Ky = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, CL = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return iv(n, r, o), Aw(function() {
    return av(n, r, o);
  }), null;
}, kL = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, a;
  n !== void 0 && (i = n.label, a = n.target);
  var s = Ky(t, n, r), l = s || Yy(o), u = !l("as");
  return function() {
    var c = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var f = c.length, p = 1; p < f; p++)
        d.push(c[p], c[0][p]);
    }
    var v = lv(function(g, S, m) {
      var h = u && g.as || o, b = "", x = [], C = g;
      if (g.theme == null) {
        C = {};
        for (var k in g)
          C[k] = g[k];
        C.theme = y.useContext(Ji);
      }
      typeof g.className == "string" ? b = Iw(S.registered, x, g.className) : g.className != null && (b = g.className + " ");
      var P = yd(d.concat(x), S.registered, C);
      b += S.key + "-" + P.name, a !== void 0 && (b += " " + a);
      var T = u && s === void 0 ? Yy(h) : l, M = {};
      for (var $ in g)
        u && $ === "as" || // $FlowFixMe
        T($) && (M[$] = g[$]);
      return M.className = b, M.ref = m, /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement(CL, {
        cache: S,
        serialized: P,
        isStringTag: typeof h == "string"
      }), /* @__PURE__ */ y.createElement(h, M));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = d, v.__emotion_forwardProp = s, Object.defineProperty(v, "toString", {
      value: function() {
        return "." + a;
      }
    }), v.withComponent = function(g, S) {
      return e(g, Y({}, n, S, {
        shouldForwardProp: Ky(v, S, !0)
      })).apply(void 0, d);
    }, v;
  };
}, PL = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], gc = kL.bind();
PL.forEach(function(e) {
  gc[e] = gc(e);
});
var qy, TL = (qy = gc.default) != null ? qy : gc, EL = ({ baseStyle: e }) => (t) => {
  const { theme: n, css: r, __css: o, sx: i, ...a } = t, s = dC(a, (d, f) => x$(f)), l = pC(e, t), u = gL(
    {},
    o,
    l,
    fC(s),
    i
  ), c = Kw(u)(t.theme);
  return r ? [c, r] : c;
};
function Bf(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = vL);
  const o = EL({ baseStyle: n }), i = TL(
    e,
    r
  )(o);
  return te.forwardRef(function(l, u) {
    const { colorMode: c, forced: d } = ha();
    return te.createElement(i, {
      ref: u,
      "data-theme": d ? c : void 0,
      ...l
    });
  });
}
function _L() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Bf, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, n, r) {
      return Bf(...r);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, n) {
      return e.has(n) || e.set(n, Bf(n)), e.get(n);
    }
  });
}
var oe = _L();
function Ee(e) {
  return y.forwardRef(e);
}
function OL(e = {}) {
  const {
    strict: t = !0,
    errorMessage: n = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: r
  } = e, o = y.createContext(void 0);
  o.displayName = r;
  function i() {
    var a;
    const s = y.useContext(o);
    if (!s && t) {
      const l = new Error(n);
      throw l.name = "ContextError", (a = Error.captureStackTrace) == null || a.call(Error, l, i), l;
    }
    return s;
  }
  return [
    o.Provider,
    i,
    o
  ];
}
function ML(e) {
  const { cssVarsRoot: t, theme: n, children: r } = e, o = y.useMemo(() => y$(n), [n]);
  return /* @__PURE__ */ E.jsxs(UM, { theme: o, children: [
    /* @__PURE__ */ E.jsx(IL, { root: t }),
    r
  ] });
}
function IL({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ E.jsx(bd, { styles: (n) => ({ [t]: n.__cssVars }) });
}
OL({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function $L() {
  const { colorMode: e } = ha();
  return /* @__PURE__ */ E.jsx(
    bd,
    {
      styles: (t) => {
        const n = cC(t, "styles.global"), r = pC(n, { theme: t, colorMode: e });
        return r ? Kw(r)(t) : void 0;
      }
    }
  );
}
var Sv = y.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
Sv.displayName = "EnvironmentContext";
function RL({ defer: e } = {}) {
  const [, t] = y.useReducer((n) => n + 1, 0);
  return ea(() => {
    e && t();
  }, [e]), y.useContext(Sv);
}
function mC(e) {
  const { children: t, environment: n, disabled: r } = e, o = y.useRef(null), i = y.useMemo(() => n || {
    getDocument: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument) != null ? l : document;
    },
    getWindow: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) != null ? l : window;
    }
  }, [n]), a = !r || !n;
  return /* @__PURE__ */ E.jsxs(Sv.Provider, { value: i, children: [
    t,
    a && /* @__PURE__ */ E.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
mC.displayName = "EnvironmentProvider";
var AL = (e) => {
  const {
    children: t,
    colorModeManager: n,
    portalZIndex: r,
    resetScope: o,
    resetCSS: i = !0,
    theme: a = {},
    environment: s,
    cssVarsRoot: l,
    disableEnvironment: u,
    disableGlobalStyle: c
  } = e, d = /* @__PURE__ */ E.jsx(
    mC,
    {
      environment: s,
      disabled: u,
      children: t
    }
  );
  return /* @__PURE__ */ E.jsx(ML, { theme: a, cssVarsRoot: l, children: /* @__PURE__ */ E.jsxs(
    jw,
    {
      colorModeManager: n,
      options: a.config,
      children: [
        i ? /* @__PURE__ */ E.jsx(QM, { scope: o }) : /* @__PURE__ */ E.jsx(XM, {}),
        !c && /* @__PURE__ */ E.jsx($L, {}),
        r ? /* @__PURE__ */ E.jsx(Vw, { zIndex: r, children: d }) : d
      ]
    }
  ) });
}, DL = (e, t) => e.find((n) => n.id === t);
function Xy(e, t) {
  const n = vC(e, t), r = n ? e[n].findIndex((o) => o.id === t) : -1;
  return {
    position: n,
    index: r
  };
}
function vC(e, t) {
  for (const [n, r] of Object.entries(e))
    if (DL(r, t))
      return n;
}
function FL(e) {
  const t = e.includes("right"), n = e.includes("left");
  let r = "center";
  return t && (r = "flex-end"), n && (r = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: r
  };
}
function zL(e) {
  const n = e === "top" || e === "bottom" ? "0 auto" : void 0, r = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0, o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0, i = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)", a = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: n,
    top: r,
    bottom: o,
    right: i,
    left: a
  };
}
function js(e, t = []) {
  const n = y.useRef(e);
  return y.useEffect(() => {
    n.current = e;
  }), y.useCallback((...r) => {
    var o;
    return (o = n.current) == null ? void 0 : o.call(n, ...r);
  }, t);
}
function LL(e, t) {
  const n = js(e);
  y.useEffect(() => {
    if (t == null)
      return;
    let r = null;
    return r = window.setTimeout(() => {
      n();
    }, t), () => {
      r && window.clearTimeout(r);
    };
  }, [t, n]);
}
function Bs(e, t) {
  const n = y.useRef(!1), r = y.useRef(!1);
  y.useEffect(() => {
    if (n.current && r.current)
      return e();
    r.current = !0;
  }, t), y.useEffect(() => (n.current = !0, () => {
    n.current = !1;
  }), []);
}
const gC = y.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), kd = y.createContext({}), al = y.createContext(null), Pd = typeof document < "u", xv = Pd ? y.useLayoutEffect : y.useEffect, yC = y.createContext({ strict: !1 }), wv = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), VL = "framerAppearId", bC = "data-" + wv(VL);
function NL(e, t, n, r) {
  const { visualElement: o } = y.useContext(kd), i = y.useContext(yC), a = y.useContext(al), s = y.useContext(gC).reducedMotion, l = y.useRef();
  r = r || i.renderer, !l.current && r && (l.current = r(e, {
    visualState: t,
    parent: o,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const u = l.current;
  y.useInsertionEffect(() => {
    u && u.update(n, a);
  });
  const c = y.useRef(!!n[bC]);
  return xv(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), y.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (window.HandoffAppearAnimations = !1, c.current = !1));
  }), u;
}
function ki(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function jL(e, t, n) {
  return y.useCallback(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : ki(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function Ws(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Td(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Cv = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], kv = ["initial", ...Cv];
function Ed(e) {
  return Td(e.animate) || kv.some((t) => Ws(e[t]));
}
function SC(e) {
  return !!(Ed(e) || e.variants);
}
function BL(e, t) {
  if (Ed(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ws(n) ? n : void 0,
      animate: Ws(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function WL(e) {
  const { initial: t, animate: n } = BL(e, y.useContext(kd));
  return y.useMemo(() => ({ initial: t, animate: n }), [Qy(t), Qy(n)]);
}
function Qy(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Zy = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Hs = {};
for (const e in Zy)
  Hs[e] = {
    isEnabled: (t) => Zy[e].some((n) => !!t[n])
  };
function HL(e) {
  for (const t in e)
    Hs[t] = {
      ...Hs[t],
      ...e[t]
    };
}
const Pv = y.createContext({}), xC = y.createContext({}), UL = Symbol.for("motionComponentSymbol");
function GL({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && HL(e);
  function i(s, l) {
    let u;
    const c = {
      ...y.useContext(gC),
      ...s,
      layoutId: YL(s)
    }, { isStatic: d } = c, f = WL(s), p = r(s, d);
    if (!d && Pd) {
      f.visualElement = NL(o, p, c, t);
      const v = y.useContext(xC), g = y.useContext(yC).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        g,
        e,
        v
      ));
    }
    return y.createElement(
      kd.Provider,
      { value: f },
      u && f.visualElement ? y.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      n(o, s, jL(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const a = y.forwardRef(i);
  return a[UL] = o, a;
}
function YL({ layoutId: e }) {
  const t = y.useContext(Pv).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function KL(e) {
  function t(r, o = {}) {
    return GL(e(r, o));
  }
  if (typeof Proxy > "u")
    return t;
  const n = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o))
  });
}
const qL = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Tv(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(qL.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const yc = {};
function XL(e) {
  Object.assign(yc, e);
}
const sl = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Uo = new Set(sl);
function wC(e, { layout: t, layoutId: n }) {
  return Uo.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!yc[e] || e === "opacity");
}
const Vt = (e) => !!(e && e.getVelocity), QL = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, ZL = sl.length;
function JL(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, o) {
  let i = "";
  for (let a = 0; a < ZL; a++) {
    const s = sl[a];
    if (e[s] !== void 0) {
      const l = QL[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, r ? "" : i) : n && r && (i = "none"), i;
}
const CC = (e) => (t) => typeof t == "string" && t.startsWith(e), kC = CC("--"), kh = CC("var(--"), e4 = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, t4 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, to = (e, t, n) => Math.min(Math.max(n, e), t), Go = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, us = {
  ...Go,
  transform: (e) => to(0, 1, e)
}, Xl = {
  ...Go,
  default: 1
}, cs = (e) => Math.round(e * 1e5) / 1e5, _d = /(-)?([\d]*\.?[\d])+/g, PC = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, n4 = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ll(e) {
  return typeof e == "string";
}
const ul = (e) => ({
  test: (t) => ll(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), $r = ul("deg"), qn = ul("%"), ee = ul("px"), r4 = ul("vh"), o4 = ul("vw"), Jy = {
  ...qn,
  parse: (e) => qn.parse(e) / 100,
  transform: (e) => qn.transform(e * 100)
}, eb = {
  ...Go,
  transform: Math.round
}, TC = {
  // Border props
  borderWidth: ee,
  borderTopWidth: ee,
  borderRightWidth: ee,
  borderBottomWidth: ee,
  borderLeftWidth: ee,
  borderRadius: ee,
  radius: ee,
  borderTopLeftRadius: ee,
  borderTopRightRadius: ee,
  borderBottomRightRadius: ee,
  borderBottomLeftRadius: ee,
  // Positioning props
  width: ee,
  maxWidth: ee,
  height: ee,
  maxHeight: ee,
  size: ee,
  top: ee,
  right: ee,
  bottom: ee,
  left: ee,
  // Spacing props
  padding: ee,
  paddingTop: ee,
  paddingRight: ee,
  paddingBottom: ee,
  paddingLeft: ee,
  margin: ee,
  marginTop: ee,
  marginRight: ee,
  marginBottom: ee,
  marginLeft: ee,
  // Transform props
  rotate: $r,
  rotateX: $r,
  rotateY: $r,
  rotateZ: $r,
  scale: Xl,
  scaleX: Xl,
  scaleY: Xl,
  scaleZ: Xl,
  skew: $r,
  skewX: $r,
  skewY: $r,
  distance: ee,
  translateX: ee,
  translateY: ee,
  translateZ: ee,
  x: ee,
  y: ee,
  z: ee,
  perspective: ee,
  transformPerspective: ee,
  opacity: us,
  originX: Jy,
  originY: Jy,
  originZ: ee,
  // Misc
  zIndex: eb,
  // SVG
  fillOpacity: us,
  strokeOpacity: us,
  numOctaves: eb
};
function Ev(e, t, n, r) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, u = !1, c = !0;
  for (const d in t) {
    const f = t[d];
    if (kC(d)) {
      i[d] = f;
      continue;
    }
    const p = TC[d], v = t4(f, p);
    if (Uo.has(d)) {
      if (l = !0, a[d] = v, !c)
        continue;
      f !== (p.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, s[d] = v) : o[d] = v;
  }
  if (t.transform || (l || r ? o.transform = JL(e.transform, n, c, r) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const _v = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function EC(e, t, n) {
  for (const r in t)
    !Vt(t[r]) && !wC(r, n) && (e[r] = t[r]);
}
function i4({ transformTemplate: e }, t, n) {
  return y.useMemo(() => {
    const r = _v();
    return Ev(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function a4(e, t, n) {
  const r = e.style || {}, o = {};
  return EC(o, r, e), Object.assign(o, i4(e, t, n)), e.transformValues ? e.transformValues(o) : o;
}
function s4(e, t, n) {
  const r = {}, o = a4(e, t, n);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = o, r;
}
const l4 = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport"
]);
function bc(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || l4.has(e);
}
let _C = (e) => !bc(e);
function u4(e) {
  e && (_C = (t) => t.startsWith("on") ? !bc(t) : e(t));
}
try {
  u4(require("@emotion/is-prop-valid").default);
} catch {
}
function c4(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (_C(o) || n === !0 && bc(o) || !t && !bc(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function tb(e, t, n) {
  return typeof e == "string" ? e : ee.transform(t + n * e);
}
function d4(e, t, n) {
  const r = tb(t, e.x, e.width), o = tb(n, e.y, e.height);
  return `${r} ${o}`;
}
const f4 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, p4 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function h4(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? f4 : p4;
  e[i.offset] = ee.transform(-r);
  const a = ee.transform(t), s = ee.transform(n);
  e[i.array] = `${a} ${s}`;
}
function Ov(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: o,
  originY: i,
  pathLength: a,
  pathSpacing: s = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, c, d, f) {
  if (Ev(e, u, c, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: v, dimensions: g } = e;
  p.transform && (g && (v.transform = p.transform), delete p.transform), g && (o !== void 0 || i !== void 0 || v.transform) && (v.transformOrigin = d4(g, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), n !== void 0 && (p.y = n), r !== void 0 && (p.scale = r), a !== void 0 && h4(p, a, s, l, !1);
}
const OC = () => ({
  ..._v(),
  attrs: {}
}), Mv = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function m4(e, t, n, r) {
  const o = y.useMemo(() => {
    const i = OC();
    return Ov(i, t, { enableHardwareAcceleration: !1 }, Mv(r), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    EC(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function v4(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (Tv(n) ? m4 : s4)(r, i, a, n), c = {
      ...c4(r, typeof n == "string", e),
      ...l,
      ref: o
    }, { children: d } = r, f = y.useMemo(() => Vt(d) ? d.get() : d, [d]);
    return y.createElement(n, {
      ...c,
      children: f
    });
  };
}
function MC(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n)
    e.style.setProperty(i, n[i]);
}
const IC = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function $C(e, t, n, r) {
  MC(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(IC.has(o) ? o : wv(o), t.attrs[o]);
}
function Iv(e, t) {
  const { style: n } = e, r = {};
  for (const o in n)
    (Vt(n[o]) || t.style && Vt(t.style[o]) || wC(o, e)) && (r[o] = n[o]);
  return r;
}
function RC(e, t) {
  const n = Iv(e, t);
  for (const r in e)
    if (Vt(e[r]) || Vt(t[r])) {
      const o = sl.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
      n[o] = e[r];
    }
  return n;
}
function $v(e, t, n, r = {}, o = {}) {
  return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), t;
}
function AC(e) {
  const t = y.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Sc = (e) => Array.isArray(e), g4 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), y4 = (e) => Sc(e) ? e[e.length - 1] || 0 : e;
function Du(e) {
  const t = Vt(e) ? e.get() : e;
  return g4(t) ? t.toValue() : t;
}
function b4({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, i) {
  const a = {
    latestValues: S4(r, o, i, e),
    renderState: t()
  };
  return n && (a.mount = (s) => n(r, s, a)), a;
}
const DC = (e) => (t, n) => {
  const r = y.useContext(kd), o = y.useContext(al), i = () => b4(e, t, r, o);
  return n ? i() : AC(i);
};
function S4(e, t, n, r) {
  const o = {}, i = r(e, {});
  for (const f in i)
    o[f] = Du(i[f]);
  let { initial: a, animate: s } = e;
  const l = Ed(e), u = SC(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return d && typeof d != "boolean" && !Td(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const v = $v(e, p);
    if (!v)
      return;
    const { transitionEnd: g, transition: S, ...m } = v;
    for (const h in m) {
      let b = m[h];
      if (Array.isArray(b)) {
        const x = c ? b.length - 1 : 0;
        b = b[x];
      }
      b !== null && (o[h] = b);
    }
    for (const h in g)
      o[h] = g[h];
  }), o;
}
const je = (e) => e;
class nb {
  constructor() {
    this.order = [], this.scheduled = /* @__PURE__ */ new Set();
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    this.order.length = 0, this.scheduled.clear();
  }
}
function x4(e) {
  let t = new nb(), n = new nb(), r = 0, o = !1, i = !1;
  const a = /* @__PURE__ */ new WeakSet(), s = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, u = !1, c = !1) => {
      const d = c && o, f = d ? t : n;
      return u && a.add(l), f.add(l) && d && o && (r = t.order.length), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      n.remove(l), a.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (o) {
        i = !0;
        return;
      }
      if (o = !0, [t, n] = [n, t], n.clear(), r = t.order.length, r)
        for (let u = 0; u < r; u++) {
          const c = t.order[u];
          c(l), a.has(c) && (s.schedule(c), e());
        }
      o = !1, i && (i = !1, s.process(l));
    }
  };
  return s;
}
const Ql = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], w4 = 40;
function C4(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = Ql.reduce((d, f) => (d[f] = x4(() => n = !0), d), {}), a = (d) => i[d].process(o), s = () => {
    const d = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, w4), 1), o.timestamp = d, o.isProcessing = !0, Ql.forEach(a), o.isProcessing = !1, n && t && (r = !1, e(s));
  }, l = () => {
    n = !0, r = !0, o.isProcessing || e(s);
  };
  return { schedule: Ql.reduce((d, f) => {
    const p = i[f];
    return d[f] = (v, g = !1, S = !1) => (n || l(), p.schedule(v, g, S)), d;
  }, {}), cancel: (d) => Ql.forEach((f) => i[f].cancel(d)), state: o, steps: i };
}
const { schedule: Pe, cancel: xr, state: tt, steps: Wf } = C4(typeof requestAnimationFrame < "u" ? requestAnimationFrame : je, !0), k4 = {
  useVisualState: DC({
    scrapeMotionValuesFromProps: RC,
    createRenderState: OC,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      Pe.read(() => {
        try {
          n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          n.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), Pe.render(() => {
        Ov(n, r, { enableHardwareAcceleration: !1 }, Mv(t.tagName), e.transformTemplate), $C(t, n);
      });
    }
  })
}, P4 = {
  useVisualState: DC({
    scrapeMotionValuesFromProps: Iv,
    createRenderState: _v
  })
};
function T4(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...Tv(e) ? k4 : P4,
    preloadedFeatures: n,
    useRender: v4(t),
    createVisualElement: r,
    Component: e
  };
}
function cr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const FC = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Od(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const E4 = (e) => (t) => FC(t) && e(t, Od(t));
function pr(e, t, n, r) {
  return cr(e, t, E4(n), r);
}
const _4 = (e, t) => (n) => t(e(n)), Xr = (...e) => e.reduce(_4);
function zC(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const rb = zC("dragHorizontal"), ob = zC("dragVertical");
function LC(e) {
  let t = !1;
  if (e === "y")
    t = ob();
  else if (e === "x")
    t = rb();
  else {
    const n = rb(), r = ob();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function VC() {
  const e = LC(!0);
  return e ? (e(), !1) : !0;
}
class so {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function ib(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"), r = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || VC())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[r] && Pe.update(() => s[r](i, a));
  };
  return pr(e.current, n, o, {
    passive: !e.getProps()[r]
  });
}
class O4 extends so {
  mount() {
    this.unmount = Xr(ib(this.node, !0), ib(this.node, !1));
  }
  unmount() {
  }
}
class M4 extends so {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Xr(cr(this.node.current, "focus", () => this.onFocus()), cr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const NC = (e, t) => t ? e === t ? !0 : NC(e, t.parentElement) : !1;
function Hf(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, Od(n));
}
class I4 extends so {
  constructor() {
    super(...arguments), this.removeStartListeners = je, this.removeEndListeners = je, this.removeAccessibleListeners = je, this.startPointerPress = (t, n) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const r = this.node.getProps(), i = pr(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c } = this.node.getProps();
        Pe.update(() => {
          NC(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
        });
      }, { passive: !(r.onTap || r.onPointerUp) }), a = pr(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
      this.removeEndListeners = Xr(i, a), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || Hf("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && Pe.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = cr(this.node.current, "keyup", a), Hf("down", (s, l) => {
          this.startPress(s, l);
        });
      }, n = cr(this.node.current, "keydown", t), r = () => {
        this.isPressing && Hf("cancel", (i, a) => this.cancelPress(i, a));
      }, o = cr(this.node.current, "blur", r);
      this.removeAccessibleListeners = Xr(n, o);
    };
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && Pe.update(() => r(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !VC();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && Pe.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(), n = pr(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), r = cr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Xr(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Ph = /* @__PURE__ */ new WeakMap(), Uf = /* @__PURE__ */ new WeakMap(), $4 = (e) => {
  const t = Ph.get(e.target);
  t && t(e);
}, R4 = (e) => {
  e.forEach($4);
};
function A4({ root: e, ...t }) {
  const n = e || document;
  Uf.has(n) || Uf.set(n, {});
  const r = Uf.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(R4, { root: e, ...t })), r[o];
}
function D4(e, t, n) {
  const r = A4(t);
  return Ph.set(e, n), r.observe(e), () => {
    Ph.delete(e), r.unobserve(e);
  };
}
const F4 = {
  some: 0,
  all: 1
};
class z4 extends so {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : F4[o]
    }, s = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return D4(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(L4(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function L4({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const V4 = {
  inView: {
    Feature: z4
  },
  tap: {
    Feature: I4
  },
  focus: {
    Feature: M4
  },
  hover: {
    Feature: O4
  }
};
function jC(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function N4(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.get()), t;
}
function j4(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
}
function Md(e, t, n) {
  const r = e.getProps();
  return $v(r, t, n !== void 0 ? n : r.custom, N4(e), j4(e));
}
let B4 = je, Rv = je;
const Qr = (e) => e * 1e3, hr = (e) => e / 1e3, W4 = {
  current: !1
}, BC = (e) => Array.isArray(e) && typeof e[0] == "number";
function WC(e) {
  return !!(!e || typeof e == "string" && HC[e] || BC(e) || Array.isArray(e) && e.every(WC));
}
const Ya = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, HC = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Ya([0, 0.65, 0.55, 1]),
  circOut: Ya([0.55, 0, 1, 0.45]),
  backIn: Ya([0.31, 0.01, 0.66, -0.59]),
  backOut: Ya([0.33, 1.53, 0.69, 0.99])
};
function UC(e) {
  if (e)
    return BC(e) ? Ya(e) : Array.isArray(e) ? e.map(UC) : HC[e];
}
function H4(e, t, n, { delay: r = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = UC(s);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: r,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
function U4(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const GC = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, G4 = 1e-7, Y4 = 12;
function K4(e, t, n, r, o) {
  let i, a, s = 0;
  do
    a = t + (n - t) / 2, i = GC(a, r, o) - e, i > 0 ? n = a : t = a;
  while (Math.abs(i) > G4 && ++s < Y4);
  return a;
}
function cl(e, t, n, r) {
  if (e === t && n === r)
    return je;
  const o = (i) => K4(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : GC(o(i), t, r);
}
const q4 = cl(0.42, 0, 1, 1), X4 = cl(0, 0, 0.58, 1), YC = cl(0.42, 0, 0.58, 1), Q4 = (e) => Array.isArray(e) && typeof e[0] != "number", KC = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, qC = (e) => (t) => 1 - e(1 - t), XC = (e) => 1 - Math.sin(Math.acos(e)), Av = qC(XC), Z4 = KC(Av), QC = cl(0.33, 1.53, 0.69, 0.99), Dv = qC(QC), J4 = KC(Dv), e3 = (e) => (e *= 2) < 1 ? 0.5 * Dv(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), t3 = {
  linear: je,
  easeIn: q4,
  easeInOut: YC,
  easeOut: X4,
  circIn: XC,
  circInOut: Z4,
  circOut: Av,
  backIn: Dv,
  backInOut: J4,
  backOut: QC,
  anticipate: e3
}, ab = (e) => {
  if (Array.isArray(e)) {
    Rv(e.length === 4);
    const [t, n, r, o] = e;
    return cl(t, n, r, o);
  } else if (typeof e == "string")
    return t3[e];
  return e;
}, Fv = (e, t) => (n) => !!(ll(n) && n4.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), ZC = (e, t, n) => (r) => {
  if (!ll(r))
    return r;
  const [o, i, a, s] = r.match(_d);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, n3 = (e) => to(0, 255, e), Gf = {
  ...Go,
  transform: (e) => Math.round(n3(e))
}, _o = {
  test: Fv("rgb", "red"),
  parse: ZC("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Gf.transform(e) + ", " + Gf.transform(t) + ", " + Gf.transform(n) + ", " + cs(us.transform(r)) + ")"
};
function r3(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Th = {
  test: Fv("#"),
  parse: r3,
  transform: _o.transform
}, Pi = {
  test: Fv("hsl", "hue"),
  parse: ZC("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + qn.transform(cs(t)) + ", " + qn.transform(cs(n)) + ", " + cs(us.transform(r)) + ")"
}, xt = {
  test: (e) => _o.test(e) || Th.test(e) || Pi.test(e),
  parse: (e) => _o.test(e) ? _o.parse(e) : Pi.test(e) ? Pi.parse(e) : Th.parse(e),
  transform: (e) => ll(e) ? e : e.hasOwnProperty("red") ? _o.transform(e) : Pi.transform(e)
}, De = (e, t, n) => -n * e + n * t + e;
function Yf(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function o3({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - s;
    o = Yf(l, s, e + 1 / 3), i = Yf(l, s, e), a = Yf(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r
  };
}
const Kf = (e, t, n) => {
  const r = e * e;
  return Math.sqrt(Math.max(0, n * (t * t - r) + r));
}, i3 = [Th, _o, Pi], a3 = (e) => i3.find((t) => t.test(e));
function sb(e) {
  const t = a3(e);
  let n = t.parse(e);
  return t === Pi && (n = o3(n)), n;
}
const JC = (e, t) => {
  const n = sb(e), r = sb(t), o = { ...n };
  return (i) => (o.red = Kf(n.red, r.red, i), o.green = Kf(n.green, r.green, i), o.blue = Kf(n.blue, r.blue, i), o.alpha = De(n.alpha, r.alpha, i), _o.transform(o));
};
function s3(e) {
  var t, n;
  return isNaN(e) && ll(e) && (((t = e.match(_d)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(PC)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const ek = {
  regex: e4,
  countKey: "Vars",
  token: "${v}",
  parse: je
}, tk = {
  regex: PC,
  countKey: "Colors",
  token: "${c}",
  parse: xt.parse
}, nk = {
  regex: _d,
  countKey: "Numbers",
  token: "${n}",
  parse: Go.parse
};
function qf(e, { regex: t, countKey: n, token: r, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + n] = i.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...i.map(o)));
}
function xc(e) {
  const t = e.toString(), n = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return n.value.includes("var(--") && qf(n, ek), qf(n, tk), qf(n, nk), n;
}
function rk(e) {
  return xc(e).values;
}
function ok(e) {
  const { values: t, numColors: n, numVars: r, tokenised: o } = xc(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < r ? s = s.replace(ek.token, a[l]) : l < r + n ? s = s.replace(tk.token, xt.transform(a[l])) : s = s.replace(nk.token, cs(a[l]));
    return s;
  };
}
const l3 = (e) => typeof e == "number" ? 0 : e;
function u3(e) {
  const t = rk(e);
  return ok(e)(t.map(l3));
}
const no = {
  test: s3,
  parse: rk,
  createTransformer: ok,
  getAnimatableNone: u3
}, ik = (e, t) => (n) => `${n > 0 ? t : e}`;
function ak(e, t) {
  return typeof e == "number" ? (n) => De(e, t, n) : xt.test(e) ? JC(e, t) : e.startsWith("var(") ? ik(e, t) : lk(e, t);
}
const sk = (e, t) => {
  const n = [...e], r = n.length, o = e.map((i, a) => ak(i, t[a]));
  return (i) => {
    for (let a = 0; a < r; a++)
      n[a] = o[a](i);
    return n;
  };
}, c3 = (e, t) => {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = ak(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}, lk = (e, t) => {
  const n = no.createTransformer(t), r = xc(e), o = xc(t);
  return r.numVars === o.numVars && r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? Xr(sk(r.values, o.values), n) : ik(e, t);
}, Us = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, lb = (e, t) => (n) => De(e, t, n);
function d3(e) {
  return typeof e == "number" ? lb : typeof e == "string" ? xt.test(e) ? JC : lk : Array.isArray(e) ? sk : typeof e == "object" ? c3 : lb;
}
function f3(e, t, n) {
  const r = [], o = n || d3(e[0]), i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || je : t;
      s = Xr(l, s);
    }
    r.push(s);
  }
  return r;
}
function uk(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (Rv(i === t.length), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = f3(t, r, o), s = a.length, l = (u) => {
    let c = 0;
    if (s > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const d = Us(e[c], e[c + 1], u);
    return a[c](d);
  };
  return n ? (u) => l(to(e[0], e[i - 1], u)) : l;
}
function p3(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Us(0, t, r);
    e.push(De(n, 1, o));
  }
}
function h3(e) {
  const t = [0];
  return p3(t, e.length - 1), t;
}
function m3(e, t) {
  return e.map((n) => n * t);
}
function v3(e, t) {
  return e.map(() => t || YC).splice(0, e.length - 1);
}
function wc({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = Q4(r) ? r.map(ab) : ab(r), i = {
    done: !1,
    value: t[0]
  }, a = m3(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : h3(t),
    e
  ), s = uk(a, t, {
    ease: Array.isArray(o) ? o : v3(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function ck(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const g3 = 5;
function dk(e, t, n) {
  const r = Math.max(t - g3, 0);
  return ck(n - e(r), t - r);
}
const Xf = 1e-3, y3 = 0.01, ub = 10, b3 = 0.05, S3 = 1;
function x3({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, i;
  B4(e <= Qr(ub));
  let a = 1 - t;
  a = to(b3, S3, a), e = to(y3, ub, hr(e)), a < 1 ? (o = (u) => {
    const c = u * a, d = c * e, f = c - n, p = Eh(u, a), v = Math.exp(-d);
    return Xf - f / p * v;
  }, i = (u) => {
    const d = u * a * e, f = d * n + n, p = Math.pow(a, 2) * Math.pow(u, 2) * e, v = Math.exp(-d), g = Eh(Math.pow(u, 2), a);
    return (-o(u) + Xf > 0 ? -1 : 1) * ((f - p) * v) / g;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - n) * e + 1;
    return -Xf + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (n - u) * (e * e);
    return c * d;
  });
  const s = 5 / e, l = C3(o, i, s);
  if (e = Qr(e), isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const u = Math.pow(l, 2) * r;
    return {
      stiffness: u,
      damping: a * 2 * Math.sqrt(r * u),
      duration: e
    };
  }
}
const w3 = 12;
function C3(e, t, n) {
  let r = n;
  for (let o = 1; o < w3; o++)
    r = r - e(r) / t(r);
  return r;
}
function Eh(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const k3 = ["duration", "bounce"], P3 = ["stiffness", "damping", "mass"];
function cb(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function T3(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!cb(e, P3) && cb(e, k3)) {
    const n = x3(e);
    t = {
      ...t,
      ...n,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function fk({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f } = T3(r), p = c ? -hr(c) : 0, v = l / (2 * Math.sqrt(s * u)), g = i - o, S = hr(Math.sqrt(s / u)), m = Math.abs(g) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 5e-3 : 0.5);
  let h;
  if (v < 1) {
    const b = Eh(S, v);
    h = (x) => {
      const C = Math.exp(-v * S * x);
      return i - C * ((p + v * S * g) / b * Math.sin(b * x) + g * Math.cos(b * x));
    };
  } else if (v === 1)
    h = (b) => i - Math.exp(-S * b) * (g + (p + S * g) * b);
  else {
    const b = S * Math.sqrt(v * v - 1);
    h = (x) => {
      const C = Math.exp(-v * S * x), k = Math.min(b * x, 300);
      return i - C * ((p + v * S * g) * Math.sinh(k) + b * g * Math.cosh(k)) / b;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (b) => {
      const x = h(b);
      if (f)
        a.done = b >= d;
      else {
        let C = p;
        b !== 0 && (v < 1 ? C = dk(h, b, x) : C = 0);
        const k = Math.abs(C) <= n, P = Math.abs(i - x) <= t;
        a.done = k && P;
      }
      return a.value = a.done ? i : x, a;
    }
  };
}
function db({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = (T) => s !== void 0 && T < s || l !== void 0 && T > l, v = (T) => s === void 0 ? l : l === void 0 || Math.abs(s - T) < Math.abs(l - T) ? s : l;
  let g = n * t;
  const S = d + g, m = a === void 0 ? S : a(S);
  m !== S && (g = m - d);
  const h = (T) => -g * Math.exp(-T / r), b = (T) => m + h(T), x = (T) => {
    const M = h(T), $ = b(T);
    f.done = Math.abs(M) <= u, f.value = f.done ? m : $;
  };
  let C, k;
  const P = (T) => {
    p(f.value) && (C = T, k = fk({
      keyframes: [f.value, v(f.value)],
      velocity: dk(b, T, f.value),
      damping: o,
      stiffness: i,
      restDelta: u,
      restSpeed: c
    }));
  };
  return P(0), {
    calculatedDuration: null,
    next: (T) => {
      let M = !1;
      return !k && C === void 0 && (M = !0, x(T), P(T)), C !== void 0 && T > C ? k.next(T - C) : (!M && x(T), f);
    }
  };
}
const E3 = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => Pe.update(t, !0),
    stop: () => xr(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => tt.isProcessing ? tt.timestamp : performance.now()
  };
}, fb = 2e4;
function pb(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < fb; )
    t += n, r = e.next(t);
  return t >= fb ? 1 / 0 : t;
}
const _3 = {
  decay: db,
  inertia: db,
  tween: wc,
  keyframes: wc,
  spring: fk
};
function Cc({ autoplay: e = !0, delay: t = 0, driver: n = E3, keyframes: r, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let p = 1, v = !1, g, S;
  const m = () => {
    S = new Promise((N) => {
      g = N;
    });
  };
  m();
  let h;
  const b = _3[o] || wc;
  let x;
  b !== wc && typeof r[0] != "number" && (x = uk([0, 100], r, {
    clamp: !1
  }), r = [0, 100]);
  const C = b({ ...f, keyframes: r });
  let k;
  s === "mirror" && (k = b({
    ...f,
    keyframes: [...r].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let P = "idle", T = null, M = null, $ = null;
  C.calculatedDuration === null && i && (C.calculatedDuration = pb(C));
  const { calculatedDuration: D } = C;
  let U = 1 / 0, W = 1 / 0;
  D !== null && (U = D + a, W = U * (i + 1) - a);
  let L = 0;
  const H = (N) => {
    if (M === null)
      return;
    p > 0 && (M = Math.min(M, N)), p < 0 && (M = Math.min(N - W / p, M)), T !== null ? L = T : L = Math.round(N - M) * p;
    const G = L - t * (p >= 0 ? 1 : -1), z = p >= 0 ? G < 0 : G > W;
    L = Math.max(G, 0), P === "finished" && T === null && (L = W);
    let J = L, ae = C;
    if (i) {
      const we = L / U;
      let Qe = Math.floor(we), Ye = we % 1;
      !Ye && we >= 1 && (Ye = 1), Ye === 1 && Qe--, Qe = Math.min(Qe, i + 1);
      const tn = !!(Qe % 2);
      tn && (s === "reverse" ? (Ye = 1 - Ye, a && (Ye -= a / U)) : s === "mirror" && (ae = k));
      let bn = to(0, 1, Ye);
      L > W && (bn = s === "reverse" && tn ? 1 : 0), J = bn * U;
    }
    const re = z ? { done: !1, value: r[0] } : ae.next(J);
    x && (re.value = x(re.value));
    let { done: ie } = re;
    !z && D !== null && (ie = p >= 0 ? L >= W : L <= 0);
    const pe = T === null && (P === "finished" || P === "running" && ie);
    return d && d(re.value), pe && R(), re;
  }, K = () => {
    h && h.stop(), h = void 0;
  }, ne = () => {
    P = "idle", K(), g(), m(), M = $ = null;
  }, R = () => {
    P = "finished", c && c(), K(), g();
  }, F = () => {
    if (v)
      return;
    h || (h = n(H));
    const N = h.now();
    l && l(), T !== null ? M = N - T : (!M || P === "finished") && (M = N), P === "finished" && m(), $ = M, T = null, P = "running", h.start();
  };
  e && F();
  const B = {
    then(N, G) {
      return S.then(N, G);
    },
    get time() {
      return hr(L);
    },
    set time(N) {
      N = Qr(N), L = N, T !== null || !h || p === 0 ? T = N : M = h.now() - N / p;
    },
    get duration() {
      const N = C.calculatedDuration === null ? pb(C) : C.calculatedDuration;
      return hr(N);
    },
    get speed() {
      return p;
    },
    set speed(N) {
      N === p || !h || (p = N, B.time = hr(L));
    },
    get state() {
      return P;
    },
    play: F,
    pause: () => {
      P = "paused", T = L;
    },
    stop: () => {
      v = !0, P !== "idle" && (P = "idle", u && u(), ne());
    },
    cancel: () => {
      $ !== null && H($), ne();
    },
    complete: () => {
      P = "finished";
    },
    sample: (N) => (M = 0, H(N))
  };
  return B;
}
function O3(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const M3 = O3(() => Object.hasOwnProperty.call(Element.prototype, "animate")), I3 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), Zl = 10, $3 = 2e4, R3 = (e, t) => t.type === "spring" || e === "backgroundColor" || !WC(t.ease);
function A3(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (!(M3() && I3.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const u = () => {
    l = new Promise((h) => {
      s = h;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (R3(t, o)) {
    const h = Cc({
      ...o,
      repeat: 0,
      delay: 0
    });
    let b = { done: !1, value: c[0] };
    const x = [];
    let C = 0;
    for (; !b.done && C < $3; )
      b = h.sample(C), x.push(b.value), C += Zl;
    p = void 0, c = x, d = C - Zl, f = "linear";
  }
  const v = H4(e.owner.current, t, c, {
    ...o,
    duration: d,
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
    ease: f,
    times: p
  });
  o.syncStart && (v.startTime = tt.isProcessing ? tt.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
  const g = () => v.cancel(), S = () => {
    Pe.update(g), s(), u();
  };
  return v.onfinish = () => {
    e.set(U4(c, o)), r && r(), S();
  }, {
    then(h, b) {
      return l.then(h, b);
    },
    attachTimeline(h) {
      return v.timeline = h, v.onfinish = null, je;
    },
    get time() {
      return hr(v.currentTime || 0);
    },
    set time(h) {
      v.currentTime = Qr(h);
    },
    get speed() {
      return v.playbackRate;
    },
    set speed(h) {
      v.playbackRate = h;
    },
    get duration() {
      return hr(d);
    },
    play: () => {
      a || (v.play(), xr(g));
    },
    pause: () => v.pause(),
    stop: () => {
      if (a = !0, v.playState === "idle")
        return;
      const { currentTime: h } = v;
      if (h) {
        const b = Cc({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(b.sample(h - Zl).value, b.sample(h).value, Zl);
      }
      S();
    },
    complete: () => v.finish(),
    cancel: S
  };
}
function D3({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const o = () => (n && n(e[e.length - 1]), r && r(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: je,
    pause: je,
    stop: je,
    then: (i) => (i(), Promise.resolve()),
    cancel: je,
    complete: je
  });
  return t ? Cc({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const F3 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, z3 = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), L3 = {
  type: "keyframes",
  duration: 0.8
}, V3 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, N3 = (e, { keyframes: t }) => t.length > 2 ? L3 : Uo.has(e) ? e.startsWith("scale") ? z3(t[1]) : F3 : V3, _h = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(no.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), j3 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function B3(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(_d) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = j3.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const W3 = /([a-z-]*)\(.*?\)/g, Oh = {
  ...no,
  getAnimatableNone: (e) => {
    const t = e.match(W3);
    return t ? t.map(B3).join(" ") : e;
  }
}, H3 = {
  ...TC,
  // Color props
  color: xt,
  backgroundColor: xt,
  outlineColor: xt,
  fill: xt,
  stroke: xt,
  // Border props
  borderColor: xt,
  borderTopColor: xt,
  borderRightColor: xt,
  borderBottomColor: xt,
  borderLeftColor: xt,
  filter: Oh,
  WebkitFilter: Oh
}, zv = (e) => H3[e];
function pk(e, t) {
  let n = zv(e);
  return n !== Oh && (n = no), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const hk = (e) => /^0[^.\s]+$/.test(e);
function U3(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || hk(e);
}
function G3(e, t, n, r) {
  const o = _h(t, n);
  let i;
  Array.isArray(n) ? i = [...n] : i = [null, n];
  const a = r.from !== void 0 ? r.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]), U3(i[u]) && l.push(u), typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = pk(t, s);
    }
  return i;
}
function Y3({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function Lv(e, t) {
  return e[t] || e.default || e;
}
const Vv = (e, t, n, r = {}) => (o) => {
  const i = Lv(r, e) || {}, a = i.delay || r.delay || 0;
  let { elapsed: s = 0 } = r;
  s = s - Qr(a);
  const l = G3(t, e, n, i), u = l[0], c = l[l.length - 1], d = _h(e, u), f = _h(e, c);
  let p = {
    keyframes: l,
    velocity: t.getVelocity(),
    ease: "easeOut",
    ...i,
    delay: -s,
    onUpdate: (v) => {
      t.set(v), i.onUpdate && i.onUpdate(v);
    },
    onComplete: () => {
      o(), i.onComplete && i.onComplete();
    }
  };
  if (Y3(i) || (p = {
    ...p,
    ...N3(e, p)
  }), p.duration && (p.duration = Qr(p.duration)), p.repeatDelay && (p.repeatDelay = Qr(p.repeatDelay)), !d || !f || W4.current || i.type === !1)
    return D3(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const v = A3(t, e, p);
    if (v)
      return v;
  }
  return Cc(p);
};
function kc(e) {
  return !!(Vt(e) && e.add);
}
const mk = (e) => /^\-?\d*\.?\d+$/.test(e);
function Nv(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function jv(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Bv {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Nv(this.subscriptions, t), () => jv(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const K3 = (e) => !isNaN(parseFloat(e));
class q3 {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "10.16.12", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (r, o = !0) => {
      this.prev = this.current, this.current = r;
      const { delta: i, timestamp: a } = tt;
      this.lastUpdated !== a && (this.timeDelta = i, this.lastUpdated = a, Pe.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => Pe.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: r }) => {
      r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = K3(this.current), this.owner = n.owner;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Bv());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), Pe.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = t, this.timeDelta = r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t) {
    this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    return this.canTrackVelocity ? (
      // These casts could be avoided if parseFloat would be typed better
      ck(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
    ) : 0;
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ra(e, t) {
  return new q3(e, t);
}
const vk = (e) => (t) => t.test(e), X3 = {
  test: (e) => e === "auto",
  parse: (e) => e
}, gk = [Go, ee, qn, $r, o4, r4, X3], $a = (e) => gk.find(vk(e)), Q3 = [...gk, xt, no], Z3 = (e) => Q3.find(vk(e));
function J3(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ra(n));
}
function eV(e, t) {
  const n = Md(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const a in i) {
    const s = y4(i[a]);
    J3(e, a, s);
  }
}
function tV(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (mk(c) || hk(c)) ? c = parseFloat(c) : !Z3(c) && no.test(u) && (c = pk(l, u)), e.addValue(l, ra(c, { owner: e })), n[l] === void 0 && (n[l] = c), c !== null && e.setBaseTarget(l, c));
    }
}
function nV(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function rV(e, t, n) {
  const r = {};
  for (const o in e) {
    const i = nV(o, t);
    if (i !== void 0)
      r[o] = i;
    else {
      const a = n.getValue(o);
      a && (r[o] = a.get());
    }
  }
  return r;
}
function oV({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function yk(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (i = r);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || c && oV(c, d))
      continue;
    const v = {
      delay: n,
      elapsed: 0,
      ...Lv(i || {}, d)
    };
    let g = !0;
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const h = e.getProps()[bC];
      h && (g = !1, v.elapsed = window.HandoffAppearAnimations(h, d, f, Pe), v.syncStart = !0);
    }
    let S = g && p === f.get();
    if (v.type === "spring" && (f.getVelocity() || v.velocity) && (S = !1), f.animation && (S = !1), S)
      continue;
    f.start(Vv(d, f, p, e.shouldReduceMotion && Uo.has(d) ? { type: !1 } : v));
    const m = f.animation;
    kc(l) && (l.add(d), m.then(() => l.remove(d))), u.push(m);
  }
  return a && Promise.all(u).then(() => {
    a && eV(e, a);
  }), u;
}
function Mh(e, t, n = {}) {
  const r = Md(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(yk(e, r, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
    return iV(e, t, u + l, c, d, n);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function iV(e, t, n = 0, r = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * r, l = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return Array.from(e.variantChildren).sort(aV).forEach((u, c) => {
    u.notify("AnimationStart", t), a.push(Mh(u, t, {
      ...i,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function aV(e, t) {
  return e.sortNodePosition(t);
}
function sV(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Mh(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = Mh(e, t, n);
  else {
    const o = typeof t == "function" ? Md(e, t, n.custom) : t;
    r = Promise.all(yk(e, o, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const lV = [...Cv].reverse(), uV = Cv.length;
function cV(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => sV(e, n, r)));
}
function dV(e) {
  let t = cV(e);
  const n = pV();
  let r = !0;
  const o = (l, u) => {
    const c = Md(e, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...p } = c;
      l = { ...l, ...p, ...f };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function a(l, u) {
    const c = e.getProps(), d = e.getVariantContext(!0) || {}, f = [], p = /* @__PURE__ */ new Set();
    let v = {}, g = 1 / 0;
    for (let m = 0; m < uV; m++) {
      const h = lV[m], b = n[h], x = c[h] !== void 0 ? c[h] : d[h], C = Ws(x), k = h === u ? b.isActive : null;
      k === !1 && (g = m);
      let P = x === d[h] && x !== c[h] && C;
      if (P && r && e.manuallyAnimateOnMount && (P = !1), b.protectedKeys = { ...v }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && k === null || // If we didn't and don't have any defined prop for this animation type
      !x && !b.prevProp || // Or if the prop doesn't define an animation
      Td(x) || typeof x == "boolean")
        continue;
      const T = fV(b.prevProp, x);
      let M = T || // If we're making this variant active, we want to always make it active
      h === u && b.isActive && !P && C || // If we removed a higher-priority variant (i is in reverse order)
      m > g && C;
      const $ = Array.isArray(x) ? x : [x];
      let D = $.reduce(o, {});
      k === !1 && (D = {});
      const { prevResolvedValues: U = {} } = b, W = {
        ...U,
        ...D
      }, L = (H) => {
        M = !0, p.delete(H), b.needsAnimating[H] = !0;
      };
      for (const H in W) {
        const K = D[H], ne = U[H];
        v.hasOwnProperty(H) || (K !== ne ? Sc(K) && Sc(ne) ? !jC(K, ne) || T ? L(H) : b.protectedKeys[H] = !0 : K !== void 0 ? L(H) : p.add(H) : K !== void 0 && p.has(H) ? L(H) : b.protectedKeys[H] = !0);
      }
      b.prevProp = x, b.prevResolvedValues = D, b.isActive && (v = { ...v, ...D }), r && e.blockInitialAnimation && (M = !1), M && !P && f.push(...$.map((H) => ({
        animation: H,
        options: { type: h, ...l }
      })));
    }
    if (p.size) {
      const m = {};
      p.forEach((h) => {
        const b = e.getBaseTarget(h);
        b !== void 0 && (m[h] = b);
      }), f.push({ animation: m });
    }
    let S = !!f.length;
    return r && c.initial === !1 && !e.manuallyAnimateOnMount && (S = !1), r = !1, S ? t(f) : Promise.resolve();
  }
  function s(l, u, c) {
    var d;
    if (n[l].isActive === u)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((p) => {
      var v;
      return (v = p.animationState) === null || v === void 0 ? void 0 : v.setActive(l, u);
    }), n[l].isActive = u;
    const f = a(c, l);
    for (const p in n)
      n[p].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: i,
    getState: () => n
  };
}
function fV(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !jC(t, e) : !1;
}
function mo(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function pV() {
  return {
    animate: mo(!0),
    whileInView: mo(),
    whileHover: mo(),
    whileTap: mo(),
    whileDrag: mo(),
    whileFocus: mo(),
    exit: mo()
  };
}
class hV extends so {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = dV(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Td(t) && (this.unmount = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
}
let mV = 0;
class vV extends so {
  constructor() {
    super(...arguments), this.id = mV++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n, custom: r } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o)
      return;
    const i = this.node.animationState.setActive("exit", !t, { custom: r ?? this.node.getProps().custom });
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const gV = {
  animation: {
    Feature: hV
  },
  exit: {
    Feature: vV
  }
}, hb = (e, t) => Math.abs(e - t);
function yV(e, t) {
  const n = hb(e.x, t.x), r = hb(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class bk {
  constructor(t, n, { transformPagePoint: r, contextWindow: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = Zf(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = yV(c.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: p } = c, { timestamp: v } = tt;
      this.history.push({ ...p, timestamp: v });
      const { onStart: g, onMove: S } = this.handlers;
      d || (g && g(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), S && S(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, d) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = Qf(d, this.transformPagePoint), Pe.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, d) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: f, onSessionEnd: p } = this.handlers, v = Zf(c.type === "pointercancel" ? this.lastMoveEventInfo : Qf(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(c, v), p && p(c, v);
    }, !FC(t))
      return;
    this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = Od(t), a = Qf(i, this.transformPagePoint), { point: s } = a, { timestamp: l } = tt;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = n;
    u && u(t, Zf(a, this.history)), this.removeListeners = Xr(pr(this.contextWindow, "pointermove", this.handlePointerMove), pr(this.contextWindow, "pointerup", this.handlePointerUp), pr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), xr(this.updatePoint);
  }
}
function Qf(e, t) {
  return t ? { point: t(e.point) } : e;
}
function mb(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Zf({ point: e }, t) {
  return {
    point: e,
    delta: mb(e, Sk(t)),
    offset: mb(e, bV(t)),
    velocity: SV(t, 0.1)
  };
}
function bV(e) {
  return e[0];
}
function Sk(e) {
  return e[e.length - 1];
}
function SV(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = Sk(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > Qr(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = hr(o.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - r.x) / i,
    y: (o.y - r.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Xt(e) {
  return e.max - e.min;
}
function Ih(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function vb(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = De(t.min, t.max, e.origin), e.scale = Xt(n) / Xt(t), (Ih(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = De(n.min, n.max, e.origin) - e.originPoint, (Ih(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function ds(e, t, n, r) {
  vb(e.x, t.x, n.x, r ? r.originX : void 0), vb(e.y, t.y, n.y, r ? r.originY : void 0);
}
function gb(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Xt(t);
}
function xV(e, t, n) {
  gb(e.x, t.x, n.x), gb(e.y, t.y, n.y);
}
function yb(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Xt(t);
}
function fs(e, t, n) {
  yb(e.x, t.x, n.x), yb(e.y, t.y, n.y);
}
function wV(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? De(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? De(n, e, r.max) : Math.min(e, n)), e;
}
function bb(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function CV(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: bb(e.x, n, o),
    y: bb(e.y, t, r)
  };
}
function Sb(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function kV(e, t) {
  return {
    x: Sb(e.x, t.x),
    y: Sb(e.y, t.y)
  };
}
function PV(e, t) {
  let n = 0.5;
  const r = Xt(e), o = Xt(t);
  return o > r ? n = Us(t.min, t.max - r, e.min) : r > o && (n = Us(e.min, e.max - o, t.min)), to(0, 1, n);
}
function TV(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const $h = 0.35;
function EV(e = $h) {
  return e === !1 ? e = 0 : e === !0 && (e = $h), {
    x: xb(e, "left", "right"),
    y: xb(e, "top", "bottom")
  };
}
function xb(e, t, n) {
  return {
    min: wb(e, t),
    max: wb(e, n)
  };
}
function wb(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Cb = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Ti = () => ({
  x: Cb(),
  y: Cb()
}), kb = () => ({ min: 0, max: 0 }), Ke = () => ({
  x: kb(),
  y: kb()
});
function Ln(e) {
  return [e("x"), e("y")];
}
function xk({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function _V({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function OV(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function Jf(e) {
  return e === void 0 || e === 1;
}
function Rh({ scale: e, scaleX: t, scaleY: n }) {
  return !Jf(e) || !Jf(t) || !Jf(n);
}
function bo(e) {
  return Rh(e) || wk(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function wk(e) {
  return Pb(e.x) || Pb(e.y);
}
function Pb(e) {
  return e && e !== "0%";
}
function Pc(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Tb(e, t, n, r, o) {
  return o !== void 0 && (e = Pc(e, o, r)), Pc(e, n, r) + t;
}
function Ah(e, t = 0, n = 1, r, o) {
  e.min = Tb(e.min, t, n, r, o), e.max = Tb(e.max, t, n, r, o);
}
function Ck(e, { x: t, y: n }) {
  Ah(e.x, t.translate, t.scale, t.originPoint), Ah(e.y, n.translate, n.scale, n.originPoint);
}
function MV(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    i = n[s], a = i.projectionDelta;
    const l = i.instance;
    l && l.style && l.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && Ei(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, Ck(e, a)), r && bo(i.latestValues) && Ei(e, i.latestValues));
  }
  t.x = Eb(t.x), t.y = Eb(t.y);
}
function Eb(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Dr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function _b(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = De(e.min, e.max, i);
  Ah(e, t[n], t[r], a, t.scale);
}
const IV = ["x", "scaleX", "originX"], $V = ["y", "scaleY", "originY"];
function Ei(e, t) {
  _b(e.x, t, IV), _b(e.y, t, $V);
}
function kk(e, t) {
  return xk(OV(e.getBoundingClientRect(), t));
}
function RV(e, t, n) {
  const r = kk(e, n), { scroll: o } = t;
  return o && (Dr(r.x, o.offset.x), Dr(r.y, o.offset.y)), r;
}
const Pk = ({ current: e }) => e ? e.ownerDocument.defaultView : null, AV = /* @__PURE__ */ new WeakMap();
class DV {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ke(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), n && this.snapToCursor(Od(l, "page").point);
    }, i = (l, u) => {
      const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
      if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = LC(c), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Ln((v) => {
        let g = this.getAxisMotionValue(v).get() || 0;
        if (qn.test(g)) {
          const { projection: S } = this.visualElement;
          if (S && S.layout) {
            const m = S.layout.layoutBox[v];
            m && (g = Xt(m) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[v] = g;
      }), f && Pe.update(() => f(l, u), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, a = (l, u) => {
      const { dragPropagation: c, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: v } = u;
      if (d && this.currentDirection === null) {
        this.currentDirection = FV(v), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, v), this.updateAxis("y", u.point, v), this.visualElement.render(), p && p(l, u);
    }, s = (l, u) => this.stop(l, u);
    this.panSession = new bk(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      contextWindow: Pk(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && Pe.update(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !Jl(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (a = wV(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    n && ki(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = CV(o.layoutBox, n) : this.constraints = !1, this.elastic = EV(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Ln((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = TV(o.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !ki(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = RV(r, o.root, this.visualElement.getTransformPagePoint());
    let a = kV(o.layout.layoutBox, i);
    if (n) {
      const s = n(_V(a));
      this.hasMutatedConstraints = !!s, s && (a = xk(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, u = Ln((c) => {
      if (!Jl(c, n, this.currentDirection))
        return;
      let d = l && l[c] || {};
      a && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, p = o ? 40 : 1e7, v = {
        type: "inertia",
        velocity: r ? t[c] : 0,
        bounceStiffness: f,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...d
      };
      return this.startAxisValueAnimation(c, v);
    });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Vv(t, r, 0, n));
  }
  stopAnimation() {
    Ln((t) => this.getAxisMotionValue(t).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(), r = this.visualElement.getProps(), o = r[n];
    return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Ln((n) => {
      const { drag: r } = this.getProps();
      if (!Jl(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[n];
        i.set(t[n] - De(a, s, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!ki(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Ln((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = PV({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Ln((a) => {
      if (!Jl(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      s.set(De(l, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    AV.set(this.visualElement, this);
    const t = this.visualElement.current, n = pr(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      ki(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
    const a = cr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (Ln((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), n(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = $h, dragMomentum: s = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s
    };
  }
}
function Jl(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function FV(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class zV extends so {
  constructor(t) {
    super(t), this.removeGroupControls = je, this.removeListeners = je, this.controls = new DV(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || je;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ob = (e) => (t, n) => {
  e && Pe.update(() => e(t, n));
};
class LV extends so {
  constructor() {
    super(...arguments), this.removePointerDownListener = je;
  }
  onPointerDown(t) {
    this.session = new bk(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Pk(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Ob(t),
      onStart: Ob(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && Pe.update(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = pr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function Tk() {
  const e = y.useContext(al);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = y.useId();
  return y.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
function VV() {
  return NV(y.useContext(al));
}
function NV(e) {
  return e === null ? !0 : e.isPresent;
}
const Fu = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Mb(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Ra = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (ee.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Mb(e, t.target.x), r = Mb(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, jV = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = no.parse(e);
    if (o.length > 5)
      return r;
    const i = no.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, s = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + a] /= s, o[1 + a] /= l;
    const u = De(s, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= u), typeof o[3 + a] == "number" && (o[3 + a] /= u), i(o);
  }
};
class BV extends te.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    XL(WV), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), Fu.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props, a = r.projection;
    return a && (a.isPresent = i, o || t.layoutDependency !== n || n === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || Pe.postRender(() => {
      const s = a.getStack();
      (!s || !s.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), queueMicrotask(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(o), r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Ek(e) {
  const [t, n] = Tk(), r = y.useContext(Pv);
  return te.createElement(BV, { ...e, layoutGroup: r, switchLayoutGroup: y.useContext(xC), isPresent: t, safeToRemove: n });
}
const WV = {
  borderRadius: {
    ...Ra,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Ra,
  borderTopRightRadius: Ra,
  borderBottomLeftRadius: Ra,
  borderBottomRightRadius: Ra,
  boxShadow: jV
}, _k = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], HV = _k.length, Ib = (e) => typeof e == "string" ? parseFloat(e) : e, $b = (e) => typeof e == "number" || ee.test(e);
function UV(e, t, n, r, o, i) {
  o ? (e.opacity = De(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    GV(r)
  ), e.opacityExit = De(t.opacity !== void 0 ? t.opacity : 1, 0, YV(r))) : i && (e.opacity = De(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let a = 0; a < HV; a++) {
    const s = `border${_k[a]}Radius`;
    let l = Rb(t, s), u = Rb(n, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || $b(l) === $b(u) ? (e[s] = Math.max(De(Ib(l), Ib(u), r), 0), (qn.test(u) || qn.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = De(t.rotate || 0, n.rotate || 0, r));
}
function Rb(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const GV = Ok(0, 0.5, Av), YV = Ok(0.5, 0.95, je);
function Ok(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(Us(e, t, r));
}
function Ab(e, t) {
  e.min = t.min, e.max = t.max;
}
function an(e, t) {
  Ab(e.x, t.x), Ab(e.y, t.y);
}
function Db(e, t, n, r, o) {
  return e -= t, e = Pc(e, 1 / n, r), o !== void 0 && (e = Pc(e, 1 / o, r)), e;
}
function KV(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (qn.test(t) && (t = parseFloat(t), t = De(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = De(i.min, i.max, r);
  e === i && (s -= t), e.min = Db(e.min, t, n, s, o), e.max = Db(e.max, t, n, s, o);
}
function Fb(e, t, [n, r, o], i, a) {
  KV(e, t[n], t[r], t[o], t.scale, i, a);
}
const qV = ["x", "scaleX", "originX"], XV = ["y", "scaleY", "originY"];
function zb(e, t, n, r) {
  Fb(e.x, t, qV, n ? n.x : void 0, r ? r.x : void 0), Fb(e.y, t, XV, n ? n.y : void 0, r ? r.y : void 0);
}
function Lb(e) {
  return e.translate === 0 && e.scale === 1;
}
function Mk(e) {
  return Lb(e.x) && Lb(e.y);
}
function QV(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function Ik(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function Vb(e) {
  return Xt(e.x) / Xt(e.y);
}
class ZV {
  constructor() {
    this.members = [];
  }
  add(t) {
    Nv(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (jv(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0)
      return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Nb(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y;
  if ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x, s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (r += `scale(${a}, ${s})`), r || "none";
}
const JV = (e, t) => e.depth - t.depth;
class eN {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Nv(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    jv(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(JV), this.isDirty = !1, this.children.forEach(t);
  }
}
function tN(e, t) {
  const n = performance.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (xr(r), e(i - t));
  };
  return Pe.read(r, !0), () => xr(r);
}
function nN(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function rN(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function oN(e, t, n) {
  const r = Vt(e) ? e : ra(e);
  return r.start(Vv("", r, t, n)), r.animation;
}
const jb = ["", "X", "Y", "Z"], iN = { visibility: "hidden" }, Bb = 1e3;
let aN = 0;
const So = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function $k({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = aN++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, So.totalNodes = So.resolvedTargetDeltas = So.recalculatedProjection = 0, this.nodes.forEach(uN), this.nodes.forEach(hN), this.nodes.forEach(mN), this.nodes.forEach(cN), nN(So);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new eN());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Bv()), this.eventHandlers.get(a).add(s);
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    /**
     * Lifecycles
     */
    mount(a, s = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = rN(a), this.instance = a;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = tN(f, 250), Fu.hasAnimatedSinceResize && (Fu.hasAnimatedSinceResize = !1, this.nodes.forEach(Hb));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: v }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || c.getDefaultTransition() || SN, { onLayoutAnimationStart: S, onLayoutAnimationComplete: m } = c.getProps(), h = !this.targetLayout || !Ik(this.targetLayout, v) || p, b = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || b || f && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, b);
          const x = {
            ...Lv(g, "layout"),
            onPlay: S,
            onComplete: m
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x);
        } else
          f || Hb(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = v;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, xr(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(vN), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), a && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Wb);
        return;
      }
      this.isUpdating || this.nodes.forEach(fN), this.isUpdating = !1, this.nodes.forEach(pN), this.nodes.forEach(sN), this.nodes.forEach(lN), this.clearAllSnapshots();
      const s = performance.now();
      tt.delta = to(0, 1e3 / 60, s - tt.timestamp), tt.timestamp = s, tt.isProcessing = !0, Wf.update.process(tt), Wf.preRender.process(tt), Wf.render.process(tt), tt.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(dN), this.sharedNodes.forEach(gN);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Pe.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Pe.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Ke(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s && s.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0);
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (s = !1), s && (this.scroll = {
        animationId: this.root.animationId,
        phase: a,
        isRoot: r(this.instance),
        offset: n(this.instance)
      });
    }
    resetTransform() {
      if (!o)
        return;
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !Mk(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      a && (s || bo(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), xN(l), {
        animationId: this.root.animationId,
        measuredBox: s,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a)
        return Ke();
      const s = a.measureViewportBox(), { scroll: l } = this.root;
      return l && (Dr(s.x, l.offset.x), Dr(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = Ke();
      an(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            an(s, a);
            const { scroll: f } = this.root;
            f && (Dr(s.x, -f.offset.x), Dr(s.y, -f.offset.y));
          }
          Dr(s.x, c.offset.x), Dr(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = Ke();
      an(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s && c.options.layoutScroll && c.scroll && c !== c.root && Ei(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), bo(c.latestValues) && Ei(l, c.latestValues);
      }
      return bo(this.latestValues) && Ei(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = Ke();
      an(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !bo(u.latestValues))
          continue;
        Rh(u.latestValues) && u.updateSnapshot();
        const c = Ke(), d = u.measurePageBox();
        an(c, d), zb(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return bo(this.latestValues) && zb(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      this.targetDelta = a, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== tt.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (!(a || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (this.resolvedRelativeTargetAt = tt.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ke(), this.relativeTargetOrigin = Ke(), fs(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), an(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Ke(), this.targetWithTransforms = Ke()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), xV(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : an(this.target, this.layout.layoutBox), Ck(this.target, this.targetDelta)) : an(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ke(), this.relativeTargetOrigin = Ke(), fs(this.relativeTargetOrigin, this.target, p.target), an(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          So.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Rh(this.parent.latestValues) || wk(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var a;
      const s = this.getLead(), l = !!this.resumingFrom || this !== s;
      let u = !0;
      if ((this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === tt.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      an(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      MV(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: v } = s;
      if (!v) {
        this.projectionTransform && (this.projectionDelta = Ti(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = Ti(), this.projectionDeltaWithTransform = Ti());
      const g = this.projectionTransform;
      ds(this.projectionDelta, this.layoutCorrected, v, this.latestValues), this.projectionTransform = Nb(this.projectionDelta, this.treeScale), (this.projectionTransform !== g || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", v)), So.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if (this.options.scheduleRender && this.options.scheduleRender(), a) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = Ti();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = Ke(), p = l ? l.source : void 0, v = this.layout ? this.layout.source : void 0, g = p !== v, S = this.getStack(), m = !S || S.members.length <= 1, h = !!(g && !m && this.options.crossfade === !0 && !this.path.some(bN));
      this.animationProgress = 0;
      let b;
      this.mixTargetDelta = (x) => {
        const C = x / 1e3;
        Ub(d.x, a.x, C), Ub(d.y, a.y, C), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (fs(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), yN(this.relativeTarget, this.relativeTargetOrigin, f, C), b && QV(this.relativeTarget, b) && (this.isProjectionDirty = !1), b || (b = Ke()), an(b, this.relativeTarget)), g && (this.animationValues = c, UV(c, u, this.latestValues, C, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (xr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Pe.update(() => {
        Fu.hasAnimatedSinceResize = !0, this.currentAnimation = oN(0, Bb, {
          ...a,
          onUpdate: (s) => {
            this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
          },
          onComplete: () => {
            a.onComplete && a.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const a = this.getStack();
      a && a.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Bb), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = a;
      if (!(!s || !l || !u)) {
        if (this !== a && this.layout && u && Rk(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Ke();
          const d = Xt(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = Xt(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        an(s, l), Ei(s, c), ds(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new ZV()), this.sharedNodes.get(a).add(s);
      const u = s.options.initialPromotionConfig;
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(s) : void 0
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) || this : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? (a = this.getStack()) === null || a === void 0 ? void 0 : a.prevLead : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a)
        return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), a && (this.projectionDelta = void 0, this.needsReset = !0), s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: a } = this.options;
      if (!a)
        return;
      let s = !1;
      const { latestValues: l } = a;
      if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s)
        return;
      const u = {};
      for (let c = 0; c < jb.length; c++) {
        const d = "rotate" + jb[c];
        l[d] && (u[d] = l[d], a.setStaticValue(d, 0));
      }
      a.render();
      for (const c in u)
        a.setStaticValue(c, u[c]);
      a.scheduleRender();
    }
    getProjectionStyles(a) {
      var s, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return iN;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Du(a == null ? void 0 : a.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const g = {};
        return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = Du(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !bo(this.latestValues) && (g.transform = c ? c({}, "") : "none", this.hasProjected = !1), g;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = Nb(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: p, y: v } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${v.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const g in yc) {
        if (f[g] === void 0)
          continue;
        const { correct: S, applyTo: m } = yc[g], h = u.transform === "none" ? f[g] : S(f[g], d);
        if (m) {
          const b = m.length;
          for (let x = 0; x < b; x++)
            u[m[x]] = h;
        } else
          u[g] = h;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? Du(a == null ? void 0 : a.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(Wb), this.root.sharedNodes.clear();
    }
  };
}
function sN(e) {
  e.updateLayout();
}
function lN(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, a = n.source !== e.layout.source;
    i === "size" ? Ln((d) => {
      const f = a ? n.measuredBox[d] : n.layoutBox[d], p = Xt(f);
      f.min = r[d].min, f.max = f.min + p;
    }) : Rk(i, n.layoutBox, r) && Ln((d) => {
      const f = a ? n.measuredBox[d] : n.layoutBox[d], p = Xt(r[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = Ti();
    ds(s, r, n.layoutBox);
    const l = Ti();
    a ? ds(l, e.applyTransform(o, !0), n.measuredBox) : ds(l, r, n.layoutBox);
    const u = !Mk(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const v = Ke();
          fs(v, n.layoutBox, f.layoutBox);
          const g = Ke();
          fs(g, r, p.layoutBox), Ik(v, g) || (c = !0), d.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = v, e.relativeParent = d);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function uN(e) {
  So.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function cN(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function dN(e) {
  e.clearSnapshot();
}
function Wb(e) {
  e.clearMeasurements();
}
function fN(e) {
  e.isLayoutDirty = !1;
}
function pN(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Hb(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function hN(e) {
  e.resolveTargetDelta();
}
function mN(e) {
  e.calcProjection();
}
function vN(e) {
  e.resetRotation();
}
function gN(e) {
  e.removeLeadSnapshot();
}
function Ub(e, t, n) {
  e.translate = De(t.translate, 0, n), e.scale = De(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Gb(e, t, n, r) {
  e.min = De(t.min, n.min, r), e.max = De(t.max, n.max, r);
}
function yN(e, t, n, r) {
  Gb(e.x, t.x, n.x, r), Gb(e.y, t.y, n.y, r);
}
function bN(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const SN = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Yb = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), Kb = Yb("applewebkit/") && !Yb("chrome/") ? Math.round : je;
function qb(e) {
  e.min = Kb(e.min), e.max = Kb(e.max);
}
function xN(e) {
  qb(e.x), qb(e.y);
}
function Rk(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Ih(Vb(t), Vb(n), 0.2);
}
const wN = $k({
  attachResizeListener: (e, t) => cr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), ep = {
  current: void 0
}, Ak = $k({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!ep.current) {
      const e = new wN({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), ep.current = e;
    }
    return ep.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), CN = {
  pan: {
    Feature: LV
  },
  drag: {
    Feature: zV,
    ProjectionNode: Ak,
    MeasureLayout: Ek
  }
}, kN = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function PN(e) {
  const t = kN.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
}
function Dh(e, t, n = 1) {
  const [r, o] = PN(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return mk(a) ? parseFloat(a) : a;
  } else
    return kh(o) ? Dh(o, t, n + 1) : o;
}
function TN(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element))
    return { target: t, transitionEnd: n };
  n && (n = { ...n }), e.values.forEach((o) => {
    const i = o.get();
    if (!kh(i))
      return;
    const a = Dh(i, r);
    a && o.set(a);
  });
  for (const o in t) {
    const i = t[o];
    if (!kh(i))
      continue;
    const a = Dh(i, r);
    a && (t[o] = a, n || (n = {}), n[o] === void 0 && (n[o] = i));
  }
  return { target: t, transitionEnd: n };
}
const EN = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), Dk = (e) => EN.has(e), _N = (e) => Object.keys(e).some(Dk), Xb = (e) => e === Go || e === ee, Qb = (e, t) => parseFloat(e.split(", ")[t]), Zb = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/);
  if (o)
    return Qb(o[1], t);
  {
    const i = r.match(/^matrix\((.+)\)$/);
    return i ? Qb(i[1], e) : 0;
  }
}, ON = /* @__PURE__ */ new Set(["x", "y", "z"]), MN = sl.filter((e) => !ON.has(e));
function IN(e) {
  const t = [];
  return MN.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const oa = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Zb(4, 13),
  y: Zb(5, 14)
};
oa.translateX = oa.x;
oa.translateY = oa.y;
const $N = (e, t, n) => {
  const r = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), n.forEach((u) => {
    s[u] = oa[u](r, i);
  }), t.render();
  const l = t.measureViewportBox();
  return n.forEach((u) => {
    const c = t.getValue(u);
    c && c.jump(s[u]), e[u] = oa[u](l, i);
  }), e;
}, RN = (e, t, n = {}, r = {}) => {
  t = { ...t }, r = { ...r };
  const o = Object.keys(t).filter(Dk);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const u = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let c = n[l], d = $a(c);
    const f = t[l];
    let p;
    if (Sc(f)) {
      const v = f.length, g = f[0] === null ? 1 : 0;
      c = f[g], d = $a(c);
      for (let S = g; S < v && f[S] !== null; S++)
        p ? Rv($a(f[S]) === p) : p = $a(f[S]);
    } else
      p = $a(f);
    if (d !== p)
      if (Xb(d) && Xb(p)) {
        const v = u.get();
        typeof v == "string" && u.set(parseFloat(v)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === ee && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = d.transform(f) : (a || (i = IN(e), a = !0), s.push(l), r[l] = r[l] !== void 0 ? r[l] : t[l], u.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, u = $N(t, e, s);
    return i.length && i.forEach(([c, d]) => {
      e.getValue(c).set(d);
    }), e.render(), Pd && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: r };
  } else
    return { target: t, transitionEnd: r };
};
function AN(e, t, n, r) {
  return _N(t) ? RN(e, t, n, r) : { target: t, transitionEnd: r };
}
const DN = (e, t, n, r) => {
  const o = TN(e, t, r);
  return t = o.target, r = o.transitionEnd, AN(e, t, n, r);
}, Fh = { current: null }, Fk = { current: !1 };
function FN() {
  if (Fk.current = !0, !!Pd)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Fh.current = e.matches;
      e.addListener(t), t();
    } else
      Fh.current = !1;
}
function zN(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o], a = n[o];
    if (Vt(i))
      e.addValue(o, i), kc(r) && r.add(o);
    else if (Vt(a))
      e.addValue(o, ra(i, { owner: e })), kc(r) && r.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, ra(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in n)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const Jb = /* @__PURE__ */ new WeakMap(), zk = Object.keys(Hs), LN = zk.length, e1 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], VN = kv.length;
class NN {
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => Pe.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = n.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = Ed(n), this.isVariantNode = SC(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && Vt(f) && (f.set(s[d], !1), kc(u) && u.add(d));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    this.current = t, Jb.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Fk.current || FN(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Fh.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Jb.delete(this.current), this.projection && this.projection.unmount(), xr(this.notifyUpdate), xr(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Uo.has(t), o = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && Pe.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
    }), i = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, o, i) {
    let a, s;
    for (let l = 0; l < LN; l++) {
      const u = zk[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: p } = Hs[u];
      f && (a = f), c(n) && (!this.features[u] && d && (this.features[u] = new d(this)), p && (s = p));
    }
    if (!this.projection && a) {
      this.projection = new a(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: p } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || d && ki(d),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        layoutScroll: f,
        layoutRoot: p
      });
    }
    return s;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), n.isMounted = !0);
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ke();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < e1.length; r++) {
      const o = e1[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = zN(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(t = !1) {
    if (t)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
    }
    const n = {};
    for (let r = 0; r < VN; r++) {
      const o = kv[r], i = this.props[o];
      (Ws(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    n !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, n)), this.values.set(t, n), this.latestValues[t] = n.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = ra(n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props, o = typeof r == "string" || typeof r == "object" ? (n = $v(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
    if (r && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Vt(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Bv()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Lk extends NN {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance({ transition: t, transitionEnd: n, ...r }, { transformValues: o }, i) {
    let a = rV(r, t || {}, this);
    if (o && (n && (n = o(n)), r && (r = o(r)), a && (a = o(a))), i) {
      tV(this, r, a);
      const s = DN(this, r, a, n);
      n = s.transitionEnd, r = s.target;
    }
    return {
      transition: t,
      transitionEnd: n,
      ...r
    };
  }
}
function jN(e) {
  return window.getComputedStyle(e);
}
class BN extends Lk {
  readValueFromInstance(t, n) {
    if (Uo.has(n)) {
      const r = zv(n);
      return r && r.default || 0;
    } else {
      const r = jN(t), o = (kC(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return kk(t, n);
  }
  build(t, n, r, o) {
    Ev(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Iv(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Vt(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
  renderInstance(t, n, r, o) {
    MC(t, n, r, o);
  }
}
class WN extends Lk {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Uo.has(n)) {
      const r = zv(n);
      return r && r.default || 0;
    }
    return n = IC.has(n) ? n : wv(n), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Ke();
  }
  scrapeMotionValuesFromProps(t, n) {
    return RC(t, n);
  }
  build(t, n, r, o) {
    Ov(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    $C(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = Mv(t.tagName), super.mount(t);
  }
}
const HN = (e, t) => Tv(e) ? new WN(t, { enableHardwareAcceleration: !1 }) : new BN(t, { enableHardwareAcceleration: !0 }), UN = {
  layout: {
    ProjectionNode: Ak,
    MeasureLayout: Ek
  }
}, GN = {
  ...gV,
  ...V4,
  ...CN,
  ...UN
}, dl = /* @__PURE__ */ KL((e, t) => T4(e, t, GN, HN));
function Vk() {
  const e = y.useRef(!1);
  return xv(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function YN() {
  const e = Vk(), [t, n] = y.useState(0), r = y.useCallback(() => {
    e.current && n(t + 1);
  }, [t]);
  return [y.useCallback(() => Pe.postRender(r), [r]), t];
}
class KN extends y.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function qN({ children: e, isPresent: t }) {
  const n = y.useId(), r = y.useRef(null), o = y.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return y.useInsertionEffect(() => {
    const { width: i, height: a, top: s, left: l } = o.current;
    if (t || !r.current || !i || !a)
      return;
    r.current.dataset.motionPopId = n;
    const u = document.createElement("style");
    return document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `), () => {
      document.head.removeChild(u);
    };
  }, [t]), y.createElement(KN, { isPresent: t, childRef: r, sizeRef: o }, y.cloneElement(e, { ref: r }));
}
const tp = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = AC(XN), l = y.useId(), u = y.useMemo(
    () => ({
      id: l,
      initial: t,
      isPresent: n,
      custom: o,
      onExitComplete: (c) => {
        s.set(c, !0);
        for (const d of s.values())
          if (!d)
            return;
        r && r();
      },
      register: (c) => (s.set(c, !1), () => s.delete(c))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    i ? void 0 : [n]
  );
  return y.useMemo(() => {
    s.forEach((c, d) => s.set(d, !1));
  }, [n]), y.useEffect(() => {
    !n && !s.size && r && r();
  }, [n]), a === "popLayout" && (e = y.createElement(qN, { isPresent: n }, e)), y.createElement(al.Provider, { value: u }, e);
};
function XN() {
  return /* @__PURE__ */ new Map();
}
function QN(e) {
  return y.useEffect(() => () => e(), []);
}
const xo = (e) => e.key || "";
function ZN(e, t) {
  e.forEach((n) => {
    const r = xo(n);
    t.set(r, n);
  });
}
function JN(e) {
  const t = [];
  return y.Children.forEach(e, (n) => {
    y.isValidElement(n) && t.push(n);
  }), t;
}
const Id = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  const s = y.useContext(Pv).forceRender || YN()[0], l = Vk(), u = JN(e);
  let c = u;
  const d = y.useRef(/* @__PURE__ */ new Map()).current, f = y.useRef(c), p = y.useRef(/* @__PURE__ */ new Map()).current, v = y.useRef(!0);
  if (xv(() => {
    v.current = !1, ZN(u, p), f.current = c;
  }), QN(() => {
    v.current = !0, p.clear(), d.clear();
  }), v.current)
    return y.createElement(y.Fragment, null, c.map((h) => y.createElement(tp, { key: xo(h), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: i, mode: a }, h)));
  c = [...c];
  const g = f.current.map(xo), S = u.map(xo), m = g.length;
  for (let h = 0; h < m; h++) {
    const b = g[h];
    S.indexOf(b) === -1 && !d.has(b) && d.set(b, void 0);
  }
  return a === "wait" && d.size && (c = []), d.forEach((h, b) => {
    if (S.indexOf(b) !== -1)
      return;
    const x = p.get(b);
    if (!x)
      return;
    const C = g.indexOf(b);
    let k = h;
    if (!k) {
      const P = () => {
        d.delete(b);
        const T = Array.from(p.keys()).filter((M) => !S.includes(M));
        if (T.forEach((M) => p.delete(M)), f.current = u.filter((M) => {
          const $ = xo(M);
          return (
            // filter out the node exiting
            $ === b || // filter out the leftover children
            T.includes($)
          );
        }), !d.size) {
          if (l.current === !1)
            return;
          s(), r && r();
        }
      };
      k = y.createElement(tp, { key: xo(x), isPresent: !1, onExitComplete: P, custom: t, presenceAffectsLayout: i, mode: a }, x), d.set(b, k);
    }
    c.splice(C, 0, k);
  }), c = c.map((h) => {
    const b = h.key;
    return d.has(b) ? h : y.createElement(tp, { key: xo(h), isPresent: !0, presenceAffectsLayout: i, mode: a }, h);
  }), y.createElement(y.Fragment, null, d.size ? c : c.map((h) => y.cloneElement(h)));
};
var ej = {
  initial: (e) => {
    const { position: t } = e, n = ["top", "bottom"].includes(t) ? "y" : "x";
    let r = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
    return t === "bottom" && (r = 1), {
      opacity: 0,
      [n]: r * 24
    };
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
}, Nk = y.memo((e) => {
  const {
    id: t,
    message: n,
    onCloseComplete: r,
    onRequestRemove: o,
    requestClose: i = !1,
    position: a = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: u = ej,
    toastSpacing: c = "0.5rem"
  } = e, [d, f] = y.useState(s), p = VV();
  Bs(() => {
    p || r == null || r();
  }, [p]), Bs(() => {
    f(s);
  }, [s]);
  const v = () => f(null), g = () => f(s), S = () => {
    p && o();
  };
  y.useEffect(() => {
    p && i && o();
  }, [p, i, o]), LL(S, d);
  const m = y.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: c,
      ...l
    }),
    [l, c]
  ), h = y.useMemo(() => FL(a), [a]);
  return /* @__PURE__ */ E.jsx(
    dl.div,
    {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: v,
      onHoverEnd: g,
      custom: { position: a },
      style: h,
      children: /* @__PURE__ */ E.jsx(
        oe.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: m,
          children: Hn(n, { id: t, onClose: S })
        }
      )
    }
  );
});
Nk.displayName = "ToastComponent";
var t1 = {
  path: /* @__PURE__ */ E.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ E.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ E.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ E.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, lo = Ee((e, t) => {
  const {
    as: n,
    viewBox: r,
    color: o = "currentColor",
    focusable: i = !1,
    children: a,
    className: s,
    __css: l,
    ...u
  } = e, c = Se("chakra-icon", s), d = Ho("Icon", e), f = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: o,
    ...l,
    ...d
  }, p = {
    ref: t,
    focusable: i,
    className: c,
    __css: f
  }, v = r ?? t1.viewBox;
  if (n && typeof n != "string")
    return /* @__PURE__ */ E.jsx(oe.svg, { as: n, ...p, ...u });
  const g = a ?? t1.path;
  return /* @__PURE__ */ E.jsx(oe.svg, { verticalAlign: "middle", viewBox: v, ...p, ...u, children: g });
});
lo.displayName = "Icon";
function tj(e) {
  return /* @__PURE__ */ E.jsx(lo, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ E.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function nj(e) {
  return /* @__PURE__ */ E.jsx(lo, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ E.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function n1(e) {
  return /* @__PURE__ */ E.jsx(lo, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ E.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var rj = Fw({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), $d = Ee((e, t) => {
  const n = Ho("Spinner", e), {
    label: r = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: a = "transparent",
    className: s,
    ...l
  } = Zn(e), u = Se("chakra-spinner", s), c = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: a,
    borderLeftColor: a,
    animation: `${rj} ${i} linear infinite`,
    ...n
  };
  return /* @__PURE__ */ E.jsx(
    oe.div,
    {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: r && /* @__PURE__ */ E.jsx(oe.span, { srOnly: !0, children: r })
    }
  );
});
$d.displayName = "Spinner";
var [oj, Wv] = St({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [ij, Hv] = St({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), jk = {
  info: { icon: nj, colorScheme: "blue" },
  warning: { icon: n1, colorScheme: "orange" },
  success: { icon: tj, colorScheme: "green" },
  error: { icon: n1, colorScheme: "red" },
  loading: { icon: $d, colorScheme: "blue" }
};
function aj(e) {
  return jk[e].colorScheme;
}
function sj(e) {
  return jk[e].icon;
}
var Bk = Ee(
  function(t, n) {
    const r = Hv(), { status: o } = Wv(), i = {
      display: "inline",
      ...r.description
    };
    return /* @__PURE__ */ E.jsx(
      oe.div,
      {
        ref: n,
        "data-status": o,
        ...t,
        className: Se("chakra-alert__desc", t.className),
        __css: i
      }
    );
  }
);
Bk.displayName = "AlertDescription";
function Wk(e) {
  const { status: t } = Wv(), n = sj(t), r = Hv(), o = t === "loading" ? r.spinner : r.icon;
  return /* @__PURE__ */ E.jsx(
    oe.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: Se("chakra-alert__icon", e.className),
      __css: o,
      children: e.children || /* @__PURE__ */ E.jsx(n, { h: "100%", w: "100%" })
    }
  );
}
Wk.displayName = "AlertIcon";
var Hk = Ee(
  function(t, n) {
    const r = Hv(), { status: o } = Wv();
    return /* @__PURE__ */ E.jsx(
      oe.div,
      {
        ref: n,
        "data-status": o,
        ...t,
        className: Se("chakra-alert__title", t.className),
        __css: r.title
      }
    );
  }
);
Hk.displayName = "AlertTitle";
var Uk = Ee(function(t, n) {
  var r;
  const { status: o = "info", addRole: i = !0, ...a } = Zn(t), s = (r = t.colorScheme) != null ? r : aj(o), l = Lt("Alert", { ...t, colorScheme: s }), u = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ E.jsx(oj, { value: { status: o }, children: /* @__PURE__ */ E.jsx(ij, { value: l, children: /* @__PURE__ */ E.jsx(
    oe.div,
    {
      "data-status": o,
      role: i ? "alert" : void 0,
      ref: n,
      ...a,
      className: Se("chakra-alert", t.className),
      __css: u
    }
  ) }) });
});
Uk.displayName = "Alert";
function lj(e) {
  return /* @__PURE__ */ E.jsx(lo, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ E.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var Rd = Ee(
  function(t, n) {
    const r = Ho("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = Zn(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ E.jsx(
      oe.button,
      {
        type: "button",
        "aria-label": "Close",
        ref: n,
        disabled: i,
        __css: {
          ...l,
          ...r,
          ...a
        },
        ...s,
        children: o || /* @__PURE__ */ E.jsx(lj, { width: "1em", height: "1em" })
      }
    );
  }
);
Rd.displayName = "CloseButton";
var uj = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, ps = cj(uj);
function cj(e) {
  let t = e;
  const n = /* @__PURE__ */ new Set(), r = (o) => {
    t = o(t), n.forEach((i) => i());
  };
  return {
    getState: () => t,
    subscribe: (o) => (n.add(o), () => {
      r(() => e), n.delete(o);
    }),
    /**
     * Delete a toast record at its position
     */
    removeToast: (o, i) => {
      r((a) => ({
        ...a,
        // id may be string or number
        // eslint-disable-next-line eqeqeq
        [i]: a[i].filter((s) => s.id != o)
      }));
    },
    notify: (o, i) => {
      const a = dj(o, i), { position: s, id: l } = a;
      return r((u) => {
        var c, d;
        const p = s.includes("top") ? [a, ...(c = u[s]) != null ? c : []] : [...(d = u[s]) != null ? d : [], a];
        return {
          ...u,
          [s]: p
        };
      }), l;
    },
    update: (o, i) => {
      o && r((a) => {
        const s = { ...a }, { position: l, index: u } = Xy(s, o);
        return l && u !== -1 && (s[l][u] = {
          ...s[l][u],
          ...i,
          message: pj(i)
        }), s;
      });
    },
    closeAll: ({ positions: o } = {}) => {
      r((i) => (o ?? [
        "bottom",
        "bottom-right",
        "bottom-left",
        "top",
        "top-left",
        "top-right"
      ]).reduce(
        (l, u) => (l[u] = i[u].map((c) => ({
          ...c,
          requestClose: !0
        })), l),
        { ...i }
      ));
    },
    close: (o) => {
      r((i) => {
        const a = vC(i, o);
        return a ? {
          ...i,
          [a]: i[a].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : i;
      });
    },
    isActive: (o) => !!Xy(ps.getState(), o).position
  };
}
var r1 = 0;
function dj(e, t = {}) {
  var n, r;
  r1 += 1;
  const o = (n = t.id) != null ? n : r1, i = (r = t.position) != null ? r : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => ps.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var fj = (e) => {
  const {
    status: t,
    variant: n = "solid",
    id: r,
    title: o,
    isClosable: i,
    onClose: a,
    description: s,
    colorScheme: l,
    icon: u
  } = e, c = r ? {
    root: `toast-${r}`,
    title: `toast-${r}-title`,
    description: `toast-${r}-description`
  } : void 0;
  return /* @__PURE__ */ E.jsxs(
    Uk,
    {
      addRole: !1,
      status: t,
      variant: n,
      id: c == null ? void 0 : c.root,
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "lg",
      paddingEnd: 8,
      textAlign: "start",
      width: "auto",
      colorScheme: l,
      children: [
        /* @__PURE__ */ E.jsx(Wk, { children: u }),
        /* @__PURE__ */ E.jsxs(oe.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ E.jsx(Hk, { id: c == null ? void 0 : c.title, children: o }),
          s && /* @__PURE__ */ E.jsx(Bk, { id: c == null ? void 0 : c.description, display: "block", children: s })
        ] }),
        i && /* @__PURE__ */ E.jsx(
          Rd,
          {
            size: "sm",
            onClick: a,
            position: "absolute",
            insetEnd: 1,
            top: 1
          }
        )
      ]
    }
  );
};
function pj(e = {}) {
  const { render: t, toastComponent: n = fj } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ E.jsx(n, { ...o, ...e });
}
var [hj, xG] = St({
  name: "ToastOptionsContext",
  strict: !1
}), mj = (e) => {
  const t = y.useSyncExternalStore(
    ps.subscribe,
    ps.getState,
    ps.getState
  ), {
    motionVariants: n,
    component: r = Nk,
    portalProps: o
  } = e, a = Object.keys(t).map((s) => {
    const l = t[s];
    return /* @__PURE__ */ E.jsx(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        "aria-label": `Notifications-${s}`,
        id: `chakra-toast-manager-${s}`,
        style: zL(s),
        children: /* @__PURE__ */ E.jsx(Id, { initial: !1, children: l.map((u) => /* @__PURE__ */ E.jsx(
          r,
          {
            motionVariants: n,
            ...u
          },
          u.id
        )) })
      },
      s
    );
  });
  return /* @__PURE__ */ E.jsx(ol, { ...o, children: a });
}, vj = (e) => function({
  children: n,
  theme: r = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ E.jsxs(AL, { theme: r, ...i, children: [
    /* @__PURE__ */ E.jsx(hj, { value: o == null ? void 0 : o.defaultOptions, children: n }),
    /* @__PURE__ */ E.jsx(mj, { ...o })
  ] });
}, gj = vj(lC), yj = Object.defineProperty, bj = (e, t, n) => t in e ? yj(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Le = (e, t, n) => (bj(e, typeof t != "symbol" ? t + "" : t, n), n);
function o1(e) {
  return e.sort((t, n) => {
    const r = t.compareDocumentPosition(n);
    if (r & Node.DOCUMENT_POSITION_FOLLOWING || r & Node.DOCUMENT_POSITION_CONTAINED_BY)
      return -1;
    if (r & Node.DOCUMENT_POSITION_PRECEDING || r & Node.DOCUMENT_POSITION_CONTAINS)
      return 1;
    if (r & Node.DOCUMENT_POSITION_DISCONNECTED || r & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
      throw Error("Cannot sort the given nodes.");
    return 0;
  });
}
var Sj = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function i1(e, t, n) {
  let r = e + 1;
  return n && r >= t && (r = 0), r;
}
function a1(e, t, n) {
  let r = e - 1;
  return n && r < 0 && (r = t), r;
}
var zh = typeof window < "u" ? y.useLayoutEffect : y.useEffect, Tc = (e) => e, xj = class {
  constructor() {
    Le(this, "descendants", /* @__PURE__ */ new Map()), Le(this, "register", (e) => {
      if (e != null)
        return Sj(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), Le(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = o1(Array.from(this.descendants.keys()));
      this.assignIndex(t);
    }), Le(this, "destroy", () => {
      this.descendants.clear();
    }), Le(this, "assignIndex", (e) => {
      this.descendants.forEach((t) => {
        const n = e.indexOf(t.node);
        t.index = n, t.node.dataset.index = t.index.toString();
      });
    }), Le(this, "count", () => this.descendants.size), Le(this, "enabledCount", () => this.enabledValues().length), Le(this, "values", () => Array.from(this.descendants.values()).sort((t, n) => t.index - n.index)), Le(this, "enabledValues", () => this.values().filter((e) => !e.disabled)), Le(this, "item", (e) => {
      if (this.count() !== 0)
        return this.values()[e];
    }), Le(this, "enabledItem", (e) => {
      if (this.enabledCount() !== 0)
        return this.enabledValues()[e];
    }), Le(this, "first", () => this.item(0)), Le(this, "firstEnabled", () => this.enabledItem(0)), Le(this, "last", () => this.item(this.descendants.size - 1)), Le(this, "lastEnabled", () => {
      const e = this.enabledValues().length - 1;
      return this.enabledItem(e);
    }), Le(this, "indexOf", (e) => {
      var t, n;
      return e && (n = (t = this.descendants.get(e)) == null ? void 0 : t.index) != null ? n : -1;
    }), Le(this, "enabledIndexOf", (e) => e == null ? -1 : this.enabledValues().findIndex((t) => t.node.isSameNode(e))), Le(this, "next", (e, t = !0) => {
      const n = i1(e, this.count(), t);
      return this.item(n);
    }), Le(this, "nextEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = i1(
        r,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), Le(this, "prev", (e, t = !0) => {
      const n = a1(e, this.count() - 1, t);
      return this.item(n);
    }), Le(this, "prevEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = a1(
        r,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), Le(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const n = Array.from(this.descendants.keys()).concat(e), r = o1(n);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(r);
    });
  }
};
function wj(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function Ht(...e) {
  return (t) => {
    e.forEach((n) => {
      wj(n, t);
    });
  };
}
function Cj(...e) {
  return y.useMemo(() => Ht(...e), e);
}
function kj() {
  const e = y.useRef(new xj());
  return zh(() => () => e.current.destroy()), e.current;
}
var [Pj, Gk] = St({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function Tj(e) {
  const t = Gk(), [n, r] = y.useState(-1), o = y.useRef(null);
  zh(() => () => {
    o.current && t.unregister(o.current);
  }, []), zh(() => {
    if (!o.current)
      return;
    const a = Number(o.current.dataset.index);
    n != a && !Number.isNaN(a) && r(a);
  });
  const i = Tc(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: n,
    enabledIndex: t.enabledIndexOf(o.current),
    register: Ht(i, o)
  };
}
function Ej() {
  return [
    Tc(Pj),
    () => Tc(Gk()),
    () => kj(),
    (o) => Tj(o)
  ];
}
var Lh = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, Aa = {
  scale: {
    enter: { scale: 1 },
    exit: { scale: 0.95 }
  },
  fade: {
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  },
  pushLeft: {
    enter: { x: "100%" },
    exit: { x: "-30%" }
  },
  pushRight: {
    enter: { x: "-100%" },
    exit: { x: "30%" }
  },
  pushUp: {
    enter: { y: "100%" },
    exit: { y: "-30%" }
  },
  pushDown: {
    enter: { y: "-100%" },
    exit: { y: "30%" }
  },
  slideLeft: {
    position: { left: 0, top: 0, bottom: 0, width: "100%" },
    enter: { x: 0, y: 0 },
    exit: { x: "-100%", y: 0 }
  },
  slideRight: {
    position: { right: 0, top: 0, bottom: 0, width: "100%" },
    enter: { x: 0, y: 0 },
    exit: { x: "100%", y: 0 }
  },
  slideUp: {
    position: { top: 0, left: 0, right: 0, maxWidth: "100vw" },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "-100%" }
  },
  slideDown: {
    position: { bottom: 0, left: 0, right: 0, maxWidth: "100vw" },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "100%" }
  }
};
function Vh(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return Aa.slideRight;
    case "left":
      return Aa.slideLeft;
    case "bottom":
      return Aa.slideDown;
    case "top":
      return Aa.slideUp;
    default:
      return Aa.slideRight;
  }
}
var s1 = {
  enter: {
    duration: 0.2,
    ease: Lh.easeOut
  },
  exit: {
    duration: 0.1,
    ease: Lh.easeIn
  }
}, Ec = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, _j = {
  enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 1,
      transition: (r = e == null ? void 0 : e.enter) != null ? r : Ec.enter(s1.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 0,
      transition: (r = e == null ? void 0 : e.exit) != null ? r : Ec.exit(s1.exit, n),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, Yk = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: _j
}, Oj = y.forwardRef(function(t, n) {
  const {
    unmountOnExit: r,
    in: o,
    className: i,
    transition: a,
    transitionEnd: s,
    delay: l,
    ...u
  } = t, c = o || r ? "enter" : "exit", d = r ? o && r : !0, f = { transition: a, transitionEnd: s, delay: l };
  return /* @__PURE__ */ E.jsx(Id, { custom: f, children: d && /* @__PURE__ */ E.jsx(
    dl.div,
    {
      ref: n,
      className: Se("chakra-fade", i),
      custom: f,
      ...Yk,
      animate: c,
      ...u
    }
  ) });
});
Oj.displayName = "Fade";
var l1 = {
  exit: {
    duration: 0.15,
    ease: Lh.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, Mj = {
  exit: ({ direction: e, transition: t, transitionEnd: n, delay: r }) => {
    var o;
    const { exit: i } = Vh({ direction: e });
    return {
      ...i,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : Ec.exit(l1.exit, r),
      transitionEnd: n == null ? void 0 : n.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: n, delay: r }) => {
    var o;
    const { enter: i } = Vh({ direction: e });
    return {
      ...i,
      transition: (o = n == null ? void 0 : n.enter) != null ? o : Ec.enter(l1.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, Kk = y.forwardRef(function(t, n) {
  const {
    direction: r = "right",
    style: o,
    unmountOnExit: i,
    in: a,
    className: s,
    transition: l,
    transitionEnd: u,
    delay: c,
    motionProps: d,
    ...f
  } = t, p = Vh({ direction: r }), v = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), g = i ? a && i : !0, S = a || i ? "enter" : "exit", m = { transitionEnd: u, transition: l, direction: r, delay: c };
  return /* @__PURE__ */ E.jsx(Id, { custom: m, children: g && /* @__PURE__ */ E.jsx(
    dl.div,
    {
      ...f,
      ref: n,
      initial: "exit",
      className: Se("chakra-slide", s),
      animate: S,
      exit: "exit",
      custom: m,
      variants: Mj,
      style: v,
      ...d
    }
  ) });
});
Kk.displayName = "Slide";
function Ij(e) {
  return y.Children.toArray(e).filter(
    (t) => y.isValidElement(t)
  );
}
var [wG, $j] = St({
  strict: !1,
  name: "ButtonGroupContext"
});
function Rj(e) {
  const [t, n] = y.useState(!e);
  return { ref: y.useCallback((i) => {
    i && n(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function Nh(e) {
  const { children: t, className: n, ...r } = e, o = y.isValidElement(t) ? y.cloneElement(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, i = Se("chakra-button__icon", n);
  return /* @__PURE__ */ E.jsx(
    oe.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...r,
      className: i,
      children: o
    }
  );
}
Nh.displayName = "ButtonIcon";
function jh(e) {
  const {
    label: t,
    placement: n,
    spacing: r = "0.5rem",
    children: o = /* @__PURE__ */ E.jsx($d, { color: "currentColor", width: "1em", height: "1em" }),
    className: i,
    __css: a,
    ...s
  } = e, l = Se("chakra-button__spinner", i), u = n === "start" ? "marginEnd" : "marginStart", c = y.useMemo(
    () => ({
      display: "flex",
      alignItems: "center",
      position: t ? "relative" : "absolute",
      [u]: t ? r : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...a
    }),
    [a, t, u, r]
  );
  return /* @__PURE__ */ E.jsx(oe.div, { className: l, ...s, __css: c, children: o });
}
jh.displayName = "ButtonSpinner";
var Zr = Ee((e, t) => {
  const n = $j(), r = Ho("Button", { ...n, ...e }), {
    isDisabled: o = n == null ? void 0 : n.isDisabled,
    isLoading: i,
    isActive: a,
    children: s,
    leftIcon: l,
    rightIcon: u,
    loadingText: c,
    iconSpacing: d = "0.5rem",
    type: f,
    spinner: p,
    spinnerPlacement: v = "start",
    className: g,
    as: S,
    ...m
  } = Zn(e), h = y.useMemo(() => {
    const k = { ...r == null ? void 0 : r._focus, zIndex: 1 };
    return {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      ...r,
      ...!!n && { _focus: k }
    };
  }, [r, n]), { ref: b, type: x } = Rj(S), C = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ E.jsxs(
    oe.button,
    {
      ref: Cj(t, b),
      as: S,
      type: f ?? x,
      "data-active": zn(a),
      "data-loading": zn(i),
      __css: h,
      className: Se("chakra-button", g),
      ...m,
      disabled: o || i,
      children: [
        i && v === "start" && /* @__PURE__ */ E.jsx(
          jh,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        i ? c || /* @__PURE__ */ E.jsx(oe.span, { opacity: 0, children: /* @__PURE__ */ E.jsx(u1, { ...C }) }) : /* @__PURE__ */ E.jsx(u1, { ...C }),
        i && v === "end" && /* @__PURE__ */ E.jsx(
          jh,
          {
            className: "chakra-button__spinner--end",
            label: c,
            placement: "end",
            spacing: d,
            children: p
          }
        )
      ]
    }
  );
});
Zr.displayName = "Button";
function u1(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: o } = e;
  return /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    t && /* @__PURE__ */ E.jsx(Nh, { marginEnd: o, children: t }),
    r,
    n && /* @__PURE__ */ E.jsx(Nh, { marginStart: o, children: n })
  ] });
}
var [Aj, Dj] = St({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [Fj, qk] = St({
  strict: !1,
  name: "FormControlContext"
});
function zj(e) {
  const {
    id: t,
    isRequired: n,
    isInvalid: r,
    isDisabled: o,
    isReadOnly: i,
    ...a
  } = e, s = y.useId(), l = t || `field-${s}`, u = `${l}-label`, c = `${l}-feedback`, d = `${l}-helptext`, [f, p] = y.useState(!1), [v, g] = y.useState(!1), [S, m] = y.useState(!1), h = y.useCallback(
    (P = {}, T = null) => ({
      id: d,
      ...P,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: Ht(T, (M) => {
        M && g(!0);
      })
    }),
    [d]
  ), b = y.useCallback(
    (P = {}, T = null) => ({
      ...P,
      ref: T,
      "data-focus": zn(S),
      "data-disabled": zn(o),
      "data-invalid": zn(r),
      "data-readonly": zn(i),
      id: P.id !== void 0 ? P.id : u,
      htmlFor: P.htmlFor !== void 0 ? P.htmlFor : l
    }),
    [l, o, S, r, i, u]
  ), x = y.useCallback(
    (P = {}, T = null) => ({
      id: c,
      ...P,
      /**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: Ht(T, (M) => {
        M && p(!0);
      }),
      "aria-live": "polite"
    }),
    [c]
  ), C = y.useCallback(
    (P = {}, T = null) => ({
      ...P,
      ...a,
      ref: T,
      role: "group",
      "data-focus": zn(S),
      "data-disabled": zn(o),
      "data-invalid": zn(r),
      "data-readonly": zn(i)
    }),
    [a, o, S, r, i]
  ), k = y.useCallback(
    (P = {}, T = null) => ({
      ...P,
      ref: T,
      role: "presentation",
      "aria-hidden": !0,
      children: P.children || "*"
    }),
    []
  );
  return {
    isRequired: !!n,
    isInvalid: !!r,
    isReadOnly: !!i,
    isDisabled: !!o,
    isFocused: !!S,
    onFocus: () => m(!0),
    onBlur: () => m(!1),
    hasFeedbackText: f,
    setHasFeedbackText: p,
    hasHelpText: v,
    setHasHelpText: g,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: h,
    getErrorMessageProps: x,
    getRootProps: C,
    getLabelProps: b,
    getRequiredIndicatorProps: k
  };
}
var Lj = Ee(
  function(t, n) {
    const r = Lt("Form", t), o = Zn(t), {
      getRootProps: i,
      htmlProps: a,
      ...s
    } = zj(o), l = Se("chakra-form-control", t.className);
    return /* @__PURE__ */ E.jsx(Fj, { value: s, children: /* @__PURE__ */ E.jsx(Aj, { value: r, children: /* @__PURE__ */ E.jsx(
      oe.div,
      {
        ...i({}, n),
        className: l,
        __css: r.container
      }
    ) }) });
  }
);
Lj.displayName = "FormControl";
var Vj = Ee(
  function(t, n) {
    const r = qk(), o = Dj(), i = Se("chakra-form__helper-text", t.className);
    return /* @__PURE__ */ E.jsx(
      oe.div,
      {
        ...r == null ? void 0 : r.getHelpTextProps(t, n),
        __css: o.helperText,
        className: i
      }
    );
  }
);
Vj.displayName = "FormHelperText";
function Xk(e) {
  const { isDisabled: t, isInvalid: n, isReadOnly: r, isRequired: o, ...i } = Nj(e);
  return {
    ...i,
    disabled: t,
    readOnly: r,
    required: o,
    "aria-invalid": kf(n),
    "aria-required": kf(o),
    "aria-readonly": kf(r)
  };
}
function Nj(e) {
  var t, n, r;
  const o = qk(), {
    id: i,
    disabled: a,
    readOnly: s,
    required: l,
    isRequired: u,
    isInvalid: c,
    isReadOnly: d,
    isDisabled: f,
    onFocus: p,
    onBlur: v,
    ...g
  } = e, S = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return o != null && o.hasFeedbackText && (o != null && o.isInvalid) && S.push(o.feedbackId), o != null && o.hasHelpText && S.push(o.helpTextId), {
    ...g,
    "aria-describedby": S.join(" ") || void 0,
    id: i ?? (o == null ? void 0 : o.id),
    isDisabled: (t = a ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
    isReadOnly: (n = s ?? d) != null ? n : o == null ? void 0 : o.isReadOnly,
    isRequired: (r = l ?? u) != null ? r : o == null ? void 0 : o.isRequired,
    isInvalid: c ?? (o == null ? void 0 : o.isInvalid),
    onFocus: lt(o == null ? void 0 : o.onFocus, p),
    onBlur: lt(o == null ? void 0 : o.onBlur, v)
  };
}
function Uv(e, t, n, r) {
  const o = js(n);
  return y.useEffect(() => {
    const i = typeof e == "function" ? e() : e ?? document;
    if (!(!n || !i))
      return i.addEventListener(t, o, r), () => {
        i.removeEventListener(t, o, r);
      };
  }, [t, e, r, o, n]), () => {
    const i = typeof e == "function" ? e() : e ?? document;
    i == null || i.removeEventListener(t, o, r);
  };
}
function jj(e) {
  return "current" in e;
}
var Qk = () => typeof window < "u";
function Bj() {
  var e;
  const t = navigator.userAgentData;
  return (e = t == null ? void 0 : t.platform) != null ? e : navigator.platform;
}
var Wj = (e) => Qk() && e.test(navigator.vendor), Hj = (e) => Qk() && e.test(Bj()), Uj = () => Hj(/mac|iphone|ipad|ipod/i), Gj = () => Uj() && Wj(/apple/i);
function Yj(e) {
  const { ref: t, elements: n, enabled: r } = e, o = () => {
    var i, a;
    return (a = (i = t.current) == null ? void 0 : i.ownerDocument) != null ? a : document;
  };
  Uv(o, "pointerdown", (i) => {
    if (!Gj() || !r)
      return;
    const a = i.target, l = (n ?? [t]).some((u) => {
      const c = jj(u) ? u.current : u;
      return (c == null ? void 0 : c.contains(a)) || c === a;
    });
    o().activeElement !== a && l && (i.preventDefault(), a.focus());
  });
}
function Zk(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Jk = { exports: {} }, Kj = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", qj = Kj, Xj = qj;
function eP() {
}
function tP() {
}
tP.resetWarningCache = eP;
var Qj = function() {
  function e(r, o, i, a, s, l) {
    if (l !== Xj) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw u.name = "Invariant Violation", u;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: tP,
    resetWarningCache: eP
  };
  return n.PropTypes = n, n;
};
Jk.exports = Qj();
var Zj = Jk.exports;
const vo = /* @__PURE__ */ Qs(Zj);
var Bh = "data-focus-lock", nP = "data-focus-lock-disabled", Jj = "data-no-focus-lock", eB = "data-autofocus-inside", tB = "data-no-autofocus";
function nB(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function rB(e, t) {
  var n = y.useState(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function rP(e, t) {
  return rB(t || null, function(n) {
    return e.forEach(function(r) {
      return nB(r, n);
    });
  });
}
var np = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
}, Wn = function() {
  return Wn = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Wn.apply(this, arguments);
};
function oP(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function oB(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function iP(e) {
  return e;
}
function aP(e, t) {
  t === void 0 && (t = iP);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var a = t(i, r);
      return n.push(a), function() {
        n = n.filter(function(s) {
          return s !== a;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(i);
      }
      n = {
        push: function(s) {
          return i(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var a = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(i), a = n;
      }
      var l = function() {
        var c = a;
        a = [], c.forEach(i);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(c) {
          a.push(c), u();
        },
        filter: function(c) {
          return a = a.filter(c), n;
        }
      };
    }
  };
  return o;
}
function Gv(e, t) {
  return t === void 0 && (t = iP), aP(e, t);
}
function sP(e) {
  e === void 0 && (e = {});
  var t = aP(null);
  return t.options = Wn({ async: !0, ssr: !1 }, e), t;
}
var lP = function(e) {
  var t = e.sideCar, n = oP(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return y.createElement(r, Wn({}, n));
};
lP.isSideCarExport = !0;
function iB(e, t) {
  return e.useMedium(t), lP;
}
var uP = Gv({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), cP = Gv(), aB = Gv(), sB = sP({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), lB = [], Yv = /* @__PURE__ */ y.forwardRef(function(t, n) {
  var r, o = y.useState(), i = o[0], a = o[1], s = y.useRef(), l = y.useRef(!1), u = y.useRef(null), c = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, v = t.crossFrame, g = t.autoFocus;
  t.allowTextSelection;
  var S = t.group, m = t.className, h = t.whiteList, b = t.hasPositiveIndices, x = t.shards, C = x === void 0 ? lB : x, k = t.as, P = k === void 0 ? "div" : k, T = t.lockProps, M = T === void 0 ? {} : T, $ = t.sideCar, D = t.returnFocus, U = t.focusOptions, W = t.onActivation, L = t.onDeactivation, H = y.useState({}), K = H[0], ne = y.useCallback(function() {
    u.current = u.current || document && document.activeElement, s.current && W && W(s.current), l.current = !0;
  }, [W]), R = y.useCallback(function() {
    l.current = !1, L && L(s.current);
  }, [L]);
  y.useEffect(function() {
    d || (u.current = null);
  }, []);
  var F = y.useCallback(function(ie) {
    var pe = u.current;
    if (pe && pe.focus) {
      var we = typeof D == "function" ? D(pe) : D;
      if (we) {
        var Qe = typeof we == "object" ? we : void 0;
        u.current = null, ie ? Promise.resolve().then(function() {
          return pe.focus(Qe);
        }) : pe.focus(Qe);
      }
    }
  }, [D]), B = y.useCallback(function(ie) {
    l.current && uP.useMedium(ie);
  }, []), N = cP.useMedium, G = y.useCallback(function(ie) {
    s.current !== ie && (s.current = ie, a(ie));
  }, []), z = Y((r = {}, r[nP] = d && "disabled", r[Bh] = S, r), M), J = f !== !0, ae = J && f !== "tail", re = rP([n, G]);
  return /* @__PURE__ */ y.createElement(y.Fragment, null, J && [
    // nearest focus guard
    /* @__PURE__ */ y.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: np
    }),
    // first tabbed element guard
    b ? /* @__PURE__ */ y.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: np
    }) : null
  ], !d && /* @__PURE__ */ y.createElement($, {
    id: K,
    sideCar: sB,
    observed: i,
    disabled: d,
    persistentFocus: p,
    crossFrame: v,
    autoFocus: g,
    whiteList: h,
    shards: C,
    onActivation: ne,
    onDeactivation: R,
    returnFocus: F,
    focusOptions: U
  }), /* @__PURE__ */ y.createElement(P, Y({
    ref: re
  }, z, {
    className: m,
    onBlur: N,
    onFocus: B
  }), c), ae && /* @__PURE__ */ y.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: np
  }));
});
Yv.propTypes = {};
Yv.defaultProps = {
  children: void 0,
  disabled: !1,
  returnFocus: !1,
  focusOptions: void 0,
  noFocusGuards: !1,
  autoFocus: !0,
  persistentFocus: !1,
  crossFrame: !0,
  hasPositiveIndices: void 0,
  allowTextSelection: void 0,
  group: void 0,
  className: void 0,
  whiteList: void 0,
  shards: void 0,
  as: "div",
  lockProps: {},
  onActivation: void 0,
  onDeactivation: void 0
};
const dP = Yv;
function _c(e, t) {
  return _c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, _c(e, t);
}
function uB(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, _c(e, t);
}
function No(e) {
  "@babel/helpers - typeof";
  return No = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, No(e);
}
function cB(e, t) {
  if (No(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (No(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fP(e) {
  var t = cB(e, "string");
  return No(t) === "symbol" ? t : String(t);
}
function _i(e, t, n) {
  return t = fP(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function dB(e, t) {
  function n(r) {
    return r.displayName || r.name || "Component";
  }
  return function(o) {
    var i = [], a;
    function s() {
      a = e(i.map(function(u) {
        return u.props;
      })), t(a);
    }
    var l = /* @__PURE__ */ function(u) {
      uB(c, u);
      function c() {
        return u.apply(this, arguments) || this;
      }
      c.peek = function() {
        return a;
      };
      var d = c.prototype;
      return d.componentDidMount = function() {
        i.push(this), s();
      }, d.componentDidUpdate = function() {
        s();
      }, d.componentWillUnmount = function() {
        var p = i.indexOf(this);
        i.splice(p, 1), s();
      }, d.render = function() {
        return /* @__PURE__ */ te.createElement(o, this.props);
      }, c;
    }(y.PureComponent);
    return _i(l, "displayName", "SideEffect(" + n(o) + ")"), l;
  };
}
var Jn = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, Oc = function(e) {
  return Array.isArray(e) ? e : [e];
}, pP = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, fB = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, hP = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, mP = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, pB = function(e, t) {
  return !e || mP(e) || !fB(e) && t(hP(e));
}, vP = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = pB(t, vP.bind(void 0, e));
  return e.set(t, r), r;
}, hB = function(e, t) {
  return e && !mP(e) ? gB(e) ? t(hP(e)) : !1 : !0;
}, gP = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = hB(t, gP.bind(void 0, e));
  return e.set(t, r), r;
}, yP = function(e) {
  return e.dataset;
}, mB = function(e) {
  return e.tagName === "BUTTON";
}, bP = function(e) {
  return e.tagName === "INPUT";
}, SP = function(e) {
  return bP(e) && e.type === "radio";
}, vB = function(e) {
  return !((bP(e) || mB(e)) && (e.type === "hidden" || e.disabled));
}, gB = function(e) {
  var t = e.getAttribute(tB);
  return ![!0, "true", ""].includes(t);
}, Kv = function(e) {
  var t;
  return !!(e && (!((t = yP(e)) === null || t === void 0) && t.focusGuard));
}, Mc = function(e) {
  return !Kv(e);
}, yB = function(e) {
  return !!e;
}, bB = function(e, t) {
  var n = e.tabIndex - t.tabIndex, r = e.index - t.index;
  if (n) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return n || r;
}, xP = function(e, t, n) {
  return Jn(e).map(function(r, o) {
    return {
      node: r,
      index: o,
      tabIndex: n && r.tabIndex === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : r.tabIndex
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(bB);
}, SB = [
  "button:enabled",
  "select:enabled",
  "textarea:enabled",
  "input:enabled",
  // elements with explicit roles will also use explicit tabindex
  // '[role="button"]',
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[tabindex]",
  "[contenteditable]",
  "[autofocus]"
], qv = SB.join(","), xB = "".concat(qv, ", [data-focus-guard]"), wP = function(e, t) {
  return Jn((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? xB : qv) ? [r] : [], wP(r));
  }, []);
}, wB = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? Ad([e.contentDocument.body], t) : [e];
}, Ad = function(e, t) {
  return e.reduce(function(n, r) {
    var o, i = wP(r, t), a = (o = []).concat.apply(o, i.map(function(s) {
      return wB(s, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      a,
      // add if node is tabbable itself
      r.parentNode ? Jn(r.parentNode.querySelectorAll(qv)).filter(function(s) {
        return s === r;
      }) : []
    );
  }, []);
}, CB = function(e) {
  var t = e.querySelectorAll("[".concat(eB, "]"));
  return Jn(t).map(function(n) {
    return Ad([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, Xv = function(e, t) {
  return Jn(e).filter(function(n) {
    return vP(t, n);
  }).filter(function(n) {
    return vB(n);
  });
}, c1 = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), Jn(e).filter(function(n) {
    return gP(t, n);
  });
}, Wh = function(e, t, n) {
  return xP(Xv(Ad(e, n), t), !0, n);
}, d1 = function(e, t) {
  return xP(Xv(Ad(e), t), !1);
}, kB = function(e, t) {
  return Xv(CB(e), t);
}, Bi = function(e, t) {
  return e.shadowRoot ? Bi(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Jn(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var o = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return o ? Bi(o, t) : !1;
    }
    return Bi(n, t);
  });
}, PB = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var o = r + 1; o < n; o += 1) {
      var i = e[r].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(a, s) {
    return !t.has(s);
  });
}, CP = function(e) {
  return e.parentNode ? CP(e.parentNode) : e;
}, Qv = function(e) {
  var t = Oc(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var o = r.getAttribute(Bh);
    return n.push.apply(n, o ? PB(Jn(CP(r).querySelectorAll("[".concat(Bh, '="').concat(o, '"]:not([').concat(nP, '="disabled"])')))) : [r]), n;
  }, []);
}, TB = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, Gs = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? Gs(t.shadowRoot) : t instanceof HTMLIFrameElement && TB(function() {
      return t.contentWindow.document;
    }) ? Gs(t.contentWindow.document) : t;
  }
}, EB = function(e, t) {
  return e === t;
}, _B = function(e, t) {
  return !!Jn(e.querySelectorAll("iframe")).some(function(n) {
    return EB(n, t);
  });
}, kP = function(e, t) {
  return t === void 0 && (t = Gs(pP(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Qv(e).some(function(n) {
    return Bi(n, t) || _B(n, t);
  });
}, OB = function(e) {
  e === void 0 && (e = document);
  var t = Gs(e);
  return t ? Jn(e.querySelectorAll("[".concat(Jj, "]"))).some(function(n) {
    return Bi(n, t);
  }) : !1;
}, MB = function(e, t) {
  return t.filter(SP).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, Zv = function(e, t) {
  return SP(e) && e.name ? MB(e, t) : e;
}, IB = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(Zv(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, f1 = function(e) {
  return e[0] && e.length > 1 ? Zv(e[0], e) : e[0];
}, p1 = function(e, t) {
  return e.length > 1 ? e.indexOf(Zv(e[t], e)) : t;
}, PP = "NEW_FOCUS", $B = function(e, t, n, r) {
  var o = e.length, i = e[0], a = e[o - 1], s = Kv(n);
  if (!(n && e.indexOf(n) >= 0)) {
    var l = n !== void 0 ? t.indexOf(n) : -1, u = r ? t.indexOf(r) : l, c = r ? e.indexOf(r) : -1, d = l - u, f = t.indexOf(i), p = t.indexOf(a), v = IB(t), g = n !== void 0 ? v.indexOf(n) : -1, S = g - (r ? v.indexOf(r) : l), m = p1(e, 0), h = p1(e, o - 1);
    if (l === -1 || c === -1)
      return PP;
    if (!d && c >= 0)
      return c;
    if (l <= f && s && Math.abs(d) > 1)
      return h;
    if (l >= p && s && Math.abs(d) > 1)
      return m;
    if (d && Math.abs(S) > 1)
      return c;
    if (l <= f)
      return h;
    if (l > p)
      return m;
    if (d)
      return Math.abs(d) > 1 ? c : (o + c + d) % o;
  }
}, RB = function(e) {
  return function(t) {
    var n, r = (n = yP(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, AB = function(e, t, n) {
  var r = e.map(function(i) {
    var a = i.node;
    return a;
  }), o = c1(r.filter(RB(n)));
  return o && o.length ? f1(o) : f1(c1(t));
}, Hh = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && Hh(e.parentNode.host || e.parentNode, t), t;
}, rp = function(e, t) {
  for (var n = Hh(e), r = Hh(t), o = 0; o < n.length; o += 1) {
    var i = n[o];
    if (r.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, TP = function(e, t, n) {
  var r = Oc(e), o = Oc(t), i = r[0], a = !1;
  return o.filter(Boolean).forEach(function(s) {
    a = rp(a || s, s) || a, n.filter(Boolean).forEach(function(l) {
      var u = rp(i, l);
      u && (!a || Bi(u, a) ? a = u : a = rp(u, a));
    });
  }), a;
}, DB = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(kB(r, t));
  }, []);
}, FB = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(yB);
}, zB = function(e, t) {
  var n = Gs(Oc(e).length > 0 ? document : pP(e).ownerDocument), r = Qv(e).filter(Mc), o = TP(n || e, e, r), i = /* @__PURE__ */ new Map(), a = d1(r, i), s = Wh(r, i).filter(function(p) {
    var v = p.node;
    return Mc(v);
  });
  if (!(!s[0] && (s = a, !s[0]))) {
    var l = d1([o], i).map(function(p) {
      var v = p.node;
      return v;
    }), u = FB(l, s), c = u.map(function(p) {
      var v = p.node;
      return v;
    }), d = $B(c, l, n, t);
    if (d === PP) {
      var f = AB(a, c, DB(r, i));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, LB = function(e) {
  var t = Qv(e).filter(Mc), n = TP(e, e, t), r = /* @__PURE__ */ new Map(), o = Wh([n], r, !0), i = Wh(t, r).filter(function(a) {
    var s = a.node;
    return Mc(s);
  }).map(function(a) {
    var s = a.node;
    return s;
  });
  return o.map(function(a) {
    var s = a.node, l = a.index;
    return {
      node: s,
      index: l,
      lockItem: i.indexOf(s) >= 0,
      guard: Kv(s)
    };
  });
}, VB = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, op = 0, ip = !1, EP = function(e, t, n) {
  n === void 0 && (n = {});
  var r = zB(e, t);
  if (!ip && r) {
    if (op > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), ip = !0, setTimeout(function() {
        ip = !1;
      }, 1);
      return;
    }
    op++, VB(r.node, n.focusOptions), op--;
  }
};
function Jv(e) {
  setTimeout(e, 1);
}
var NB = function() {
  return document && document.activeElement === document.body;
}, jB = function() {
  return NB() || OB();
}, Wi = null, Oi = null, Hi = null, Ys = !1, BB = function() {
  return !0;
}, WB = function(t) {
  return (Wi.whiteList || BB)(t);
}, HB = function(t, n) {
  Hi = {
    observerNode: t,
    portaledElement: n
  };
}, UB = function(t) {
  return Hi && Hi.portaledElement === t;
};
function h1(e, t, n, r) {
  var o = null, i = e;
  do {
    var a = r[i];
    if (a.guard)
      a.node.dataset.focusAutoGuard && (o = a);
    else if (a.lockItem) {
      if (i !== e)
        return;
      o = null;
    } else
      break;
  } while ((i += n) !== t);
  o && (o.node.tabIndex = 0);
}
var GB = function(t) {
  return t && "current" in t ? t.current : t;
}, YB = function(t) {
  return t ? !!Ys : Ys === "meanwhile";
}, KB = function e(t, n, r) {
  return n && // find host equal to active element and check nested active element
  (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, qB = function(t, n) {
  return n.some(function(r) {
    return KB(t, r, r);
  });
}, Ic = function() {
  var t = !1;
  if (Wi) {
    var n = Wi, r = n.observed, o = n.persistentFocus, i = n.autoFocus, a = n.shards, s = n.crossFrame, l = n.focusOptions, u = r || Hi && Hi.portaledElement, c = document && document.activeElement;
    if (u) {
      var d = [u].concat(a.map(GB).filter(Boolean));
      if ((!c || WB(c)) && (o || YB(s) || !jB() || !Oi && i) && (u && !// active element is "inside" working area
      (kP(d) || // check for shadow-dom contained elements
      c && qB(c, d) || UB(c)) && (document && !Oi && c && !i ? (c.blur && c.blur(), document.body.focus()) : (t = EP(d, Oi, {
        focusOptions: l
      }), Hi = {})), Ys = !1, Oi = document && document.activeElement), document) {
        var f = document && document.activeElement, p = LB(d), v = p.map(function(g) {
          var S = g.node;
          return S;
        }).indexOf(f);
        v > -1 && (p.filter(function(g) {
          var S = g.guard, m = g.node;
          return S && m.dataset.focusAutoGuard;
        }).forEach(function(g) {
          var S = g.node;
          return S.removeAttribute("tabIndex");
        }), h1(v, p.length, 1, p), h1(v, -1, -1, p));
      }
    }
  }
  return t;
}, _P = function(t) {
  Ic() && t && (t.stopPropagation(), t.preventDefault());
}, eg = function() {
  return Jv(Ic);
}, XB = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || HB(r, n);
}, QB = function() {
  return null;
}, OP = function() {
  Ys = "just", Jv(function() {
    Ys = "meanwhile";
  });
}, ZB = function() {
  document.addEventListener("focusin", _P), document.addEventListener("focusout", eg), window.addEventListener("blur", OP);
}, JB = function() {
  document.removeEventListener("focusin", _P), document.removeEventListener("focusout", eg), window.removeEventListener("blur", OP);
};
function e6(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
function t6(e) {
  var t = e.slice(-1)[0];
  t && !Wi && ZB();
  var n = Wi, r = n && t && t.id === n.id;
  Wi = t, n && !r && (n.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === n.id;
  }).length || n.returnFocus(!t)), t ? (Oi = null, (!r || n.observed !== t.observed) && t.onActivation(), Ic(), Jv(Ic)) : (JB(), Oi = null);
}
uP.assignSyncMedium(XB);
cP.assignMedium(eg);
aB.assignMedium(function(e) {
  return e({
    moveFocusInside: EP,
    focusInside: kP
  });
});
const n6 = dB(e6, t6)(QB);
var MP = /* @__PURE__ */ y.forwardRef(function(t, n) {
  return /* @__PURE__ */ y.createElement(dP, Y({
    sideCar: n6,
    ref: n
  }, t));
}), IP = dP.propTypes || {};
IP.sideCar;
Zk(IP, ["sideCar"]);
MP.propTypes = {};
const m1 = MP;
function $P(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function RP(e) {
  var t;
  if (!$P(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function r6(e) {
  var t, n;
  return (n = (t = AP(e)) == null ? void 0 : t.defaultView) != null ? n : window;
}
function AP(e) {
  return $P(e) ? e.ownerDocument : document;
}
function o6(e) {
  return AP(e).activeElement;
}
var DP = (e) => e.hasAttribute("tabindex"), i6 = (e) => DP(e) && e.tabIndex === -1;
function a6(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function FP(e) {
  return e.parentElement && FP(e.parentElement) ? !0 : e.hidden;
}
function s6(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function zP(e) {
  if (!RP(e) || FP(e) || a6(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const r = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in r ? r[t]() : s6(e) ? !0 : DP(e);
}
function l6(e) {
  return e ? RP(e) && zP(e) && !i6(e) : !1;
}
var u6 = [
  "input:not(:disabled):not([disabled])",
  "select:not(:disabled):not([disabled])",
  "textarea:not(:disabled):not([disabled])",
  "embed",
  "iframe",
  "object",
  "a[href]",
  "area[href]",
  "button:not(:disabled):not([disabled])",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  "*[tabindex]:not([aria-disabled])",
  "*[contenteditable]"
], c6 = u6.join(), d6 = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function LP(e) {
  const t = Array.from(
    e.querySelectorAll(c6)
  );
  return t.unshift(e), t.filter((n) => zP(n) && d6(n));
}
var v1, f6 = (v1 = m1.default) != null ? v1 : m1, VP = (e) => {
  const {
    initialFocusRef: t,
    finalFocusRef: n,
    contentRef: r,
    restoreFocus: o,
    children: i,
    isDisabled: a,
    autoFocus: s,
    persistentFocus: l,
    lockFocusAcrossFrames: u
  } = e, c = y.useCallback(() => {
    t != null && t.current ? t.current.focus() : r != null && r.current && LP(r.current).length === 0 && requestAnimationFrame(() => {
      var v;
      (v = r.current) == null || v.focus();
    });
  }, [t, r]), d = y.useCallback(() => {
    var p;
    (p = n == null ? void 0 : n.current) == null || p.focus();
  }, [n]), f = o && !n;
  return /* @__PURE__ */ E.jsx(
    f6,
    {
      crossFrame: u,
      persistentFocus: l,
      autoFocus: s,
      disabled: a,
      onActivation: c,
      onDeactivation: d,
      returnFocus: f,
      children: i
    }
  );
};
VP.displayName = "FocusLock";
var Dd = Ee(function(t, n) {
  const { htmlSize: r, ...o } = t, i = Lt("Input", o), a = Zn(o), s = Xk(a), l = Se("chakra-input", t.className);
  return /* @__PURE__ */ E.jsx(
    oe.input,
    {
      size: r,
      ...s,
      __css: i.field,
      ref: n,
      className: l
    }
  );
});
Dd.displayName = "Input";
Dd.id = "Input";
var NP = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
function p6(e, t) {
  return Array.isArray(e) ? e.map((n) => n === null ? null : t(n)) : At(e) ? Object.keys(e).reduce((n, r) => (n[r] = t(e[r]), n), {}) : e != null ? t(e) : null;
}
function h6(e, t = NP) {
  const n = {};
  return e.forEach((r, o) => {
    const i = t[o];
    r != null && (n[i] = r);
  }), n;
}
var Mi = Ee(function(t, n) {
  const r = Ho("Text", t), { className: o, align: i, decoration: a, casing: s, ...l } = Zn(t), u = yL({
    textAlign: t.align,
    textDecoration: t.decoration,
    textTransform: t.casing
  });
  return /* @__PURE__ */ E.jsx(
    oe.p,
    {
      ref: n,
      className: Se("chakra-text", t.className),
      ...u,
      ...l,
      __css: r
    }
  );
});
Mi.displayName = "Text";
var jP = (e) => /* @__PURE__ */ E.jsx(
  oe.div,
  {
    className: "chakra-stack__item",
    ...e,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...e.__css
    }
  }
);
jP.displayName = "StackItem";
function m6(e) {
  const { spacing: t, direction: n } = e, r = {
    column: {
      my: t,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    "column-reverse": {
      my: t,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    row: {
      mx: t,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    },
    "row-reverse": {
      mx: t,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    }
  };
  return {
    "&": p6(
      n,
      (o) => r[o]
    )
  };
}
var BP = Ee((e, t) => {
  const {
    isInline: n,
    direction: r,
    align: o,
    justify: i,
    spacing: a = "0.5rem",
    wrap: s,
    children: l,
    divider: u,
    className: c,
    shouldWrapChildren: d,
    ...f
  } = e, p = n ? "row" : r ?? "column", v = y.useMemo(
    () => m6({ spacing: a, direction: p }),
    [a, p]
  ), g = !!u, S = !d && !g, m = y.useMemo(() => {
    const b = Ij(l);
    return S ? b : b.map((x, C) => {
      const k = typeof x.key < "u" ? x.key : C, P = C + 1 === b.length, M = d ? /* @__PURE__ */ E.jsx(jP, { children: x }, k) : x;
      if (!g)
        return M;
      const $ = y.cloneElement(
        u,
        {
          __css: v
        }
      ), D = P ? null : $;
      return /* @__PURE__ */ E.jsxs(y.Fragment, { children: [
        M,
        D
      ] }, k);
    });
  }, [
    u,
    v,
    g,
    S,
    d,
    l
  ]), h = Se("chakra-stack", c);
  return /* @__PURE__ */ E.jsx(
    oe.div,
    {
      ref: t,
      display: "flex",
      alignItems: o,
      justifyContent: i,
      flexDirection: p,
      flexWrap: s,
      gap: g ? void 0 : a,
      className: h,
      ...f,
      children: m
    }
  );
});
BP.displayName = "Stack";
var ar = Ee((e, t) => /* @__PURE__ */ E.jsx(BP, { align: "center", ...e, direction: "row", ref: t }));
ar.displayName = "HStack";
var We = oe("div");
We.displayName = "Box";
var WP = Ee(function(t, n) {
  const { size: r, centerContent: o = !0, ...i } = t, a = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ E.jsx(
    We,
    {
      ref: n,
      boxSize: r,
      __css: {
        ...a,
        flexShrink: 0,
        flexGrow: 0
      },
      ...i
    }
  );
});
WP.displayName = "Square";
var v6 = Ee(function(t, n) {
  const { size: r, ...o } = t;
  return /* @__PURE__ */ E.jsx(WP, { size: r, ref: n, borderRadius: "9999px", ...o });
});
v6.displayName = "Circle";
var HP = Ee(function(t, n) {
  const {
    borderLeftWidth: r,
    borderBottomWidth: o,
    borderTopWidth: i,
    borderRightWidth: a,
    borderWidth: s,
    borderStyle: l,
    borderColor: u,
    ...c
  } = Ho("Divider", t), {
    className: d,
    orientation: f = "horizontal",
    __css: p,
    ...v
  } = Zn(t), g = {
    vertical: {
      borderLeftWidth: r || a || s || "1px",
      height: "100%"
    },
    horizontal: {
      borderBottomWidth: o || i || s || "1px",
      width: "100%"
    }
  };
  return /* @__PURE__ */ E.jsx(
    oe.hr,
    {
      ref: n,
      "aria-orientation": f,
      ...v,
      __css: {
        ...c,
        border: "0",
        borderColor: u,
        borderStyle: l,
        ...g[f],
        ...p
      },
      className: Se("chakra-divider", d)
    }
  );
});
HP.displayName = "Divider";
function g6(e, t = {}) {
  const { ssr: n = !0, fallback: r } = t, { getWindow: o } = RL(), i = Array.isArray(e) ? e : [e];
  let a = Array.isArray(r) ? r : [r];
  a = a.filter((u) => u != null);
  const [s, l] = y.useState(() => i.map((u, c) => ({
    media: u,
    matches: n ? !!a[c] : o().matchMedia(u).matches
  })));
  return y.useEffect(() => {
    const u = o();
    l(
      i.map((f) => ({
        media: f,
        matches: u.matchMedia(f).matches
      }))
    );
    const c = i.map((f) => u.matchMedia(f)), d = (f) => {
      l((p) => p.slice().map((v) => v.media === f.media ? { ...v, matches: f.matches } : v));
    };
    return c.forEach((f) => {
      typeof f.addListener == "function" ? f.addListener(d) : f.addEventListener("change", d);
    }), () => {
      c.forEach((f) => {
        typeof f.removeListener == "function" ? f.removeListener(d) : f.removeEventListener("change", d);
      });
    };
  }, [o]), s.map((u) => u.matches);
}
function y6(e, t, n = NP) {
  let r = Object.keys(e).indexOf(t);
  if (r !== -1)
    return e[t];
  let o = n.indexOf(t);
  for (; o >= 0; ) {
    const i = n[o];
    if (e.hasOwnProperty(i)) {
      r = o;
      break;
    }
    o -= 1;
  }
  if (r !== -1) {
    const i = n[r];
    return e[i];
  }
}
function b6(e) {
  var t, n;
  const r = At(e) ? e : { fallback: e ?? "base" }, i = ao().__breakpoints.details.map(
    ({ minMaxQuery: u, breakpoint: c }) => ({
      breakpoint: c,
      query: u.replace("@media screen and ", "")
    })
  ), a = i.map((u) => u.breakpoint === r.fallback), l = g6(
    i.map((u) => u.query),
    { fallback: a, ssr: r.ssr }
  ).findIndex((u) => u == !0);
  return (n = (t = i[l]) == null ? void 0 : t.breakpoint) != null ? n : r.fallback;
}
function S6(e, t) {
  var n;
  const r = At(t) ? t : { fallback: t ?? "base" }, o = b6(r), i = ao();
  if (!o)
    return;
  const a = Array.from(((n = i.__breakpoints) == null ? void 0 : n.keys) || []), s = Array.isArray(e) ? Object.fromEntries(
    Object.entries(h6(e, a)).map(
      ([l, u]) => [l, u]
    )
  ) : e;
  return y6(s, o, a);
}
function x6(e) {
  const t = e.current;
  if (!t)
    return !1;
  const n = o6(t);
  return !n || t.contains(n) ? !1 : !!l6(n);
}
function UP(e, t) {
  const { shouldFocus: n, visible: r, focusRef: o } = t, i = n && !r;
  Bs(() => {
    if (!i || x6(e))
      return;
    const a = (o == null ? void 0 : o.current) || e.current;
    let s;
    if (a)
      return s = requestAnimationFrame(() => {
        a.focus({ preventScroll: !0 });
      }), () => {
        cancelAnimationFrame(s);
      };
  }, [i, e, o]);
}
var w6 = {
  preventScroll: !0,
  shouldFocus: !1
};
function C6(e, t = w6) {
  const { focusRef: n, preventScroll: r, shouldFocus: o, visible: i } = t, a = k6(e) ? e.current : e, s = o && i, l = y.useRef(s), u = y.useRef(i);
  ea(() => {
    !u.current && i && (l.current = s), u.current = i;
  }, [i, s]);
  const c = y.useCallback(() => {
    if (!(!i || !a || !l.current) && (l.current = !1, !a.contains(document.activeElement)))
      if (n != null && n.current)
        requestAnimationFrame(() => {
          var d;
          (d = n.current) == null || d.focus({ preventScroll: r });
        });
      else {
        const d = LP(a);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: r });
        });
      }
  }, [i, r, a, n]);
  Bs(() => {
    c();
  }, [c]), Uv(a, "transitionend", c);
}
function k6(e) {
  return "current" in e;
}
var ei = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), yt = {
  arrowShadowColor: ei("--popper-arrow-shadow-color"),
  arrowSize: ei("--popper-arrow-size", "8px"),
  arrowSizeHalf: ei("--popper-arrow-size-half"),
  arrowBg: ei("--popper-arrow-bg"),
  transformOrigin: ei("--popper-transform-origin"),
  arrowOffset: ei("--popper-arrow-offset")
};
function P6(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var T6 = {
  top: "bottom center",
  "top-start": "bottom left",
  "top-end": "bottom right",
  bottom: "top center",
  "bottom-start": "top left",
  "bottom-end": "top right",
  left: "right center",
  "left-start": "right top",
  "left-end": "right bottom",
  right: "left center",
  "right-start": "left top",
  "right-end": "left bottom"
}, E6 = (e) => T6[e], g1 = {
  scroll: !0,
  resize: !0
};
function _6(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...g1, ...e }
  } : t = {
    enabled: e,
    options: g1
  }, t;
}
var O6 = {
  name: "matchWidth",
  enabled: !0,
  phase: "beforeWrite",
  requires: ["computeStyles"],
  fn: ({ state: e }) => {
    e.styles.popper.width = `${e.rects.reference.width}px`;
  },
  effect: ({ state: e }) => () => {
    const t = e.elements.reference;
    e.elements.popper.style.width = `${t.offsetWidth}px`;
  }
}, M6 = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    y1(e);
  },
  effect: ({ state: e }) => () => {
    y1(e);
  }
}, y1 = (e) => {
  e.elements.popper.style.setProperty(
    yt.transformOrigin.var,
    E6(e.placement)
  );
}, I6 = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    $6(e);
  }
}, $6 = (e) => {
  var t;
  if (!e.placement)
    return;
  const n = R6(e.placement);
  if ((t = e.elements) != null && t.arrow && n) {
    Object.assign(e.elements.arrow.style, {
      [n.property]: n.value,
      width: yt.arrowSize.varRef,
      height: yt.arrowSize.varRef,
      zIndex: -1
    });
    const r = {
      [yt.arrowSizeHalf.var]: `calc(${yt.arrowSize.varRef} / 2 - 1px)`,
      [yt.arrowOffset.var]: `calc(${yt.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in r)
      e.elements.arrow.style.setProperty(o, r[o]);
  }
}, R6 = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: yt.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: yt.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: yt.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: yt.arrowOffset.varRef };
}, A6 = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    b1(e);
  },
  effect: ({ state: e }) => () => {
    b1(e);
  }
}, b1 = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const n = P6(e.placement);
  n && t.style.setProperty("--popper-arrow-default-shadow", n), Object.assign(t.style, {
    transform: "rotate(45deg)",
    background: yt.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
  });
}, D6 = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, F6 = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function z6(e, t = "ltr") {
  var n, r;
  const o = ((n = D6[e]) == null ? void 0 : n[t]) || e;
  return t === "ltr" ? o : (r = F6[e]) != null ? r : o;
}
var Dt = "top", vn = "bottom", gn = "right", Ft = "left", tg = "auto", fl = [Dt, vn, gn, Ft], ia = "start", Ks = "end", L6 = "clippingParents", GP = "viewport", Da = "popper", V6 = "reference", S1 = /* @__PURE__ */ fl.reduce(function(e, t) {
  return e.concat([t + "-" + ia, t + "-" + Ks]);
}, []), YP = /* @__PURE__ */ [].concat(fl, [tg]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ia, t + "-" + Ks]);
}, []), N6 = "beforeRead", j6 = "read", B6 = "afterRead", W6 = "beforeMain", H6 = "main", U6 = "afterMain", G6 = "beforeWrite", Y6 = "write", K6 = "afterWrite", q6 = [N6, j6, B6, W6, H6, U6, G6, Y6, K6];
function Qn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Qt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function jo(e) {
  var t = Qt(e).Element;
  return e instanceof t || e instanceof Element;
}
function pn(e) {
  var t = Qt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ng(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Qt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function X6(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !pn(i) || !Qn(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function Q6(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], i = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), s = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !pn(o) || !Qn(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const Z6 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: X6,
  effect: Q6,
  requires: ["computeStyles"]
};
function Xn(e) {
  return e.split("-")[0];
}
var Ao = Math.max, $c = Math.min, aa = Math.round;
function Uh() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function KP() {
  return !/^((?!chrome|android).)*safari/i.test(Uh());
}
function sa(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && pn(e) && (o = e.offsetWidth > 0 && aa(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && aa(r.height) / e.offsetHeight || 1);
  var a = jo(e) ? Qt(e) : window, s = a.visualViewport, l = !KP() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / o, c = (r.top + (l && s ? s.offsetTop : 0)) / i, d = r.width / o, f = r.height / i;
  return {
    width: d,
    height: f,
    top: c,
    right: u + d,
    bottom: c + f,
    left: u,
    x: u,
    y: c
  };
}
function rg(e) {
  var t = sa(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function qP(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && ng(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function wr(e) {
  return Qt(e).getComputedStyle(e);
}
function J6(e) {
  return ["table", "td", "th"].indexOf(Qn(e)) >= 0;
}
function uo(e) {
  return ((jo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Fd(e) {
  return Qn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ng(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    uo(e)
  );
}
function x1(e) {
  return !pn(e) || // https://github.com/popperjs/popper-core/issues/837
  wr(e).position === "fixed" ? null : e.offsetParent;
}
function e8(e) {
  var t = /firefox/i.test(Uh()), n = /Trident/i.test(Uh());
  if (n && pn(e)) {
    var r = wr(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Fd(e);
  for (ng(o) && (o = o.host); pn(o) && ["html", "body"].indexOf(Qn(o)) < 0; ) {
    var i = wr(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function pl(e) {
  for (var t = Qt(e), n = x1(e); n && J6(n) && wr(n).position === "static"; )
    n = x1(n);
  return n && (Qn(n) === "html" || Qn(n) === "body" && wr(n).position === "static") ? t : n || e8(e) || t;
}
function og(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function hs(e, t, n) {
  return Ao(e, $c(t, n));
}
function t8(e, t, n) {
  var r = hs(e, t, n);
  return r > n ? n : r;
}
function XP() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function QP(e) {
  return Object.assign({}, XP(), e);
}
function ZP(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var n8 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, QP(typeof t != "number" ? t : ZP(t, fl));
};
function r8(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = Xn(n.placement), l = og(s), u = [Ft, gn].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = n8(o.padding, n), f = rg(i), p = l === "y" ? Dt : Ft, v = l === "y" ? vn : gn, g = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c], S = a[l] - n.rects.reference[l], m = pl(i), h = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, b = g / 2 - S / 2, x = d[p], C = h - f[c] - d[v], k = h / 2 - f[c] / 2 + b, P = hs(x, k, C), T = l;
    n.modifiersData[r] = (t = {}, t[T] = P, t.centerOffset = P - k, t);
  }
}
function o8(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || qP(t.elements.popper, o) && (t.elements.arrow = o));
}
const i8 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: r8,
  effect: o8,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function la(e) {
  return e.split("-")[1];
}
var a8 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function s8(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: aa(n * o) / o || 0,
    y: aa(r * o) / o || 0
  };
}
function w1(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = a.x, p = f === void 0 ? 0 : f, v = a.y, g = v === void 0 ? 0 : v, S = typeof c == "function" ? c({
    x: p,
    y: g
  }) : {
    x: p,
    y: g
  };
  p = S.x, g = S.y;
  var m = a.hasOwnProperty("x"), h = a.hasOwnProperty("y"), b = Ft, x = Dt, C = window;
  if (u) {
    var k = pl(n), P = "clientHeight", T = "clientWidth";
    if (k === Qt(n) && (k = uo(n), wr(k).position !== "static" && s === "absolute" && (P = "scrollHeight", T = "scrollWidth")), k = k, o === Dt || (o === Ft || o === gn) && i === Ks) {
      x = vn;
      var M = d && k === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[P]
      );
      g -= M - r.height, g *= l ? 1 : -1;
    }
    if (o === Ft || (o === Dt || o === vn) && i === Ks) {
      b = gn;
      var $ = d && k === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[T]
      );
      p -= $ - r.width, p *= l ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: s
  }, u && a8), U = c === !0 ? s8({
    x: p,
    y: g
  }, Qt(n)) : {
    x: p,
    y: g
  };
  if (p = U.x, g = U.y, l) {
    var W;
    return Object.assign({}, D, (W = {}, W[x] = h ? "0" : "", W[b] = m ? "0" : "", W.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + g + "px)" : "translate3d(" + p + "px, " + g + "px, 0)", W));
  }
  return Object.assign({}, D, (t = {}, t[x] = h ? g + "px" : "", t[b] = m ? p + "px" : "", t.transform = "", t));
}
function l8(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, a = i === void 0 ? !0 : i, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: Xn(t.placement),
    variation: la(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, w1(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, w1(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const u8 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: l8,
  data: {}
};
var eu = {
  passive: !0
};
function c8(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, a = r.resize, s = a === void 0 ? !0 : a, l = Qt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, eu);
  }), s && l.addEventListener("resize", n.update, eu), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, eu);
    }), s && l.removeEventListener("resize", n.update, eu);
  };
}
const d8 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: c8,
  data: {}
};
var f8 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function zu(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return f8[t];
  });
}
var p8 = {
  start: "end",
  end: "start"
};
function C1(e) {
  return e.replace(/start|end/g, function(t) {
    return p8[t];
  });
}
function ig(e) {
  var t = Qt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function ag(e) {
  return sa(uo(e)).left + ig(e).scrollLeft;
}
function h8(e, t) {
  var n = Qt(e), r = uo(e), o = n.visualViewport, i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var u = KP();
    (u || !u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + ag(e),
    y: l
  };
}
function m8(e) {
  var t, n = uo(e), r = ig(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ao(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Ao(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + ag(e), l = -r.scrollTop;
  return wr(o || n).direction === "rtl" && (s += Ao(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function sg(e) {
  var t = wr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function JP(e) {
  return ["html", "body", "#document"].indexOf(Qn(e)) >= 0 ? e.ownerDocument.body : pn(e) && sg(e) ? e : JP(Fd(e));
}
function ms(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = JP(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Qt(r), a = o ? [i].concat(i.visualViewport || [], sg(r) ? r : []) : r, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(ms(Fd(a)))
  );
}
function Gh(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function v8(e, t) {
  var n = sa(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function k1(e, t, n) {
  return t === GP ? Gh(h8(e, n)) : jo(t) ? v8(t, n) : Gh(m8(uo(e)));
}
function g8(e) {
  var t = ms(Fd(e)), n = ["absolute", "fixed"].indexOf(wr(e).position) >= 0, r = n && pn(e) ? pl(e) : e;
  return jo(r) ? t.filter(function(o) {
    return jo(o) && qP(o, r) && Qn(o) !== "body";
  }) : [];
}
function y8(e, t, n, r) {
  var o = t === "clippingParents" ? g8(e) : [].concat(t), i = [].concat(o, [n]), a = i[0], s = i.reduce(function(l, u) {
    var c = k1(e, u, r);
    return l.top = Ao(c.top, l.top), l.right = $c(c.right, l.right), l.bottom = $c(c.bottom, l.bottom), l.left = Ao(c.left, l.left), l;
  }, k1(e, a, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function e2(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Xn(r) : null, i = r ? la(r) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case Dt:
      l = {
        x: a,
        y: t.y - n.height
      };
      break;
    case vn:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case gn:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Ft:
      l = {
        x: t.x - n.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? og(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case ia:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Ks:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function qs(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, a = i === void 0 ? e.strategy : i, s = n.boundary, l = s === void 0 ? L6 : s, u = n.rootBoundary, c = u === void 0 ? GP : u, d = n.elementContext, f = d === void 0 ? Da : d, p = n.altBoundary, v = p === void 0 ? !1 : p, g = n.padding, S = g === void 0 ? 0 : g, m = QP(typeof S != "number" ? S : ZP(S, fl)), h = f === Da ? V6 : Da, b = e.rects.popper, x = e.elements[v ? h : f], C = y8(jo(x) ? x : x.contextElement || uo(e.elements.popper), l, c, a), k = sa(e.elements.reference), P = e2({
    reference: k,
    element: b,
    strategy: "absolute",
    placement: o
  }), T = Gh(Object.assign({}, b, P)), M = f === Da ? T : k, $ = {
    top: C.top - M.top + m.top,
    bottom: M.bottom - C.bottom + m.bottom,
    left: C.left - M.left + m.left,
    right: M.right - C.right + m.right
  }, D = e.modifiersData.offset;
  if (f === Da && D) {
    var U = D[o];
    Object.keys($).forEach(function(W) {
      var L = [gn, vn].indexOf(W) >= 0 ? 1 : -1, H = [Dt, vn].indexOf(W) >= 0 ? "y" : "x";
      $[W] += U[H] * L;
    });
  }
  return $;
}
function b8(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? YP : l, c = la(r), d = c ? s ? S1 : S1.filter(function(v) {
    return la(v) === c;
  }) : fl, f = d.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(v, g) {
    return v[g] = qs(e, {
      placement: g,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[Xn(g)], v;
  }, {});
  return Object.keys(p).sort(function(v, g) {
    return p[v] - p[g];
  });
}
function S8(e) {
  if (Xn(e) === tg)
    return [];
  var t = zu(e);
  return [C1(e), t, C1(t)];
}
function x8(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, v = p === void 0 ? !0 : p, g = n.allowedAutoPlacements, S = t.options.placement, m = Xn(S), h = m === S, b = l || (h || !v ? [zu(S)] : S8(S)), x = [S].concat(b).reduce(function(J, ae) {
      return J.concat(Xn(ae) === tg ? b8(t, {
        placement: ae,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: g
      }) : ae);
    }, []), C = t.rects.reference, k = t.rects.popper, P = /* @__PURE__ */ new Map(), T = !0, M = x[0], $ = 0; $ < x.length; $++) {
      var D = x[$], U = Xn(D), W = la(D) === ia, L = [Dt, vn].indexOf(U) >= 0, H = L ? "width" : "height", K = qs(t, {
        placement: D,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), ne = L ? W ? gn : Ft : W ? vn : Dt;
      C[H] > k[H] && (ne = zu(ne));
      var R = zu(ne), F = [];
      if (i && F.push(K[U] <= 0), s && F.push(K[ne] <= 0, K[R] <= 0), F.every(function(J) {
        return J;
      })) {
        M = D, T = !1;
        break;
      }
      P.set(D, F);
    }
    if (T)
      for (var B = v ? 3 : 1, N = function(ae) {
        var re = x.find(function(ie) {
          var pe = P.get(ie);
          if (pe)
            return pe.slice(0, ae).every(function(we) {
              return we;
            });
        });
        if (re)
          return M = re, "break";
      }, G = B; G > 0; G--) {
        var z = N(G);
        if (z === "break")
          break;
      }
    t.placement !== M && (t.modifiersData[r]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const w8 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: x8,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function P1(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function T1(e) {
  return [Dt, gn, vn, Ft].some(function(t) {
    return e[t] >= 0;
  });
}
function C8(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = qs(t, {
    elementContext: "reference"
  }), s = qs(t, {
    altBoundary: !0
  }), l = P1(a, r), u = P1(s, o, i), c = T1(l), d = T1(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": d
  });
}
const k8 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: C8
};
function P8(e, t, n) {
  var r = Xn(e), o = [Ft, Dt].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [Ft, gn].indexOf(r) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function T8(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = YP.reduce(function(c, d) {
    return c[d] = P8(d, t.rects, i), c;
  }, {}), s = a[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const E8 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: T8
};
function _8(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = e2({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const O8 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: _8,
  data: {}
};
function M8(e) {
  return e === "x" ? "y" : "x";
}
function I8(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, v = n.tetherOffset, g = v === void 0 ? 0 : v, S = qs(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), m = Xn(t.placement), h = la(t.placement), b = !h, x = og(m), C = M8(x), k = t.modifiersData.popperOffsets, P = t.rects.reference, T = t.rects.popper, M = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, $ = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, U = {
    x: 0,
    y: 0
  };
  if (k) {
    if (i) {
      var W, L = x === "y" ? Dt : Ft, H = x === "y" ? vn : gn, K = x === "y" ? "height" : "width", ne = k[x], R = ne + S[L], F = ne - S[H], B = p ? -T[K] / 2 : 0, N = h === ia ? P[K] : T[K], G = h === ia ? -T[K] : -P[K], z = t.elements.arrow, J = p && z ? rg(z) : {
        width: 0,
        height: 0
      }, ae = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : XP(), re = ae[L], ie = ae[H], pe = hs(0, P[K], J[K]), we = b ? P[K] / 2 - B - pe - re - $.mainAxis : N - pe - re - $.mainAxis, Qe = b ? -P[K] / 2 + B + pe + ie + $.mainAxis : G + pe + ie + $.mainAxis, Ye = t.elements.arrow && pl(t.elements.arrow), tn = Ye ? x === "y" ? Ye.clientTop || 0 : Ye.clientLeft || 0 : 0, bn = (W = D == null ? void 0 : D[x]) != null ? W : 0, Pr = ne + we - bn - tn, ce = ne + Qe - bn, ft = hs(p ? $c(R, Pr) : R, ne, p ? Ao(F, ce) : F);
      k[x] = ft, U[x] = ft - ne;
    }
    if (s) {
      var He, jt = x === "x" ? Dt : Ft, Tr = x === "x" ? vn : gn, pt = k[C], $n = C === "y" ? "height" : "width", Er = pt + S[jt], nn = pt - S[Tr], qo = [Dt, Ft].indexOf(m) !== -1, va = (He = D == null ? void 0 : D[C]) != null ? He : 0, vl = qo ? Er : pt - P[$n] - T[$n] - va + $.altAxis, gl = qo ? pt + P[$n] + T[$n] - va - $.altAxis : nn, co = p && qo ? t8(vl, pt, gl) : hs(p ? vl : Er, pt, p ? gl : nn);
      k[C] = co, U[C] = co - pt;
    }
    t.modifiersData[r] = U;
  }
}
const $8 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: I8,
  requiresIfExists: ["offset"]
};
function R8(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function A8(e) {
  return e === Qt(e) || !pn(e) ? ig(e) : R8(e);
}
function D8(e) {
  var t = e.getBoundingClientRect(), n = aa(t.width) / e.offsetWidth || 1, r = aa(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function F8(e, t, n) {
  n === void 0 && (n = !1);
  var r = pn(t), o = pn(t) && D8(t), i = uo(t), a = sa(e, o, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Qn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  sg(i)) && (s = A8(t)), pn(t) ? (l = sa(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = ag(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function z8(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || o(i);
  }), r;
}
function L8(e) {
  var t = z8(e);
  return q6.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function V8(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function N8(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var E1 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function _1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function j8(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? E1 : o;
  return function(s, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, E1, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, p = {
      state: c,
      setOptions: function(m) {
        var h = typeof m == "function" ? m(c.options) : m;
        g(), c.options = Object.assign({}, i, c.options, h), c.scrollParents = {
          reference: jo(s) ? ms(s) : s.contextElement ? ms(s.contextElement) : [],
          popper: ms(l)
        };
        var b = L8(N8([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = b.filter(function(x) {
          return x.enabled;
        }), v(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var m = c.elements, h = m.reference, b = m.popper;
          if (_1(h, b)) {
            c.rects = {
              reference: F8(h, pl(b), c.options.strategy === "fixed"),
              popper: rg(b)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function($) {
              return c.modifiersData[$.name] = Object.assign({}, $.data);
            });
            for (var x = 0; x < c.orderedModifiers.length; x++) {
              if (c.reset === !0) {
                c.reset = !1, x = -1;
                continue;
              }
              var C = c.orderedModifiers[x], k = C.fn, P = C.options, T = P === void 0 ? {} : P, M = C.name;
              typeof k == "function" && (c = k({
                state: c,
                options: T,
                name: M,
                instance: p
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: V8(function() {
        return new Promise(function(S) {
          p.forceUpdate(), S(c);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!_1(s, l))
      return p;
    p.setOptions(u).then(function(S) {
      !f && u.onFirstUpdate && u.onFirstUpdate(S);
    });
    function v() {
      c.orderedModifiers.forEach(function(S) {
        var m = S.name, h = S.options, b = h === void 0 ? {} : h, x = S.effect;
        if (typeof x == "function") {
          var C = x({
            state: c,
            name: m,
            instance: p,
            options: b
          }), k = function() {
          };
          d.push(C || k);
        }
      });
    }
    function g() {
      d.forEach(function(S) {
        return S();
      }), d = [];
    }
    return p;
  };
}
var B8 = [d8, O8, u8, Z6, E8, w8, $8, i8, k8], W8 = /* @__PURE__ */ j8({
  defaultModifiers: B8
});
function t2(e = {}) {
  const {
    enabled: t = !0,
    modifiers: n,
    placement: r = "bottom",
    strategy: o = "absolute",
    arrowPadding: i = 8,
    eventListeners: a = !0,
    offset: s,
    gutter: l = 8,
    flip: u = !0,
    boundary: c = "clippingParents",
    preventOverflow: d = !0,
    matchWidth: f,
    direction: p = "ltr"
  } = e, v = y.useRef(null), g = y.useRef(null), S = y.useRef(null), m = z6(r, p), h = y.useRef(() => {
  }), b = y.useCallback(() => {
    var $;
    !t || !v.current || !g.current || (($ = h.current) == null || $.call(h), S.current = W8(v.current, g.current, {
      placement: m,
      modifiers: [
        A6,
        I6,
        M6,
        {
          ...O6,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ..._6(a)
        },
        {
          name: "arrow",
          options: { padding: i }
        },
        {
          name: "offset",
          options: {
            offset: s ?? [0, l]
          }
        },
        {
          name: "flip",
          enabled: !!u,
          options: { padding: 8 }
        },
        {
          name: "preventOverflow",
          enabled: !!d,
          options: { boundary: c }
        },
        // allow users override internal modifiers
        ...n ?? []
      ],
      strategy: o
    }), S.current.forceUpdate(), h.current = S.current.destroy);
  }, [
    m,
    t,
    n,
    f,
    a,
    i,
    s,
    l,
    u,
    d,
    c,
    o
  ]);
  y.useEffect(() => () => {
    var $;
    !v.current && !g.current && (($ = S.current) == null || $.destroy(), S.current = null);
  }, []);
  const x = y.useCallback(
    ($) => {
      v.current = $, b();
    },
    [b]
  ), C = y.useCallback(
    ($ = {}, D = null) => ({
      ...$,
      ref: Ht(x, D)
    }),
    [x]
  ), k = y.useCallback(
    ($) => {
      g.current = $, b();
    },
    [b]
  ), P = y.useCallback(
    ($ = {}, D = null) => ({
      ...$,
      ref: Ht(k, D),
      style: {
        ...$.style,
        position: o,
        minWidth: f ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [o, k, f]
  ), T = y.useCallback(($ = {}, D = null) => {
    const { size: U, shadowColor: W, bg: L, style: H, ...K } = $;
    return {
      ...K,
      ref: D,
      "data-popper-arrow": "",
      style: H8($)
    };
  }, []), M = y.useCallback(
    ($ = {}, D = null) => ({
      ...$,
      ref: D,
      "data-popper-arrow-inner": ""
    }),
    []
  );
  return {
    update() {
      var $;
      ($ = S.current) == null || $.update();
    },
    forceUpdate() {
      var $;
      ($ = S.current) == null || $.forceUpdate();
    },
    transformOrigin: yt.transformOrigin.varRef,
    referenceRef: x,
    popperRef: k,
    getPopperProps: P,
    getArrowProps: T,
    getArrowInnerProps: M,
    getReferenceProps: C
  };
}
function H8(e) {
  const { size: t, shadowColor: n, bg: r, style: o } = e, i = { ...o, position: "absolute" };
  return t && (i["--popper-arrow-size"] = t), n && (i["--popper-arrow-shadow-color"] = n), r && (i["--popper-arrow-bg"] = r), i;
}
function n2(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, i = js(n), a = js(t), [s, l] = y.useState(e.defaultIsOpen || !1), u = r !== void 0 ? r : s, c = r !== void 0, d = y.useId(), f = o ?? `disclosure-${d}`, p = y.useCallback(() => {
    c || l(!1), a == null || a();
  }, [c, a]), v = y.useCallback(() => {
    c || l(!0), i == null || i();
  }, [c, i]), g = y.useCallback(() => {
    u ? p() : v();
  }, [u, v, p]);
  function S(h = {}) {
    return {
      ...h,
      "aria-expanded": u,
      "aria-controls": f,
      onClick(b) {
        var x;
        (x = h.onClick) == null || x.call(h, b), g();
      }
    };
  }
  function m(h = {}) {
    return {
      ...h,
      hidden: !u,
      id: f
    };
  }
  return {
    isOpen: u,
    onOpen: v,
    onClose: p,
    onToggle: g,
    isControlled: c,
    getButtonProps: S,
    getDisclosureProps: m
  };
}
function U8(e) {
  const { ref: t, handler: n, enabled: r = !0 } = e, o = js(n), a = y.useRef({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }).current;
  y.useEffect(() => {
    if (!r)
      return;
    const s = (d) => {
      ap(d, t) && (a.isPointerDown = !0);
    }, l = (d) => {
      if (a.ignoreEmulatedMouseEvents) {
        a.ignoreEmulatedMouseEvents = !1;
        return;
      }
      a.isPointerDown && n && ap(d, t) && (a.isPointerDown = !1, o(d));
    }, u = (d) => {
      a.ignoreEmulatedMouseEvents = !0, n && a.isPointerDown && ap(d, t) && (a.isPointerDown = !1, o(d));
    }, c = r2(t.current);
    return c.addEventListener("mousedown", s, !0), c.addEventListener("mouseup", l, !0), c.addEventListener("touchstart", s, !0), c.addEventListener("touchend", u, !0), () => {
      c.removeEventListener("mousedown", s, !0), c.removeEventListener("mouseup", l, !0), c.removeEventListener("touchstart", s, !0), c.removeEventListener("touchend", u, !0);
    };
  }, [n, t, o, a, r]);
}
function ap(e, t) {
  var n;
  const r = e.target;
  return r && !r2(r).contains(r) ? !1 : !((n = t.current) != null && n.contains(r));
}
function r2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function o2(e) {
  const { isOpen: t, ref: n } = e, [r, o] = y.useState(t), [i, a] = y.useState(!1);
  return y.useEffect(() => {
    i || (o(t), a(!0));
  }, [t, i, r]), Uv(
    () => n.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !r),
    onComplete() {
      var l;
      const u = r6(n.current), c = new u.CustomEvent("animationend", { bubbles: !0 });
      (l = n.current) == null || l.dispatchEvent(c);
    }
  };
}
function G8(e) {
  const { wasSelected: t, enabled: n, isSelected: r, mode: o = "unmount" } = e;
  return !!(!n || r || o === "keepMounted" && t);
}
var [
  Y8,
  CG,
  K8,
  kG
] = Ej(), [q8, PG] = St({
  strict: !1,
  name: "MenuContext"
});
function X8(e, ...t) {
  const n = y.useId(), r = e || n;
  return y.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
function Q8(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function Z8(e = {}) {
  const {
    id: t,
    closeOnSelect: n = !0,
    closeOnBlur: r = !0,
    initialFocusRef: o,
    autoSelect: i = !0,
    isLazy: a,
    isOpen: s,
    defaultIsOpen: l,
    onClose: u,
    onOpen: c,
    placement: d = "bottom-start",
    lazyBehavior: f = "unmount",
    direction: p,
    computePositionOnMount: v = !1,
    ...g
  } = e, S = y.useRef(null), m = y.useRef(null), h = K8(), b = y.useCallback(() => {
    requestAnimationFrame(() => {
      var z;
      (z = S.current) == null || z.focus({ preventScroll: !1 });
    });
  }, []), x = y.useCallback(() => {
    const z = setTimeout(() => {
      var J;
      if (o)
        (J = o.current) == null || J.focus();
      else {
        const ae = h.firstEnabled();
        ae && W(ae.index);
      }
    });
    R.current.add(z);
  }, [h, o]), C = y.useCallback(() => {
    const z = setTimeout(() => {
      const J = h.lastEnabled();
      J && W(J.index);
    });
    R.current.add(z);
  }, [h]), k = y.useCallback(() => {
    c == null || c(), i ? x() : b();
  }, [i, x, b, c]), { isOpen: P, onOpen: T, onClose: M, onToggle: $ } = n2({
    isOpen: s,
    defaultIsOpen: l,
    onClose: u,
    onOpen: k
  });
  U8({
    enabled: P && r,
    ref: S,
    handler: (z) => {
      var J;
      (J = m.current) != null && J.contains(z.target) || M();
    }
  });
  const D = t2({
    ...g,
    enabled: P || v,
    placement: d,
    direction: p
  }), [U, W] = y.useState(-1);
  Bs(() => {
    P || W(-1);
  }, [P]), UP(S, {
    focusRef: m,
    visible: P,
    shouldFocus: !0
  });
  const L = o2({ isOpen: P, ref: S }), [H, K] = X8(t, "menu-button", "menu-list"), ne = y.useCallback(() => {
    T(), b();
  }, [T, b]), R = y.useRef(/* @__PURE__ */ new Set([]));
  y.useEffect(() => {
    const z = R.current;
    return () => {
      z.forEach((J) => clearTimeout(J)), z.clear();
    };
  }, []);
  const F = y.useCallback(() => {
    T(), x();
  }, [x, T]), B = y.useCallback(() => {
    T(), C();
  }, [T, C]), N = y.useCallback(() => {
    var z, J;
    const ae = Q8(S.current), re = (z = S.current) == null ? void 0 : z.contains(ae.activeElement);
    if (!(P && !re))
      return;
    const pe = (J = h.item(U)) == null ? void 0 : J.node;
    pe == null || pe.focus({ preventScroll: !0 });
  }, [P, U, h]), G = y.useRef(null);
  return {
    openAndFocusMenu: ne,
    openAndFocusFirstItem: F,
    openAndFocusLastItem: B,
    onTransitionEnd: N,
    unstable__animationState: L,
    descendants: h,
    popper: D,
    buttonId: H,
    menuId: K,
    forceUpdate: D.forceUpdate,
    orientation: "vertical",
    isOpen: P,
    onToggle: $,
    onOpen: T,
    onClose: M,
    menuRef: S,
    buttonRef: m,
    focusedIndex: U,
    closeOnSelect: n,
    closeOnBlur: r,
    autoSelect: i,
    setFocusedIndex: W,
    isLazy: a,
    lazyBehavior: f,
    initialFocusRef: o,
    rafId: G
  };
}
var [J8, e9] = St({
  name: "MenuStylesContext",
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
}), i2 = (e) => {
  const { children: t } = e, n = Lt("Menu", e), r = Zn(e), { direction: o } = ao(), { descendants: i, ...a } = Z8({ ...r, direction: o }), s = y.useMemo(() => a, [a]), { isOpen: l, onClose: u, forceUpdate: c } = s;
  return /* @__PURE__ */ E.jsx(Y8, { value: i, children: /* @__PURE__ */ E.jsx(q8, { value: s, children: /* @__PURE__ */ E.jsx(J8, { value: n, children: Hn(t, { isOpen: l, onClose: u, forceUpdate: c }) }) }) });
};
i2.displayName = "Menu";
var a2 = (e) => {
  const { className: t, children: n, ...r } = e, o = e9(), i = y.Children.only(n), a = y.isValidElement(i) ? y.cloneElement(i, {
    focusable: "false",
    "aria-hidden": !0,
    className: Se("chakra-menu__icon", i.props.className)
  }) : null, s = Se("chakra-menu__icon-wrapper", t);
  return /* @__PURE__ */ E.jsx(oe.span, { className: s, ...r, __css: o.icon, children: a });
};
a2.displayName = "MenuIcon";
var t9 = Object.defineProperty, n9 = (e, t, n) => t in e ? t9(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, r9 = (e, t, n) => (n9(e, typeof t != "symbol" ? t + "" : t, n), n), o9 = class {
  constructor() {
    r9(this, "modals"), this.modals = /* @__PURE__ */ new Map();
  }
  add(e) {
    return this.modals.set(e, this.modals.size + 1), this.modals.size;
  }
  remove(e) {
    this.modals.delete(e);
  }
  isTopModal(e) {
    return e ? this.modals.get(e) === this.modals.size : !1;
  }
}, Yh = new o9();
function s2(e, t) {
  const [n, r] = y.useState(0);
  return y.useEffect(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const i = Yh.add(o);
        r(i);
      }
      return () => {
        Yh.remove(o), r(0);
      };
    }
  }, [t, e]), n;
}
var i9 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ti = /* @__PURE__ */ new WeakMap(), tu = /* @__PURE__ */ new WeakMap(), nu = {}, sp = 0, l2 = function(e) {
  return e && (e.host || l2(e.parentNode));
}, a9 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = l2(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, s9 = function(e, t, n, r) {
  var o = a9(t, Array.isArray(e) ? e : [e]);
  nu[n] || (nu[n] = /* @__PURE__ */ new WeakMap());
  var i = nu[n], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        c(f);
      else {
        var p = f.getAttribute(r), v = p !== null && p !== "false", g = (ti.get(f) || 0) + 1, S = (i.get(f) || 0) + 1;
        ti.set(f, g), i.set(f, S), a.push(f), g === 1 && v && tu.set(f, !0), S === 1 && f.setAttribute(n, "true"), v || f.setAttribute(r, "true");
      }
    });
  };
  return c(t), s.clear(), sp++, function() {
    a.forEach(function(d) {
      var f = ti.get(d) - 1, p = i.get(d) - 1;
      ti.set(d, f), i.set(d, p), f || (tu.has(d) || d.removeAttribute(r), tu.delete(d)), p || d.removeAttribute(n);
    }), sp--, sp || (ti = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakMap(), tu = /* @__PURE__ */ new WeakMap(), nu = {});
  };
}, l9 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || i9(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), s9(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function u9(e) {
  const {
    isOpen: t,
    onClose: n,
    id: r,
    closeOnOverlayClick: o = !0,
    closeOnEsc: i = !0,
    useInert: a = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, u = y.useRef(null), c = y.useRef(null), [d, f, p] = d9(
    r,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  c9(u, t && a);
  const v = s2(u, t), g = y.useRef(null), S = y.useCallback((M) => {
    g.current = M.target;
  }, []), m = y.useCallback(
    (M) => {
      M.key === "Escape" && (M.stopPropagation(), i && (n == null || n()), l == null || l());
    },
    [i, n, l]
  ), [h, b] = y.useState(!1), [x, C] = y.useState(!1), k = y.useCallback(
    (M = {}, $ = null) => ({
      role: "dialog",
      ...M,
      ref: Ht($, u),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": h ? f : void 0,
      "aria-describedby": x ? p : void 0,
      onClick: lt(
        M.onClick,
        (D) => D.stopPropagation()
      )
    }),
    [p, x, d, f, h]
  ), P = y.useCallback(
    (M) => {
      M.stopPropagation(), g.current === M.target && Yh.isTopModal(u.current) && (o && (n == null || n()), s == null || s());
    },
    [n, o, s]
  ), T = y.useCallback(
    (M = {}, $ = null) => ({
      ...M,
      ref: Ht($, c),
      onClick: lt(M.onClick, P),
      onKeyDown: lt(M.onKeyDown, m),
      onMouseDown: lt(M.onMouseDown, S)
    }),
    [m, S, P]
  );
  return {
    isOpen: t,
    onClose: n,
    headerId: f,
    bodyId: p,
    setBodyMounted: C,
    setHeaderMounted: b,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: k,
    getDialogContainerProps: T,
    index: v
  };
}
function c9(e, t) {
  const n = e.current;
  y.useEffect(() => {
    if (!(!e.current || !t))
      return l9(e.current);
  }, [t, e, n]);
}
function d9(e, ...t) {
  const n = y.useId(), r = e || n;
  return y.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
var [f9, hl] = St({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [p9, ma] = St({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), u2 = (e) => {
  const t = {
    scrollBehavior: "outside",
    autoFocus: !0,
    trapFocus: !0,
    returnFocusOnClose: !0,
    blockScrollOnMount: !0,
    allowPinchZoom: !1,
    motionPreset: "scale",
    lockFocusAcrossFrames: !0,
    ...e
  }, {
    portalProps: n,
    children: r,
    autoFocus: o,
    trapFocus: i,
    initialFocusRef: a,
    finalFocusRef: s,
    returnFocusOnClose: l,
    blockScrollOnMount: u,
    allowPinchZoom: c,
    preserveScrollBarGap: d,
    motionPreset: f,
    lockFocusAcrossFrames: p,
    onCloseComplete: v
  } = t, g = Lt("Modal", t), m = {
    ...u9(t),
    autoFocus: o,
    trapFocus: i,
    initialFocusRef: a,
    finalFocusRef: s,
    returnFocusOnClose: l,
    blockScrollOnMount: u,
    allowPinchZoom: c,
    preserveScrollBarGap: d,
    motionPreset: f,
    lockFocusAcrossFrames: p
  };
  return /* @__PURE__ */ E.jsx(p9, { value: m, children: /* @__PURE__ */ E.jsx(f9, { value: g, children: /* @__PURE__ */ E.jsx(Id, { onExitComplete: v, children: m.isOpen && /* @__PURE__ */ E.jsx(ol, { ...n, children: r }) }) }) });
};
u2.displayName = "Modal";
var Lu = "right-scroll-bar-position", Vu = "width-before-scroll-bar", h9 = "with-scroll-bars-hidden", m9 = "--removed-body-scroll-bar-size", c2 = sP(), lp = function() {
}, zd = y.forwardRef(function(e, t) {
  var n = y.useRef(null), r = y.useState({
    onScrollCapture: lp,
    onWheelCapture: lp,
    onTouchMoveCapture: lp
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, v = e.inert, g = e.allowPinchZoom, S = e.as, m = S === void 0 ? "div" : S, h = e.gapMode, b = oP(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x = f, C = rP([n, t]), k = Wn(Wn({}, b), o);
  return y.createElement(
    y.Fragment,
    null,
    c && y.createElement(x, { sideCar: c2, removeScrollBar: u, shards: d, noIsolation: p, inert: v, setCallbacks: i, allowPinchZoom: !!g, lockRef: n, gapMode: h }),
    a ? y.cloneElement(y.Children.only(s), Wn(Wn({}, k), { ref: C })) : y.createElement(m, Wn({}, k, { className: l, ref: C }), s)
  );
});
zd.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
zd.classNames = {
  fullWidth: Vu,
  zeroRight: Lu
};
var O1, v9 = function() {
  if (O1)
    return O1;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function g9() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = v9();
  return t && e.setAttribute("nonce", t), e;
}
function y9(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function b9(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var S9 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = g9()) && (y9(t, n), b9(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, x9 = function() {
  var e = S9();
  return function(t, n) {
    y.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, d2 = function() {
  var e = x9(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, w9 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, up = function(e) {
  return parseInt(e || "", 10) || 0;
}, C9 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [up(n), up(r), up(o)];
}, k9 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return w9;
  var t = C9(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, P9 = d2(), T9 = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(h9, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Lu, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Vu, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Lu, " .").concat(Lu, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Vu, " .").concat(Vu, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(m9, ": ").concat(s, `px;
  }
`);
}, E9 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = y.useMemo(function() {
    return k9(o);
  }, [o]);
  return y.createElement(P9, { styles: T9(i, !t, o, n ? "" : "!important") });
}, Kh = !1;
if (typeof window < "u")
  try {
    var ru = Object.defineProperty({}, "passive", {
      get: function() {
        return Kh = !0, !0;
      }
    });
    window.addEventListener("test", ru, ru), window.removeEventListener("test", ru, ru);
  } catch {
    Kh = !1;
  }
var ni = Kh ? { passive: !1 } : !1, _9 = function(e) {
  return e.tagName === "TEXTAREA";
}, f2 = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !_9(e) && n[t] === "visible")
  );
}, O9 = function(e) {
  return f2(e, "overflowY");
}, M9 = function(e) {
  return f2(e, "overflowX");
}, M1 = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = p2(e, r);
    if (o) {
      var i = h2(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, I9 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, $9 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, p2 = function(e, t) {
  return e === "v" ? O9(t) : M9(t);
}, h2 = function(e, t) {
  return e === "v" ? I9(t) : $9(t);
}, R9 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, A9 = function(e, t, n, r, o) {
  var i = R9(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, l = t.contains(s), u = !1, c = a > 0, d = 0, f = 0;
  do {
    var p = h2(e, s), v = p[0], g = p[1], S = p[2], m = g - S - i * v;
    (v || m) && p2(e, s) && (d += m, f += v), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u;
}, ou = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, I1 = function(e) {
  return [e.deltaX, e.deltaY];
}, $1 = function(e) {
  return e && "current" in e ? e.current : e;
}, D9 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, F9 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, z9 = 0, ri = [];
function L9(e) {
  var t = y.useRef([]), n = y.useRef([0, 0]), r = y.useRef(), o = y.useState(z9++)[0], i = y.useState(d2)[0], a = y.useRef(e);
  y.useEffect(function() {
    a.current = e;
  }, [e]), y.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = oB([e.lockRef.current], (e.shards || []).map($1), !0).filter(Boolean);
      return g.forEach(function(S) {
        return S.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(S) {
          return S.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = y.useCallback(function(g, S) {
    if ("touches" in g && g.touches.length === 2)
      return !a.current.allowPinchZoom;
    var m = ou(g), h = n.current, b = "deltaX" in g ? g.deltaX : h[0] - m[0], x = "deltaY" in g ? g.deltaY : h[1] - m[1], C, k = g.target, P = Math.abs(b) > Math.abs(x) ? "h" : "v";
    if ("touches" in g && P === "h" && k.type === "range")
      return !1;
    var T = M1(P, k);
    if (!T)
      return !0;
    if (T ? C = P : (C = P === "v" ? "h" : "v", T = M1(P, k)), !T)
      return !1;
    if (!r.current && "changedTouches" in g && (b || x) && (r.current = C), !C)
      return !0;
    var M = r.current || C;
    return A9(M, S, g, M === "h" ? b : x, !0);
  }, []), l = y.useCallback(function(g) {
    var S = g;
    if (!(!ri.length || ri[ri.length - 1] !== i)) {
      var m = "deltaY" in S ? I1(S) : ou(S), h = t.current.filter(function(C) {
        return C.name === S.type && (C.target === S.target || S.target === C.shadowParent) && D9(C.delta, m);
      })[0];
      if (h && h.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!h) {
        var b = (a.current.shards || []).map($1).filter(Boolean).filter(function(C) {
          return C.contains(S.target);
        }), x = b.length > 0 ? s(S, b[0]) : !a.current.noIsolation;
        x && S.cancelable && S.preventDefault();
      }
    }
  }, []), u = y.useCallback(function(g, S, m, h) {
    var b = { name: g, delta: S, target: m, should: h, shadowParent: V9(m) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== b;
      });
    }, 1);
  }, []), c = y.useCallback(function(g) {
    n.current = ou(g), r.current = void 0;
  }, []), d = y.useCallback(function(g) {
    u(g.type, I1(g), g.target, s(g, e.lockRef.current));
  }, []), f = y.useCallback(function(g) {
    u(g.type, ou(g), g.target, s(g, e.lockRef.current));
  }, []);
  y.useEffect(function() {
    return ri.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, ni), document.addEventListener("touchmove", l, ni), document.addEventListener("touchstart", c, ni), function() {
      ri = ri.filter(function(g) {
        return g !== i;
      }), document.removeEventListener("wheel", l, ni), document.removeEventListener("touchmove", l, ni), document.removeEventListener("touchstart", c, ni);
    };
  }, []);
  var p = e.removeScrollBar, v = e.inert;
  return y.createElement(
    y.Fragment,
    null,
    v ? y.createElement(i, { styles: F9(o) }) : null,
    p ? y.createElement(E9, { gapMode: e.gapMode }) : null
  );
}
function V9(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const N9 = iB(c2, L9);
var m2 = y.forwardRef(function(e, t) {
  return y.createElement(zd, Wn({}, e, { ref: t, sideCar: N9 }));
});
m2.classNames = zd.classNames;
const j9 = m2;
function B9(e) {
  const {
    autoFocus: t,
    trapFocus: n,
    dialogRef: r,
    initialFocusRef: o,
    blockScrollOnMount: i,
    allowPinchZoom: a,
    finalFocusRef: s,
    returnFocusOnClose: l,
    preserveScrollBarGap: u,
    lockFocusAcrossFrames: c,
    isOpen: d
  } = ma(), [f, p] = Tk();
  y.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const v = s2(r, d);
  return /* @__PURE__ */ E.jsx(
    VP,
    {
      autoFocus: t,
      isDisabled: !n,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: r,
      lockFocusAcrossFrames: c,
      children: /* @__PURE__ */ E.jsx(
        j9,
        {
          removeScrollBar: !u,
          allowPinchZoom: a,
          enabled: v === 1 && i,
          forwardProps: !0,
          children: e.children
        }
      )
    }
  );
}
var [W9, H9] = St(), U9 = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function G9(e, t) {
  var n, r;
  if (e)
    return (r = (n = U9[e]) == null ? void 0 : n[t]) != null ? r : e;
}
function Y9(e) {
  var t;
  const {
    isOpen: n,
    onClose: r,
    placement: o = "right",
    children: i,
    ...a
  } = e, s = ao(), l = (t = s.components) == null ? void 0 : t.Drawer, u = G9(o, s.direction);
  return /* @__PURE__ */ E.jsx(W9, { value: { placement: u }, children: /* @__PURE__ */ E.jsx(
    u2,
    {
      isOpen: n,
      onClose: r,
      styleConfig: l,
      ...a,
      children: i
    }
  ) });
}
var K9 = oe(Kk), v2 = Ee(
  (e, t) => {
    const {
      className: n,
      children: r,
      motionProps: o,
      containerProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: u } = ma(), c = s(a, t), d = l(i), f = Se("chakra-modal__content", n), p = hl(), v = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...p.dialog
    }, g = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...p.dialogContainer
    }, { placement: S } = H9();
    return /* @__PURE__ */ E.jsx(B9, { children: /* @__PURE__ */ E.jsx(
      oe.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: g,
        children: /* @__PURE__ */ E.jsx(
          K9,
          {
            motionProps: o,
            direction: S,
            in: u,
            className: f,
            ...c,
            __css: v,
            children: r
          }
        )
      }
    ) });
  }
);
v2.displayName = "DrawerContent";
var g2 = Ee(
  (e, t) => {
    const { className: n, ...r } = e, { headerId: o, setHeaderMounted: i } = ma();
    y.useEffect(() => (i(!0), () => i(!1)), [i]);
    const a = Se("chakra-modal__header", n), l = {
      flex: 0,
      ...hl().header
    };
    return /* @__PURE__ */ E.jsx(
      oe.header,
      {
        ref: t,
        className: a,
        id: o,
        ...r,
        __css: l
      }
    );
  }
);
g2.displayName = "ModalHeader";
var q9 = oe(dl.div), y2 = Ee(
  (e, t) => {
    const { className: n, transition: r, motionProps: o, ...i } = e, a = Se("chakra-modal__overlay", n), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...hl().overlay
    }, { motionPreset: u } = ma(), d = o || (u === "none" ? {} : Yk);
    return /* @__PURE__ */ E.jsx(
      q9,
      {
        ...d,
        __css: l,
        ref: t,
        className: a,
        ...i
      }
    );
  }
);
y2.displayName = "ModalOverlay";
var b2 = Ee((e, t) => {
  const { className: n, ...r } = e, { bodyId: o, setBodyMounted: i } = ma();
  y.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = Se("chakra-modal__body", n), s = hl();
  return /* @__PURE__ */ E.jsx(
    oe.div,
    {
      ref: t,
      className: a,
      id: o,
      ...r,
      __css: s.body
    }
  );
});
b2.displayName = "ModalBody";
var S2 = Ee(
  (e, t) => {
    const { onClick: n, className: r, ...o } = e, { onClose: i } = ma(), a = Se("chakra-modal__close-btn", r), s = hl();
    return /* @__PURE__ */ E.jsx(
      Rd,
      {
        ref: t,
        __css: s.closeButton,
        className: a,
        onClick: lt(n, (l) => {
          l.stopPropagation(), i();
        }),
        ...o
      }
    );
  }
);
S2.displayName = "ModalCloseButton";
var [X9, Yo] = St({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), [Q9, ml] = St({
  name: "PopoverStylesContext",
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
}), x2 = Ee(
  function(t, n) {
    const { getHeaderProps: r } = Yo(), o = ml();
    return /* @__PURE__ */ E.jsx(
      oe.header,
      {
        ...r(t, n),
        className: Se("chakra-popover__header", t.className),
        __css: o.header
      }
    );
  }
);
x2.displayName = "PopoverHeader";
function lg(e) {
  const t = y.Children.only(e.children), { getTriggerProps: n } = Yo();
  return y.cloneElement(t, n(t.props, t.ref));
}
lg.displayName = "PopoverTrigger";
var oi = {
  click: "click",
  hover: "hover"
};
function Z9(e = {}) {
  const {
    closeOnBlur: t = !0,
    closeOnEsc: n = !0,
    initialFocusRef: r,
    id: o,
    returnFocusOnClose: i = !0,
    autoFocus: a = !0,
    arrowSize: s,
    arrowShadowColor: l,
    trigger: u = oi.click,
    openDelay: c = 200,
    closeDelay: d = 200,
    isLazy: f,
    lazyBehavior: p = "unmount",
    computePositionOnMount: v,
    ...g
  } = e, { isOpen: S, onClose: m, onOpen: h, onToggle: b } = n2(e), x = y.useRef(null), C = y.useRef(null), k = y.useRef(null), P = y.useRef(!1), T = y.useRef(!1);
  S && (T.current = !0);
  const [M, $] = y.useState(!1), [D, U] = y.useState(!1), W = y.useId(), L = o ?? W, [H, K, ne, R] = [
    "popover-trigger",
    "popover-content",
    "popover-header",
    "popover-body"
  ].map((ce) => `${ce}-${L}`), {
    referenceRef: F,
    getArrowProps: B,
    getPopperProps: N,
    getArrowInnerProps: G,
    forceUpdate: z
  } = t2({
    ...g,
    enabled: S || !!v
  }), J = o2({ isOpen: S, ref: k });
  Yj({
    enabled: S,
    ref: C
  }), UP(k, {
    focusRef: C,
    visible: S,
    shouldFocus: i && u === oi.click
  }), C6(k, {
    focusRef: r,
    visible: S,
    shouldFocus: a && u === oi.click
  });
  const ae = G8({
    wasSelected: T.current,
    enabled: f,
    mode: p,
    isSelected: J.present
  }), re = y.useCallback(
    (ce = {}, ft = null) => {
      const He = {
        ...ce,
        style: {
          ...ce.style,
          transformOrigin: yt.transformOrigin.varRef,
          [yt.arrowSize.var]: s ? `${s}px` : void 0,
          [yt.arrowShadowColor.var]: l
        },
        ref: Ht(k, ft),
        children: ae ? ce.children : null,
        id: K,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: lt(ce.onKeyDown, (jt) => {
          n && jt.key === "Escape" && m();
        }),
        onBlur: lt(ce.onBlur, (jt) => {
          const Tr = R1(jt), pt = cp(k.current, Tr), $n = cp(C.current, Tr);
          S && t && (!pt && !$n) && m();
        }),
        "aria-labelledby": M ? ne : void 0,
        "aria-describedby": D ? R : void 0
      };
      return u === oi.hover && (He.role = "tooltip", He.onMouseEnter = lt(ce.onMouseEnter, () => {
        P.current = !0;
      }), He.onMouseLeave = lt(
        ce.onMouseLeave,
        (jt) => {
          jt.nativeEvent.relatedTarget !== null && (P.current = !1, setTimeout(() => m(), d));
        }
      )), He;
    },
    [
      ae,
      K,
      M,
      ne,
      D,
      R,
      u,
      n,
      m,
      S,
      t,
      d,
      l,
      s
    ]
  ), ie = y.useCallback(
    (ce = {}, ft = null) => N(
      {
        ...ce,
        style: {
          visibility: S ? "visible" : "hidden",
          ...ce.style
        }
      },
      ft
    ),
    [S, N]
  ), pe = y.useCallback(
    (ce, ft = null) => ({
      ...ce,
      // If anchor is rendered, it is used as reference.
      ref: Ht(ft, x, F)
    }),
    [x, F]
  ), we = y.useRef(), Qe = y.useRef(), Ye = y.useCallback(
    (ce) => {
      x.current == null && F(ce);
    },
    [F]
  ), tn = y.useCallback(
    (ce = {}, ft = null) => {
      const He = {
        ...ce,
        ref: Ht(C, ft, Ye),
        id: H,
        "aria-haspopup": "dialog",
        "aria-expanded": S,
        "aria-controls": K
      };
      return u === oi.click && (He.onClick = lt(ce.onClick, b)), u === oi.hover && (He.onFocus = lt(ce.onFocus, () => {
        we.current === void 0 && h();
      }), He.onBlur = lt(ce.onBlur, (jt) => {
        const Tr = R1(jt), pt = !cp(k.current, Tr);
        S && t && pt && m();
      }), He.onKeyDown = lt(ce.onKeyDown, (jt) => {
        jt.key === "Escape" && m();
      }), He.onMouseEnter = lt(ce.onMouseEnter, () => {
        P.current = !0, we.current = window.setTimeout(() => h(), c);
      }), He.onMouseLeave = lt(ce.onMouseLeave, () => {
        P.current = !1, we.current && (clearTimeout(we.current), we.current = void 0), Qe.current = window.setTimeout(() => {
          P.current === !1 && m();
        }, d);
      })), He;
    },
    [
      H,
      S,
      K,
      u,
      Ye,
      b,
      h,
      t,
      m,
      c,
      d
    ]
  );
  y.useEffect(() => () => {
    we.current && clearTimeout(we.current), Qe.current && clearTimeout(Qe.current);
  }, []);
  const bn = y.useCallback(
    (ce = {}, ft = null) => ({
      ...ce,
      id: ne,
      ref: Ht(ft, (He) => {
        $(!!He);
      })
    }),
    [ne]
  ), Pr = y.useCallback(
    (ce = {}, ft = null) => ({
      ...ce,
      id: R,
      ref: Ht(ft, (He) => {
        U(!!He);
      })
    }),
    [R]
  );
  return {
    forceUpdate: z,
    isOpen: S,
    onAnimationComplete: J.onComplete,
    onClose: m,
    getAnchorProps: pe,
    getArrowProps: B,
    getArrowInnerProps: G,
    getPopoverPositionerProps: ie,
    getPopoverProps: re,
    getTriggerProps: tn,
    getHeaderProps: bn,
    getBodyProps: Pr
  };
}
function cp(e, t) {
  return e === t || (e == null ? void 0 : e.contains(t));
}
function R1(e) {
  var t;
  const n = e.currentTarget.ownerDocument.activeElement;
  return (t = e.relatedTarget) != null ? t : n;
}
function ug(e) {
  const t = Lt("Popover", e), { children: n, ...r } = Zn(e), o = ao(), i = Z9({ ...r, direction: o.direction });
  return /* @__PURE__ */ E.jsx(X9, { value: i, children: /* @__PURE__ */ E.jsx(Q9, { value: t, children: Hn(n, {
    isOpen: i.isOpen,
    onClose: i.onClose,
    forceUpdate: i.forceUpdate
  }) }) });
}
ug.displayName = "Popover";
var dp = (e, t) => t ? `${e}.${t}, ${t}` : void 0;
function cg(e) {
  var t;
  const { bg: n, bgColor: r, backgroundColor: o, shadow: i, boxShadow: a, shadowColor: s } = e, { getArrowProps: l, getArrowInnerProps: u } = Yo(), c = ml(), d = (t = n ?? r) != null ? t : o, f = i ?? a;
  return /* @__PURE__ */ E.jsx(
    oe.div,
    {
      ...l(),
      className: "chakra-popover__arrow-positioner",
      children: /* @__PURE__ */ E.jsx(
        oe.div,
        {
          className: Se("chakra-popover__arrow", e.className),
          ...u(e),
          __css: {
            "--popper-arrow-shadow-color": dp("colors", s),
            "--popper-arrow-bg": dp("colors", d),
            "--popper-arrow-shadow": dp("shadows", f),
            ...c.arrow
          }
        }
      )
    }
  );
}
cg.displayName = "PopoverArrow";
var dg = Ee(
  function(t, n) {
    const { getBodyProps: r } = Yo(), o = ml();
    return /* @__PURE__ */ E.jsx(
      oe.div,
      {
        ...r(t, n),
        className: Se("chakra-popover__body", t.className),
        __css: o.body
      }
    );
  }
);
dg.displayName = "PopoverBody";
var fg = Ee(
  function(t, n) {
    const { onClose: r } = Yo(), o = ml();
    return /* @__PURE__ */ E.jsx(
      Rd,
      {
        size: "sm",
        onClick: r,
        className: Se("chakra-popover__close-btn", t.className),
        __css: o.closeButton,
        ref: n,
        ...t
      }
    );
  }
);
fg.displayName = "PopoverCloseButton";
function J9(e) {
  if (e)
    return {
      enter: {
        ...e.enter,
        visibility: "visible"
      },
      exit: {
        ...e.exit,
        transitionEnd: {
          visibility: "hidden"
        }
      }
    };
}
var eW = {
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 1, 1]
    }
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: [0, 0, 0.2, 1]
    }
  }
}, tW = oe(dl.section), w2 = Ee(function(t, n) {
  const { variants: r = eW, ...o } = t, { isOpen: i } = Yo();
  return /* @__PURE__ */ E.jsx(
    tW,
    {
      ref: n,
      variants: J9(r),
      initial: !1,
      animate: i ? "enter" : "exit",
      ...o
    }
  );
});
w2.displayName = "PopoverTransition";
var pg = Ee(
  function(t, n) {
    const { rootProps: r, motionProps: o, ...i } = t, { getPopoverProps: a, getPopoverPositionerProps: s, onAnimationComplete: l } = Yo(), u = ml(), c = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...u.content
    };
    return /* @__PURE__ */ E.jsx(
      oe.div,
      {
        ...s(r),
        __css: u.popper,
        className: "chakra-popover__popper",
        children: /* @__PURE__ */ E.jsx(
          w2,
          {
            ...o,
            ...a(i, n),
            onAnimationComplete: vI(
              l,
              i.onAnimationComplete
            ),
            className: Se("chakra-popover__content", t.className),
            __css: c
          }
        )
      }
    );
  }
);
pg.displayName = "PopoverContent";
var nW = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, rW = Object.defineProperty, oW = Object.defineProperties, iW = Object.getOwnPropertyDescriptors, Rc = Object.getOwnPropertySymbols, C2 = Object.prototype.hasOwnProperty, k2 = Object.prototype.propertyIsEnumerable, A1 = (e, t, n) => t in e ? rW(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, D1 = (e, t) => {
  for (var n in t || (t = {}))
    C2.call(t, n) && A1(e, n, t[n]);
  if (Rc)
    for (var n of Rc(t))
      k2.call(t, n) && A1(e, n, t[n]);
  return e;
}, aW = (e, t) => oW(e, iW(t)), sW = (e, t) => {
  var n = {};
  for (var r in e)
    C2.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Rc)
    for (var r of Rc(e))
      t.indexOf(r) < 0 && k2.call(e, r) && (n[r] = e[r]);
  return n;
}, Ko = (e, t, n) => {
  const r = y.forwardRef(
    (o, i) => {
      var a = o, { color: s = "currentColor", size: l = 24, stroke: u = 2, children: c } = a, d = sW(a, ["color", "size", "stroke", "children"]);
      return y.createElement(
        "svg",
        D1(aW(D1({
          ref: i
        }, nW), {
          width: l,
          height: l,
          stroke: s,
          strokeWidth: u,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([f, p]) => y.createElement(f, p)), ...c || []]
      );
    }
  );
  return r.propTypes = {
    color: vo.string,
    size: vo.oneOfType([vo.string, vo.number]),
    stroke: vo.oneOfType([vo.string, vo.number])
  }, r.displayName = `${t}`, r;
}, lW = Ko("folder", "IconFolder", [
  [
    "path",
    {
      d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ]
]), uW = Ko("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), hg = Ko("plus", "IconPlus", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M5 12l14 0", key: "svg-1" }]
]), cW = Ko("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]), dW = Ko("tag", "IconTag", [
  ["path", { d: "M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z",
      key: "svg-1"
    }
  ]
]), fW = Ko("trash", "IconTrash", [
  ["path", { d: "M4 7l16 0", key: "svg-0" }],
  ["path", { d: "M10 11l0 6", key: "svg-1" }],
  ["path", { d: "M14 11l0 6", key: "svg-2" }],
  [
    "path",
    { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }
  ],
  ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]
]), pW = Ko(
  "triangle-inverted-filled",
  "IconTriangleInvertedFilled",
  [
    [
      "path",
      {
        d: "M20.118 3h-16.225a2.914 2.914 0 0 0 -2.503 4.371l8.116 13.549a2.917 2.917 0 0 0 4.987 .005l8.11 -13.539a2.914 2.914 0 0 0 -2.486 -4.386z",
        fill: "currentColor",
        key: "svg-0",
        strokeWidth: "0"
      }
    ]
  ]
);
let iu;
const hW = new Uint8Array(16);
function mW() {
  if (!iu && (iu = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !iu))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return iu(hW);
}
const at = [];
for (let e = 0; e < 256; ++e)
  at.push((e + 256).toString(16).slice(1));
function vW(e, t = 0) {
  return at[e[t + 0]] + at[e[t + 1]] + at[e[t + 2]] + at[e[t + 3]] + "-" + at[e[t + 4]] + at[e[t + 5]] + "-" + at[e[t + 6]] + at[e[t + 7]] + "-" + at[e[t + 8]] + at[e[t + 9]] + "-" + at[e[t + 10]] + at[e[t + 11]] + at[e[t + 12]] + at[e[t + 13]] + at[e[t + 14]] + at[e[t + 15]];
}
const gW = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), F1 = {
  randomUUID: gW
};
function yW(e, t, n) {
  if (F1.randomUUID && !t && !e)
    return F1.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || mW)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let o = 0; o < 16; ++o)
      t[n + o] = r[o];
    return t;
  }
  return vW(r);
}
async function Xs(e, t) {
  const n = e + "/" + Date.now() + ".json";
  bW(n, t);
  try {
    return await (await fetch("/workspace/save_db", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ table: e, json: t })
    })).text();
  } catch (r) {
    console.error("Error saving workspace:", r);
  }
}
async function bW(e, t) {
  try {
    const r = await (await fetch("/workspace/save_backup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        file_path: e,
        json_str: t
      })
    })).text();
    return console.log(r), r;
  } catch (n) {
    console.error("Error saving workspace backup:", n);
  }
}
let Ne, Dn = null;
async function SW() {
  const e = async () => {
    let n = await P2("workflows");
    n == null && (n = localStorage.getItem("workspace") ?? "{}"), Ne = JSON.parse(n ?? "{}");
  }, t = async () => {
    Dn = await wW();
  };
  await Promise.all([e(), t()]);
}
function qh(e, t) {
  if (Ne == null)
    return;
  const n = Ne[e];
  if (n == null) {
    console.error("updateFlow: workflow not found", e);
    return;
  }
  const r = {
    ...n,
    ...t,
    id: e
  }, o = JSON.stringify(n), i = JSON.stringify(r);
  o !== i && (Ne[e] = {
    ...Ne[e],
    ...t,
    id: e,
    updateTime: Date.now()
  }, localStorage.setItem("workspace", JSON.stringify(Ne)), Xs("workflows", JSON.stringify(Ne)));
}
function z1(e, t) {
  if (Ne == null)
    throw new Error("workspace is not loaded");
  const n = yW();
  return Ne[n] = {
    id: n,
    name: t ?? "Untitled Flow",
    json: e,
    updateTime: Date.now(),
    tags: []
  }, localStorage.setItem("workspace", JSON.stringify(Ne)), Xs("workflows", JSON.stringify(Ne)), Ne[n];
}
function L1() {
  if (Ne == null)
    throw new Error("workspace is not loaded");
  return Object.values(Ne).sort((e, t) => t.updateTime - e.updateTime);
}
function xW(e) {
  if (Ne == null)
    throw new Error("workspace is not loaded");
  delete Ne[e], localStorage.setItem("workspace", JSON.stringify(Ne)), Xs("workflows", JSON.stringify(Ne));
}
async function P2(e) {
  try {
    const t = await fetch(`/workspace/get_db?table=${e}`);
    return t.ok ? await t.json() : void 0;
  } catch (t) {
    console.error("Error fetching workspace:", t);
    return;
  }
}
async function wW() {
  let e = await P2("tags"), t = JSON.parse(e ?? "{}") ?? {};
  return {
    tags: t,
    // Expose the tags array publicly
    listAll() {
      return Object.values(t).sort((n, r) => r.updateTime - n.updateTime);
    },
    upsert(n) {
      return t[n] == null && (t[n] = {
        name: n,
        workflowIDs: [],
        updateTime: Date.now()
      }), t[n].updateTime = Date.now(), Xs("tags", JSON.stringify(t)), t[n];
    },
    delete(n) {
      delete t[n], Xs("tags", JSON.stringify(t));
    }
  };
}
const T2 = y.createContext({
  curFlowID: null
});
function V1(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? V1(Object(n), !0).forEach(function(r) {
      _i(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : V1(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function CW(e) {
  if (Array.isArray(e))
    return e;
}
function kW(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, a, s = [], l = !0, u = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        l = !1;
      } else
        for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0)
          ;
    } catch (c) {
      u = !0, o = c;
    } finally {
      try {
        if (!l && n.return != null && (a = n.return(), Object(a) !== a))
          return;
      } finally {
        if (u)
          throw o;
      }
    }
    return s;
  }
}
function Xh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function E2(e, t) {
  if (e) {
    if (typeof e == "string")
      return Xh(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Xh(e, t);
  }
}
function PW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mr(e, t) {
  return CW(e) || kW(e, t) || E2(e, t) || PW();
}
function kr(e, t) {
  if (e == null)
    return {};
  var n = Zk(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var TW = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function EW(e) {
  var t = e.defaultInputValue, n = t === void 0 ? "" : t, r = e.defaultMenuIsOpen, o = r === void 0 ? !1 : r, i = e.defaultValue, a = i === void 0 ? null : i, s = e.inputValue, l = e.menuIsOpen, u = e.onChange, c = e.onInputChange, d = e.onMenuClose, f = e.onMenuOpen, p = e.value, v = kr(e, TW), g = y.useState(s !== void 0 ? s : n), S = mr(g, 2), m = S[0], h = S[1], b = y.useState(l !== void 0 ? l : o), x = mr(b, 2), C = x[0], k = x[1], P = y.useState(p !== void 0 ? p : a), T = mr(P, 2), M = T[0], $ = T[1], D = y.useCallback(function(R, F) {
    typeof u == "function" && u(R, F), $(R);
  }, [u]), U = y.useCallback(function(R, F) {
    var B;
    typeof c == "function" && (B = c(R, F)), h(B !== void 0 ? B : R);
  }, [c]), W = y.useCallback(function() {
    typeof f == "function" && f(), k(!0);
  }, [f]), L = y.useCallback(function() {
    typeof d == "function" && d(), k(!1);
  }, [d]), H = s !== void 0 ? s : m, K = l !== void 0 ? l : C, ne = p !== void 0 ? p : M;
  return X(X({}, v), {}, {
    inputValue: H,
    menuIsOpen: K,
    onChange: D,
    onInputChange: U,
    onMenuClose: L,
    onMenuOpen: W,
    value: ne
  });
}
function _W(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function N1(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, fP(r.key), r);
  }
}
function OW(e, t, n) {
  return t && N1(e.prototype, t), n && N1(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function MW(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && _c(e, t);
}
function Ac(e) {
  return Ac = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ac(e);
}
function IW() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function $W(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function RW(e, t) {
  if (t && (No(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $W(e);
}
function AW(e) {
  var t = IW();
  return function() {
    var r = Ac(e), o;
    if (t) {
      var i = Ac(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return RW(this, o);
  };
}
function DW(e) {
  if (Array.isArray(e))
    return Xh(e);
}
function FW(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function zW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _2(e) {
  return DW(e) || FW(e) || E2(e) || zW();
}
function LW(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const VW = Math.min, NW = Math.max, Dc = Math.round, au = Math.floor, Fc = (e) => ({
  x: e,
  y: e
});
function jW(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function O2(e) {
  return I2(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function On(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function M2(e) {
  var t;
  return (t = (I2(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function I2(e) {
  return e instanceof Node || e instanceof On(e).Node;
}
function Qh(e) {
  return e instanceof Element || e instanceof On(e).Element;
}
function mg(e) {
  return e instanceof HTMLElement || e instanceof On(e).HTMLElement;
}
function j1(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof On(e).ShadowRoot;
}
function $2(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = vg(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function BW() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function WW(e) {
  return ["html", "body", "#document"].includes(O2(e));
}
function vg(e) {
  return On(e).getComputedStyle(e);
}
function HW(e) {
  if (O2(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    j1(e) && e.host || // Fallback.
    M2(e)
  );
  return j1(t) ? t.host : t;
}
function R2(e) {
  const t = HW(e);
  return WW(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : mg(t) && $2(t) ? t : R2(t);
}
function zc(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = R2(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = On(o);
  return i ? t.concat(a, a.visualViewport || [], $2(o) ? o : [], a.frameElement && n ? zc(a.frameElement) : []) : t.concat(o, zc(o, [], n));
}
function UW(e) {
  const t = vg(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = mg(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Dc(n) !== i || Dc(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function gg(e) {
  return Qh(e) ? e : e.contextElement;
}
function fp(e) {
  const t = gg(e);
  if (!mg(t))
    return Fc(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = UW(t);
  let a = (i ? Dc(n.width) : n.width) / r, s = (i ? Dc(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const GW = /* @__PURE__ */ Fc(0);
function YW(e) {
  const t = On(e);
  return !BW() || !t.visualViewport ? GW : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function KW(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== On(e) ? !1 : t;
}
function B1(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = gg(e);
  let a = Fc(1);
  t && (r ? Qh(r) && (a = fp(r)) : a = fp(e));
  const s = KW(i, n, r) ? YW(i) : Fc(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = On(i), p = r && Qh(r) ? On(r) : r;
    let v = f.frameElement;
    for (; v && r && p !== f; ) {
      const g = fp(v), S = v.getBoundingClientRect(), m = vg(v), h = S.left + (v.clientLeft + parseFloat(m.paddingLeft)) * g.x, b = S.top + (v.clientTop + parseFloat(m.paddingTop)) * g.y;
      l *= g.x, u *= g.y, c *= g.x, d *= g.y, l += h, u += b, v = On(v).frameElement;
    }
  }
  return jW({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function qW(e, t) {
  let n = null, r;
  const o = M2(e);
  function i() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function a(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), i();
    const {
      left: u,
      top: c,
      width: d,
      height: f
    } = e.getBoundingClientRect();
    if (s || t(), !d || !f)
      return;
    const p = au(c), v = au(o.clientWidth - (u + d)), g = au(o.clientHeight - (c + f)), S = au(u), h = {
      rootMargin: -p + "px " + -v + "px " + -g + "px " + -S + "px",
      threshold: NW(0, VW(1, l)) || 1
    };
    let b = !0;
    function x(C) {
      const k = C[0].intersectionRatio;
      if (k !== l) {
        if (!b)
          return a();
        k ? a(!1, k) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 100);
      }
      b = !1;
    }
    try {
      n = new IntersectionObserver(x, {
        ...h,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(x, h);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function XW(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = gg(e), c = o || i ? [...u ? zc(u) : [], ...zc(t)] : [];
  c.forEach((m) => {
    o && m.addEventListener("scroll", n, {
      passive: !0
    }), i && m.addEventListener("resize", n);
  });
  const d = u && s ? qW(u, n) : null;
  let f = -1, p = null;
  a && (p = new ResizeObserver((m) => {
    let [h] = m;
    h && h.target === u && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), u && !l && p.observe(u), p.observe(t));
  let v, g = l ? B1(e) : null;
  l && S();
  function S() {
    const m = B1(e);
    g && (m.x !== g.x || m.y !== g.y || m.width !== g.width || m.height !== g.height) && n(), g = m, v = requestAnimationFrame(S);
  }
  return n(), () => {
    c.forEach((m) => {
      o && m.removeEventListener("scroll", n), i && m.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, l && cancelAnimationFrame(v);
  };
}
var Zh = y.useLayoutEffect, QW = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], Lc = function() {
};
function ZW(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function JW(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  var i = [].concat(r);
  if (t && e)
    for (var a in t)
      t.hasOwnProperty(a) && t[a] && i.push("".concat(ZW(e, a)));
  return i.filter(function(s) {
    return s;
  }).map(function(s) {
    return String(s).trim();
  }).join(" ");
}
var W1 = function(t) {
  return l7(t) ? t.filter(Boolean) : No(t) === "object" && t !== null ? [t] : [];
}, A2 = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = kr(t, QW);
  return X({}, n);
}, Be = function(t, n, r) {
  var o = t.cx, i = t.getStyles, a = t.getClassNames, s = t.className;
  return {
    css: i(n, t),
    className: o(r ?? {}, a(n, t), s)
  };
};
function Ld(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function e7(e) {
  return Ld(e) ? window.innerHeight : e.clientHeight;
}
function D2(e) {
  return Ld(e) ? window.pageYOffset : e.scrollTop;
}
function Vc(e, t) {
  if (Ld(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function t7(e) {
  var t = getComputedStyle(e), n = t.position === "absolute", r = /(auto|scroll)/;
  if (t.position === "fixed")
    return document.documentElement;
  for (var o = e; o = o.parentElement; )
    if (t = getComputedStyle(o), !(n && t.position === "static") && r.test(t.overflow + t.overflowY + t.overflowX))
      return o;
  return document.documentElement;
}
function n7(e, t, n, r) {
  return n * ((e = e / r - 1) * e * e + 1) + t;
}
function su(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Lc, o = D2(e), i = t - o, a = 10, s = 0;
  function l() {
    s += a;
    var u = n7(s, o, i, n);
    Vc(e, u), s < n ? window.requestAnimationFrame(l) : r(e);
  }
  l();
}
function H1(e, t) {
  var n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), o = t.offsetHeight / 3;
  r.bottom + o > n.bottom ? Vc(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + o, e.scrollHeight)) : r.top - o < n.top && Vc(e, Math.max(t.offsetTop - o, 0));
}
function r7(e) {
  var t = e.getBoundingClientRect();
  return {
    bottom: t.bottom,
    height: t.height,
    left: t.left,
    right: t.right,
    top: t.top,
    width: t.width
  };
}
function U1() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function o7() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var F2 = !1, i7 = {
  get passive() {
    return F2 = !0;
  }
}, lu = typeof window < "u" ? window : {};
lu.addEventListener && lu.removeEventListener && (lu.addEventListener("p", Lc, i7), lu.removeEventListener("p", Lc, !1));
var a7 = F2;
function s7(e) {
  return e != null;
}
function l7(e) {
  return Array.isArray(e);
}
function uu(e, t, n) {
  return e ? t : n;
}
var u7 = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  var i = Object.entries(t).filter(function(a) {
    var s = mr(a, 1), l = s[0];
    return !r.includes(l);
  });
  return i.reduce(function(a, s) {
    var l = mr(s, 2), u = l[0], c = l[1];
    return a[u] = c, a;
  }, {});
}, c7 = ["children", "innerProps"], d7 = ["children", "innerProps"];
function f7(e) {
  var t = e.maxHeight, n = e.menuEl, r = e.minHeight, o = e.placement, i = e.shouldScroll, a = e.isFixedPosition, s = e.controlHeight, l = t7(n), u = {
    placement: "bottom",
    maxHeight: t
  };
  if (!n || !n.offsetParent)
    return u;
  var c = l.getBoundingClientRect(), d = c.height, f = n.getBoundingClientRect(), p = f.bottom, v = f.height, g = f.top, S = n.offsetParent.getBoundingClientRect(), m = S.top, h = a ? window.innerHeight : e7(l), b = D2(l), x = parseInt(getComputedStyle(n).marginBottom, 10), C = parseInt(getComputedStyle(n).marginTop, 10), k = m - C, P = h - g, T = k + b, M = d - b - g, $ = p - h + b + x, D = b + g - C, U = 160;
  switch (o) {
    case "auto":
    case "bottom":
      if (P >= v)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (M >= v && !a)
        return i && su(l, $, U), {
          placement: "bottom",
          maxHeight: t
        };
      if (!a && M >= r || a && P >= r) {
        i && su(l, $, U);
        var W = a ? P - x : M - x;
        return {
          placement: "bottom",
          maxHeight: W
        };
      }
      if (o === "auto" || a) {
        var L = t, H = a ? k : T;
        return H >= r && (L = Math.min(H - x - s, t)), {
          placement: "top",
          maxHeight: L
        };
      }
      if (o === "bottom")
        return i && Vc(l, $), {
          placement: "bottom",
          maxHeight: t
        };
      break;
    case "top":
      if (k >= v)
        return {
          placement: "top",
          maxHeight: t
        };
      if (T >= v && !a)
        return i && su(l, D, U), {
          placement: "top",
          maxHeight: t
        };
      if (!a && T >= r || a && k >= r) {
        var K = t;
        return (!a && T >= r || a && k >= r) && (K = a ? k - C : T - C), i && su(l, D, U), {
          placement: "top",
          maxHeight: K
        };
      }
      return {
        placement: "bottom",
        maxHeight: t
      };
    default:
      throw new Error('Invalid placement provided "'.concat(o, '".'));
  }
  return u;
}
function p7(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var z2 = function(t) {
  return t === "auto" ? "bottom" : t;
}, h7 = function(t, n) {
  var r, o = t.placement, i = t.theme, a = i.borderRadius, s = i.spacing, l = i.colors;
  return X((r = {
    label: "menu"
  }, _i(r, p7(o), "100%"), _i(r, "position", "absolute"), _i(r, "width", "100%"), _i(r, "zIndex", 1), r), n ? {} : {
    backgroundColor: l.neutral0,
    borderRadius: a,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: s.menuGutter,
    marginTop: s.menuGutter
  });
}, L2 = /* @__PURE__ */ y.createContext(null), m7 = function(t) {
  var n = t.children, r = t.minMenuHeight, o = t.maxMenuHeight, i = t.menuPlacement, a = t.menuPosition, s = t.menuShouldScrollIntoView, l = t.theme, u = y.useContext(L2) || {}, c = u.setPortalPlacement, d = y.useRef(null), f = y.useState(o), p = mr(f, 2), v = p[0], g = p[1], S = y.useState(null), m = mr(S, 2), h = m[0], b = m[1], x = l.spacing.controlHeight;
  return Zh(function() {
    var C = d.current;
    if (C) {
      var k = a === "fixed", P = s && !k, T = f7({
        maxHeight: o,
        menuEl: C,
        minHeight: r,
        placement: i,
        shouldScroll: P,
        isFixedPosition: k,
        controlHeight: x
      });
      g(T.maxHeight), b(T.placement), c == null || c(T.placement);
    }
  }, [o, i, a, s, r, c, x]), n({
    ref: d,
    placerProps: X(X({}, t), {}, {
      placement: h || z2(i),
      maxHeight: v
    })
  });
}, v7 = function(t) {
  var n = t.children, r = t.innerRef, o = t.innerProps;
  return Z("div", Y({}, Be(t, "menu", {
    menu: !0
  }), {
    ref: r
  }, o), n);
}, g7 = v7, y7 = function(t, n) {
  var r = t.maxHeight, o = t.theme.spacing.baseUnit;
  return X({
    maxHeight: r,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, n ? {} : {
    paddingBottom: o,
    paddingTop: o
  });
}, b7 = function(t) {
  var n = t.children, r = t.innerProps, o = t.innerRef, i = t.isMulti;
  return Z("div", Y({}, Be(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": i
  }), {
    ref: o
  }, r), n);
}, V2 = function(t, n) {
  var r = t.theme, o = r.spacing.baseUnit, i = r.colors;
  return X({
    textAlign: "center"
  }, n ? {} : {
    color: i.neutral40,
    padding: "".concat(o * 2, "px ").concat(o * 3, "px")
  });
}, S7 = V2, x7 = V2, w7 = function(t) {
  var n = t.children, r = n === void 0 ? "No options" : n, o = t.innerProps, i = kr(t, c7);
  return Z("div", Y({}, Be(X(X({}, i), {}, {
    children: r,
    innerProps: o
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), o), r);
}, C7 = function(t) {
  var n = t.children, r = n === void 0 ? "Loading..." : n, o = t.innerProps, i = kr(t, d7);
  return Z("div", Y({}, Be(X(X({}, i), {}, {
    children: r,
    innerProps: o
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), o), r);
}, k7 = function(t) {
  var n = t.rect, r = t.offset, o = t.position;
  return {
    left: n.left,
    position: o,
    top: r,
    width: n.width,
    zIndex: 1
  };
}, P7 = function(t) {
  var n = t.appendTo, r = t.children, o = t.controlElement, i = t.innerProps, a = t.menuPlacement, s = t.menuPosition, l = y.useRef(null), u = y.useRef(null), c = y.useState(z2(a)), d = mr(c, 2), f = d[0], p = d[1], v = y.useMemo(function() {
    return {
      setPortalPlacement: p
    };
  }, []), g = y.useState(null), S = mr(g, 2), m = S[0], h = S[1], b = y.useCallback(function() {
    if (o) {
      var P = r7(o), T = s === "fixed" ? 0 : window.pageYOffset, M = P[f] + T;
      (M !== (m == null ? void 0 : m.offset) || P.left !== (m == null ? void 0 : m.rect.left) || P.width !== (m == null ? void 0 : m.rect.width)) && h({
        offset: M,
        rect: P
      });
    }
  }, [o, s, f, m == null ? void 0 : m.offset, m == null ? void 0 : m.rect.left, m == null ? void 0 : m.rect.width]);
  Zh(function() {
    b();
  }, [b]);
  var x = y.useCallback(function() {
    typeof u.current == "function" && (u.current(), u.current = null), o && l.current && (u.current = XW(o, l.current, b, {
      elementResize: "ResizeObserver" in window
    }));
  }, [o, b]);
  Zh(function() {
    x();
  }, [x]);
  var C = y.useCallback(function(P) {
    l.current = P, x();
  }, [x]);
  if (!n && s !== "fixed" || !m)
    return null;
  var k = Z("div", Y({
    ref: C
  }, Be(X(X({}, t), {}, {
    offset: m.offset,
    position: s,
    rect: m.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), i), r);
  return Z(L2.Provider, {
    value: v
  }, n ? /* @__PURE__ */ od.createPortal(k, n) : k);
}, T7 = function(t) {
  var n = t.isDisabled, r = t.isRtl;
  return {
    label: "container",
    direction: r ? "rtl" : void 0,
    pointerEvents: n ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, E7 = function(t) {
  var n = t.children, r = t.innerProps, o = t.isDisabled, i = t.isRtl;
  return Z("div", Y({}, Be(t, "container", {
    "--is-disabled": o,
    "--is-rtl": i
  }), r), n);
}, _7 = function(t, n) {
  var r = t.theme.spacing, o = t.isMulti, i = t.hasValue, a = t.selectProps.controlShouldRenderValue;
  return X({
    alignItems: "center",
    display: o && i && a ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, n ? {} : {
    padding: "".concat(r.baseUnit / 2, "px ").concat(r.baseUnit * 2, "px")
  });
}, O7 = function(t) {
  var n = t.children, r = t.innerProps, o = t.isMulti, i = t.hasValue;
  return Z("div", Y({}, Be(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": o,
    "value-container--has-value": i
  }), r), n);
}, M7 = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, I7 = function(t) {
  var n = t.children, r = t.innerProps;
  return Z("div", Y({}, Be(t, "indicatorsContainer", {
    indicators: !0
  }), r), n);
}, G1, $7 = ["size"], R7 = ["innerProps", "isRtl", "size"], A7 = {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
}, N2 = function(t) {
  var n = t.size, r = kr(t, $7);
  return Z("svg", Y({
    height: n,
    width: n,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: A7
  }, r));
}, yg = function(t) {
  return Z(N2, Y({
    size: 20
  }, t), Z("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, j2 = function(t) {
  return Z(N2, Y({
    size: 20
  }, t), Z("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, B2 = function(t, n) {
  var r = t.isFocused, o = t.theme, i = o.spacing.baseUnit, a = o.colors;
  return X({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, n ? {} : {
    color: r ? a.neutral60 : a.neutral20,
    padding: i * 2,
    ":hover": {
      color: r ? a.neutral80 : a.neutral40
    }
  });
}, D7 = B2, F7 = function(t) {
  var n = t.children, r = t.innerProps;
  return Z("div", Y({}, Be(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), r), n || Z(j2, null));
}, z7 = B2, L7 = function(t) {
  var n = t.children, r = t.innerProps;
  return Z("div", Y({}, Be(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), r), n || Z(yg, null));
}, V7 = function(t, n) {
  var r = t.isDisabled, o = t.theme, i = o.spacing.baseUnit, a = o.colors;
  return X({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, n ? {} : {
    backgroundColor: r ? a.neutral10 : a.neutral20,
    marginBottom: i * 2,
    marginTop: i * 2
  });
}, N7 = function(t) {
  var n = t.innerProps;
  return Z("span", Y({}, n, Be(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, j7 = Fw(G1 || (G1 = LW([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), B7 = function(t, n) {
  var r = t.isFocused, o = t.size, i = t.theme, a = i.colors, s = i.spacing.baseUnit;
  return X({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: o,
    lineHeight: 1,
    marginRight: o,
    textAlign: "center",
    verticalAlign: "middle"
  }, n ? {} : {
    color: r ? a.neutral60 : a.neutral20,
    padding: s * 2
  });
}, pp = function(t) {
  var n = t.delay, r = t.offset;
  return Z("span", {
    css: /* @__PURE__ */ uv({
      animation: "".concat(j7, " 1s ease-in-out ").concat(n, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: r ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, "", "")
  });
}, W7 = function(t) {
  var n = t.innerProps, r = t.isRtl, o = t.size, i = o === void 0 ? 4 : o, a = kr(t, R7);
  return Z("div", Y({}, Be(X(X({}, a), {}, {
    innerProps: n,
    isRtl: r,
    size: i
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), n), Z(pp, {
    delay: 0,
    offset: r
  }), Z(pp, {
    delay: 160,
    offset: !0
  }), Z(pp, {
    delay: 320,
    offset: !r
  }));
}, H7 = function(t, n) {
  var r = t.isDisabled, o = t.isFocused, i = t.theme, a = i.colors, s = i.borderRadius, l = i.spacing;
  return X({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: l.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, n ? {} : {
    backgroundColor: r ? a.neutral5 : a.neutral0,
    borderColor: r ? a.neutral10 : o ? a.primary : a.neutral20,
    borderRadius: s,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: o ? "0 0 0 1px ".concat(a.primary) : void 0,
    "&:hover": {
      borderColor: o ? a.primary : a.neutral30
    }
  });
}, U7 = function(t) {
  var n = t.children, r = t.isDisabled, o = t.isFocused, i = t.innerRef, a = t.innerProps, s = t.menuIsOpen;
  return Z("div", Y({
    ref: i
  }, Be(t, "control", {
    control: !0,
    "control--is-disabled": r,
    "control--is-focused": o,
    "control--menu-is-open": s
  }), a, {
    "aria-disabled": r || void 0
  }), n);
}, G7 = U7, Y7 = ["data"], K7 = function(t, n) {
  var r = t.theme.spacing;
  return n ? {} : {
    paddingBottom: r.baseUnit * 2,
    paddingTop: r.baseUnit * 2
  };
}, q7 = function(t) {
  var n = t.children, r = t.cx, o = t.getStyles, i = t.getClassNames, a = t.Heading, s = t.headingProps, l = t.innerProps, u = t.label, c = t.theme, d = t.selectProps;
  return Z("div", Y({}, Be(t, "group", {
    group: !0
  }), l), Z(a, Y({}, s, {
    selectProps: d,
    theme: c,
    getStyles: o,
    getClassNames: i,
    cx: r
  }), u), Z("div", null, n));
}, X7 = function(t, n) {
  var r = t.theme, o = r.colors, i = r.spacing;
  return X({
    label: "group",
    cursor: "default",
    display: "block"
  }, n ? {} : {
    color: o.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: i.baseUnit * 3,
    paddingRight: i.baseUnit * 3,
    textTransform: "uppercase"
  });
}, Q7 = function(t) {
  var n = A2(t);
  n.data;
  var r = kr(n, Y7);
  return Z("div", Y({}, Be(t, "groupHeading", {
    "group-heading": !0
  }), r));
}, Z7 = q7, J7 = ["innerRef", "isDisabled", "isHidden", "inputClassName"], eH = function(t, n) {
  var r = t.isDisabled, o = t.value, i = t.theme, a = i.spacing, s = i.colors;
  return X(X({
    visibility: r ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: o ? "translateZ(0)" : ""
  }, tH), n ? {} : {
    margin: a.baseUnit / 2,
    paddingBottom: a.baseUnit / 2,
    paddingTop: a.baseUnit / 2,
    color: s.neutral80
  });
}, W2 = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, tH = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": X({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, W2)
}, nH = function(t) {
  return X({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, W2);
}, rH = function(t) {
  var n = t.cx, r = t.value, o = A2(t), i = o.innerRef, a = o.isDisabled, s = o.isHidden, l = o.inputClassName, u = kr(o, J7);
  return Z("div", Y({}, Be(t, "input", {
    "input-container": !0
  }), {
    "data-value": r || ""
  }), Z("input", Y({
    className: n({
      input: !0
    }, l),
    ref: i,
    style: nH(s),
    disabled: a
  }, u)));
}, oH = rH, iH = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.borderRadius, a = r.colors;
  return X({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, n ? {} : {
    backgroundColor: a.neutral10,
    borderRadius: i / 2,
    margin: o.baseUnit / 2
  });
}, aH = function(t, n) {
  var r = t.theme, o = r.borderRadius, i = r.colors, a = t.cropWithEllipsis;
  return X({
    overflow: "hidden",
    textOverflow: a || a === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, n ? {} : {
    borderRadius: o / 2,
    color: i.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, sH = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.borderRadius, a = r.colors, s = t.isFocused;
  return X({
    alignItems: "center",
    display: "flex"
  }, n ? {} : {
    borderRadius: i / 2,
    backgroundColor: s ? a.dangerLight : void 0,
    paddingLeft: o.baseUnit,
    paddingRight: o.baseUnit,
    ":hover": {
      backgroundColor: a.dangerLight,
      color: a.danger
    }
  });
}, H2 = function(t) {
  var n = t.children, r = t.innerProps;
  return Z("div", r, n);
}, lH = H2, uH = H2;
function cH(e) {
  var t = e.children, n = e.innerProps;
  return Z("div", Y({
    role: "button"
  }, n), t || Z(yg, {
    size: 14
  }));
}
var dH = function(t) {
  var n = t.children, r = t.components, o = t.data, i = t.innerProps, a = t.isDisabled, s = t.removeProps, l = t.selectProps, u = r.Container, c = r.Label, d = r.Remove;
  return Z(u, {
    data: o,
    innerProps: X(X({}, Be(t, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": a
    })), i),
    selectProps: l
  }, Z(c, {
    data: o,
    innerProps: X({}, Be(t, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: l
  }, n), Z(d, {
    data: o,
    innerProps: X(X({}, Be(t, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(n || "option")
    }, s),
    selectProps: l
  }));
}, fH = dH, pH = function(t, n) {
  var r = t.isDisabled, o = t.isFocused, i = t.isSelected, a = t.theme, s = a.spacing, l = a.colors;
  return X({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, n ? {} : {
    backgroundColor: i ? l.primary : o ? l.primary25 : "transparent",
    color: r ? l.neutral20 : i ? l.neutral0 : "inherit",
    padding: "".concat(s.baseUnit * 2, "px ").concat(s.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: r ? void 0 : i ? l.primary : l.primary50
    }
  });
}, hH = function(t) {
  var n = t.children, r = t.isDisabled, o = t.isFocused, i = t.isSelected, a = t.innerRef, s = t.innerProps;
  return Z("div", Y({}, Be(t, "option", {
    option: !0,
    "option--is-disabled": r,
    "option--is-focused": o,
    "option--is-selected": i
  }), {
    ref: a,
    "aria-disabled": r
  }, s), n);
}, mH = hH, vH = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.colors;
  return X({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, n ? {} : {
    color: i.neutral50,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, gH = function(t) {
  var n = t.children, r = t.innerProps;
  return Z("div", Y({}, Be(t, "placeholder", {
    placeholder: !0
  }), r), n);
}, yH = gH, bH = function(t, n) {
  var r = t.isDisabled, o = t.theme, i = o.spacing, a = o.colors;
  return X({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, n ? {} : {
    color: r ? a.neutral40 : a.neutral80,
    marginLeft: i.baseUnit / 2,
    marginRight: i.baseUnit / 2
  });
}, SH = function(t) {
  var n = t.children, r = t.isDisabled, o = t.innerProps;
  return Z("div", Y({}, Be(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": r
  }), o), n);
}, xH = SH, wH = {
  ClearIndicator: L7,
  Control: G7,
  DropdownIndicator: F7,
  DownChevron: j2,
  CrossIcon: yg,
  Group: Z7,
  GroupHeading: Q7,
  IndicatorsContainer: I7,
  IndicatorSeparator: N7,
  Input: oH,
  LoadingIndicator: W7,
  Menu: g7,
  MenuList: b7,
  MenuPortal: P7,
  LoadingMessage: C7,
  NoOptionsMessage: w7,
  MultiValue: fH,
  MultiValueContainer: lH,
  MultiValueLabel: uH,
  MultiValueRemove: cH,
  Option: mH,
  Placeholder: yH,
  SelectContainer: E7,
  SingleValue: xH,
  ValueContainer: O7
}, CH = function(t) {
  return X(X({}, wH), t.components);
}, Y1 = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function kH(e, t) {
  return !!(e === t || Y1(e) && Y1(t));
}
function PH(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!kH(e[n], t[n]))
      return !1;
  return !0;
}
function TH(e, t) {
  t === void 0 && (t = PH);
  var n = null;
  function r() {
    for (var o = [], i = 0; i < arguments.length; i++)
      o[i] = arguments[i];
    if (n && n.lastThis === this && t(o, n.lastArgs))
      return n.lastResult;
    var a = e.apply(this, o);
    return n = {
      lastResult: a,
      lastArgs: o,
      lastThis: this
    }, a;
  }
  return r.clear = function() {
    n = null;
  }, r;
}
var EH = {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
}, _H = function(t) {
  return Z("span", Y({
    css: EH
  }, t));
}, K1 = _H, OH = {
  guidance: function(t) {
    var n = t.isSearchable, r = t.isMulti, o = t.isDisabled, i = t.tabSelectsValue, a = t.context;
    switch (a) {
      case "menu":
        return "Use Up and Down to choose options".concat(o ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu").concat(i ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return "".concat(t["aria-label"] || "Select", " is focused ").concat(n ? ",type to refine list" : "", ", press Down to open the menu, ").concat(r ? " press left to focus selected values" : "");
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(t) {
    var n = t.action, r = t.label, o = r === void 0 ? "" : r, i = t.labels, a = t.isDisabled;
    switch (n) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(o, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(i.length > 1 ? "s" : "", " ").concat(i.join(","), ", selected.");
      case "select-option":
        return a ? "option ".concat(o, " is disabled. Select another option.") : "option ".concat(o, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(t) {
    var n = t.context, r = t.focused, o = t.options, i = t.label, a = i === void 0 ? "" : i, s = t.selectValue, l = t.isDisabled, u = t.isSelected, c = function(v, g) {
      return v && v.length ? "".concat(v.indexOf(g) + 1, " of ").concat(v.length) : "";
    };
    if (n === "value" && s)
      return "value ".concat(a, " focused, ").concat(c(s, r), ".");
    if (n === "menu") {
      var d = l ? " disabled" : "", f = "".concat(u ? "selected" : "focused").concat(d);
      return "option ".concat(a, " ").concat(f, ", ").concat(c(o, r), ".");
    }
    return "";
  },
  onFilter: function(t) {
    var n = t.inputValue, r = t.resultsMessage;
    return "".concat(r).concat(n ? " for search term " + n : "", ".");
  }
}, MH = function(t) {
  var n = t.ariaSelection, r = t.focusedOption, o = t.focusedValue, i = t.focusableOptions, a = t.isFocused, s = t.selectValue, l = t.selectProps, u = t.id, c = l.ariaLiveMessages, d = l.getOptionLabel, f = l.inputValue, p = l.isMulti, v = l.isOptionDisabled, g = l.isSearchable, S = l.menuIsOpen, m = l.options, h = l.screenReaderStatus, b = l.tabSelectsValue, x = l["aria-label"], C = l["aria-live"], k = y.useMemo(function() {
    return X(X({}, OH), c || {});
  }, [c]), P = y.useMemo(function() {
    var L = "";
    if (n && k.onChange) {
      var H = n.option, K = n.options, ne = n.removedValue, R = n.removedValues, F = n.value, B = function(ie) {
        return Array.isArray(ie) ? null : ie;
      }, N = ne || H || B(F), G = N ? d(N) : "", z = K || R || void 0, J = z ? z.map(d) : [], ae = X({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: N && v(N, s),
        label: G,
        labels: J
      }, n);
      L = k.onChange(ae);
    }
    return L;
  }, [n, k, v, s, d]), T = y.useMemo(function() {
    var L = "", H = r || o, K = !!(r && s && s.includes(r));
    if (H && k.onFocus) {
      var ne = {
        focused: H,
        label: d(H),
        isDisabled: v(H, s),
        isSelected: K,
        options: i,
        context: H === r ? "menu" : "value",
        selectValue: s
      };
      L = k.onFocus(ne);
    }
    return L;
  }, [r, o, d, v, k, i, s]), M = y.useMemo(function() {
    var L = "";
    if (S && m.length && k.onFilter) {
      var H = h({
        count: i.length
      });
      L = k.onFilter({
        inputValue: f,
        resultsMessage: H
      });
    }
    return L;
  }, [i, f, S, k, m, h]), $ = y.useMemo(function() {
    var L = "";
    if (k.guidance) {
      var H = o ? "value" : S ? "menu" : "input";
      L = k.guidance({
        "aria-label": x,
        context: H,
        isDisabled: r && v(r, s),
        isMulti: p,
        isSearchable: g,
        tabSelectsValue: b
      });
    }
    return L;
  }, [x, r, o, p, v, g, S, k, s, b]), D = "".concat(T, " ").concat(M, " ").concat($), U = Z(y.Fragment, null, Z("span", {
    id: "aria-selection"
  }, P), Z("span", {
    id: "aria-context"
  }, D)), W = (n == null ? void 0 : n.action) === "initial-input-focus";
  return Z(y.Fragment, null, Z(K1, {
    id: u
  }, W && U), Z(K1, {
    "aria-live": C,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, a && !W && U));
}, IH = MH, Jh = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}], $H = new RegExp("[" + Jh.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), U2 = {};
for (var hp = 0; hp < Jh.length; hp++)
  for (var mp = Jh[hp], vp = 0; vp < mp.letters.length; vp++)
    U2[mp.letters[vp]] = mp.base;
var G2 = function(t) {
  return t.replace($H, function(n) {
    return U2[n];
  });
}, RH = TH(G2), q1 = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, AH = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, DH = function(t) {
  return function(n, r) {
    if (n.data.__isNew__)
      return !0;
    var o = X({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: AH,
      trim: !0,
      matchFrom: "any"
    }, t), i = o.ignoreCase, a = o.ignoreAccents, s = o.stringify, l = o.trim, u = o.matchFrom, c = l ? q1(r) : r, d = l ? q1(s(n)) : s(n);
    return i && (c = c.toLowerCase(), d = d.toLowerCase()), a && (c = RH(c), d = G2(d)), u === "start" ? d.substr(0, c.length) === c : d.indexOf(c) > -1;
  };
}, FH = ["innerRef"];
function zH(e) {
  var t = e.innerRef, n = kr(e, FH), r = u7(n, "onExited", "in", "enter", "exit", "appear");
  return Z("input", Y({
    ref: t
  }, r, {
    css: /* @__PURE__ */ uv({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, "", "")
  }));
}
var LH = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function VH(e) {
  var t = e.isEnabled, n = e.onBottomArrive, r = e.onBottomLeave, o = e.onTopArrive, i = e.onTopLeave, a = y.useRef(!1), s = y.useRef(!1), l = y.useRef(0), u = y.useRef(null), c = y.useCallback(function(S, m) {
    if (u.current !== null) {
      var h = u.current, b = h.scrollTop, x = h.scrollHeight, C = h.clientHeight, k = u.current, P = m > 0, T = x - C - b, M = !1;
      T > m && a.current && (r && r(S), a.current = !1), P && s.current && (i && i(S), s.current = !1), P && m > T ? (n && !a.current && n(S), k.scrollTop = x, M = !0, a.current = !0) : !P && -m > b && (o && !s.current && o(S), k.scrollTop = 0, M = !0, s.current = !0), M && LH(S);
    }
  }, [n, r, o, i]), d = y.useCallback(function(S) {
    c(S, S.deltaY);
  }, [c]), f = y.useCallback(function(S) {
    l.current = S.changedTouches[0].clientY;
  }, []), p = y.useCallback(function(S) {
    var m = l.current - S.changedTouches[0].clientY;
    c(S, m);
  }, [c]), v = y.useCallback(function(S) {
    if (S) {
      var m = a7 ? {
        passive: !1
      } : !1;
      S.addEventListener("wheel", d, m), S.addEventListener("touchstart", f, m), S.addEventListener("touchmove", p, m);
    }
  }, [p, f, d]), g = y.useCallback(function(S) {
    S && (S.removeEventListener("wheel", d, !1), S.removeEventListener("touchstart", f, !1), S.removeEventListener("touchmove", p, !1));
  }, [p, f, d]);
  return y.useEffect(function() {
    if (t) {
      var S = u.current;
      return v(S), function() {
        g(S);
      };
    }
  }, [t, v, g]), function(S) {
    u.current = S;
  };
}
var X1 = ["boxSizing", "height", "overflow", "paddingRight", "position"], Q1 = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function Z1(e) {
  e.preventDefault();
}
function J1(e) {
  e.stopPropagation();
}
function eS() {
  var e = this.scrollTop, t = this.scrollHeight, n = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1);
}
function tS() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var nS = !!(typeof window < "u" && window.document && window.document.createElement), Fa = 0, ii = {
  capture: !1,
  passive: !1
};
function NH(e) {
  var t = e.isEnabled, n = e.accountForScrollbars, r = n === void 0 ? !0 : n, o = y.useRef({}), i = y.useRef(null), a = y.useCallback(function(l) {
    if (nS) {
      var u = document.body, c = u && u.style;
      if (r && X1.forEach(function(v) {
        var g = c && c[v];
        o.current[v] = g;
      }), r && Fa < 1) {
        var d = parseInt(o.current.paddingRight, 10) || 0, f = document.body ? document.body.clientWidth : 0, p = window.innerWidth - f + d || 0;
        Object.keys(Q1).forEach(function(v) {
          var g = Q1[v];
          c && (c[v] = g);
        }), c && (c.paddingRight = "".concat(p, "px"));
      }
      u && tS() && (u.addEventListener("touchmove", Z1, ii), l && (l.addEventListener("touchstart", eS, ii), l.addEventListener("touchmove", J1, ii))), Fa += 1;
    }
  }, [r]), s = y.useCallback(function(l) {
    if (nS) {
      var u = document.body, c = u && u.style;
      Fa = Math.max(Fa - 1, 0), r && Fa < 1 && X1.forEach(function(d) {
        var f = o.current[d];
        c && (c[d] = f);
      }), u && tS() && (u.removeEventListener("touchmove", Z1, ii), l && (l.removeEventListener("touchstart", eS, ii), l.removeEventListener("touchmove", J1, ii)));
    }
  }, [r]);
  return y.useEffect(function() {
    if (t) {
      var l = i.current;
      return a(l), function() {
        s(l);
      };
    }
  }, [t, a, s]), function(l) {
    i.current = l;
  };
}
var jH = function(t) {
  var n = t.target;
  return n.ownerDocument.activeElement && n.ownerDocument.activeElement.blur();
}, BH = {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
};
function WH(e) {
  var t = e.children, n = e.lockEnabled, r = e.captureEnabled, o = r === void 0 ? !0 : r, i = e.onBottomArrive, a = e.onBottomLeave, s = e.onTopArrive, l = e.onTopLeave, u = VH({
    isEnabled: o,
    onBottomArrive: i,
    onBottomLeave: a,
    onTopArrive: s,
    onTopLeave: l
  }), c = NH({
    isEnabled: n
  }), d = function(p) {
    u(p), c(p);
  };
  return Z(y.Fragment, null, n && Z("div", {
    onClick: jH,
    css: BH
  }), t(d));
}
var HH = {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
}, UH = function(t) {
  var n = t.name, r = t.onFocus;
  return Z("input", {
    required: !0,
    name: n,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: r,
    css: HH,
    value: "",
    onChange: function() {
    }
  });
}, GH = UH, YH = function(t) {
  return t.label;
}, KH = function(t) {
  return t.label;
}, qH = function(t) {
  return t.value;
}, XH = function(t) {
  return !!t.isDisabled;
}, QH = {
  clearIndicator: z7,
  container: T7,
  control: H7,
  dropdownIndicator: D7,
  group: K7,
  groupHeading: X7,
  indicatorsContainer: M7,
  indicatorSeparator: V7,
  input: eH,
  loadingIndicator: B7,
  loadingMessage: x7,
  menu: h7,
  menuList: y7,
  menuPortal: k7,
  multiValue: iH,
  multiValueLabel: aH,
  multiValueRemove: sH,
  noOptionsMessage: S7,
  option: pH,
  placeholder: vH,
  singleValue: bH,
  valueContainer: _7
}, ZH = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
}, JH = 4, Y2 = 4, eU = 38, tU = Y2 * 2, nU = {
  baseUnit: Y2,
  controlHeight: eU,
  menuGutter: tU
}, gp = {
  borderRadius: JH,
  colors: ZH,
  spacing: nU
}, rU = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: U1(),
  captureMenuScroll: !U1(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: DH(),
  formatGroupLabel: YH,
  getOptionLabel: KH,
  getOptionValue: qH,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: XH,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !o7(),
  noOptionsMessage: function() {
    return "No options";
  },
  openMenuOnFocus: !1,
  openMenuOnClick: !0,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function(t) {
    var n = t.count;
    return "".concat(n, " result").concat(n !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: !0,
  unstyled: !1
};
function rS(e, t, n, r) {
  var o = Q2(e, t, n), i = Z2(e, t, n), a = X2(e, t), s = Nc(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: o,
    isSelected: i,
    label: a,
    value: s,
    index: r
  };
}
function K2(e, t) {
  return e.options.map(function(n, r) {
    if ("options" in n) {
      var o = n.options.map(function(a, s) {
        return rS(e, a, t, s);
      }).filter(function(a) {
        return oS(e, a);
      });
      return o.length > 0 ? {
        type: "group",
        data: n,
        options: o,
        index: r
      } : void 0;
    }
    var i = rS(e, n, t, r);
    return oS(e, i) ? i : void 0;
  }).filter(s7);
}
function q2(e) {
  return e.reduce(function(t, n) {
    return n.type === "group" ? t.push.apply(t, _2(n.options.map(function(r) {
      return r.data;
    }))) : t.push(n.data), t;
  }, []);
}
function oU(e, t) {
  return q2(K2(e, t));
}
function oS(e, t) {
  var n = e.inputValue, r = n === void 0 ? "" : n, o = t.data, i = t.isSelected, a = t.label, s = t.value;
  return (!eT(e) || !i) && J2(e, {
    label: a,
    value: s,
    data: o
  }, r);
}
function iU(e, t) {
  var n = e.focusedValue, r = e.selectValue, o = r.indexOf(n);
  if (o > -1) {
    var i = t.indexOf(n);
    if (i > -1)
      return n;
    if (o < t.length)
      return t[o];
  }
  return null;
}
function aU(e, t) {
  var n = e.focusedOption;
  return n && t.indexOf(n) > -1 ? n : t[0];
}
var X2 = function(t, n) {
  return t.getOptionLabel(n);
}, Nc = function(t, n) {
  return t.getOptionValue(n);
};
function Q2(e, t, n) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, n) : !1;
}
function Z2(e, t, n) {
  if (n.indexOf(t) > -1)
    return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, n);
  var r = Nc(e, t);
  return n.some(function(o) {
    return Nc(e, o) === r;
  });
}
function J2(e, t, n) {
  return e.filterOption ? e.filterOption(t, n) : !0;
}
var eT = function(t) {
  var n = t.hideSelectedOptions, r = t.isMulti;
  return n === void 0 ? r : n;
}, sU = 1, tT = /* @__PURE__ */ function(e) {
  MW(n, e);
  var t = AW(n);
  function n(r) {
    var o;
    if (_W(this, n), o = t.call(this, r), o.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: !1,
      isFocused: !1,
      selectValue: [],
      clearFocusValueOnUpdate: !1,
      prevWasFocused: !1,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0
    }, o.blockOptionHover = !1, o.isComposing = !1, o.commonProps = void 0, o.initialTouchX = 0, o.initialTouchY = 0, o.instancePrefix = "", o.openAfterFocus = !1, o.scrollToFocusedOptionOnUpdate = !1, o.userIsDragging = void 0, o.controlRef = null, o.getControlRef = function(s) {
      o.controlRef = s;
    }, o.focusedOptionRef = null, o.getFocusedOptionRef = function(s) {
      o.focusedOptionRef = s;
    }, o.menuListRef = null, o.getMenuListRef = function(s) {
      o.menuListRef = s;
    }, o.inputRef = null, o.getInputRef = function(s) {
      o.inputRef = s;
    }, o.focus = o.focusInput, o.blur = o.blurInput, o.onChange = function(s, l) {
      var u = o.props, c = u.onChange, d = u.name;
      l.name = d, o.ariaOnChange(s, l), c(s, l);
    }, o.setValue = function(s, l, u) {
      var c = o.props, d = c.closeMenuOnSelect, f = c.isMulti, p = c.inputValue;
      o.onInputChange("", {
        action: "set-value",
        prevInputValue: p
      }), d && (o.setState({
        inputIsHiddenAfterUpdate: !f
      }), o.onMenuClose()), o.setState({
        clearFocusValueOnUpdate: !0
      }), o.onChange(s, {
        action: l,
        option: u
      });
    }, o.selectOption = function(s) {
      var l = o.props, u = l.blurInputOnSelect, c = l.isMulti, d = l.name, f = o.state.selectValue, p = c && o.isOptionSelected(s, f), v = o.isOptionDisabled(s, f);
      if (p) {
        var g = o.getOptionValue(s);
        o.setValue(f.filter(function(S) {
          return o.getOptionValue(S) !== g;
        }), "deselect-option", s);
      } else if (!v)
        c ? o.setValue([].concat(_2(f), [s]), "select-option", s) : o.setValue(s, "select-option");
      else {
        o.ariaOnChange(s, {
          action: "select-option",
          option: s,
          name: d
        });
        return;
      }
      u && o.blurInput();
    }, o.removeValue = function(s) {
      var l = o.props.isMulti, u = o.state.selectValue, c = o.getOptionValue(s), d = u.filter(function(p) {
        return o.getOptionValue(p) !== c;
      }), f = uu(l, d, d[0] || null);
      o.onChange(f, {
        action: "remove-value",
        removedValue: s
      }), o.focusInput();
    }, o.clearValue = function() {
      var s = o.state.selectValue;
      o.onChange(uu(o.props.isMulti, [], null), {
        action: "clear",
        removedValues: s
      });
    }, o.popValue = function() {
      var s = o.props.isMulti, l = o.state.selectValue, u = l[l.length - 1], c = l.slice(0, l.length - 1), d = uu(s, c, c[0] || null);
      o.onChange(d, {
        action: "pop-value",
        removedValue: u
      });
    }, o.getValue = function() {
      return o.state.selectValue;
    }, o.cx = function() {
      for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
        l[u] = arguments[u];
      return JW.apply(void 0, [o.props.classNamePrefix].concat(l));
    }, o.getOptionLabel = function(s) {
      return X2(o.props, s);
    }, o.getOptionValue = function(s) {
      return Nc(o.props, s);
    }, o.getStyles = function(s, l) {
      var u = o.props.unstyled, c = QH[s](l, u);
      c.boxSizing = "border-box";
      var d = o.props.styles[s];
      return d ? d(c, l) : c;
    }, o.getClassNames = function(s, l) {
      var u, c;
      return (u = (c = o.props.classNames)[s]) === null || u === void 0 ? void 0 : u.call(c, l);
    }, o.getElementId = function(s) {
      return "".concat(o.instancePrefix, "-").concat(s);
    }, o.getComponents = function() {
      return CH(o.props);
    }, o.buildCategorizedOptions = function() {
      return K2(o.props, o.state.selectValue);
    }, o.getCategorizedOptions = function() {
      return o.props.menuIsOpen ? o.buildCategorizedOptions() : [];
    }, o.buildFocusableOptions = function() {
      return q2(o.buildCategorizedOptions());
    }, o.getFocusableOptions = function() {
      return o.props.menuIsOpen ? o.buildFocusableOptions() : [];
    }, o.ariaOnChange = function(s, l) {
      o.setState({
        ariaSelection: X({
          value: s
        }, l)
      });
    }, o.onMenuMouseDown = function(s) {
      s.button === 0 && (s.stopPropagation(), s.preventDefault(), o.focusInput());
    }, o.onMenuMouseMove = function(s) {
      o.blockOptionHover = !1;
    }, o.onControlMouseDown = function(s) {
      if (!s.defaultPrevented) {
        var l = o.props.openMenuOnClick;
        o.state.isFocused ? o.props.menuIsOpen ? s.target.tagName !== "INPUT" && s.target.tagName !== "TEXTAREA" && o.onMenuClose() : l && o.openMenu("first") : (l && (o.openAfterFocus = !0), o.focusInput()), s.target.tagName !== "INPUT" && s.target.tagName !== "TEXTAREA" && s.preventDefault();
      }
    }, o.onDropdownIndicatorMouseDown = function(s) {
      if (!(s && s.type === "mousedown" && s.button !== 0) && !o.props.isDisabled) {
        var l = o.props, u = l.isMulti, c = l.menuIsOpen;
        o.focusInput(), c ? (o.setState({
          inputIsHiddenAfterUpdate: !u
        }), o.onMenuClose()) : o.openMenu("first"), s.preventDefault();
      }
    }, o.onClearIndicatorMouseDown = function(s) {
      s && s.type === "mousedown" && s.button !== 0 || (o.clearValue(), s.preventDefault(), o.openAfterFocus = !1, s.type === "touchend" ? o.focusInput() : setTimeout(function() {
        return o.focusInput();
      }));
    }, o.onScroll = function(s) {
      typeof o.props.closeMenuOnScroll == "boolean" ? s.target instanceof HTMLElement && Ld(s.target) && o.props.onMenuClose() : typeof o.props.closeMenuOnScroll == "function" && o.props.closeMenuOnScroll(s) && o.props.onMenuClose();
    }, o.onCompositionStart = function() {
      o.isComposing = !0;
    }, o.onCompositionEnd = function() {
      o.isComposing = !1;
    }, o.onTouchStart = function(s) {
      var l = s.touches, u = l && l.item(0);
      u && (o.initialTouchX = u.clientX, o.initialTouchY = u.clientY, o.userIsDragging = !1);
    }, o.onTouchMove = function(s) {
      var l = s.touches, u = l && l.item(0);
      if (u) {
        var c = Math.abs(u.clientX - o.initialTouchX), d = Math.abs(u.clientY - o.initialTouchY), f = 5;
        o.userIsDragging = c > f || d > f;
      }
    }, o.onTouchEnd = function(s) {
      o.userIsDragging || (o.controlRef && !o.controlRef.contains(s.target) && o.menuListRef && !o.menuListRef.contains(s.target) && o.blurInput(), o.initialTouchX = 0, o.initialTouchY = 0);
    }, o.onControlTouchEnd = function(s) {
      o.userIsDragging || o.onControlMouseDown(s);
    }, o.onClearIndicatorTouchEnd = function(s) {
      o.userIsDragging || o.onClearIndicatorMouseDown(s);
    }, o.onDropdownIndicatorTouchEnd = function(s) {
      o.userIsDragging || o.onDropdownIndicatorMouseDown(s);
    }, o.handleInputChange = function(s) {
      var l = o.props.inputValue, u = s.currentTarget.value;
      o.setState({
        inputIsHiddenAfterUpdate: !1
      }), o.onInputChange(u, {
        action: "input-change",
        prevInputValue: l
      }), o.props.menuIsOpen || o.onMenuOpen();
    }, o.onInputFocus = function(s) {
      o.props.onFocus && o.props.onFocus(s), o.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (o.openAfterFocus || o.props.openMenuOnFocus) && o.openMenu("first"), o.openAfterFocus = !1;
    }, o.onInputBlur = function(s) {
      var l = o.props.inputValue;
      if (o.menuListRef && o.menuListRef.contains(document.activeElement)) {
        o.inputRef.focus();
        return;
      }
      o.props.onBlur && o.props.onBlur(s), o.onInputChange("", {
        action: "input-blur",
        prevInputValue: l
      }), o.onMenuClose(), o.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, o.onOptionHover = function(s) {
      o.blockOptionHover || o.state.focusedOption === s || o.setState({
        focusedOption: s
      });
    }, o.shouldHideSelectedOptions = function() {
      return eT(o.props);
    }, o.onValueInputFocus = function(s) {
      s.preventDefault(), s.stopPropagation(), o.focus();
    }, o.onKeyDown = function(s) {
      var l = o.props, u = l.isMulti, c = l.backspaceRemovesValue, d = l.escapeClearsValue, f = l.inputValue, p = l.isClearable, v = l.isDisabled, g = l.menuIsOpen, S = l.onKeyDown, m = l.tabSelectsValue, h = l.openMenuOnFocus, b = o.state, x = b.focusedOption, C = b.focusedValue, k = b.selectValue;
      if (!v && !(typeof S == "function" && (S(s), s.defaultPrevented))) {
        switch (o.blockOptionHover = !0, s.key) {
          case "ArrowLeft":
            if (!u || f)
              return;
            o.focusValue("previous");
            break;
          case "ArrowRight":
            if (!u || f)
              return;
            o.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (f)
              return;
            if (C)
              o.removeValue(C);
            else {
              if (!c)
                return;
              u ? o.popValue() : p && o.clearValue();
            }
            break;
          case "Tab":
            if (o.isComposing || s.shiftKey || !g || !m || !x || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            h && o.isOptionSelected(x, k))
              return;
            o.selectOption(x);
            break;
          case "Enter":
            if (s.keyCode === 229)
              break;
            if (g) {
              if (!x || o.isComposing)
                return;
              o.selectOption(x);
              break;
            }
            return;
          case "Escape":
            g ? (o.setState({
              inputIsHiddenAfterUpdate: !1
            }), o.onInputChange("", {
              action: "menu-close",
              prevInputValue: f
            }), o.onMenuClose()) : p && d && o.clearValue();
            break;
          case " ":
            if (f)
              return;
            if (!g) {
              o.openMenu("first");
              break;
            }
            if (!x)
              return;
            o.selectOption(x);
            break;
          case "ArrowUp":
            g ? o.focusOption("up") : o.openMenu("last");
            break;
          case "ArrowDown":
            g ? o.focusOption("down") : o.openMenu("first");
            break;
          case "PageUp":
            if (!g)
              return;
            o.focusOption("pageup");
            break;
          case "PageDown":
            if (!g)
              return;
            o.focusOption("pagedown");
            break;
          case "Home":
            if (!g)
              return;
            o.focusOption("first");
            break;
          case "End":
            if (!g)
              return;
            o.focusOption("last");
            break;
          default:
            return;
        }
        s.preventDefault();
      }
    }, o.instancePrefix = "react-select-" + (o.props.instanceId || ++sU), o.state.selectValue = W1(r.value), r.menuIsOpen && o.state.selectValue.length) {
      var i = o.buildFocusableOptions(), a = i.indexOf(o.state.selectValue[0]);
      o.state.focusedOption = i[a];
    }
    return o;
  }
  return OW(n, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && H1(this.menuListRef, this.focusedOptionRef);
    }
  }, {
    key: "componentDidUpdate",
    value: function(o) {
      var i = this.props, a = i.isDisabled, s = i.menuIsOpen, l = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (l && !a && o.isDisabled || // ensure focus is on the Input when the menu opens
      l && s && !o.menuIsOpen) && this.focusInput(), l && a && !o.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !l && !a && o.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (H1(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      }), this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function(o, i) {
      this.props.onInputChange(o, i);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function() {
      this.inputRef && this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function() {
      this.inputRef && this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function(o) {
      var i = this, a = this.state, s = a.selectValue, l = a.isFocused, u = this.buildFocusableOptions(), c = o === "first" ? 0 : u.length - 1;
      if (!this.props.isMulti) {
        var d = u.indexOf(s[0]);
        d > -1 && (c = d);
      }
      this.scrollToFocusedOptionOnUpdate = !(l && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: u[c]
      }, function() {
        return i.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(o) {
      var i = this.state, a = i.selectValue, s = i.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var l = a.indexOf(s);
        s || (l = -1);
        var u = a.length - 1, c = -1;
        if (a.length) {
          switch (o) {
            case "previous":
              l === 0 ? c = 0 : l === -1 ? c = u : c = l - 1;
              break;
            case "next":
              l > -1 && l < u && (c = l + 1);
              break;
          }
          this.setState({
            inputIsHidden: c !== -1,
            focusedValue: a[c]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", i = this.props.pageSize, a = this.state.focusedOption, s = this.getFocusableOptions();
      if (s.length) {
        var l = 0, u = s.indexOf(a);
        a || (u = -1), o === "up" ? l = u > 0 ? u - 1 : s.length - 1 : o === "down" ? l = (u + 1) % s.length : o === "pageup" ? (l = u - i, l < 0 && (l = 0)) : o === "pagedown" ? (l = u + i, l > s.length - 1 && (l = s.length - 1)) : o === "last" && (l = s.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
          focusedOption: s[l],
          focusedValue: null
        });
      }
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function() {
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(gp) : X(X({}, gp), this.props.theme) : gp;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var o = this.clearValue, i = this.cx, a = this.getStyles, s = this.getClassNames, l = this.getValue, u = this.selectOption, c = this.setValue, d = this.props, f = d.isMulti, p = d.isRtl, v = d.options, g = this.hasValue();
      return {
        clearValue: o,
        cx: i,
        getStyles: a,
        getClassNames: s,
        getValue: l,
        hasValue: g,
        isMulti: f,
        isRtl: p,
        options: v,
        selectOption: u,
        selectProps: d,
        setValue: c,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function() {
      var o = this.state.selectValue;
      return o.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function() {
      var o = this.props, i = o.isClearable, a = o.isMulti;
      return i === void 0 ? a : i;
    }
  }, {
    key: "isOptionDisabled",
    value: function(o, i) {
      return Q2(this.props, o, i);
    }
  }, {
    key: "isOptionSelected",
    value: function(o, i) {
      return Z2(this.props, o, i);
    }
  }, {
    key: "filterOption",
    value: function(o, i) {
      return J2(this.props, o, i);
    }
  }, {
    key: "formatOptionLabel",
    value: function(o, i) {
      if (typeof this.props.formatOptionLabel == "function") {
        var a = this.props.inputValue, s = this.state.selectValue;
        return this.props.formatOptionLabel(o, {
          context: i,
          inputValue: a,
          selectValue: s
        });
      } else
        return this.getOptionLabel(o);
    }
  }, {
    key: "formatGroupLabel",
    value: function(o) {
      return this.props.formatGroupLabel(o);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function() {
        var o = this.props, i = o.isDisabled, a = o.isSearchable, s = o.inputId, l = o.inputValue, u = o.tabIndex, c = o.form, d = o.menuIsOpen, f = o.required, p = this.getComponents(), v = p.Input, g = this.state, S = g.inputIsHidden, m = g.ariaSelection, h = this.commonProps, b = s || this.getElementId("input"), x = X(X(X({
          "aria-autocomplete": "list",
          "aria-expanded": d,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": f,
          role: "combobox"
        }, d && {
          "aria-controls": this.getElementId("listbox"),
          "aria-owns": this.getElementId("listbox")
        }), !a && {
          "aria-readonly": !0
        }), this.hasValue() ? (m == null ? void 0 : m.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return a ? /* @__PURE__ */ y.createElement(v, Y({}, h, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: b,
          innerRef: this.getInputRef,
          isDisabled: i,
          isHidden: S,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: u,
          form: c,
          type: "text",
          value: l
        }, x)) : /* @__PURE__ */ y.createElement(zH, Y({
          id: b,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: Lc,
          onFocus: this.onInputFocus,
          disabled: i,
          tabIndex: u,
          inputMode: "none",
          form: c,
          value: ""
        }, x));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var o = this, i = this.getComponents(), a = i.MultiValue, s = i.MultiValueContainer, l = i.MultiValueLabel, u = i.MultiValueRemove, c = i.SingleValue, d = i.Placeholder, f = this.commonProps, p = this.props, v = p.controlShouldRenderValue, g = p.isDisabled, S = p.isMulti, m = p.inputValue, h = p.placeholder, b = this.state, x = b.selectValue, C = b.focusedValue, k = b.isFocused;
      if (!this.hasValue() || !v)
        return m ? null : /* @__PURE__ */ y.createElement(d, Y({}, f, {
          key: "placeholder",
          isDisabled: g,
          isFocused: k,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), h);
      if (S)
        return x.map(function(T, M) {
          var $ = T === C, D = "".concat(o.getOptionLabel(T), "-").concat(o.getOptionValue(T));
          return /* @__PURE__ */ y.createElement(a, Y({}, f, {
            components: {
              Container: s,
              Label: l,
              Remove: u
            },
            isFocused: $,
            isDisabled: g,
            key: D,
            index: M,
            removeProps: {
              onClick: function() {
                return o.removeValue(T);
              },
              onTouchEnd: function() {
                return o.removeValue(T);
              },
              onMouseDown: function(W) {
                W.preventDefault();
              }
            },
            data: T
          }), o.formatOptionLabel(T, "value"));
        });
      if (m)
        return null;
      var P = x[0];
      return /* @__PURE__ */ y.createElement(c, Y({}, f, {
        data: P,
        isDisabled: g
      }), this.formatOptionLabel(P, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var o = this.getComponents(), i = o.ClearIndicator, a = this.commonProps, s = this.props, l = s.isDisabled, u = s.isLoading, c = this.state.isFocused;
      if (!this.isClearable() || !i || l || !this.hasValue() || u)
        return null;
      var d = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ y.createElement(i, Y({}, a, {
        innerProps: d,
        isFocused: c
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var o = this.getComponents(), i = o.LoadingIndicator, a = this.commonProps, s = this.props, l = s.isDisabled, u = s.isLoading, c = this.state.isFocused;
      if (!i || !u)
        return null;
      var d = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ y.createElement(i, Y({}, a, {
        innerProps: d,
        isDisabled: l,
        isFocused: c
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var o = this.getComponents(), i = o.DropdownIndicator, a = o.IndicatorSeparator;
      if (!i || !a)
        return null;
      var s = this.commonProps, l = this.props.isDisabled, u = this.state.isFocused;
      return /* @__PURE__ */ y.createElement(a, Y({}, s, {
        isDisabled: l,
        isFocused: u
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var o = this.getComponents(), i = o.DropdownIndicator;
      if (!i)
        return null;
      var a = this.commonProps, s = this.props.isDisabled, l = this.state.isFocused, u = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ y.createElement(i, Y({}, a, {
        innerProps: u,
        isDisabled: s,
        isFocused: l
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var o = this, i = this.getComponents(), a = i.Group, s = i.GroupHeading, l = i.Menu, u = i.MenuList, c = i.MenuPortal, d = i.LoadingMessage, f = i.NoOptionsMessage, p = i.Option, v = this.commonProps, g = this.state.focusedOption, S = this.props, m = S.captureMenuScroll, h = S.inputValue, b = S.isLoading, x = S.loadingMessage, C = S.minMenuHeight, k = S.maxMenuHeight, P = S.menuIsOpen, T = S.menuPlacement, M = S.menuPosition, $ = S.menuPortalTarget, D = S.menuShouldBlockScroll, U = S.menuShouldScrollIntoView, W = S.noOptionsMessage, L = S.onMenuScrollToTop, H = S.onMenuScrollToBottom;
      if (!P)
        return null;
      var K = function(z, J) {
        var ae = z.type, re = z.data, ie = z.isDisabled, pe = z.isSelected, we = z.label, Qe = z.value, Ye = g === re, tn = ie ? void 0 : function() {
          return o.onOptionHover(re);
        }, bn = ie ? void 0 : function() {
          return o.selectOption(re);
        }, Pr = "".concat(o.getElementId("option"), "-").concat(J), ce = {
          id: Pr,
          onClick: bn,
          onMouseMove: tn,
          onMouseOver: tn,
          tabIndex: -1
        };
        return /* @__PURE__ */ y.createElement(p, Y({}, v, {
          innerProps: ce,
          data: re,
          isDisabled: ie,
          isSelected: pe,
          key: Pr,
          label: we,
          type: ae,
          value: Qe,
          isFocused: Ye,
          innerRef: Ye ? o.getFocusedOptionRef : void 0
        }), o.formatOptionLabel(z.data, "menu"));
      }, ne;
      if (this.hasOptions())
        ne = this.getCategorizedOptions().map(function(G) {
          if (G.type === "group") {
            var z = G.data, J = G.options, ae = G.index, re = "".concat(o.getElementId("group"), "-").concat(ae), ie = "".concat(re, "-heading");
            return /* @__PURE__ */ y.createElement(a, Y({}, v, {
              key: re,
              data: z,
              options: J,
              Heading: s,
              headingProps: {
                id: ie,
                data: G.data
              },
              label: o.formatGroupLabel(G.data)
            }), G.options.map(function(pe) {
              return K(pe, "".concat(ae, "-").concat(pe.index));
            }));
          } else if (G.type === "option")
            return K(G, "".concat(G.index));
        });
      else if (b) {
        var R = x({
          inputValue: h
        });
        if (R === null)
          return null;
        ne = /* @__PURE__ */ y.createElement(d, v, R);
      } else {
        var F = W({
          inputValue: h
        });
        if (F === null)
          return null;
        ne = /* @__PURE__ */ y.createElement(f, v, F);
      }
      var B = {
        minMenuHeight: C,
        maxMenuHeight: k,
        menuPlacement: T,
        menuPosition: M,
        menuShouldScrollIntoView: U
      }, N = /* @__PURE__ */ y.createElement(m7, Y({}, v, B), function(G) {
        var z = G.ref, J = G.placerProps, ae = J.placement, re = J.maxHeight;
        return /* @__PURE__ */ y.createElement(l, Y({}, v, B, {
          innerRef: z,
          innerProps: {
            onMouseDown: o.onMenuMouseDown,
            onMouseMove: o.onMenuMouseMove,
            id: o.getElementId("listbox")
          },
          isLoading: b,
          placement: ae
        }), /* @__PURE__ */ y.createElement(WH, {
          captureEnabled: m,
          onTopArrive: L,
          onBottomArrive: H,
          lockEnabled: D
        }, function(ie) {
          return /* @__PURE__ */ y.createElement(u, Y({}, v, {
            innerRef: function(we) {
              o.getMenuListRef(we), ie(we);
            },
            isLoading: b,
            maxHeight: re,
            focusedOption: g
          }), ne);
        }));
      });
      return $ || M === "fixed" ? /* @__PURE__ */ y.createElement(c, Y({}, v, {
        appendTo: $,
        controlElement: this.controlRef,
        menuPlacement: T,
        menuPosition: M
      }), N) : N;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var o = this, i = this.props, a = i.delimiter, s = i.isDisabled, l = i.isMulti, u = i.name, c = i.required, d = this.state.selectValue;
      if (c && !this.hasValue() && !s)
        return /* @__PURE__ */ y.createElement(GH, {
          name: u,
          onFocus: this.onValueInputFocus
        });
      if (!(!u || s))
        if (l)
          if (a) {
            var f = d.map(function(g) {
              return o.getOptionValue(g);
            }).join(a);
            return /* @__PURE__ */ y.createElement("input", {
              name: u,
              type: "hidden",
              value: f
            });
          } else {
            var p = d.length > 0 ? d.map(function(g, S) {
              return /* @__PURE__ */ y.createElement("input", {
                key: "i-".concat(S),
                name: u,
                type: "hidden",
                value: o.getOptionValue(g)
              });
            }) : /* @__PURE__ */ y.createElement("input", {
              name: u,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ y.createElement("div", null, p);
          }
        else {
          var v = d[0] ? this.getOptionValue(d[0]) : "";
          return /* @__PURE__ */ y.createElement("input", {
            name: u,
            type: "hidden",
            value: v
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var o = this.commonProps, i = this.state, a = i.ariaSelection, s = i.focusedOption, l = i.focusedValue, u = i.isFocused, c = i.selectValue, d = this.getFocusableOptions();
      return /* @__PURE__ */ y.createElement(IH, Y({}, o, {
        id: this.getElementId("live-region"),
        ariaSelection: a,
        focusedOption: s,
        focusedValue: l,
        isFocused: u,
        selectValue: c,
        focusableOptions: d
      }));
    }
  }, {
    key: "render",
    value: function() {
      var o = this.getComponents(), i = o.Control, a = o.IndicatorsContainer, s = o.SelectContainer, l = o.ValueContainer, u = this.props, c = u.className, d = u.id, f = u.isDisabled, p = u.menuIsOpen, v = this.state.isFocused, g = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ y.createElement(s, Y({}, g, {
        className: c,
        innerProps: {
          id: d,
          onKeyDown: this.onKeyDown
        },
        isDisabled: f,
        isFocused: v
      }), this.renderLiveRegion(), /* @__PURE__ */ y.createElement(i, Y({}, g, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: f,
        isFocused: v,
        menuIsOpen: p
      }), /* @__PURE__ */ y.createElement(l, Y({}, g, {
        isDisabled: f
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ y.createElement(a, Y({}, g, {
        isDisabled: f
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(o, i) {
      var a = i.prevProps, s = i.clearFocusValueOnUpdate, l = i.inputIsHiddenAfterUpdate, u = i.ariaSelection, c = i.isFocused, d = i.prevWasFocused, f = o.options, p = o.value, v = o.menuIsOpen, g = o.inputValue, S = o.isMulti, m = W1(p), h = {};
      if (a && (p !== a.value || f !== a.options || v !== a.menuIsOpen || g !== a.inputValue)) {
        var b = v ? oU(o, m) : [], x = s ? iU(i, m) : null, C = aU(i, b);
        h = {
          selectValue: m,
          focusedOption: C,
          focusedValue: x,
          clearFocusValueOnUpdate: !1
        };
      }
      var k = l != null && o !== a ? {
        inputIsHidden: l,
        inputIsHiddenAfterUpdate: void 0
      } : {}, P = u, T = c && d;
      return c && !T && (P = {
        value: uu(S, m, m[0] || null),
        options: m,
        action: "initial-input-focus"
      }, T = !d), (u == null ? void 0 : u.action) === "initial-input-focus" && (P = null), X(X(X({}, h), k), {}, {
        prevProps: o,
        ariaSelection: P,
        prevWasFocused: T
      });
    }
  }]), n;
}(y.Component);
tT.defaultProps = rU;
var lU = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = EW(e);
  return /* @__PURE__ */ y.createElement(tT, Y({
    ref: t
  }, n));
}), uU = lU, cU = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
function em() {
  return em = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, em.apply(this, arguments);
}
function dU(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var nT = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = dU(t, cU);
  return em({}, n);
}, fU = function(t) {
  var n = typeof t == "string";
  return n && ["sm", "md", "lg"].includes(t);
}, pU = function(t) {
  return fU(t) ? t : t === "xs" ? "sm" : t === "xl" ? "lg" : "md";
}, In = function(t) {
  var n = ao(), r = pU(n.components.Input.defaultProps.size), o = t ?? r, i = S6(typeof o == "string" ? [o] : o, {
    fallback: "md"
  }) || r;
  return i;
};
function ua() {
  return ua = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ua.apply(this, arguments);
}
var hU = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.isDisabled, s = t.isRtl, l = t.hasValue, u = t.selectProps.chakraStyles, c = ua({
    position: "relative",
    direction: s ? "rtl" : void 0
  }, a ? {
    cursor: "not-allowed"
  } : {}), d = u != null && u.container ? u.container(c, t) : c;
  return /* @__PURE__ */ te.createElement(We, ua({}, i, {
    className: o({
      "--is-disabled": a,
      "--is-rtl": s,
      "--has-value": l
    }, r),
    sx: d
  }), n);
}, mU = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.isMulti, a = t.hasValue, s = t.innerProps, l = t.selectProps, u = l.chakraStyles, c = l.size, d = l.variant, f = l.focusBorderColor, p = l.errorBorderColor, v = l.controlShouldRenderValue, g = In(c), S = Lt("Input", {
    size: g,
    variant: d,
    focusBorderColor: f,
    errorBorderColor: p
  }), m = {
    display: i && a && v ? "flex" : "grid",
    alignItems: "center",
    flex: 1,
    paddingY: "2px",
    paddingX: S.field.px,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, h = u != null && u.valueContainer ? u.valueContainer(m, t) : m;
  return /* @__PURE__ */ te.createElement(We, ua({}, s, {
    className: o({
      "value-container": !0,
      "value-container--is-multi": i,
      "value-container--has-value": a
    }, r),
    sx: h
  }), n);
}, vU = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps.chakraStyles, s = {
    display: "flex",
    alignItems: "center",
    alignSelf: "stretch",
    flexShrink: 0
  }, l = a != null && a.indicatorsContainer ? a.indicatorsContainer(s, t) : s;
  return /* @__PURE__ */ te.createElement(We, ua({}, i, {
    className: o({
      indicators: !0
    }, r),
    sx: l
  }), n);
}, gU = ["height", "h"];
function yn() {
  return yn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, yn.apply(this, arguments);
}
function yU(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var bU = function(t) {
  var n = t.className, r = t.cx, o = t.children, i = t.innerRef, a = t.innerProps, s = t.isDisabled, l = t.isFocused, u = t.menuIsOpen, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, v = c.focusBorderColor, g = c.errorBorderColor, S = c.isInvalid, m = c.isReadOnly, h = In(f), b = Lt("Input", {
    size: h,
    variant: p,
    focusBorderColor: v,
    errorBorderColor: g
  }), x = b.field, C = x.height, k = x.h, P = yU(x, gU), T = C || k, M = yn({}, P, {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 0,
    overflow: "hidden",
    height: "auto",
    minH: T
  }, s ? {
    pointerEvents: "none"
  } : {}), $ = d != null && d.control ? d.control(M, t) : M;
  return /* @__PURE__ */ te.createElement(We, yn({
    ref: i,
    className: r({
      control: !0,
      "control--is-disabled": s,
      "control--is-focused": l,
      "control--menu-is-open": u
    }, n),
    sx: $
  }, a, {
    "data-focus": l ? !0 : void 0,
    "data-focus-visible": l ? !0 : void 0,
    "data-invalid": S ? !0 : void 0,
    "data-disabled": s ? !0 : void 0,
    "data-readonly": m ? !0 : void 0
  }), o);
}, SU = function(t) {
  var n = t.className, r = t.cx, o = t.selectProps, i = o.chakraStyles, a = o.useBasicStyles, s = o.variant, l = yn({
    opacity: 1
  }, a || s !== "outline" ? {
    display: "none"
  } : {}), u = i != null && i.indicatorSeparator ? i.indicatorSeparator(l, t) : l;
  return /* @__PURE__ */ te.createElement(HP, {
    className: r({
      "indicator-separator": !0
    }, n),
    sx: u,
    orientation: "vertical"
  });
}, xU = function(t) {
  return /* @__PURE__ */ te.createElement(lo, yn({
    role: "presentation",
    focusable: "false",
    "aria-hidden": "true"
  }, t), /* @__PURE__ */ te.createElement("path", {
    fill: "currentColor",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }));
}, wU = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.useBasicStyles, u = a.size, c = a.focusBorderColor, d = a.errorBorderColor, f = a.variant, p = In(u), v = Lt("Input", {
    size: p,
    variant: f,
    focusBorderColor: c,
    errorBorderColor: d
  }), g = {
    sm: "16px",
    md: "20px",
    lg: "24px"
  }, S = g[p], m = yn({}, v.addon, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: 0,
    borderWidth: 0,
    fontSize: S
  }, l && {
    background: "transparent",
    padding: 0,
    width: 6,
    marginRight: 2,
    marginLeft: 1,
    cursor: "inherit"
  }), h = s != null && s.dropdownIndicator ? s.dropdownIndicator(m, t) : m, b = {
    height: "1em",
    width: "1em"
  }, x = s != null && s.downChevron ? s.downChevron(b, t) : b;
  return /* @__PURE__ */ te.createElement(We, yn({}, i, {
    className: o({
      indicator: !0,
      "dropdown-indicator": !0
    }, r),
    sx: h
  }), n || /* @__PURE__ */ te.createElement(xU, {
    sx: x
  }));
}, CU = function(t) {
  return /* @__PURE__ */ te.createElement(lo, yn({
    focusable: "false",
    "aria-hidden": !0
  }, t), /* @__PURE__ */ te.createElement("path", {
    fill: "currentColor",
    d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
  }));
}, kU = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.size, u = In(l), c = Ho("CloseButton", {
    size: u
  }), d = yn({}, c, {
    marginX: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    cursor: "pointer"
  }), f = s != null && s.clearIndicator ? s.clearIndicator(d, t) : d, p = {
    width: "1em",
    height: "1em"
  }, v = s != null && s.crossIcon ? s.crossIcon(p, t) : p;
  return /* @__PURE__ */ te.createElement(We, yn({
    role: "button",
    className: o({
      indicator: !0,
      "clear-indicator": !0
    }, r),
    sx: f,
    "aria-label": "Clear selected options"
  }, i), n || /* @__PURE__ */ te.createElement(CU, {
    sx: v
  }));
}, PU = function(t) {
  var n = t.className, r = t.cx, o = t.innerProps, i = t.selectProps, a = i.chakraStyles, s = i.size, l = t.color, u = t.emptyColor, c = t.speed, d = t.thickness, f = t.spinnerSize, p = In(s), v = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }, g = v[p], S = {
    marginRight: 3
  }, m = a != null && a.loadingIndicator ? a.loadingIndicator(S, t) : S;
  return /* @__PURE__ */ te.createElement($d, yn({
    className: r({
      indicator: !0,
      "loading-indicator": !0
    }, n),
    sx: m
  }, o, {
    size: f || g,
    color: l,
    emptyColor: u,
    speed: c,
    thickness: d
  }));
};
const TU = bU;
var EU = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
function vs() {
  return vs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, vs.apply(this, arguments);
}
function _U(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var OU = function(t) {
  var n = t.className, r = t.cx, o = t.value, i = t.selectProps, a = i.chakraStyles, s = i.isReadOnly, l = nT(t), u = l.innerRef, c = l.isDisabled, d = l.isHidden, f = l.inputClassName, p = _U(l, EU), v = {
    gridArea: "1 / 2",
    minW: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0
  }, g = {
    flex: "1 1 auto",
    display: "inline-grid",
    gridArea: "1 / 1 / 2 / 3",
    gridTemplateColumns: "0 min-content",
    color: "inherit",
    marginX: "0.125rem",
    paddingY: "0.125rem",
    visibility: c ? "hidden" : "visible",
    // Force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: o ? "translateZ(0)" : "",
    _after: vs({
      content: 'attr(data-value) " "',
      visibility: "hidden",
      whiteSpace: "pre",
      padding: 0
    }, v)
  }, S = a != null && a.inputContainer ? a.inputContainer(g, t) : g, m = vs({
    background: 0,
    opacity: d ? 0 : 1,
    width: "100%"
  }, v), h = a != null && a.input ? a.input(m, t) : m;
  return /* @__PURE__ */ te.createElement(We, {
    className: r({
      "input-container": !0
    }, n),
    "data-value": o || "",
    sx: S
  }, /* @__PURE__ */ te.createElement(oe.input, vs({
    className: r({
      input: !0
    }, f),
    ref: u,
    sx: h,
    disabled: c,
    readOnly: s ? !0 : void 0
  }, p)));
};
const MU = OU;
var IU = ["data"];
function $U(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Nt() {
  return Nt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Nt.apply(this, arguments);
}
var RU = function(t) {
  var n = {
    bottom: "top",
    top: "bottom"
  };
  return t ? n[t] : "top";
}, AU = function(t) {
  var n, r = t.className, o = t.cx, i = t.children, a = t.innerProps, s = t.innerRef, l = t.placement, u = t.selectProps.chakraStyles, c = (n = {
    position: "absolute"
  }, n[RU(l)] = "100%", n.marginY = "8px", n.width = "100%", n.zIndex = 1, n), d = u != null && u.menu ? u.menu(c, t) : c;
  return /* @__PURE__ */ te.createElement(i2, null, /* @__PURE__ */ te.createElement(We, Nt({}, a, {
    ref: s,
    className: o({
      menu: !0
    }, r),
    sx: d
  }), i));
};
const DU = AU;
var FU = function(t) {
  var n, r = t.className, o = t.cx, i = t.innerRef, a = t.children, s = t.maxHeight, l = t.isMulti, u = t.innerProps, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, v = c.focusBorderColor, g = c.errorBorderColor, S = Lt("Menu"), m = In(f), h = Lt("Input", {
    size: m,
    variant: p,
    focusBorderColor: v,
    errorBorderColor: g
  }), b = h.field, x = Nt({}, S.list, {
    minW: "100%",
    maxHeight: s + "px",
    overflowY: "auto",
    // This is hacky, but it works. May be removed in the future
    "--input-border-radius": b == null ? void 0 : b["--input-border-radius"],
    borderRadius: (b == null ? void 0 : b.borderRadius) || ((n = S.list) == null ? void 0 : n.borderRadius),
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }), C = d != null && d.menuList ? d.menuList(x, t) : x;
  return /* @__PURE__ */ te.createElement(We, Nt({
    role: "listbox"
  }, u, {
    className: o({
      "menu-list": !0,
      "menu-list--is-multi": l
    }, r),
    sx: C,
    ref: i
  }), a);
}, zU = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.size, u = In(l), c = {
    sm: "6px",
    md: "8px",
    lg: "10px"
  }, d = {
    color: "chakra-subtle-text",
    textAlign: "center",
    paddingY: c[u],
    fontSize: u
  }, f = s != null && s.loadingMessage ? s.loadingMessage(d, t) : d;
  return /* @__PURE__ */ te.createElement(We, Nt({}, i, {
    className: o({
      "menu-notice": !0,
      "menu-notice--loading": !0
    }, r),
    sx: f
  }), n);
}, LU = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.size, u = In(l), c = {
    sm: "6px",
    md: "8px",
    lg: "10px"
  }, d = {
    color: "chakra-subtle-text",
    textAlign: "center",
    paddingY: c[u],
    fontSize: u
  }, f = s != null && s.noOptionsMessage ? s.noOptionsMessage(d, t) : d;
  return /* @__PURE__ */ te.createElement(We, Nt({}, i, {
    className: o({
      "menu-notice": !0,
      "menu-notice--no-options": !0
    }, r),
    sx: f
  }), n);
}, VU = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.theme, a = t.getStyles, s = t.Heading, l = t.headingProps, u = t.label, c = t.selectProps, d = t.innerProps, f = t.getClassNames, p = c.chakraStyles, v = {}, g = p != null && p.group ? p.group(v, t) : v;
  return /* @__PURE__ */ te.createElement(We, Nt({}, d, {
    className: o({
      group: !0
    }, r),
    sx: g
  }), /* @__PURE__ */ te.createElement(s, Nt({}, l, {
    selectProps: c,
    cx: o,
    theme: i,
    getStyles: a,
    getClassNames: f
  }), u), /* @__PURE__ */ te.createElement(We, null, n));
}, NU = function(t) {
  var n = t.cx, r = t.className, o = t.selectProps, i = o.chakraStyles, a = o.size, s = o.hasStickyGroupHeaders, l = nT(t);
  l.data;
  var u = $U(l, IU), c = Lt("Menu"), d = In(a), f = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }, p = {
    sm: "0.4rem 0.8rem",
    md: "0.5rem 1rem",
    lg: "0.6rem 1.2rem"
  }, v = Nt({}, c.groupTitle, {
    fontSize: f[d],
    padding: p[d],
    margin: 0,
    borderBottomWidth: s ? "1px" : 0,
    position: s ? "sticky" : "static",
    top: -2,
    bg: c.list.bg,
    zIndex: 1
  }), g = i != null && i.groupHeading ? i.groupHeading(v, t) : v;
  return /* @__PURE__ */ te.createElement(We, Nt({}, u, {
    className: n({
      "group-heading": !0
    }, r),
    sx: g
  }));
}, jU = function(t) {
  return /* @__PURE__ */ te.createElement("svg", Nt({
    viewBox: "0 0 14 14",
    width: "1em",
    height: "1em"
  }, t), /* @__PURE__ */ te.createElement("polygon", {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }));
}, BU = function(t) {
  var n = t.className, r = t.cx, o = t.innerRef, i = t.innerProps, a = t.children, s = t.isFocused, l = t.isDisabled, u = t.isSelected, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.isMulti, v = c.hideSelectedOptions, g = c.selectedOptionStyle, S = c.selectedOptionColorScheme, m = Lt("Menu").item, h = In(f), b = {
    sm: "0.6rem",
    md: "0.8rem",
    lg: "1rem"
  }, x = {
    sm: "0.3rem",
    md: "0.4rem",
    lg: "0.5rem"
  }, C = ny(S + ".500", S + ".300"), k = ny("white", "black"), P = g === "check" && (!p || v === !1), T = g === "color", M = Nt({}, m, {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    width: "100%",
    textAlign: "start",
    fontSize: h,
    paddingX: b[h],
    paddingY: x[h]
  }, T && {
    _selected: {
      bg: C,
      color: k,
      _active: {
        bg: C
      }
    }
  }), $ = d != null && d.option ? d.option(M, t) : M;
  return /* @__PURE__ */ te.createElement(We, Nt({
    role: "option"
  }, i, {
    className: r({
      option: !0,
      "option--is-disabled": l,
      "option--is-focused": s,
      "option--is-selected": u
    }, n),
    sx: $,
    ref: o,
    "data-focus": s ? !0 : void 0,
    "aria-disabled": l ? !0 : void 0,
    "aria-selected": u
  }), P && /* @__PURE__ */ te.createElement(a2, {
    fontSize: "0.8em",
    marginEnd: "0.75rem",
    opacity: u ? 1 : 0
  }, /* @__PURE__ */ te.createElement(jU, null)), a);
};
function Tn() {
  return Tn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Tn.apply(this, arguments);
}
var WU = function(t) {
  return typeof t == "object" && t !== null && "colorScheme" in t && typeof t.colorScheme == "string";
}, HU = function(t) {
  return typeof t == "object" && t !== null && "variant" in t && typeof t.variant == "string";
}, rT = function(t) {
  return typeof t == "object" && t !== null && "isFixed" in t && typeof t.isFixed == "boolean";
}, UU = function(t) {
  var n = t.children, r = t.className, o = t.components, i = t.cx, a = t.data, s = t.innerProps, l = t.isDisabled, u = t.isFocused, c = t.removeProps, d = t.selectProps, f = t.cropWithEllipsis, p = o.Container, v = o.Label, g = o.Remove, S = d.chakraStyles, m = d.colorScheme, h = d.tagVariant, b = d.size, x = In(b), C = "", k = "", P = !1;
  WU(a) && (C = a.colorScheme), HU(a) && (k = a.variant), rT(a) && (P = a.isFixed);
  var T = Lt("Tag", {
    size: x,
    colorScheme: C || m,
    variant: k || h || (P ? "solid" : "subtle")
  }), M = Tn({}, T.container, {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    // resolves flex/text-overflow bug
    margin: "0.125rem"
  }), $ = S != null && S.multiValue ? S.multiValue(M, t) : M, D = Tn({}, T.label, {
    overflow: "hidden",
    textOverflow: f || f === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }), U = S != null && S.multiValueLabel ? S.multiValueLabel(D, t) : D, W = Tn({}, T.closeButton, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }), L = S != null && S.multiValueRemove ? S.multiValueRemove(W, t) : W;
  return /* @__PURE__ */ te.createElement(p, {
    data: a,
    innerProps: Tn({
      className: i({
        "multi-value": !0,
        "multi-value--is-disabled": l
      }, r)
    }, s),
    sx: $,
    selectProps: d
  }, /* @__PURE__ */ te.createElement(v, {
    data: a,
    innerProps: {
      className: i({
        "multi-value__label": !0
      }, r)
    },
    sx: U,
    selectProps: d
  }, n), /* @__PURE__ */ te.createElement(g, {
    data: a,
    innerProps: Tn({
      className: i({
        "multi-value__remove": !0
      }, r),
      "aria-label": "Remove " + (n || "option")
    }, c),
    sx: L,
    selectProps: d,
    isFocused: u
  }));
}, GU = function(t) {
  var n = t.children, r = t.innerProps, o = t.sx;
  return /* @__PURE__ */ te.createElement(oe.span, Tn({}, r, {
    sx: o
  }), n);
}, YU = function(t) {
  var n = t.children, r = t.innerProps, o = t.sx;
  return /* @__PURE__ */ te.createElement(oe.span, Tn({}, r, {
    sx: o
  }), n);
}, KU = function(t) {
  return /* @__PURE__ */ te.createElement(lo, Tn({
    verticalAlign: "inherit",
    viewBox: "0 0 512 512"
  }, t), /* @__PURE__ */ te.createElement("path", {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }));
}, qU = function(t) {
  var n = t.children, r = t.innerProps, o = t.isFocused, i = t.data, a = t.sx;
  return rT(i) && i.isFixed ? null : /* @__PURE__ */ te.createElement(We, Tn({}, r, {
    role: "button",
    sx: a,
    "data-focus": o ? !0 : void 0,
    "data-focus-visible": o ? !0 : void 0
  }), n || /* @__PURE__ */ te.createElement(KU, null));
};
const XU = UU;
function tm() {
  return tm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, tm.apply(this, arguments);
}
var QU = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps.chakraStyles, s = {
    gridArea: "1 / 1 / 2 / 3",
    color: "chakra-placeholder-color",
    mx: "0.125rem",
    userSelect: "none"
  }, l = a != null && a.placeholder ? a.placeholder(s, t) : s;
  return /* @__PURE__ */ te.createElement(We, tm({}, i, {
    className: o({
      placeholder: !0
    }, r),
    sx: l
  }), n);
};
const ZU = QU;
function nm() {
  return nm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, nm.apply(this, arguments);
}
var JU = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.isDisabled, a = t.innerProps, s = t.selectProps.chakraStyles, l = {
    gridArea: "1 / 1 / 2 / 3",
    mx: "0.125rem",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, u = s != null && s.singleValue ? s.singleValue(l, t) : l;
  return /* @__PURE__ */ te.createElement(We, nm({
    className: o({
      "single-value": !0,
      "single-value--is-disabled": i
    }, r),
    sx: u
  }, a), n);
};
const eG = JU;
var tG = {
  ClearIndicator: kU,
  Control: TU,
  DropdownIndicator: wU,
  Group: VU,
  GroupHeading: NU,
  IndicatorSeparator: SU,
  IndicatorsContainer: vU,
  Input: MU,
  LoadingIndicator: PU,
  LoadingMessage: zU,
  Menu: DU,
  MenuList: FU,
  MultiValue: XU,
  MultiValueContainer: GU,
  MultiValueLabel: YU,
  MultiValueRemove: qU,
  NoOptionsMessage: LU,
  Option: BU,
  Placeholder: ZU,
  SelectContainer: hU,
  SingleValue: eG,
  ValueContainer: mU
};
const nG = tG;
var rG = ["components", "theme", "size", "colorScheme", "isDisabled", "isInvalid", "isReadOnly", "required", "isRequired", "inputId", "tagVariant", "selectedOptionStyle", "selectedOptionColorScheme", "selectedOptionColor", "variant", "focusBorderColor", "errorBorderColor", "chakraStyles", "onFocus", "onBlur", "menuIsOpen"];
function jc() {
  return jc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, jc.apply(this, arguments);
}
function oG(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var iG = function(t) {
  var n, r = t.components, o = r === void 0 ? {} : r;
  t.theme;
  var i = t.size, a = t.colorScheme, s = a === void 0 ? "gray" : a, l = t.isDisabled, u = t.isInvalid, c = t.isReadOnly, d = t.required, f = t.isRequired, p = t.inputId, v = t.tagVariant, g = t.selectedOptionStyle, S = g === void 0 ? "color" : g, m = t.selectedOptionColorScheme, h = t.selectedOptionColor, b = t.variant, x = t.focusBorderColor, C = t.errorBorderColor, k = t.chakraStyles, P = k === void 0 ? {} : k, T = t.onFocus, M = t.onBlur, $ = t.menuIsOpen, D = oG(t, rG), U = ao(), W = U.components.Input.defaultProps.variant, L = Xk({
    id: p,
    isDisabled: l,
    isInvalid: u,
    isRequired: f,
    isReadOnly: c,
    onFocus: T,
    onBlur: M
  }), H = $ ?? (L.readOnly ? !1 : void 0), K = S, ne = ["color", "check"];
  ne.includes(S) || (K = "color");
  var R = m || h || "blue";
  typeof R != "string" && (R = "blue");
  var F = jc({
    // Allow overriding of custom components
    components: jc({}, nG, o),
    // Custom select props
    colorScheme: s,
    size: i,
    tagVariant: v,
    selectedOptionStyle: K,
    selectedOptionColorScheme: R,
    variant: b ?? W,
    chakraStyles: P,
    focusBorderColor: x,
    errorBorderColor: C,
    // Extract custom props from form control
    onFocus: L.onFocus,
    onBlur: L.onBlur,
    isDisabled: L.disabled,
    isInvalid: !!L["aria-invalid"],
    inputId: L.id,
    isReadOnly: L.readOnly,
    required: d ?? L.required,
    menuIsOpen: H
  }, D, {
    // aria-invalid can be passed to react-select, so we allow that to
    // override the `isInvalid` prop
    "aria-invalid": (n = D["aria-invalid"]) != null ? n : L["aria-invalid"]
  });
  return F;
};
const aG = iG;
function rm() {
  return rm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, rm.apply(this, arguments);
}
var sG = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = aG(e);
  return /* @__PURE__ */ te.createElement(uU, rm({
    ref: t
  }, n));
});
const lG = sG;
function uG({ workflow: e }) {
  var c;
  const [t, n] = y.useState([]), [r, o] = y.useState(""), i = ((c = e.tags) == null ? void 0 : c.map((d) => ({
    value: d,
    label: d
  }))) ?? [], [a, s] = y.useState(i);
  if (y.useEffect(() => {
    Dn && n(Dn.listAll() ?? []);
  }, []), Dn == null)
    return alert("Error: TagsTable is not loaded"), null;
  const l = t.map((d) => ({
    value: d.name,
    label: d.name
  })), u = 37 * 5;
  return /* @__PURE__ */ E.jsx(ug, { children: ({}) => /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    /* @__PURE__ */ E.jsx(lg, { children: /* @__PURE__ */ E.jsx(Zr, { variant: "ghost", size: "sm", colorScheme: "teal", children: /* @__PURE__ */ E.jsx(dW, { color: "#718096" }) }) }),
    /* @__PURE__ */ E.jsxs(pg, { children: [
      /* @__PURE__ */ E.jsx(cg, {}),
      /* @__PURE__ */ E.jsx(fg, {}),
      /* @__PURE__ */ E.jsx(x2, { children: /* @__PURE__ */ E.jsx("b", { children: e.name }) }),
      /* @__PURE__ */ E.jsxs(dg, { children: [
        /* @__PURE__ */ E.jsx(
          lG,
          {
            isMulti: !0,
            name: "tags",
            options: l,
            menuIsOpen: !0,
            value: a,
            defaultValue: i,
            onChange: (d) => {
              console.log(d), s(d), qh(e.id, {
                tags: d.map((f) => f.value)
              });
            },
            chakraStyles: {
              dropdownIndicator: (d, f) => ({
                ...d,
                p: 0,
                w: "30px"
              }),
              menuList: (d, f) => ({
                ...d,
                shadow: "none",
                pt: 0
              })
            },
            placeholder: "Select tags",
            closeMenuOnSelect: !1,
            maxMenuHeight: u
          }
        ),
        /* @__PURE__ */ E.jsxs(
          ar,
          {
            gap: 4,
            mt: Math.min(u, t.length * 37),
            children: [
              /* @__PURE__ */ E.jsx(
                Dd,
                {
                  placeholder: "New tag name",
                  size: "sm",
                  mt: 6,
                  mb: 6,
                  variant: "flushed",
                  value: r,
                  onChange: (d) => {
                    o(d.target.value);
                  }
                }
              ),
              /* @__PURE__ */ E.jsx(
                Zr,
                {
                  iconSpacing: 1,
                  leftIcon: /* @__PURE__ */ E.jsx(hg, { size: 16 }),
                  colorScheme: "teal",
                  variant: "solid",
                  size: "xs",
                  px: 5,
                  isDisabled: r.length === 0,
                  onClick: () => {
                    Dn == null || Dn.upsert(r), n((Dn == null ? void 0 : Dn.listAll()) ?? []), o("");
                  },
                  children: "New Tag"
                }
              )
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function cG(e) {
  const t = new Date(e), n = String(t.getDate()).padStart(2, "0"), r = String(t.getMonth() + 1).padStart(2, "0"), o = t.getFullYear(), i = String(t.getHours()).padStart(2, "0"), a = String(t.getMinutes()).padStart(2, "0");
  return `${r}-${n}-${o} ${i}:${a}`;
}
function dG({
  onclose: e,
  loadWorkflowID: t,
  onClickNewFlow: n
}) {
  const [r, o] = y.useState([]), { colorMode: i } = ha(), { curFlowID: a } = y.useContext(T2);
  y.useEffect(() => {
    const l = L1();
    o(l);
  }, []);
  const s = (l) => {
    xW(l);
    const u = L1();
    o(u);
  };
  return /* @__PURE__ */ E.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ E.jsxs(
    Y9,
    {
      isOpen: !0,
      placement: "left",
      onClose: () => e(),
      size: "sm",
      children: [
        /* @__PURE__ */ E.jsx(y2, {}),
        /* @__PURE__ */ E.jsxs(v2, { children: [
          /* @__PURE__ */ E.jsx(S2, {}),
          /* @__PURE__ */ E.jsx(g2, { children: /* @__PURE__ */ E.jsxs(ar, { alignItems: "center", children: [
            /* @__PURE__ */ E.jsx(Mi, { mr: 6, children: "Recent Workflows" }),
            /* @__PURE__ */ E.jsx(
              Zr,
              {
                leftIcon: /* @__PURE__ */ E.jsx(hg, {}),
                variant: "outline",
                size: "sm",
                colorScheme: "teal",
                onClick: n,
                children: "New"
              }
            )
          ] }) }),
          /* @__PURE__ */ E.jsx(b2, { children: r.map((l) => {
            const u = l.id === a;
            return /* @__PURE__ */ E.jsxs(ar, { w: "100%", justify: "space-between", children: [
              /* @__PURE__ */ E.jsxs(
                We,
                {
                  as: "button",
                  textAlign: "left",
                  backgroundColor: u ? "teal.200" : void 0,
                  color: u ? "#333" : void 0,
                  w: "90%",
                  borderRadius: 6,
                  p: 2,
                  mb: 2,
                  onClick: () => {
                    t(l.id);
                  },
                  _hover: {
                    bg: i === "light" ? "gray.200" : "#4A5568"
                  },
                  _active: {
                    bg: "#dddfe2",
                    transform: "scale(0.98)",
                    borderColor: "#bec3c9"
                  },
                  children: [
                    /* @__PURE__ */ E.jsx(Mi, { fontWeight: "500", children: l.name ?? "untitled" }),
                    /* @__PURE__ */ E.jsxs(Mi, { color: "GrayText", ml: 2, fontSize: "sm", children: [
                      "Updated: ",
                      cG(l.updateTime)
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ E.jsx(uG, { workflow: l }),
              /* @__PURE__ */ E.jsx(ug, { children: ({ isOpen: c, onClose: d }) => /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
                /* @__PURE__ */ E.jsx(lg, { children: /* @__PURE__ */ E.jsx(fW, { color: "#F56565", cursor: "pointer" }) }),
                /* @__PURE__ */ E.jsxs(pg, { children: [
                  /* @__PURE__ */ E.jsx(cg, {}),
                  /* @__PURE__ */ E.jsx(fg, {}),
                  /* @__PURE__ */ E.jsxs(dg, { children: [
                    /* @__PURE__ */ E.jsx(Mi, { mb: 4, fontWeight: 600, children: "Are you sure you want to delete this workflow?" }),
                    /* @__PURE__ */ E.jsx(
                      Zr,
                      {
                        colorScheme: "red",
                        size: "sm",
                        onClick: () => {
                          s(l.id), d();
                        },
                        children: "Yes, delete"
                      }
                    )
                  ] })
                ] })
              ] }) })
            ] });
          }) })
        ] })
      ]
    }
  ) });
}
const fG = {
  last_node_id: 9,
  last_link_id: 9,
  nodes: [
    {
      id: 7,
      type: "CLIPTextEncode",
      pos: [413, 389],
      size: { 0: 425.27801513671875, 1: 180.6060791015625 },
      flags: {},
      order: 3,
      mode: 0,
      inputs: [{ name: "clip", type: "CLIP", link: 5 }],
      outputs: [{ name: "CONDITIONING", type: "CONDITIONING", links: [6], slot_index: 0 }],
      properties: {},
      widgets_values: ["text, watermark"]
    },
    {
      id: 6,
      type: "CLIPTextEncode",
      pos: [415, 186],
      size: { 0: 422.84503173828125, 1: 164.31304931640625 },
      flags: {},
      order: 2,
      mode: 0,
      inputs: [{ name: "clip", type: "CLIP", link: 3 }],
      outputs: [{ name: "CONDITIONING", type: "CONDITIONING", links: [4], slot_index: 0 }],
      properties: {},
      widgets_values: ["beautiful scenery nature glass bottle landscape, , purple galaxy bottle,"]
    },
    {
      id: 5,
      type: "EmptyLatentImage",
      pos: [473, 609],
      size: { 0: 315, 1: 106 },
      flags: {},
      order: 1,
      mode: 0,
      outputs: [{ name: "LATENT", type: "LATENT", links: [2], slot_index: 0 }],
      properties: {},
      widgets_values: [512, 512, 1]
    },
    {
      id: 3,
      type: "KSampler",
      pos: [863, 186],
      size: { 0: 315, 1: 262 },
      flags: {},
      order: 4,
      mode: 0,
      inputs: [
        { name: "model", type: "MODEL", link: 1 },
        { name: "positive", type: "CONDITIONING", link: 4 },
        { name: "negative", type: "CONDITIONING", link: 6 },
        { name: "latent_image", type: "LATENT", link: 2 }
      ],
      outputs: [{ name: "LATENT", type: "LATENT", links: [7], slot_index: 0 }],
      properties: {},
      widgets_values: [156680208700286, !0, 20, 8, "euler", "normal", 1]
    },
    {
      id: 8,
      type: "VAEDecode",
      pos: [1209, 188],
      size: { 0: 210, 1: 46 },
      flags: {},
      order: 5,
      mode: 0,
      inputs: [
        { name: "samples", type: "LATENT", link: 7 },
        { name: "vae", type: "VAE", link: 8 }
      ],
      outputs: [{ name: "IMAGE", type: "IMAGE", links: [9], slot_index: 0 }],
      properties: {}
    },
    {
      id: 9,
      type: "SaveImage",
      pos: [1451, 189],
      size: { 0: 210, 1: 26 },
      flags: {},
      order: 6,
      mode: 0,
      inputs: [{ name: "images", type: "IMAGE", link: 9 }],
      properties: {}
    },
    {
      id: 4,
      type: "CheckpointLoaderSimple",
      pos: [26, 474],
      size: { 0: 315, 1: 98 },
      flags: {},
      order: 0,
      mode: 0,
      outputs: [
        { name: "MODEL", type: "MODEL", links: [1], slot_index: 0 },
        { name: "CLIP", type: "CLIP", links: [3, 5], slot_index: 1 },
        { name: "VAE", type: "VAE", links: [8], slot_index: 2 }
      ],
      properties: {},
      widgets_values: ["v1-5-pruned-emaonly.ckpt"]
    }
  ],
  links: [
    [1, 4, 0, 3, 0, "MODEL"],
    [2, 5, 0, 3, 3, "LATENT"],
    [3, 4, 1, 6, 0, "CLIP"],
    [4, 6, 0, 3, 1, "CONDITIONING"],
    [5, 4, 1, 7, 0, "CLIP"],
    [6, 7, 0, 3, 2, "CONDITIONING"],
    [7, 3, 0, 8, 0, "LATENT"],
    [8, 4, 2, 8, 1, "VAE"],
    [9, 8, 0, 9, 0, "IMAGE"]
  ],
  groups: [],
  config: {},
  extra: {},
  version: 0.4
};
function pG() {
  y.useState([]);
  const e = y.useRef({}), [t, n] = y.useState(null), [r, o] = y.useState("root"), [i, a] = y.useState(!0), [s, l] = y.useState(null), u = y.useRef(null), { colorMode: c, toggleColorMode: d } = ha(), f = (h) => {
    u.current = h, l(h);
  }, p = async () => {
    var x;
    const h = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(C) {
      },
      async addCustomNodeDefs(C) {
        e.current = C;
      }
      // async loadedGraphNode(node: LGraphNode, app: ComfyApp) {},
    };
    Cl.registerExtension(h);
    try {
      await SW();
    } catch (C) {
      console.error("error loading db", C);
    }
    a(!1);
    const b = localStorage.getItem("curFlowID");
    if (b)
      f(b), Ne && n(((x = Ne[b]) == null ? void 0 : x.name) ?? "");
    else {
      const C = localStorage.getItem("workflow"), k = z1(C ?? "");
      f(k.id), n(k.name ?? "");
    }
  };
  y.useEffect(() => {
    p(), setInterval(() => {
      if (u.current != null) {
        const h = JSON.stringify(Cl.graph.serialize());
        localStorage.setItem("curFlowID", u.current), h != null && qh(u.current, {
          json: h
        });
      }
    }, 1e3);
  }, []);
  const v = (h) => {
    u.current != null && qh(u.current, {
      name: h
    });
  }, g = y.useCallback(
    ZO(v, 700),
    []
  ), S = (h) => {
    if (Ne == null) {
      alert("Error: Workspace not loaded!");
      return;
    }
    f(h);
    const b = Ne[h];
    if (b == null) {
      alert("Error: Workflow not found! id: " + h);
      return;
    }
    Cl.loadGraphData(JSON.parse(b.json)), n(b.name), o("root");
  }, m = () => {
    const h = fG, b = z1(JSON.stringify(h));
    f(b.id), n(b.name), Cl.loadGraphData(h);
  };
  return i ? null : /* @__PURE__ */ E.jsx(T2.Provider, { value: { curFlowID: s }, children: /* @__PURE__ */ E.jsxs(
    We,
    {
      style: {
        width: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
      },
      children: [
        /* @__PURE__ */ E.jsxs(
          ar,
          {
            style: {
              padding: 8,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0
            },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
            children: [
              /* @__PURE__ */ E.jsxs(ar, { children: [
                /* @__PURE__ */ E.jsx(
                  Zr,
                  {
                    size: "sm",
                    "aria-label": "workspace folder",
                    onClick: () => o("recentFlows"),
                    children: /* @__PURE__ */ E.jsxs(ar, { gap: 1, children: [
                      /* @__PURE__ */ E.jsx(lW, { size: 21 }),
                      /* @__PURE__ */ E.jsx(pW, { size: 8 })
                    ] })
                  }
                ),
                /* @__PURE__ */ E.jsx(
                  Zr,
                  {
                    size: "sm",
                    variant: "outline",
                    colorScheme: "teal",
                    "aria-label": "workspace folder",
                    onClick: () => m(),
                    children: /* @__PURE__ */ E.jsxs(ar, { gap: 1, px: 3, children: [
                      /* @__PURE__ */ E.jsx(hg, { size: 16, color: "white" }),
                      /* @__PURE__ */ E.jsx(Mi, { color: "white", fontSize: "sm", children: "New" })
                    ] })
                  }
                ),
                /* @__PURE__ */ E.jsx(
                  Dd,
                  {
                    variant: "unstyled",
                    placeholder: "Workflow name",
                    color: "white",
                    value: t ?? "",
                    onChange: (h) => {
                      n(h.target.value), g(h.target.value);
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ E.jsx(ar, { children: /* @__PURE__ */ E.jsx(Zr, { onClick: d, variant: "link", children: c === "light" ? /* @__PURE__ */ E.jsx(uW, { size: 20 }) : /* @__PURE__ */ E.jsx(cW, { size: 20 }) }) })
            ]
          }
        ),
        r === "recentFlows" && /* @__PURE__ */ E.jsx(
          dG,
          {
            onclose: () => o("root"),
            loadWorkflowID: S,
            onClickNewFlow: () => {
              m(), o("root");
            }
          }
        )
      ]
    }
  ) });
}
const oT = document.createElement("div");
document.body.append(oT);
const hG = {
  initialColorMode: "dark",
  useSystemColorMode: !1
}, mG = nL({ config: hG });
yp.createRoot(oT).render(
  /* @__PURE__ */ E.jsx(te.StrictMode, { children: /* @__PURE__ */ E.jsxs(gj, { children: [
    /* @__PURE__ */ E.jsx(pI, { initialColorMode: mG.config.initialColorMode }),
    /* @__PURE__ */ E.jsx(pG, {})
  ] }) })
);
const om = document.body, vG = { attributes: !0, attributeFilter: ["class"] }, gG = function(e, t) {
  for (const n of e)
    if (n.type === "attributes" && n.attributeName === "class")
      for (const r of om.classList)
        r.includes("chakra") && om.classList.remove(r);
}, yG = new MutationObserver(gG);
yG.observe(om, vG);
