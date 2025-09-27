"use client";

import { FC, useMemo, useState, useEffect } from 'react';

import { SectionBackground, BackgroundElements, SectionHeader } from '@/components/common';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Course, Currency, PricingPlansData } from '@/types/sections';

import PricingPlansGrid from './PricingPlansGrid';
import PricingPlansPayment from './PricingPlansPayment';

interface CourseProgramProps {
  data: PricingPlansData,
  course: Course
}

const PricingPlans: FC<CourseProgramProps> = ({data, course}) => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(null);

  const { header, bgImages, popularPlanImages } = data
  const { tariffs } = course

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
    return [...tariffs].sort((a, b) => {
      if (a.is_popular) return -1;
      if (b.is_popular) return 1;
      return 0;
    });
  }, [tariffs]);

  const isLoading = !selectedCurrency;

  if (!header || !bgImages) {
    return null; // Or a loading spinner
  }

  return (
    <section ref={ref} id="pricing" className="py-24 lg:py-28 xl:py-32 relative overflow-hidden bg-gradient-to-br from-brand-pink/15 to-brand-blue/5">
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