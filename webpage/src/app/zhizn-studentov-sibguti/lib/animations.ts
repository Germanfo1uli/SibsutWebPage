import { Variants } from "framer-motion";

export const slideVariants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.9,
        skewX: direction > 0 ? 10 : -10,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        scale: 1,
        skewX: 0,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1] as const
        },
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.9,
        skewX: direction < 0 ? 10 : -10,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1] as const
        },
    }),
};