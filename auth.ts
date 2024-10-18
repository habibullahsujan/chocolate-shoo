import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./utils/prisma";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({

      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const userEmail = credentials.email as string;
        const userPassword = credentials.password as string;

        const user = await prisma.user.findUnique({
          where: {
            email: userEmail,
          },
        });

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.");
        }
        const comparePassword = await bcrypt.compare(
          userPassword,
          user.password
        );
        if (!comparePassword) {
          throw new Error("Invalid password");
        }
        // return user object with their profile data
        return user;
      },
    }),
  ],
});
