type ExternalIconProps = {
  trigger?: "card" | "external";
};

export function ExternalIcon({ trigger = "external" }: ExternalIconProps) {
    const hoverClass =
        trigger === "card"
            ? "group-hover:translate-x-1 group-hover:-translate-y-1"
            : "group-hover/external:translate-x-1 group-hover/external:-translate-y-1";

    return (
        <svg
            aria-hidden
            viewBox="0 0 24 24"
            className={`
                ml-1 h-4 w-4
                text-current
                transition-transform
                ${hoverClass}
            `}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
        </svg>
    );
}


export function GithubIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
                fill="currentColor"
                d="M12 .5A11.5 11.5 0 0 0 8.36 23c.58.1.79-.25.79-.56v-2.1c-3.22.7-3.9-1.38-3.9-1.38-.53-1.33-1.3-1.69-1.3-1.69-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.1-.76.4-1.26.73-1.55-2.57-.29-5.27-1.29-5.27-5.73 0-1.27.45-2.32 1.2-3.14-.12-.3-.52-1.5.12-3.12 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.83 0c2.22-1.51 3.2-1.2 3.2-1.2.64 1.62.24 2.82.12 3.12.75.82 1.2 1.87 1.2 3.14 0 4.45-2.7 5.44-5.28 5.73.41.35.78 1.05.78 2.12v3.14c0 .31.21.66.8.56A11.5 11.5 0 0 0 12 .5Z"
            />
        </svg>
    );
}

export function LinkedinIcon() {
    return (
        <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
            fillRule="evenodd"
        >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
    );
}

export function MailIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
                fill="currentColor"
                d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.2-8 5.1-8-5.1V6l8 5.1L20 6v2.2Z"
            />
        </svg>
    );
}

export function SunIcon() {
    return (
        <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="M4.93 4.93l1.41 1.41" />
            <path d="M17.66 17.66l1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="M4.93 19.07l1.41-1.41" />
            <path d="M17.66 6.34l1.41-1.41" />
        </svg>
    );
}

export function MoonIcon() {
    return (
        <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
    );
}


