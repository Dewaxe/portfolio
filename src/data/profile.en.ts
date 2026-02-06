import type { Experience, Project, Social } from "./profile";

export const profile = {
    initials: "WD",
    name: "William Dempuré",
    title1: "Fullstack Developer",
    title2: "React/TypeScript | Python",
    blurb:
        "I build full-stack web applications, from the front end to the API, all the way to deployment.",
    email: "williamdempure@gmail.com",
};

export const socials: Social[] = [
    { label: "GitHub", href: "https://github.com/Dewaxe", iconKey: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/william-dempure/", iconKey: "linkedin" },
    { label: "Email", href: "mailto:williamdempure@gmail.com", iconKey: "email" },
];

export const experiences: Experience[] = [
    {
        period: "2025 — Present",
        role: "Fullstack Developer",
        company: "Self-employed",
        summary: "Automation and data visualization projects",
        bullets: [
            "Project: Document automation with n8n\nDesigned an automated workflow integrating AI models (LLMs)\nAnalysis and extraction of information from large PDF files.\nGenerated a report highlighting document compliance with a complex specification.",
            "Project: Data visualization with Power BI\nBuilt a Power BI dashboard for a farm using its database.\nCreated KPIs to support activity monitoring and decision-making.",
        ],
        tech: ["n8n", "AI", "LLM", "Power BI", "DAX"],
    },
    {
        period: "2024",
        role: "Software Developer Intern (6 months)",
        company: "Safran",
        companyUrl: "https://www.safran-group.com/fr",
        summary: "Development of two applications",
        bullets: [
            "Retro-planning application:\nFor the group's HR teams to automate a retro-planning process for experienced employees.\nFront-end only development in React/TypeScript with Material UI.\nContainerization with Docker.\nInternal deployment with OpenShift.",
            "Podcast application:\nPWA built with Python/FastAPI, React/TypeScript and SQL.",
        ],
        tech: ["React", "TypeScript", "Material UI", "Python", "FastAPI", "SQL", "Docker", "OpenShift", "SQLAlchemy"],
    },
    {
        period: "2017 — 2020",
        role: "Team Leader",
        company: "McDonald's",
        companyUrl: "https://www.mcdonalds.fr/",
        summary:
            "Progression from crew member to trainer, then team leader, opening manager and manager-in-training",
        bullets: [
            "Trained new crew members using a personalized approach",
            "Responsible for opening and closing the restaurant",
        ],
        tech: [],
    },
    {
        period: "2016",
        role: "Quality Technician (Fixed-term)",
        company: "MSC SCANNING",
        companyUrl: "https://www.mscscanning-technique.fr/",
        summary:
            "Implemented the action plan for ISO 9001:2015 certification",
        bullets: [
            "Reviewed procedures and conducted audits for each position.",
            "Set up an Excel tracking system for dual backups of contracts.",
        ],
        tech: [],
    },
];

export const projects: Project[] = [
    {
        name: "Eco-buddy (in development)",
        description:
            "Personal project\n\nFull-stack web app to manage and analyze expenses, subscriptions, and income.\nIncludes business rules: recurring income, automatic expense generation from subscriptions, category budgeting, monthly analyses, etc.\nSecure authentication.\nSelf-hosted deployment.",
        tech: ["React", "TypeScript", "Javascript", "CSS", "Node.js", "Express", "API REST", "SQLite", "Jest", "Supertest", "Linux", "Raspberry Pi"],
        links: [{ label: "App", href: "http://eco-buddy.dempure.com" }, { label: "GitHub", href: "https://github.com/Dewaxe/gestion-depenses" }],
        featured: true,
        image: {
            src: "screenshots/screenshot-eco-buddy.png",
            alt: "Screenshot of the Eco-buddy app (dashboard)",
        },
        year: "2026",
    },
    {
        name: "Portfolio",
        description:
            "Personal project\n\nPortfolio showcasing projects, experience, social links, and a downloadable resume.\nDark / light theme management.\nSelf-hosted deployment.",
        tech: ["React", "TypeScript", "Javascript", "Vite", "Tailwind CSS", "Nginx", "Linux", "Raspberry Pi", "Figma"],
        links: [{ label: "GitHub", href: "https://github.com/Dewaxe/portfolio" }],
        featured: true,
        image: {
            src: "screenshots/screenshot-portfolio-dark-light.png",
            alt: "Screenshot of the portfolio (dark mode vs light mode)",
        },
        year: "2025",
    },
    {
        name: "Power BI Dashboard",
        description:
            "Client project (farm)\n\nBuilt a Power BI dashboard from a farm's database.\nCreated KPIs to support activity monitoring and decision-making.",
        tech: ["Power BI", "DAX"],
        links: [],
        featured: false,
        year: "2025",
    },
    {
        name: "Document automation with n8n",
        description:
            "Client project (Defense)\n\nDesigned an automated workflow in n8n integrating AI models (LLMs)\nAnalysis and extraction of information from large PDFs\nAutomated compliance checks against a specification (~20 criteria: typography, structure, legend/illustration consistency, etc.)\nAutomatic generation of a detailed report listing non-compliances and corrective actions",
        tech: ["n8n", "AI", "LLM"],
        links: [],
        featured: false,
        year: "2025",
    },
    {
        name: "Podcast application",
        description:
            "Developed during my internship at Safran\n\nDatabase managed with DBeaver. Backend with FastAPI (Python framework). Used the SQLAlchemy ORM and Pydantic library. Frontend in React/TypeScript with Material UI. Authentication with the company SSO. Implemented a PWA to make the app accessible on mobile.",
        tech: ["React", "TypeScript", "Material UI", "FastAPI", "Python", "SQLAlchemy", "Pydantic", "DBeaver", "SSO"],
        links: [],
        featured: false,
        year: "2025",
    },
    {
        name: "Retro-planning application",
        description:
            "Developed during my internship at Safran\n\nFront-end only in React/TypeScript with Material UI. Export to PDF, Excel or CSV. Data entry manually or from a CSV. Dockerized the app and deployed internally with OpenShift.",
        tech: ["React", "TypeScript", "Material UI", "Figma", "Docker"],
        links: [],
        featured: false,
        year: "2025",
    },
    {
        name: "Weather forecast application",
        description:
            "Built at ECE in a pair\n\nReact JavaScript app. Uses a weather API. Mobile compatibility tested with Expo Go.",
        tech: ["React", "JavaScript", "API", "Expo Go"],
        links: [{ label: "GitHub", href: "https://github.com/999-andreas/Projet-Meteo-React" }],
        featured: false,
        year: "2024",
    },
    {
        name: "Hangman game",
        description:
            "Built at UTBM in a group\n\nVBA hangman game. Project presentation website coded in HTML and CSS.",
        tech: ["VBA", "HTML", "CSS"],
        links: [],
        featured: false,
        year: "2013",
    },
];
