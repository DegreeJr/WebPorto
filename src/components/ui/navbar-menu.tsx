"use client";
import React from "react";
import Link from "next/link";

export const MenuItem = ({
  item,
  href,
}: {
  item: string;
  href: string;
}) => {
  return (
    <Link href={href} className="text-black dark:text-white">
      <p className="cursor-pointer hover:opacity-[0.9]">{item}</p>
    </Link>
  );
};

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-black shadow-input flex justify-center space-x-8 px-8 py-6 border border-transparent dark:border-white/[0.2]">
      {children}
    </nav>
  );
};
