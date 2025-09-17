
'use client';

import { FC } from 'react';
import { Check, Shield, Users, Zap } from 'lucide-react';

import { Card } from '@/components/common';
import { PaymentLog } from '@/hooks/usePaymentSuccess';
import NextSteps from './NextSteps';
import { NextStepsService } from '@/services/NextStepsService';
import InfoCard from '@/components/common/card/InfoCard';

interface SuccessPaymentProps {
  paymentLog: PaymentLog | null;
}

const SuccessPayment: FC<SuccessPaymentProps> = ({ paymentLog }) => {
  const { course, tariff, orderId } = paymentLog || {};

  const features = tariff?.features.split('\n') || [];
  const nextStepsData = NextStepsService.getNextStepsData();

  return (
    <section className="pt-14 sm:pb-6 sm:pt-20 md:pb-14 md:pt-28 lg:pt-42 xl:pt-50 lg:pb-28 xl:pb-32 relative overflow-hidden">
      <div className="sm:max-w-lg md:max-w-2xl lg:max-w-5xl h-full mx-auto pt-8 px-8 pb-16 sm:py-8 relative z-10 grid grid-cols-1 gap-8">
        
        <div className="text-center">
          <div className='mb-4 inline-block'>
            <div className='flex h-20 w-20 items-center justify-center rounded-full bg-green-500'>
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
                  d='M5 13l4 4L19 7'
                />
              </svg>
            </div>
          </div>
          <h1 className='text-5xl font-bold text-gray-900'>Поздравляем!</h1>
          <p className='mt-2 text-xl font-semibold text-green-600'>
            Оплата прошла успешно
          </p>
          <p className='mt-4 max-w-2xl mx-auto text-lg text-gray-600'>
            Ваш платеж был успешно обработан. Вся информация о доступе к курсу была отправлена на вашу электронную почту.
          </p>
        </div>

        <Card padding="lg">
          <div className='flex justify-between items-end mb-6'>
            <h3 className='text-2xl font-bold text-gray-900'>Детали заказа</h3>
            <p className='text-xl font-medium text-slate-400'>#{orderId}</p>
          </div>
          {paymentLog ? (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
              <div>
                <h2 className="text-xl font-bold text-primary-dark mb-2">{course.name}</h2>
                <div className="inline-block bg-primary-pink text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  {tariff.name}
                </div>
                <div className="my-2">
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-pink">
                    <span className="text-primary-pink/50">$</span>{tariff.prices[0].discount_price || tariff.prices[0].price}
                  </span>
                </div>
              </div>
              <div>
                <ul className='space-y-2 xl:space-y-3'>
                  {features.map((feature, index) => (
                    <li key={index} className='flex items-center gap-2 sm:gap-3 text-gray-700'>
                      <div className='flex-shrink-0 w-5 h-5 bg-primary-pink/10 rounded-full flex items-center justify-center mt-0.5'>
                        <Check className='w-3 h-3 text-primary-pink' />
                      </div>
                      <span className='text-sm'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-600">
              <p>Не удалось загрузить детали вашего заказа.</p>
              <p className="text-sm text-gray-500 mt-2">Возможно, данные вашего браузера были очищены, либо вы еще не совершали успешных оплат.</p>
            </div>
          )}
        </Card>
        
        <NextSteps data={nextStepsData} />

        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <InfoCard 
            icon={<Shield className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />}
            title="Гарантия качества"
            description="Материалы проверены на практике. Доступ навсегда."
            color="orange"
          />
          <InfoCard 
            icon={<Users className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />}
            title="Сообщество"
            description="Присоединяйтесь к телеграм-каналу для поддержки."
            color="blue"
          />
          <InfoCard 
            icon={<Zap className="w-5 h-5 md:w-6 md:h-6 text-green-600" />}
            title="Мгновенный доступ"
            description="Материалы доступны сразу после оплаты."
            color="green"
          />
        </div>
      </div>
    </section>
  );
};

export default SuccessPayment;
