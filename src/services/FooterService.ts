import { FooterData, LinkItem } from '../types/sections';
import { COURSES } from "@/constants/courseRegistry";

const isValidCourse = (courseUrlParam: string) => COURSES.some(course => course.urlParam === courseUrlParam);

export class FooterService {
  static async getCourseDescription(courseUrlParam: string): Promise<string> {
    if (!isValidCourse(courseUrlParam)) return '';
    const { COURSE_DESCRIPTION } = await import(`@/constants/${courseUrlParam}/footer`);
    return COURSE_DESCRIPTION;
  }

  static async getNavigationLinks(courseUrlParam: string): Promise<LinkItem[]> {
    if (!isValidCourse(courseUrlParam)) return [];
    const { FOOTER_NAVIAGTION_LINKS } = await import(`@/constants/${courseUrlParam}/footer`);
    return FOOTER_NAVIAGTION_LINKS;
  }

  static async getData(courseUrlParam: string): Promise<FooterData> {
    const courseDescription = await FooterService.getCourseDescription(courseUrlParam);
    const navigationLinks = await FooterService.getNavigationLinks(courseUrlParam);

    return { courseDescription, navigationLinks }
  }
}