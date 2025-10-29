import { LucideIcon } from "lucide-react";

interface IProblem {
    icon: string;
    title: string;
    description: string;
}

interface ISolution {
    icon: string;
    title: string;
    description: string;
}

export const problemSolutionHeader = {
  badge: "",
  mainTitle: "От Хаоса к",
  highlightTitle: "Ясности",
  subtitle: "Преодолейте сложности в обучении и разработке. Наши курсы помогут вам превратить проблемы в реальные навыки и проекты.",
};

export const problems: IProblem[] = [
  {
    icon: "BookOpen",
    title: "Теория из учебников",
    description: "Сложно применить на практике, нет понимания, как это работает в реальных проектах.",
  },
  {
    icon: "Bug",
    title: "Застряли на ошибке",
    description: "Не можете найти решение и двигаться дальше, теряя мотивацию.",
  },
  {
    icon: "Briefcase",
    title: "Нет готовых проектов",
    description: "Нечего показать работодателю, сложно пройти собеседование без портфолио.",
  },
];

export const solutions: ISolution[] = [
    {
        icon: "Code",
        title: "100% практический подход",
        description: "Каждый курс — это готовый проект, который можно добавить в портфолио.",
    },
    {
        icon: "Users",
        title: "Закрытое сообщество",
        description: "Где можно задать вопрос, получить помощь и поддержку от единомышленников и автора.",
    },
    {
        icon: "Target",
        title: "Вы создаете портфолио",
        description: "Вместо просмотра видео вы активно создаете реальные проекты, которые ценятся работодателями.",
    },
];