import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
export default function Home() {
  const offlineWorkers = [4, 5, 6, 7, 8, 9, 10];
  const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="space-y-6 px-12 py-6">
      <h1 className="text-3xl font-semibold">My Workers</h1>
      <div className="flex flex-wrap gap-4">
        {projects.map((workerNumber) => {
          return (
            <Link href={`/project/${workerNumber}`} key={workerNumber}>
              <Card
                key={workerNumber}
                className="w-72 cursor-pointer duration-100 hover:border-slate-700"
              >
                <CardHeader>
                  <CardTitle className="cursor-pointer">{`worker-${workerNumber}`}</CardTitle>
                  <CardDescription>
                    {`worker-${workerNumber}`}.proudparrot2.anycode.tech
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                  <div className="text-foreground flex items-center gap-2">
                    <span
                      className={`rounded-full text-lg ${offlineWorkers.includes(workerNumber) ? "text-red-400" : "text-green-400"}`}
                    >
                      &#9679;
                    </span>
                    {offlineWorkers.includes(workerNumber)
                      ? "Offline"
                      : "Online"}
                  </div>
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
