/* ==========================================================================
   site.js — mobilní menu a animace při scrollu
   Bez závislostí. Načítá se s atributem defer.
   ========================================================================== */

(function () {
  'use strict';

  /* --- Mobilní menu ------------------------------------------------------ */

  var burger = document.querySelector('[data-burger]');
  var mnav = document.querySelector('[data-mnav]');

  if (burger && mnav) {
    var lastFocus = null;

    var focusables = function () {
      return Array.prototype.slice.call(
        mnav.querySelectorAll('a[href], button:not([disabled])')
      );
    };

    var setMenu = function (open) {
      burger.setAttribute('aria-expanded', String(open));
      mnav.setAttribute('data-open', String(open));
      mnav.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';

      if (open) {
        lastFocus = burger;
        // Panel je do téhle chvíle visibility:hidden. Bez vynuceného přepočtu
        // stylu by focus() na skrytý prvek neudělal nic.
        void mnav.offsetHeight;
        var f = focusables();
        if (f.length) { f[0].focus(); }
      } else if (lastFocus) {
        lastFocus.focus();
        lastFocus = null;
      }
    };

    burger.addEventListener('click', function () {
      setMenu(burger.getAttribute('aria-expanded') !== 'true');
    });

    // Esc zavírá, Tab cyklí uvnitř otevřeného menu.
    document.addEventListener('keydown', function (e) {
      if (burger.getAttribute('aria-expanded') !== 'true') { return; }

      if (e.key === 'Escape') {
        setMenu(false);
        return;
      }
      if (e.key !== 'Tab') { return; }

      var f = focusables();
      if (!f.length) { return; }
      var first = f[0];
      var last = f[f.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    // Při přechodu na desktop nesmí zůstat zamčený scroll.
    var wide = window.matchMedia('(min-width: 75em)');
    var onWide = function (e) { if (e.matches) { setMenu(false); } };
    if (wide.addEventListener) { wide.addEventListener('change', onWide); }
    else if (wide.addListener) { wide.addListener(onWide); }

    // Odkaz v menu může vést na kotvu na téže stránce (např. #obsah),
    // kde by se stránka nepřenačetla a menu zůstalo viset přes obsah.
    // Focus se pak nevrací na burger, ať neruší skok na kotvu.
    mnav.addEventListener('click', function (e) {
      if (!e.target.closest('a[href]')) { return; }
      lastFocus = null;
      setMenu(false);
    });

    mnav.setAttribute('aria-hidden', 'true');
  }

  /* --- Rozbalovací nabídka v navigaci (Galerie) ---------------------------
     Myší se otevírá v CSS přes :hover. Tady je ovládání pro klávesnici
     a dotyk: tlačítko přepíná .is-open, Esc a odchod focusu ven zavírají. */

  Array.prototype.forEach.call(document.querySelectorAll('[data-dd]'), function (dd) {
    var btn = dd.querySelector('[data-dd-btn]');
    if (!btn) { return; }

    var setDd = function (open) {
      dd.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
    };

    btn.addEventListener('click', function () {
      setDd(btn.getAttribute('aria-expanded') !== 'true');
    });

    dd.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape' || btn.getAttribute('aria-expanded') !== 'true') { return; }
      setDd(false);
      btn.focus();
    });

    dd.addEventListener('focusout', function (e) {
      if (!e.relatedTarget || !dd.contains(e.relatedTarget)) { setDd(false); }
    });

    document.addEventListener('click', function (e) {
      if (!dd.contains(e.target)) { setDd(false); }
    });

    // Po výběru oblasti na téže stránce se nabídka zavře.
    dd.addEventListener('click', function (e) {
      if (e.target.closest('.nav__suba')) { setDd(false); }
    });
  });

  /* --- Animace při scrollu ------------------------------------------------
     Jemný posun, jednou, s krátkým odstupem podle pořadí v kontejneru.
     Když uživatel animace nechce, prvky se rovnou zobrazí.                 */

  var risers = document.querySelectorAll('.rise');
  if (!risers.length) { return; }

  var noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (noMotion || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(risers, function (el) { el.classList.add('is-in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) { return; }
      var el = entry.target;
      var step = parseInt(el.getAttribute('data-rise-step') || '0', 10);
      el.style.transitionDelay = Math.min(step, 5) * 70 + 'ms';
      el.classList.add('is-in');
      io.unobserve(el);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  Array.prototype.forEach.call(risers, function (el) { io.observe(el); });
}());
