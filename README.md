# Course Catalog

Semester project for **Advanced Web Technologies**. Lab 1 scaffold: file-based
routing with the Next.js App Router, Server and Client Components, a dynamic
`/courses/[id]` route, and basic TypeScript typing.

## What's implemented

- `/` — home page with a link to the course list (Server Component).
- `/about` — static page about the project (Server Component).
- `/courses` — course list, data fetched with `await getCourses()` directly in
  the Server Component, rendered through `CourseCard`.
- `/courses/[id]` — course detail page. `params` is typed as
  `Promise<{ id: string }>` and awaited; calls `notFound()` when the course
  doesn't exist; statically pre-rendered for every course via
  `generateStaticParams`.
- `app/courses/[id]/loading.tsx` — loading state shown during the 300ms mock
  network delay.
- `app/courses/not-found.tsx` — shown when a course id doesn't match.
- `components/LikeButton.tsx` — the only Client Component (`'use client'`),
  holds `likes` in `useState` and increments on click.
- `app/layout.tsx` — shared navigation (Home / Courses / About) via
  `next/link`.
- `lib/courses.ts` — mock data layer simulating a backend, with a 300ms
  delay per call.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Verified

- `npm run build` completes successfully (generates static params for all
  courses).
- `npx tsc --noEmit` — zero TypeScript errors.
- `npx eslint .` — no lint errors.

## Deployment

Not yet deployed — add a live link here if deployed to Vercel.
