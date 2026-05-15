"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaTelegramPlane, FaVk } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "@/assets/logo.svg";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: "Жизнь студента", href: "/zhizn-studentov-sibguti" },
        { label: "Памятка абитуриента", href: "/freshmen" },
    ];

    return (
        <>
            <header className="sticky top-0 z-[100] bg-[var(--background)] border-b-4 border-[var(--foreground)] shadow-[0_6px_0px_0px_var(--foreground)]">
                <div className="mx-auto flex h-[70px] w-full max-w-[1400px] items-center justify-between gap-4 px-4 md:px-8 md:h-[92px]">
                    <Link href="/freshmen" className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105 active:scale-95">
                        <div className="relative h-16 w-auto md:h-20">
                            <Image
                                src={logo}
                                alt="СибГУТИ"
                                width={200}
                                height={50}
                                priority
                                className="h-full w-auto object-contain"
                            />
                        </div>
                        <span className="text-xl md:text-3xl font-black tracking-tighter text-[var(--foreground)] border-l-4 border-[var(--accent)] pl-3 leading-none">
                            СибГУТИ
                        </span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="group relative px-4 py-1.5 text-sm font-black uppercase tracking-wider text-[var(--foreground)] border-2 border-transparent transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[3px_3px_0px_0px_var(--accent)] hover:-translate-y-0.5 active:scale-95"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <div className="hidden lg:flex items-center gap-3">
                            <a
                                href="https://vk.com/sibguti_info"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center w-14 h-14 gap-1 bg-[var(--accent)] border-4 border-[var(--foreground)] shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
                            >
                                <FaVk size={20} className="text-white group-hover:scale-110 transition-transform" />
                            </a>

                            <a
                                href="https://t.me/sibsutis_info"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center w-14 h-14 gap-1 bg-[var(--accent)] border-4 border-[var(--foreground)] shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
                            >
                                <FaTelegramPlane size={20} className="text-white group-hover:scale-110 transition-transform" />
                            </a>

                            <a
                                href="https://max.ru/id5405101327_biz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center w-14 h-14 gap-1 bg-[var(--accent)] border-4 border-[var(--foreground)] shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
                            >
                                <div className="group-hover:scale-110 transition-transform">
                                    <img
                                        src="https://maxicons.ru/icons/Max_logo_black.svg"
                                        alt="MAX"
                                        width={20}
                                        height={20}
                                        className="w-5 h-5 object-contain"
                                        style={{ filter: "brightness(0) invert(1)" }}
                                    />
                                </div>
                            </a>
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="flex h-10 w-10 items-center justify-center border-2 border-[var(--foreground)] bg-[var(--background)] shadow-[3px_3px_0px_0px_var(--foreground)] transition-all lg:hidden active:scale-95"
                        >
                            {isMenuOpen ? <HiX size={22} className="text-[var(--foreground)]" /> : <HiMenuAlt3 size={22} className="text-[var(--foreground)]" />}
                        </button>
                    </div>
                </div>

                <div className={`
                    fixed inset-0 z-[105] flex flex-col bg-[var(--background)] transition-all duration-500 ease-in-out lg:hidden
                    ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}
                `}>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-[15px] right-4 flex h-10 w-10 items-center justify-center border-2 border-[var(--foreground)] bg-[var(--background)] shadow-[3px_3px_0px_0px_var(--foreground)] transition-all active:scale-95 md:top-[26px] md:right-8"
                    >
                        <HiX size={22} className="text-[var(--foreground)]" />
                    </button>

                    <div className="flex flex-col gap-4 p-6 pt-24">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full border-2 border-[var(--foreground)] bg-[var(--background)] px-6 py-4 text-center text-lg font-black uppercase tracking-wider text-[var(--foreground)] shadow-[4px_4px_0px_0px_var(--foreground)] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <div className="flex items-center justify-center gap-4 mt-6">
                            <a
                                href="https://vk.com/sibguti_info"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center w-14 h-14 gap-1 bg-[var(--accent)] border-4 border-[var(--foreground)] shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
                            >
                                <FaVk size={20} className="text-white group-hover:scale-110 transition-transform" />
                            </a>

                            <a
                                href="https://t.me/sibsutis_info"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center w-14 h-14 gap-1 bg-[var(--accent)] border-4 border-[var(--foreground)] shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
                            >
                                <FaTelegramPlane size={20} className="text-white group-hover:scale-110 transition-transform" />
                            </a>

                            <a
                                href="https://max.ru/id5405101327_biz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center w-14 h-14 gap-1 bg-[var(--accent)] border-4 border-[var(--foreground)] shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
                            >
                                <div className="group-hover:scale-110 transition-transform">
                                    <img
                                        src="https://maxicons.ru/icons/Max_logo_black.svg"
                                        alt="MAX"
                                        width={20}
                                        height={20}
                                        className="w-5 h-5 object-contain"
                                        style={{ filter: "brightness(0) invert(1)" }}
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
