import { Suspense } from 'react';
import { Metadata } from 'next';

import AboutAuthor from '@/components/pages/home/AboutAuthor';
import CourseCatalog from '@/components/pages/home/CourseCatalog';
import FAQ from '@/components/pages/home/FAQ';
import Hero from '@/components/pages/home/Hero';
import HowItWorks from '@/components/pages/home/HowItWorks';
import ProblemSolutionSection from '@/components/pages/home/ProblemSolution';
import TechStack from '@/components/pages/home/TechStack';
import WhyUs from '@/components/pages/home/WhyUs';

import { SEOService } from '@/services/SEOService';
import { FaqService } from '@/services/FaqService';
import { HeroService } from '@/services/HeroService';
import { ProblemSolutionService } from '@/services/ProblemSolutionService';
import { TechStackService } from '@/services/TechStackService';
import { CourseCatalogService } from '@/services/CourseCatalogService';
import { HowItWorksService } from '@/services/HowItWorksService';
import { WhyUsService } from '@/services/WhyUsService';
import { AboutAuthorService } from '@/services/AboutAuthorService';

export async function generateMetadata(): Promise<Metadata> {
  const {defaultSEOConfig} = await SEOService.getHomeMetadata();
  return {
    title: `${defaultSEOConfig.title} | ${defaultSEOConfig.siteName}`,
    description: defaultSEOConfig.description,
    keywords: defaultSEOConfig.keywords,
    openGraph: {
      title: defaultSEOConfig.title,
      description: defaultSEOConfig.description,
      type: 'website',
    },
    twitter: {
      title: defaultSEOConfig.title,
      description: defaultSEOConfig.description,
    },
  };
}

export default async function HomePage() {
  const [
      heroData,
      problemSolutionData,
      techStackData,
      courseCatalogData,
      howItWorksData,
      whyUsData,
      aboutAuthorData,
      faqData,
    ] = await Promise.all([
      HeroService.getHomeData(),
      ProblemSolutionService.getHomeData(),
      TechStackService.getHomeData(),
      CourseCatalogService.getHomeData(),
      HowItWorksService.getHomeData(),
      WhyUsService.getHomeData(),
      AboutAuthorService.getHomeData(),
      FaqService.getHomeData(),
    ]);
  
    return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Hero data={heroData} />
      <ProblemSolutionSection data={problemSolutionData} />
      <TechStack data={techStackData} />
      <CourseCatalog data={courseCatalogData} />
      <HowItWorks data={howItWorksData} />
      <WhyUs data={whyUsData} />
      <AboutAuthor data={aboutAuthorData} />
      <FAQ data={faqData} />
    </Suspense>
  );
};
