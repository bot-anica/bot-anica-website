'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { SwiperOptions } from 'swiper/types';

import { Review } from '@/types/sections';
import ReviewCard from './ReviewCard';

import 'swiper/css';
import 'swiper/css/navigation';

interface ReviewsSwiperProps {
  reviews: Review[];
  breakpoints: SwiperOptions['breakpoints'];
  isIntersecting: boolean;
  setSwiperRef: (swiper: SwiperType) => void;
}

const ReviewsSwiper: React.FC<ReviewsSwiperProps> = ({
  reviews,
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
        className="reviews-swiper course-program-swiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={review.id} className="!w-80">
            <ReviewCard
              review={review}
              isIntersecting={isIntersecting}
              index={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsSwiper;
