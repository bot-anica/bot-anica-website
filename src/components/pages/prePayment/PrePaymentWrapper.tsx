"use client";

import { FC } from 'react';

import { Course } from '@/types/sections';
import { useTariff } from '@/hooks/useTariff';
import CourseNotFound from './CourseNotFound';
import PrePaymentContent from './PrePaymentContent';
import PrePaymentLoader from './PrePaymentLoader';

interface PrePaymentWrapperProps {
  course: Course;
  courseUrlParam: string;
  tariffId: string;
}

const PrePaymentWrapper: FC<PrePaymentWrapperProps> = ({ course, tariffId }) => {
  const { tariff, isTariffFree, isLoadingTariff, tariffError } = useTariff(tariffId);

  if (isLoadingTariff) {
    return <PrePaymentLoader />;
  }

  if (tariffError || !tariff) {
    return <CourseNotFound message={tariffError || "Тариф не найден."} />;
  }

  return (
    <section className="pt-14 sm:pb-6 sm:pt-20 md:pb-14 md:pt-28 lg:pt-42 xl:pt-50 lg:pb-28 xl:pb-32 relative overflow-hidden bg-brand-pink/15">
      <div className="sm:max-w-lg md:max-w-2xl lg:max-w-5xl h-full mx-auto pt-8 px-8 pb-16 sm:py-8 relative z-10 bg-bg-primary sm:rounded-lg sm:border sm:border-brand-blue-light/15 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8">
        <PrePaymentContent course={course} tariff={tariff} isTariffFree={isTariffFree} />
      </div>
    </section>
  );
};

export default PrePaymentWrapper;