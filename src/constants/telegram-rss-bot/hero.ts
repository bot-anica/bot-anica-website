import { HeroTitle, HeroImages, CTAItem } from "@/types/sections";
import { ButtonVariant, ButtonSize, ButtonIconPosition } from "@/types/common";

export const HERO_TITLE: HeroTitle = {
  main: 'Создайте профессионального',
  highlight: 'Telegram',
  additional: 'бота для новостей',
}

export const HERO_SUBTITLE = 'Научитесь создавать профессиональных ботов с нуля и получите готовый проект для портфолио'

export const HERO_BENEFITS = [
  'Доступ навсегда',
  'Готовые файлы',
  'Практические результаты'
]

export const HERO_CTA: Record<"primary" | "secondary", CTAItem> = {
  primary: {
    text: 'Начать обучение',
    link: '#pricing',
    buttonVariant: ButtonVariant.PRIMARY,
    buttonSize: ButtonSize.LG,
    buttonIcon: 'ArrowRight',
    buttonIconColor: 'text-white',
    buttonIconPosition: ButtonIconPosition.RIGHT,
  },
  secondary: {
    text: 'Смотреть программу',
    link: '#course',
    buttonVariant: ButtonVariant.SECONDARY,
    buttonSize: ButtonSize.LG,
    buttonIcon: 'Play',
    buttonIconColor: 'brand-blue/30',
    buttonIconPosition: ButtonIconPosition.LEFT,
  }
}

export const HERO_IMAGES: Record<'rightImages' | 'imagesInText', HeroImages> = {
  rightImages: {
    extraLarge: '/images/telegram-rss-bot/heroImage/HeroImageVerticalExtraLarge.png',
    large: '/images/telegram-rss-bot/heroImage/HeroImageVerticalLarge.png',
  },
  imagesInText: {
    medium: '/images/telegram-rss-bot/heroImage/HeroImageHorizontalMiddle.png',
    small: '/images/telegram-rss-bot/heroImage/HeroImageHorizontalSmall.png',
  }
}
