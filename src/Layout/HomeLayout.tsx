import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-[#222222] h-screen flex flex-col justify-center">{children}</div>;
}
