import Navbar from "@/components/navbar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authConfig } from "../api/auth/[...nextauth]/config";
export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession(authConfig);
  if (!session) {
    redirect("/auth/login");
  }
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
