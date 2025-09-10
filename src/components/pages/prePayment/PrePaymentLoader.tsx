import { FC } from 'react';

const OrderDetailsSkeleton: FC = () => (
  <div className="flex-1 animate-pulse">
    <div className="h-7 lg:h-8 bg-primary-dark/30 rounded w-1/3 mb-4 md:mb-5 lg:mb-6"></div>

    {/* Course Name */}
    <div className="h-5 sm:h-6 lg:h-7 bg-gray-200 rounded w-1/2 sm:mb-1 md:mb-2"></div>
    
    {/* Tariff Name */}
    <div className="h-5 sm:h-6 lg:h-7 bg-primary-pink/50 rounded-full w-1/3 mb-4 md:mb-5 lg:mb-6"></div>
    
    {/* Features */}
    <div className="h-5 md:h-6 lg:h-7 bg-gray-200 rounded w-1/3 mb-2 md:mb-3 lg:mb-4"></div>
    <div className="space-y-1 md:space-y-2 lg:space-y-3 mb-4 md:mb-6 lg:mb-8">
      <div className="h-5 md:h-6 bg-gray-200 rounded w-full"></div>
      <div className="h-5 md:h-6 bg-gray-200 rounded w-5/6"></div>
      <div className="h-5 md:h-6 bg-gray-200 rounded w-full"></div>
      <div className="h-5 md:h-6 bg-gray-200 rounded w-5/6"></div>
      <div className="h-5 md:h-6 bg-gray-200 rounded w-full"></div>
    </div>

    {/* Total */}
    <div className="flex justify-between items-center border-t border-primary-blue/15 pt-4 md:pt-5 lg:pt-6">
      <div className="flex-1">
        <div className="h-6 lg:h-7 bg-gray-200 rounded w-1/6 mb-2"></div>
        <div className="h-4 md:h-5 bg-gray-200 rounded w-1/2"></div>
      </div>
      <div className="h-11 md:h-15 bg-primary-pink/50 rounded w-1/4"></div>
    </div>
  </div>
);

const PaymentFormSkeleton: FC = () => (
  <div className="flex-1 animate-pulse">
    <div className="h-7 lg:h-8 bg-primary-dark/30 rounded w-1/2 mb-4 md:mb-5 lg:mb-6"></div>
    
    {/* Input */}
    <div className="h-4 md:h-5 bg-gray-200 rounded w-1/4 mb-0.5 md:mb-1 lg:mb-2"></div>
    <div className="border border-primary-blue/15 rounded w-full mb-4 md:mb-5 lg:mb-6 flex items-center py-1.5 px-2 md:py-2 md:px-3">
      <div className="h-5 bg-gray-200 rounded w-1/4"></div>
    </div>
    
    {/* Input */}
    <div className="h-4 md:h-5 bg-gray-200 rounded w-1/3 mb-0.5 md:mb-1 lg:mb-2"></div>
    <div className="border border-primary-blue/15 rounded w-full mb-4 md:mb-5 lg:mb-6 flex items-center py-1.5 px-2 md:py-2 md:px-3">
      <div className="h-5 bg-gray-200 rounded w-1/4"></div>
    </div>
    
    {/* Input */}
    <div className="h-4 md:h-5 bg-gray-200 rounded w-1/12 mb-0.5 md:mb-1 lg:mb-2"></div>
    <div className="border border-primary-blue/15 rounded w-full mb-1 flex items-center py-1.5 px-2 md:py-2 md:px-3">
      <div className="h-5 bg-gray-200 rounded w-1/4"></div>
    </div>
    <div className="h-5 bg-gray-200 rounded w-2/3 mb-4 md:mb-5 lg:mb-6"></div>
    
    {/* Button */}
    <div className="h-12 rounded-lg bg-gradient-to-r from-primary-pink/20 to-primary-blue/20 w-full mb-2 md:mb-3 lg:mb-4"></div>
    
    {/* Warning */}
    <div className="h-8 bg-gray-200 rounded w-11/12 mb-4 md:mb-6 lg:mb-8 mx-auto"></div>
    
    {/* Security Message */}
    <div className="border border-primary-blue/15 rounded-xl w-full p-4 md:p-5 lg:p-6 mx-auto flex gap-4">
      <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full"></div>
      <div className="flex-1">
        <div className="h-6 bg-gray-200 rounded w-1/2 mb-1"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  </div>
);

const PrePaymentLoader: FC = () => (
  <section className="pt-14 sm:pb-6 sm:pt-20 md:pb-14 md:pt-28 lg:pt-42 xl:pt-50 lg:pb-28 xl:pb-32 relative overflow-hidden bg-gradient-to-br from-primary-pink/15 to-primary-blue/5">
    <div className="sm:max-w-lg md:max-w-2xl lg:max-w-5xl h-full mx-auto pt-8 px-8 pb-16 sm:py-8 relative z-10 bg-white sm:rounded-lg sm:border sm:border-primary-blue/15 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8">
      <OrderDetailsSkeleton />
      <div className="w-px bg-primary-blue/15"></div>
      <PaymentFormSkeleton />
    </div>
  </section>
);

export default PrePaymentLoader;
