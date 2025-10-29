'use client';

import { FC, useState } from 'react';
import { motion } from 'framer-motion';

import { faqData } from '@/constants/home/faq';
import { SectionHeader } from '@/components/common';
import Accordion from '@/components/common/Accordion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { animationVariants } from '@/utils/animations';

const FAQ: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} id="faq" className="py-24 lg:py-28 xl:py-32 bg-bg-primary relative">
      <SectionHeader
        title={faqData.title}
        isIntersecting={isIntersecting}
      />

      <motion.div 
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isIntersecting ? 'visible' : 'hidden'}
        variants={animationVariants.staggerContainer}
      >
        {faqData.items.map((item, index) => (
          <motion.div key={index} variants={animationVariants.fadeInUp}>
            <Accordion
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FAQ;
