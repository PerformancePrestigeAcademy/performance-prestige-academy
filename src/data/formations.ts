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
  tracking?: string[];
evaluation?: string[];
successCriteria?: string[];

accompanimentTitle?: string;
accompanimentDescription?: string;
accompanimentItems?: string[];

certification: string[];
accessibility: string;
price?: string;
duration?: string;
durationNote?: string;
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
  price: "175 € / personne",
  duration: "1.5 jours",
  durationNote: "La durée est adaptée au niveau du groupe, au rythme d’apprentissage et aux échanges avec le formateur. Prévoir 2 jours",
  practicalInformation:
    "Les dates et le lieu seront communiqués lors de la réservation.",
  legalNotice:
    "Le certificat remis atteste la réussite aux évaluations internes organisées par Performance & Prestige Academy. Il ne constitue ni un diplôme d’État, ni un titre professionnel, ni une certification enregistrée au RNCP ou au Répertoire spécifique, ni une habilitation professionnelle.",
};


              {/* Mecanique au feminin */}

export const mecaniqueAuFemininFormation: Formation = {
  id: "mecanique-au-feminin",
  reference: "PPA-MAF-CPA",
  title: "Mécanique au féminin",
  subtitle:
    "Comprendre son véhicule, identifier les pratiques abusives et défendre ses intérêts",
  level: "Débutant",
  vehicles: "Automobile & moto",
  format: "Théorie, démonstrations et mises en situation",

  nature:
    "Action d’acquisition et de développement des connaissances permettant de mieux comprendre son véhicule, d’analyser les interventions proposées par un professionnel et d’identifier certaines pratiques abusives.",

  audience:
    "Femmes souhaitant acquérir davantage d’autonomie dans la gestion, l’entretien et la réparation de leur véhicule, même sans connaissance préalable en mécanique.",

  prerequisites: [
    "Aucune connaissance préalable en mécanique n’est exigée.",
    "Savoir lire et comprendre des consignes simples en français.",
    "Aucune expérience technique ou pratique n’est nécessaire.",
  ],

  generalObjective:
    "À l’issue de la formation, la participante sera capable de mieux comprendre le fonctionnement et l’entretien de son véhicule, de décrypter un devis ou une facture, de poser les bonnes questions et d’identifier certaines pratiques abusives.",

  operationalObjectives: [
    "Identifier les principaux organes d’un véhicule.",
    "Comprendre les opérations d’entretien les plus courantes.",
    "Reconnaître les principaux témoins d’alerte et symptômes mécaniques.",
    "Décrire précisément un dysfonctionnement à un professionnel.",
    "Comprendre la composition d’un devis et d’une facture.",
    "Distinguer une intervention nécessaire d’une prestation insuffisamment justifiée.",
    "Identifier certains signaux pouvant révéler une pratique abusive.",
    "Demander des explications, des preuves ou un second avis.",
    "Prendre une décision sans subir de pression commerciale.",
    "Conserver la maîtrise des interventions réalisées sur son véhicule.",
  ],

  modules: [
    {
      title: "Module 1 — Comprendre les principaux éléments de son véhicule",
      description:
        "Acquérir les bases indispensables pour comprendre le rôle des principaux organes mécaniques et dialoguer plus facilement avec un professionnel.",
      topics: [
        "Organisation générale d’un véhicule",
        "Moteur, transmission, freinage, direction et suspension",
        "Batterie, alternateur et démarreur",
        "Pneumatiques et équipements de sécurité",
        "Principaux fluides et consommables",
      ],
    },

    {
      title: "Module 2 — Comprendre l’entretien courant",
      description:
        "Identifier les opérations réellement nécessaires pour assurer la sécurité, la fiabilité et la longévité du véhicule.",
      topics: [
        "Programme d’entretien du constructeur",
        "Vidange et remplacement des filtres",
        "Freinage et pneumatiques",
        "Distribution et pièces d’usure",
        "Contrôle des niveaux",
        "Différence entre entretien préventif et réparation",
      ],
    },

    {
      title: "Module 3 — Reconnaître les symptômes et les alertes",
      description:
        "Apprendre à observer son véhicule et à décrire clairement un problème avant de consulter un professionnel.",
      topics: [
        "Voyants du tableau de bord",
        "Bruits et vibrations inhabituels",
        "Fuites et odeurs anormales",
        "Difficultés de démarrage",
        "Perte de puissance",
        "Comportement anormal du freinage ou de la direction",
      ],
    },

    {
      title: "Module 4 — Décrypter un devis et une facture",
      description:
        "Comprendre les différentes lignes d’un document commercial afin d’évaluer plus sereinement les prestations proposées.",
      topics: [
        "Pièces, main-d’œuvre et consommables",
        "Temps de travail facturé",
        "Pièces neuves, échange standard et pièces d’occasion",
        "Références et quantités",
        "Prestations complémentaires",
        "Comparaison entre devis et facture finale",
        "Repérage des lignes imprécises ou insuffisamment expliquées",
      ],
    },

    {
      title: "Module 5 — Identifier les pratiques abusives",
      description:
        "Reconnaître certaines situations anormales ou insuffisamment justifiées afin d’éviter les mauvaises surprises.",
      topics: [
        "Interventions proposées sans diagnostic précis",
        "Remplacement systématique de pièces",
        "Prestations ajoutées sans explication claire",
        "Surfacturation ou doublons",
        "Travaux engagés sans accord préalable",
        "Pression pour accepter immédiatement une réparation",
        "Refus d’expliquer ou de montrer les éléments remplacés",
        "Évolution importante du montant sans justification",
      ],
    },

    {
      title: "Module 6 — Poser les bonnes questions et défendre ses intérêts",
      description:
        "Adopter une communication claire et structurée pour conserver la maîtrise des décisions concernant son véhicule.",
      topics: [
        "Demander un diagnostic expliqué",
        "Exiger un devis suffisamment détaillé",
        "Faire préciser le caractère urgent ou non d’une réparation",
        "Demander à voir les pièces remplacées",
        "Demander un second avis",
        "Refuser une prestation insuffisamment justifiée",
        "Vérifier la facture avant le règlement",
        "Conserver les documents relatifs au véhicule",
      ],
    },

    {
      title: "Module 7 — Études de cas et mises en situation",
      description:
        "Mettre en pratique les connaissances acquises à partir de situations inspirées de cas réels.",
      topics: [
        "Analyse de devis",
        "Analyse de factures",
        "Identification de prestations incohérentes",
        "Simulation d’un échange avec un professionnel",
        "Formulation des questions à poser",
        "Décision entre réparation, second avis ou refus",
      ],
    },
  ],

  methods: [
    "Apports théoriques illustrés",
    "Présentation de composants mécaniques",
    "Démonstrations sur véhicule",
    "Analyse de devis et de factures",
    "Études de situations concrètes",
    "Mises en situation et jeux de rôle",
    "Échanges avec le formateur",
    "Questionnaire de validation des acquis",
  ],

  resources: [
    "Support de cours remis à chaque participante",
    "Véhicule automobile",
    "Composants mécaniques de démonstration",
    "Exemples de devis et de factures",
    "Documents d’entretien constructeur",
    "Outillage manuel",
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
    "Réalisation des études de cas",
    "Participation aux mises en situation",
    "Traçabilité des évaluations",
  ],

  evaluation: [
    "Questionnaire théorique",
    "Identification des principaux organes d’un véhicule",
    "Analyse d’un devis",
    "Analyse d’une facture",
    "Identification de pratiques potentiellement abusives",
    "Mise en situation face à une proposition de réparation",
  ],

  successCriteria: [
    "Obtenir au minimum 70 % de bonnes réponses au contrôle théorique.",
    "Identifier correctement les informations principales d’un devis.",
    "Repérer les anomalies essentielles dans une situation proposée.",
    "Formuler les questions permettant d’obtenir des explications claires.",
    "Adopter une démarche adaptée face à une intervention insuffisamment justifiée.",
  ],

  certification: [
    "Attestation de participation remise à chaque participante.",
    "Certificat interne de réussite lorsque les évaluations sont validées.",
  ],

  accessibility:
    "Les besoins particuliers ou situations de handicap sont étudiés avant l’inscription afin d’évaluer les adaptations possibles.",
  price: "175 € / personne",
  duration: "1.5 jours",
  durationNote: "La durée est adaptée au niveau du groupe, au rythme d’apprentissage et aux échanges avec le formateur. Prévoir 2 jours",
  practicalInformation:
    "Les dates et le lieu seront communiqués lors de la réservation.",

  legalNotice:
    "Le certificat remis atteste la réussite aux évaluations internes organisées par Performance & Prestige Academy. Il ne constitue ni un diplôme d’État, ni un titre professionnel, ni une certification enregistrée au RNCP ou au Répertoire spécifique, ni une habilitation professionnelle.",
};

              {/* Perfectionnement mécanique INITIE */}


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



                            {/* Preparation entrée CAP */}

