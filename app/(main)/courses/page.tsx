import { getCourses, getUserProgress } from "@/database/query";
import List from "@/components/List";

const CoursesPage = async () => {
  const [courses, userProgress] = await Promise.all([
    getCourses(),
    getUserProgress(),
  ]);
  return (
    <div className={"h-full max-w-[912px] mx-auto px-3"}>
      <h1 className={"text-2xl font-bold text-neutral-700"}>
        Language Courses
      </h1>
      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  );
};

export default CoursesPage;
