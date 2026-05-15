"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import SectionLoader from "@/app/components/SectionLoader";

const StepsSection = dynamic(() => import("./components/StepsSection"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const DormsSection = dynamic(() => import("./components/DormsSection"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const ClubsSection = dynamic(() => import("./components/ClubsSection"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const ScholarshipSection = dynamic(() => import("./components/ScholarshipSection"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const StudyCalendarSection = dynamic(() => import("./components/StudyCalendarSection"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const NearbyPlacesSection = dynamic(() => import("./components/NearbyPlacesSection"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const YouthInitiativeSection = dynamic(() => import("./components/YouthInitiativeSection"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

export default function ApplicantPortal() {

    const [activeStep, setActiveStep] = useState(1);

    return (
        <main className="relative min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)]/30">
            <div className="relative z-10">
                <Navigation activeStep={activeStep} setActiveStep={setActiveStep} />
                <HeroSection />
                <StepsSection />
                <DormsSection/>
                <StudyCalendarSection/>
                <ClubsSection />
                <ScholarshipSection />
                <NearbyPlacesSection/>
                <YouthInitiativeSection/>
            </div>


            <style jsx global>{`
                section {
                    position: relative;
                    z-index: 10;
                }
            `}</style>
        </main>
    );
}