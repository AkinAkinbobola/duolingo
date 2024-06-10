import { cache } from "react";
import db from "@/database/drizzle";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { userProgress } from "@/database/schema";

export const getCourses = cache(async () => {
  return db.query.courses.findMany();
});

export const getUserProgress = cache(async () => {
  const { userId } = auth();

  if (!userId) return null;

  return db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    },
  });
});