import { Statistic, SuccessStoriesCTABlock, SuccessStoriesData, Testimonial } from '../types/sections';
import { SectionBGImagesService } from './SectionBGImagesService';
import { SectionHeadersService } from './SectionHeadersService';

export class SuccessStoriesService {
  private static modules: Map<string, any> = new Map();

  private static async loadModule(courseUrlParam: string) {
    if (this.modules.has(courseUrlParam)) {
      return this.modules.get(courseUrlParam);
    }

    try {
      const mod = await import(`@/constants/${courseUrlParam}/successStories`);
      this.modules.set(courseUrlParam, mod);
      return mod;
    } catch (error) {
      this.modules.set(courseUrlParam, null);
      return null;
    }
  }

  static async getStatistic(courseUrlParam: string): Promise<Statistic[] | null> {
    const mod = await this.loadModule(courseUrlParam);
    return mod ? mod.STATISTIC : null;
  }

  static async getTestimonials(courseUrlParam: string): Promise<Testimonial[] | null> {
    const mod = await this.loadModule(courseUrlParam);
    return mod ? mod.TESTIMONIALS : null;
  }

  static async getCTABlock(courseUrlParam: string): Promise<SuccessStoriesCTABlock | null> {
    const mod = await this.loadModule(courseUrlParam);
    return mod ? mod.SUCCESS_STORIES_CTA_BLOCK : null;
  }

  static async getData(courseUrlParam: string): Promise<SuccessStoriesData | null> {
    const mod = await this.loadModule(courseUrlParam);
    if (!mod) {
      return null;
    }

    const header = await SectionHeadersService.getHeader(courseUrlParam, 'successStories');
    const bgImages = await SectionBGImagesService.getBGImages(courseUrlParam, 'bottom');
    
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