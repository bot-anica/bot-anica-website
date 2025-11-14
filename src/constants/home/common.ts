export const SECTION_HEADERS = {
  problemSolution: {
    title: "От Хаоса к Ясности",
    subtitle: "Преодолейте сложности в обучении и разработке. Наши курсы помогут вам превратить проблемы в реальные навыки и проекты.",
  },
  techStack: {
    title: "Технологический стек",
    subtitle: "Инструменты и технологии, которые вы будете использовать в процессе обучения.",
  },
  courseCatalog: {
    title: "Наши курсы",
    subtitle: "Выберите курс, который подходит именно вам, и начните свой путь в IT.",
  },
  howItWorks: {
    title: "Шаги к успеху",
    subtitle: "Как работает обучение на наших курсах",
  },
  whyUs: {
    title: "Почему именно мы?",
    subtitle: "Мы не просто учим создавать проекты — мы формируем профессиональное мышление разработчика",
  },
  aboutAuthor: {
    title: "Практика, а не теория",
  },
  faq: {
    title: "Ответы на ваши вопросы",
  },
};

// Глобальные настройки SEO для сайта
export const DEFAULT_SEO_CONFIG = {
  title: 'Курсы программирования на Python',
  siteName: 'Bot Anica',
  description: 'Практические курсы по программированию на Python. Обучение с нуля, создание реальных проектов и формирование портфолио. Начните свой путь в IT с Bot Anica.',
  keywords: 'программирование, python, курсы, обучение, основы, telegram бот, портфолио, portfolio, разработка, development, для начинающих, практика, проекты, IT, старт в IT',
  image: '/og-cover.jpg',
  url: 'https://anica.space',
  locale: 'ru_RU',
  twitterCard: 'summary_large_image' as const,
  type: 'website' as 'website' | 'article',
  noIndex: undefined as boolean | undefined
};
