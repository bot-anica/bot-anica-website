import { SlidesPerView } from '@/types/common';
import { Review, ReviewsData } from '@/types/sections';
import { SectionBGImagesService } from './SectionBGImagesService';
import { SectionHeadersService } from './SectionHeadersService';

export class ReviewsService {
  static async getReviews(courseUrlParam: string): Promise<Review[]> {
    const { REVIEWS } = await import(`@/constants/${courseUrlParam}/reviews`);
    return REVIEWS;
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

  static async getData(courseUrlParam: string): Promise<ReviewsData> {
    const header = await SectionHeadersService.getHeader(courseUrlParam, 'reviews');
    const reviews = await ReviewsService.getReviews(courseUrlParam);
    const breakpoints = ReviewsService.getSwiperBreakpoints();
    const bgImages = await SectionBGImagesService.getBGImages(courseUrlParam, 'reviews');
    
    return {
      header,
      reviews,
      breakpoints,
      bgImages
    }
  }
}
