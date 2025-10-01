import { HeroTitle, HeroImages, CTAItem } from "@/types/sections";
import { ButtonVariant, ButtonSize, ButtonIconPosition } from "@/types/common";

export const HERO_TITLE: HeroTitle = {
  main: 'Создайте простого',
  highlight: 'Telegram',
  additional: 'бота для RSS-новостей',
}

export const HERO_SUBTITLE = 'Научитесь создавать простых ботов с нуля и получите базовые навыки работы с Python и Telegram API'

export const HERO_BENEFITS = [
  'Доступ навсегда',
  'Готовые файлы',
  'Локальный запуск бота'
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
