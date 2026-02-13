export type Locale = "fr" | "en";

export const SECTION_IDS = ["about", "experience", "projects"] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export const defaultLocale: Locale = "fr";

export type Copy = {
    meta: {
        title: string;
        description: string;
    };
    nav: Record<SectionId, string>;
    sections: Record<SectionId, string>;
    sidebar: {
        availability: string;
        cvLabel: string;
        photoAlt: string;
    };
    home: {
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
        seeMore: string;
        seeLess: string;
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
            seeMore: "Voir plus",
            seeLess: "Voir moins",
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
            seeMore: "See more",
            seeLess: "See less",
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