export const preparationEntreeCAPFormation: Formation = {
  id: "preparation-entree-cap-maintenance-vehicules",
  reference: "PPA-PEF-CAP",

  title:
    "Préparation et accompagnement à l’entrée en CAP Maintenance des véhicules",

  subtitle:
    "Acquérir les bases nécessaires pour intégrer la formation et consolider les apprentissages essentiels",

  level: "Préformation – Débutant",
  vehicles: "Automobile & moto",
  format: "Théorie, pratique & accompagnement",

  nature:
    "Action de préparation et d’accompagnement pédagogique construite en cohérence avec les compétences professionnelles du CAP Maintenance des véhicules, options véhicules légers et motocycles.",

  audience:
    "Jeunes ou adultes souhaitant intégrer un CAP dans le domaine de la maintenance automobile ou motocycle, ainsi qu’apprentis ou élèves rencontrant des difficultés et souhaitant consolider leurs connaissances théoriques, pratiques et méthodologiques.",

  prerequisites: [
    "Aucune connaissance approfondie en mécanique n’est exigée.",
    "Savoir lire, écrire et comprendre des consignes simples en français.",
    "Manifester un intérêt réel pour la mécanique automobile ou motocycle.",
    "Être capable de respecter les consignes de sécurité et le règlement de l’atelier.",
    "Être disposé à participer aux activités théoriques et pratiques.",
  ],

  generalObjective:
    "À l’issue de l’accompagnement, le participant aura acquis ou consolidé les connaissances, les méthodes et les gestes fondamentaux nécessaires pour aborder les compétences professionnelles du CAP Maintenance des véhicules, options véhicules légers et motocycles, et suivre plus sereinement sa progression en établissement et en entreprise.",

  operationalObjectives: [
    "C1.1 — Organiser un entretien périodique.",
    "C1.2 — Identifier les anomalies dans le cadre d’un entretien périodique.",
    "C1.3 — Réaliser les opérations de remplacement, d’ajustement dans le cadre de l’entretien périodique.",
    "C1.4 — Apporter des conseils techniques à la clientèle sur l’entretien du véhicule.",
    "C2.1 — Préparer une intervention corrective.",
    "C2.2 — Réaliser le remplacement ou la réparation des composants.",
    "C2.3 — Réaliser le réglage des systèmes.",
    "C2.4 — Réaliser le contrôle qualité d’une intervention corrective.",
    "C2.5 — Réaliser le diagnostic de premier niveau.",
  ],

  modules: [
    {
      title: "Module 1 — C1.1 Organiser un entretien périodique",

      description:
        "Apprendre à préparer méthodiquement une intervention d’entretien en respectant les procédures, la sécurité et l’environnement.",

      topics: [
        "Identifier le véhicule et ses caractéristiques",
        "Analyser la demande d’intervention",
        "Rechercher le plan d’entretien et la documentation nécessaire",
        "Identifier les risques liés à l’intervention",
        "Choisir les équipements de protection adaptés",
        "Préparer l’outillage, les pièces et les consommables",
        "Organiser les différentes étapes de l’intervention",
        "Préparer le tri et la gestion des déchets",
      ],
    },

    {
      title:
        "Module 2 — C1.2 Identifier les anomalies dans le cadre d’un entretien périodique",

      description:
        "Réaliser les contrôles prévus par une procédure et repérer les anomalies visibles ou mesurables.",

      topics: [
        "Identifier les contrôles à réaliser",
        "Appliquer une procédure de contrôle",
        "Utiliser les outils et appareils de mesure adaptés",
        "Relever et interpréter des valeurs",
        "Contrôler les systèmes mécaniques, électriques et hydrauliques",
        "Réaliser les opérations préparatoires au contrôle technique",
        "Identifier les usures, les défauts et les anomalies",
        "Retranscrire les anomalies constatées",
        "Préserver l’intégrité et la propreté du véhicule",
      ],
    },

    {
      title:
        "Module 3 — C1.3 Réaliser les opérations de remplacement, d’ajustement dans le cadre de l’entretien périodique",

      description:
        "Effectuer les remplacements et ajustements prévus par le plan d’entretien du véhicule.",

      topics: [
        "Identifier les opérations prévues par le plan d’entretien",
        "Remplacer les pièces d’usure",
        "Remplacer les fluides et les consommables",
        "Ajuster les différents niveaux",
        "Contrôler et ajuster les pressions des pneumatiques",
        "Appliquer les procédures du constructeur",
        "Utiliser les outils et appareils de mesure adaptés",
        "Effectuer les apprentissages, paramétrages ou réinitialisations nécessaires",
        "Mettre à jour les indicateurs de maintenance",
        "Compléter les documents relatifs à l’intervention",
      ],
    },

    {
      title:
        "Module 4 — C1.4 Apporter des conseils techniques à la clientèle sur l’entretien du véhicule",

      description:
        "Présenter clairement les opérations réalisées et transmettre les recommandations d’entretien adaptées au véhicule.",

      topics: [
        "Présenter les anomalies détectées",
        "Expliquer les opérations réalisées",
        "Informer sur les prochaines opérations d’entretien",
        "Formuler des recommandations d’utilisation",
        "Adapter les conseils au véhicule et à son usage",
        "Employer un vocabulaire professionnel compréhensible",
        "Communiquer clairement à l’oral",
        "Adopter un comportement professionnel",
        "Contribuer à la qualité du service rendu",
      ],
    },

    {
      title: "Module 5 — C2.1 Préparer une intervention corrective",

      description:
        "Préparer une opération de maintenance corrective en identifiant les procédures, les risques et les moyens nécessaires.",

      topics: [
        "Identifier précisément le véhicule",
        "Analyser la demande ou l’ordre de réparation",
        "Identifier le système concerné",
        "Rechercher les informations techniques nécessaires",
        "Identifier les risques liés à l’intervention",
        "Mettre le véhicule et le poste de travail en sécurité",
        "Choisir l’outillage et les équipements adaptés",
        "Vérifier la disponibilité et la conformité des pièces",
        "Définir les différentes étapes de l’intervention",
      ],
    },

    {
      title:
        "Module 6 — C2.2 Réaliser le remplacement ou la réparation des composants",

      description:
        "Appliquer une méthode rigoureuse pour déposer, contrôler, remplacer, réparer et remonter des composants.",

      topics: [
        "Identifier les composants à déposer",
        "Appliquer une procédure de démontage",
        "Repérer et ranger les éléments démontés",
        "Contrôler l’état des composants",
        "Identifier les éléments défectueux",
        "Remplacer ou réparer les composants concernés",
        "Respecter les procédures et les couples de serrage",
        "Réaliser le remontage sans détérioration",
        "Gérer les pièces, produits et déchets issus de l’intervention",
        "Préserver l’intégrité et la propreté du véhicule",
      ],
    },

    {
      title: "Module 7 — C2.3 Réaliser le réglage des systèmes",

      description:
        "Réaliser les mesures et les réglages nécessaires en respectant les données techniques du constructeur.",

      topics: [
        "Identifier les réglages nécessaires",
        "Rechercher les valeurs et les procédures du constructeur",
        "Choisir les appareils de mesure adaptés",
        "Réaliser les mesures préalables",
        "Effectuer les réglages mécaniques",
        "Effectuer les réglages électriques ou hydrauliques accessibles",
        "Comparer les résultats aux valeurs de référence",
        "Contrôler la conformité du réglage",
        "Respecter les règles de sécurité pendant l’intervention",
      ],
    },

    {
      title:
        "Module 8 — C2.4 Réaliser le contrôle qualité d’une intervention corrective",

      description:
        "Vérifier la conformité du travail réalisé et assurer la traçabilité de l’intervention.",

      topics: [
        "Vérifier la conformité du remontage",
        "Contrôler le fonctionnement du système",
        "Vérifier l’absence de fuite",
        "Identifier un bruit, un défaut ou un comportement anormal",
        "Effectuer les contrôles finaux prévus",
        "Vérifier la propreté du véhicule et du poste de travail",
        "Compléter les documents relatifs à l’intervention",
        "Signaler les éventuelles réserves",
        "Rendre compte du travail effectué",
      ],
    },

    {
      title:
        "Module 9 — C2.5 Réaliser le diagnostic de premier niveau",

      description:
        "Mettre en œuvre une démarche simple et méthodique permettant de constater une anomalie et d’identifier l’élément probablement défectueux.",

      topics: [
        "Constater et décrire un dysfonctionnement",
        "Identifier le système concerné",
        "Rechercher la documentation nécessaire",
        "Comprendre le fonctionnement normal attendu",
        "Appliquer une procédure de diagnostic de premier niveau",
        "Réaliser des contrôles et des mesures simples",
        "Interpréter les observations et les valeurs relevées",
        "Identifier le sous-ensemble ou l’élément probablement défectueux",
        "Retranscrire les résultats afin d’en assurer la traçabilité",
        "Communiquer clairement les conclusions obtenues",
      ],
    },
  ],

  methods: [
    "Entretien initial permettant d’identifier les besoins du participant",
    "Apports théoriques illustrés et contextualisés",
    "Présentation et utilisation du vocabulaire professionnel",
    "Lecture guidée de documents techniques",
    "Démonstrations réalisées par le formateur",
    "Observation de véhicules et de composants",
    "Exercices pratiques progressifs sur automobile et motocycle",
    "Réalisation d’opérations d’entretien et de maintenance",
    "Apprentissage des méthodes d’organisation du poste de travail",
    "Utilisation de fiches d’intervention et de contrôle",
    "Études de situations professionnelles",
    "Corrections individualisées et reprise des notions non comprises",
    "Rappels de mathématiques, de physique ou d’électricité selon les besoins",
  ],

  resources: [
    "Supports pédagogiques adaptés aux notions travaillées",
    "Référentiel du CAP Maintenance des véhicules",
    "Automobile et motocycle",
    "Organes et composants mécaniques de démonstration",
    "Outillage manuel et outillage spécifique",
    "Équipements de levage et de maintien",
    "Appareils de mesure et de contrôle",
    "Multimètre et matériel de diagnostic de premier niveau",
    "Documentation technique et plans d’entretien",
    "Fiches de travail et fiches de contrôle",
    "Produits, fluides, consommables et pièces d’entretien",
    "Équipements de protection individuelle",
    "Zone de travail organisée et sécurisée",
  ],

  trainer: {
    name: "Schoenenberger Jérémy",

    qualification:
      "Technicien préparateur compétition, diplômé de l’École de la Performance à Nogaro comme Technicien préparateur développeur de véhicules de compétition, option motocycles.",
  },

  accompanimentTitle:
    "Un accompagnement adapté à votre progression",

  accompanimentDescription:
    "L’accompagnement peut être réalisé avant l’entrée en formation, ponctuellement lorsqu’une difficulté particulière est rencontrée, ou régulièrement pendant toute la durée du CAP.",

  accompanimentItems: [
    "Entretien initial afin d’identifier le niveau, les besoins et les difficultés du participant",
    "Accompagnement avant l’entrée en CAP",
    "Séances de soutien sur les notions étudiées en établissement",
    "Reprise des connaissances théoriques insuffisamment maîtrisées",
    "Exercices pratiques adaptés à la progression du participant",
    "Aide à la compréhension des consignes et de la documentation technique",
    "Travail sur l’organisation, la méthode et le comportement professionnel",
    "Retour sur les difficultés rencontrées en cours, en atelier ou en entreprise",
    "Possibilité de suivi régulier pendant toute la durée de la formation",
    "Adaptation du contenu à l’option véhicules légers ou motocycles",
  ],

  certification: [
    "Supports pédagogiques correspondant aux notions travaillées",
    "Fiches techniques et méthodologiques",
    "Exercices complémentaires",
    "Fiches de révision personnalisées",
    "Synthèses des séances réalisées",
    "Attestation de participation sur demande",
  ],

  accessibility:
    "Les besoins particuliers ou les situations de handicap sont étudiés avant le début de l’accompagnement afin d’identifier les adaptations pédagogiques, matérielles ou organisationnelles pouvant être mises en place.",

  practicalInformation:
    "L’accompagnement peut être organisé sous la forme de séances ponctuelles ou d’un suivi régulier pendant toute la durée du CAP. La fréquence, la durée, le contenu, le lieu et le tarif sont définis individuellement selon les besoins et la progression du participant.",

  legalNotice:
    "Cet accompagnement pédagogique ne se substitue pas à la formation dispensée par un CFA ou un établissement scolaire. Il ne permet pas, à lui seul, de valider une unité, une épreuve ou le diplôme du CAP Maintenance des véhicules.",
};



              {/* Préparation entrée Bac Pro */}

