"use client";

import QuickStart from "./_components/QuickStart";
import FoodSection from "./_components/FoodSection";
import HealthSection from "./_components/HealthSection";
import SportSection from "./_components/SportSection";
import CultureSection from "./_components/CultureSection";

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