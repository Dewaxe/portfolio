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
                "Mission : Automatisation documentaire avec n8n\nConception d’un workflow automatisé intégrant des modèles d’IA (LLM)\nAnalyse et extraction d’informations de fichiers PDF volumineux.\nGénération d'un compte rendu mettant en évidence la conformité du document selon un cahier des charges complexe.",
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
                "Application  de rétro-planning :\nDestinée aux RRH du groupe pour automatiser un rétroplanning à destination des salariés expérimentés.\nDéveloppement front only en React/TypeScript avec Material UI.\nConteneurisation avec Docker.\nDéploiement en interne avec Openshift.",
                "Application de podcasts :\nPWA développée en Python/FastAPI, React/TypeScript et SQL.",
            ],
        },
        {
            ...experiencesBase.mcdonalds,
            period: "2017 — 2020",
            role: "Chef d’équipe",
            company: "McDonald’s",
            summary:
                "Évolution d’équipier polyvalent à formateur, puis chef d’équipe, responsable open et manager en formation",
            bullets: [
                "Formation des nouveaux équipiers en utilisant une approche personnalisée",
                "Responsable d’ouverture et de fermeture du restaurant",
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
                "Projet perso\n\nApplication web full-stack pour gérer et analyser ses dépenses, abonnements et revenus.\nInclut des règles métiers : revenus récurrents, génération automatique de dépenses par les abonnements, budgetisation par catégorie, analyses mensuelles, etc.\nAuthentification sécurisée.\nDéploiement auto-hébergé.",
            image: projectsBase.ecoBuddy.image
                ? { ...projectsBase.ecoBuddy.image, alt: "Capture d'écran de l'application Eco-buddy (dashboard)" }
                : undefined,
        },
        {
            ...projectsBase.portfolio,
            name: "Portfolio",
            description:
                "Projet perso\n\nPortfolio présentant projets, expériences, liens vers les réseaux sociaux et CV consultable.\nGestion d’un thème dark / light.\nDéploiement auto-hébergé.",
            image: projectsBase.portfolio.image
                ? { ...projectsBase.portfolio.image, alt: "Capture d'écran du portfolio (dark mode VS light mode)" }
                : undefined,
        },
        {
            ...projectsBase.powerBiDashboard,
            name: "Dashboard Power BI",
            description:
                "Projet pour un client (exploitation agricole)\n\nRéalisation d’un dashboard Power BI à partir de la base de données d'une exploitation agricole\nCréation de KPI facilitant le pilotage de l’activité et la prise de décision.",
        },
        {
            ...projectsBase.docAutomation,
            name: "Automatisation documentaire avec n8n",
            description:
                "Projet pour un client (Défense)\n\nConception d’un workflow automatisé sous n8n intégrant des modèles d’IA (LLM)\nAnalyse et extraction d’informations à partir de PDF volumineux\nContrôle automatisé de conformité à un cahier des charges (~20 critères : typographie, chapitrage, cohérence légende / illustration, etc.)\nGénération automatique d’un compte-rendu détaillé listant les non-conformités et actions correctives",
        },
        {
            ...projectsBase.podcastApp,
            name: "Application de podcasts",
            description:
                "Développée au cours de mon stage chez Safran\n\nBase de données gérée avec DBeaver. Backend avec FastAPI (framework Python). Utilisation de l'ORM SQLAlchemy et de la bibliothèque Pydantic. Frontend en React Typescript avec Material UI. Authentification avec le SSO de l'entreprise. Mise en place d'une PWA pour rendre l'applicationa accessible sur smartphone.",
        },
        {
            ...projectsBase.retroPlanning,
            name: "Application de rétro-planning",
            description:
                "Développée au cours de mon stage chez Safran\n\nFront only, en React Typescript avec Material UI. Extraction du résultat en PDF, Excel ou/et CSV. Injection des données manuellement ou à partir d'un CSV. Dockerisation de l'application et déploiement en interne avec Openshift.",
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
                "Développée à l'UTBM en groupe\n\nApplication en VBA du jeu du pendu. Site web de présentation du projet codé en HTML et CSS.",
        },
    ],
};
