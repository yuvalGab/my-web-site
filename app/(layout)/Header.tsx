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
    <header className="bg-gray-800 text-white p-4">
      <p>{"<MyWebSite />"}</p>
      <nav>
        <ul className="flex space-x-4">
          {navLinks.map((link) => {
            const isActive =
              (link.href === "/" && pathname === "/") ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <li key={link.name}>
                <Link
                  className={isActive ? "font-bold mr-4" : "text-blue-400 mr-4"}
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