export const preparationEntreeBacProFormation: Formation = {
  id: "preparation-entree-bac-pro-maintenance-vehicules",
  reference: "PPA-PEF-BACPRO",

  title:
    "Préparation et accompagnement à l’entrée en Bac professionnel Maintenance des véhicules",

  subtitle:
    "Acquérir les bases nécessaires pour intégrer la formation et consolider progressivement les compétences professionnelles attendues",

  level: "Préformation – Perfectionnement",
  vehicles: "Véhicules légers & motocycles",
  format: "Théorie, pratique & accompagnement",

  nature:
    "Action de préparation et d’accompagnement pédagogique construite en cohérence avec les compétences professionnelles du Baccalauréat professionnel Maintenance des véhicules, options véhicules légers et motocycles.",

  audience:
    "Jeunes ou adultes souhaitant intégrer un Baccalauréat professionnel Maintenance des véhicules, options véhicules légers ou motocycles, ainsi qu’élèves et apprentis déjà engagés dans cette formation et souhaitant consolider leurs connaissances théoriques, leurs méthodes de travail et leurs compétences pratiques.",

  prerequisites: [
    "Savoir lire, écrire et comprendre des consignes techniques simples en français.",
    "Maîtriser les opérations mathématiques élémentaires.",
    "Manifester un intérêt réel pour la maintenance automobile ou motocycle.",
    "Être capable de respecter les consignes de sécurité et le règlement d’un atelier.",
    "Être disposé à participer aux activités théoriques et pratiques.",
    "Pour les participants déjà en Bac Pro, apporter autant que possible les cours, travaux pratiques ou documents correspondant aux notions à reprendre.",
  ],

  generalObjective:
    "À l’issue de l’accompagnement, le participant aura acquis ou consolidé les connaissances, les méthodes et les gestes professionnels nécessaires pour aborder les compétences du Baccalauréat professionnel Maintenance des véhicules, options véhicules légers ou motocycles. Il sera préparé à progresser dans les activités d’entretien périodique, de maintenance corrective et de diagnostic des systèmes mécaniques, électriques et électroniques, sur des véhicules à motorisation thermique, hybride ou électrique.",

  operationalObjectives: [
    "C1.1 — Organiser un entretien périodique.",
    "C1.2 — Identifier les anomalies dans le cadre d’un entretien périodique.",
    "C1.3 — Réaliser les opérations de remplacement, d’ajustement dans le cadre de l’entretien périodique.",
    "C1.4 — Apporter des conseils techniques à la clientèle sur l’entretien du véhicule.",
    "C2.1 — Préparer une intervention corrective.",
    "C2.2 — Réaliser le remplacement ou la réparation des composants.",
    "C2.3 — Réaliser le réglage ou le paramétrage des systèmes.",
    "C2.4 — Réaliser le contrôle qualité d’une intervention corrective.",
    "C3.1 — Constater un dysfonctionnement.",
    "C3.2 — Hiérarchiser les hypothèses.",
    "C3.3 — Mettre en œuvre un protocole d’intervention existant ou à définir.",
    "C3.4 — Identifier les solutions correctives.",
  ],

  modules: [
    {
      title:
        "Bloc 1 — Réaliser l’entretien périodique des véhicules",

      description:
        "Préparer, réaliser et contrôler les opérations d’entretien périodique d’un véhicule léger ou d’un motocycle, puis communiquer les observations et recommandations utiles.",

      topics: [
        "Organiser une intervention à partir des données du véhicule et du plan d’entretien",
        "Contrôler les systèmes mécaniques, électriques et hydrauliques",
        "Identifier et signaler les anomalies constatées",
        "Remplacer les pièces d’usure, les fluides et les consommables",
        "Effectuer les ajustements, paramétrages et réinitialisations nécessaires",
        "Apporter des conseils techniques adaptés à l’entretien et à l’utilisation du véhicule",
      ],
    },

    {
      title:
        "Bloc 2 — Réaliser la maintenance corrective des véhicules",

      description:
        "Préparer et réaliser une intervention corrective en respectant les procédures techniques, les exigences de sécurité et les critères de qualité.",

      topics: [
        "Analyser la demande et préparer l’intervention",
        "Rechercher les informations et les procédures techniques nécessaires",
        "Déposer, contrôler, réparer ou remplacer des composants",
        "Réaliser les réglages ou les paramétrages des systèmes",
        "Respecter les méthodes et les données du constructeur",
        "Contrôler le fonctionnement et la conformité de l’intervention",
        "Assurer la traçabilité et rendre compte du travail effectué",
      ],
    },

    {
      title:
        "Bloc 3 — Réaliser le diagnostic des systèmes des véhicules",

      description:
        "Mettre en œuvre une démarche structurée permettant d’identifier l’origine d’un dysfonctionnement mécanique, électrique ou électronique.",

      topics: [
        "Constater et caractériser un dysfonctionnement",
        "Recueillir les informations et les observations nécessaires",
        "Comprendre le fonctionnement normal du système concerné",
        "Formuler et hiérarchiser les hypothèses de panne",
        "Définir ou appliquer un protocole de diagnostic",
        "Utiliser les appareils de mesure et les outils de diagnostic",
        "Interpréter les valeurs et les résultats obtenus",
        "Identifier les solutions correctives adaptées",
      ],
    },
  ],

  methods: [
    "Entretien initial pour identifier le niveau, l’option suivie et les besoins du participant",
    "Apports théoriques illustrés et adaptés à sa progression",
    "Reprise et reformulation des notions étudiées en établissement",
    "Lecture guidée de documents et de schémas techniques",
    "Analyse de situations professionnelles",
    "Démonstrations réalisées par le formateur",
    "Exercices pratiques progressifs sur véhicule léger ou motocycle",
    "Utilisation d’appareils de mesure et de diagnostic",
    "Accompagnement dans la méthode de recherche de panne",
    "Travail sur l’organisation et le comportement professionnel en atelier",
    "Corrections individualisées",
    "Création de fiches de révision selon les difficultés rencontrées",
  ],

  resources: [
    "Supports pédagogiques adaptés aux notions travaillées",
    "Référentiel du Bac professionnel Maintenance des véhicules",
    "Documentation technique constructeur",
    "Schémas mécaniques, électriques et électroniques",
    "Véhicule léger et motocycle",
    "Composants mécaniques, électriques et électroniques de démonstration",
    "Outillage manuel et outillage spécifique",
    "Équipements de levage et de maintien",
    "Multimètre et appareils de mesure",
    "Outil de diagnostic électronique",
    "Fiches d’intervention et supports méthodologiques",
    "Équipements de protection individuelle",
    "Zone de travail organisée et sécurisée",
  ],

  trainer: {
    name: "Schoenenberger Jérémy",

    qualification:
      "Technicien préparateur compétition, diplômé de l’École de la Performance à Nogaro comme Technicien préparateur développeur de véhicules de compétition, option motocycles.",
  },

  accompanimentTitle:
    "Un accompagnement adapté à votre progression",

  accompanimentDescription:
    "L’accompagnement peut être organisé avant l’entrée en Bac professionnel, ponctuellement lorsqu’une difficulté particulière apparaît, ou régulièrement pendant toute la durée de la formation.",

  accompanimentItems: [
    "Entretien initial pour identifier le niveau, l’option et les besoins du participant",
    "Préparation à l’entrée en Bac professionnel",
    "Reprise des notions étudiées en établissement",
    "Soutien sur les systèmes mécaniques, électriques et électroniques",
    "Accompagnement dans l’apprentissage du diagnostic",
    "Exercices pratiques adaptés à la progression",
    "Aide à la lecture des schémas et de la documentation technique",
    "Travail sur l’organisation et la méthode en atelier",
    "Retour sur les difficultés rencontrées en cours, en atelier ou en entreprise",
    "Possibilité de suivi régulier pendant toute la durée du Bac professionnel",
    "Adaptation à l’option véhicules légers ou motocycles",
  ],

  certification: [
    "Supports pédagogiques correspondant aux notions travaillées",
    "Fiches techniques et méthodologiques",
    "Exercices complémentaires",
    "Schémas annotés",
    "Fiches de révision personnalisées",
    "Synthèses des séances réalisées",
    "Attestation de participation sur demande",
  ],

  accessibility:
    "Les besoins particuliers ou les situations de handicap sont étudiés avant le début de l’accompagnement afin d’identifier les adaptations pédagogiques, matérielles ou organisationnelles pouvant être mises en place.",

  practicalInformation:
    "L’accompagnement peut être organisé sous la forme de séances ponctuelles ou d’un suivi régulier pendant toute la durée du Bac professionnel. La fréquence, la durée, le contenu, le lieu et le tarif sont définis individuellement selon les besoins, l’option et la progression du participant.",

  legalNotice:
    "Cet accompagnement pédagogique ne se substitue pas à la formation dispensée par un lycée professionnel, un CFA ou un établissement habilité. Il ne permet pas, à lui seul, de valider une unité, une épreuve ou le diplôme du Baccalauréat professionnel Maintenance des véhicules.",
};


          {/* Preparation entrée en formation BTS */}

