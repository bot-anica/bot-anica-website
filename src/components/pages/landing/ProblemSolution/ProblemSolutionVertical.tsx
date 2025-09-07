import type { FC } from 'react';
import { motion, type Variants } from 'framer-motion';

import { ProblemSolutionItem as ProblemSolutionItemType } from '@/types/sections';
import Icon from '@/components/ui/Icon';

interface ProblemSolutionVerticalProps {
  items: ProblemSolutionItemType[];
  isIntersecting: boolean;
  itemVariants: Variants;
}

const Divider = () => {
  return (
    <div className="w-30 h-px bg-gray-300 mt-5" />
  )
}

const ProblemSolutionVertical: FC<ProblemSolutionVerticalProps> = ({
  items,
  isIntersecting,
  itemVariants
}) => {
  return (
    <div className="mb-8">
      <div className="space-y-6">
        {items.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
              variants={itemVariants}
              custom={index}
              className="flex flex-col items-center space-y-1"
            >
              {/* Problem block */}
              <div className="w-full max-w-xs">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-blue/5 border border-primary-blue/30">
                  <Icon name={item.icon} className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="line-through text-primary-blue/70 font-medium text-sm flex-1">
                    {item.problem}
                  </span>
                </div>
              </div>

              {/* Solution block */}
              <div className="w-full max-w-xs">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-pink/5 border border-primary-pink/20">
                  <Icon name={item.icon} className="w-4 h-4 text-primary-pink/60 flex-shrink-0" />
                  <span className="font-medium text-primary-dark text-sm flex-1">
                    {item.solution}
                  </span>
                </div>
              </div>

              {index < items.length - 1 && <Divider />}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProblemSolutionVertical;
