"use client";

import { FC, memo, useCallback } from 'react';

import StatsSection from './StatsSection';
import WhySpecialPointsList from './WhySpecialPointsList';
import WhySpecialPointDetails from './WhySpecialPointDetails';

import { SectionBackground, SectionSplitter, SectionHeader } from '@/components/common';
import { useAnimatedSection } from '@/hooks/useAnimatedSection';
import { useWhySpecial } from '@/hooks/useWhySpecial';
import { WhySpecialSectionData } from '@/types/sections';

interface WhySpecialProps {
  data: WhySpecialSectionData
}

const WhySpecial: FC<WhySpecialProps> = ({data}) => {
  const { ref, isIntersecting } = useAnimatedSection();
  const { activePoint, setActivePointIndex } = useWhySpecial();

  const handlePointClick = useCallback((index: number) => {
    setActivePointIndex(index);
  }, [setActivePointIndex]);

  const {header, whySpecialPoints, stats, bgImages} = data

  if (!header || !whySpecialPoints || !stats || !bgImages) {
    return null; // Or a loading spinner
  }

  const currentPoint = whySpecialPoints[activePoint];

  return (
    <section ref={ref} className="py-24 lg:py-28 xl:py-32 bg-bg-primary relative overflow-hidden">
      <SectionBackground bgImages={bgImages} lazy />
      <SectionSplitter />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <SectionHeader isIntersecting={isIntersecting} title={header.title} subtitle={header.subtitle} />

        {/* Interactive why special points Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 mb-8 lg:mb-12 xl:mb-16">
          {/* Left Menu */}
          <WhySpecialPointsList
            points={whySpecialPoints} 
            activePoint={activePoint} 
            isIntersecting={isIntersecting}
            onClick={handlePointClick}
          />

          {/* Right Content */}
          <WhySpecialPointDetails 
            key={activePoint}
            point={currentPoint}
            isFirstPoint={activePoint === 0}
            isLastPoint={activePoint === whySpecialPoints.length - 1}
            isIntersecting={isIntersecting} 
          />
        </div>

        {/* Statistics */}
        <StatsSection stats={stats} isIntersecting={isIntersecting} />
      </div>
    </section>
  );
};

export default memo(WhySpecial);
