"use client";

import Image from "next/image";
import Link from "next/link";
import {
    LuMapPin,
    LuCompass,
    LuCamera,
    LuTrees,
    LuBook,
    LuArrowUpRight,
    LuSparkles,
    LuBuilding2
} from "react-icons/lu";

export default function NearbyPlacesSection() {
    const places = [
        {
            title: "ГПНТБ СО РАН",
            desc: <>Культурный эпицентр: огромный коворкинг для подготовки к сессии, уникальные выставки и легендарная площадь <br /> с фонтанами.</>,
            tags: ["Культура", "Учеба"],
            image: "https://avatars.mds.yandex.net/get-altay/16451045/2a00000199f63ae4b0fc7fcb7b6aa30a44d4/XXXL",
            icon: LuBook,
            rotate: "-rotate-1",
            link: "https://2gis.ru/novosibirsk/geo/70030076245029561/82.94322%2C55.018146?m=82.948039%2C55.017318%2F17.93%2Fp%2F2.29%2Fr%2F18.14"
        },
        {
            title: "Сквер имени А.А.Воловика",
            desc: <>Вокруг вуза десятки скверов и аллей. <br/>Сквер — идеальное место для чилла между парами под шум воды.</>,
            tags: ["Парки", "Релакс"],
            image: "https://avatars.mds.yandex.net/get-altay/18135344/2a0000019d8987f72bf44c7141734aad4c36/XXXL",
            icon: LuTrees,
            rotate: "rotate-1",
            link: "https://2gis.ru/novosibirsk/geo/141424683123743/82.948086%2C55.015972?m=82.948678%2C55.016682%2F17.93%2Fp%2C2.29%2Fr%2F18.14"
        },
        {
            title: "Город мечты",
            desc: <>Новосибирск — третий по населению город России. Здесь тысячи мест, где студенту точно не будет скучно: от модных антикафе и лекционных до современных студенческих пространств, выставок и масштабных ивентов.</>,
            tags: ["Возможности", "Мероприятия"],
            image: "https://sdelanounas.ru/i/a/w/1/f_aW1nLmdlbGlvcGhvdG8uY29tL25zazIwMTl3LzAxX25zazIwMTl3LmpwZz9fX2lkPTExODcwNQ==.jpeg",
            icon: LuBuilding2,
            rotate: "-rotate-2",
            link: "https://2gis.ru/novosibirsk?m=82.942926%2C55.014458%2F11%2Fp%2F2.29%2Fr%2F-23.76"
        }
    ];

    return (
        <section id="nearby" className="py-12 md:py-20">
            <div className="mx-auto w-full max-w-[1400px] px-3 sm:px-4 md:px-8">
                <div className="relative overflow-hidden rounded-[20px] sm:rounded-[40px] bg-[var(--card)] p-4 sm:p-6 md:p-12 lg:p-16 border-2 sm:border-4 border-[var(--foreground)] shadow-[6px_6px_0px_0px_var(--foreground)] sm:shadow-[12px_12px_0px_0px_var(--foreground)]">

                    <div className="relative z-10 mb-10 md:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-8">
                        <div className="max-w-4xl text-center lg:text-left">
                            <div className="inline-block px-2 sm:px-4 py-1 mb-3 md:mb-6 bg-[var(--accent)] text-[var(--background)] font-black uppercase tracking-widest text-[9px] sm:text-xs md:text-sm -rotate-2 border border-2 border-[var(--foreground)]">
                                Уровень 06 / Исследуй
                            </div>
                            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-none uppercase mb-6 md:mb-8">
                                ВОКРУГ <span className="comic-title comic-title-tight italic">ВУЗА</span>
                            </h2>

                            <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-start">
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase italic opacity-90 leading-tight">
                                    <span className="normal-case">СибГУТИ</span> — это не только учёба,
                                    но и центр живого города, где всё нужное находится на расстоянии вытянутой руки.
                                </p>
                                <div className="bg-[var(--foreground)] text-[var(--background)] p-3 sm:p-4 rotate-1 border border-2 border-[var(--foreground)] shadow-[2px_2px_0px_0px_var(--accent)] sm:shadow-[4px_4px_0px_0px_var(--accent)] mx-auto md:mx-0 w-full md:w-auto">
                                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                                        <span className="text-[9px] sm:text-xs font-black uppercase">Городской вайб</span>
                                    </div>
                                    <p className="text-[8px] sm:text-[10px] font-bold uppercase leading-relaxed">
                                        Парки, коворкинги, кинотеатры и тусовочные места — ты в самом сердце Новосибирска!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:flex h-28 w-28 xl:h-32 xl:w-32 items-center justify-center rounded-full border-2 xl:border-4 border-[var(--foreground)] bg-[var(--background)] rotate-12 shadow-[4px_4px_0px_0px_var(--accent)] xl:shadow-[8px_8px_0px_0px_var(--accent)]">
                            <LuCompass size={40} className="text-[var(--foreground)] animate-spin-slow" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                        {places.map((place, i) => (
                            <Link
                                key={i}
                                href={place.link}
                                target="_blank"
                                className={`group flex flex-col bg-[var(--background)] border-2 sm:border-4 border-[var(--foreground)] p-3 sm:p-4 shadow-[4px_4px_0px_0px_var(--foreground)] sm:shadow-[8px_8px_0px_0px_var(--foreground)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 h-full ${place.rotate}`}
                            >
                                <div className="relative h-40 sm:h-48 md:h-56 w-full overflow-hidden border border-2 border-[var(--foreground)] mb-3 sm:mb-4 md:mb-6 flex-shrink-0">
                                    <Image
                                        src={place.image}
                                        alt={place.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        loading="lazy"
                                        className="object-cover transition-all duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex gap-1 sm:gap-2 flex-wrap">
                                        {place.tags.map((tag, j) => (
                                            <span key={j} className="bg-[var(--accent)] text-[var(--background)] px-1.5 sm:px-2 py-0.5 sm:py-1 text-[7px] sm:text-[8px] font-black uppercase border border-[var(--foreground)] shadow-[1px_1px_0px_0px_var(--foreground)] sm:shadow-[2px_2px_0px_0px_var(--foreground)]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="px-1 sm:px-2 flex flex-col flex-grow">
                                    <div className="flex items-start gap-2 md:gap-3 mb-2 sm:mb-4">
                                        <place.icon size={20} className="text-[var(--accent)] shrink-0 mt-0.5 sm:mt-0 md:w-6 md:h-6" />
                                        <h3 className="text-base sm:text-lg md:text-2xl font-black uppercase italic tracking-tighter leading-tight">{place.title}</h3>
                                    </div>
                                    <div className="text-[7px] sm:text-xs md:text-xs font-bold uppercase opacity-70 leading-tight mb-3 sm:mb-4 md:mb-6 flex-grow">
                                        {place.desc}
                                    </div>
                                    <div className="flex items-center justify-between pt-2 sm:pt-4 border-[var(--foreground)]/10">
                                        <div className="flex items-center gap-1 sm:gap-2 text-[7px] sm:text-[9px] md:text-[10px] font-black uppercase opacity-40 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            <LuMapPin size={12} className="md:w-4 md:h-4" /> 5-15 мин
                                        </div>
                                        <LuCamera size={16} className="opacity-20 group-hover:text-[var(--accent)] group-hover:opacity-100 transition-all md:w-5 md:h-5" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}