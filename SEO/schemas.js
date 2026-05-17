/** Schémas JSON-LD partagés — www.libre-permis.com */
export const SITE = "https://www.libre-permis.com";

export const drivingSchoolSchema = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: "Libre Permis",
  description:
    "Auto-école agréée Paris 10e, Gare du Nord. Formation permis B accéléré dès 690 euros. 11 centres d'examen IDF.",
  url: SITE,
  logo: `${SITE}/images/logo.svg`,
  image: `${SITE}/images/logo.svg`,
  telephone: ["+33695829375", "+33186049137"],
  email: "contact@libre-permis.com",
  priceRange: "690 euros",
  address: {
    "@type": "PostalAddress",
    streetAddress: "91 rue de Maubeuge",
    addressLocality: "Paris",
    postalCode: "75010",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.8796,
    longitude: 2.3553,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "10:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "10:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    "Paris 10e",
    "Paris 13e",
    "Paris 19e",
    "Paris 20e",
    "Bobigny",
    "Rosny-sous-Bois",
    "Noisy-le-Grand",
    "Gennevilliers",
    "Massy",
    "Créteil",
    "Maisons-Alfort",
    "Vélizy-Villacoublay",
    "Saint-Leu-la-Forêt",
    "Saint-Brice-sous-Forêt",
  ],
};

