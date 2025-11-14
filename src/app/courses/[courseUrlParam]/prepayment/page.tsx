import { Suspense } from 'react';
import { Metadata } from 'next';

import { SEOService } from '@/services/SEOService';
import PrePayment from '@/components/pages/prePayment/PrePayment';
import PrePaymentLoader from '@/components/pages/prePayment/PrePaymentLoader';
import CourseNotFound from '@/components/pages/prePayment/CourseNotFound';

export async function generateMetadata(): Promise<Metadata> {
  const {defaultSEOConfig} = await SEOService.getPrePaymentMetadata();
  return {
    title: `${defaultSEOConfig.title} - ${defaultSEOConfig.siteName}`,
    robots: 'noindex, nofollow',
  };
}

interface PrePaymentPageProps {
  params: {
    courseUrlParam: string;
  };
  searchParams: {
    tariffId?: string;
  };
}

export default async function PrePaymentPage({ params, searchParams }: PrePaymentPageProps) {
  const { courseUrlParam } = await params;
  const { tariffId } = await searchParams;

  if (!tariffId) {
    return <CourseNotFound message='Ошибка: Тариф не выбран.' />;
  }

  return (
    <Suspense fallback={<PrePaymentLoader />}>
      <PrePayment courseUrlParam={courseUrlParam} tariffId={tariffId} />
    </Suspense>
  );
}