
"use client";

import type { FC } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useSwiper } from '@/hooks/useSwiper';
import { Card } from '@/components/common';
import NextStepsSwiper from './NextStepsSwiper';
import { NextStepsData } from '@/types/sections';

interface NextStepsProps {
  data: NextStepsData;
}

const NextSteps: FC<NextStepsProps> = ({ data }) => {
  const { handlePrevSlide, handleNextSlide, setSwiperRef } = useSwiper();
  const { header, nextSteps, breakpoints } = data;

  return (
    <Card padding="lg">
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-6 md:gap-4 mb-4 md:mb-6">
        <div>
          <h3 className='text-2xl font-bold text-gray-900'>{header.title}</h3>
          <p className='mt-2 text-gray-600 mb-8'>{header.subtitle}</p>
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
    </Card>
  );
};

export default NextSteps;
