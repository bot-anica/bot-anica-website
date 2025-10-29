'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

import { finalCtaData } from '@/constants/home/finalCta';
import { Button } from '@/components/common';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { animationVariants } from '@/utils/animations';

const FinalCTA: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];

  return (
    <section ref={ref} id="finalCta" className="py-24 lg:py-28 xl:py-32 bg-bg-primary relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-gradient-to-r from-brand-purple to-brand-blue p-8 sm:p-12 rounded-2xl text-center text-white"
          initial="hidden"
          animate={isIntersecting ? 'visible' : 'hidden'}
          variants={animationVariants.scaleIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{finalCtaData.title}</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">{finalCtaData.subtitle}</p>
          <Button
            href="/course/python-basics"
            size="lg"
            className="bg-white text-brand-blue hover:bg-gray-200"
          >
            {finalCtaData.buttonText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
