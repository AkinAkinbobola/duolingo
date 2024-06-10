import { cache } from "react";
import db from "@/database/drizzle";

export const getCourses = cache(async () => {
  return db.query.courses.findMany();
});