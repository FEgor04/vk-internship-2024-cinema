# Тестовое задание на стажировку ВК

- [https://vk-internship-cinema.vercel.app](https://vk-internship-cinema.vercel.app/)

## Стэк

- React, TypeScript
- Tailwind CSS for styling, shadcn/ui
- TanStack Router, TanStack Query
- eslint, prettier
- [orval.dev](https://orval.dev) для генерации методов API, [msw](https://mswjs.io) для мокирования запросов и [faker-js](https://fakerjs.dev/) для генерации моковых данных

## Страницы
- / - index-страница с описанием тестового задания
- /movies - страница со списком фильмов
- /movies/$id - страница конкретного фильма
- /favorites - страница избранных фильмов

## Запуск

Установите все зависимости
```bash
pnpm install
```

Укажите ключ API в `.env` файле
```bash
echo VITE_KINOPOISK_API_KEY=xxx-xxx > .env
```

Соберите проект
```bash
pnpm run build
```

Запуск в preview-режиме
```bash
pnpm run preview
```

