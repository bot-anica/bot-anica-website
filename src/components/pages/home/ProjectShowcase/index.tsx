'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

import { projectShowcaseData } from '@/constants/home/projectShowcase';
import ProjectCard from './ProjectCard';
import { SectionHeader } from '@/components/common';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { animationVariants } from '@/utils/animations';

const ProjectShowcase: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];
  const [mainProject, ...otherProjects] = projectShowcaseData.projects;

  return (
    <section ref={ref} id="projectShowcase" className="py-24 lg:py-28 xl:py-32 bg-bg-primary relative">
      <SectionHeader
        title={projectShowcaseData.title}
        isIntersecting={isIntersecting}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={isIntersecting ? 'visible' : 'hidden'}
          variants={animationVariants.staggerContainer}
        >
          <motion.div variants={animationVariants.fadeInUp} className="md:col-span-2">
            <ProjectCard {...mainProject} variant="large" />
          </motion.div>

          <div className="flex flex-col gap-8">
            {otherProjects.map((project, index) => (
              <motion.div key={index} variants={animationVariants.fadeInUp}>
                <ProjectCard {...project} variant="small" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;