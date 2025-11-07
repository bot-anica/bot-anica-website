import { FC } from 'react';
import { useTheme } from 'next-themes';
import StackIcon from 'tech-stack-icons';

import { NeonTechIcon, PostgreSqlIcon, PyCharmIcon, TelegramIcon } from './icons';
import MarqueeItem from './MarqueeItem';
import { TechStackItem } from '@/types/sections';

interface MarqueeItemsProps {
  allItems: string[];
  isCopy?: boolean;
}

const MarqueeItems: FC<MarqueeItemsProps> = ({ allItems, isCopy }) => {
  const { theme } = useTheme();
  const iconVariant = theme === 'dark' ? 'dark' : 'light';

  const iconMap: Record<string, TechStackItem> = {
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
        <MarqueeItem key={`${index}_${item}${isCopy ? "_copy" : ""}`} item={iconMap[item]} index={index} />
      ))}
    </div>
  );
};

export default MarqueeItems;