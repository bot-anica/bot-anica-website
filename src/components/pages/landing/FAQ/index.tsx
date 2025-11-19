"use client";

import { useMemo, type FC } from 'react';

import { FAQData, Course, Currency, FAQItem } from '@/types/sections';
import { useFAQ } from '@/hooks/useFAQ';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { FAQBanner, FAQList, SectionBackground, SectionHeader } from '@/components/common';
import { useCourseTariffs } from '@/hooks/useCourseTariffs';
import { checkIsCourseFree } from '@/utils/course';

interface FAQProps {
  data: FAQData,
  courseId: number,
}

const FAQ: FC<FAQProps> = ({data, courseId}) => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];
  const { openIndex, toggleFAQ } = useFAQ();
  const { tariffs, isLoading: tariffsLoading, error } = useCourseTariffs(courseId);
  
  const courseIsFree = useMemo(() => {
    if (!tariffs) return false;
    return checkIsCourseFree(tariffs);
  }, [tariffs]);

  const { header, faqs, bgImages, banner } = data

  if (!header || !faqs || !bgImages) {
    return null;
  }

  let currencyNames = '...';
  if (tariffs && tariffs.length > 0) {
    const currencies: Currency[] = tariffs[0].prices.map(price => price.currency);
    currencyNames = currencies.map(c => c.name).join(', ');
  }

  const currencyFAQ: FAQItem = {
    question: "В каких валютах можно оплатить курс?",
    answer: `Мы принимаем оплату в следующих валютах: ${currencyNames}.`
  };

  return (
    <section ref={ref} id="faq" className="py-24 lg:py-28 xl:py-32 bg-bg-primary relative">
      <SectionBackground bgImages={bgImages} lazy />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={header.title} subtitle={header.subtitle} isIntersecting={isIntersecting} />

        <FAQList 
          faqs={courseIsFree ? faqs : [...faqs, currencyFAQ]} 
          openIndex={openIndex} 
          onToggle={toggleFAQ} 
          isIntersecting={isIntersecting as boolean} 
        />

        <FAQBanner data={banner} isIntersecting={isIntersecting as boolean} />
      </div>
    </section>
  );
};

export default FAQ;
