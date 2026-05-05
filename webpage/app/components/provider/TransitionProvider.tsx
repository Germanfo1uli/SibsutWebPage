"use client";

import React, { createContext, useContext, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import loaderGif from "../../../../../SibsutWebPage/webpage/app/components/asset/loader.gif";

const TransitionContext = createContext<{ navigate: (href: string) => void }>({ navigate: () => {} });

export function TransitionProvider({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState<"idle" | "closing" | "loading" | "hiding" | "opening">("idle");
    const router = useRouter();
    const pathname = usePathname();

    const navigate = (href: string) => {
        if (state !== "idle" || pathname === href) return;

        setState("closing");

        setTimeout(() => {
            setState("loading");
            router.push(href);

            setTimeout(() => {
                setState("hiding");

                setTimeout(() => {
                    setState("opening");

                    setTimeout(() => {
                        setState("idle");
                    }, 700);
                }, 500);
            }, 1500);
        }, 700);
    };

    return (
        <TransitionContext.Provider value={{ navigate }}>
            <div className={state !== "idle" ? "fixed inset-0 overflow-hidden" : ""}>
                {children}
            </div>

            <div
                className={`fixed inset-0 z-[9999] flex pointer-events-none overflow-hidden ${
                    state === "idle" ? "invisible" : "visible"
                }`}
            >
                <div
                    className={`h-full w-1/2 bg-[#003d84] transition-transform duration-700 ease-in-out ${
                        state === "closing" || state === "loading" || state === "hiding"
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }`}
                />
                <div
                    className={`h-full w-1/2 bg-[#003d84] transition-transform duration-700 ease-in-out ${
                        state === "closing" || state === "loading" || state === "hiding"
                            ? "translate-x-0"
                            : "translate-x-full"
                    }`}
                />

                <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                        state === "loading" ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image
                        src={loaderGif}
                        alt="Loading"
                        width={120}
                        height={120}
                        priority
                        unoptimized
                    />
                </div>
            </div>
        </TransitionContext.Provider>
    );
}

export const useTransition = () => useContext(TransitionContext);