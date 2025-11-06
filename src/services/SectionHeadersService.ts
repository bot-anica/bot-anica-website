import { SectionHeaderProps } from "../types/sections";
import { SECTION_HEADERS as HOME_SECTION_HEADERS } from "@/constants/home/common";

export class SectionHeadersService {
  static async getCourseHeader(courseUrlParam: string, section: string): Promise<SectionHeaderProps> {
    const { SECTION_HEADERS } = await import(`@/constants/${courseUrlParam}/common`);
    const sectionHeaders = SECTION_HEADERS as Record<string, SectionHeaderProps>;
    return sectionHeaders[section];
  }

  static async getHomeHeader(section: string): Promise<SectionHeaderProps> {
    const sectionHeaders = HOME_SECTION_HEADERS as Record<string, SectionHeaderProps>;
    return sectionHeaders[section];
  }
}
