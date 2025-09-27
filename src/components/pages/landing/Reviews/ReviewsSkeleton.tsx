import type { FC } from 'react';

const ReviewsSkeleton: FC = () => {
  return (
    <div className="py-20 bg-bg-hover relative overflow-hidden animate-pulse">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Skeleton */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="h-8 bg-bg-hover rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-6 bg-bg-hover rounded w-1/2 mx-auto"></div>
        </div>

        {/* Reviews Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="bg-bg-hover/50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-bg-hover rounded-full mr-3"></div>
                <div className="h-4 bg-bg-hover rounded w-24"></div>
                <div className="h-4 bg-bg-hover rounded w-16 ml-auto"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-bg-hover rounded w-full"></div>
                <div className="h-4 bg-bg-hover rounded w-5/6"></div>
                <div className="h-4 bg-bg-hover rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSkeleton;
