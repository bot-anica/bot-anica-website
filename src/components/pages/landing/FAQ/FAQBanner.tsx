import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

import { Button } from '@/components/common';
import { ButtonVariant, ButtonSize } from '@/types/common';

interface FAQBannerProps {
  isIntersecting: boolean;
}

const FAQBanner: React.FC<FAQBannerProps> = ({ isIntersecting }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="bg-bg-secondary rounded-xl p-4 md:p-6 lg:p-8 text-center border border-brand-blue-light/15"
    >
      <div className="flex justify-center mb-2 md:mb-3 lg:mb-4">
        <HelpCircle className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 text-brand-pink" />
      </div>
      <h3 className="text-base md:text-xl font-semibold text-text-primary mb-2 md:mb-3 lg:mb-4">
        Не нашли ответ?
      </h3>
      <p className="text-text-secondary text-sm md:text-base">
        Все материалы курса содержат детальные объяснения и пошаговые инструкции для самостоятельного изучения
      </p>
      <Button to="#pricing" variant={ButtonVariant.PRIMARY} size={ButtonSize.SM} className="mt-4 md:mt-6 lg:mt-8">
        Начать обучение
      </Button>
    </motion.div>
  );
};

export default FAQBanner;