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
            "Missions orientées automatisation et data : extraction/contrôle documentaire et visualisation d’indicateurs pour faciliter la prise de décision.",
        bullets: [
            "Automatisation avec n8n pour l’extraction d’informations depuis des fichiers PDF.",
            "Analyse de conformité et contrôle documentaire selon un cahier des charges.",
            "Réalisation d’un dashboard Power BI pour une exploitation agricole (KPIs & visualisations).",
        ],
        tech: ["n8n", "Power BI", "Data visualisation"],
    },
    {
        period: "2024",
        role: "Stagiaire Développeur logiciel (6 mois)",
        company: "Safran",
        companyUrl: "https://www.safran-group.com/fr",
        summary:
            "Développement et livraison de fonctionnalités sur des applications web (et web/mobile), avec une stack React/TypeScript et Python/FastAPI, et un focus sur le déploiement.",
        bullets: [
            "Développement frontend en React/TypeScript avec Material UI pour une application destinée aux RRH du groupe.",
            "Conteneurisation Docker et déploiement sur OpenShift.",
            "Développement d’une application de podcasts (web & mobile) en Python/FastAPI, React/TypeScript et SQL.",
        ],
        tech: ["React", "TypeScript", "Material UI", "Python", "FastAPI", "SQL", "Docker", "OpenShift", "SQLAlchemy"],
    },
    {
        period: "2017 — 2020",
        role: "Chef d’équipe",
        company: "McDonald’s",
        companyUrl: "https://www.mcdonalds.fr/",
        summary:
            "Management opérationnel et coordination d’équipe en environnement exigeant.",
        bullets: [
            "Organisation des opérations quotidiennes et coordination d’équipe.",
            "Gestion des priorités et maintien de la qualité de service sous pression.",
        ],
        tech: [],
    },
    {
        period: "2016",
        role: "Technicien Qualité (CDD)",
        company: "MSC SCANNING",
        companyUrl: "https://www.mscscanning-technique.fr/",    
        summary:
            "Contrôle qualité et respect de procédures pour garantir la conformité.",
        bullets: [
            "Contrôle et vérification de conformité selon procédures établies.",
            "Rigueur documentaire et suivi qualité.",
        ],
        tech: [],
    },
];

export const projects: Project[] = [
    {
        name: "Eco-buddy — Application de gestion de dépenses",
        description:
            "Application web full-stack pour gérer dépenses, abonnements et analyses. Inclut des règles métiers (revenus récurrents, génération automatique de dépenses, budgets par catégorie, analyses mensuelles) et un déploiement auto-hébergé.",
        tech: ["React", "TypeScript", "CSS modulaire", "Node.js", "API REST", "SQLite", "Linux", "Raspberry Pi"],
        links: [{ label: "App", href: "http://eco-buddy.dempure.com" }, { label: "GitHub", href: "https://github.com/Dewaxe/gestion-depenses" }],
        featured: true,
        image: {
            src: "screenshots/screenshot-eco-buddy.png",
            alt: "Capture d'écran de l'application Eco-buddy (dashboard)"
        },
    },
    {
        name: "Portfolio personnel",
        description:
            "Portfolio présentant projets et compétences, avec gestion d’un thème dark/light et déploiement en auto-hébergement.",
        tech: ["React", "TypeScript", "Dark/Light theme", "Linux", "Raspberry Pi"],
        links: [{ label: "GitHub", href: "https://github.com/Dewaxe/portfolio" }],
        featured: true,
        image: {
            src: "screenshots/screenshot-portfolio-dark-light.png",
            alt: "Capture d'écran du portfolio (dark mode VS light mode)"
        },
    },
];
