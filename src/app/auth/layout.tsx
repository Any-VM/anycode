import { ModeToggle } from "@/components/ThemeSwitch";
export default function LoginLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="from-background min-h-screen bg-gradient-to-br to-slate-300 bg-fixed dark:to-slate-800">
      <section className="flex min-h-screen items-center justify-center">
        {children}
      </section>
      <div className="fixed bottom-2 right-2">
        <ModeToggle />
      </div>
    </main>
  );
}
