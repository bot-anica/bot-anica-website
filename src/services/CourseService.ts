import { Course, CourseLink } from "@/types/sections";
import { getBaseUrl } from "@/utils/getBaseUrl";

export class CourseService {
  private static cacheDuration = 24 * 60 * 60; // 24 hours

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

  static async getAllCoursesSlugs(): Promise<string[]> {
    const response = await fetch(
      `${getBaseUrl()}/courses/url-params`,
      {
        method: "GET",
        next: { revalidate: this.cacheDuration },
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

  static async getAllCoursesLinks(): Promise<CourseLink[]> {
    const response = await fetch(
      `${getBaseUrl()}/courses/links`,
      {
        method: "GET",
        next: { revalidate: this.cacheDuration },
        headers: {
          "x-api-key": process.env.API_KEY || "",
        },
      },
    );

    if (!response.ok) {
      console.error("Failed to fetch courses links data");
      return [];
    }

    return response.json();
  }
}
