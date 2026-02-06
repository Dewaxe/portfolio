export type Locale = "fr" | "en";

export type SectionId = "about" | "experience" | "projects";

export const defaultLocale: Locale = "fr";

export type Copy = {
    meta: {
        title: string;
        description: string;
    };
    nav: {
        about: string;
        experience: string;
        projects: string;
    };
    sections: {
        about: string;
        experience: string;
        projects: string;
    };
    sidebar: {
        availability: string;
        cvLabel: string;
        photoAlt: string;
    };
    home: {
        about: string[];
        viewAllProjects: string;
        projectImageFallback: string;
    };
    projectsPage: {
        heading: string;
        table: {
            year: string;
            project: string;
            description: string;
            tech: string;
            links: string;
        };
    };
    themeToggleLabel: string;
    languageToggleLabel: string;
    languageShortLabels: {
        fr: string;
        en: string;
    };
};

export const copy: Record<Locale, Copy> = {
    fr: {
        meta: {
            title: "William Dempuré",
            description:
                "William Dempuré, développeur fullstack spécialisé en React, TypeScript et Python. Découvrez mon portfolio, mes projets et mon parcours.",
        },
        nav: {
            about: "À propos",
            experience: "Expérience",
            projects: "Projets",
        },
        sections: {
            about: "À PROPOS",
            experience: "EXPÉRIENCE",
            projects: "PROJETS",
        },
        sidebar: {
            availability: "En recherche d’un CDI.",
            cvLabel: "Voir le CV",
            photoAlt: "Photo de profil - {name}",
        },
        home: {
            about: [
                "Je suis développeur fullstack, et j’aime autant travailler sur l’interface que sur le backend : construire une feature, la brancher à une API, la stocker proprement, puis la déployer.",
                "J’ai eu l’occasion de bosser sur des sujets très concrets : outils internes, automatisation, dashboards, et aussi des projets perso auto-hébergés (stack React/TypeScript principalement).",
                "Je cherche aujourd’hui un poste en CDI où je peux continuer à progresser dans une équipe, livrer des fonctionnalités utiles, et être impliqué dans le produit au quotidien.",
            ],
            viewAllProjects: "Voir tous les projets",
            projectImageFallback: "Capture d'écran du projet {name}",
        },
        projectsPage: {
            heading: "Tous les projets",
            table: {
                year: "ANNÉE",
                project: "PROJET",
                description: "DESCRIPTION",
                tech: "TECH",
                links: "LIENS",
            },
        },
        themeToggleLabel: "Basculer le thème",
        languageToggleLabel: "Changer de langue",
        languageShortLabels: {
            fr: "FR",
            en: "EN",
        },
    },
    en: {
        meta: {
            title: "William Dempuré",
            description:
                "William Dempuré, fullstack developer specialized in React, TypeScript, and Python. Explore my portfolio, projects, and experience.",
        },
        nav: {
            about: "About",
            experience: "Experience",
            projects: "Projects",
        },
        sections: {
            about: "ABOUT",
            experience: "EXPERIENCE",
            projects: "PROJECTS",
        },
        sidebar: {
            availability: "Open to full-time opportunities.",
            cvLabel: "View resume",
            photoAlt: "Profile photo - {name}",
        },
        home: {
            about: [
                "I am a fullstack developer who enjoys both the interface and the backend: building a feature, connecting it to an API, storing data cleanly, then deploying it.",
                "I have worked on very practical topics: internal tools, automation, dashboards, and also self-hosted personal projects (mostly React/TypeScript).",
                "I am currently looking for a full-time role where I can keep growing within a team, ship useful features, and be involved in the product day to day.",
            ],
            viewAllProjects: "View all projects",
            projectImageFallback: "Screenshot of the {name} project",
        },
        projectsPage: {
            heading: "All projects",
            table: {
                year: "YEAR",
                project: "PROJECT",
                description: "DESCRIPTION",
                tech: "TECH",
                links: "LINKS",
            },
        },
        themeToggleLabel: "Toggle theme",
        languageToggleLabel: "Change language",
        languageShortLabels: {
            fr: "FR",
            en: "EN",
        },
    },
};

export function getLocaleFromPathname(pathname: string): Locale {
    return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
}

export function stripLocale(pathname: string): string {
    if (pathname === "/en") return "/";
    if (pathname.startsWith("/en/")) return pathname.slice(3);
    return pathname;
}

export function withLocalePath(path: string, locale: Locale): string {
    const normalized = path.startsWith("/") ? path : `/${path}`;
    if (locale === "en") return normalized === "/" ? "/en" : `/en${normalized}`;
    return normalized;
}

export function toLocalePathname(pathname: string, locale: Locale): string {
    return withLocalePath(stripLocale(pathname), locale);
}
