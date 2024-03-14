"use client";
import { useState } from "react";
import { useSearchParams, redirect } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Keycloak } from "@/components/icons";
import { Loader2 } from "lucide-react";
export default function Login() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const error = searchParams.get("error");
  const { data: session } = useSession();
  if (session) {
    redirect("/");
  }
  const signinProviders: {
    name: string;
    icon: JSX.Element;
    signin: () => void;
  }[] = [
    {
      name: "Keycloak",
      icon: <Keycloak className="fill-background mr-2 h-5 w-5" />,
      signin: () => signIn("keycloak"),
    },
  ];
  return (
    <Card className="mx-auto flex h-[28rem] w-96 flex-col items-center justify-center">
      <CardTitle className="mb-4 text-left text-2xl font-bold">
        Login to AnyCode
      </CardTitle>
      <CardContent className="m-2 w-full flex-col">
        {error && (
          <div className="bg-destructive text-md m-2 rounded-md p-3">
            There was an error: {error}
          </div>
        )}
        <div className="mx-auto mt-4 flex w-full flex-col items-center justify-center gap-2">
          {signinProviders.map((provider) => (
            <Button
              disabled={loading}
              key={provider.name}
              className="my-1 w-full"
              onClick={() => {
                setLoading(true);
                provider.signin();
              }}
            >
              {loading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                provider.icon
              )}
              {provider.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
