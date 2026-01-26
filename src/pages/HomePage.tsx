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
    email,
}: {
    experiences: Experience[];
    projects: Project[];
    email: string;
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
                        dashboards, et aussi des projets perso auto-hébergés (stack React/TypeScript + backend).
                    </p>

                    <p>
                        Je cherche aujourd’hui un poste en CDI où je peux continuer à progresser dans une équipe,
                        livrer des fonctionnalités utiles, et être impliqué dans le produit au quotidien.
                    </p>
                </div>
            </section>

            {/* EXPERIENCE (espacement augmenté) */}
            <section id="experience" className="scroll-mt-28 mt-24">
                <SectionHeading title="EXPÉRIENCE" />

                <div className="mt-8 space-y-6">
                    {experiences.map((e) => (
                        <a
                            key={`${e.period}-${e.company}`}
                            href={e.companyUrl ?? "#"}
                            target="_blank"
                            rel="noreferrer"
                            className="block"
                        >
                            <Card className="group p-6">
                                <div className="grid gap-3 sm:grid-cols-[140px_1fr]">
                                    <div className="text-xs font-semibold text-[rgba(var(--muted-2),0.95)]">
                                        {e.period}
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <div
                                                className={cn(
                                                    "text-base font-semibold transition-colors",
                                                    "text-[rgb(var(--fg-strong))]",
                                                    "group-hover:text-[rgb(var(--accent-strong))]"
                                                )}
                                            >
                                                {e.role} ·{" "}
                                                <span className="text-[rgba(var(--muted),0.95)]">
                                                    {e.company}
                                                </span>
                                            </div>
                                            <span className="text-[rgba(var(--muted-2),0.95)]">
                                                <ExternalIcon />
                                            </span>
                                        </div>

                                        <p className="mt-2 text-sm text-[rgba(var(--muted),0.95)]">
                                            {e.summary}
                                        </p>

                                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[rgba(var(--muted),0.95)]">
                                            {e.bullets.map((b) => (
                                                <li key={b}>{b}</li>
                                            ))}
                                        </ul>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {e.tech.map((t) => (
                                                <Chip
                                                    key={t}
                                                >
                                                    {t}
                                                </Chip>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </a>
                    ))}
                </div>

                <div className="mt-8">
                    <a
                        href="/cv-william-dempure.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[rgba(var(--muted),0.95)] hover:underline"
                    >
                        Voir le CV complet <ExternalIcon />
                    </a>
                </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="scroll-mt-28 mt-24">
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
                                                    "group-hover:text-[rgb(var(--accent-strong))]"
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
                                                            "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold transition",
                                                            "text-[rgba(var(--muted),0.95)] hover:text-[rgb(var(--fg-strong))]"
                                                        )}
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
                                                <Chip
                                                    key={t}
                                                >
                                                    {t}
                                                </Chip>
                                            ))}
                                        </div>
                                    </div>

                                    {/* screenshot de l'appli */}

                                </div>
                            </Card>

                        ))}
                </div>

                {/* IMPORTANT: bouton "Voir tous les projets" en bas de la section */}
                <div className="mt-10">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[rgba(var(--muted),0.95)] hover:underline"
                    >
                        Voir tous les projets <ExternalIcon />
                    </Link>
                </div>
            </section>

            {/* CONTACT (remis comme avant) */}
            <section id="contact" className="scroll-mt-28 mt-24">
                <SectionHeading title="CONTACT" />

                <div className="mt-8">
                    <Card className="group p-6">
                        <p className="text-sm text-[rgba(var(--muted),0.95)]">
                            Si tu as un poste fullstack ouvert ou un projet intéressant, je suis partant.
                        </p>

                        <div className="mt-4 flex flex-wrap gap-3">
                            <a
                                href={`mailto:${email}`}
                                className="inline-flex items-center gap-2 rounded-xl bg-[rgb(var(--accent))] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                            >
                                Envoyer un email <ExternalIcon />
                            </a>
                        </div>

                        <div className="mt-6 text-xs text-[rgba(var(--muted-2),0.95)]">
                            Réponse rapide, même pour un premier échange 🙂
                        </div>
                    </Card>
                </div>
            </section>
        </>
    );
}
