import { cn } from "../utils/cn";

export function Card({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "group rounded-2xl transition",
                "bg-white/35 backdrop-blur-xl",
                "dark:bg-slate-800/40",
                "shadow-[0_18px_50px_rgba(2,6,23,0.10)]",
                "dark:shadow-[0_22px_70px_rgba(0,0,0,0.45)]",
                "sm:bg-transparent sm:backdrop-blur-0",
                "sm:dark:bg-transparent",
                "sm:shadow-none sm:dark:shadow-none",
                "sm:hover:bg-white/35 sm:hover:backdrop-blur-xl",
                "sm:dark:hover:bg-slate-800/40",
                "sm:hover:shadow-[0_18px_50px_rgba(2,6,23,0.10)]",
                "sm:dark:hover:shadow-[0_22px_70px_rgba(0,0,0,0.45)]",
                className
            )}
        >
            {children}
        </div>
    );
}
