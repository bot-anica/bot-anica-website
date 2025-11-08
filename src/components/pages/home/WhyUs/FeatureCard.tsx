import { FC } from 'react';
import { motion } from 'framer-motion';

import Icon from '@/components/ui/Icon';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
  variants?: any;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description, className, variants }) => {
  return (
    <motion.div variants={variants} className={`w-full max-w-sm md:max-w-max ml-auto mr-auto bg-gradient-to-br from-brand-pink/5 via-brand-blue-light/5 to-brand-pink/5 rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 border border-brand-pink/20 ${className}`}>
      <div className="flex flex-col items-start text-left">
        <div className="flex mb-3 lg:mb-6 gap-2 md:gap-3 lg:gap-4 items-center">
          <div className="bg-gradient-to-br from-brand-blue to-brand-pink p-2 rounded-lg">
            <Icon
              name={icon}
              className="md:w-6 md:h-6 lg:w-8 lg:h-8 text-white"
            />
          </div>
          <h3 className="md:text-base lg:text-xl font-semibold lg:font-bold text-text-primary">{title}</h3>
        </div>
        <p className="text-text-secondary/80 text-sm lg:text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
