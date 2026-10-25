/* ======================================================================
   hero-slider.js — střídání úvodních fotografií
   Bez závislostí. Automatické přepínání respektuje omezení pohybu.
   ====================================================================== */

(function () {
  'use strict';

  var carousel = document.querySelector('[data-home-carousel]');
  if (!carousel) { return; }

  var slides = Array.prototype.slice.call(carousel.querySelectorAll('[data-home-slide]'));
  var selectors = Array.prototype.slice.call(carousel.querySelectorAll('[data-hero-select]'));
  var controls = carousel.querySelector('[data-hero-controls]');
  var toggle = carousel.querySelector('[data-hero-toggle]');
  var motion = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  var active = 0;
  var paused = false;
  var timer = null;
  var delay = 5000;

  if (slides.length < 2 || selectors.length !== slides.length || !controls || !toggle) { return; }

  function stop() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  function show(index) {
    active = (index + slides.length) % slides.length;

    slides.forEach(function (slide, i) {
      slide.classList.toggle('is-active', i === active);
    });
    selectors.forEach(function (button, i) {
      button.setAttribute('aria-current', String(i === active));
    });
  }

  function start() {
    stop();
    if (paused || document.hidden || (motion && motion.matches)) { return; }

    timer = window.setInterval(function () {
      show(active + 1);
    }, delay);
  }

  function syncToggle() {
    var reduced = motion && motion.matches;
    toggle.hidden = Boolean(reduced);
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.setAttribute(
      'aria-label',
      paused ? 'Pokračovat ve střídání fotografií' : 'Pozastavit střídání fotografií'
    );
  }

  selectors.forEach(function (button) {
    button.addEventListener('click', function () {
      show(Number(button.getAttribute('data-hero-select')));
      start();
    });
  });

  toggle.addEventListener('click', function () {
    paused = !paused;
    syncToggle();
    start();
  });

  document.addEventListener('visibilitychange', start);

  function onMotionChange() {
    syncToggle();
    start();
  }

  if (motion) {
    if (motion.addEventListener) { motion.addEventListener('change', onMotionChange); }
    else if (motion.addListener) { motion.addListener(onMotionChange); }
  }

  syncToggle();
  controls.hidden = false;
  start();
}());
