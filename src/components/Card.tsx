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
                "bg-transparent",
                "hover:bg-white/35 hover:backdrop-blur-xl",
                "dark:hover:bg-slate-800/40",
                "hover:shadow-[0_18px_50px_rgba(2,6,23,0.10)]",
                "dark:hover:shadow-[0_22px_70px_rgba(0,0,0,0.45)]",
                className
            )}
        >
            {children}
        </div>
    );
}
