
import { FC } from 'react';
import { Card } from '@/components/common';

const FailPaymentSkeleton: FC = () => {
  return (
    <section className="pt-14 sm:pb-6 sm:pt-20 md:pb-14 md:pt-28 lg:pt-42 xl:pt-50 lg:pb-28 xl:pb-32 relative overflow-hidden bg-gradient-to-br from-primary-pink/15 to-primary-blue/5">
      <div className="sm:max-w-lg md:max-w-2xl lg:max-w-5xl h-full mx-auto pt-8 px-8 pb-16 sm:py-8 relative z-10 grid grid-cols-1 gap-8 animate-pulse">
        
        <Card variant="gradient" padding="lg" className="text-center">
          <div className='mb-4 inline-block'>
            <div className='h-20 w-20 rounded-full bg-gray-300'></div>
          </div>
          <div className='h-10 w-3/4 mx-auto bg-gray-300 rounded'></div>
          <div className='mt-4 h-6 w-1/2 mx-auto bg-gray-300 rounded'></div>
          <div className='mt-4 h-6 w-full mx-auto bg-gray-200 rounded'></div>
        </Card>

        <Card padding="lg">
          <div className='h-8 w-1/3 bg-gray-300 rounded mb-2'></div>
          <div className='h-5 w-1/2 bg-gray-200 rounded mb-6'></div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <div className='h-6 w-1/3 bg-gray-300 rounded mb-4'></div>
              <div className='space-y-3'>
                <div className='h-5 w-full bg-gray-200 rounded'></div>
                <div className='h-5 w-full bg-gray-200 rounded'></div>
                <div className='h-5 w-5/6 bg-gray-200 rounded'></div>
              </div>
            </div>
            <div className='bg-gray-100 p-4 rounded-lg'>
              <div className='h-6 w-1/3 bg-gray-300 rounded mb-4'></div>
              <div className='space-y-3'>
                <div className='h-5 w-full bg-gray-200 rounded'></div>
                <div className='h-5 w-full bg-gray-200 rounded'></div>
                <div className='h-5 w-5/6 bg-gray-200 rounded'></div>
              </div>
            </div>
          </div>
        </Card>

      </div>
    </section>
  );
};

export default FailPaymentSkeleton;
