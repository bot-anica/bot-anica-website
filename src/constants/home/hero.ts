import { HeroTitle, CTAItem } from "@/types/sections";
import { ButtonVariant, ButtonSize, ButtonIconPosition } from "@/types/common";

export const HERO_TITLE: HeroTitle = {
  main: 'От идеи до проекта в ',
  highlight: 'портфолио',
}

export const HERO_SUBTITLE = 'Практические курсы для создания IT-портфолио. Учитесь в своем темпе с пожизненным доступом.'

export const HERO_TEXT = 'Более 450 участников в нашем сообществе'

export const HERO_CTA: Record<"primary" | "secondary", CTAItem> = {
  primary: {
    text: 'Выбрать курс',
    link: '#courses',
    buttonVariant: ButtonVariant.PRIMARY,
    buttonSize: ButtonSize.LG,
    buttonIcon: 'ArrowRight',
    buttonIconColor: 'text-white',
    buttonIconPosition: ButtonIconPosition.RIGHT,
  },
  secondary: {
    text: 'Смотреть программу',
    link: '#courses',
    buttonVariant: ButtonVariant.SECONDARY,
    buttonSize: ButtonSize.LG,
    buttonIcon: 'Book',
    buttonIconColor: 'brand-blue/30',
    buttonIconPosition: ButtonIconPosition.LEFT,
  }
}

export const HERO_IMAGE: string = '/images/home/hero/HeroImg.png'
