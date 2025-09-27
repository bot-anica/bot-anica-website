
import { FC } from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

import { Button } from '@/components/common';
import { ButtonVariant } from '@/types/common';
import PaymentLayout from '../common/PaymentLayout';
import PaymentSupport from '../common/PaymentSupport';
import FailHeader from './FailHeader';

const FailPayment: FC = () => {
  return (
    <PaymentLayout header={<FailHeader />}>
      <div className="block sm:hidden w-[calc(100% - 32px)] mx-8 h-px bg-brand-blue/15"></div>

      <div className="bg-bg-primary sm:rounded-lg sm:border sm:border-brand-blue/15 p-8">
        <h3 className="text-xl font-bold text-text-primary">Анализ проблемы</h3>
        <p className="text-sm text-text-tertiary">
          Возможные причины неудачной оплаты
        </p>
        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h4 className="font-semibold text-text-primary">Частые причины:</h4>
            <ul className="mt-2 space-y-2 xl:space-y-3 text-text-secondary">
              <li className="flex items-center gap-2 sm:gap-3">
                <XCircle className="w-5 h-5 text-accent-special flex-shrink-0" />
                <span className="text-sm">Недостаточно средств на карте</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <XCircle className="w-5 h-5 text-accent-special flex-shrink-0" />
                <span className="text-sm">Технические неполадки платежной системы</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <XCircle className="w-5 h-5 text-accent-special flex-shrink-0" />
                <span className="text-sm">Ограничения банка на онлайн-платежи</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <XCircle className="w-5 h-5 text-accent-special flex-shrink-0" />
                <span className="text-sm">Оплата была отменена пользователем</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg bg-brand-blue/5 p-4">
            <h4 className="font-semibold text-text-primary">Что можно сделать:</h4>
            <ul className="mt-2 space-y-2 xl:space-y-3 text-gray-700">
              <li className="flex items-center gap-2 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 text-text-result-badge flex-shrink-0" />
                <span className="text-sm">Проверьте баланс карты</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 text-text-result-badge flex-shrink-0" />
                <span className="text-sm">Попробуйте другую карту</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 text-text-result-badge flex-shrink-0" />
                <span className="text-sm">Обратитесь в банк</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 text-text-result-badge flex-shrink-0" />
                <span className="text-sm">Свяжитесь с поддержкой</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center px-8 sm:px-0">
        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <Button>Попробовать еще раз</Button>
          <Button variant={ButtonVariant.SECONDARY}>
            Выбрать другой тариф
          </Button>
        </div>
      </div>

      <PaymentSupport />
    </PaymentLayout>
  );
};

export default FailPayment;
