'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { useHeroAnimations } from '@/hooks/useHeroAnimations';
import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import HeroCTA from './HeroCTA';
import HeroCommunity from './HeroCommunity';
import HeroImage from './HeroImage';

const Hero: FC = () => {
  const { containerVariants, itemVariants } = useHeroAnimations();

  return (
    <section className="relative bg-background py-20 md:py-32 lg:py-40 max-h-screen">
      <div className="absolute right-0 bottom-0 left-0 z-10 h-50 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-bg-primary/0" />
      <div className="absolute right-0 bottom-0 left-0 z-10 h-50 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-bg-primary/0" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-12 lg:gap-16 items-center"
        >
          {/* Left Side: Text Content */}
          <div className="flex flex-col items-center text-center">
            <HeroTitle variants={itemVariants} />
            <HeroSubtitle variants={itemVariants} />
            <HeroCTA variants={itemVariants} />
            <HeroCommunity variants={itemVariants} />
          </div>

          {/* Right Side: Visual Element */}
          <HeroImage variants={itemVariants} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
