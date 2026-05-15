"use client";

import Image from "next/image";
import {
    LuChevronRight,
    LuGamepad2,
    LuMusic,
    LuCode,
    LuArrowUpRight,
    LuDribbble,
    LuBook
} from "react-icons/lu";
import Link from "next/link";

import asset_club1 from "@/assets/asset_club1.jpg";
import asset_club2 from "@/assets/asset_club2.jpg";
import asset_club3 from "@/assets/asset_club3.jpg";
import asset_club4 from "@/assets/asset_club4.jpg";
import asset_club5 from "@/assets/asset_club5.jpg";

export default function ClubsSection() {
    const clubs = [
        {
            icon: LuCode,
            title: "Спортивное программирование",
            desc: "Участвуй в соревнованиях от крупных компаний!",
            image: asset_club1,
            size: "large",
            link: "https://vk.com/club202905180"
        },
        {
            icon: LuGamepad2,
            title: "Киберспорт",
            desc: "Турниры по Dota 2, CS2 и не только. Собери свою команду.",
            image: asset_club2,
            size: "small",
            link: "https://vk.com/cybsutis"
        },
        {
            icon: LuMusic,
            title: "Студенческий клуб им.Ягодина",
            desc: "Репетиции с опытными руководителями, выступления на лучших сценах.",
            image: asset_club3,
            size: "small",
            link: "https://vk.com/studclubsib"
        },
        {
            icon: LuDribbble,
            title: "Спортклуб",
            desc: "Секции по футболу, баскетболу, рукопашному бою, стрельбе и множеству других видов спорта. Защищай честь вуза!",
            image: asset_club4,
            size: "small",
            link: "https://vk.com/club158222637"
        },
        {
            icon: LuBook,
            title: "Поэтический клуб",
            desc: "Собрание прозаиков, поэтов и любителей литературы.",
            image: asset_club5,
            size: "small",
            link: "https://vk.com/club237066885"
        }
    ];

    return (
        <section id="clubs" className="py-20">
            <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
                <div className="relative overflow-hidden rounded-[40px] bg-white p-6 md:p-12 lg:p-16 border-4 border-[var(--foreground)] shadow-[12px_12px_0px_0px_var(--foreground)]">

                    <div className="relative z-10 mb-16 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
                        <div className="flex-1">
                            <div className="inline-block px-4 py-1 mb-6 bg-[var(--accent)] text-white font-black uppercase tracking-widest -rotate-2 border-2 border-[var(--foreground)]">
                                Уровень 04 / Активности
                            </div>
                            <h2 className="text-[clamp(2.5rem,7vw,7.5rem)] font-black tracking-tighter leading-none uppercase text-[var(--foreground)]">
                                ЧЕМ <span className="comic-title text-[var(--accent)]">ЗАНЯТЬСЯ?</span>
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {clubs.map((club, i) => (
                            <a
                                key={i}
                                href={club.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative block overflow-hidden border-4 border-[var(--foreground)] bg-white shadow-[8px_8px_0px_0px_var(--accent)] transition-all hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_var(--accent)] text-left cursor-pointer ${
                                    club.size === "large" ? "lg:col-span-2" : ""
                                } min-h-[320px] md:h-[450px]`}
                            >
                                <div className="absolute inset-0 z-10 bg-black/10 group-hover:bg-black/5 transition-all duration-500 pointer-events-none" />

                                <Image
                                    src={club.image}
                                    alt={club.title}
                                    fill
                                    placeholder="blur"
                                    sizes={club.size === "large" ? "(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                                    className="object-cover saturate-110 group-hover:saturate-100 group-hover:scale-105 transition-all duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-90 group-hover:opacity-70 transition-opacity z-20" />

                                <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end items-start z-30">
                                    <div className="mb-4 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center bg-[var(--accent)] text-white border-4 border-[var(--foreground)] shadow-[4px_4px_0px_0px_var(--foreground)] rotate-3 group-hover:rotate-0 transition-transform">
                                        <club.icon size={24} className="md:w-7 md:h-7" />
                                    </div>

                                    <h3 className={`${
                                        club.size === "large"
                                            ? "text-2xl md:text-4xl"
                                            : "text-xl md:text-2xl"
                                    } font-black uppercase tracking-tighter text-white mb-2 italic leading-none drop-shadow-lg`}>
                                        {club.title}
                                    </h3>

                                    <p className="max-w-md text-[10px] md:text-xs font-bold uppercase text-white/90 leading-tight mb-4 translate-y-4 group-hover:translate-y-0 transition-transform drop-shadow-md">
                                        {club.desc}
                                    </p>

                                    <div className="flex items-center gap-2 text-white font-black uppercase text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                        Узнать больше <LuChevronRight />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="mt-16 flex justify-center">
                        <Link
                            href="/zhizn-studentov-sibguti#culture"
                            className="group relative px-12 py-6 bg-[var(--accent)] !text-white border-4 border-[var(--foreground)] shadow-[10px_10px_0px_0px_var(--foreground)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all"
                        >
                            <span className="text-xl font-black uppercase tracking-tighter flex items-center gap-4">
                                Подробнее о других активностях
                                <LuArrowUpRight size={32} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}