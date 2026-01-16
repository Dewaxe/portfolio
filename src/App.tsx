import { useEffect, useMemo, useRef, useState } from "react";

type Experience = {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  summary: string;
  bullets: string[];
  tech: string[];
};

type Project = {
  name: string;
  description: string;
  tech: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  const observers = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    observers.current?.disconnect();
    observers.current = new IntersectionObserver(
      (entries) => {
        // Choisir la section la plus “visible”
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        // un peu de marge pour que ça colle au ressenti scroll
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.2, 0.35, 0.5],
      }
    );

    els.forEach((el) => observers.current?.observe(el));
    return () => observers.current?.disconnect();
  }, [ids]);

  return active;
}

function Chip({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/70">
      {children}
    </span>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5A11.5 11.5 0 0 0 8.36 23c.58.1.79-.25.79-.56v-2.1c-3.22.7-3.9-1.38-3.9-1.38-.53-1.33-1.3-1.69-1.3-1.69-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.1-.76.4-1.26.73-1.55-2.57-.29-5.27-1.29-5.27-5.73 0-1.27.45-2.32 1.2-3.14-.12-.3-.52-1.5.12-3.12 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.83 0c2.22-1.51 3.2-1.2 3.2-1.2.64 1.62.24 2.82.12 3.12.75.82 1.2 1.87 1.2 3.14 0 4.45-2.7 5.44-5.28 5.73.41.35.78 1.05.78 2.12v3.14c0 .31.21.66.8.56A11.5 11.5 0 0 0 12 .5Z"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 23.5h4V7.5h-4v16ZM8 7.5h3.83v2.19h.05c.53-1 1.83-2.19 3.77-2.19 4.03 0 4.78 2.65 4.78 6.1v9.9h-4v-8.78c0-2.09-.04-4.78-2.91-4.78-2.91 0-3.36 2.28-3.36 4.63v8.93H8V7.5Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.2-8 5.1-8-5.1V6l8 5.1L20 6v2.2Z"
      />
    </svg>
  );
}

