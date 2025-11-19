"use client";

import { FC, useMemo, useState, useEffect } from 'react';

import { SectionBackground, BackgroundElements, SectionHeader } from '@/components/common';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Currency, PricingPlansData, Tariff } from '@/types/sections';
import { useCourseTariffs } from '@/hooks/useCourseTariffs';

import PricingPlansGrid from './PricingPlansGrid';
import PricingPlansPayment from './PricingPlansPayment';
import { checkIsCourseFree } from '@/utils/course';

interface CourseProgramProps {
  data: PricingPlansData;
  courseId: number;
}

const PricingPlans: FC<CourseProgramProps> = ({data, courseId}) => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(null);

  const { tariffs, isLoading: tariffsLoading, error } = useCourseTariffs(courseId);

  const courseIsFree = useMemo(() => {
    if (!tariffs) return false;
    return checkIsCourseFree(tariffs);
  }, [tariffs]);

  const { header, bgImages, popularPlanImages } = data

  const availableCurrencies = useMemo((): Currency[] => {
    if (!tariffs || tariffs.length === 0) {
      return [];
    }
    return tariffs[0].prices.map(price => price.currency);
  }, [tariffs]);

  useEffect(() => {
    if (availableCurrencies.length > 0 && !selectedCurrency) {
      setSelectedCurrency(availableCurrencies[0]);
    }
  }, [availableCurrencies, selectedCurrency]);

  const handleCurrencyChange = (currency: Currency) => {
    setSelectedCurrency(currency);
  };

  const sortedPlans = useMemo(() => {
    if (!tariffs) return [];

    const activePlans = tariffs.filter(plan => !plan.disabled);
    const disabledPlans = tariffs.filter(plan => plan.disabled);

    const sortFn = (a: Tariff, b: Tariff) => {
      if (a.is_popular && !b.is_popular) return -1;
      if (!a.is_popular && b.is_popular) return 1;
      return 0;
    };

    activePlans.sort(sortFn);
    disabledPlans.sort(sortFn);

    return [...activePlans, ...disabledPlans];
  }, [tariffs]);

  const isLoading = tariffsLoading || !selectedCurrency;

  if (error) {
    return (
      <section id="pricing" className="py-24 lg:py-28 xl:py-32 relative overflow-hidden bg-brand-pink/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p>Error loading pricing plans. Please try again later.</p>
        </div>
      </section>
    );
  }

  if (!header || !bgImages) {
    return null; // Or a loading spinner
  }

  return (
    <section ref={ref} id="pricing" className="py-24 lg:py-28 xl:py-32 relative overflow-hidden bg-brand-pink/15">
      <SectionBackground bgImages={bgImages} lazy />
      <BackgroundElements />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <SectionHeader title={header.title} subtitle={header.subtitle} isIntersecting={isIntersecting} />

        {/* Pricing Cards */}
        <PricingPlansGrid 
          plans={sortedPlans}
          popularPlanImages={popularPlanImages}
          isIntersecting={isIntersecting as boolean}
          selectedCurrency={selectedCurrency!}
          loading={isLoading}
        />

        {/* Payment Options */}
        <PricingPlansPayment 
          courseIsFree={courseIsFree}
          availableCurrencies={availableCurrencies}
          isIntersecting={isIntersecting as boolean}
          selectedCurrency={selectedCurrency}
          onCurrencyChange={handleCurrencyChange}
          loading={isLoading}
        />
      </div>
    </section>
  );
};

export default PricingPlans;