export const preparationEntreeBTSFormation: Formation = {
  id: "preparation-entree-bts-maintenance-vehicules",
  reference: "PPA-PEF-BTS",

  title:
    "Préparation et accompagnement à l’entrée en BTS Maintenance des véhicules",

  subtitle:
    "Consolider ses connaissances techniques et développer les méthodes d’analyse nécessaires à la réussite de la formation",

  level: "Préformation – Supérieur",
  vehicles: "Véhicules légers & motocycles",
  format: "Théorie, pratique & accompagnement",

  nature:
    "Action de préparation et d’accompagnement pédagogique construite en cohérence avec les compétences professionnelles du BTS Maintenance des véhicules, options véhicules légers et motocycles.",

  audience:
    "Étudiants souhaitant intégrer un BTS Maintenance des véhicules, options véhicules légers ou motocycles, ainsi qu’étudiants ou apprentis déjà engagés dans cette formation et désirant consolider leurs connaissances scientifiques et techniques, leurs méthodes d’analyse et leurs compétences pratiques.",

  prerequisites: [
    "Posséder des connaissances fondamentales en mécanique automobile ou motocycle.",
    "Comprendre le fonctionnement général des principaux systèmes d’un véhicule.",
    "Maîtriser les bases de l’électricité et des grandeurs physiques utilisées en maintenance.",
    "Savoir lire et exploiter des consignes et des documents techniques.",
    "Maîtriser les calculs mathématiques élémentaires.",
    "Savoir utiliser l’outillage mécanique de base en respectant les règles de sécurité.",
    "Être capable de travailler avec méthode et de rendre compte de son raisonnement.",
    "Pour les étudiants déjà inscrits, apporter les cours, travaux pratiques, schémas ou projets correspondant aux notions à reprendre.",
  ],

  generalObjective:
    "À l’issue de l’accompagnement, le participant aura acquis ou consolidé les connaissances scientifiques, techniques et méthodologiques nécessaires pour préparer son entrée ou progresser en BTS Maintenance des véhicules, options véhicules légers ou motocycles. Il sera accompagné dans l’analyse des systèmes, la démarche de diagnostic, l’exploitation de la documentation technique, l’organisation des interventions de maintenance et la communication de conclusions techniques argumentées.",

  operationalObjectives: [
    "C1.1 — Constater le dysfonctionnement.",
    "C1.2 — Hiérarchiser les hypothèses.",
    "C1.3 — Appliquer un protocole d’essais et mesures.",
    "C1.4 — Proposer des solutions correctives adaptées aux contraintes économiques, environnementales et réglementaires.",
    "C2.1 — Appliquer les principes de la relation client en après-vente.",
    "C2.2 — Commercialiser des produits et des services de l’après-vente.",
    "C3.1 — Assurer la planification et le suivi de l’intervention.",
    "C3.2 — Suivre les indicateurs de performance de l’après-vente.",
    "C3.3 — Contribuer au développement professionnel de l’équipe.",
    "C4.1 — Préparer une intervention corrective.",
    "C4.2 — Remettre en conformité les systèmes.",
  ],

  modules: [
    {
      title:
        "Bloc 1 — Réaliser le diagnostic des systèmes des véhicules",

      description:
        "Analyser un dysfonctionnement complexe, construire une démarche de diagnostic argumentée et proposer des solutions correctives adaptées.",

      topics: [
        "Constater et caractériser précisément le dysfonctionnement",
        "Recueillir et exploiter les informations techniques disponibles",
        "Comprendre les interactions entre les différents systèmes du véhicule",
        "Formuler et hiérarchiser les hypothèses",
        "Appliquer un protocole d’essais et de mesures",
        "Interpréter les relevés et les résultats obtenus",
        "Proposer des solutions tenant compte des contraintes techniques, économiques, environnementales et réglementaires",
      ],
    },

    {
      title:
        "Bloc 2 — Assurer la relation clientèle et la commercialisation des produits et services de l’après-vente",

      description:
        "Développer une communication professionnelle adaptée et participer à la valorisation des prestations de l’après-vente.",

      topics: [
        "Identifier et reformuler les attentes du client",
        "Expliquer une intervention ou un diagnostic",
        "Présenter des conclusions techniques compréhensibles",
        "Conseiller le client sur l’entretien et l’utilisation du véhicule",
        "Présenter des produits et services adaptés au besoin",
        "Participer à la qualité de la relation client",
        "Adopter une communication professionnelle à l’oral et à l’écrit",
      ],
    },

    {
      title:
        "Bloc 3 — Organiser les activités de maintenance des véhicules",

      description:
        "Planifier et suivre les interventions, analyser les résultats de l’activité et contribuer au développement des compétences de l’équipe.",

      topics: [
        "Planifier les différentes étapes d’une intervention",
        "Répartir et suivre les activités à réaliser",
        "Prendre en compte les moyens humains, matériels et documentaires",
        "Suivre l’avancement et la qualité des travaux",
        "Exploiter les indicateurs de performance de l’après-vente",
        "Identifier les écarts et proposer des améliorations",
        "Participer à la transmission des connaissances",
        "Contribuer au développement professionnel de l’équipe",
      ],
    },

    {
      title:
        "Bloc 4 — Réaliser la maintenance corrective des véhicules",

      description:
        "Préparer et réaliser des opérations de maintenance corrective permettant de remettre les systèmes du véhicule en conformité.",

      topics: [
        "Analyser la demande et préparer l’intervention",
        "Rechercher les procédures et les données techniques nécessaires",
        "Identifier les risques et sécuriser la zone de travail",
        "Choisir les moyens, les outils et les équipements adaptés",
        "Déposer, contrôler, réparer ou remplacer des composants",
        "Réaliser les réglages, paramétrages ou programmations nécessaires",
        "Contrôler la conformité et le fonctionnement des systèmes",
        "Assurer la traçabilité et rendre compte de l’intervention",
      ],
    },
  ],

  methods: [
    "Entretien initial pour identifier le parcours, l’option et les besoins de l’étudiant",
    "Apports théoriques adaptés aux notions étudiées en établissement",
    "Reprise et reformulation des connaissances scientifiques et techniques",
    "Lecture et analyse de schémas, de courbes et de documents constructeur",
    "Études de cas et de situations professionnelles",
    "Démonstrations réalisées par le formateur",
    "Exercices pratiques sur véhicule léger ou motocycle",
    "Utilisation d’appareils de mesure et de diagnostic",
    "Accompagnement dans la construction d’un raisonnement technique",
    "Aide à la rédaction et à la présentation de conclusions argumentées",
    "Corrections individualisées",
    "Création de supports de révision adaptés aux difficultés rencontrées",
  ],

  resources: [
    "Supports pédagogiques adaptés aux notions travaillées",
    "Référentiel du BTS Maintenance des véhicules",
    "Documentation technique constructeur",
    "Schémas mécaniques, électriques et électroniques",
    "Courbes, relevés et données de fonctionnement",
    "Véhicule léger et motocycle",
    "Composants mécaniques, électriques et électroniques de démonstration",
    "Outillage manuel et outillage spécifique",
    "Multimètre et appareils de mesure",
    "Outil de diagnostic électronique",
    "Moyens de contrôle mécanique",
    "Fiches méthodologiques et études de cas",
    "Équipements de protection individuelle",
    "Zone de travail organisée et sécurisée",
  ],

  trainer: {
    name: "Schoenenberger Jérémy",

    qualification:
      "Technicien préparateur compétition, diplômé de l’École de la Performance à Nogaro comme Technicien préparateur développeur de véhicules de compétition, option motocycles.",
  },

  accompanimentTitle:
    "Un accompagnement adapté à votre progression",

  accompanimentDescription:
    "L’accompagnement peut être organisé avant l’entrée en BTS, ponctuellement lorsqu’une difficulté particulière est rencontrée, ou régulièrement pendant les deux années de formation.",

  accompanimentItems: [
    "Entretien initial pour identifier le parcours, l’option, le niveau et les besoins de l’étudiant",
    "Préparation à l’entrée en BTS Maintenance des véhicules",
    "Consolidation des connaissances scientifiques et techniques",
    "Reprise des notions étudiées en établissement",
    "Soutien sur l’analyse des systèmes mécaniques, électriques et électroniques",
    "Accompagnement dans la construction d’une démarche de diagnostic",
    "Aide à l’exploitation des schémas, courbes, mesures et documents constructeur",
    "Exercices pratiques adaptés à la progression de l’étudiant",
    "Aide à la rédaction de comptes rendus et de conclusions techniques",
    "Retour sur les difficultés rencontrées en cours, en travaux pratiques ou en entreprise",
    "Possibilité de suivi régulier pendant toute la durée du BTS",
    "Adaptation à l’option véhicules légers ou motocycles",
  ],

  certification: [
    "Supports pédagogiques correspondant aux notions travaillées",
    "Fiches techniques et méthodologiques",
    "Exercices et études de cas complémentaires",
    "Schémas et documents annotés",
    "Fiches de révision personnalisées",
    "Synthèses des séances réalisées",
    "Aides méthodologiques pour le diagnostic",
    "Attestation de participation sur demande",
  ],

  accessibility:
    "Les besoins particuliers ou les situations de handicap sont étudiés avant le début de l’accompagnement afin d’identifier les adaptations pédagogiques, matérielles ou organisationnelles pouvant être mises en place.",

  practicalInformation:
    "L’accompagnement peut être organisé sous la forme de séances ponctuelles ou d’un suivi régulier pendant les deux années du BTS. La fréquence, la durée, le contenu, le lieu et le tarif sont définis individuellement selon les besoins, l’option et la progression de l’étudiant.",

  legalNotice:
    "Cet accompagnement pédagogique ne se substitue pas à la formation dispensée par un lycée, un CFA ou un établissement habilité. Il ne permet pas, à lui seul, de valider un bloc de compétences, une unité, une épreuve ou le diplôme du BTS Maintenance des véhicules.",
};


          {/* Préparation aux examens CAP */}

