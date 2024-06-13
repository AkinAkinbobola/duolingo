"use server";

import { currentUser } from "@clerk/nextjs/server";
import { getCourseById, getUserProgress } from "@/database/query";
import db from "@/database/drizzle";
import { userProgress } from "@/database/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upsertUserProgress = async (courseId: number) => {
  try {
    const user = await currentUser();

    if (!user || !user) {
      throw new Error("Unauthorized");
    }
    const course = await getCourseById(courseId);

    if (!course) {
      throw new Error("Course not found");
    }

    const existingUserProgress = await getUserProgress();

    if (existingUserProgress) {
      await db.update(userProgress).set({
        activeCourseId: courseId,
        userName: user.firstName || "User",
        userImageSrc: user.imageUrl || "/icons/favicon.svg",
      });
      revalidatePath("/courses");
      revalidatePath("/learn");
      redirect("/learn");
    }

    await db.insert(userProgress).values({
      userId: user.id,
      activeCourseId: courseId,
      userName: user.firstName || "User",
      userImageSrc: user.imageUrl || "/icons/favicon.svg",
    });
    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");
  } catch (error) {
    throw new Error("Something went wrong")
  }
};
