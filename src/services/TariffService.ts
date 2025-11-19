import { Tariff } from "@/types/sections";
import { getUserIp } from "@/utils/userIp";

export class TariffService {
  static async getTariffsByCourseId(courseId: number): Promise<Tariff[]> {
    const ip = await getUserIp();
    
    const response = await fetch(
      `/api/tariffs?course=${courseId}`,
      {
        method: "GET",
        headers: {
          "x-user-ip": ip ?? "",
        }
      }
    );

    console.log("TariffService response:", response);

    if (!response.ok) {
      throw new Error("Failed to fetch tariffs");
    }

    return response.json();
  }
}
