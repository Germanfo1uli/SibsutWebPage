"use client";

import Image from "next/image";
import Link from "next/link";
import {
    LuIdCard, LuBookOpen, LuUser,
    LuBusFront, LuShieldCheck, LuCreditCard,
    LuUsers, LuBellRing, LuArrowUpRight,
    LuCalendarDays, LuMapPin,
    LuActivity, LuFileText, LuHeartPulse, LuSyringe
} from "react-icons/lu";
import { FaVk, FaTelegramPlane } from "react-icons/fa";

export default function StepsSection() {
    const meetingItems = [
        {
            icon: LuIdCard,
            title: "Студенческий билет",
            desc: "Выдадут на собрании. Конец августа."
        },
        {
            icon: LuBookOpen,
            title: "Зачётная книжка",
            desc: "Получишь в течение первого семестра. Пригодится на сессии, не потеряй."
        },
        {
            icon: LuUser,
            title: "Университетский аккаунт",
            desc: "Доступ ко всем сервисам СибГУТИ. Получишь на собрании вместе с билетом."
        },
        {
            icon: LuBusFront,
            title: "Транспортная карта",
            desc: "Оформи карту и получи скидку 50% на проезд. Профком поможет!",
            isLink: true,
            href: "https://vk.com/profkom_sibguti"
        },
        {
            icon: LuShieldCheck,
            title: "Воинский учёт",
            desc: (
                <>
                    Парням: обязательно загляните в военно-учетный стол в сентябре. <br /><br /><br />
                    <span className="font-black text-[var(--accent)]">1 КОРПУС, 523 КАБИНЕТ.</span>
                </>
            )
        },
        {
            icon: LuCreditCard,
            title: "Банковская карта",
            desc: "Для стипендии. Оформят массово в начале сентября."
        }
    ];

    return (
        <section id="steps" className="py-20">
            <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
                <div className="relative overflow-hidden rounded-[40px] bg-white p-6 md:p-12 lg:p-16 border-4 border-[var(--foreground)] shadow-[12px_12px_0px_0px_var(--foreground)]">

                    <div className="relative z-10 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="inline-block px-4 py-1 mb-6 bg-[var(--accent)] text-white font-black uppercase tracking-widest -rotate-2 border-2 border-[var(--foreground)]">
                                Уровень 01 / Всё что нужно
                            </div>
                            <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-none uppercase text-[var(--foreground)]">
                                ПЕРВЫЕ <span className="comic-title text-[var(--accent)]">ШАГИ</span>
                            </h2>
                        </div>
                        <div className="bg-[var(--accent)] border-4 border-[var(--foreground)] p-6 rotate-1 shadow-[8px_8px_0px_0px_var(--foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-default">
                            <div className="text-[10px] font-black uppercase text-white mb-1">Начало:</div>
                            <div className="text-2xl font-black uppercase leading-none text-white">СЕНТЯБРЬ 2026</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {meetingItems.map((item, i) => (
                                <div key={i} className="bg-white border-4 border-[var(--foreground)] p-6 shadow-[6px_6px_0px_0px_var(--accent)] transition-all hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_var(--accent)] group">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center bg-[var(--accent)] text-white group-hover:bg-[var(--foreground)] group-hover:text-white transition-all duration-300 rotate-3 group-hover:rotate-0 border-2 border-[var(--foreground)]">
                                        <item.icon size={28} />
                                    </div>
                                    <h3 className="text-lg font-black uppercase leading-tight mb-3 text-[var(--foreground)]">{item.title}</h3>
                                    <div className="text-xs font-bold opacity-70 leading-relaxed text-[var(--foreground)]">{item.desc}</div>
                                    {item.isLink && (
                                        <Link href={item.href || "#"} target="_blank" className="mt-4 inline-flex items-center gap-2 text-[10px] font-black uppercase text-[var(--accent)] hover:underline decoration-2 underline-offset-4">
                                            Перейти <LuArrowUpRight size={14} />
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-4 space-y-8">
                            <div className="bg-[var(--accent)] border-4 border-[var(--foreground)] p-8 shadow-[8px_8px_0px_0px_var(--foreground)] text-white relative overflow-hidden group">
                                <LuCalendarDays size={120} className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700" />
                                <h3 className="text-3xl font-black uppercase leading-[0.9] mb-6 relative z-10">ДАТА<br/>СОБРАНИЯ</h3>
                                <div className="space-y-4 relative z-10">
                                    <div className="flex items-center gap-4 bg-white text-[var(--foreground)] p-4 border-4 border-[var(--foreground)] shadow-[4px_4px_0px_0px_var(--foreground)]">
                                        <LuMapPin size={24} className="text-[var(--accent)] shrink-0" />
                                        <span className="text-sm font-black uppercase">Уточняйте у своего института</span>
                                    </div>
                                    <p className="text-xs font-bold leading-tight uppercase tracking-tight bg-white/20 p-2 italic">
                                        * У каждого института своё время и место (корпуса 1, 2, 3 или 5). Следите за новостями.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white border-4 border-[var(--foreground)] p-8 shadow-[8px_8px_0px_0px_var(--accent)]">
                                <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-3 italic text-[var(--accent)]">
                                    <LuUsers className="text-[var(--accent)]" />
                                    МЫ В СЕТИ
                                </h3>
                                <div className="grid grid-cols-3 gap-2">
                                    <Link href="https://vk.com/sibguti_info" target="_blank" className="flex flex-col items-center justify-center gap-2 p-3 bg-[var(--accent)] text-white !text-white border-4 border-[var(--foreground)] shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group">
                                        <FaVk size={20} className="text-white group-hover:scale-110 transition-transform" />
                                        <span className="text-[8px] font-black uppercase text-white">VK</span>
                                    </Link>
                                    <Link href="https://t.me/sibsutis_info" target="_blank" className="flex flex-col items-center justify-center gap-2 p-3 bg-[var(--accent)] text-white !text-white border-4 border-[var(--foreground)] shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group">
                                        <FaTelegramPlane size={20} className="text-white group-hover:scale-110 transition-transform" />
                                        <span className="text-[8px] font-black uppercase text-white">TG</span>
                                    </Link>
                                    <Link href="https://max.ru/id5405101327_biz" target="_blank" className="flex flex-col items-center justify-center gap-2 p-3 bg-[var(--accent)] text-white !text-white border-4 border-[var(--foreground)] shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group">
                                        <div className="group-hover:scale-110 transition-transform">
                                            <Image
                                                src="https://maxicons.ru/icons/Max_logo_black.svg"
                                                alt="MAX"
                                                width={20}
                                                height={20}
                                                style={{ filter: "brightness(0) invert(1)" }}
                                            />
                                        </div>
                                        <span className="text-[8px] font-black uppercase text-white">Макс</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12 bg-white border-4 border-[var(--foreground)] p-6 md:p-8 shadow-[8px_8px_0px_0px_var(--accent)] relative overflow-hidden transition-all hover:shadow-[12px_12px_0px_0px_var(--accent)] hover:-translate-y-1">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                            <div className="flex h-20 w-20 shrink-0 items-center justify-center bg-[var(--accent)] text-white border-4 border-[var(--foreground)] -rotate-6 shadow-[4px_4px_0px_0px_var(--foreground)]">
                                <LuActivity size={40} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-black uppercase leading-tight mb-2 text-[var(--foreground)]">
                                    А пока ждешь — <span className="text-[var(--accent)] underline decoration-4 underline-offset-4">собирай справки!</span>
                                </h3>
                                <p className="text-xs md:text-sm font-bold opacity-80 uppercase tracking-widest mb-6 max-w-2xl text-[var(--foreground)]">
                                    Не теряй время до собрания. Подготовь медицинские документы заранее — они понадобятся для медпункта.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="relative flex items-center gap-3 bg-[var(--accent)] p-4 border-4 border-[var(--foreground)] shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-default">
                                        <div className="absolute -top-3 -right-2 bg-red-600 text-white text-[8px] font-black px-2 py-0.5 border-2 border-[var(--foreground)] rotate-3 z-10 uppercase">
                                            Обязательно
                                        </div>
                                        <LuFileText className="shrink-0 text-white" size={24}/>
                                        <span className="text-xs font-black uppercase leading-none text-white"> Справка<br/>086-У</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-[var(--foreground)] text-white p-4 border-2 border-[var(--foreground)] hover:bg-[var(--accent)] hover:text-white transition-colors group cursor-default">
                                        <LuHeartPulse className="text-white group-hover:text-white shrink-0 transition-colors" size={24}/>
                                        <span className="text-xs font-black uppercase leading-none text-white">Документы<br/>по здоровью</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-[var(--foreground)] text-white p-4 border-2 border-[var(--foreground)] hover:bg-[var(--accent)] hover:text-white transition-colors group cursor-default">
                                        <LuSyringe className="text-white group-hover:text-white shrink-0 transition-colors" size={24}/>
                                        <span className="text-xs font-black uppercase leading-none text-white">Сертификаты<br/>по прививкам</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 bg-[var(--accent)] text-white border-4 border-[var(--foreground)] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[12px_12px_0px_0px_var(--foreground)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24" />
                        <div className="flex items-center gap-8 relative z-10">
                            <div className="hidden md:flex h-16 w-16 items-center justify-center bg-white text-[var(--accent)] border-4 border-[var(--foreground)] rotate-12">
                                <LuBellRing size={32} className="animate-ring" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-black uppercase italic tracking-tighter">НЕ ПЕРЕЖИВАЙ!</h4>
                                <p className="text-xs font-bold opacity-80 uppercase tracking-widest leading-relaxed max-w-md">
                                    На собрании разберут каждый пункт по полочкам. Просто будь там вовремя.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}