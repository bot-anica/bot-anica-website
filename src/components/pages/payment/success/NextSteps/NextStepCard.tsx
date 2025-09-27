
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { NextStep } from '@/types/sections';
import Icon from '@/components/ui/Icon';

interface NextStepCardProps {
  step: NextStep;
  index: number;
}

const NextStepCard: FC<NextStepCardProps> = ({ step, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="relative bg-bg-primary rounded-2xl p-6 transition-all duration-300 border border-border-primary hover:border-brand-pink/30 h-full flex flex-col overflow-hidden"
  >
    <div className={`absolute top-1/2 -right-4 -translate-y-1/2 opacity-5`}>
      <Icon name={step.icon} className="w-32 h-32 text-brand-blue" />
    </div>
    <div className="flex items-center gap-3 mb-4 relative z-10">
      <div className="w-10 h-10 bg-transparent border-2 border-brand-blue/30 rounded-full flex items-center justify-center text-brand-blue font-bold text-sm">
        {index + 1}
      </div>
      <h3 className="text-md font-bold text-text-primary leading-tight flex-1">
        {step.title}
      </h3>
    </div>
    <div className="flex-grow flex flex-col relative z-10">
      <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">
        {step.description}
      </p>
    </div>
  </motion.div>
);

export default NextStepCard;
