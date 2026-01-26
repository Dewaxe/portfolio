export type Theme = "light" | "dark";

const KEY = "theme";

export function getInitialTheme(): Theme {
    const saved = localStorage.getItem(KEY) as Theme | null;
    if (saved === "light" || saved === "dark") {
        return saved;
    }

    const prefersLight =
        window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;

    return prefersLight ? "light" : "dark";
}

export function applyTheme(theme: Theme): void {
    const root = document.documentElement;
    if (theme === "dark") {
        root.classList.add("dark");
    } else {
        root.classList.remove("dark");
    }
}

export function saveTheme(theme: Theme): void {
    localStorage.setItem(KEY, theme);
}
