import { FC } from 'react';
import { motion } from 'framer-motion';

interface HeroSubtitleProps {
  variants: any;
}

const HeroSubtitle: FC<HeroSubtitleProps> = ({ variants }) => {
  return (
    <motion.p 
      variants={variants}
      className="mt-6 text-lg lg:text-xl text-text-secondary max-w-xl mx-auto md:mx-0"
    >
      Практические курсы для создания IT-портфолио. Учитесь в своем темпе с пожизненным доступом.
    </motion.p>
  );
};

export default HeroSubtitle;
