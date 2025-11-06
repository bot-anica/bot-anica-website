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
      className="mt-6 text-lg lg:text-xl text-text-secondary max-w-xl mx-auto md:mx-0"
    >
      {subtitle}
    </motion.p>
  );
};

export default HeroSubtitle;
