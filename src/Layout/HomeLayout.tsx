interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <main className="bg-[#222222] sm:px-2 md:px-6 px-1 sm:py-2 py-0">
      {children}
    </main>
  );
}
