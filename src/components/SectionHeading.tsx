export function SectionHeading({ title }: { title: string }) {
    return (
        <h2 className="text-xs font-bold tracking-[0.28em] text-[rgba(var(--muted-2),0.95)]">
            {title}
        </h2>
    );
}
