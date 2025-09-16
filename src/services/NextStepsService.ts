
import { NextStepsData } from '@/types/sections';

const nextStepsData: NextStepsData = {
  header: {
    title: 'Что дальше?',
    subtitle: 'Следуйте этим простым шагам, чтобы начать обучение',
  },
  nextSteps: [
    {
      title: 'Проверьте почту',
      description: 'Материалы будут отправлены на указанный email',
      icon: 'MailCheck',
    },
    {
      title: 'Скачайте файлы',
      description: 'Скачайте конспекты и дополнительные материалы',
      icon: 'FileDown',
    },
    {
      title: 'Присоединяйтесь к сообществу',
      description: 'Получите поддержку в нашем телеграм-канале',
      icon: 'Users',
    },
    {
      title: 'Начните практику',
      description: 'Применяйте знания и создавайте своих ботов',
      icon: 'Code',
    },
  ],
  breakpoints: {
    320: {
      spaceBetween: 16,
    },
    768: {
      spaceBetween: 24,
    },
    1024: {
      spaceBetween: 24,
    },
    1280: {
      spaceBetween: 24,
    },
  },
};

export class NextStepsService {
  static getNextStepsData(): NextStepsData {
    return nextStepsData;
  }
}
