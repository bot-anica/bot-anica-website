import { Suspense, lazy } from 'react';
import { Metadata } from 'next';

import { SEOService } from '@/services/SEOService';
import { HeroService } from '@/services/HeroService';
import { ProblemSolutionService } from '@/services/ProblemSolutionService';
import { WhySpecialService } from '@/services/WhySpecialService';
import { CourseProgramService } from '@/services/CourseProgramService';
import { PricingService } from '@/services/PricingService';
import { FaqService } from '@/services/FaqService';
import { CourseService } from '@/services/CourseService';

const Hero = lazy(() => import('@/components/pages/landing/Hero').then(module => ({ default: module.default })));
const ProblemSolution = lazy(() => import('@/components/pages/landing/ProblemSolution').then(module => ({ default: module.default })));
const WhySpecial = lazy(() => import('@/components/pages/landing/WhySpecial').then(module => ({ default: module.default })));
const CourseProgram = lazy(() => import('@/components/pages/landing/CourseProgram').then(module => ({ default: module.default })));
const PricingPlans = lazy(() => import('@/components/pages/landing/PricingPlans').then(module => ({ default: module.default })));
const FAQ = lazy(() => import('@/components/pages/landing/FAQ').then(module => ({ default: module.default })));
const LazyLoadSection = lazy(() => import('@/components/common/LazyLoadSection').then(module => ({ default: module.default })));

export async function generateMetadata({ params }: { params: Promise<{ courseUrlParam: string }> }): Promise<Metadata> {
  const { courseUrlParam } = await params
  const seoData = await SEOService.getData(courseUrlParam);
  const pageConfig = seoData.pageSEOConfigs.home;
  return {
    title: `${pageConfig.title} | ${seoData.defaultSEOConfig.siteName}`,
    description: pageConfig.description,
    keywords: pageConfig.keywords,
    openGraph: {
      title: pageConfig.title,
      description: pageConfig.description,
      type: 'website',
    },
    twitter: {
      title: pageConfig.title,
      description: pageConfig.description,
    },
  };
}

export default async function LandingPage({ params }: { params: Promise<{ courseUrlParam: string }> }) {
  const { courseUrlParam } = await params

  const [
    heroData,
    problemSolutionData,
    whySpecialData,
    courseProgramData,
    pricingData,
    faqData,
    course
  ] = await Promise.all([
    HeroService.getData(courseUrlParam),
    ProblemSolutionService.getData(courseUrlParam),
    WhySpecialService.getData(courseUrlParam),
    CourseProgramService.getData(courseUrlParam),
    PricingService.getData(courseUrlParam),
    FaqService.getData(courseUrlParam),
    CourseService.getCourseByUrlParam(courseUrlParam)
  ]);

  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Hero data={heroData} />
      <LazyLoadSection>
        <ProblemSolution data={problemSolutionData} />
      </LazyLoadSection>
      <LazyLoadSection>
        <WhySpecial data={whySpecialData} />
      </LazyLoadSection>
      <LazyLoadSection>
        <CourseProgram data={courseProgramData} />
      </LazyLoadSection>
      <LazyLoadSection>
        <PricingPlans data={pricingData} course={course} />
      </LazyLoadSection>
      <LazyLoadSection>
        <FAQ data={faqData} course={course} />
      </LazyLoadSection>
    </Suspense>
  );
}
