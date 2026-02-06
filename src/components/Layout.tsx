import { useMemo } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import type { Social } from "../data/profile";
import type { Theme } from "../theme/theme";
import type { Locale } from "../i18n";
import { Sidebar } from "./Sidebar";
import { ThemeSwitch } from "./ThemeSwitch";
import { MouseHaloBackground } from "./MouseHaloBackground";
import { LocaleSwitch } from "./LocaleSwitch";


export function Layout({
    theme,
    onToggleTheme,
    name,
    title1,
    title2,
    blurb,
    socials,
    sectionLabels,
    availabilityText,
    cvLabel,
    photoAlt,
    locale,
    themeToggleLabel,
    languageToggleLabel,
    languageShortLabels,
    children,
}: {
    theme: Theme;
    onToggleTheme: () => void;
    name: string;
    title1: string;
    title2: string;
    blurb: string;
    socials: Social[];
    sectionLabels: Record<string, string>;
    availabilityText: string;
    cvLabel: string;
    photoAlt: string;
    locale: Locale;
    themeToggleLabel: string;
    languageToggleLabel: string;
    languageShortLabels: { fr: string; en: string };
    children: React.ReactNode;
}) {
    const sectionIds = useMemo(() => ["about", "experience", "projects"], []);
    const active = useActiveSection(sectionIds);

    return (
        <div className="relative min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
            <MouseHaloBackground theme={theme} />

            {/* switch light / dark mode */}
            <div className="absolute right-4 top-4 z-50 flex items-center gap-3">
                <LocaleSwitch
                    locale={locale}
                    labels={languageShortLabels}
                    ariaLabel={languageToggleLabel}
                />
                <ThemeSwitch theme={theme} onToggle={onToggleTheme} ariaLabel={themeToggleLabel} />
            </div>

            <div className="relative mx-auto max-w-6xl px-4">
                <div className="grid gap-12 lg:grid-cols-[360px_1fr] lg:gap-16">
                    <Sidebar
                        name={name}
                        title1={title1}
                        title2={title2}
                        blurb={blurb}
                        socials={socials}
                        sectionIds={sectionIds}
                        activeSectionId={active}
                        sectionLabels={sectionLabels}
                        availabilityText={availabilityText}
                        cvLabel={cvLabel}
                        photoAlt={photoAlt}
                    />

                    <main className="pb-6 lg:py-20">
                        {children}
                        <footer className="-mt-4 text-xs text-slate-500 dark:text-slate-500">
                            © {new Date().getFullYear()} {name}
                        </footer>
                    </main>
                </div>
            </div>
        </div>
    );
}
