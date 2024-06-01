import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="bg-[#222222] sm:px-2 md:px-6 px-1 sm:py-2 py-0">{children}</main>;
}
