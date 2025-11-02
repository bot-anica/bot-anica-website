import { FC } from 'react';
import { motion } from 'framer-motion';

interface HeroTitleProps {
  variants: any;
}

const HeroTitle: FC<HeroTitleProps> = ({ variants }) => {
  return (
    <motion.h1 
      variants={variants}
      className="text-4xl lg:text-5xl font-extrabold text-text-primary leading-tight"
    >
      От идеи до проекта в{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-blue">
        портфолио
      </span>
    </motion.h1>
  );
};

export default HeroTitle;
