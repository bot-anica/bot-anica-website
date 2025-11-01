import type { FC } from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';

import WhySpecialPointItem from './WhySpecialPointItem';

import { WhySpecialPoint } from '@/types/sections';
import { animationVariants } from '@/utils/animations';

interface WhySpecialPointsListProps {
  points: WhySpecialPoint[];
  activePoint: number;
  isIntersecting: boolean;
  onClick: (index: number) => void;
}

const WhySpecialPointsList: FC<WhySpecialPointsListProps> = ({ 
  points, 
  activePoint, 
  isIntersecting,
  onClick 
}) => {
  return (
    <motion.div
      initial="hidden"
      animate={isIntersecting ? 'visible' : 'hidden'}
      variants={animationVariants.staggerContainer}
      className={`grid grid-flow-col lg:grid-flow-row lg:space-x-0 lg:space-y-4 -mb-1 lg:mb-0`}
    >
      {points.map((whySpecialPoint: WhySpecialPoint, index: number) => (
        <motion.div key={index} variants={animationVariants.fadeInUp} className="relative z-10">
          <WhySpecialPointItem
            key={index}
            point={whySpecialPoint}
            isActive={activePoint === index}
            onClick={() => onClick(index)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default memo(WhySpecialPointsList);