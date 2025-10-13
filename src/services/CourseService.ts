import { Course } from "../types/sections";

export class CourseService {
  static async getCourseByUrlParam(urlParam: string): Promise<Course> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/courses/url/${urlParam}`,
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
}
