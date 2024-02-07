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
      <div className="flex items-center justify-between mx-auto max-w-screen-xl p-4">
        <p className="text-2xl">{"<MyWebSite />"}</p>
        <nav>
          <ul className="flex space-x-4">
            {navLinks.map((link) => {
              const isActive =
                (link.href === "/" && pathname === "/") ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <li key={link.name}>
                  <Link
                    className={isActive ? "mr-4" : "text-stone-300 mr-4"}
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
