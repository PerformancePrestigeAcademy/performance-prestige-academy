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


export const perfectionnementMecaniqueFormation: Formation = {
  id: "perfectionnement-mecanique-auto-moto",
  reference: "PPA-PMAM-DMDAI",

  title: "Perfectionnement en mécanique automobile et motocycle",
  subtitle: "Développer ses méthodes de diagnostic, d’analyse et d’intervention",

  level: "Initié",
  vehicles: "Automobile & moto",
  format: "Théorie & pratique",

  nature:
    "Action d’acquisition et de développement des compétences permettant de structurer une démarche de diagnostic, d’exploiter la documentation constructeur et de réaliser des contrôles mécaniques, électriques et électroniques sur une automobile ou un motocycle.",

  audience:
    "Personnes possédant déjà les connaissances fondamentales en mécanique automobile ou motocycle et souhaitant approfondir leurs méthodes de diagnostic, leur compréhension des systèmes embarqués et leur organisation lors d’interventions techniques.",

  prerequisites: [
    "Maîtriser les contrôles courants d’une automobile ou d’un motocycle.",
    "Savoir identifier les principaux composants d’un véhicule.",
    "Savoir utiliser l’outillage mécanique de base.",
    "Connaître et respecter les principales règles de sécurité.",
  ],

  generalObjective:
    "À l’issue de la formation, le participant sera capable de mettre en œuvre une démarche structurée de diagnostic sur une automobile ou un motocycle, d’exploiter les informations techniques du constructeur, d’effectuer des contrôles mécaniques, électriques et électroniques, puis d’organiser une intervention méthodique en communiquant clairement les résultats obtenus.",

  operationalObjectives: [
    "Mettre en œuvre une démarche méthodique de recherche de panne.",
    "Recueillir et analyser les symptômes signalés ou constatés.",
    "Consulter et exploiter la documentation technique du constructeur.",
    "Interpréter un schéma mécanique, électrique ou électronique simple.",
    "Choisir les contrôles et les appareils de mesure adaptés.",
    "Utiliser un multimètre et un outil de diagnostic électronique.",
    "Relever, comparer et interpréter des valeurs de contrôle.",
    "Distinguer une cause de panne de ses conséquences.",
    "Contrôler les principaux capteurs, actionneurs et circuits électriques.",
    "Organiser son poste de travail et préparer une intervention.",
    "Appliquer une méthode rigoureuse de démontage, de repérage et de remontage.",
    "Consigner les contrôles effectués et communiquer clairement les résultats du diagnostic.",
    "Respecter les procédures de sécurité propres à l’automobile et au motocycle.",
    "Déterminer les limites de son intervention et identifier les situations nécessitant un spécialiste.",
  ],

  modules: [
    {
      title: "Module 1 — Structurer une démarche de diagnostic",
      description:
        "Mettre en place une méthode logique permettant de rechercher l’origine d’une anomalie sans remplacer inutilement des composants.",
      topics: [
        "Recueillir les informations auprès du conducteur",
        "Identifier et reproduire un symptôme",
        "Effectuer un contrôle visuel préalable",
        "Distinguer symptôme, cause et conséquence",
        "Établir des hypothèses de panne",
        "Définir un ordre logique de contrôles",
      ],
    },

    {
      title: "Module 2 — Exploiter la documentation constructeur",
      description:
        "Utiliser les informations techniques du constructeur pour préparer et sécuriser une intervention.",
      topics: [
        "Rechercher une procédure technique",
        "Identifier les valeurs de référence",
        "Lire un plan d’entretien et une méthode de réparation",
        "Comprendre un schéma de principe",
        "Identifier les couples de serrage",
        "Respecter les procédures de démontage et de remontage",
      ],
    },

    {
      title: "Module 3 — Réaliser des contrôles mécaniques approfondis",
      description:
        "Effectuer des contrôles permettant d’évaluer l’état mécanique d’une automobile ou d’un motocycle.",
      topics: [
        "Contrôler l’étanchéité et l’état apparent d’un moteur",
        "Rechercher des jeux ou des usures anormales",
        "Contrôler la compression d’un moteur",
        "Analyser les bruits, vibrations et comportements anormaux",
        "Contrôler les circuits de lubrification et de refroidissement",
        "Comparer les résultats aux données constructeur",
      ],
    },

    {
      title:
        "Module 4 — Comprendre les circuits électriques et électroniques",
      description:
        "Acquérir les bases nécessaires à l’analyse des principaux circuits électriques et électroniques embarqués.",
      topics: [
        "Tension, intensité, résistance et continuité",
        "Lecture d’un schéma électrique",
        "Alimentations, masses, fusibles et relais",
        "Capteurs et actionneurs",
        "Réseaux électroniques embarqués",
        "Particularités des automobiles et des motocycles",
      ],
    },

    {
      title: "Module 5 — Utiliser les appareils de mesure et de diagnostic",
      description:
        "Choisir et utiliser les appareils adaptés pour obtenir des résultats fiables et exploitables.",
      topics: [
        "Utilisation méthodique du multimètre",
        "Mesure d’une tension et d’une résistance",
        "Contrôle d’une continuité",
        "Utilisation d’un outil de diagnostic",
        "Lecture et interprétation des codes défaut",
        "Consultation des paramètres en temps réel",
        "Effacement raisonné des défauts après intervention",
      ],
    },

    {
      title: "Module 6 — Organiser une intervention technique",
      description:
        "Préparer et conduire une intervention proprement, méthodiquement et en respectant les procédures.",
      topics: [
        "Préparer le poste de travail",
        "Identifier les outils et consommables nécessaires",
        "Repérer les pièces et les éléments démontés",
        "Appliquer une méthode de rangement",
        "Protéger le véhicule et les composants",
        "Respecter les couples de serrage",
        "Effectuer les contrôles après remontage",
      ],
    },

    {
      title:
        "Module 7 — Réaliser un diagnostic complet en situation pratique",
      description:
        "Mettre en application l’ensemble de la démarche sur une automobile ou un motocycle.",
      topics: [
        "Prendre en charge une automobile ou un motocycle",
        "Recueillir les symptômes",
        "Consulter les données techniques",
        "Définir une stratégie de contrôle",
        "Réaliser les mesures nécessaires",
        "Identifier l’origine probable de la panne",
        "Rédiger ou présenter un compte rendu",
        "Proposer une intervention adaptée",
      ],
    },
  ],

  methods: [
    "Apports théoriques illustrés",
    "Analyse de situations réelles de panne",
    "Étude de documents techniques constructeur",
    "Démonstrations réalisées par le formateur",
    "Exercices de lecture de schémas",
    "Manipulation d’appareils de mesure",
    "Utilisation guidée d’un outil de diagnostic",
    "Exercices pratiques sur automobile et motocycle",
    "Mise en situation complète de recherche de panne",
    "Échanges et correction collective des démarches utilisées",
  ],

  resources: [
    "Support de cours remis au participant",
    "Automobile et/ou motocycle",
    "Composants mécaniques et électriques de démonstration",
    "Documentation technique constructeur",
    "Schémas électriques et procédures de réparation",
    "Outillage mécanique",
    "Multimètre",
    "Appareil de diagnostic électronique",
    "Appareils de contrôle mécanique",
    "Équipements de protection individuelle",
    "Zone de travail sécurisée",
  ],

  trainer: {
    name: "Schoenenberger Jérémy",
    qualification:
      "Technicien préparateur compétition, diplômé de l’École de la Performance à Nogaro comme Technicien préparateur développeur de véhicules de compétition, option motocycles.",
  },

  tracking: [
    "Émargement ou preuve de présence",
    "Participation aux activités théoriques et pratiques",
    "Réalisation des exercices de mesure et de diagnostic",
    "Traçabilité des contrôles réalisés",
    "Compte rendu des mises en situation",
  ],

  evaluation: [
    "Questionnaire théorique",
    "Lecture et interprétation d’une documentation constructeur",
    "Identification de composants mécaniques, électriques et électroniques",
    "Utilisation d’un multimètre et d’un appareil de diagnostic",
    "Mise en situation de recherche de panne",
    "Présentation orale ou écrite de la démarche suivie",
    "Grille d’observation complétée par le formateur",
  ],

  successCriteria: [
    "Obtenir au minimum 70 % de bonnes réponses au contrôle théorique.",
    "Appliquer une démarche de diagnostic logique et structurée.",
    "Sélectionner correctement les contrôles et les appareils de mesure.",
    "Réaliser les mesures essentielles sans mettre en danger une personne, un véhicule ou un équipement.",
    "Interpréter correctement les principales valeurs relevées.",
    "Identifier l’origine probable de l’anomalie étudiée.",
    "Présenter clairement les contrôles effectués et les conclusions obtenues.",
    "Ne commettre aucune erreur éliminatoire liée à la sécurité.",
  ],

  certification: [
    "Support pédagogique de la formation",
    "Fiches méthodologiques de diagnostic",
    "Attestation de participation",
    "Certificat interne de réussite lorsque les évaluations sont validées",
  ],

  accessibility:
    "Les besoins particuliers ou les situations de handicap sont étudiés avant l’inscription afin d’identifier les adaptations pédagogiques, matérielles ou organisationnelles pouvant être mises en place.",

  practicalInformation:
    "La durée, les dates, le lieu, le tarif et l’effectif maximal seront précisés lors de l’ouverture des premières sessions.",

  legalNotice:
    "Le certificat remis atteste la réussite aux évaluations internes organisées par Performance & Prestige Academy. Il ne constitue ni un diplôme d’État, ni un titre professionnel, ni une certification enregistrée au RNCP ou au Répertoire spécifique, ni une habilitation professionnelle.",
};