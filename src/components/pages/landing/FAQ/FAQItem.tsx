import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { FC } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
  isIntersecting: boolean;
  index: number;
}

const FAQItem: FC<FAQItemProps> = ({ question, answer, open, onClick, isIntersecting, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="bg-bg-secondary rounded-lg border border-brand-blue-light/15 overflow-hidden"
  >
    <button
      onClick={onClick}
      className={`grid grid-cols-[1fr_auto] items-center cursor-pointer w-full px-4 py-3 md:px-6 md:py-3 text-left ${open ? 'bg-bg-secondary' : ''} hover:bg-bg-secondary transition-colors`}
    >
      <span className="font-medium text-faq-question-text text-sm md:text-base">
        {question}
      </span>
      <ChevronDown
        className={`w-5 h-5 text-faq-arrow-icon transition-transform ${open ? 'rotate-180' : ''}`}
      />
    </button>
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-4 py-3 md:px-6 md:py-3 text-sm md:text-base text-faq-answer-text leading-relaxed">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export default FAQItem;