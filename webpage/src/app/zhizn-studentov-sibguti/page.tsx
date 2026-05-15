"use client";

import dynamic from "next/dynamic";
import SectionLoader from "@/app/components/SectionLoader";

const QuickStart = dynamic(() => import("./сomponents/QuickStart"), {
    loading: () => <SectionLoader />,
    ssr: true,
});

const CultureSection = dynamic(() => import("./сomponents/CultureSection"), {
    loading: () => <SectionLoader />,
    ssr: true,
});

const SportSection = dynamic(() => import("./сomponents/SportSection"), {
    loading: () => <SectionLoader />,
    ssr: true,
});

const FoodSection = dynamic(() => import("./сomponents/FoodSection"), {
    loading: () => <SectionLoader />,
    ssr: true,
});

const HealthSection = dynamic(() => import("./сomponents/HealthSection"), {
    loading: () => <SectionLoader />,
    ssr: true,
});

export default function StudentsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-[var(--background)] pb-14 overflow-hidden selection:bg-[var(--accent)] selection:text-white text-[var(--foreground)]">
            <QuickStart />
            <CultureSection />
            <SportSection />
            <FoodSection />
            <HealthSection />
        </main>
    );
}
