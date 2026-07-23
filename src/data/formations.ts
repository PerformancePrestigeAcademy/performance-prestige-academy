export type FormationModule = {
  title: string;
  description: string;
  topics: string[];
};

export type Formation = {
  id: string;
  reference: string;
  title: string;
  subtitle: string;
  level: string;
  vehicles: string;
  format: string;
  nature: string;
  audience: string;
  prerequisites: string[];
  generalObjective: string;
  operationalObjectives: string[];
  modules: FormationModule[];
  methods: string[];
  resources: string[];
  trainer: {
    name: string;
    qualification: string;
  };
  tracking: string[];
  evaluation: string[];
  successCriteria: string[];
  certification: string[];
  accessibility: string;
  practicalInformation: string;
  legalNotice: string;
};

export const initiationMecaniqueFormation: Formation = {
  id: "initiation-mecanique-auto-moto",
  reference: "PPA-IMAM-CCE",
  title: "Initiation à la mécanique automobile et moto",
  subtitle: "Comprendre, contrôler et entretenir son véhicule",
  level: "Débutant",
  vehicles: "Automobile & moto",
  format: "Théorie & pratique",
  nature:
    "Action d’acquisition et de développement des connaissances de base de la mécanique pour évaluer les besoins en maintenance de son propre véhicule.",
  audience:
    "Personnes débutantes souhaitant acquérir les connaissances fondamentales nécessaires à la compréhension et au contrôle courant d’un véhicule automobile ou d’une moto.",
  prerequisites: [
    "Aucune connaissance préalable en mécanique n’est exigée.",
    "Savoir lire et comprendre des consignes simples en français.",
  ],
  generalObjective:
    "À l’issue de la formation, le participant sera capable d’identifier les principaux organes d’un véhicule, de réaliser les contrôles courants accessibles à un débutant et de reconnaître une anomalie nécessitant l’intervention d’un professionnel.",
  operationalObjectives: [
    "Expliquer le fonctionnement général d’un véhicule.",
    "Comprendre le principe du moteur à quatre temps.",
    "Identifier les principaux composants.",
    "Choisir et utiliser l’outillage de base.",
    "Contrôler les niveaux et les pneumatiques.",
    "Contrôler l’état apparent d’un système de freinage.",
    "Vérifier l’état et la tension d’une chaîne de moto.",
    "Appliquer les principales règles de sécurité.",
    "Communiquer clairement les anomalies constatées.",
  ],
  modules: [
    {
      title: "Module 1 — Comprendre l’organisation générale d’un véhicule",
      description:
        "Découvrir les principaux systèmes qui composent une automobile ou une moto et comprendre comment ils travaillent ensemble.",
      topics: [
        "Architecture générale d’un véhicule",
        "Moteur, transmission, direction et suspension",
        "Systèmes de freinage et équipements de sécurité",
        "Motorisations essence, Diesel, hybrides et électriques",
        "Principaux fluides utilisés",
      ],
    },
    {
      title: "Module 2 — Comprendre le fonctionnement d’un moteur thermique",
      description:
        "Comprendre simplement comment l’énergie du carburant est transformée en mouvement.",
      topics: [
        "Cycle à quatre temps : admission, compression, combustion et échappement",
        "Pistons, bielles, vilebrequin et soupapes",
        "Distribution",
        "Lubrification et refroidissement",
        "Différences entre moteur essence et moteur Diesel",
      ],
    },
    {
      title: "Module 3 — Identifier les principaux composants",
      description:
        "Apprendre à se repérer sous un capot et à reconnaître les principaux organes visibles.",
      topics: [
        "Batterie, alternateur et démarreur",
        "Boîte à air et filtres",
        "Réservoirs et points de contrôle",
        "Courroies, durites, faisceaux et fusibles",
        "Calculateurs, capteurs et voyants du tableau de bord",
      ],
    },
    {
      title: "Module 4 — Utiliser l’outillage et respecter les règles de sécurité",
      description:
        "Choisir le bon outil, travailler proprement et sécuriser une intervention.",
      topics: [
        "Clés, douilles, cliquets et tournevis",
        "Pinces et outillage spécifique",
        "Utilisation de la clé dynamométrique",
        "Cric, chandelles et cales de roue",
        "Levage et immobilisation d’une voiture ou d’une moto",
        "Équipements de protection et organisation de la zone de travail",
      ],
    },
    {
      title: "Module 5 — Réaliser les entretiens et contrôles courants",
      description:
        "Effectuer les vérifications essentielles permettant de préserver la fiabilité et la sécurité du véhicule.",
      topics: [
        "Programme d’entretien du constructeur",
        "Huile moteur et principaux fluides",
        "Pneumatiques, éclairages et essuie-glaces",
        "Batterie et filtres",
        "Détection de fuites ou d’anomalies simples",
        "État, tension et lubrification de la chaîne d’une moto",
      ],
    },
    {
      title: "Module 6 — Comprendre et contrôler le système de freinage",
      description:
        "Identifier les composants du freinage et reconnaître les principaux signes d’usure ou de dysfonctionnement.",
      topics: [
        "Principe du freinage hydraulique",
        "Disques, plaquettes, étriers et freins à tambour",
        "Liquide de frein",
        "Fonctionnement de l’ABS",
        "Contrôle visuel des composants",
        "Particularités du freinage d’une moto",
      ],
    },
    {
      title: "Module 7 — Effectuer un contrôle général en situation pratique",
      description:
        "Mettre en application les connaissances acquises sur une automobile et, lorsque cela est possible, sur une moto.",
      topics: [
        "Identification des composants",
        "Contrôle des principaux niveaux",
        "Vérification des pneumatiques et des équipements",
        "Utilisation de l’outillage de base",
        "Contrôle visuel du freinage",
        "Recherche d’anomalies simples et compte rendu au formateur",
      ],
    },
  ],
  methods: [
    "Apports théoriques illustrés",
    "Échanges avec le formateur",
    "Démonstrations",
    "Observation de véhicules et de composants",
    "Exercices pratiques guidés",
    "Études de situations",
    "Questionnaire de validation des acquis",
  ],
  resources: [
    "Support de cours remis au participant",
    "Véhicule automobile et/ou moto",
    "Composants mécaniques de démonstration",
    "Outillage manuel",
    "Appareils de mesure",
    "Équipements de protection",
    "Zone de travail sécurisée",
  ],
  trainer: {
    name: "Schoenenberger Jérémy",
    qualification:
      "Technicien préparateur compétition, diplômé de l’École de la Performance à Nogaro comme Technicien préparateur développeur de véhicules de compétition, option motocycles.",
  },
  tracking: [
    "Émargement ou preuve de présence",
    "Participation aux activités",
    "Réalisation des exercices pratiques",
    "Traçabilité des évaluations",
  ],
  evaluation: [
    "Questionnaire théorique",
    "Identification de composants",
    "Mises en situation pratiques",
    "Grille d’observation du formateur",
  ],
  successCriteria: [
    "Obtenir au minimum 70 % de bonnes réponses au contrôle théorique.",
    "Valider les compétences essentielles de sécurité.",
    "Réaliser correctement le contrôle pratique.",
    "Ne commettre aucune erreur éliminatoire mettant en danger une personne ou un véhicule.",
  ],
  certification: [
    "Attestation de participation remise à chaque participant.",
    "Certificat interne de réussite lorsque les évaluations sont validées.",
  ],
  accessibility:
    "Les besoins particuliers ou situations de handicap sont étudiés avant l’inscription afin d’évaluer les adaptations possibles.",
  practicalInformation:
    "La durée, les dates, le lieu, le tarif et l’effectif seront communiqués lors de l’ouverture des prochaines sessions.",
  legalNotice:
    "Le certificat remis atteste la réussite aux évaluations internes organisées par Performance & Prestige Academy. Il ne constitue ni un diplôme d’État, ni un titre professionnel, ni une certification enregistrée au RNCP ou au Répertoire spécifique, ni une habilitation professionnelle.",
};
