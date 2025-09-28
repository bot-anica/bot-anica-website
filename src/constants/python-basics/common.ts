import { PartialSectionBGImagesProps } from '@/types/sections';

export const SECTION_HEADERS = {
  whySpecial: {
    title: "Почему наш курс особенный?",
    subtitle: "Мы учим основам Python с нуля и даем практические навыки программирования",
  },
  features: {
    title: "Что вы получите",
    subtitle: "Структурированный подход к обучению, который даст вам необходимые навыки для старта в программировании",
  },
  pathToSuccess: {
    title: 'Как освоить Python с нуля',
    subtitle: 'Следуйте нашему пути от основ до практического применения',
  },
  problemSolution: {
    title: "Проблемы и решения",
    subtitle: "Начинающие программисты сталкиваются с этими вызовами. Мы знаем, как их преодолеть.",
  },
  successStories: {
    title: "Истории успеха наших студентов",
    subtitle: "Реальные результаты людей, которые прошли курс и применили знания на практике",
  },
  courseProgram: {
    title: "Программа курса",
    subtitle: "50+ уроков, охватывающих все основы Python от простого к сложному",
  },
  faq: {
    title: "Частые вопросы",
    subtitle: "Ответы на самые популярные вопросы о курсе Python",
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
  siteName: 'Курс по основам Python для начинающих',
  description: 'Изучите основы Python с нуля. Полный курс для начинающих с пошаговыми инструкциями и практическими заданиями. Получите навыки программирования и создавайте собственные проекты.',
  keywords: 'python, курс программирования, основы python, python для начинающих, обучение программированию, программирование с нуля, python уроки, python онлайн',
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
    title: 'Основы Python для начинающих - полный курс с нуля',
    description: 'Изучите основы Python с нуля. Полный курс для начинающих с 60+ практическими заданиями. Освойте программирование на Python и создавайте собственные проекты.',
    keywords: 'python, курс программирования, основы python, python для начинающих, обучение программированию, программирование с нуля, python уроки, python онлайн'
  },
  payment: {
    title: 'Оплата курса по основам Python',
    description: 'Выберите подходящий тариф и начните изучение основ Python. Безопасная оплата, мгновенный доступ к материалам курса.',
    keywords: 'оплата курса, python, тарифы, обучение программированию, курс python',
    noIndex: true // Скрываем страницу оплаты от индексации
  },
};