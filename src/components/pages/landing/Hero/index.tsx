'use client';

import { useMemo, type FC } from 'react';
import { motion } from 'framer-motion';

import HeroCTA from './HeroCTA';
import HeroBenefits from './HeroBenefits';
import HeroSubtitle from './HeroSubtitle';
import HeroTitle from './HeroTitle';
import HeroImageInText from './HeroImageInText';
import HeroRightImage from './HeroRightImage';

import { CourseHeroData } from '@/types/sections';
import { SectionBackground, SectionSplitter } from '@/components/common';
import { useHeroAnimations } from '@/hooks/useHeroAnimations';
import HeroFreeCourseLabel from './HeroFreeCourseLabel';
import { useCourseTariffs } from '@/hooks/useCourseTariffs';
import { checkIsCourseFree } from '@/utils/course';

interface HeroProps {
  data: CourseHeroData;
  courseId: number;
}

const Hero: FC<HeroProps> = ({data, courseId}) => {
  const { containerVariants, itemVariants } = useHeroAnimations();
  const { tariffs, isLoading: tariffsLoading, error } = useCourseTariffs(courseId);

  const courseIsFree = useMemo(() => {
    if (!tariffs) return false;
    return checkIsCourseFree(tariffs);
  }, [tariffs]);

  const {title, subtitle, benefits, cta, images, bgImages} = data

  if (!title || !subtitle || !benefits || !cta || !images || !bgImages) {
    return null; // Or a loading spinner
  }

  return (
    <section className={`bg-bg-primary relative min-h-screen flex items-center justify-center overflow-hidden pt-14 lg:pt-18`}>
      <SectionBackground bgImages={bgImages} />
      <SectionSplitter top={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1fr_auto] gap-8 xl:gap-16 items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <HeroBenefits benefits={benefits} itemVariants={itemVariants} />
            {courseIsFree && <HeroFreeCourseLabel itemVariants={itemVariants} />}
            <div className="grid gap-12 mb-12 lg:mt-4 lg:mb-4">
              <HeroTitle title={title} itemVariants={itemVariants} />
              <HeroImageInText images={images.imagesInText} itemVariants={itemVariants} />
            </div>

            <div>
              <HeroSubtitle subtitle={subtitle} itemVariants={itemVariants} />
              <HeroCTA cta={cta} itemVariants={itemVariants} />
            </div>
          </motion.div>
        </div>
        <HeroRightImage images={images.rightImages} itemVariants={itemVariants} />
      </div>
    </section>
  );
};

export default Hero;