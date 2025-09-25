import { ReviewsData, Review } from '../types/sections';
import { SectionBGImagesService } from './SectionBGImagesService';
import { SectionHeadersService } from './SectionHeadersService';

export class ReviewsService {
  static async getReviews(courseUrlParam: string): Promise<Review[]> {
    const { REVIEWS } = await import(`@/constants/${courseUrlParam}/reviews`);
    return REVIEWS;
  }

  static getSwiperBreakpoints() {
    return {
      '(min-width: 320px)': {
        slides: {
          perView: 'auto',
          spacing: 16,
        },
      },
      '(min-width: 640px)': {
        slides: {
          perView: 'auto',
          spacing: 20,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 'auto',
          spacing: 24,
        },
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
