import { Link, useLocation } from "react-router-dom";
import type { Locale } from "../i18n";
import { toLocalePathname } from "../i18n";
import { cn } from "../utils/cn";

type Labels = {
    fr: string;
    en: string;
};

export function LocaleSwitch({
    locale,
    labels,
    ariaLabel,
}: {
    locale: Locale;
    labels: Labels;
    ariaLabel: string;
}) {
    const location = useLocation();

    const buildTarget = (targetLocale: Locale) => {
        const pathname = toLocalePathname(location.pathname, targetLocale);
        return `${pathname}${location.search}${location.hash}`;
    };

    return (
        <div
            aria-label={ariaLabel}
            className={cn(
                "inline-flex items-center rounded-full border border-slate-200/70 bg-white/60 p-1 text-xs font-semibold",
                "shadow-sm backdrop-blur-md",
                "dark:border-slate-700/70 dark:bg-slate-800/50"
            )}
        >
            <Link
                to={buildTarget("fr")}
                aria-current={locale === "fr" ? "page" : undefined}
                className={cn(
                    "rounded-full px-2 py-1 transition-colors",
                    locale === "fr"
                        ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                        : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                )}
            >
                <span className="sr-only">{labels.fr}</span>
                <span
                    aria-hidden="true"
                    className="inline-flex h-[1.1rem] w-[2ch] items-center justify-center"
                >
                    <svg
                        viewBox="0 0 24 16"
                        className="block h-[0.95rem] w-[1.4rem] translate-y-[1px] rounded-[0.125rem] shadow-sm"
                        role="img"
                        focusable="false"
                    >
                        <rect width="8" height="16" x="0" y="0" fill="#1b4db1" />
                        <rect width="8" height="16" x="8" y="0" fill="#ffffff" />
                        <rect width="8" height="16" x="16" y="0" fill="#d12d2a" />
                    </svg>
                </span>
            </Link>
            <Link
                to={buildTarget("en")}
                aria-current={locale === "en" ? "page" : undefined}
                className={cn(
                    "rounded-full px-2 py-1 transition-colors",
                    locale === "en"
                        ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                        : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                )}
            >
                <span className="sr-only">{labels.en}</span>
                <span
                    aria-hidden="true"
                    className="inline-flex h-[1.1rem] w-[2ch] items-center justify-center"
                >
                    <svg
                        viewBox="0 0 48 32"
                        className="block h-[0.95rem] w-[1.4rem] translate-y-[1px] rounded-[0.125rem] shadow-sm"
                        role="img"
                        focusable="false"
                    >
                        <defs>
                            <clipPath id="clip-us">
                                <polygon points="0,0 48,0 0,32" />
                            </clipPath>
                            <clipPath id="clip-uk">
                                <polygon points="48,0 48,32 0,32" />
                            </clipPath>
                        </defs>
                        <g clipPath="url(#clip-us)">
                            <rect width="48" height="32" x="0" y="0" fill="#ffffff" />
                            <rect width="48" height="2.46" x="0" y="0" fill="#b22234" />
                            <rect width="48" height="2.46" x="0" y="4.92" fill="#b22234" />
                            <rect width="48" height="2.46" x="0" y="9.84" fill="#b22234" />
                            <rect width="48" height="2.46" x="0" y="14.76" fill="#b22234" />
                            <rect width="48" height="2.46" x="0" y="19.68" fill="#b22234" />
                            <rect width="48" height="2.46" x="0" y="24.6" fill="#b22234" />
                            <rect width="48" height="2.46" x="0" y="29.52" fill="#b22234" />
                            <rect width="19.2" height="17.23" x="0" y="0" fill="#3c3b6e" />
                            <circle cx="2.4" cy="2.1" r="0.6" fill="#ffffff" />
                            <circle cx="5.2" cy="2.1" r="0.6" fill="#ffffff" />
                            <circle cx="8" cy="2.1" r="0.6" fill="#ffffff" />
                            <circle cx="10.8" cy="2.1" r="0.6" fill="#ffffff" />
                            <circle cx="13.6" cy="2.1" r="0.6" fill="#ffffff" />
                            <circle cx="16.4" cy="2.1" r="0.6" fill="#ffffff" />
                            <circle cx="3.8" cy="4.7" r="0.6" fill="#ffffff" />
                            <circle cx="6.6" cy="4.7" r="0.6" fill="#ffffff" />
                            <circle cx="9.4" cy="4.7" r="0.6" fill="#ffffff" />
                            <circle cx="12.2" cy="4.7" r="0.6" fill="#ffffff" />
                            <circle cx="15" cy="4.7" r="0.6" fill="#ffffff" />
                            <circle cx="2.4" cy="7.3" r="0.6" fill="#ffffff" />
                            <circle cx="5.2" cy="7.3" r="0.6" fill="#ffffff" />
                            <circle cx="8" cy="7.3" r="0.6" fill="#ffffff" />
                            <circle cx="10.8" cy="7.3" r="0.6" fill="#ffffff" />
                            <circle cx="13.6" cy="7.3" r="0.6" fill="#ffffff" />
                            <circle cx="16.4" cy="7.3" r="0.6" fill="#ffffff" />
                            <circle cx="3.8" cy="9.9" r="0.6" fill="#ffffff" />
                            <circle cx="6.6" cy="9.9" r="0.6" fill="#ffffff" />
                            <circle cx="9.4" cy="9.9" r="0.6" fill="#ffffff" />
                            <circle cx="12.2" cy="9.9" r="0.6" fill="#ffffff" />
                            <circle cx="15" cy="9.9" r="0.6" fill="#ffffff" />
                            <circle cx="2.4" cy="12.5" r="0.6" fill="#ffffff" />
                            <circle cx="5.2" cy="12.5" r="0.6" fill="#ffffff" />
                            <circle cx="8" cy="12.5" r="0.6" fill="#ffffff" />
                            <circle cx="10.8" cy="12.5" r="0.6" fill="#ffffff" />
                            <circle cx="13.6" cy="12.5" r="0.6" fill="#ffffff" />
                            <circle cx="16.4" cy="12.5" r="0.6" fill="#ffffff" />
                            <circle cx="3.8" cy="15.1" r="0.6" fill="#ffffff" />
                            <circle cx="6.6" cy="15.1" r="0.6" fill="#ffffff" />
                            <circle cx="9.4" cy="15.1" r="0.6" fill="#ffffff" />
                            <circle cx="12.2" cy="15.1" r="0.6" fill="#ffffff" />
                            <circle cx="15" cy="15.1" r="0.6" fill="#ffffff" />
                        </g>
                        <g clipPath="url(#clip-uk)">
                            <rect width="48" height="32" x="0" y="0" fill="#012169" />
                            <polygon points="0,0 6,0 48,26 48,32 42,32 0,6" fill="#ffffff" />
                            <polygon points="48,0 42,0 0,26 0,32 6,32 48,6" fill="#ffffff" />
                            <polygon points="0,0 3,0 48,29 48,32 45,32 0,3" fill="#c8102e" />
                            <polygon points="48,0 45,0 0,29 0,32 3,32 48,3" fill="#c8102e" />
                            <rect width="48" height="8" x="0" y="12" fill="#ffffff" />
                            <rect width="8" height="32" x="20" y="0" fill="#ffffff" />
                            <rect width="48" height="4" x="0" y="14" fill="#c8102e" />
                            <rect width="4" height="32" x="22" y="0" fill="#c8102e" />
                        </g>
                    </svg>
                </span>
            </Link>
        </div>
    );
}
