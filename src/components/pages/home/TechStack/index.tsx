'use client';

import { FC, useEffect, useState } from 'react';
import { SectionHeader, SectionSplitter } from '@/components/common';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { HomeTechStackData } from '@/types/sections';
import MarqueeSkeleton from './MarqueeSkeleton';
import MarqueeItems from './MarqueeItems';

const technologies = [
  'python',
  'git',
  'github',
  'flask',
];

const instruments = [
  'pycharm',
  'telegram',
  'postgresql',
  'neontech',
];

const allItems = [...technologies, ...instruments];

interface TechStackProps {
  data: HomeTechStackData
}

const TechStack: FC<TechStackProps> = ({ data }) => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section ref={ref} id="techStack" className="py-24 lg:py-28 xl:py-32 relative overflow-hidden bg-bg-primary">
      <SectionSplitter />

      <SectionHeader
        title={data.header.title}
        subtitle={data.header.subtitle}
        isIntersecting={isIntersecting}
      />
      <div className="relative flex overflow-hidden md:before:bg-gradient-to-r md:before:from-bg-primary md:before:to-bg-primary/0 md:before:absolute md:before:top-0 md:before:left-0 md:before:right-0 md:before:w-32 md:before:h-full before:z-10 md:after:bg-gradient-to-l md:after:from-bg-primary md:after:to-bg-primary/0 md:after:absolute md:after:top-0 md:after:right-0 md:after:bottom-0 md:after:w-32 md:after:h-full md:after:z-10">
        {mounted ? (
          <>
            <MarqueeItems allItems={allItems} />
            <MarqueeItems allItems={allItems} isCopy />
          </>
        ) : (
          <>
            <MarqueeSkeleton />
            <MarqueeSkeleton />
          </>
        )}
      </div>
    </section>
  );
};

export default TechStack;
