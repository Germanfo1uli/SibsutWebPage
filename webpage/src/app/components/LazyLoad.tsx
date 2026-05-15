"use client";

import { useEffect, useRef, ReactNode, useState } from "react";

interface LazyLoadProps {
    children: ReactNode;
    fallback?: ReactNode;
    rootMargin?: string;
}

export default function LazyLoad({
    children,
    fallback = null,
    rootMargin = "50px",
}: LazyLoadProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { rootMargin }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [rootMargin]);

    return <div ref={ref}>{isVisible ? children : fallback}</div>;
}
