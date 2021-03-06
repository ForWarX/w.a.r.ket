﻿var $JssorSlideshowFormations$ = window.$JssorSlideshowFormations$ = new function() {
        function d(b, d, g) {
            g.push(d);
            b[d] = b[d] || [];
            b[d].push(g)
        }
        this.$FormationStraight = function(b) {
            var p = b.$Cols,
                g = b.$Rows,
                q = b.$Assembly,
                m = [],
                c = 0,
                e = 0,
                f = p - 1,
                n = g - 1;
            b = b.$Count - 1;
            for (var l, e = 0; e < g; e++)
                for (c = 0; c < p; c++) {
                    switch (q) {
                        case 2049:
                            l = b - (c * g + (n - e));
                            break;
                        case 1028:
                            l = b - (e * p + (f - c));
                            break;
                        case 513:
                        case 260:
                            l = b - (e * p + c);
                            break;
                        case 2050:
                            l = c * g + e;
                            break;
                        case 264:
                            l = e * p + (f - c);
                            break;
                        case 514:
                            l = c * g + (n - e);
                            break;
                        default:
                            l = e * p + c
                    }
                    d(m, l, [e, c])
                }
            return m
        };
        this.$FormationSwirl = function(b) {
            var p = b.$Cols,
                g = b.$Rows,
                q = b.$Count,
                m = [],
                c = [],
                e = 0,
                f = 0,
                n = 0,
                f = p - 1,
                e = g - 1,
                l, k = 0;
            switch (b.$Assembly) {
                case 2049:
                    n = 0;
                    l = [2, 1, 3, 0];
                    break;
                case 1028:
                    f = 0;
                    n = e;
                    l = [0, 3, 1, 2];
                    break;
                case 513:
                    n = e;
                    l = [3, 1, 2, 0];
                    break;
                case 260:
                    n = e;
                    l = [1, 3, 0, 2];
                    break;
                case 2050:
                    n = f = 0;
                    l = [2, 0, 3, 1];
                    break;
                case 264:
                    n = 0;
                    l = [1, 2, 0, 3];
                    break;
                case 514:
                    f = 0;
                    n = e;
                    l = [3, 0, 2, 1];
                    break;
                default:
                    n = f = 0, l = [0, 2, 1, 3]
            }
            for (e = 0; e < q;) {
                b = n + "," + f;
                if (0 <= f && f < p && 0 <= n && n < g && !c[b]) c[b] = !0, d(m, e++, [n, f]);
                else switch (l[k++ % l.length]) {
                    case 0:
                        f--;
                        break;
                    case 2:
                        n--;
                        break;
                    case 1:
                        f++;
                        break;
                    case 3:
                        n++
                }
                switch (l[k % l.length]) {
                    case 0:
                        f++;
                        break;
                    case 2:
                        n++;
                        break;
                    case 1:
                        f--;
                        break;
                    case 3:
                        n--
                }
            }
            return m
        };
        this.$FormationZigZag = function(b) {
            var p = b.$Cols,
                g = b.$Rows,
                q = b.$Count,
                m = [],
                c = 0,
                e = 0,
                f = 0,
                e = p - 1,
                c = g - 1,
                n, l = 0;
            switch (b.$Assembly) {
                case 2049:
                    f = 0;
                    n = [2, 1, 3, 1];
                    break;
                case 1028:
                    e = 0;
                    f = c;
                    n = [0, 3, 1, 3];
                    break;
                case 513:
                    f = c;
                    n = [3, 1, 2, 1];
                    break;
                case 260:
                    f = c;
                    n = [1, 3, 0, 3];
                    break;
                case 2050:
                    f = e = 0;
                    n = [2, 0, 3, 0];
                    break;
                case 264:
                    f = 0;
                    n = [1, 2, 0, 2];
                    break;
                case 514:
                    e = 0;
                    f = c;
                    n = [3, 0, 2, 0];
                    break;
                default:
                    f =
                        e = 0, n = [0, 2, 1, 2]
            }
            for (c = 0; c < q;)
                if (b = f + "," + e, 0 <= e && e < p && 0 <= f && f < g && "undefined" == typeof m[b]) switch (d(m, c++, [f, e]), n[l % n.length]) {
                    case 0:
                        e++;
                        break;
                    case 2:
                        f++;
                        break;
                    case 1:
                        e--;
                        break;
                    case 3:
                        f--
                } else {
                    switch (n[l++ % n.length]) {
                        case 0:
                            e--;
                            break;
                        case 2:
                            f--;
                            break;
                        case 1:
                            e++;
                            break;
                        case 3:
                            f++
                    }
                    switch (n[l++ % n.length]) {
                        case 0:
                            e++;
                            break;
                        case 2:
                            f++;
                            break;
                        case 1:
                            e--;
                            break;
                        case 3:
                            f--
                    }
                }
                return m
        };
        this.$FormationStraightStairs = function(b) {
            var p = b.$Assembly,
                g = b.$Count,
                q = [],
                m = 0,
                c = 0,
                e = 0,
                f = b.$Cols - 1;
            b = b.$Rows - 1;
            var n = g - 1;
            switch (p) {
                case 2049:
                case 514:
                case 513:
                case 2050:
                    var l =
                        0,
                        k = 0;
                    break;
                case 264:
                case 1028:
                case 260:
                case 1032:
                    l = f;
                    k = 0;
                    break;
                default:
                    p = 1032, l = f, k = 0
            }
            c = l;
            for (e = k; m < g;) {
                4 == (p & 4) || 2 == (p & 2) ? d(q, n - m++, [e, c]) : d(q, m++, [e, c]);
                switch (p) {
                    case 2049:
                    case 514:
                        c--;
                        e++;
                        break;
                    case 513:
                    case 2050:
                        c++;
                        e--;
                        break;
                    case 264:
                    case 1028:
                        c--;
                        e--;
                        break;
                    default:
                        c++, e++
                }
                if (0 > c || 0 > e || c > f || e > b) {
                    switch (p) {
                        case 2049:
                        case 514:
                            l++;
                            break;
                        case 264:
                        case 1028:
                        case 513:
                        case 2050:
                            k++;
                            break;
                        default:
                            l--
                    }
                    if (0 > l || 0 > k || l > f || k > b) {
                        switch (p) {
                            case 2049:
                            case 514:
                                l = f;
                                k++;
                                break;
                            case 513:
                            case 2050:
                                k = b;
                                l++;
                                break;
                            case 264:
                            case 1028:
                                k = b;
                                l--;
                                break;
                            default:
                                l = 0, k++
                        }
                        k > b ? k = b : 0 > k ? k = 0 : l > f ? l = f : 0 > l && (l = 0)
                    }
                    e = k;
                    c = l
                }
            }
            return q
        };
        this.$FormationSquare = function(b) {
            var p = b.$Cols || 1;
            b = b.$Rows || 1;
            var g = [],
                q, m, c, e, f;
            c = p < b ? (b - p) / 2 : 0;
            e = p > b ? (p - b) / 2 : 0;
            f = Math.round(Math.max(p / 2, b / 2)) + 1;
            for (q = 0; q < p; q++)
                for (m = 0; m < b; m++) d(g, f - Math.min(q + 1 + c, m + 1 + e, p - q + c, b - m + e), [m, q]);
            return g
        };
        this.$FormationRectangle = function(b) {
            var p = b.$Cols || 1;
            b = b.$Rows || 1;
            var g = [],
                q, m, c;
            c = Math.round(Math.min(p / 2, b / 2)) + 1;
            for (q = 0; q < p; q++)
                for (m = 0; m < b; m++) d(g, c - Math.min(q +
                    1, m + 1, p - q, b - m), [m, q]);
            return g
        };
        this.$FormationRandom = function(b) {
            var p = [],
                g, q;
            for (g = 0; g < b.$Rows; g++)
                for (q = 0; q < b.$Cols; q++) d(p, Math.ceil(1E5 * Math.random()) % 13, [g, q]);
            return p
        };
        this.$FormationCircle = function(b) {
            var p = b.$Cols || 1;
            b = b.$Rows || 1;
            var g = [],
                q, m, c = p / 2 - .5,
                e = b / 2 - .5;
            for (q = 0; q < p; q++)
                for (m = 0; m < b; m++) d(g, Math.round(Math.sqrt(Math.pow(q - c, 2) + Math.pow(m - e, 2))), [m, q]);
            return g
        };
        this.$FormationCross = function(b) {
            var p = b.$Cols || 1;
            b = b.$Rows || 1;
            var g = [],
                q, m, c = p / 2 - .5,
                e = b / 2 - .5;
            for (q = 0; q < p; q++)
                for (m = 0; m < b; m++) d(g,
                    Math.round(Math.min(Math.abs(q - c), Math.abs(m - e))), [m, q]);
            return g
        };
        this.$FormationRectangleCross = function(b) {
            var p = b.$Cols || 1;
            b = b.$Rows || 1;
            var g = [],
                q, m, c = p / 2 - .5,
                e = b / 2 - .5,
                f = Math.max(c, e) + 1;
            for (q = 0; q < p; q++)
                for (m = 0; m < b; m++) d(g, Math.round(f - Math.max(c - Math.abs(q - c), e - Math.abs(m - e))) - 1, [m, q]);
            return g
        }
    },
    $JssorSlideshowRunner$ = window.$JssorSlideshowRunner$ = function(d, b, p, g, q) {
        function m(b, r) {
            var a = {
                $Interval: r,
                $Duration: 1,
                $Delay: 0,
                $Cols: 1,
                $Rows: 1,
                $Opacity: 0,
                $Zoom: 0,
                $Clip: 0,
                $Move: !1,
                $SlideOut: !1,
                $Reverse: !1,
                $Formation: $JssorSlideshowFormations$.$FormationRandom,
                $Assembly: 1032,
                $ChessMode: {
                    $Column: 0,
                    $Row: 0
                },
                $Easing: $JssorEasing$.$EaseSwing,
                $Round: {},
                $Blocks: [],
                $During: {}
            };
            $Jssor$.$Extend(a, b);
            a.$Count = a.$Cols * a.$Rows;
            $Jssor$.$IsFunction(a.$Easing) && (a.$Easing = {
                $Default: a.$Easing
            });
            a.$FramesCount = Math.ceil(a.$Duration / a.$Interval);
            a.$GetBlocks = function(b, r) {
                b /= a.$Cols;
                r /= a.$Rows;
                var h = b + "x" + r;
                if (!a.$Blocks[h]) {
                    a.$Blocks[h] = {
                        $Width: b,
                        $Height: r
                    };
                    for (var e = 0; e < a.$Cols; e++)
                        for (var c = 0; c < a.$Rows; c++) a.$Blocks[h][c +
                            "," + e
                        ] = {
                            $Top: c * r,
                            $Right: e * b + b,
                            $Bottom: c * r + r,
                            $Left: e * b
                        }
                }
                return a.$Blocks[h]
            };
            a.$Brother && (a.$Brother = m(a.$Brother, r), a.$SlideOut = !0);
            return a
        }

        function c(b, r, a, e, c, h) {
            function f(a) {
                $Jssor$.$DisableHWA(a);
                a = $Jssor$.$Children(a);
                $Jssor$.$Each(a, function(a) {
                    f(a)
                })
            }
            var d, u = {},
                l = {},
                k = [],
                m, n, v, p = a.$ChessMode.$Column || 0,
                q = a.$ChessMode.$Row || 0,
                g = a.$GetBlocks(c, h),
                t = function(a) {
                    var b = a.$Formation(a);
                    return a.$Reverse ? b.reverse() : b
                }(a),
                x = a.$Duration + a.$Delay * (t.length - 1),
                w, Z = a.$SlideOut,
                pa;
            this.$EndTime = w = e +
                x + 50;
            this.$ShowFrame = function(b) {
                b -= e;
                var h = b < x;
                if (h || pa) {
                    pa = h;
                    Z || (b = x - b);
                    var c = Math.ceil(b / a.$Interval);
                    $Jssor$.$Each(l, function(a, b) {
                        var h = Math.max(c, a.$Min),
                            h = Math.min(h, a.length - 1);
                        a.$LastFrameIndex != h && (a.$LastFrameIndex || Z ? h == a.$Max && Z && $Jssor$.$HideElement(k[b]) : $Jssor$.$ShowElement(k[b]), a.$LastFrameIndex = h, $Jssor$.$SetStylesEx(k[b], a[h]))
                    })
                }
            };
            r = $Jssor$.$CloneNode(r);
            f(r);
            if ($Jssor$.$IsBrowserIe9Earlier()) {
                var ua = !r["no-image"];
                w = $Jssor$.$FindChildrenByTag(r);
                $Jssor$.$Each(w, function(a) {
                    (ua ||
                        a["jssor-slider"]) && $Jssor$.$CssOpacity(a, $Jssor$.$CssOpacity(a), !0)
                })
            }
            $Jssor$.$Each(t, function(b, r) {
                $Jssor$.$Each(b, function(b) {
                    var e = b[0],
                        f = b[1];
                    b = e + "," + f;
                    var k = !1,
                        t = !1,
                        y = !1;
                    p && f % 2 && ($JssorDirection$.$IsHorizontal(p) && (k = !k), $JssorDirection$.$IsVertical(p) && (t = !t), p & 16 && (y = !y));
                    q && e % 2 && ($JssorDirection$.$IsHorizontal(q) && (k = !k), $JssorDirection$.$IsVertical(q) && (t = !t), q & 16 && (y = !y));
                    a.$Top = a.$Top || a.$Clip & 4;
                    a.$Bottom = a.$Bottom || a.$Clip & 8;
                    a.$Left = a.$Left || a.$Clip & 1;
                    a.$Right = a.$Right || a.$Clip & 2;
                    var e =
                        t ? a.$Bottom : a.$Top,
                        f = t ? a.$Top : a.$Bottom,
                        x = k ? a.$Right : a.$Left,
                        A = k ? a.$Left : a.$Right;
                    a.$Clip = e || f || x || A;
                    v = {};
                    n = {
                        $Top: 0,
                        $Left: 0,
                        $Opacity: 1,
                        $Width: c,
                        $Height: h
                    };
                    m = $Jssor$.$Extend({}, n);
                    d = $Jssor$.$Extend({}, g[b]);
                    a.$Opacity && (n.$Opacity = 2 - a.$Opacity);
                    a.$ZIndex && (n.$ZIndex = a.$ZIndex, m.$ZIndex = 0);
                    var w = 1 < a.$Cols * a.$Rows || a.$Clip;
                    if (a.$Zoom || a.$Rotate) {
                        var P = !0;
                        $Jssor$.$IsBrowserIE() && 9 > $Jssor$.$BrowserEngineVersion() && (1 < a.$Cols * a.$Rows ? P = !1 : w = !1);
                        if (P) {
                            n.$Zoom = a.$Zoom ? a.$Zoom - 1 : 1;
                            m.$Zoom = 1;
                            if ($Jssor$.$IsBrowserIe9Earlier() ||
                                $Jssor$.$IsBrowserOpera()) n.$Zoom = Math.min(n.$Zoom, 2);
                            n.$Rotate = 360 * a.$Rotate * (y ? -1 : 1);
                            m.$Rotate = 0
                        }
                    }
                    w && (a.$Clip && (y = a.$ScaleClip || 1, w = d.$Offset = {}, e && f ? (w.$Top = g.$Height / 2 * y, w.$Bottom = -w.$Top) : e ? w.$Bottom = -g.$Height * y : f && (w.$Top = g.$Height * y), x && A ? (w.$Left = g.$Width / 2 * y, w.$Right = -w.$Left) : x ? w.$Right = -g.$Width * y : A && (w.$Left = g.$Width * y)), v.$Clip = d, m.$Clip = g[b]);
                    k = k ? 1 : -1;
                    t = t ? 1 : -1;
                   // a.x && (n.$Left += c * a.x * k);
                    //a.y && (n.$Top += h * a.y * t);
                    $Jssor$.$Each(n, function(a, b) {
                        $Jssor$.$IsNumeric(a) && a != m[b] && (v[b] = a - m[b])
                    });
                    u[b] = Z ? m : n;
                    t = a.$FramesCount;
                    k = Math.round(r * a.$Delay / a.$Interval);
                    l[b] = Array(k);
                    l[b].$Min = k;
                    l[b].$Max = k + t - 1;
                    for (k = 0; k <= t; k++) y = $Jssor$.$Cast(m, v, k / t, a.$Easing, a.$During, a.$Round, {
                        $Move: a.$Move,
                        $OriginalWidth: c,
                        $OriginalHeight: h
                    }), y.$ZIndex = y.$ZIndex || 1, l[b].push(y)
                })
            });
            t.reverse();
            $Jssor$.$Each(t, function(a) {
                $Jssor$.$Each(a, function(a) {
                    var h = a[0];
                    a = a[1];
                    var e = h + "," + a,
                        c = r;
                    if (a || h) c = $Jssor$.$CloneNode(r);
                    $Jssor$.$SetStyles(c, u[e]);
                    $Jssor$.$CssOverflow(c, "hidden");
                    $Jssor$.$CssPosition(c, "absolute");
                    b.$AddClipElement(c);
                    k[e] = c;
                    $Jssor$.$ShowElement(c, !Z)
                })
            })
        }

        function e() {
            var b = 0;
            $JssorAnimator$.call(this, 0, n);
            this.$OnPositionChange = function(c, a) {
                a - b > w && (b = a, k && k.$ShowFrame(a), l && l.$ShowFrame(a))
            };
            this.$Transition = t
        }
        var f = this,
            n, l, k, x = 0,
            v = g.$TransitionsOrder,
            t, w = 8;
        f.$GetTransition = function(b) {
            var c = 0;
            b = g.$Transitions;
            c = b.length;
            c = v ? x++ % c : Math.floor(Math.random() * c);
            b[c] && (b[c].$Index = c);
            return b[c]
        };
        f.$Initialize = function(e, r, a, g, v) {
            $JssorDebug$.$Execute(function() {
                l && $JssorDebug$.$Fail("slideshow runner has not been cleared.")
            });
            t = v;
            v = m(v, w);
            r = g.$Item;
            var h = a.$Item;
            r["no-image"] = !g.$Image;
            h["no-image"] = !a.$Image;
            a = r;
            g = h;
            var q = v,
                x = v.$Brother || m({}, w);
            v.$SlideOut || (a = h, g = r);
            v = x.$Shift || 0;
            l = new c(d, g, x, Math.max(v - x.$Interval, 0), b, p);
            k = new c(d, a, q, Math.max(x.$Interval - v, 0), b, p);
            l.$ShowFrame(0);
            k.$ShowFrame(0);
            n = Math.max(l.$EndTime, k.$EndTime);
            f.$Index = e
        };
        f.$Clear = function() {
            d.$Clear();
            k = l = null
        };
        f.$GetProcessor = function() {
            var b = null;
            k && (b = new e);
            return b
        };
        if ($Jssor$.$IsBrowserIe9Earlier() || $Jssor$.$IsBrowserOpera() || q && 537 > $Jssor$.$WebKitVersion()) w =
            16;
        $JssorObject$.call(f);
        $JssorAnimator$.call(f, -1E7, 1E7)
    },
    $JssorSlider$ = window.$JssorSlider$ = function(d, b) {
        function p() {
            var a = this;
            $JssorAnimator$.call(a, -1E8, 2E8);
            a.$GetCurrentSlideInfo = function() {
                var b = a.$GetPosition_Display(),
                    c = Math.floor(b);
                return {
                    $Index: t(c),
                    $VirtualIndex: c,
                    $Position: b - Math.floor(b)
                }
            };
            a.$OnPositionChange = function(a, b) {
                var z = Math.floor(b);
                z != b && b > a && z++;
                x(z, !0);
                h.$TriggerEvent($JssorSlider$.$EVT_POSITION_CHANGE, t(b), t(a), b, a)
            }
        }

        function g(a, b) {
            function c(b) {
                x && x.$Revert();
                p &&
                    p.$Revert();
                v(a, b);
                C = !0;
                p = new V.$Class(a, V, 1);
                $JssorDebug$.$LiveStamp(p, "caption_slider_" + R + "_in");
                x = new V.$Class(a, V);
                $JssorDebug$.$LiveStamp(x, "caption_slider_" + R + "_out");
                $JssorDebug$.$Execute(function() {
                    R++
                });
                x.$GoToBegin();
                p.$GoToBegin()
            }

            function e(a, z, c) {
                if (!K && (K = !0, A && c)) {
                    var k = c.width;
                    c = c.height;
                    var f = k,
                        l = c;
                    k && c && u.$FillMode && (u.$FillMode & 3 && (!(u.$FillMode & 4) || k > ea || c > fa) && (l = !1, f = ea / fa * c / k, u.$FillMode & 1 ? l = 1 < f : u.$FillMode & 2 && (l = 1 > f), f = l ? k * fa / c : ea, l = l ? fa : c * ea / k), $Jssor$.$CssWidth(A, f), $Jssor$.$CssHeight(A,
                        l), $Jssor$.$CssTop(A, (fa - l) / 2), $Jssor$.$CssLeft(A, (ea - f) / 2));
                    $Jssor$.$CssPosition(A, "absolute");
                    h.$TriggerEvent($JssorSlider$.$EVT_LOAD_END, b)
                }
                $Jssor$.$HideElement(z);
                a && a(g)
            }

            function k(a, c, z, h) {
                h == qa && E == b && ia && !kb && (h = t(a), S.$Initialize(h, b, c, g, z), c.$HideContentForSlideshow(), va.$Locate(h, 1), va.$GoToPosition(h), Q.$PlayCarousel(a, a, 0))
            }

            function f(h) {
                h == qa && E == b && (I || (h = null, S && (S.$Index == b ? h = S.$GetProcessor() : S.$Clear()), p.$Version < V.$Version && c(), I = new q(a, b, h, g.$GetCaptionSliderIn(), g.$GetCaptionSliderOut()),
                    I.$SetPlayer(L)), !I.$IsPlaying() && I.$Replay())
            }

            function l(a, c, z) {
                a == b ? (a != c ? X[c] && X[c].$ParkOut() : !z && I && I.$AdjustIdleOnPark(), L && L.$Enable(), a = qa = $Jssor$.$GetNow(), g.$LoadImage($Jssor$.$CreateCallback(null, f, a))) : (a = Math.abs(b - a), c = M + u.$LazyLoading - 1, (!W || a <= c) && g.$LoadImage())
            }

            function d(a) {
                wa ? $Jssor$.$CancelEvent(a) : h.$TriggerEvent($JssorSlider$.$EVT_CLICK, b, a)
            }

            function n() {
                L = G.pInstance;
                I && I.$SetPlayer(L)
            }

            function v(a, b, c) {
                if (!a["jssor-slider"]) {
                    c = c || 0;
                    C || ("IMG" == a.tagName && (O.push(a), a.src ||
                        (W = !0, a["display-origin"] = $Jssor$.$CssDisplay(a), $Jssor$.$HideElement(a))), $Jssor$.$IsBrowserIe9Earlier() && $Jssor$.$CssZIndex(a, ($Jssor$.$CssZIndex(a) || 0) + 1), u.$HWA && $Jssor$.$WebKitVersion() && (!ra || 534 > $Jssor$.$WebKitVersion() || !ya && !$Jssor$.$IsBrowserChrome()) && $Jssor$.$EnableHWA(a));
                    var z = $Jssor$.$Children(a);
                    $Jssor$.$Each(z, function(z, h) {
                        var k = $Jssor$.$AttributeEx(z, "u");
                        "player" != k || G || (G = z, G.pInstance ? n() : $Jssor$.$AddEvent(G, "dataavailable", n));
                        "caption" == k ? $Jssor$.$IsBrowserIE() || b || (k = $Jssor$.$CloneNode(z, !1, !0), $Jssor$.$InsertBefore(k, z, a), $Jssor$.$RemoveElement(z, a), z = k, b = !0) : C || c || A || ("A" == z.tagName ? ("image" == $Jssor$.$AttributeEx(z, "u") ? (A = $Jssor$.$FindChildByTag(z, "IMG"), $JssorDebug$.$Execute(function() {
                            A || $JssorDebug$.$Error("slide html code definition error, no 'IMG' found in a 'image with link' slide.\r\n" + a.outerHTML)
                        })) : A = $Jssor$.$FindChild(z, "image", !0), A && (J = z, $Jssor$.$SetStyles(J, ga), D = $Jssor$.$CloneNode(J, !0), $Jssor$.$AddEvent(D, "click", d), $Jssor$.$CssDisplay(D, "block"), $Jssor$.$SetStyles(D,
                            ga), $Jssor$.$CssOpacity(D, 0), $Jssor$.$Css(D, "backgroundColor", "#000"))) : "IMG" == z.tagName && "image" == $Jssor$.$AttributeEx(z, "u") && (A = z), A && (A.border = 0, $Jssor$.$SetStyles(A, ga)));
                        v(z, b, c + 1)
                    })
                }
            }
            var g = this,
                p, x, y, w, A, O = [],
                J, D, N, K, W, C, I, G, L, H;
            $JssorAnimator$.call(g, -M, M + 1, {
                $SlideItemAnimator: !0
            });
            g.$LoadImage = function(a, c) {
                c = c || w;
                O.length && !K ? ($Jssor$.$ShowElement(c), N || (N = !0, h.$TriggerEvent($JssorSlider$.$EVT_LOAD_START, b), $Jssor$.$Each(O, function(a) {
                    a.src || (a.src = $Jssor$.$AttributeEx(a, "src2"), $Jssor$.$CssDisplay(a,
                        a["display-origin"]))
                })), $Jssor$.$LoadImages(O, A, $Jssor$.$CreateCallback(null, e, a, c))) : e(a, c)
            };
            g.$GoForNextSlide = function() {
                if (S) {
                    var a = S.$GetTransition(B);
                    if (a) {
                        var c = qa = $Jssor$.$GetNow(),
                            z = b + P,
                            h = X[t(z)];
                        return h.$LoadImage($Jssor$.$CreateCallback(null, k, z, h, a, c), w)
                    }
                }
                r(E + u.$AutoPlaySteps * P)
            };
            g.$TryActivate = function() {
                l(b, b, !0)
            };
            g.$ParkOut = function() {
                L && L.$Quit();
                L && L.$Disable();
                g.$UnhideContentForSlideshow();
                I && I.$Abort();
                I = null;
                c()
            };
            g.$StampSlideItemElements = function(b) {
                b = H + "_" + b;
                $JssorDebug$.$Execute(function() {
                    A &&
                        $Jssor$.$Attribute(A, "debug-id", b + "_slide_item_image_id");
                    $Jssor$.$Attribute(a, "debug-id", b + "_slide_item_item_id")
                });
                $JssorDebug$.$Execute(function() {
                    $Jssor$.$Attribute(y, "debug-id", b + "_slide_item_wrapper_id")
                });
                $JssorDebug$.$Execute(function() {
                    $Jssor$.$Attribute(w, "debug-id", b + "_loading_container_id")
                })
            };
            g.$HideContentForSlideshow = function() {
                $Jssor$.$HideElement(a)
            };
            g.$UnhideContentForSlideshow = function() {
                $Jssor$.$ShowElement(a)
            };
            g.$EnablePlayer = function() {
                L && L.$Enable()
            };
            g.$OnInnerOffsetChange =
                function(a, b) {
                    m(y, M - b)
                };
            g.$GetCaptionSliderIn = function() {
                return p
            };
            g.$GetCaptionSliderOut = function() {
                return x
            };
            g.$Index = b;
            $JssorObject$.call(g);
            var F = $Jssor$.$FindChild(a, "thumb", !0);
            F && (g.$Thumb = $Jssor$.$CloneNode(F), $Jssor$.$RemoveAttribute(F, "id"), $Jssor$.$HideElement(F));
            $Jssor$.$ShowElement(a);
            w = $Jssor$.$CloneNode(ta);
            $Jssor$.$CssZIndex(w, 1E3);
            $Jssor$.$AddEvent(a, "click", d);
            c(!0);
            g.$Image = A;
            g.$Link = D;
            g.$Item = a;
            g.$Wrapper = y = a;
            $Jssor$.$AppendChild(y, w);
            h.$On(203, l);
            h.$On(28, function() {
                E == b && I &&
                    I.$Stop()
            });
            h.$On(24, function() {
                E == b && I && (I.$Stop(), L && L.$Quit(), L && L.$Disable(), I.$OpenSlideshowPanel())
            });
            $JssorDebug$.$Execute(function() {
                H = jb++
            });
            $JssorDebug$.$Execute(function() {
                $Jssor$.$Attribute(y, "debug-id", "slide-" + b)
            })
        }

        function q(a, b, c, k, e) {
            function f() {
                $Jssor$.$Empty(ja);
                ab && t && A.$Link && $Jssor$.$AppendChild(ja, A.$Link);
                $Jssor$.$ShowElement(ja, !t && A.$Image)
            }

            function l() {
                p && (p = !1, h.$TriggerEvent($JssorSlider$.$EVT_ROLLBACK_END, b, n, 0, m, n, v), d.$GoToPosition(m));
                d.$Replay()
            }

            function g(a) {
                x =
                    a;
                d.$Stop();
                d.$Replay()
            }
            var d = this,
                r, m, n, v, t, p, q, x, A = X[b];
            $JssorAnimator$.call(d, 0, 0);
            d.$Replay = function() {
                var a = d.$GetPosition_Display();
                if (!T && !ka && !x && E == b) {
                    a || (r && !t && (t = !0, d.$OpenSlideshowPanel(!0), h.$TriggerEvent($JssorSlider$.$EVT_SLIDESHOW_START, b, 0, 0, r, v)), f());
                    var c, z = $JssorSlider$.$EVT_STATE_CHANGE;
                    a != v && (a == n ? c = v : a == m ? c = n : a ? a > n ? (p = !0, c = n, z = $JssorSlider$.$EVT_ROLLBACK_START) : c = d.$GetPlayToPosition() : c = m);
                    h.$TriggerEvent(z, b, a, 0, m, n, v);
                    z = ia && (!aa || ba);
                    a == v ? (n == v || aa & 12) && !z || A.$GoForNextSlide() :
                        (z || a != n) && d.$PlayToPosition(c, l)
                }
            };
            d.$AdjustIdleOnPark = function() {
                n == v && n == d.$GetPosition_Display() && d.$GoToPosition(m)
            };
            d.$Abort = function() {
                S && S.$Index == b && S.$Clear();
                var a = d.$GetPosition_Display();
                a < v && h.$TriggerEvent($JssorSlider$.$EVT_STATE_CHANGE, b, -a - 1, 0, m, n, v)
            };
            d.$OpenSlideshowPanel = function(a) {
                c && $Jssor$.$CssOverflow(za, a && c.$Transition.$Outside ? "" : "hidden")
            };
            d.$OnInnerOffsetChange = function(a, c) {
                t && c >= r && (t = !1, f(), A.$UnhideContentForSlideshow(), S.$Clear(), h.$TriggerEvent($JssorSlider$.$EVT_SLIDESHOW_END,
                    b, 0, 0, r, v));
                h.$TriggerEvent($JssorSlider$.$EVT_PROGRESS_CHANGE, b, c, 0, m, n, v)
            };
            d.$SetPlayer = function(a) {
                a && !q && (q = a, a.$On($JssorPlayer$.$EVT_SWITCH, g))
            };
            c && d.$Chain(c);
            r = d.$GetPosition_OuterEnd();
            d.$GetPosition_OuterEnd();
            d.$Chain(k);
            m = k.$GetPosition_OuterEnd();
            n = m + ($Jssor$.$ParseFloat($Jssor$.$AttributeEx(a, "idle")) || u.$AutoPlayInterval);
            e.$Shift(n);
            d.$Combine(e);
            v = d.$GetPosition_OuterEnd()
        }

        function m(a, b) {
            var c = 0 < U ? U : D,
                h = Na * b * (c & 1),
                c = Oa * b * (c >> 1 & 1);
            $Jssor$.$IsBrowserChrome() && 38 > $Jssor$.$BrowserVersion() ?
                (h = h.toFixed(3), c = c.toFixed(3)) : (h = Math.round(h), c = Math.round(c));
            $Jssor$.$IsBrowserIE() && 10 <= $Jssor$.$BrowserVersion() && 11 > $Jssor$.$BrowserVersion() ? a.style.msTransform = "translate(" + h + "px, " + c + "px)" : $Jssor$.$IsBrowserChrome() && 30 <= $Jssor$.$BrowserVersion() && 34 > $Jssor$.$BrowserVersion() ? (a.style.WebkitTransition = "transform 0s", a.style.WebkitTransform = "translate3d(" + h + "px, " + c + "px, 0px) perspective(2000px)") : ($Jssor$.$CssLeft(a, h), $Jssor$.$CssTop(a, c))
        }

        function c(a) {
            var b = $Jssor$.$EventSrc(a).tagName;
            if (b = !la && "INPUT" != b && "TEXTAREA" != b && "SELECT" != b) {
                var b = $JssorSlider$.$DragRegistry || 0,
                    c = ma;
                ra && c & 1 && (c &= 1);
                $JssorSlider$.$DragRegistry |= c;
                b = la = c & ~b
            }
            b && (T = !0, Pa = !1, qa = null, $Jssor$.$AddEvent(document, Aa, l), $Jssor$.$GetNow(), wa = 0, f(), Qa || (U = 0), Ba ? (b = a.touches[0], Ra = b.clientX, Sa = b.clientY) : (b = $Jssor$.$MousePosition(a), Ra = b.x, Sa = b.y, $Jssor$.$CancelEvent(a)), Ca = Da = ca = 0, h.$TriggerEvent($JssorSlider$.$EVT_DRAG_START, t(da), da, a))
        }

        function e() {
            Qa = ka;
            bb = Q.$GetPlayToPosition();
            da = F.$GetPosition()
        }

        function f() {
            e();
            if (T || !ba && aa & 12) Q.$Stop(), h.$TriggerEvent($JssorSlider$.$EVT_FREEZE)
        }

        function n(a) {
            a && e();
            if (!(T || !ba && aa & 12 || Q.$IsPlaying())) {
                var b = F.$GetPosition(),
                    c = Math.ceil(da);
                a && Math.abs(ca) >= u.$MinDragOffsetToSlide && (c = Math.ceil(b), c += Ca);
                Y & 1 || (c = Math.min(B - M, Math.max(c, 0)));
                a = Math.abs(c - b);
                a = 1 - Math.pow(1 - a, 5);
                !wa && Qa ? Q.$Continue(bb) : b == c ? (Ma.$EnablePlayer(), Ma.$TryActivate()) : Q.$PlayCarousel(b, c, a * cb)
            }
        }

        function l(a) {
            if (!T || $Jssor$.$IsBrowserIe9Earlier() && !a.button) k(a);
            else {
                var b;
                if (Ba) {
                    var c = a.touches;
                    c && 0 < c.length && (b = {
                        x: c[0].clientX,
                        y: c[0].clientY
                    })
                } else b = $Jssor$.$MousePosition(a);
                if (b && (c = b.x - Ra, b = b.y - Sa, Math.floor(da) != da && (U = U || D & la), !c && !b || U || (U = 3 == la ? Math.abs(b) > Math.abs(c) ? 2 : 1 : la, ra && 1 == U && 3 < Math.abs(b) - Math.abs(c) && (Pa = !0)), U)) {
                    var h = Oa;
                    1 == U && (b = c, h = Na);
                    if (!(Y & 1)) {
                        if (0 < b) {
                            var c = h * E,
                                d = b - c;
                            0 < d && (b = c + 5 * Math.sqrt(d))
                        }
                        0 > b && (c = h * (B - M - E), d = -b - c, 0 < d && (b = -c - 5 * Math.sqrt(d)))
                    } - 2 > ca - Da ? Ca = 0 : 2 < ca - Da && (Ca = -1);
                    Da = ca;
                    ca = b;
                    Ta = da - ca / h / (xa || 1);
                    ca && U && !Pa ? ($Jssor$.$CancelEvent(a), ka ? Q.$SetStandByPosition(Ta) :
                        Q.$StandBy(Ta)) : $Jssor$.$IsBrowserIe9Earlier() && $Jssor$.$CancelEvent(a)
                }
            }
        }

        function k(a) {
            la && ($JssorSlider$.$DragRegistry &= ~ma, la = 0);
            if (T) {
                T = !1;
                $Jssor$.$GetNow();
                $Jssor$.$RemoveEvent(document, Aa, l);
                (wa = ca) && $Jssor$.$CancelEvent(a);
                Q.$Stop();
                var b = F.$GetPosition();
                h.$TriggerEvent($JssorSlider$.$EVT_DRAG_END, t(b), b, t(da), da, a);
                n(!0)
            }
        }

        function x(a, b) {
            La = a;
            $Jssor$.$Each(na, function(c) {
                c.$SetCurrentIndex(t(a), a, b)
            })
        }

        function v() {
            var a = $Jssor$.$CreateDiv();
            $Jssor$.$SetStyles(a, ga);
            $Jssor$.$CssPosition(a,
                "absolute");
            return a
        }

        function t(a) {
            return (a % B + B) % B
        }

        function w(a, b) {
            b && (Y ? Y & 2 && (a = t(a + La), b = !1) : (a = Math.min(Math.max(a + La, 0), B - M), b = !1));
            r(a, u.$SlideDuration, b)
        }

        function y() {
            $Jssor$.$Each(na, function(a) {
                a.$Show(a.$Options.$ChanceToShow <= ba)
            })
        }

        function r(a, b, c) {
            if (db && (!T || u.$NaviQuitDrag)) {
                ka = !0;
                T = !1;
                Q.$Stop();
                void 0 == b && (b = cb);
                var h = Ua.$GetPosition_Display(),
                    d = a;
                c && (d = h + a, d = 0 < a ? Math.ceil(d) : Math.floor(d));
                Y & 2 && (d = t(d));
                Y & 1 || (d = Math.max(0, Math.min(d, B - M)));
                a = (d - h) % B;
                d = h + a;
                a = h == d ? 0 : b * Math.abs(a);
                a =
                    Math.min(a, b * M * 1.5);
                Q.$PlayCarousel(h, d, a || 1)
            }
        }

        function a() {
            return $Jssor$.$CssWidth(H || d)
        }

        function N() {
            return $Jssor$.$CssHeight(H || d)
        }

        function O(b, c) {
            if (void 0 == b) return $Jssor$.$CssWidth(d);
            if (!H) {
                $JssorDebug$.$Execute(function() {
                    var a = $Jssor$.$Css(d, "width"),
                        b = $Jssor$.$Css(d, "height"),
                        c = $Jssor$.$CssP(d, "width"),
                        h = $Jssor$.$CssP(d, "height");
                    a && -1 != a.indexOf("px") || $JssorDebug$.$Fail("Cannot scale jssor slider, 'width' of 'outer container' not specified. Please specify 'width' in pixel. e.g. 'width: 600px;'");
                    b && -1 != b.indexOf("px") || $JssorDebug$.$Fail("Cannot scale jssor slider, 'height' of 'outer container' not specified. Please specify 'height' in pixel. e.g. 'height: 300px;'"); - 1 != a.indexOf("%") && $JssorDebug$.$Fail("Cannot scale jssor slider, 'width' of 'outer container' not valid. Please specify 'width' in pixel. e.g. 'width: 600px;'"); - 1 != b.indexOf("%") && $JssorDebug$.$Fail("Cannot scale jssor slider, 'height' of 'outer container' not valid. Please specify 'height' in pixel. e.g. 'height: 300px;'");
                    c || $JssorDebug$.$Fail("Cannot scale jssor slider, 'width' of 'outer container' not valid. 'width' of 'outer container' should be positive number. e.g. 'width: 600px;'");
                    h || $JssorDebug$.$Fail("Cannot scale jssor slider, 'height' of 'outer container' not valid. 'height' of 'outer container' should be positive number. e.g. 'height: 300px;'")
                });
                var k = $Jssor$.$CreateDiv(document);
                $Jssor$.$ClassName(k, $Jssor$.$ClassName(d));
                $Jssor$.$CssCssText(k, $Jssor$.$CssCssText(d));
                $Jssor$.$CssDisplay(k, "block");
                $Jssor$.$CssPosition(k,
                    "relative");
                $Jssor$.$CssTop(k, 0);
                $Jssor$.$CssLeft(k, 0);
                $Jssor$.$CssOverflow(k, "visible");
                H = $Jssor$.$CreateDiv(document);
                $Jssor$.$CssPosition(H, "absolute");
                $Jssor$.$CssTop(H, 0);
                $Jssor$.$CssLeft(H, 0);
                $Jssor$.$CssWidth(H, $Jssor$.$CssWidth(d));
                $Jssor$.$CssHeight(H, $Jssor$.$CssHeight(d));
                $Jssor$.$SetStyleTransformOrigin(H, "0 0");
                $Jssor$.$AppendChild(H, k);
                var e = $Jssor$.$Children(d);
                $Jssor$.$AppendChild(d, H);
                $Jssor$.$Css(d, "backgroundImage", "");
                var f = {
                    navigator: W && 0 == W.$Scale,
                    arrowleft: G && 0 == G.$Scale,
                    arrowright: G &&
                        0 == G.$Scale,
                    thumbnavigator: K && 0 == K.$Scale,
                    thumbwrapper: K && 0 == K.$Scale
                };
                $Jssor$.$Each(e, function(a) {
                    $Jssor$.$AppendChild(f[$Jssor$.$AttributeEx(a, "u")] ? d : k, a)
                })
            }
            $JssorDebug$.$Execute(function() {
                (!b || 0 > b) && $JssorDebug$.$Fail("'$ScaleWidth' error, 'dimension' should be positive value.")
            });
            $JssorDebug$.$Execute(function() {
                A || (A = h.$Elmt.scrollWidth)
            });
            xa = b / (c ? $Jssor$.$CssHeight : $Jssor$.$CssWidth)(H);
            $Jssor$.$CssScale(H, xa);
            var l = c ? xa * a() : b,
                g = c ? b : xa * N();
            $Jssor$.$CssWidth(d, l);
            $Jssor$.$CssHeight(d, g);
            $Jssor$.$Each(na,
                function(a) {
                    a.$Relocate(l, g)
                })
        }
        var h = this;
        h.$PlayTo = r;
        h.$GoTo = function(a) {
            r(a, 1)
        };
        h.$Next = function() {
            r(1, void 0, !0)
        };
        h.$Prev = function() {
            r(-1, void 0, !0)
        };
        h.$Pause = function() {
            ia = !1
        };
        h.$Play = function() {
            ia || (ia = !0, X[E] && X[E].$TryActivate())
        };
        h.$SetSlideshowTransitions = function(a) {
            $JssorDebug$.$Execute(function() {
                a && a.length || $JssorDebug$.$Error("Can not set slideshow transitions, no transitions specified.")
            });
            $Jssor$.$TranslateTransitions(a);
            u.$SlideshowOptions.$Transitions = a
        };
        h.$SetCaptionTransitions =
            function(a) {
                $JssorDebug$.$Execute(function() {
                    a && a.length || $JssorDebug$.$Error("Can not set caption transitions, no transitions specified")
                });
                $Jssor$.$TranslateTransitions(a);
                V.$CaptionTransitions = a;
                V.$Version = $Jssor$.$GetNow()
            };
        h.$SlidesCount = function() {
            return ha.length
        };
        h.$CurrentIndex = function() {
            return E
        };
        h.$IsAutoPlaying = function() {
            return ia
        };
        h.$IsDragging = function() {
            return T
        };
        h.$IsSliding = function() {
            return ka
        };
        h.$IsMouseOver = function() {
            return !ba
        };
        h.$LastDragSucceded = function() {
            return wa
        };
        h.$OriginalWidth =
            h.$GetOriginalWidth = a;
        h.$OriginalHeight = h.$GetOriginalHeight = N;
        h.$ScaleHeight = h.$GetScaleHeight = function(a) {
            if (void 0 == a) return $Jssor$.$CssHeight(d);
            O(a, !0)
        };
        h.$ScaleWidth = h.$SetScaleWidth = h.$GetScaleWidth = O;
        h.$GetVirtualIndex = function(a) {
            var b = Math.ceil(t(Ea / eb)),
                c = t(a - E + b);
            c > M ? a - E > B / 2 ? a -= B : a - E <= -B / 2 && (a += B) : a = E + c - b;
            return a
        };
        $JssorObject$.call(h);
        $JssorDebug$.$Execute(function() {
            $Jssor$.$GetElement(d) || $JssorDebug$.$Fail("Outer container '" + d + "' not found.")
        });
        h.$Elmt = d = $Jssor$.$GetElement(d);
        var A, R = 1,
            u = $Jssor$.$Extend({
                $FillMode: 0,
                $LazyLoading: 1,
                $StartIndex: 0,
                $AutoPlay: !1,
                $Loop: 1,
                $HWA: !0,
                $NaviQuitDrag: !0,
                $AutoPlaySteps: 1,
                $AutoPlayInterval: 7E3,
                $PauseOnHover: 1,
                $SlideDuration: 300,
                $SlideEasing: $JssorEasing$.$EaseOutQuad,
                $MinDragOffsetToSlide: 20,
                $SlideSpacing: 0,
                $DisplayPieces: 2,
                $ParkingPosition: 0,
                $UISearchMode: 1,
                $PlayOrientation: 1,
                $DragOrientation: 1
            }, b);
        $JssorDebug$.$Execute(function() {
            u = $Jssor$.$Extend({
                $ArrowKeyNavigation: void 0,
                $SlideWidth: void 0,
                $SlideHeight: void 0,
                $SlideshowOptions: void 0,
                $CaptionSliderOptions: void 0,
                $BulletNavigatorOptions: void 0,
                $ArrowNavigatorOptions: void 0,
                $ThumbnailNavigatorOptions: void 0
            }, u)
        });
        var D = u.$PlayOrientation & 3,
            P = (u.$PlayOrientation & 4) / -4 || 1,
            J = u.$SlideshowOptions,
            V = $Jssor$.$Extend({
                $Class: $JssorCaptionSliderBase$,
                $PlayInMode: 1,
                $PlayOutMode: 1
            }, u.$CaptionSliderOptions);
        $Jssor$.$TranslateTransitions(V.$CaptionTransitions);
        var W = u.$BulletNavigatorOptions,
            G = u.$ArrowNavigatorOptions,
            K = u.$ThumbnailNavigatorOptions;
        $JssorDebug$.$Execute(function() {
            J && !J.$Class &&
                $JssorDebug$.$Fail("Option $SlideshowOptions error, class not specified.")
        });
        $JssorDebug$.$Execute(function() {
            u.$CaptionSliderOptions && !u.$CaptionSliderOptions.$Class && $JssorDebug$.$Fail("Option $CaptionSliderOptions error, class not specified.")
        });
        $JssorDebug$.$Execute(function() {
            W && !W.$Class && $JssorDebug$.$Fail("Option $BulletNavigatorOptions error, class not specified.")
        });
        $JssorDebug$.$Execute(function() {
            G && !G.$Class && $JssorDebug$.$Fail("Option $ArrowNavigatorOptions error, class not specified.")
        });
        $JssorDebug$.$Execute(function() {
            K && !K.$Class && $JssorDebug$.$Fail("Option $ThumbnailNavigatorOptions error, class not specified.")
        });
        var oa = !u.$UISearchMode,
            H, C = $Jssor$.$FindChild(d, "slides", oa),
            ta = $Jssor$.$FindChild(d, "loading", oa) || $Jssor$.$CreateDiv(document),
            Z = $Jssor$.$FindChild(d, "navigator", oa),
            pa = $Jssor$.$FindChild(d, "arrowleft", oa),
            ua = $Jssor$.$FindChild(d, "arrowright", oa),
            Ia = $Jssor$.$FindChild(d, "thumbnavigator", oa);
        $JssorDebug$.$Execute(function() {
            if (Z && !W) throw Error("Bullet navigator container defined but $BulletNavigatorOptions not specified.");
            if ((pa || ua) && !G) throw Error("arrowleft or arrowright defined, but $ArrowNavigatorOptions not specified.");
            if (Ia && !K) throw Error("Thumbnail navigator container defined, but $ThumbnailNavigatorOptions not specified.");
        });
        var Ja = $Jssor$.$CssWidth(C),
            Ka = $Jssor$.$CssHeight(C);
        $JssorDebug$.$Execute(function() {
            isNaN(Ja) && $JssorDebug$.$Fail("Width of slides container wrong specification, it should be specified in pixel (like style='width: 600px;').");
            void 0 == Ja && $JssorDebug$.$Fail("Width of slides container not specified, it should be specified in pixel (like style='width: 600px;').");
            isNaN(Ka) && $JssorDebug$.$Fail("Height of slides container wrong specification, it should be specified in pixel (like style='height: 300px;').");
            void 0 == Ka && $JssorDebug$.$Fail("Height of slides container not specified, it should be specified in pixel (like style='height: 300px;').");
            var a = $Jssor$.$CssOverflow(C),
                b = $Jssor$.$Css(C, "overflowX"),
                c = $Jssor$.$Css(C, "overflowY");
            "hidden" == a || "hidden" == b && "hidden" == c || $JssorDebug$.$Fail("Overflow of slides container wrong specification, it should be specified as 'hidden' (style='overflow:hidden;').")
        });
        $JssorDebug$.$Execute(function() {
            $Jssor$.$IsNumeric(u.$DisplayPieces) || $JssorDebug$.$Fail("Option $DisplayPieces error, it should be a numeric value and greater than or equal to 1.");
            1 > u.$DisplayPieces && $JssorDebug$.$Fail("Option $DisplayPieces error, it should be greater than or equal to 1.");
            1 < u.$DisplayPieces && u.$DragOrientation && u.$DragOrientation != D && $JssorDebug$.$Fail("Option $DragOrientation error, it should be 0 or the same of $PlayOrientation when $DisplayPieces is greater than 1.");
            $Jssor$.$IsNumeric(u.$ParkingPosition) ||
                $JssorDebug$.$Fail("Option $ParkingPosition error, it should be a numeric value.");
            u.$ParkingPosition && u.$DragOrientation && u.$DragOrientation != D && $JssorDebug$.$Fail("Option $DragOrientation error, it should be 0 or the same of $PlayOrientation when $ParkingPosition is not equal to 0.")
        });
        var ga, ha = [],
            ib = $Jssor$.$Children(C);
        $Jssor$.$Each(ib, function(a) {
            "DIV" != a.tagName || $Jssor$.$AttributeEx(a, "u") || ha.push(a)
        });
        $JssorDebug$.$Execute(function() {
            1 > ha.length && $JssorDebug$.$Error("Slides html code definition error, there must be at least 1 slide to initialize a slider.")
        });
        var jb = 0,
            E = -1,
            La, Ma, B = ha.length,
            ea = u.$SlideWidth || Ja,
            fa = u.$SlideHeight || Ka,
            $a = u.$SlideSpacing,
            Na = ea + $a,
            Oa = fa + $a,
            eb = D & 1 ? Na : Oa,
            M = Math.min(u.$DisplayPieces, B),
            za, U, la, Pa, Ba, ra, na = [],
            fb, gb, hb, ab, kb, ia, aa = u.$PauseOnHover,
            cb = u.$SlideDuration,
            Va, ya, Ea, db = M < B,
            Y = db ? u.$Loop : 0,
            ma, wa, ba = 1,
            ka, T, qa, Ra = 0,
            Sa = 0,
            ca, Da, Ca, Ua, F, va, Q, Wa = new function() {
                var a = v();
                $Jssor$.$CssZIndex(a, 0);
                $Jssor$.$Css(a, "pointerEvents", "none");
                this.$Elmt = a;
                this.$AddClipElement = function(b) {
                    $Jssor$.$AppendChild(a, b);
                    $Jssor$.$ShowElement(a)
                };
                this.$Clear = function() {
                    $Jssor$.$HideElement(a);
                    $Jssor$.$Empty(a)
                }
            },
            xa;
        ia = u.$AutoPlay;
        h.$Options = b;
        (function() {
            ga = {
                $Width: ea,
                $Height: fa,
                $Top: 0,
                $Left: 0
            };
            $Jssor$.$Each(ha, function(a, b) {
                $Jssor$.$SetStyles(a, ga);
                $Jssor$.$CssPosition(a, "absolute");
                $Jssor$.$CssOverflow(a, "hidden");
                $Jssor$.$HideElement(a)
            });
            $Jssor$.$SetStyles(ta, ga)
        })();
        d["jssor-slider"] = !0;
        $Jssor$.$CssZIndex(C, $Jssor$.$CssZIndex(C) || 0);
        $Jssor$.$CssPosition(C, "absolute");
        za = $Jssor$.$CloneNode(C, !0);
        $Jssor$.$InsertBefore(za, C);
        J && (ab = J.$ShowLink,
            Va = J.$Class, $JssorDebug$.$Execute(function() {
                J.$Transitions && J.$Transitions.length || $JssorDebug$.$Error("Invalid '$SlideshowOptions', no '$Transitions' specified.")
            }), $Jssor$.$TranslateTransitions(J.$Transitions), ya = 1 == M && 1 < B && Va && (!$Jssor$.$IsBrowserIE() || 8 <= $Jssor$.$BrowserVersion()));
        Ea = ya || M >= B || !(Y & 1) ? 0 : u.$ParkingPosition;
        ma = (1 < M || Ea ? D : -1) & u.$DragOrientation;
        var X = [],
            S, ja, Xa = "mousedown",
            Aa = "mousemove",
            Ya = "mouseup",
            Fa, da, Qa, bb, Ta, sa;
        if (window.navigator.pointerEnabled || (sa = window.navigator.msPointerEnabled)) {
            if (ra = !0, Xa = sa ? "MSPointerDown" : "pointerdown", Aa = sa ? "MSPointerMove" : "pointermove", Ya = sa ? "MSPointerUp" : "pointerup", Fa = sa ? "MSPointerCancel" : "pointercancel", ma) {
                var Za = "auto";
                2 == ma ? Za = "pan-x" : ma && (Za = "pan-y");
                $Jssor$.$Css(C, sa ? "msTouchAction" : "touchAction", Za)
            }
        } else if ("ontouchstart" in window || "createTouch" in document) ra = Ba = !0, Xa = "touchstart", Aa = "touchmove", Ya = "touchend", Fa = "touchcancel";
        va = new function() {
            var a = Wa.$Elmt;
            $JssorAnimator$.call(this, -1, 2, {
                $Easing: $JssorEasing$.$EaseLinear,
                $Setter: {
                    $Position: m
                },
                $LoopLength: B
            }, a, {
                $Position: 1
            }, {
                $Position: -2
            });
            this.$Wrapper = a;
            $JssorDebug$.$Execute(function() {
                $Jssor$.$Attribute(Wa.$Elmt, "debug-id", "slide_container")
            })
        };
        ya && (S = new Va(Wa, ea, fa, J, Ba));
        $Jssor$.$AppendChild(za, va.$Wrapper);
        $Jssor$.$CssOverflow(C, "hidden");
        ja = v();
        $Jssor$.$Css(ja, "backgroundColor", "#000");
        $Jssor$.$CssOpacity(ja, 0);
        $Jssor$.$InsertBefore(ja, C.firstChild, C);
        for (var Ga = 0; Ga < ha.length; Ga++) {
            var lb = new g(ha[Ga], Ga);
            X.push(lb)
        }
        $Jssor$.$HideElement(ta);
        $JssorDebug$.$Execute(function() {
            $Jssor$.$Attribute(ta,
                "debug-id", "loading-container")
        });
        Ua = new function() {
            var a = this;
            $JssorAnimator$.call(a, 0, 0, {
                $LoopLength: B
            });
            $Jssor$.$Each(X, function(b) {
                Y & 1 && b.$SetLoopLength(B);
                a.$Chain(b);
                b.$Shift(Ea / eb)
            })
        };
        Q = new function(a, b) {
            var c = this,
                d, k, e, f, l;
            $JssorAnimator$.call(c, -1E8, 2E8, {
                $IntervalMax: 100
            });
            c.$OnStart = function() {
                ka = !0;
                qa = null;
                h.$TriggerEvent($JssorSlider$.$EVT_SWIPE_START, t(F.$GetPosition()), F.$GetPosition())
            };
            c.$OnStop = function() {
                f = ka = !1;
                var a = F.$GetCurrentSlideInfo();
                h.$TriggerEvent($JssorSlider$.$EVT_SWIPE_END,
                    t(F.$GetPosition()), F.$GetPosition());
                if (!a.$Position) {
                    var a = a.$VirtualIndex,
                        b = E;
                    U = 0;
                    E = t(a);
                    Ma = X[E];
                    x(a);
                    h.$TriggerEvent($JssorSlider$.$EVT_PARK, t(a), b)
                }
            };
            c.$OnPositionChange = function(a, b) {
                var c;
                f ? c = l : (c = k, e && (c = u.$SlideEasing(b / e) * (k - d) + d));
                F.$GoToPosition(c)
            };
            c.$PlayCarousel = function(a, b, h, f) {
                $JssorDebug$.$Execute(function() {
                    c.$IsPlaying() && $JssorDebug$.$Fail("The carousel is already playing.")
                });
                d = a;
                k = b;
                e = h;
                F.$GoToPosition(a);
                c.$GoToPosition(0);
                c.$PlayToPosition(h, f)
            };
            c.$StandBy = function(a) {
                f = !0;
                l = a;
                c.$Play(a, null, !0)
            };
            c.$SetStandByPosition = function(a) {
                l = a
            };
            c.$MoveCarouselTo = function(a) {
                F.$GoToPosition(a)
            };
            F = new p;
            F.$Combine(a);
            F.$Combine(b)
        }(Ua, va);
        $JssorDebug$.$Execute(function() {
            $Jssor$.$Attribute(C, "debug-id", "slide-board")
        });
        ma && ($Jssor$.$AddEvent(C, Xa, c), $Jssor$.$AddEvent(document, Ya, k), Fa && $Jssor$.$AddEvent(document, Fa, k));
        aa &= ra ? 10 : 5;
        Z && W && (fb = new W.$Class(Z, W, a(), N()), na.push(fb));
        G && pa && ua && (G.$Loop = Y, gb = new G.$Class(pa, ua, G, a(), N()), na.push(gb));
        Ia && K && (K.$StartIndex = u.$StartIndex,
            hb = new K.$Class(Ia, K), na.push(hb));
        $Jssor$.$Each(na, function(a) {
            a.$Reset(B, X, ta);
            a.$On($JssorNavigatorEvents$.$NAVIGATIONREQUEST, w)
        });
        O(a());
        $Jssor$.$AddEvent(d, "mouseout", $Jssor$.$MouseOverOutFilter(function() {
            ba || (ba = 1, y(), T || (aa & 12 && n(), aa & 3 && X[E].$TryActivate()))
        }, d));
        $Jssor$.$AddEvent(d, "mouseover", $Jssor$.$MouseOverOutFilter(function() {
            ba && (ba = 0, y(), !T && aa & 12 && f())
        }, d));
        y();
        u.$ArrowKeyNavigation && $Jssor$.$AddEvent(document, "keydown", function(a) {
            a.keyCode == $JssorKeyCode$.$LEFT ? r(-1, void 0, !0) :
                a.keyCode == $JssorKeyCode$.$RIGHT && r(1, void 0, !0)
        });
        var Ha = u.$StartIndex;
        Y & 1 || (Ha = Math.max(0, Math.min(Ha, B - M)));
        Q.$PlayCarousel(Ha, Ha, 0)
    },
    $JssorSlideo$ = window.$JssorSlideo$ = $JssorSlider$;
