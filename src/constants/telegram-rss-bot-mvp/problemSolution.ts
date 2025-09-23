import { ProblemSolutionItem, ProblemSolutionCTABlock } from '@/types/sections';
import { ButtonVariant, ButtonSize, ButtonIconPosition } from "@/types/common"

export const PROBLEM_SOLUTION_ITEMS: ProblemSolutionItem[] = [
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

export const PROBLEM_SOLUTION_CTA_BLOCK: ProblemSolutionCTABlock = {
  title: "Готовы решить эти проблемы?",
  subtitle: "Присоединяйтесь к курсу и создайте своего первого Telegram-бота",
  cta: {
    text: "Начать обучение",
    link: "#pricing",
    buttonVariant: ButtonVariant.SECONDARY,
    buttonSize: ButtonSize.SM,
    buttonIcon: 'ArrowRight',
    buttonIconPosition: ButtonIconPosition.RIGHT,
  }
}
