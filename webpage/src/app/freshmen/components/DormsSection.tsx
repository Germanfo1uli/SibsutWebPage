"use client";
import Image from "next/image";
import Link from "next/link";
import {
    LuHouse,
    LuFileText,
    LuCircleCheck,
    LuTriangleAlert,
    LuArrowRight,
    LuPhone,
    LuUser,
    LuInfo,
    LuCreditCard,
    LuChevronRight,
    LuCalendarDays,
    LuSmartphone,
    LuMap,
    LuWifi,
    LuWaves,
    LuChefHat,
    LuHeart,
    LuShieldAlert,
    LuGamepad2,
    LuCode,
    LuCoffee,
    LuShirt,
    LuBath,
    LuUtensils,
    LuQuote,
} from "react-icons/lu";

export default function DormsSection() {
    const dorms = [
        {
            id: 1,
            address: "ул. Гурьевская улица, 51",
            map: "https://2gis.ru/novosibirsk/firm/141265770822730/82.950428%2C55.012955?m=82.951348%2C55.013126%2F17.52%2Fp%2F41.47%2Fr%2F-6.33",
            img: "https://avatars.mds.yandex.net/get-altay/224414/2a0000015e4594bccc5e4046a53e0aa80bdb/XXXL",
        },
        {
            id: 2,
            address: "ул. Кирова, 86",
            map: "https://2gis.ru/novosibirsk/firm/70000001024882699/82.950094%2C55.013986?m=82.949842%2C55.013943%2F18.06%2Fp%2F50%2Fr%2F151.92",
            img: "https://avatars.mds.yandex.net/get-altay/9916116/2a00000189459b2c10fe9d82e7ddb154f3cc/XXXL",
        },
        {
            id: 3,
            address: "ул. Кирова, 86",
            map: "https://2gis.ru/novosibirsk/firm/141265770822731/82.947836%2C55.013203?m=82.949853%2C55.013449%2F17.68%2Fp%2F40.89%2Fr%2F9.76",
            img: "https://i3.photo.2gis.com/images/branch/1/140737522213410_1747_656x340.jpg",
        },
        {
            id: 4,
            address: "ул. Нижегородская, 23",
            map: "https://2gis.ru/novosibirsk/firm/141265770822732/82.948876%2C55.012735?m=82.949774%2C55.013198%2F17.68%2Fp%2F44.05%2Fr%2F6.86",
            img: "https://i9.photo.2gis.com/images/branch/0/30258560064828352_a906_656x340.jpg",
        },
        {
            id: 5,
            address: "ул. Бориса Богаткова, 51",
            map: "https://2gis.ru/novosibirsk/firm/141265770723936/82.949674%2C55.016966?m=82.950352%2C55.016729%2F17.68%2Fp%2F43.79%2Fr%2F1.07",
            img: "https://i6.photo.2gis.com/images/branch/0/30258560051756441_160a_656x340.jpg",
        },
    ];

    const checklist = [
        "Паспорт РФ + копия",
        "3 фотографии 3×4 см",
        "ФИО и телефоны родителей",
        "Свой номер телефона",
        "Флюорография",
        "Прививка от кори",
        "Госуслуги (ОБЯЗАТЕЛЬНО)",
    ];

    return (
        <section id="dorms" className="py-20">
            <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
                <div className="relative overflow-hidden rounded-[40px] bg-white p-6 md:p-12 lg:p-16 border-4 border-[var(--foreground)] shadow-[12px_12px_0px_0px_var(--foreground)]">
                    <div className="relative z-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="text-center md:text-left">
                            <div className="inline-block px-4 py-1 mb-6 bg-[var(--accent)] text-white font-black uppercase tracking-widest -rotate-2 border-2 border-[var(--foreground)]">
                                Уровень 02 / общежитие
                            </div>
                            <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-none uppercase text-[var(--foreground)]">
                                ТВОЙ{" "}
                                <span className="comic-title text-[var(--accent)]">УГОЛОК</span>
                            </h2>
                        </div>
                        <div className="bg-[var(--accent)] border-4 border-[var(--foreground)] p-6 rotate-1 shadow-[8px_8px_0px_0px_var(--foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none mx-auto md:mx-0">
                            <div className="text-[10px] font-black uppercase text-white mb-1">
                                Дата заселения:
                            </div>
                            <div className="text-2xl font-black uppercase leading-none text-white">
                                28 АВГУСТА 2026
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-16 justify-center md:justify-start">
                        <div className="flex items-center gap-3 px-6 py-4 bg-[var(--accent)] text-white font-black uppercase italic -rotate-1 border-2 border-[var(--foreground)]">
                            ЧТО ТАМ ЕСТЬ?
                        </div>
                        {[
                            { icon: LuWaves, label: "ДУШ" },
                            { icon: LuChefHat, label: "КУХНЯ" },
                            { icon: LuWifi, label: "ИНТЕРНЕТ" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 px-6 py-4 bg-white border-4 border-[var(--foreground)] font-black uppercase tracking-tight hover:bg-[var(--accent)] hover:text-white transition-all cursor-default shadow-[4px_4px_0px_0px_var(--foreground)]"
                            >
                                <item.icon size={20} />
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white border-4 border-[var(--foreground)] p-8 shadow-[8px_8px_0px_0px_var(--accent)] relative group overflow-hidden transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_var(--accent)]">
                                <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3 text-[var(--foreground)]">
                                    <LuFileText className="text-[var(--accent)]" />
                                    ДОКУМЕНТЫ
                                </h3>
                                <ul className="space-y-3">
                                    {checklist.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3 font-bold text-sm leading-tight text-[var(--foreground)]"
                                        >
                                            <LuCircleCheck
                                                size={16}
                                                className="mt-0.5 text-[var(--accent)] shrink-0"
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-[var(--accent)] text-white p-8 border-4 border-[var(--foreground)] -rotate-1 shadow-[8px_8px_0px_0px_var(--foreground)] hover:rotate-0 transition-transform">
                                    <h3 className="text-xl font-black uppercase mb-4">ГОСУСЛУГИ</h3>
                                    <p className="text-sm font-bold leading-tight opacity-90">
                                        В течение 3 дней после договора отдай доки паспортисту.
                                        <span className="block mt-2 text-white font-black italic underline underline-offset-4 decoration-2">
                                            Иначе — автоматическое выселение!
                                        </span>
                                    </p>
                                </div>
                                <div className="bg-white border-4 border-[var(--foreground)] p-8 shadow-[8px_8px_0px_0px_var(--accent)] hover:shadow-[8px_8px_0px_0px_var(--accent)] transition-all">
                                    <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-3 text-[var(--foreground)]">
                                        <LuShieldAlert className="text-red-500" />
                                        ВОЕНКОМАТ
                                    </h3>
                                    <p className="text-sm font-bold opacity-80 leading-tight tracking-tighter text-[var(--foreground)]">
                                        Юношам: до 20 сентября в Корпус №1 (каб 523). Паспорт +
                                        приписное.
                                    </p>
                                </div>
                            </div>

                            <div className="md:col-span-2 bg-white border-4 border-[var(--foreground)] p-8 shadow-[8px_8px_0px_0px_var(--accent)] transition-all hover:bg-[var(--accent)] hover:text-white group">
                                <h3 className="text-2xl font-black uppercase mb-8 flex items-center gap-4 text-[var(--foreground)] group-hover:text-white">
                                    <LuCircleCheck className="group-hover:text-white" />
                                    ПРАВИЛА И ТЕХНИКА
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <div className="text-sm font-black uppercase text-[var(--accent)] group-hover:text-white">
                                            Техника
                                        </div>
                                        <p className="text-xs font-bold opacity-70 group-hover:text-white/90">
                                            Можно посоветоваться при выборе техники <br /> с
                                            заведующей общежития или старостой этажа.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-sm font-black uppercase text-[var(--accent)] group-hover:text-white">
                                            Уют
                                        </div>
                                        <p className="text-xs font-bold opacity-70 group-hover:text-white/90">
                                            Оформи свой укромный уголок, комфорт <br /> на первом
                                            месте.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="h-full bg-[var(--accent)] border-4 border-[var(--foreground)] p-8 shadow-[8px_8px_0px_0px_var(--foreground)] flex flex-col group overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform duration-700">
                                    <LuHeart size={120} className="text-white" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-black uppercase leading-none mb-8 text-white">
                                        ЧТО ВЗЯТЬ <br /> С СОБОЙ?
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="bg-white/10 p-4 border-2 border-white/20">
                                            <div className="flex items-center gap-3 mb-2 text-white">
                                                <LuShirt size={18} />
                                                <span className="text-sm font-black uppercase">
                                                    Одежда
                                                </span>
                                            </div>
                                            <p className="text-[11px] font-bold text-white/90 leading-tight">
                                                Повседневная (в СибГУТИ нет фейсконтроля), теплая
                                                (это Сибирь!), домашняя.
                                            </p>
                                        </div>
                                        <div className="bg-white/10 p-4 border-2 border-white/20">
                                            <div className="flex items-center gap-3 mb-2 text-white">
                                                <LuBath size={18} />
                                                <span className="text-sm font-black uppercase">
                                                    Гигиена
                                                </span>
                                            </div>
                                            <p className="text-[11px] font-bold text-white/90 leading-tight">
                                                Полотенце, сланцы для душа, зубная паста, щетка,
                                                туалетная бумага, шампунь, бытовая химия.
                                            </p>
                                        </div>
                                        <div className="bg-white/10 p-4 border-2 border-white/20">
                                            <div className="flex items-center gap-3 mb-2 text-white">
                                                <LuUtensils size={18} />
                                                <span className="text-sm font-black uppercase">
                                                    Посуда и быт
                                                </span>
                                            </div>
                                            <p className="text-[11px] font-bold text-white/90 leading-tight">
                                                Кружка, тарелка, приборы, сковорода, кастрюля, нож,
                                                доска. Белье выдают, но можно свое.
                                            </p>
                                        </div>

                                        <div className="mt-8 bg-white p-4 border-4 border-[var(--foreground)] rotate-1 shadow-[4px_4px_0px_0px_var(--foreground)]">
                                            <div className="flex gap-3">
                                                <LuQuote
                                                    className="text-[var(--accent)] shrink-0"
                                                    size={20}
                                                />
                                                <div>
                                                    <p className="text-[11px] font-black uppercase italic leading-tight text-[var(--foreground)]">
                                                        "Общежитие — это не просто стены, это твоя
                                                        первая школа жизни и лучшие друзья на годы
                                                        вперед."
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
                            <div className="h-2 w-12 bg-[var(--accent)]" />
                            <h3 className="text-3xl font-black uppercase tracking-tighter italic underline decoration-[var(--accent)] decoration-4 text-[var(--foreground)]">
                                НАШИ КОРПУСА
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                            {dorms.map((dorm) => (
                                <a
                                    href={dorm.map}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={dorm.id}
                                    className="block relative bg-white border-4 border-[var(--foreground)] shadow-[6px_6px_0px_0px_var(--accent)] hover:shadow-[10px_10px_0px_0px_var(--accent)] hover:-translate-y-1 transition-all group overflow-hidden cursor-pointer"
                                >
                                    <div className="relative h-40 w-full border-b-4 border-[var(--foreground)]">
                                        <Image
                                            src={dorm.img}
                                            alt={dorm.address}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 20vw"
                                            loading="lazy"
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-[var(--accent)]/10 group-hover:bg-transparent" />
                                        <div className="absolute top-4 left-4 bg-[var(--accent)] text-white px-3 py-1 font-black text-xl italic border-2 border-white">
                                            №{dorm.id}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="space-y-4">
                                            <p className="text-xs font-black uppercase leading-tight min-h-[2rem] text-[var(--foreground)]">
                                                {dorm.address}
                                            </p>
                                            <div className="pt-4 border-t-2 border-[var(--foreground)]/10">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-[10px] font-black tracking-widest text-[var(--accent)]">
                                                        Смотреть на карте
                                                    </span>
                                                    <div className="text-[var(--accent)] group-hover:translate-x-1 transition-transform">
                                                        <LuMap size={18} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 p-8 bg-[var(--accent)] text-white border-4 border-[var(--foreground)] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[12px_12px_0px_var(--foreground)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
                        <div className="flex items-center gap-8 relative z-10">
                            <LuArrowRight
                                size={40}
                                className="text-white animate-pulse hidden md:block"
                            />
                            <div>
                                <h4 className="text-2xl font-black uppercase italic tracking-tighter">
                                    ОСТАЛИСЬ ВОПРОСЫ?
                                </h4>
                                <p className="text-xs font-bold opacity-80 uppercase tracking-widest leading-relaxed">
                                    Обращайся в дирекцию своего института. Удачи на новом уровне!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}