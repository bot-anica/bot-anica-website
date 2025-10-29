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
    <div className="text-left">
      <div className="relative mb-6">
        <div className="relative w-full h-64 rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={400}
            height={256}
            className="w-full h-full object-cover bg-bg-secondary"
          />
        </div>
        <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-pink flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{step}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-text-primary">{title}</h3>
      <p className="text-text-secondary/80">{description}</p>
    </div>
  );
};

export default StepCard;
