"use client";

import type { FC } from 'react';

import FAQList from './FAQList';

import { useFAQ } from '@/hooks/useFAQ';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionBottomCTA, SectionHeader } from '@/components/common';
import { faqData } from '@/constants/home/faq';
import { finalCtaData } from '@/constants/home/finalCta';

const FAQ: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];
  const { openIndex, toggleFAQ } = useFAQ();

  return (
    <section ref={ref} id="faq" className="py-24 lg:py-28 xl:py-32 bg-bg-primary relative">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader title={faqData.title} isIntersecting={isIntersecting} />

        {/* FAQ Items */}
        <FAQList 
          faqs={faqData.items} 
          openIndex={openIndex} 
          onToggle={toggleFAQ} 
          isIntersecting={isIntersecting as boolean}
        />

        {/* Bottom Section */}
        <SectionBottomCTA data={finalCtaData} isIntersecting={isIntersecting as boolean} />
      </div>
    </section>
  );
};

export default FAQ;