export const preparationExamensCAPFormation: Formation = {
  id: "preparation-examens-cap-maintenance-vehicules",
  reference: "PPA-PEX-CAP",

  title:
    "Préparation aux épreuves du CAP Maintenance des véhicules",

  subtitle:
    "Mobiliser ses acquis, maîtriser les attendus des épreuves et se préparer dans les conditions de l’examen",

  level: "Fin de formation – Préparation à l’examen",
  vehicles: "Véhicules légers & motocycles",
  format: "Préparation pratique, orale & méthodologique",

  nature:
    "Action de préparation aux épreuves professionnelles du CAP Maintenance des véhicules, adaptée à l’option, au mode d’évaluation et au référentiel applicable à la session d’examen du candidat.",

  audience:
    "Élèves, apprentis et candidats individuels préparant les épreuves du CAP Maintenance des véhicules, options véhicules légers ou motocycles, et souhaitant renforcer leur maîtrise des compétences professionnelles attendues, se préparer aux situations d’examen et corriger leurs dernières difficultés avant la session.",

  prerequisites: [
    "Préparer les épreuves du CAP Maintenance des véhicules.",
    "Connaître l’option présentée : véhicules légers ou motocycles.",
    "Avoir déjà travaillé tout ou partie des compétences professionnelles du diplôme.",
    "Maîtriser les règles essentielles de santé et de sécurité en atelier.",
    "Savoir utiliser l’outillage mécanique courant.",
    "Être capable de comprendre une documentation technique et des consignes d’intervention.",
    "Apporter, lorsqu’ils sont disponibles, les cours, travaux pratiques ou documents permettant d’identifier les difficultés.",
  ],

  generalObjective:
    "À l’issue de la préparation, le candidat sera en mesure de mobiliser ses connaissances et ses compétences professionnelles dans les conditions attendues lors des épreuves du CAP Maintenance des véhicules, option véhicules légers ou motocycles. Il sera préparé à organiser son intervention, appliquer les procédures techniques, réaliser les opérations demandées, respecter les règles de sécurité, contrôler la qualité de son travail et présenter clairement sa démarche à l’évaluateur ou au jury.",

  operationalObjectives: [
    "C1.1 — Organiser un entretien périodique.",
    "C1.2 — Identifier les anomalies dans le cadre d’un entretien périodique.",
    "C1.3 — Réaliser les opérations de remplacement, d’ajustement dans le cadre de l’entretien périodique.",
    "C1.4 — Apporter des conseils techniques à la clientèle sur l’entretien du véhicule.",
    "C2.1 — Préparer une intervention corrective.",
    "C2.2 — Réaliser le remplacement ou la réparation des composants.",
    "C2.3 — Réaliser le réglage des systèmes.",
    "C2.4 — Réaliser le contrôle qualité d’une intervention corrective.",
    "C2.5 — Réaliser le diagnostic de premier niveau.",
    "Analyser un sujet et identifier les opérations demandées.",
    "Organiser son intervention et gérer le temps disponible.",
    "Justifier ses choix techniques et expliquer sa démarche.",
    "Adopter une posture professionnelle face à l’évaluateur.",
  ],

  modules: [
    {
      title:
        "Préparation à l’épreuve EP1 — Réalisation de l’entretien périodique des véhicules",

      description:
        "Se préparer à organiser et réaliser une intervention d’entretien périodique dans les conditions attendues lors de l’épreuve.",

      topics: [
        "Analyser le sujet et les documents techniques fournis",
        "Identifier le véhicule et les opérations demandées",
        "Organiser le poste de travail et préparer l’outillage",
        "Effectuer les contrôles prévus par la procédure",
        "Identifier et signaler les anomalies constatées",
        "Réaliser les remplacements et les ajustements demandés",
        "Respecter les règles de sécurité et de protection de l’environnement",
        "Contrôler la qualité de l’intervention",
        "Présenter les opérations réalisées et formuler des conseils techniques",
      ],
    },

    {
      title:
        "Préparation à l’épreuve EP2 — Réalisation de la maintenance corrective des véhicules",

      description:
        "Se préparer à réaliser une intervention corrective, à contrôler son résultat et à présenter sa démarche professionnelle.",

      topics: [
        "Analyser la demande d’intervention",
        "Rechercher et exploiter la documentation technique",
        "Préparer et sécuriser l’intervention",
        "Déposer, contrôler, réparer ou remplacer des composants",
        "Réaliser les réglages nécessaires",
        "Mettre en œuvre un diagnostic de premier niveau",
        "Vérifier le fonctionnement et la conformité du système",
        "Compléter les documents de suivi",
        "Expliquer les contrôles, les choix techniques et les résultats obtenus",
      ],
    },

    {
      title:
        "Méthodologie, gestion du temps et examens blancs",

      description:
        "Apprendre à mobiliser efficacement ses compétences dans un temps limité et dans des conditions proches de l’examen.",

      topics: [
        "Comprendre les attendus et les critères des épreuves",
        "Lire rapidement un sujet et repérer les informations essentielles",
        "Organiser son intervention avant de commencer",
        "Gérer le temps disponible",
        "Adopter une posture professionnelle face à l’évaluateur",
        "Justifier ses choix avec un vocabulaire technique adapté",
        "S’entraîner sur des situations pratiques chronométrées",
        "Réaliser des examens blancs",
        "Analyser les erreurs et cibler les dernières notions à consolider",
      ],
    },
  ],

  methods: [
    "Entretien initial pour identifier la session, l’option et les difficultés du candidat",
    "Analyse des attendus des épreuves professionnelles",
    "Étude de sujets, de consignes et de documents techniques",
    "Rappels ciblés sur les connaissances indispensables",
    "Démonstrations réalisées par le formateur",
    "Exercices pratiques proches des situations d’examen",
    "Entraînement à l’organisation du poste et à la gestion du temps",
    "Préparation à la présentation orale de la démarche",
    "Mises en situation chronométrées",
    "Examens blancs",
    "Analyse des erreurs et corrections individualisées",
    "Conseils méthodologiques pour le jour de l’épreuve",
  ],

  resources: [
    "Référentiel et documents applicables à la session préparée",
    "Sujets et situations professionnelles d’entraînement",
    "Automobile ou motocycle selon l’option du candidat",
    "Documentation technique constructeur",
    "Ordres de réparation et fiches d’intervention",
    "Outillage manuel et outillage spécifique",
    "Appareils de mesure et de contrôle",
    "Matériel de diagnostic de premier niveau",
    "Pièces, fluides et consommables nécessaires aux exercices",
    "Équipements de levage et de maintien",
    "Équipements de protection individuelle",
    "Zone de travail organisée et sécurisée",
    "Grilles d’observation permettant d’analyser les entraînements",
  ],

  trainer: {
    name: "Schoenenberger Jérémy",

    qualification:
      "Technicien préparateur compétition, diplômé de l’École de la Performance à Nogaro comme Technicien préparateur développeur de véhicules de compétition, option motocycles.",
  },

  accompanimentTitle:
    "Une préparation adaptée à votre session d’examen",

  accompanimentDescription:
    "Le contenu de la préparation est défini à partir de l’option présentée, du référentiel applicable, du mode d’évaluation, du temps restant avant les épreuves et des difficultés identifiées chez le candidat.",

  accompanimentItems: [
    "Entretien initial pour identifier la session, l’option et les besoins prioritaires",
    "Analyse des compétences et des notions restant à consolider",
    "Préparation ciblée à l’épreuve EP1",
    "Préparation ciblée à l’épreuve EP2",
    "Entraînement à l’utilisation de la documentation technique",
    "Travail sur l’organisation du poste et la gestion du temps",
    "Préparation à la présentation orale de la démarche",
    "Mises en situation pratiques chronométrées",
    "Examens blancs dans des conditions proches de l’épreuve",
    "Analyse des erreurs et correction des dernières lacunes",
    "Possibilité d’un suivi régulier jusqu’à la session d’examen",
    "Adaptation à l’option véhicules légers ou motocycles",
  ],

  certification: [
    "Fiches méthodologiques de préparation aux épreuves",
    "Supports de révision ciblés",
    "Sujets et situations d’entraînement",
    "Fiches techniques et documents annotés",
    "Synthèses personnalisées des notions à consolider",
    "Conseils d’organisation pour le jour de l’examen",
    "Bilans des examens blancs réalisés",
    "Attestation de participation sur demande",
  ],

  accessibility:
    "Les besoins particuliers ou les situations de handicap sont étudiés avant le début de la préparation afin d’identifier les adaptations pédagogiques, matérielles ou organisationnelles pouvant être mises en place.",

  practicalInformation:
    "La préparation peut être organisée sous la forme de séances ciblées, d’examens blancs ou d’un suivi régulier jusqu’aux épreuves. La durée, la fréquence, le contenu, le lieu et le tarif sont définis individuellement selon l’option, la session d’examen, le mode d’évaluation et les besoins du candidat.",

  legalNotice:
    "Cette préparation ne se substitue pas à la formation dispensée par un lycée professionnel, un CFA ou un établissement habilité. Les entraînements et examens blancs organisés par Performance & Prestige Academy ne constituent pas les épreuves officielles du CAP et ne garantissent pas l’obtention du diplôme.",
};

          {/* Préparation aux examens BACPRO */}

