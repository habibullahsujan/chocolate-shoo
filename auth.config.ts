import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schemas";
import bcrypt from "bcryptjs";
import { prisma } from "./utils/prisma";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials);
        if (validateFields.success) {
          const { email, password } = validateFields.data;
          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          });

          if (!user || !user.password) {
            return null;
          }

          const isPasswordMatched = await bcrypt.compare(
            password,
            user.password
          );
          if (isPasswordMatched) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
