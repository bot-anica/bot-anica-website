import { Course } from "../types/sections";

export class CourseService {
  static async getCourseByUrlParam(courseUrlParam: string): Promise<Course> {
    const response = await fetch(`/api/course/${courseUrlParam}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch course data");
    }

    return response.json();
  }

  static async getAllCourses(): Promise<Course[]> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/courses`,
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
