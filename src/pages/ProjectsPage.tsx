import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import type { Project } from "../data/profile";
import type { Theme } from "../theme/theme";
import { MouseHaloBackground } from "../components/MouseHaloBackground";
import { ThemeSwitch } from "../components/ThemeSwitch";
import { ExternalIcon } from "../components/Icons";
import { Chip } from "../components/Chip";
import { cn } from "../utils/cn";

export function ProjectsPage({
    projects,
    theme,
    onToggleTheme,
}: {
    projects: Project[];
    theme: Theme;
    onToggleTheme: () => void;
}) {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const sorted = [...projects];

    const thBase = cn(
        "sticky top-0 z-30 px-5 py-4",
        "border-b border-slate-200/70 dark:border-slate-700/70",
        "bg-transparent backdrop-blur-md",
        "relative overflow-hidden",
        "before:absolute before:inset-0 before:-z-10",
        "before:bg-[rgba(var(--bg),0.72)] dark:before:bg-[rgba(var(--bg),0.55)]"
    );

    return (
        <div className="relative min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
            <MouseHaloBackground theme={theme} />

            <div className="absolute right-4 top-4 z-50">
                <ThemeSwitch theme={theme} onToggle={onToggleTheme} />
            </div>

            <div className="mx-auto max-w-6xl px-4 py-10">
                <div className="flex flex-col gap-4">
                    <Link
                        to="/"
                        className="link group inline-flex items-center gap-2 text-sm font-medium text-[rgba(var(--muted),0.95)]"
                    >
                        <span className="transition-transform group-hover:-translate-x-1">
                            ←
                        </span>
                            William Dempuré
                    </Link>

                    <h1 className="text-3xl font-semibold tracking-tight text-[rgb(var(--fg-strong))]">
                        Tous les projets
                    </h1>
                </div>

                {/* Desktop table */}
                <div className="mt-10 hidden md:block">
                    <div className=" rounded-2xl ring-1 ring-slate-200 dark:ring-slate-700 pr-px">
                        <table className="w-full border-separate border-spacing-0">
                            <thead>
                                <tr className="text-left text-xs font-semibold tracking-widest text-[rgba(var(--muted-2),0.95)]">
                                    <th className={cn(thBase, "w-[90px]", "rounded-tl-2xl")}>ANNÉE</th>
                                    <th className={thBase}>PROJET</th>
                                    <th className={thBase}>DESCRIPTION</th>
                                    <th className={thBase}>TECH</th>
                                    <th className={cn(thBase, "text-right", "rounded-tr-2xl", "pr-7")}>LIENS</th>
                                </tr>
                            </thead>

                            <tbody>
                                {sorted.map((p, i) => (
                                    <React.Fragment key={p.name}>
                                        <tr className="group">
                                            <td className="px-5 py-5 align-top text-xs font-semibold text-[rgba(var(--muted-2),0.95)]">
                                                {p.year}
                                            </td>

                                            <td className="px-5 py-5 align-top">
                                                <div className="font-semibold text-[rgb(var(--fg-strong))] transition-colors group-hover:text-[rgb(var(--accent))]">
                                                    {p.name}
                                                </div>
                                            </td>

                                            <td className="px-5 py-5 align-top">
                                                <p className="whitespace-pre-line text-sm leading-relaxed text-[rgba(var(--muted),0.95)]">
                                                    {p.description}
                                                </p>
                                            </td>

                                            <td className="px-5 py-5 align-top">
                                                <div className="flex flex-wrap gap-2">
                                                    {p.tech.map((t) => (
                                                        <Chip key={t}>{t}</Chip>
                                                    ))}
                                                </div>
                                            </td>

                                            <td className="px-5 py-5 align-top">
                                                <div className="flex flex-wrap justify-end gap-3">
                                                    {p.links.map((l) => (
                                                        <a
                                                            key={l.label}
                                                            href={l.href}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="group/external inline-flex items-center gap-2 text-xs font-semibold text-[rgba(var(--muted),0.95)] transition-colors hover:text-[rgb(var(--accent))]"
                                                        >
                                                            {l.label} <ExternalIcon trigger="external" />
                                                        </a>
                                                    ))}
                                                </div>
                                            </td>
                                        </tr>

                                        {i !== sorted.length - 1 && (
                                            <tr aria-hidden="true">
                                                <td colSpan={5} className="px-5">
                                                    <div className="h-px w-full bg-slate-200/70 dark:bg-slate-700/70" />
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Mobile list */}
                <div className="mt-10 md:hidden">
                    <div className="rounded-2xl ring-1 ring-slate-200 dark:ring-slate-700">
                        {sorted.map((p, i) => (
                            <div key={p.name}>
                                <div className="p-5">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="font-semibold text-[rgb(var(--fg-strong))]">
                                            {p.name}
                                        </div>

                                        <div className="flex flex-wrap justify-end gap-3">
                                            {p.links.map((l) => (
                                                <a
                                                    key={l.label}
                                                    href={l.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="group/external inline-flex items-center gap-2 text-xs font-semibold text-[rgba(var(--muted),0.95)] transition-colors hover:text-[rgb(var(--accent))]"
                                                >
                                                    {l.label} <ExternalIcon trigger="external" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    <p className="whitespace-pre-line mt-2 text-sm leading-relaxed text-[rgba(var(--muted),0.95)]">
                                        {p.description}
                                    </p>

                                    {p.tech.length > 0 && (
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {p.tech.map((t) => (
                                                <Chip key={t}>{t}</Chip>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {i !== sorted.length - 1 && (
                                    <div className="h-px w-full bg-slate-200/70 dark:bg-slate-700/70" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
