import { FC } from 'react';
import { Mail, Send } from 'lucide-react';

import SupportCard from '@/components/common/card/SupportCard';

const PaymentSupport: FC = () => {
  return (
    <div className="mt-8 sm:mt-0 grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 px-8 sm:px-0">
      <SupportCard
        icon={<Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />}
        title="Напишите нам"
        description="Опишите проблему, и мы поможем вам с оплатой"
        linkHref="mailto:support@botanica.com"
        linkText="support@botanica.com"
        footerText="Отвечаем в течение 2 часов"
        color="blue"
      />
      <SupportCard
        icon={<Send className="w-5 h-5 md:w-6 md:h-6 text-green-600" />}
        title="Telegram поддержка"
        description="Быстрая помощь в нашем телеграм-канале"
        linkHref="https://t.me/botanica_support"
        linkText="@botanica_support"
        footerText="Онлайн с 9:00 до 21:00"
        isExternalLink={true}
        color="green"
      />
    </div>
  );
};

export default PaymentSupport;
