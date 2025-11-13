import { motion } from 'framer-motion';

import { Button } from '@/components/common';
import { FAQBanner as FAQBannerType } from '@/types/sections';
import Icon from '@/components/ui/Icon';

interface FAQBannerProps {
  data: FAQBannerType;
  isIntersecting: boolean;
}

const FAQBanner: React.FC<FAQBannerProps> = ({ data, isIntersecting }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="flex flex-col items-center gap-2 md:gap-3 lg:gap-4 bg-bg-secondary rounded-xl p-4 md:p-6 lg:p-8 text-center border border-brand-blue-light/15"
    >
      <Icon name={data.icon} className="w-10 h-10 md:w-12 md:h-12 text-brand-pink" />
      <h3 className="text-base md:text-xl font-semibold text-text-primary">
        {data.title}
      </h3>
      <p className="mx-auto max-w-md md:max-w-lg text-text-secondary text-sm md:text-base">
        {data.subtitle}
      </p>
      <Button to={data.cta.link} variant={data.cta.buttonVariant} size={data.cta.buttonSize} className="min-w-[160px] mt-2 md:mt-4">
        {data.cta.text}
      </Button>
    </motion.div>
  );
};

export default FAQBanner;