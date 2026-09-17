import Link from "next/link";

export default function CourseNotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-bold tracking-tight">Course not found</h1>
      <p className="mt-4 text-zinc-600">
        We couldn&apos;t find a course with that id.
      </p>
      <Link
        href="/courses"
        className="mt-6 inline-block rounded-md bg-zinc-900 px-5 py-2.5 text-white transition-colors hover:bg-zinc-700"
      >
        Back to courses
      </Link>
    </main>
  );
}
