import { Logo } from "./logo";
import Link from "next/link";

const HEADINGS = [
  { label: "home", link: "/" },
  { label: "about", link: "/about" },
  { label: "projects", link: "/projects" },
];

export const Header = () => {
  return (
    <header className="py-8 flex justify-between text-white items-center">
      <Logo />
      {/* <ul className="flex">
        {HEADINGS.map((heading) => (
          <li key={heading.label} className="ml-3">
            <Link href={heading.link} className="hover:text-blue-400">
              {heading.label}
            </Link>
          </li>
        ))}
      </ul> */}
    </header>
  );
};
