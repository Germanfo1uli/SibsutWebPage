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
            link: "https://2gis.ru/novosibirsk/geo/141424683123743/82.948086%2C55.015972?m=82.948678%2C55.016682%2F17.93%2Fp%2F2.29%2Fr%2F18.14"
        },
        {
            title: "Город мечты",
            desc: <>Новосибирск — третий по населению город России. Здесь тысячи мест, где студенту точно не будет скучно: от модных антикафе и лекционных до современных студенческих пространств, выставок <br /> и масштабных ивентов. Всё это уже ждёт именно тебя!</>,
            tags: ["Возможности", "Мероприятия"],
            image: "https://sdelanounas.ru/i/a/w/1/f_aW1nLmdlbGlvcGhvdG8uY29tL25zazIwMTl3LzAxX25zazIwMTl3LmpwZz9fX2lkPTExODcwNQ==.jpeg",
            icon: LuBuilding2,
            rotate: "-rotate-2",
            link: "https://2gis.ru/novosibirsk?m=82.942926%2C55.014458%2F11%2Fp%2F2.29%2Fr%2F-23.76"
        }
    ];

    return (
        <section id="nearby" className="py-20">
            <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
                <div className="relative overflow-hidden rounded-[40px] bg-[var(--card)] p-6 md:p-12 lg:p-16 border-4 border-[var(--foreground)] shadow-[12px_12px_0px_0px_var(--foreground)]">

                    <div className="relative z-10 mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div className="max-w-4xl">
                            <div className="inline-block px-4 py-1 mb-6 bg-[var(--accent)] text-[var(--background)] font-black uppercase tracking-widest -rotate-2 border-2 border-[var(--foreground)]">
                                Уровень 06 / Исследуй
                            </div>
                            <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-none uppercase mb-8">
                                ВОКРУГ <span className="comic-title comic-title-tight italic">ВУЗА</span>
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8 items-start">
                                <p className="text-xl font-bold uppercase italic opacity-90 leading-tight">
                                    <span className="normal-case">СибГУТИ</span> — это не только учёба, <br />
                                    но и центр живого города, где всё нужное находится на расстоянии вытянутой руки.
                                </p>
                                <div className="bg-[var(--foreground)] text-[var(--background)] p-4 rotate-1 border-2 border-[var(--foreground)] shadow-[4px_4px_0px_0px_var(--accent)]">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-black uppercase">Городской вайб</span>
                                    </div>
                                    <p className="text-[10px] font-bold uppercase leading-relaxed">
                                        Парки, коворкинги, кинотеатры и тусовочные места — ты в самом сердце Новосибирска!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:flex h-32 w-32 items-center justify-center rounded-full border-4 border-[var(--foreground)] bg-[var(--background)] rotate-12 shadow-[8px_8px_0px_0px_var(--accent)]">
                            <LuCompass size={48} className="text-[var(--foreground)] animate-spin-slow" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {places.map((place, i) => (
                            <Link
                                key={i}
                                href={place.link}
                                target="_blank"
                                className={`group bg-[var(--background)] border-4 border-[var(--foreground)] p-4 shadow-[8px_8px_0px_0px_var(--foreground)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 ${place.rotate}`}
                            >
                                <div className="relative h-64 w-full overflow-hidden border-2 border-[var(--foreground)] mb-6">
                                    <Image
                                        src={place.image}
                                        alt={place.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        loading="lazy"
                                        className="object-cover transition-all duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        {place.tags.map((tag, j) => (
                                            <span key={j} className="bg-[var(--accent)] text-[var(--background)] px-2 py-1 text-[8px] font-black uppercase border border-[var(--foreground)] shadow-[2px_2px_0px_0px_var(--foreground)]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="px-2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <place.icon size={24} className="text-[var(--accent)]" />
                                        <h3 className="text-2xl font-black uppercase italic tracking-tighter">{place.title}</h3>
                                    </div>
                                    <div className="text-xs font-bold uppercase opacity-70 leading-tight mb-6">
                                        {place.desc}
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t-2 border-[var(--foreground)]/10">
                                        <div className="flex items-center gap-2 text-[10px] font-black uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                                            <LuMapPin size={14} /> 5-15 мин пешком
                                        </div>
                                        <LuCamera size={18} className="opacity-20 group-hover:text-[var(--accent)] group-hover:opacity-100" />
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