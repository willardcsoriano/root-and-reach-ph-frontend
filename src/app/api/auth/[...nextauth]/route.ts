import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

// This is the critical fix to ensure the 'crypto' module is available
export const runtime = "nodejs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // TODO: Replace with real user lookup/verification
        if (credentials?.email && credentials.password) {
          return { id: "1", name: "Demo User", email: credentials.email };
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  // The "as const" provides better type safety in TypeScript
  session: { strategy: "jwt" as const },
  pages: { signIn: "/auth/sign-in" },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };