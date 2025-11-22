import { FC } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface FeatureListProps {
  features: string;
  isIntersecting?: boolean;
  cardIndex?: number;
}

const FeatureList: FC<FeatureListProps> = ({ features, isIntersecting, cardIndex = 0 }) => {
  const featureList = features.split('\n');

  const shouldAnimate = isIntersecting !== undefined;

  return (
    <ul className="space-y-2 xl:space-y-3 flex-grow">
      {featureList.map((feature, featureIndex) => {
        if (shouldAnimate) {
          return (
            <motion.li
              key={featureIndex}
              initial={{ opacity: 0, x: -10 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: cardIndex * 0.2 + featureIndex * 0.1 }}
              className="flex items-center gap-2 sm:gap-3 text-text-secondary"
            >
              <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-brand-pink/10 rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-2 h-2 sm:w-3 sm:h-3 text-brand-pink" />
              </div>
              <span className="text-sm">{feature}</span>
            </motion.li>
          );
        }
        return (
          <li key={featureIndex} className="flex items-center gap-2 text-text-secondary text-sm lg:text-base">
            <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-brand-pink/10 rounded-full flex items-center justify-center mt-0.5">
              <Check className="w-2 h-2 sm:w-3 sm:h-3 text-brand-pink" />
            </div>
            <span>{feature}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default FeatureList;