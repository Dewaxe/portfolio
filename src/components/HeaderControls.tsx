import type { Locale } from "../i18n";
import type { Theme } from "../theme/theme";
import { cn } from "../utils/cn";
import { LocaleSwitch } from "./LocaleSwitch";
import { ThemeSwitch } from "./ThemeSwitch";

export function HeaderControls({
    theme,
    onToggleTheme,
    locale,
    languageShortLabels,
    languageToggleLabel,
    themeToggleLabel,
    className,
}: {
    theme: Theme;
    onToggleTheme: () => void;
    locale: Locale;
    languageShortLabels: { fr: string; en: string };
    languageToggleLabel: string;
    themeToggleLabel: string;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "absolute right-4 top-4 z-50 flex items-center gap-3",
                className
            )}
        >
            <LocaleSwitch
                locale={locale}
                labels={languageShortLabels}
                ariaLabel={languageToggleLabel}
            />
            <ThemeSwitch
                theme={theme}
                onToggle={onToggleTheme}
                ariaLabel={themeToggleLabel}
            />
        </div>
    );
}
