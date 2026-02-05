export type Experience = {
    period: string;
    role: string;
    company: string;
    companyUrl?: string;
    summary: string;
    bullets: string[];
    tech: string[];
};

export type Project = {
    name: string;
    description: string;
    tech: string[];
    links: { label: string; href: string }[];
    featured?: boolean;
    image?: {
        src: string;
        alt: string;
    };
    year: string;
};

export type SocialIconKey = "github" | "linkedin" | "email";

export type Social = {
    label: string;
    href: string;
    iconKey: SocialIconKey;
};

export const profile = {
    initials: "WD",
    name: "William Dempuré",
    title1: "Développeur Fullstack ",
    title2: "React/TypeScript | Python",
    blurb:
        "Je développe des applications web full-stack, du front à l’API, jusqu’au déploiement.",
    email: "williamdempure@gmail.com",
};

export const socials: Social[] = [
    { label: "GitHub", href: "https://github.com/Dewaxe", iconKey: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/william-dempure/", iconKey: "linkedin" },
    { label: "Email", href: "mailto:williamdempure@gmail.com", iconKey: "email" },
];

export const experiences: Experience[] = [
    {
        period: "2025 — Aujourd’hui",
        role: "Développeur Fullstack",
        company: "Auto-entrepreneur",
        summary:
            "Missions orientées automatisation et visualisation de data",
        bullets: [
            "Mission : Automatisation documentaire avec n8n\nConception d’un workflow automatisé intégrant des modèles d’IA (LLM)\nAnalyse et extraction d’informations de fichiers PDF volumineux.\nGénération d'un compte rendu mettant en évidence la conformité du document selon un cahier des charges complexe.",
            "Mission : Data Visualisation avec Power BI\nRéalisation d’un dashboard Power BI pour une exploitation agricole à partir de sa base de données.\nCréation de KPI facilitant le pilotage de l’activité et la prise de décision.",
        ],
        tech: ["n8n", "IA", "LLM","Power BI", "DAX"],
    },
    {
        period: "2024",
        role: "Stagiaire Développeur logiciel (6 mois)",
        company: "Safran",
        companyUrl: "https://www.safran-group.com/fr",
        summary:
            "Développement de deux applications",
        bullets: [
            "Application  de rétro-planning :\nDestinée aux RRH du groupe pour automatiser un rétroplanning à destination des salariés expérimentés.\nDéveloppement front only en React/TypeScript avec Material UI.\nConteneurisation avec Docker.\nDéploiement en interne avec Openshift.",
            "Application de podcasts :\nPWA développée en Python/FastAPI, React/TypeScript et SQL.",
        ],
        tech: ["React", "TypeScript", "Material UI", "Python", "FastAPI", "SQL", "Docker", "OpenShift", "SQLAlchemy"],
    },
    {
        period: "2017 — 2020",
        role: "Chef d’équipe",
        company: "McDonald’s",
        companyUrl: "https://www.mcdonalds.fr/",
        summary:
            "Évolution d’équipier polyvalent à formateur, puis chef d’équipe, responsable open et manager en formation",
        bullets: [
            "Formation des nouveaux équipiers en utilisant une approche personnalisée",
            "Responsable d’ouverture et de fermeture du restaurant",
        ],
        tech: [],
    },
    {
        period: "2016",
        role: "Technicien Qualité (CDD)",
        company: "MSC SCANNING",
        companyUrl: "https://www.mscscanning-technique.fr/",    
        summary:
            "Implémentation du plan d’actions pour la certification ISO 9001:2015",
        bullets: [
            "Révision des procédures et réalisation d’audits pour chaque poste.",
            "Mise en place d'un suivi Excel des doubles sauvegardes des contrats.",
        ],
        tech: [],
    },
];

export const projects: Project[] = [
    {
        name: "Eco-buddy (en développement)",
        description:
            "Projet perso\n\nApplication web full-stack pour gérer et analyser ses dépenses, abonnements et revenus.\nInclut des règles métiers : revenus récurrents, génération automatique de dépenses par les abonnements, budgetisation par catégorie, analyses mensuelles, etc.\nAuthentification sécurisée.\nDéploiement auto-hébergé.",
        tech: ["React", "TypeScript", "Javascript", "CSS", "Node.js", "Express", "API REST", "SQLite", "Jest", "Supertest", "Linux", "Raspberry Pi"],
        links: [{ label: "App", href: "http://eco-buddy.dempure.com" }, { label: "GitHub", href: "https://github.com/Dewaxe/gestion-depenses" }],
        featured: true,
        image: {
            src: "screenshots/screenshot-eco-buddy.png",
            alt: "Capture d'écran de l'application Eco-buddy (dashboard)"
        },
        year: "2026",
    },
    {
        name: "Portfolio",
        description:
            "Projet perso\n\nPortfolio présentant projets, expériences, liens vers les réseaux sociaux et CV consultable.\nGestion d’un thème dark / light.\nDéploiement auto-hébergé.",
        tech: ["React", "TypeScript", "Javascript", "Vite", "Tailwind CSS", "Nginx", "Linux", "Raspberry Pi", "Figma"],
        links: [{ label: "GitHub", href: "https://github.com/Dewaxe/portfolio" }],
        featured: true,
        image: {
            src: "screenshots/screenshot-portfolio-dark-light.png",
            alt: "Capture d'écran du portfolio (dark mode VS light mode)"
        },
        year: "2025",
    },
    {
        name: "Dashboard Power BI",
        description:
            "Projet pour un client (exploitation agricole)\n\nRéalisation d’un dashboard Power BI à partir de la base de données d'une exploitation agricole\nCréation de KPI facilitant le pilotage de l’activité et la prise de décision.",
        tech: ["Power BI", "DAX"],
        links: [],
        featured: false,
        year: "2025",
    },
    {
        name: "Automatisation documentaire avec n8n",
        description:
            "Projet pour un client (Défense)\n\nConception d’un workflow automatisé sous n8n intégrant des modèles d’IA (LLM)\nAnalyse et extraction d’informations à partir de PDF volumineux\nContrôle automatisé de conformité à un cahier des charges (~20 critères : typographie, chapitrage, cohérence légende / illustration, etc.)\nGénération automatique d’un compte-rendu détaillé listant les non-conformités et actions correctives",
        tech: ["n8n", "IA", "LLM"],
        links: [],
        featured: false,
        year: "2025",
    },
    {
        name: "Application de podcasts",
        description:
            "Développée au cours de mon stage chez Safran\n\nBase de données gérée avec DBeaver. Backend avec FastAPI (framework Python). Utilisation de l'ORM SQLAlchemy et de la bibliothèque Pydantic. Frontend en React Typescript avec Material UI. Authentification avec le SSO de l'entreprise. Mise en place d'une PWA pour rendre l'applicationa accessible sur smartphone.",
        tech: ["React", "TypeScript", "Material UI", "FastAPI", "Python", "SQLAlchemy", "Pydantic", "DBeaver", "SSO"],
        links: [],
        featured: false,
        year: "2025",
    },
    {
        name: "Application de rétro-planning",
        description:
            "Développée au cours de mon stage chez Safran\n\nFront only, en React Typescript avec Material UI. Extraction du résultat en PDF, Excel ou/et CSV. Injection des données manuellement ou à partir d'un CSV. Dockerisation de l'application et déploiement en interne avec Openshift.",
        tech: ["React", "TypeScript", "Material UI", "Figma", "Docker"],
        links: [],
        featured: false,
        year: "2025",
    },
    {
        name: "Application de prévision météo",
        description:
            "Développée à l'ECE en binôme\n\nApplication en React Javascript. Utilisation d'une API de météo. Vérification de la compatibilité mobile avec Expo Go.",
        tech: ["React", "JavaScript", "API", "Expo Go"],
        links: [{ label: "GitHub", href: "https://github.com/999-andreas/Projet-Meteo-React" }],
        featured: false,
        year: "2024",
    },
    {
        name: "Jeu du pendu",
        description:
            "Développée à l'UTBM en groupe\n\nApplication en VBA du jeu du pendu. Site web de présentation du projet codé en HTML et CSS.",
        tech: ["VBA", "HTML", "CSS"],
        links: [],
        featured: false,
        year: "2013",
    }
];
