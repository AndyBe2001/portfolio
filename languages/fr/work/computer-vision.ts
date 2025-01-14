import { computerVisionTranslation as EnTranslation } from "@/languages/en/work/computer-vision";

export const computerVisionTranslation: typeof EnTranslation = {
  title:
    "Usage du Deep Learning dans la Détection d'Objets dans les Bibliothèques",
  fact: {
    role: "Mes rôles",
    researcher: "Chercheur",
    developer: "Developeur",
    UIUX: "UI / UX Designeur",
    tool: "Mes outils utilisés",
    duration: "Durée du projet",
    time: "1 an et 6 mois",
    platform: "Platforme",
  },
  context: {
    title: "Contexte",
    pandemic: {
      title: "Pandemie mondiale",
      description:
        "L'avènement de la pandémie mondiale au début de 2020 a radicalement transformé la vie quotidienne, inaugurant une vague de restrictions sans précédent. Les gouvernements du monde entier ont imposé des confinements stricts, ordonnant des ordres de rester chez soi et fermant les entreprises jugées non essentielles. Les rassemblements sociaux ont été interdits, et les déplacements ont pratiquement cessé alors que les frontières se fermaient et que les vols étaient suspendus. Les écoles et les universités ont basculé vers l'apprentissage en ligne, perturbant les modèles éducatifs traditionnels. Les mandats de port du masque sont devenus omniprésents, modifiant les interactions sociales et le comportement public. Ces mesures visaient à freiner la propagation du virus, mais ont également entraîné des perturbations significatives dans les normes sociales, économiques et culturelles.",
    },
    restriction: {
      title: "Le problème",
      description:
        "Dans le contexte des restrictions sanitaires, de nombreuses bibliothèques ont mis en place des mesures limitant le nombre de visiteurs simultanés. Les lecteurs étaient souvent tenus de réserver un créneau horaire à l'avance pour accéder aux installations. Une fois à l'intérieur, les bibliothèques ont mis en œuvre des protocoles de distanciation sociale, limitant le nombre de personnes dans chaque section et encourageant le port du masque facial. Ces mesures visaient à garantir la sécurité des visiteurs tout en permettant un accès limité aux ressources et aux services de la bibliothèque.",
    },
    goal: {
      title: "Nos objectifs",
      description:
        "Basé sur ce contexte, ce projet vise à développer un système qui combine la reconnaissance d'objets et des comptages de visiteur, et à l'appliquer à la bibliothèque du campus de l'Université Ming Chuan à Taoyuan. De la reconnaissance d'objets et le comptage en temps réel des visiteurs, et tout en détectant également les objets interdits et les violations des règles intérieurs. Les données des visiteurs comptés sont ensuite analysées pour aider les bibliothécaires à comprendre la situation actuelle au sein de la bibliothèque.",
    },
  },
  timeline: {
    title: "Calendrier du projet",
    research: {
      title: "Recherche",
      duration: "1 an",
      audit: "Audit",
      technology: "Découverte et apprentissage technologique",
      stack: "Validation de la pile technologique",
      intake: "Prise en charge et alignement du projet",
    },
    design: {
      title: "Design",
      duration: "3 mois",
      ui: "Interface utilisateur",
      feature: "Confirmation des fonctionnalités",
    },
    development: {
      title: "Développement",
      duration: "3 mois",
      application: "Application du cahier de charge",
    },
  },
  feature: {
    title: "Fonctionnalités du projet",
    footage: "Images en direct",
    count: "Comptage des visiteurs",
    detection: "Détection et alerte en cas d'activité suspecte",
    analyze: "Analyse des statistiques précédentes",
    export: "Export des statistiques au format CSV",
  },
  architecture: {
    title: "Architecture du projet",
    camera: "Enregistrement vidéo",
    detection: {
      title: "Détection d'objets à l'aide de l'algorithme YOLOv4",
      basic: "Collecter les caractéristiques de base",
      map: "Collecter les cartes de caractéristiques sur différentes couches",
      object: "Prédire le type d'objet et ses coordonnées",
      filter: "Filtrer et valider les résultats",
    },
    tracking: {
      title: "Suivi d'objet à l'aide de l'algorithme DeepSORT",
      predict: "Prédire les coordonnées futures à l'aide du Filtre de Kalman",
      mahalanobis: "Distance de Mahalanobis",
      appearance: "Descripteur d'apparence",
      relation: "Relation entre les prédictions et les résultats",
      filter:
        "Filtrer et valider les résultats en utilisant l'algorithme hongrois",
    },
    process: {
      title: "Processus logique des résultats et sauvegarde",
      count: "Statistiques du nombre de visiteurs",
      capture: "Capture des comportements illégaux des visiteurs",
      export: "Exportation de données",
    },
  },
  design: {
    title: "Design du projet",
    footage: {
      title: "Images en direct",
      description1: "Fonctionalité le plus attendu du tableau de bord.",
      description2:
        "En fonction du contenu des images, les personnes, les masques et les objets illégaux peuvent être identifiés en temps réel et encadrés en vert s'ils sont autorisés et en rouge s'ils ne le sont pas.",
      description3:
        "Dès qu'un object non autorisé est détectée, le son d'alerte suivante est émise.",
    },
    main: {
      title: "Fonctionnalités principales",
      description1: "Plus de fonctionalité sur le tableau de bord.",
      description2:
        "1. Affichage journalière des statistiques avec le nombre totale de visiteur entrés aujourd'hui et le nombre actuelle de visiteur dans la librairie.",
      description3:
        "2. Affiches une liste de capture d'écran prise lors de la détection d'object non autorisé.",
    },
    statistic: {
      title: "Analyse des statistiques précédentes",
      description1:
        "Dévelopé pour les administrateurs afin de prédire les futures flux de visiteur à l'aide des anciennes statistiques.",
      description2: "1. Sélection des dates (unique ou intervalle).",
      description3:
        "2. Controls des résultats avec 3 bouttons (rafraichir, changer de format et exporter sous format CSV).",
    },
    setting: {
      title: "Paramètres",
      description1:
        "Customisation des fonctionalités pour les besoins actuelles.",
      description2:
        "1. Activer ou désactiver la détection des objets sélectionés.",
      description3:
        "2. Changer le volume du son de l'alarme lors de la détection d'objet non autorisé.",
    },
  },
};
