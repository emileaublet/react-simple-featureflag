module.exports = (function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 2))
  );
})([
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.FlagsContext = void 0);
    var n,
      o = r(1),
      u = (n = o) && n.__esModule ? n : { default: n };
    t.FlagsContext = u.default.createContext([]);
  },
  function (e, t) {
    e.exports = require("react");
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(3);
    Object.defineProperty(t, "FlagsProvider", {
      enumerable: !0,
      get: function () {
        return n.FlagsProvider;
      },
    });
    var o = r(0);
    Object.defineProperty(t, "FlagsContext", {
      enumerable: !0,
      get: function () {
        return o.FlagsContext;
      },
    });
    var u = r(4);
    Object.defineProperty(t, "useFlags", {
      enumerable: !0,
      get: function () {
        return u.useFlags;
      },
    });
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.FlagsProvider = void 0);
    var n = r(0);
    t.FlagsProvider = function (e) {
      var t = e.children,
        r = e.flags;
      return React.createElement(n.FlagsContext.Provider, { value: r }, t);
    };
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.useFlags = void 0);
    var n =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        },
      o = r(1),
      u = r(0);
    t.useFlags = function (e) {
      var t = (0, o.useContext)(u.FlagsContext);
      if (!t) return !1;
      var r = t.find(function (t) {
        return t.name === e;
      });
      if (!r) return !1;
      var a = r.on,
        i = (function (e, t) {
          var r = {};
          for (var n in e)
            t.indexOf(n) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
          return r;
        })(r, ["on"]);
      return !!a && n({ on: a }, i);
    };
  },
]);
