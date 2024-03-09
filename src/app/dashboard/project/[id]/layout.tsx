import { Button } from "@/components/ui/button";
import { Info, Route, UploadCloud, Wrench } from "lucide-react";
export default function ProjectLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex">
      <div className="h-[calc(100vh-4rem)] w-1/4 ">
        <div className="flex flex-col gap-2 p-4">
          <h1 className="text-muted-foreground px-4 pb-2 pt-4 text-xs font-medium uppercase tracking-wide">
            Project
          </h1>
          <Button
            variant="ghost"
            className="bg-secondary justify-start px-4 py-2 text-left"
          >
            <Info className="mr-2 h-5 w-5" /> Info
          </Button>
          <Button variant="ghost" className="justify-start px-4 py-2 text-left">
            <UploadCloud className="mr-2 h-5 w-5" /> Deploy
          </Button>
          <Button variant="ghost" className="justify-start px-4 py-2 text-left">
            <Route className="mr-2 h-5 w-5" /> Edit Worker
          </Button>
          <Button variant="ghost" className="justify-start px-4 py-2 text-left">
            <Wrench className="mr-2 h-5 w-5" /> Config
          </Button>
        </div>
      </div>
      <div className="h-[calc(100vh-4rem)] w-3/4">{children}</div>
    </div>
  );
}
