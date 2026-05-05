"use client";

import { useState } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import StepsSection from "./components/StepsSection";
import DormsSection from "./components/DormsSection";
import ClubsSection from "./components/ClubsSection";
import ScholarshipSection from "./components/ScholarshipSection";
import StudyCalendarSection from "@/app/freshmen/components/StudyCalendarSection";
import NearbyPlacesSection from "@/app/freshmen/components/NearbyPlacesSection";
import YouthInitiativeSection from "@/app/freshmen/components/YouthInitiativeSection";

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