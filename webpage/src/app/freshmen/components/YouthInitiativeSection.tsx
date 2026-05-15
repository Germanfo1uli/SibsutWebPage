"use client";

import { useState } from "react";
import Image from "next/image";
import { LuLightbulb, LuMail, LuRocket, LuCopy, LuCheck } from "react-icons/lu";

export default function YouthInitiativeSection() {
    const [copied, setCopied] = useState(false);
    const email = "molodezhka@sibsutis.ru";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="initiative" className="py-20">
            <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
                <div className="relative overflow-hidden rounded-[40px] bg-[var(--accent)] p-6 md:p-12 lg:p-16 border-4 border-[var(--foreground)] shadow-[12px_12px_0px_0px_var(--foreground)] text-white">

                    <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
                        <div className="relative w-full h-full">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/10 rounded-full blur-[120px]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 transition-transform duration-700 hover:rotate-0">
                                <div className="relative bg-[var(--background)] p-4 border-4 border-[var(--foreground)] shadow-[15px_15px_0px_0px_var(--foreground)]">
                                    <Image
                                        src="https://sun9-79.userapi.com/s/v1/ig2/BqtUI2kK5wtA48bkdRdk-bl1Qf8ykpwyLqSCa7BqI6NatFK2cDNxkdvRu0mWFgwkOoWJ7y81QiHlDrFkxAOSscol.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1040x1560&from=bu&u=2P2SPuif0mb6FQV-77Rk3NxS6IdVhWZkRt4-88AVTvk&cs=1040x0"
                                        alt="Youth Initiative"
                                        width={400}
                                        height={400}
                                        className="object-cover"
                                    />
                                    <div className="absolute -bottom-6 -left-6 bg-[var(--foreground)] text-[var(--background)] px-6 py-2 font-black uppercase text-xl -rotate-3 border-2 border-white">
                                        ТВОЁ ВРЕМЯ
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col lg:w-3/5 gap-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1 mb-8 bg-[var(--foreground)] text-[var(--background)] font-black uppercase tracking-widest -rotate-2 border-2 border-white shadow-[4px_4px_0px_0px_white]">
                                <LuLightbulb size={16} />
                                ПЛОЩАДКА ВОЗМОЖНОСТЕЙ
                            </div>
                            <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase mb-8 drop-shadow-[4px_4px_0_var(--foreground)]">
                                МОЛОДЁЖНАЯ <br/> ИНИЦИАТИВА
                            </h2>
                            <p className="text-xl md:text-2xl font-bold uppercase leading-tight text-white mb-0 max-w-xl">
                                ХОЧЕШЬ ЗАПУСТИТЬ СВОЙ ПРОЕКТ ИЛИ ЕСТЬ ИДЕИ, КАК СДЕЛАТЬ ВУЗ ЛУЧШЕ? МЫ ЖДЕМ ТЕБЯ!
                            </p>
                        </div>


                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <button
                                onClick={copyToClipboard}
                                className="group relative flex items-center w-full sm:w-auto gap-3 sm:gap-4 bg-[var(--background)] text-[var(--foreground)] px-4 py-4 sm:px-6 md:px-10 border-4 border-[var(--foreground)] shadow-[6px_6px_0px_0px_var(--foreground)] sm:shadow-[8px_8px_0px_0px_var(--foreground)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-95 overflow-hidden"
                            >
                                <div className="bg-[var(--accent)] text-white p-2 sm:p-3 border-2 border-[var(--foreground)] -rotate-6 group-hover:rotate-0 transition-transform shrink-0">
                                    <LuMail size={22} className="sm:w-7 sm:h-7" />
                                </div>
                                <div className="flex flex-col items-start min-w-0">
                                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] text-[var(--accent)] mb-0.5 truncate w-full">Кликни, чтобы скопировать:</span>
                                    <span className="text-base sm:text-xl md:text-2xl font-black lowercase tracking-tighter decoration-[var(--accent)] decoration-2 sm:decoration-4 group-hover:underline truncate w-full">
                                        {email}
                                    </span>
                                </div>
                                <div className="ml-auto sm:ml-4 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center shrink-0 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                                    {copied ? <LuCheck size={18} /> : <LuCopy size={18} />}
                                </div>

                                {copied && (
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[var(--foreground)] text-[var(--background)] px-3 py-1 text-[8px] sm:text-[10px] font-black uppercase border-2 border-white animate-bounce">
                                        Скопировано!
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="absolute bottom-[-50px] right-[-50px] lg:hidden">
                        <LuRocket size={200} className="text-white opacity-10 -rotate-12" />
                    </div>
                </div>
            </div>
        </section>
    );
}