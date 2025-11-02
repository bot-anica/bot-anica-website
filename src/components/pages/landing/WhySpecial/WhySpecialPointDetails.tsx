import type { FC } from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';

import WhySpecialPointContent from './WhySpecialPointContent';

import { WhySpecialPoint } from '@/types/sections';
import { animationVariants } from '@/utils/animations';

interface WhySpecialPointDetailsProps {
  point: WhySpecialPoint;
  isFirstPoint: boolean;
  isLastPoint: boolean;
  isIntersecting: boolean;
}

const WhySpecialPointDetails: FC<WhySpecialPointDetailsProps> = ({ point, isFirstPoint, isLastPoint, isIntersecting }) => {
  const getBorerRadiusDependOnSelectedPoint = () => {
    if (isFirstPoint) {
      return 'rounded-tl-none lg:rounded-tl-2xl';
    }
    if (isLastPoint) {
      return 'rounded-tr-none lg:rounded-tr-2xl';
    }
    return '';
  };

  return (
    <motion.div
      initial="hidden"
      animate={isIntersecting ? 'visible' : 'hidden'}
      variants={animationVariants.fadeInRight}
      transition={{ delay: 0.5, duration: 0.5 }}
      className={`bg-bg-primary rounded-2xl ${getBorerRadiusDependOnSelectedPoint()} lg:rounded-2xl p-8 transition-colors duration-300 border border-border-primary hover:border-brand-pink/30 h-full flex flex-col`}
    >
      <WhySpecialPointContent point={point} />
    </motion.div>
  );
};

export default memo(WhySpecialPointDetails);