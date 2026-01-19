import { useEffect, useRef, useState } from "react";

export function useActiveSection(ids: string[]): string {
    const [active, setActive] = useState(ids[0] ?? "");
    const observers = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const els = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        if (!els.length) {
            return;
        }

        observers.current?.disconnect();
        observers.current = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

                if (visible?.target?.id) {
                    setActive(visible.target.id);
                }
            },
            {
                root: null,
                rootMargin: "-20% 0px -65% 0px",
                threshold: [0.1, 0.2, 0.35, 0.5],
            }
        );

        els.forEach((el) => observers.current?.observe(el));

        return () => observers.current?.disconnect();
    }, [ids]);

    return active;
}
