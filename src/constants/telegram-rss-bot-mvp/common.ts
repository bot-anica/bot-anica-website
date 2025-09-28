import { PartialSectionBGImagesProps } from '@/types/sections';

export const SECTION_HEADERS = {
  whySpecial: {
    title: "Почему наш курс особенный?",
    subtitle: "Мы учим создавать простых ботов и даем базовые навыки разработки",
  },
  features: {
    title: "Что вы получите",
    subtitle: "Базовый подход к обучению, который даст вам необходимые навыки для старта",
  },
  pathToSuccess: {
    title: 'Как создать своего первого Telegram-бота',
    subtitle: 'Следуйте нашему пути от идеи до локального запуска',
  },
  problemSolution: {
    title: "Проблемы и решения",
    subtitle: "Начинающие разработчики сталкиваются с этими вызовами. Мы знаем, как их решить.",
  },
  successStories: {
    title: "Истории успеха наших студентов",
    subtitle: "Реальные результаты людей, которые прошли курс и применили знания на практике",
  },
  courseProgram: {
    title: "Программа курса",
    subtitle: "6 практических уроков, каждый из которых приводит к конкретному результату",
  },
  faq: {
    title: "Частые вопросы",
    subtitle: "Ответы на самые популярные вопросы о курсе",
  },
  pricingPlans: {
    title: "Выберите свой пакет",
    subtitle: "Все материалы предоставляются с доступом навсегда. Никаких подписок или скрытых платежей.",
  },
  reviews: {
    title: "Отзывы наших студентов",
    subtitle: "Что говорят люди, которые уже прошли курс по основам Python",
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
      small: "/images/leftSideBG/LeftSideBG-Small.png",
      medium: "/images/leftSideBG/LeftSideBG-Medium.png",
      large: "/images/leftSideBG/LeftSideBG-Large.png",
      extraLarge: "/images/leftSideBG/LeftSideBG-ExtraLarge.png",
    },
    right: {
      small: "/images/rightSideBG/RightSideBG-Small.png",
      medium: "/images/rightSideBG/RightSideBG-Medium.png",
      large: "/images/rightSideBG/RightSideBG-Large.png",
      extraLarge: "/images/rightSideBG/RightSideBG-ExtraLarge.png",
    }
  },
  whySpecial: {
    left: {
      small: "/images/leftSideBG/LeftSideBG-Small.png",
      medium: "/images/leftSideBG/LeftSideBG-Medium.png",
      large: "/images/leftSideBG/LeftSideBG-Large.png",
      extraLarge: "/images/leftSideBG/LeftSideBG-ExtraLarge.png",
    },
    right: {
      small: "/images/rightSideBG/RightSideBG-Small.png",
      medium: "/images/rightSideBG/RightSideBG-Medium.png",
      large: "/images/rightSideBG/RightSideBG-Large.png",
      extraLarge: "/images/rightSideBG/RightSideBG-ExtraLarge.png",
    }
  },
  bottom: {
    bottom: {
      small: "/images/courseProgramBG/CourseProgramBG-Small.png",
      medium: "/images/courseProgramBG/CourseProgramBG-Medium.png",
      large: "/images/courseProgramBG/CourseProgramBG-Large.png",
    } 
  },
  popularCard: {
    bottom: {
      small: "/images/courseProgramBG/CourseProgramBG-Small.png",
    },
    topRight: {
      smallVertical: '/images/heroBG/HeroBG-SmallVertical.png',
    },
  },
  successPayment: {
    left: {
      small: "/images/leftSideBG/LeftSideBG-Small.png",
      medium: "/images/leftSideBG/LeftSideBG-Medium.png",
      large: "/images/leftSideBG/LeftSideBG-Large.png",
      extraLarge: "/images/leftSideBG/LeftSideBG-ExtraLarge.png",
    },
    right: {
      small: "/images/rightSideBG/RightSideBG-Small.png",
      medium: "/images/rightSideBG/RightSideBG-Medium.png",
      large: "/images/rightSideBG/RightSideBG-Large.png",
      extraLarge: "/images/rightSideBG/RightSideBG-ExtraLarge.png",
    },
    topRight: {
      extraLarge: '/images/heroBG/HeroBG-ExtraLarge.png',
      large: '/images/heroBG/HeroBG-Large.png',
      medium: '/images/heroBG/HeroBG-MediumHorizontal.png',
      mediumVertical: '/images/heroBG/HeroBG-MediumVertical.png',
      small: '/images/heroBG/HeroBG-SmallHorizontal.png',
      smallVertical: '/images/heroBG/HeroBG-SmallVertical.png',
    },
    bottom: {
      small: "/images/courseProgramBG/CourseProgramBG-Small.png",
      medium: "/images/courseProgramBG/CourseProgramBG-Medium.png",
      large: "/images/courseProgramBG/CourseProgramBG-Large.png",
    } 
  }
};

// Глобальные настройки SEO для сайта
export const DEFAULT_SEO_CONFIG = {
  title: undefined as string | undefined,
  siteName: 'Курс по созданию простого Telegram RSS-бота',
  description: 'Изучите создание простого Telegram RSS-бота с нуля. Базовый курс для начинающих с пошаговыми инструкциями. Получите базовые навыки программирования и создайте своего первого бота.',
  keywords: 'telegram бот, rss бот, курс программирования, python, начинающим, чат-бот, разработка, обучение, программирование с нуля',
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
    title: 'Создание простого Telegram RSS-бота с нуля',
    description: 'Изучите создание простого Telegram RSS-бота с нуля. Базовый курс для начинающих с пошаговыми инструкциями. Получите базовые навыки программирования и создайте своего первого бота.',
    keywords: 'telegram бот, rss бот, курс программирования, python, начинающим, чат-бот, разработка, обучение, программирование с нуля'
  },
  payment: {
    title: 'Оплата курса',
    description: 'Выберите подходящий тариф и начните изучение создания Telegram-ботов. Безопасная оплата, мгновенный доступ к материалам.',
    keywords: 'оплата курса, telegram бот, тарифы, обучение программированию',
    noIndex: true // Скрываем страницу оплаты от индексации
  },
};