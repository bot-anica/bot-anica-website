"use client";

import type { FC } from 'react';

import { useFAQ } from '@/hooks/useFAQ';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { FAQBanner, FAQList, SectionHeader } from '@/components/common';
import { FAQData } from '@/types/sections';

interface FAQProps {
  data: FAQData
}

const FAQ: FC<FAQProps> = ({ data }) => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];
  const { openIndex, toggleFAQ } = useFAQ();

  const { header, faqs, banner } = data

  return (
    <section ref={ref} id="faq" className="py-24 lg:py-28 xl:py-32 bg-bg-primary relative">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={header.title} isIntersecting={isIntersecting} />

        <FAQList 
          faqs={faqs} 
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
