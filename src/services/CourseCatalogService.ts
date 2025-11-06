import { CourseCatalogData, CourseCatalogItem, CourseCatalogItemAdditionalData } from '../types/sections';
import { SectionHeadersService } from './SectionHeadersService';

import { COURSES } from "@/constants/courseRegistry";
import { COURSE_CATALOG_DATA as HOME_COURSE_CATALOG_DATA } from '@/constants/home/courseCatalog';

export class CourseCatalogService {
  static async getCourseCatalogItem(): Promise<CourseCatalogItem[]> {
    const catalogItems: CourseCatalogItem[] = []

    Object.keys(HOME_COURSE_CATALOG_DATA).forEach(async (key) => {
      const {HERO_TITLE, HERO_SUBTITLE} = await import(`@/constants/${key}/hero`);

      const value: CourseCatalogItemAdditionalData = HOME_COURSE_CATALOG_DATA[key];

      catalogItems.push({
        titleMain: HERO_TITLE.main,
        titleHighlight: HERO_TITLE.highlight,
        titleAdditional: HERO_TITLE.additional,
        description: HERO_SUBTITLE,
        tags: value.tags,
        icon: value.icon,
        name: COURSES.find(course => course.urlParam === key)?.name || '',
        urlParam: key,
        image: `/images/courses/${key}/heroImage/HeroImageHorizontalSmall.png`,
        bgImages: {
          topRight: {
            smallVertical: `/images/courses/${key}/heroBG/HeroBG-SmallVertical.png`,
          },
        },
      });
    })

    return catalogItems;
  }

  static async getHomeData(): Promise<CourseCatalogData> {
    const header = await SectionHeadersService.getHomeHeader('courseCatalog');
    const courses = await CourseCatalogService.getCourseCatalogItem();
    
    return {
      header,
      courses,
    };
  }
}
