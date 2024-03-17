import { getServerSession } from "next-auth";
import config from "@/auth.config";
export default async function getSession() {
  const session = await getServerSession(config);
  return session;
}
