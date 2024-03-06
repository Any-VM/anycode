import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Themes, Session } from "@/app/providers";
import { GeistMono } from "geist/font/mono";
import { getServerSession } from "next-auth/next";
import { authConfig } from "@/app/api/auth/[...nextauth]/config";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
export const metadata: Metadata = {
  title: "Anycode",
  description: "A seamless platform for serverless workers",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authConfig);
  // I wish there was a way to get pathname in server components
  if (!session && !headers().get("x-pathname")?.startsWith("/auth")) {
    redirect("/auth/login");
  }
  const shouldDisplayNavbar =
    !headers().get("x-pathname")?.startsWith("/auth") && session;
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <Session session={session}>
          <Themes>
            {shouldDisplayNavbar && <Navbar />}
            <Toaster />
            {children}
          </Themes>
        </Session>
      </body>
    </html>
  );
}
