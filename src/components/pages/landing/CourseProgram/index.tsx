"use client";

import type { FC } from 'react';

import SwiperNavButtons from '@/components/common/SwiperNavButtons';
import { CourseProgramData } from '@/types/sections';
import CourseProgramSwiper from './CourseProgramSwiper';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionBackground, SectionSplitter, SectionHeader } from '@/components/common';
import { useSwiper } from '@/hooks/useSwiper';

interface CourseProgramProps {
  data: CourseProgramData
  showSectionSplitter?: boolean
}

const CourseProgram: FC<CourseProgramProps> = ({data, showSectionSplitter}) => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];
  const { handlePrevSlide, handleNextSlide, setSwiperRef } = useSwiper();

  const {header, lessons, breakpoints, bgImages} = data

  if (!header || !lessons || !breakpoints || !bgImages) {
    return null; // Or a loading spinner
  }

  return (
    <section ref={ref} id="course" className="bg-bg-primary py-24 lg:py-28 xl:py-32 relative w-full overflow-hidden">
      {showSectionSplitter
        ? <SectionSplitter />
        : (
          <>
            <SectionBackground bgImages={bgImages} lazy />
            <SectionSplitter bottom={false} />
          </>
        )
      }

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Navigation */}
        <SectionHeader
          title={header.title}
          subtitle={header.subtitle}
          isIntersecting={isIntersecting}
          position="left"
          className="max-w-md lg:max-w-lg xl:max-w-xl !mb-4 !md:mb-4"
        />

        <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-6 md:gap-4 mb-4 md:mb-6">
          <div className="inline-flex items-center px-3 py-1 bg-brand-blue-light/5 rounded-full border border-brand-blue-light/20">
            <span className="text-xs md:text-sm md:font-medium text-brand-blue-light">
              Каждый урок заканчивается практическим результатом
            </span>
          </div>

          <SwiperNavButtons 
            onPrev={handlePrevSlide}
            onNext={handleNextSlide}
            className="ml-auto"
          />
        </div>

        {/* Swiper Container */}
        <CourseProgramSwiper
          lessons={lessons}
          breakpoints={breakpoints}
          isIntersecting={isIntersecting as boolean}
          setSwiperRef={setSwiperRef}
        />
      </div>
    </section>
  );
};

export default CourseProgram;
