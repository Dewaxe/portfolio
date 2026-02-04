import { useMemo } from "react";
import type { Social } from "../data/profile";
import { cn } from "../utils/cn";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

function renderSocialIcon(key: "github" | "linkedin" | "email") {
    if (key === "github") return <GithubIcon />;
    if (key === "linkedin") return <LinkedinIcon />;
    return <MailIcon />;
}

export function Sidebar({
    name,
    title1,
    title2,
    blurb,
    socials,
    sectionIds,
    activeSectionId,
}: {
    name: string;
    title1: string;
    title2: string;
    blurb: string;
    socials: Social[];
    sectionIds: string[];
    activeSectionId: string;
}) {
    const labels = useMemo(() => {
        return sectionIds.map((id) => ({
            id,
            label:
                id === "about"
                    ? "À propos"
                    : id === "experience"
                    ? "Expérience"
                    : "Projets",
        }));
    }, [sectionIds]);

    function trackDownloadCV() {
        window.goatcounter?.count?.({
            event: true,
            path: "event/download_cv",
            title: "Download CV",
        });
    }


    return (
        <aside className="lg:sticky lg:top-0 lg:h-screen lg:py-20">
            <div className="pt-10 lg:pt-0">

                {/* Header */}
                <div className="inline-flex items-center gap-3">
                    <img
                        src="/profile.jpg"
                        alt={`Photo de profil - ${name}`}
                        className={cn(
                            "h-32 w-32 min-h-20 min-w-20",
                            "rounded-full object-cover",
                            "shrink-0",
                            "ring-2 ring-slate-200 dark:ring-slate-700"
                        )}
                    />
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-200">
                            {name}
                        </h1>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {title1}
                        </p>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                            {title2}
                        </p>
                    </div>
                </div>

                <div className="mt-5 max-w-sm space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    <p>{blurb}</p>
                    <p>
                        En recherche d’un CDI.
                        {" "}
                        <a
                            href="/cv-william-dempure.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="link font-semibold text-slate-900 decoration-slate-300
                                     dark:text-slate-200"
                            onClick={trackDownloadCV}
                        >
                            Voir le CV
                        </a>
                        .
                    </p>
                </div>


                {/* Nav */}
                <nav className="mt-10 hidden lg:block">
                    <ul className="space-y-3">
                        {labels.map((x) => {
                            const isActive = x.id === activeSectionId;

                            return (
                                <li key={x.id} >
                                    <a
                                        href={`#${x.id}`}
                                        className={cn(
                                            "group inline-flex items-center gap-3 text-sm font-semibold ",
                                            "transition-colors duration-200",
                                            isActive
                                                ? "text-slate-900 dark:text-slate-200"
                                                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                                        )}
                                    >
                                        {/* Barre */}
                                        <span
                                            className={cn(
                                                "block h-[2px] min-h-[2px] w-10 shrink-0 rounded-full",
                                                "transition-[transform,background-color,width] duration-200 ease-out",
                                                isActive
                                                    ? " w-20 bg-sky-600 dark:bg-sky-400"
                                                    : "bg-slate-300 group-hover:w-20 group-hover:bg-sky-600 dark:bg-slate-700 dark:group-hover:bg-sky-400"
                                            )}
                                        />

                                        {/* Texte */}
                                        <span
                                            className={cn(
                                                "transition-transform duration-200 ease-out",
                                                isActive ? "translate-x-1" : "group-hover:translate-x-1"
                                            )}
                                        >
                                            {x.label}
                                        </span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Socials */}
                <div className="mt-10 flex flex-wrap items-center gap-3">
                    {socials.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={s.label}
                            className="block"
                        >
                            <div className="link p-3 text-slate-600 transition-colors dark:text-slate-300">
                                {renderSocialIcon(s.iconKey)}
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </aside>
    );
}
