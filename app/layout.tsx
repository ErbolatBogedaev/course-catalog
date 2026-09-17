import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "Semester project course catalog built with Next.js.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <nav className="border-b border-zinc-200">
          <div className="mx-auto flex max-w-3xl gap-6 px-6 py-4">
            <Link
              href="/"
              className="rounded-md px-2 py-1 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="rounded-md px-2 py-1 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
            >
              Courses
            </Link>
            <Link
              href="/about"
              className="rounded-md px-2 py-1 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
            >
              About
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