$JssorSlider$.$EVT_CLICK = 21;
$JssorSlider$.$EVT_DRAG_START = 22;
$JssorSlider$.$EVT_DRAG_END = 23;
$JssorSlider$.$EVT_SWIPE_START = 24;
$JssorSlider$.$EVT_SWIPE_END = 25;
$JssorSlider$.$EVT_LOAD_START = 26;
$JssorSlider$.$EVT_LOAD_END = 27;
$JssorSlider$.$EVT_FREEZE = 28;
$JssorSlider$.$EVT_POSITION_CHANGE = 202;
$JssorSlider$.$EVT_PARK = 203;
$JssorSlider$.$EVT_SLIDESHOW_START = 206;
$JssorSlider$.$EVT_SLIDESHOW_END = 207;
$JssorSlider$.$EVT_PROGRESS_CHANGE = 208;
$JssorSlider$.$EVT_STATE_CHANGE = 209;
$JssorSlider$.$EVT_ROLLBACK_START = 210;
$JssorSlider$.$EVT_ROLLBACK_END = 211;
var $JssorNavigatorEvents$ = {
        $NAVIGATIONREQUEST: 1,
        $INDEXCHANGE: 2,
        $RESET: 3
    },
    $JssorBulletNavigator$ = window.$JssorBulletNavigator$ = function(d, b, p, g) {
        function q(a) {
            m.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, a * x)
        }
        var m = this;
        $JssorObject$.call(m);
        d = $Jssor$.$GetElement(d);
        var c, e, f, n, l = 0,
            k, x, v, t, w, y, r, a, N, O = [];
        m.$Elmt = d;
        m.$GetCurrentIndex = function() {
            return n
        };
        m.$SetCurrentIndex = function(a) {
            if (a != n) {
                var b = l,
                    c = Math.floor(a / x);
                l = c;
                n = a; - 1 != b && O[b].$Selected(b == l); - 1 != c && O[c].$Selected(c == l)
            }
        };
        m.$Show = function(a) {
            $Jssor$.$ShowElement(d, a)
        };
        var h;
        m.$Relocate = function(a, b) {
            h && 0 != k.$Scale || (k.$AutoCenter & 1 && $Jssor$.$CssLeft(d, (a - e) / 2), k.$AutoCenter & 2 && $Jssor$.$CssTop(d, (b - f) / 2), h = !0)
        };
        var A;
        m.$Reset = function(b) {
            if (!A) {
                c = Math.ceil(b / x);
                l = 0;
                b = a + t;
                var h = N + w,
                    g = Math.ceil(c / v) - 1;
                e = a + b * (y ? v - 1 : g);
                f = N + h * (y ? g : v - 1);
                $Jssor$.$CssWidth(d, e);
                $Jssor$.$CssHeight(d, f);
                for (var n = 0; n < c; n++) {
                    var m = $Jssor$.$CreateSpan();
                    $Jssor$.$InnerText(m, n + 1);
                    m = $Jssor$.$BuildElement(r, "numbertemplate", m, !0);
                    $Jssor$.$CssPosition(m,
                        "absolute");
                    var p = n % (g + 1);
                    $Jssor$.$CssLeft(m, y ? n % v * b : b * p);
                    $Jssor$.$CssTop(m, y ? h * p : Math.floor(n / (g + 1)) * h);
                    $Jssor$.$AppendChild(d, m);
                    k.$ActionMode & 1 && $Jssor$.$AddEvent(m, "click", $Jssor$.$CreateCallback(null, q, n));
                    k.$ActionMode & 2 && $Jssor$.$AddEvent(m, "mouseover", $Jssor$.$MouseOverOutFilter($Jssor$.$CreateCallback(null, q, n), m));
                    O[n] = $Jssor$.$Buttonize(m)
                }
                A = !0
            }
        };
        m.$Options = k = $Jssor$.$Extend({
            $SpacingX: 0,
            $SpacingY: 0,
            $Orientation: 1,
            $ActionMode: 1
        }, b);
        $JssorDebug$.$Execute(function() {
            k = $Jssor$.$Extend({
                $Steps: void 0,
                $Lanes: void 0
            }, k)
        });
        r = $Jssor$.$FindChild(d, "prototype");
        $JssorDebug$.$Execute(function() {
            r || $JssorDebug$.$Fail("Navigator item prototype not defined.");
            isNaN($Jssor$.$CssWidth(r)) && $JssorDebug$.$Fail("Width of 'navigator item prototype' not specified.");
            isNaN($Jssor$.$CssHeight(r)) && $JssorDebug$.$Fail("Height of 'navigator item prototype' not specified.")
        });
        a = $Jssor$.$CssWidth(r);
        N = $Jssor$.$CssHeight(r);
        $Jssor$.$RemoveElement(r, d);
        x = k.$Steps || 1;
        v = k.$Lanes || 1;
        t = k.$SpacingX;
        w = k.$SpacingY;
        y = k.$Orientation -
            1
    },
    $JssorArrowNavigator$ = window.$JssorArrowNavigator$ = function(d, b, p, g, q) {
        function m(b) {
            e.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, b, !0)
        }

        function c(c) {
            $Jssor$.$ShowElement(d, c || !p.$Loop && 0 == l);
            $Jssor$.$ShowElement(b, c || !p.$Loop && l == n - 1);
            f = c
        }
        var e = this;
        $JssorObject$.call(e);
        $JssorDebug$.$Execute(function() {
            d || $JssorDebug$.$Fail("Option '$ArrowNavigatorOptions' spepcified, but UI 'arrowleft' not defined. Define 'arrowleft' to enable direct navigation, or remove option '$ArrowNavigatorOptions' to disable direct navigation.");
            b || $JssorDebug$.$Fail("Option '$ArrowNavigatorOptions' spepcified, but UI 'arrowright' not defined. Define 'arrowright' to enable direct navigation, or remove option '$ArrowNavigatorOptions' to disable direct navigation.");
            isNaN($Jssor$.$CssWidth(d)) && $JssorDebug$.$Fail("Width of 'arrow left' not specified.");
            isNaN($Jssor$.$CssWidth(b)) && $JssorDebug$.$Fail("Width of 'arrow right' not specified.");
            isNaN($Jssor$.$CssHeight(d)) && $JssorDebug$.$Fail("Height of 'arrow left' not specified.");
            isNaN($Jssor$.$CssHeight(b)) &&
                $JssorDebug$.$Fail("Height of 'arrow right' not specified.")
        });
        var f, n, l, k, x, v = $Jssor$.$CssWidth(d),
            t = $Jssor$.$CssHeight(d);
        e.$GetCurrentIndex = function() {
            return l
        };
        e.$SetCurrentIndex = function(b, a, d) {
            d ? l = a : (l = b, c(f))
        };
        e.$Show = c;
        var w;
        e.$Relocate = function(c, a) {
            w && 0 != k.$Scale || (k.$AutoCenter & 1 && ($Jssor$.$CssLeft(d, (g - v) / 2), $Jssor$.$CssLeft(b, (g - v) / 2)), k.$AutoCenter & 2 && ($Jssor$.$CssTop(d, (a - t) / 2), $Jssor$.$CssTop(b, (a - t) / 2)), w = !0)
        };
        var y;
        e.$Reset = function(c) {
            n = c;
            l = 0;
            y || ($Jssor$.$AddEvent(d, "click", $Jssor$.$CreateCallback(null,
                m, -x)), $Jssor$.$AddEvent(b, "click", $Jssor$.$CreateCallback(null, m, x)), $Jssor$.$Buttonize(d), $Jssor$.$Buttonize(b), y = !0)
        };
        e.$Options = k = $Jssor$.$Extend({
            $Steps: 1
        }, p);
        x = k.$Steps
    },
    $JssorThumbnailNavigator$ = window.$JssorThumbnailNavigator$ = function(d, b) {
        function p(b, h) {
            function d(a) {
                y.$LastDragSucceded() || (a = l - h % l, a = y.$GetVirtualIndex((h + a) / l - 1) * l + l - a, g.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, a))
            }
            var k = this,
                e, f;
            $JssorDebug$.$Execute(function() {
                k.$Wrapper = void 0
            });
            k.$Index = h;
            k.$Highlight =
                function(a) {
                    f.$Selected(m == h)
                };
            e = b.$Thumb || b.$Image || $Jssor$.$CreateDiv();
            k.$Wrapper = e = $Jssor$.$BuildElement(a, "thumbnailtemplate", e, !0);
            f = $Jssor$.$Buttonize(e);
            c.$ActionMode & 1 && $Jssor$.$AddEvent(e, "click", d);
            c.$ActionMode & 2 && $Jssor$.$AddEvent(e, "mouseover", $Jssor$.$MouseOverOutFilter(d, e))
        }
        var g = this,
            q, m, c, e = [],
            f, n, l, k, x, v, t, w, y, r, a;
        $JssorObject$.call(g);
        d = $Jssor$.$GetElement(d);
        g.$GetCurrentIndex = function() {
            return m
        };
        g.$SetCurrentIndex = function(a, b, c) {
            var d = m;
            m = a; - 1 != d && e[d].$Highlight();
            e[a].$Highlight();
            c || y.$PlayTo(y.$GetVirtualIndex(Math.floor(b / l)))
        };
        g.$Show = function(a) {
            $Jssor$.$ShowElement(d, a)
        };
        g.$Relocate = $Jssor$.$EmptyFunction;
        var N;
        g.$Reset = function(a, b, g) {
            if (!N) {
                q = a;
                Math.ceil(q / l);
                m = -1;
                w = Math.min(w, b.length);
                var R = c.$Orientation & 1;
                a = v + (v + k) * (l - 1) * (1 - R);
                g = t + (t + x) * (l - 1) * R;
                var u = a + (a + k) * (w - 1) * R,
                    D = g + (g + x) * (w - 1) * (1 - R);
                $Jssor$.$CssPosition(r, "absolute");
                $Jssor$.$CssOverflow(r, "hidden");
                c.$AutoCenter & 1 && $Jssor$.$CssLeft(r, (f - u) / 2);
                c.$AutoCenter & 2 && $Jssor$.$CssTop(r, (n - D) / 2);
                $Jssor$.$CssWidth(r,
                    u);
                $Jssor$.$CssHeight(r, D);
                var P = [];
                $Jssor$.$Each(b, function(a, b) {
                    var c = new p(a, b),
                        h = c.$Wrapper,
                        d = Math.floor(b / l),
                        f = b % l;
                    $Jssor$.$CssLeft(h, (v + k) * f * (1 - R));
                    $Jssor$.$CssTop(h, (t + x) * f * R);
                    P[d] || (P[d] = $Jssor$.$CreateDiv(), $Jssor$.$AppendChild(r, P[d]));
                    $Jssor$.$AppendChild(P[d], h);
                    e.push(c)
                });
                b = $Jssor$.$Extend({
                    $HWA: !1,
                    $AutoPlay: !1,
                    $NaviQuitDrag: !1,
                    $SlideWidth: a,
                    $SlideHeight: g,
                    $SlideSpacing: k * R + x * (1 - R),
                    $MinDragOffsetToSlide: 12,
                    $SlideDuration: 200,
                    $PauseOnHover: 1,
                    $PlayOrientation: c.$Orientation,
                    $DragOrientation: c.$DisableDrag ?
                        0 : c.$Orientation
                }, c);
                y = new $JssorSlider$(d, b);
                N = !0
            }
        };
        g.$Options = c = $Jssor$.$Extend({
            $SpacingX: 3,
            $SpacingY: 3,
            $DisplayPieces: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, b);
        $JssorDebug$.$Execute(function() {
            c = $Jssor$.$Extend({
                $Lanes: void 0,
                $Width: void 0,
                $Height: void 0
            }, c)
        });
        f = $Jssor$.$CssWidth(d);
        n = $Jssor$.$CssHeight(d);
        $JssorDebug$.$Execute(function() {
            f || $JssorDebug$.$Fail("width of 'thumbnavigator' container not specified.");
            n || $JssorDebug$.$Fail("height of 'thumbnavigator' container not specified.")
        });
        r = $Jssor$.$FindChild(d, "slides", !0);
        a = $Jssor$.$FindChild(r, "prototype");
        $JssorDebug$.$Execute(function() {
            a || $JssorDebug$.$Fail("prototype of 'thumbnavigator' not defined.")
        });
        v = $Jssor$.$CssWidth(a);
        t = $Jssor$.$CssHeight(a);
        $Jssor$.$RemoveElement(a, r);
        l = c.$Lanes || 1;
        k = c.$SpacingX;
        x = c.$SpacingY;
        w = c.$DisplayPieces
    };

