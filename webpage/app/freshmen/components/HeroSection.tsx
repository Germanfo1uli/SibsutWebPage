"use client";

import Image from "next/image";
import { LuArrowDown } from "react-icons/lu";
import nav1 from "@/app/components/asset2/asset_nav1.jpg";
import nav2 from "@/app/components/asset2/asset_nav2.jpg";
import nav3 from "@/app/components/asset2/asset_nav3.jpg";
import nav4 from "@/app/components/asset2/asset_nav4.jpg";
import nav5 from "@/app/components/asset2/asset_nav5.jpg";

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
            desc: "Студ жизнь и клубы",
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
        <section className="relative w-full overflow-hidden bg-white pt-24 md:pt-32 pb-10 md:pb-20">
            <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12">
                <div className="relative z-10 flex flex-col items-start lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-4xl">
                        <div className="inline-block px-4 py-1 mb-6 bg-[var(--accent)] text-[var(--background)] font-black uppercase tracking-widest -rotate-2 border-2 border-[var(--foreground)]">
                            Справочник абитуриенту
                        </div>
                        <h1 className="text-6xl font-black uppercase tracking-tighter sm:text-8xl lg:text-[160px] leading-[0.85]">
                            ТВОЙ <span className="comic-title italic">СТАРТ</span> <br />
                            <span className="normal-case">В СибГУТИ</span>
                        </h1>
                        <p className="mt-12 max-w-2xl text-xl font-bold uppercase leading-tight italic opacity-70">
                            Мы собрали всё, что нужно знать первокурснику <br /> в одном месте. <br />
                            Проходи уровни, получай инфу и врывайся <br /> в студенчество.
                        </p>
                    </div>

                    <div className="mt-12 lg:mt-0">
                        <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-[var(--foreground)] bg-[var(--accent)] shadow-[8px_8px_0px_0px_var(--foreground)] animate-bounce">
                            <LuArrowDown size={48} className="text-[var(--background)]" />
                        </div>
                    </div>
                </div>

                <div className="mt-16 md:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {levels.map((level) => (
                        <button
                            key={level.number}
                            onClick={() => scrollToSection(level.id)}
                            className="group relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[450px] w-full overflow-hidden border-4 border-[var(--foreground)] bg-[var(--card)] transition-all hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_var(--accent)] flex flex-col"
                        >
                            <Image
                                src={level.image}
                                alt={level.title}
                                fill
                                priority={true}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                                className="object-cover object-center opacity-50 grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)] via-[var(--foreground)]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-50" />

                            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 text-left z-20">
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-black italic opacity-30 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all text-white">
                                    {level.number}
                                </div>
                                <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mt-auto">
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase leading-none tracking-tighter text-white group-hover:text-[var(--accent)] transition-colors">
                                        {level.title}
                                    </h3>
                                    <p className="mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/90 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {level.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 h-2 w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full z-30" />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}