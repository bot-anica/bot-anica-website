
import { FC } from 'react';
import { Card } from '@/components/common';

const UndefinedPayment: FC = () => {
  return (
    <section className="pt-14 sm:pb-6 sm:pt-20 md:pb-14 md:pt-28 lg:pt-42 xl:pt-50 lg:pb-28 xl:pb-32 relative overflow-hidden bg-gradient-to-br from-primary-pink/15 to-primary-blue/5">
      <div className="sm:max-w-lg md:max-w-2xl lg:max-w-5xl h-full mx-auto pt-8 px-8 pb-16 sm:py-8 relative z-10 grid grid-cols-1 gap-8">
        
        <Card variant="gradient" padding="lg" className="text-center">
          <div className='mb-4 inline-block'>
            <div className='flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500'>
              <svg className='h-12 w-12 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path></svg>
            </div>
          </div>
          <h1 className='text-4xl font-bold text-gray-900'>Не удалось определить статус</h1>
          <p className='mt-4 max-w-2xl mx-auto text-lg text-gray-600'>
            Мы не смогли найти информацию о вашем последнем платеже. Пожалуйста, проверьте вашу почту или свяжитесь с поддержкой.
          </p>
        </Card>

        <Card padding="lg">
          <h3 className='text-xl font-bold text-gray-900 mb-4'>Детали заказа</h3>
          <div className="text-center text-gray-600">
            <p>Не удалось загрузить детали вашего заказа.</p>
            <p className="text-sm text-gray-500 mt-2">Возможно, данные вашего браузера были очищены, либо вы еще не совершали успешных оплат.</p>
          </div>
        </Card>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <Card padding="md" className="text-center"><h4 className='font-bold text-gray-800'>Гарантия качества</h4><p className='mt-2 text-sm text-gray-600'>Материалы проверены на практике. Доступ навсегда.</p></Card>
          <Card padding="md" className="text-center"><h4 className='font-bold text-gray-800'>Сообщество</h4><p className='mt-2 text-sm text-gray-600'>Присоединяйтесь к телеграм-каналу для поддержки.</p></Card>
          <Card padding="md" className="text-center"><h4 className='font-bold text-gray-800'>Мгновенный доступ</h4><p className='mt-2 text-sm text-gray-600'>Материалы доступны сразу после оплаты.</p></Card>
        </div>
      </div>
    </section>
  );
};

export default UndefinedPayment;
