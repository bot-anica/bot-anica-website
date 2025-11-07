import { FC } from 'react';
import { motion } from 'framer-motion';

interface HeroSubtitleProps {
  subtitle: string;
  variants: any;
}

const HeroSubtitle: FC<HeroSubtitleProps> = ({ subtitle, variants }) => {
  return (
    <motion.p 
      variants={variants}
      className="mb-10 lg:mb-6 xl:mb-8 text-sm md:text-base lg:text-lg xl:text-xl text-text-secondary max-w-md md:max-w-xl mx-auto md:mx-0"
    >
      {subtitle}
    </motion.p>
  );
};

export default HeroSubtitle;
