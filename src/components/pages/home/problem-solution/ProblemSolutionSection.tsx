import React from 'react';

import Icon from '@/components/ui/Icon';
import { Card } from '@/components/common';
import { problemSolutionHeader, problems, solutions } from '@/constants/home/problemSolution';

const ProblemSolutionSection = () => {
  return (
    <section className="py-24 lg:py-28 xl:py-32 relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {problemSolutionHeader.badge && (
            <span className="inline-block bg-accent text-text-opposite text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {problemSolutionHeader.badge}
            </span>
          )}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span>От </span>
            <span className="text-brand-blue-light">Хаоса </span>
            <span>К </span>
            <span className="text-brand-pink">Ясности</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {problemSolutionHeader.subtitle}
          </p>
        </div>

        <div className="relative flex gap-16">
          <div className="w-full max-w-xl md:col-span-2 flex flex-col items-end gap-4 ml-auto">
            <div className="text-center lg:text-right mb-4">
              <h3 className="text-3xl font-bold text-brand-blue-light">Проблема</h3>
              <p className="text-text-tertiary text-sm">Что вас сдерживает</p>
            </div>
            {problems.map((problem, index) => (
              <Card key={index} className="w-full bg-brand-blue/5 border border-brand-blue-light/30 rounded-xl p-6 space-x-4">
                <div className="grid grid-cols-[auto_1fr] gap-4">
                  <div className="w-10 h-10 flex justify-center items-center rounded bg-brand-blue-light/25">
                    <Icon name={problem.icon} className="text-brand-blue-light flex-shrink-0" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{problem.title}</h3>
                    <p className="text-text-secondary text-sm">{problem.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* <div className="hidden lg:flex justify-center items-center md:col-span-1 w-24 h-24 rounded-full bg-bg-secondary mx-auto border-4 border-brand-pink">
            <Icon name="ArrowRight" className="text-brand-pink" size={64} />
          </div> */}

          <div className="w-full max-w-xl md:col-span-2 flex flex-col gap-4 mr-auto">
            <div className="text-center lg:text-left mb-4">
              <h3 className="text-3xl font-bold text-brand-pink">Решение</h3>
              <p className="text-text-tertiary text-sm">Как мы вам поможем</p>
            </div>
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-brand-pink/5 border border-brand-pink/30 rounded-xl p-6 flex items-start space-x-4">
                <div className="grid grid-cols-[auto_1fr] gap-4">
                  <div className="w-10 h-10 flex justify-center items-center rounded bg-brand-pink/25">
                    <Icon name={solution.icon} className="text-brand-pink flex-shrink-0" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{solution.title}</h3>
                    <p className="text-text-secondary text-sm">{solution.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;