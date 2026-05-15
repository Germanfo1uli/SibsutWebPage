# Project Structure Documentation
## Структура проекта

```
src/
├── app/                    # Next.js app router и pages
│   ├── layout.tsx         # Root layout компонент
│   ├── page.tsx           # Main page
│   ├── globals.css        # Глобальные стили
│   ├── not-found.tsx      # 404 страница
│   ├── freshmen/          # Страница для абитуриентов
│   └── zhizn-studentov-sibguti/  # Страница студентов
│
├── components/             # Переиспользуемые компоненты
│   ├── index.ts           # Экспорты компонентов
│   ├── layout/            # Layout компоненты (Header, Footer)
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── common/            # Общие компоненты
│   └── sections/          # Секции страниц
│
├── providers/             # React context providers
│   ├── index.ts
│   └── TransitionProvider.tsx
│
├── lib/                   # Утилиты и хелперы
│
├── types/                 # TypeScript типы и интерфейсы
│
├── constants/             # Константы приложения
│   ├── index.ts
│   └── navigation.ts
│
└── assets/                # Статические файлы (изображения, иконки)
```


## Запуск проекта

```bash
pnpm install      
pnpm run dev      
```
