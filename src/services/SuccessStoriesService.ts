import { courseRegistry } from '@/constants/courseRegistry';
import { SectionBottomCTA, Statistic, SuccessStoriesData, Testimonial } from '../types/sections';
import { SectionBGImagesService } from './SectionBGImagesService';
import { SectionHeadersService } from './SectionHeadersService';

export class SuccessStoriesService {
  private static modules: Map<string, any> = new Map();

  private static async loadCourseModule(courseUrlParam: string) {
    if (this.modules.has(courseUrlParam)) {
      return this.modules.get(courseUrlParam);
    }

    const course = courseRegistry.getCourseByUrlParam(courseUrlParam);

    if (!course || !course.sections.includes('successStories')) {
      this.modules.set(courseUrlParam, null);
      return null;
    }

    try {
      const mod = await import(`@/constants/${course.urlParam}/successStories`);
      this.modules.set(courseUrlParam, mod);
      return mod;
    } catch (error) {
      this.modules.set(courseUrlParam, null);
      return null;
    }
  }

  static async getCourseData(courseUrlParam: string): Promise<SuccessStoriesData | null> {
    const mod = await this.loadCourseModule(courseUrlParam);
    if (!mod) {
      return null;
    }

    const header = await SectionHeadersService.getCourseHeader(courseUrlParam, 'successStories');
    const bgImages = await SectionBGImagesService.getCourseBGImages(courseUrlParam, 'bottom');
    
    const { STATISTIC: stats, TESTIMONIALS: testimonials, SUCCESS_STORIES_CTA_BLOCK: ctaBlock } = mod;

    if (!header || !stats || !testimonials || !ctaBlock) {
      return null;
    }

    return {
      header,
      stats,
      testimonials,
      ctaBlock,
      bgImages
    }
  }
}