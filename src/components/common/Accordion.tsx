'use client';

import { useState, FC, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/utils/cn';

interface AccordionProps {
  question: string;
  answer: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

const Accordion: FC<AccordionProps> = ({ question, answer, isOpen, onToggle }) => {
  const [isInternalOpen, setIsInternalOpen] = useState(false);

  const open = isOpen !== undefined ? isOpen : isInternalOpen;
  const toggle = onToggle ? onToggle : () => setIsInternalOpen(!open);

  return (
    <div className="border-b border-border-primary">
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center py-6 text-left"
      >
        <h3 className="text-lg font-semibold text-text-primary">{question}</h3>
        <div className="text-primary-500">
          {open ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-text-secondary/90">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
