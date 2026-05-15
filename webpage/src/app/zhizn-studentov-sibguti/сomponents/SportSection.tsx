"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import {
    LuChevronLeft,
    LuChevronRight,
    LuTrophy,
    LuActivity,
    LuMedal,
    LuMapPin,
    LuCalendar,
    LuStar,
    LuX
} from "react-icons/lu";
import { slideVariants } from "../lib/animations";

const sportSlides = [
    {
        src: "https://sun9-11.userapi.com/s/v1/ig2/ZqjL5JgkBg1IkKs_hpsQTtatXRKh22rkYGbO5tZ_oH4euS8lwimTTC0hwj6_8OiXU3LpYM4QAn_Jyo6gLNgLR1Z2.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,800x600&from=bu&cs=800x0",
        title: "Залы с историей",
        desc: "Кафедра спорта основана в 1953 году. Сегодня это полностью обновленные площадки для твоих личных рекордов и командных побед."
    },
    {
        src: "https://sun9-56.userapi.com/s/v1/ig2/rB4_BEfzIeybIHDsU9BRitN_G730ZaSpQP2HKzKeit85zzCx6Nhd4qHJFfrUA4WPgyQ3GAhZX7KgBBwLWIudztYC.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=2560x0",
        title: "Турниры и кубки",
        desc: "От «Приза первокурсника» до региональных чемпионатов! Стань частью сборной СибГУТИ и защищай честь университета."
    },
    {
        src: "https://sun9-35.userapi.com/s/v1/ig2/pe9_uc5GshLCEKmd_VZfGsX1MndYiU3Xys2UzYKx_4NsWYVL3H_CcP2X1I9eJsqaVc3EYQD-WJu5I0zgQrzGBiX2.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&cs=2560x0",
        title: "Секции для всех",
        desc: "Баскетбол, волейбол, футбол, настольный теннис и даже стрельба из лука. Найди свой вид спорта."
    }
];

const sportHighlights = [
    { icon: <LuMedal size={24} />, label: "Достигай", value: "Выше, быстрее сильнее!", accent: false },
    { icon: <LuStar size={24} />, label: "Всё в твоих руках", value: "Стань инженером своего здоровья!", accent: false },
    { icon: <LuTrophy size={24} />, label: "Победитель", value: "Побеждай, прославь себя и вуз!", accent: true }
];

export default function SportSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startTimer = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % sportSlides.length);
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
            setCurrentIndex((prev) => (prev + 1) % sportSlides.length);
        } else {
            setCurrentIndex((prev) => (prev - 1 + sportSlides.length) % sportSlides.length);
        }
        startTimer();
    };

    return (
        <section id="sport" className="py-20">
            <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
                <div className="relative overflow-hidden rounded-[40px] bg-[var(--background)] p-6 md:p-12 lg:p-16 border-4 border-[var(--foreground)] shadow-[12px_12px_0px_0px_var(--foreground)]">

                    <div className="relative z-10 mb-12 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 border-b-4 border-[var(--foreground)] pb-8">
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 bg-[var(--accent)] text-white font-black uppercase tracking-widest -rotate-2 border-2 border-[var(--foreground)]">
                                <LuActivity size={16} /> Спорт
                            </div>
                            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-none uppercase text-[var(--foreground)] break-words">
                                ВЫШЕ <span className="comic-title text-[var(--accent)]">СИЛЬНЕЕ</span>
                            </h2>
                        </div>
                        <div className="bg-[var(--accent)] border-4 border-[var(--foreground)] p-6 rotate-1 shadow-[8px_8px_0px_0px_var(--foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-default">
                            <div className="text-[10px] font-black uppercase text-white mb-1 italic">Сила в движении</div>
                            <div className="text-2xl font-black uppercase leading-none italic text-white">БУДЬ В ФОРМЕ</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                        <div className="lg:col-span-7 relative h-[400px] md:h-[480px] border-4 border-[var(--foreground)] shadow-[16px_16px_0px_0px_var(--foreground)] overflow-hidden bg-[var(--foreground)] group">
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
                                        src={sportSlides[currentIndex].src}
                                        alt={sportSlides[currentIndex].title}
                                        fill
                                        priority
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 60vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/90 via-[var(--foreground)]/20 to-transparent md:bg-gradient-to-t md:from-[var(--foreground)]/90 md:via-[var(--foreground)]/20 md:to-transparent" />

                                    <div className="absolute bottom-6 left-6 right-24 hidden md:block">
                                        <div className="bg-[var(--background)] border-4 border-[var(--foreground)] p-6 shadow-[8px_8px_0px_0px_var(--accent)] -rotate-1">
                                            <h3 className="text-2xl md:text-3xl font-black text-[var(--foreground)] leading-none uppercase tracking-tighter mb-2 break-words">
                                                {sportSlides[currentIndex].title}
                                            </h3>
                                            <p className="text-xs md:text-sm font-bold text-[var(--foreground)] opacity-80 uppercase leading-tight">
                                                {sportSlides[currentIndex].desc}
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

                        <div className="lg:col-span-5 flex flex-col gap-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--foreground)] text-[var(--background)] font-black uppercase tracking-widest self-start text-xs border-2 border-[var(--accent)] rotate-1">
                                <LuMapPin size={14} /> Почему спорт в СибГУТИ?
                            </div>

                            {sportHighlights.map((item, i) => (
                                <div
                                    key={i}
                                    className={`group flex items-center gap-4 p-4 border-4 border-[var(--foreground)] bg-[var(--background)] shadow-[8px_8px_0px_0px_var(--foreground)] transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_var(--accent)] ${
                                        item.accent ? 'bg-[var(--foreground)]/5' : ''
                                    }`}
                                >
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[var(--accent)] text-white border-2 border-[var(--foreground)] -rotate-3 group-hover:rotate-0 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-black text-base sm:text-lg uppercase text-[var(--foreground)] leading-none mb-1 break-words">{item.label}</h4>
                                        <div className="text-[11px] sm:text-xs font-black text-[var(--accent)] uppercase tracking-wider break-words">{item.value}</div>
                                    </div>
                                </div>
                            ))}

                            <a
                                href="https://my.sibsutis.ru/students/sport/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full"
                            >
                                <button className="group relative mt-2 flex items-center justify-center gap-2 sm:gap-3 w-full border-4 border-[var(--foreground)] bg-[var(--foreground)] py-4 sm:py-6 px-2 text-xs sm:text-sm font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] text-[var(--background)] transition-all hover:bg-[var(--accent)] hover:text-white cursor-pointer overflow-hidden shadow-[8px_8px_0px_0px_var(--accent)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none break-words text-center">
                  <span className="relative z-10 flex items-center gap-2 flex-wrap justify-center">
                    <LuCalendar size={20} className="flex-shrink-0" /> Записаться в секцию
                  </span>
                                </button>
                            </a>
                        </div>
                    </div>

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
                                        src={sportSlides[selectedImageIndex].src}
                                        alt={sportSlides[selectedImageIndex].title}
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