'use client';

import React, { FC } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import ColumnHeader from './ColumnHeader';
import ColumnItem from './ColumnItem';
import { SectionHeader, SectionSplitter } from '@/components/common';
import { HomeProblemSolutionData } from '@/types/sections';

interface ProblemSolutionSectionProps {
  data: HomeProblemSolutionData
}

const ProblemSolutionSection: FC<ProblemSolutionSectionProps> = ({ data }) => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];

  return (
    <section ref={ref} className="py-24 lg:py-28 xl:py-32 relative overflow-hidden bg-bg-primary">
      <SectionSplitter top={false} />

      <div className="container mx-auto px-4">
        <SectionHeader
          title={(
            <>
              <span>От </span>
              <span className="text-brand-blue-light">Хаоса </span>
              <span>К </span>
              <span className="text-brand-pink">Ясности</span>
            </>
          )}
          subtitle={data.header.subtitle}
          isIntersecting={isIntersecting}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
          <div className="ml-auto">
            <ColumnHeader
              title="Проблема"
              subtitle="Что вас сдерживает"
              isIntersecting={isIntersecting}
              className="text-center lg:text-right"
              type="problem"
            />
          </div>

          <div className="mr-auto">
            <ColumnHeader
              title="Решение"
              subtitle="Как мы вам поможем"
              isIntersecting={isIntersecting}
              className="text-center lg:text-left"
              type="solution"
            />
          </div>

          {data.items.map((item, index) => (
            <React.Fragment key={index}>
              <div className="w-full max-w-md ml-auto flex items-stretch">
                <ColumnItem
                  index={index}
                  item={item[0]}
                  isIntersecting={isIntersecting}
                  type="problem"
                />
              </div>
              <div className="w-full max-w-md mr-auto flex items-stretch">
                <ColumnItem
                  index={index}
                  item={item[1]}
                  isIntersecting={isIntersecting}
                  type="solution"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;