import { useEffect, useState } from "react";
import type { Theme } from "../theme/theme";

export function MouseHaloBackground({ theme }: { theme: Theme }) {
    const [spot, setSpot] = useState({ x: 0, y: 0, show: false });

    useEffect(() => {
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
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0">
            <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                    opacity: spot.show ? 1 : 0,
                    background:
                        theme === "dark"
                            ? `radial-gradient(720px circle at ${spot.x}px ${spot.y}px, rgba(56,189,248,0.16), rgba(37,99,235,0.10), transparent 62%)`
                            : `radial-gradient(720px circle at ${spot.x}px ${spot.y}px, rgba(56,189,248,0.14), rgba(147,197,253,0.12), transparent 62%)`,
                }}
            />
        </div>
    );
}
