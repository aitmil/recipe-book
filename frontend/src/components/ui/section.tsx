export interface SectionProps {
  children: React.ReactNode;
}

export default function Section({ children }: SectionProps) {
  return (
    <main className="pt-10 md:pt-14 xl:pt-[78px] pb-12 md:pb-16 xl:pb-[100px]">
      {children}
    </main>
  );
}
