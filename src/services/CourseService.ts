import { Course } from "@/types/sections";
import { getBaseUrl } from "@/utils/getBaseUrl";

export class CourseService {
  static async getCourseByUrlParam(courseUrlParam: string): Promise<Course> {
    const response = await fetch(
      `${getBaseUrl()}/courses/url/${courseUrlParam}`,
      {
        method: "GET",
        headers: {
          "x-api-key": process.env.API_KEY || "",
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch course data");
    }

    return response.json();
  }

  static async getAllCourses(): Promise<Course[]> {
    const response = await fetch(
      `${getBaseUrl()}/courses`,
      {
        method: "GET",
        headers: {
          "x-api-key": process.env.API_KEY || "",
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch courses data");
    }

    return response.json();
  }
}
