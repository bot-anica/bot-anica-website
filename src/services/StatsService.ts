import { Stat } from '../types/sections';

export class StatsService {
  static async getCourseAllStats(courseUrlParam: string): Promise<Stat[]> {
    const { STATS } = await import(`@/constants/${courseUrlParam}/stats`);
    return STATS;
  }
}
 