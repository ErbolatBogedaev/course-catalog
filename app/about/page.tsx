export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <p className="mt-4 text-zinc-600">
        This catalog was built as the semester project for &quot;Advanced Web
        Technologies&quot;. It started as a Lab 1 scaffold — file-based
        routing, Server and Client Components, and a dynamic course page —
        and grows with every following lab.
      </p>
      <p className="mt-4 text-zinc-600">
        Course data is mocked for now; a real FastAPI backend arrives in a
        later lab.
      </p>
    </main>
  );
}
