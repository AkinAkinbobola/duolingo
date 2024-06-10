"use client";

import {courses, userProgress} from "@/database/schema";
import Card from "@/components/Card";

type Props = {
  courses: (typeof courses.$inferInsert)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

const List = ({ courses, activeCourseId }: Props) => {
  return (
    <div
      className={
        "pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4"
      }
    >
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id!}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={() => {}}
          disabled={false}
          active={activeCourseId === course.id}
        />
      ))}
    </div>
  );
};

export default List;
