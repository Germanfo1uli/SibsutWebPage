"use client";

import {
    LuCrown,
    LuArrowUpRight,
    LuGraduationCap,
    LuTrophy,
    LuMicroscope,
    LuPalette,
    LuUsers,
    LuFileText,
    LuTriangleAlert,
    LuChevronRight,
    LuWallet,
} from "react-icons/lu";

export default function ScholarshipSection() {
    const activities = [
        {
            icon: LuMicroscope,
            title: "Наука",
            hint: "Спроси в дирекции"
        },
        {
            icon: LuTrophy,
            title: "Спорт",
            hint: "Спроси на парах по физре"
        },
        {
            icon: LuGraduationCap,
            title: "Учеба",
            hint: "Спроси в дирекции"
        },
        {
            icon: LuPalette,
            title: "Общество",
            hint: "Следи за ",
            link: "https://vk.com/sibguti_info",
            linkText: "сообществом"
        },
        {
            icon: LuUsers,
            title: "Творчество",
            hint: "Спроси в к1, 508 каб."
        },
    ];

    const amounts = [
        {label: "Академическая (4 и 5)", value: "3 300 ₽"},
        {label: "Социальная", value: "4 200 ₽"},
        {label: "Повышенная", value: "от 12 000 ₽"},
    ];

    const pdfLink = "https://sibsutis.ru/students/info/%D0%A1%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BE%D0%B1%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9%20%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4%D0%B5%20%D1%81%20%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BD%D0%B0%20%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE%D0%B5.pdf";

    return (
        <section id="scholarship" className="py-20">
            <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
                <div
                    className="relative overflow-hidden rounded-[40px] bg-white p-6 md:p-12 lg:p-16 border-4 border-[var(--foreground)] shadow-[12px_12px_0px_0px_var(--foreground)]">

                    <div className="relative z-10 mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div className="max-w-3xl">
                            <div
                                className="inline-block px-4 py-1 mb-6 bg-[var(--accent)] text-white font-black uppercase tracking-widest -rotate-2 border-2 border-[var(--foreground)]">
                                Уровень 05 / стипендия
                            </div>
                            <h2 className="text-4xl sm:text-6xl lg:text-9xl font-black tracking-tighter leading-none uppercase text-[var(--foreground)] break-words">
                                ДЕНЬГИ И <span className="comic-title text-[var(--accent)]">БОНУСЫ</span>
                            </h2>
                        </div>

                        <div
                            className="bg-[var(--accent)] border-4 border-[var(--foreground)] p-6 rotate-1 shadow-[8px_8px_0px_0px_var(--foreground)]">
                            <div className="text-[10px] font-black uppercase text-white mb-1 italic">Ежемесячная
                                выплата
                            </div>
                            <div
                                className="text-xl sm:text-2xl font-black uppercase leading-none italic flex items-center gap-2 text-white">
                                <LuWallet className="text-white shrink-0"/> СТИПЕНДИЯ
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

                        <div
                            className="lg:col-span-12 bg-[var(--accent)] text-white p-6 sm:p-8 md:p-12 border-4 border-[var(--foreground)] shadow-[12px_12px_0px_0px_var(--foreground)] relative overflow-hidden group">
                            <div
                                className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                                <div className="max-w-2xl">
                                    <div
                                        className="inline-block bg-white px-3 py-1 text-[var(--accent)] font-black text-[10px] uppercase mb-6 -rotate-1">
                                        Бонус первокурсника
                                    </div>
                                    <h3 className="text-3xl md:text-7xl font-black uppercase italic leading-none mb-6 text-white break-words">
                                        ЕГЭ-ДЖЕКПОТ
                                    </h3>
                                    <p className="text-base sm:text-lg md:text-xl font-bold uppercase leading-tight text-white">
                                        Ты поступил с высокими баллами? Лови повышенную стипендию на первом курсе.
                                        Университет ценит твой старт!
                                    </p>
                                    <div className="mt-8 flex items-center gap-3 text-white">
                                        <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">Узнай свой бонус в приёмной комиссии</span>
                                    </div>
                                </div>
                                <div className="shrink-0 w-full md:w-auto">
                                    <a
                                        href="https://sibsutis.ru/sveden/grants/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 bg-white !text-[var(--accent)] px-8 sm:px-10 py-6 border-2 border-[var(--foreground)] font-black uppercase text-xs sm:text-sm hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[8px_8px_0px_0px_var(--foreground)] hover:shadow-none w-full md:w-auto"
                                    >
                                        Приёмная комиссия <LuArrowUpRight size={24} className="text-[var(--accent)] shrink-0" />
                                    </a>
                                </div>
                            </div>
                            <LuTrophy size={300}
                                      className="absolute -right-20 -bottom-20 opacity-10 text-white group-hover:rotate-12 transition-transform duration-700 pointer-events-none"/>
                        </div>

                        <div
                            className="lg:col-span-4 bg-[var(--accent)] text-white p-6 sm:p-8 border-4 border-[var(--foreground)] shadow-[8px_8px_0px_0px_var(--foreground)]">
                            <h3 className="text-xl sm:text-2xl font-black uppercase italic mb-8 text-white">
                                Сколько платят?
                            </h3>
                            <div className="space-y-6">
                                {amounts.map((item, i) => (
                                    <div key={i} className="border-b-2 border-white/20 pb-4">
                                        <div
                                            className="text-[10px] font-black uppercase opacity-80 mb-1">{item.label}</div>
                                        <div className="text-3xl sm:text-4xl font-black tracking-tighter break-words">{item.value}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-[9px] font-bold uppercase leading-tight opacity-70">
                                * Суммы указаны без учета районного коэффициента. Выплаты приходят на карту «ВТБ».
                            </p>
                        </div>

                        <div
                            className="lg:col-span-8 bg-white border-4 border-[var(--foreground)] p-6 sm:p-10 shadow-[8px_8px_0px_0px_var(--accent)] relative overflow-hidden group flex flex-col justify-between">
                            <div className="relative z-10">
                                <h3 className="text-3xl sm:text-4xl font-black uppercase italic mb-6 text-[var(--accent)] break-words">Как не
                                    потерять?</h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <p className="text-base sm:text-lg font-bold leading-snug uppercase opacity-90 text-[var(--foreground)]">
                                        Стипендию получают отличники и хорошисты<br className="hidden sm:block" /> на бюджете.
                                    </p>
                                    <div
                                        className="flex items-center gap-4 bg-[var(--accent)] text-white p-4 border-2 border-[var(--foreground)] -rotate-1 self-start">
                                        <LuTriangleAlert className="text-white shrink-0" size={24}/>
                                        <span className="text-[10px] font-black uppercase tracking-tight">
                                            Ее можно лишиться при «удовлетворительно» или долгах<br className="hidden sm:block" /> по сессии
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="mt-12 pt-8 border-t-4 border-[var(--foreground)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div>
                                    <h4 className="text-lg sm:text-xl font-black uppercase italic mb-2 text-[var(--accent)] break-words">Перевод
                                        на бюджет</h4>
                                    <p className="text-[10px] font-bold uppercase opacity-70">2 сессии без троек +
                                        заявление в дирекцию института</p>
                                </div>
                                <a
                                    href={pdfLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full md:w-auto gap-2 bg-[var(--accent)] px-6 py-4 sm:py-3 border-2 border-[var(--foreground)] font-black uppercase text-xs !text-white hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_var(--foreground)] hover:shadow-none"
                                >
                                    <span>Узнать подробнее</span> <LuChevronRight className="shrink-0" />
                                </a>
                            </div>
                            <LuCrown size={240}
                                     className="absolute -right-20 -top-20 opacity-[0.03] text-[var(--foreground)] group-hover:rotate-12 transition-transform duration-1000"/>
                        </div>

                        <div
                            className="lg:col-span-12 bg-white border-4 border-[var(--foreground)] p-6 sm:p-10 shadow-[12px_12px_0px_0px_var(--foreground)]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                                <div>
                                    <div
                                        className="inline-block bg-[var(--accent)] px-3 py-1 text-white font-black text-[10px] uppercase mb-4">Нужно
                                        больше ЗОЛОТА!
                                    </div>
                                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic leading-none mb-6 text-[var(--accent)] break-words">Повышенная <br className="hidden sm:block" /> стипендия
                                    </h3>
                                    <p className="text-xs sm:text-sm font-bold uppercase opacity-70 mb-8 leading-tight max-w-sm text-[var(--foreground)]">
                                        Выплачивается со 2-го семестра. Требует закрытой сессии на 4 и 5 и
                                        достижений<br className="hidden sm:block" /> в областях:
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {activities.map((act, i) => (
                                            <div key={i}
                                                 className="flex items-center gap-2 bg-gray-100 border-2 border-[var(--foreground)] px-3 py-2 flex-grow sm:flex-grow-0 sm:min-w-[130px]">
                                                <act.icon size={16} className="text-[var(--accent)] shrink-0"/>
                                                <div className="flex flex-col break-words">
                                                    <span
                                                        className="text-[9px] font-black uppercase tracking-tighter leading-none text-[var(--foreground)]">{act.title}</span>
                                                    <span
                                                        className="text-[8px] font-bold uppercase opacity-60 leading-tight mt-0.5 text-[var(--foreground)]">
                                                        {act.hint}
                                                        {act.link && (
                                                            <a
                                                                href={act.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-[var(--accent)] !underline decoration-solid decoration-2 underline-offset-2 font-black ml-0.5"
                                                            >
                                                                {act.linkText}
                                                            </a>
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div
                                    className="bg-[var(--accent)] text-white border-4 border-[var(--foreground)] p-6 sm:p-8 relative shadow-[8px_8px_0px_0px_var(--foreground)] rotate-1">
                                    <LuFileText size={40} className="mb-6 text-white"/>
                                    <h4 className="text-lg sm:text-xl font-black uppercase mb-4 italic break-words">Необходимые действия</h4>
                                    <p className="text-[10px] sm:text-xs font-bold uppercase leading-relaxed mb-6 text-white opacity-90">
                                        Жди анонса конкурса на стипендии от института и загрузи материалы для участия в
                                        портфолио ЭИОС
                                    </p>
                                    <a
                                        href="https://eios.sibsutis.ru/login/index.php"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-4 px-4 sm:px-6 bg-[var(--foreground)] text-white border-2 border-white/20 font-black uppercase text-[10px] sm:text-xs tracking-widest flex items-center justify-center transition-all duration-300 ease-in-out relative select-none subpixel-antialiased hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#fff] hover:border-white active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer transform-gpu text-center" ><span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Личный кабинет</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div
                            className="lg:col-span-12 bg-white border-4 border-[var(--foreground)] p-6 sm:p-10 shadow-[12px_12px_0px_0px_var(--foreground)]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                <div>
                                    <div
                                        className="inline-block bg-[var(--accent)] px-3 py-1 text-white font-black text-[10px] uppercase mb-4">Господдержка
                                    </div>
                                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic leading-none mb-6 text-[var(--accent)] break-words">Социальная <br className="hidden sm:block" /> стипендия
                                    </h3>
                                    <p className="text-xs sm:text-sm font-bold uppercase opacity-70 mb-6 leading-tight max-w-md text-[var(--foreground)]">
                                        Назначается студентам очной формы на бюджете, попадающим в категории:
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        <li className="flex items-start gap-2 text-[var(--foreground)]">
                                            <LuChevronRight className="text-[var(--accent)] shrink-0 mt-0.5" size={16}/>
                                            <span className="text-xs sm:text-sm font-bold uppercase leading-tight break-words">Дети-сироты и оставшиеся без попечения родителей</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-[var(--foreground)]">
                                            <LuChevronRight className="text-[var(--accent)] shrink-0 mt-0.5" size={16}/>
                                            <span className="text-xs sm:text-sm font-bold uppercase leading-tight break-words">Потерявшие обоих или единственного родителя в период обучения</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-[var(--foreground)]">
                                            <LuChevronRight className="text-[var(--accent)] shrink-0 mt-0.5" size={16}/>
                                            <span className="text-xs sm:text-sm font-bold uppercase leading-tight break-words">Дети-инвалиды, инвалиды I и II групп, инвалиды с детства</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-[var(--foreground)]">
                                            <LuChevronRight className="text-[var(--accent)] shrink-0 mt-0.5" size={16}/>
                                            <span className="text-xs sm:text-sm font-bold uppercase leading-tight break-words">Подвергшиеся воздействию радиации (ЧАЭС, Семипалатинск и др.)</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-[var(--foreground)]">
                                            <LuChevronRight className="text-[var(--accent)] shrink-0 mt-0.5" size={16}/>
                                            <span className="text-xs sm:text-sm font-bold uppercase leading-tight break-words">Инвалиды военной травмы, ветераны боевых действий, контрактники (от 3 лет)</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-[var(--foreground)]">
                                            <LuChevronRight className="text-[var(--accent)] shrink-0 mt-0.5" size={16}/>
                                            <span className="text-xs sm:text-sm font-bold uppercase leading-tight break-words">Получившие государственную социальную помощь</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div
                                        className="bg-[var(--accent)] text-white p-6 sm:p-8 border-4 border-[var(--foreground)] shadow-[8px_8px_0px_0px_var(--foreground)] -rotate-1">
                                        <LuFileText size={32} className="mb-4 text-white"/>
                                        <h4 className="text-lg sm:text-xl font-black uppercase mb-3 italic break-words">Оформление</h4>
                                        <p className="text-[10px] sm:text-xs font-bold uppercase leading-relaxed mb-4 text-white opacity-90">
                                            С момента предоставления оригинала справки на период её действия. Необходимо
                                            личное заявление на имя ректора СибГУТИ.
                                        </p>
                                        <div className="flex flex-wrap items-center gap-2 mb-6">
                                            <span
                                                className="text-[10px] font-black uppercase tracking-tight bg-white text-[var(--accent)] px-2 py-1 whitespace-nowrap">
                                                Куда обращаться?
                                            </span>
                                            <span
                                                className="text-[10px] font-black uppercase italic text-white underline underline-offset-4 decoration-white decoration-2 break-words">В дирекцию института</span>
                                        </div>
                                        <a
                                            href="https://sibsutis.ru/students/info/Сведения%20об%20образовательной%20организации/Положение%20о%20стипендиальном%20обеспечении.pdf"
                                            className="w-full py-4 px-4 sm:px-6
        inline-flex items-center justify-center gap-2
        bg-[var(--foreground)] text-white
        border-2 border-white/20
        font-black uppercase text-[10px] sm:text-xs tracking-widest text-center
        transition-all duration-300 ease-in-out
        relative
        select-none subpixel-antialiased
        hover:-translate-x-1 hover:-translate-y-1
        hover:shadow-[4px_4px_0px_0px_#fff]
        hover:border-white
        active:translate-x-0 active:translate-y-0 active:shadow-none
        cursor-pointer transform-gpu">
                                            <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Шаблон заявления (Приложение №3)</span>
                                        </a>
                                    </div>

                                    <div
                                        className="bg-gray-100 border-4 border-[var(--foreground)] p-5 sm:p-6 shadow-[8px_8px_0px_0px_var(--foreground)] rotate-1 transition-transform hover:rotate-0">
                                        <h4 className="text-base sm:text-lg font-black uppercase mb-4 flex items-center gap-2 text-[var(--accent)]">
                                            <LuTriangleAlert className="text-red-500 shrink-0"/> ВАЖНО
                                        </h4>
                                        <ul className="space-y-3">
                                            <li className="text-[9px] font-bold uppercase leading-tight opacity-80 border-l-2 border-[var(--accent)] pl-2 text-[var(--foreground)] break-words">
                                                Если статус появился в течение учебного года — не ждите сентября,
                                                обращайтесь сразу.
                                            </li>
                                            <li className="text-[9px] font-bold uppercase leading-tight opacity-80 border-l-2 border-[var(--accent)] pl-2 text-[var(--foreground)] break-words">
                                                Справка из соцзащиты оформляется на портале «Госуслуги», действительна 1
                                                год.
                                            </li>
                                            <li className="text-[9px] font-bold uppercase leading-tight opacity-80 border-l-2 border-[var(--accent)] pl-2 text-[var(--foreground)] break-words">
                                                Назначается вне зависимости от успеваемости.<br className="hidden sm:block" /> Студенты 1-2 курсов
                                                (на 4 и 5) имеют право на <span
                                                className="text-[var(--accent)] font-black underline decoration-2 underline-offset-2">повышенную</span> социальную
                                                стипендию.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}