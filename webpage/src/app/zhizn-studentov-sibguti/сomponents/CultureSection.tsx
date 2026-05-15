"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuMusic4, LuPalette, LuUsers, LuArrowRight, LuCode, LuBox, LuBinary, LuLayoutList, LuRadio, LuMicroscope, LuFlag, LuMonitor, LuChevronDown, LuChevronUp, LuHeart, LuBriefcase, LuWaves, LuLanguages, LuSmile, LuPenTool, LuLightbulb, LuMapPin, LuX } from "react-icons/lu";

const stories = [
    {
        image: "https://sun9-61.userapi.com/s/v1/ig2/QE0i807xYrh3jFniFYZNScOIYnb-56oUElDf6HF1l0zARx_GSs-UCp4bIsnQYbbTf73gMD07-od46hURPeYQB_9c.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2000x1333&from=bu&cs=2000x0",
        pill: "Творчество",
        icon: <LuMusic4 size={18} />,
        title: "Студклуб им Ю. Ягодина",
        text: <>Место, где твои таланты заметят все:<br/> от академического хора до джаз-ансамблей. Стань звездой университетских мероприятий!</>,
        button: "Зажечь сцену",
        link: "https://vk.com/studclubsib"
    },
    {
        image: "https://sun9-84.userapi.com/s/v1/ig2/uAk6rmg13ySiy3547jzDOcPEKtVHauqDI-NxAgfmpY8u9tVKstOv4l_7-hVOM0Wio60vRETnV12CSgM958IGeDKx.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&cs=2560x0",
        pill: "Команда",
        icon: <LuUsers size={18} />,
        title: "Студенческие отряды",
        text: "Работа летом, настоящая дружба, романтика поездок и крутые проекты. Найди своих людей в лучшем движении страны!",
        button: "Стать частью отряда",
        link: "https://vk.com/shso_sibguti",
    },
    {
        image: "https://sun9-23.userapi.com/s/v1/ig2/bbnpGt3K9zlCKtKP-CLRWfNvc3i9ydA_m7EQcYWREVJqOOAr_9V85CXfVJ8kMcSIPR-l3Q0pnBnCQdQqR5KDigN8.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2000x1333&from=bu&cs=2000x0",
        pill: "IT-Спорт",
        icon: <LuCode size={18} />,
        title: "Спортивное программирование",
        text: "Регулярные победы на ICPC и олимпиадах. Тренировки по сложным алгоритмам для будущих профессионалов индустрии.",
        button: "Покорить олимп кодинга",
        link: "https://vk.com/club202905180"
    },
    {
        image: "https://www.virginmegastore.ae/medias/5.webp?context=bWFzdGVyfGltYWdlc3w2MjgzMTJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGFEVmxMMmd4WkM4eE1ETTNOVGN6TlRrMk56YzNOQzgxTG5kbFluQXwzOWRkNDVjM2NiNjAxZDg0ZTVlMmM1ZDA5YTE2YjE1ZDk5N2YyOWQxMmZhNzc1MGI1Mjg0MzcwZjYzZDgxZDRm",
        pill: "Геймдев",
        icon: <LuBox size={18} />,
        title: "Разработка 2D/3D графики",
        text: "Создание моделей, анимаций и полноценных игр на Unity. Пройди путь от идеи до публикации собственного проекта.",
        button: "Узнать контакты",
        link: "#",
        info: "Кафедра сапр, организатор: Максим Щеглов"
    },
    {
        image: "https://sun9-81.userapi.com/s/v1/ig2/ijmenL35NenRj4-6uAHPtPYnpxHFvhWh9UpKF5dSKBB0yOpg5lRvvRP9dHq4IxSrrBrDwZ7p_C3H-7HO4G4DFOov.jpg?quality=95&as=32x27,48x40,72x60,108x90,160x133,240x200,360x300,480x401,540x451,640x534,720x601,1080x901,1280x1068,1440x1202,2349x1960&from=bu&u=aqrYTb3v-_8mNBZd34uBrXn2HyIuQUyZ5w06xgnWa6o&cs=2349x0",
        pill: "Наука",
        icon: <LuBinary size={18} />,
        title: "Математический клуб",
        text: "Нескучная математика: интеллектуальные квизы, авторские мастер-классы и серьезная подготовка к олимпиадам.",
        button: "Узнать контакты",
        link: "#",
        info: <>Кафедра высшей математики, Организаторы:<br/> Храмова Татьяна Викторовна,<br/>Козлова Марина Петровна</>
    },
    {
        image: "https://humanswith.ai/wp-content/uploads/2025/07/1-13.jpg",
        pill: "Дизайн",
        icon: <LuLayoutList size={18} />,
        title: "Кружок веб-дизайна",
        text: <>Создание современных интерфейсов <br/>и архитектура веб-приложений в Лаборатории Цифровизации СибГУТИ.</>,
        button: "Узнать контакты",
        link: "#",
        info: <>Лаборатория Цифровизации<br/> корпус № 5 ауд. К1, К2.</>
    },
    {
        image: "https://sun9-51.userapi.com/s/v1/ig2/1snayWJohHgGOpwyGDbXkja9yR1-qdyA8Y1bh7TzLO-BK8teuHt-ukOtPH2PjD-_Mim8kZ3P-SIvhzdYTaAEbU7M.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2000x1333&from=bu&u=qTpLqHs8QV2t6lF8cEko7T8gNGXyypIbAK3N4vIm_Js&cs=2000x0",
        pill: "Связь",
        icon: <LuRadio size={18} />,
        title: "Радиоклуб UB8O",
        text: "Выходи в эфир на КВ и УКВ частотах. Настоящий радиоспорт, работа с оборудованием и высокие технологии связи.",
        button: "Выйти в эфир",
        link: "https://vk.com/radioclub_ub8o",
    },
    {
        image: "https://sibsutis.ru/upload/iblock/a2a/05-12-2025-Наука_0+-33.jpg",
        pill: "Исследования",
        icon: <LuMicroscope size={18} />,
        title: "Научное общество (СНО)",
        text: "Гранты, научные конференции и реальные исследовательские проекты. Начни свою карьеру ученого уже сегодня.",
        button: "Заняться наукой",
        link: "https://sibsutis.ru/science/studencheskoe-nauchnoe-obshchestvo-sno.php",
    },
    {
        image: "https://flagfs.ru/content/partii/molodaya-gvardiya-icon.jpg",
        pill: "Патриотика",
        icon: <LuFlag size={18} />,
        title: "Клуб «Молодая Гвардия»",
        text: "Крупнейшая молодежная организация. Реализуй себя в социальных и патриотических проектах.",
        button: "Узнать контакты",
        link: "#",
        info: "Нет данных"
    },
    {
        image: "https://sun9-42.userapi.com/s/v1/ig1/dM6q6HMGi7Z9nEVVYHlGVkRqhzeiqHKVEEc-RkeSwzlfP0lwRlevIKzm1DHg8lImqeYz4sFD.jpg?quality=96&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2000x1333&from=bu&cs=2000x0",
        pill: "Киберспорт",
        icon: <LuMonitor size={18} />,
        title: "CYBSUTIS",
        text: "Турниры по CS2, Dota 2 и другим дисциплинам. Тренируйся на базе вуза и представляй СибГУТИ на арене страны.",
        button: "Войти в игру",
        link: "https://vk.com/cybsutis"
    },
    {
        image: "https://sun9-28.userapi.com/s/v1/ig2/RY8sY3n631CvgB2EDVDbBKDITivTKYYb8l371-wOed1eVqiKVPe6bZD6MIGkkfeQqZvgUl0oXhJWlqwra5Hvx_uQ.jpg?quality=96&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x721,1280x854&from=bu&u=3-raFUfIJoAhERxksQjhj-4IPg0Gxkz4QsiibIuGn5Q&cs=1280x0",
        pill: "Помощь",
        icon: <LuHeart size={18} />,
        title: "Добро.Центр",
        text: "Волонтерство любого уровня и крутой мерч. Помогай людям делом в команде Перепелицы Александра Викторовича.",
        button: "Стать волонтером",
        link: "https://vk.com/vol_k_sibsutis"
    },
    {
        image: "https://sun9-15.userapi.com/s/v1/ig2/miJuvbs_2Lv74gq_sOdfOZ6S7naqoN1-M4t2kKHiWbKjvRIQW0ndLbbzC7SFogh_lZ6gcXaPIjdjUlkIup9m3y5b.jpg?quality=96&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x721,1280x854&from=bu&u=kg5Gt54zudrOliO_dPj7d94UoAqI0QVveW_akdkVQ4A&cs=1280x0",
        pill: "Поддержка",
        icon: <LuBriefcase size={18} />,
        title: "Профком студентов",
        text: "Твой главный союзник. Решаем проблемы, развиваем soft skills и строим надежное комьюнити.",
        button: "Присоединиться к нам",
        link: "https://vk.com/profkom_sibguti"
    },
    {
        image: "https://sun9-38.userapi.com/s/v1/ig2/sfBxlezuv3wFbF74CT2pXDQwDh6MvkAjmYpn1o3WSVQVKgGt3ef8epT-jbEcrXh4dI2ODm9s_DaUic2cf95HkxRj.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&cs=1920x0",
        pill: "Спортклуб",
        icon: <LuWaves size={18} />,
        title: "СК «Акулы»",
        text: <>Баскетбол, волейбол, дартс и тир. Тренируйся<br/> в сборных и участвуй в международных соревнованиях.</>,
        button: "Ныряй в спорт",
        link: "https://vk.com/club158222637"
    },
    {
        image: "https://static.vecteezy.com/system/resources/previews/029/311/702/non_2x/cartoon-color-character-woman-and-english-language-online-service-concept-vector.jpg",
        pill: "English",
        icon: <LuLanguages size={18} />,
        title: "Speaking English Club",
        text: "Развивай навыки живого общения на английском с Пановой Юлией Владимировной в 5 корпусе СибГУТИ.",
        button: "Узнать контакты",
        link: "#",
        info: "Корпус № 5, Кафедра иностранных и русского языков"
    },
    {
        image: "https://sun9-21.userapi.com/s/v1/ig2/mJg3eoVMhsYXKorMgjYiavzl4P5jLSAQfsWRoXJ6toM4mBzVIaTIeUv9N3-bb2WhRuk5svG9DnN3kSLZY3HdKsvU.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2000x1333&from=bu&cs=2000x0",
        pill: "Психология",
        icon: <LuSmile size={18} />,
        title: "Клуб «ТВОЯ СРЕДА»",
        text: <>Индивидуальные консультации и тренинги в 1 и 5 корпусах. Твоя психологическая опора здесь.</>,
        button: "Узнать контакты",
        link: "#",
        info: " Корпус № 5 (547 каб), Корпус № 1 (505 каб)"
    },
    {
        image: "https://sun9-42.userapi.com/s/v1/ig2/kE6yuaBNh35Km4gMNxhY6D8Az_WZ3kN6GNoq2lunqk0aa0phr581_ZugYDQGPlxwnOFYPiWIbNAqecXlWv2u4f4B.jpg?quality=95&crop=0,0,1080,1080&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&from=bu&u=5FVXGPOsYojFlXTVjklfgZWeVwJYohtuC1eRLd9T63U&cs=1080x0",
        pill: "Поэзия",
        icon: <LuPenTool size={18} />,
        title: "Поэтический клуб",
        text: <>Творческие вечера по средам в библиотеке<br/> 3 корпуса. Читаем любимые строки <br/>с Балабан Ириной Вячеславовной.</>,
        button: "Читать и творить",
        link: "https://vk.com/club237066885"
    },
    {
        image: "https://sun9-53.userapi.com/s/v1/ig2/fMbx0ZsNHeO_mbxilFPEO9oNhLzBnosk4g34QU0GmpChFx2rJmB5d2MH9Eg16O0uyUWtneGD2IjOaLI4EosXsMRD.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2000x1333&from=bu&u=N6WWQPp1ugXQLSRhJEOwre6L6_b8a7eYrF1FUcrAosI&cs=2000x0",
        pill: "Мысль",
        icon: <LuLightbulb size={18} />,
        title: "Школа мысли",
        text: <>Живые философские дискуссии на кафедре истории. Учись аргументировать и смотреть <br/>на мир под иным углом.</>,
        button: "Узнать контакты",
        link: "#",
        info: "Кафедра философии и истории СибГУТИ"
    }
];

