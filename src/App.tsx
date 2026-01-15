import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type Project = {
  title: string;
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function AccentBlob({ className }: { className?: string }) {
  // Un “blob” SVG léger, utile pour le côté créatif sans images externes
  return (
    <svg
      className={className}
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(99,102,241,0.55)" />
          <stop offset="55%" stopColor="rgba(16,185,129,0.45)" />
          <stop offset="100%" stopColor="rgba(236,72,153,0.35)" />
        </linearGradient>
      </defs>
      <path
        fill="url(#g)"
        d="M421.5,332Q401,414,325,469.5Q249,525,165.5,476Q82,427,86.5,336.5Q91,246,155,181.5Q219,117,312.5,101Q406,85,424.5,167.5Q443,250,421.5,332Z"
      />
    </svg>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-sm text-black/70 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-black/80" />
        <span className="font-medium">{eyebrow}</span>
      </div>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-black/70">{subtitle}</p>
      )}
    </div>
  );
}

function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-sm text-black/80 shadow-sm">
      {children}
    </span>
  );
}

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-black/10 bg-white/80 shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-black/70 hover:text-black transition"
    >
      {children}
    </a>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition"
    >
      {children}
    </a>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/5 transition"
    >
      {children}
    </a>
  );
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState<
    "Tout" | "Frontend" | "Backend" | "Fullstack"
  >("Tout");

  const projects: Project[] = [
    {
      title: "Dashboard d’app (API + Auth)",
      description:
        "Un dashboard moderne avec authentification, rôle utilisateur, appels API et gestion d’état propre.",
      stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "JWT"],
      links: [
        { label: "Démo", href: "#" },
        { label: "Code", href: "#" },
      ],
    },
    {
      title: "Mini SaaS (CRUD + Paiement)",
      description:
        "CRUD complet, validations, pagination, et base posée pour un modèle SaaS (paiement à venir).",
      stack: ["React", "Express", "Zod", "Prisma", "PostgreSQL"],
      links: [
        { label: "Démo", href: "#" },
        { label: "Code", href: "#" },
      ],
    },
    {
      title: "Site vitrine ultra-rapide",
      description:
        "Landing page performante, responsive, animations subtiles, et accessibilité soignée.",
      stack: ["React", "Tailwind", "Framer Motion"],
      links: [
        { label: "Démo", href: "#" },
        { label: "Code", href: "#" },
      ],
    },
  ];

  const projectTags = useMemo(() => {
    // mapping “simple” pour filtrer sans te compliquer
    return projects.map((p) => {
      const s = p.stack.join(" ").toLowerCase();
      if (s.includes("postgres") && (s.includes("node") || s.includes("express")))
        return "Fullstack";
      if (s.includes("node") || s.includes("express")) return "Backend";
      return "Frontend";
    }) as Array<"Frontend" | "Backend" | "Fullstack">;
  }, [projects]);

  const filteredProjects = projects.filter((_, i) => {
    if (activeFilter === "Tout") return true;
    return projectTags[i] === activeFilter;
  });

  return (
    <div className="min-h-screen bg-[#fbfbfc] text-black">
      {/* Background creative: grille + blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.06)_1px,transparent_0)] [background-size:22px_22px] opacity-60" />
        <AccentBlob className="absolute -top-24 -right-32 h-[420px] w-[420px] blur-2xl opacity-60" />
        <AccentBlob className="absolute -bottom-40 -left-40 h-[520px] w-[520px] blur-2xl opacity-40 rotate-12" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white font-semibold">
              WD
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold">William Dempuré</div>
              <div className="text-xs text-black/60">Développeur Fullstack</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 sm:flex">
            <NavLink href="#projets">Projets</NavLink>
            <NavLink href="#stack">Stack</NavLink>
            <NavLink href="#process">Méthode</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <a
              className="hidden sm:inline-flex items-center rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-black/80 shadow-sm hover:bg-black/5 transition"
              href="#contact"
            >
              Travaillons ensemble
            </a>
          </div>
        </div>
      </header>

      {/* Main */}
      <main id="top" className="relative mx-auto max-w-6xl px-4">
        {/* HERO */}
        <section className="pt-16 sm:pt-20">
          <div className="grid items-center gap-10 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-sm text-black/70 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Disponible — recherche poste fullstack
              </div>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Je crée des apps web{" "}
                <span className="relative">
                  solides
                  <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-emerald-200/80" />
                </span>{" "}
                et{" "}
                <span className="relative">
                  agréables
                  <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-indigo-200/80" />
                </span>{" "}
                à utiliser.
              </h1>

              <p className="mt-4 max-w-xl text-black/70">
                Développeur fullstack orienté produit : UI propre, API robustes,
                base de données bien modélisée, et livraison rapide.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <PrimaryButton href="#projets">Voir mes projets</PrimaryButton>
                <SecondaryButton href="#contact">Me contacter</SecondaryButton>
                <SecondaryButton href="#stack">Ma stack</SecondaryButton>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <Badge>Clean code</Badge>
                <Badge>Perf & DX</Badge>
                <Badge>UI soignée</Badge>
                <Badge>API & DB</Badge>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <Card className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm text-black/60">En ce moment</div>
                    <div className="mt-1 text-lg font-semibold">
                      Je construis des projets “comme en prod”
                    </div>
                    <p className="mt-2 text-sm text-black/70">
                      Auth, validations, logs, tests, CI, déploiement — pour que
                      le code inspire confiance.
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-black text-white grid place-items-center font-semibold">
                    ⚡
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    ["API", "REST/JSON, auth, rôles"],
                    ["Base", "PostgreSQL, Prisma"],
                    ["UI", "Composants réutilisables"],
                    ["Qualité", "Lint, format, tests"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="rounded-2xl border border-black/10 bg-white p-4"
                    >
                      <div className="text-sm font-semibold">{k}</div>
                      <div className="mt-1 text-sm text-black/70">{v}</div>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="absolute -z-10 -bottom-8 -right-6 h-28 w-28 rounded-full bg-emerald-200/70 blur-xl" />
              <div className="absolute -z-10 -top-10 -left-10 h-40 w-40 rounded-full bg-indigo-200/70 blur-xl" />
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="mt-16 sm:mt-20" id="about">
          <SectionTitle
            eyebrow="À propos"
            title="Je transforme des besoins en features, proprement."
            subtitle="Je cherche un poste fullstack. J’aime les produits bien pensés, la qualité, et le pragmatisme."
          />

          <div className="grid gap-6 sm:grid-cols-3">
            <Card className="p-6 sm:col-span-2">
              <p className="text-black/75 leading-relaxed">
                Je développe des applications web de bout en bout : conception
                d’UI, logique métier, APIs, base de données et déploiement.
                <br />
                <br />
                Mon objectif : livrer vite, sans sacrifier la maintenabilité.
                J’accorde beaucoup d’importance à l’expérience utilisateur et à
                la clarté du code.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Badge>Autonome</Badge>
                <Badge>Curieux</Badge>
                <Badge>Rigueur</Badge>
                <Badge>Orientation produit</Badge>
              </div>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-black/60">Raccourcis</div>
              <div className="mt-3 grid gap-2">
                <a
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold hover:bg-black/5 transition"
                  href="#contact"
                >
                  📩 Email
                </a>
                <a
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold hover:bg-black/5 transition"
                  href="#"
                >
                  💼 LinkedIn
                </a>
                <a
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold hover:bg-black/5 transition"
                  href="#"
                >
                  💻 GitHub
                </a>
                <a
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold hover:bg-black/5 transition"
                  href="#"
                >
                  📄 CV (PDF)
                </a>
              </div>
            </Card>
          </div>
        </section>

        {/* STACK */}
        <section className="mt-16 sm:mt-20" id="stack">
          <SectionTitle
            eyebrow="Stack"
            title="Simple, moderne, et orientée production"
            subtitle="Une stack facile à déployer en statique, et évolutive si tu veux ajouter un backend plus tard."
          />

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Frontend",
                items: ["React", "TypeScript", "Tailwind", "Framer Motion"],
              },
              {
                title: "Backend",
                items: ["Node.js", "Express", "REST", "JWT", "Zod"],
              },
              {
                title: "Data & outils",
                items: ["PostgreSQL", "Prisma", "Git", "Docker", "CI (plus tard)"],
              },
            ].map((col) => (
              <Card key={col.title} className="p-6">
                <div className="text-sm text-black/60">{col.title}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {col.items.map((i) => (
                    <Badge key={i}>{i}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mt-16 sm:mt-20" id="projets">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle
              eyebrow="Projets"
              title="Quelques projets qui montrent mon niveau"
              subtitle="2–4 projets max. Chacun doit prouver une compétence."
            />

            <div className="flex flex-wrap gap-2">
              {(["Tout", "Frontend", "Backend", "Fullstack"] as const).map(
                (f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-semibold border shadow-sm transition",
                      activeFilter === f
                        ? "bg-black text-white border-black"
                        : "bg-white border-black/10 text-black/70 hover:bg-black/5"
                    )}
                  >
                    {f}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {filteredProjects.map((p) => (
              <Card key={p.title} className="p-6">
                {/* faux “mockup” sans image */}
                <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-white to-black/5 p-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-300" />
                    <span className="h-3 w-3 rounded-full bg-yellow-300" />
                    <span className="h-3 w-3 rounded-full bg-green-300" />
                    <div className="ml-auto text-xs text-black/50">
                      demo.app
                    </div>
                  </div>
                  <div className="mt-4 h-24 rounded-xl bg-white/70 border border-black/10" />
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="h-10 rounded-xl bg-white/70 border border-black/10" />
                    <div className="h-10 rounded-xl bg-white/70 border border-black/10" />
                    <div className="h-10 rounded-xl bg-white/70 border border-black/10" />
                  </div>
                </div>

                <div className="mt-5">
                  <div className="text-lg font-semibold">{p.title}</div>
                  <p className="mt-2 text-sm text-black/70">{p.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        className="inline-flex items-center rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-black/5 transition"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6 text-sm text-black/60">
            💡 Remplace les liens “#” par tes vrais liens GitHub / démo quand tu
            les as.
          </div>
        </section>

        {/* PROCESS */}
        <section className="mt-16 sm:mt-20" id="process">
          <SectionTitle
            eyebrow="Méthode"
            title="Je livre vite, mais je livre propre"
            subtitle="Une approche simple, compréhensible par un recruteur… et utile en équipe."
          />

          <div className="grid gap-6 sm:grid-cols-4">
            {[
              ["🧩", "Comprendre", "Objectif, contraintes, utilisateurs"],
              ["🧱", "Construire", "Architecture, UI, API, data"],
              ["🧪", "Fiabiliser", "Tests, validations, edge cases"],
              ["🚀", "Livrer", "Déploiement, monitoring, itération"],
            ].map(([icon, t, d]) => (
              <Card key={t} className="p-6">
                <div className="text-2xl">{icon}</div>
                <div className="mt-2 font-semibold">{t}</div>
                <div className="mt-1 text-sm text-black/70">{d}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="mt-16 sm:mt-20 pb-20" id="contact">
          <SectionTitle
            eyebrow="Contact"
            title="On en parle ?"
            subtitle="Un message suffit. Je réponds rapidement."
          />

          <Card className="p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm text-black/60">Email</div>
                <a
                  className="mt-1 inline-block text-xl font-semibold tracking-tight hover:underline"
                  href="mailto:williamdempure@gmail.com"
                >
                  williamdempure@gmail.com
                </a>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-black/5 transition"
                    href="https://www.linkedin.com/in/william-dempure/"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-black/5 transition"
                    href="https://github.com/Dewaxe"
                  >
                    GitHub
                  </a>
                  <a
                    className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-black/5 transition"
                    href="#"
                  >
                    CV PDF
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <PrimaryButton href="mailto:williamdempure@gmail.com">
                  Envoyer un email
                </PrimaryButton>
                <SecondaryButton href="#top">Retour en haut</SecondaryButton>
              </div>
            </div>
          </Card>

          <div className="mt-6 text-xs text-black/50">
            © {new Date().getFullYear()} William Dempuré — Fait avec React + Vite.
          </div>
        </section>
      </main>
    </div>
  );
}
