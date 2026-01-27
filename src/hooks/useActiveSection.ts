import { useEffect, useRef, useState } from "react";

export function useActiveSection(ids: string[]): string {
    const [active, setActive] = useState(ids[0] ?? "");
    const observers = useRef<IntersectionObserver | null>(null);
    const ratiosRef = useRef<Map<string, number>>(new Map());
    const intersectingRef = useRef<Map<string, boolean>>(new Map());

    useEffect(() => {
        const els = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        if (!els.length) {
            return;
        }

        observers.current?.disconnect();
        ratiosRef.current.clear();
        intersectingRef.current.clear();

        observers.current = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    const id = (e.target as HTMLElement).id;
                    ratiosRef.current.set(id, e.intersectionRatio ?? 0);
                    intersectingRef.current.set(id, e.isIntersecting);
                }

            let bestId = active;
            let bestRatio = -1;

            for (const id of ids) {
                const isIn = intersectingRef.current.get(id) ?? false;
                const r = ratiosRef.current.get(id) ?? 0;
                if (isIn && r > bestRatio) {
                    bestRatio = r;
                    bestId = id;
                }
            }
        if (bestId && bestId !== active) setActive(bestId);
            },
            {
                root: null,
                rootMargin: "-30% 0px -55% 0px",
                threshold: [0, 0.05, 0.1, 0.2, 0.35, 0.5],
            }
        );

        els.forEach((el) => observers.current?.observe(el));
        return () => observers.current?.disconnect();
    }, [ids, active]);

    return active;
}
