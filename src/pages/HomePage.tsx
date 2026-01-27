import { Link } from "react-router-dom";
import type { Experience, Project } from "../data/profile";
import { Card } from "../components/Card";
import { Chip } from "../components/Chip";
import { SectionHeading } from "../components/SectionHeading";
import { ExternalIcon } from "../components/Icons";
import { cn } from "../utils/cn";

export function HomePage({
    experiences,
    projects,
}: {
    experiences: Experience[];
    projects: Project[];
}) {
    return (
        <>
            {/* ABOUT */}
            <section id="about" className="scroll-mt-28 pt-10 lg:pt-0">
                <SectionHeading title="À PROPOS" />
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-[rgba(var(--muted),0.95)]">
                    <p>
                        Je suis développeur fullstack, et j’aime autant travailler sur l’interface que sur le backend :
                        construire une feature, la brancher à une API, la stocker proprement, puis la déployer.
                    </p>

                    <p>
                        J’ai eu l’occasion de bosser sur des sujets très concrets : outils internes, automatisation,
                        dashboards, et aussi des projets perso auto-hébergés (stack React/TypeScript principalement).
                    </p>

                    <p>
                        Je cherche aujourd’hui un poste en CDI où je peux continuer à progresser dans une équipe,
                        livrer des fonctionnalités utiles, et être impliqué dans le produit au quotidien.
                    </p>
                </div>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" className="scroll-mt-10 mt-24">
                <SectionHeading title="EXPÉRIENCE" />

                <div className="mt-8 space-y-6">
                    {experiences.map((e) => {
                        const CardContent = (
                            <Card className={cn("group p-6", e.companyUrl && "cursor-pointer")}>
                                <div className="grid gap-3 sm:grid-cols-[140px_1fr]">
                                    <div className="text-xs font-semibold text-[rgba(var(--muted-2),0.95)]">
                                        {e.period}
                                    </div>

                                    <div>
                                        <div
                                            className={cn(
                                                "flex flex-wrap items-center gap-2",
                                                "text-base font-semibold transition-colors",
                                                "text-[rgb(var(--fg-strong))]",
                                                "group-hover:text-[rgb(var(--accent))]"
                                            )}
                                        >
                                            {e.role} ·{" "}
                                            <span className="text-[rgba(var(--muted),0.95)]">
                                                {e.company}
                                            </span>

                                            {e.companyUrl && <ExternalIcon trigger="card" />}
                                        </div>

                                        <p className="mt-2 text-sm text-[rgba(var(--muted),0.95)]">
                                            {e.summary}
                                        </p>

                                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[rgba(var(--muted),0.95)]">
                                            {e.bullets.map((b) => (
                                                <li key={b}>{b}</li>
                                            ))}
                                        </ul>

                                        {e.tech.length > 0 && (
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {e.tech.map((t) => (
                                                    <Chip key={t}>{t}</Chip>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        );

                        return e.companyUrl ? (
                            <a
                                key={`${e.period}-${e.company}`}
                                href={e.companyUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="block"
                            >
                                {CardContent}
                            </a>
                        ) : (
                            <div key={`${e.period}-${e.company}`} className="block">
                                {CardContent}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="scroll-mt-10 mt-24">
                <SectionHeading title="PROJETS" />

                <div className="mt-8 space-y-6">
                    {projects
                        .filter((p) => p.featured)
                        .map((p) => (
                            <Card key={p.name} className="group p-6">
                                <div className="grid gap-5 md:grid-cols-[1fr_220px]">
                                    <div>
                                        <div className="flex items-center justify-between gap-4">
                                            <h3
                                                className={cn(
                                                    "text-base font-semibold transition-colors",
                                                    "text-[rgb(var(--fg-strong))]",
                                                    "group-hover:text-[rgb(var(--accent))]"
                                                )}
                                            >
                                                {p.name}
                                            </h3>

                                            <div className="flex items-center gap-2">
                                                {p.links.map((l) => (
                                                    <a
                                                        key={l.label}
                                                        href={l.href}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className={cn(
                                                            "group/external inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold transition",
                                                            "text-[rgba(var(--muted),0.95)] hover:text-[rgb(var(--accent))]",

                                                        )}
                                                    >
                                                        {l.label} <ExternalIcon />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>

                                        <p className="whitespace-pre-line mt-2 text-sm text-[rgba(var(--muted),0.95)]">
                                            {p.description}
                                        </p>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {p.tech.map((t) => (
                                                <Chip
                                                    key={t}
                                                >
                                                    {t}
                                                </Chip>
                                            ))}
                                        </div>
                                    </div>

                                    {p.image?.src ? (
                                        <div className="md:mt-1">
                                            <div
                                                className={cn(
                                                    "overflow-hidden rounded-xl",
                                                    "ring-2 ring-slate-200 dark:ring-slate-700"
                                                )}
                                            >
                                                <div className="aspect-[4/3] bg-slate-50 dark:bg-slate-900">
                                                    <img
                                                        src={p.image.src}
                                                        alt={p.image.alt ?? `Screenshot du projet ${p.name}`}
                                                        loading="lazy"
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        ) : (
                                        <div className="hidden md:block" />
                                    )}

                                </div>
                            </Card>
                        )
                    )}
                </div>

                {/* Lien vers la page des projets */}
                <div className="mt-6 flex justify-end">
                    <Link
                        to="/projects"
                        className="link group inline-flex items-center gap-2 text-sm font-medium
                                text-slate-600 dark:text-slate-300"
                    >
                        Voir tous les projets
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </section>
        </>
    );
}
