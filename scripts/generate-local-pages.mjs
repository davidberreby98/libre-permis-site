#!/usr/bin/env node
/** Génère les pages locales auto-école manquantes à partir du template. */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const pages = [
  {
    file: "auto-ecole-paris-13.html",
    h1: "Auto-école Paris 13 — Formation permis B accéléré dès 690 euros",
    eyebrow: "Paris 13e · Porte d'Ivry",
    lead: "Vous habitez Paris 13e ou ses environs ? Libre Permis propose un point de rendez-vous secteur Porte d'Ivry, accessible depuis le métro ligne 7 et le tram T3a. Évaluation honnête à 65&nbsp;€ avant tout engagement.",
    blocks: [
      ["Permis accéléré Paris 13", "Vous avez une date butoir ? On construit un planning intensif autour de vos disponibilités et on vise l'examen dès que vous êtes prêt."],
      ["Évaluation à 65&nbsp;€", "Avant tout engagement, un moniteur évalue votre niveau réel en conditions d'examen. Tarif précis, planning adapté. Zéro surprise."],
      ["Repassage examen permis B Paris 13", "Centres Créteil et Maisons-Alfort à deux pas du 13e. Repassage dès 690&nbsp;€, souvent en moins de 10 jours."],
    ],
    deptLink: { href: "permis-accelere-paris-75.html", label: "Formation permis accéléré Paris 75" },
  },
  {
    file: "auto-ecole-paris-19.html",
    h1: "Auto-école Paris 19 — Formation permis B accéléré dès 690 euros",
    eyebrow: "Paris 19e · Porte de Pantin",
    lead: "Vous habitez Paris 19e ou les arrondissements voisins ? Point de rendez-vous à Porte de Pantin, accessible depuis le métro ligne 5. Formation intensive dès 690&nbsp;€.",
    blocks: [
      ["Permis accéléré Paris 19", "Nos moniteurs vous forment sur les axes du nord-est parisien — canaux, boulevards des maréchaux, accès au périphérique."],
      ["Évaluation à 65&nbsp;€", "Avant de vous demander un centime, on mesure exactement où vous en êtes."],
      ["Repassage examen permis B Paris 19", "On identifie précisément ce qui a bloqué votre examen. Efficace. Rapide. Résultats."],
    ],
    deptLink: { href: "permis-accelere-paris-75.html", label: "Formation permis accéléré Paris 75" },
  },
  {
    file: "auto-ecole-paris-20.html",
    h1: "Auto-école Paris 20 — Formation permis B accéléré dès 690 euros",
    eyebrow: "Paris 20e · Porte de Bagnolet",
    lead: "Point de rendez-vous secteur Porte de Bagnolet, accessible depuis le métro ligne 3. Quel que soit votre profil, on construit la formation qui correspond à votre situation réelle.",
    blocks: [
      ["Permis accéléré Paris 20", "Rue de Bagnolet, boulevard Davout, porte de Montreuil — nos moniteurs vous forment sur les situations réelles."],
      ["Évaluation à 65&nbsp;€", "Niveau réel, nombre d'heures nécessaires, tarif transparent. On ne vend pas d'heures inutiles."],
      ["Repassage permis B Paris 20", "On cible vos erreurs, on prépare sur les bons parcours, on maximise vos chances dès le prochain passage."],
    ],
    deptLink: { href: "permis-accelere-paris-75.html", label: "Formation permis accéléré Paris 75" },
  },
  {
    file: "auto-ecole-bobigny.html",
    h1: "Auto-école Bobigny — Formation permis B accéléré dès 690 euros",
    eyebrow: "Seine-Saint-Denis 93 · Bobigny",
    lead: "Point de rendez-vous au cœur de Bobigny, à deux pas du métro ligne 5 Pablo Picasso et du tram T1. Évaluation honnête à 65&nbsp;€. Dès 690&nbsp;€.",
    blocks: [
      ["Formation permis B accéléré Bobigny", "Formation sur les routes réelles de votre examen. Nos moniteurs connaissent parfaitement les routes du 93."],
      ["Évaluation à 65&nbsp;€", "Vous repartez avec un nombre d'heures précis, un planning adapté et un tarif transparent."],
      ["Repassage examen permis B Bobigny", "On analyse point par point ce qui a bloqué votre passage. Souvent en moins de 10 jours."],
    ],
    deptLink: { href: "permis-accelere-seine-saint-denis-93.html", label: "Permis accéléré Seine-Saint-Denis 93" },
  },
  {
    file: "auto-ecole-rosny-sous-bois.html",
    h1: "Auto-école Rosny-sous-Bois — Formation permis B accéléré dès 690 euros",
    eyebrow: "Seine-Saint-Denis 93 · Rosny-sous-Bois",
    lead: "Point de rendez-vous accessible depuis le RER E et le tram T1. Formation intensive dès 690&nbsp;€.",
    blocks: [
      ["Permis accéléré Rosny-sous-Bois", "La A86, des carrefours complexes et une circulation dense — nos moniteurs vous forment sur ces axes précis."],
      ["Évaluation à 65&nbsp;€", "Planning réaliste, pas d'heures gonflées."],
      ["Repassage examen permis B Rosny", "On cible précisément ce qui a bloqué votre examen sur les centres du 93."],
    ],
    deptLink: { href: "permis-accelere-seine-saint-denis-93.html", label: "Permis accéléré Seine-Saint-Denis 93" },
  },
  {
    file: "auto-ecole-noisy-le-grand.html",
    h1: "Permis B Noisy-le-Grand — Formé sur votre centre d'examen, résultats en 10 jours",
    eyebrow: "Seine-Saint-Denis 93 · Noisy-le-Grand",
    lead: "Libre Permis intervient directement au centre d'examen de Noisy-le-Grand. Vous roulez sur les axes résidentiels, les giratoires et les bretelles de l'A4 — exactement ce que vous aurez le jour J.",
    blocks: [
      ["10 jours — pas 2 mois", "On vise l'examen en 10 jours. Évaluation à 65&nbsp;€, planning intensif sur mesure."],
      ["690&nbsp;€ — prix affiché clairement", "Le tarif le plus compétitif à Noisy-le-Grand."],
      ["Un vrai moniteur sur les vraies routes", "Chaque leçon est une répétition du jour J."],
    ],
    deptLink: { href: "permis-accelere-seine-saint-denis-93.html", label: "Permis accéléré Seine-Saint-Denis 93" },
  },
  {
    file: "auto-ecole-gennevilliers.html",
    h1: "Auto-école Gennevilliers — Formation permis B accéléré dès 690 euros",
    eyebrow: "Hauts-de-Seine 92 · Gennevilliers",
    lead: "Centre d'examen de Gennevilliers : zone industrielle, A86, A15, giratoires chargés. Chez Libre Permis, vous les travaillez avant l'examen. Formation dès 690&nbsp;€.",
    blocks: [
      ["Formation permis B accéléré Gennevilliers", "Le prix le plus bas du 92 affiché clairement. L'évaluation à 65&nbsp;€ définit le tarif exact."],
      ["Les 20 points critiques du centre", "Signalisation difficile, giratoires nombreux — nos moniteurs connaissent chaque piège."],
      ["Repassage examen Gennevilliers", "Un échec ici ne dit rien de votre niveau général. Repassage dès 690&nbsp;€, souvent en moins de 10 jours."],
    ],
    deptLink: { href: "permis-accelere-hauts-de-seine-92.html", label: "Permis accéléré Hauts-de-Seine 92" },
  },
  {
    file: "auto-ecole-ivry-sur-seine.html",
    h1: "Auto-école Ivry-sur-Seine — Formation permis B accéléré dès 690 euros",
    eyebrow: "Val-de-Marne 94 · Ivry-sur-Seine",
    lead: "Point de rendez-vous à Ivry-sur-Seine, accessible depuis le métro ligne 7 et le tram T3a. Formation intensive dès 690&nbsp;€.",
    blocks: [
      ["Permis accéléré Ivry", "Quais de Seine, axes vers Paris 13e et Vitry — nos moniteurs vous forment sur ces routes précises."],
      ["Évaluation à 65&nbsp;€", "En une séance, notre moniteur identifie exactement où vous en êtes."],
      ["Repassage examen Ivry", "Centres de Créteil et Maisons-Alfort à deux pas d'Ivry."],
    ],
    deptLink: { href: "permis-accelere-val-de-marne-94.html", label: "Permis accéléré Val-de-Marne 94" },
  },
  {
    file: "auto-ecole-vitry-sur-seine.html",
    h1: "Auto-école Vitry-sur-Seine — Formation permis B accéléré dès 690 euros",
    eyebrow: "Val-de-Marne 94 · Vitry-sur-Seine",
    lead: "Vitry-sur-Seine : grands axes, zones pavillonnaires, accès rapides vers Paris et le Val-de-Marne. Formation dès 690&nbsp;€.",
    blocks: [
      ["Permis accéléré Vitry", "Formation sur les axes réels de votre secteur et des centres d'examen proches."],
      ["Évaluation à 65&nbsp;€", "Tarif transparent avant tout engagement."],
      ["Repassage examen Vitry", "Préparation ciblée sur Créteil et Maisons-Alfort."],
    ],
    deptLink: { href: "permis-accelere-val-de-marne-94.html", label: "Permis accéléré Val-de-Marne 94" },
  },
  {
    file: "auto-ecole-creteil.html",
    h1: "Auto-école Créteil — Formé et examiné au même endroit",
    eyebrow: "Val-de-Marne 94 · Centre d'examen Créteil",
    lead: "Votre point de rendez-vous est directement au centre d'examen de Créteil. Vous vous formez sur les routes exactes de votre examen.",
    blocks: [
      ["Formation permis B accéléré Créteil", "Formé là où vous passez l'examen. Résultats en 10 jours."],
      ["Évaluation à 65&nbsp;€ Créteil", "Notre moniteur évalue votre niveau sur les routes de Créteil."],
      ["Repassage examen Créteil", "Nos moniteurs connaissent chaque parcours et chaque piège de ce centre."],
    ],
    deptLink: { href: "permis-accelere-val-de-marne-94.html", label: "Permis accéléré Val-de-Marne 94" },
  },
  {
    file: "auto-ecole-maisons-alfort.html",
    h1: "Auto-école Maisons-Alfort — Formé et examiné au même endroit",
    eyebrow: "Val-de-Marne 94 · Centre d'examen Maisons-Alfort",
    lead: "Point de rendez-vous directement sur place au centre d'examen de Maisons-Alfort. Chaque carrefour, chaque priorité travaillés en conditions réelles.",
    blocks: [
      ["Formation permis accéléré Maisons-Alfort", "Bords de Marne, axes vers Alfortville et Charenton. Planning intensif en 10 jours."],
      ["Évaluation à 65&nbsp;€", "Niveau réel, heures nécessaires, tarif transparent."],
      ["Repassage examen Maisons-Alfort", "Nos moniteurs connaissent chaque parcours et les exigences des examinateurs."],
    ],
    deptLink: { href: "permis-accelere-val-de-marne-94.html", label: "Permis accéléré Val-de-Marne 94" },
  },
  {
    file: "auto-ecole-val-doise-95.html",
    h1: "Auto-école Val-d'Oise — Formation permis B aux centres d'examen du 95",
    eyebrow: "Val-d'Oise 95 · Saint-Leu &amp; Saint-Brice",
    lead: "Intervention directe aux centres d'examen de Saint-Leu-la-Forêt et Saint-Brice-sous-Forêt. Vous choisissez le centre le plus proche.",
    blocks: [
      ["Formation sur vos routes d'examen", "Routes forestières et axes périurbains du 95."],
      ["Dès 690&nbsp;€", "Tarif affiché avant votre premier appel."],
      ["Repassage examen 95", "Préparation ciblée sur Saint-Leu ou Saint-Brice."],
    ],
    deptLink: { href: "permis-accelere-val-doise-95.html", label: "Permis accéléré Val-d'Oise 95" },
  },
  {
    file: "auto-ecole-massy.html",
    h1: "Auto-école Massy — Formation permis B accéléré au carrefour de l'Essonne",
    eyebrow: "Essonne 91 · Centre d'examen Massy",
    lead: "Point de rendez-vous directement au centre d'examen de Massy. Accessible RER B, RER C et TGV depuis Paris et l'IDF.",
    blocks: [
      ["Stage intensif Massy", "Formé sur votre centre d'examen, pas ailleurs."],
      ["Évaluation à 65&nbsp;€", "Planning et tarif adaptés à votre niveau."],
      ["Depuis la province", "TGV depuis toute la France — stage intensif, examen sur place."],
    ],
    deptLink: { href: "permis-accelere-essonne-91.html", label: "Permis accéléré Essonne 91" },
  },
  {
    file: "auto-ecole-villacoublay.html",
    h1: "Permis B Vélizy-Villacoublay — Maîtrisez la N118 et l'A86, passez en 10 jours",
    eyebrow: "Yvelines 78 · Vélizy-Villacoublay",
    lead: "Centre d'examen Vélizy-Villacoublay — N118, A86. Les insertions rapides sur autoroute sont travaillées dès la première séance.",
    blocks: [
      ["Insertion autoroute maîtrisée", "L'avantage décisif à Villacoublay."],
      ["Dès 690&nbsp;€", "Prix affiché, zéro surprise."],
      ["Repassage examen Villacoublay", "On cible les insertions qui ont bloqué votre passage."],
    ],
    deptLink: { href: "permis-accelere-yvelines-78.html", label: "Permis accéléré Yvelines 78" },
  },
];

