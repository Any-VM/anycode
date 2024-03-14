import Navbar from "@/components/Navbar";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function notFound({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <Navbar />
      {children}

      <div className="flex h-screen flex-col items-center justify-center">
        <div className="space-y-6 px-6 py-3">
          <Card className="w-72 duration-100 hover:border-slate-700">
            <CardHeader>
              <CardTitle>404</CardTitle>
              <CardDescription>Page Not Found.</CardDescription>
            </CardHeader>
            <CardFooter className="flex items-center justify-between">
              <div className="text-foreground flex items-center gap-2">
                <span className={`rounded-full text-lg text-red-400`}>
                  &#9679;
                </span>
                Womp Womp :(
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
