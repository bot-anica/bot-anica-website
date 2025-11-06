import { SwiperOptions } from "swiper/types";
import { ButtonVariant, ButtonSize, ButtonIconPosition } from "./common";

export interface Stat {
  number: string;
  label: string;
}

export interface WhySpecialPoint {
  icon: any;
  color: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface WhySpecialSectionData {
  header: SectionHeaderProps,
  whySpecialPoints: WhySpecialPoint[];
  stats: Stat[];
  bgImages: PartialSectionBGImagesProps;
}

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export interface ProblemSolutionSectionHeaderProps {
  badge: string;
  mainTitle: string;
  highlightTitle: string;
  subtitle: string;
}

export interface BGImages {
  small?: string;
  smallVertical?: string;
  medium?: string;
  mediumVertical?: string;
  large?: string;
  extraLarge?: string;
}

export interface SectionBGProps {
  images: BGImages;
  lazy?: boolean;
}

export enum BackgroundImagePositions {
  TOP_LEFT = "topLeft",
  TOP = "top",
  TOP_RIGHT = "topRight",
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
  BOTTOM_LEFT = "bottomLeft",
  BOTTOM = "bottom",
  BOTTOM_RIGHT = "bottomRight"
}

export type SectionBGImagesProps = Record<BackgroundImagePositions, BGImages>
export type PartialSectionBGImagesProps = Partial<Record<BackgroundImagePositions, BGImages>>

export interface Feature {
  icon: string,
  iconColor: string,
  title: string,
  subtitle: string,
  description: string,
}

export interface FeaturesData {
  header: SectionHeaderProps;
  features: Feature[];
  bgImages: PartialSectionBGImagesProps;
}

export interface CTAItem {
  text: string;
  link: string;
  buttonVariant: ButtonVariant;
  buttonSize: ButtonSize;
  buttonIcon?: any;
  buttonIconColor?: string;
  buttonIconPosition?: ButtonIconPosition;
}

export interface HeroTitle {
  main: string;
  highlight: string;
  additional?: string;
}

export interface HeroImages {
  extraLarge?: string,
  large?: string,
  medium?: string,
  mediumVertical?: string,
  small?: string,
  smallVertical?: string,
}

export interface CourseHeroData {
  title: HeroTitle;
  subtitle: string;
  benefits: string[];
  cta: {
    primary: CTAItem;
    secondary: CTAItem;
  };
  images: Record<'rightImages' | 'imagesInText', HeroImages>;
  bgImages: PartialSectionBGImagesProps;
}

export interface HomeHeroData {
  title: HeroTitle;
  subtitle: string;
  text: string;
  cta: {
    primary: CTAItem;
    secondary: CTAItem;
  };
  image: string;
}

export interface PathToSuccessStep {
  id: number;
  title: string;
  description: string;
  result: string;
}

export type PathToSuccessImages = Record<string, string>

export interface PathToSuccessData {
  header: SectionHeaderProps;
  steps: PathToSuccessStep[];
  images: PathToSuccessImages;
  bgImages: PartialSectionBGImagesProps;
}

export interface CourseProblemSolutionItem {
  problem: string;
  solution: string;
  icon: any;
}

export interface HomeProblem {
  icon: string;
  title: string;
  description: string;
}

export interface HomeSolution {
  icon: string;
  title: string;
  description: string;
}

export interface CourseProblemSolutionData {
  header: SectionHeaderProps;
  items: CourseProblemSolutionItem[];
  ctaBlock: SectionBottomCTA;
  bgImages: PartialSectionBGImagesProps;
}

export interface HomeProblemSolutionData {
  header: SectionHeaderProps;
  items: [HomeProblem, HomeSolution][];
}

export interface Statistic {
  icon: any;
  iconColor: string;
  number: string;
  label: string;
}

export interface Testimonial {
  icon: any;
  iconColor: string;
  name: string;
  role: string;
  quote: string;
  achievement: string;
}

export interface SectionBottomCTA {
  text: string;
  description: string;
  icon: any;
  iconColor: string;
  buttonText: string;
  buttonLink: string;
}

export interface SuccessStoriesData {
  header: SectionHeaderProps;
  stats: Statistic[];
  testimonials: Testimonial[];
  ctaBlock: SectionBottomCTA;
  bgImages: PartialSectionBGImagesProps;
}

export interface Review {
  id: number;
  createdAt: string;
  text: string;
}

export interface ReviewsData {
  header: SectionHeaderProps;
  reviews: Review[];
  breakpoints: SwiperOptions['breakpoints'];
  bgImages: PartialSectionBGImagesProps;
}

export interface HomeTechStackData {
  header: SectionHeaderProps;
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  result: string;
  icon: any;
}

export type SwiperBreakpoints = Record<string, { slides: { perView: string | number; spacing: number } }>

export interface CourseProgramData {
  header: SectionHeaderProps;
  lessons: Lesson[];
  breakpoints: SwiperOptions['breakpoints'];
  bgImages: PartialSectionBGImagesProps
}

export interface NextStep {
  title: string;
  description: string;
  icon: any;
}
  
export interface NextStepsData {
  header: SectionHeaderProps;
  nextSteps: NextStep[];
  breakpoints: SwiperOptions['breakpoints'];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  header: SectionHeaderProps;
  faqs: FAQItem[];
  bgImages?: PartialSectionBGImagesProps;
}

export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  tagline: string;
  icon: React.ComponentType<any>;
  features: string[];
  buttonText: string;
  buttonStyle: ButtonVariant;
  popular: boolean;
  originalPrice?: string;
}

