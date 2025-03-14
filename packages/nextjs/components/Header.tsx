"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const KangarooLogo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary"
  >
    {/* Simple, fun kangaroo sketch */}
    <path
      d="M50 90C30 90 20 70 20 50C20 30 30 10 50 10C70 10 80 30 80 50C80 70 70 90 50 90Z"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    />
    {/* Ears */}
    <path d="M35 25L30 15M65 25L70 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    {/* Eyes */}
    <circle cx="40" cy="40" r="3" fill="currentColor" />
    <circle cx="60" cy="40" r="3" fill="currentColor" />
    {/* Nose */}
    <path d="M50 45L45 50L50 55L55 50L50 45Z" fill="currentColor" />
    {/* Pouch */}
    <path d="M40 60C40 60 50 70 60 60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <KangarooLogo />
          <span className="font-bold">JQ Kangaroo</span>
        </Link>
        <nav className="flex flex-1 items-center justify-end space-x-6 text-sm font-medium">
          <Link
            href="/"
            className={`transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}
          >
            Home
          </Link>
          <Link
            href="/chat"
            className={`transition-colors hover:text-primary ${isActive("/chat") ? "text-primary" : "text-muted-foreground"}`}
          >
            Chat
          </Link>
          <Link
            href="/about"
            className={`transition-colors hover:text-primary ${isActive("/about") ? "text-primary" : "text-muted-foreground"}`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};
