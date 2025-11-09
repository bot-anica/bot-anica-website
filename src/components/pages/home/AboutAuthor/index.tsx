'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

import { SectionHeader } from '@/components/common';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { animationVariants } from '@/utils/animations';
import { HomeAboutAuthorData } from '@/types/sections';

interface AboutAuthorProps {
  data: HomeAboutAuthorData
}

const AboutAuthor: FC<AboutAuthorProps> = ({ data }) => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];

  return (
    <section ref={ref} id="aboutAuthor" className="py-24 lg:py-28 xl:py-32 bg-bg-secondary relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          title={data.header.title}
          isIntersecting={isIntersecting}
        />

        <motion.blockquote
          initial="hidden"
          animate={isIntersecting ? 'visible' : 'hidden'}
          variants={animationVariants.fadeInUp}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-base md:text-lg lg:text-xl text-text-secondary/90"
        >
          <p>“{data.authorData.text}”</p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default AboutAuthor;
