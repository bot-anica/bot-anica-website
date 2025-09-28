import { ProblemSolutionItem, SectionBottomCTA } from '@/types/sections';

export const PROBLEM_SOLUTION_ITEMS: ProblemSolutionItem[] = [
  {
    problem: "Не знаю с чего начать",
    solution: "Структурированная программа",
    icon: 'Sparkles'
  },
  {
    problem: "Сложная теория без практики",
    solution: "Множество практических заданий",
    icon: 'Zap'
  },
  {
    problem: "Скучные примеры",
    solution: "Реальные проекты",
    icon: 'Star'
  },
  {
    problem: "Нет времени на долгое обучение",
    solution: "Короткие уроки по 10-15 минут",
    icon: 'Heart'
  }
]

export const PROBLEM_SOLUTION_CTA_BLOCK: SectionBottomCTA = {
  text: "Готовы начать изучение Python?",
  description: "Присоединяйтесь к курсу и освойте программирование с нуля",
  icon: 'Lightbulb',
  iconColor: 'white',
}
