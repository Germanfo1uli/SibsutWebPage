"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuChevronLeft, LuChevronRight, LuStethoscope, LuHeartPulse, LuUser, LuMapPin, LuPhone, LuClock, LuHeart,LuX } from "react-icons/lu";
import { slideVariants } from "../lib/animations";
import asset_zdravp1 from "@/assets/asset_zdravp1.jpg";
import asset_zdravp2 from "@/assets/asset_zdravp2.jpg";
import asset_zdravp3 from "@/assets/asset_zdravp3.jpg";

const healthImages = [
    {
        src: asset_zdravp1,
        title: "Здоровье под контролем",
        desc: "Квалифицированные специалисты всегда готовы оказать первичную помощь студентам СибГУТИ."
    },
    {
        src: asset_zdravp2,
        title: "Современный медпункт",
        desc: "Удобное расположение на территории университета позволяет получить консультацию между парами."
    },
    {
        src: asset_zdravp3,
        title: "Поддержка и забота",
        desc: "Медицинская помощь в системе ОМС и профессиональная психологическая поддержка для каждого."
    }
];

export default function HealthSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startTimer = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % healthImages.length);
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
            setCurrentIndex((prev) => (prev + 1) % healthImages.length);
        } else {
            setCurrentIndex((prev) => (prev - 1 + healthImages.length) % healthImages.length);
        }
        startTimer();
    };

    return (
        <section id="health" className="py-20">
            <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
                <div className="relative overflow-hidden rounded-[40px] bg-[var(--background)] p-6 md:p-12 lg:p-16 border-4 border-[var(--foreground)] shadow-[12px_12px_0px_0px_var(--foreground)]">

                    <div className="relative z-10 mb-12 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 border-b-4 border-[var(--foreground)] pb-8">
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 bg-[var(--accent)] text-white font-black uppercase tracking-widest -rotate-2 border-2 border-[var(--foreground)]">
                                <LuHeartPulse size={16} /> Здоровье
                            </div>
                            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-none uppercase text-[var(--foreground)] break-words">
                                ТВОЯ <span className="comic-title text-[var(--accent)]">ОПОРА</span>
                            </h2>
                        </div>
                        <div className="bg-[var(--accent)] border-4 border-[var(--foreground)] p-6 rotate-1 shadow-[8px_8px_0px_0px_var(--foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-default">
                            <div className="text-[10px] font-black uppercase text-white mb-1 italic">Главное — здоровье</div>
                            <div className="text-2xl font-black uppercase leading-none italic text-white">МЫ РЯДОМ</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                        <div className="lg:col-span-7 relative h-[450px] md:h-[550px] border-4 border-[var(--foreground)] shadow-[16px_16px_0px_0px_var(--foreground)] overflow-hidden bg-[var(--foreground)] group mt-2">
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
                                        src={healthImages[currentIndex].src}
                                        alt={healthImages[currentIndex].title}
                                        fill
                                        priority
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 60vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/90 via-[var(--foreground)]/20 to-transparent md:bg-gradient-to-t md:from-[var(--foreground)]/90 md:via-[var(--foreground)]/20 md:to-transparent" />

                                    <div className="absolute bottom-4 left-6 right-24 hidden md:block">
                                        <div className="bg-[var(--background)] border-4 border-[var(--foreground)] p-6 shadow-[8px_8px_0px_0px_var(--accent)] -rotate-1">
                                            <h3 className="text-2xl md:text-3xl font-black text-[var(--foreground)] leading-none uppercase tracking-tighter mb-2 break-words">
                                                {healthImages[currentIndex].title}
                                            </h3>
                                            <p className="text-xs md:text-sm font-bold text-[var(--foreground)] opacity-80 uppercase leading-tight">
                                                {healthImages[currentIndex].desc}
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
                                <LuMapPin size={14} /> Контакты и адрес
                            </div>

                            <div className="group flex flex-col gap-4 p-4 sm:p-5 border-4 border-[var(--foreground)] bg-[var(--background)] shadow-[8px_8px_0px_0px_var(--foreground)] transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_var(--accent)]">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[var(--accent)] text-white border-2 border-[var(--foreground)] -rotate-3 group-hover:rotate-0 transition-transform">
                                        <LuStethoscope size={28} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-black text-lg sm:text-xl uppercase text-[var(--foreground)] leading-none mb-1 break-words">Здравпункт</h4>
                                        <div className="text-[11px] sm:text-xs font-black text-[var(--accent)] uppercase tracking-wider break-words">ГБУЗ НСО «ГП № 2»</div>
                                    </div>
                                </div>

                                <div className="space-y-2 text-[var(--foreground)]">
                                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                                        <LuMapPin className="text-[var(--accent)] shrink-0" size={16} />
                                        <span className="break-words">ул. Нижегородская, 23 (вход с плаца)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                                        <LuPhone className="text-[var(--accent)] shrink-0" size={16} />
                                        <span>269-83-39</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                                        <LuClock className="text-[var(--accent)] shrink-0" size={16} />
                                        <span>10:00 – 14:00 (ПН – ПТ)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="group flex flex-col gap-3 p-4 sm:p-5 border-4 border-[var(--foreground)] bg-[var(--background)] shadow-[8px_8px_0px_0px_var(--foreground)] transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_var(--accent)]">
                                <div className="flex items-center gap-2 sm:gap-3 border-b-2 border-[var(--foreground)] pb-2">
                                    <LuUser size={20} className="text-[var(--accent)] flex-shrink-0" />
                                    <h4 className="font-black text-sm sm:text-base uppercase tracking-tighter break-words">Медицинский персонал</h4>
                                </div>
                                <p className="text-xs sm:text-sm font-black uppercase leading-tight break-words">
                                    Федосеева Ольга Васильевна
                                    <span className="block text-[9px] sm:text-[10px] font-bold opacity-70 normal-case mt-1">Врач-терапевт, фельдшер</span>
                                </p>
                            </div>

                            <div className="group flex flex-col gap-3 p-4 sm:p-5 border-4 border-[var(--foreground)] bg-[var(--background)] shadow-[8px_8px_0px_0px_var(--foreground)] transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_var(--accent)]">
                                <div className="flex items-center gap-2 sm:gap-3 border-b-2 border-[var(--foreground)] pb-2">
                                    <LuHeart size={20} className="text-[var(--accent)] flex-shrink-0" />
                                    <h4 className="font-black text-sm sm:text-base uppercase tracking-tighter break-words">Психологическая помощь</h4>
                                </div>
                                <div className="space-y-2 text-xs sm:text-sm font-black">
                                    <div className="flex justify-between items-center flex-wrap gap-1">
                                        <span className="break-words">Аникина Наталья Павловна</span>
                                        <span className="text-[var(--accent)] whitespace-nowrap">+7 (953) 769-86-22</span>
                                    </div>
                                    <div className="flex justify-between items-center flex-wrap gap-1">
                                        <span className="break-words">Сараева Мария Юрьевна</span>
                                        <span className="text-[var(--accent)] whitespace-nowrap">+7 (913) 482-04-03</span>
                                    </div>
                                </div>
                            </div>

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
                                        src={healthImages[selectedImageIndex].src}
                                        alt={healthImages[selectedImageIndex].title}
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