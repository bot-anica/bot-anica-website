
'use client';

import { FC } from 'react';
import { Check } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { Card } from '@/components/common';
import { PaymentLog } from '@/hooks/usePaymentSuccess';

import 'swiper/css';
import 'swiper/css/navigation';

interface SuccessPaymentProps {
  paymentLog: PaymentLog | null;
}

const SuccessPayment: FC<SuccessPaymentProps> = ({ paymentLog }) => {
  const { course, tariff, orderId } = paymentLog || {};

  const features = tariff?.features.split('\n') || [];

  const nextSteps = [
    {
      title: 'Проверьте почту',
      description: 'Материалы будут отправлены на указанный email',
    },
    {
      title: 'Скачайте файлы',
      description: 'Скачайте конспекты и дополнительные материалы',
    },
    {
      title: 'Присоединяйтесь к сообществу',
      description: 'Получите поддержку в нашем телеграм-канале',
    },
    {
      title: 'Начните практику',
      description: 'Применяйте знания и создавайте своих ботов',
    },
  ];

  const swiperBreakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  };

  return (
    <section className="pt-14 sm:pb-6 sm:pt-20 md:pb-14 md:pt-28 lg:pt-42 xl:pt-50 lg:pb-28 xl:pb-32 relative overflow-hidden bg-gradient-to-br from-primary-pink/15 to-primary-blue/5">
      <div className="sm:max-w-lg md:max-w-2xl lg:max-w-5xl h-full mx-auto pt-8 px-8 pb-16 sm:py-8 relative z-10 grid grid-cols-1 gap-8">
        
        <Card variant="gradient" padding="lg" className="text-center">
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
          <h1 className='text-4xl font-bold text-gray-900'>Поздравляем!</h1>
          <p className='mt-2 text-lg font-medium text-green-600'>
            Оплата прошла успешно
          </p>
          <p className='mt-4 max-w-2xl mx-auto text-lg text-gray-600'>
            Ваш платеж был успешно обработан. Вся информация о доступе к курсу была отправлена на вашу электронную почту.
          </p>
        </Card>

        <Card padding="lg">
          <h3 className='text-xl font-bold text-gray-900 mb-4'>Детали заказа</h3>
          {paymentLog ? (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
              <div>
                <p className='font-bold text-gray-500 mb-4'>#{orderId}</p>
                <h2 className="text-2xl font-bold text-primary-dark mb-2">{course.name}</h2>
                <div className="inline-block bg-primary-pink text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  {tariff.name}
                </div>
                <h4 className='font-semibold text-gray-800 mb-3'>Что включено:</h4>
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
              <div className='text-center self-center'>
                <p className='text-gray-700 font-semibold'>Итого:</p>
                <div className="my-2">
                  <span className="text-4xl sm:text-5xl font-bold text-primary-pink">
                    <span className="text-primary-pink/50">$</span>{tariff.prices[0].discount_price || tariff.prices[0].price}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-600">
              <p>Не удалось загрузить детали вашего заказа.</p>
              <p className="text-sm text-gray-500 mt-2">Возможно, данные вашего браузера были очищены, либо вы еще не совершали успешных оплат.</p>
            </div>
          )}
        </Card>
        
        <Card padding="lg">
            <h3 className='text-center text-2xl font-bold text-gray-900'>Что дальше?</h3>
            <p className='mt-2 text-center text-gray-600 mb-8'>Следуйте этим простым шагам, чтобы начать обучение</p>
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView="auto"
              watchOverflow={true}
              breakpoints={swiperBreakpoints}
              className="!pb-10"
            >
              {nextSteps.map((step, index) => (
                <SwiperSlide key={index} className="!w-auto">
                  <Card variant='gradient' padding='md' className='h-full'>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-transparent border-2 border-primary-blue/30 rounded-full flex items-center justify-center text-primary-blue font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <h4 className="text-md font-bold text-primary-dark leading-tight">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
        </Card>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <Card padding="md" className="text-center">
            <h4 className='font-bold text-gray-800'>Гарантия качества</h4>
            <p className='mt-2 text-sm text-gray-600'>Материалы проверены на практике. Доступ навсегда.</p>
          </Card>
          <Card padding="md" className="text-center">
            <h4 className='font-bold text-gray-800'>Сообщество</h4>
            <p className='mt-2 text-sm text-gray-600'>Присоединяйтесь к телеграм-каналу для поддержки.</p>
          </Card>
          <Card padding="md" className="text-center">
            <h4 className='font-bold text-gray-800'>Мгновенный доступ</h4>
            <p className='mt-2 text-sm text-gray-600'>Материалы доступны сразу после оплаты.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SuccessPayment;
