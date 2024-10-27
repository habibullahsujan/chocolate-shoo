"use server";

import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/utils/getUser";
import { prisma } from "@/utils/prisma";


export const signup = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "invalid credentials" };
  }

  const { email, password,name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: "user already exists" };
  }

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name
    },
  });
  //TODO:send email confirmation
  return { success: "User created" };
};
