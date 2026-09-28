import ProjectCard from "@/component/projectcard";

const projects = [
  {
    number: "01",
    title: "Portfolio Website",
    description:
      "A personal portfolio built while learning modern web development with Next.js.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Web Application",
    description:
      "A full-stack project focused on learning backend development, APIs, and databases.",
    technologies: ["Node.js", "Express", "MySQL"],
  },
  {
    number: "03",
    title: "More Coming Soon",
    description:
      "Currently building and experimenting with new projects to improve my development skills.",
    technologies: ["Learning", "Building", "Exploring"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-8">
      <div className="mb-12">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gray-500">
          Selected work
        </p>

        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          My Projects.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          A collection of projects and experiments as I learn, build, and
          improve my development skills.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.number}
            number={project.number}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
      <p className="mt-10 border-t border-gray-200 pt-6 text-sm leading-6 text-gray-500">
        A work in progress, just like my learning journey. More projects will be added along the way.
      </p>
    </section>
  );
}
