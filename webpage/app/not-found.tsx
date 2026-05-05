"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LuHouse, LuTriangleAlert } from "react-icons/lu";

export default function NotFound() {
    return (
        <section className="flex-1 flex items-center justify-center py-20 px-6">
            <div className="max-w-[600px] w-full text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative inline-block mb-8"
                >
                    <div className="absolute inset-0 bg-[var(--accent)] translate-x-4 translate-y-4 border-4 border-[var(--foreground)]" />
                    <div className="relative bg-[var(--background)] border-4 border-[var(--foreground)] p-8 md:p-12">
                        <h1 className="text-8xl md:text-9xl font-black text-[var(--foreground)] leading-none select-none">
                            404
                        </h1>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-2xl md:text-4xl font-black uppercase mb-4 text-[var(--foreground)]">
                        Страница не найдена
                    </h2>
                    <p className="text-sm md:text-base font-bold opacity-70 mb-10 max-w-[400px] mx-auto leading-relaxed text-[var(--foreground)]">
                        Похоже, этот путь ведет в цифровой тупик. Возможно, страница была перемещена или её никогда не существовало.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/freshmen" className="w-full sm:w-auto">
                            <button className="group relative flex items-center justify-center gap-3 w-full sm:w-auto bg-[var(--accent)] border-4 border-[var(--foreground)] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-all shadow-[6px_6px_0px_0px_var(--foreground)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer">
                                <LuHouse size={20} />
                                На главную
                            </button>
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="group relative flex items-center justify-center gap-3 w-full sm:w-auto bg-[var(--background)] border-4 border-[var(--foreground)] px-8 py-4 text-sm font-black uppercase tracking-widest text-[var(--foreground)] transition-all shadow-[6px_6px_0px_0px_var(--accent)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer"
                        >
                            <LuTriangleAlert size={20} />
                            Вернуться назад
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-16 flex justify-center gap-8 opacity-20"
                >
                    <div className="text-4xl font-black rotate-12">?</div>
                    <div className="text-4xl font-black -rotate-12">!</div>
                    <div className="text-4xl font-black rotate-45">0</div>
                </motion.div>
            </div>
        </section>
    );
}