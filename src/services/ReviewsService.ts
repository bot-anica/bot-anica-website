import { courseRegistry } from '@/constants/courseRegistry';
import { SlidesPerView } from '@/types/common';
import { Review, ReviewsData } from '@/types/sections';
import { SectionBGImagesService } from './SectionBGImagesService';
import { SectionHeadersService } from './SectionHeadersService';

export class ReviewsService {
  private static modules: Map<string, any> = new Map();

  private static async loadModule(courseUrlParam: string) {
    if (this.modules.has(courseUrlParam)) {
      return this.modules.get(courseUrlParam);
    }

    const course = courseRegistry.getCourseByUrlParam(courseUrlParam);

    if (!course || !course.sections.includes('reviews')) {
      this.modules.set(courseUrlParam, null);
      return null;
    }

    try {
      const mod = await import(`@/constants/${course.urlParam}/reviews`);
      this.modules.set(courseUrlParam, mod);
      return mod;
    } catch (error) {
      this.modules.set(courseUrlParam, null);
      return null;
    }
  }

  static async getReviews(courseUrlParam: string): Promise<Review[] | null> {
    const mod = await this.loadModule(courseUrlParam);
    return mod ? mod.REVIEWS : null;
  }

  static getSwiperBreakpoints() {
    return {
      320: {
        slidesPerView: 'auto' as SlidesPerView,
        spaceBetween: 16,
      },
      640: {
        slidesPerView: 'auto' as SlidesPerView,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 'auto' as SlidesPerView,
        spaceBetween: 24,
      },
    };
  }

  static async getData(courseUrlParam: string): Promise<ReviewsData | null> {
    const mod = await this.loadModule(courseUrlParam);
    if (!mod) {
      return null;
    }

    const header = await SectionHeadersService.getHeader(courseUrlParam, 'reviews');
    const { REVIEWS: reviews } = mod;
    const breakpoints = ReviewsService.getSwiperBreakpoints();
    const bgImages = await SectionBGImagesService.getBGImages(courseUrlParam, 'bottom');
    
    return {
      header,
      reviews,
      breakpoints,
      bgImages
    }
  }
}
