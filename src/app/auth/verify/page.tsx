import { Card, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { getServerSession } from "next-auth";
import { authConfig } from "@/app/api/auth/[...nextauth]/config";
import { redirect } from "next/navigation";
export default async function EmailVerify() {
  const session = await getServerSession(authConfig);
  if (session) {
    redirect("/");
  }
  return (
    <Card className="mx-auto flex h-[32rem] w-96 flex-col items-center justify-center">
      <CardTitle className="mx-auto mb-2 flex flex-col items-center justify-center">
        <Mail className="h-12 w-12" />
        Verify your email
      </CardTitle>
      <CardContent>
        <p className="text-center">
          We have sent a verification email to your email address. Please check
          your inbox and click on the link to verify your email.
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-center text-sm">
          If you haven&apos;t received the email, please check your spam folder
          or click the button below to resend the email.
        </p>
      </CardFooter>
    </Card>
  );
}
