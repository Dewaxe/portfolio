import type { ExperienceBase, ProjectBase, Social } from "./types";

export type ExperienceId = "freelance" | "safran" | "mcdonalds" | "msc";
export type ProjectId =
    | "ecoBuddy"
    | "portfolio"
    | "powerBiDashboard"
    | "docAutomation"
    | "podcastApp"
    | "retroPlanning"
    | "weatherApp"
    | "hangman";

export const profileBase = {
    initials: "WD",
    email: "williamdempure@gmail.com",
};

export const socials: Social[] = [
    { label: "GitHub", href: "https://github.com/Dewaxe", iconKey: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/william-dempure/", iconKey: "linkedin" },
    { label: "Email", href: "mailto:williamdempure@gmail.com", iconKey: "email" },
];

export const experiencesBase: Record<ExperienceId, ExperienceBase> = {
    freelance: {
        tech: ["n8n", "IA", "LLM", "Power BI", "DAX"],
    },
    safran: {
        companyUrl: "https://www.safran-group.com/fr",
        tech: ["React", "TypeScript", "Material UI", "Python", "FastAPI", "SQL", "Docker", "OpenShift", "SQLAlchemy"],
    },
    mcdonalds: {
        companyUrl: "https://www.mcdonalds-recrute.fr/nos-metiers/etre-manager",
        tech: [],
    },
    msc: {
        companyUrl: "https://www.mscscanning-technique.fr/",
        tech: [],
    },
};

export const projectsBase: Record<ProjectId, ProjectBase> = {
    ecoBuddy: {
        tech: ["React", "TypeScript", "Javascript", "CSS", "Node.js", "Express", "API REST", "SQLite", "Jest", "Supertest", "Linux", "Raspberry Pi"],
        links: [
            { label: "App", href: "http://eco-buddy.dempure.com" },
            { label: "GitHub", href: "https://github.com/Dewaxe/gestion-depenses" },
        ],
        featured: true,
        image: {
            src: "screenshots/screenshot-eco-buddy.png",
            alt: "Screenshot of the Eco-buddy app",
        },
        year: "2026",
    },
    portfolio: {
        tech: ["React", "TypeScript", "Javascript", "Vite", "Tailwind CSS", "Nginx", "Linux", "Raspberry Pi"],
        links: [{ label: "GitHub", href: "https://github.com/Dewaxe/portfolio" }],
        featured: true,
        image: {
            src: "screenshots/screenshot-portfolio-dark-light.png",
            alt: "Screenshot of the portfolio",
        },
        year: "2025",
    },
    powerBiDashboard: {
        tech: ["Power BI", "DAX"],
        links: [],
        featured: false,
        year: "2025",
    },
    docAutomation: {
        tech: ["n8n", "IA", "LLM"],
        links: [],
        featured: false,
        year: "2025",
    },
    podcastApp: {
        tech: ["React", "TypeScript", "Material UI", "FastAPI", "Python", "SQLAlchemy", "Pydantic", "DBeaver", "SSO"],
        links: [],
        featured: false,
        year: "2025",
    },
    retroPlanning: {
        tech: ["React", "TypeScript", "Material UI", "Figma", "Docker"],
        links: [],
        featured: true,
        image: {
            src: "screenshots/screenshot-retroplanning.png",
            alt: "Screenshot of the retroplanning",
        },
        year: "2025",
    },
    weatherApp: {
        tech: ["React", "JavaScript", "API", "Expo Go"],
        links: [{ label: "GitHub", href: "https://github.com/999-andreas/Projet-Meteo-React" }],
        featured: false,
        year: "2024",
    },
    hangman: {
        tech: ["VBA", "HTML", "CSS"],
        links: [],
        featured: false,
        year: "2013",
    },
};
