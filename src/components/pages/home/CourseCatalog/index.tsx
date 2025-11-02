"use client";

import { FC } from "react";

import { Button, SectionHeader, SectionSplitter } from "@/components/common";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Icon from "@/components/ui/Icon";
import { cn } from "@/utils/cn";

// Import course constants
import { COURSES } from "@/constants/courseRegistry";

import { HERO_TITLE as PYTHON_BASICS_HERO_TITLE, HERO_SUBTITLE as PYTHON_BASICS_HERO_SUBTITLE } from "@/constants/python-basics/hero";
import { HERO_TITLE as TELEGRAM_MVP_HERO_TITLE, HERO_SUBTITLE as TELEGRAM_MVP_HERO_SUBTITLE } from "@/constants/telegram-rss-bot-mvp/hero";
import { HERO_TITLE as TELEGRAM_BOT_HERO_TITLE, HERO_SUBTITLE as TELEGRAM_BOT_HERO_SUBTITLE } from "@/constants/telegram-rss-bot/hero";
import AnimatedCourseCard from "./AnimatedCourseCard";

const courseData = {
  "python-basics": {
    titleMain: PYTHON_BASICS_HERO_TITLE.main,
    titleHighlight: PYTHON_BASICS_HERO_TITLE.highlight,
    titleAdditional: PYTHON_BASICS_HERO_TITLE.additional,
    description: PYTHON_BASICS_HERO_SUBTITLE,
    tags: ['Python', 'Основы', 'Git'],
    icon: 'Code',
  },
  "telegram-rss-bot-mvp": {
    titleMain: TELEGRAM_MVP_HERO_TITLE.main,
    titleHighlight: TELEGRAM_MVP_HERO_TITLE.highlight,
    titleAdditional: TELEGRAM_MVP_HERO_TITLE.additional,
    description: TELEGRAM_MVP_HERO_SUBTITLE,
    tags: ['Python', 'Telegram API'],
    icon: 'Bot',
  },
  "telegram-rss-bot": {
    titleMain: TELEGRAM_BOT_HERO_TITLE.main,
    titleHighlight: TELEGRAM_BOT_HERO_TITLE.highlight,
    titleAdditional: TELEGRAM_BOT_HERO_TITLE.additional,
    description: TELEGRAM_BOT_HERO_SUBTITLE,
    tags: ['Python', 'Telegram API', 'PostgreSQL', 'GitHub Actions'],
    icon: 'Bot',
  },
};

const courses = COURSES.map(course => ({
  ...courseData[course.urlParam as keyof typeof courseData],
  name: course.name,
  urlParam: course.urlParam,
  image: `/images/courses/${course.urlParam}/heroImage/HeroImageHorizontalSmall.png`,
  bgImages: {
    topRight: {
      smallVertical: `/images/courses/${course.urlParam}/heroBG/HeroBG-SmallVertical.png`,
    },
  },
}));

const CourseCatalog: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];

  return (
    <section ref={ref} id="courses" className="py-24 lg:py-28 xl:py-32 bg-bg-primary overflow-hidden relative">
      <SectionHeader
        title="Наши курсы"
        subtitle="Выберите курс, который подходит именно вам, и начните свой путь в IT."
        isIntersecting={isIntersecting}
      />
      <SectionSplitter />

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">  
        {/* --- Card Variant 1: Screenshot Style --- */}
        {courses.map((course, index) => (
          <AnimatedCourseCard
            key={course.urlParam}
            className="relative p-6 rounded-xl overflow-hidden bg-bg-secondary"
            childrenWrapperClassName="flex flex-col h-full"
            bgImages={course.bgImages || undefined}
            isIntersecting={isIntersecting}
            index={index}
          >
            {/* Top Gradient Border */}
            <div className={cn(
              "absolute top-0 left-0 right-0 h-1",
              index === 0 && "bg-brand-blue-light",
              index === 1 && "bg-brand-pink",
              index === 2 && "bg-brand-purple"
            )} />

            <div className="mb-12 flex items-center gap-4">
              {/* Icon */}
              <div className={cn("w-14 h-14 rounded-lg flex items-center justify-center",
                index === 0 && "bg-brand-blue-light",
                index === 1 && "bg-brand-pink",
                index === 2 && "bg-brand-purple"
              )}>
                <Icon name={course.icon} className="w-8 h-8 text-white" />
              </div>

              {/* Course Name */}
              <div className="text-2xl font-bold text-text-primary">
                {course.name}
              </div>
            </div>

            {/* Image */}
            {/* <div className="mb-4 px-4 py-2 rounded-lg overflow-hidden bg-bg-primary border border-border-primary">
              <img src={course.image} alt={course.name} className="w-full h-32 object-contain" />
            </div> */}

            {/* Title */}
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              <span>{course.titleMain} </span>
              <span className="text-brand-pink">{course.titleHighlight} </span>
              <span>{course.titleAdditional}</span>
            </h3>

            {/* Description */}
            <p className="text-sm text-text-secondary mb-4">{course.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {course.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-text-secondary/5 text-text-secondary border border-text-secondary/50">
                  {tag}
                </span>
              ))}
            </div>

            {/* Button */}
            <Button to={`/courses/${course.urlParam}`} className="w-full bg-bg-opposite text-text-opposite hover:bg-bg-hover transition-colors duration-200 mt-auto">
              <span>Подробнее</span>
              <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
            </Button>
          </AnimatedCourseCard>
        ))}

      </div>
    </section>
  );
};

export default CourseCatalog;