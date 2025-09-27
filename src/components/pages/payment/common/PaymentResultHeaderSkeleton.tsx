import { FC } from 'react';

const PaymentResultHeaderSkeleton: FC = () => {
  return (
    <div className="w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl h-full text-center mx-auto px-8 relative z-10 mb-10 sm:mb-6 md:mb-8 lg:mb-10 animate-pulse">
      <div className='mb-4 inline-block'>
        <div className='flex h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-bg-hover'></div>
      </div>

      <div className='mb-4 sm:mb-2 h-7 sm:h-8 md:h-11 w-2/3 sm:w-3/5 md:w-3/5 lg:w-2/5 xl:w-1/3 mx-auto bg-bg-hover rounded'></div>
      <div className='mb-6 h-4 sm:h-5 md:h-6 sm:w-1/2 w-3/5 md:w-2/5 lg:w-1/3 xl:w-1/4 mx-auto bg-bg-hover rounded'></div>

      <div className='mb-2 h-3 sm:h-5 md:h-6 w-full sm:w-full md:w-full lg:w-2/3 xl:w-8/12 mx-auto bg-bg-hover rounded'></div>
      <div className='mb-2 md:mb-0 h-3 sm:h-5 md:h-6 w-4/5 sm:w-full md:w-2/3 lg:w-1/2 xl:w-2/5 mx-auto bg-bg-hover rounded'></div>
      <div className='h-3 sm:h-5 md:h-0 w-full sm:w-1/3 md:w-2/3 lg:w-1/2 xl:w-2/5 mx-auto bg-bg-hover rounded'></div>
    </div>
  );
};

export default PaymentResultHeaderSkeleton;