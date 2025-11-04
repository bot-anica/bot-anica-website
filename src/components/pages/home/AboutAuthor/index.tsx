'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

import { aboutAuthorData } from '@/constants/home/aboutAuthor';
import { SectionHeader } from '@/components/common';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { animationVariants } from '@/utils/animations';

const AboutAuthor: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];

  return (
    <section ref={ref} id="aboutAuthor" className="py-24 lg:py-28 xl:py-32 bg-bg-secondary relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          title={aboutAuthorData.title}
          isIntersecting={isIntersecting}
        />

        <motion.blockquote
          className="text-lg lg:text-xl text-text-secondary/90 my-8"
          initial="hidden"
          animate={isIntersecting ? 'visible' : 'hidden'}
          variants={animationVariants.fadeInUp}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p>“{aboutAuthorData.text}”</p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default AboutAuthor;
