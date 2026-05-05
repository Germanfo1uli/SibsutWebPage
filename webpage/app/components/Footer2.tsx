import Image from "next/image";
import { FaVk, FaTelegram } from "react-icons/fa";
import { LuMail, LuPhone, LuMapPin, LuClock } from "react-icons/lu";

export default function Footer() {
    return (
        <footer className="mt-20 border-t-8 border-[var(--accent)] bg-[var(--foreground)]">
            <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="group flex flex-col gap-4 p-5 border-2 border-[var(--accent)] bg-[var(--foreground)] text-[var(--background)] shadow-[6px_6px_0px_0px_var(--accent)] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_var(--accent)]">
                        <div className="flex items-center gap-3 border-b-2 border-[var(--accent)] pb-2">
                            <div className="h-9 w-9 flex items-center justify-center bg-[var(--accent)] text-white border-2 border-[var(--background)] rotate-2 group-hover:rotate-0 transition-transform">
                                <LuMail size={18} />
                            </div>
                            <h3 className="text-base font-black uppercase tracking-tighter text-[var(--background)]">Приёмная комиссия</h3>
                        </div>
                        <ul className="space-y-2 text-xs font-bold text-[var(--background)]">
                            <li className="flex items-center gap-2"><LuMail className="text-[var(--accent)] shrink-0" size={14} /> prikom@sibsutis.ru</li>
                            <li className="flex items-center gap-2"><LuPhone className="text-[var(--accent)] shrink-0" size={14} /> (383) 269-82-28</li>
                            <li className="flex items-center gap-2"><LuPhone className="text-[var(--accent)] shrink-0" size={14} /> (383) 269-82-29</li>
                        </ul>
                    </div>

                    <div className="group flex flex-col gap-4 p-5 border-2 border-[var(--accent)] bg-[var(--foreground)] text-[var(--background)] shadow-[6px_6px_0px_0px_var(--accent)] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_var(--accent)]">
                        <div className="flex items-center gap-3 border-b-2 border-[var(--accent)] pb-2">
                            <div className="h-9 w-9 flex items-center justify-center bg-[var(--accent)] text-white border-2 border-[var(--background)] rotate-2 group-hover:rotate-0 transition-transform">
                                <LuMapPin size={18} />
                            </div>
                            <h3 className="text-base font-black uppercase tracking-tighter text-[var(--background)]">Заочное обучение</h3>
                        </div>
                        <ul className="space-y-2 text-xs font-bold text-[var(--background)]">
                            <li className="break-all">do.sibsutis.ru/kak_postupit</li>
                            <li className="flex items-center gap-2"><LuMail className="text-[var(--accent)] shrink-0" size={14} /> dist@sibsutis.ru</li>
                            <li className="flex items-center gap-2"><LuPhone className="text-[var(--accent)] shrink-0" size={14} /> (383) 269-83-69</li>
                            <li className="flex items-center gap-2"><LuMapPin className="text-[var(--accent)] shrink-0" size={14} /> ул. Кирова, 86, к. 208</li>
                        </ul>
                    </div>

                    <div className="group flex flex-col gap-4 p-5 border-2 border-[var(--accent)] bg-[var(--foreground)] text-[var(--background)] shadow-[6px_6px_0px_0px_var(--accent)] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_var(--accent)]">
                        <div className="flex items-center gap-3 border-b-2 border-[var(--accent)] pb-2">
                            <div className="h-9 w-9 flex items-center justify-center bg-[var(--accent)] text-white border-2 border-[var(--background)] rotate-2 group-hover:rotate-0 transition-transform">
                                <LuMail size={18} />
                            </div>
                            <h3 className="text-base font-black uppercase tracking-tighter text-[var(--background)]">Основные контакты</h3>
                        </div>
                        <ul className="space-y-2 text-xs font-bold text-[var(--background)]">
                            <li>rectorat@sibsutis.ru</li>
                            <li>info@sibsutis.ru</li>
                            <li>support@sibsutis.ru</li>
                            <li className="flex items-center gap-2"><LuPhone className="text-[var(--accent)] shrink-0" size={14} /> (383) 269-82-34</li>
                        </ul>
                    </div>

                    <div className="group flex flex-col gap-4 p-5 border-2 border-[var(--accent)] bg-[var(--foreground)] text-[var(--background)] shadow-[6px_6px_0px_0px_var(--accent)] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_var(--accent)]">
                        <div className="flex items-center gap-3 border-b-2 border-[var(--accent)] pb-2">
                            <div className="h-9 w-9 flex items-center justify-center bg-[var(--accent)] text-white border-2 border-[var(--background)] rotate-2 group-hover:rotate-0 transition-transform">
                                <LuClock size={18} />
                            </div>
                            <h3 className="text-base font-black uppercase tracking-tighter text-[var(--background)]">Режим работы</h3>
                        </div>
                        <ul className="space-y-2 text-xs font-bold text-[var(--background)]">
                            <li>пн – чт 09:00–17:00</li>
                            <li>пятница 09:00–16:00</li>
                            <li>сб, вс — выходной</li>
                            <li className="flex items-start gap-2"><LuMapPin className="text-[var(--accent)] shrink-0 mt-0.5" size={14} /> г. Новосибирск, ул. Гурьевская, 51</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t-2 border-[var(--accent)] pt-6 text-[var(--background)]">
                    <div className="flex items-center gap-4">
                        <a
                            href="https://vk.com/sibguti_info"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center justify-center w-14 h-14 bg-transparent border-2 border-[var(--accent)] shadow-[4px_4px_0px_0px_var(--accent)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--accent)] transition-all duration-200 -skew-x-6 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[var(--accent)] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
                            <div className="relative z-10 flex flex-col items-center gap-0.5 skew-x-6 text-white group-hover:text-[var(--background)] transition-colors duration-300">
                                <FaVk size={22} />
                                <span className="text-[9px] font-black uppercase tracking-wider">VK</span>
                            </div>
                        </a>

                        <a
                            href="https://t.me/sibsutis_info"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center justify-center w-14 h-14 bg-transparent border-2 border-[var(--accent)] shadow-[4px_4px_0px_0px_var(--accent)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--accent)] transition-all duration-200 -skew-x-6 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[var(--accent)] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
                            <div className="relative z-10 flex flex-col items-center gap-0.5 skew-x-6 text-white group-hover:text-[var(--background)] transition-colors duration-300">
                                <FaTelegram size={22} />
                                <span className="text-[9px] font-black uppercase tracking-wider">TG</span>
                            </div>
                        </a>

                        <a
                            href="https://max.ru/id5405101327_biz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center justify-center w-14 h-14 bg-transparent border-2 border-[var(--accent)] shadow-[4px_4px_0px_0px_var(--accent)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--accent)] transition-all duration-200 -skew-x-6 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[var(--accent)] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
                            <div className="relative z-10 flex flex-col items-center gap-0.5 skew-x-6 text-white group-hover:text-[var(--background)] transition-colors duration-300">
                                <Image
                                    src="https://maxicons.ru/icons/Max_logo.svg"
                                    alt="MAX"
                                    width={22}
                                    height={22}
                                    className="transition-all duration-300"
                                />
                                <span className="text-[9px] font-black uppercase tracking-wider">Макс</span>
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-wrap gap-6 text-[10px] font-black uppercase tracking-wider">
                        <button className="hover:text-[var(--accent)] transition-colors">Карта сайта</button>
                        <button className="hover:text-[var(--accent)] transition-colors">Политика конфиденциальности</button>
                        <span>© 2026 СибГУТИ. Все права защищены.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}