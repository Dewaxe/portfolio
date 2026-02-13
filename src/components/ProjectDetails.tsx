import { useId, useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../utils/cn";

type ProjectDetailsProps = {
    description: string;
    details?: string;
    seeMoreLabel: string;
    seeLessLabel: string;
    descriptionClassName?: string;
    buttonClassName?: string;
    panelClassName?: string;
};

const renderInlineDetails = (text: string) => {
    const parts: ReactNode[] = [];
    const regex = /__\*\*([^*]+)\*\*__|\*\*__([^_]+)__\*\*|__([^_]+)__|\*\*([^*]+)\*\*/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }

        if (match[1]) {
            parts.push(
                <strong key={`bu-${match.index}`} className="font-semibold text-[rgb(var(--fg-strong))]">
                    <span className="underline">{match[1]}</span>
                </strong>
            );
        } else if (match[2]) {
            parts.push(
                <strong key={`bu-${match.index}`} className="font-semibold text-[rgb(var(--fg-strong))]">
                    <span className="underline">{match[2]}</span>
                </strong>
            );
        } else if (match[3]) {
            parts.push(
                <span key={`u-${match.index}`} className="underline">
                    {match[3]}
                </span>
            );
        } else if (match[4]) {
            parts.push(
                <strong key={`b-${match.index}`} className="font-semibold text-[rgb(var(--fg-strong))]">
                    {match[4]}
                </strong>
            );
        }

        lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return parts;
};

const renderDetails = (details: string) => {
    const lines = details.split("\n");
    const blocks: Array<{ type: "paragraph"; text: string } | { type: "list"; items: string[] }> = [];
    let listBuffer: string[] = [];

    const flushList = () => {
        if (listBuffer.length > 0) {
            blocks.push({ type: "list", items: listBuffer });
            listBuffer = [];
        }
    };

    for (const line of lines) {
        const trimmed = line.trim();

        if (!trimmed) {
            flushList();
            continue;
        }

        if (/^[-*]\s+/.test(trimmed)) {
            listBuffer.push(trimmed.replace(/^[-*]\s+/, ""));
            continue;
        }

        flushList();
        blocks.push({ type: "paragraph", text: line });
    }

    flushList();

    return blocks.map((block, index) => {
        if (block.type === "list") {
            return (
                <ul key={`list-${index}`} className="list-disc space-y-1 pl-5">
                    {block.items.map((item, itemIndex) => (
                        <li key={`item-${index}-${itemIndex}`}>{renderInlineDetails(item)}</li>
                    ))}
                </ul>
            );
        }

        return (
            <p key={`p-${index}`} className="whitespace-pre-line">
                {renderInlineDetails(block.text)}
            </p>
        );
    });
};

export function ProjectDetails({
    description,
    details,
    seeMoreLabel,
    seeLessLabel,
    descriptionClassName,
    buttonClassName,
    panelClassName,
}: ProjectDetailsProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const detailsId = useId();
    const detailsText = details?.trim() ?? "";
    const hasDetails = detailsText.length > 0;

    return (
        <>
            <p
                className={cn(
                    "whitespace-pre-line text-sm leading-relaxed text-[rgba(var(--muted),0.95)]",
                    descriptionClassName
                )}
            >
                {description}
                {hasDetails && (
                    <>
                        {" "}
                        <button
                            type="button"
                            onClick={() => setIsExpanded((prev) => !prev)}
                            aria-expanded={isExpanded}
                            aria-controls={detailsId}
                            className={cn(
                                "inline-flex items-center gap-2 rounded-xl px-3 py-1.5 align-middle text-xs font-semibold transition-colors",
                                "text-[rgb(var(--fg-strong))] hover:text-[rgb(var(--accent))]",
                                buttonClassName
                            )}
                        >
                            {isExpanded ? seeLessLabel : seeMoreLabel}
                            <span className="text-[0.9rem] leading-none -ml-1">
                                {isExpanded ? "▴" : "▾"}
                            </span>
                        </button>
                    </>
                )}
            </p>

            {hasDetails && (
                <div id={detailsId} role="region">
                    <AnimatePresence initial={false}>
                        {isExpanded && (
                            <motion.div
                                key={`${detailsId}-content`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="overflow-hidden"
                            >
                                <div
                                    className={cn(
                                        "mt-3 rounded-lg border border-slate-200/70 bg-transparent",
                                        "p-3 text-sm leading-relaxed text-[rgba(var(--muted),0.95)]",
                                        "dark:border-slate-700/70",
                                        panelClassName
                                    )}
                                >
                                    <div className="space-y-2">{renderDetails(detailsText)}</div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}
        </>
    );
}