export const preparationExamensBacProFormation: Formation = {
  id: "preparation-examens-bac-pro-maintenance-vehicules",
  reference: "PPA-PEX-BACPRO",

  title:
    "Préparation aux épreuves du Bac professionnel Maintenance des véhicules",

  subtitle:
    "Mobiliser ses compétences, maîtriser les attendus des épreuves et se préparer dans les conditions de l’examen",

  level: "Fin de formation – Préparation à l’examen",
  vehicles: "Véhicules légers & motocycles",
  format: "Préparation pratique, orale, écrite & méthodologique",

  nature:
    "Action de préparation aux épreuves professionnelles du Bac professionnel Maintenance des véhicules, adaptée à l’option, au mode d’évaluation et au référentiel applicable à la session d’examen du candidat.",

  audience:
    "Élèves, apprentis et candidats individuels préparant les épreuves du Bac professionnel Maintenance des véhicules dans le domaine de l’automobile ou du motocycle, et souhaitant consolider leurs compétences, maîtriser les attendus des épreuves et corriger leurs dernières difficultés avant la session d’examen.",

  prerequisites: [
    "Préparer les épreuves du Bac professionnel Maintenance des véhicules.",
    "Connaître l’option et la session d’examen présentées.",
    "Avoir déjà travaillé tout ou partie des compétences professionnelles du diplôme.",
    "Maîtriser les règles essentielles de santé et de sécurité en atelier.",
    "Savoir utiliser l’outillage ainsi que les principaux appareils de mesure et de contrôle.",
    "Être capable de lire une documentation technique, un schéma et des consignes d’intervention.",
    "Pouvoir expliquer une démarche technique à l’oral ou à l’écrit.",
    "Apporter, lorsqu’ils sont disponibles, les cours, travaux pratiques, livrets de suivi ou documents permettant d’identifier les difficultés.",
  ],

  generalObjective:
    "À l’issue de la préparation, le candidat sera en mesure de mobiliser ses connaissances et ses compétences professionnelles dans les conditions attendues lors des épreuves du Bac professionnel Maintenance des véhicules. Il sera préparé à analyser une situation professionnelle, organiser son intervention, exploiter la documentation technique, réaliser les contrôles et opérations demandés, mettre en œuvre une démarche de diagnostic, contrôler la qualité de son travail et présenter clairement ses choix et ses conclusions.",

  operationalObjectives: [
    "C1.1 — Organiser un entretien périodique.",
    "C1.2 — Identifier les anomalies dans le cadre d’un entretien périodique.",
    "C1.3 — Réaliser les opérations de remplacement, d’ajustement dans le cadre de l’entretien périodique.",
    "C1.4 — Apporter des conseils techniques à la clientèle sur l’entretien du véhicule.",
    "C2.1 — Préparer une intervention corrective.",
    "C2.2 — Réaliser le remplacement ou la réparation des composants.",
    "C2.3 — Réaliser le réglage ou le paramétrage des systèmes.",
    "C2.4 — Réaliser le contrôle qualité d’une intervention corrective.",
    "C3.1 — Constater un dysfonctionnement.",
    "C3.2 — Hiérarchiser les hypothèses.",
    "C3.3 — Mettre en œuvre un protocole d’intervention existant ou à définir.",
    "C3.4 — Identifier les solutions correctives.",
    "Analyser un sujet et identifier les compétences évaluées.",
    "Organiser son intervention et gérer le temps imparti.",
    "Exploiter les dossiers, schémas et documents techniques.",
    "Justifier ses hypothèses, ses mesures et ses choix techniques.",
    "Présenter une démarche structurée à l’oral et à l’écrit.",
    "Adopter une posture professionnelle face aux évaluateurs.",
  ],

  modules: [
    {
      title:
        "Préparation à l’épreuve E2 — Réalisation de l’entretien périodique des véhicules",

      description:
        "Se préparer à organiser, réaliser et contrôler une intervention d’entretien périodique dans les conditions attendues à l’examen.",

      topics: [
        "Analyser le sujet, la demande et les documents techniques",
        "Identifier le véhicule et les opérations d’entretien demandées",
        "Organiser le poste de travail et préparer les moyens nécessaires",
        "Réaliser les contrôles prévus par la procédure",
        "Repérer, interpréter et signaler les anomalies",
        "Effectuer les remplacements, ajustements et réinitialisations nécessaires",
        "Respecter les règles de sécurité et de protection de l’environnement",
        "Contrôler la qualité de l’intervention",
        "Présenter les opérations réalisées et formuler des conseils techniques",
      ],
    },

    {
      title:
        "Préparation à l’épreuve E31 — Réalisation de la maintenance corrective des véhicules",

      description:
        "Se préparer à remettre un système en conformité en appliquant une méthode d’intervention rigoureuse, sûre et conforme aux données techniques.",

      topics: [
        "Analyser la demande et identifier le système concerné",
        "Rechercher les procédures et les données constructeur",
        "Préparer et sécuriser l’intervention",
        "Choisir les outils, appareils et équipements adaptés",
        "Déposer, contrôler, réparer ou remplacer les composants",
        "Réaliser les réglages ou paramétrages nécessaires",
        "Contrôler le fonctionnement et la conformité du système",
        "Assurer la traçabilité de l’intervention",
        "Rendre compte du travail réalisé",
      ],
    },

    {
      title:
        "Préparation à l’épreuve E32 — Réalisation du diagnostic des systèmes des véhicules",

      description:
        "Se préparer à construire et présenter une démarche de diagnostic cohérente face à un dysfonctionnement mécanique, électrique ou électronique.",

      topics: [
        "Constater et caractériser le dysfonctionnement",
        "Recueillir les informations nécessaires",
        "Analyser le fonctionnement du système concerné",
        "Formuler et hiérarchiser les hypothèses",
        "Définir ou appliquer un protocole de diagnostic",
        "Sélectionner les contrôles et les appareils de mesure",
        "Interpréter les valeurs et les résultats obtenus",
        "Identifier et justifier les solutions correctives",
        "Présenter clairement le raisonnement suivi",
      ],
    },

    {
      title:
        "Méthodologie, communication et examens blancs",

      description:
        "Apprendre à mobiliser ses compétences avec méthode, dans un temps limité et dans des conditions proches de celles de l’examen.",

      topics: [
        "Comprendre les attendus et les critères des épreuves",
        "Lire et analyser efficacement un sujet",
        "Repérer les compétences réellement évaluées",
        "Organiser son intervention avant de commencer",
        "Gérer le temps imparti",
        "Exploiter correctement les documents techniques",
        "Justifier ses hypothèses, ses mesures et ses choix",
        "Présenter une démarche structurée à l’oral et à l’écrit",
        "Réaliser des mises en situation chronométrées",
        "Participer à des examens blancs",
        "Analyser les erreurs et corriger les dernières lacunes",
      ],
    },
  ],

  methods: [
    "Entretien initial pour identifier la session, l’option et les difficultés prioritaires",
    "Analyse des attendus des épreuves professionnelles",
    "Étude de sujets, de consignes, de dossiers techniques et de schémas",
    "Rappels ciblés sur les connaissances indispensables",
    "Démonstrations techniques réalisées par le formateur",
    "Exercices pratiques proches des situations d’examen",
    "Entraînement à la démarche de diagnostic",
    "Utilisation méthodique des appareils de mesure et de diagnostic",
    "Travail sur l’organisation du poste et la gestion du temps",
    "Préparation à la justification des choix techniques",
    "Entraînement à la restitution orale et écrite",
    "Mises en situation chronométrées",
    "Examens blancs",
    "Analyse des erreurs et corrections individualisées",
  ],

  resources: [
    "Référentiel et documents applicables à la session préparée",
    "Sujets et situations professionnelles d’entraînement",
    "Véhicule léger ou motocycle selon l’option",
    "Documentation technique constructeur",
    "Schémas mécaniques, électriques et électroniques",
    "Ordres de réparation, fiches d’intervention et dossiers techniques",
    "Outillage manuel et outillage spécifique",
    "Multimètre et appareils de mesure",
    "Outil de diagnostic électronique",
    "Moyens de contrôle mécanique",
    "Équipements de levage et de maintien",
    "Pièces, produits et consommables nécessaires aux exercices",
    "Équipements de protection individuelle",
    "Zone de travail organisée et sécurisée",
    "Grilles d’observation permettant d’analyser les mises en situation",
  ],

  trainer: {
    name: "Schoenenberger Jérémy",

    qualification:
      "Technicien préparateur compétition, diplômé de l’École de la Performance à Nogaro comme Technicien préparateur développeur de véhicules de compétition, option motocycles.",
  },

  accompanimentTitle:
    "Une préparation adaptée à votre session d’examen",

  accompanimentDescription:
    "Le contenu de la préparation est défini selon l’option présentée, le référentiel applicable, le mode d’évaluation, le temps restant avant les épreuves et les difficultés prioritaires du candidat.",

  accompanimentItems: [
    "Entretien initial pour identifier la session, l’option et le mode d’évaluation",
    "Analyse des compétences restant à consolider",
    "Préparation ciblée aux épreuves professionnelles concernées",
    "Rappels théoriques adaptés aux lacunes constatées",
    "Entraînement à l’exploitation des dossiers et documents techniques",
    "Travail sur la démarche de diagnostic",
    "Préparation à la justification des hypothèses et des choix techniques",
    "Entraînement à la communication orale et écrite",
    "Travail sur l’organisation du poste et la gestion du temps",
    "Mises en situation pratiques chronométrées",
    "Examens blancs dans des conditions proches des épreuves",
    "Analyse des erreurs et correction des dernières difficultés",
    "Possibilité d’un suivi régulier jusqu’à la session d’examen",
    "Adaptation à l’option véhicules légers ou motocycles",
  ],

  certification: [
    "Fiches méthodologiques de préparation aux épreuves",
    "Supports de révision ciblés",
    "Sujets et situations professionnelles d’entraînement",
    "Dossiers techniques et schémas annotés",
    "Fiches consacrées à la démarche de diagnostic",
    "Synthèses personnalisées des notions à consolider",
    "Conseils d’organisation pour le jour des épreuves",
    "Bilans des mises en situation et examens blancs",
    "Attestation de participation sur demande",
  ],

  accessibility:
    "Les besoins particuliers ou les situations de handicap sont étudiés avant le début de la préparation afin d’identifier les adaptations pédagogiques, matérielles ou organisationnelles pouvant être mises en place.",

  practicalInformation:
    "La préparation peut être organisée sous la forme de séances ciblées, de mises en situation, d’examens blancs ou d’un suivi régulier jusqu’aux épreuves. La durée, la fréquence, le contenu, le lieu et le tarif sont définis individuellement selon l’option, la session, le mode d’évaluation et les besoins du candidat.",

  legalNotice:
    "Cette préparation ne se substitue pas à la formation dispensée par un lycée professionnel, un CFA ou un établissement habilité. Les entraînements et examens blancs organisés par Performance & Prestige Academy ne constituent pas les épreuves officielles du Bac professionnel et ne garantissent pas l’obtention du diplôme.",
};

          {/* Préparation aux examens BTS*/}

