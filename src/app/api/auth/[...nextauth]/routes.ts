import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { Adapter } from "next-auth/adapters";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "", // Verificação para evitar 'undefined'
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "", // Verificação para evitar 'undefined'
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
