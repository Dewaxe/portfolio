import type { Theme } from "../theme/theme";
import { cn } from "../utils/cn";
import { MoonIcon, SunIcon } from "./Icons";

export function ThemeSwitch({
    theme,
    onToggle,
    ariaLabel = "Basculer le thème",
}: {
    theme: Theme;
    onToggle: () => void;
    ariaLabel?: string;
}) {
    const isDark = theme === "dark";

    return (
        <div className="flex items-center gap-3">
            <span className={cn(!isDark ? "text-sky-600 dark:text-sky-300" : "text-slate-500 dark:text-slate-400")}>
                <SunIcon />
            </span>

            <button
                type="button"
                onClick={onToggle}
                aria-label={ariaLabel}
                className={cn(
                    "relative h-7 w-14 rounded-full transition outline-none",
                    "bg-slate-300/80 dark:bg-slate-600/60",
                    "shadow-inner",
                    "focus-visible:ring-2 focus-visible:ring-sky-400/60"
                )}
            >
                <span
                    className={cn(
                        "absolute top-1/2 h-6 w-6 -translate-y-1/2 rounded-full transition",
                        "bg-white shadow-[0_10px_25px_rgba(2,6,23,0.18)]",
                        isDark ? "left-[32px]" : "left-[2px]"
                    )}
                />
            </button>

            <span className={cn(isDark ? "text-sky-600 dark:text-sky-300" : "text-slate-500 dark:text-slate-400")}>
                <MoonIcon />
            </span>
        </div>
    );
}
