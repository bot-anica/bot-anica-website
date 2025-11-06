import { CourseProblemSolutionData, HomeProblemSolutionData, CourseProblemSolutionItem, SectionBottomCTA, HomeProblem, HomeSolution } from '../types/sections';
import { SectionBGImagesService } from './SectionBGImagesService';
import { SectionHeadersService } from './SectionHeadersService';

import { PROBLEM_SOLUTION_ITEMS as HOME_PROBLEM_SOLUTION_ITEMS } from '@/constants/home/problemSolution';

export class ProblemSolutionService {
  static async getCourseProblemSolutionItems(courseUrlParam: string): Promise<CourseProblemSolutionItem[]> {
    const { PROBLEM_SOLUTION_ITEMS } = await import(`@/constants/${courseUrlParam}/problemSolution`);
    return PROBLEM_SOLUTION_ITEMS;
  }

  static async getCourseProblemSolutionCTABlock(courseUrlParam: string): Promise<SectionBottomCTA> {
    const { PROBLEM_SOLUTION_CTA_BLOCK } = await import(`@/constants/${courseUrlParam}/problemSolution`);
    return PROBLEM_SOLUTION_CTA_BLOCK;
  }

  static async getCourseData(courseUrlParam: string): Promise<CourseProblemSolutionData> {
    const header = await SectionHeadersService.getCourseHeader(courseUrlParam, 'problemSolution');
    const items = await ProblemSolutionService.getCourseProblemSolutionItems(courseUrlParam);
    const ctaBlock = await ProblemSolutionService.getCourseProblemSolutionCTABlock(courseUrlParam);
    const bgImages = await SectionBGImagesService.getCourseBGImages(courseUrlParam, 'problemSolution');
    
    return {
      header,
      items,
      ctaBlock,
      bgImages,
    }
  }

  static async getHomeProblemSolutionItems(): Promise<[HomeProblem, HomeSolution][]> {
    return HOME_PROBLEM_SOLUTION_ITEMS;
  }

  static async getHomeData(): Promise<HomeProblemSolutionData> {
    const header = await SectionHeadersService.getHomeHeader('problemSolution');
    const items = await ProblemSolutionService.getHomeProblemSolutionItems();
    
    return {
      header,
      items,
    }
  }
}
