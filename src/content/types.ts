export type SocialIconKey = "github" | "linkedin" | "email";

export type Social = {
    label: string;
    href: string;
    iconKey: SocialIconKey;
};

export type Experience = {
    period: string;
    role: string;
    company: string;
    companyUrl?: string;
    summary: string;
    bullets: string[];
    tech: string[];
};

export type ProjectLink = {
    label: string;
    href: string;
};

export type ProjectImage = {
    src: string;
    alt: string;
};

export type Project = {
    name: string;
    description: string;
    tech: string[];
    links: ProjectLink[];
    featured?: boolean;
    image?: ProjectImage;
    year: string;
};

export type Profile = {
    initials: string;
    name: string;
    title1: string;
    title2: string;
    blurb: string;
    email: string;
};

export type Content = {
    profile: Profile;
    socials: Social[];
    experiences: Experience[];
    projects: Project[];
    about: string[];
};

export type ExperienceBase = {
    companyUrl?: string;
    tech: string[];
};

export type ProjectBase = {
    tech: string[];
    links: ProjectLink[];
    featured?: boolean;
    image?: ProjectImage;
    year: string;
};
