export const NAV_ITEMS = [
    { label: "Жизнь студента", href: "/zhizn-studentov-sibguti" },
    { label: "Памятка абитуриента", href: "/freshmen" },
] as const;

export const SOCIAL_LINKS = {
    VK: {
        url: "https://vk.com/sibguti_info",
        label: "ВКонтакте",
    },
    TELEGRAM: {
        url: "https://t.me/sibsutis_info",
        label: "Telegram",
    },
    MAX: {
        url: "https://max.ru/id5405101327_biz",
        label: "Макс",
    },
} as const;

export const UNIVERSITY_INFO = {
    NAME: "СибГУТИ",
    ADDRESS: "г. Новосибирск, ул. Гурьевская, 51",
    PHONE: "(383) 269-82-34",
    EMAIL: "info@sibsutis.ru",
} as const;

export const FOOTER_CONTACTS = {
    ADMISSION: {
        title: "Приёмная комиссия",
        email: "prikom@sibsutis.ru",
        phones: ["(383) 269-82-28", "(383) 269-82-29"],
    },
    DISTANCE_LEARNING: {
        title: "Заочное обучение",
        link: "do.sibsutis.ru/kak_postupit",
        email: "dist@sibsutis.ru",
        phone: "(383) 269-83-69",
        address: "ул. Кирова, 86, к. 208",
    },
    MAIN_CONTACTS: {
        title: "Основные контакты",
        emails: ["rectorat@sibsutis.ru", "info@sibsutis.ru", "support@sibsutis.ru"],
        phone: "(383) 269-82-34",
    },
    HOURS: {
        title: "Режим работы",
        schedule: {
            weekday: "пн – чт 09:00–17:00",
            friday: "пятница 09:00–16:00",
            weekend: "сб, вс — выходной",
        },
        address: "г. Новосибирск, ул. Гурьевская, 51",
    },
} as const;
