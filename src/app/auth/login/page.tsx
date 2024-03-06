"use client";
import { useRef } from "react";
import { redirect, useSearchParams } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GitHub, Discord } from "@/components/icons";
import { Label } from "@/components/ui/label";
export default function Login() {
  const { data: session } = useSession();
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const emailInputRef = useRef<HTMLInputElement>(null);
  const signinProviders: {
    name: string;
    icon: JSX.Element;
    signin: () => void;
  }[] = [
    {
      name: "Github",
      icon: <GitHub className="mr-2 h-5 w-5" />,
      signin: () => signIn("github"),
    },
    {
      name: "Discord",
      icon: <Discord className="mr-2 h-5 w-5" />,
      signin: () => signIn("discord"),
    },
  ];
  if (session) {
    redirect("/");
  }
  function handleEmailSignIn() {
    const emailUser = emailInputRef.current?.value.split("@")[0];
    // TODO: Validate emails server side
    if (emailUser?.includes("+")) {
      toast({
        title: "Invalid or unusuable Email",
        description: "Please use a valid email address",
      });
      return;
    }
    signIn("email", { email: emailInputRef.current?.value });
  }
  return (
    <Card className="mx-auto flex h-[32rem] w-96 flex-col items-center justify-center">
      <CardTitle className="mb-4 text-left text-2xl font-bold">
        Login to AnyCode
      </CardTitle>
      <CardContent className="m-2 w-full flex-col">
        {error && (
          <div className="bg-destructive text-md m-2 rounded-md p-3">
            There was an error: {error}
          </div>
        )}
        <Label htmlFor="emailinput">Email</Label>
        <Input
          placeholder="johndoe@example.com"
          id="emailinput"
          ref={emailInputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleEmailSignIn();
            }
          }}
        />
        <div className="mx-auto mt-4 flex w-full flex-col items-center justify-center gap-2">
          <Button className="my-1 w-full" onClick={handleEmailSignIn}>
            Login or Sign up with Email
          </Button>
          <p className="text-center text-sm">Or login or sign up with</p>
          {signinProviders.map((provider) => (
            <Button
              key={provider.name}
              variant="secondary"
              className="my-1 w-full"
              onClick={provider.signin}
            >
              {provider.icon}
              {provider.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
