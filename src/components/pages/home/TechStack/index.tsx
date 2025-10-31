'use client';

import { useTheme } from 'next-themes';
import { FC, useEffect, useState } from 'react';
import StackIcon from 'tech-stack-icons';
import { NeonTechIcon, PostgreSqlIcon, PyCharmIcon, TelegramIcon } from './icons';
import { SectionSplitter } from '@/components/common';

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

const MarqueeItems: FC = () => {
  const { theme } = useTheme();
  const iconVariant = theme === 'dark' ? 'dark' : 'light';

  const iconMap: Record<string, {name: string, icon: React.ReactNode}> = {
    python: {name: 'Python', icon: <StackIcon name="python" variant={iconVariant} className='w-16 h-16 object-contain ' />},
    git: {name: 'Git', icon: <StackIcon name="git" variant={iconVariant} className='w-16 h-16 object-contain ' />},
    github: {name: 'GitHub', icon: <StackIcon name="github" variant={iconVariant} className='w-16 h-16 object-contain ' />},
    flask: {name: 'Flask', icon: <StackIcon name="flask" variant={iconVariant} className='w-16 h-16 object-contain ' />},
    pycharm: {name: 'PyCharm', icon: <PyCharmIcon className='w-16 h-16 object-contain ' />},
    telegram: {name: 'Telegram', icon: <TelegramIcon className='w-16 h-16 object-contain ' />},
    postgresql: {name: 'PostgreSQL', icon: <PostgreSqlIcon className='w-16 h-16 object-contain ' />},
    neontech: {name: 'Neon.com', icon: <NeonTechIcon className='w-16 h-16 object-contain ' />},
  };

  return (
    <div className="flex items-center justify-center flex-shrink-0 animate-[scroll_30s_linear_infinite]">
      {allItems.map((item, index) => (
        <div key={index} className="flex-shrink-0 bg-brand-pink/5 border border-brand-pink/30 rounded-lg mx-12 w-40 h-40 flex flex-col items-center justify-center gap-3">
          {iconMap[item].icon}
          <span className='text-sm font-medium text-text-secondary'>{iconMap[item].name}</span>
        </div>
      ))}
    </div>
  );
};

const MarqueeSkeleton: FC = () => (
  <div className="flex items-center justify-center flex-shrink-0 animate-pulse">
    {allItems.map((_, index) => (
      <div key={index} className="flex-shrink-0 bg-brand-pink/5 border border-brand-pink/30 rounded-lg mx-12 w-40 h-40 flex flex-col items-center justify-center gap-3">
        <div className="w-16 h-16 bg-bg-hover rounded-lg" />
        <div className="h-5 w-24 bg-bg-hover rounded-md" />
      </div>
    ))}
  </div>
)

const TechStack: FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="techStack" className="py-24 lg:py-28 xl:py-32 relative overflow-hidden bg-bg-primary">
      <SectionSplitter />

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-text-primary mb-12">
          Освойте инструменты и технологии:
        </h2>
      </div>
      <div className="relative flex overflow-hidden before:bg-gradient-to-r before:from-bg-primary before:to-bg-primary/0 before:absolute before:top-0 before:left-0 before:right-0 before:w-32 before:h-full before:z-10 after:bg-gradient-to-l after:from-bg-primary after:to-bg-primary/0 after:absolute after:top-0 after:right-0 after:bottom-0 after:w-32 after:h-full after:z-10">
        {mounted ? (
          <>
            <MarqueeItems />
            <MarqueeItems />
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
