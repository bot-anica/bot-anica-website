import type { FC } from 'react';

const SuccessStoriesSkeleton: FC = () => {
  return (
    <div className="py-20 bg-bg-hover relative overflow-hidden animate-pulse">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Skeleton */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="h-8 bg-bg-hover rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-6 bg-bg-hover rounded w-1/2 mx-auto"></div>
        </div>

        {/* Stats Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="text-center">
              <div className="h-10 w-10 bg-bg-hover rounded-full mx-auto mb-4"></div>
              <div className="h-8 bg-bg-hover rounded w-1/4 mx-auto mb-2"></div>
              <div className="h-4 bg-bg-hover rounded w-1/2 mx-auto"></div>
            </div>
          ))}
        </div>

        {/* Testimonials Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-bg-hover/50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-bg-hover rounded-full mr-4"></div>
                <div>
                  <div className="h-5 bg-bg-hover rounded w-24 mb-2"></div>
                  <div className="h-4 bg-bg-hover rounded w-16"></div>
                </div>
              </div>
              <div className="h-4 bg-bg-hover rounded w-full mb-2"></div>
              <div className="h-4 bg-bg-hover rounded w-5/6"></div>
            </div>
          ))}
        </div>

        {/* CTA Skeleton */}
        <div className="text-center bg-bg-hover/50 rounded-2xl p-8">
          <div className="h-16 w-16 bg-bg-hover rounded-full mx-auto mb-4"></div>
          <div className="h-7 bg-bg-hover rounded w-1/2 mx-auto mb-4"></div>
          <div className="h-5 bg-bg-hover rounded w-3/4 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesSkeleton;
