import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Themes, Session } from "@/app/providers";
import { GeistMono } from "geist/font/mono";
import { auth } from "@/app/api/auth/[...nextauth]/route";
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
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <Session session={session}>
          <Themes>
            <Toaster />
            {children}
          </Themes>
        </Session>
      </body>
    </html>
  );
}
