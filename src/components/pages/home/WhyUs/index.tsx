'use client'

import { FC } from 'react';
import { motion } from 'framer-motion';

import { whyUsData } from '@/constants/home/whyUs';
import FeatureCard from './FeatureCard';
import { SectionHeader } from '@/components/common';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Stats from './Stats';
import { animationVariants } from '@/utils/animations';

const WhyUs: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];

  return (
    <section ref={ref} id="whyUs" className="py-24 lg:py-28 xl:py-32 bg-bg-primary relative">
      <SectionHeader
        title={whyUsData.title}
        subtitle={whyUsData.subtitle}
        isIntersecting={isIntersecting}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          animate={isIntersecting ? 'visible' : 'hidden'}
          variants={animationVariants.staggerContainer}
        >
          {whyUsData.features.slice(0,3).map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variants={animationVariants.staggerItem}
            />
          ))}
        </motion.div>

        <Stats stats={whyUsData.stats} isIntersecting={isIntersecting} />
      </div>
    </section>
  );
};

export default WhyUs;
