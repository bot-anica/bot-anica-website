import React from 'react';

interface RibbonProps {
  text: string;
}

const Ribbon: React.FC<RibbonProps> = ({ text }) => {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none bg-bg-primary/60">
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          className="w-full h-12 flex items-center justify-center transform -rotate-30 scale-x-150 bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue text-white font-bold text-lg whitespace-nowrap"
        >
        </div>
        <span className="absolute top-1/2 left-1/2 -translate-1/2 transform -rotate-30 font-bold text-xl text-white">{text}</span>
      </div>
    </div>
  );
};

export default Ribbon;
