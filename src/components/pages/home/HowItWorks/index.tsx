'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

import StepCard from './StepCard';
import { SectionHeader, SectionSplitter } from '@/components/common';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { animationVariants } from '@/utils/animations';
import { HowItWorksData } from '@/types/sections';

interface HowItWorksProps {
  data: HowItWorksData
}

const HowItWorks: FC<HowItWorksProps> = ({ data }) => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];

  return (
    <section ref={ref} id="howItWorks" className="py-24 lg:py-28 xl:py-32 bg-bg-primary overflow-hidden relative">
      <SectionHeader
        title={data.header.title}
        subtitle={data.header.subtitle}
        isIntersecting={isIntersecting}
        titleClassName="max-w-2xl"
      />
      <SectionSplitter />

      <div className="max-w-md md:max-w-7xl lg:max-w-max lg:container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="flex justify-center flex-wrap gap-12 md:gap-16 items-stretch relative"
          initial="hidden"
          animate={isIntersecting ? 'visible' : 'hidden'}
          variants={animationVariants.staggerContainer}
        >
          {data.steps.map((step, index) => (
            <motion.div key={index} variants={animationVariants.fadeInUp} className="relative z-10">
              <StepCard
                step={index + 1}
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
