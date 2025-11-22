
import { FC } from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

import { Button } from '@/components/common';
import { ButtonVariant } from '@/types/common';
import PaymentLayout from '../common/PaymentLayout';
import PaymentSupport from '../common/PaymentSupport';
import FailHeader from './FailHeader';
import { PaymentLog } from '@/hooks/usePaymentLogs';

const causesList = [
  'Недостаточно средств на карте',
  'Технические неполадки платежной системы',
  'Ограничения банка на онлайн-платежи',
  'Оплата была отменена пользователем',
];

const solutionsList = [
  'Проверьте баланс карты',
  'Попробуйте другую карту',
  'Обратитесь в банк',
  'Свяжитесь с поддержкой',
];

interface FailPaymentProps {
  paymentLog: PaymentLog | null;
}

const FailPayment: FC<FailPaymentProps> = ({ paymentLog }) => {
  return (
    <PaymentLayout header={<FailHeader />}>
      <div className="block sm:hidden w-[calc(100% - 32px)] mx-8 h-px bg-brand-blue-light/15"></div>

      <div className="bg-bg-primary sm:rounded-lg sm:border sm:border-brand-blue-light/15 p-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary">Анализ проблемы</h3>
        <p className="text-sm text-text-tertiary">
          Возможные причины неудачной оплаты
        </p>
        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h4 className="font-semibold text-text-primary">Частые причины:</h4>
            <ul className="mt-2 space-y-2 xl:space-y-3 text-text-secondary">
              {causesList.map((cause) => (
                <li key={cause} className="flex items-center gap-2 sm:gap-3">
                  <XCircle className="w-5 h-5 text-accent-special flex-shrink-0" />
                  <span className="text-sm">{cause}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text-primary">Что можно сделать:</h4>
            <ul className="mt-2 space-y-2 xl:space-y-3 text-text-secondary">
              {solutionsList.map((solution) => (
                <li key={solution} className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle2 className="w-5 h-5 text-text-result-badge flex-shrink-0" />
                  <span className="text-sm">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center px-8 sm:px-0">
        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <Button to={`/courses/${paymentLog?.course.urlParam}/prepayment?tariffId=${paymentLog?.tariff.id}`}>Попробовать еще раз</Button>
          <Button to={`/courses/${paymentLog?.course.urlParam}#pricing`} variant={ButtonVariant.SECONDARY}>
            Выбрать другой тариф
          </Button>
        </div>
      </div>

      <PaymentSupport />
    </PaymentLayout>
  );
};

export default FailPayment;
