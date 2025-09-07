import { PartialSectionBGImagesProps } from '@/types/sections';

export const SECTION_HEADERS = {
  whySpecial: {
    title: "Почему наш курс особенный?",
    subtitle: "Мы не просто учим создавать ботов — мы формируем профессиональное мышление разработчика",
  },
  features: {
    title: "Что вы получите",
    subtitle: "Комплексный подход к обучению, который даст вам все необходимые навыки",
  },
  pathToSuccess: {
    title: 'Как стать профессионалом в Telegram-ботах',
    subtitle: 'Следуйте нашему пути от идеи до продакшена',
  },
  problemSolution: {
    title: "Проблемы и решения",
    subtitle: "Большинство разработчиков сталкиваются с этими вызовами. Мы знаем, как их решить.",
  },
  successStories: {
    title: "Истории успеха наших студентов",
    subtitle: "Реальные результаты людей, которые прошли курс и применили знания на практике",
  },
  courseProgram: {
    title: "Программа курса",
    subtitle: "12 практических уроков, каждый из которых приводит к конкретному результату",
  },
  faq: {
    title: "Частые вопросы",
    subtitle: "Ответы на самые популярные вопросы о курсе",
  },
  pricingPlans: {
    title: "Выберите свой пакет",
    subtitle: "Все материалы предоставляются с доступом навсегда. Никаких подписок или скрытых платежей.",
  }
};

export const SECTION_BG_IMAGES: Record<string, PartialSectionBGImagesProps> = {
  hero: {
    topRight: {
      extraLarge: '/images/heroBG/HeroBG-ExtraLarge.png',
      large: '/images/heroBG/HeroBG-Large.png',
      medium: '/images/heroBG/HeroBG-MediumHorizontal.png',
      mediumVertical: '/images/heroBG/HeroBG-MediumVertical.png',
      small: '/images/heroBG/HeroBG-SmallHorizontal.png',
      smallVertical: '/images/heroBG/HeroBG-SmallVertical.png',
    },
  },
  problemSolution: {
    left: {
      small: "/images/leftSideBG/LeftSideBG-Small.jpg",
      medium: "/images/leftSideBG/LeftSideBG-Medium.jpg",
      large: "/images/leftSideBG/LeftSideBG-Large.jpg",
      extraLarge: "/images/leftSideBG/LeftSideBG-ExtraLarge.jpg",
    },
    right: {
      small: "/images/rightSideBG/RightSideBG-Small.jpg",
      medium: "/images/rightSideBG/RightSideBG-Medium.jpg",
      large: "/images/rightSideBG/RightSideBG-Large.jpg",
      extraLarge: "/images/rightSideBG/RightSideBG-ExtraLarge.jpg",
    }
  },
  whySpecial: {
    left: {
      small: "/images/leftSideBG/LeftSideBG-Small.jpg",
      medium: "/images/leftSideBG/LeftSideBG-Medium.jpg",
      large: "/images/leftSideBG/LeftSideBG-Large.jpg",
      extraLarge: "/images/leftSideBG/LeftSideBG-ExtraLarge.jpg",
    },
    right: {
      small: "/images/rightSideBG/RightSideBG-Small.jpg",
      medium: "/images/rightSideBG/RightSideBG-Medium.jpg",
      large: "/images/rightSideBG/RightSideBG-Large.jpg",
      extraLarge: "/images/rightSideBG/RightSideBG-ExtraLarge.jpg",
    }
  },
  courseProgram: {
    bottom: {
      small: "/images/courseProgramBG/CourseProgramBG-Small.jpg",
      medium: "/images/courseProgramBG/CourseProgramBG-Medium.jpg",
      large: "/images/courseProgramBG/CourseProgramBG-Large.jpg",
    } 
  },
  popularCard: {
    bottom: {
      small: "/images/courseProgramBG/CourseProgramBG-Small.jpg",
    },
    topRight: {
      smallVertical: '/images/heroBG/HeroBG-SmallVertical.png',
    },
  }
};

// Глобальные настройки SEO для сайта
export const DEFAULT_SEO_CONFIG = {
  title: undefined as string | undefined,
  siteName: 'Курс по созданию Telegram-ботов',
  description: 'Изучите создание Telegram-ботов с нуля. Практический курс с реальными проектами, автоматизацией и монетизацией. Получите навыки программирования и создайте своего первого бота.',
  keywords: 'telegram бот, курс программирования, python, автоматизация, чат-бот, разработка, обучение, программирование с нуля',
  image: '/og-cover.jpg',
  url: undefined as string | undefined,
  locale: 'ru_RU',
  twitterCard: 'summary_large_image' as const,
  type: 'website' as 'website' | 'article',
  noIndex: undefined as boolean | undefined
};

// Предустановленные конфигурации для разных страниц
export const PAGE_SEO_CONFIGS = {
  home: {
    title: 'Создание Telegram-ботов с нуля',
    description: 'Изучите создание Telegram-ботов с нуля. Практический курс с реальными проектами, автоматизацией и монетизацией. Получите навыки программирования и создайте своего первого бота.',
    keywords: 'telegram бот, курс программирования, python, автоматизация, чат-бот, разработка, обучение, программирование с нуля'
  },
  payment: {
    title: 'Оплата курса',
    description: 'Выберите подходящий тариф и начните изучение создания Telegram-ботов. Безопасная оплата, мгновенный доступ к материалам.',
    keywords: 'оплата курса, telegram бот, тарифы, обучение программированию',
    noIndex: true // Скрываем страницу оплаты от индексации
  },
};