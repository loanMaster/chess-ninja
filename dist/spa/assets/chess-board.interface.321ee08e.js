var Si = Object.defineProperty;
var Ci = (m, d, P) =>
  d in m
    ? Si(m, d, { enumerable: !0, configurable: !0, writable: !0, value: P })
    : (m[d] = P);
var It = (m, d, P) => (Ci(m, typeof d != 'symbol' ? d + '' : d, P), P);
import { aB as Ei, aC as Pi, aD as qi } from './index.2385a99b.js';
import { d as Ni } from './dateTimestampProvider.aca62768.js';
var Di = (function (m) {
    Ei(d, m);
    function d(P, D, O) {
      P === void 0 && (P = 1 / 0),
        D === void 0 && (D = 1 / 0),
        O === void 0 && (O = Ni);
      var j = m.call(this) || this;
      return (
        (j._bufferSize = P),
        (j._windowTime = D),
        (j._timestampProvider = O),
        (j._buffer = []),
        (j._infiniteTimeWindow = !0),
        (j._infiniteTimeWindow = D === 1 / 0),
        (j._bufferSize = Math.max(1, P)),
        (j._windowTime = Math.max(1, D)),
        j
      );
    }
    return (
      (d.prototype.next = function (P) {
        var D = this,
          O = D.isStopped,
          j = D._buffer,
          ae = D._infiniteTimeWindow,
          Q = D._timestampProvider,
          se = D._windowTime;
        O || (j.push(P), !ae && j.push(Q.now() + se)),
          this._trimBuffer(),
          m.prototype.next.call(this, P);
      }),
      (d.prototype._subscribe = function (P) {
        this._throwIfClosed(), this._trimBuffer();
        for (
          var D = this._innerSubscribe(P),
            O = this,
            j = O._infiniteTimeWindow,
            ae = O._buffer,
            Q = ae.slice(),
            se = 0;
          se < Q.length && !P.closed;
          se += j ? 1 : 2
        )
          P.next(Q[se]);
        return this._checkFinalizedStatuses(P), D;
      }),
      (d.prototype._trimBuffer = function () {
        var P = this,
          D = P._bufferSize,
          O = P._timestampProvider,
          j = P._buffer,
          ae = P._infiniteTimeWindow,
          Q = (ae ? 1 : 2) * D;
        if ((D < 1 / 0 && Q < j.length && j.splice(0, j.length - Q), !ae)) {
          for (
            var se = O.now(), te = 0, Y = 1;
            Y < j.length && j[Y] <= se;
            Y += 2
          )
            te = Y;
          te && j.splice(0, te + 1);
        }
      }),
      d
    );
  })(Pi),
  Sr = { exports: {} };
