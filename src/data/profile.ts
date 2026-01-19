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
};

export type SocialIconKey = "github" | "linkedin" | "email";

export type Social = {
    label: string;
    href: string;
    iconKey: SocialIconKey;
};

export const profile = {
    initials: "AB",
    name: "Ton Prénom Nom",
    title: "Développeur Fullstack",
    blurb:
        "Je construis des expériences web soignées, avec des APIs robustes, une base propre, et une attention aux détails produit.",
    email: "ton.email@example.com",
};

export const socials: Social[] = [
    { label: "GitHub", href: "#", iconKey: "github" },
    { label: "LinkedIn", href: "#", iconKey: "linkedin" },
    { label: "Email", href: "mailto:ton.email@example.com", iconKey: "email" },
];

export const experiences: Experience[] = [
    {
        period: "2025 — Aujourd’hui",
        role: "Développeur Fullstack",
        company: "Ton entreprise / Freelance",
        companyUrl: "#",
        summary: "Construction d’apps web de bout en bout : UI, API, DB, auth, déploiement.",
        bullets: [
            "Conception de fonctionnalités produit de A à Z avec une approche pragmatique.",
            "Mise en place d’API, validations, gestion d’erreurs, logs.",
            "Amélioration de la maintenabilité (refactor, composants réutilisables).",
        ],
        tech: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker"],
    },
    {
        period: "2023 — 2025",
        role: "Développeur Web",
        company: "Projet / Association / Études",
        companyUrl: "#",
        summary: "Projets web variés avec focus sur l’UX, la clarté du code et la livraison.",
        bullets: [
            "Intégration responsive, accessibilité, et composants UI réutilisables.",
            "Connexion à des APIs, gestion d’état, formulaires robustes.",
        ],
        tech: ["React", "Tailwind", "REST", "Git"],
    },
];

export const projects: Project[] = [
    {
        name: "App Fullstack (Auth + Dashboard)",
        description:
            "Dashboard avec authentification, rôles, CRUD, et données en base. Pensé comme un projet “prod-ready”.",
        tech: ["React", "TypeScript", "Express", "PostgreSQL", "Prisma"],
        links: [
            { label: "Démo", href: "#" },
            { label: "Code", href: "#" },
        ],
        featured: true,
    },
    {
        name: "Mini SaaS (CRUD + Billing)",
        description:
            "Base SaaS : onboarding, validations, structure prête pour paiement et emails.",
        tech: ["React", "Node.js", "Zod", "PostgreSQL"],
        links: [
            { label: "Démo", href: "#" },
            { label: "Code", href: "#" },
        ],
        featured: true,
    },
    {
        name: "Outil Dev (CLI / Script)",
        description:
            "Petit outil qui automatise une tâche (formatage, génération, analyse… selon tes usages).",
        tech: ["Node.js", "TypeScript"],
        links: [{ label: "Code", href: "#" }],
    },
    {
        name: "UI Kit / Design System Lite",
        description:
            "Composants réutilisables + conventions (tokens, variantes, accessibilité).",
        tech: ["React", "Tailwind"],
        links: [{ label: "Code", href: "#" }],
    },
];
