import { useEffect, useMemo, useState } from "react";
import type { Theme } from "../theme/theme";

type Spot = { x: number; y: number; show: boolean };

export function MouseHaloBackground({ theme }: { theme: Theme }) {
    const [spot, setSpot] = useState<Spot>({ x: 0, y: 0, show: false });
    const [coarse, setCoarse] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia?.("(pointer: coarse)");
        if (!mql) return;

        const update = () => setCoarse(mql.matches);
        update();

        const anyMql = mql as any;
        if (anyMql.addEventListener) anyMql.addEventListener("change", update);
        else anyMql.addListener(update);

        return () => {
            if (anyMql.removeEventListener) anyMql.removeEventListener("change", update);
            else anyMql.removeListener(update);
        };
    }, []);

    // Mobile: halo fixe
    useEffect(() => {
        if (!coarse) return;

        const setFixed = () => {
            const x = window.innerWidth / 2;
            const y = window.innerHeight * 0.35;
            setSpot({ x, y, show: true });
        };

        setFixed();
        window.addEventListener("resize", setFixed);

        return () => {
            window.removeEventListener("resize", setFixed);
        };
    }, [coarse]);

    // Desktop: halo suit la souris
    useEffect(() => {
        if (coarse) return;

        let raf = 0;

        const onMove = (e: MouseEvent) => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                setSpot({ x: e.clientX, y: e.clientY, show: true });
            });
        };

        const onLeave = () => setSpot((s) => ({ ...s, show: false }));

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseleave", onLeave);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseleave", onLeave);
        };
    }, [coarse]);

    const background = useMemo(() => {
        if (theme === "dark") {
            return `radial-gradient(720px circle at ${spot.x}px ${spot.y}px, rgba(56,189,248,0.16), rgba(37,99,235,0.10), transparent 62%)`;
        }
        return `radial-gradient(720px circle at ${spot.x}px ${spot.y}px, rgba(56,189,248,0.14), rgba(147,197,253,0.12), transparent 62%)`;
    }, [theme, spot.x, spot.y]);

    return (
        <div className="pointer-events-none fixed inset-0">
            <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                    opacity: spot.show ? 1 : 0,
                    background,
                }}
            />
        </div>
    );
}
