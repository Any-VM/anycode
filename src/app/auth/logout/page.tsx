"use client";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { redirect, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
export default function SignOut() {
  const { data: session } = useSession();
  const router = useRouter();
  const { toast } = useToast();
  if (!session) {
    redirect("/auth/login");
  }
  return (
    <Card className="mx-auto flex h-[32rem] w-96 flex-col items-center justify-center">
      <CardTitle className="mx-auto mb-2 flex flex-col items-center justify-center">
        Logout
      </CardTitle>
      <CardHeader>
        <p className="text-center text-sm">Are you sure you want to logout?</p>
      </CardHeader>
      <CardContent>
        <Button
          className="w-full"
          onClick={async () => {
            const data = await signOut({
              callbackUrl: "/auth/login",
              redirect: false,
            });
            toast({
              title: "Logged out",
              description: "You have been logged out",
            });
            router.push(data.url);
          }}
        >
          Logout
        </Button>
      </CardContent>
    </Card>
  );
}
