"use client";

import Image from "next/image";
import nav1 from "@/assets/asset_nav1.jpg";
import nav2 from "@/assets/asset_nav2.jpg";
import nav3 from "@/assets/asset_nav3.jpg";
import nav4 from "@/assets/asset_nav4.jpg";
import nav5 from "@/assets/asset_nav5.jpg";

export default function HeroSection() {
    const levels = [
        {
            number: "01",
            title: "Первые шаги",
            desc: "Чек-лист и документы",
            id: "steps",
            image: nav1
        },
        {
            number: "02",
            title: "Твой уголок",
            desc: "Всё об общежитии",
            id: "dorms",
            image: nav2
        },
        {
            number: "03",
            title: "Календарь учёбы",
            desc: "Расписание и сессии",
            id: "calendar",
            image: nav3
        },
        {
            number: "04",
            title: "Чем заняться",
            desc: "Студжизнь и клубы",
            id: "clubs",
            image: nav4
        },
        {
            number: "05",
            title: "Всё о стипендии",
            desc: "Деньги и бонусы",
            id: "scholarship",
            image: nav5
        }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full overflow-hidden bg-white pt-8 sm:pt-12 md:pt-24 pb-8 sm:pb-12 md:pb-24">
            <div className="mx-auto w-full max-w-[1400px] px-3 sm:px-4 md:px-8 lg:px-12">

                <div className="flex flex-col items-center text-center mb-8 sm:mb-12 md:mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[140px] font-black uppercase tracking-tighter leading-[0.85] max-w-5xl">
                        ТВОЙ <span className="comic-title italic">СТАРТ</span>
                        <br />
                        <span className="normal-case">В СибГУТИ</span>
                    </h1>
                    <p className="mt-4 sm:mt-8 md:mt-12 text-xs sm:text-sm md:text-lg lg:text-xl font-bold uppercase leading-snug italic opacity-70 max-w-xl sm:max-w-2xl px-2">
                        Мы собрали всё, что нужно знать первокурснику в одном месте. Проходи уровни, получай инфу и врывайся в студенчество.
                    </p>
                </div>

                <div className="mt-6 sm:mt-10 md:mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
                    {levels.map((level) => (
                        <button
                            key={level.number}
                            onClick={() => scrollToSection(level.id)}
                            className="group relative h-[170px] sm:h-[180px] md:h-[240px] lg:h-[380px] w-full overflow-hidden border-2 md:border-4 border-[var(--foreground)] bg-[var(--card)] transition-all hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[4px_4px_0px_0px_var(--accent)] sm:hover:shadow-[8px_8px_0px_0px_var(--accent)] md:hover:shadow-[12px_12px_0px_0px_var(--accent)] flex flex-col"
                        >
                            <Image
                                src={level.image}
                                alt={level.title}
                                fill
                                priority={true}
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                className="object-cover object-center opacity-70 sm:opacity-50 grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)] via-[var(--foreground)]/40 to-transparent opacity-80 sm:opacity-90 transition-opacity duration-500 group-hover:opacity-50" />

                            <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-3 md:p-6 text-left z-20">
                                <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black italic opacity-30 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all text-white">
                                    {level.number}
                                </div>
                                <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mt-auto">
                                    <h3 className="text-base sm:text-base md:text-2xl lg:text-3xl font-black uppercase leading-none tracking-tighter text-white group-hover:text-[var(--accent)] transition-colors text-left">
                                        {level.title}
                                    </h3>
                                    <p className="mt-1 sm:mt-1 md:mt-2 text-[8px] sm:text-[9px] md:text-xs font-bold uppercase tracking-tight sm:tracking-widest text-white/90 transition-opacity duration-300 hidden sm:block text-left">
                                        {level.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 h-1.5 md:h-2 w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full z-30" />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}