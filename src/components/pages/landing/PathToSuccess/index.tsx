import type { FC } from 'react';
import { steps } from 'framer-motion';

import PathToSuccessBackground from './PathToSuccessBackground';
import PathToSuccessGrid from './PathToSuccessGrid';
import PathToSuccessImages from './PathToSuccessImages';

import { SectionBackground, SectionHeader } from '@/components/common';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { usePathToSuccessAnimations } from '@/hooks/usePathToSuccessAnimations';
import { PathToSuccessData } from '@/types/sections';

interface PathToSuccessProps {
  data: PathToSuccessData
}

const PathToSuccess: FC<PathToSuccessProps> = ({data}) => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];
  const { animations, getStepAnimation } = usePathToSuccessAnimations();

  const {header, steps, images, bgImages} = data

  if (!header || !steps || !images || !bgImages) {
    return null; // Or a loading spinner
  }

  return (
    <section ref={ref} className="py-20 bg-gray-50 relative overflow-hidden">
      <SectionBackground bgImages={bgImages} lazy />
      <PathToSuccessBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader title={header.title} subtitle={header.subtitle} isIntersecting={isIntersecting} />
        
        <PathToSuccessGrid
          steps={steps}
          isIntersecting={isIntersecting}
          getStepAnimation={getStepAnimation}
          containerAnimation={animations.container}
        />
        
        <PathToSuccessImages
          images={images}
          isIntersecting={isIntersecting}
        />
      </div>
    </section>
  );
};

export default PathToSuccess;