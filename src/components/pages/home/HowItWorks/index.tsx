'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

import { howItWorksData } from '@/constants/home/howItWorks';
import StepCard from './StepCard';
import { SectionHeader, SectionSplitter } from '@/components/common';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { animationVariants } from '@/utils/animations';

const HowItWorks: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];

  return (
    <section ref={ref} id="howItWorks" className="py-24 lg:py-28 xl:py-32 bg-bg-primary overflow-hidden relative">
      <SectionHeader
        title={howItWorksData.title}
        isIntersecting={isIntersecting}
        titleClassName="max-w-3xl"
      />
      <SectionSplitter />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 relative"
          initial="hidden"
          animate={isIntersecting ? 'visible' : 'hidden'}
          variants={animationVariants.staggerContainer}
        >
          {howItWorksData.steps.map((step, index) => (
            <motion.div key={index} variants={animationVariants.fadeInUp} className="relative z-10">
              <StepCard
                step={step.step}
                title={step.title}
                description={step.description}
                image={step.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
