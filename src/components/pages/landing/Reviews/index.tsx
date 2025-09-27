'use client';

import type { FC } from 'react';

import { useSwiper } from '@/hooks/useSwiper';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionBackground, SectionHeader } from '@/components/common';
import { ReviewsData } from '@/types/sections';
import { ReviewsBackground } from './ReviewsBackground';
import ReviewsSwiper from './ReviewsSwiper';
import ReviewCard from './ReviewCard';
import SwiperNavButtons from '@/components/common/SwiperNavButtons';

interface ReviewsProps {
  data: ReviewsData;
}

const Reviews: FC<ReviewsProps> = ({ data }) => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];
  const { handlePrevSlide, handleNextSlide, setSwiperRef } = useSwiper();

  const { header, reviews, breakpoints, bgImages } = data;

  if (!header || !reviews || !breakpoints || !bgImages) {
    return null; // Or a loading spinner
  }

  return (
    <section ref={ref} id="reviews" className="py-20 bg-bg-primary relative overflow-hidden">
      <SectionBackground bgImages={bgImages} lazy />
      <ReviewsBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title={header.title}
          subtitle={header.subtitle}
          isIntersecting={isIntersecting}
        />

        <div className="lg:hidden">
          <SwiperNavButtons 
            onPrev={handlePrevSlide}
            onNext={handleNextSlide}
            className="justify-end mb-6"
          />
        </div>

        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.id}
              review={review}
              isIntersecting={isIntersecting}
              index={index}
            />
          ))}
        </div>

        <div className='lg:hidden'>
          <ReviewsSwiper
            reviews={reviews}
            breakpoints={breakpoints}
            isIntersecting={isIntersecting}
            setSwiperRef={setSwiperRef}
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
