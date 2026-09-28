import Link from "next/link";
import { ArrowUpRight, BookOpen, Code2, GraduationCap } from "lucide-react";

const interests = [
  {
    icon: GraduationCap,
    title: "BCA student",
    description: "Connecting what I learn in computer applications with hands-on web development.",
  },
  {
    icon: Code2,
    title: "Learning by building",
    description: "Using this portfolio to practice Next.js, TypeScript, and reusable components.",
  },
  {
    icon: BookOpen,
    title: "One step at a time",
    description: "Focusing on clear code, responsive layouts, and understanding how each piece works.",
  },
];

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-8">
      <div className="mb-12">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gray-500">
          About me
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          A little about me.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          I&apos;m Deepinder, a BCA student learning to turn ideas into useful
          experiences for the web 
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 sm:p-10">
          <span className="text-sm font-medium uppercase tracking-widest text-gray-500">
            My approach
          </span>
          <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
            Build. Understand. Improve.
          </h2>
          <p className="mt-5 leading-8 text-gray-600">
            This portfolio is a learning project. I&apos;m using it to understand
            how pages, shared layouts, and reusable components fit together in Next.js.
          </p>
          <p className="mt-4 leading-8 text-gray-600">
            My interests include frontend development and exploring Node.js and
            MySQL. Right now, I&apos;m focused on building a solid foundation,
            one small project at a time.
          </p>
          <Link href="/journey" className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
            Follow my journey <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="divide-y divide-gray-200">
          {interests.map(({ icon: Icon, title, description }) => (
            <article key={title} className="flex gap-5 py-7 first:pt-0 last:pb-0">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gray-100">
                <Icon size={22} aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="mt-2 leading-7 text-gray-600">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
