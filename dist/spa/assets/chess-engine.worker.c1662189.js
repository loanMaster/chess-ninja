(function () {
  'use strict';
  var gi =
      typeof globalThis != 'undefined'
        ? globalThis
        : typeof window != 'undefined'
        ? window
        : typeof global != 'undefined'
        ? global
        : typeof self != 'undefined'
        ? self
        : {},
    R = { exports: {} };
  (function (S, I) {
    (function (D, P) {
      S.exports = P();
    })(gi, function () {
      return (function (D) {
        var P = {};
        function u(a) {
          if (P[a]) return P[a].exports;
          var g = (P[a] = { i: a, l: !1, exports: {} });
          return D[a].call(g.exports, g, g.exports, u), (g.l = !0), g.exports;
        }
        return (
          (u.m = D),
          (u.c = P),
          (u.d = function (a, g, A) {
            u.o(a, g) ||
              Object.defineProperty(a, g, { enumerable: !0, get: A });
          }),
          (u.r = function (a) {
            typeof Symbol != 'undefined' &&
              Symbol.toStringTag &&
              Object.defineProperty(a, Symbol.toStringTag, { value: 'Module' }),
              Object.defineProperty(a, '__esModule', { value: !0 });
          }),
          (u.t = function (a, g) {
            if (
              (1 & g && (a = u(a)),
              8 & g || (4 & g && typeof a == 'object' && a && a.__esModule))
            )
              return a;
            var A = Object.create(null);
            if (
              (u.r(A),
              Object.defineProperty(A, 'default', { enumerable: !0, value: a }),
              2 & g && typeof a != 'string')
            )
              for (var p in a)
                u.d(
                  A,
                  p,
                  function (h) {
                    return a[h];
                  }.bind(null, p)
                );
            return A;
          }),
          (u.n = function (a) {
            var g =
              a && a.__esModule
                ? function () {
                    return a.default;
                  }
                : function () {
                    return a;
                  };
            return u.d(g, 'a', g), g;
          }),
          (u.o = function (a, g) {
            return Object.prototype.hasOwnProperty.call(a, g);
          }),
          (u.p = ''),
          u((u.s = 0))
        );
      })([
        function (D, P, u) {
          u.r(P),
            u.d(P, 'Game', function () {
              return d;
            }),
            u.d(P, 'moves', function () {
              return Pi;
            }),
            u.d(P, 'status', function () {
              return pi;
            }),
            u.d(P, 'getFen', function () {
              return Ei;
            }),
            u.d(P, 'move', function () {
              return Bi;
            }),
            u.d(P, 'aiMove', function () {
              return Fi;
            });
          const a = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
            g = ['1', '2', '3', '4', '5', '6', '7', '8'],
            A = {
              KING_W: 'K',
              QUEEN_W: 'Q',
              ROOK_W: 'R',
              BISHOP_W: 'B',
              KNIGHT_W: 'N',
              PAWN_W: 'P',
              KING_B: 'k',
              QUEEN_B: 'q',
              ROOK_B: 'r',
              BISHOP_B: 'b',
              KNIGHT_B: 'n',
              PAWN_B: 'p',
            },
            p = 'black',
            h = 'white',
            x = [0, 1, 2, 3, 4],
            fi = { 0: 1, 1: 2, 2: 2, 3: 3, 4: 3, 5: 4 },
            Q = { 0: 2, 1: 2, 2: 4, 3: 4, 4: 5, 5: 5 },
            j = {
              fullMove: 1,
              halfMove: 0,
              enPassant: null,
              isFinished: !1,
              checkMate: !1,
              check: !1,
              turn: h,
            },
            Ci = Object.assign(
              {
                pieces: {
                  E1: 'K',
                  D1: 'Q',
                  A1: 'R',
                  H1: 'R',
                  C1: 'B',
                  F1: 'B',
                  B1: 'N',
                  G1: 'N',
                  A2: 'P',
                  B2: 'P',
                  C2: 'P',
                  D2: 'P',
                  E2: 'P',
                  F2: 'P',
                  G2: 'P',
                  H2: 'P',
                  E8: 'k',
                  D8: 'q',
                  A8: 'r',
                  H8: 'r',
                  C8: 'b',
                  F8: 'b',
                  B8: 'n',
                  G8: 'n',
                  A7: 'p',
                  B7: 'p',
                  C7: 'p',
                  D7: 'p',
                  E7: 'p',
                  F7: 'p',
                  G7: 'p',
                  H7: 'p',
                },
                castling: {
                  whiteShort: !0,
                  blackShort: !0,
                  whiteLong: !0,
                  blackLong: !0,
                },
              },
              j
            ),
            C = {
              UP: {
                A1: 'A2',
                A2: 'A3',
                A3: 'A4',
                A4: 'A5',
                A5: 'A6',
                A6: 'A7',
                A7: 'A8',
                A8: null,
                B1: 'B2',
                B2: 'B3',
                B3: 'B4',
                B4: 'B5',
                B5: 'B6',
                B6: 'B7',
                B7: 'B8',
                B8: null,
                C1: 'C2',
                C2: 'C3',
                C3: 'C4',
                C4: 'C5',
                C5: 'C6',
                C6: 'C7',
                C7: 'C8',
                C8: null,
                D1: 'D2',
                D2: 'D3',
                D3: 'D4',
                D4: 'D5',
                D5: 'D6',
                D6: 'D7',
                D7: 'D8',
                D8: null,
                E1: 'E2',
                E2: 'E3',
                E3: 'E4',
                E4: 'E5',
                E5: 'E6',
                E6: 'E7',
                E7: 'E8',
                E8: null,
                F1: 'F2',
                F2: 'F3',
                F3: 'F4',
                F4: 'F5',
                F5: 'F6',
                F6: 'F7',
                F7: 'F8',
                F8: null,
                G1: 'G2',
                G2: 'G3',
                G3: 'G4',
                G4: 'G5',
                G5: 'G6',
                G6: 'G7',
                G7: 'G8',
                G8: null,
                H1: 'H2',
                H2: 'H3',
                H3: 'H4',
                H4: 'H5',
                H5: 'H6',
                H6: 'H7',
                H7: 'H8',
                H8: null,
              },
              DOWN: {
                A1: null,
                A2: 'A1',
                A3: 'A2',
                A4: 'A3',
                A5: 'A4',
                A6: 'A5',
                A7: 'A6',
                A8: 'A7',
                B1: null,
                B2: 'B1',
                B3: 'B2',
                B4: 'B3',
                B5: 'B4',
                B6: 'B5',
                B7: 'B6',
                B8: 'B7',
                C1: null,
                C2: 'C1',
                C3: 'C2',
                C4: 'C3',
                C5: 'C4',
                C6: 'C5',
                C7: 'C6',
                C8: 'C7',
                D1: null,
                D2: 'D1',
                D3: 'D2',
                D4: 'D3',
                D5: 'D4',
                D6: 'D5',
                D7: 'D6',
                D8: 'D7',
                E1: null,
                E2: 'E1',
                E3: 'E2',
                E4: 'E3',
                E5: 'E4',
                E6: 'E5',
                E7: 'E6',
                E8: 'E7',
                F1: null,
                F2: 'F1',
                F3: 'F2',
                F4: 'F3',
                F5: 'F4',
                F6: 'F5',
                F7: 'F6',
                F8: 'F7',
                G1: null,
                G2: 'G1',
                G3: 'G2',
                G4: 'G3',
                G5: 'G4',
                G6: 'G5',
                G7: 'G6',
                G8: 'G7',
                H1: null,
                H2: 'H1',
                H3: 'H2',
                H4: 'H3',
                H5: 'H4',
                H6: 'H5',
                H7: 'H6',
                H8: 'H7',
              },
              LEFT: {
                A1: null,
                A2: null,
                A3: null,
                A4: null,
                A5: null,
                A6: null,
                A7: null,
                A8: null,
                B1: 'A1',
                B2: 'A2',
                B3: 'A3',
                B4: 'A4',
                B5: 'A5',
                B6: 'A6',
                B7: 'A7',
                B8: 'A8',
                C1: 'B1',
                C2: 'B2',
                C3: 'B3',
                C4: 'B4',
                C5: 'B5',
                C6: 'B6',
                C7: 'B7',
                C8: 'B8',
                D1: 'C1',
                D2: 'C2',
                D3: 'C3',
                D4: 'C4',
                D5: 'C5',
                D6: 'C6',
                D7: 'C7',
                D8: 'C8',
                E1: 'D1',
                E2: 'D2',
                E3: 'D3',
                E4: 'D4',
                E5: 'D5',
                E6: 'D6',
                E7: 'D7',
                E8: 'D8',
                F1: 'E1',
                F2: 'E2',
                F3: 'E3',
                F4: 'E4',
                F5: 'E5',
                F6: 'E6',
                F7: 'E7',
                F8: 'E8',
                G1: 'F1',
                G2: 'F2',
                G3: 'F3',
                G4: 'F4',
                G5: 'F5',
                G6: 'F6',
                G7: 'F7',
                G8: 'F8',
                H1: 'G1',
                H2: 'G2',
                H3: 'G3',
                H4: 'G4',
                H5: 'G5',
                H6: 'G6',
                H7: 'G7',
                H8: 'G8',
              },
              RIGHT: {
                A1: 'B1',
                A2: 'B2',
                A3: 'B3',
                A4: 'B4',
                A5: 'B5',
                A6: 'B6',
                A7: 'B7',
                A8: 'B8',
                B1: 'C1',
                B2: 'C2',
                B3: 'C3',
                B4: 'C4',
                B5: 'C5',
                B6: 'C6',
                B7: 'C7',
                B8: 'C8',
                C1: 'D1',
                C2: 'D2',
                C3: 'D3',
                C4: 'D4',
                C5: 'D5',
                C6: 'D6',
                C7: 'D7',
                C8: 'D8',
                D1: 'E1',
                D2: 'E2',
                D3: 'E3',
                D4: 'E4',
                D5: 'E5',
                D6: 'E6',
                D7: 'E7',
                D8: 'E8',
                E1: 'F1',
                E2: 'F2',
                E3: 'F3',
                E4: 'F4',
                E5: 'F5',
                E6: 'F6',
                E7: 'F7',
                E8: 'F8',
                F1: 'G1',
                F2: 'G2',
                F3: 'G3',
                F4: 'G4',
                F5: 'G5',
                F6: 'G6',
                F7: 'G7',
                F8: 'G8',
                G1: 'H1',
                G2: 'H2',
                G3: 'H3',
                G4: 'H4',
                G5: 'H5',
                G6: 'H6',
                G7: 'H7',
                G8: 'H8',
                H1: null,
                H2: null,
                H3: null,
                H4: null,
                H5: null,
                H6: null,
                H7: null,
                H8: null,
              },
              UP_LEFT: {
                A1: null,
                A2: null,
                A3: null,
                A4: null,
                A5: null,
                A6: null,
                A7: null,
                A8: null,
                B1: 'A2',
                B2: 'A3',
                B3: 'A4',
                B4: 'A5',
                B5: 'A6',
                B6: 'A7',
                B7: 'A8',
                B8: null,
                C1: 'B2',
                C2: 'B3',
                C3: 'B4',
                C4: 'B5',
                C5: 'B6',
                C6: 'B7',
                C7: 'B8',
                C8: null,
                D1: 'C2',
                D2: 'C3',
                D3: 'C4',
                D4: 'C5',
                D5: 'C6',
                D6: 'C7',
                D7: 'C8',
                D8: null,
                E1: 'D2',
                E2: 'D3',
                E3: 'D4',
                E4: 'D5',
                E5: 'D6',
                E6: 'D7',
                E7: 'D8',
                E8: null,
                F1: 'E2',
                F2: 'E3',
                F3: 'E4',
                F4: 'E5',
                F5: 'E6',
                F6: 'E7',
                F7: 'E8',
                F8: null,
                G1: 'F2',
                G2: 'F3',
                G3: 'F4',
                G4: 'F5',
                G5: 'F6',
                G6: 'F7',
                G7: 'F8',
                G8: null,
                H1: 'G2',
                H2: 'G3',
                H3: 'G4',
                H4: 'G5',
                H5: 'G6',
                H6: 'G7',
                H7: 'G8',
                H8: null,
              },
              DOWN_RIGHT: {
                A1: null,
                A2: 'B1',
                A3: 'B2',
                A4: 'B3',
                A5: 'B4',
                A6: 'B5',
                A7: 'B6',
                A8: 'B7',
                B1: null,
                B2: 'C1',
                B3: 'C2',
                B4: 'C3',
                B5: 'C4',
                B6: 'C5',
                B7: 'C6',
                B8: 'C7',
                C1: null,
                C2: 'D1',
                C3: 'D2',
                C4: 'D3',
                C5: 'D4',
                C6: 'D5',
                C7: 'D6',
                C8: 'D7',
                D1: null,
                D2: 'E1',
                D3: 'E2',
                D4: 'E3',
                D5: 'E4',
                D6: 'E5',
                D7: 'E6',
                D8: 'E7',
                E1: null,
                E2: 'F1',
                E3: 'F2',
                E4: 'F3',
                E5: 'F4',
                E6: 'F5',
                E7: 'F6',
                E8: 'F7',
                F1: null,
                F2: 'G1',
                F3: 'G2',
                F4: 'G3',
                F5: 'G4',
                F6: 'G5',
                F7: 'G6',
                F8: 'G7',
                G1: null,
                G2: 'H1',
                G3: 'H2',
                G4: 'H3',
                G5: 'H4',
                G6: 'H5',
                G7: 'H6',
                G8: 'H7',
                H1: null,
                H2: null,
                H3: null,
                H4: null,
                H5: null,
                H6: null,
                H7: null,
                H8: null,
              },
              UP_RIGHT: {
                A1: 'B2',
                A2: 'B3',
                A3: 'B4',
                A4: 'B5',
                A5: 'B6',
                A6: 'B7',
                A7: 'B8',
                A8: null,
                B1: 'C2',
                B2: 'C3',
                B3: 'C4',
                B4: 'C5',
                B5: 'C6',
                B6: 'C7',
                B7: 'C8',
                B8: null,
                C1: 'D2',
                C2: 'D3',
                C3: 'D4',
                C4: 'D5',
                C5: 'D6',
                C6: 'D7',
                C7: 'D8',
                C8: null,
                D1: 'E2',
                D2: 'E3',
                D3: 'E4',
                D4: 'E5',
                D5: 'E6',
                D6: 'E7',
                D7: 'E8',
                D8: null,
                E1: 'F2',
                E2: 'F3',
                E3: 'F4',
                E4: 'F5',
                E5: 'F6',
                E6: 'F7',
                E7: 'F8',
                E8: null,
                F1: 'G2',
                F2: 'G3',
                F3: 'G4',
                F4: 'G5',
                F5: 'G6',
                F6: 'G7',
                F7: 'G8',
                F8: null,
                G1: 'H2',
                G2: 'H3',
                G3: 'H4',
                G4: 'H5',
                G5: 'H6',
                G6: 'H7',
                G7: 'H8',
                G8: null,
                H1: null,
                H2: null,
                H3: null,
                H4: null,
                H5: null,
                H6: null,
                H7: null,
                H8: null,
              },
              DOWN_LEFT: {
                A1: null,
                A2: null,
                A3: null,
                A4: null,
                A5: null,
                A6: null,
                A7: null,
                A8: null,
                B1: null,
                B2: 'A1',
                B3: 'A2',
                B4: 'A3',
                B5: 'A4',
                B6: 'A5',
                B7: 'A6',
                B8: 'A7',
                C1: null,
                C2: 'B1',
                C3: 'B2',
                C4: 'B3',
                C5: 'B4',
                C6: 'B5',
                C7: 'B6',
                C8: 'B7',
                D1: null,
                D2: 'C1',
                D3: 'C2',
                D4: 'C3',
                D5: 'C4',
                D6: 'C5',
                D7: 'C6',
                D8: 'C7',
                E1: null,
                E2: 'D1',
                E3: 'D2',
                E4: 'D3',
                E5: 'D4',
                E6: 'D5',
                E7: 'D6',
                E8: 'D7',
                F1: null,
                F2: 'E1',
                F3: 'E2',
                F4: 'E3',
                F5: 'E4',
                F6: 'E5',
                F7: 'E6',
                F8: 'E7',
                G1: null,
                G2: 'F1',
                G3: 'F2',
                G4: 'F3',
                G5: 'F4',
                G6: 'F5',
                G7: 'F6',
                G8: 'F7',
                H1: null,
                H2: 'G1',
                H3: 'G2',
                H4: 'G3',
                H5: 'G4',
                H6: 'G5',
                H7: 'G6',
                H8: 'G7',
              },
            },
            $ = [
              [0, 0, 0, 0, 0, 0, 0, 0],
              [5, 5, 5, 5, 5, 5, 5, 5],
              [1, 1, 2, 3, 3, 2, 1, 1],
              [0.5, 0.5, 1, 2.5, 2.5, 1, 0.5, 0.5],
              [0, 0, 0, 2, 2, 0, 0, 0],
              [0.5, 0, 1, 0, 0, 1, 0, 0.5],
              [0.5, 0, 0, -2, -2, 0, 0, 0.5],
              [0, 0, 0, 0, 0, 0, 0, 0],
            ],
            q = [
              [-4, -3, -2, -2, -2, -2, -3, -4],
              [-3, -2, 0, 0, 0, 0, -2, -3],
              [-2, 0, 1, 1.5, 1.5, 1, 0, -2],
              [-2, 0.5, 1.5, 2, 2, 1.5, 0.5, -2],
              [-2, 0, 1.5, 2, 2, 1.5, 0, -2],
              [-2, 0.5, 1, 1.5, 1.5, 1, 0.5, -2],
              [-3, -2, 0, 0.5, 0.5, 0, -2, -3],
              [-4, -3, -2, -2, -2, -2, -3, -4],
            ],
            J = [
              [-2, -1, -1, -1, -1, -1, -1, -2],
              [-1, 0, 0, 0, 0, 0, 0, -1],
              [-1, 0, 0.5, 1, 1, 0.5, 0, -1],
              [-1, 0.5, 0.5, 1, 1, 0.5, 0.5, -1],
              [-1, 0, 1, 1, 1, 1, 0, -1],
              [-1, 1, 1, 1, 1, 1, 1, -1],
              [-1, 0.5, 0, 0, 0, 0, 0.5, -1],
              [-2, -1, -1, -1, -1, -1, -1, -2],
            ],
            V = [
              [0, 0, 0, 0, 0, 0, 0, 0],
              [0.5, 1, 1, 1, 1, 1, 1, 0.5],
              [-0.5, 0, 0, 0, 0, 0, 0, -0.5],
              [-0.5, 0, 0, 0, 0, 0, 0, -0.5],
              [-0.5, 0, 0, 0, 0, 0, 0, -0.5],
              [-0.5, 0, 0, 0, 0, 0, 0, -0.5],
              [-0.5, 0, 0, 0, 0, 0, 0, -0.5],
              [0, 0, 0, 0.5, 0.5, 0, 0, 0],
            ],
            Y = [
              [-3, -4, -4, -5, -5, -4, -4, -3],
              [-3, -4, -4, -5, -5, -4, -4, -3],
              [-3, -4, -4, -5, -5, -4, -4, -3],
              [-3, -4, -4, -5, -5, -4, -4, -3],
              [-2, -3, -3, -4, -4, -3, -3, -2],
              [-1, -2, -2, -2, -2, -2, -2, -1],
              [2, 2, 0, 0, 0, 0, 2, 2],
              [2, 3, 1, 0, 0, 1, 3, 2],
            ],
            z = [
              [-2, -1, -1, -0.5, -0.5, -1, -1, -2],
              [-1, 0, 0, 0, 0, 0, 0, -1],
              [-1, 0, 0.5, 0.5, 0.5, 0.5, 0, -1],
              [-0.5, 0, 0.5, 0.5, 0.5, 0.5, 0, -0.5],
              [0, 0, 0.5, 0.5, 0.5, 0.5, 0, -0.5],
              [-1, 0.5, 0.5, 0.5, 0.5, 0.5, 0, -1],
              [-1, 0, 0.5, 0, 0, 0, 0, -1],
              [-2, -1, -1, -0.5, -0.5, -1, -1, -2],
            ],
            X = {
              P: $.slice().reverse(),
              p: $,
              N: q.slice().reverse(),
              n: q,
              B: J.slice().reverse(),
              b: J,
              R: V.slice().reverse(),
              r: V,
              K: Y.slice().reverse(),
              k: Y,
              Q: z.slice().reverse(),
              q: z,
            };
          function H(c) {
            return C.UP[c];
          }
          function b(c) {
            return C.DOWN[c];
          }
          function B(c) {
            return C.LEFT[c];
          }
          function F(c) {
            return C.RIGHT[c];
          }
          function k(c) {
            return C.UP_LEFT[c];
          }
          function y(c) {
            return C.UP_RIGHT[c];
          }
          function w(c) {
            return C.DOWN_LEFT[c];
          }
          function O(c) {
            return C.DOWN_RIGHT[c];
          }
          function Z(c) {
            const e = k(c);
            return e ? H(e) : null;
          }
          function ii(c) {
            const e = k(c);
            return e ? B(e) : null;
          }
          function ei(c) {
            const e = y(c);
            return e ? H(e) : null;
          }
          function ti(c) {
            const e = y(c);
            return e ? F(e) : null;
          }
          function ni(c) {
            const e = w(c);
            return e ? b(e) : null;
          }
          function oi(c) {
            const e = w(c);
            return e ? B(e) : null;
          }
          function si(c) {
            const e = O(c);
            return e ? b(e) : null;
          }
          function ri(c) {
            const e = O(c);
            return e ? F(e) : null;
          }
          function ci(c, e) {
            return e === h ? C.UP[c] : C.DOWN[c];
          }
          function T(c, e) {
            return e === h ? C.UP_LEFT[c] : C.DOWN_RIGHT[c];
          }
          function W(c, e) {
            return e === h ? C.UP_RIGHT[c] : C.DOWN_LEFT[c];
          }
          function li(c, e) {
            return e === h ? C.DOWN_LEFT[c] : C.UP_RIGHT[c];
          }
          function ai(c, e) {
            return e === h ? C.DOWN_RIGHT[c] : C.UP_LEFT[c];
          }
          function L(c) {
            return (
              { k: 10, q: 9, r: 5, b: 3, n: 3, p: 1 }[c.toLowerCase()] || 0
            );
          }
          function K(c) {
            return typeof c == 'string' && c.match('^[a-hA-H]{1}[1-8]{1}$');
          }
          const U = -1e3,
            _ = 1e3;
          class N {
            constructor(e = JSON.parse(JSON.stringify(Ci))) {
              if (typeof e == 'object')
                this.configuration = Object.assign({}, j, e);
              else {
                if (typeof e != 'string')
                  throw new Error(
                    `Unknown configuration type ${typeof config}.`
                  );
                this.configuration = Object.assign(
                  {},
                  j,
                  (function (t = '') {
                    const [n, o, i, r, l, s] = t.split(' '),
                      f = {
                        pieces: Object.fromEntries(
                          n.split('/').flatMap((E, M) => {
                            let G = 0;
                            return E.split('').reduce((m, v) => {
                              const ui = v.match(/k|b|q|n|p|r/i);
                              ui &&
                                (m.push([`${a[G]}${g[7 - M]}`, ui[0]]),
                                (G += 1));
                              const hi = v.match(/[1-8]/);
                              return hi && (G += Number(hi)), m;
                            }, []);
                          })
                        ),
                      };
                    return (
                      (f.turn = o === 'b' ? p : h),
                      (f.castling = {
                        whiteLong: !1,
                        whiteShort: !1,
                        blackLong: !1,
                        blackShort: !1,
                      }),
                      i.includes('K') && (f.castling.whiteShort = !0),
                      i.includes('k') && (f.castling.blackShort = !0),
                      i.includes('Q') && (f.castling.whiteLong = !0),
                      i.includes('q') && (f.castling.blackLong = !0),
                      K(r) && (f.enPassant = r.toUpperCase()),
                      (f.halfMove = parseInt(l)),
                      (f.fullMove = parseInt(s)),
                      f
                    );
                  })(e)
                );
              }
              this.configuration.castling ||
                (this.configuration.castling = {
                  whiteShort: !0,
                  blackShort: !0,
                  whiteLong: !0,
                  blackLong: !0,
                }),
                (this.history = []);
            }
            getAttackingFields(e = this.getPlayingColor()) {
              let t = [];
              for (const n in this.configuration.pieces) {
                const o = this.getPiece(n);
                this.getPieceColor(o) === e &&
                  (t = [...t, ...this.getPieceMoves(o, n)]);
              }
              return t;
            }
            isAttackingKing(e = this.getPlayingColor()) {
              let t = null;
              for (const n in this.configuration.pieces) {
                const o = this.getPiece(n);
                if (this.isKing(o) && this.getPieceColor(o) !== e) {
                  t = n;
                  break;
                }
              }
              return this.isPieceUnderAttack(t);
            }
            isPieceUnderAttack(e) {
              const t = this.getPieceOnLocationColor(e),
                n = this.getEnemyColor(t);
              let o = !1,
                i = e,
                r = 0;
              for (; H(i) && !o; ) {
                (i = H(i)), r++;
                const s = this.getPiece(i);
                if (
                  (s &&
                    this.getPieceColor(s) === n &&
                    (this.isRook(s) ||
                      this.isQueen(s) ||
                      (this.isKing(s) && r === 1)) &&
                    (o = !0),
                  s)
                )
                  break;
              }
              for (i = e, r = 0; b(i) && !o; ) {
                (i = b(i)), r++;
                const s = this.getPiece(i);
                if (
                  (s &&
                    this.getPieceColor(s) === n &&
                    (this.isRook(s) ||
                      this.isQueen(s) ||
                      (this.isKing(s) && r === 1)) &&
                    (o = !0),
                  s)
                )
                  break;
              }
              for (i = e, r = 0; B(i) && !o; ) {
                (i = B(i)), r++;
                const s = this.getPiece(i);
                if (
                  (s &&
                    this.getPieceColor(s) === n &&
                    (this.isRook(s) ||
                      this.isQueen(s) ||
                      (this.isKing(s) && r === 1)) &&
                    (o = !0),
                  s)
                )
                  break;
              }
              for (i = e, r = 0; F(i) && !o; ) {
                (i = F(i)), r++;
                const s = this.getPiece(i);
                if (
                  (s &&
                    this.getPieceColor(s) === n &&
                    (this.isRook(s) ||
                      this.isQueen(s) ||
                      (this.isKing(s) && r === 1)) &&
                    (o = !0),
                  s)
                )
                  break;
              }
              for (i = e, r = 0; W(i, t) && !o; ) {
                (i = W(i, t)), r++;
                const s = this.getPiece(i);
                if (
                  (s &&
                    this.getPieceColor(s) === n &&
                    (this.isBishop(s) ||
                      this.isQueen(s) ||
                      (r === 1 && (this.isKing(s) || this.isPawn(s)))) &&
                    (o = !0),
                  s)
                )
                  break;
              }
              for (i = e, r = 0; T(i, t) && !o; ) {
                (i = T(i, t)), r++;
                const s = this.getPiece(i);
                if (
                  (s &&
                    this.getPieceColor(s) === n &&
                    (this.isBishop(s) ||
                      this.isQueen(s) ||
                      (r === 1 && (this.isKing(s) || this.isPawn(s)))) &&
                    (o = !0),
                  s)
                )
                  break;
              }
              for (i = e, r = 0; ai(i, t) && !o; ) {
                (i = ai(i, t)), r++;
                const s = this.getPiece(i);
                if (
                  (s &&
                    this.getPieceColor(s) === n &&
                    (this.isBishop(s) ||
                      this.isQueen(s) ||
                      (this.isKing(s) && r === 1)) &&
                    (o = !0),
                  s)
                )
                  break;
              }
              for (i = e, r = 0; li(i, t) && !o; ) {
                (i = li(i, t)), r++;
                const s = this.getPiece(i);
                if (
                  (s &&
                    this.getPieceColor(s) === n &&
                    (this.isBishop(s) ||
                      this.isQueen(s) ||
                      (this.isKing(s) && r === 1)) &&
                    (o = !0),
                  s)
                )
                  break;
              }
              i = ei(e);
              let l = this.getPiece(i);
              return (
                l &&
                  this.getPieceColor(l) === n &&
                  this.isKnight(l) &&
                  (o = !0),
                (i = ti(e)),
                (l = this.getPiece(i)),
                l &&
                  this.getPieceColor(l) === n &&
                  this.isKnight(l) &&
                  (o = !0),
                (i = ii(e)),
                (l = this.getPiece(i)),
                l &&
                  this.getPieceColor(l) === n &&
                  this.isKnight(l) &&
                  (o = !0),
                (i = Z(e)),
                (l = this.getPiece(i)),
                l &&
                  this.getPieceColor(l) === n &&
                  this.isKnight(l) &&
                  (o = !0),
                (i = ni(e)),
                (l = this.getPiece(i)),
                l &&
                  this.getPieceColor(l) === n &&
                  this.isKnight(l) &&
                  (o = !0),
                (i = oi(e)),
                (l = this.getPiece(i)),
                l &&
                  this.getPieceColor(l) === n &&
                  this.isKnight(l) &&
                  (o = !0),
                (i = si(e)),
                (l = this.getPiece(i)),
                l &&
                  this.getPieceColor(l) === n &&
                  this.isKnight(l) &&
                  (o = !0),
                (i = ri(e)),
                (l = this.getPiece(i)),
                l &&
                  this.getPieceColor(l) === n &&
                  this.isKnight(l) &&
                  (o = !0),
                o
              );
            }
            hasPlayingPlayerCheck() {
              return this.isAttackingKing(this.getNonPlayingColor());
            }
            hasNonPlayingPlayerCheck() {
              return this.isAttackingKing(this.getPlayingColor());
            }
            getLowestValuePieceAttackingLocation(
              e,
              t = this.getPlayingColor()
            ) {
              let n = null;
              for (const o in this.configuration.pieces) {
                const i = this.getPiece(o);
                this.getPieceColor(i) === t &&
                  this.getPieceMoves(i, o).map((r) => {
                    r === e && (n === null || L(i) < n) && (n = L(i));
                  });
              }
              return n;
            }
            getMoves(e = this.getPlayingColor(), t = null) {
              const n = {};
              let o = 0;
              for (const l in this.configuration.pieces) {
                const s = this.getPiece(l);
                if (this.getPieceColor(s) === e) {
                  const f = this.getPieceMoves(s, l);
                  f.length && o++, Object.assign(n, { [l]: f });
                }
              }
              const i = this.getAttackingFields(this.getNonPlayingColor());
              if (
                (this.isLeftCastlingPossible(i) &&
                  (this.isPlayingWhite() && n.E1.push('C1'),
                  this.isPlayingBlack() && n.E8.push('C8')),
                this.isRightCastlingPossible(i) &&
                  (this.isPlayingWhite() && n.E1.push('G1'),
                  this.isPlayingBlack() && n.E8.push('G8')),
                t && o > t)
              )
                return n;
              const r = {};
              for (const l in n)
                n[l].map((s) => {
                  const f = {
                      pieces: Object.assign({}, this.configuration.pieces),
                      castling: Object.assign({}, this.configuration.castling),
                    },
                    E = new N(f);
                  E.move(l, s),
                    ((this.isPlayingWhite() && !E.isAttackingKing(p)) ||
                      (this.isPlayingBlack() && !E.isAttackingKing(h))) &&
                      (r[l] || (r[l] = []), r[l].push(s));
                });
              return (
                Object.keys(r).length ||
                  ((this.configuration.isFinished = !0),
                  this.hasPlayingPlayerCheck() &&
                    (this.configuration.checkMate = !0)),
                r
              );
            }
            isLeftCastlingPossible(e) {
              if (
                (this.isPlayingWhite() &&
                  !this.configuration.castling.whiteLong) ||
                (this.isPlayingBlack() &&
                  !this.configuration.castling.blackLong)
              )
                return !1;
              let t = null;
              if (
                (this.isPlayingWhite() &&
                this.getPiece('E1') === 'K' &&
                this.getPiece('A1') === 'R' &&
                !e.includes('E1')
                  ? (t = 'E1')
                  : this.isPlayingBlack() &&
                    this.getPiece('E8') === 'k' &&
                    this.getPiece('A8') === 'r' &&
                    !e.includes('E8') &&
                    (t = 'E8'),
                !t)
              )
                return !1;
              let n = B(t);
              return (
                !this.getPiece(n) &&
                !e.includes(n) &&
                ((n = B(n)),
                !this.getPiece(n) &&
                  !e.includes(n) &&
                  ((n = B(n)), !this.getPiece(n)))
              );
            }
            isRightCastlingPossible(e) {
              if (
                (this.isPlayingWhite() &&
                  !this.configuration.castling.whiteShort) ||
                (this.isPlayingBlack() &&
                  !this.configuration.castling.blackShort)
              )
                return !1;
              let t = null;
              if (
                (this.isPlayingWhite() &&
                this.getPiece('E1') === 'K' &&
                this.getPiece('H1') === 'R' &&
                !e.includes('E1')
                  ? (t = 'E1')
                  : this.isPlayingBlack() &&
                    this.getPiece('E8') === 'k' &&
                    this.getPiece('H8') === 'r' &&
                    !e.includes('E8') &&
                    (t = 'E8'),
                !t)
              )
                return !1;
              let n = F(t);
              return (
                !this.getPiece(n) &&
                !e.includes(n) &&
                ((n = F(n)), !this.getPiece(n) && !e.includes(n))
              );
            }
            getPieceMoves(e, t) {
              return this.isPawn(e)
                ? this.getPawnMoves(e, t)
                : this.isKnight(e)
                ? this.getKnightMoves(e, t)
                : this.isRook(e)
                ? this.getRookMoves(e, t)
                : this.isBishop(e)
                ? this.getBishopMoves(e, t)
                : this.isQueen(e)
                ? this.getQueenMoves(e, t)
                : this.isKing(e)
                ? this.getKingMoves(e, t)
                : [];
            }
            isPawn(e) {
              return e.toUpperCase() === 'P';
            }
            isKnight(e) {
              return e.toUpperCase() === 'N';
            }
            isRook(e) {
              return e.toUpperCase() === 'R';
            }
            isBishop(e) {
              return e.toUpperCase() === 'B';
            }
            isQueen(e) {
              return e.toUpperCase() === 'Q';
            }
            isKing(e) {
              return e.toUpperCase() === 'K';
            }
            getPawnMoves(e, t) {
              const n = [],
                o = this.getPieceColor(e);
              let i = ci(t, o);
              return (
                i &&
                  !this.getPiece(i) &&
                  (n.push(i),
                  (i = ci(i, o)),
                  (function (r, l) {
                    return (
                      (r === h && l[1] === '2') || (r === p && l[1] === '7')
                    );
                  })(o, t) &&
                    i &&
                    !this.getPiece(i) &&
                    n.push(i)),
                (i = T(t, o)),
                i &&
                  ((this.getPiece(i) &&
                    this.getPieceOnLocationColor(i) !== o) ||
                    i === this.configuration.enPassant) &&
                  n.push(i),
                (i = W(t, o)),
                i &&
                  ((this.getPiece(i) &&
                    this.getPieceOnLocationColor(i) !== o) ||
                    i === this.configuration.enPassant) &&
                  n.push(i),
                n
              );
            }
            getKnightMoves(e, t) {
              const n = [],
                o = this.getPieceColor(e);
              let i = ei(t);
              return (
                i && this.getPieceOnLocationColor(i) !== o && n.push(i),
                (i = ti(t)),
                i && this.getPieceOnLocationColor(i) !== o && n.push(i),
                (i = Z(t)),
                i && this.getPieceOnLocationColor(i) !== o && n.push(i),
                (i = ii(t)),
                i && this.getPieceOnLocationColor(i) !== o && n.push(i),
                (i = oi(t)),
                i && this.getPieceOnLocationColor(i) !== o && n.push(i),
                (i = ni(t)),
                i && this.getPieceOnLocationColor(i) !== o && n.push(i),
                (i = ri(t)),
                i && this.getPieceOnLocationColor(i) !== o && n.push(i),
                (i = si(t)),
                i && this.getPieceOnLocationColor(i) !== o && n.push(i),
                n
              );
            }
            getRookMoves(e, t) {
              const n = [],
                o = this.getPieceColor(e);
              let i = t;
              for (; H(i); ) {
                i = H(i);
                const r = this.getPieceOnLocationColor(i);
                if ((this.getPieceOnLocationColor(i) !== o && n.push(i), r))
                  break;
              }
              for (i = t; b(i); ) {
                i = b(i);
                const r = this.getPieceOnLocationColor(i);
                if ((this.getPieceOnLocationColor(i) !== o && n.push(i), r))
                  break;
              }
              for (i = t; F(i); ) {
                i = F(i);
                const r = this.getPieceOnLocationColor(i);
                if ((this.getPieceOnLocationColor(i) !== o && n.push(i), r))
                  break;
              }
              for (i = t; B(i); ) {
                i = B(i);
                const r = this.getPieceOnLocationColor(i);
                if ((this.getPieceOnLocationColor(i) !== o && n.push(i), r))
                  break;
              }
              return n;
            }
            getBishopMoves(e, t) {
              const n = [],
                o = this.getPieceColor(e);
              let i = t;
              for (; k(i); ) {
                i = k(i);
                const r = this.getPieceOnLocationColor(i);
                if ((this.getPieceOnLocationColor(i) !== o && n.push(i), r))
                  break;
              }
              for (i = t; y(i); ) {
                i = y(i);
                const r = this.getPieceOnLocationColor(i);
                if ((this.getPieceOnLocationColor(i) !== o && n.push(i), r))
                  break;
              }
              for (i = t; w(i); ) {
                i = w(i);
                const r = this.getPieceOnLocationColor(i);
                if ((this.getPieceOnLocationColor(i) !== o && n.push(i), r))
                  break;
              }
              for (i = t; O(i); ) {
                i = O(i);
                const r = this.getPieceOnLocationColor(i);
                if ((this.getPieceOnLocationColor(i) !== o && n.push(i), r))
                  break;
              }
              return n;
            }
            getQueenMoves(e, t) {
              return [...this.getRookMoves(e, t), ...this.getBishopMoves(e, t)];
            }
            getKingMoves(e, t) {
              const n = [],
                o = this.getPieceColor(e);
              let i = t;
              return (
                (i = H(i)),
                i && this.getPieceOnLocationColor(i) !== o && n.push(i),
                (i = t),
                (i = F(i)),
                i && this.getPieceOnLocationColor(i) !== o && n.push(i),
                (i = t),
                (i = b(i)),
                i && this.getPieceOnLocationColor(i) !== o && n.push(i),
                (i = t),
                (i = B(i)),
                i && this.getPieceOnLocationColor(i) !== o && n.push(i),
                (i = t),
                (i = k(i)),
                i && this.getPieceOnLocationColor(i) !== o && n.push(i),
                (i = t),
                (i = y(i)),
                i && this.getPieceOnLocationColor(i) !== o && n.push(i),
                (i = t),
                (i = w(i)),
                i && this.getPieceOnLocationColor(i) !== o && n.push(i),
                (i = t),
                (i = O(i)),
                i && this.getPieceOnLocationColor(i) !== o && n.push(i),
                n
              );
            }
            getPieceColor(e) {
              return e.toUpperCase() === e ? h : p;
            }
            getPieceOnLocationColor(e) {
              const t = this.getPiece(e);
              return t ? (t.toUpperCase() === t ? h : p) : null;
            }
            getPiece(e) {
              return this.configuration.pieces[e];
            }
            setPiece(e, t) {
              if (
                !(function (n) {
                  return Object.values(A).includes(n);
                })(t)
              )
                throw new Error('Invalid piece ' + t);
              if (!K(e)) throw new Error('Invalid location ' + e);
              this.configuration.pieces[e.toUpperCase()] = t;
            }
            removePiece(e) {
              if (!K(e)) throw new Error('Invalid location ' + e);
              delete this.configuration.pieces[e.toUpperCase()];
            }
            isEmpty(e) {
              if (!K(e)) throw new Error('Invalid location ' + e);
              return !this.configuration.pieces[e.toUpperCase()];
            }
            getEnemyColor(e) {
              return e === h ? p : h;
            }
            getPlayingColor() {
              return this.configuration.turn;
            }
            getNonPlayingColor() {
              return this.isPlayingWhite() ? p : h;
            }
            isPlayingWhite() {
              return this.configuration.turn === h;
            }
            isPlayingBlack() {
              return this.configuration.turn === p;
            }
            addMoveToHistory(e, t) {
              this.history.push({
                from: e,
                to: t,
                configuration: JSON.parse(JSON.stringify(this.configuration)),
              });
            }
            move(e, t) {
              const n = this.getPiece(e),
                o = this.getPiece(t);
              if (!n) throw new Error('There is no piece at ' + e);
              var i, r;
              if (
                (Object.assign(this.configuration.pieces, { [t]: n }),
                delete this.configuration.pieces[e],
                this.isPlayingWhite() &&
                  this.isPawn(n) &&
                  t[1] === '8' &&
                  Object.assign(this.configuration.pieces, { [t]: 'Q' }),
                this.isPlayingBlack() &&
                  this.isPawn(n) &&
                  t[1] === '1' &&
                  Object.assign(this.configuration.pieces, { [t]: 'q' }),
                this.isPawn(n) &&
                  t === this.configuration.enPassant &&
                  delete this.configuration.pieces[
                    ((i = t),
                    (r = this.getPlayingColor()),
                    r === h ? C.DOWN[i] : C.UP[i])
                  ],
                this.isPawn(n) &&
                this.isPlayingWhite() &&
                e[1] === '2' &&
                t[1] === '4'
                  ? (this.configuration.enPassant = e[0] + '3')
                  : this.isPawn(n) &&
                    this.isPlayingBlack() &&
                    e[1] === '7' &&
                    t[1] === '5'
                  ? (this.configuration.enPassant = e[0] + '6')
                  : (this.configuration.enPassant = null),
                e === 'E1' &&
                  Object.assign(this.configuration.castling, {
                    whiteLong: !1,
                    whiteShort: !1,
                  }),
                e === 'E8' &&
                  Object.assign(this.configuration.castling, {
                    blackLong: !1,
                    blackShort: !1,
                  }),
                e === 'A1' &&
                  Object.assign(this.configuration.castling, { whiteLong: !1 }),
                e === 'H1' &&
                  Object.assign(this.configuration.castling, {
                    whiteShort: !1,
                  }),
                e === 'A8' &&
                  Object.assign(this.configuration.castling, { blackLong: !1 }),
                e === 'H8' &&
                  Object.assign(this.configuration.castling, {
                    blackShort: !1,
                  }),
                this.isKing(n))
              ) {
                if (e === 'E1' && t === 'C1') return this.move('A1', 'D1');
                if (e === 'E8' && t === 'C8') return this.move('A8', 'D8');
                if (e === 'E1' && t === 'G1') return this.move('H1', 'F1');
                if (e === 'E8' && t === 'G8') return this.move('H8', 'F8');
              }
              (this.configuration.turn = this.isPlayingWhite() ? p : h),
                this.isPlayingWhite() && this.configuration.fullMove++,
                this.configuration.halfMove++,
                (o || this.isPawn(n)) && (this.configuration.halfMove = 0);
            }
            exportJson() {
              return {
                moves: this.getMoves(),
                pieces: this.configuration.pieces,
                turn: this.configuration.turn,
                isFinished: this.configuration.isFinished,
                check: this.hasPlayingPlayerCheck(),
                checkMate: this.configuration.checkMate,
                castling: this.configuration.castling,
                enPassant: this.configuration.enPassant,
                halfMove: this.configuration.halfMove,
                fullMove: this.configuration.fullMove,
              };
            }
            calculateAiMove(e) {
              return this.calculateAiMoves(e)[0];
            }
            calculateAiMoves(e) {
              if (((e = parseInt(e)), !x.includes(e)))
                throw new Error(
                  `Invalid level ${e}. You can choose ${x.join(',')}`
                );
              this.shouldIncreaseLevel() && e++;
              const t = [],
                n = this.calculateScore(this.getPlayingColor()),
                o = this.getMoves();
              for (const i in o)
                o[i].map((r) => {
                  const l = this.getTestBoard(),
                    s = Boolean(l.getPiece(r));
                  l.move(i, r),
                    t.push({
                      from: i,
                      to: r,
                      score:
                        l.testMoveScores(
                          this.getPlayingColor(),
                          e,
                          s,
                          s ? l.calculateScore(this.getPlayingColor()) : n,
                          r
                        ).score +
                        l.calculateScoreByPiecesLocation(
                          this.getPlayingColor()
                        ) +
                        Math.floor(
                          Math.random() *
                            (this.configuration.halfMove > 10
                              ? this.configuration.halfMove - 10
                              : 1) *
                            10
                        ) /
                          10,
                    });
                });
              return (
                t.sort((i, r) =>
                  i.score < r.score ? 1 : i.score > r.score ? -1 : 0
                ),
                t
              );
            }
            shouldIncreaseLevel() {
              return this.getIngamePiecesValue() < 50;
            }
            getIngamePiecesValue() {
              let e = 0;
              for (const t in this.configuration.pieces)
                e += L(this.getPiece(t));
              return e;
            }
            getTestBoard() {
              const e = {
                pieces: Object.assign({}, this.configuration.pieces),
                castling: Object.assign({}, this.configuration.castling),
                turn: this.configuration.turn,
                enPassant: this.configuration.enPassant,
              };
              return new N(e);
            }
            testMoveScores(e, t, n, o, i, r = 1) {
              let l = null;
              if (
                (r < Q[t] && this.hasPlayingPlayerCheck()
                  ? (l = this.getMoves(this.getPlayingColor()))
                  : (r < fi[t] || (n && r < Q[t])) &&
                    (l = this.getMoves(this.getPlayingColor(), 5)),
                this.configuration.isFinished)
              )
                return {
                  score:
                    this.calculateScore(e) +
                    (this.getPlayingColor() === e ? r : -r),
                  max: !0,
                };
              if (!l)
                return o !== null
                  ? { score: o, max: !1 }
                  : { score: this.calculateScore(e), max: !1 };
              let s = this.getPlayingColor() === e ? U : _,
                f = !1;
              for (const E in l)
                f ||
                  l[E].map((M) => {
                    if (f) return;
                    const G = this.getTestBoard(),
                      m = Boolean(G.getPiece(M));
                    if ((G.move(E, M), G.hasNonPlayingPlayerCheck())) return;
                    const v = G.testMoveScores(
                      e,
                      t,
                      m,
                      m ? G.calculateScore(e) : o,
                      M,
                      r + 1
                    );
                    v.max && (f = !0),
                      (s =
                        this.getPlayingColor() === e
                          ? Math.max(s, v.score)
                          : Math.min(s, v.score));
                  });
              return { score: s, max: !1 };
            }
            calculateScoreByPiecesLocation(e = this.getPlayingColor()) {
              const t = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7 };
              let n = 0;
              for (const o in this.configuration.pieces) {
                const i = this.getPiece(o);
                if (X[i]) {
                  const r = X[i][o[1] - 1][t[o[0]]];
                  n += 0.5 * (this.getPieceColor(i) === e ? r : -r);
                }
              }
              return n;
            }
            calculateScore(e = this.getPlayingColor()) {
              let t = 0;
              if (this.configuration.checkMate)
                return this.getPlayingColor() === e ? U : _;
              if (this.configuration.isFinished)
                return this.getPlayingColor() === e ? _ : U;
              for (const n in this.configuration.pieces) {
                const o = this.getPiece(n);
                this.getPieceColor(o) === e
                  ? (t += 10 * L(o))
                  : (t -= 10 * L(o));
              }
              return t;
            }
          }
          class d {
            constructor(e) {
              this.board = new N(e);
            }
            move(e, t) {
              (e = e.toUpperCase()), (t = t.toUpperCase());
              const n = this.board.getMoves();
              if (!n[e] || !n[e].includes(t))
                throw new Error(
                  `Invalid move from ${e} to ${t} for ${this.board.getPlayingColor()}`
                );
              return (
                this.board.addMoveToHistory(e, t),
                this.board.move(e, t),
                { [e]: t }
              );
            }
            moves(e = null) {
              return (
                (e
                  ? this.board.getMoves()[e.toUpperCase()]
                  : this.board.getMoves()) || []
              );
            }
            setPiece(e, t) {
              this.board.setPiece(e, t);
            }
            removePiece(e) {
              this.board.removePiece(e);
            }
            aiMove(e = 2) {
              const t = this.board.calculateAiMove(e);
              return this.move(t.from, t.to);
            }
            getHistory(e = !1) {
              return e ? this.board.history.reverse() : this.board.history;
            }
            printToConsole() {
              (function (e) {
                process.stdout.write(`
`);
                let t = h;
                Object.assign([], g)
                  .reverse()
                  .map((n) => {
                    process.stdout.write('' + n),
                      a.map((o) => {
                        switch (e.pieces[`${o}${n}`]) {
                          case 'K':
                            process.stdout.write('\u265A');
                            break;
                          case 'Q':
                            process.stdout.write('\u265B');
                            break;
                          case 'R':
                            process.stdout.write('\u265C');
                            break;
                          case 'B':
                            process.stdout.write('\u265D');
                            break;
                          case 'N':
                            process.stdout.write('\u265E');
                            break;
                          case 'P':
                            process.stdout.write('\u265F');
                            break;
                          case 'k':
                            process.stdout.write('\u2654');
                            break;
                          case 'q':
                            process.stdout.write('\u2655');
                            break;
                          case 'r':
                            process.stdout.write('\u2656');
                            break;
                          case 'b':
                            process.stdout.write('\u2657');
                            break;
                          case 'n':
                            process.stdout.write('\u2658');
                            break;
                          case 'p':
                            process.stdout.write('\u2659');
                            break;
                          default:
                            process.stdout.write(t === h ? '\u2588' : '\u2591');
                        }
                        t = t === h ? p : h;
                      }),
                      (t = t === h ? p : h),
                      process.stdout.write(`
`);
                  }),
                  process.stdout.write(' '),
                  a.map((n) => {
                    process.stdout.write('' + n);
                  }),
                  process.stdout.write(`
`);
              })(this.board.configuration);
            }
            exportJson() {
              return this.board.exportJson();
            }
            exportFEN() {
              return (function (e) {
                let t = '';
                Object.assign([], g)
                  .reverse()
                  .map((l) => {
                    let s = 0;
                    l < 8 && (t += '/'),
                      a.map((f) => {
                        const E = e.pieces[`${f}${l}`];
                        E
                          ? (s && ((t += s.toString()), (s = 0)), (t += E))
                          : s++;
                      }),
                      (t += '' + (s || ''));
                  }),
                  (t += e.turn === h ? ' w ' : ' b ');
                const {
                  whiteShort: n,
                  whiteLong: o,
                  blackLong: i,
                  blackShort: r,
                } = e.castling;
                return (
                  o || n || i || r
                    ? (n && (t += 'K'),
                      o && (t += 'Q'),
                      r && (t += 'k'),
                      i && (t += 'q'))
                    : (t += '-'),
                  (t += ' ' + (e.enPassant ? e.enPassant.toLowerCase() : '-')),
                  (t += ' ' + e.halfMove),
                  (t += ' ' + e.fullMove),
                  t
                );
              })(this.board.configuration);
            }
          }
          function Pi(c) {
            if (!c) throw new Error('Configuration param required.');
            return new d(c).moves();
          }
          function pi(c) {
            if (!c) throw new Error('Configuration param required.');
            return new d(c).exportJson();
          }
          function Ei(c) {
            if (!c) throw new Error('Configuration param required.');
            return new d(c).exportFEN();
          }
          function Bi(c, e, t) {
            if (!c) throw new Error('Configuration param required.');
            const n = new d(c);
            return (
              n.move(e, t),
              typeof c == 'object' ? n.exportJson() : n.exportFEN()
            );
          }
          function Fi(c, e = 2) {
            if (!c) throw new Error('Configuration param required.');
            const t = new d(c).board.calculateAiMove(e);
            return { [t.from]: t.to };
          }
        },
      ]);
    });
  })(R),
    (self.onmessage = ({ data: { fen: S, level: I } }) => {
      const D = new R.exports.Game(S).aiMove(I),
        P = Object.keys(D)[0].toLowerCase(),
        u = D[Object.keys(D)[0]].toLowerCase();
      self.postMessage({ aiMove: { from: P, to: u } });
    });
})();
