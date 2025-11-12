import { FC, memo } from 'react';
import { motion } from 'framer-motion';

import { WhySpecialPoint } from '@/types/sections';
import Icon from '@/components/ui/Icon';
import { animationVariants } from '@/utils/animations';

interface WhySpecialPointContentProps {
  point: WhySpecialPoint;
  isIntersecting?: boolean;
}

const WhySpecialPointContent: FC<WhySpecialPointContentProps> = ({ point, isIntersecting }) => {
  return (
    <motion.div
      initial="hidden"
      animate={isIntersecting ? 'visible' : 'hidden'}
      variants={animationVariants.fadeInRight}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="flex items-center gap-4 mb-4 lg:mb-6">
        <div className="p-2 md:p-3 rounded-lg md:rounded-xl" style={{ background: `${point.color}33` }}>
          <Icon name={point.icon} className="w-6 h-6 md:w-8 md:h-8" style={{ color: point.color }} />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-text-primary">
          {point.title}
        </h3>
      </div>
      
      <p className="text-text-secondary text-sm md:text-base lg:text-lg leading-relaxed mb-4 lg:mb-6">
        {point.description}
      </p>
      
      <div className="space-y-3 lg:space-y-4">
        <h4 className="font-semibold text-text-primary">
          Что вы получите:
        </h4>
        <ul className="space-y-3 lg:space-y-4">
          {point.bullets.map((bullet, bulletIndex) => (
            <li
              key={bulletIndex}
              className="flex items-center gap-2 lg:gap-3 text-sm md:text-base text-text-secondary"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-brand-pink/10 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-brand-pink/50 rounded-full"></div>
              </div>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default memo(WhySpecialPointContent);
