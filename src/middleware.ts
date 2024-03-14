import authConfig from "@/app/api/auth/[...nextauth]/auth.config";
import NextAuth from "next-auth";
export const { auth: middleware } = NextAuth(authConfig);
