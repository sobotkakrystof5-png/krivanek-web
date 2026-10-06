/* ==========================================================================
   logos.js — pruh log „Spolupracuji s“
   Zdvojuje stopu, aby posun navazoval bez ohledu na počet položek.
   Klon je pro odečítače schovaný, aby se názvy nečetly dvakrát.
   ========================================================================== */

(function () {
  'use strict';

  var track = document.querySelector('[data-logos]');
  if (!track) { return; }

  // Bez animace nemá zdvojení smysl, jen by to zdvojilo obsah na stránce.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { return; }

  var items = Array.prototype.slice.call(track.children);
  if (!items.length) { return; }

  items.forEach(function (li) {
    var clone = li.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });
}());
