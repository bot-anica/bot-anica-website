import { Tariff } from "@/types/sections";
import { getUserIp } from "@/utils/userIp";

export class TariffService {
  static async getTariffsByCourseId(courseId: number, userId: string | undefined): Promise<Tariff[]> {
    const response = await fetch(
      `/api/tariffs?course=${courseId}`,
      {
        method: "GET",
        headers: {
          "x-user-ip": userId || "",
        },
      }
    );

    console.log("TariffService response:", response);

    if (!response.ok) {
      throw new Error("Failed to fetch tariffs");
    }

    return response.json();
  }
}
