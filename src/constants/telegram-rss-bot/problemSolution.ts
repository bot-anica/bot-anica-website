import { CourseProblemSolutionItem, SectionBottomCTA } from '@/types/sections';

export const PROBLEM_SOLUTION_ITEMS: CourseProblemSolutionItem[] = [
  {
    problem: "Сложная архитектура",
    solution: "Профессиональная архитектура",
    icon: 'Sparkles'
  },
  {
    problem: "Отсутствие практики",
    solution: "Пошаговый подход",
    icon: 'Zap'
  },
  {
    problem: "MVP-ловушка",
    solution: "Production-ready код",
    icon: 'Star'
  },
  {
    problem: "Отсутствие интеграций",
    solution: "Современные технологии",
    icon: 'Heart'
  }
]

export const PROBLEM_SOLUTION_CTA_BLOCK: SectionBottomCTA = {
  text: "Готовы исправить это?",
  description: "Присоединяйтесь к курсу и создайте профессионального Telegram-бота",
  icon: 'Lightbulb',
  iconColor: 'white',
  buttonText: 'Начать обучение',
  buttonLink: '#pricing',
}
