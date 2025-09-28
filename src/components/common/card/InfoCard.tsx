
import { FC, ReactNode } from 'react';

// Tailwind CSS JIT compiler needs to see the full class names.
// Including them here ensures they are not purged from the final CSS.
// bg-green-100 bg-blue-100 bg-orange-100

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
}

const InfoCard: FC<InfoCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="bg-bg-primary rounded-xl p-4 md:p-5 lg:p-6 flex gap-4 border border-brand-blue-light/15">
      <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-${color}-100 rounded-full flex items-center justify-center`}>
        {icon}
      </div>
      <div>
        <h4 className="text-sm md:text-base font-bold text-text-primary mb-1">
          {title}
        </h4>
        <p className="text-text-secondary text-sm">
          {description}
        </p>
      </div>
    </div>
  )
};

export default InfoCard;
