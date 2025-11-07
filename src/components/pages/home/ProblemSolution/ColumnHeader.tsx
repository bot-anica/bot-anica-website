import { motion } from 'framer-motion';
import React from 'react';

const problemColorConfig = {
  titleText: 'text-brand-blue-light',
};

const solutionColorConfig = {
  titleText: 'text-brand-pink',
};

const colorConfigs = {
  problem: problemColorConfig,
  solution: solutionColorConfig,
};

interface ColumnHeaderProps {
  title: string;
  subtitle: string;
  isIntersecting: boolean;
  className?: string;
  type?: 'problem' | 'solution';
}

const ColumnHeader: React.FC<ColumnHeaderProps> = ({ title, subtitle, isIntersecting, className, type = 'solution' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3, duration: 0.6, ease: 'easeInOut' }}
      className={`mb-4 ${colorConfigs[type].titleText} ${className}`}
    >
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{title}</h3>
      <p className="text-text-tertiary text-xs md:text-sm">{subtitle}</p>
    </motion.div>
  );
};

export default ColumnHeader;
