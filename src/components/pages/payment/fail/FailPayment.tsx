
import { FC } from 'react';

import { Button, Card } from '@/components/common';
import { ButtonVariant } from '@/types/common';
import FailHeader from './FailHeader';

const FailPayment: FC = () => {
  return (
    <section className="pt-24 pb-16 sm:pb-20 sm:pt-24 md:pb-24 md:pt-28 lg:pt-42 lg:pb-28 xl:pt-50 xl:pb-32 relative overflow-hidden">
      <div className="sm:max-w-lg md:max-w-2xl lg:max-w-5xl h-full mx-auto relative z-10 grid grid-cols-1 gap-2 sm:gap-6 md:gap-8">
        
        {/* <FailHeader /> */}
        
        <Card variant="gradient" padding="lg" className="text-center">
          <div className='mb-4 inline-block'>
            <div className='flex h-20 w-20 items-center justify-center rounded-full bg-red-500'>
              <svg
                className='h-12 w-12 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </div>
          </div>
          <h1 className='text-4xl font-bold text-gray-900'>Что-то пошло не так</h1>
          <p className='mt-2 text-lg font-medium text-red-600'>
            Оплата не прошла
          </p>
          <p className='mt-4 max-w-2xl mx-auto text-lg text-gray-600'>
            К сожалению, произошла ошибка при обработке платежа или оплата была отменена. Не переживайте — мы поможем вам решить эту проблему.
          </p>
        </Card>

        <Card padding="lg">
          <h3 className='text-xl font-bold text-gray-900'>Анализ проблемы</h3>
          <p className='text-sm text-gray-500'>Возможные причины неудачной оплаты</p>
          <div className='mt-4 grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div>
              <h4 className='font-semibold text-gray-800'>Частые причины:</h4>
              <ul className='mt-2 space-y-2 text-gray-600'>
                <li className='flex items-start'><span className='mr-2 text-red-500 font-bold'>·</span>Недостаточно средств на карте</li>
                <li className='flex items-start'><span className='mr-2 text-red-500 font-bold'>·</span>Технические неполадки платежной системы</li>
                <li className='flex items-start'><span className='mr-2 text-red-500 font-bold'>·</span>Ограничения банка на онлайн-платежи</li>
                <li className='flex items-start'><span className='mr-2 text-red-500 font-bold'>·</span>Оплата была отменена пользователем</li>
              </ul>
            </div>
            <div className='rounded-lg bg-blue-50 p-4'>
              <h4 className='font-semibold text-gray-800'>Что можно сделать:</h4>
              <ul className='mt-2 list-inside list-disc text-gray-600'>
                <li>Проверьте баланс карты</li>
                <li>Попробуйте другую карту</li>
                <li>Обратитесь в банк</li>
                <li>Свяжитесь с поддержкой</li>
              </ul>
            </div>
          </div>
        </Card>

        <div className='text-center'>
          <div className='flex flex-col gap-4 sm:flex-row justify-center'>
            <Button>Попробовать еще раз</Button>
            <Button variant={ButtonVariant.SECONDARY}>Выбрать другой тариф</Button>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <Card padding="lg">
            <h4 className='font-bold text-gray-800'>Напишите нам</h4>
            <p className='mt-2 text-sm text-gray-600'>Опишите проблему, и мы поможем вам с оплатой</p>
            <a href='mailto:support@botanica.com' className='text-blue-500 hover:underline'>support@botanica.com</a>
            <p className='mt-1 text-xs text-gray-500'>Отвечаем в течение 2 часов</p>
          </Card>
          <Card padding="lg">
            <h4 className='font-bold text-gray-800'>Telegram поддержка</h4>
            <p className='mt-2 text-sm text-gray-600'>Быстрая помощь в нашем телеграм-канале</p>
            <a href='https://t.me/botanica_support' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>@botanica_support</a>
            <p className='mt-1 text-xs text-gray-500'>Онлайн с 9:00 до 21:00</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FailPayment;
