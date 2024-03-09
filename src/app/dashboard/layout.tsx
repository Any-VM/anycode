import Navbar from "@/components/Navbar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authConfig } from "../api/auth/[...nextauth]/config";
import prisma from "@/lib/prisma";
export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession(authConfig);
  if (!session) {
    redirect("/auth/login");
  }
  return (
    <main>
      <Navbar
        avatar={session.user?.image}
        email={session.user?.email}
        name={session.user?.name}
      />
      {children}
    </main>
  );
}
