import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  const projects = [0, 0, 0, 0, 0];
  return (
    <div className="py-6 px-12 space-y-6">
      <h1 className="text-3xl font-semibold">My Workers</h1>
      <div className="flex flex-wrap gap-4">
        {projects.map(() => {
          return (
            <Card className="w-72 hover:border-white/50 duration-100 cursor-pointer">
              <CardHeader>
                <CardTitle className="cursor-pointer">worker-1</CardTitle>
                <CardDescription>
                  worker-1.proudparrot2.anycode.tech
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-200">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>{" "}
                  Offline
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
