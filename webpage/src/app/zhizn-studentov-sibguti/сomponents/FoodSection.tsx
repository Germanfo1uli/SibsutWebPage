"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuChevronLeft, LuChevronRight, LuMapPin, LuInfo, LuUtensils, LuCoffee, LuX } from "react-icons/lu";
import { slideVariants } from "../lib/animations";
import asset_food1 from "@/assets/asset_food1.jpg";
import asset_food2 from "@/assets/asset_food2.jpg";
import asset_food3 from "@/assets/asset_food3.jpg";

const foodImages = [
    {
        src: asset_food1,
        title: "Уютные зоны отдыха",
        desc: "Просторные залы, где можно не только пообедать, но и подготовиться к следующей паре в спокойной обстановке."
    },
    {
        src: asset_food2,
        title: "Разнообразное меню",
        desc: "От полноценных домашних обедов до быстрых перекусов и свежей выпечки — каждый найдет что-то по вкусу."
    },
    {
        src: asset_food3,
        title: "Современный сервис",
        desc: "Быстрое обслуживание и наличие нескольких точек питания позволяют избежать очередей даже в большой перерыв."
    }
];

const locations = [
    {
        name: "Webstream",
        address: "Гурьевская улица, 51",
        info: "Кафе",
        url: "https://2gis.ru/novosibirsk/firm/141265769677978/82.951221%2C55.013567?m=82.950501%2C55.013661%2F18.58%2Fp%2F8.31%2Fr%2F4.97"
    },
    {
        name: "Связь",
        address: "Улица Кирова, 86",
        info: "Кафе-столовая",
        url: "https://2gis.ru/novosibirsk/firm/141265769338850/82.948262%2C55.013924?m=82.948641%2C55.013897%2F18.81"
    }
];

const fullData = [
    { type: "Столовая", address: "ул. Кирова, 86", area: "314,9", seats: "100", accessibility: "Стандарт" },
    { type: "Точка питания", address: "ул. Кирова, 86", area: "6", seats: "—", accessibility: "Стандарт" },
    { type: "Столовая", address: "ул. Гурьевская, 51", area: "98,5", seats: "40", accessibility: "ОВЗ" },
    { type: "Кафе", address: "ул. Гурьевская, 51", area: "63,9", seats: "30", accessibility: "Стандарт" },
    { type: "Точка питания", address: "ул. Гурьевская, 51", area: "8", seats: "—", accessibility: "Стандарт" },
    { type: "Столовая", address: "ул. Б. Богаткова, 51", area: "108,3", seats: "40", accessibility: "ОВЗ" },
    { type: "Точка питания", address: "ул. Б. Богаткова, 51", area: "8", seats: "—", accessibility: "Стандарт" },
    { type: "Точка питания", address: "ул. Б. Богаткова, 51", area: "8", seats: "—", accessibility: "Стандарт" },
    { type: "Точка питания", address: "ул. Выборная, 126", area: "137,2", seats: "80", accessibility: "Стандарт" },
    { type: "Оздоровительный центр", address: "ул. Кирова, 86", area: "142", seats: "—", accessibility: "Стандарт" },
    { type: "Здравпункт", address: "ул. Нижегородская, 23", area: "171,8", seats: "—", accessibility: "ОВЗ" }
];