function $JssorCaptionSliderBase$() {
    $JssorAnimator$.call(this, 0, 0);
    this.$Revert = $Jssor$.$EmptyFunction
}
var $JssorCaptionSlider$ = window.$JssorCaptionSlider$ = function(d, b, p) {
        function g(b, c) {
            function d(a, b) {
                var c = {};
                $Jssor$.$Each(l, function(d, k) {
                    var e = $Jssor$.$AttributeEx(a, d + (b || ""));
                    if (e) {
                        var f = {};
                        "t" == d ? f.$Value = e : e.indexOf("%") + 1 ? f.$Percent = $Jssor$.$ParseFloat(e) / 100 : f.$Value = $Jssor$.$ParseFloat(e);
                        c[k] = f
                    }
                });
                return c
            }

            function e(b) {
                var c;
                "*" == b ? c = n[Math.floor(Math.random() * n.length)] : b && (c = n[$Jssor$.$ParseInt(b)] || n[b], $Jssor$.$IsArray(c) && (b != r ? (r = b, q[b] = 0, a[b] = c[Math.floor(Math.random() * c.length)]) :
                    q[b]++, c = a[b], $Jssor$.$IsArray(c) && (c = c.length && c[q[b] % c.length], $Jssor$.$IsArray(c) && (c = c[Math.floor(Math.random() * c.length)]))), $Jssor$.$IsString(c) && (c = e(c)));
                return c
            }
            var m = [],
                r, a = [],
                q = [],
                O = $Jssor$.$Children(b);
            $Jssor$.$Each(O, function(a, b) {
                var l = [];
                l.$Elmt = a;
                var n = "caption" == $Jssor$.$AttributeEx(a, "u");
                $Jssor$.$Each(p ? [0, 3] : [2], function(b, m) {
                    if (n) {
                        var r, p;
                        2 == b && $Jssor$.$AttributeEx(a, "t3") || (p = d(a, b), 2 != b || p.$Transition || (p.$Delay = p.$Delay || {
                            $Value: 0
                        }, p = $Jssor$.$Extend(d(a, 0), p)));
                        if (p && p.$Transition &&
                            (r = e(p.$Transition.$Value))) {
                            var q = $Jssor$.$Extend({
                                $Delay: 0
                            }, r);
                            $Jssor$.$Each(p, function(a, b) {
                                var c = (k[b] || k.$Default).apply(k, [q[b], p[b]]);
                                isNaN(c) || (q[b] = c)
                            });
                            m || (p.$BeginTime ? q.$BeginTime = p.$BeginTime.$Value || 0 : f & 2 && (q.$BeginTime = 0))
                        }
                        l.push(q)
                    }
                    c % 2 && !m && (l.$Children = g(a, c + 1))
                });
                m.push(l)
            });
            return m
        }

        function q(b, c, d) {
            var k = {
                $Easing: c.$Easing,
                $Round: c.$Round,
                $During: c.$During,
                $Reverse: p && !d
            };
            $JssorDebug$.$Execute(function() {
                k.$CaptionAnimator = !0
            });
            var e = $Jssor$.$ParentNode(b),
                f = $Jssor$.$CssWidth(b),
                a = $Jssor$.$CssHeight(b);
            d = $Jssor$.$CssWidth(e);
            var l = $Jssor$.$CssHeight(e),
                e = {},
                g = {},
                h = c.$ScaleClip || 1;
            c.$Opacity && (g.$Opacity = 1 - c.$Opacity);
            k.$OriginalWidth = f;
            k.$OriginalHeight = a;
            if (c.$Zoom || c.$Rotate) {
                g.$Zoom = (c.$Zoom || 2) - 2;
                if ($Jssor$.$IsBrowserIe9Earlier() || $Jssor$.$IsBrowserOpera()) g.$Zoom = Math.min(g.$Zoom, 1);
                e.$Zoom = 1;
                g.$Rotate = 360 * (c.$Rotate || 0);
                e.$Rotate = 0
            } else if (c.$Clip) {
                var m = {
                        $Top: 0,
                        $Right: f,
                        $Bottom: a,
                        $Left: 0
                    },
                    n = $Jssor$.$Extend({}, m),
                    q = n.$Offset = {},
                    D = c.$Clip & 4,
                    P = c.$Clip & 8,
                    J = c.$Clip & 1,
                    V =
                    c.$Clip & 2;
                D && P ? (q.$Top = a / 2 * h, q.$Bottom = -q.$Top) : D ? q.$Bottom = -a * h : P && (q.$Top = a * h);
                J && V ? (q.$Left = f / 2 * h, q.$Right = -q.$Left) : J ? q.$Right = -f * h : V && (q.$Left = f * h);
                k.$Move = c.$Move;
                g.$Clip = n;
                e.$Clip = m
            }
            a = f = 0;
            c.x && (f -= d * c.x);
            c.y && (a -= l * c.y);
            if (f || a || k.$Move) g.$Left = f, g.$Top = a;
            d = c.$Duration;
            e = $Jssor$.$Extend(e, $Jssor$.$GetStyles(b, g));
            k.$Setter = $Jssor$.$StyleSetterEx();
            return new $JssorAnimator$(c.$Delay, d, k, b, e, g)
        }

        function m(b, d) {
            $Jssor$.$Each(d, function(d, k) {
                $JssorDebug$.$Execute(function() {
                    if (d.length) {
                        var a =
                            $Jssor$.$CssTop(d.$Elmt),
                            b = $Jssor$.$CssLeft(d.$Elmt),
                            c = $Jssor$.$CssWidth(d.$Elmt),
                            e = $Jssor$.$CssHeight(d.$Elmt),
                            f = null;
                        isNaN(a) ? f = "Style 'top' for caption not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'." : isNaN(b) ? f = "Style 'left' not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'." : isNaN(c) ? f = "Style 'width' not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'." :
                            isNaN(e) && (f = "Style 'height' not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'.");
                        f && $JssorDebug$.$Error("Caption " + (k + 1) + " definition error, \r\n" + f + "\r\n" + d.$Elmt.outerHTML)
                    }
                });
                var f, g = d.$Elmt,
                    a = d[0],
                    l = d[1];
                a && (f = q(g, a), b = f.$Locate(void 0 == a.$BeginTime ? b : a.$BeginTime, 1));
                b = m(b, d.$Children);
                l && (g = q(g, l, 1), g.$Locate(b, 1), c.$Combine(g), e.$Combine(g));
                f && c.$Combine(f)
            });
            return b
        }
        $JssorDebug$.$Execute(function() {
            b.$CaptionTransitions ||
                $JssorDebug$.$Error("'$CaptionSliderOptions' option error, '$CaptionSliderOptions.$CaptionTransitions' not specified.")
        });
        var c = this,
            e, f = p ? b.$PlayInMode : b.$PlayOutMode,
            n = b.$CaptionTransitions,
            l = {
                $Transition: "t",
                $Delay: "d",
                $Duration: "du",
                x: "x",
                y: "y",
                $Rotate: "r",
                $Zoom: "z",
                $Opacity: "f",
                $BeginTime: "b"
            },
            k = {
                $Default: function(b, c) {
                    return b = isNaN(c.$Value) ? b * c.$Percent : c.$Value
                },
                $Opacity: function(b, c) {
                    return this.$Default(b - 1, c)
                }
            };
        k.$Zoom = k.$Opacity;
        $JssorAnimator$.call(c, 0, 0);
        c.$Revert = function() {
            c.$GoToPosition(c.$GetPosition_OuterEnd() *
                (p || 0));
            e.$GoToBegin()
        };
        e = new $JssorAnimator$(0, 0);
        m(0, f ? g(d, 1) : [])
    },
    $JssorCaptionSlideo$ = window.$JssorCaptionSlideo$ = function(d, b, p) {
        function g(b, d) {
            var m = [],
                l = $Jssor$.$Children(b);
            $Jssor$.$Each(l, function(b, e) {
                if ("caption" == $Jssor$.$AttributeEx(b, "u")) {
                    var l = $Jssor$.$AttributeEx(b, "t"),
                        l = c[$Jssor$.$ParseInt(l)] || c[l],
                        p = $Jssor$.$AttributeEx(b, "t2"),
                        p = c[$Jssor$.$ParseInt(p)] || c[p],
                        l = {
                            $Elmt: b,
                            $Transition: l,
                            $Transition2: p
                        };
                    3 > d && m.concat(g(b, d + 1));
                    m.push(l)
                }
            });
            return m
        }

        function q(b, c, d, g) {
            $Jssor$.$Each(c,
                function(c) {
                    var f = {
                            $Easing: c.$Easing,
                            $Round: c.$Round,
                            $During: c.$During,
                            $Setter: $Jssor$.$StyleSetterEx()
                        },
                        q = $Jssor$.$Extend($Jssor$.$GetStyles(captionItem, c), d),
                        t = new $JssorAnimator$(c.$Begin || 0, (c.$End || 0) - (c.$Begin || 0), f, b, q, c);
                    !g == !p && m.$Combine(t);
                    d = $Jssor$.$Extend(d, $Jssor$.$Cast(q, c, 1, f.$Easing, f.$During, f.$Round, f, void 0))
                });
            return d
        }
        $JssorDebug$.$Execute(function() {
            b.$CaptionTransitions ? $Jssor$.$IsArray(b.$CaptionTransitions) || $JssorDebug$.$Error("'$CaptionSlideoOptions' option error, '$CaptionSlideoOptions.$CaptionTransitions' is not an array.") :
                $JssorDebug$.$Error("'$CaptionSlideoOptions' option error, '$CaptionSlideoOptions.$CaptionTransitions' not specified.")
        });
        var m = this,
            c = b.$CaptionTransitions;
        $JssorAnimator$.call(m, 0, 0);
        m.$Revert = function() {
            m.$GoToPosition(-1, !0)
        };
        (function(b) {
            $Jssor$.$Each(b, function(b, c) {
                $JssorDebug$.$Execute(function() {
                    if (b.length) {
                        var d = $Jssor$.$CssTop(b.$Elmt),
                            e = $Jssor$.$CssLeft(b.$Elmt),
                            g = $Jssor$.$CssWidth(b.$Elmt),
                            k = $Jssor$.$CssHeight(b.$Elmt),
                            l = null;
                        isNaN(d) ? l = "style 'top' not specified" : isNaN(e) ? l = "style 'left' not specified" :
                            isNaN(g) ? l = "style 'width' not specified" : isNaN(k) && (l = "style 'height' not specified");
                        if (l) throw Error("Caption " + (c + 1) + " definition error, " + l + ".\r\n" + b.$Elmt.outerHTML);
                    }
                });
                var d = b.$Elmt,
                    e = $Jssor$.$CssWidth(b),
                    g = $Jssor$.$CssHeight(b);
                $Jssor$.$CssWidth(captionParent);
                $Jssor$.$CssHeight(captionParent);
                e = {
                    $Zoom: 1,
                    $Rotate: 0,
                    $Clip: {
                        $Top: 0,
                        $Right: e,
                        $Bottom: g,
                        $Left: 0
                    }
                };
                e = q(d, b.$Transition, e, !0);
                q(d, b.$Transition2, e, !1)
            })
        })(g(d, 1))
    };