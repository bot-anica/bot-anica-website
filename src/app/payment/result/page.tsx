import { FC } from 'react';
import { Metadata } from 'next';

import { SEOService } from '@/services/SEOService';
import PaymentResultPage from '@/components/pages/payment/PaymentResultPage';

export async function generateMetadata(): Promise<Metadata> {
  const {defaultSEOConfig} = await SEOService.getPaymentResultMetadata();
  return {
    title: `${defaultSEOConfig.title} - ${defaultSEOConfig.siteName}`,
    robots: 'noindex, nofollow',
  };
}

const ResultPage: FC = () => {
  return <PaymentResultPage />;
};

export default ResultPage;
