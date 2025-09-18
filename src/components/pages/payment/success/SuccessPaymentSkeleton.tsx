
import { FC } from 'react';
import { Card } from '@/components/common';

const SuccessPaymentSkeleton: FC = () => {
  return (
    <section className="pt-24 pb-16 sm:pb-20 sm:pt-24 md:pb-24 md:pt-28 lg:pt-42 lg:pb-28 xl:pt-50 xl:pb-32 relative overflow-hidden">
      <div className="sm:max-w-lg md:max-w-2xl lg:max-w-5xl h-full mx-auto relative z-10 grid grid-cols-1 gap-2 sm:gap-6 md:gap-8 animate-pulse">
        
        <div className="w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl h-full text-center mx-auto px-8 relative z-10 mb-8 sm:mb-6 md:mb-8 lg:mb-10">
          <div className='mb-4 inline-block'>
            <div className='flex h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-green-500'>
              <div className='h-20 w-20 rounded-full bg-gray-300'></div>
              </div>
          </div>
          <div className='h-10 w-3/4 mx-auto bg-gray-300 rounded'></div>
          <div className='mt-4 h-6 w-1/2 mx-auto bg-gray-300 rounded'></div>
        </div>

        <div className="w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl h-full mx-auto p-8 sm:py-8 relative z-10 bg-white sm:rounded-lg sm:border sm:border-primary-blue/15">
          <div className='h-8 w-1/3 bg-gray-300 rounded mb-6'></div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
            <div>
              <div className='h-6 w-1/2 bg-gray-300 rounded mb-4'></div>
              <div className='h-6 w-3/4 bg-gray-300 rounded mb-4'></div>
              <div className='space-y-3 mt-4'>
                <div className='h-5 w-full bg-gray-200 rounded'></div>
                <div className='h-5 w-full bg-gray-200 rounded'></div>
                <div className='h-5 w-5/6 bg-gray-200 rounded'></div>
              </div>
            </div>
            <div className='text-center self-center'>
              <div className='h-6 w-1/4 mx-auto bg-gray-300 rounded mb-4'></div>
              <div className='h-12 w-1/2 mx-auto bg-gray-300 rounded'></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SuccessPaymentSkeleton;
