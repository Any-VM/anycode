import { ModeToggle } from "@/components/ThemeSwitch";
export default function LoginLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="from-background to-muted min-h-screen bg-gradient-to-br">
      <section className="flex min-h-screen items-center justify-center">
        {children}
      </section>
      <div className="fixed bottom-2 right-2">
        <ModeToggle />
      </div>
    </main>
  );
}
