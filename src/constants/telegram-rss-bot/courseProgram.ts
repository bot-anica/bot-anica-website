import { Lesson } from '@/types/sections';

export const LESSONS: Lesson[] = [
  {
    id: 1,
    title: "Настройка окружения",
    description:
      "Создание виртуального окружения, структуры проекта и установка зависимостей",
    result: "Проект инициализирован",
    icon: 'Settings',
  },
  {
    id: 2,
    title: "Структуры данных и компоненты",
    description:
      "Проектирование TypedDict для NewsArticle и базовых компонентов бота",
    result: "Создана основа для разработки",
    icon: 'Cuboid',
  },
  {
    id: 3,
    title: "Получение RSS данных",
    description:
      "Функции для получения и анализа RSS лент, маппинг в NewsArticle",
    result: "Реализовано получение данных",
    icon: 'Rss',
  },
  {
    id: 4,
    title: "Фильтрация и форматирование",
    description:
      "Фильтрация новостей по ключевым словам и форматирование для Telegram",
    result: "Данные готовы для использования",
    icon: 'Funnel',
  },
  {
    id: 5,
    title: "Отправка сообщений",
    description:
      "Отправка сообщений в Telegram канал и уведомления администратора",
    result: "Реализована отправка сообщений",
    icon: 'Send',
  },
  {
    id: 6,
    title: "Интеграция MVP",
    description: "Объединение всех компонентов в единый main.py скрипт",
    result: "Рабочий MVP бот с логированием",
    icon: 'Play',
  },
  {
    id: 7,
    title: "Обогащение метаданными",
    description: "Извлечение описаний и изображений из источников новостей",
    result: "Добавлены картинки и описания",
    icon: 'Image',
  },
  {
    id: 8,
    title: "Множественные источники",
    description: "Поддержка нескольких RSS источников с расширяемыми мапперами",
    result: "Добавлен источник новостей",
    icon: 'Globe',
  },
  {
    id: 9,
    title: "История публикаций",
    description: "Сохранение истории в SQLite для предотвращения дубликатов",
    result: "Добавлена база данных SQLite",
    icon: 'History',
  },
  {
    id: 10,
    title: "Миграция на PostgreSQL",
    description: "Переход с SQLite на PostgreSQL с использованием Neon.tech",
    result: "Добавлена база данных PostgreSQL",
    icon: 'Database',
  },
  {
    id: 11,
    title: "Рефакторинг и деплой",
    description: "Рефакторинг кода и развертывание на Render.com",
    result: "Выложили проект на сервер",
    icon: 'Rocket',
  },
  {
    id: 12,
    title: "Архитектура ядра",
    description: "Выделение логики в отдельный репозиторий с субмодулями",
    result: "Сделали ядро переиспользуемым",
    icon: 'Package',
  },
];