const SkeletonCard = () => (
    <div className="flex flex-col bg-[var(--background)] border-4 border-[var(--foreground)] shadow-[8px_8px_0px_0px_var(--foreground)] animate-pulse">
        <div className="h-48 sm:h-72 w-full bg-[var(--foreground)]/10 border-b-4 border-[var(--foreground)]" />
        <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col">
            <div className="h-8 w-3/4 bg-[var(--foreground)]/20 mb-4" />
            <div className="h-4 w-full bg-[var(--foreground)]/20 mb-2" />
            <div className="h-4 w-5/6 bg-[var(--foreground)]/20 mb-8" />
            <div className="mt-auto h-12 w-full bg-[var(--foreground)]/20 border-2 border-[var(--foreground)]" />
        </div>
    </div>
);

export default function CultureSection() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [activeInfo, setActiveInfo] = useState<string | null>(null);

    const visibleStories = isExpanded ? stories : stories.slice(0, 3);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    const handleButtonClick = (story: (typeof stories)[0]) => {
        if (activeInfo === story.title) {
            setActiveInfo(null);
            return;
        }

        if (story.link !== "#") {
            window.open(story.link, "_blank", "noopener,noreferrer");
        } else if (story.info) {
            setActiveInfo(story.title);
        }
    };

    return (
        <section id="culture" className="py-20">
            <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
                <div className="relative overflow-hidden rounded-[40px] bg-[var(--background)] p-6 md:p-12 lg:p-16 border-4 border-[var(--foreground)] shadow-[12px_12px_0px_0px_var(--foreground)]">

                    <div className="relative z-10 mb-16 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 bg-[var(--accent)] text-white font-black uppercase tracking-widest -rotate-2 border-2 border-[var(--foreground)]">
                                <LuPalette size={16} /> Культура и отдых
                            </div>
                            <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-none uppercase text-[var(--foreground)] break-words">
                                ЖИВИ <span className="comic-title text-[var(--accent)]">ЯРКО</span>
                            </h2>
                        </div>
                        <div className="bg-[var(--accent)] border-4 border-[var(--foreground)] p-6 rotate-1 shadow-[8px_8px_0px_0px_var(--foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-default">
                            <div className="text-[10px] font-black uppercase text-white mb-1 italic">Ну где же тот самый?</div>
                            <div className="text-2xl font-black uppercase leading-none italic text-white">Так это же ты!</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {isLoading ? (
                            Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
                        ) : (
                            <AnimatePresence mode="popLayout">
                                {visibleStories.map((story) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        key={story.title}
                                        className="group relative flex flex-col bg-[var(--background)] border-4 border-[var(--foreground)] shadow-[8px_8px_0px_0px_var(--foreground)] transition-all hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_var(--accent)] cursor-default"
                                    >
                                        <div className="relative h-48 sm:h-72 w-full overflow-hidden border-b-4 border-[var(--foreground)]">
                                            <Image
                                                src={story.image}
                                                alt={story.title}
                                                fill
                                                className="object-cover transition-all duration-500 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />

                                            <div className="absolute top-4 left-4 z-10">
                                                <div className="flex items-center gap-2 bg-[var(--accent)] border-2 border-[var(--foreground)] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-[4px_4px_0px_0px_var(--foreground)] -rotate-2 group-hover:rotate-0 transition-transform">
                                                    {story.icon}
                                                    {story.pill}
                                                </div>
                                            </div>

                                            <AnimatePresence>
                                                {activeInfo === story.title && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 20 }}
                                                        className="absolute inset-0 z-20 bg-[var(--accent)] p-4 sm:p-6 flex flex-col justify-center items-center text-center text-white"
                                                    >
                                                        <button
                                                            onClick={(e) => { e.stopPropagation(); setActiveInfo(null); }}
                                                            className="absolute top-2 right-2 p-2 hover:bg-white/20 transition-colors cursor-pointer"
                                                        >
                                                            <LuX size={24} />
                                                        </button>
                                                        <LuMapPin size={40} className="mb-4" />
                                                        <h4 className="font-black uppercase mb-2">Где найти:</h4>
                                                        <p className="text-xs sm:text-sm font-bold uppercase leading-tight">{story.info}</p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        <div className="flex flex-1 flex-col p-4 sm:p-6 md:p-8">
                                            <h3 className="text-xl sm:text-2xl font-black leading-tight uppercase text-[var(--foreground)] mb-4 break-words">
                                                {story.title}
                                            </h3>
                                            <p className="text-[11px] sm:text-xs font-bold leading-relaxed opacity-80 text-[var(--foreground)] mb-8">
                                                {story.text}
                                            </p>

                                            <button
                                                onClick={() => handleButtonClick(story)}
                                                className="mt-auto group/btn relative w-full border-2 border-[var(--foreground)] bg-[var(--accent)] py-3 sm:py-4 px-2 text-[10px] sm:text-[12px] font-black uppercase tracking-widest text-white transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer active:scale-95 break-words"
                                            >
                                                <span className="relative z-10 flex items-center gap-1 sm:gap-2 pointer-events-none drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-center justify-center flex-wrap">
                                                    {activeInfo === story.title ? "Закрыть" : story.button}
                                                    {story.link !== "#" && activeInfo !== story.title && <LuArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />}
                                                </span>
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        )}
                    </div>

                    <div className="mt-16 flex justify-center">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="group relative flex items-center justify-center gap-3 bg-[var(--foreground)] border-4 border-[var(--accent)] px-6 sm:px-12 py-4 sm:py-5 text-[10px] sm:text-[12px] font-black uppercase tracking-[0.15em] text-[var(--background)] transition-all shadow-[8px_8px_0px_0px_var(--accent)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer"
                        >
                            <span className="relative z-10 flex items-center gap-2 sm:gap-3 uppercase tracking-widest pointer-events-none break-words text-center">
                                {isExpanded ? "Свернуть список" : "Развернуть все секции"}
                                {isExpanded ? (
                                    <LuChevronUp size={18} className="transition-transform group-hover:-translate-y-1 flex-shrink-0" />
                                ) : (
                                    <LuChevronDown size={18} className="transition-transform group-hover:translate-y-1 flex-shrink-0" />
                                )}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}