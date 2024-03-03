import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Project() {
  return (
    <div className="px-6 py-4 space-y-4">
      <h1 className="text-4xl font-semibold">worker-1</h1>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Deploys</CardTitle>
          <CardDescription>View your recent deployment</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
