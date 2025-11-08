import { FC } from 'react';
import Image from 'next/image';

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  image: string;
}

const StepCard: FC<StepCardProps> = ({ step, title, description, image }) => {
  return (
    <div className="max-w-96 text-left">
      <div className="relative mb-2 md:mb-4 lg:mb-6">
        <div className="relative w-full h-48 md:h-56 lg:h-64 rounded-xl md:rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={400}
            height={256}
            className="w-full h-full object-cover bg-bg-secondary"
          />
        </div>
        <div className="absolute -top-6 sm:-top-4 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:-left-4 w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-pink flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{step}</span>
        </div>
      </div>
      <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-text-primary">{title}</h3>
      <p className="text-sm md:text-base text-text-secondary/80">{description}</p>
    </div>
  );
};

export default StepCard;
