import { FAQItem, FAQData, FAQBanner } from '../types/sections';
import { SectionHeadersService } from './SectionHeadersService';
import { SectionBGImagesService } from './SectionBGImagesService';

import { FAQS as HOME_FAQS, FAQ_BANNER as HOME_FAQ_BANNER } from '@/constants/home/faqData';

export class FaqService {
  static async getCourseFaqs(courseUrlParam: string): Promise<FAQItem[]> {
    const { FAQS } = await import(`@/constants/${courseUrlParam}/faqData`);
    return FAQS;
  }

  static async getCourseBanner(courseUrlParam: string): Promise<FAQBanner> {
    const { FAQ_BANNER } = await import(`@/constants/${courseUrlParam}/faqData`);
    return FAQ_BANNER;
  }

  static async getCourseData(courseUrlParam: string): Promise<FAQData> {
    const header = await SectionHeadersService.getCourseHeader(courseUrlParam, 'faq');
    const faqs = await FaqService.getCourseFaqs(courseUrlParam);
    const bgImages = await SectionBGImagesService.getCourseBGImages(courseUrlParam, 'faq');
    const banner = await FaqService.getCourseBanner(courseUrlParam);

    return {
      header,
      faqs,
      bgImages,
      banner,
    };
  }

  static async getHomeFaqs(): Promise<FAQItem[]> {
    return HOME_FAQS;
  }

  static async getHomeBanner(): Promise<FAQBanner> {
    return HOME_FAQ_BANNER;
  }

  static async getHomeData(): Promise<FAQData> {
    const header = await SectionHeadersService.getHomeHeader('faq');
    const faqs = await FaqService.getHomeFaqs();
    const banner = await FaqService.getHomeBanner();

    return {
      header,
      faqs,
      banner,
    };
  }
}
