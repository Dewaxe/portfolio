import { cn } from "../utils/cn";

export function Chip({
    children,
    className,
}: {
    children: string;
    className?: string;
}) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
                "bg-sky-500/10 text-sky-700",
                "dark:bg-sky-400/10 dark:text-sky-300",
                className
            )}
        >
            {children}
        </span>
    );
}
