import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Course Catalog</h1>
      <p className="mt-4 text-zinc-600">
        Browse the courses offered this semester, see what each one covers,
        and like the ones you&apos;re most excited about.
      </p>
      <Link
        href="/courses"
        className="mt-8 inline-block rounded-md bg-zinc-900 px-5 py-2.5 text-white transition-colors hover:bg-zinc-700"
      >
        Browse courses
      </Link>
    </main>
  );
}
