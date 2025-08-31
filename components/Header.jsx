"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 bg-foreground border-b border-border backdrop-blur-md z-50">
      <div
        className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 
      sm:px-10 py-4 min-h-[70px] max-sm:gap-2"
      >
        <Link
          href="/"
          className="flex items-center text-lg gap-2 font-semibold text-primary font-mono"
        >
          schoolHub.
        </Link>

        <nav className="flex items-center space-x-8 font-medium">
          <Link
            href="/addSchool"
            className={`transition text-base ${
              pathname === "/addSchool"
                ? "text-primary"
                : "text-copy hover:text-primary-light"
            }`}
          >
            Add School
          </Link>
          <Link
            href="/showSchools"
            className={`transition text-base ${
              pathname === "/showSchools"
                ? "text-primary"
                : "text-copy hover:text-primary-light"
            }`}
          >
            Show Schools
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
