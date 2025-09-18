
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { SwiperOptions } from 'swiper/types';

import { NextStep } from '@/types/sections';
import NextStepCard from './NextStepCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface NextStepsSwiperProps {
  nextSteps: NextStep[];
  breakpoints: SwiperOptions['breakpoints'];
  setSwiperRef: (swiper: SwiperType) => void;
}

const NextStepsSwiper: React.FC<NextStepsSwiperProps> = ({
  nextSteps,
  breakpoints,
  setSwiperRef,
}) => {
  return (
    <div className="relative overflow-visible">
      <Swiper
        onSwiper={setSwiperRef}
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView="auto"
        watchOverflow={true}
        breakpoints={breakpoints}
        className="!pb-1 !sm:pb-0"
      >
        {nextSteps.map((step, index) => (
          <SwiperSlide key={index} className="!w-80">
            <NextStepCard step={step} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NextStepsSwiper;
