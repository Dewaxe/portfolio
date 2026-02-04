import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
    interface Window {
        goatcounter?: {
            count: (opts?: { path?: string; title?: string; event?: boolean }) => void;
        };
    }
}

export function GoatCounterPageViews() {
    const location = useLocation();

    useEffect(() => {
        if (window.goatcounter?.count) {
            window.goatcounter.count({
                path: location.pathname + location.search,
                title: document.title,
            });
        }
    }, [location]);

    return null;
}
