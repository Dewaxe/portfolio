import { useMemo } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import type { Social } from "../data/profile";
import type { Theme } from "../theme/theme";
import { Sidebar } from "./Sidebar";
import { ThemeSwitch } from "./ThemeSwitch";
import { MouseHaloBackground } from "./MouseHaloBackground";


export function Layout({
    theme,
    onToggleTheme,
    name,
    title,
    blurb,
    socials,
    children,
}: {
    theme: Theme;
    onToggleTheme: () => void;
    name: string;
    title: string;
    blurb: string;
    socials: Social[];
    children: React.ReactNode;
}) {
    const sectionIds = useMemo(() => ["about", "experience", "projects", "contact"], []);
    const active = useActiveSection(sectionIds);

    return (
        <div className="relative min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
            <MouseHaloBackground theme={theme} />

            {/* switch light / dark mode */}
            <div className="absolute right-4 top-4 z-50">
                <ThemeSwitch theme={theme} onToggle={onToggleTheme} />
            </div>

            <div className="relative mx-auto max-w-6xl px-4">
                <div className="grid gap-12 lg:grid-cols-[360px_1fr] lg:gap-16">
                    <Sidebar
                        name={name}
                        title={title}
                        blurb={blurb}
                        socials={socials}
                        sectionIds={sectionIds}
                        activeSectionId={active}
                    />

                    <main className="pb-24 lg:py-20">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
