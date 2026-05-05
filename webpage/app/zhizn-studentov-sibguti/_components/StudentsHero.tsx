"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StudentsHero() {
    return (
        <section className="py-10">
            <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-[var(--radius-xl)] bg-[var(--primary)] shadow-[0_20px_50px_rgba(0,0,0,0.2)] group"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 10, ease: "linear" }}
                        className="absolute inset-0 h-full w-full"
                    >
                        <Image
                            src="https://storage.googleapis.com/banani-generated-images/generated-images/2c914b46-b5fd-4ca4-9d75-070e2e19865a.jpg"
                            alt="Студенческая жизнь СибГУТИ"
                            fill
                            sizes="(max-width: 1280px) 100vw, 1280px"
                            quality={85}
                            priority
                            className="object-cover"
                        />
                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />

                    <div className="relative z-20 flex flex-col items-start gap-8 p-8 md:p-14 lg:p-16 max-w-[800px]">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, staggerChildren: 0.1 }}
                            className="flex flex-wrap gap-3"
                        >
                            {["Выбери, что интересно", "Питание", "Здоровье", "Спорт", "Творчество"].map((tag, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.1, backgroundColor: "var(--accent)", color: "#fff" }}
                                    className="inline-flex min-h-[32px] cursor-pointer items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold text-white backdrop-blur-md transition-colors"
                                >
                                    {tag}
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-[48px] font-extrabold leading-[1.05] tracking-tight text-white md:text-[64px] drop-shadow-xl"
                        >
                            Всё, что делает студенческую жизнь <span className="text-[var(--accent)]">ярче</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="max-w-[620px] text-[18px] leading-[1.6] text-white/80"
                        >
                            Не сухой список документов, а понятный гид по тому, где поесть, куда обратиться за помощью, как заняться спортом и чем наполнить жизнь после пар в СибГУТИ.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <button className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-[var(--radius-xl)] bg-[var(--accent)] px-9 text-[15px] font-extrabold text-white shadow-[0_0_20px_var(--accent)] transition-all hover:scale-105 active:scale-95">
                                <span className="relative z-10">Смотреть возможности</span>
                                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
                            </button>
                            <button className="inline-flex h-14 items-center justify-center gap-3 rounded-[var(--radius-xl)] border-2 border-white/30 bg-transparent px-9 text-[15px] font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/60 active:scale-95">
                                Найти столовую
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}