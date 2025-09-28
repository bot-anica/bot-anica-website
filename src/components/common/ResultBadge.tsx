import { Check } from 'lucide-react';
import type { FC } from 'react';
import { cn } from '../../utils/cn';

interface ResultBadgeProps {
  text: string;
  className?: string;
}

const ResultBadge: FC<ResultBadgeProps> = ({ text, className }) => {
  return (
    <div className={cn("bg-bg-result-badge rounded-lg p-3 border border-border-result-badge", className)}>
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-bg-primary rounded-full flex items-center justify-center flex-shrink-0 border border-border-result-badge">
          <Check className="w-3 h-3 text-icon-result-badge" />
        </div>
        <span className="text-xs text-text-result-badge font-medium">
          {text}
        </span>
      </div>
    </div>
  );
};

export default ResultBadge;
