"use client";
import { useState } from "react";
import { z, ZodError } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { redirect, useSearchParams } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GitHub, Discord } from "@/components/icons";
import { Loader2 } from "lucide-react";
export default function Login() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const Spinner = () => <Loader2 className="mr-2 h-5 w-5 animate-spin" />;
  const [loading, setLoading] = useState(false);
  const error = searchParams.get("error");
  const emailWithoutPlusValidator = (value: string) => {
    if (value.includes("+")) {
      throw new ZodError([]);
    }
    return value;
  };

  const formSchema = z.object({
    email: z.string().email().refine(emailWithoutPlusValidator, {
      message: "Email cannot contain the '+' character.",
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  function onFormSubmit(data: z.infer<typeof formSchema>) {
    signIn("email", { email: data.email });
  }
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onFormSubmit)} className="w-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="johndoe@example.com" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="my-2 w-full" type="submit">
                Login or Sign up with Email
              </Button>
            </form>
          </Form>
          <p className="text-center text-sm">Or login or sign up with</p>
          {signinProviders.map((provider) => (
            <Button
              key={provider.name}
              variant="secondary"
              className="my-1 w-full"
              onClick={() => {
                setLoading(true);
                provider.signin();
              }}
            >
              {loading ? <Spinner /> : provider.icon}
              {provider.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
