import type { Content } from "./types";
import { experiencesBase, profileBase, projectsBase, socials } from "./shared";

export const content: Content = {
    profile: {
        ...profileBase,
        name: "William Dempuré",
        title1: "Développeur Fullstack ",
        title2: "React/TypeScript | Python",
        blurb:
            "Je développe des applications web full-stack, du front à l’API, jusqu’au déploiement.",
    },
    socials,
    about: [
        "Je suis développeur fullstack, et j’aime autant travailler sur l’interface que sur le backend : construire une feature, la brancher à une API, la stocker proprement, puis la déployer.",
        "J’ai eu l’occasion de bosser sur des sujets très concrets : outils internes, automatisation, dashboards, et aussi des projets perso auto-hébergés (stack React/TypeScript principalement).",
        "Je cherche aujourd’hui un poste en CDI où je peux continuer à progresser dans une équipe, livrer des fonctionnalités utiles, et être impliqué dans le produit au quotidien.",
    ],
    experiences: [
        {
            ...experiencesBase.freelance,
            period: "2025 — Aujourd’hui",
            role: "Développeur Fullstack",
            company: "Auto-entrepreneur",
            summary:
                "Missions orientées automatisation et visualisation de data",
            bullets: [
                "Mission : Automatisation documentaire avec n8n\nConception d’un workflow automatisé intégrant des modèles d’IA (LLM)\nAnalyse et extraction d’informations de fichiers PDF volumineux.\nGénération automatisée d’un compte rendu de conformité basé sur un cahier des charges complexe.\nGestion complète de la mission : cadrage du besoin, définition de la roadmap et respect des délais",
                "Mission : Data Visualisation avec Power BI\nRéalisation d’un dashboard Power BI pour une exploitation agricole à partir de sa base de données.\nCréation de KPI facilitant le pilotage de l’activité et la prise de décision.",
            ],
        },
        {
            ...experiencesBase.safran,
            period: "2024",
            role: "Stagiaire Développeur logiciel (6 mois)",
            company: "Safran",
            summary:
                "Développement de deux applications",
            bullets: [
                "Application de rétro-planning :\nDestinée aux RRH du groupe pour automatiser un rétroplanning à destination des salariés expérimentés.\nDéveloppement front only en React/TypeScript avec Material UI.\nConteneurisation avec Docker.\nDéploiement en interne avec OpenShift.",
                "Application de podcasts :\nPWA développée en Python/FastAPI, React/TypeScript et SQL.",
            ],
        },
        {
            ...experiencesBase.mcdonalds,
            period: "2017 — 2020",
            role: "Chef d’équipe",
            company: "McDonald’s",
            summary:
                "Évolution d’équipier polyvalent à formateur, puis chef d’équipe (responsable open/close) et période de formation en manager",
            bullets: [
                "Formation et accompagnement des nouveaux équipiers avec une pédagogie adaptée aux profils et aux capacités de chacun.",
                "Coordination de l’équipe sur le terrain, notamment en période de rush, en maintenant un rythme élevé et structuré.",
                "Gestion des priorités, des stocks et du stress dans un environnement à forte pression opérationnelle, avec une communication claire et constante."
            ],
        },
        {
            ...experiencesBase.msc,
            period: "2016",
            role: "Technicien Qualité (CDD)",
            company: "MSC SCANNING",
            summary:
                "Implémentation du plan d’actions pour la certification ISO 9001:2015",
            bullets: [
                "Révision des procédures et réalisation d’audits pour chaque poste.",
                "Mise en place d'un suivi Excel des doubles sauvegardes des contrats.",
            ],
        },
    ],
    projects: [
        {
            ...projectsBase.ecoBuddy,
            name: "Eco-buddy (en développement)",
            description:
                "Projet perso\n\nApplication web full-stack pour gérer et analyser ses dépenses, abonnements et revenus.",
            details:
                "__**Règles métiers complexes**__ :\n* Revenus récurrents\n* Génération automatique des dépenses par les abonnements\n* Règles budgétaires par catégorie de dépense\n* Analyses mensuelles\n* Système d'authentification\n**__Histoire du projet__** :\nPensée au départ comme une simple application de gestion de dépenses et d'abonnements servant à **développer mes compétences**, j'ai rapidement eu l'envie d'en faire une vraie **application complète et utilisable**.\nPour faciliter l'utilisation de l'app, il a fallu mettre en place :\n* une **PWA** : pour un accès facile à l'application sans passer par les stores connus\n* une **connexion à la banque** : pour extraire automatiquement les relevés et éviter une saisie manuelle ennuyeuse.\n**__Hébergement et déploiement__** :\nHébergé au début sur **Vercel** pour le front et **Render** pour le back, j'ai rapidement fait l'acquisition d'un **raspberry pi** pour héberger l'ensemble de l'application localement et éviter les latences dûes à des hébergements externes gratuits.\nJ'ai dabord réalisé le déploiement via **DuckDNS**, avant la mise en place de **mon propre nom de domaine** et d'un déploiement entièrement maîtrisé.",
            image: projectsBase.ecoBuddy.image
                ? { ...projectsBase.ecoBuddy.image, alt: "Capture d'écran de l'application Eco-buddy (dashboard)" }
                : undefined,
        },
        {
            ...projectsBase.portfolio,
            name: "Portfolio",
            description:
                "Projet perso\n\nPortfolio présentant projets, expériences, liens vers les réseaux sociaux et CV consultable.",
            details:
                "__**Features supplémentaires**__ :\n* Gestion d’un thème dark / light\n* Gestion des langues FR / EN\n__**Hébergement et déploiement**__ :\nJ'ai hébergé mon portfolio sur un **raspberry pi** et mis en place mon propre nom de domaine afin d'y déployer ce portfolio ou d'autres applications / sites via divers sous-domaines.",
            image: projectsBase.portfolio.image
                ? { ...projectsBase.portfolio.image, alt: "Capture d'écran du portfolio (dark mode VS light mode)" }
                : undefined,
        },
        {
            ...projectsBase.powerBiDashboard,
            name: "Dashboard Power BI",
            description:
                "Mission pour un client (exploitation agricole)\n\nRéalisation d’un dashboard Power BI à partir de la base de données d'une exploitation agricole\nCréation de KPI facilitant le pilotage de l’activité et la prise de décision.",
        },
        {
            ...projectsBase.docAutomation,
            name: "Automatisation documentaire avec n8n",
            description:
                "Mission pour un client (Défense)\n\nConception d’un workflow automatisé sous n8n de contrôle de conformité documentaire.",
            details:
                "**__Étapes du workflow__** :\n* Upload du PDF à contrôler (plusieurs centaines de pages)\n* Vérification de la conformité du PDF selon 18 critères établis dans le cahier des charges\n* Génération d'un compte-rendu téléchargeable, listant les non-conformités et actions correctives\n**__Gestion du contrôle de conformité__** :\n* Utilisation d'utilitaires pour les critères simples à verifier (pdftotext, pdffonts, ...)\n* Utilisation de LLM pour les critères plus complexes à vérifier\n**__Exemples de critères simples vérifiés__** :\n* Police utilisée\n* Numérotation des pages\n* Vérification des fautes d'orthographe ou de conjugaison\n**__Exemples de critères complexes vérifiés__** :\n* Cohérence texte / illustration\n* Vérification de l'utilisation de certains pictogrammes conformes"
        },
        {
            ...projectsBase.podcastApp,
            name: "Application de podcasts",
            description:
                "Développée au cours de mon stage chez Safran\n\nApplication permettant aux collaborateurs de Safran de publier et écouter des podcasts audio",
            details:
                "**__Objectifs des podcasts__** :\n* Permettre aux collaborateurs de suivre les actualités du groupe\n* Écouter des interviews\n* Suivre des conseils de travail\n* Être à jour sur la veille technologique\n**__Technos utilisées__** :\n* Gestion de la BDD avec **DBeaver**.\n* Backend avec **FastAPI** (framework **Python**). Utilisation de l'ORM **SQLAlchemy** et de la bibliothèque **Pydantic**.\n* Frontend en **React Typescript** avec **Material UI**.\n* Authentification avec le **SSO** de l'entreprise.\n* Mise en place d'une **PWA** pour rendre l'application accessible sur smartphone.",
        },
        {
            ...projectsBase.retroPlanning,
            name: "Application de rétro-planning",
            description:
                "Développée au cours de mon stage chez Safran\n\nApplication permettant aux RRH de Safran de générer des rétro-planning pour les salariés expérimentés (simulation des différents calendriers possibles avant le départ à la retraite)",
            details:
                "**__Utilisation de l'application__** :\n* Le responsable RH rempli un formulaire avec les informations du salarié experimenté pour lequel il veut générer un rétro-planning.\n* Il choisi le(s) type(s) de rétro-planning qu'il souhaite générer\n* Une fois la simulation terminée, le RRH peut extraire le résumé PDF du rétro-planning, l'Excel du calendrier détaillé du rétro-planning ou enregistrer en CSV les informations préalablement renseignées pour refaire une simulation ultérieurement.\n**__Qu'est-ce qu'un rétro-planning ?__**\nDans ce cadre, un rétro-planning est un calendrier permettant de visualiser le rythme de travail d'un salarié experimenté avant son départ à la retraite. Il y a plusieurs options possibles :\n* Temps Partiel Aidé (TPA) classique : temps partiel avec majoration salariale\n* TPA + retraitre progressive : TPA classique + 12 mois de retraite progressive\n* TPA 100-0 : pas de réduction de temps de travail, mais différence salariale convertie en jours cumulables pour un départ anticipé à la retraite\n**__Technos utilisées__** :\n* Application front only, en **React Typescript** avec **Material UI**.\n* **Dockerisation** de l'application et déploiement en interne sur une URL personnalisée avec **Openshift**.\n**__Difficultés rencontrées__** :\n* Gestion des jours fériés et de fermeture de l'entreprise\n* Répondre aux exigences divergentes des clients (les RRH)\n* Création d'une frise chronologique esthétique et responsive\n* Gestion du travail partiel selon des cycles répétés des semaines contenant des jours travaillés différents\n* Garder une application simple et intuitive malgré l'ajout de nombreuses fonctionnalités au cours du développement",
        },
        {
            ...projectsBase.weatherApp,
            name: "Application de prévision météo",
            description:
                "Développée à l'ECE en binôme\n\nApplication en React Javascript. Utilisation d'une API de météo. Vérification de la compatibilité mobile avec Expo Go.",
        },
        {
            ...projectsBase.hangman,
            name: "Jeu du pendu",
            description:
                "Développée à l'UTBM en groupe\n\nApplication en VBA du jeu du pendu.\nSite web de présentation du projet codé en HTML et CSS.",
        },
    ],
};
