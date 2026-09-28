import { BookOpen, Code2, Compass } from "lucide-react";

const steps = [
  {
    number: "01",
    label: "The foundation",
    icon: BookOpen,
    title: "Understanding the web",
    description: "Learning how HTML, CSS, and JavaScript work together to give a page structure, style, and interaction.",
    topics: ["HTML & CSS", "JavaScript", "Responsive layouts"],
  },
  {
    number: "02",
    label: "Current focus",
    icon: Code2,
    title: "Building this portfolio",
    description: "Practicing Next.js by building separate pages, sharing a layout, and using props to keep components reusable.",
    topics: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "03",
    label: "Looking ahead",
    icon: Compass,
    title: "Keep building and improving",
    description: "Strengthening the fundamentals through more projects, reviewing what I build, and exploring how the frontend connects to a backend.",
    topics: ["More projects", "Code quality", "Backend concepts"],
  },
];

export default function Journey() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-8">
      <div className="mb-12">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gray-500">
          My journey
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Learning through progress.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          A look at the foundations I&apos;m developing, what I&apos;m working on
          now, and where I want to go next.
        </p>
      </div>

      <ol className="space-y-6">
        {steps.map(({ number, label, icon: Icon, title, description, topics }) => (
          <li key={number} className="grid gap-6 rounded-3xl border border-gray-200 p-6 sm:p-8 md:grid-cols-[180px_1fr] md:gap-10">
            <div className="flex items-center gap-4 md:block">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black font-mono text-sm text-white">
                {number}
              </span>
              <p className="text-sm font-medium uppercase tracking-widest text-gray-500 md:mt-5">
                {label}
              </p>
            </div>
            <div className="md:border-l md:border-gray-200 md:pl-10">
              <Icon size={24} aria-hidden="true" className="mb-4 text-gray-500" />
              <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-gray-600">{description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <li key={topic} className="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-600">
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
