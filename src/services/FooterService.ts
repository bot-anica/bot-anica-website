import { FOOTER_DESCRIPTION, FOOTER_NAVIGATION_LINKS } from '@/constants/common/footer';
import { CourseLink, FooterData, LinkItem } from '../types/sections';
import { CourseService } from './CourseService';

export class FooterService {
  static async getDescription(): Promise<string> {
    return FOOTER_DESCRIPTION;
  }

  static async getNavigationLinks(): Promise<LinkItem[]> {
    return FOOTER_NAVIGATION_LINKS;
  }

  static async getCourseLinks(): Promise<LinkItem[]> {
    const coursesData = await CourseService.getAllCoursesLinks();
    const courseLinks: LinkItem[] = coursesData.map((course: CourseLink) => ({
      link: `/courses/${course.urlParam}`,
      text: course.name,
    }));

    return courseLinks;
  }

  static async getData(): Promise<FooterData> {
    const [description, navigationLinks, courseLinks] = await Promise.all([
      this.getDescription(),
      this.getNavigationLinks(),
      this.getCourseLinks(),
    ]);

    return { description, navigationLinks, courseLinks }
  }
}