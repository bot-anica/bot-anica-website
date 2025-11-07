import { FC } from 'react';
import { motion } from 'framer-motion';

interface HeroCommunityProps {
  text: string;
  variants: any;
}

const HeroCommunity: FC<HeroCommunityProps> = ({ text, variants }) => {
  return (
    <motion.p 
      variants={variants}
      className="text-xs md:text-sm text-text-tertiary"
    >
      {text}
    </motion.p>
  );
};

export default HeroCommunity;
