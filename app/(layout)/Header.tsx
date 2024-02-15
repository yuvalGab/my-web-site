"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Skills", href: "/skills" },
];

export default function Header() {
  const pathname = usePathname();
  const [shouldShowLogo, setShouldShowLogo] = useState(true);

  // TBD: use better type then any here
  const onWindowScroll = useCallback((event: any) => {
    const { offsetWidth, scrollTop } = event.target.scrollingElement;
    setShouldShowLogo(offsetWidth > 768 || scrollTop < 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onWindowScroll);
    return () => {
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, [onWindowScroll]);

  return (
    <header className="fixed top-0 z-10 w-full bg-stone-900 text-stone-100">
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-screen-xl p-4">
        {shouldShowLogo && (
          <p className="text-xl mb-2 md:mb-0">{"<MyWebSite />"}</p>
        )}
        <nav>
          <ul className="flex space-x-2">
            {navLinks.map((link) => {
              const isActive =
                (link.href === "/" && pathname === "/") ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <li key={link.name}>
                  <Link
                    className={`mr-4${isActive ? "" : " text-stone-400"}`}
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
