import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Project } from "../content/types";
import type { Theme } from "../theme/theme";
import type { Copy, Locale } from "../i18n";
import { MouseHaloBackground } from "../components/MouseHaloBackground";
import { ExternalIcon } from "../components/Icons";
import { Chip } from "../components/Chip";
import { cn } from "../utils/cn";
import { HeaderControls } from "../components/HeaderControls";

export function ProjectsPage({
    projects,
    theme,
    onToggleTheme,
    copy,
    locale,
    homePath,
    name,
}: {
    projects: Project[];
    theme: Theme;
    onToggleTheme: () => void;
    copy: Copy;
    locale: Locale;
    homePath: string;
    name: string;
}) {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

    const toggleProjectDetails = (detailsId: string) => {
        setExpandedProjects((prev) => ({
            ...prev,
            [detailsId]: !prev[detailsId],
        }));
    };

    const renderInlineDetails = (text: string) => {
        const parts: React.ReactNode[] = [];
        const regex =
            /__\*\*([^*]+)\*\*__|\*\*__([^_]+)__\*\*|__([^_]+)__|\*\*([^*]+)\*\*/g;
        let lastIndex = 0;
        let match: RegExpExecArray | null;

        while ((match = regex.exec(text)) !== null) {
            if (match.index > lastIndex) {
                parts.push(text.slice(lastIndex, match.index));
            }

            if (match[1]) {
                parts.push(
                    <strong key={`bu-${match.index}`} className="font-semibold text-[rgb(var(--fg-strong))]">
                        <span className="underline">{match[1]}</span>
                    </strong>
                );
            } else if (match[2]) {
                parts.push(
                    <strong key={`bu-${match.index}`} className="font-semibold text-[rgb(var(--fg-strong))]">
                        <span className="underline">{match[2]}</span>
                    </strong>
                );
            } else if (match[3]) {
                parts.push(
                    <span key={`u-${match.index}`} className="underline">
                        {match[3]}
                    </span>
                );
            } else if (match[4]) {
                parts.push(
                    <strong key={`b-${match.index}`} className="font-semibold text-[rgb(var(--fg-strong))]">
                        {match[4]}
                    </strong>
                );
            }

            lastIndex = match.index + match[0].length;
        }

        if (lastIndex < text.length) {
            parts.push(text.slice(lastIndex));
        }

        return parts;
    };

    const renderDetails = (details: string) => {
        const lines = details.split("\n");
        const blocks: Array<{ type: "paragraph"; text: string } | { type: "list"; items: string[] }> = [];
        let listBuffer: string[] = [];

        const flushList = () => {
            if (listBuffer.length > 0) {
                blocks.push({ type: "list", items: listBuffer });
                listBuffer = [];
            }
        };

        for (const line of lines) {
            const trimmed = line.trim();

            if (!trimmed) {
                flushList();
                continue;
            }

            if (/^[-*]\s+/.test(trimmed)) {
                listBuffer.push(trimmed.replace(/^[-*]\s+/, ""));
                continue;
            }

            flushList();
            blocks.push({ type: "paragraph", text: line });
        }

        flushList();

        return blocks.map((block, index) => {
            if (block.type === "list") {
                return (
                    <ul key={`list-${index}`} className="list-disc space-y-1 pl-5">
                        {block.items.map((item, itemIndex) => (
                            <li key={`item-${index}-${itemIndex}`}>{renderInlineDetails(item)}</li>
                        ))}
                    </ul>
                );
            }

            return (
                <p key={`p-${index}`} className="whitespace-pre-line">
                    {renderInlineDetails(block.text)}
                </p>
            );
        });
    };

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

            <HeaderControls
                theme={theme}
                onToggleTheme={onToggleTheme}
                locale={locale}
                languageShortLabels={copy.languageShortLabels}
                languageToggleLabel={copy.languageToggleLabel}
                themeToggleLabel={copy.themeToggleLabel}
            />

            <div className="mx-auto max-w-6xl px-4 py-10">
                <div className="flex flex-col gap-4">
                    <Link
                        to={homePath}
                        className="link group inline-flex items-center gap-2 text-sm font-medium text-[rgba(var(--muted),0.95)]"
                    >
                        <span className="transition-transform group-hover:-translate-x-1">
                            ←
                        </span>
                            {name}
                    </Link>

                    <h1 className="text-3xl font-semibold tracking-tight text-[rgb(var(--fg-strong))]">
                        {copy.projectsPage.heading}
                    </h1>
                </div>

                {/* Desktop table */}
                <div className="mt-10 hidden md:block">
                    <div className=" rounded-2xl ring-1 ring-slate-200 dark:ring-slate-700 pr-px">
                        <table className="w-full table-fixed border-separate border-spacing-0">
                            <colgroup>
                                <col className="w-[7.5%]" />
                                <col className="w-[20%]" />
                                <col className="w-[42.5%]" />
                                <col className="w-[20%]" />
                                <col className="w-[10%]" />
                            </colgroup>
                            <thead>
                                <tr className="text-left text-xs font-semibold tracking-widest text-[rgba(var(--muted-2),0.95)]">
                                    <th className={cn(thBase, "w-[90px]", "rounded-tl-2xl")}>
                                        {copy.projectsPage.table.year}
                                    </th>
                                    <th className={thBase}>{copy.projectsPage.table.project}</th>
                                    <th className={thBase}>{copy.projectsPage.table.description}</th>
                                    <th className={thBase}>{copy.projectsPage.table.tech}</th>
                                    <th className={cn(thBase, "text-right", "rounded-tr-2xl", "pr-7")}>
                                        {copy.projectsPage.table.links}
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {projects.map((p, i) => {
                                    const detailsId = `project-details-${i}`;
                                    const isExpanded = Boolean(expandedProjects[detailsId]);
                                    const hasDetails = Boolean(p.details?.trim());

                                    return (
                                        <React.Fragment key={p.name}>
                                        <tr className="group">
                                            <td className="px-5 py-5 align-top text-xs font-semibold text-[rgba(var(--muted-2),0.95)]">
                                                {p.year}
                                            </td>

                                            <td className="px-5 py-5 align-top">
                                                <div className="font-semibold text-[rgb(var(--accent))] sm:text-[rgb(var(--fg-strong))] transition-colors sm:group-hover:text-[rgb(var(--accent))]">
                                                    {p.name}
                                                </div>
                                            </td>

                                            <td className="px-5 py-5 align-top">
                                                <p className="whitespace-pre-line text-sm leading-relaxed text-[rgba(var(--muted),0.95)]">
                                                    {p.description}
                                                    {hasDetails && (
                                                        <>
                                                            {" "}
                                                            <button
                                                                type="button"
                                                                onClick={() => toggleProjectDetails(detailsId)}
                                                                aria-expanded={isExpanded}
                                                                aria-controls={detailsId}
                                                                className={cn(
                                                                    "inline-flex items-center gap-2 rounded-xl px-3 py-1.5 align-middle text-xs font-semibold transition-colors",
                                                                    "text-[rgb(var(--fg-strong))] hover:text-[rgb(var(--accent))]"
                                                                )}
                                                            >
                                                                {isExpanded
                                                                    ? copy.projectsPage.seeLess
                                                                    : copy.projectsPage.seeMore}
                                                                <span className="text-[0.9rem] leading-none -ml-1">
                                                                    {isExpanded ? "▴" : "▾"}
                                                                </span>
                                                            </button>
                                                        </>
                                                    )}
                                                </p>

                                                {hasDetails && (
                                                    <div id={detailsId} role="region">
                                                        <AnimatePresence initial={false}>
                                                            {isExpanded && (
                                                                <motion.div
                                                                    key={`${detailsId}-content`}
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: "auto", opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                                                    className="overflow-hidden"
                                                                >
                                                                    <div
                                                                        className={cn(
                                                                            "mt-3 rounded-lg border border-slate-200/70 bg-transparent",
                                                                            "p-3 text-sm leading-relaxed text-[rgba(var(--muted),0.95)]",
                                                                            "dark:border-slate-700/70"
                                                                        )}
                                                                    >
                                                                        <div className="space-y-2">
                                                                            {renderDetails(p.details ?? "")}
                                                                        </div>
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                )}
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

                                        {i !== projects.length - 1 && (
                                            <tr aria-hidden="true">
                                                <td colSpan={5} className="px-5">
                                                    <div className="h-px w-full bg-slate-200/70 dark:bg-slate-700/70" />
                                                </td>
                                            </tr>
                                        )}
                                        </React.Fragment>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Mobile list */}
                <div className="mt-10 md:hidden">
                    <div className="rounded-2xl ring-1 ring-slate-200 dark:ring-slate-700">
                        {projects.map((p, i) => {
                            const detailsId = `project-details-mobile-${i}`;
                            const isExpanded = Boolean(expandedProjects[detailsId]);
                            const hasDetails = Boolean(p.details?.trim());

                            return (
                                <div key={p.name}>
                                <div className="p-5">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <div className="text-xs font-semibold tracking-widest text-[rgba(var(--muted-2),0.95)]">
                                                {p.year}
                                            </div>
                                            <div className="mt-1 font-semibold text-[rgb(var(--accent))]">
                                                {p.name}
                                            </div>
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
                                        {hasDetails && (
                                            <>
                                                {" "}
                                                <button
                                                    type="button"
                                                    onClick={() => toggleProjectDetails(detailsId)}
                                                    aria-expanded={isExpanded}
                                                    aria-controls={detailsId}
                                                    className={cn(
                                                        "inline-flex items-center gap-2 rounded-xl px-3 py-1.5 align-middle text-xs font-semibold transition-colors",
                                                        "text-[rgb(var(--fg-strong))] hover:text-[rgb(var(--accent))]"
                                                    )}
                                                >
                                                    {isExpanded
                                                        ? copy.projectsPage.seeLess
                                                        : copy.projectsPage.seeMore}
                                                    <span className="text-[0.9rem] leading-none -ml-1">
                                                        {isExpanded ? "▴" : "▾"}
                                                    </span>
                                                </button>
                                            </>
                                        )}
                                    </p>

                                    {hasDetails && (
                                        <div id={detailsId} role="region">
                                            <AnimatePresence initial={false}>
                                                {isExpanded && (
                                                    <motion.div
                                                        key={`${detailsId}-content`}
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div
                                                            className={cn(
                                                                "mt-3 rounded-lg border border-slate-200/70 bg-transparent",
                                                                "p-3 text-sm leading-relaxed text-[rgba(var(--muted),0.95)]",
                                                                "dark:border-slate-700/70"
                                                            )}
                                                        >
                                                            <div className="space-y-2">
                                                                {renderDetails(p.details ?? "")}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )}

                                    {p.tech.length > 0 && (
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {p.tech.map((t) => (
                                                <Chip key={t}>{t}</Chip>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {i !== projects.length - 1 && (
                                    <div className="h-px w-full bg-slate-200/70 dark:bg-slate-700/70" />
                                )}
                            </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
