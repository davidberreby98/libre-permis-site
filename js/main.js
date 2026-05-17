/**
 * Libre Permis — Script principal (page Accueil)
 * Menu mobile : ouverture / fermeture, accessibilité (aria-expanded)
 */

(function () {
  "use strict";

  var burger = document.querySelector(".header__burger");
  var nav = document.querySelector("#nav-main");

  var phoneIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';

  function initTarifsNote() {
    var noteText = "Tous les tarifs sont TTC et incluent frais de gestion, accès code en ligne 3 mois, leçons de conduite et accompagnement examen (selon formule). Évaluation préalable : 65 €.";
    var grids = document.querySelectorAll(".price-cards");
    grids.forEach(function (grid) {
      if (!grid) return;
      if (grid.closest(".repassage-formules")) return;
      if (grid.nextElementSibling && (grid.nextElementSibling.classList.contains("tarifs-global-note") || grid.nextElementSibling.classList.contains("repassage-price-note"))) return;
      var note = document.createElement("p");
      note.className = "tarifs-global-note";
      note.textContent = noteText;
      grid.insertAdjacentElement("afterend", note);
    });
  }

  function initFooterContact() {
    var footerInner = document.querySelector(".footer__inner");
    if (!footerInner || footerInner.querySelector(".footer__contact")) return;
    var block = document.createElement("div");
    block.className = "footer__contact";
    block.innerHTML =
      "<p><strong>Téléphone :</strong> 06 95 82 93 75 / 01 86 04 91 37</p>" +
      "<p><strong>Adresse :</strong> 91 rue de Maubeuge, 75010 Paris</p>" +
      "<p><strong>Horaires agence :</strong> Lun–Jeu 10h–13h / 14h–19h · Ven–Sam 10h–14h</p>";
    var legal = footerInner.querySelector(".footer__legal");
    if (legal) {
      footerInner.insertBefore(block, legal);
    } else {
      footerInner.appendChild(block);
    }
  }

  function initFooterParis10() {
    var list = document.querySelector(".footer__list");
    if (!list || list.querySelector('a[href*="auto-ecole-paris-10"]')) return;
    var li = document.createElement("li");
    var link = document.createElement("a");
    link.href = "auto-ecole-paris-10.html";
    link.textContent = "Auto-école Paris 10";
    li.appendChild(link);
    var first = list.firstElementChild;
    if (first) list.insertBefore(li, first.nextElementSibling);
    else list.appendChild(li);
  }

  function initDeptParis10Mention() {
    if (document.body.classList.contains("page--auto-ecole-locale")) return;
    if (
      !document.body.classList.contains("page--permis-accelere") &&
      !document.body.classList.contains("page--repassage-examen")
    ) {
      return;
    }
    var container =
      document.querySelector(".region-links .container") ||
      document.querySelector(".accelere-avantages .container");
    if (!container || container.querySelector(".seo-paris10-link")) return;
    var p = document.createElement("p");
    p.className = "seo-paris10-link section-lead";
    p.style.marginTop = "1.5rem";
    p.style.textAlign = "center";
    p.innerHTML =
      'Siège : <a href="auto-ecole-paris-10.html"><strong>auto-école Paris 10</strong></a> — 91 rue de Maubeuge, Gare du Nord. <a href="permis-accelere.html">Formation permis accéléré Paris 10</a>.';
    container.appendChild(p);
  }

  function initHeaderCallback() {
    var inner = document.querySelector(".header__inner");
    if (!inner || inner.querySelector(".header__callback")) return;
    var link = document.createElement("a");
    link.className = "header__callback";
    link.href = "contact.html?motif=rappel";
    link.setAttribute("aria-label", "Être rappelé — formulaire de contact");
    link.innerHTML = phoneIcon + "<span>Être rappelé</span>";
    var navEl = inner.querySelector("#nav-main");
    if (navEl) {
      inner.insertBefore(link, navEl);
    } else {
      inner.appendChild(link);
    }
  }

  function initStickyCta() {
    if (document.getElementById("sticky-cta-bar")) return;
    var a = document.createElement("a");
    a.id = "sticky-cta-bar";
    a.className = "sticky-cta";
    a.href = "contact.html?motif=rappel";
    a.setAttribute("aria-label", "Être rappelé sous 2 heures ouvrées");
    a.innerHTML = phoneIcon + "<span>Être rappelé sous 2h ouvrées</span>";
    document.body.appendChild(a);
    document.body.classList.add("has-sticky-cta");
  }

  initTarifsNote();
  initFooterContact();
  initFooterParis10();
  initDeptParis10Mention();
  initFooterParis10();
  initDeptParis10Mention();
  initHeaderCallback();
  initStickyCta();

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