export const preparationExamensBTSFormation: Formation = {
  id: "preparation-examens-bts-maintenance-vehicules",
  reference: "PPA-PEX-BTS",

  title:
    "Préparation aux épreuves du BTS Maintenance des véhicules",

  subtitle:
    "Mobiliser ses compétences techniques, structurer son analyse et se préparer aux exigences des épreuves",

  level: "Fin d’études supérieures – Préparation à l’examen",
  vehicles: "Véhicules légers & motocycles",
  format: "Préparation technique, pratique, orale, écrite & méthodologique",

  nature:
    "Action de préparation aux épreuves professionnelles du BTS Maintenance des véhicules, adaptée à l’option, aux épreuves présentées, au mode d’évaluation et au référentiel applicable à la session d’examen du candidat.",

  audience:
    "Étudiants, apprentis et candidats individuels préparant les épreuves du BTS Maintenance des véhicules dans le domaine des véhicules légers ou des motocycles, et souhaitant consolider leurs compétences techniques, structurer leur raisonnement et corriger leurs dernières difficultés avant la session d’examen.",

  prerequisites: [
    "Préparer les épreuves du BTS Maintenance des véhicules.",
    "Connaître l’option et la session d’examen présentées.",
    "Avoir déjà travaillé tout ou partie des compétences professionnelles du diplôme.",
    "Posséder de solides connaissances en mécanique automobile ou motocycle.",
    "Maîtriser les bases de l’électricité, de l’électronique et des grandeurs physiques utilisées en maintenance.",
    "Savoir exploiter une documentation constructeur, un schéma, une courbe et des données de mesure.",
    "Être capable de mettre en œuvre une démarche de diagnostic.",
    "Pouvoir expliquer et justifier un raisonnement technique à l’oral comme à l’écrit.",
    "Apporter, lorsqu’ils sont disponibles, les cours, travaux pratiques, dossiers, projets ou documents permettant d’identifier les difficultés.",
  ],

  generalObjective:
    "À l’issue de la préparation, le candidat sera en mesure de mobiliser ses connaissances scientifiques, techniques et professionnelles dans les conditions attendues lors des épreuves du BTS Maintenance des véhicules. Il sera préparé à analyser un dysfonctionnement, construire et justifier une démarche de diagnostic, exploiter les essais et les mesures, proposer des solutions correctives adaptées, organiser une intervention et présenter des conclusions techniques structurées à l’oral comme à l’écrit.",

  operationalObjectives: [
    "C1.1 — Constater le dysfonctionnement.",
    "C1.2 — Hiérarchiser les hypothèses.",
    "C1.3 — Appliquer un protocole d’essais et mesures.",
    "C1.4 — Proposer des solutions correctives adaptées aux contraintes économiques, environnementales et réglementaires.",
    "C2.1 — Appliquer les principes de la relation client en après-vente.",
    "C2.2 — Commercialiser des produits et des services de l’après-vente.",
    "C3.1 — Assurer la planification et le suivi de l’intervention.",
    "C3.2 — Suivre les indicateurs de performance de l’après-vente.",
    "C3.3 — Contribuer au développement professionnel de l’équipe.",
    "C4.1 — Préparer une intervention corrective.",
    "C4.2 — Remettre en conformité les systèmes.",
    "Analyser efficacement un sujet et un dossier technique.",
    "Construire et justifier une démarche de diagnostic.",
    "Sélectionner les essais, les mesures et les outils adaptés.",
    "Interpréter des schémas, des courbes, des relevés et des résultats.",
    "Proposer des solutions techniques argumentées.",
    "Organiser son travail et gérer le temps imparti.",
    "Présenter clairement ses conclusions à l’oral et à l’écrit.",
    "Adopter une posture professionnelle face aux évaluateurs.",
  ],

  modules: [
    {
      title:
        "Préparation à l’épreuve E5 — Réalisation du diagnostic des systèmes des véhicules",

      description:
        "Se préparer à construire, conduire et présenter une démarche de diagnostic complète, argumentée et fondée sur des essais et des mesures.",

      topics: [
        "Constater et caractériser précisément un dysfonctionnement",
        "Réaliser l’analyse fonctionnelle et structurelle du système",
        "Formuler et hiérarchiser des hypothèses",
        "Définir les essais et les mesures nécessaires",
        "Exploiter les schémas, les courbes et les données constructeur",
        "Interpréter les résultats obtenus",
        "Écarter ou valider les différentes hypothèses",
        "Proposer des solutions correctives argumentées",
        "Structurer le dossier technique et préparer sa présentation orale",
      ],
    },

    {
      title:
        "Préparation à l’épreuve E6 — Gestion de la relation clientèle et commercialisation des services de l’après-vente",

      description:
        "Se préparer à présenter des situations professionnelles, expliquer une prestation technique et construire une communication adaptée à la clientèle.",

      topics: [
        "Sélectionner des situations professionnelles pertinentes",
        "Présenter le contexte, le besoin et les attentes du client",
        "Expliquer clairement une intervention ou un diagnostic",
        "Formuler des recommandations techniques compréhensibles",
        "Présenter des produits et services adaptés",
        "Argumenter une proposition commerciale",
        "Structurer le dossier professionnel",
        "Préparer une présentation orale claire et dynamique",
        "Répondre avec précision aux questions du jury",
      ],
    },

    {
      title:
        "Préparation à l’épreuve E7 — Organisation des activités de maintenance des véhicules",

      description:
        "Se préparer à analyser, planifier et suivre une activité d’après-vente en tenant compte des moyens disponibles et des objectifs de performance.",

      topics: [
        "Analyser une situation d’organisation d’atelier",
        "Planifier et suivre une intervention",
        "Prendre en compte les moyens humains, matériels et documentaires",
        "Identifier les priorités et les contraintes",
        "Exploiter des indicateurs de performance",
        "Analyser les écarts constatés",
        "Proposer des actions d’amélioration",
        "Participer au développement des compétences de l’équipe",
        "Présenter une analyse critique et argumentée",
      ],
    },

    {
      title:
        "Préparation à l’épreuve E8 — Réalisation de la maintenance corrective des véhicules",

      description:
        "Se préparer à conduire une intervention corrective complexe en respectant les procédures, la sécurité et les exigences de qualité.",

      topics: [
        "Analyser la demande et identifier le système concerné",
        "Rechercher les données et les procédures techniques",
        "Évaluer les risques et sécuriser l’intervention",
        "Choisir l’outillage et les appareils adaptés",
        "Déposer, contrôler, réparer ou remplacer des composants",
        "Réaliser les réglages, paramétrages ou programmations nécessaires",
        "Contrôler la conformité et le fonctionnement du système",
        "Assurer la traçabilité de l’intervention",
        "Présenter et justifier les choix techniques réalisés",
      ],
    },

    {
      title:
        "Dossiers, soutenances et examens blancs",

      description:
        "Apprendre à valoriser son travail, à défendre son raisonnement et à maîtriser les différentes formes de présentation attendues lors des épreuves.",

      topics: [
        "Comprendre les attendus et les critères des épreuves",
        "Sélectionner les activités professionnelles les plus pertinentes",
        "Organiser un dossier clair, structuré et techniquement justifié",
        "Construire des supports visuels efficaces",
        "Présenter une démarche sans réciter son dossier",
        "Employer un vocabulaire professionnel précis",
        "Argumenter ses hypothèses et ses solutions",
        "Répondre aux questions et défendre ses choix",
        "Gérer son temps pendant une présentation",
        "Réaliser des soutenances et des mises en situation blanches",
        "Analyser ses erreurs et améliorer progressivement sa prestation",
      ],
    },
  ],

  methods: [
    "Entretien initial pour identifier la session, l’option et les épreuves préparées",
    "Analyse des attendus et des critères des épreuves professionnelles",
    "Étude de sujets, de dossiers techniques et de situations professionnelles",
    "Rappels ciblés sur les connaissances scientifiques et techniques indispensables",
    "Analyse de schémas, de courbes, de relevés et de données constructeur",
    "Accompagnement dans la construction d’une démarche de diagnostic",
    "Exercices pratiques et études de cas complexes",
    "Préparation et amélioration des dossiers professionnels",
    "Travail sur l’argumentation et la justification des choix techniques",
    "Entraînement à la présentation orale et à la réponse aux questions",
    "Mises en situation et soutenances chronométrées",
    "Examens blancs",
    "Analyse des erreurs et corrections individualisées",
    "Conseils méthodologiques pour chaque épreuve présentée",
  ],

  resources: [
    "Référentiel et documents applicables à la session préparée",
    "Sujets et situations professionnelles d’entraînement",
    "Dossiers techniques et supports professionnels",
    "Documentation technique constructeur",
    "Schémas mécaniques, électriques et électroniques",
    "Courbes, relevés et données de fonctionnement",
    "Véhicule léger ou motocycle selon l’option",
    "Composants mécaniques, électriques et électroniques",
    "Outillage manuel et outillage spécifique",
    "Multimètre et appareils de mesure",
    "Outil de diagnostic électronique",
    "Moyens de contrôle mécanique",
    "Outils de préparation et de présentation des dossiers",
    "Équipements de protection individuelle",
    "Zone de travail organisée et sécurisée",
    "Grilles d’observation pour analyser les soutenances et les mises en situation",
  ],

  trainer: {
    name: "Schoenenberger Jérémy",

    qualification:
      "Technicien préparateur compétition, diplômé de l’École de la Performance à Nogaro comme Technicien préparateur développeur de véhicules de compétition, option motocycles.",
  },

  accompanimentTitle:
    "Une préparation adaptée à votre session d’examen",

  accompanimentDescription:
    "Le contenu de la préparation est défini selon l’option, les épreuves présentées, le référentiel applicable, le mode d’évaluation, le temps restant avant les examens et les difficultés prioritaires du candidat.",

  accompanimentItems: [
    "Entretien initial pour identifier la session, l’option et les épreuves préparées",
    "Analyse des compétences et des connaissances restant à consolider",
    "Préparation ciblée aux épreuves professionnelles concernées",
    "Accompagnement dans la construction du raisonnement de diagnostic",
    "Aide à l’analyse des schémas, courbes, mesures et dossiers techniques",
    "Préparation ou amélioration des dossiers professionnels",
    "Travail sur la justification des hypothèses et des solutions proposées",
    "Entraînement à la présentation orale et à la réponse aux questions",
    "Préparation à la gestion du temps pendant les épreuves",
    "Études de cas et mises en situation chronométrées",
    "Soutenances et examens blancs",
    "Analyse des erreurs et amélioration progressive de la prestation",
    "Possibilité d’un suivi régulier jusqu’à la session d’examen",
    "Adaptation à l’option véhicules légers ou motocycles",
  ],

  certification: [
    "Fiches méthodologiques de préparation aux épreuves",
    "Supports de révision ciblés",
    "Études de cas et sujets d’entraînement",
    "Schémas, courbes et documents techniques annotés",
    "Fiches consacrées à la démarche de diagnostic",
    "Conseils pour la construction et la présentation des dossiers",
    "Trames de préparation aux soutenances",
    "Synthèses personnalisées des connaissances à consolider",
    "Bilans des soutenances et examens blancs",
    "Attestation de participation sur demande",
  ],

  accessibility:
    "Les besoins particuliers ou les situations de handicap sont étudiés avant le début de la préparation afin d’identifier les adaptations pédagogiques, matérielles ou organisationnelles pouvant être mises en place.",

  practicalInformation:
    "La préparation peut être organisée sous la forme de séances ciblées, d’études de cas, d’un accompagnement des dossiers, de soutenances blanches ou d’un suivi régulier jusqu’aux épreuves. La durée, la fréquence, le contenu, le lieu et le tarif sont définis individuellement selon l’option, la session, les épreuves présentées et les besoins du candidat.",

  legalNotice:
    "Cette préparation ne se substitue pas à la formation dispensée par un lycée, un CFA ou un établissement habilité. Les entraînements, études de cas, soutenances et examens blancs organisés par Performance & Prestige Academy ne constituent pas les épreuves officielles du BTS et ne garantissent pas l’obtention du diplôme.",
};