import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { applyTheme, getInitialTheme, saveTheme } from "./theme/theme";
import { content as contentFr } from "./content/fr";
import { content as contentEn } from "./content/en";
import { copy, getLocaleFromPathname, type Locale, withLocalePath } from "./i18n";

export default function App() {
    const [theme, setTheme] = useState(() => getInitialTheme());
    const location = useLocation();
    const locale = getLocaleFromPathname(location.pathname);
    const ui = copy[locale];

    useEffect(() => {
        applyTheme(theme);
        saveTheme(theme);
    }, [theme]);

    useEffect(() => {
        document.documentElement.lang = locale;
        document.title = ui.meta.title;
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute("content", ui.meta.description);
    }, [locale, ui.meta.description, ui.meta.title]);

    const getData = (targetLocale: Locale) => {
        return targetLocale === "en" ? contentEn : contentFr;
    };

    const renderHome = (targetLocale: Locale) => {
        const data = getData(targetLocale);
        const copyForLocale = copy[targetLocale];

        return (
            <Layout
                theme={theme}
                onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
                name={data.profile.name}
                title1={data.profile.title1}
                title2={data.profile.title2}
                blurb={data.profile.blurb}
                socials={data.socials}
                sectionLabels={copyForLocale.nav}
                availabilityText={copyForLocale.sidebar.availability}
                cvLabel={copyForLocale.sidebar.cvLabel}
                cvHref={
                    targetLocale === "en"
                        ? "/resume-william-dempure.pdf"
                        : "/cv-william-dempure.pdf"
                }
                photoAlt={copyForLocale.sidebar.photoAlt}
                locale={targetLocale}
                themeToggleLabel={copyForLocale.themeToggleLabel}
                languageToggleLabel={copyForLocale.languageToggleLabel}
                languageShortLabels={copyForLocale.languageShortLabels}
            >
                <HomePage
                    experiences={data.experiences}
                    projects={data.projects}
                    copy={copyForLocale}
                    about={data.about}
                    projectsPath={withLocalePath("/projects", targetLocale)}
                />
            </Layout>
        );
    };

    const renderProjects = (targetLocale: Locale) => {
        const data = getData(targetLocale);
        const copyForLocale = copy[targetLocale];

        return (
            <ProjectsPage
                projects={data.projects}
                theme={theme}
                onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
                copy={copyForLocale}
                locale={targetLocale}
                homePath={withLocalePath("/", targetLocale)}
                name={data.profile.name}
            />
        );
    };

    return (
        <Routes>
            <Route
                path="/"
                element={renderHome("en")}
            />
            <Route
                path="/projects"
                element={renderProjects("en")}
            />
            <Route
                path="/fr"
                element={renderHome("fr")}
            />
            <Route
                path="/fr/projects"
                element={renderProjects("fr")}
            />
        </Routes>
    );
}


