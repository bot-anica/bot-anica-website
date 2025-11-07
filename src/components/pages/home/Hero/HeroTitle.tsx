import { FC } from 'react';
import { motion } from 'framer-motion';
import { HeroTitle as HeroTitleType } from '@/types/sections';

interface HeroTitleProps {
  title: HeroTitleType;
  variants: any;
}

const HeroTitle: FC<HeroTitleProps> = ({ title, variants }) => {
  return (
    <motion.h1 
      variants={variants}
      className="mb-5 xl:mb-6 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-text-primary leading-tight"
    >
      <span>{title.main}</span>
      {title.highlight && (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-blue">
          {title.highlight}
        </span>
      )}
    </motion.h1>
  );
};

export default HeroTitle;
