import type { FC } from 'react';

import { SuccessStoriesBackground } from './SuccessStoriesBackground';
import { SuccessStoriesStats } from './SuccessStoriesStats';
import { SuccessStoriesTestimonials } from './SuccessStoriesTestimonials';
import { SuccessStoriesCTA } from './SuccessStoriesCTA';

import { SectionBackground, SectionHeader } from '@/components/common';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useSuccessStoriesAnimations } from '@/hooks/useSuccessStoriesAnimations';
import { SuccessStoriesData } from '@/types/sections';

interface SuccessStoriesProps {
  data: SuccessStoriesData
}

const SuccessStories: FC<SuccessStoriesProps> = ({data}) => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean];
  const {
    statVariants,
    testimonialVariants,
    ctaVariants
  } = useSuccessStoriesAnimations();

  const {header, stats, testimonials, ctaBlock, bgImages} = data

  if (!header || !stats || !testimonials || !ctaBlock || !bgImages) {
    return null; // Or a loading spinner
  }

  return (
    <section 
      ref={ref}
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      <SectionBackground bgImages={bgImages} lazy />
      <SuccessStoriesBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader variant="dark" title={header.title} subtitle={header.subtitle} isIntersecting={isIntersecting} />
        
        <SuccessStoriesStats
          stats={stats}
          isIntersecting={isIntersecting}
          statVariants={statVariants}
        />
        
        <SuccessStoriesTestimonials
          testimonials={testimonials}
          isIntersecting={isIntersecting}
          testimonialVariants={testimonialVariants}
        />
        
        <SuccessStoriesCTA
          ctaBlock={ctaBlock}
          isIntersecting={isIntersecting}
          ctaVariants={ctaVariants}
        />
      </div>
    </section>
  );
};

export default SuccessStories;