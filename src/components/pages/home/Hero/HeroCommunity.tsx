import { FC } from 'react';
import { motion } from 'framer-motion';

interface HeroCommunityProps {
  variants: any;
}

const HeroCommunity: FC<HeroCommunityProps> = ({ variants }) => {
  return (
    <motion.p 
      variants={variants}
      className="mt-6 text-sm text-text-tertiary"
    >
      Более 450 участников в нашем сообществе.
    </motion.p>
  );
};

export default HeroCommunity;
