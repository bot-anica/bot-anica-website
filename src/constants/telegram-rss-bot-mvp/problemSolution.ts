import { CourseProblemSolutionItem, SectionBottomCTA } from '@/types/sections';

export const PROBLEM_SOLUTION_ITEMS: CourseProblemSolutionItem[] = [
  {
    problem: "Сложный старт",
    solution: "Простая архитектура",
    icon: 'Sparkles'
  },
  {
    problem: "Отсутствие практики",
    solution: "Пошаговый подход",
    icon: 'Zap'
  },
  {
    problem: "Непонятные API",
    solution: "Базовый функционал",
    icon: 'Star'
  },
  {
    problem: "Сложности с запуском",
    solution: "Локальный запуск",
    icon: 'Heart'
  }
]

export const PROBLEM_SOLUTION_CTA_BLOCK: SectionBottomCTA = {
  text: "Готовы исправить это?",
  description: "Присоединяйтесь к курсу и создайте своего первого Telegram-бота",
  icon: 'Lightbulb',
  iconColor: 'white',
  buttonText: 'Начать обучение',
  buttonLink: '#pricing',
}
