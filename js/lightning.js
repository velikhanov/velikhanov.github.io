(function() {
    let t, n, a, e, i, r, o, h, d, l;
    n = document.getElementById("canvas");
    if (!n) return;
    a = n.getContext("2d");
    l = 0;
    e = 0;
    i = (new Date).getTime();
    t = [];

    h = function() {
        let a, i, r;
        n.setAttribute("width", window.innerWidth);
        n.setAttribute("height", window.innerHeight);
        for (i = 0, r = t.length; i < r; i++) {
            a = t[i];
            a.canvas.width = window.innerWidth;
            a.canvas.height = window.innerHeight;
        }
        l = Math.ceil(window.innerWidth / 1);
        e = Math.ceil(window.innerHeight / 1);
    };

    r = function(n, a, e, i) {
        let r, h;
        r = document.createElement("canvas");
        r.width = window.innerWidth;
        r.height = window.innerHeight;
        h = r.getContext("2d");
        h.scale(1, 1);
        t.push({
            canvas: r,
            duration: 0
        });
        o(n, a, e, i, h);
    };

    o = function(t, n, a, e, i) {
        let r, h;
        h = e;
        r = setInterval(function() {
            let d, l, M, w;
            if (a <= 0) {
                clearInterval(r);
            } else {
                for (l = 0; l++ < Math.floor(45) && a > 0;) {
                    M = Math.floor(t);
                    w = Math.floor(n);
                    t += Math.cos(e);
                    n -= Math.sin(e);
                    a--;
                    if (M !== Math.floor(t) || w !== Math.floor(n)) {
                        d = Math.min(1, a / 350);
                        
                        // Theme-aware lightning color
                        const theme = document.documentElement.getAttribute('data-theme');
                        if (theme === 'light') {
                            // Darker blue/grey lightning for light theme
                            i.fillStyle = "rgba(0, 113, 227, " + d + ")";
                        } else {
                            // Classic white lightning for dark theme
                            i.fillStyle = "rgba(255, 255, 255, " + d + ")";
                        }
                        
                        i.fillRect(M, w, 1, 1);
                        e = h + (-Math.PI / 8 + Math.random() * (Math.PI / 4));
                        if (Math.random() > .98) {
                            o(M, w, a * (.3 + .4 * Math.random()), h + (-Math.PI / 6 + Math.random() * (Math.PI / 3)), i);
                        } else if (Math.random() > .95) {
                            o(M, w, a, h + (-Math.PI / 6 + Math.random() * (Math.PI / 3)), i);
                            a = 0;
                        }
                    }
                }
            }
        }, 10);
    };

    d = function() {
        let n, o, h, d, M, w, c, f, m;
        o = ((h = (new Date).getTime()) - i) / 1e3;
        i = h;
        a.clearRect(0, 0, window.innerWidth, window.innerHeight);
        
        if (Math.random() > .98) {
            w = Math.floor(Math.random() * (l + 20) - 10);
            c = Math.floor(5 + Math.random() * (e / 3));
            M = Math.floor(e / 2 + Math.random() * (e / 3));
            r(w, c, M, 3 * Math.PI / 2);
        }
        
        for (d = 0, f = 0, m = t.length; f < m; d = ++f) {
            n = t[d];
            n.duration += o;
            if (n.duration >= .75) {
                t.splice(d, 1);
                d--;
                m--;
            } else {
                a.globalAlpha = Math.max(0, Math.min(1, (.75 - n.duration) / .5));
                a.drawImage(n.canvas, 0, 0);
            }
        }
    };

    window.addEventListener("resize", h);
    h();
    setInterval(d, 1000 / 45);
}).call(this);
