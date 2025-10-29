'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

import { aboutAuthorData } from '@/constants/home/aboutAuthor';
import { SectionHeader, Button } from '@/components/common';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { animationVariants } from '@/utils/animations';
import Icon from '@/components/ui/Icon';

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

        {/* <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial="hidden"
          animate={isIntersecting ? 'visible' : 'hidden'}
          variants={animationVariants.fadeInUp}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button
            href={aboutAuthorData.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            className="w-full sm:w-auto"
          >
            <Icon name="Github" className="w-5 h-5 mr-2" />
            Оцените код на GitHub
          </Button>
          <a href={`mailto:${aboutAuthorData.email}`} className="text-text-secondary hover:text-text-primary transition-colors">
            {aboutAuthorData.email}
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default AboutAuthor;
