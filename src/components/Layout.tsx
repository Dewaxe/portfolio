import { useMemo } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import type { Social } from "../content/types";
import type { Theme } from "../theme/theme";
import { SECTION_IDS, type Locale, type SectionId } from "../i18n";
import { Sidebar } from "./Sidebar";
import { MouseHaloBackground } from "./MouseHaloBackground";
import { HeaderControls } from "./HeaderControls";


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
    cvHref,
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
    sectionLabels: Record<SectionId, string>;
    availabilityText: string;
    cvLabel: string;
    cvHref: string;
    photoAlt: string;
    locale: Locale;
    themeToggleLabel: string;
    languageToggleLabel: string;
    languageShortLabels: { fr: string; en: string };
    children: React.ReactNode;
}) {
    const sectionIds = useMemo(() => SECTION_IDS, []);
    const active = useActiveSection(sectionIds);

    return (
        <div className="relative min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
            <MouseHaloBackground theme={theme} />

            <HeaderControls
                theme={theme}
                onToggleTheme={onToggleTheme}
                locale={locale}
                languageShortLabels={languageShortLabels}
                languageToggleLabel={languageToggleLabel}
                themeToggleLabel={themeToggleLabel}
            />

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
                        cvHref={cvHref}
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
