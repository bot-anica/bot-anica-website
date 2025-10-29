import { HeroTitle, HeroImages, CTAItem } from "@/types/sections";
import { ButtonVariant, ButtonSize, ButtonIconPosition } from "@/types/common";

export const HERO_TITLE: HeroTitle = {
  main: 'Освойте основы',
  highlight: 'Python',
  additional: 'с нуля до уверенного программиста',
}

export const HERO_SUBTITLE = 'Полный курс по основам Python для начинающих (50+ уроков) с практическими заданиями'

export const HERO_BENEFITS = [
  '50+ практических уроков',
  'Доступ навсегда',
  'От основ до реальных проектов'
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
    text: 'Программа курса',
    link: '#course',
    buttonVariant: ButtonVariant.SECONDARY,
    buttonSize: ButtonSize.LG,
    buttonIcon: 'Book',
    buttonIconColor: 'brand-blue/30',
    buttonIconPosition: ButtonIconPosition.LEFT,
  }
}

export const HERO_IMAGES: Record<'rightImages' | 'imagesInText', HeroImages> = {
  rightImages: {
    extraLarge: '/images/courses/python-basics/heroImage/HeroImageVerticalExtraLarge.png',
    large: '/images/courses/python-basics/heroImage/HeroImageVerticalLarge.png',
  },
  imagesInText: {
    medium: '/images/courses/python-basics/heroImage/HeroImageHorizontalMiddle.png',
    small: '/images/courses/python-basics/heroImage/HeroImageHorizontalSmall.png',
  }
}
