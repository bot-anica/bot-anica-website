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
    <motion.div variants={variants} className={`bg-gradient-to-br from-brand-pink/5 via-brand-blue-light/5 to-brand-pink/5 rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 border border-brand-pink/20 ${className}`}>
      <div className="flex flex-col items-start text-left">
        <div className="flex mb-6 gap-4 items-center">
          <div className="bg-gradient-to-br from-brand-blue to-brand-pink p-2 rounded-lg">
            <Icon
              name={icon}
              className="w-8 h-8 text-white"
            />
          </div>
          <h3 className="text-xl font-bold text-text-primary">{title}</h3>
        </div>
        <p className="text-text-secondary/80 text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
