"use client";

import { LuCalendarDays, LuClock, LuTimer, LuGraduationCap, LuRotateCcw, LuUserCheck } from "react-icons/lu";

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
        <section id="calendar" className="py-12 md:py-20">
            <div className="mx-auto w-full max-w-[1400px] px-3 sm:px-4 md:px-8">
                <div className="relative overflow-hidden rounded-[20px] sm:rounded-[40px] bg-white p-4 sm:p-6 md:p-12 lg:p-16 border-2 sm:border-4 border-[var(--foreground)] shadow-[6px_6px_0px_0px_var(--foreground)] sm:shadow-[12px_12px_0px_0px_var(--foreground)]">

                    <div className="relative z-10 mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
                        <div className="text-center md:text-left">
                            <div className="inline-block px-2 sm:px-4 py-1 mb-4 md:mb-6 bg-[var(--accent)] text-white font-black uppercase tracking-widest text-[10px] sm:text-xs md:text-sm -rotate-2 border-2 border-[var(--foreground)]">
                                Уровень 03 / Учебный ритм
                            </div>
                            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none uppercase text-[var(--foreground)] break-words">
                                КАЛЕНДАРЬ <span className="comic-title text-[var(--accent)]">УЧЁБЫ</span>
                            </h2>
                        </div>
                    </div>

                    <div className="mb-10 md:mb-12 bg-[var(--accent)] border-2 sm:border-4 border-[var(--foreground)] p-4 sm:p-6 md:p-8 shadow-[4px_4px_0px_0px_var(--foreground)] sm:shadow-[8px_8px_0px_0px_var(--foreground)] text-white relative overflow-hidden group">
                        <div className="relative z-10 flex flex-col items-center md:flex-row md:items-center gap-4 md:gap-6 lg:gap-8">
                            <div className="bg-white p-2 sm:p-4 border-2 sm:border-4 border-[var(--foreground)] rotate-3 group-hover:rotate-0 transition-transform shrink-0">
                                <LuUserCheck size={32} className="sm:w-12 sm:h-12 text-[var(--accent)]" />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase leading-tight mb-2">А ГДЕ ЖЕ МОЁ РАСПИСАНИЕ?</h3>
                                <p className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-tight opacity-90">
                                    Не паникуй!<br/> Подробное расписание твоих занятий <span className="underline decoration-2 sm:decoration-4 underline-offset-2 sm:underline-offset-4">тебе объяснит твой куратор</span> на первой встрече.
                                </p>
                            </div>
                        </div>
                        <LuCalendarDays size={100} className="sm:w-[150px] sm:h-[150px] absolute -right-5 sm:-right-10 -bottom-5 sm:-bottom-10 opacity-10 -rotate-12" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-10 md:mb-16">
                        {scheduleInfo.map((info, i) => (
                            <div key={i} className="bg-white border-2 sm:border-4 border-[var(--foreground)] p-4 sm:p-6 md:p-8 shadow-[4px_4px_0px_0px_var(--accent)] sm:shadow-[6px_6px_0px_0px_var(--accent)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_var(--accent)] md:hover:shadow-[12px_12px_0px_0px_var(--accent)] transition-all group flex flex-col items-center md:items-start text-center md:text-left">
                                <div className="mb-4 sm:mb-6 flex h-12 sm:h-16 w-12 sm:w-16 items-center justify-center bg-[var(--foreground)] text-white group-hover:bg-[var(--accent)] transition-colors border-2 border-[var(--foreground)] md:self-start">
                                    <info.icon size={24} className="sm:w-8 sm:h-8" />
                                </div>
                                <h4 className="text-base sm:text-lg md:text-xl font-black uppercase mb-3 sm:mb-4 text-[var(--foreground)]">{info.title}</h4>
                                <p className="text-sm sm:text-base font-bold opacity-70 leading-relaxed text-[var(--foreground)]">{info.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[var(--accent)] border-2 sm:border-4 border-[var(--foreground)] flex flex-col items-center md:flex-row md:items-center md:justify-between gap-4 md:gap-6 shadow-[6px_6px_0px_0px_var(--foreground)] sm:shadow-[12px_12px_0px_0px_var(--foreground)] relative overflow-visible group">
                        <div className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-white/10 rounded-full blur-3xl -mr-12 sm:-mr-24 -mt-12 sm:-mt-24" />
                        <div className="flex flex-col items-center md:flex-row md:items-center gap-4 md:gap-6 lg:gap-8 relative z-10 p-4 sm:p-6 md:p-8 w-full">
                            <div className="flex h-14 sm:h-16 w-14 sm:w-16 items-center justify-center bg-white text-[var(--accent)] border-2 sm:border-4 border-[var(--foreground)] rotate-12 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-18 shrink-0">
                                <LuGraduationCap size={32} className="sm:w-12 sm:h-12 text-[var(--accent)]" />
                            </div>
                            <div className="text-white text-center md:text-left">
                                <h4 className="text-lg sm:text-2xl md:text-3xl font-black uppercase italic tracking-tighter leading-tight mb-2">ГЛАВНЫЙ БОСС: СЕССИЯ</h4>
                                <p className="text-xs sm:text-sm md:text-base font-black uppercase tracking-tight leading-tight opacity-90">
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