import type { ReactNode } from "react";

type IconName =
    | "search"
    | "message-circle"
    | "send"
    | "calendar-days"
    | "map-pin"
    | "qr-code"
    | "laptop"
    | "chevron-left"
    | "chevron-right"
    | "building-2"
    | "file-text"
    | "file-heart"
    | "shield-alert"
    | "calendar"
    | "book-open"
    | "credit-card"
    | "coins"
    | "users"
    | "music"
    | "tent"
    | "briefcase"
    | "rocket"
    | "phone-call"
    | "arrow-right"
    | "arrow-up-right"
    | "clock-3"
    | "building"
    | "graduation-cap"
    | "badge-check"
    | "bell-ring"
    | "user-round"
    | "info"
    | "x";

const iconPaths: Record<IconName, ReactNode> = {
    search: (
        <>
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </>
    ),
    "message-circle": (
        <>
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </>
    ),
    send: (
        <>
            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.5.5 0 0 0-.638-.638l-19 6.5a.5.5 0 0 0-.024.937l7.33 3.141a2 2 0 0 1 1.118 1.118l3.14 7.33Z" />
            <path d="M21.854 2.147 10.146 13.854" />
        </>
    ),
    "calendar-days": (
        <>
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <rect x="7" y="14" width="3" height="3" rx="0.5" />
            <rect x="12" y="14" width="3" height="3" rx="0.5" />
        </>
    ),
    "map-pin": (
        <>
            <path d="M12 21s6-5.3 6-10a6 6 0 0 0-12 0c0 4.7 6 10 6 10z" />
            <circle cx="12" cy="11" r="2.4" />
        </>
    ),
    "qr-code": (
        <>
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <path d="M14 14h3v3h-3zM19 19h2v2h-2zM18 14h3v3h-3z" />
        </>
    ),
    laptop: (
        <>
            <rect x="3" y="4" width="18" height="12" rx="2" />
            <path d="M2 20h20" />
        </>
    ),
    "chevron-left": <path d="M15 18l-6-6 6-6" />,
    "chevron-right": <path d="M9 18l6-6-6-6" />,
    "building-2": (
        <>
            <rect x="4" y="3" width="16" height="18" rx="2" />
            <line x1="8" y1="7" x2="8" y2="7" />
            <line x1="12" y1="7" x2="12" y2="7" />
            <line x1="16" y1="7" x2="16" y2="7" />
            <line x1="8" y1="11" x2="8" y2="11" />
            <line x1="12" y1="11" x2="12" y2="11" />
            <line x1="16" y1="11" x2="16" y2="11" />
            <path d="M9 21v-5h6v5" />
        </>
    ),
    "file-text": (
        <>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <line x1="8" y1="13" x2="16" y2="13" />
            <line x1="8" y1="17" x2="16" y2="17" />
        </>
    ),
    "file-heart": (
        <>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M12 17s-3-2-3-4a2 2 0 0 1 3-1.7A2 2 0 0 1 15 13c0 2-3 4-3 4z" />
        </>
    ),
    "shield-alert": (
        <>
            <path d="M12 2 19 6v6c0 5-3.5 9.4-7 10-3.5-.6-7-5-7-10V6l7-4z" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <circle cx="12" cy="16" r="1" />
        </>
    ),
    calendar: (
        <>
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </>
    ),
    "book-open": (
        <>
            <path d="M2 5c4-2 8-2 12 0v14c-4-2-8-2-12 0z" />
            <path d="M22 5c-4-2-8-2-12 0v14c4-2 8-2 12 0z" />
        </>
    ),
    "credit-card": (
        <>
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
            <line x1="6" y1="16" x2="10" y2="16" />
        </>
    ),
    coins: (
        <>
            <ellipse cx="8" cy="7" rx="5" ry="3" />
            <path d="M3 7v6c0 1.7 2.2 3 5 3s5-1.3 5-3V7" />
            <ellipse cx="16" cy="11" rx="5" ry="3" />
            <path d="M11 11v6c0 1.7 2.2 3 5 3s5-1.3 5-3v-6" />
        </>
    ),
    users: (
        <>
            <circle cx="9" cy="8" r="3" />
            <circle cx="17" cy="9" r="2.5" />
            <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
            <path d="M14 20c0-2 2-3.5 4-3.5s4 1.5 4 3.5" />
        </>
    ),
    music: (
        <>
            <path d="M9 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
            <path d="M19 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
            <path d="M12 5l9-2v12" />
            <path d="M12 5v11" />
        </>
    ),
    tent: (
        <>
            <path d="M3 21 12 4l9 17" />
            <path d="M12 4v17" />
        </>
    ),
    briefcase: (
        <>
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M9 7V5a3 3 0 0 1 6 0v2" />
            <path d="M3 12h18" />
        </>
    ),
    rocket: (
        <>
            <path d="M4.5 16.5c-1.5 1.26-1.5 3.5-1.5 3.5s2.24 0 3.5-1.5L21.3 4.2a2.4 2.4 0 0 0-3.5-3.5z" />
            <path d="m10 10-5 5" />
            <path d="m14 14-5 5" />
            <path d="M14.5 6.5 17.5 9.5" />
        </>
    ),
    "phone-call": (
        <>
            <path d="M22 16.9v2.6a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.7 2h2.6a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.7 2 2 0 0 1-.5 2.1L8.4 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5 12.8 12.8 0 0 0 2.7.7 2 2 0 0 1 1.7 2.2z" />
            <path d="M16 3a5 5 0 0 1 5 5" />
            <path d="M16 7a1 1 0 0 1 1 1" />
        </>
    ),
    "arrow-right": (
        <>
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
        </>
    ),
    "arrow-up-right": (
        <>
            <path d="M7 17 17 7" />
            <path d="M7 7h10v10" />
        </>
    ),
    "clock-3": (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5h4" />
        </>
    ),
    building: (
        <>
            <rect x="4" y="3" width="16" height="18" rx="2" />
            <path d="M9 21v-6h6v6" />
            <line x1="8" y1="7" x2="8" y2="7" />
            <line x1="12" y1="7" x2="12" y2="7" />
            <line x1="16" y1="7" x2="16" y2="7" />
        </>
    ),
    "graduation-cap": (
        <>
            <path d="M22 10 12 5 2 10l10 5 10-5z" />
            <path d="M6 12v5c4 3 8 3 12 0v-5" />
            <path d="M18 12v3" />
        </>
    ),
    "badge-check": (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="M8.5 12.5 11 15l4.5-5" />
        </>
    ),
    "bell-ring": (
        <>
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            <path d="M4 2C2.8 3.7 2 5.7 2 8" />
            <path d="M22 8c0-2.3-.8-4.3-2-6" />
        </>
    ),
    "user-round": (
        <>
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 0 0-16 0" />
        </>
    ),
    info: (
        <>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="8" />
        </>
    ),
    x: (
        <>
            <path d="M18 6 6 18" />
            <path d="M6 6l12 12" />
        </>
    ),
};

export function Icon({
                         name,
                         size = 20,
                         className,
                     }: {
    name: IconName;
    size?: number;
    className?: string;
}) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            {iconPaths[name]}
        </svg>
    );
}