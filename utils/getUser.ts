import { prisma } from "./prisma";

export const getUserByEmail = (email: string) => {
  try {
    const user = prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch  {
    return null;
  }
};

export const getUserById = (id: string) => {
  try {
    const user = prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch  {
    return null;
  }
};
