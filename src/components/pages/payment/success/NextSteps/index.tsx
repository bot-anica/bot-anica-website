"use client";

import type { FC } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useSwiper } from '@/hooks/useSwiper';
import NextStepsSwiper from './NextStepsSwiper';
import { NextStepsData } from '@/types/sections';

interface NextStepsProps {
  data: NextStepsData;
}

const NextSteps: FC<NextStepsProps> = ({ data }) => {
  const { handlePrevSlide, handleNextSlide, setSwiperRef } = useSwiper();
  const { header, nextSteps, breakpoints } = data;

  return (
    <div className="w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl h-full mx-auto p-8 sm:py-8 relative z-10 bg-white sm:rounded-lg sm:border sm:border-primary-blue/15">
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-6 md:gap-4 mb-4 md:mb-6">
        <div className='md:mb-2 lg:mb-4'>
          <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-gray-900'>{header.title}</h3>
          <p className='mt-2 text-sm md:text-base text-gray-600'>{header.subtitle}</p>
        </div>

        <div className="flex gap-3 md:gap-4">
          <button
            onClick={handlePrevSlide}
            className="cursor-pointer w-10 h-10 md:w-12 md:h-12 bg-white rounded-full border border-primary-blue/30 flex items-center justify-center text-gray-600 hover:text-primary-pink transition-all duration-300 group"
          >
            <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
          </button>
          <button
            onClick={handleNextSlide}
            className="cursor-pointer w-10 h-10 md:w-12 md:h-12 bg-white rounded-full border border-primary-blue/30 flex items-center justify-center text-gray-600 hover:text-primary-pink transition-all duration-300 group"
          >
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      <NextStepsSwiper
        nextSteps={nextSteps}
        breakpoints={breakpoints}
        setSwiperRef={setSwiperRef}
      />
    </div>
  );
};

export default NextSteps;