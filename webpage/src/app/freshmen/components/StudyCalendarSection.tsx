"use client";

import {
    LuCalendarDays,
    LuClock,
    LuTimer,
    LuGraduationCap,
    LuRotateCcw,
    LuTriangleAlert,
    LuZap,
    LuBellRing,
    LuUserCheck
} from "react-icons/lu";

export default function StudyCalendarSection() {
    const scheduleInfo = [
        {
            icon: LuClock,
            title: "Одна пара",
            desc: "Длится полтора часа с коротким перерывом пять минут."
        },
        {
            icon: LuTimer,
            title: "Перемены",
            desc: "Между парами предусмотрены перерывы в 10 минут. В обеденное время 30 минут."
        },
        {
            icon: LuRotateCcw,
            title: "Потеря потерь",
            desc: "Если не повезло на экзамене, у тебя есть шансы исправить оценку на пересдачах."
        }
    ];

    return (
        <section id="calendar" className="py-20">
            <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
                <div className="relative overflow-hidden rounded-[40px] bg-white p-6 md:p-12 lg:p-16 border-4 border-[var(--foreground)] shadow-[12px_12px_0px_0px_var(--foreground)]">

                    <div className="relative z-10 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="inline-block px-4 py-1 mb-6 bg-[var(--accent)] text-white font-black uppercase tracking-widest -rotate-2 border-2 border-[var(--foreground)]">
                                Уровень 04 / Учебный ритм
                            </div>
                            <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-none uppercase text-[var(--foreground)]">
                                КАЛЕНДАРЬ <span className="comic-title text-[var(--accent)]">УЧЁБЫ</span>
                            </h2>
                        </div>
                    </div>

                    <div className="mb-12 bg-[var(--accent)] border-4 border-[var(--foreground)] p-8 shadow-[8px_8px_0px_0px_var(--foreground)] text-white relative overflow-hidden group">
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                            <div className="bg-white p-4 border-4 border-[var(--foreground)] rotate-3 group-hover:rotate-0 transition-transform">
                                <LuUserCheck size={48} className="text-[var(--accent)]" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-black uppercase leading-none mb-2">А ГДЕ ЖЕ МОЁ РАСПИСАНИЕ?</h3>
                                <p className="text-lg font-bold uppercase tracking-tight opacity-90 max-w-2xl">
                                    Не паникуй! Подробное расписание твоих занятий <br/> <span className="underline decoration-4 underline-offset-4">тебе объяснит твой куратор</span> на первой встрече.
                                </p>
                            </div>
                        </div>
                        <LuCalendarDays size={150} className="absolute -right-10 -bottom-10 opacity-10 -rotate-12" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {scheduleInfo.map((info, i) => (
                            <div key={i} className="bg-white border-4 border-[var(--foreground)] p-8 shadow-[6px_6px_0px_0px_var(--accent)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_var(--accent)] transition-all group">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center bg-[var(--foreground)] text-white group-hover:bg-[var(--accent)] transition-colors border-2 border-[var(--foreground)]">
                                    <info.icon size={32} />
                                </div>
                                <h4 className="text-xl font-black uppercase mb-4 text-[var(--foreground)]">{info.title}</h4>
                                <p className="text-sm font-bold opacity-70 leading-relaxed text-[var(--foreground)]">{info.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[var(--accent)] border-4 border-[var(--foreground)] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[12px_12px_0px_0px_var(--foreground)] relative overflow-visible group">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24" />
                        <div className="flex items-center gap-8 relative z-10 p-8">
                            <div className="hidden md:flex h-16 w-16 items-center justify-center bg-white text-[var(--accent)] border-4 border-[var(--foreground)] rotate-12 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-18">
                                <LuGraduationCap size={48} className="text-[var(--accent)]" />
                            </div>
                            <div className="text-white">
                                <h4 className="text-3xl font-black uppercase italic tracking-tighter leading-none mb-2">ГЛАВНЫЙ БОСС: СЕССИЯ</h4>
                                <p className="text-sm font-black uppercase tracking-tight max-w-2xl leading-tight opacity-90">
                                    В конце каждого семестра тебя ждет сессия. Это время экзаменов и зачетов.
                                    Закроешь всё вовремя — получишь стипендию и спокойные каникулы.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}