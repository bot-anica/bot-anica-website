import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { SwiperOptions } from 'swiper/types';

import { Lesson } from '@/types/sections';
import LessonCard from './LessonCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CourseProgramSwiperProps {
  lessons: Lesson[];
  breakpoints: SwiperOptions['breakpoints'];
  isIntersecting: boolean;
  setSwiperRef: (swiper: SwiperType) => void;
}

const CourseProgramSwiper: React.FC<CourseProgramSwiperProps> = ({
  lessons,
  breakpoints,
  isIntersecting,
  setSwiperRef,
}) => {
  return (
    <div className="relative overflow-visible">
      <Swiper
        onSwiper={setSwiperRef}
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView="auto"
        centeredSlides={false}
        watchOverflow={true}
        breakpoints={breakpoints}
        className="course-program-swiper"
      >
        {lessons.map((lesson, index) => {
          const isEven = (index + 1) % 2 === 0;
          return (
            <SwiperSlide key={lesson.id} className="!w-80">
              <LessonCard
                lesson={lesson}
                isEven={isEven}
                isIntersecting={isIntersecting}
                index={index}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CourseProgramSwiper;