export const faqSchemas = {
  "auto-ecole-paris-10": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Où se trouve l'auto-école Libre Permis dans le 10e arrondissement ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Libre Permis, auto-école Paris 10, est au 91 rue de Maubeuge, 75010 Paris, à 2 minutes de la Gare du Nord. Accessible RER B, D, E et métros 4 et 5.",
        },
      },
      {
        "@type": "Question",
        name: "Quel est le prix de la formation permis B chez Libre Permis Paris 10 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Chez Libre Permis, auto-école Paris 10, la formation permis B accélérée démarre à 690 euros. Tarif exact après évaluation à 65 euros.",
        },
      },
      {
        "@type": "Question",
        name: "Libre Permis auto-école Paris 10 est-elle agréée par la Préfecture ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Libre Permis est une auto-école agréée Paris 10e, Préfecture de Paris. Moniteurs diplômés d'État, SIRET 93809103000016.",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on obtenir sa formation permis B en 10 jours chez Libre Permis Paris 10 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, pour les profils déjà à l'aise en conduite. L'évaluation à 65 euros définit un planning honnête selon votre niveau réel.",
        },
      },
      {
        "@type": "Question",
        name: "Quelle différence entre Libre Permis et Permis Libre ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Libre Permis est une auto-école physique agréée Paris 10, moniteurs diplômés d'État à bord. Permis Libre est une plateforme en ligne.",
        },
      },
      {
        "@type": "Question",
        name: "Libre Permis couvre-t-elle toute l'Île-de-France depuis Paris 10 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. 11 centres d'examen IDF. Nos moniteurs interviennent à Bobigny, Rosny, Noisy, Gennevilliers, Massy, Créteil, Maisons-Alfort, Villacoublay, Saint-Leu et Saint-Brice.",
        },
      },
      {
        "@type": "Question",
        name: "Quels financements chez Libre Permis auto-école Paris 10 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CPF selon éligibilité 2026, Chèque Région IDF, permis à 1 euro/jour, paiement 4x sans frais.",
        },
      },
      {
        "@type": "Question",
        name: "Comment s'inscrire chez Libre Permis auto-école Paris 10 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appelez au 06 95 82 93 75 ou au 01 86 04 91 37. On vous répond dans la journée et on construit votre formation ensemble.",
        },
      },
    ],
  },
  "permis-accelere": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien coûte la formation permis B accélérée à Paris chez Libre Permis ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Chez Libre Permis, auto-école Paris 10, la formation permis B accélérée démarre à 690 euros. Tarif exact après évaluation à 65 euros. Zéro heure inutile.",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on obtenir sa formation permis B en 10 jours à Paris chez Libre Permis ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, pour les profils déjà à l'aise en conduite. L'évaluation à 65 euros définit un délai honnête selon votre profil réel.",
        },
      },
      {
        "@type": "Question",
        name: "Quelle différence entre formation permis accéléré et formation classique ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La formation accélérée concentre les créneaux sur une courte période. Progression plus rapide, moins d'heures nécessaires, résultats en 10 jours pour les profils adaptés.",
        },
      },
      {
        "@type": "Question",
        name: "Quelle différence entre Libre Permis et Permis Libre pour le permis accéléré Paris ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Libre Permis est une auto-école physique agréée Paris 10, moniteurs diplômés d'État à bord. Permis Libre est une plateforme en ligne.",
        },
      },
      {
        "@type": "Question",
        name: "Dans quels centres d'examen Libre Permis intervient-elle ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "11 centres : Paris, Bobigny, Rosny-sous-Bois, Noisy-le-Grand, Gennevilliers, Massy, Créteil, Maisons-Alfort, Villacoublay, Saint-Leu-la-Forêt et Saint-Brice-sous-Forêt.",
        },
      },
      {
        "@type": "Question",
        name: "Quels financements pour la formation permis accéléré Paris chez Libre Permis ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CPF selon éligibilité 2026, Chèque Région IDF, permis à 1 euro/jour, paiement 4x sans frais.",
        },
      },
      {
        "@type": "Question",
        name: "Comment s'inscrire à la formation permis accéléré Paris chez Libre Permis ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appelez Libre Permis, auto-école Paris 10, au 06 95 82 93 75. Un appel — on cadre votre profil, on fixe l'évaluation et on démarre cette semaine.",
        },
      },
    ],
  },
  "repassage-examen-permis-b": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien coûte le stage repassage permis B chez Libre Permis Paris 10 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Chez Libre Permis, auto-école Paris 10, la formule repassage démarre à 690 euros. Ce forfait inclut 4h minimum sur les routes de votre centre d'examen.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps pour repasser son permis B chez Libre Permis Paris 10 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Souvent moins de 10 jours — vous avez déjà la base. Dépend de votre profil et des disponibilités au centre d'examen choisi parmi nos 11 centres IDF.",
        },
      },
      {
        "@type": "Question",
        name: "J'ai raté plusieurs fois mon permis — Libre Permis peut m'aider ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Plusieurs échecs ne signifient pas un problème de capacité. L'évaluation à 65 euros identifie le frein réel. Méthode différente, résultats différents.",
        },
      },
      {
        "@type": "Question",
        name: "Dans quels centres d'examen Libre Permis intervient-elle pour le repassage ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "11 centres : Paris, Bobigny, Rosny-sous-Bois, Noisy-le-Grand, Gennevilliers, Massy, Créteil, Maisons-Alfort, Villacoublay, Saint-Leu-la-Forêt et Saint-Brice-sous-Forêt.",
        },
      },
      {
        "@type": "Question",
        name: "Quel centre d'examen choisir pour repasser son permis en Île-de-France ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Villacoublay est accessible pour le 78. Gennevilliers est plus exigeant. Noisy-le-Grand est résidentiel. On vous oriente vers le plus adapté lors de l'appel.",
        },
      },
      {
        "@type": "Question",
        name: "Quels financements pour le repassage permis B chez Libre Permis Paris 10 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CPF selon éligibilité 2026, Chèque Région Île-de-France, paiement 4x sans frais.",
        },
      },
      {
        "@type": "Question",
        name: "Comment s'inscrire pour repasser son permis B chez Libre Permis Paris 10 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appelez au 06 95 82 93 75 ou 01 86 04 91 37. Un appel — on analyse votre échec, on choisit votre centre et on démarre cette semaine.",
        },
      },
    ],
  },
  "permis-boite-automatique": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien coûte la formation permis boîte automatique chez Libre Permis Paris 10 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dès 690 euros. Tarif le plus compétitif de Paris avec moniteur diplômé d'État. Tarif exact après évaluation à 65 euros.",
        },
      },
      {
        "@type": "Question",
        name: "Combien d'heures pour le permis boîte automatique chez Libre Permis Paris 10 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "13 heures minimum légal. L'évaluation à 65 euros définit le nombre exact selon votre niveau réel.",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on conduire une Tesla avec le permis BEA ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Toutes les voitures électriques sont à boîte automatique. Le permis BEA vous autorise à les conduire.",
        },
      },
      {
        "@type": "Question",
        name: "Quelle est la passerelle BEA vers B chez Libre Permis Paris 10 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "7h de formation, sans examen supplémentaire. Elle lève la restriction B78 et vous permet de conduire tous types de véhicules.",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on passer le permis automatique en 10 jours chez Libre Permis Paris 10 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, pour les profils à l'aise en conduite. L'évaluation à 65 euros définit un délai honnête.",
        },
      },
      {
        "@type": "Question",
        name: "Quels financements pour le permis BEA chez Libre Permis Paris 10 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CPF selon éligibilité 2026, Chèque Région IDF, paiement 4x sans frais.",
        },
      },
    ],
  },
  "financement-permis": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Peut-on financer son permis B avec le CPF chez Libre Permis Paris 10 en 2026 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, sous conditions 2026. Demandeurs d'emploi inscrits à France Travail et salariés avec co-financement de 100 euros minimum. Plafond 900 euros.",
        },
      },
      {
        "@type": "Question",
        name: "L'aide France Travail au permis existe-t-elle encore en 2026 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'aide directe France Travail est supprimée depuis le 1er avril 2026. Les demandeurs d'emploi peuvent mobiliser leur CPF jusqu'à 900 euros sans reste à charge.",
        },
      },
      {
        "@type": "Question",
        name: "Quel financement pour un jeune de moins de 25 ans à Paris chez Libre Permis ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Permis à 1 euro/jour (600 à 1200 euros) + Chèque Région IDF si éligible + paiement 4x sans frais. Notre tarif dès 690 euros réduit la base.",
        },
      },
      {
        "@type": "Question",
        name: "Le paiement 4x sans frais est-il disponible chez Libre Permis Paris 10 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Pour tous les profils, sans condition de revenus ni dossier. 4 mensualités sans frais.",
        },
      },
      {
        "@type": "Question",
        name: "Comment s'inscrire avec une aide financement chez Libre Permis Paris 10 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appelez au 06 95 82 93 75 avant de vous inscrire. Certaines aides comme le permis à 1 euro/jour doivent être demandées AVANT l'inscription.",
        },
      },
    ],
  },
  "code-de-la-route": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien de jours dure le stage code accéléré chez Libre Permis Paris 10 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "3 jours. À la fin, date d'examen réservée rapidement. Partenaire Code Rousseau, formateur agréé.",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on préparer le code et la conduite en même temps chez Libre Permis Paris 10 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Les deux en parallèle. Dès que vous obtenez votre code, la formation conduite continue sans interruption.",
        },
      },
      {
        "@type": "Question",
        name: "Le stage code est-il obligatoire pour passer son permis ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non. Mais le stage 3 jours avec formateur agréé et partenaire Code Rousseau donne les meilleurs résultats en minimum de temps.",
        },
      },
      {
        "@type": "Question",
        name: "Quels financements pour le stage code chez Libre Permis Paris 10 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stage code inclus dans certains forfaits. Paiement 4x sans frais disponible. CPF selon éligibilité 2026.",
        },
      },
      {
        "@type": "Question",
        name: "Comment s'inscrire au stage code de la route chez Libre Permis Paris 10 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appelez au 06 95 82 93 75. Date de stage proposée rapidement — souvent dans la semaine suivant votre appel.",
        },
      },
    ],
  },
};

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
