import { Statistic, Testimonial, SuccessStoriesCTABlock } from '@/types/sections';

export const STATISTIC: Statistic[] = [
  {
    icon: 'TrendingUp',
    iconColor: '#EF4444',
    number: "500+",
    label: "Студентов прошли курс",
  },
  {
    icon: 'Briefcase',
    iconColor: '#D97706',
    number: "89%",
    label: "Нашли работу или заказы",
  },
  {
    icon: 'Star',
    iconColor: '#EAB308',
    number: "4.9/5",
    label: "Средняя оценка курса",
  },
  {
    icon: 'Rocket',
    iconColor: '#EF4444',
    number: "200+",
    label: "Созданных ботов",
  }
]

export const TESTIMONIALS: Testimonial[] = [
  {
    icon: 'User',
    iconColor: '#EAB308',
    name: "Алексей К.",
    role: "Junior Python Developer",
    quote: "Прошел курс за 2 месяца. Теперь у меня есть готовый проект в портфолио, который показываю на собеседованиях. Архитектура действительно профессиональная!",
    achievement: "Устроился Python разработчиком"
  },
  {
    icon: 'User',
    iconColor: '#EAB308',
    name: "Мария С.",
    role: "Студентка ВУЗа",
    quote: "Курс помог понять, как работать с API и базами данных на практике. Лучше любого университетского курса — все по делу, без воды.",
    achievement: "Создала 3 собственных бота"
  },
  {
    icon: 'Briefcase',
    iconColor: '#D97706',
    name: "Дмитрий Р.",
    role: "Фрилансер",
    quote: "Взял несколько заказов на создание Telegram-ботов после курса. Клиенты довольны качеством и скоростью разработки. Окупился за первый месяц!",
    achievement: "Увеличил доход на 40%"
  },
  {
    icon: 'Microscope',
    iconColor: '#3B82F6',
    name: "Елена Т.",
    role: "QA Engineer",
    quote: "Решила перейти в разработку. Курс дал четкое понимание архитектуры проектов. Сейчас работаю Python разработчиком в стартапе.",
    achievement: "Сменила профессию"
  },
  {
    icon: 'Monitor',
    iconColor: '#6B7280',
    name: "Игорь В.",
    role: "Системный администратор",
    quote: "Автоматизировал рабочие процессы с помощью ботов. Начальство довольно, получил повышение. Планирую создать еще несколько инструментов.",
    achievement: "Получил повышение"
  },
  {
    icon: 'User',
    iconColor: '#EAB308',
    name: "Анна М.",
    role: "Начинающий разработчик",
    quote: "Первый реальный проект в моей карьере. Видеоуроки очень понятные, каждый шаг объяснен. Чувствую себя увереннее как разработчик.",
    achievement: "Первый проект в портфолио"
  }
]

export const SUCCESS_STORIES_CTA_BLOCK: SuccessStoriesCTABlock = {
  text: "Проверено практикой",
  description: "Более 500 студентов уже создали своих ботов и применяют навыки в работе. Присоединяйтесь к сообществу успешных разработчиков!",
  icon: 'Trophy',
  iconColor: 'text-primary',
}