export default function FoodSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showTable, setShowTable] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startTimer = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % foodImages.length);
        }, 5000);
    }, []);

    useEffect(() => {
        startTimer();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [startTimer]);

    const handleManualChange = (direction: 'next' | 'prev') => {
        if (direction === 'next') {
            setCurrentIndex((prev) => (prev + 1) % foodImages.length);
        } else {
            setCurrentIndex((prev) => (prev - 1 + foodImages.length) % foodImages.length);
        }
        startTimer();
    };

    const openLink = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <section id="food" className="py-20">
            <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
                <div className="relative overflow-hidden rounded-[40px] bg-[var(--background)] p-6 md:p-12 lg:p-16 border-4 border-[var(--foreground)] shadow-[12px_12px_0px_0px_var(--foreground)]">

                    <div className="relative z-10 mb-12 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 border-b-4 border-[var(--foreground)] pb-8">
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 bg-[var(--accent)] text-white font-black uppercase tracking-widest -rotate-2 border-2 border-[var(--foreground)]">
                                <LuUtensils size={16} /> Питание
                            </div>
                            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-none uppercase text-[var(--foreground)] break-words">
                                ГДЕ <span className="comic-title text-[var(--accent)]">ПОЕСТЬ</span>
                            </h2>
                        </div>
                        <div className="bg-[var(--accent)] border-4 border-[var(--foreground)] p-6 rotate-1 shadow-[8px_8px_0px_0px_var(--foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-default">
                            <div className="text-[10px] font-black uppercase text-white mb-1 italic">Учёба на десерт</div>
                            <div className="text-2xl font-black uppercase leading-none italic text-white">СНАЧАЛА ВЫБЕРЕМ ОБЕД</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                        <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--foreground)] text-[var(--background)] font-black uppercase tracking-widest self-start text-xs border-2 border-[var(--accent)] rotate-1">
                                <LuMapPin size={14} /> Локации на карте
                            </div>

                            {locations.map((loc, i) => (
                                <button
                                    key={i}
                                    onClick={() => openLink(loc.url)}
                                    className="group flex items-center gap-4 p-4 border-4 border-[var(--foreground)] bg-[var(--background)] shadow-[8px_8px_0px_0px_var(--foreground)] transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_var(--accent)] text-left cursor-pointer w-full"
                                >
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[var(--accent)] text-white border-2 border-[var(--foreground)] -rotate-3 group-hover:rotate-0 transition-transform">
                                        <LuMapPin size={24} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-black text-lg uppercase text-[var(--foreground)] leading-none mb-1">{loc.name}</h4>
                                        <div className="text-xs font-black text-[var(--accent)] uppercase tracking-wider break-words">{loc.address}</div>
                                        <div className="text-[10px] font-bold text-[var(--foreground)] opacity-70 mt-1 uppercase leading-tight">{loc.info}</div>
                                    </div>
                                </button>
                            ))}

                            <div className="flex items-center gap-4 p-4 border-4 border-[var(--foreground)] bg-[var(--accent)] shadow-[8px_8px_0px_0px_var(--foreground)] cursor-default">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[var(--background)] text-[var(--accent)] border-2 border-[var(--foreground)] -rotate-3">
                                    <LuCoffee size={24} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-black text-lg uppercase text-[var(--background)] leading-tight mb-1 break-words">Кофемашины в каждом корпусе!</h4>
                                    <div className="text-[11px] font-black text-[var(--background)] uppercase tracking-wider opacity-90 break-words">Ну кто же откажется от свежего кофе с утра?!</div>
                                </div>
                            </div>

                            <button
                                onClick={() => setShowTable(!showTable)}
                                className="group relative mt-auto flex items-center justify-center gap-2 sm:gap-3 w-full border-4 border-[var(--foreground)] bg-[var(--foreground)] py-4 sm:py-6 px-2 text-xs sm:text-sm font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] text-[var(--background)] transition-all hover:bg-[var(--accent)] hover:text-white cursor-pointer overflow-hidden shadow-[8px_8px_0px_0px_var(--accent)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none text-center break-words"
                            >
                                <span className="relative z-10 flex items-center gap-2 flex-wrap justify-center">
                                    <LuInfo size={20} className="flex-shrink-0" />
                                    {showTable ? "СКРЫТЬ СПИСОК ТОЧЕК" : "ПОЛНЫЙ ПЕРЕЧЕНЬ ОБЪЕКТОВ"}
                                </span>
                            </button>
                        </div>

                        <div className="lg:col-span-7 relative h-[400px] md:h-[500px] border-4 border-[var(--foreground)] shadow-[16px_16px_0px_0px_var(--foreground)] overflow-hidden bg-[var(--foreground)] group order-1 lg:order-2">
                            <AnimatePresence initial={false} custom={currentIndex > 0 ? 1 : -1} mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    custom={currentIndex > 0 ? 1 : -1}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="absolute inset-0 cursor-pointer"
                                    onClick={() => setSelectedImageIndex(currentIndex)}
                                >
                                    <Image
                                        src={foodImages[currentIndex].src}
                                        alt={foodImages[currentIndex].title}
                                        fill
                                        priority
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 60vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/90 via-[var(--foreground)]/20 to-transparent md:bg-gradient-to-t md:from-[var(--foreground)]/90 md:via-[var(--foreground)]/20 md:to-transparent" />

                                    <div className="absolute bottom-6 left-6 right-24 hidden md:block">
                                        <div className="bg-[var(--background)] border-4 border-[var(--foreground)] p-6 shadow-[8px_8px_0px_0px_var(--accent)] -rotate-1">
                                            <h3 className="text-2xl md:text-3xl font-black text-[var(--foreground)] leading-none uppercase tracking-tighter mb-2 break-words">
                                                {foodImages[currentIndex].title}
                                            </h3>
                                            <p className="text-xs md:text-sm font-bold text-[var(--foreground)] opacity-80 uppercase leading-tight">
                                                {foodImages[currentIndex].desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            <div className="absolute right-4 bottom-4 flex flex-col gap-2 z-20">
                                <button
                                    onClick={() => handleManualChange('prev')}
                                    className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center bg-[var(--background)] border-4 border-[var(--foreground)] shadow-[4px_4px_0px_0px_var(--foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer active:scale-95"
                                >
                                    <LuChevronLeft size={28} className="text-[var(--foreground)]" />
                                </button>
                                <button
                                    onClick={() => handleManualChange('next')}
                                    className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center bg-[var(--accent)] border-4 border-[var(--foreground)] shadow-[4px_4px_0px_0px_var(--foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer active:scale-95"
                                >
                                    <LuChevronRight size={28} className="text-white" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <AnimatePresence>
                        {showTable && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="mt-12 border-4 border-[var(--foreground)] bg-[var(--background)] shadow-[12px_12px_0px_0px_var(--foreground)]">
                                    <div className="bg-[var(--foreground)] px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                        <div className="flex items-center gap-4 text-[var(--background)]">
                                            <LuCoffee size={24} className="text-[var(--accent)] hidden sm:block" />
                                            <div>
                                                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tighter break-words">Реестр точек питания и сопутствующих объектов</h3>
                                                <p className="text-[10px] font-bold uppercase opacity-80 tracking-widest">Официальные данные СибГУТИ</p>
                                            </div>
                                        </div>
                                        <div className="bg-[var(--accent)] border-2 border-[var(--background)] px-3 py-1 text-xs font-black text-white uppercase -rotate-2">
                                            11 ОБЪЕКТОВ
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse min-w-[600px]">
                                            <thead>
                                            <tr className="bg-[var(--background)] border-b-4 border-[var(--foreground)] text-[var(--foreground)]">
                                                <th className="px-4 sm:px-6 py-4 text-[10px] sm:text-xs font-black uppercase tracking-widest border-r-2 border-[var(--foreground)]">Тип</th>
                                                <th className="px-4 sm:px-6 py-4 text-[10px] sm:text-xs font-black uppercase tracking-widest border-r-2 border-[var(--foreground)]">Адрес</th>
                                                <th className="px-4 sm:px-6 py-4 text-[10px] sm:text-xs font-black uppercase tracking-widest border-r-2 border-[var(--foreground)] text-center">Площадь (м²)</th>
                                                <th className="px-4 sm:px-6 py-4 text-[10px] sm:text-xs font-black uppercase tracking-widest border-r-2 border-[var(--foreground)] text-center">Места</th>
                                                <th className="px-4 sm:px-6 py-4 text-[10px] sm:text-xs font-black uppercase tracking-widest">Доступность</th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y-2 divide-[var(--foreground)] font-bold text-[var(--foreground)] uppercase">
                                            {fullData.map((row, i) => (
                                                <tr key={i} className="hover:bg-[var(--accent)]/10 transition-colors">
                                                    <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-black border-r-2 border-[var(--foreground)]">{row.type}</td>
                                                    <td className="px-4 sm:px-6 py-4 text-[10px] sm:text-xs opacity-80 border-r-2 border-[var(--foreground)]">{row.address}</td>
                                                    <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-black text-center border-r-2 border-[var(--foreground)]">{row.area}</td>
                                                    <td className="px-4 sm:px-6 py-4 text-base sm:text-lg font-black text-[var(--accent)] text-center border-r-2 border-[var(--foreground)]">{row.seats}</td>
                                                    <td className="px-4 sm:px-6 py-4">
                                                        <div className={`inline-flex items-center justify-center px-2 sm:px-3 py-1 text-[8px] sm:text-[10px] font-black border-2 border-[var(--foreground)] ${row.accessibility === 'ОВЗ' ? 'bg-[#4ade80] text-[var(--foreground)] shadow-[2px_2px_0px_0px_var(--foreground)]' : 'bg-[var(--background)] text-[var(--foreground)] opacity-70'}`}>
                                                            {row.accessibility}
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {selectedImageIndex !== null && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedImageIndex(null)}
                                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 cursor-pointer backdrop-blur-sm"
                            >
                                <button
                                    onClick={() => setSelectedImageIndex(null)}
                                    className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50 flex h-12 w-12 items-center justify-center bg-[var(--background)] border-4 border-[var(--foreground)] text-[var(--foreground)] shadow-[4px_4px_0px_0px_var(--accent)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                                >
                                    <LuX size={24} />
                                </button>
                                <motion.div
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.95, opacity: 0 }}
                                    onClick={(e) => e.stopPropagation()}
                                    className="relative w-full h-full max-h-[85vh] max-w-6xl border-4 border-[var(--foreground)] shadow-[16px_16px_0px_0px_var(--accent)] bg-[var(--background)]"
                                >
                                    <Image
                                        src={foodImages[selectedImageIndex].src}
                                        alt={foodImages[selectedImageIndex].title}
                                        fill
                                        className="object-contain p-2"
                                        sizes="100vw"
                                    />
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </section>
    );
}