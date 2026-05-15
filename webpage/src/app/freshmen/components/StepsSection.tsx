"use client";

import Image from "next/image";
import Link from "next/link";
import { LuIdCard, LuBookOpen, LuUser, LuBusFront, LuShieldCheck, LuCreditCard, LuUsers, LuBellRing, LuArrowUpRight, LuCalendarDays, LuMapPin, LuActivity, LuFileText, LuHeartPulse, LuSyringe } from "react-icons/lu";
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
        <section id="steps" className="py-12 md:py-20">
            <div className="mx-auto w-full max-w-[1400px] px-3 sm:px-4 md:px-8">
                <div className="relative overflow-hidden rounded-[20px] sm:rounded-[40px] bg-white p-4 sm:p-6 md:p-12 lg:p-16 border-2 sm:border-4 border-[var(--foreground)] shadow-[6px_6px_0px_0px_var(--foreground)] sm:shadow-[12px_12px_0px_0px_var(--foreground)]">

                    <div className="relative z-10 mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
                        <div className="text-center md:text-left">
                            <div className="inline-block px-2 sm:px-4 py-1 mb-4 md:mb-6 bg-[var(--accent)] text-white font-black uppercase tracking-widest text-[10px] sm:text-xs md:text-sm -rotate-2 border-2 border-[var(--foreground)]">
                                Уровень 01 / Всё что нужно
                            </div>
                            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-none uppercase text-[var(--foreground)] break-words">
                                ПЕРВЫЕ <span className="comic-title text-[var(--accent)]">ШАГИ</span>
                            </h2>
                        </div>
                        <div className="bg-[var(--accent)] border-2 sm:border-4 border-[var(--foreground)] p-3 sm:p-6 rotate-1 shadow-[4px_4px_0px_0px_var(--foreground)] sm:shadow-[8px_8px_0px_0px_var(--foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-default mx-auto md:mx-0">
                            <div className="text-[9px] sm:text-[10px] font-black uppercase text-white mb-1">Начало:</div>
                            <div className="text-lg sm:text-2xl font-black uppercase leading-none text-white">СЕНТЯБРЬ 2026</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-10 md:mb-16">
                        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {meetingItems.map((item, i) => (
                                <div key={i} className="bg-white border-2 sm:border-4 border-[var(--foreground)] p-4 sm:p-6 shadow-[4px_4px_0px_0px_var(--accent)] sm:shadow-[6px_6px_0px_0px_var(--accent)] transition-all hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_var(--accent)] md:hover:shadow-[12px_12px_0px_0px_var(--accent)] group flex flex-col items-center md:items-start text-center md:text-left">
                                    <div className="mb-3 sm:mb-6 flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center bg-[var(--accent)] text-white group-hover:bg-[var(--foreground)] group-hover:text-white transition-all duration-300 rotate-3 group-hover:rotate-0 border-2 border-[var(--foreground)] md:self-start">
                                        <item.icon size={24} className="sm:w-7 sm:h-7" />
                                    </div>
                                    <h3 className="text-sm sm:text-lg font-black uppercase leading-tight mb-2 sm:mb-3 text-[var(--foreground)]">{item.title}</h3>
                                    <div className="text-xs sm:text-sm font-bold opacity-70 leading-relaxed text-[var(--foreground)] mb-3">{item.desc}</div>
                                    {item.isLink && (
                                        <Link href={item.href || "#"} target="_blank" className="mt-2 inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-black uppercase text-[var(--accent)] hover:underline decoration-2 underline-offset-2">
                                            Перейти <LuArrowUpRight size={12} className="sm:w-4 sm:h-4" />
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-4 space-y-6 md:space-y-8">
                            <div className="bg-[var(--accent)] border-2 sm:border-4 border-[var(--foreground)] p-4 sm:p-8 shadow-[4px_4px_0px_0px_var(--foreground)] sm:shadow-[8px_8px_0px_0px_var(--foreground)] text-white relative overflow-hidden group">
                                <LuCalendarDays size={80} className="sm:w-[120px] sm:h-[120px] absolute -right-3 sm:-right-6 -bottom-3 sm:-bottom-6 opacity-10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700" />
                                <h3 className="text-2xl sm:text-3xl font-black uppercase leading-[0.9] mb-4 sm:mb-6 relative z-10">ДАТА<br/>СОБРАНИЯ</h3>
                                <div className="space-y-3 sm:space-y-4 relative z-10">
                                    <div className="flex items-center gap-2 sm:gap-4 bg-white text-[var(--foreground)] p-3 sm:p-4 border-2 sm:border-4 border-[var(--foreground)] shadow-[2px_2px_0px_0px_var(--foreground)] sm:shadow-[4px_4px_0px_0px_var(--foreground)]">
                                        <LuMapPin size={20} className="sm:w-6 sm:h-6 text-[var(--accent)] shrink-0" />
                                        <span className="text-[9px] sm:text-sm font-black uppercase">Уточняйте у своего института</span>
                                    </div>
                                    <p className="text-[8px] sm:text-xs font-bold leading-tight uppercase tracking-tight bg-white/20 p-2 italic">
                                        * У каждого института своё время и место (корпуса 1, 2, 3 или 5). Следите за новостями.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white border-2 sm:border-4 border-[var(--foreground)] p-4 sm:p-8 shadow-[4px_4px_0px_0px_var(--accent)] sm:shadow-[8px_8px_0px_0px_var(--accent)]">
                                <h3 className="text-base sm:text-xl font-black uppercase mb-4 sm:mb-6 flex items-center gap-2 justify-center md:justify-start italic text-[var(--accent)]">
                                    <LuUsers className="text-[var(--accent)] w-5 h-5 sm:w-6 sm:h-6" />
                                    МЫ В СЕТИ
                                </h3>
                                <div className="grid grid-cols-3 gap-2">
                                    <Link href="https://vk.com/sibguti_info" target="_blank" className="flex flex-col items-center justify-center gap-1.5 p-2 sm:p-3 bg-[var(--accent)] text-white !text-white border-2 sm:border-4 border-[var(--foreground)] shadow-[2px_2px_0px_0px_var(--foreground)] sm:shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group">
                                        <FaVk size={18} className="sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform" />
                                        <span className="text-[7px] sm:text-[8px] font-black uppercase text-white">VK</span>
                                    </Link>
                                    <Link href="https://t.me/sibsutis_info" target="_blank" className="flex flex-col items-center justify-center gap-1.5 p-2 sm:p-3 bg-[var(--accent)] text-white !text-white border-2 sm:border-4 border-[var(--foreground)] shadow-[2px_2px_0px_0px_var(--foreground)] sm:shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group">
                                        <FaTelegramPlane size={18} className="sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform" />
                                        <span className="text-[7px] sm:text-[8px] font-black uppercase text-white">TG</span>
                                    </Link>
                                    <Link href="https://max.ru/id5405101327_biz" target="_blank" className="flex flex-col items-center justify-center gap-1.5 p-2 sm:p-3 bg-[var(--accent)] text-white !text-white border-2 sm:border-4 border-[var(--foreground)] shadow-[2px_2px_0px_0px_var(--foreground)] sm:shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group">
                                        <div className="w-5 h-5 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform">
                                            <Image
                                                src="https://maxicons.ru/icons/Max_logo_black.svg"
                                                alt="MAX"
                                                width={20}
                                                height={20}
                                                style={{ filter: "brightness(0) invert(1)" }}
                                            />
                                        </div>
                                        <span className="text-[7px] sm:text-[8px] font-black uppercase text-white">Макс</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-10 md:mb-12 bg-white border-2 sm:border-4 border-[var(--foreground)] p-4 sm:p-6 md:p-8 shadow-[4px_4px_0px_0px_var(--accent)] sm:shadow-[8px_8px_0px_0px_var(--accent)] relative overflow-hidden transition-all hover:shadow-[6px_6px_0px_0px_var(--accent)] md:hover:shadow-[12px_12px_0px_0px_var(--accent)] hover:-translate-y-1">
                        <div className="flex flex-col items-center md:flex-row md:items-center gap-4 md:gap-6 lg:gap-8">
                            <div className="flex h-16 sm:h-20 w-16 sm:w-20 shrink-0 items-center justify-center bg-[var(--accent)] text-white border-2 sm:border-4 border-[var(--foreground)] -rotate-6 shadow-[2px_2px_0px_0px_var(--foreground)] sm:shadow-[4px_4px_0px_0px_var(--foreground)]">
                                <LuActivity size={32} className="sm:w-10 sm:h-10" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-lg sm:text-2xl md:text-3xl font-black uppercase leading-tight mb-2 text-[var(--foreground)]">
                                    А пока ждешь — <span className="text-[var(--accent)] underline decoration-2 sm:decoration-4 underline-offset-2 sm:underline-offset-4">собирай справки!</span>
                                </h3>
                                <p className="text-[9px] sm:text-xs md:text-sm font-bold opacity-80 uppercase tracking-widest mb-4 sm:mb-6 max-w-2xl mx-auto md:mx-0">
                                    Не теряй время до собрания. Подготовь медицинские документы заранее — они понадобятся для медпункта.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                                    <div className="relative flex items-center gap-2 sm:gap-3 bg-[var(--accent)] p-3 sm:p-4 border-2 sm:border-4 border-[var(--foreground)] shadow-[2px_2px_0px_0px_var(--foreground)] sm:shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-default">
                                        <div className="absolute -top-2 sm:-top-3 -right-1 sm:-right-2 bg-red-600 text-white text-[7px] sm:text-[8px] font-black px-1.5 sm:px-2 py-0.5 border border-2 border-[var(--foreground)] rotate-3 z-10 uppercase">
                                            Обязательно
                                        </div>
                                        <LuFileText className="shrink-0 text-white w-5 h-5 sm:w-6 sm:h-6" />
                                        <span className="text-[8px] sm:text-xs font-black uppercase leading-tight text-white"> Справка<br/>086-У</span>
                                    </div>
                                    <div className="flex items-center gap-2 sm:gap-3 bg-[var(--foreground)] text-white p-3 sm:p-4 border border-2 border-[var(--foreground)] hover:bg-[var(--accent)] hover:text-white transition-colors group cursor-default">
                                        <LuHeartPulse className="text-white group-hover:text-white shrink-0 w-5 h-5 sm:w-6 sm:h-6 transition-colors" />
                                        <span className="text-[8px] sm:text-xs font-black uppercase leading-tight text-white">Документы<br/>по здоровью</span>
                                    </div>
                                    <div className="flex items-center gap-2 sm:gap-3 bg-[var(--foreground)] text-white p-3 sm:p-4 border border-2 border-[var(--foreground)] hover:bg-[var(--accent)] hover:text-white transition-colors group cursor-default">
                                        <LuSyringe className="text-white group-hover:text-white shrink-0 w-5 h-5 sm:w-6 sm:h-6 transition-colors" />
                                        <span className="text-[8px] sm:text-xs font-black uppercase leading-tight text-white">Сертификаты<br/>по прививкам</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 sm:p-6 md:p-8 bg-[var(--accent)] text-white border-2 sm:border-4 border-[var(--foreground)] flex flex-col items-center md:flex-row md:items-center md:justify-between gap-4 md:gap-6 shadow-[6px_6px_0px_0px_var(--foreground)] sm:shadow-[12px_12px_0px_0px_var(--foreground)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-white/10 rounded-full blur-3xl -mr-12 sm:-mr-24 -mt-12 sm:-mt-24" />
                        <div className="flex flex-col items-center md:flex-row md:items-center gap-3 md:gap-8 relative z-10 text-center md:text-left w-full">
                            <div className="hidden md:flex h-16 w-16 shrink-0 items-center justify-center bg-white text-[var(--accent)] border-4 border-[var(--foreground)] rotate-12">
                                <LuBellRing size={32} className="animate-ring" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg sm:text-2xl font-black uppercase italic tracking-tighter">НЕ ПЕРЕЖИВАЙ!</h4>
                                <p className="text-[9px] sm:text-xs md:text-sm font-bold opacity-80 uppercase tracking-widest leading-relaxed">
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