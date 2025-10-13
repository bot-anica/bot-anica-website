"use client";

import type { FC } from 'react';

import FAQBanner from './FAQBanner';
import FAQList from './FAQList';

import { FAQData, Course, Currency, FAQItem } from '@/types/sections';
import { useFAQ } from '@/hooks/useFAQ';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionBackground, SectionHeader } from '@/components/common';

interface FAQProps {
  data: FAQData,
  course: Course,
  courseIsFree?: boolean,
}

const FAQ: FC<FAQProps> = ({data, course, courseIsFree}) => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];
  const { openIndex, toggleFAQ } = useFAQ();

  const { header, faqs, bgImages } = data
  const { tariffs } = course

  if (!header || !faqs || !bgImages) {
    return null;
  }

  let currencyNames = '...';
  if (tariffs.length > 0) {
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
        {/* Header */}
        <SectionHeader title={header.title} subtitle={header.subtitle} isIntersecting={isIntersecting} />

        {/* FAQ Items */}
        <FAQList 
          faqs={courseIsFree ? faqs : [...faqs, currencyFAQ]} 
          openIndex={openIndex} 
          onToggle={toggleFAQ} 
          isIntersecting={isIntersecting as boolean} 
        />

        {/* Bottom Section */}
        <FAQBanner isIntersecting={isIntersecting as boolean} />
      </div>
    </section>
  );
};

export default FAQ;
