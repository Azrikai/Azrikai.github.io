/* Page « Tout le reste » : une bulle choisie affiche sa fiche dans le panneau. Aucune dépendance. */
(function () {
  'use strict';
  var bubbles = Array.prototype.slice.call(document.querySelectorAll('.t-bub'));
  var panel = document.querySelector('.t-panel'), close = document.querySelector('.t-close');

  // Sur petit écran, la fiche monte du bas de l'écran quand on choisit une bulle
  function shut() { panel.classList.remove('t-open'); }
  close.addEventListener('click', shut);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') shut(); });

  function pick(chosen) {
    panel.classList.add('t-open');
    bubbles.forEach(function (b) {
      var on = b === chosen, card = document.getElementById(b.getAttribute('aria-controls'));
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      if (card) card.hidden = !on;
    });
    // La bulle choisie rebondit ; la classe est retirée à la fin pour rendre la main au flottement
    var skin = chosen.querySelector('.t-bub-in');
    skin.classList.remove('t-pop');
    void skin.offsetWidth;
    skin.classList.add('t-pop');
  }

  bubbles.forEach(function (b) {
    b.addEventListener('click', function () { pick(b); });
    b.querySelector('.t-bub-in').addEventListener('animationend', function (e) {
      if (e.animationName === 't-pop') e.currentTarget.classList.remove('t-pop');
    });
  });
})();
