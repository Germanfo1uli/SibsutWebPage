"use client";

import { LuUtensilsCrossed, LuHeartPulse, LuDumbbell, LuMusic4, LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";

export default function QuickStart() {
    const cards = [
        {
            title: "Где поесть",
            desc: "Где быстро и вкусно перекусить, сколько мест есть и в каких корпусах кормят лучше всего.",
            icon: LuUtensilsCrossed,
            href: "#food",
            label: "Открыть раздел"
        },
        {
            title: "За помощью",
            desc: "Здравпункт, врачи, часы работы и как получить помощь по ОМС без лишней беготни.",
            icon: LuHeartPulse,
            href: "#health",
            label: "Смотреть контакты"
        },
        {
            title: "Спорт",
            desc: "Секции, тренажёрные залы, ГТО и соревнования — где и как заниматься спортом в институте.",
            icon: LuDumbbell,
            href: "#sport",
            label: "Перейти к спорту"
        },
        {
            title: "После пар",
            desc: "Студклуб, творческие коллективы, фестивали и отряды — где найти своих и ярко проводить время.",
            icon: LuMusic4,
            href: "#culture",
            label: "Узнать больше"
        }
    ];

    return (
        <section id="quickstart" className="py-20">
            <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
                <div className="relative overflow-hidden rounded-[40px] bg-[var(--background)] p-6 md:p-12 lg:p-16 border-4 border-[var(--foreground)] shadow-[12px_12px_0px_0px_var(--foreground)]">

                    <div className="relative z-10 mb-16 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
                            <div className="inline-block px-4 py-1 mb-6 bg-[var(--accent)] text-white font-black uppercase tracking-widest -rotate-2 border-2 border-[var(--foreground)]">
                                Навигация
                            </div>
                            <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-none uppercase text-[var(--foreground)] break-words">
                                БЫСТРЫЙ <span className="comic-title text-[var(--accent)]">СТАРТ</span>
                            </h2>
                        </div>
                        <div className="bg-[var(--accent)] border-4 border-[var(--foreground)] p-6 rotate-1 shadow-[8px_8px_0px_0px_var(--foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-default">
                            <div className="text-[10px] font-black uppercase text-white mb-1 italic">Что ищем?</div>
                            <div className="text-2xl font-black uppercase leading-none italic text-white">ВЫБИРАЙ МАРШРУТ</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {cards.map((card, i) => (
                            <Link
                                key={i}
                                href={card.href}
                                className="bg-[var(--background)] border-4 border-[var(--foreground)] p-6 shadow-[6px_6px_0px_0px_var(--accent)] transition-all hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_var(--accent)] group flex flex-col"
                            >
                                <div className="mb-6 flex h-14 w-14 items-center justify-center bg-[var(--accent)] text-white group-hover:bg-[var(--foreground)] group-hover:text-white transition-all duration-300 rotate-3 group-hover:rotate-0 border-2 border-[var(--foreground)]">
                                    <card.icon size={28} />
                                </div>
                                <h3 className="text-xl font-black uppercase leading-tight mb-3 text-[var(--foreground)] break-words">{card.title}</h3>
                                <p className="text-xs font-bold opacity-70 leading-relaxed text-[var(--foreground)] flex-grow">{card.desc}</p>
                                <div className="mt-6 inline-flex items-center gap-2 text-[10px] font-black uppercase text-[var(--accent)] group-hover:underline decoration-2 underline-offset-4">
                                    {card.label} <LuArrowUpRight size={14} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}