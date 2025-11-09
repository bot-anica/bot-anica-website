import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export interface SectionHeaderProps {
  title: string | ReactNode;
  position?: 'left' | 'center' | 'right';
  subtitle?: string;
  isIntersecting: boolean;
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  position = 'center',
  subtitle,
  isIntersecting,
  className = "",
  titleClassName = ""
}) => {
  const alignClasses = {
    left: 'items-start',
    center: 'items-center',
    right: 'items-end',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${alignClasses[position]} gap-2 md:gap-3 lg:gap-4 xl:gap-6 mb-8 lg:mb-12 xl:mb-16 text-${position} ${className}`}
    >
      <h2 className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-text-primary ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-sm lg:text-base xl:text-lg text-text-secondary max-w-3xl`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader; 