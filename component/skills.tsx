import { Code2, Server, DatabaseIcon, Wrench } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    description: "Building clear, responsive interfaces for the web.",
    technologies: ["HTML", "CSS", "JavaScript", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    description: "Exploring the logic that runs behind an application.",
    technologies: ["Node.js", "Express.js"],
  },
  {
    icon: DatabaseIcon,
    title: "Database",
    description: "Learning how to organize and work with structured data.",
    technologies: ["MySQL"],
  },
  {
    icon: Wrench,
    title: "Tools",
    description: "The tools I use to write code and track my progress.",
    technologies: ["Git", "GitHub", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-8">
      <div className="mb-12">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gray-500">
          Skills
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
          Technologies I&apos;m working with.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          My growing toolkit. These are the technologies I&apos;m learning and
          practicing through coursework and personal projects.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <article
              key={skill.title}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:border-gray-400"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
                <Icon size={24} aria-hidden="true" />
              </div>

              <h2 className="mt-6 text-xl font-bold">
                {skill.title}
              </h2>
              <p className="mt-2 leading-7 text-gray-600">{skill.description}</p>

              <ul aria-label={`${skill.title} technologies`} className="mt-6 flex flex-wrap gap-2 border-t border-gray-100 pt-5">
                {skill.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-600"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