/*!
 * jQuery JavaScript Library v3.6.3
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-12-20T21:28Z
 */ (function (m) {
  (function (d, P) {
    m.exports = d.document
      ? P(d, !0)
      : function (D) {
          if (!D.document)
            throw new Error('jQuery requires a window with a document');
          return P(D);
        };
  })(typeof window != 'undefined' ? window : qi, function (d, P) {
    var D = [],
      O = Object.getPrototypeOf,
      j = D.slice,
      ae = D.flat
        ? function (e) {
            return D.flat.call(e);
          }
        : function (e) {
            return D.concat.apply([], e);
          },
      Q = D.push,
      se = D.indexOf,
      te = {},
      Y = te.toString,
      Ee = te.hasOwnProperty,
      We = Ee.toString,
      ye = We.call(Object),
      V = {},
      W = function (t) {
        return (
          typeof t == 'function' &&
          typeof t.nodeType != 'number' &&
          typeof t.item != 'function'
        );
      },
      ue = function (t) {
        return t != null && t === t.window;
      },
      X = d.document,
      ge = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function Ye(e, t, n) {
      n = n || X;
      var r,
        o,
        a = n.createElement('script');
      if (((a.text = e), t))
        for (r in ge)
          (o = t[r] || (t.getAttribute && t.getAttribute(r))),
            o && a.setAttribute(r, o);
      n.head.appendChild(a).parentNode.removeChild(a);
    }
    function Ge(e) {
      return e == null
        ? e + ''
        : typeof e == 'object' || typeof e == 'function'
        ? te[Y.call(e)] || 'object'
        : typeof e;
    }
    var Ht = '3.6.3',
      i = function (e, t) {
        return new i.fn.init(e, t);
      };
    (i.fn = i.prototype =
      {
        jquery: Ht,
        constructor: i,
        length: 0,
        toArray: function () {
          return j.call(this);
        },
        get: function (e) {
          return e == null
            ? j.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = i.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return i.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            i.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(j.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            i.grep(this, function (e, t) {
              return (t + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            i.grep(this, function (e, t) {
              return t % 2;
            })
          );
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: Q,
        sort: D.sort,
        splice: D.splice,
      }),
      (i.extend = i.fn.extend =
        function () {
          var e,
            t,
            n,
            r,
            o,
            a,
            s = arguments[0] || {},
            l = 1,
            f = arguments.length,
            y = !1;
          for (
            typeof s == 'boolean' && ((y = s), (s = arguments[l] || {}), l++),
              typeof s != 'object' && !W(s) && (s = {}),
              l === f && ((s = this), l--);
            l < f;
            l++
          )
            if ((e = arguments[l]) != null)
              for (t in e)
                (r = e[t]),
                  !(t === '__proto__' || s === r) &&
                    (y && r && (i.isPlainObject(r) || (o = Array.isArray(r)))
                      ? ((n = s[t]),
                        o && !Array.isArray(n)
                          ? (a = [])
                          : !o && !i.isPlainObject(n)
                          ? (a = {})
                          : (a = n),
                        (o = !1),
                        (s[t] = i.extend(y, a, r)))
                      : r !== void 0 && (s[t] = r));
          return s;
        }),
      i.extend({
        expando: 'jQuery' + (Ht + Math.random()).replace(/\D/g, ''),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isPlainObject: function (e) {
          var t, n;
          return !e || Y.call(e) !== '[object Object]'
            ? !1
            : ((t = O(e)),
              t
                ? ((n = Ee.call(t, 'constructor') && t.constructor),
                  typeof n == 'function' && We.call(n) === ye)
                : !0);
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        globalEval: function (e, t, n) {
          Ye(e, { nonce: t && t.nonce }, n);
        },
        each: function (e, t) {
          var n,
            r = 0;
          if (wt(e))
            for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
          else for (r in e) if (t.call(e[r], r, e[r]) === !1) break;
          return e;
        },
        makeArray: function (e, t) {
          var n = t || [];
          return (
            e != null &&
              (wt(Object(e))
                ? i.merge(n, typeof e == 'string' ? [e] : e)
                : Q.call(n, e)),
            n
          );
        },
        inArray: function (e, t, n) {
          return t == null ? -1 : se.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, r = 0, o = e.length; r < n; r++)
            e[o++] = t[r];
          return (e.length = o), e;
        },
        grep: function (e, t, n) {
          for (var r, o = [], a = 0, s = e.length, l = !n; a < s; a++)
            (r = !t(e[a], a)), r !== l && o.push(e[a]);
          return o;
        },
        map: function (e, t, n) {
          var r,
            o,
            a = 0,
            s = [];
          if (wt(e))
            for (r = e.length; a < r; a++)
              (o = t(e[a], a, n)), o != null && s.push(o);
          else for (a in e) (o = t(e[a], a, n)), o != null && s.push(o);
          return ae(s);
        },
        guid: 1,
        support: V,
      }),
      typeof Symbol == 'function' &&
        (i.fn[Symbol.iterator] = D[Symbol.iterator]),
      i.each(
        'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
          ' '
        ),
        function (e, t) {
          te['[object ' + t + ']'] = t.toLowerCase();
        }
      );
    function wt(e) {
      var t = !!e && 'length' in e && e.length,
        n = Ge(e);
      return W(e) || ue(e)
        ? !1
        : n === 'array' ||
            t === 0 ||
            (typeof t == 'number' && t > 0 && t - 1 in e);
    }
    var $e = (function (e) {
      var t,
        n,
        r,
        o,
        a,
        s,
        l,
        f,
        y,
        b,
        C,
        v,
        x,
        I,
        U,
        L,
        pe,
        de,
        Pe,
        ee = 'sizzle' + 1 * new Date(),
        z = e.document,
        Se = 0,
        K = 0,
        fe = Kt(),
        kt = Kt(),
        Yt = Kt(),
        qe = Kt(),
        st = function (u, c) {
          return u === c && (C = !0), 0;
        },
        ut = {}.hasOwnProperty,
        Ce = [],
        Ke = Ce.pop,
        He = Ce.push,
        Ze = Ce.push,
        dr = Ce.slice,
        ft = function (u, c) {
          for (var p = 0, T = u.length; p < T; p++) if (u[p] === c) return p;
          return -1;
        },
        Nn =
          'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
        Z = '[\\x20\\t\\r\\n\\f]',
        ct =
          '(?:\\\\[\\da-fA-F]{1,6}' +
          Z +
          '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
        pr =
          '\\[' +
          Z +
          '*(' +
          ct +
          ')(?:' +
          Z +
          '*([*^$|!~]?=)' +
          Z +
          `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
          ct +
          '))|)' +
          Z +
          '*\\]',
        Dn =
          ':(' +
          ct +
          `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
          pr +
          ')*)|.*)\\)|)',
        fi = new RegExp(Z + '+', 'g'),
        Gt = new RegExp(
          '^' + Z + '+|((?:^|[^\\\\])(?:\\\\.)*)' + Z + '+$',
          'g'
        ),
        ci = new RegExp('^' + Z + '*,' + Z + '*'),
        hr = new RegExp('^' + Z + '*([>+~]|' + Z + ')' + Z + '*'),
        li = new RegExp(Z + '|>'),
        di = new RegExp(Dn),
        pi = new RegExp('^' + ct + '$'),
        Jt = {
          ID: new RegExp('^#(' + ct + ')'),
          CLASS: new RegExp('^\\.(' + ct + ')'),
          TAG: new RegExp('^(' + ct + '|[*])'),
          ATTR: new RegExp('^' + pr),
          PSEUDO: new RegExp('^' + Dn),
          CHILD: new RegExp(
            '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
              Z +
              '*(even|odd|(([+-]|)(\\d*)n|)' +
              Z +
              '*(?:([+-]|)' +
              Z +
              '*(\\d+)|))' +
              Z +
              '*\\)|)',
            'i'
          ),
          bool: new RegExp('^(?:' + Nn + ')$', 'i'),
          needsContext: new RegExp(
            '^' +
              Z +
              '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
              Z +
              '*((?:-\\d)?\\d*)' +
              Z +
              '*\\)|)(?=[^-]|$)',
            'i'
          ),
        },
        hi = /HTML$/i,
        gi = /^(?:input|select|textarea|button)$/i,
        yi = /^h\d$/i,
        Ot = /^[^{]+\{\s*\[native \w/,
        vi = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        An = /[+~]/,
        Xe = new RegExp(
          '\\\\[\\da-fA-F]{1,6}' + Z + '?|\\\\([^\\r\\n\\f])',
          'g'
        ),
        Ve = function (u, c) {
          var p = '0x' + u.slice(1) - 65536;
          return (
            c ||
            (p < 0
              ? String.fromCharCode(p + 65536)
              : String.fromCharCode((p >> 10) | 55296, (p & 1023) | 56320))
          );
        },
        gr = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        yr = function (u, c) {
          return c
            ? u === '\0'
              ? '\uFFFD'
              : u.slice(0, -1) +
                '\\' +
                u.charCodeAt(u.length - 1).toString(16) +
                ' '
            : '\\' + u;
        },
        vr = function () {
          v();
        },
        mi = en(
          function (u) {
            return u.disabled === !0 && u.nodeName.toLowerCase() === 'fieldset';
          },
          { dir: 'parentNode', next: 'legend' }
        );
      try {
        Ze.apply((Ce = dr.call(z.childNodes)), z.childNodes),
          Ce[z.childNodes.length].nodeType;
      } catch {
        Ze = {
          apply: Ce.length
            ? function (c, p) {
                He.apply(c, dr.call(p));
              }
            : function (c, p) {
                for (var T = c.length, g = 0; (c[T++] = p[g++]); );
                c.length = T - 1;
              },
        };
      }
      function re(u, c, p, T) {
        var g,
          S,
          E,
          N,
          k,
          R,
          H,
          F = c && c.ownerDocument,
          G = c ? c.nodeType : 9;
        if (
          ((p = p || []),
          typeof u != 'string' || !u || (G !== 1 && G !== 9 && G !== 11))
        )
          return p;
        if (!T && (v(c), (c = c || x), U)) {
          if (G !== 11 && (k = vi.exec(u)))
            if ((g = k[1])) {
              if (G === 9)
                if ((E = c.getElementById(g))) {
                  if (E.id === g) return p.push(E), p;
                } else return p;
              else if (F && (E = F.getElementById(g)) && Pe(c, E) && E.id === g)
                return p.push(E), p;
            } else {
              if (k[2]) return Ze.apply(p, c.getElementsByTagName(u)), p;
              if (
                (g = k[3]) &&
                n.getElementsByClassName &&
                c.getElementsByClassName
              )
                return Ze.apply(p, c.getElementsByClassName(g)), p;
            }
          if (
            n.qsa &&
            !qe[u + ' '] &&
            (!L || !L.test(u)) &&
            (G !== 1 || c.nodeName.toLowerCase() !== 'object')
          ) {
            if (((H = u), (F = c), G === 1 && (li.test(u) || hr.test(u)))) {
              for (
                F = (An.test(u) && On(c.parentNode)) || c,
                  (F !== c || !n.scope) &&
                    ((N = c.getAttribute('id'))
                      ? (N = N.replace(gr, yr))
                      : c.setAttribute('id', (N = ee))),
                  R = s(u),
                  S = R.length;
                S--;

              )
                R[S] = (N ? '#' + N : ':scope') + ' ' + Zt(R[S]);
              H = R.join(',');
            }
            try {
              if (
                n.cssSupportsSelector &&
                !CSS.supports('selector(:is(' + H + '))')
              )
                throw new Error();
              return Ze.apply(p, F.querySelectorAll(H)), p;
            } catch {
              qe(u, !0);
            } finally {
              N === ee && c.removeAttribute('id');
            }
          }
        }
        return f(u.replace(Gt, '$1'), c, p, T);
      }
      function Kt() {
        var u = [];
        function c(p, T) {
          return (
            u.push(p + ' ') > r.cacheLength && delete c[u.shift()],
            (c[p + ' '] = T)
          );
        }
        return c;
      }
      function Fe(u) {
        return (u[ee] = !0), u;
      }
      function Me(u) {
        var c = x.createElement('fieldset');
        try {
          return !!u(c);
        } catch {
          return !1;
        } finally {
          c.parentNode && c.parentNode.removeChild(c), (c = null);
        }
      }
      function kn(u, c) {
        for (var p = u.split('|'), T = p.length; T--; ) r.attrHandle[p[T]] = c;
      }
      function mr(u, c) {
        var p = c && u,
          T =
            p &&
            u.nodeType === 1 &&
            c.nodeType === 1 &&
            u.sourceIndex - c.sourceIndex;
        if (T) return T;
        if (p) {
          for (; (p = p.nextSibling); ) if (p === c) return -1;
        }
        return u ? 1 : -1;
      }
      function bi(u) {
        return function (c) {
          var p = c.nodeName.toLowerCase();
          return p === 'input' && c.type === u;
        };
      }
      function xi(u) {
        return function (c) {
          var p = c.nodeName.toLowerCase();
          return (p === 'input' || p === 'button') && c.type === u;
        };
      }
      function br(u) {
        return function (c) {
          return 'form' in c
            ? c.parentNode && c.disabled === !1
              ? 'label' in c
                ? 'label' in c.parentNode
                  ? c.parentNode.disabled === u
                  : c.disabled === u
                : c.isDisabled === u || (c.isDisabled !== !u && mi(c) === u)
              : c.disabled === u
            : 'label' in c
            ? c.disabled === u
            : !1;
        };
      }
      function lt(u) {
        return Fe(function (c) {
          return (
            (c = +c),
            Fe(function (p, T) {
              for (var g, S = u([], p.length, c), E = S.length; E--; )
                p[(g = S[E])] && (p[g] = !(T[g] = p[g]));
            })
          );
        });
      }
      function On(u) {
        return u && typeof u.getElementsByTagName != 'undefined' && u;
      }
      (n = re.support = {}),
        (a = re.isXML =
          function (u) {
            var c = u && u.namespaceURI,
              p = u && (u.ownerDocument || u).documentElement;
            return !hi.test(c || (p && p.nodeName) || 'HTML');
          }),
        (v = re.setDocument =
          function (u) {
            var c,
              p,
              T = u ? u.ownerDocument || u : z;
            return (
              T == x ||
                T.nodeType !== 9 ||
                !T.documentElement ||
                ((x = T),
                (I = x.documentElement),
                (U = !a(x)),
                z != x &&
                  (p = x.defaultView) &&
                  p.top !== p &&
                  (p.addEventListener
                    ? p.addEventListener('unload', vr, !1)
                    : p.attachEvent && p.attachEvent('onunload', vr)),
                (n.scope = Me(function (g) {
                  return (
                    I.appendChild(g).appendChild(x.createElement('div')),
                    typeof g.querySelectorAll != 'undefined' &&
                      !g.querySelectorAll(':scope fieldset div').length
                  );
                })),
                (n.cssSupportsSelector = Me(function () {
                  return (
                    CSS.supports('selector(*)') &&
                    x.querySelectorAll(':is(:jqfake)') &&
                    !CSS.supports('selector(:is(*,:jqfake))')
                  );
                })),
                (n.attributes = Me(function (g) {
                  return (g.className = 'i'), !g.getAttribute('className');
                })),
                (n.getElementsByTagName = Me(function (g) {
                  return (
                    g.appendChild(x.createComment('')),
                    !g.getElementsByTagName('*').length
                  );
                })),
                (n.getElementsByClassName = Ot.test(x.getElementsByClassName)),
                (n.getById = Me(function (g) {
                  return (
                    (I.appendChild(g).id = ee),
                    !x.getElementsByName || !x.getElementsByName(ee).length
                  );
                })),
                n.getById
                  ? ((r.filter.ID = function (g) {
                      var S = g.replace(Xe, Ve);
                      return function (E) {
                        return E.getAttribute('id') === S;
                      };
                    }),
                    (r.find.ID = function (g, S) {
                      if (typeof S.getElementById != 'undefined' && U) {
                        var E = S.getElementById(g);
                        return E ? [E] : [];
                      }
                    }))
                  : ((r.filter.ID = function (g) {
                      var S = g.replace(Xe, Ve);
                      return function (E) {
                        var N =
                          typeof E.getAttributeNode != 'undefined' &&
                          E.getAttributeNode('id');
                        return N && N.value === S;
                      };
                    }),
                    (r.find.ID = function (g, S) {
                      if (typeof S.getElementById != 'undefined' && U) {
                        var E,
                          N,
                          k,
                          R = S.getElementById(g);
                        if (R) {
                          if (
                            ((E = R.getAttributeNode('id')), E && E.value === g)
                          )
                            return [R];
                          for (
                            k = S.getElementsByName(g), N = 0;
                            (R = k[N++]);

                          )
                            if (
                              ((E = R.getAttributeNode('id')),
                              E && E.value === g)
                            )
                              return [R];
                        }
                        return [];
                      }
                    })),
                (r.find.TAG = n.getElementsByTagName
                  ? function (g, S) {
                      if (typeof S.getElementsByTagName != 'undefined')
                        return S.getElementsByTagName(g);
                      if (n.qsa) return S.querySelectorAll(g);
                    }
                  : function (g, S) {
                      var E,
                        N = [],
                        k = 0,
                        R = S.getElementsByTagName(g);
                      if (g === '*') {
                        for (; (E = R[k++]); ) E.nodeType === 1 && N.push(E);
                        return N;
                      }
                      return R;
                    }),
                (r.find.CLASS =
                  n.getElementsByClassName &&
                  function (g, S) {
                    if (typeof S.getElementsByClassName != 'undefined' && U)
                      return S.getElementsByClassName(g);
                  }),
                (pe = []),
                (L = []),
                (n.qsa = Ot.test(x.querySelectorAll)) &&
                  (Me(function (g) {
                    var S;
                    (I.appendChild(g).innerHTML =
                      "<a id='" +
                      ee +
                      "'></a><select id='" +
                      ee +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      g.querySelectorAll("[msallowcapture^='']").length &&
                        L.push('[*^$]=' + Z + `*(?:''|"")`),
                      g.querySelectorAll('[selected]').length ||
                        L.push('\\[' + Z + '*(?:value|' + Nn + ')'),
                      g.querySelectorAll('[id~=' + ee + '-]').length ||
                        L.push('~='),
                      (S = x.createElement('input')),
                      S.setAttribute('name', ''),
                      g.appendChild(S),
                      g.querySelectorAll("[name='']").length ||
                        L.push(
                          '\\[' + Z + '*name' + Z + '*=' + Z + `*(?:''|"")`
                        ),
                      g.querySelectorAll(':checked').length ||
                        L.push(':checked'),
                      g.querySelectorAll('a#' + ee + '+*').length ||
                        L.push('.#.+[+~]'),
                      g.querySelectorAll('\\\f'),
                      L.push('[\\r\\n\\f]');
                  }),
                  Me(function (g) {
                    g.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var S = x.createElement('input');
                    S.setAttribute('type', 'hidden'),
                      g.appendChild(S).setAttribute('name', 'D'),
                      g.querySelectorAll('[name=d]').length &&
                        L.push('name' + Z + '*[*^$|!~]?='),
                      g.querySelectorAll(':enabled').length !== 2 &&
                        L.push(':enabled', ':disabled'),
                      (I.appendChild(g).disabled = !0),
                      g.querySelectorAll(':disabled').length !== 2 &&
                        L.push(':enabled', ':disabled'),
                      g.querySelectorAll('*,:x'),
                      L.push(',.*:');
                  })),
                (n.matchesSelector = Ot.test(
                  (de =
                    I.matches ||
                    I.webkitMatchesSelector ||
                    I.mozMatchesSelector ||
                    I.oMatchesSelector ||
                    I.msMatchesSelector)
                )) &&
                  Me(function (g) {
                    (n.disconnectedMatch = de.call(g, '*')),
                      de.call(g, "[s!='']:x"),
                      pe.push('!=', Dn);
                  }),
                n.cssSupportsSelector || L.push(':has'),
                (L = L.length && new RegExp(L.join('|'))),
                (pe = pe.length && new RegExp(pe.join('|'))),
                (c = Ot.test(I.compareDocumentPosition)),
                (Pe =
                  c || Ot.test(I.contains)
                    ? function (g, S) {
                        var E = (g.nodeType === 9 && g.documentElement) || g,
                          N = S && S.parentNode;
                        return (
                          g === N ||
                          !!(
                            N &&
                            N.nodeType === 1 &&
                            (E.contains
                              ? E.contains(N)
                              : g.compareDocumentPosition &&
                                g.compareDocumentPosition(N) & 16)
                          )
                        );
                      }
                    : function (g, S) {
                        if (S) {
                          for (; (S = S.parentNode); ) if (S === g) return !0;
                        }
                        return !1;
                      }),
                (st = c
                  ? function (g, S) {
                      if (g === S) return (C = !0), 0;
                      var E =
                        !g.compareDocumentPosition - !S.compareDocumentPosition;
                      return (
                        E ||
                        ((E =
                          (g.ownerDocument || g) == (S.ownerDocument || S)
                            ? g.compareDocumentPosition(S)
                            : 1),
                        E & 1 ||
                        (!n.sortDetached && S.compareDocumentPosition(g) === E)
                          ? g == x || (g.ownerDocument == z && Pe(z, g))
                            ? -1
                            : S == x || (S.ownerDocument == z && Pe(z, S))
                            ? 1
                            : b
                            ? ft(b, g) - ft(b, S)
                            : 0
                          : E & 4
                          ? -1
                          : 1)
                      );
                    }
                  : function (g, S) {
                      if (g === S) return (C = !0), 0;
                      var E,
                        N = 0,
                        k = g.parentNode,
                        R = S.parentNode,
                        H = [g],
                        F = [S];
                      if (!k || !R)
                        return g == x
                          ? -1
                          : S == x
                          ? 1
                          : k
                          ? -1
                          : R
                          ? 1
                          : b
                          ? ft(b, g) - ft(b, S)
                          : 0;
                      if (k === R) return mr(g, S);
                      for (E = g; (E = E.parentNode); ) H.unshift(E);
                      for (E = S; (E = E.parentNode); ) F.unshift(E);
                      for (; H[N] === F[N]; ) N++;
                      return N
                        ? mr(H[N], F[N])
                        : H[N] == z
                        ? -1
                        : F[N] == z
                        ? 1
                        : 0;
                    })),
              x
            );
          }),
        (re.matches = function (u, c) {
          return re(u, null, null, c);
        }),
        (re.matchesSelector = function (u, c) {
          if (
            (v(u),
            n.matchesSelector &&
              U &&
              !qe[c + ' '] &&
              (!pe || !pe.test(c)) &&
              (!L || !L.test(c)))
          )
            try {
              var p = de.call(u, c);
              if (
                p ||
                n.disconnectedMatch ||
                (u.document && u.document.nodeType !== 11)
              )
                return p;
            } catch {
              qe(c, !0);
            }
          return re(c, x, null, [u]).length > 0;
        }),
        (re.contains = function (u, c) {
          return (u.ownerDocument || u) != x && v(u), Pe(u, c);
        }),
        (re.attr = function (u, c) {
          (u.ownerDocument || u) != x && v(u);
          var p = r.attrHandle[c.toLowerCase()],
            T =
              p && ut.call(r.attrHandle, c.toLowerCase())
                ? p(u, c, !U)
                : void 0;
          return T !== void 0
            ? T
            : n.attributes || !U
            ? u.getAttribute(c)
            : (T = u.getAttributeNode(c)) && T.specified
            ? T.value
            : null;
        }),
        (re.escape = function (u) {
          return (u + '').replace(gr, yr);
        }),
        (re.error = function (u) {
          throw new Error('Syntax error, unrecognized expression: ' + u);
        }),
        (re.uniqueSort = function (u) {
          var c,
            p = [],
            T = 0,
            g = 0;
          if (
            ((C = !n.detectDuplicates),
            (b = !n.sortStable && u.slice(0)),
            u.sort(st),
            C)
          ) {
            for (; (c = u[g++]); ) c === u[g] && (T = p.push(g));
            for (; T--; ) u.splice(p[T], 1);
          }
          return (b = null), u;
        }),
        (o = re.getText =
          function (u) {
            var c,
              p = '',
              T = 0,
              g = u.nodeType;
            if (g) {
              if (g === 1 || g === 9 || g === 11) {
                if (typeof u.textContent == 'string') return u.textContent;
                for (u = u.firstChild; u; u = u.nextSibling) p += o(u);
              } else if (g === 3 || g === 4) return u.nodeValue;
            } else for (; (c = u[T++]); ) p += o(c);
            return p;
          }),
        (r = re.selectors =
          {
            cacheLength: 50,
            createPseudo: Fe,
            match: Jt,
            attrHandle: {},
            find: {},
            relative: {
              '>': { dir: 'parentNode', first: !0 },
              ' ': { dir: 'parentNode' },
              '+': { dir: 'previousSibling', first: !0 },
              '~': { dir: 'previousSibling' },
            },
            preFilter: {
              ATTR: function (u) {
                return (
                  (u[1] = u[1].replace(Xe, Ve)),
                  (u[3] = (u[3] || u[4] || u[5] || '').replace(Xe, Ve)),
                  u[2] === '~=' && (u[3] = ' ' + u[3] + ' '),
                  u.slice(0, 4)
                );
              },
              CHILD: function (u) {
                return (
                  (u[1] = u[1].toLowerCase()),
                  u[1].slice(0, 3) === 'nth'
                    ? (u[3] || re.error(u[0]),
                      (u[4] = +(u[4]
                        ? u[5] + (u[6] || 1)
                        : 2 * (u[3] === 'even' || u[3] === 'odd'))),
                      (u[5] = +(u[7] + u[8] || u[3] === 'odd')))
                    : u[3] && re.error(u[0]),
                  u
                );
              },
              PSEUDO: function (u) {
                var c,
                  p = !u[6] && u[2];
                return Jt.CHILD.test(u[0])
                  ? null
                  : (u[3]
                      ? (u[2] = u[4] || u[5] || '')
                      : p &&
                        di.test(p) &&
                        (c = s(p, !0)) &&
                        (c = p.indexOf(')', p.length - c) - p.length) &&
                        ((u[0] = u[0].slice(0, c)), (u[2] = p.slice(0, c))),
                    u.slice(0, 3));
              },
            },
            filter: {
              TAG: function (u) {
                var c = u.replace(Xe, Ve).toLowerCase();
                return u === '*'
                  ? function () {
                      return !0;
                    }
                  : function (p) {
                      return p.nodeName && p.nodeName.toLowerCase() === c;
                    };
              },
              CLASS: function (u) {
                var c = fe[u + ' '];
                return (
                  c ||
                  ((c = new RegExp('(^|' + Z + ')' + u + '(' + Z + '|$)')) &&
                    fe(u, function (p) {
                      return c.test(
                        (typeof p.className == 'string' && p.className) ||
                          (typeof p.getAttribute != 'undefined' &&
                            p.getAttribute('class')) ||
                          ''
                      );
                    }))
                );
              },
              ATTR: function (u, c, p) {
                return function (T) {
                  var g = re.attr(T, u);
                  return g == null
                    ? c === '!='
                    : c
                    ? ((g += ''),
                      c === '='
                        ? g === p
                        : c === '!='
                        ? g !== p
                        : c === '^='
                        ? p && g.indexOf(p) === 0
                        : c === '*='
                        ? p && g.indexOf(p) > -1
                        : c === '$='
                        ? p && g.slice(-p.length) === p
                        : c === '~='
                        ? (' ' + g.replace(fi, ' ') + ' ').indexOf(p) > -1
                        : c === '|='
                        ? g === p || g.slice(0, p.length + 1) === p + '-'
                        : !1)
                    : !0;
                };
              },
              CHILD: function (u, c, p, T, g) {
                var S = u.slice(0, 3) !== 'nth',
                  E = u.slice(-4) !== 'last',
                  N = c === 'of-type';
                return T === 1 && g === 0
                  ? function (k) {
                      return !!k.parentNode;
                    }
                  : function (k, R, H) {
                      var F,
                        G,
                        ie,
                        B,
                        he,
                        me,
                        Ne = S !== E ? 'nextSibling' : 'previousSibling',
                        oe = k.parentNode,
                        jt = N && k.nodeName.toLowerCase(),
                        Lt = !H && !N,
                        De = !1;
                      if (oe) {
                        if (S) {
                          for (; Ne; ) {
                            for (B = k; (B = B[Ne]); )
                              if (
                                N
                                  ? B.nodeName.toLowerCase() === jt
                                  : B.nodeType === 1
                              )
                                return !1;
                            me = Ne = u === 'only' && !me && 'nextSibling';
                          }
                          return !0;
                        }
                        if (
                          ((me = [E ? oe.firstChild : oe.lastChild]), E && Lt)
                        ) {
                          for (
                            B = oe,
                              ie = B[ee] || (B[ee] = {}),
                              G = ie[B.uniqueID] || (ie[B.uniqueID] = {}),
                              F = G[u] || [],
                              he = F[0] === Se && F[1],
                              De = he && F[2],
                              B = he && oe.childNodes[he];
                            (B =
                              (++he && B && B[Ne]) ||
                              (De = he = 0) ||
                              me.pop());

                          )
                            if (B.nodeType === 1 && ++De && B === k) {
                              G[u] = [Se, he, De];
                              break;
                            }
                        } else if (
                          (Lt &&
                            ((B = k),
                            (ie = B[ee] || (B[ee] = {})),
                            (G = ie[B.uniqueID] || (ie[B.uniqueID] = {})),
                            (F = G[u] || []),
                            (he = F[0] === Se && F[1]),
                            (De = he)),
                          De === !1)
                        )
                          for (
                            ;
                            (B =
                              (++he && B && B[Ne]) ||
                              (De = he = 0) ||
                              me.pop()) &&
                            !(
                              (N
                                ? B.nodeName.toLowerCase() === jt
                                : B.nodeType === 1) &&
                              ++De &&
                              (Lt &&
                                ((ie = B[ee] || (B[ee] = {})),
                                (G = ie[B.uniqueID] || (ie[B.uniqueID] = {})),
                                (G[u] = [Se, De])),
                              B === k)
                            );

                          );
                        return (
                          (De -= g), De === T || (De % T === 0 && De / T >= 0)
                        );
                      }
                    };
              },
              PSEUDO: function (u, c) {
                var p,
                  T =
                    r.pseudos[u] ||
                    r.setFilters[u.toLowerCase()] ||
                    re.error('unsupported pseudo: ' + u);
                return T[ee]
                  ? T(c)
                  : T.length > 1
                  ? ((p = [u, u, '', c]),
                    r.setFilters.hasOwnProperty(u.toLowerCase())
                      ? Fe(function (g, S) {
                          for (var E, N = T(g, c), k = N.length; k--; )
                            (E = ft(g, N[k])), (g[E] = !(S[E] = N[k]));
                        })
                      : function (g) {
                          return T(g, 0, p);
                        })
                  : T;
              },
            },
            pseudos: {
              not: Fe(function (u) {
                var c = [],
                  p = [],
                  T = l(u.replace(Gt, '$1'));
                return T[ee]
                  ? Fe(function (g, S, E, N) {
                      for (var k, R = T(g, null, N, []), H = g.length; H--; )
                        (k = R[H]) && (g[H] = !(S[H] = k));
                    })
                  : function (g, S, E) {
                      return (
                        (c[0] = g), T(c, null, E, p), (c[0] = null), !p.pop()
                      );
                    };
              }),
              has: Fe(function (u) {
                return function (c) {
                  return re(u, c).length > 0;
                };
              }),
              contains: Fe(function (u) {
                return (
                  (u = u.replace(Xe, Ve)),
                  function (c) {
                    return (c.textContent || o(c)).indexOf(u) > -1;
                  }
                );
              }),
              lang: Fe(function (u) {
                return (
                  pi.test(u || '') || re.error('unsupported lang: ' + u),
                  (u = u.replace(Xe, Ve).toLowerCase()),
                  function (c) {
                    var p;
                    do
                      if (
                        (p = U
                          ? c.lang
                          : c.getAttribute('xml:lang') ||
                            c.getAttribute('lang'))
                      )
                        return (
                          (p = p.toLowerCase()),
                          p === u || p.indexOf(u + '-') === 0
                        );
                    while ((c = c.parentNode) && c.nodeType === 1);
                    return !1;
                  }
                );
              }),
              target: function (u) {
                var c = e.location && e.location.hash;
                return c && c.slice(1) === u.id;
              },
              root: function (u) {
                return u === I;
              },
              focus: function (u) {
                return (
                  u === x.activeElement &&
                  (!x.hasFocus || x.hasFocus()) &&
                  !!(u.type || u.href || ~u.tabIndex)
                );
              },
              enabled: br(!1),
              disabled: br(!0),
              checked: function (u) {
                var c = u.nodeName.toLowerCase();
                return (
                  (c === 'input' && !!u.checked) ||
                  (c === 'option' && !!u.selected)
                );
              },
              selected: function (u) {
                return (
                  u.parentNode && u.parentNode.selectedIndex, u.selected === !0
                );
              },
              empty: function (u) {
                for (u = u.firstChild; u; u = u.nextSibling)
                  if (u.nodeType < 6) return !1;
                return !0;
              },
              parent: function (u) {
                return !r.pseudos.empty(u);
              },
              header: function (u) {
                return yi.test(u.nodeName);
              },
              input: function (u) {
                return gi.test(u.nodeName);
              },
              button: function (u) {
                var c = u.nodeName.toLowerCase();
                return (c === 'input' && u.type === 'button') || c === 'button';
              },
              text: function (u) {
                var c;
                return (
                  u.nodeName.toLowerCase() === 'input' &&
                  u.type === 'text' &&
                  ((c = u.getAttribute('type')) == null ||
                    c.toLowerCase() === 'text')
                );
              },
              first: lt(function () {
                return [0];
              }),
              last: lt(function (u, c) {
                return [c - 1];
              }),
              eq: lt(function (u, c, p) {
                return [p < 0 ? p + c : p];
              }),
              even: lt(function (u, c) {
                for (var p = 0; p < c; p += 2) u.push(p);
                return u;
              }),
              odd: lt(function (u, c) {
                for (var p = 1; p < c; p += 2) u.push(p);
                return u;
              }),
              lt: lt(function (u, c, p) {
                for (var T = p < 0 ? p + c : p > c ? c : p; --T >= 0; )
                  u.push(T);
                return u;
              }),
              gt: lt(function (u, c, p) {
                for (var T = p < 0 ? p + c : p; ++T < c; ) u.push(T);
                return u;
              }),
            },
          }),
        (r.pseudos.nth = r.pseudos.eq);
      for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        r.pseudos[t] = bi(t);
      for (t in { submit: !0, reset: !0 }) r.pseudos[t] = xi(t);
      function xr() {}
      (xr.prototype = r.filters = r.pseudos),
        (r.setFilters = new xr()),
        (s = re.tokenize =
          function (u, c) {
            var p,
              T,
              g,
              S,
              E,
              N,
              k,
              R = kt[u + ' '];
            if (R) return c ? 0 : R.slice(0);
            for (E = u, N = [], k = r.preFilter; E; ) {
              (!p || (T = ci.exec(E))) &&
                (T && (E = E.slice(T[0].length) || E), N.push((g = []))),
                (p = !1),
                (T = hr.exec(E)) &&
                  ((p = T.shift()),
                  g.push({ value: p, type: T[0].replace(Gt, ' ') }),
                  (E = E.slice(p.length)));
              for (S in r.filter)
                (T = Jt[S].exec(E)) &&
                  (!k[S] || (T = k[S](T))) &&
                  ((p = T.shift()),
                  g.push({ value: p, type: S, matches: T }),
                  (E = E.slice(p.length)));
              if (!p) break;
            }
            return c ? E.length : E ? re.error(u) : kt(u, N).slice(0);
          });
      function Zt(u) {
        for (var c = 0, p = u.length, T = ''; c < p; c++) T += u[c].value;
        return T;
      }
      function en(u, c, p) {
        var T = c.dir,
          g = c.next,
          S = g || T,
          E = p && S === 'parentNode',
          N = K++;
        return c.first
          ? function (k, R, H) {
              for (; (k = k[T]); ) if (k.nodeType === 1 || E) return u(k, R, H);
              return !1;
            }
          : function (k, R, H) {
              var F,
                G,
                ie,
                B = [Se, N];
              if (H) {
                for (; (k = k[T]); )
                  if ((k.nodeType === 1 || E) && u(k, R, H)) return !0;
              } else
                for (; (k = k[T]); )
                  if (k.nodeType === 1 || E)
                    if (
                      ((ie = k[ee] || (k[ee] = {})),
                      (G = ie[k.uniqueID] || (ie[k.uniqueID] = {})),
                      g && g === k.nodeName.toLowerCase())
                    )
                      k = k[T] || k;
                    else {
                      if ((F = G[S]) && F[0] === Se && F[1] === N)
                        return (B[2] = F[2]);
                      if (((G[S] = B), (B[2] = u(k, R, H)))) return !0;
                    }
              return !1;
            };
      }
      function jn(u) {
        return u.length > 1
          ? function (c, p, T) {
              for (var g = u.length; g--; ) if (!u[g](c, p, T)) return !1;
              return !0;
            }
          : u[0];
      }
      function wi(u, c, p) {
        for (var T = 0, g = c.length; T < g; T++) re(u, c[T], p);
        return p;
      }
      function tn(u, c, p, T, g) {
        for (var S, E = [], N = 0, k = u.length, R = c != null; N < k; N++)
          (S = u[N]) && (!p || p(S, T, g)) && (E.push(S), R && c.push(N));
        return E;
      }
      function Ln(u, c, p, T, g, S) {
        return (
          T && !T[ee] && (T = Ln(T)),
          g && !g[ee] && (g = Ln(g, S)),
          Fe(function (E, N, k, R) {
            var H,
              F,
              G,
              ie = [],
              B = [],
              he = N.length,
              me = E || wi(c || '*', k.nodeType ? [k] : k, []),
              Ne = u && (E || !c) ? tn(me, ie, u, k, R) : me,
              oe = p ? (g || (E ? u : he || T) ? [] : N) : Ne;
            if ((p && p(Ne, oe, k, R), T))
              for (H = tn(oe, B), T(H, [], k, R), F = H.length; F--; )
                (G = H[F]) && (oe[B[F]] = !(Ne[B[F]] = G));
            if (E) {
              if (g || u) {
                if (g) {
                  for (H = [], F = oe.length; F--; )
                    (G = oe[F]) && H.push((Ne[F] = G));
                  g(null, (oe = []), H, R);
                }
                for (F = oe.length; F--; )
                  (G = oe[F]) &&
                    (H = g ? ft(E, G) : ie[F]) > -1 &&
                    (E[H] = !(N[H] = G));
              }
            } else (oe = tn(oe === N ? oe.splice(he, oe.length) : oe)), g ? g(null, N, oe, R) : Ze.apply(N, oe);
          })
        );
      }
      function In(u) {
        for (
          var c,
            p,
            T,
            g = u.length,
            S = r.relative[u[0].type],
            E = S || r.relative[' '],
            N = S ? 1 : 0,
            k = en(
              function (F) {
                return F === c;
              },
              E,
              !0
            ),
            R = en(
              function (F) {
                return ft(c, F) > -1;
              },
              E,
              !0
            ),
            H = [
              function (F, G, ie) {
                var B =
                  (!S && (ie || G !== y)) ||
                  ((c = G).nodeType ? k(F, G, ie) : R(F, G, ie));
                return (c = null), B;
              },
            ];
          N < g;
          N++
        )
          if ((p = r.relative[u[N].type])) H = [en(jn(H), p)];
          else {
            if (((p = r.filter[u[N].type].apply(null, u[N].matches)), p[ee])) {
              for (T = ++N; T < g && !r.relative[u[T].type]; T++);
              return Ln(
                N > 1 && jn(H),
                N > 1 &&
                  Zt(
                    u
                      .slice(0, N - 1)
                      .concat({ value: u[N - 2].type === ' ' ? '*' : '' })
                  ).replace(Gt, '$1'),
                p,
                N < T && In(u.slice(N, T)),
                T < g && In((u = u.slice(T))),
                T < g && Zt(u)
              );
            }
            H.push(p);
          }
        return jn(H);
      }
      function Ti(u, c) {
        var p = c.length > 0,
          T = u.length > 0,
          g = function (S, E, N, k, R) {
            var H,
              F,
              G,
              ie = 0,
              B = '0',
              he = S && [],
              me = [],
              Ne = y,
              oe = S || (T && r.find.TAG('*', R)),
              jt = (Se += Ne == null ? 1 : Math.random() || 0.1),
              Lt = oe.length;
            for (
              R && (y = E == x || E || R);
              B !== Lt && (H = oe[B]) != null;
              B++
            ) {
              if (T && H) {
                for (
                  F = 0, !E && H.ownerDocument != x && (v(H), (N = !U));
                  (G = u[F++]);

                )
                  if (G(H, E || x, N)) {
                    k.push(H);
                    break;
                  }
                R && (Se = jt);
              }
              p && ((H = !G && H) && ie--, S && he.push(H));
            }
            if (((ie += B), p && B !== ie)) {
              for (F = 0; (G = c[F++]); ) G(he, me, E, N);
              if (S) {
                if (ie > 0)
                  for (; B--; ) he[B] || me[B] || (me[B] = Ke.call(k));
                me = tn(me);
              }
              Ze.apply(k, me),
                R &&
                  !S &&
                  me.length > 0 &&
                  ie + c.length > 1 &&
                  re.uniqueSort(k);
            }
            return R && ((Se = jt), (y = Ne)), he;
          };
        return p ? Fe(g) : g;
      }
      return (
        (l = re.compile =
          function (u, c) {
            var p,
              T = [],
              g = [],
              S = Yt[u + ' '];
            if (!S) {
              for (c || (c = s(u)), p = c.length; p--; )
                (S = In(c[p])), S[ee] ? T.push(S) : g.push(S);
              (S = Yt(u, Ti(g, T))), (S.selector = u);
            }
            return S;
          }),
        (f = re.select =
          function (u, c, p, T) {
            var g,
              S,
              E,
              N,
              k,
              R = typeof u == 'function' && u,
              H = !T && s((u = R.selector || u));
            if (((p = p || []), H.length === 1)) {
              if (
                ((S = H[0] = H[0].slice(0)),
                S.length > 2 &&
                  (E = S[0]).type === 'ID' &&
                  c.nodeType === 9 &&
                  U &&
                  r.relative[S[1].type])
              ) {
                if (
                  ((c = (r.find.ID(E.matches[0].replace(Xe, Ve), c) || [])[0]),
                  c)
                )
                  R && (c = c.parentNode);
                else return p;
                u = u.slice(S.shift().value.length);
              }
              for (
                g = Jt.needsContext.test(u) ? 0 : S.length;
                g-- && ((E = S[g]), !r.relative[(N = E.type)]);

              )
                if (
                  (k = r.find[N]) &&
                  (T = k(
                    E.matches[0].replace(Xe, Ve),
                    (An.test(S[0].type) && On(c.parentNode)) || c
                  ))
                ) {
                  if ((S.splice(g, 1), (u = T.length && Zt(S)), !u))
                    return Ze.apply(p, T), p;
                  break;
                }
            }
            return (
              (R || l(u, H))(
                T,
                c,
                !U,
                p,
                !c || (An.test(u) && On(c.parentNode)) || c
              ),
              p
            );
          }),
        (n.sortStable = ee.split('').sort(st).join('') === ee),
        (n.detectDuplicates = !!C),
        v(),
        (n.sortDetached = Me(function (u) {
          return u.compareDocumentPosition(x.createElement('fieldset')) & 1;
        })),
        Me(function (u) {
          return (
            (u.innerHTML = "<a href='#'></a>"),
            u.firstChild.getAttribute('href') === '#'
          );
        }) ||
          kn('type|href|height|width', function (u, c, p) {
            if (!p)
              return u.getAttribute(c, c.toLowerCase() === 'type' ? 1 : 2);
          }),
        (!n.attributes ||
          !Me(function (u) {
            return (
              (u.innerHTML = '<input/>'),
              u.firstChild.setAttribute('value', ''),
              u.firstChild.getAttribute('value') === ''
            );
          })) &&
          kn('value', function (u, c, p) {
            if (!p && u.nodeName.toLowerCase() === 'input')
              return u.defaultValue;
          }),
        Me(function (u) {
          return u.getAttribute('disabled') == null;
        }) ||
          kn(Nn, function (u, c, p) {
            var T;
            if (!p)
              return u[c] === !0
                ? c.toLowerCase()
                : (T = u.getAttributeNode(c)) && T.specified
                ? T.value
                : null;
          }),
        re
      );
    })(d);
    (i.find = $e),
      (i.expr = $e.selectors),
      (i.expr[':'] = i.expr.pseudos),
      (i.uniqueSort = i.unique = $e.uniqueSort),
      (i.text = $e.getText),
      (i.isXMLDoc = $e.isXML),
      (i.contains = $e.contains),
      (i.escapeSelector = $e.escape);
    var be = function (e, t, n) {
        for (var r = [], o = n !== void 0; (e = e[t]) && e.nodeType !== 9; )
          if (e.nodeType === 1) {
            if (o && i(e).is(n)) break;
            r.push(e);
          }
        return r;
      },
      tt = function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          e.nodeType === 1 && e !== t && n.push(e);
        return n;
      },
      Mt = i.expr.match.needsContext;
    function xe(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var Rt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function Tt(e, t, n) {
      return W(t)
        ? i.grep(e, function (r, o) {
            return !!t.call(r, o, r) !== n;
          })
        : t.nodeType
        ? i.grep(e, function (r) {
            return (r === t) !== n;
          })
        : typeof t != 'string'
        ? i.grep(e, function (r) {
            return se.call(t, r) > -1 !== n;
          })
        : i.filter(t, e, n);
    }
    (i.filter = function (e, t, n) {
      var r = t[0];
      return (
        n && (e = ':not(' + e + ')'),
        t.length === 1 && r.nodeType === 1
          ? i.find.matchesSelector(r, e)
            ? [r]
            : []
          : i.find.matches(
              e,
              i.grep(t, function (o) {
                return o.nodeType === 1;
              })
            )
      );
    }),
      i.fn.extend({
        find: function (e) {
          var t,
            n,
            r = this.length,
            o = this;
          if (typeof e != 'string')
            return this.pushStack(
              i(e).filter(function () {
                for (t = 0; t < r; t++) if (i.contains(o[t], this)) return !0;
              })
            );
          for (n = this.pushStack([]), t = 0; t < r; t++) i.find(e, o[t], n);
          return r > 1 ? i.uniqueSort(n) : n;
        },
        filter: function (e) {
          return this.pushStack(Tt(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(Tt(this, e || [], !0));
        },
        is: function (e) {
          return !!Tt(
            this,
            typeof e == 'string' && Mt.test(e) ? i(e) : e || [],
            !1
          ).length;
        },
      });
    var ze,
      St = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      dt = (i.fn.init = function (e, t, n) {
        var r, o;
        if (!e) return this;
        if (((n = n || ze), typeof e == 'string'))
          if (
            (e[0] === '<' && e[e.length - 1] === '>' && e.length >= 3
              ? (r = [null, e, null])
              : (r = St.exec(e)),
            r && (r[1] || !t))
          )
            if (r[1]) {
              if (
                ((t = t instanceof i ? t[0] : t),
                i.merge(
                  this,
                  i.parseHTML(
                    r[1],
                    t && t.nodeType ? t.ownerDocument || t : X,
                    !0
                  )
                ),
                Rt.test(r[1]) && i.isPlainObject(t))
              )
                for (r in t) W(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            } else
              return (
                (o = X.getElementById(r[2])),
                o && ((this[0] = o), (this.length = 1)),
                this
              );
          else
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
        else {
          if (e.nodeType) return (this[0] = e), (this.length = 1), this;
          if (W(e)) return n.ready !== void 0 ? n.ready(e) : e(i);
        }
        return i.makeArray(e, this);
      });
    (dt.prototype = i.fn), (ze = i(X));
    var Ct = /^(?:parents|prev(?:Until|All))/,
      sn = { children: !0, contents: !0, next: !0, prev: !0 };
    i.fn.extend({
      has: function (e) {
        var t = i(e, this),
          n = t.length;
        return this.filter(function () {
          for (var r = 0; r < n; r++) if (i.contains(this, t[r])) return !0;
        });
      },
      closest: function (e, t) {
        var n,
          r = 0,
          o = this.length,
          a = [],
          s = typeof e != 'string' && i(e);
        if (!Mt.test(e)) {
          for (; r < o; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (s
                  ? s.index(n) > -1
                  : n.nodeType === 1 && i.find.matchesSelector(n, e))
              ) {
                a.push(n);
                break;
              }
        }
        return this.pushStack(a.length > 1 ? i.uniqueSort(a) : a);
      },
      index: function (e) {
        return e
          ? typeof e == 'string'
            ? se.call(i(e), this[0])
            : se.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(i.uniqueSort(i.merge(this.get(), i(e, t))));
      },
      addBack: function (e) {
        return this.add(
          e == null ? this.prevObject : this.prevObject.filter(e)
        );
      },
    });
    function pt(e, t) {
      for (; (e = e[t]) && e.nodeType !== 1; );
      return e;
    }
    i.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && t.nodeType !== 11 ? t : null;
        },
        parents: function (e) {
          return be(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return be(e, 'parentNode', n);
        },
        next: function (e) {
          return pt(e, 'nextSibling');
        },
        prev: function (e) {
          return pt(e, 'previousSibling');
        },
        nextAll: function (e) {
          return be(e, 'nextSibling');
        },
        prevAll: function (e) {
          return be(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return be(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return be(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return tt((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return tt(e.firstChild);
        },
        contents: function (e) {
          return e.contentDocument != null && O(e.contentDocument)
            ? e.contentDocument
            : (xe(e, 'template') && (e = e.content || e),
              i.merge([], e.childNodes));
        },
      },
      function (e, t) {
        i.fn[e] = function (n, r) {
          var o = i.map(this, t, n);
          return (
            e.slice(-5) !== 'Until' && (r = n),
            r && typeof r == 'string' && (o = i.filter(r, o)),
            this.length > 1 &&
              (sn[e] || i.uniqueSort(o), Ct.test(e) && o.reverse()),
            this.pushStack(o)
          );
        };
      }
    );
    var Oe = /[^\x20\t\r\n\f]+/g;
    function Bt(e) {
      var t = {};
      return (
        i.each(e.match(Oe) || [], function (n, r) {
          t[r] = !0;
        }),
        t
      );
    }
    i.Callbacks = function (e) {
      e = typeof e == 'string' ? Bt(e) : i.extend({}, e);
      var t,
        n,
        r,
        o,
        a = [],
        s = [],
        l = -1,
        f = function () {
          for (o = o || e.once, r = t = !0; s.length; l = -1)
            for (n = s.shift(); ++l < a.length; )
              a[l].apply(n[0], n[1]) === !1 &&
                e.stopOnFalse &&
                ((l = a.length), (n = !1));
          e.memory || (n = !1), (t = !1), o && (n ? (a = []) : (a = ''));
        },
        y = {
          add: function () {
            return (
              a &&
                (n && !t && ((l = a.length - 1), s.push(n)),
                (function b(C) {
                  i.each(C, function (v, x) {
                    W(x)
                      ? (!e.unique || !y.has(x)) && a.push(x)
                      : x && x.length && Ge(x) !== 'string' && b(x);
                  });
                })(arguments),
                n && !t && f()),
              this
            );
          },
          remove: function () {
            return (
              i.each(arguments, function (b, C) {
                for (var v; (v = i.inArray(C, a, v)) > -1; )
                  a.splice(v, 1), v <= l && l--;
              }),
              this
            );
          },
          has: function (b) {
            return b ? i.inArray(b, a) > -1 : a.length > 0;
          },
          empty: function () {
            return a && (a = []), this;
          },
          disable: function () {
            return (o = s = []), (a = n = ''), this;
          },
          disabled: function () {
            return !a;
          },
          lock: function () {
            return (o = s = []), !n && !t && (a = n = ''), this;
          },
          locked: function () {
            return !!o;
          },
          fireWith: function (b, C) {
            return (
              o ||
                ((C = C || []),
                (C = [b, C.slice ? C.slice() : C]),
                s.push(C),
                t || f()),
              this
            );
          },
          fire: function () {
            return y.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!r;
          },
        };
      return y;
    };
    function Je(e) {
      return e;
    }
    function Ue(e) {
      throw e;
    }
    function Et(e, t, n, r) {
      var o;
      try {
        e && W((o = e.promise))
          ? o.call(e).done(t).fail(n)
          : e && W((o = e.then))
          ? o.call(e, t, n)
          : t.apply(void 0, [e].slice(r));
      } catch (a) {
        n.apply(void 0, [a]);
      }
    }
    i.extend({
      Deferred: function (e) {
        var t = [
            [
              'notify',
              'progress',
              i.Callbacks('memory'),
              i.Callbacks('memory'),
              2,
            ],
            [
              'resolve',
              'done',
              i.Callbacks('once memory'),
              i.Callbacks('once memory'),
              0,
              'resolved',
            ],
            [
              'reject',
              'fail',
              i.Callbacks('once memory'),
              i.Callbacks('once memory'),
              1,
              'rejected',
            ],
          ],
          n = 'pending',
          r = {
            state: function () {
              return n;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (a) {
              return r.then(null, a);
            },
            pipe: function () {
              var a = arguments;
              return i
                .Deferred(function (s) {
                  i.each(t, function (l, f) {
                    var y = W(a[f[4]]) && a[f[4]];
                    o[f[1]](function () {
                      var b = y && y.apply(this, arguments);
                      b && W(b.promise)
                        ? b
                            .promise()
                            .progress(s.notify)
                            .done(s.resolve)
                            .fail(s.reject)
                        : s[f[0] + 'With'](this, y ? [b] : arguments);
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            then: function (a, s, l) {
              var f = 0;
              function y(b, C, v, x) {
                return function () {
                  var I = this,
                    U = arguments,
                    L = function () {
                      var de, Pe;
                      if (!(b < f)) {
                        if (((de = v.apply(I, U)), de === C.promise()))
                          throw new TypeError('Thenable self-resolution');
                        (Pe =
                          de &&
                          (typeof de == 'object' || typeof de == 'function') &&
                          de.then),
                          W(Pe)
                            ? x
                              ? Pe.call(de, y(f, C, Je, x), y(f, C, Ue, x))
                              : (f++,
                                Pe.call(
                                  de,
                                  y(f, C, Je, x),
                                  y(f, C, Ue, x),
                                  y(f, C, Je, C.notifyWith)
                                ))
                            : (v !== Je && ((I = void 0), (U = [de])),
                              (x || C.resolveWith)(I, U));
                      }
                    },
                    pe = x
                      ? L
                      : function () {
                          try {
                            L();
                          } catch (de) {
                            i.Deferred.exceptionHook &&
                              i.Deferred.exceptionHook(de, pe.stackTrace),
                              b + 1 >= f &&
                                (v !== Ue && ((I = void 0), (U = [de])),
                                C.rejectWith(I, U));
                          }
                        };
                  b
                    ? pe()
                    : (i.Deferred.getStackHook &&
                        (pe.stackTrace = i.Deferred.getStackHook()),
                      d.setTimeout(pe));
                };
              }
              return i
                .Deferred(function (b) {
                  t[0][3].add(y(0, b, W(l) ? l : Je, b.notifyWith)),
                    t[1][3].add(y(0, b, W(a) ? a : Je)),
                    t[2][3].add(y(0, b, W(s) ? s : Ue));
                })
                .promise();
            },
            promise: function (a) {
              return a != null ? i.extend(a, r) : r;
            },
          },
          o = {};
        return (
          i.each(t, function (a, s) {
            var l = s[2],
              f = s[5];
            (r[s[1]] = l.add),
              f &&
                l.add(
                  function () {
                    n = f;
                  },
                  t[3 - a][2].disable,
                  t[3 - a][3].disable,
                  t[0][2].lock,
                  t[0][3].lock
                ),
              l.add(s[3].fire),
              (o[s[0]] = function () {
                return (
                  o[s[0] + 'With'](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[s[0] + 'With'] = l.fireWith);
          }),
          r.promise(o),
          e && e.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          r = Array(n),
          o = j.call(arguments),
          a = i.Deferred(),
          s = function (l) {
            return function (f) {
              (r[l] = this),
                (o[l] = arguments.length > 1 ? j.call(arguments) : f),
                --t || a.resolveWith(r, o);
            };
          };
        if (
          t <= 1 &&
          (Et(e, a.done(s(n)).resolve, a.reject, !t),
          a.state() === 'pending' || W(o[n] && o[n].then))
        )
          return a.then();
        for (; n--; ) Et(o[n], s(n), a.reject);
        return a.promise();
      },
    });
    var Ft = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (i.Deferred.exceptionHook = function (e, t) {
      d.console &&
        d.console.warn &&
        e &&
        Ft.test(e.name) &&
        d.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
    }),
      (i.readyException = function (e) {
        d.setTimeout(function () {
          throw e;
        });
      });
    var Pt = i.Deferred();
    (i.fn.ready = function (e) {
      return (
        Pt.then(e).catch(function (t) {
          i.readyException(t);
        }),
        this
      );
    }),
      i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (e === !0 ? --i.readyWait : i.isReady) ||
            ((i.isReady = !0),
            !(e !== !0 && --i.readyWait > 0) && Pt.resolveWith(X, [i]));
        },
      }),
      (i.ready.then = Pt.then);
    function ht() {
      X.removeEventListener('DOMContentLoaded', ht),
        d.removeEventListener('load', ht),
        i.ready();
    }
    X.readyState === 'complete' ||
    (X.readyState !== 'loading' && !X.documentElement.doScroll)
      ? d.setTimeout(i.ready)
      : (X.addEventListener('DOMContentLoaded', ht),
        d.addEventListener('load', ht));
    var Re = function (e, t, n, r, o, a, s) {
        var l = 0,
          f = e.length,
          y = n == null;
        if (Ge(n) === 'object') {
          o = !0;
          for (l in n) Re(e, t, l, n[l], !0, a, s);
        } else if (
          r !== void 0 &&
          ((o = !0),
          W(r) || (s = !0),
          y &&
            (s
              ? (t.call(e, r), (t = null))
              : ((y = t),
                (t = function (b, C, v) {
                  return y.call(i(b), v);
                }))),
          t)
        )
          for (; l < f; l++) t(e[l], n, s ? r : r.call(e[l], l, t(e[l], n)));
        return o ? e : y ? t.call(e) : f ? t(e[0], n) : a;
      },
      un = /^-ms-/,
      fn = /-([a-z])/g;
    function cn(e, t) {
      return t.toUpperCase();
    }
    function je(e) {
      return e.replace(un, 'ms-').replace(fn, cn);
    }
    var nt = function (e) {
      return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
    };
    function rt() {
      this.expando = i.expando + rt.uid++;
    }
    (rt.uid = 1),
      (rt.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              nt(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var r,
            o = this.cache(e);
          if (typeof t == 'string') o[je(t)] = n;
          else for (r in t) o[je(r)] = t[r];
          return o;
        },
        get: function (e, t) {
          return t === void 0
            ? this.cache(e)
            : e[this.expando] && e[this.expando][je(t)];
        },
        access: function (e, t, n) {
          return t === void 0 || (t && typeof t == 'string' && n === void 0)
            ? this.get(e, t)
            : (this.set(e, t, n), n !== void 0 ? n : t);
        },
        remove: function (e, t) {
          var n,
            r = e[this.expando];
          if (r !== void 0) {
            if (t !== void 0)
              for (
                Array.isArray(t)
                  ? (t = t.map(je))
                  : ((t = je(t)), (t = (t in r) ? [t] : t.match(Oe) || [])),
                  n = t.length;
                n--;

              )
                delete r[t[n]];
            (t === void 0 || i.isEmptyObject(r)) &&
              (e.nodeType
                ? (e[this.expando] = void 0)
                : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return t !== void 0 && !i.isEmptyObject(t);
        },
      });
    var M = new rt(),
      ve = new rt(),
      ln = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      dn = /[A-Z]/g;
    function pn(e) {
      return e === 'true'
        ? !0
        : e === 'false'
        ? !1
        : e === 'null'
        ? null
        : e === +e + ''
        ? +e
        : ln.test(e)
        ? JSON.parse(e)
        : e;
    }
    function Wt(e, t, n) {
      var r;
      if (n === void 0 && e.nodeType === 1)
        if (
          ((r = 'data-' + t.replace(dn, '-$&').toLowerCase()),
          (n = e.getAttribute(r)),
          typeof n == 'string')
        ) {
          try {
            n = pn(n);
          } catch {}
          ve.set(e, t, n);
        } else n = void 0;
      return n;
    }
    i.extend({
      hasData: function (e) {
        return ve.hasData(e) || M.hasData(e);
      },
      data: function (e, t, n) {
        return ve.access(e, t, n);
      },
      removeData: function (e, t) {
        ve.remove(e, t);
      },
      _data: function (e, t, n) {
        return M.access(e, t, n);
      },
      _removeData: function (e, t) {
        M.remove(e, t);
      },
    }),
      i.fn.extend({
        data: function (e, t) {
          var n,
            r,
            o,
            a = this[0],
            s = a && a.attributes;
          if (e === void 0) {
            if (
              this.length &&
              ((o = ve.get(a)), a.nodeType === 1 && !M.get(a, 'hasDataAttrs'))
            ) {
              for (n = s.length; n--; )
                s[n] &&
                  ((r = s[n].name),
                  r.indexOf('data-') === 0 &&
                    ((r = je(r.slice(5))), Wt(a, r, o[r])));
              M.set(a, 'hasDataAttrs', !0);
            }
            return o;
          }
          return typeof e == 'object'
            ? this.each(function () {
                ve.set(this, e);
              })
            : Re(
                this,
                function (l) {
                  var f;
                  if (a && l === void 0)
                    return (
                      (f = ve.get(a, e)),
                      f !== void 0 || ((f = Wt(a, e)), f !== void 0)
                        ? f
                        : void 0
                    );
                  this.each(function () {
                    ve.set(this, e, l);
                  });
                },
                null,
                t,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (e) {
          return this.each(function () {
            ve.remove(this, e);
          });
        },
      }),
      i.extend({
        queue: function (e, t, n) {
          var r;
          if (e)
            return (
              (t = (t || 'fx') + 'queue'),
              (r = M.get(e, t)),
              n &&
                (!r || Array.isArray(n)
                  ? (r = M.access(e, t, i.makeArray(n)))
                  : r.push(n)),
              r || []
            );
        },
        dequeue: function (e, t) {
          t = t || 'fx';
          var n = i.queue(e, t),
            r = n.length,
            o = n.shift(),
            a = i._queueHooks(e, t),
            s = function () {
              i.dequeue(e, t);
            };
          o === 'inprogress' && ((o = n.shift()), r--),
            o &&
              (t === 'fx' && n.unshift('inprogress'),
              delete a.stop,
              o.call(e, s, a)),
            !r && a && a.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + 'queueHooks';
          return (
            M.get(e, n) ||
            M.access(e, n, {
              empty: i.Callbacks('once memory').add(function () {
                M.remove(e, [t + 'queue', n]);
              }),
            })
          );
        },
      }),
      i.fn.extend({
        queue: function (e, t) {
          var n = 2;
          return (
            typeof e != 'string' && ((t = e), (e = 'fx'), n--),
            arguments.length < n
              ? i.queue(this[0], e)
              : t === void 0
              ? this
              : this.each(function () {
                  var r = i.queue(this, e, t);
                  i._queueHooks(this, e),
                    e === 'fx' && r[0] !== 'inprogress' && i.dequeue(this, e);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            i.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || 'fx', []);
        },
        promise: function (e, t) {
          var n,
            r = 1,
            o = i.Deferred(),
            a = this,
            s = this.length,
            l = function () {
              --r || o.resolveWith(a, [a]);
            };
          for (
            typeof e != 'string' && ((t = e), (e = void 0)), e = e || 'fx';
            s--;

          )
            (n = M.get(a[s], e + 'queueHooks')),
              n && n.empty && (r++, n.empty.add(l));
          return l(), o.promise(t);
        },
      });
    var $t = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      h = new RegExp('^(?:([+-])=|)(' + $t + ')([a-z%]*)$', 'i'),
      w = ['Top', 'Right', 'Bottom', 'Left'],
      q = X.documentElement,
      A = function (e) {
        return i.contains(e.ownerDocument, e);
      },
      _ = { composed: !0 };
    q.getRootNode &&
      (A = function (e) {
        return (
          i.contains(e.ownerDocument, e) || e.getRootNode(_) === e.ownerDocument
        );
      });
    var le = function (e, t) {
      return (
        (e = t || e),
        e.style.display === 'none' ||
          (e.style.display === '' && A(e) && i.css(e, 'display') === 'none')
      );
    };
    function ne(e, t, n, r) {
      var o,
        a,
        s = 20,
        l = r
          ? function () {
              return r.cur();
            }
          : function () {
              return i.css(e, t, '');
            },
        f = l(),
        y = (n && n[3]) || (i.cssNumber[t] ? '' : 'px'),
        b =
          e.nodeType &&
          (i.cssNumber[t] || (y !== 'px' && +f)) &&
          h.exec(i.css(e, t));
      if (b && b[3] !== y) {
        for (f = f / 2, y = y || b[3], b = +f || 1; s--; )
          i.style(e, t, b + y),
            (1 - a) * (1 - (a = l() / f || 0.5)) <= 0 && (s = 0),
            (b = b / a);
        (b = b * 2), i.style(e, t, b + y), (n = n || []);
      }
      return (
        n &&
          ((b = +b || +f || 0),
          (o = n[1] ? b + (n[1] + 1) * n[2] : +n[2]),
          r && ((r.unit = y), (r.start = b), (r.end = o))),
        o
      );
    }
    var Le = {};
    function gt(e) {
      var t,
        n = e.ownerDocument,
        r = e.nodeName,
        o = Le[r];
      return (
        o ||
        ((t = n.body.appendChild(n.createElement(r))),
        (o = i.css(t, 'display')),
        t.parentNode.removeChild(t),
        o === 'none' && (o = 'block'),
        (Le[r] = o),
        o)
      );
    }
    function Ie(e, t) {
      for (var n, r, o = [], a = 0, s = e.length; a < s; a++)
        (r = e[a]),
          r.style &&
            ((n = r.style.display),
            t
              ? (n === 'none' &&
                  ((o[a] = M.get(r, 'display') || null),
                  o[a] || (r.style.display = '')),
                r.style.display === '' && le(r) && (o[a] = gt(r)))
              : n !== 'none' && ((o[a] = 'none'), M.set(r, 'display', n)));
      for (a = 0; a < s; a++) o[a] != null && (e[a].style.display = o[a]);
      return e;
    }
    i.fn.extend({
      show: function () {
        return Ie(this, !0);
      },
      hide: function () {
        return Ie(this);
      },
      toggle: function (e) {
        return typeof e == 'boolean'
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              le(this) ? i(this).show() : i(this).hide();
            });
      },
    });
    var it = /^(?:checkbox|radio)$/i,
      zt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      Rn = /^$|^module$|\/(?:java|ecma)script/i;
    (function () {
      var e = X.createDocumentFragment(),
        t = e.appendChild(X.createElement('div')),
        n = X.createElement('input');
      n.setAttribute('type', 'radio'),
        n.setAttribute('checked', 'checked'),
        n.setAttribute('name', 't'),
        t.appendChild(n),
        (V.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (t.innerHTML = '<textarea>x</textarea>'),
        (V.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
        (t.innerHTML = '<option></option>'),
        (V.option = !!t.lastChild);
    })();
    var _e = {
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', ''],
    };
    (_e.tbody = _e.tfoot = _e.colgroup = _e.caption = _e.thead),
      (_e.th = _e.td),
      V.option ||
        (_e.optgroup = _e.option =
          [1, "<select multiple='multiple'>", '</select>']);
    function we(e, t) {
      var n;
      return (
        typeof e.getElementsByTagName != 'undefined'
          ? (n = e.getElementsByTagName(t || '*'))
          : typeof e.querySelectorAll != 'undefined'
          ? (n = e.querySelectorAll(t || '*'))
          : (n = []),
        t === void 0 || (t && xe(e, t)) ? i.merge([e], n) : n
      );
    }
    function hn(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
        M.set(e[n], 'globalEval', !t || M.get(t[n], 'globalEval'));
    }
    var Pr = /<|&#?\w+;/;
    function Bn(e, t, n, r, o) {
      for (
        var a,
          s,
          l,
          f,
          y,
          b,
          C = t.createDocumentFragment(),
          v = [],
          x = 0,
          I = e.length;
        x < I;
        x++
      )
        if (((a = e[x]), a || a === 0))
          if (Ge(a) === 'object') i.merge(v, a.nodeType ? [a] : a);
          else if (!Pr.test(a)) v.push(t.createTextNode(a));
          else {
            for (
              s = s || C.appendChild(t.createElement('div')),
                l = (zt.exec(a) || ['', ''])[1].toLowerCase(),
                f = _e[l] || _e._default,
                s.innerHTML = f[1] + i.htmlPrefilter(a) + f[2],
                b = f[0];
              b--;

            )
              s = s.lastChild;
            i.merge(v, s.childNodes), (s = C.firstChild), (s.textContent = '');
          }
      for (C.textContent = '', x = 0; (a = v[x++]); ) {
        if (r && i.inArray(a, r) > -1) {
          o && o.push(a);
          continue;
        }
        if (((y = A(a)), (s = we(C.appendChild(a), 'script')), y && hn(s), n))
          for (b = 0; (a = s[b++]); ) Rn.test(a.type || '') && n.push(a);
      }
      return C;
    }
    var Fn = /^([^.]*)(?:\.(.+)|)/;
    function yt() {
      return !0;
    }
    function vt() {
      return !1;
    }
    function qr(e, t) {
      return (e === Nr()) == (t === 'focus');
    }
    function Nr() {
      try {
        return X.activeElement;
      } catch {}
    }
    function gn(e, t, n, r, o, a) {
      var s, l;
      if (typeof t == 'object') {
        typeof n != 'string' && ((r = r || n), (n = void 0));
        for (l in t) gn(e, l, n, r, t[l], a);
        return e;
      }
      if (
        (r == null && o == null
          ? ((o = n), (r = n = void 0))
          : o == null &&
            (typeof n == 'string'
              ? ((o = r), (r = void 0))
              : ((o = r), (r = n), (n = void 0))),
        o === !1)
      )
        o = vt;
      else if (!o) return e;
      return (
        a === 1 &&
          ((s = o),
          (o = function (f) {
            return i().off(f), s.apply(this, arguments);
          }),
          (o.guid = s.guid || (s.guid = i.guid++))),
        e.each(function () {
          i.event.add(this, t, o, r, n);
        })
      );
    }
    i.event = {
      global: {},
      add: function (e, t, n, r, o) {
        var a,
          s,
          l,
          f,
          y,
          b,
          C,
          v,
          x,
          I,
          U,
          L = M.get(e);
        if (!!nt(e))
          for (
            n.handler && ((a = n), (n = a.handler), (o = a.selector)),
              o && i.find.matchesSelector(q, o),
              n.guid || (n.guid = i.guid++),
              (f = L.events) || (f = L.events = Object.create(null)),
              (s = L.handle) ||
                (s = L.handle =
                  function (pe) {
                    return typeof i != 'undefined' &&
                      i.event.triggered !== pe.type
                      ? i.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
              t = (t || '').match(Oe) || [''],
              y = t.length;
            y--;

          )
            (l = Fn.exec(t[y]) || []),
              (x = U = l[1]),
              (I = (l[2] || '').split('.').sort()),
              x &&
                ((C = i.event.special[x] || {}),
                (x = (o ? C.delegateType : C.bindType) || x),
                (C = i.event.special[x] || {}),
                (b = i.extend(
                  {
                    type: x,
                    origType: U,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && i.expr.match.needsContext.test(o),
                    namespace: I.join('.'),
                  },
                  a
                )),
                (v = f[x]) ||
                  ((v = f[x] = []),
                  (v.delegateCount = 0),
                  (!C.setup || C.setup.call(e, r, I, s) === !1) &&
                    e.addEventListener &&
                    e.addEventListener(x, s)),
                C.add &&
                  (C.add.call(e, b),
                  b.handler.guid || (b.handler.guid = n.guid)),
                o ? v.splice(v.delegateCount++, 0, b) : v.push(b),
                (i.event.global[x] = !0));
      },
      remove: function (e, t, n, r, o) {
        var a,
          s,
          l,
          f,
          y,
          b,
          C,
          v,
          x,
          I,
          U,
          L = M.hasData(e) && M.get(e);
        if (!(!L || !(f = L.events))) {
          for (t = (t || '').match(Oe) || [''], y = t.length; y--; ) {
            if (
              ((l = Fn.exec(t[y]) || []),
              (x = U = l[1]),
              (I = (l[2] || '').split('.').sort()),
              !x)
            ) {
              for (x in f) i.event.remove(e, x + t[y], n, r, !0);
              continue;
            }
            for (
              C = i.event.special[x] || {},
                x = (r ? C.delegateType : C.bindType) || x,
                v = f[x] || [],
                l =
                  l[2] &&
                  new RegExp('(^|\\.)' + I.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                s = a = v.length;
              a--;

            )
              (b = v[a]),
                (o || U === b.origType) &&
                  (!n || n.guid === b.guid) &&
                  (!l || l.test(b.namespace)) &&
                  (!r || r === b.selector || (r === '**' && b.selector)) &&
                  (v.splice(a, 1),
                  b.selector && v.delegateCount--,
                  C.remove && C.remove.call(e, b));
            s &&
              !v.length &&
              ((!C.teardown || C.teardown.call(e, I, L.handle) === !1) &&
                i.removeEvent(e, x, L.handle),
              delete f[x]);
          }
          i.isEmptyObject(f) && M.remove(e, 'handle events');
        }
      },
      dispatch: function (e) {
        var t,
          n,
          r,
          o,
          a,
          s,
          l = new Array(arguments.length),
          f = i.event.fix(e),
          y = (M.get(this, 'events') || Object.create(null))[f.type] || [],
          b = i.event.special[f.type] || {};
        for (l[0] = f, t = 1; t < arguments.length; t++) l[t] = arguments[t];
        if (
          ((f.delegateTarget = this),
          !(b.preDispatch && b.preDispatch.call(this, f) === !1))
        ) {
          for (
            s = i.event.handlers.call(this, f, y), t = 0;
            (o = s[t++]) && !f.isPropagationStopped();

          )
            for (
              f.currentTarget = o.elem, n = 0;
              (a = o.handlers[n++]) && !f.isImmediatePropagationStopped();

            )
              (!f.rnamespace ||
                a.namespace === !1 ||
                f.rnamespace.test(a.namespace)) &&
                ((f.handleObj = a),
                (f.data = a.data),
                (r = (
                  (i.event.special[a.origType] || {}).handle || a.handler
                ).apply(o.elem, l)),
                r !== void 0 &&
                  (f.result = r) === !1 &&
                  (f.preventDefault(), f.stopPropagation()));
          return b.postDispatch && b.postDispatch.call(this, f), f.result;
        }
      },
      handlers: function (e, t) {
        var n,
          r,
          o,
          a,
          s,
          l = [],
          f = t.delegateCount,
          y = e.target;
        if (f && y.nodeType && !(e.type === 'click' && e.button >= 1)) {
          for (; y !== this; y = y.parentNode || this)
            if (
              y.nodeType === 1 &&
              !(e.type === 'click' && y.disabled === !0)
            ) {
              for (a = [], s = {}, n = 0; n < f; n++)
                (r = t[n]),
                  (o = r.selector + ' '),
                  s[o] === void 0 &&
                    (s[o] = r.needsContext
                      ? i(o, this).index(y) > -1
                      : i.find(o, this, null, [y]).length),
                  s[o] && a.push(r);
              a.length && l.push({ elem: y, handlers: a });
            }
        }
        return (
          (y = this),
          f < t.length && l.push({ elem: y, handlers: t.slice(f) }),
          l
        );
      },
      addProp: function (e, t) {
        Object.defineProperty(i.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: W(t)
            ? function () {
                if (this.originalEvent) return t(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[e];
              },
          set: function (n) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            });
          },
        });
      },
      fix: function (e) {
        return e[i.expando] ? e : new i.Event(e);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function (e) {
            var t = this || e;
            return (
              it.test(t.type) &&
                t.click &&
                xe(t, 'input') &&
                Ut(t, 'click', yt),
              !1
            );
          },
          trigger: function (e) {
            var t = this || e;
            return (
              it.test(t.type) && t.click && xe(t, 'input') && Ut(t, 'click'), !0
            );
          },
          _default: function (e) {
            var t = e.target;
            return (
              (it.test(t.type) &&
                t.click &&
                xe(t, 'input') &&
                M.get(t, 'click')) ||
              xe(t, 'a')
            );
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            e.result !== void 0 &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    };
    function Ut(e, t, n) {
      if (!n) {
        M.get(e, t) === void 0 && i.event.add(e, t, yt);
        return;
      }
      M.set(e, t, !1),
        i.event.add(e, t, {
          namespace: !1,
          handler: function (r) {
            var o,
              a,
              s = M.get(this, t);
            if (r.isTrigger & 1 && this[t]) {
              if (s.length)
                (i.event.special[t] || {}).delegateType && r.stopPropagation();
              else if (
                ((s = j.call(arguments)),
                M.set(this, t, s),
                (o = n(this, t)),
                this[t](),
                (a = M.get(this, t)),
                s !== a || o ? M.set(this, t, !1) : (a = {}),
                s !== a)
              )
                return (
                  r.stopImmediatePropagation(), r.preventDefault(), a && a.value
                );
            } else
              s.length &&
                (M.set(this, t, {
                  value: i.event.trigger(
                    i.extend(s[0], i.Event.prototype),
                    s.slice(1),
                    this
                  ),
                }),
                r.stopImmediatePropagation());
          },
        });
    }
    (i.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
      (i.Event = function (e, t) {
        if (!(this instanceof i.Event)) return new i.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented ||
              (e.defaultPrevented === void 0 && e.returnValue === !1)
                ? yt
                : vt),
            (this.target =
              e.target && e.target.nodeType === 3
                ? e.target.parentNode
                : e.target),
            (this.currentTarget = e.currentTarget),
            (this.relatedTarget = e.relatedTarget))
          : (this.type = e),
          t && i.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || Date.now()),
          (this[i.expando] = !0);
      }),
      (i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: vt,
        isPropagationStopped: vt,
        isImmediatePropagationStopped: vt,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = yt),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = yt),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = yt),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      i.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: !0,
        },
        i.event.addProp
      ),
      i.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
        i.event.special[e] = {
          setup: function () {
            return Ut(this, e, qr), !1;
          },
          trigger: function () {
            return Ut(this, e), !0;
          },
          _default: function (n) {
            return M.get(n.target, e);
          },
          delegateType: t,
        };
      }),
      i.each(
        {
          mouseenter: 'mouseover',
          mouseleave: 'mouseout',
          pointerenter: 'pointerover',
          pointerleave: 'pointerout',
        },
        function (e, t) {
          i.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (n) {
              var r,
                o = this,
                a = n.relatedTarget,
                s = n.handleObj;
              return (
                (!a || (a !== o && !i.contains(o, a))) &&
                  ((n.type = s.origType),
                  (r = s.handler.apply(this, arguments)),
                  (n.type = t)),
                r
              );
            },
          };
        }
      ),
      i.fn.extend({
        on: function (e, t, n, r) {
          return gn(this, e, t, n, r);
        },
        one: function (e, t, n, r) {
          return gn(this, e, t, n, r, 1);
        },
        off: function (e, t, n) {
          var r, o;
          if (e && e.preventDefault && e.handleObj)
            return (
              (r = e.handleObj),
              i(e.delegateTarget).off(
                r.namespace ? r.origType + '.' + r.namespace : r.origType,
                r.selector,
                r.handler
              ),
              this
            );
          if (typeof e == 'object') {
            for (o in e) this.off(o, t, e[o]);
            return this;
          }
          return (
            (t === !1 || typeof t == 'function') && ((n = t), (t = void 0)),
            n === !1 && (n = vt),
            this.each(function () {
              i.event.remove(this, e, n, t);
            })
          );
        },
      });
    var Dr = /<script|<style|<link/i,
      Ar = /checked\s*(?:[^=]|=\s*.checked.)/i,
      kr = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function Wn(e, t) {
      return (
        (xe(e, 'table') &&
          xe(t.nodeType !== 11 ? t : t.firstChild, 'tr') &&
          i(e).children('tbody')[0]) ||
        e
      );
    }
    function Or(e) {
      return (e.type = (e.getAttribute('type') !== null) + '/' + e.type), e;
    }
    function jr(e) {
      return (
        (e.type || '').slice(0, 5) === 'true/'
          ? (e.type = e.type.slice(5))
          : e.removeAttribute('type'),
        e
      );
    }
    function $n(e, t) {
      var n, r, o, a, s, l, f;
      if (t.nodeType === 1) {
        if (M.hasData(e) && ((a = M.get(e)), (f = a.events), f)) {
          M.remove(t, 'handle events');
          for (o in f)
            for (n = 0, r = f[o].length; n < r; n++) i.event.add(t, o, f[o][n]);
        }
        ve.hasData(e) &&
          ((s = ve.access(e)), (l = i.extend({}, s)), ve.set(t, l));
      }
    }
    function Lr(e, t) {
      var n = t.nodeName.toLowerCase();
      n === 'input' && it.test(e.type)
        ? (t.checked = e.checked)
        : (n === 'input' || n === 'textarea') &&
          (t.defaultValue = e.defaultValue);
    }
    function mt(e, t, n, r) {
      t = ae(t);
      var o,
        a,
        s,
        l,
        f,
        y,
        b = 0,
        C = e.length,
        v = C - 1,
        x = t[0],
        I = W(x);
      if (I || (C > 1 && typeof x == 'string' && !V.checkClone && Ar.test(x)))
        return e.each(function (U) {
          var L = e.eq(U);
          I && (t[0] = x.call(this, U, L.html())), mt(L, t, n, r);
        });
      if (
        C &&
        ((o = Bn(t, e[0].ownerDocument, !1, e, r)),
        (a = o.firstChild),
        o.childNodes.length === 1 && (o = a),
        a || r)
      ) {
        for (s = i.map(we(o, 'script'), Or), l = s.length; b < C; b++)
          (f = o),
            b !== v &&
              ((f = i.clone(f, !0, !0)), l && i.merge(s, we(f, 'script'))),
            n.call(e[b], f, b);
        if (l)
          for (
            y = s[s.length - 1].ownerDocument, i.map(s, jr), b = 0;
            b < l;
            b++
          )
            (f = s[b]),
              Rn.test(f.type || '') &&
                !M.access(f, 'globalEval') &&
                i.contains(y, f) &&
                (f.src && (f.type || '').toLowerCase() !== 'module'
                  ? i._evalUrl &&
                    !f.noModule &&
                    i._evalUrl(
                      f.src,
                      { nonce: f.nonce || f.getAttribute('nonce') },
                      y
                    )
                  : Ye(f.textContent.replace(kr, ''), f, y));
      }
      return e;
    }
    function zn(e, t, n) {
      for (var r, o = t ? i.filter(t, e) : e, a = 0; (r = o[a]) != null; a++)
        !n && r.nodeType === 1 && i.cleanData(we(r)),
          r.parentNode &&
            (n && A(r) && hn(we(r, 'script')), r.parentNode.removeChild(r));
      return e;
    }
    i.extend({
      htmlPrefilter: function (e) {
        return e;
      },
      clone: function (e, t, n) {
        var r,
          o,
          a,
          s,
          l = e.cloneNode(!0),
          f = A(e);
        if (
          !V.noCloneChecked &&
          (e.nodeType === 1 || e.nodeType === 11) &&
          !i.isXMLDoc(e)
        )
          for (s = we(l), a = we(e), r = 0, o = a.length; r < o; r++)
            Lr(a[r], s[r]);
        if (t)
          if (n)
            for (
              a = a || we(e), s = s || we(l), r = 0, o = a.length;
              r < o;
              r++
            )
              $n(a[r], s[r]);
          else $n(e, l);
        return (
          (s = we(l, 'script')), s.length > 0 && hn(s, !f && we(e, 'script')), l
        );
      },
      cleanData: function (e) {
        for (
          var t, n, r, o = i.event.special, a = 0;
          (n = e[a]) !== void 0;
          a++
        )
          if (nt(n)) {
            if ((t = n[M.expando])) {
              if (t.events)
                for (r in t.events)
                  o[r] ? i.event.remove(n, r) : i.removeEvent(n, r, t.handle);
              n[M.expando] = void 0;
            }
            n[ve.expando] && (n[ve.expando] = void 0);
          }
      },
    }),
      i.fn.extend({
        detach: function (e) {
          return zn(this, e, !0);
        },
        remove: function (e) {
          return zn(this, e);
        },
        text: function (e) {
          return Re(
            this,
            function (t) {
              return t === void 0
                ? i.text(this)
                : this.empty().each(function () {
                    (this.nodeType === 1 ||
                      this.nodeType === 11 ||
                      this.nodeType === 9) &&
                      (this.textContent = t);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return mt(this, arguments, function (e) {
            if (
              this.nodeType === 1 ||
              this.nodeType === 11 ||
              this.nodeType === 9
            ) {
              var t = Wn(this, e);
              t.appendChild(e);
            }
          });
        },
        prepend: function () {
          return mt(this, arguments, function (e) {
            if (
              this.nodeType === 1 ||
              this.nodeType === 11 ||
              this.nodeType === 9
            ) {
              var t = Wn(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return mt(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return mt(this, arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; (e = this[t]) != null; t++)
            e.nodeType === 1 && (i.cleanData(we(e, !1)), (e.textContent = ''));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = e == null ? !1 : e),
            (t = t == null ? e : t),
            this.map(function () {
              return i.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return Re(
            this,
            function (t) {
              var n = this[0] || {},
                r = 0,
                o = this.length;
              if (t === void 0 && n.nodeType === 1) return n.innerHTML;
              if (
                typeof t == 'string' &&
                !Dr.test(t) &&
                !_e[(zt.exec(t) || ['', ''])[1].toLowerCase()]
              ) {
                t = i.htmlPrefilter(t);
                try {
                  for (; r < o; r++)
                    (n = this[r] || {}),
                      n.nodeType === 1 &&
                        (i.cleanData(we(n, !1)), (n.innerHTML = t));
                  n = 0;
                } catch {}
              }
              n && this.empty().append(t);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var e = [];
          return mt(
            this,
            arguments,
            function (t) {
              var n = this.parentNode;
              i.inArray(this, e) < 0 &&
                (i.cleanData(we(this)), n && n.replaceChild(t, this));
            },
            e
          );
        },
      }),
      i.each(
        {
          appendTo: 'append',
          prependTo: 'prepend',
          insertBefore: 'before',
          insertAfter: 'after',
          replaceAll: 'replaceWith',
        },
        function (e, t) {
          i.fn[e] = function (n) {
            for (var r, o = [], a = i(n), s = a.length - 1, l = 0; l <= s; l++)
              (r = l === s ? this : this.clone(!0)),
                i(a[l])[t](r),
                Q.apply(o, r.get());
            return this.pushStack(o);
          };
        }
      );
    var yn = new RegExp('^(' + $t + ')(?!px)[a-z%]+$', 'i'),
      vn = /^--/,
      Xt = function (e) {
        var t = e.ownerDocument.defaultView;
        return (!t || !t.opener) && (t = d), t.getComputedStyle(e);
      },
      Un = function (e, t, n) {
        var r,
          o,
          a = {};
        for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
        r = n.call(e);
        for (o in t) e.style[o] = a[o];
        return r;
      },
      Ir = new RegExp(w.join('|'), 'i'),
      Xn = '[\\x20\\t\\r\\n\\f]',
      _r = new RegExp(
        '^' + Xn + '+|((?:^|[^\\\\])(?:\\\\.)*)' + Xn + '+$',
        'g'
      );
    (function () {
      function e() {
        if (!!y) {
          (f.style.cssText =
            'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
            (y.style.cssText =
              'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
            q.appendChild(f).appendChild(y);
          var b = d.getComputedStyle(y);
          (n = b.top !== '1%'),
            (l = t(b.marginLeft) === 12),
            (y.style.right = '60%'),
            (a = t(b.right) === 36),
            (r = t(b.width) === 36),
            (y.style.position = 'absolute'),
            (o = t(y.offsetWidth / 3) === 12),
            q.removeChild(f),
            (y = null);
        }
      }
      function t(b) {
        return Math.round(parseFloat(b));
      }
      var n,
        r,
        o,
        a,
        s,
        l,
        f = X.createElement('div'),
        y = X.createElement('div');
      !y.style ||
        ((y.style.backgroundClip = 'content-box'),
        (y.cloneNode(!0).style.backgroundClip = ''),
        (V.clearCloneStyle = y.style.backgroundClip === 'content-box'),
        i.extend(V, {
          boxSizingReliable: function () {
            return e(), r;
          },
          pixelBoxStyles: function () {
            return e(), a;
          },
          pixelPosition: function () {
            return e(), n;
          },
          reliableMarginLeft: function () {
            return e(), l;
          },
          scrollboxSize: function () {
            return e(), o;
          },
          reliableTrDimensions: function () {
            var b, C, v, x;
            return (
              s == null &&
                ((b = X.createElement('table')),
                (C = X.createElement('tr')),
                (v = X.createElement('div')),
                (b.style.cssText =
                  'position:absolute;left:-11111px;border-collapse:separate'),
                (C.style.cssText = 'border:1px solid'),
                (C.style.height = '1px'),
                (v.style.height = '9px'),
                (v.style.display = 'block'),
                q.appendChild(b).appendChild(C).appendChild(v),
                (x = d.getComputedStyle(C)),
                (s =
                  parseInt(x.height, 10) +
                    parseInt(x.borderTopWidth, 10) +
                    parseInt(x.borderBottomWidth, 10) ===
                  C.offsetHeight),
                q.removeChild(b)),
              s
            );
          },
        }));
    })();
    function qt(e, t, n) {
      var r,
        o,
        a,
        s,
        l = vn.test(t),
        f = e.style;
      return (
        (n = n || Xt(e)),
        n &&
          ((s = n.getPropertyValue(t) || n[t]),
          l && s && (s = s.replace(_r, '$1') || void 0),
          s === '' && !A(e) && (s = i.style(e, t)),
          !V.pixelBoxStyles() &&
            yn.test(s) &&
            Ir.test(t) &&
            ((r = f.width),
            (o = f.minWidth),
            (a = f.maxWidth),
            (f.minWidth = f.maxWidth = f.width = s),
            (s = n.width),
            (f.width = r),
            (f.minWidth = o),
            (f.maxWidth = a))),
        s !== void 0 ? s + '' : s
      );
    }
    function Vn(e, t) {
      return {
        get: function () {
          if (e()) {
            delete this.get;
            return;
          }
          return (this.get = t).apply(this, arguments);
        },
      };
    }
    var Qn = ['Webkit', 'Moz', 'ms'],
      Yn = X.createElement('div').style,
      Gn = {};
    function Hr(e) {
      for (var t = e[0].toUpperCase() + e.slice(1), n = Qn.length; n--; )
        if (((e = Qn[n] + t), e in Yn)) return e;
    }
    function mn(e) {
      var t = i.cssProps[e] || Gn[e];
      return t || (e in Yn ? e : (Gn[e] = Hr(e) || e));
    }
    var Mr = /^(none|table(?!-c[ea]).+)/,
      Rr = { position: 'absolute', visibility: 'hidden', display: 'block' },
      Jn = { letterSpacing: '0', fontWeight: '400' };
    function Kn(e, t, n) {
      var r = h.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
    }
    function bn(e, t, n, r, o, a) {
      var s = t === 'width' ? 1 : 0,
        l = 0,
        f = 0;
      if (n === (r ? 'border' : 'content')) return 0;
      for (; s < 4; s += 2)
        n === 'margin' && (f += i.css(e, n + w[s], !0, o)),
          r
            ? (n === 'content' && (f -= i.css(e, 'padding' + w[s], !0, o)),
              n !== 'margin' &&
                (f -= i.css(e, 'border' + w[s] + 'Width', !0, o)))
            : ((f += i.css(e, 'padding' + w[s], !0, o)),
              n !== 'padding'
                ? (f += i.css(e, 'border' + w[s] + 'Width', !0, o))
                : (l += i.css(e, 'border' + w[s] + 'Width', !0, o)));
      return (
        !r &&
          a >= 0 &&
          (f +=
            Math.max(
              0,
              Math.ceil(
                e['offset' + t[0].toUpperCase() + t.slice(1)] - a - f - l - 0.5
              )
            ) || 0),
        f
      );
    }
    function Zn(e, t, n) {
      var r = Xt(e),
        o = !V.boxSizingReliable() || n,
        a = o && i.css(e, 'boxSizing', !1, r) === 'border-box',
        s = a,
        l = qt(e, t, r),
        f = 'offset' + t[0].toUpperCase() + t.slice(1);
      if (yn.test(l)) {
        if (!n) return l;
        l = 'auto';
      }
      return (
        ((!V.boxSizingReliable() && a) ||
          (!V.reliableTrDimensions() && xe(e, 'tr')) ||
          l === 'auto' ||
          (!parseFloat(l) && i.css(e, 'display', !1, r) === 'inline')) &&
          e.getClientRects().length &&
          ((a = i.css(e, 'boxSizing', !1, r) === 'border-box'),
          (s = f in e),
          s && (l = e[f])),
        (l = parseFloat(l) || 0),
        l + bn(e, t, n || (a ? 'border' : 'content'), s, r, l) + 'px'
      );
    }
    i.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = qt(e, 'opacity');
              return n === '' ? '1' : n;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {},
      style: function (e, t, n, r) {
        if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
          var o,
            a,
            s,
            l = je(t),
            f = vn.test(t),
            y = e.style;
          if (
            (f || (t = mn(l)),
            (s = i.cssHooks[t] || i.cssHooks[l]),
            n !== void 0)
          ) {
            if (
              ((a = typeof n),
              a === 'string' &&
                (o = h.exec(n)) &&
                o[1] &&
                ((n = ne(e, t, o)), (a = 'number')),
              n == null || n !== n)
            )
              return;
            a === 'number' &&
              !f &&
              (n += (o && o[3]) || (i.cssNumber[l] ? '' : 'px')),
              !V.clearCloneStyle &&
                n === '' &&
                t.indexOf('background') === 0 &&
                (y[t] = 'inherit'),
              (!s || !('set' in s) || (n = s.set(e, n, r)) !== void 0) &&
                (f ? y.setProperty(t, n) : (y[t] = n));
          } else
            return s && 'get' in s && (o = s.get(e, !1, r)) !== void 0
              ? o
              : y[t];
        }
      },
      css: function (e, t, n, r) {
        var o,
          a,
          s,
          l = je(t),
          f = vn.test(t);
        return (
          f || (t = mn(l)),
          (s = i.cssHooks[t] || i.cssHooks[l]),
          s && 'get' in s && (o = s.get(e, !0, n)),
          o === void 0 && (o = qt(e, t, r)),
          o === 'normal' && t in Jn && (o = Jn[t]),
          n === '' || n
            ? ((a = parseFloat(o)), n === !0 || isFinite(a) ? a || 0 : o)
            : o
        );
      },
    }),
      i.each(['height', 'width'], function (e, t) {
        i.cssHooks[t] = {
          get: function (n, r, o) {
            if (r)
              return Mr.test(i.css(n, 'display')) &&
                (!n.getClientRects().length || !n.getBoundingClientRect().width)
                ? Un(n, Rr, function () {
                    return Zn(n, t, o);
                  })
                : Zn(n, t, o);
          },
          set: function (n, r, o) {
            var a,
              s = Xt(n),
              l = !V.scrollboxSize() && s.position === 'absolute',
              f = l || o,
              y = f && i.css(n, 'boxSizing', !1, s) === 'border-box',
              b = o ? bn(n, t, o, y, s) : 0;
            return (
              y &&
                l &&
                (b -= Math.ceil(
                  n['offset' + t[0].toUpperCase() + t.slice(1)] -
                    parseFloat(s[t]) -
                    bn(n, t, 'border', !1, s) -
                    0.5
                )),
              b &&
                (a = h.exec(r)) &&
                (a[3] || 'px') !== 'px' &&
                ((n.style[t] = r), (r = i.css(n, t))),
              Kn(n, r, b)
            );
          },
        };
      }),
      (i.cssHooks.marginLeft = Vn(V.reliableMarginLeft, function (e, t) {
        if (t)
          return (
            (parseFloat(qt(e, 'marginLeft')) ||
              e.getBoundingClientRect().left -
                Un(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + 'px'
          );
      })),
      i.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
        (i.cssHooks[e + t] = {
          expand: function (n) {
            for (
              var r = 0, o = {}, a = typeof n == 'string' ? n.split(' ') : [n];
              r < 4;
              r++
            )
              o[e + w[r] + t] = a[r] || a[r - 2] || a[0];
            return o;
          },
        }),
          e !== 'margin' && (i.cssHooks[e + t].set = Kn);
      }),
      i.fn.extend({
        css: function (e, t) {
          return Re(
            this,
            function (n, r, o) {
              var a,
                s,
                l = {},
                f = 0;
              if (Array.isArray(r)) {
                for (a = Xt(n), s = r.length; f < s; f++)
                  l[r[f]] = i.css(n, r[f], !1, a);
                return l;
              }
              return o !== void 0 ? i.style(n, r, o) : i.css(n, r);
            },
            e,
            t,
            arguments.length > 1
          );
        },
      });
    function Te(e, t, n, r, o) {
      return new Te.prototype.init(e, t, n, r, o);
    }
    (i.Tween = Te),
      (Te.prototype = {
        constructor: Te,
        init: function (e, t, n, r, o, a) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = o || i.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = a || (i.cssNumber[n] ? '' : 'px'));
        },
        cur: function () {
          var e = Te.propHooks[this.prop];
          return e && e.get ? e.get(this) : Te.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = Te.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t =
                  i.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Te.propHooks._default.set(this),
            this
          );
        },
      }),
      (Te.prototype.init.prototype = Te.prototype),
      (Te.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return e.elem.nodeType !== 1 ||
              (e.elem[e.prop] != null && e.elem.style[e.prop] == null)
              ? e.elem[e.prop]
              : ((t = i.css(e.elem, e.prop, '')), !t || t === 'auto' ? 0 : t);
          },
          set: function (e) {
            i.fx.step[e.prop]
              ? i.fx.step[e.prop](e)
              : e.elem.nodeType === 1 &&
                (i.cssHooks[e.prop] || e.elem.style[mn(e.prop)] != null)
              ? i.style(e.elem, e.prop, e.now + e.unit)
              : (e.elem[e.prop] = e.now);
          },
        },
      }),
      (Te.propHooks.scrollTop = Te.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (i.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: 'swing',
      }),
      (i.fx = Te.prototype.init),
      (i.fx.step = {});
    var bt,
      Vt,
      Br = /^(?:toggle|show|hide)$/,
      Fr = /queueHooks$/;
    function xn() {
      Vt &&
        (X.hidden === !1 && d.requestAnimationFrame
          ? d.requestAnimationFrame(xn)
          : d.setTimeout(xn, i.fx.interval),
        i.fx.tick());
    }
    function er() {
      return (
        d.setTimeout(function () {
          bt = void 0;
        }),
        (bt = Date.now())
      );
    }
    function Qt(e, t) {
      var n,
        r = 0,
        o = { height: e };
      for (t = t ? 1 : 0; r < 4; r += 2 - t)
        (n = w[r]), (o['margin' + n] = o['padding' + n] = e);
      return t && (o.opacity = o.width = e), o;
    }
    function tr(e, t, n) {
      for (
        var r,
          o = (Be.tweeners[t] || []).concat(Be.tweeners['*']),
          a = 0,
          s = o.length;
        a < s;
        a++
      )
        if ((r = o[a].call(n, t, e))) return r;
    }
    function Wr(e, t, n) {
      var r,
        o,
        a,
        s,
        l,
        f,
        y,
        b,
        C = 'width' in t || 'height' in t,
        v = this,
        x = {},
        I = e.style,
        U = e.nodeType && le(e),
        L = M.get(e, 'fxshow');
      n.queue ||
        ((s = i._queueHooks(e, 'fx')),
        s.unqueued == null &&
          ((s.unqueued = 0),
          (l = s.empty.fire),
          (s.empty.fire = function () {
            s.unqueued || l();
          })),
        s.unqueued++,
        v.always(function () {
          v.always(function () {
            s.unqueued--, i.queue(e, 'fx').length || s.empty.fire();
          });
        }));
      for (r in t)
        if (((o = t[r]), Br.test(o))) {
          if (
            (delete t[r],
            (a = a || o === 'toggle'),
            o === (U ? 'hide' : 'show'))
          )
            if (o === 'show' && L && L[r] !== void 0) U = !0;
            else continue;
          x[r] = (L && L[r]) || i.style(e, r);
        }
      if (((f = !i.isEmptyObject(t)), !(!f && i.isEmptyObject(x)))) {
        C &&
          e.nodeType === 1 &&
          ((n.overflow = [I.overflow, I.overflowX, I.overflowY]),
          (y = L && L.display),
          y == null && (y = M.get(e, 'display')),
          (b = i.css(e, 'display')),
          b === 'none' &&
            (y
              ? (b = y)
              : (Ie([e], !0),
                (y = e.style.display || y),
                (b = i.css(e, 'display')),
                Ie([e]))),
          (b === 'inline' || (b === 'inline-block' && y != null)) &&
            i.css(e, 'float') === 'none' &&
            (f ||
              (v.done(function () {
                I.display = y;
              }),
              y == null && ((b = I.display), (y = b === 'none' ? '' : b))),
            (I.display = 'inline-block'))),
          n.overflow &&
            ((I.overflow = 'hidden'),
            v.always(function () {
              (I.overflow = n.overflow[0]),
                (I.overflowX = n.overflow[1]),
                (I.overflowY = n.overflow[2]);
            })),
          (f = !1);
        for (r in x)
          f ||
            (L
              ? 'hidden' in L && (U = L.hidden)
              : (L = M.access(e, 'fxshow', { display: y })),
            a && (L.hidden = !U),
            U && Ie([e], !0),
            v.done(function () {
              U || Ie([e]), M.remove(e, 'fxshow');
              for (r in x) i.style(e, r, x[r]);
            })),
            (f = tr(U ? L[r] : 0, r, v)),
            r in L ||
              ((L[r] = f.start), U && ((f.end = f.start), (f.start = 0)));
      }
    }
    function $r(e, t) {
      var n, r, o, a, s;
      for (n in e)
        if (
          ((r = je(n)),
          (o = t[r]),
          (a = e[n]),
          Array.isArray(a) && ((o = a[1]), (a = e[n] = a[0])),
          n !== r && ((e[r] = a), delete e[n]),
          (s = i.cssHooks[r]),
          s && 'expand' in s)
        ) {
          (a = s.expand(a)), delete e[r];
          for (n in a) n in e || ((e[n] = a[n]), (t[n] = o));
        } else t[r] = o;
    }
    function Be(e, t, n) {
      var r,
        o,
        a = 0,
        s = Be.prefilters.length,
        l = i.Deferred().always(function () {
          delete f.elem;
        }),
        f = function () {
          if (o) return !1;
          for (
            var C = bt || er(),
              v = Math.max(0, y.startTime + y.duration - C),
              x = v / y.duration || 0,
              I = 1 - x,
              U = 0,
              L = y.tweens.length;
            U < L;
            U++
          )
            y.tweens[U].run(I);
          return (
            l.notifyWith(e, [y, I, v]),
            I < 1 && L
              ? v
              : (L || l.notifyWith(e, [y, 1, 0]), l.resolveWith(e, [y]), !1)
          );
        },
        y = l.promise({
          elem: e,
          props: i.extend({}, t),
          opts: i.extend(
            !0,
            { specialEasing: {}, easing: i.easing._default },
            n
          ),
          originalProperties: t,
          originalOptions: n,
          startTime: bt || er(),
          duration: n.duration,
          tweens: [],
          createTween: function (C, v) {
            var x = i.Tween(
              e,
              y.opts,
              C,
              v,
              y.opts.specialEasing[C] || y.opts.easing
            );
            return y.tweens.push(x), x;
          },
          stop: function (C) {
            var v = 0,
              x = C ? y.tweens.length : 0;
            if (o) return this;
            for (o = !0; v < x; v++) y.tweens[v].run(1);
            return (
              C
                ? (l.notifyWith(e, [y, 1, 0]), l.resolveWith(e, [y, C]))
                : l.rejectWith(e, [y, C]),
              this
            );
          },
        }),
        b = y.props;
      for ($r(b, y.opts.specialEasing); a < s; a++)
        if (((r = Be.prefilters[a].call(y, e, b, y.opts)), r))
          return (
            W(r.stop) &&
              (i._queueHooks(y.elem, y.opts.queue).stop = r.stop.bind(r)),
            r
          );
      return (
        i.map(b, tr, y),
        W(y.opts.start) && y.opts.start.call(e, y),
        y
          .progress(y.opts.progress)
          .done(y.opts.done, y.opts.complete)
          .fail(y.opts.fail)
          .always(y.opts.always),
        i.fx.timer(i.extend(f, { elem: e, anim: y, queue: y.opts.queue })),
        y
      );
    }
    (i.Animation = i.extend(Be, {
      tweeners: {
        '*': [
          function (e, t) {
            var n = this.createTween(e, t);
            return ne(n.elem, e, h.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        W(e) ? ((t = e), (e = ['*'])) : (e = e.match(Oe));
        for (var n, r = 0, o = e.length; r < o; r++)
          (n = e[r]),
            (Be.tweeners[n] = Be.tweeners[n] || []),
            Be.tweeners[n].unshift(t);
      },
      prefilters: [Wr],
      prefilter: function (e, t) {
        t ? Be.prefilters.unshift(e) : Be.prefilters.push(e);
      },
    })),
      (i.speed = function (e, t, n) {
        var r =
          e && typeof e == 'object'
            ? i.extend({}, e)
            : {
                complete: n || (!n && t) || (W(e) && e),
                duration: e,
                easing: (n && t) || (t && !W(t) && t),
              };
        return (
          i.fx.off
            ? (r.duration = 0)
            : typeof r.duration != 'number' &&
              (r.duration in i.fx.speeds
                ? (r.duration = i.fx.speeds[r.duration])
                : (r.duration = i.fx.speeds._default)),
          (r.queue == null || r.queue === !0) && (r.queue = 'fx'),
          (r.old = r.complete),
          (r.complete = function () {
            W(r.old) && r.old.call(this), r.queue && i.dequeue(this, r.queue);
          }),
          r
        );
      }),
      i.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(le)
            .css('opacity', 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, r);
        },
        animate: function (e, t, n, r) {
          var o = i.isEmptyObject(e),
            a = i.speed(t, n, r),
            s = function () {
              var l = Be(this, i.extend({}, e), a);
              (o || M.get(this, 'finish')) && l.stop(!0);
            };
          return (
            (s.finish = s),
            o || a.queue === !1 ? this.each(s) : this.queue(a.queue, s)
          );
        },
        stop: function (e, t, n) {
          var r = function (o) {
            var a = o.stop;
            delete o.stop, a(n);
          };
          return (
            typeof e != 'string' && ((n = t), (t = e), (e = void 0)),
            t && this.queue(e || 'fx', []),
            this.each(function () {
              var o = !0,
                a = e != null && e + 'queueHooks',
                s = i.timers,
                l = M.get(this);
              if (a) l[a] && l[a].stop && r(l[a]);
              else for (a in l) l[a] && l[a].stop && Fr.test(a) && r(l[a]);
              for (a = s.length; a--; )
                s[a].elem === this &&
                  (e == null || s[a].queue === e) &&
                  (s[a].anim.stop(n), (o = !1), s.splice(a, 1));
              (o || !n) && i.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            e !== !1 && (e = e || 'fx'),
            this.each(function () {
              var t,
                n = M.get(this),
                r = n[e + 'queue'],
                o = n[e + 'queueHooks'],
                a = i.timers,
                s = r ? r.length : 0;
              for (
                n.finish = !0,
                  i.queue(this, e, []),
                  o && o.stop && o.stop.call(this, !0),
                  t = a.length;
                t--;

              )
                a[t].elem === this &&
                  a[t].queue === e &&
                  (a[t].anim.stop(!0), a.splice(t, 1));
              for (t = 0; t < s; t++)
                r[t] && r[t].finish && r[t].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      i.each(['toggle', 'show', 'hide'], function (e, t) {
        var n = i.fn[t];
        i.fn[t] = function (r, o, a) {
          return r == null || typeof r == 'boolean'
            ? n.apply(this, arguments)
            : this.animate(Qt(t, !0), r, o, a);
        };
      }),
      i.each(
        {
          slideDown: Qt('show'),
          slideUp: Qt('hide'),
          slideToggle: Qt('toggle'),
          fadeIn: { opacity: 'show' },
          fadeOut: { opacity: 'hide' },
          fadeToggle: { opacity: 'toggle' },
        },
        function (e, t) {
          i.fn[e] = function (n, r, o) {
            return this.animate(t, n, r, o);
          };
        }
      ),
      (i.timers = []),
      (i.fx.tick = function () {
        var e,
          t = 0,
          n = i.timers;
        for (bt = Date.now(); t < n.length; t++)
          (e = n[t]), !e() && n[t] === e && n.splice(t--, 1);
        n.length || i.fx.stop(), (bt = void 0);
      }),
      (i.fx.timer = function (e) {
        i.timers.push(e), i.fx.start();
      }),
      (i.fx.interval = 13),
      (i.fx.start = function () {
        Vt || ((Vt = !0), xn());
      }),
      (i.fx.stop = function () {
        Vt = null;
      }),
      (i.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (i.fn.delay = function (e, t) {
        return (
          (e = (i.fx && i.fx.speeds[e]) || e),
          (t = t || 'fx'),
          this.queue(t, function (n, r) {
            var o = d.setTimeout(n, e);
            r.stop = function () {
              d.clearTimeout(o);
            };
          })
        );
      }),
      (function () {
        var e = X.createElement('input'),
          t = X.createElement('select'),
          n = t.appendChild(X.createElement('option'));
        (e.type = 'checkbox'),
          (V.checkOn = e.value !== ''),
          (V.optSelected = n.selected),
          (e = X.createElement('input')),
          (e.value = 't'),
          (e.type = 'radio'),
          (V.radioValue = e.value === 't');
      })();
    var nr,
      Nt = i.expr.attrHandle;
    i.fn.extend({
      attr: function (e, t) {
        return Re(this, i.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          i.removeAttr(this, e);
        });
      },
    }),
      i.extend({
        attr: function (e, t, n) {
          var r,
            o,
            a = e.nodeType;
          if (!(a === 3 || a === 8 || a === 2)) {
            if (typeof e.getAttribute == 'undefined') return i.prop(e, t, n);
            if (
              ((a !== 1 || !i.isXMLDoc(e)) &&
                (o =
                  i.attrHooks[t.toLowerCase()] ||
                  (i.expr.match.bool.test(t) ? nr : void 0)),
              n !== void 0)
            ) {
              if (n === null) {
                i.removeAttr(e, t);
                return;
              }
              return o && 'set' in o && (r = o.set(e, n, t)) !== void 0
                ? r
                : (e.setAttribute(t, n + ''), n);
            }
            return o && 'get' in o && (r = o.get(e, t)) !== null
              ? r
              : ((r = i.find.attr(e, t)), r == null ? void 0 : r);
          }
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!V.radioValue && t === 'radio' && xe(e, 'input')) {
                var n = e.value;
                return e.setAttribute('type', t), n && (e.value = n), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            r = 0,
            o = t && t.match(Oe);
          if (o && e.nodeType === 1)
            for (; (n = o[r++]); ) e.removeAttribute(n);
        },
      }),
      (nr = {
        set: function (e, t, n) {
          return t === !1 ? i.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      i.each(i.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Nt[t] || i.find.attr;
        Nt[t] = function (r, o, a) {
          var s,
            l,
            f = o.toLowerCase();
          return (
            a ||
              ((l = Nt[f]),
              (Nt[f] = s),
              (s = n(r, o, a) != null ? f : null),
              (Nt[f] = l)),
            s
          );
        };
      });
    var zr = /^(?:input|select|textarea|button)$/i,
      Ur = /^(?:a|area)$/i;
    i.fn.extend({
      prop: function (e, t) {
        return Re(this, i.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[i.propFix[e] || e];
        });
      },
    }),
      i.extend({
        prop: function (e, t, n) {
          var r,
            o,
            a = e.nodeType;
          if (!(a === 3 || a === 8 || a === 2))
            return (
              (a !== 1 || !i.isXMLDoc(e)) &&
                ((t = i.propFix[t] || t), (o = i.propHooks[t])),
              n !== void 0
                ? o && 'set' in o && (r = o.set(e, n, t)) !== void 0
                  ? r
                  : (e[t] = n)
                : o && 'get' in o && (r = o.get(e, t)) !== null
                ? r
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = i.find.attr(e, 'tabindex');
              return t
                ? parseInt(t, 10)
                : zr.test(e.nodeName) || (Ur.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: 'htmlFor', class: 'className' },
      }),
      V.optSelected ||
        (i.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      i.each(
        [
          'tabIndex',
          'readOnly',
          'maxLength',
          'cellSpacing',
          'cellPadding',
          'rowSpan',
          'colSpan',
          'useMap',
          'frameBorder',
          'contentEditable',
        ],
        function () {
          i.propFix[this.toLowerCase()] = this;
        }
      );
    function ot(e) {
      var t = e.match(Oe) || [];
      return t.join(' ');
    }
    function at(e) {
      return (e.getAttribute && e.getAttribute('class')) || '';
    }
    function wn(e) {
      return Array.isArray(e)
        ? e
        : typeof e == 'string'
        ? e.match(Oe) || []
        : [];
    }
    i.fn.extend({
      addClass: function (e) {
        var t, n, r, o, a, s;
        return W(e)
          ? this.each(function (l) {
              i(this).addClass(e.call(this, l, at(this)));
            })
          : ((t = wn(e)),
            t.length
              ? this.each(function () {
                  if (
                    ((r = at(this)),
                    (n = this.nodeType === 1 && ' ' + ot(r) + ' '),
                    n)
                  ) {
                    for (a = 0; a < t.length; a++)
                      (o = t[a]),
                        n.indexOf(' ' + o + ' ') < 0 && (n += o + ' ');
                    (s = ot(n)), r !== s && this.setAttribute('class', s);
                  }
                })
              : this);
      },
      removeClass: function (e) {
        var t, n, r, o, a, s;
        return W(e)
          ? this.each(function (l) {
              i(this).removeClass(e.call(this, l, at(this)));
            })
          : arguments.length
          ? ((t = wn(e)),
            t.length
              ? this.each(function () {
                  if (
                    ((r = at(this)),
                    (n = this.nodeType === 1 && ' ' + ot(r) + ' '),
                    n)
                  ) {
                    for (a = 0; a < t.length; a++)
                      for (o = t[a]; n.indexOf(' ' + o + ' ') > -1; )
                        n = n.replace(' ' + o + ' ', ' ');
                    (s = ot(n)), r !== s && this.setAttribute('class', s);
                  }
                })
              : this)
          : this.attr('class', '');
      },
      toggleClass: function (e, t) {
        var n,
          r,
          o,
          a,
          s = typeof e,
          l = s === 'string' || Array.isArray(e);
        return W(e)
          ? this.each(function (f) {
              i(this).toggleClass(e.call(this, f, at(this), t), t);
            })
          : typeof t == 'boolean' && l
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : ((n = wn(e)),
            this.each(function () {
              if (l)
                for (a = i(this), o = 0; o < n.length; o++)
                  (r = n[o]), a.hasClass(r) ? a.removeClass(r) : a.addClass(r);
              else
                (e === void 0 || s === 'boolean') &&
                  ((r = at(this)),
                  r && M.set(this, '__className__', r),
                  this.setAttribute &&
                    this.setAttribute(
                      'class',
                      r || e === !1 ? '' : M.get(this, '__className__') || ''
                    ));
            }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        for (t = ' ' + e + ' '; (n = this[r++]); )
          if (n.nodeType === 1 && (' ' + ot(at(n)) + ' ').indexOf(t) > -1)
            return !0;
        return !1;
      },
    });
    var Xr = /\r/g;
    i.fn.extend({
      val: function (e) {
        var t,
          n,
          r,
          o = this[0];
        return arguments.length
          ? ((r = W(e)),
            this.each(function (a) {
              var s;
              this.nodeType === 1 &&
                (r ? (s = e.call(this, a, i(this).val())) : (s = e),
                s == null
                  ? (s = '')
                  : typeof s == 'number'
                  ? (s += '')
                  : Array.isArray(s) &&
                    (s = i.map(s, function (l) {
                      return l == null ? '' : l + '';
                    })),
                (t =
                  i.valHooks[this.type] ||
                  i.valHooks[this.nodeName.toLowerCase()]),
                (!t || !('set' in t) || t.set(this, s, 'value') === void 0) &&
                  (this.value = s));
            }))
          : o
          ? ((t = i.valHooks[o.type] || i.valHooks[o.nodeName.toLowerCase()]),
            t && 'get' in t && (n = t.get(o, 'value')) !== void 0
              ? n
              : ((n = o.value),
                typeof n == 'string' ? n.replace(Xr, '') : n == null ? '' : n))
          : void 0;
      },
    }),
      i.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = i.find.attr(e, 'value');
              return t != null ? t : ot(i.text(e));
            },
          },
          select: {
            get: function (e) {
              var t,
                n,
                r,
                o = e.options,
                a = e.selectedIndex,
                s = e.type === 'select-one',
                l = s ? null : [],
                f = s ? a + 1 : o.length;
              for (a < 0 ? (r = f) : (r = s ? a : 0); r < f; r++)
                if (
                  ((n = o[r]),
                  (n.selected || r === a) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !xe(n.parentNode, 'optgroup')))
                ) {
                  if (((t = i(n).val()), s)) return t;
                  l.push(t);
                }
              return l;
            },
            set: function (e, t) {
              for (
                var n, r, o = e.options, a = i.makeArray(t), s = o.length;
                s--;

              )
                (r = o[s]),
                  (r.selected = i.inArray(i.valHooks.option.get(r), a) > -1) &&
                    (n = !0);
              return n || (e.selectedIndex = -1), a;
            },
          },
        },
      }),
      i.each(['radio', 'checkbox'], function () {
        (i.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t))
              return (e.checked = i.inArray(i(e).val(), t) > -1);
          },
        }),
          V.checkOn ||
            (i.valHooks[this].get = function (e) {
              return e.getAttribute('value') === null ? 'on' : e.value;
            });
      }),
      (V.focusin = 'onfocusin' in d);
    var rr = /^(?:focusinfocus|focusoutblur)$/,
      ir = function (e) {
        e.stopPropagation();
      };
    i.extend(i.event, {
      trigger: function (e, t, n, r) {
        var o,
          a,
          s,
          l,
          f,
          y,
          b,
          C,
          v = [n || X],
          x = Ee.call(e, 'type') ? e.type : e,
          I = Ee.call(e, 'namespace') ? e.namespace.split('.') : [];
        if (
          ((a = C = s = n = n || X),
          !(n.nodeType === 3 || n.nodeType === 8) &&
            !rr.test(x + i.event.triggered) &&
            (x.indexOf('.') > -1 &&
              ((I = x.split('.')), (x = I.shift()), I.sort()),
            (f = x.indexOf(':') < 0 && 'on' + x),
            (e = e[i.expando] ? e : new i.Event(x, typeof e == 'object' && e)),
            (e.isTrigger = r ? 2 : 3),
            (e.namespace = I.join('.')),
            (e.rnamespace = e.namespace
              ? new RegExp('(^|\\.)' + I.join('\\.(?:.*\\.|)') + '(\\.|$)')
              : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (t = t == null ? [e] : i.makeArray(t, [e])),
            (b = i.event.special[x] || {}),
            !(!r && b.trigger && b.trigger.apply(n, t) === !1)))
        ) {
          if (!r && !b.noBubble && !ue(n)) {
            for (
              l = b.delegateType || x, rr.test(l + x) || (a = a.parentNode);
              a;
              a = a.parentNode
            )
              v.push(a), (s = a);
            s === (n.ownerDocument || X) &&
              v.push(s.defaultView || s.parentWindow || d);
          }
          for (o = 0; (a = v[o++]) && !e.isPropagationStopped(); )
            (C = a),
              (e.type = o > 1 ? l : b.bindType || x),
              (y =
                (M.get(a, 'events') || Object.create(null))[e.type] &&
                M.get(a, 'handle')),
              y && y.apply(a, t),
              (y = f && a[f]),
              y &&
                y.apply &&
                nt(a) &&
                ((e.result = y.apply(a, t)),
                e.result === !1 && e.preventDefault());
          return (
            (e.type = x),
            !r &&
              !e.isDefaultPrevented() &&
              (!b._default || b._default.apply(v.pop(), t) === !1) &&
              nt(n) &&
              f &&
              W(n[x]) &&
              !ue(n) &&
              ((s = n[f]),
              s && (n[f] = null),
              (i.event.triggered = x),
              e.isPropagationStopped() && C.addEventListener(x, ir),
              n[x](),
              e.isPropagationStopped() && C.removeEventListener(x, ir),
              (i.event.triggered = void 0),
              s && (n[f] = s)),
            e.result
          );
        }
      },
      simulate: function (e, t, n) {
        var r = i.extend(new i.Event(), n, { type: e, isSimulated: !0 });
        i.event.trigger(r, null, t);
      },
    }),
      i.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            i.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return i.event.trigger(e, t, n, !0);
        },
      }),
      V.focusin ||
        i.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
          var n = function (r) {
            i.event.simulate(t, r.target, i.event.fix(r));
          };
          i.event.special[t] = {
            setup: function () {
              var r = this.ownerDocument || this.document || this,
                o = M.access(r, t);
              o || r.addEventListener(e, n, !0), M.access(r, t, (o || 0) + 1);
            },
            teardown: function () {
              var r = this.ownerDocument || this.document || this,
                o = M.access(r, t) - 1;
              o
                ? M.access(r, t, o)
                : (r.removeEventListener(e, n, !0), M.remove(r, t));
            },
          };
        });
    var Dt = d.location,
      or = { guid: Date.now() },
      Tn = /\?/;
    i.parseXML = function (e) {
      var t, n;
      if (!e || typeof e != 'string') return null;
      try {
        t = new d.DOMParser().parseFromString(e, 'text/xml');
      } catch {}
      return (
        (n = t && t.getElementsByTagName('parsererror')[0]),
        (!t || n) &&
          i.error(
            'Invalid XML: ' +
              (n
                ? i.map(n.childNodes, function (r) {
                    return r.textContent;
                  }).join(`
`)
                : e)
          ),
        t
      );
    };
    var Vr = /\[\]$/,
      ar = /\r?\n/g,
      Qr = /^(?:submit|button|image|reset|file)$/i,
      Yr = /^(?:input|select|textarea|keygen)/i;
    function Sn(e, t, n, r) {
      var o;
      if (Array.isArray(t))
        i.each(t, function (a, s) {
          n || Vr.test(e)
            ? r(e, s)
            : Sn(
                e + '[' + (typeof s == 'object' && s != null ? a : '') + ']',
                s,
                n,
                r
              );
        });
      else if (!n && Ge(t) === 'object')
        for (o in t) Sn(e + '[' + o + ']', t[o], n, r);
      else r(e, t);
    }
    (i.param = function (e, t) {
      var n,
        r = [],
        o = function (a, s) {
          var l = W(s) ? s() : s;
          r[r.length] =
            encodeURIComponent(a) +
            '=' +
            encodeURIComponent(l == null ? '' : l);
        };
      if (e == null) return '';
      if (Array.isArray(e) || (e.jquery && !i.isPlainObject(e)))
        i.each(e, function () {
          o(this.name, this.value);
        });
      else for (n in e) Sn(n, e[n], t, o);
      return r.join('&');
    }),
      i.fn.extend({
        serialize: function () {
          return i.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = i.prop(this, 'elements');
            return e ? i.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !i(this).is(':disabled') &&
                Yr.test(this.nodeName) &&
                !Qr.test(e) &&
                (this.checked || !it.test(e))
              );
            })
            .map(function (e, t) {
              var n = i(this).val();
              return n == null
                ? null
                : Array.isArray(n)
                ? i.map(n, function (r) {
                    return {
                      name: t.name,
                      value: r.replace(
                        ar,
                        `\r
`
                      ),
                    };
                  })
                : {
                    name: t.name,
                    value: n.replace(
                      ar,
                      `\r
`
                    ),
                  };
            })
            .get();
        },
      });
    var Gr = /%20/g,
      Jr = /#.*$/,
      Kr = /([?&])_=[^&]*/,
      Zr = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      ei = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      ti = /^(?:GET|HEAD)$/,
      ni = /^\/\//,
      sr = {},
      Cn = {},
      ur = '*/'.concat('*'),
      En = X.createElement('a');
    En.href = Dt.href;
    function fr(e) {
      return function (t, n) {
        typeof t != 'string' && ((n = t), (t = '*'));
        var r,
          o = 0,
          a = t.toLowerCase().match(Oe) || [];
        if (W(n))
          for (; (r = a[o++]); )
            r[0] === '+'
              ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
              : (e[r] = e[r] || []).push(n);
      };
    }
    function cr(e, t, n, r) {
      var o = {},
        a = e === Cn;
      function s(l) {
        var f;
        return (
          (o[l] = !0),
          i.each(e[l] || [], function (y, b) {
            var C = b(t, n, r);
            if (typeof C == 'string' && !a && !o[C])
              return t.dataTypes.unshift(C), s(C), !1;
            if (a) return !(f = C);
          }),
          f
        );
      }
      return s(t.dataTypes[0]) || (!o['*'] && s('*'));
    }
    function Pn(e, t) {
      var n,
        r,
        o = i.ajaxSettings.flatOptions || {};
      for (n in t) t[n] !== void 0 && ((o[n] ? e : r || (r = {}))[n] = t[n]);
      return r && i.extend(!0, e, r), e;
    }
    function ri(e, t, n) {
      for (var r, o, a, s, l = e.contents, f = e.dataTypes; f[0] === '*'; )
        f.shift(),
          r === void 0 &&
            (r = e.mimeType || t.getResponseHeader('Content-Type'));
      if (r) {
        for (o in l)
          if (l[o] && l[o].test(r)) {
            f.unshift(o);
            break;
          }
      }
      if (f[0] in n) a = f[0];
      else {
        for (o in n) {
          if (!f[0] || e.converters[o + ' ' + f[0]]) {
            a = o;
            break;
          }
          s || (s = o);
        }
        a = a || s;
      }
      if (a) return a !== f[0] && f.unshift(a), n[a];
    }
    function ii(e, t, n, r) {
      var o,
        a,
        s,
        l,
        f,
        y = {},
        b = e.dataTypes.slice();
      if (b[1]) for (s in e.converters) y[s.toLowerCase()] = e.converters[s];
      for (a = b.shift(); a; )
        if (
          (e.responseFields[a] && (n[e.responseFields[a]] = t),
          !f && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          (f = a),
          (a = b.shift()),
          a)
        ) {
          if (a === '*') a = f;
          else if (f !== '*' && f !== a) {
            if (((s = y[f + ' ' + a] || y['* ' + a]), !s)) {
              for (o in y)
                if (
                  ((l = o.split(' ')),
                  l[1] === a && ((s = y[f + ' ' + l[0]] || y['* ' + l[0]]), s))
                ) {
                  s === !0
                    ? (s = y[o])
                    : y[o] !== !0 && ((a = l[0]), b.unshift(l[1]));
                  break;
                }
            }
            if (s !== !0)
              if (s && e.throws) t = s(t);
              else
                try {
                  t = s(t);
                } catch (C) {
                  return {
                    state: 'parsererror',
                    error: s ? C : 'No conversion from ' + f + ' to ' + a,
                  };
                }
          }
        }
      return { state: 'success', data: t };
    }
    i.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Dt.href,
        type: 'GET',
        isLocal: ei.test(Dt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': ur,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON',
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': JSON.parse,
          'text xml': i.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Pn(Pn(e, i.ajaxSettings), t) : Pn(i.ajaxSettings, e);
      },
      ajaxPrefilter: fr(sr),
      ajaxTransport: fr(Cn),
      ajax: function (e, t) {
        typeof e == 'object' && ((t = e), (e = void 0)), (t = t || {});
        var n,
          r,
          o,
          a,
          s,
          l,
          f,
          y,
          b,
          C,
          v = i.ajaxSetup({}, t),
          x = v.context || v,
          I = v.context && (x.nodeType || x.jquery) ? i(x) : i.event,
          U = i.Deferred(),
          L = i.Callbacks('once memory'),
          pe = v.statusCode || {},
          de = {},
          Pe = {},
          ee = 'canceled',
          z = {
            readyState: 0,
            getResponseHeader: function (K) {
              var fe;
              if (f) {
                if (!a)
                  for (a = {}; (fe = Zr.exec(o)); )
                    a[fe[1].toLowerCase() + ' '] = (
                      a[fe[1].toLowerCase() + ' '] || []
                    ).concat(fe[2]);
                fe = a[K.toLowerCase() + ' '];
              }
              return fe == null ? null : fe.join(', ');
            },
            getAllResponseHeaders: function () {
              return f ? o : null;
            },
            setRequestHeader: function (K, fe) {
              return (
                f == null &&
                  ((K = Pe[K.toLowerCase()] = Pe[K.toLowerCase()] || K),
                  (de[K] = fe)),
                this
              );
            },
            overrideMimeType: function (K) {
              return f == null && (v.mimeType = K), this;
            },
            statusCode: function (K) {
              var fe;
              if (K)
                if (f) z.always(K[z.status]);
                else for (fe in K) pe[fe] = [pe[fe], K[fe]];
              return this;
            },
            abort: function (K) {
              var fe = K || ee;
              return n && n.abort(fe), Se(0, fe), this;
            },
          };
        if (
          (U.promise(z),
          (v.url = ((e || v.url || Dt.href) + '').replace(
            ni,
            Dt.protocol + '//'
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || '*').toLowerCase().match(Oe) || ['']),
          v.crossDomain == null)
        ) {
          l = X.createElement('a');
          try {
            (l.href = v.url),
              (l.href = l.href),
              (v.crossDomain =
                En.protocol + '//' + En.host != l.protocol + '//' + l.host);
          } catch {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            typeof v.data != 'string' &&
            (v.data = i.param(v.data, v.traditional)),
          cr(sr, v, t, z),
          f)
        )
          return z;
        (y = i.event && v.global),
          y && i.active++ === 0 && i.event.trigger('ajaxStart'),
          (v.type = v.type.toUpperCase()),
          (v.hasContent = !ti.test(v.type)),
          (r = v.url.replace(Jr, '')),
          v.hasContent
            ? v.data &&
              v.processData &&
              (v.contentType || '').indexOf(
                'application/x-www-form-urlencoded'
              ) === 0 &&
              (v.data = v.data.replace(Gr, '+'))
            : ((C = v.url.slice(r.length)),
              v.data &&
                (v.processData || typeof v.data == 'string') &&
                ((r += (Tn.test(r) ? '&' : '?') + v.data), delete v.data),
              v.cache === !1 &&
                ((r = r.replace(Kr, '$1')),
                (C = (Tn.test(r) ? '&' : '?') + '_=' + or.guid++ + C)),
              (v.url = r + C)),
          v.ifModified &&
            (i.lastModified[r] &&
              z.setRequestHeader('If-Modified-Since', i.lastModified[r]),
            i.etag[r] && z.setRequestHeader('If-None-Match', i.etag[r])),
          ((v.data && v.hasContent && v.contentType !== !1) || t.contentType) &&
            z.setRequestHeader('Content-Type', v.contentType),
          z.setRequestHeader(
            'Accept',
            v.dataTypes[0] && v.accepts[v.dataTypes[0]]
              ? v.accepts[v.dataTypes[0]] +
                  (v.dataTypes[0] !== '*' ? ', ' + ur + '; q=0.01' : '')
              : v.accepts['*']
          );
        for (b in v.headers) z.setRequestHeader(b, v.headers[b]);
        if (v.beforeSend && (v.beforeSend.call(x, z, v) === !1 || f))
          return z.abort();
        if (
          ((ee = 'abort'),
          L.add(v.complete),
          z.done(v.success),
          z.fail(v.error),
          (n = cr(Cn, v, t, z)),
          !n)
        )
          Se(-1, 'No Transport');
        else {
          if (((z.readyState = 1), y && I.trigger('ajaxSend', [z, v]), f))
            return z;
          v.async &&
            v.timeout > 0 &&
            (s = d.setTimeout(function () {
              z.abort('timeout');
            }, v.timeout));
          try {
            (f = !1), n.send(de, Se);
          } catch (K) {
            if (f) throw K;
            Se(-1, K);
          }
        }
        function Se(K, fe, kt, Yt) {
          var qe,
            st,
            ut,
            Ce,
            Ke,
            He = fe;
          f ||
            ((f = !0),
            s && d.clearTimeout(s),
            (n = void 0),
            (o = Yt || ''),
            (z.readyState = K > 0 ? 4 : 0),
            (qe = (K >= 200 && K < 300) || K === 304),
            kt && (Ce = ri(v, z, kt)),
            !qe &&
              i.inArray('script', v.dataTypes) > -1 &&
              i.inArray('json', v.dataTypes) < 0 &&
              (v.converters['text script'] = function () {}),
            (Ce = ii(v, Ce, z, qe)),
            qe
              ? (v.ifModified &&
                  ((Ke = z.getResponseHeader('Last-Modified')),
                  Ke && (i.lastModified[r] = Ke),
                  (Ke = z.getResponseHeader('etag')),
                  Ke && (i.etag[r] = Ke)),
                K === 204 || v.type === 'HEAD'
                  ? (He = 'nocontent')
                  : K === 304
                  ? (He = 'notmodified')
                  : ((He = Ce.state),
                    (st = Ce.data),
                    (ut = Ce.error),
                    (qe = !ut)))
              : ((ut = He), (K || !He) && ((He = 'error'), K < 0 && (K = 0))),
            (z.status = K),
            (z.statusText = (fe || He) + ''),
            qe ? U.resolveWith(x, [st, He, z]) : U.rejectWith(x, [z, He, ut]),
            z.statusCode(pe),
            (pe = void 0),
            y &&
              I.trigger(qe ? 'ajaxSuccess' : 'ajaxError', [z, v, qe ? st : ut]),
            L.fireWith(x, [z, He]),
            y &&
              (I.trigger('ajaxComplete', [z, v]),
              --i.active || i.event.trigger('ajaxStop')));
        }
        return z;
      },
      getJSON: function (e, t, n) {
        return i.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return i.get(e, void 0, t, 'script');
      },
    }),
      i.each(['get', 'post'], function (e, t) {
        i[t] = function (n, r, o, a) {
          return (
            W(r) && ((a = a || o), (o = r), (r = void 0)),
            i.ajax(
              i.extend(
                { url: n, type: t, dataType: a, data: r, success: o },
                i.isPlainObject(n) && n
              )
            )
          );
        };
      }),
      i.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers)
          t.toLowerCase() === 'content-type' &&
            (e.contentType = e.headers[t] || '');
      }),
      (i._evalUrl = function (e, t, n) {
        return i.ajax({
          url: e,
          type: 'GET',
          dataType: 'script',
          cache: !0,
          async: !1,
          global: !1,
          converters: { 'text script': function () {} },
          dataFilter: function (r) {
            i.globalEval(r, t, n);
          },
        });
      }),
      i.fn.extend({
        wrapAll: function (e) {
          var t;
          return (
            this[0] &&
              (W(e) && (e = e.call(this[0])),
              (t = i(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (var n = this; n.firstElementChild; )
                    n = n.firstElementChild;
                  return n;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (e) {
          return W(e)
            ? this.each(function (t) {
                i(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                var t = i(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
        },
        wrap: function (e) {
          var t = W(e);
          return this.each(function (n) {
            i(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function (e) {
          return (
            this.parent(e)
              .not('body')
              .each(function () {
                i(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (i.expr.pseudos.hidden = function (e) {
        return !i.expr.pseudos.visible(e);
      }),
      (i.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (i.ajaxSettings.xhr = function () {
        try {
          return new d.XMLHttpRequest();
        } catch {}
      });
    var oi = { 0: 200, 1223: 204 },
      At = i.ajaxSettings.xhr();
    (V.cors = !!At && 'withCredentials' in At),
      (V.ajax = At = !!At),
      i.ajaxTransport(function (e) {
        var t, n;
        if (V.cors || (At && !e.crossDomain))
          return {
            send: function (r, o) {
              var a,
                s = e.xhr();
              if (
                (s.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
              )
                for (a in e.xhrFields) s[a] = e.xhrFields[a];
              e.mimeType &&
                s.overrideMimeType &&
                s.overrideMimeType(e.mimeType),
                !e.crossDomain &&
                  !r['X-Requested-With'] &&
                  (r['X-Requested-With'] = 'XMLHttpRequest');
              for (a in r) s.setRequestHeader(a, r[a]);
              (t = function (l) {
                return function () {
                  t &&
                    ((t =
                      n =
                      s.onload =
                      s.onerror =
                      s.onabort =
                      s.ontimeout =
                      s.onreadystatechange =
                        null),
                    l === 'abort'
                      ? s.abort()
                      : l === 'error'
                      ? typeof s.status != 'number'
                        ? o(0, 'error')
                        : o(s.status, s.statusText)
                      : o(
                          oi[s.status] || s.status,
                          s.statusText,
                          (s.responseType || 'text') !== 'text' ||
                            typeof s.responseText != 'string'
                            ? { binary: s.response }
                            : { text: s.responseText },
                          s.getAllResponseHeaders()
                        ));
                };
              }),
                (s.onload = t()),
                (n = s.onerror = s.ontimeout = t('error')),
                s.onabort !== void 0
                  ? (s.onabort = n)
                  : (s.onreadystatechange = function () {
                      s.readyState === 4 &&
                        d.setTimeout(function () {
                          t && n();
                        });
                    }),
                (t = t('abort'));
              try {
                s.send((e.hasContent && e.data) || null);
              } catch (l) {
                if (t) throw l;
              }
            },
            abort: function () {
              t && t();
            },
          };
      }),
      i.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      i.ajaxSetup({
        accepts: {
          script:
            'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          'text script': function (e) {
            return i.globalEval(e), e;
          },
        },
      }),
      i.ajaxPrefilter('script', function (e) {
        e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = 'GET');
      }),
      i.ajaxTransport('script', function (e) {
        if (e.crossDomain || e.scriptAttrs) {
          var t, n;
          return {
            send: function (r, o) {
              (t = i('<script>')
                .attr(e.scriptAttrs || {})
                .prop({ charset: e.scriptCharset, src: e.url })
                .on(
                  'load error',
                  (n = function (a) {
                    t.remove(),
                      (n = null),
                      a && o(a.type === 'error' ? 404 : 200, a.type);
                  })
                )),
                X.head.appendChild(t[0]);
            },
            abort: function () {
              n && n();
            },
          };
        }
      });
    var lr = [],
      qn = /(=)\?(?=&|$)|\?\?/;
    i.ajaxSetup({
      jsonp: 'callback',
      jsonpCallback: function () {
        var e = lr.pop() || i.expando + '_' + or.guid++;
        return (this[e] = !0), e;
      },
    }),
      i.ajaxPrefilter('json jsonp', function (e, t, n) {
        var r,
          o,
          a,
          s =
            e.jsonp !== !1 &&
            (qn.test(e.url)
              ? 'url'
              : typeof e.data == 'string' &&
                (e.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) === 0 &&
                qn.test(e.data) &&
                'data');
        if (s || e.dataTypes[0] === 'jsonp')
          return (
            (r = e.jsonpCallback =
              W(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
            s
              ? (e[s] = e[s].replace(qn, '$1' + r))
              : e.jsonp !== !1 &&
                (e.url += (Tn.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
            (e.converters['script json'] = function () {
              return a || i.error(r + ' was not called'), a[0];
            }),
            (e.dataTypes[0] = 'json'),
            (o = d[r]),
            (d[r] = function () {
              a = arguments;
            }),
            n.always(function () {
              o === void 0 ? i(d).removeProp(r) : (d[r] = o),
                e[r] && ((e.jsonpCallback = t.jsonpCallback), lr.push(r)),
                a && W(o) && o(a[0]),
                (a = o = void 0);
            }),
            'script'
          );
      }),
      (V.createHTMLDocument = (function () {
        var e = X.implementation.createHTMLDocument('').body;
        return (
          (e.innerHTML = '<form></form><form></form>'),
          e.childNodes.length === 2
        );
      })()),
      (i.parseHTML = function (e, t, n) {
        if (typeof e != 'string') return [];
        typeof t == 'boolean' && ((n = t), (t = !1));
        var r, o, a;
        return (
          t ||
            (V.createHTMLDocument
              ? ((t = X.implementation.createHTMLDocument('')),
                (r = t.createElement('base')),
                (r.href = X.location.href),
                t.head.appendChild(r))
              : (t = X)),
          (o = Rt.exec(e)),
          (a = !n && []),
          o
            ? [t.createElement(o[1])]
            : ((o = Bn([e], t, a)),
              a && a.length && i(a).remove(),
              i.merge([], o.childNodes))
        );
      }),
      (i.fn.load = function (e, t, n) {
        var r,
          o,
          a,
          s = this,
          l = e.indexOf(' ');
        return (
          l > -1 && ((r = ot(e.slice(l))), (e = e.slice(0, l))),
          W(t)
            ? ((n = t), (t = void 0))
            : t && typeof t == 'object' && (o = 'POST'),
          s.length > 0 &&
            i
              .ajax({ url: e, type: o || 'GET', dataType: 'html', data: t })
              .done(function (f) {
                (a = arguments),
                  s.html(r ? i('<div>').append(i.parseHTML(f)).find(r) : f);
              })
              .always(
                n &&
                  function (f, y) {
                    s.each(function () {
                      n.apply(this, a || [f.responseText, y, f]);
                    });
                  }
              ),
          this
        );
      }),
      (i.expr.pseudos.animated = function (e) {
        return i.grep(i.timers, function (t) {
          return e === t.elem;
        }).length;
      }),
      (i.offset = {
        setOffset: function (e, t, n) {
          var r,
            o,
            a,
            s,
            l,
            f,
            y,
            b = i.css(e, 'position'),
            C = i(e),
            v = {};
          b === 'static' && (e.style.position = 'relative'),
            (l = C.offset()),
            (a = i.css(e, 'top')),
            (f = i.css(e, 'left')),
            (y =
              (b === 'absolute' || b === 'fixed') &&
              (a + f).indexOf('auto') > -1),
            y
              ? ((r = C.position()), (s = r.top), (o = r.left))
              : ((s = parseFloat(a) || 0), (o = parseFloat(f) || 0)),
            W(t) && (t = t.call(e, n, i.extend({}, l))),
            t.top != null && (v.top = t.top - l.top + s),
            t.left != null && (v.left = t.left - l.left + o),
            'using' in t ? t.using.call(e, v) : C.css(v);
        },
      }),
      i.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return e === void 0
              ? this
              : this.each(function (o) {
                  i.offset.setOffset(this, e, o);
                });
          var t,
            n,
            r = this[0];
          if (!!r)
            return r.getClientRects().length
              ? ((t = r.getBoundingClientRect()),
                (n = r.ownerDocument.defaultView),
                { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
              : { top: 0, left: 0 };
        },
        position: function () {
          if (!!this[0]) {
            var e,
              t,
              n,
              r = this[0],
              o = { top: 0, left: 0 };
            if (i.css(r, 'position') === 'fixed') t = r.getBoundingClientRect();
            else {
              for (
                t = this.offset(),
                  n = r.ownerDocument,
                  e = r.offsetParent || n.documentElement;
                e &&
                (e === n.body || e === n.documentElement) &&
                i.css(e, 'position') === 'static';

              )
                e = e.parentNode;
              e &&
                e !== r &&
                e.nodeType === 1 &&
                ((o = i(e).offset()),
                (o.top += i.css(e, 'borderTopWidth', !0)),
                (o.left += i.css(e, 'borderLeftWidth', !0)));
            }
            return {
              top: t.top - o.top - i.css(r, 'marginTop', !0),
              left: t.left - o.left - i.css(r, 'marginLeft', !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e && i.css(e, 'position') === 'static';

            )
              e = e.offsetParent;
            return e || q;
          });
        },
      }),
      i.each(
        { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
        function (e, t) {
          var n = t === 'pageYOffset';
          i.fn[e] = function (r) {
            return Re(
              this,
              function (o, a, s) {
                var l;
                if (
                  (ue(o) ? (l = o) : o.nodeType === 9 && (l = o.defaultView),
                  s === void 0)
                )
                  return l ? l[t] : o[a];
                l
                  ? l.scrollTo(n ? l.pageXOffset : s, n ? s : l.pageYOffset)
                  : (o[a] = s);
              },
              e,
              r,
              arguments.length
            );
          };
        }
      ),
      i.each(['top', 'left'], function (e, t) {
        i.cssHooks[t] = Vn(V.pixelPosition, function (n, r) {
          if (r)
            return (r = qt(n, t)), yn.test(r) ? i(n).position()[t] + 'px' : r;
        });
      }),
      i.each({ Height: 'height', Width: 'width' }, function (e, t) {
        i.each(
          { padding: 'inner' + e, content: t, '': 'outer' + e },
          function (n, r) {
            i.fn[r] = function (o, a) {
              var s = arguments.length && (n || typeof o != 'boolean'),
                l = n || (o === !0 || a === !0 ? 'margin' : 'border');
              return Re(
                this,
                function (f, y, b) {
                  var C;
                  return ue(f)
                    ? r.indexOf('outer') === 0
                      ? f['inner' + e]
                      : f.document.documentElement['client' + e]
                    : f.nodeType === 9
                    ? ((C = f.documentElement),
                      Math.max(
                        f.body['scroll' + e],
                        C['scroll' + e],
                        f.body['offset' + e],
                        C['offset' + e],
                        C['client' + e]
                      ))
                    : b === void 0
                    ? i.css(f, y, l)
                    : i.style(f, y, b, l);
                },
                t,
                s ? o : void 0,
                s
              );
            };
          }
        );
      }),
      i.each(
        [
          'ajaxStart',
          'ajaxStop',
          'ajaxComplete',
          'ajaxError',
          'ajaxSuccess',
          'ajaxSend',
        ],
        function (e, t) {
          i.fn[t] = function (n) {
            return this.on(t, n);
          };
        }
      ),
      i.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function (e, t, n) {
          return arguments.length === 1
            ? this.off(e, '**')
            : this.off(t, e || '**', n);
        },
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      i.each(
        'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
          ' '
        ),
        function (e, t) {
          i.fn[t] = function (n, r) {
            return arguments.length > 0
              ? this.on(t, null, n, r)
              : this.trigger(t);
          };
        }
      );
    var ai = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    (i.proxy = function (e, t) {
      var n, r, o;
      if ((typeof t == 'string' && ((n = e[t]), (t = e), (e = n)), !!W(e)))
        return (
          (r = j.call(arguments, 2)),
          (o = function () {
            return e.apply(t || this, r.concat(j.call(arguments)));
          }),
          (o.guid = e.guid = e.guid || i.guid++),
          o
        );
    }),
      (i.holdReady = function (e) {
        e ? i.readyWait++ : i.ready(!0);
      }),
      (i.isArray = Array.isArray),
      (i.parseJSON = JSON.parse),
      (i.nodeName = xe),
      (i.isFunction = W),
      (i.isWindow = ue),
      (i.camelCase = je),
      (i.type = Ge),
      (i.now = Date.now),
      (i.isNumeric = function (e) {
        var t = i.type(e);
        return (t === 'number' || t === 'string') && !isNaN(e - parseFloat(e));
      }),
      (i.trim = function (e) {
        return e == null ? '' : (e + '').replace(ai, '$1');
      });
    var si = d.jQuery,
      ui = d.$;
    return (
      (i.noConflict = function (e) {
        return (
          d.$ === i && (d.$ = ui), e && d.jQuery === i && (d.jQuery = si), i
        );
      }),
      typeof P == 'undefined' && (d.jQuery = d.$ = i),
      i
    );
  });
})(Sr);
var J = Sr.exports;
const et = 'abcdefgh'.split(''),
  Ai = 1,
  Hn = '\u2026',
  Cr = '1.8.3',
  ki = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
  Mn = an(ki),
  Oi = 200,
  ji = 200,
  Li = 60,
  Ii = 30,
  _i = 100,
  $ = {};
$.alpha = 'alpha-d2270';
$.black = 'black-3c85d';
$.board = 'board-b72b1';
$.chessboard = 'chessboard-63f37';
$.clearfix = 'clearfix-7da63';
$.highlight1 = 'highlight1-32417';
$.highlight2 = 'highlight2-9c5d2';
$.notation = 'notation-322f9';
$.numeric = 'numeric-fc462';
$.piece = 'piece-417db';
$.row = 'row-5277c';
$.sparePieces = 'spare-pieces-7492f';
$.sparePiecesBottom = 'spare-pieces-bottom-ae20f';
$.sparePiecesTop = 'spare-pieces-top-4028b';
$.square = 'square-55d63';
$.white = 'white-1e1d7';
function wr(m, d, P) {
  let D = 0,
    O = !1,
    j = [];
  const ae = function () {
    (D = 0), O && ((O = !1), Q());
  };
  var Q = function () {
    (D = window.setTimeout(ae, d)), m.apply(P, j);
  };
  return function (se) {
    (j = arguments), D ? (O = !0) : Q();
  };
}
function xt() {
  return 'xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/x/g, function (m) {
    return ((Math.random() * 16) | 0).toString(16);
  });
}
function ce(m) {
  return JSON.parse(JSON.stringify(m));
}
function Tr(m) {
  const d = m.split('.');
  return {
    major: parseInt(d[0], 10),
    minor: parseInt(d[1], 10),
    patch: parseInt(d[2], 10),
  };
}
function Hi(m, d) {
  (m = Tr(m)), (d = Tr(d));
  const P = m.major * 1e5 * 1e5 + m.minor * 1e5 + m.patch,
    D = d.major * 1e5 * 1e5 + d.minor * 1e5 + d.patch;
  return P >= D;
}
function nn(m, d) {
  for (const P in d) {
    if (!d.hasOwnProperty(P)) continue;
    const D = '{' + P + '}',
      O = d[P];
    for (; m.indexOf(D) !== -1; ) m = m.replace(D, O);
  }
  return m;
}
function Qe(m) {
  return typeof m == 'string';
}
function Ae(m) {
  return typeof m == 'function';
}
function Er(m) {
  return typeof m == 'number' && isFinite(m) && Math.floor(m) === m;
}
function _t(m) {
  return m === 'fast' || m === 'slow' ? !0 : Er(m) ? m >= 0 : !1;
}
function Mi(m) {
  return Er(m) && m >= 1;
}
function Ri(m) {
  if (!Qe(m)) return !1;
  const d = m.split('-');
  return d.length !== 2 ? !1 : ke(d[0]) && ke(d[1]);
}
function ke(m) {
  return Qe(m) && m.search(/^[a-h][1-8]$/) !== -1;
}
function Bi(m) {
  return Qe(m) && m.search(/^[bw][KQRNBP]$/) !== -1;
}
function rn(m) {
  if (!Qe(m)) return !1;
  (m = m.replace(/ .+$/, '')), (m = Xi(m));
  const d = m.split('/');
  if (d.length !== 8) return !1;
  for (let P = 0; P < 8; P++)
    if (d[P].length !== 8 || d[P].search(/[^kqrnbpKQRNBP1]/) !== -1) return !1;
  return !0;
}
function on(m) {
  if (!J.isPlainObject(m)) return !1;
  for (const d in m)
    if (!!m.hasOwnProperty(d) && (!ke(d) || !Bi(m[d]))) return !1;
  return !0;
}
function Fi() {
  return 'ontouchstart' in document.documentElement;
}
function Wi() {
  return typeof window.$ && J.fn && J.fn.jquery && Hi(J.fn.jquery, Cr);
}
function $i(m) {
  return m.toLowerCase() === m ? 'b' + m.toUpperCase() : 'w' + m.toUpperCase();
}
function zi(m) {
  const d = m.split('');
  return d[0] === 'w' ? d[1].toUpperCase() : d[1].toLowerCase();
}
function an(m) {
  if (!rn(m)) return !1;
  m = m.replace(/ .+$/, '');
  const d = m.split('/'),
    P = {};
  let D = 8;
  for (let O = 0; O < 8; O++) {
    const j = d[O].split('');
    let ae = 0;
    for (let Q = 0; Q < j.length; Q++)
      if (j[Q].search(/[1-8]/) !== -1) {
        const se = parseInt(j[Q], 10);
        ae = ae + se;
      } else {
        const se = et[ae] + D;
        (P[se] = $i(j[Q])), (ae = ae + 1);
      }
    D = D - 1;
  }
  return P;
}
function _n(m) {
  if (!on(m)) return !1;
  let d = '',
    P = 8;
  for (let D = 0; D < 8; D++) {
    for (let O = 0; O < 8; O++) {
      const j = et[O] + P;
      m.hasOwnProperty(j) ? (d = d + zi(m[j])) : (d = d + '1');
    }
    D !== 7 && (d = d + '/'), (P = P - 1);
  }
  return (d = Ui(d)), d;
}
function Ui(m) {
  return m
    .replace(/11111111/g, '8')
    .replace(/1111111/g, '7')
    .replace(/111111/g, '6')
    .replace(/11111/g, '5')
    .replace(/1111/g, '4')
    .replace(/111/g, '3')
    .replace(/11/g, '2');
}
function Xi(m) {
  return m
    .replace(/8/g, '11111111')
    .replace(/7/g, '1111111')
    .replace(/6/g, '111111')
    .replace(/5/g, '11111')
    .replace(/4/g, '1111')
    .replace(/3/g, '111')
    .replace(/2/g, '11');
}
function Vi(m, d) {
  const P = m.split(''),
    D = et.indexOf(P[0]) + 1,
    O = parseInt(P[1], 10),
    j = d.split(''),
    ae = et.indexOf(j[0]) + 1,
    Q = parseInt(j[1], 10),
    se = Math.abs(D - ae),
    te = Math.abs(O - Q);
  return se >= te ? se : te;
}
function Qi(m, d, P) {
  const D = Yi(P);
  for (let O = 0; O < D.length; O++) {
    const j = D[O];
    if (m.hasOwnProperty(j) && m[j] === d) return j;
  }
  return !1;
}
function Yi(m) {
  const d = [];
  for (var P = 0; P < 8; P++)
    for (let O = 0; O < 8; O++) {
      const j = et[P] + (O + 1);
      m !== j && d.push({ square: j, distance: Vi(m, j) });
    }
  d.sort(function (O, j) {
    return O.distance - j.distance;
  });
  const D = [];
  for (P = 0; P < d.length; P++) D.push(d[P].square);
  return D;
}
function Gi(m, d) {
  const P = ce(m);
  for (const D in d) {
    if (!d.hasOwnProperty(D) || !P.hasOwnProperty(D)) continue;
    const O = P[D];
    delete P[D], (P[d[D]] = O);
  }
  return P;
}
function Ji(m) {
  let d = '<div class="{chessboard}">';
  return (
    m && (d += '<div class="{sparePieces} {sparePiecesTop}"></div>'),
    (d += '<div class="{board}"></div>'),
    m && (d += '<div class="{sparePieces} {sparePiecesBottom}"></div>'),
    (d += '</div>'),
    nn(d, $)
  );
}
function Ki(m) {
  return (
    m === 'start'
      ? (m = { position: ce(Mn) })
      : rn(m)
      ? (m = { position: an(m) })
      : on(m) && (m = { position: ce(m) }),
    J.isPlainObject(m) || (m = {}),
    m
  );
}
function Zi(m) {
  return (
    m.orientation !== 'black' && (m.orientation = 'white'),
    m.showNotation !== !1 && (m.showNotation = !0),
    m.draggable !== !0 && (m.draggable = !1),
    m.dropOffBoard !== 'trash' && (m.dropOffBoard = 'snapback'),
    m.sparePieces !== !0 && (m.sparePieces = !1),
    m.sparePieces && (m.draggable = !0),
    (!m.hasOwnProperty('pieceTheme') ||
      (!Qe(m.pieceTheme) && !Ae(m.pieceTheme))) &&
      (m.pieceTheme = '/img/chesspieces/wikipedia/{piece}.png'),
    _t(m.appearSpeed) || (m.appearSpeed = Oi),
    _t(m.moveSpeed) || (m.moveSpeed = ji),
    _t(m.snapbackSpeed) || (m.snapbackSpeed = Li),
    _t(m.snapSpeed) || (m.snapSpeed = Ii),
    _t(m.trashSpeed) || (m.trashSpeed = _i),
    Mi(m.dragThrottleRate) || (m.dragThrottleRate = Ai),
    m
  );
}
function eo() {
  if (!Wi()) {
    const m =
      'Chessboard Error 1005: Unable to find a valid version of jQuery. Please include jQuery ' +
      Cr +
      ` or higher on the page

Exiting` +
      Hn;
    return window.alert(m), !1;
  }
  return !0;
}
function to(m) {
  if (m === '') {
    const P =
      `Chessboard Error 1001: The first argument to Chessboard() cannot be an empty string.

Exiting` + Hn;
    return window.alert(P), !1;
  }
  const d = J(m);
  if (d.length !== 1) {
    const P =
      `Chessboard Error 1003: The first argument to Chessboard() must be the ID of a DOM node, an ID query selector, or a single DOM node.

Exiting` + Hn;
    return window.alert(P), !1;
  }
  return d;
}
function no(m, d) {
  if (!eo()) return null;
  const P = to(m);
  if (!P) return null;
  (d = Ki(d)), (d = Zi(d));
  let D = null,
    O = null,
    j = null,
    ae = null;
  const Q = {};
  let se = 2,
    te = 'white',
    Y = {},
    Ee = null,
    We = null,
    ye = null,
    V = !1;
  const W = {},
    ue = {};
  let X = {},
    ge = 16;
  function Ye(h, w, q) {
    if (d.hasOwnProperty('showErrors') !== !0 || d.showErrors === !1) return;
    let A = 'Chessboard Error ' + h + ': ' + w;
    if (
      d.showErrors === 'console' &&
      typeof console == 'object' &&
      typeof console.log == 'function'
    ) {
      console.log(A), arguments.length >= 2 && console.log(q);
      return;
    }
    if (d.showErrors === 'alert') {
      q &&
        (A +=
          `

` + JSON.stringify(q)),
        window.alert(A);
      return;
    }
    Ae(d.showErrors) && d.showErrors(h, w, q);
  }
  function Ge() {
    (te = d.orientation),
      d.hasOwnProperty('position') &&
        (d.position === 'start'
          ? (Y = ce(Mn))
          : rn(d.position)
          ? (Y = an(d.position))
          : on(d.position)
          ? (Y = ce(d.position))
          : Ye(7263, 'Invalid value passed to config.position.', d.position));
  }
  function Ht() {
    const h = parseInt(P.width(), 10);
    if (!h || h <= 0) return 0;
    let w = h - 1;
    for (; w % 8 !== 0 && w > 0; ) w = w - 1;
    return w / 8;
  }
  function i() {
    for (var h = 0; h < et.length; h++)
      for (let q = 1; q <= 8; q++) {
        const A = et[h] + q;
        ue[A] = A + '-' + xt();
      }
    const w = 'KQRNBP'.split('');
    for (h = 0; h < w.length; h++) {
      const q = 'w' + w[h],
        A = 'b' + w[h];
      (W[q] = q + '-' + xt()), (W[A] = A + '-' + xt());
    }
  }
  function wt(h) {
    h !== 'black' && (h = 'white');
    let w = '';
    const q = ce(et);
    let A = 8;
    h === 'black' && (q.reverse(), (A = 1));
    let _ = 'white';
    for (let le = 0; le < 8; le++) {
      w += '<div class="{row}">';
      for (let ne = 0; ne < 8; ne++) {
        const Le = q[ne] + A;
        (w +=
          '<div class="{square} ' +
          $[_] +
          ' square-' +
          Le +
          '" style="width:' +
          ge +
          'px;height:' +
          ge +
          'px;" id="' +
          ue[Le] +
          '" data-square="' +
          Le +
          '">'),
          d.showNotation &&
            (((h === 'white' && A === 1) || (h === 'black' && A === 8)) &&
              (w += '<div class="{notation} {alpha}">' + q[ne] + '</div>'),
            ne === 0 &&
              (w += '<div class="{notation} {numeric}">' + A + '</div>')),
          (w += '</div>'),
          (_ = _ === 'white' ? 'black' : 'white');
      }
      (w += '<div class="{clearfix}"></div></div>'),
        (_ = _ === 'white' ? 'black' : 'white'),
        h === 'white' ? (A = A - 1) : (A = A + 1);
    }
    return nn(w, $);
  }
  function $e(h) {
    return Ae(d.pieceTheme)
      ? d.pieceTheme(h)
      : Qe(d.pieceTheme)
      ? nn(d.pieceTheme, { piece: h })
      : (Ye(8272, 'Unable to build image source for config.pieceTheme.'), '');
  }
  function be(h, w, q) {
    let A = '<img src="' + $e(h) + '" ';
    return (
      Qe(q) && q !== '' && (A += 'id="' + q + '" '),
      (A +=
        'alt="" class="{piece}" data-piece="' +
        h +
        '" style="width:' +
        ge +
        'px;height:' +
        ge +
        'px;'),
      w && (A += 'display:none;'),
      (A += '" />'),
      nn(A, $)
    );
  }
  function tt(h) {
    let w = ['wK', 'wQ', 'wR', 'wB', 'wN', 'wP'];
    h === 'black' && (w = ['bK', 'bQ', 'bR', 'bB', 'bN', 'bP']);
    let q = '';
    for (let A = 0; A < w.length; A++) q += be(w[A], !1, W[w[A]]);
    return q;
  }
  function Mt(h, w, q, A) {
    const _ = J('#' + ue[h]),
      le = _.offset(),
      ne = J('#' + ue[w]),
      Le = ne.offset(),
      gt = xt();
    J('body').append(be(q, !0, gt));
    const Ie = J('#' + gt);
    Ie.css({ display: '', position: 'fixed', top: le.top, left: le.left }),
      _.find('.' + $.piece).remove();
    function it() {
      ne.append(be(q)), Ie.remove(), Ae(A) && A();
    }
    const zt = { duration: d.moveSpeed, complete: it };
    Ie.animate(Le, zt);
  }
  function xe(h, w, q) {
    const A = J('#' + W[h]).offset(),
      _ = J('#' + ue[w]),
      le = _.offset(),
      ne = xt();
    J('body').append(be(h, !0, ne));
    const Le = J('#' + ne);
    Le.css({ display: '', position: 'fixed', left: A.left, top: A.top });
    function gt() {
      _.find('.' + $.piece).remove(),
        _.append(be(h)),
        Le.remove(),
        Ae(q) && q();
    }
    const Ie = { duration: d.moveSpeed, complete: gt };
    Le.animate(le, Ie);
  }
  function Rt(h, w, q) {
    if (h.length === 0) return;
    let A = 0;
    function _() {
      (A = A + 1),
        A === h.length && (ze(), d.onMoveEnd && d.onMoveEnd(ce(w), ce(q)));
    }
    for (let le = 0; le < h.length; le++) {
      const ne = h[le];
      ne.type === 'clear'
        ? J('#' + ue[ne.square] + ' .' + $.piece).fadeOut(d.trashSpeed, _)
        : ne.type === 'add' && !d.sparePieces
        ? J('#' + ue[ne.square])
            .append(be(ne.piece, !0))
            .find('.' + $.piece)
            .fadeIn(d.appearSpeed, _)
        : ne.type === 'add' && d.sparePieces
        ? xe(ne.piece, ne.square, _)
        : ne.type === 'move' && Mt(ne.source, ne.destination, ne.piece, _);
    }
  }
  function Tt(h, w) {
    (h = ce(h)), (w = ce(w));
    const q = [],
      A = {};
    for (var _ in w)
      !w.hasOwnProperty(_) ||
        (h.hasOwnProperty(_) && h[_] === w[_] && (delete h[_], delete w[_]));
    for (_ in w) {
      if (!w.hasOwnProperty(_)) continue;
      const le = Qi(h, w[_], _);
      le &&
        (q.push({ type: 'move', source: le, destination: _, piece: w[_] }),
        delete h[le],
        delete w[_],
        (A[_] = !0));
    }
    for (_ in w)
      !w.hasOwnProperty(_) ||
        (q.push({ type: 'add', square: _, piece: w[_] }), delete w[_]);
    for (_ in h)
      !h.hasOwnProperty(_) ||
        A.hasOwnProperty(_) ||
        (q.push({ type: 'clear', square: _, piece: h[_] }), delete h[_]);
    return q;
  }
  function ze() {
    D.find('.' + $.piece).remove();
    for (const h in Y) !Y.hasOwnProperty(h) || J('#' + ue[h]).append(be(Y[h]));
  }
  function St() {
    D.html(wt(te, ge, d.showNotation)),
      ze(),
      d.sparePieces &&
        (te === 'white'
          ? (j.html(tt('black')), ae.html(tt('white')))
          : (j.html(tt('white')), ae.html(tt('black'))));
  }
  function dt(h) {
    const w = ce(Y),
      q = ce(h),
      A = _n(w),
      _ = _n(q);
    A !== _ && (Ae(d.onChange) && d.onChange(w, q), (Y = h));
  }
  function Ct(h, w) {
    for (const q in X) {
      if (!X.hasOwnProperty(q)) continue;
      const A = X[q];
      if (h >= A.left && h < A.left + ge && w >= A.top && w < A.top + ge)
        return q;
    }
    return 'offboard';
  }
  function sn() {
    X = {};
    for (const h in ue)
      !ue.hasOwnProperty(h) || (X[h] = J('#' + ue[h]).offset());
  }
  function pt() {
    D.find('.' + $.square).removeClass($.highlight1 + ' ' + $.highlight2);
  }
  function Oe() {
    if (ye === 'spare') {
      Bt();
      return;
    }
    pt();
    function h() {
      ze(),
        O.css('display', 'none'),
        Ae(d.onSnapbackEnd) && d.onSnapbackEnd(Ee, ye, ce(Y), te);
    }
    const w = J('#' + ue[ye]).offset(),
      q = { duration: d.snapbackSpeed, complete: h };
    O.animate(w, q), (V = !1);
  }
  function Bt() {
    pt();
    const h = ce(Y);
    delete h[ye], dt(h), ze(), O.fadeOut(d.trashSpeed), (V = !1);
  }
  function Je(h) {
    pt();
    const w = ce(Y);
    delete w[ye], (w[h] = Ee), dt(w);
    const q = J('#' + ue[h]).offset();
    function A() {
      ze(), O.css('display', 'none'), Ae(d.onSnapEnd) && d.onSnapEnd(ye, h, Ee);
    }
    const _ = { duration: d.snapSpeed, complete: A };
    O.animate(q, _), (V = !1);
  }
  function Ue(h, w, q, A) {
    (Ae(d.onDragStart) && d.onDragStart(h, w, ce(Y), te) === !1) ||
      ((V = !0),
      (Ee = w),
      (ye = h),
      h === 'spare' ? (We = 'offboard') : (We = h),
      sn(),
      O.attr('src', $e(w)).css({
        display: '',
        position: 'fixed',
        left: q - ge / 2,
        top: A - ge / 2,
      }),
      h !== 'spare' &&
        J('#' + ue[h])
          .addClass($.highlight1)
          .find('.' + $.piece)
          .css('display', 'none'));
  }
  function Et(h, w) {
    O.css({ left: h - ge / 2, top: w - ge / 2 });
    const q = Ct(h, w);
    q !== We &&
      (ke(We) && J('#' + ue[We]).removeClass($.highlight2),
      ke(q) && J('#' + ue[q]).addClass($.highlight2),
      Ae(d.onDragMove) && d.onDragMove(q, We, ye, Ee, ce(Y), te),
      (We = q));
  }
  function Ft(h) {
    let w = 'drop';
    if (
      (h === 'offboard' && d.dropOffBoard === 'snapback' && (w = 'snapback'),
      h === 'offboard' && d.dropOffBoard === 'trash' && (w = 'trash'),
      Ae(d.onDrop))
    ) {
      const q = ce(Y);
      ye === 'spare' && ke(h) && (q[h] = Ee),
        ke(ye) && h === 'offboard' && delete q[ye],
        ke(ye) && ke(h) && (delete q[ye], (q[h] = Ee));
      const A = ce(Y),
        _ = d.onDrop(ye, h, Ee, q, A, te);
      (_ === 'snapback' || _ === 'trash') && (w = _);
    }
    w === 'snapback' ? Oe() : w === 'trash' ? Bt() : w === 'drop' && Je(h);
  }
  (Q.setDraggable = function (h) {
    d.draggable = h;
  }),
    (Q.clear = function (h) {
      Q.position({}, h);
    }),
    (Q.destroy = function () {
      P.html(''), O.remove(), P.unbind();
    }),
    (Q.fen = function () {
      return Q.position('fen');
    }),
    (Q.flip = function () {
      return Q.orientation('flip');
    }),
    (Q.move = function () {
      if (arguments.length === 0) return;
      let h = !0;
      const w = {};
      for (let A = 0; A < arguments.length; A++) {
        if (arguments[A] === !1) {
          h = !1;
          continue;
        }
        if (!Ri(arguments[A])) {
          Ye(2826, 'Invalid move passed to the move method.', arguments[A]);
          continue;
        }
        const _ = arguments[A].split('-');
        w[_[0]] = _[1];
      }
      const q = Gi(Y, w);
      return Q.position(q, h), q;
    }),
    (Q.orientation = function (h) {
      if (arguments.length === 0) return te;
      if (h === 'white' || h === 'black') return (te = h), St(), te;
      if (h === 'flip')
        return (te = te === 'white' ? 'black' : 'white'), St(), te;
      Ye(5482, 'Invalid value passed to the orientation method.', h);
    }),
    (Q.position = function (h, w) {
      if (arguments.length === 0) return ce(Y);
      if (Qe(h) && h.toLowerCase() === 'fen') return _n(Y);
      if (
        (Qe(h) && h.toLowerCase() === 'start' && (h = ce(Mn)),
        rn(h) && (h = an(h)),
        !on(h))
      ) {
        Ye(6482, 'Invalid value passed to the position method.', h);
        return;
      }
      if ((w !== !1 && (w = !0), w)) {
        const q = Tt(Y, h);
        Rt(q, Y, h), dt(h);
      } else dt(h), ze();
    }),
    (Q.resize = function () {
      (ge = Ht()),
        D.css('width', ge * 8 + 'px'),
        O.css({ height: ge, width: ge }),
        d.sparePieces &&
          P.find('.' + $.sparePieces).css('paddingLeft', ge + se + 'px'),
        St();
    }),
    (Q.start = function (h) {
      Q.position('start', h);
    });
  function Pt(h) {
    h.preventDefault();
  }
  function ht() {
    if (d.onClick) {
      const h = J(this).attr('data-square');
      d.onClick(h);
    }
  }
  function Re(h) {
    if (!d.draggable) return;
    const w = J(this).attr('data-square');
    !ke(w) || !Y.hasOwnProperty(w) || Ue(w, Y[w], h.pageX, h.pageY);
  }
  function un(h) {
    if (!d.draggable) return;
    h.preventDefault();
    const w = J(this).attr('data-square');
    !ke(w) ||
      !Y.hasOwnProperty(w) ||
      ((h = h.originalEvent),
      Ue(w, Y[w], h.changedTouches[0].pageX, h.changedTouches[0].pageY));
  }
  function fn(h) {
    if (!d.sparePieces) return;
    const w = J(this).attr('data-piece');
    Ue('spare', w, h.pageX, h.pageY);
  }
  function cn(h) {
    if (!d.sparePieces) return;
    h.preventDefault();
    const w = J(this).attr('data-piece');
    (h = h.originalEvent),
      Ue('spare', w, h.changedTouches[0].pageX, h.changedTouches[0].pageY);
  }
  function je(h) {
    V && Et(h.pageX, h.pageY);
  }
  const nt = wr(je, d.dragThrottleRate);
  function rt(h) {
    !V ||
      (h.preventDefault(),
      Et(
        h.originalEvent.changedTouches[0].pageX,
        h.originalEvent.changedTouches[0].pageY
      ));
  }
  const M = wr(rt, d.dragThrottleRate);
  function ve(h) {
    if (!V) return;
    const w = Ct(h.pageX, h.pageY);
    Ft(w);
  }
  function ln(h) {
    if (!V) return;
    const w = Ct(
      h.originalEvent.changedTouches[0].pageX,
      h.originalEvent.changedTouches[0].pageY
    );
    Ft(w);
  }
  function dn(h) {
    if (V || !Ae(d.onMouseoverSquare)) return;
    const w = J(h.currentTarget).attr('data-square');
    if (!ke(w)) return;
    let q = !1;
    Y.hasOwnProperty(w) && (q = Y[w]), d.onMouseoverSquare(w, q, ce(Y), te);
  }
  function pn(h) {
    if (V || !Ae(d.onMouseoutSquare)) return;
    const w = J(h.currentTarget).attr('data-square');
    if (!ke(w)) return;
    let q = !1;
    Y.hasOwnProperty(w) && (q = Y[w]), d.onMouseoutSquare(w, q, ce(Y), te);
  }
  function Wt() {
    J('body').on('mousedown mousemove', '.' + $.piece, Pt),
      D.on('mousedown', '.' + $.square, Re),
      P.on('mousedown', '.' + $.sparePieces + ' .' + $.piece, fn),
      D.on('mousedown', '.' + $.square, ht),
      D.on('mouseenter', '.' + $.square, dn).on(
        'mouseleave',
        '.' + $.square,
        pn
      );
    const h = J(window);
    h.on('mousemove', nt).on('mouseup', ve),
      Fi() &&
        ((J.event.special.touchstart = {
          setup: function (w, q, A) {
            this.addEventListener('touchstart', A, { passive: !1 });
          },
        }),
        (J.event.special.touchmove = {
          setup: function (w, q, A) {
            this.addEventListener('touchmove', A, { passive: !1 });
          },
        }),
        D.on('touchstart', '.' + $.square, un),
        P.on('touchstart', '.' + $.sparePieces + ' .' + $.piece, cn),
        h.on('touchmove', M).on('touchend', ln));
  }
  function $t() {
    i(),
      P.html(Ji(d.sparePieces)),
      (D = P.find('.' + $.board)),
      d.sparePieces &&
        ((j = P.find('.' + $.sparePiecesTop)),
        (ae = P.find('.' + $.sparePiecesBottom)));
    const h = xt();
    J('body').append(be('wP', !0, h)),
      (O = J('#' + h)),
      (se = parseInt(D.css('borderLeftWidth'), 10)),
      Q.resize();
  }
  return Ge(), $t(), Wt(), Q;
}
const ro = { draggable: !0, dropOffBoard: !1, position: 'start' };
class so {
  constructor(d, P) {
    It(this, 'board');
    It(this, 'boardSelector');
    It(this, 'resizeListener');
    It(this, 'initialized', new Di(1));
    (this.config = P),
      (this.boardSelector = d),
      this.setElementSize(),
      (this.board = no(d, { ...ro, ...P })),
      (this.resizeListener = () => {
        (this.getElement().style.display = 'none'),
          setTimeout(() => {
            this.setElementSize(),
              this.board.resize(),
              (this.getElement().style.display = 'block'),
              this.initialized.next();
          }, 150);
      }),
      window.addEventListener('resize', this.resizeListener),
      (this.getElement().style.display = 'none'),
      setTimeout(() => {
        this.setElementSize(),
          this.board.resize(),
          (this.getElement().style.display = 'block'),
          this.initialized.next();
      });
  }
  setElementSize() {
    if (document.querySelector(this.boardSelector)) {
      const P = document.querySelector(this.boardSelector).parentElement
          .clientWidth,
        D = document.querySelector(this.boardSelector).parentElement
          .clientHeight,
        O = Math.min(P, D / this.ratio) - 4;
      (this.getElement().style.width = `${O}px`),
        (this.getElement().style.height = `${O * this.ratio}px`);
    }
  }
  get ratio() {
    return this.config.sparePieces ? 1.25 : 1;
  }
  getElement() {
    return document.querySelector(this.boardSelector);
  }
  position(d, P = !0) {
    this.board.position(d, P);
  }
  getPosition() {
    return this.board.position();
  }
  highlight(d, P = !0) {
    const D = P ? 'g-highlight' : 'g-error-highlight',
      O = document.querySelector(
        this.boardSelector + ' .square-' + d.toLowerCase()
      );
    O && O.classList.add(D);
  }
  removeHighlighting() {
    document
      .querySelectorAll(this.boardSelector + ' .g-highlight')
      .forEach((d) => d.classList.remove('g-highlight')),
      document
        .querySelectorAll(this.boardSelector + ' .g-error-highlight')
        .forEach((d) => d.classList.remove('g-error-highlight'));
  }
  clear(d = !0) {
    this.board.clear(d);
  }
  fen() {
    return this.board.fen();
  }
  move(d, P = !0) {
    this.board.move(d, P);
  }
  setDraggable(d) {
    this.board.setDraggable(d);
  }
  orientation(d) {
    this.board.orientation(d);
  }
  destroy() {
    this.board.destroy(),
      window.removeEventListener('resize', this.resizeListener);
  }
}
export { so as C };
