import type { Content } from "./types";
import { experiencesBase, profileBase, projectsBase, socials } from "./shared";

export const content: Content = {
    profile: {
        ...profileBase,
        name: "William Dempuré",
        title1: "Fullstack Developer",
        title2: "React/TypeScript | Python",
        blurb:
            "I build full-stack web applications, from the front end to the API, all the way to deployment.",
    },
    socials,
    about: [
        "I am a fullstack developer who enjoys both the interface and the backend: building a feature, connecting it to an API, storing data cleanly, then deploying it.",
        "I have worked on very practical topics: internal tools, automation, dashboards, and also self-hosted personal projects (mostly React/TypeScript).",
        "I am currently looking for a full-time role where I can keep growing within a team, ship useful features, and be involved in the product day to day.",
    ],
    experiences: [
        {
            ...experiencesBase.freelance,
            period: "2025 — Present",
            role: "Fullstack Developer",
            company: "Self-employed",
            summary: "Automation and data visualization projects",
            bullets: [
                "Project: Document automation with n8n\nDesigned an automated workflow integrating AI models (LLMs)\nAnalysis and extraction of information from large PDF files.\nGenerated a report highlighting document compliance with a complex specification.",
                "Project: Data visualization with Power BI\nBuilt a Power BI dashboard for a farm using its database.\nCreated KPIs to support activity monitoring and decision-making.",
            ],
        },
        {
            ...experiencesBase.safran,
            period: "2024",
            role: "Software Developer Intern (6 months)",
            company: "Safran",
            summary: "Development of two applications",
            bullets: [
                "Retro-planning application:\nFor the group's HR teams to automate a retro-planning process for experienced employees.\nFront-end only development in React/TypeScript with Material UI.\nContainerization with Docker.\nInternal deployment with OpenShift.",
                "Podcast application:\nPWA built with Python/FastAPI, React/TypeScript and SQL.",
            ],
        },
        {
            ...experiencesBase.mcdonalds,
            period: "2017 — 2020",
            role: "Team Leader",
            company: "McDonald's",
            summary:
                "Progression from crew member to trainer, then team leader, opening manager and manager-in-training",
            bullets: [
                "Trained new crew members using a personalized approach",
                "Responsible for opening and closing the restaurant",
            ],
        },
        {
            ...experiencesBase.msc,
            period: "2016",
            role: "Quality Technician (Fixed-term)",
            company: "MSC SCANNING",
            summary:
                "Implemented the action plan for ISO 9001:2015 certification",
            bullets: [
                "Reviewed procedures and conducted audits for each position.",
                "Set up an Excel tracking system for dual backups of contracts.",
            ],
        },
    ],
    projects: [
        {
            ...projectsBase.ecoBuddy,
            name: "Eco-buddy (in development)",
            description:
                "Personal project\n\nFull-stack web app to manage and analyze expenses, subscriptions, and income.\nIncludes business rules: recurring income, automatic expense generation from subscriptions, category budgeting, monthly analyses, etc.\nSecure authentication.\nSelf-hosted deployment.",
            image: projectsBase.ecoBuddy.image
                ? { ...projectsBase.ecoBuddy.image, alt: "Screenshot of the Eco-buddy app (dashboard)" }
                : undefined,
        },
        {
            ...projectsBase.portfolio,
            name: "Portfolio",
            description:
                "Personal project\n\nPortfolio showcasing projects, experience, social links, and a downloadable resume.\nDark / light theme management.\nSelf-hosted deployment.",
            image: projectsBase.portfolio.image
                ? { ...projectsBase.portfolio.image, alt: "Screenshot of the portfolio (dark mode vs light mode)" }
                : undefined,
        },
        {
            ...projectsBase.powerBiDashboard,
            name: "Power BI Dashboard",
            description:
                "Client project (farm)\n\nBuilt a Power BI dashboard from a farm's database.\nCreated KPIs to support activity monitoring and decision-making.",
        },
        {
            ...projectsBase.docAutomation,
            name: "Document automation with n8n",
            description:
                "Client project (Defense)\n\nDesigned an automated workflow in n8n integrating AI models (LLMs)\nAnalysis and extraction of information from large PDFs\nAutomated compliance checks against a specification (~20 criteria: typography, structure, legend/illustration consistency, etc.)\nAutomatic generation of a detailed report listing non-compliances and corrective actions",
        },
        {
            ...projectsBase.podcastApp,
            name: "Podcast application",
            description:
                "Developed during my internship at Safran\n\nDatabase managed with DBeaver. Backend with FastAPI (Python framework). Used the SQLAlchemy ORM and Pydantic library. Frontend in React/TypeScript with Material UI. Authentication with the company SSO. Implemented a PWA to make the app accessible on mobile.",
        },
        {
            ...projectsBase.retroPlanning,
            name: "Retro-planning application",
            description:
                "Developed during my internship at Safran\n\nFront-end only in React/TypeScript with Material UI. Export to PDF, Excel or CSV. Data entry manually or from a CSV. Dockerized the app and deployed internally with OpenShift.",
        },
        {
            ...projectsBase.weatherApp,
            name: "Weather forecast application",
            description:
                "Built at ECE in a pair\n\nReact JavaScript app. Uses a weather API. Mobile compatibility tested with Expo Go.",
        },
        {
            ...projectsBase.hangman,
            name: "Hangman game",
            description:
                "Built at UTBM in a group\n\nVBA hangman game. Project presentation website coded in HTML and CSS.",
        },
    ],
};
