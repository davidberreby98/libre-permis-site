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
  nav.querySelectorAll(".nav__link, .nav__dropdown a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (this.parentElement && this.parentElement.classList.contains("nav__item--dropdown") && window.innerWidth < 1024) {
        return;
      }
      closeMenu();
    });
  });

  function updateNavDropdownState() {
    var hasOpen = nav.querySelector(".nav__item--dropdown.is-open-desktop");
    nav.classList.toggle("nav--has-open-dropdown", !!hasOpen);
  }

  // Dropdown : toggle sur mobile (tous les dropdowns)
  nav.querySelectorAll(".nav__item--dropdown > .nav__link").forEach(function (dropdownToggle) {
    dropdownToggle.addEventListener("click", function (e) {
      if (window.innerWidth < 1024) {
        e.preventDefault();
        var parent = this.closest(".nav__item--dropdown");
        parent.classList.toggle("is-open");
      } else {
        e.preventDefault();
        var parent = this.closest(".nav__item--dropdown");
        var wasOpen = parent.classList.contains("is-open-desktop");
        nav.querySelectorAll(".nav__item--dropdown").forEach(function (item) {
          item.classList.remove("is-open-desktop");
        });
        if (!wasOpen) {
          parent.classList.add("is-open-desktop");
        }
        updateNavDropdownState();
      }
    });
  });

  document.addEventListener("click", function (e) {
    if (window.innerWidth < 1024) return;
    var openItem = nav.querySelector(".nav__item--dropdown.is-open-desktop");
    if (openItem && openItem.contains(e.target)) return;
    nav.querySelectorAll(".nav__item--dropdown").forEach(function (item) {
      item.classList.remove("is-open-desktop");
    });
    updateNavDropdownState();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (nav.classList.contains("is-open")) {
        closeMenu();
      }
      nav.querySelectorAll(".nav__item--dropdown").forEach(function (item) {
        item.classList.remove("is-open-desktop");
      });
      updateNavDropdownState();
    }
  });
})();