function renderPage(p) {
  const blocksHtml = p.blocks
    .map(
      ([title, text]) => `
          <li class="accelere-avantage">
            <h3 class="accelere-avantage__title">${title}</h3>
            <p class="accelere-avantage__text">${text}</p>
          </li>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="description" content="PLACEHOLDER">
  <title>PLACEHOLDER</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/permis-b.css">
  <link rel="stylesheet" href="css/permis-accelere-ville.css">
</head>
<body class="page--auto-ecole-locale">
  <a href="#main-content" class="skip-link">Aller au contenu</a>
  <header class="header" role="banner">
    <div class="header__inner">
      <a href="index.html" class="header__logo" aria-label="Libre Permis — Accueil">
        <img src="images/logo.svg" alt="Libre Permis" class="header__logo-img">
      </a>
      <button type="button" class="header__burger" aria-expanded="false" aria-controls="nav-main" aria-label="Ouvrir le menu">
        <span class="header__burger-bar"></span>
        <span class="header__burger-bar"></span>
        <span class="header__burger-bar"></span>
      </button>
      <nav id="nav-main" class="nav" aria-label="Navigation principale">
        <ul class="nav__list">
          <li><a href="index.html" class="nav__link">Accueil</a></li>
          <li><a href="permis-accelere.html" class="nav__link">Permis accéléré</a></li>
          <li><a href="repassage-examen.html" class="nav__link">Repassage examen</a></li>
          <li><a href="auto-ecole-paris-10.html" class="nav__link nav__link--current">Auto-école Paris 10</a></li>
          <li><a href="contact.html" class="nav__link">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main-content" role="main">
    <section class="hero hero--accelere" aria-labelledby="hero-title">
      <div class="hero__accelere-bg" aria-hidden="true"></div>
      <div class="container hero__content hero__content--center">
        <p class="hero__eyebrow--gold">${p.eyebrow}</p>
        <h1 id="hero-title" class="hero__title hero__title--dark">${p.h1}</h1>
        <p class="hero__lead hero__lead--dark">${p.lead}</p>
        <div class="hero__actions">
          <a href="tel:+33695829375" class="btn--gold">Appeler le 06 95 82 93 75</a>
          <a href="auto-ecole-paris-10.html" class="btn--outline-light">Notre auto-école Paris 10</a>
        </div>
      </div>
    </section>

    <section class="accelere-avantages section--alt" aria-labelledby="avantages-title">
      <div class="container">
        <h2 id="avantages-title" class="accelere-avantages__title">Pourquoi Libre Permis dans votre secteur</h2>
        <ul class="accelere-avantages__grid">${blocksHtml}
        </ul>
        <p class="section-lead" style="margin-top:2rem;text-align:center">
          <a href="${p.deptLink.href}">${p.deptLink.label}</a>
          · <a href="auto-ecole-paris-10.html">Auto-école Paris 10 — Gare du Nord</a>
          · <a href="permis-accelere.html">Découvrir notre formation permis accéléré Paris 10</a>
        </p>
      </div>
    </section>

    <section class="cta-final" aria-labelledby="cta-title">
      <div class="container">
        <h2 id="cta-title" class="cta-final__title">Votre permis commence aujourd'hui</h2>
        <p class="cta-final__lead">Libre Permis — auto-école Paris 10, Gare du Nord. 11 centres d'examen. Dès 690&nbsp;€.</p>
        <div class="cta-final__actions">
          <a href="tel:+33695829375" class="btn btn--primary">Appeler le 06 95 82 93 75</a>
          <a href="contact.html" class="btn btn--secondary">Nous contacter</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer__inner">
        <p class="footer__brand">Libre Permis</p>
        <nav class="footer__nav" aria-label="Navigation pied de page">
          <ul class="footer__list">
            <li><a href="index.html">Accueil</a></li>
            <li><a href="auto-ecole-paris-10.html">Auto-école Paris 10</a></li>
            <li><a href="permis-accelere.html">Permis accéléré</a></li>
            <li><a href="repassage-examen.html">Repassage examen</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
        <p class="footer__legal">© Libre Permis. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
  <script src="js/main.js"></script>
</body>
</html>
`;
}

// Fix typos in template - I used motion.div by mistake
function fixTemplate(html) {
  return html
    .replace(/<motion\.motion\.?/g, "<")
    .replace(/<\/motion\.div>/g, "</div>")
    .replace(/<motion\.div/g, "<div")
    .replace(/<\/motion\.div>/g, "</div>");
}

for (const p of pages) {
  const out = path.join(root, p.file);
  if (fs.existsSync(out)) {
    console.log("skip exists", p.file);
    continue;
  }
  let html = renderPage(p);
  html = html.replace(/<motion\.div/g, "<div"); // undo - let me fix properly
  html = html
    .replace(/<motion\.div /g, "<div ")
    .replace(/<\/motion\.motion\.div>/g, "</div>")
    .replace(/<motion\.motion\.motion\.div>/g, "");
  fs.writeFileSync(out, fixTemplate(html), "utf8");
  console.log("created", p.file);
}
