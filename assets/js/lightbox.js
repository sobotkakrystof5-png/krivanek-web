/* ==========================================================================
   lightbox.js — sdílený lightbox pro galerii i podstránky oblastí
   Dokud nejsou reálné fotky, zvětšuje placeholder i s popiskem. Až fotky
   přijdou, stačí do spouštěče doplnit data-lb-src; zbytek kódu se nemění.
   Ovládání: klik, Enter/Mezerník, šipky, Esc. Focus zůstává uvnitř.
   ========================================================================== */

(function () {
  'use strict';

  var triggers = Array.prototype.slice.call(document.querySelectorAll('[data-lb]'));
  if (!triggers.length) { return; }

  var current = -1;
  var lastFocus = null;
  var visible = triggers.slice();

  /* --- Sestavení dialogu (jen jednou, na konci body) --------------------- */

  var box = document.createElement('div');
  box.className = 'lb';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Zvětšený náhled');
  box.hidden = true;
  box.innerHTML =
    '<div class="lb__backdrop" data-lb-close></div>' +
    '<div class="lb__panel">' +
      '<button class="lb__x" type="button" data-lb-close aria-label="Zavřít náhled">' +
        '<span aria-hidden="true">✕</span></button>' +
      '<button class="lb__nav lb__nav--prev" type="button" data-lb-prev aria-label="Předchozí">' +
        '<span aria-hidden="true">←</span></button>' +
      '<figure class="lb__fig">' +
        '<div class="lb__stage" data-lb-stage></div>' +
        '<figcaption class="lb__cap">' +
          '<span class="lb__count" data-lb-count></span>' +
          '<span class="lb__text" data-lb-text></span>' +
        '</figcaption>' +
      '</figure>' +
      '<button class="lb__nav lb__nav--next" type="button" data-lb-next aria-label="Další">' +
        '<span aria-hidden="true">→</span></button>' +
    '</div>';
  document.body.appendChild(box);

  var stage = box.querySelector('[data-lb-stage]');
  var capText = box.querySelector('[data-lb-text]');
  var capCount = box.querySelector('[data-lb-count]');
  var btnPrev = box.querySelector('[data-lb-prev]');
  var btnNext = box.querySelector('[data-lb-next]');

  /* --- Vykreslení jedné položky ----------------------------------------- */

  var render = function (i) {
    var trg = visible[i];
    if (!trg) { return; }
    current = i;

    var src = trg.getAttribute('data-lb-src');
    var text = trg.getAttribute('data-lb-caption') || '';
    var ratio = trg.getAttribute('data-lb-ratio') || '4 / 3';

    stage.innerHTML = '';
    stage.style.setProperty('--lb-ar', ratio);

    if (src) {
      var img = document.createElement('img');
      img.src = src;
      img.alt = text;
      img.className = 'lb__img';
      stage.appendChild(img);
    } else {
      // Placeholder. Kopíruje rámeček z mřížky, jen ve větším.
      var frame = document.createElement('div');
      frame.className = 'lb__ph';
      frame.textContent = 'Zde bude fotka';
      stage.appendChild(frame);
    }

    capText.textContent = text;
    capCount.textContent = (i + 1) + ' / ' + visible.length;

    var one = visible.length < 2;
    btnPrev.hidden = one;
    btnNext.hidden = one;
  };

  var step = function (d) {
    if (visible.length < 2) { return; }
    render((current + d + visible.length) % visible.length);
  };

  /* --- Otevření a zavření ------------------------------------------------ */

  var open = function (trg) {
    // Každá stránka má jednu sadu fotek, šipky jedou po celé sadě.
    var i = visible.indexOf(trg);
    if (i < 0) { return; }

    // Spouštěč si pamatujeme přímo. document.activeElement by selhal tam,
    // kde kliknutí prvek nezaostří, a focus by se po zavření vrátil do prázdna.
    lastFocus = trg;
    box.hidden = false;
    document.body.style.overflow = 'hidden';
    render(i);
    // Zavírací tlačítko je první bezpečný cíl focusu.
    box.querySelector('.lb__x').focus();
  };

  var close = function () {
    box.hidden = true;
    document.body.style.overflow = '';
    stage.innerHTML = '';
    if (lastFocus) { lastFocus.focus(); lastFocus = null; }
  };

  /* --- Události ---------------------------------------------------------- */

  triggers.forEach(function (trg) {
    trg.addEventListener('click', function (e) {
      e.preventDefault();
      open(trg);
    });
  });

  box.addEventListener('click', function (e) {
    if (e.target.closest('[data-lb-close]')) { close(); return; }
    if (e.target.closest('[data-lb-prev]')) { step(-1); return; }
    if (e.target.closest('[data-lb-next]')) { step(1); }
  });

  document.addEventListener('keydown', function (e) {
    if (box.hidden) { return; }

    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); return; }
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1); return; }
    if (e.key !== 'Tab') { return; }

    var f = Array.prototype.slice.call(
      box.querySelectorAll('button:not([hidden])')
    );
    if (!f.length) { return; }
    var first = f[0];
    var last = f[f.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  });
}());
