import { Code2 } from "lucide-react";

type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
};

export default function ProjectCard({
  number,
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:border-gray-400">
      <div className="flex items-start justify-between">
        <span className="font-mono text-sm font-medium text-gray-500">{number}</span>

        <span className="rounded-2xl bg-gray-100 p-3">
          <Code2 size={20} aria-hidden="true" />
        </span>
      </div>

      <h2 className="mt-8 text-2xl font-bold tracking-tight">{title}</h2>

      <p className="mt-3 mb-7 leading-7 text-gray-600">{description}</p>

      <ul aria-label={`${title} technologies`} className="mt-auto flex flex-wrap gap-2 border-t border-gray-100 pt-6">
        {technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
          >
            {technology}
          </li>
        ))}
      </ul>
    </article>
  );
}
