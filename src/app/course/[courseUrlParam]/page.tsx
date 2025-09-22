import { Suspense } from 'react';
import { Metadata } from 'next';

import { SEOService } from '@/services/SEOService';
import { HeroService } from '@/services/HeroService';
import { ProblemSolutionService } from '@/services/ProblemSolutionService';
import { WhySpecialService } from '@/services/WhySpecialService';
import { CourseProgramService } from '@/services/CourseProgramService';
import { PricingService } from '@/services/PricingService';
import { FaqService } from '@/services/FaqService';
import { CourseService } from '@/services/CourseService';

import CourseProgram from '@/components/pages/landing/CourseProgram';
import FAQ from '@/components/pages/landing/FAQ';
import Hero from '@/components/pages/landing/Hero';
import PricingPlans from '@/components/pages/landing/PricingPlans';
import ProblemSolution from '@/components/pages/landing/ProblemSolution';
import WhySpecial from '@/components/pages/landing/WhySpecial';
import CourseNotFound from '@/components/pages/course/CourseNotFound';

export async function generateMetadata({ params }: { params: Promise<{ courseUrlParam: string }> }): Promise<Metadata> {
  try {
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
  } catch (error) {
    return {
      title: "Курс не найден",
      description: "Запрашиваемый курс не найден.",
    };
  }
}

export default async function LandingPage({ params }: { params: Promise<{ courseUrlParam: string }> }) {
  const { courseUrlParam } = await params

  let course;
  try {
    course = await CourseService.getCourseByUrlParam(courseUrlParam);
  } catch (error) {
    return <CourseNotFound />;
  }

  const [
    heroData,
    problemSolutionData,
    whySpecialData,
    courseProgramData,
    pricingData,
    faqData,
  ] = await Promise.all([
    HeroService.getData(courseUrlParam),
    ProblemSolutionService.getData(courseUrlParam),
    WhySpecialService.getData(courseUrlParam),
    CourseProgramService.getData(courseUrlParam),
    PricingService.getData(courseUrlParam),
    FaqService.getData(courseUrlParam),
  ]);

  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Hero data={heroData} />
      <ProblemSolution data={problemSolutionData} />
      <WhySpecial data={whySpecialData} />
      <CourseProgram data={courseProgramData} />
      <PricingPlans data={pricingData} course={course} />
      <FAQ data={faqData} course={course} />
    </Suspense>
  );
}
