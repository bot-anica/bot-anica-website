import { ProblemSolutionItem, ProblemSolutionCTABlock } from '@/types/sections';
import { ButtonVariant, ButtonSize, ButtonIconPosition } from "@/types/common"

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

export const PROBLEM_SOLUTION_CTA_BLOCK: ProblemSolutionCTABlock = {
  title: "Готовы начать изучение Python?",
  subtitle: "Присоединяйтесь к курсу и освойте программирование с нуля",
  cta: {
    text: "Начать обучение",
    link: "#pricing",
    buttonVariant: ButtonVariant.SECONDARY,
    buttonSize: ButtonSize.SM,
    buttonIcon: 'ArrowRight',
    buttonIconPosition: ButtonIconPosition.RIGHT,
  }
}
