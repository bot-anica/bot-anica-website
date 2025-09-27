"use client";

import type { FC } from 'react';

import ProblemSolutionItems from './ProblemSolutionItems';
import ProblemSolutionCTA from './ProblemSolutionCTA';

import { SectionBackground, SectionSplitter, SectionHeader } from '@/components/common';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useProblemSolutionAnimations } from '@/hooks/useProblemSolutionAnimations';
import { ProblemSolutionData } from '@/types/sections';

interface ProblemSolutionProps {
  data: ProblemSolutionData
}

const ProblemSolution: FC<ProblemSolutionProps> = ({data}) => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];
  const { itemVariants, ctaVariants } = useProblemSolutionAnimations();

  const {header, items, ctaBlock, bgImages} = data

  if (!header || !items || !ctaBlock || !bgImages) {
    return null; // Or a loading spinner
  }

  return (
    <section ref={ref} className="py-24 lg:py-28 xl:py-32 bg-bg-primary relative overflow-hidden">
      <SectionBackground bgImages={bgImages} lazy />
      
      <SectionSplitter />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader title={header.title} subtitle={header.subtitle} isIntersecting={isIntersecting} />
        
        <ProblemSolutionItems 
          items={items}
          isIntersecting={isIntersecting}
          itemVariants={itemVariants}
        />
        
        <ProblemSolutionCTA 
          data={ctaBlock}
          isIntersecting={isIntersecting}
          ctaVariants={ctaVariants}
        />
      </div>
    </section>
  );
};

export default ProblemSolution;
