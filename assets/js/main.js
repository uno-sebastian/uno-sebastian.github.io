/* Renders the page from window.SITE (content.js). You shouldn't need to edit
   this file to change what the site says; edit content.js instead. */
(function () {
  "use strict";

  var S = window.SITE;
  if (!S) return;

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Tiny markdown: **bold** and [text](url)
  function md(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }

  function all(sel) {
    return Array.prototype.slice.call(document.querySelectorAll(sel));
  }

  function bind(key, html) {
    all('[data-bind="' + key + '"]').forEach(function (el) {
      el.innerHTML = html;
    });
  }

  function ext(url) {
    return /^https?:/.test(url) ? ' target="_blank" rel="noopener"' : "";
  }

  var ICONS = {
    email: '<path d="M3 6.5h18v11H3z"/><path d="m3.5 7 8.5 6.5L20.5 7"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5V17M8 7.5v.01M12 17v-3.6c0-1.6 1-2.6 2.3-2.6s2.2 1 2.2 2.6V17M12 10.5V17"/>',
    github: '<path d="M9 19c-4.5 1.4-4.5-2.2-6.3-2.7m12.6 4.5v-3.3c0-1 .1-1.4-.5-2 2.8-.3 5.7-1.4 5.7-6.2a4.8 4.8 0 0 0-1.3-3.3 4.5 4.5 0 0 0-.1-3.3s-1.1-.3-3.5 1.3a12 12 0 0 0-6.3 0C6.9 2.4 5.8 2.7 5.8 2.7a4.5 4.5 0 0 0-.1 3.3A4.8 4.8 0 0 0 4.4 9.3c0 4.8 2.9 5.9 5.7 6.2-.6.6-.6 1.2-.5 2V21"/>',
    artstation: '<path d="M3 16.5 4.8 19.5h11.5l-1.8-3z"/><path d="m9.5 4.5 10.8 18.6M9.5 4.5 2.7 16.3M9.5 4.5h3.6l8.6 14.9-1.4 2.6"/>',
    sketchfab: '<path d="M12 2.8 20.5 7.5v9L12 21.2 3.5 16.5v-9z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9.2"/>',
    arrow: '<path d="M7 17 17 7M9 7h8v8"/>',
    play: '<path d="M8 5.5v13l11-6.5z"/>',
  };
  function icon(name, cls) {
    return '<svg class="' + (cls || "icon") + '" viewBox="0 0 24 24" aria-hidden="true">' + ICONS[name] + "</svg>";
  }

  var LINK_LABELS = { email: "Email", linkedin: "LinkedIn", github: "GitHub", artstation: "ArtStation", sketchfab: "Sketchfab" };
  function linkUrl(key, val) {
    return key === "email" ? "mailto:" + val : val;
  }

  // Simple drawn covers for work items that don't have an image.
  var GLYPHS = {
    traffic:
      '<svg viewBox="0 0 320 180" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.2" opacity=".35"><path d="M-10 140C60 90 120 160 180 110S290 40 330 70"/><path d="M-10 60C70 80 110 20 190 50S280 140 330 120"/><path d="M40 190C70 120 150 100 160 -10"/><path d="M230 190C220 130 260 60 300 -10"/></g>' +
      (function () {
        var d = "";
        for (var i = 0; i < 70; i++) {
          var x = (i * 47) % 320, y = (i * 83) % 180;
          d += '<circle class="g-dot" cx="' + x + '" cy="' + y + '" r="' + (i % 5 === 0 ? 2.6 : 1.6) + '" style="animation-delay:-' + (i % 9) * 0.37 + 's"/>';
        }
        return d;
      })() +
      "</svg>",
    chart:
      '<svg viewBox="0 0 320 180" aria-hidden="true"><g class="g-bars">' +
      [38, 34, 36, 44, 92, 100, 58]
        .map(function (h, i) {
          var x = 40 + i * 36, hot = i === 4 || i === 5;
          return '<rect x="' + x + '" y="' + (150 - h) + '" width="22" height="' + h + '" rx="3" class="' + (hot ? "hot" : "") + '"/>' +
            '<text x="' + (x + 11) + '" y="168" text-anchor="middle">' + "MTWTFSS"[i] + "</text>";
        })
        .join("") +
      '</g><path d="M40 150H290" stroke="currentColor" opacity=".3"/></svg>',
    vr:
      '<svg viewBox="0 0 320 180" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"><path d="M98 66h124a18 18 0 0 1 18 18v26a18 18 0 0 1-18 18h-34l-14-16h-28l-14 16H98a18 18 0 0 1-18-18V84a18 18 0 0 1 18-18Z"/><path d="M80 92H66M240 92h14" opacity=".6"/><circle class="g-pulse" cx="128" cy="96" r="13"/><circle class="g-pulse" cx="192" cy="96" r="13" style="animation-delay:-.6s"/><path d="M110 50c30-14 70-14 100 0" opacity=".4"/></svg>',
    app:
      '<svg viewBox="0 0 320 180" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="60" y="30" width="200" height="124" rx="10" opacity=".7"/><path d="M60 54h200" opacity=".5"/><circle cx="74" cy="42" r="3" fill="currentColor"/><circle cx="85" cy="42" r="3" fill="currentColor" opacity=".6"/><g opacity=".55"><path d="M76 72h56M76 92h56M76 112h56M76 132h56"/></g><g class="g-rows"><path d="M146 72h98"/><path d="M146 92h70"/><path d="M146 112h88"/><path d="M146 132h50"/></g></svg>',
  };

  // ---------------------------------------------------------------------------
  // Sections
  // ---------------------------------------------------------------------------
  bind("name", esc(S.name));
  bind("location", esc(S.location));
  bind("headline", esc(S.headline));
  bind("specialties", (S.specialties || []).map(esc).join(' <span class="dot">·</span> '));
  bind("intro", md(S.intro));
  bind("availability", md(S.availability));
  bind("year", String(new Date().getFullYear()));

  var linkKeys = Object.keys(S.links || {});
  bind(
    "social",
    linkKeys
      .map(function (k) {
        var url = linkUrl(k, S.links[k]);
        return '<li><a href="' + esc(url) + '"' + ext(url) + ' aria-label="' + LINK_LABELS[k] + '" title="' + LINK_LABELS[k] + '">' + icon(k) + "</a></li>";
      })
      .join("")
  );

  bind(
    "contact",
    linkKeys
      .map(function (k, i) {
        var url = linkUrl(k, S.links[k]);
        return '<a class="btn ' + (i === 0 ? "btn-primary" : "btn-ghost") + '" href="' + esc(url) + '"' + ext(url) + ">" + icon(k) + "<span>" + (k === "email" ? esc(S.links[k]) : LINK_LABELS[k]) + "</span></a>";
      })
      .join("")
  );

  bind(
    "stats",
    (S.stats || [])
      .map(function (s) {
        return '<li><span class="stat-value">' + esc(s.value) + '</span><span class="stat-label">' + esc(s.label) + "</span></li>";
      })
      .join("")
  );

  bind("brands", (S.brands || []).map(function (b) { return "<li>" + esc(b) + "</li>"; }).join(""));

  bind("about", (S.about || []).map(function (p) { return "<p>" + md(p) + "</p>"; }).join(""));

  function mediaHtml(m, title) {
    if (!m) return "";
    if (m.image) {
      var img = '<img src="' + esc(m.image) + '" alt="' + esc(m.alt || title) + '" loading="lazy" width="960" height="540" />';
      if (m.video) {
        return '<button class="media media-video" type="button" data-video="' + esc(m.video) + '" aria-label="Play video: ' + esc(title) + '">' + img + '<span class="play">' + icon("play") + "</span></button>";
      }
      return '<div class="media">' + img + "</div>";
    }
    if (m.icon) {
      return '<div class="media media-icon"><img src="' + esc(m.icon) + '" alt="' + esc(m.alt || title) + '" loading="lazy" width="120" height="120" /></div>';
    }
    if (m.glyph && GLYPHS[m.glyph]) {
      return '<div class="media media-glyph glyph-' + esc(m.glyph) + '">' + GLYPHS[m.glyph] + "</div>";
    }
    return "";
  }

  function linksHtml(links) {
    if (!links || !links.length) return "";
    return (
      '<div class="card-links">' +
      links
        .map(function (l) {
          return '<a href="' + esc(l.url) + '"' + ext(l.url) + ">" + esc(l.label) + icon("arrow", "icon icon-sm") + "</a>";
        })
        .join("") +
      "</div>"
    );
  }

  function tagsHtml(tags) {
    if (!tags || !tags.length) return "";
    return '<ul class="tags">' + tags.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
  }

  bind(
    "work",
    (S.work || [])
      .map(function (w, i) {
        return (
          '<article class="card work-card reveal' + (i < 2 ? " work-feature" : "") + '">' +
          mediaHtml(w.media, w.title) +
          '<div class="card-body">' +
          '<p class="card-meta"><span>' + esc(w.client) + '</span><span class="card-year">' + esc(w.year) + "</span></p>" +
          "<h3>" + esc(w.title) + "</h3>" +
          "<p>" + md(w.summary) + "</p>" +
          tagsHtml(w.tags) +
          linksHtml(w.links) +
          "</div></article>"
        );
      })
      .join("")
  );

  var SHOW = 3; // bullets visible before "Show more"
  bind(
    "experience",
    (S.experience || [])
      .map(function (e, i) {
        var bullets = e.bullets || [];
        var extra = bullets.length > SHOW;
        return (
          '<li class="tl-item reveal">' +
          '<div class="tl-when"><span>' + esc(e.dates) + "</span><span class=\"tl-where\">" + esc(e.location) + "</span></div>" +
          '<div class="tl-body">' +
          "<h3>" + esc(e.role) + ' <span class="tl-at">at</span> <span class="tl-company">' + esc(e.company) + "</span></h3>" +
          (e.note ? '<p class="tl-note">' + md(e.note) + "</p>" : "") +
          '<ul class="tl-bullets" id="tl-' + i + '">' +
          bullets
            .map(function (b, j) {
              return "<li" + (j >= SHOW ? ' class="is-extra"' : "") + ">" + md(b) + "</li>";
            })
            .join("") +
          "</ul>" +
          (extra
            ? '<button class="more" type="button" aria-expanded="false" aria-controls="tl-' + i + '">Show ' + (bullets.length - SHOW) + " more</button>"
            : "") +
          tagsHtml(e.tech) +
          "</div></li>"
        );
      })
      .join("")
  );

  bind(
    "projects",
    (S.projects || [])
      .map(function (p) {
        return (
          '<article class="card project-card reveal">' +
          (p.media ? mediaHtml(p.media, p.title) : "") +
          '<div class="card-body">' +
          "<h3>" + esc(p.title) + (p.status ? ' <span class="badge">' + esc(p.status) + "</span>" : "") + "</h3>" +
          "<p>" + md(p.summary) + "</p>" +
          tagsHtml(p.tags) +
          linksHtml(p.links) +
          "</div></article>"
        );
      })
      .join("")
  );

  bind(
    "skills",
    (S.skills || [])
      .map(function (g) {
        return '<div class="skill-group reveal"><h3>' + esc(g.group) + "</h3>" + tagsHtml(g.items) + "</div>";
      })
      .join("")
  );

  bind(
    "education",
    (S.education || [])
      .map(function (e) {
        return (
          "<li><strong>" + esc(e.title) + "</strong><span>" + esc(e.school) + " · " + esc(e.dates) +
          (e.note ? " · " + esc(e.note) : "") + "</span></li>"
        );
      })
      .join("")
  );

  bind("languages", (S.languages || []).map(esc).join(" · "));

  // ---------------------------------------------------------------------------
  // Interactions
  // ---------------------------------------------------------------------------

  // "Show more" on experience entries
  all(".more").forEach(function (btn) {
    var label = btn.textContent;
    btn.addEventListener("click", function () {
      var list = document.getElementById(btn.getAttribute("aria-controls"));
      var open = list.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
      btn.textContent = open ? "Show less" : label;
    });
  });

  // Theme toggle
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  function currentTheme() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  toggle.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // Video modal (Vimeo)
  var modal = document.querySelector(".video-modal");
  var frame = modal.querySelector(".video-frame");
  var lastFocus = null;
  function openVideo(id) {
    lastFocus = document.activeElement;
    frame.innerHTML =
      '<iframe src="https://player.vimeo.com/video/' + encodeURIComponent(id) +
      '?autoplay=1&dnt=1&title=0&byline=0&portrait=0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Video"></iframe>';
    modal.hidden = false;
    document.body.classList.add("no-scroll");
    modal.querySelector(".video-modal-close").focus();
  }
  function closeVideo() {
    modal.hidden = true;
    frame.innerHTML = "";
    document.body.classList.remove("no-scroll");
    if (lastFocus) lastFocus.focus();
  }
  document.addEventListener("click", function (e) {
    var v = e.target.closest("[data-video]");
    if (v) { openVideo(v.getAttribute("data-video")); return; }
    if (e.target.closest("[data-close]")) closeVideo();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) closeVideo();
  });

  // Header shadow on scroll + active nav link
  var header = document.querySelector(".site-header");
  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window) {
    var navLinks = all(".nav a");
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          navLinks.forEach(function (a) {
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    all("main section[id]").forEach(function (s) { sectionObserver.observe(s); });

    if (!reduceMotion) {
      root.classList.add("js-reveal");
      var revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) {
              en.target.classList.add("is-visible");
              revealObserver.unobserve(en.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px" }
      );
      all(".reveal").forEach(function (el) { revealObserver.observe(el); });
    }
  }

  // ---------------------------------------------------------------------------
  // Hero: a small real-time 3D point field (canvas 2D, no libraries)
  // ---------------------------------------------------------------------------
  var canvas = document.querySelector(".hero-canvas");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  var W = 0, H = 0, DPR = 1;

  // Points on a torus knot, plus a loose shell of particles
  var pts = [];
  var N = 420;
  for (var i = 0; i < N; i++) {
    var t = (i / N) * Math.PI * 2;
    var p = 2, q = 3, r = Math.cos(q * t) + 2.2;
    pts.push({ x: r * Math.cos(p * t), y: r * Math.sin(p * t), z: -Math.sin(q * t) * 1.1, k: 1 });
  }
  for (var j = 0; j < 160; j++) {
    var u = Math.random() * Math.PI * 2, v = Math.acos(2 * Math.random() - 1), rr = 4.2 + Math.random() * 1.6;
    pts.push({ x: rr * Math.sin(v) * Math.cos(u), y: rr * Math.sin(v) * Math.sin(u), z: rr * Math.cos(v), k: 0 });
  }

  var rotX = 0.5, rotY = 0, targetX = 0.5, targetY = 0, mouseX = 0, mouseY = 0;

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    var rect = canvas.getBoundingClientRect();
    W = rect.width; H = rect.height;
    canvas.width = Math.round(W * DPR);
    canvas.height = Math.round(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  function color(name) {
    return getComputedStyle(root).getPropertyValue(name).trim() || "#5eead4";
  }

  var cA = color("--accent"), cB = color("--accent-2");
  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: light)");
    var refresh = function () { cA = color("--accent"); cB = color("--accent-2"); if (reduceMotion) draw(0); };
    if (mq.addEventListener) mq.addEventListener("change", refresh);
    new MutationObserver(refresh).observe(root, { attributes: true, attributeFilter: ["data-theme"] });
  }

  function draw(time) {
    rotY += reduceMotion ? 0 : 0.0025;
    targetX = 0.5 + mouseY * 0.25;
    rotX += (targetX - rotX) * 0.05;
    var ry = rotY + mouseX * 0.4;

    ctx.clearRect(0, 0, W, H);
    var wide = W > 860;
    var cx = wide ? W * 0.74 : W * 0.5;
    var cy = wide ? H * 0.5 : H * 0.32;
    var scale = Math.min(W, H) * (wide ? 0.075 : 0.06);
    var sinX = Math.sin(rotX), cosX = Math.cos(rotX), sinY = Math.sin(ry), cosY = Math.cos(ry);
    var proj = [];
    for (var i = 0; i < pts.length; i++) {
      var P = pts[i];
      var x = P.x * cosY - P.z * sinY;
      var z = P.x * sinY + P.z * cosY;
      var y = P.y * cosX - z * sinX;
      z = P.y * sinX + z * cosX;
      var f = 9 / (9 + z);
      proj.push({ x: cx + x * scale * f, y: cy + y * scale * f, z: z, f: f, k: P.k });
    }
    // knot line
    ctx.lineWidth = 1;
    ctx.strokeStyle = cA;
    ctx.globalAlpha = 0.22;
    ctx.beginPath();
    for (var a = 0; a <= N; a++) {
      var pa = proj[a % N];
      if (a === 0) ctx.moveTo(pa.x, pa.y); else ctx.lineTo(pa.x, pa.y);
    }
    ctx.stroke();
    // points
    for (var b = 0; b < proj.length; b++) {
      var pp = proj[b];
      var depth = (pp.z + 5) / 10;
      ctx.globalAlpha = pp.k ? 0.35 + 0.6 * (1 - depth) : 0.12 + 0.25 * (1 - depth);
      ctx.fillStyle = pp.k ? (b % 7 === 0 ? cB : cA) : cA;
      var s = (pp.k ? 1.9 : 1.2) * pp.f;
      ctx.fillRect(pp.x - s / 2, pp.y - s / 2, s, s);
    }
    ctx.globalAlpha = 1;
    if (!reduceMotion && running) requestAnimationFrame(draw);
  }

  var running = true;
  resize();
  window.addEventListener("resize", function () { resize(); if (reduceMotion) draw(0); });
  window.addEventListener("pointermove", function (e) {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });

  // Pause the animation when the hero is off-screen.
  if ("IntersectionObserver" in window && !reduceMotion) {
    new IntersectionObserver(function (entries) {
      var vis = entries[0].isIntersecting;
      if (vis && !running) { running = true; requestAnimationFrame(draw); }
      else if (!vis) running = false;
    }).observe(canvas);
  }
  requestAnimationFrame(draw);
})();
