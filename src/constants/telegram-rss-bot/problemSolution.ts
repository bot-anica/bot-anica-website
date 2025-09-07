import { ProblemSolutionItem, ProblemSolutionCTABlock } from '@/types/sections';
import { ButtonVariant, ButtonSize, ButtonIconPosition } from "@/types/common"

export const PROBLEM_SOLUTION_ITEMS: ProblemSolutionItem[] = [
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

export const PROBLEM_SOLUTION_CTA_BLOCK: ProblemSolutionCTABlock = {
  title: "Готовы решить эти проблемы?",
  subtitle: "Присоединяйтесь к курсу и создайте профессионального Telegram-бота",
  cta: {
    text: "Начать обучение",
    link: "#pricing",
    buttonVariant: ButtonVariant.SECONDARY,
    buttonSize: ButtonSize.SM,
    buttonIcon: 'ArrowRight',
    buttonIconPosition: ButtonIconPosition.RIGHT,
  }
}
