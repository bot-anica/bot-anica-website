import { FAQItem, FAQData } from '../types/sections';
import { SectionHeadersService } from './SectionHeadersService';
import { SectionBGImagesService } from './SectionBGImagesService';

import { FAQS as HOME_FAQS } from '@/constants/home/faqData';

export class FaqService {
  static async getCourseFaqs(courseUrlParam: string): Promise<FAQItem[]> {
    const { FAQS } = await import(`@/constants/${courseUrlParam}/faqData`);
    return FAQS;
  }

  static async getCourseData(courseUrlParam: string): Promise<FAQData> {
    const header = await SectionHeadersService.getCourseHeader(courseUrlParam, 'faq');
    const faqs = await FaqService.getCourseFaqs(courseUrlParam);
    const bgImages = await SectionBGImagesService.getCourseBGImages(courseUrlParam, 'faq');

    return {
      header,
      faqs,
      bgImages,
    };
  }

  static async getHomeFaqs(): Promise<FAQItem[]> {
    return HOME_FAQS;
  }

  static async getHomeData(): Promise<FAQData> {
    const header = await SectionHeadersService.getHomeHeader('faq');
    const faqs = await FaqService.getHomeFaqs();

    return {
      header,
      faqs,
    };
  }
}
