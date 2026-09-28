import Link from "next/link";
import { ArrowDown, ArrowUpRight, Braces, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8">
      <div>
        <div className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-500">
          <Terminal size={18} />
          <span>BCA Student & Web Developer</span>
        </div>

        <h1 className="text-5xl font-bold leading-tight tracking-tight text-black md:text-6xl">
          Building things for
          <span className="block text-gray-400">the web.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
          I&apos;m Deepinder, a BCA student learning modern web development and
          building projects with Next.js, Node.js, and MySQL.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/projects"
            className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            View Projects
            <ArrowDown size={17} />
          </Link>

          <Link
            href="#contact"
            className="flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-100"
          >
            Contact Me
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Braces size={20} />
            <span className="font-medium">developer.ts</span>
          </div>

          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-gray-300"></span>
            <span className="h-3 w-3 rounded-full bg-gray-300"></span>
            <span className="h-3 w-3 rounded-full bg-gray-300"></span>
          </div>
        </div>

        <div className="font-mono text-sm leading-7 text-gray-600">
          <p>
            <span className="text-black">const</span> developer = {"{"}
          </p>

          <p className="pl-6">
            name: <span className="text-black">&quot;Deepinder&quot;</span>,
          </p>

          <p className="pl-6">
            education: <span className="text-black">&quot;BCA&quot;</span>,
          </p>

          <p className="pl-6">
            learning: <span className="text-black">&quot;Next.js&quot;</span>,
          </p>

          <p className="pl-6">
            interests: <span className="text-black">&quot;Web Development&quot;</span>,
          </p>

          <p>{"}"};</p>
        </div>
      </div>
    </section>
  );
}
