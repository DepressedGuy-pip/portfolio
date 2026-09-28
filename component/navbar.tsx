import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Journey", href: "/journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className="w-full border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-5 px-6 py-5 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-black">
          Deepinder<span className="text-gray-400">.</span>
        </Link>

        <div className="order-3 flex w-full flex-wrap items-center gap-x-5 gap-y-2 border-t border-gray-100 pt-4 md:order-none md:w-auto md:gap-x-6 md:border-0 md:pt-0 lg:gap-x-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="py-2 text-sm font-medium text-gray-600 transition hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          Let&apos;s Talk
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </nav>
  );
}
