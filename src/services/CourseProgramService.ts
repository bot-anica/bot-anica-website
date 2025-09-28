import { SlidesPerView } from '@/types/common';
import { Lesson, CourseProgramData } from '@/types/sections';
import { SectionBGImagesService } from './SectionBGImagesService';
import { SectionHeadersService } from './SectionHeadersService';

export class CourseProgramService {
  static async getLessons(courseUrlParam: string): Promise<Lesson[]> {
    const { LESSONS } = await import(`@/constants/${courseUrlParam}/courseProgram`);
    return LESSONS as Lesson[];
  }

  static getSwiperBreakpoints() {
    return {
      320: {
        slidesPerView: "auto" as SlidesPerView,
        spaceBetween: 16,
      },
      640: {
        slidesPerView: "auto" as SlidesPerView,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: "auto" as SlidesPerView,
        spaceBetween: 24,
      },
    };
  }

  static async getData(courseUrlParam: string): Promise<CourseProgramData> {
    const header = await SectionHeadersService.getHeader(courseUrlParam, 'courseProgram');
    const lessons = await CourseProgramService.getLessons(courseUrlParam);
    const breakpoints = CourseProgramService.getSwiperBreakpoints();
    const bgImages = await SectionBGImagesService.getBGImages(courseUrlParam, 'courseProgram');
    
    return {
      header,
      lessons,
      breakpoints,
      bgImages,
    };
  }
}
