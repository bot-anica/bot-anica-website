'use client';

import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { problemSolutionHeader, problems, solutions } from '@/constants/home/problemSolution';
import ColumnHeader from './ColumnHeader';
import ColumnItem from './ColumnItem';
import { SectionHeader, SectionSplitter } from '@/components/common';

const ProblemSolutionSection = () => {
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
          subtitle={problemSolutionHeader.subtitle}
          isIntersecting={isIntersecting}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
          {/* Problem Column Header */}
          <div className="ml-auto">
            <ColumnHeader
              title="Проблема"
              subtitle="Что вас сдерживает"
              isIntersecting={isIntersecting}
              className="text-center lg:text-right"
              type="problem"
            />
          </div>

          {/* Solution Column Header */}
          <div className="mr-auto">
            <ColumnHeader
              title="Решение"
              subtitle="Как мы вам поможем"
              isIntersecting={isIntersecting}
              className="text-center lg:text-left"
              type="solution"
            />
          </div>

          {/* Items */}
          {Array.from({ length: Math.max(problems.length, solutions.length) }).map((_, index) => (
            <React.Fragment key={index}>
              {/* Problem Item */}
              <div className="w-full max-w-md ml-auto flex items-stretch">
                {problems[index] && (
                  <ColumnItem
                    index={index}
                    item={problems[index]}
                    isIntersecting={isIntersecting}
                    type="problem"
                  />
                )}
              </div>
              {/* Solution Item */}
              <div className="w-full max-w-md mr-auto flex items-stretch">
                {solutions[index] && (
                  <ColumnItem
                    index={index}
                    item={solutions[index]}
                    isIntersecting={isIntersecting}
                    type="solution"
                  />
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;