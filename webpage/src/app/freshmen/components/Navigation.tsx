"use client";

export default function Navigation({
    activeStep,
    setActiveStep,
}: {
    activeStep: number;
    setActiveStep: (step: number) => void;
}) {
    return (
        <nav className="hidden md:flex fixed left-1/2 top-8 z-50 -translate-x-1/2 items-center gap-1 rounded-full border border-[var(--muted-foreground)]/20 bg-[color-mix(in_srgb,var(--card)_94%,var(--background)_6%)] px-2 py-2 backdrop-blur-2xl">
            {[1, 2, 3, 4].map((step) => (
                <button
                    key={step}
                    onClick={() => {
                        const section = ["hero", "steps", "dorms", "clubs"][step - 1];
                        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
                        setActiveStep(step);
                    }}
                    className={`flex h-10 items-center gap-2 rounded-full px-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all ${activeStep === step ? "bg-[var(--primary-foreground)] text-[var(--primary)] shadow-lg" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}`}
                >
                    Step 0{step}
                </button>
            ))}
        </nav>
    );
}
