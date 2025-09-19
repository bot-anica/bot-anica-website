import { FC } from 'react';
import { Ban } from 'lucide-react';

const FailHeader: FC = () => {
  return (
    <div className="w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl h-full text-center mx-auto px-8 relative z-10 mb-8 sm:mb-6 md:mb-8 lg:mb-10">
      <div className='mb-4 inline-block'>
        <div className='flex h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-red-500'>
          <Ban className='h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white' />
        </div>
      </div>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900'>Что-то пошло не так</h1>
      <p className='mt-2 text-base sm:text-lg md:text-xl font-medium md:font-semibold text-red-600'>
        Оплата не прошла
      </p>
      <p className='mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-600'>
        К сожалению, произошла ошибка при обработке платежа или оплата была отменена. Не переживайте — мы поможем вам решить эту проблему.
      </p>
    </div>
  );
};

export default FailHeader;