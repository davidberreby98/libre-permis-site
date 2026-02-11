/**
 * Libre Permis — Script principal (page Accueil)
 * Menu mobile : ouverture / fermeture, accessibilité (aria-expanded)
 */

(function () {
  "use strict";

  var burger = document.querySelector(".header__burger");
  var nav = document.querySelector("#nav-main");

  if (!burger || !nav) return;

  function openMenu() {
    burger.setAttribute("aria-expanded", "true");
    nav.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    burger.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    var isOpen = burger.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  burger.addEventListener("click", toggleMenu);

  // Fermer le menu au clic sur un lien (navigation effective)
  nav.querySelectorAll(".nav__link").forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  // Fermer au focus en dehors (optionnel, évite menu coincé)
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      closeMenu();
    }
  });
})();
