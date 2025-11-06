'use client'

import { FC } from 'react';
import { motion } from 'framer-motion';

import FeatureCard from './FeatureCard';
import { SectionHeader, SectionSplitter } from '@/components/common';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Stats from './Stats';
import { animationVariants } from '@/utils/animations';
import { WhyUsData } from '@/types/sections';

interface WhyUsProps {
  data: WhyUsData
}

const WhyUs: FC<WhyUsProps> = ({ data }) => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];

  return (
    <section ref={ref} id="whyUs" className="py-24 lg:py-28 xl:py-32 bg-bg-primary overflow-hidden relative">
      <SectionHeader
        title={data.header.title}
        subtitle={data.header.subtitle}
        isIntersecting={isIntersecting}
      />
      <SectionSplitter bottom={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          animate={isIntersecting ? 'visible' : 'hidden'}
          variants={animationVariants.staggerContainer}
        >
          {data.features.slice(0,3).map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variants={animationVariants.staggerItem}
            />
          ))}
        </motion.div>

        <Stats stats={data.stats} isIntersecting={isIntersecting} />
      </div>
    </section>
  );
};

export default WhyUs;
