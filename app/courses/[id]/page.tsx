import { notFound } from "next/navigation";
import { getCourse, getCourses } from "@/lib/courses";
import LikeButton from "@/components/LikeButton";

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({ id: course.id }));
}

type CoursePageProps = {
  params: Promise<{ id: string }>;
};

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
      <p className="mt-4 text-zinc-600">{course.description}</p>
      <p className="mt-2 text-sm text-zinc-500">{course.credits} credits</p>
      <div className="mt-6">
        <LikeButton initialLikes={course.likes} />
      </div>
    </main>
  );
}
