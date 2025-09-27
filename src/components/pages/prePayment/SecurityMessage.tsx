import { FC } from 'react';
import { Shield } from 'lucide-react';
import InfoCard from '@/components/common/card/InfoCard';

const SecurityMessage: FC = () => (
  <InfoCard 
    icon={<Shield className="w-5 h-5 md:w-6 md:h-6 text-accent-secondary" />}
    title="Гарантия качества"
    description="Материалы проверены на практике. Доступ навсегда."
    color="orange"
  />
);

export default SecurityMessage;
