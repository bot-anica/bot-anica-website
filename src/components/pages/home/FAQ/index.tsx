"use client";

import type { FC } from 'react';

import FAQList from './FAQList';

import { useFAQ } from '@/hooks/useFAQ';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionBottomCTA, SectionHeader } from '@/components/common';
import { finalCtaData } from '@/constants/home/finalCta';
import { FAQData } from '@/types/sections';

interface FAQProps {
  data: FAQData
}

const FAQ: FC<FAQProps> = ({ data }) => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];
  const { openIndex, toggleFAQ } = useFAQ();

  return (
    <section ref={ref} id="faq" className="py-24 lg:py-28 xl:py-32 bg-bg-primary relative">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={data.header.title} isIntersecting={isIntersecting} />

        <FAQList 
          faqs={data.faqs} 
          openIndex={openIndex} 
          onToggle={toggleFAQ} 
          isIntersecting={isIntersecting as boolean}
        />

        <SectionBottomCTA data={finalCtaData} isIntersecting={isIntersecting as boolean} />
      </div>
    </section>
  );
};

export default FAQ;
