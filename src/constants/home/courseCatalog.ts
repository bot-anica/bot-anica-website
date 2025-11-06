import { CourseCatalogItemAdditionalData } from "@/types/sections";

export const COURSE_CATALOG_DATA: Record<string, CourseCatalogItemAdditionalData> = {
  "python-basics": {
    tags: ['Python', 'Основы', 'Git'],
    icon: 'Code',
  },
  "telegram-rss-bot-mvp": {
    tags: ['Python', 'Telegram API'],
    icon: 'Bot',
  },
  "telegram-rss-bot": {
    tags: ['Python', 'Telegram API', 'PostgreSQL', 'GitHub Actions'],
    icon: 'Bot',
  },
};