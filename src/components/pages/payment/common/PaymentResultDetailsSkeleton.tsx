import { FC } from 'react';

const PaymentResultDetailsSkeleton: FC = () => {
  return (
    <div className="w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl h-full mx-auto p-8 pt-10 sm:pt-8 sm:py-8 relative z-10 bg-white sm:rounded-lg sm:border sm:border-primary-blue/15 animate-pulse">
      <div className='h-5 sm:h-6 md:h-7 w-full sm:w-2/3 md:w-1/2 lg:w-2/5 bg-gray-300 rounded mb-6 sm:mb-7'></div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8 items-start'>
        <div>
          <div className='h-4 sm:h-5 w-2/3 sm:w-1/2 md:w-4/5 lg:w-3/5 bg-gray-300 rounded mb-4 sm:mb-2 md:mb-3'></div>
          <div className='h-5 sm:h-6 md:h-7 w-1/2 sm:w-2/5 md:w-2/3 lg:w-2/5 bg-gray-300 rounded-full mb-6 sm:mb-7 md:mb-8 lg:mb-10'></div>
          <div className='h-9 sm:h-11 md:h-13 lg:h-15 w-2/5 sm:w-1/3 md:w-2/3 lg:w-1/2 bg-gray-300 rounded'></div>
        </div>
        <div className='md:mb-2 lg:mb-4'>
          <div className='space-y-3 sm:space-y-2 xl:space-y-3'>
            <div className='flex gap-2 sm:gap-3 items-center'><div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-200'></div><div className='h-4 sm:h-5 w-1/2 md:w-2/3 lg:w-1/2 bg-gray-200 rounded'></div></div>
            <div className='flex gap-2 sm:gap-3 items-center'><div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-200'></div><div className='h-4 sm:h-5 w-2/5 md:w-3/5 lg:w-2/5 bg-gray-200 rounded'></div></div>
            <div className='flex gap-2 sm:gap-3 items-center'><div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-200'></div><div className='h-4 sm:h-5 w-4/6 md:w-5/6 lg:w-4/6 bg-gray-200 rounded'></div></div>
            <div className='flex gap-2 sm:gap-3 items-center'><div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-200'></div><div className='h-4 sm:h-5 w-3/5 md:w-4/5 lg:w-3/5 bg-gray-200 rounded'></div></div>
            <div className='flex gap-2 sm:gap-3 items-center'><div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-200'></div><div className='h-4 sm:h-5 w-1/2 md:w-2/3 lg:w-1/2 bg-gray-200 rounded'></div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentResultDetailsSkeleton;