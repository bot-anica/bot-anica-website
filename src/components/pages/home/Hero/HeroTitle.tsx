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
      className="text-4xl lg:text-5xl font-extrabold text-text-primary leading-tight"
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
