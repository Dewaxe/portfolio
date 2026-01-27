import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { applyTheme, getInitialTheme, saveTheme } from "./theme/theme";
import { experiences, profile, projects, socials } from "./data/profile";

export default function App() {
    const [theme, setTheme] = useState(() => getInitialTheme());

    useEffect(() => {
        const t = getInitialTheme();
        setTheme(t);
        applyTheme(t);
    }, []);

    useEffect(() => {
        applyTheme(theme);
        saveTheme(theme);
    }, [theme]);

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout
                        theme={theme}
                        onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
                        name={profile.name}
                        title1={profile.title1}
                        title2={profile.title2}
                        blurb={profile.blurb}
                        socials={socials}
                    >
                        <HomePage
                            experiences={experiences}
                            projects={projects}
                        />
                    </Layout>
                }
            />
            <Route
                path="/projects"
                element={
                    <ProjectsPage
                        projects={projects}
                        theme={theme}
                        onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
                    />
                }
            />
        </Routes>
    );
}
