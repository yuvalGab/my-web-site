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
    <div className="header">
      <p>{"<MyWebSite />"}</p>
      {navLinks.map((link) => {
        const isActive =
          (link.href === "/" && pathname === "/") ||
          (link.href !== "/" && pathname.startsWith(link.href));

        return (
          <Link
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            key={link.name}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
