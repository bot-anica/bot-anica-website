"use client";

import { useState, useEffect, FC } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'keen-slider/keen-slider.min.css';

import { Lesson } from '@/types/sections';

import LessonCard from './LessonCard';

// Определяем интерфейс пропсов заново
interface CourseProgramSwiperProps {
  lessons: Lesson[];
  breakpoints: any; // Breakpoints от keen-slider имеют тот же формат
  isIntersecting: boolean;
  // setSwiperRef теперь будет передавать экземпляр keen-slider
  setSwiperRef: (slider: any) => void; 
}

// Компонент для стрелок навигации
function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabledClassName = props.disabled ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-100';
  return (
    <button
      onClick={props.onClick}
      className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center ${ 
        props.left ? '-left-5' : '-right-5'
      } bg-white p-2 rounded-full shadow-lg transition-opacity ${disabledClassName}`}
      disabled={props.disabled}
    >
      {props.left ? (
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      ) : (
        <ChevronRight className="w-6 h-6 text-gray-700" />
      )}
    </button>
  );
}

const CourseProgramSwiper: FC<CourseProgramSwiperProps> = ({
  lessons,
  breakpoints,
  isIntersecting,
  setSwiperRef,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 'auto',
      spacing: 24,
    },
    breakpoints: breakpoints,
    created() {
      setLoaded(true);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // Передаем экземпляр слайдера в родительский компонент
  useEffect(() => {
    if (instanceRef.current) {
      setSwiperRef(instanceRef.current);
    }
  }, [instanceRef, setSwiperRef]);

  return (
    <div className="relative py-4">
      {/* Контейнер для слайдера */}
      <div ref={sliderRef} className="keen-slider overflow-visible">
        {lessons.map((lesson, index) => {
          const IconComponent = lesson.icon;
          const isEven = (index + 1) % 2 === 0;
          return (
            <div key={lesson.id} className="keen-slider__slide !w-80">
              <LessonCard
                lesson={lesson}
                IconComponent={IconComponent}
                isEven={isEven}
                isIntersecting={isIntersecting}
                index={index}
              />
            </div>
          );
        })}
      </div>

      {/* Кастомная навигация */}
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          />
          <Arrow
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
    </div>
  );
}

export default CourseProgramSwiper;