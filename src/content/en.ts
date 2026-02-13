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
        "I am a fullstack developer, and I enjoy working on both the interface and the backend: building a feature, connecting it to an API, storing it cleanly, then deploying it.",
        "I have worked on very practical topics: internal tools, automation, dashboards, and also self-hosted personal projects (mainly React/TypeScript).",
        "I am currently looking for a full-time role where I can keep growing within a team, deliver useful features, and be involved in the product day to day.",
    ],
    experiences: [
        {
            ...experiencesBase.freelance,
            period: "2025 - Present",
            role: "Fullstack Developer",
            company: "Self-employed",
            summary: "Automation and data visualization missions",
            bullets: [
                "Project: Document automation with n8n\nDesigned an automated workflow integrating AI models (LLMs)\nAnalysis and extraction of information from large PDF files.\Generated a report highlithing document compliance with a complex specification.\nEnd-to-end ownership of the mission: scoping the need, defining the roadmap, and meeting deadlines",
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
            period: "2017 - 2020",
            role: "Team Leader",
            company: "McDonald's",
            summary:
                "Progression from crew member to trainer, then team leader (opening/closing lead) and manager-in-training period",
            bullets: [
                "Trained and supported new crew members with a teaching approach adapted to each person's profile and abilities.",
                "Coordinated the team on the floor, especially during rush periods, while maintaining a high and structured pace.",
                "Managed priorities, stock, and stress in a high-pressure operational environment, with clear and consistent communication.",
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
                "Personal project\n\nFull-stack web app to manage and analyze expenses, subscriptions, and income.",
            details:
                "__**Complex business rules**__ :\n* Recurring income\n* Automatic expense generation from subscriptions\n* Budget rules by expense category\n* Monthly analyses\n* Authentication system\n**__Project story__** :\nOriginally conceived as a simple expenses and subscriptions tracking app to **build my skills**, I quickly wanted to turn it into a real **complete and usable application**.\nTo make the app easier to use, I had to set up:\n* a **PWA**: for easy access without going through app stores\n* a **bank connection**: to automatically fetch statements and avoid tedious manual entry.\n**__Hosting and deployment__** :\nInitially hosted on **Vercel** for the front end and **Render** for the back end, I soon bought a **raspberry pi** to host the entire application locally and avoid latency from free external hosting.\nI first deployed via **DuckDNS**, before setting up **my own domain name** and a fully controlled deployment.",
            image: projectsBase.ecoBuddy.image
                ? { ...projectsBase.ecoBuddy.image, alt: "Screenshot of the Eco-buddy app (dashboard)" }
                : undefined,
        },
        {
            ...projectsBase.portfolio,
            name: "Portfolio",
            description:
                "Personal project\n\nPortfolio presenting projects, experience, social links, and a viewable resume.",
            details:
                "__**Additional features**__ :\n* Dark / light theme management\n* FR / EN language management\n__**Hosting and deployment**__ :\nI hosted my portfolio on a **raspberry pi** and set up my own domain name to deploy this portfolio and other applications / sites via various subdomains.",
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
                "Client project (Defense)\n\nDesigned an automated workflow in n8n for document compliance checks.",
            details:
                "**__Workflow steps__** :\n* Upload the PDF to be checked (several hundred pages)\n* Check PDF compliance against 18 criteria defined in the specification\n* Generate a downloadable report listing non-compliances and corrective actions\n**__Compliance check handling__** :\n* Use utilities for simple criteria (pdftotext, pdffonts, ...)\n* Use LLMs for more complex criteria\n**__Examples of simple criteria checked__** :\n* Font used\n* Page numbering\n* Spelling or conjugation checks\n**__Examples of complex criteria checked__** :\n* Text / illustration consistency\n* Verification of the use of compliant pictograms",
        },
        {
            ...projectsBase.podcastApp,
            name: "Podcast application",
            description:
                "Developed during my internship at Safran\n\nApplication allowing Safran employees to publish and listen to audio podcasts",
            details:
                "**__Podcast objectives__** :\n* Help employees follow company news\n* Listen to interviews\n* Follow work advice\n* Stay up to date with technology watch\n**__Technologies used__** :\n* Database management with **DBeaver**.\n* Backend with **FastAPI** (a **Python** framework). Use of the **SQLAlchemy** ORM and the **Pydantic** library.\n* Frontend in **React Typescript** with **Material UI**.\n* Authentication with the company's **SSO**.\n* Implemented a **PWA** to make the app accessible on smartphones.",
        },
        {
            ...projectsBase.retroPlanning,
            name: "Retro-planning application",
            description:
                "Developed during my internship at Safran\n\nApplication allowing Safran HR teams to generate retro-planning schedules for experienced employees (simulation of different possible calendars before retirement)",
            details:
                "**__How the application is used__** :\n* The HR manager fills out a form with information about the experienced employee for whom they want to generate a retro-planning schedule.\n* They choose the type(s) of retro-planning to generate\n* Once the simulation is complete, HR can export the retro-planning summary PDF, the Excel file for the detailed calendar, or save a CSV of the information entered to run a later simulation.\n**__What is a retro-planning?__**\nIn this context, a retro-planning is a calendar that shows the working rhythm of an experienced employee before retirement. There are several options:\n* Standard Part-time Aid (TPA): part-time with salary top-up\n* TPA + progressive retirement: standard TPA + 12 months of progressive retirement\n* TPA 100-0: no reduction in working time, but salary difference converted into accumulable days for early retirement\n**__Technologies used__** :\n* Front-end only application in **React Typescript** with **Material UI**.\n* **Docker** containerization and internal deployment on a custom URL with **OpenShift**.\n**__Challenges encountered__** :\n* Managing public holidays and company closures\n* Responding to divergent client requirements (HR teams)\n* Building a polished and responsive timeline\n* Managing part-time work with repeated cycles of weeks containing different working days\n* Keeping the application simple and intuitive despite adding many features during development",
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
