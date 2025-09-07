import { useRef } from 'react';

export const useCourseProgram = () => {
  const swiperRef = useRef<any>(null);

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  const setSwiperRef = (swiper: any) => {
    swiperRef.current = swiper;
  };

  return {
    swiperRef,
    handlePrevSlide,
    handleNextSlide,
    setSwiperRef,
  };
};