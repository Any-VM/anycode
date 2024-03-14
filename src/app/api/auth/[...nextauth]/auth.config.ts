import Keycloak from "@auth/core/providers/keycloak";
import type { NextAuthConfig } from "next-auth";
const config: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
    verifyRequest: "/auth/verify",
    signOut: "/auth/logout",
    error: "/auth/error",
  },
  providers: [
    Keycloak({
      clientId: process.env.KEYCLOAK_ID,
      clientSecret: process.env.KEYCLOAK_SECRET,
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
};
export default config;
