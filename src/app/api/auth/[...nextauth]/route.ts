// src/app/api/auth/[...nextauth]/route.ts
export const runtime = "nodejs";

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

// ← Make this local (remove the `export`)
const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials?.email && credentials.password) {
          return { id: "1", name: "Demo User", email: credentials.email };
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  session: { strategy: "jwt" as const },
  pages: { signIn: "/auth/sign-in" },
};

const handler = NextAuth(authOptions);

// ← Only export the HTTP methods
export { handler as GET, handler as POST };
