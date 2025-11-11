import { FC, ReactNode } from 'react';

import { cn } from '@/utils/cn';

const iconWrapperColorVariants = {
  blue: 'bg-blue-100',
  green: 'bg-green-100',
};

interface SupportCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  linkHref: string;
  linkText: string;
  footerText: string;
  isExternalLink?: boolean;
  color?: keyof typeof iconWrapperColorVariants;
  className?: string;
}

const SupportCard: FC<SupportCardProps> = ({ icon, title, description, linkHref, linkText, footerText, isExternalLink, color, className }) => {
  const iconWrapperClassName = cn(
    'flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center',
    color && iconWrapperColorVariants[color]
  );

  return (
    <div className={`bg-bg-primary rounded-xl p-4 md:p-5 lg:p-6 flex gap-4 border border-brand-blue-light/15 ${className || ''}`}>
      <div className={iconWrapperClassName}>
        {icon}
      </div>
      <div>
        <h4 className='text-sm md:text-base font-bold text-text-primary mb-1'>{title}</h4>
        <p className='text-text-secondary text-sm'>{description}</p>
        <a 
          href={linkHref} 
          className='text-blue-500 hover:underline break-all text-sm'
          {...(isExternalLink && { target: 'blank', rel: 'noopener noreferrer' })}
        >
          {linkText}
        </a>
        <p className='mt-2 text-xs text-text-tertiary'>{footerText}</p>
      </div>
    </div>
  );
};

export default SupportCard;
