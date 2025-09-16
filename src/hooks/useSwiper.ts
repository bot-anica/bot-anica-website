import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';

export const useSwiper = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  const setSwiperRef = (swiper: SwiperType) => {
    swiperRef.current = swiper;
  };

  return {
    swiperRef,
    handlePrevSlide,
    handleNextSlide,
    setSwiperRef,
  };
};