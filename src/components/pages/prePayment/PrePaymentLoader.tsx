import { FC } from 'react';

const OrderDetailsSkeleton: FC = () => (
  <div className="flex-1 animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
    <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
    <div className="h-6 bg-gray-200 rounded-full w-1/4 mb-6"></div>
    <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
    <div className="space-y-3 mb-8">
      <div className="h-5 bg-gray-200 rounded w-full"></div>
      <div className="h-5 bg-gray-200 rounded w-5/6"></div>
      <div className="h-5 bg-gray-200 rounded w-full"></div>
    </div>
    <div className="flex justify-between items-center border-t border-primary-blue/15 pt-6">
      <div>
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
      <div className="h-12 bg-gray-200 rounded w-1/3"></div>
    </div>
  </div>
);

const PaymentFormSkeleton: FC = () => (
  <div className="flex-1 animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
    <div className="h-10 bg-gray-200 rounded w-full mb-4"></div>
    <div className="h-10 bg-gray-200 rounded w-full mb-4"></div>
    <div className="h-10 bg-gray-200 rounded w-full mb-4"></div>
    <div className="h-12 bg-gray-200 rounded w-full mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
  </div>
);

const PrePaymentLoader: FC = () => (
  <section className="pb-24 pt-38 lg:pt-42 xl:pt-50 lg:pb-28 xl:pb-32 relative overflow-hidden bg-gradient-to-br from-primary-pink/15 to-primary-blue/5">
    <div className="max-w-5xl h-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-white p-8 rounded-lg border border-primary-blue/15 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8">
      <OrderDetailsSkeleton />
      <div className="w-px bg-primary-blue/15"></div>
      <PaymentFormSkeleton />
    </div>
  </section>
);

export default PrePaymentLoader;
