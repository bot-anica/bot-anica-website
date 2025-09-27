import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Feature } from '../../../../types/sections';
import Icon from '@/components/ui/Icon';

interface FeatureCardProps {
  index: number;
  feature: Feature;
  isIntersecting: boolean;
}

const FeatureCard: FC<FeatureCardProps> = ({ 
  index,
  feature, 
  isIntersecting
}) => {
  const getIcon = () => {
    const iconClass = `w-15 h-15 ${feature.iconColor}`;
    return <Icon name={feature.icon} className={iconClass} />
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{y: -8, transition: { duration: 0.3 }}}
      className="group text-center"
    >
      <div className="relative bg-bg-primary rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border-primary">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className={`w-20 h-20 bg-gradient-to-br ${feature.iconColor}33 rounded-2xl flex items-center justify-center`}>
            {getIcon()}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-text-primary">
            {feature.title}
          </h3>
          <p className="text-sm text-text-tertiary font-medium">
            {feature.subtitle}
          </p>
          <p className="text-text-secondary leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
