"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Skills", href: "/skills" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-stone-900 text-stone-100">
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-screen-xl p-4">
        <p className="text-xl">{"<MyWebSite />"}</p>
        <nav>
          <ul className="flex space-x-2">
            {navLinks.map((link) => {
              const isActive =
                (link.href === "/" && pathname === "/") ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <li key={link.name}>
                  <Link
                    className={`mr-4${isActive ? '' : ' text-stone-300'}`}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
