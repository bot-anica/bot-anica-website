'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { useHeroAnimations } from '@/hooks/useHeroAnimations';
import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import HeroCTA from './HeroCTA';
import HeroCommunity from './HeroCommunity';
import HeroImage from './HeroImage';
import { HomeHeroData } from '@/types/sections';

interface HeroProps {
  data: HomeHeroData;
}

const Hero: FC<HeroProps> = ({ data }) => {
  const { containerVariants, itemVariants } = useHeroAnimations();

  return (
    <section className="relative bg-bg-primary py-20 md:py-32 lg:py-40 max-h-screen">
      <div className="absolute right-0 bottom-0 left-0 z-10 h-50 md:h-30 lg:h-40 xl:h-50 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-bg-primary/0" />
      <div className="absolute right-0 bottom-0 left-0 z-10 h-50 md:h-30 lg:h-40 xl:h-50 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-bg-primary/0" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center"
        >
          <div className="flex flex-col items-center text-center">
            <HeroTitle title={data.title} variants={itemVariants} />
            <HeroSubtitle subtitle={data.subtitle} variants={itemVariants} />
            <HeroCTA cta={data.cta} variants={itemVariants} />
            <HeroCommunity text={data.text} variants={itemVariants} />
          </div>

          <HeroImage image={data.image} variants={itemVariants} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
