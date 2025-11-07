import React, { FC } from 'react';



interface MarqueeSkeletonProps {
  length?: number;
}

const MarqueeSkeleton: FC<MarqueeSkeletonProps> = ({ length }) => {
  const items = Array.from({ length: length || 10 });
    
  return (
    <div className="flex items-center justify-center flex-shrink-0 animate-pulse">
      {items.map((_, index) => (
        <div key={index} className="flex-shrink-0 bg-brand-pink/5 border border-brand-pink/30 rounded-lg mx-4 md:mx-8 lg:mx-12 w-40 h-40 flex flex-col items-center justify-center gap-3">
          <div className="w-16 h-16 bg-bg-hover rounded-lg" />
          <div className="h-5 w-24 bg-bg-hover rounded-md" />
        </div>
      ))}
    </div>
  )
}

export default MarqueeSkeleton;