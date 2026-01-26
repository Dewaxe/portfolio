import { useEffect } from "react";
import { Link } from "react-router-dom";
import type { Project } from "../data/profile";
import { Card } from "../components/Card";
import { Chip } from "../components/Chip";
import { ExternalIcon } from "../components/Icons";
import type { Theme } from "../theme/theme";
import { MouseHaloBackground } from "../components/MouseHaloBackground";
import { ThemeSwitch } from "../components/ThemeSwitch";

export function ProjectsPage({ projects, theme, onToggleTheme }: { projects: Project[]; theme: Theme; onToggleTheme: () => void }) {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div className="relative min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
            <MouseHaloBackground theme={theme} />
            <div className="absolute right-4 top-4 z-50">
                <ThemeSwitch theme={theme} onToggle={onToggleTheme} />
            </div>
            <div className="mx-auto max-w-5xl px-4 py-10">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">Tous les projets</h1>
                        <p className="mt-2 text-sm text-[rgba(var(--muted),0.95)]">
                            Liste complète.
                        </p>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <Link
                            to="/"
                            className="link group inline-flex items-center gap-2 text-sm font-medium
                                    text-slate-600 dark:text-slate-300"
                        >
                            <span className="transition-transform group-hover:-translate-x-1">←</span>
                            Retour
                        </Link>
                    </div>
                </div>

                <div className="mt-10 grid gap-6">
                    {projects.map((p) => (
                        <Card key={p.name} className="group p-6">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <div className="text-base font-semibold">{p.name}</div>
                                <div className="flex items-center gap-3">
                                    {p.links.map((l) => (
                                        <a
                                            key={l.label}
                                            href={l.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-xs font-semibold text-[rgba(var(--muted),0.95)] hover:underline"
                                        >
                                            {l.label} <ExternalIcon />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <p className="mt-2 text-sm text-[rgba(var(--muted),0.95)]">
                                {p.description}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.tech.map((t) => (
                                    <Chip key={t}>{t}</Chip>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
