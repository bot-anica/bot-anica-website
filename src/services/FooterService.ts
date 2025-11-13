import { FOOTER_DESCRIPTION, FOOTER_NAVIAGTION_LINKS } from '@/constants/common/footer';
import { Course, FooterData, LinkItem } from '../types/sections';
import { CourseService } from './CourseService';

export class FooterService {
  static async getDescription(): Promise<string> {
    return FOOTER_DESCRIPTION;
  }

  static async getNavigationLinks(): Promise<LinkItem[]> {
    return FOOTER_NAVIAGTION_LINKS;
  }

  static async getNavigationLinksForCourses(): Promise<LinkItem[]> {
    const coursesData = await CourseService.getAllCourses();
    const courseLinks: LinkItem[] = coursesData.map((course: Course) => ({
      link: `/courses/${course.urlParam}`,
      text: course.name,
    }));

    return courseLinks;
  }

  static async getData(): Promise<FooterData> {
    const description = await FooterService.getDescription();
    const navigationLinks = await FooterService.getNavigationLinks();
    const courseLinks = await FooterService.getNavigationLinksForCourses();

    return { description, navigationLinks, courseLinks }
  }
}