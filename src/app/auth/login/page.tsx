"use client";
import { FormEventHandler, useRef } from "react";
import { redirect } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GitHub, Discord } from "@/components/icons";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
export default function Login() {
  const { data: session } = useSession();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const signinProviders: {
    name: string;
    icon: JSX.Element;
    signin: () => void;
  }[] = [
    {
      name: "Github",
      icon: <GitHub className="mr-2 h-6 w-6" />,
      signin: () => signIn("github"),
    },
    {
      name: "Discord",
      icon: <Discord className="mr-2 h-6 w-6" />,
      signin: () => signIn("discord"),
    },
  ];
  if (session) {
    redirect("/");
  }
  return (
    <main className="from-background min-h-screen bg-gradient-to-br to-slate-300 bg-fixed dark:to-slate-800">
      <section className="flex min-h-screen items-center justify-center">
        <Card className="mx-auto flex h-[32rem] w-[32rem] flex-col items-center justify-center">
          <CardTitle className="mb-4 text-left text-2xl font-bold">
            Login to AnyCode
          </CardTitle>
          <CardContent className="m-2 w-full">
            <Label htmlFor="emailinput">Email</Label>
            <Input
              placeholder="johndoe@example.com"
              id="emailinput"
              ref={emailInputRef}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  signIn("email", { email: emailInputRef.current?.value });
                }
              }}
            />
            <div className="mt-4 w-full justify-center gap-2">
              <Button
                className="mx-2 my-4 w-[calc(50%-1rem)]"
                onClick={() =>
                  signIn("email", { email: emailInputRef.current?.value })
                }
              >
                Login
              </Button>
              <Button
                className="mx-2 my-4 w-[calc(50%-1rem)]"
                variant="outline"
              >
                Sign Up
              </Button>
              <p className="text-center">Or sign in with</p>
              <Separator className="mb-2" />
              <section className="mx-auto flex items-center justify-center">
                {signinProviders.map((provider) => (
                  <Button
                    key={provider.name}
                    className="mr-2 h-12 w-32"
                    variant="secondary"
                    onClick={provider.signin}
                  >
                    {provider.icon}
                    {provider.name}
                  </Button>
                ))}
              </section>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