export interface PricingPlansData {
  header: SectionHeaderProps;
  bgImages: PartialSectionBGImagesProps;
  popularPlanImages: PartialSectionBGImagesProps;
}

export interface FooterData {
  courseDescription: string;
  navigationLinks: LinkItem[];
}

export interface LinkItem {
  text: string;
  link: string;
}

export interface HeaderData {
  navigationLinks: LinkItem[];
  ctaButtons: CTAItem[];
}

export interface SEOConfig {
  title: string | undefined,
  siteName: string,
  description: string,
  keywords: string,
  image: string,
  url: string | undefined,
  locale: string,
  twitterCard: 'summary_large_image',
  type: 'website' | 'article',
  noIndex: boolean | undefined
}

export interface PageSEOConfig {
  title: string
  description: string
  keywords: string
  noIndex?: boolean
}

export type AVAILABLE_PAGES = 'home' | 'course' | 'payment'

export interface SEOData {
  defaultSEOConfig: SEOConfig;
  pageSEOConfigs?: Record<AVAILABLE_PAGES, PageSEOConfig>;
}

export interface Currency {
  id: number;
  name: string;
  code: string;
  symbol: string;
}

export interface TariffPrice {
  id: number;
  price: string;
  discount_price?: string;
  currency: Currency;
}

export interface Tariff {
  id: number;
  name: string;
  description: string;
  is_popular: boolean;
  prices: TariffPrice[];
  features: string;
  disabled: boolean;
}

export interface Course {
  id: number;
  name: string;
  urlParam: string;
  description: string;
  tariffs: Tariff[];
}

export interface CourseCatalogItem {
  titleMain: string;
  titleHighlight: string;
  titleAdditional: string;
  description: string;
  tags: string[];
  icon: string;
  name: string;
  urlParam: string;
  image: string;
  bgImages: PartialSectionBGImagesProps;
}

export interface CourseCatalogItemAdditionalData {
  tags: string[];
  icon: string;
}

export interface CourseCatalogData {
  header: SectionHeaderProps;
  courses: CourseCatalogItem[];
}

export interface HowItWorksStep {
  title: string;
  description: string;
  image: string;
  icon?: string;
}

export interface HowItWorksData {
  header: SectionHeaderProps;
  steps: HowItWorksStep[];
}

export interface WhyUsFeature {
  icon: string;
  title: string;
  description: string;
}

export interface WhyUsStat {
  number: string;
  label: string;
}

export interface WhyUsData {
  header: SectionHeaderProps;
  features: WhyUsFeature[];
  stats: WhyUsStat[];
}

export interface HomeAuthorData {
  text: string;
  githubLink: string;
  email: string;
}

export interface HomeAboutAuthorData {
  header: SectionHeaderProps;
  authorData: HomeAuthorData;
}
