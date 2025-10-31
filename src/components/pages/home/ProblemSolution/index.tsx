import React from 'react';

import { problemSolutionHeader, problems, solutions } from '@/constants/home/problemSolution';
import SectionHeader from './SectionHeader';
import ColumnHeader from './ColumnHeader';
import ColumnItem from './ColumnItem';
import { SectionSplitter } from '@/components/common';

const problemColorConfig = {
  bg: 'bg-brand-blue/5',
  border: 'border-brand-blue-light/30',
  iconBg: 'bg-brand-blue-light/25',
  iconText: 'text-brand-blue-light',
  titleText: 'text-brand-blue-light',
};

const solutionColorConfig = {
  bg: 'bg-brand-pink/5',
  border: 'border-brand-pink/30',
  iconBg: 'bg-brand-pink/25',
  iconText: 'text-brand-pink',
  titleText: 'text-brand-pink',
};

const ProblemSolutionSection = () => {
  return (
    <section className="py-24 lg:py-28 xl:py-32 relative overflow-hidden bg-bg-primary">
      <SectionSplitter top={false} />

      <div className="container mx-auto px-4">
        <SectionHeader
          badge={problemSolutionHeader.badge}
          title={(
            <>
              <span>От </span>
              <span className="text-brand-blue-light">Хаоса </span>
              <span>К </span>
              <span className="text-brand-pink">Ясности</span>
            </>
          )}
          subtitle={problemSolutionHeader.subtitle}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
          {/* Problem Column Header */}
          <div className="ml-auto">
            <ColumnHeader
              title="Проблема"
              subtitle="Что вас сдерживает"
              className={`text-center lg:text-right ${problemColorConfig.titleText}`}
            />
          </div>

          {/* Solution Column Header */}
          <div className="mr-auto">
            <ColumnHeader
              title="Решение"
              subtitle="Как мы вам поможем"
              className={`text-center lg:text-left ${solutionColorConfig.titleText}`}
            />
          </div>

          {/* Items */}
          {Array.from({ length: Math.max(problems.length, solutions.length) }).map((_, index) => (
            <React.Fragment key={index}>
              {/* Problem Item */}
              <div className="w-full max-w-md ml-auto flex items-stretch">
                {problems[index] && (
                  <ColumnItem item={problems[index]} colorConfig={problemColorConfig} />
                )}
              </div>
              {/* Solution Item */}
              <div className="w-full max-w-md mr-auto flex items-stretch">
                {solutions[index] && (
                  <ColumnItem item={solutions[index]} colorConfig={solutionColorConfig} />
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