export default function App() {
  // --- “spotlight” léger, effet créatif sans dark mode
  const [spot, setSpot] = useState({ x: 0, y: 0, show: false });

  useEffect(() => {
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setSpot({ x: e.clientX, y: e.clientY, show: true });
      });
    };
    const onLeave = () => setSpot((s) => ({ ...s, show: false }));
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const sectionIds = useMemo(() => ["about", "experience", "projects", "contact"], []);
  const active = useActiveSection(sectionIds);

  // --- Data (remplace tout ça par tes vraies infos)
  const experiences: Experience[] = [
    {
      period: "2025 — Aujourd’hui",
      role: "Développeur Fullstack",
      company: "Ton entreprise / Freelance",
      companyUrl: "#",
      summary:
        "Construction d’apps web de bout en bout : UI, API, DB, auth, déploiement.",
      bullets: [
        "Conception de fonctionnalités produit de A à Z avec une approche pragmatique.",
        "Mise en place d’API, validations, gestion d’erreurs, logs.",
        "Amélioration des performances et de la maintenabilité (refactor, composants réutilisables).",
      ],
      tech: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      period: "2023 — 2025",
      role: "Développeur Web",
      company: "Projet / Association / Études",
      companyUrl: "#",
      summary:
        "Projets web variés avec focus sur l’UX, la clarté du code et la livraison.",
      bullets: [
        "Intégration responsive, accessibilité, et composants UI réutilisables.",
        "Connexion à des APIs externes, gestion d’état, formulaires robustes.",
      ],
      tech: ["React", "Tailwind", "REST", "Git"],
    },
  ];

  const projects: Project[] = [
    {
      name: "App Fullstack (Auth + Dashboard)",
      description:
        "Dashboard avec authentification, rôles, CRUD, et données en base. Pensé comme un projet “prod-ready”.",
      tech: ["React", "TypeScript", "Express", "PostgreSQL", "Prisma"],
      links: [
        { label: "Démo", href: "#" },
        { label: "Code", href: "#" },
      ],
      featured: true,
    },
    {
      name: "Mini SaaS (CRUD + Billing)",
      description:
        "Base SaaS : onboarding, pages produit, validations, structure prête pour paiement et emails.",
      tech: ["React", "Node.js", "Zod", "PostgreSQL"],
      links: [
        { label: "Démo", href: "#" },
        { label: "Code", href: "#" },
      ],
      featured: true,
    },
    {
      name: "Outil Dev (CLI / Script)",
      description:
        "Petit outil qui automatise une tâche (formatage, génération, analyse… selon tes usages).",
      tech: ["Node.js", "TypeScript"],
      links: [{ label: "Code", href: "#" }],
    },
    {
      name: "UI Kit / Design System Lite",
      description:
        "Composants réutilisables + conventions (tokens, variantes, accessibilité).",
      tech: ["React", "Tailwind"],
      links: [{ label: "Code", href: "#" }],
    },
  ];

  const socials = [
    { label: "GitHub", href: "https://github.com/Dewaxe", icon: <GithubIcon /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/william-dempure/", icon: <LinkedinIcon /> },
    { label: "Email", href: "mailto:williamdempure@gmail.com", icon: <MailIcon /> },
  ];

  return (
    <div className="min-h-screen bg-[#fbfbfc] text-black">
      {/* fond : grille légère + spotlight */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.06)_1px,transparent_0)] [background-size:24px_24px] opacity-50" />
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: spot.show ? 1 : 0,
            background: `radial-gradient(600px circle at ${spot.x}px ${spot.y}px, rgba(99,102,241,0.12), rgba(16,185,129,0.08), transparent 60%)`,
          }}
        />
      </div>

      {/* Layout */}
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-[360px_1fr] lg:gap-16">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-0 lg:h-screen lg:py-20">
            <div className="pt-10 lg:pt-0">
              <div className="inline-flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-black text-white font-semibold">
                  WD
                </span>
                <div>
                  <h1 className="text-2xl font-semibold tracking-tight">
                    William Dempuré
                  </h1>
                  <p className="text-sm font-medium text-black/70">
                    Développeur Fullstack
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-sm text-sm leading-relaxed text-black/70">
                Je construis des expériences web soignées, avec des APIs robustes,
                une base propre, et une obsession pour la clarté.
              </p>

              {/* Nav */}
              <nav className="mt-10 hidden lg:block">
                <ul className="space-y-3">
                  {sectionIds.map((id) => {
                    const label =
                      id === "about"
                        ? "À propos"
                        : id === "experience"
                        ? "Expérience"
                        : id === "projects"
                        ? "Projets"
                        : "Contact";
                    const isActive = active === id;
                    return (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className={cn(
                            "group inline-flex items-center gap-3 text-sm font-semibold transition",
                            isActive ? "text-black" : "text-black/60 hover:text-black"
                          )}
                        >
                          <span
                            className={cn(
                              "h-[2px] w-10 rounded-full transition-all",
                              isActive
                                ? "bg-black w-14"
                                : "bg-black/30 group-hover:bg-black/60"
                            )}
                          />
                          {label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Socials */}
              <div className="mt-10 flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    className="rounded-xl border border-black/10 bg-white p-3 text-black/70 shadow-sm transition hover:bg-black/5 hover:text-black"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                >
                  Me contacter <ExternalIcon />
                </a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="pb-20 lg:py-20">
            {/* Mobile nav (simple) */}
            <div className="sticky top-0 z-40 -mx-4 border-b border-black/5 bg-white/70 px-4 py-3 backdrop-blur lg:hidden">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">William Dempuré</div>
                <div className="flex items-center gap-2">
                  {sectionIds.map((id) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className={cn(
                        "rounded-full px-3 py-1 text-xs font-semibold border shadow-sm transition",
                        active === id
                          ? "bg-black text-white border-black"
                          : "bg-white text-black/70 border-black/10 hover:bg-black/5"
                      )}
                    >
                      {id === "about"
                        ? "À propos"
                        : id === "experience"
                        ? "Exp."
                        : id === "projects"
                        ? "Projets"
                        : "Contact"}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ABOUT */}
            <section id="about" className="scroll-mt-24 pt-10 lg:pt-0">
              <h2 className="text-sm font-bold tracking-[0.2em] text-black/50">
                À PROPOS
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-black/75">
                <p>
                  Je suis développeur fullstack avec un goût marqué pour les interfaces
                  propres, l’architecture simple, et le code lisible.
                </p>
                <p>
                  J’aime travailler “comme en prod” : validations, erreurs, logs, structure
                  claire, et une expérience utilisateur qui donne confiance.
                </p>
                <p>
                  Je cherche un poste fullstack où je peux livrer des features utiles et
                  progresser avec une équipe exigeante.
                </p>
              </div>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" className="scroll-mt-24 mt-14">
              <h2 className="text-sm font-bold tracking-[0.2em] text-black/50">
                EXPÉRIENCE
              </h2>

              <div className="mt-6 space-y-4">
                {experiences.map((e) => (
                  <a
                    key={`${e.period}-${e.company}`}
                    href={e.companyUrl ?? "#"}
                    className={cn(
                      "group block rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm transition",
                      "hover:-translate-y-[1px] hover:border-black/20 hover:bg-white"
                    )}
                  >
                    <div className="grid gap-3 sm:grid-cols-[140px_1fr]">
                      <div className="text-xs font-semibold text-black/50">
                        {e.period}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="text-base font-semibold">
                            {e.role} ·{" "}
                            <span className="text-black/70">{e.company}</span>
                          </div>
                          <span className="text-black/40 transition group-hover:text-black/70">
                            <ExternalIcon />
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-black/70">{e.summary}</p>

                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-black/70">
                          {e.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {e.tech.map((t) => (
                            <Chip key={t}>{t}</Chip>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-black/70 hover:text-black"
                >
                  Voir le CV complet <ExternalIcon />
                </a>
              </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="scroll-mt-24 mt-14">
              <h2 className="text-sm font-bold tracking-[0.2em] text-black/50">
                PROJETS
              </h2>

              {/* Featured */}
              <div className="mt-6 space-y-4">
                {projects
                  .filter((p) => p.featured)
                  .map((p) => (
                    <div
                      key={p.name}
                      className="group rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm transition hover:-translate-y-[1px] hover:border-black/20 hover:bg-white"
                    >
                      <div className="grid gap-5 md:grid-cols-[1fr_220px]">
                        <div>
                          <div className="flex items-center justify-between gap-4">
                            <h3 className="text-base font-semibold">{p.name}</h3>
                            <div className="flex items-center gap-2">
                              {p.links.map((l) => (
                                <a
                                  key={l.label}
                                  href={l.href}
                                  className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2 text-xs font-semibold text-black/70 shadow-sm transition hover:bg-black/5 hover:text-black"
                                >
                                  {l.label} <ExternalIcon />
                                </a>
                              ))}
                            </div>
                          </div>

                          <p className="mt-2 text-sm text-black/70">{p.description}</p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {p.tech.map((t) => (
                              <Chip key={t}>{t}</Chip>
                            ))}
                          </div>
                        </div>

                        {/* Visuel placeholder type “screenshot card” */}
                        <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-white to-black/5 p-4">
                          <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-red-300" />
                            <span className="h-3 w-3 rounded-full bg-yellow-300" />
                            <span className="h-3 w-3 rounded-full bg-green-300" />
                            <div className="ml-auto text-[10px] font-semibold text-black/40">
                              screenshot
                            </div>
                          </div>
                          <div className="mt-4 h-24 rounded-xl border border-black/10 bg-white/70" />
                          <div className="mt-3 grid grid-cols-3 gap-2">
                            <div className="h-10 rounded-xl border border-black/10 bg-white/70" />
                            <div className="h-10 rounded-xl border border-black/10 bg-white/70" />
                            <div className="h-10 rounded-xl border border-black/10 bg-white/70" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Other projects */}
              <div className="mt-10">
                <h3 className="text-sm font-semibold text-black/70">
                  Autres projets notables
                </h3>
                <div className="mt-4 divide-y divide-black/10 overflow-hidden rounded-2xl border border-black/10 bg-white/80">
                  {projects
                    .filter((p) => !p.featured)
                    .map((p) => (
                      <div
                        key={p.name}
                        className="p-5 transition hover:bg-black/[0.02]"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="font-semibold">{p.name}</div>
                          <div className="flex items-center gap-2">
                            {p.links.map((l) => (
                              <a
                                key={l.label}
                                href={l.href}
                                className="inline-flex items-center gap-2 text-xs font-semibold text-black/60 hover:text-black"
                              >
                                {l.label} <ExternalIcon />
                              </a>
                            ))}
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-black/70">{p.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {p.tech.map((t) => (
                            <Chip key={t}>{t}</Chip>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="scroll-mt-24 mt-14">
              <h2 className="text-sm font-bold tracking-[0.2em] text-black/50">
                CONTACT
              </h2>

              <div className="mt-6 rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm">
                <p className="text-sm text-black/70">
                  Si tu as un poste fullstack ouvert ou un projet intéressant, je suis partant.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="mailto:williamdempure@gmail.com"
                    className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                  >
                    Envoyer un email <ExternalIcon />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/william-dempure/"
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/70 shadow-sm transition hover:bg-black/5 hover:text-black"
                  >
                    LinkedIn <ExternalIcon />
                  </a>
                  <a
                    href="https://github.com/Dewaxe"
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/70 shadow-sm transition hover:bg-black/5 hover:text-black"
                  >
                    GitHub <ExternalIcon />
                  </a>
                </div>

                <div className="mt-6 text-xs text-black/50">
                  © {new Date().getFullYear()} William Dempuré
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
