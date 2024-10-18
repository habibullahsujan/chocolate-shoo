import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";

export async function POST(request: Request) {
  try {


    const { email, password, role } = await request.json();

    const existUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existUser) {
      return NextResponse.json({ message: "user already exist" },{ status: 500 });
    }

    const hashedPassword = await hash(password, 16);

    const response = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role,
      },
    });

    if (!response) {
      return NextResponse.json(
        { message: "failed to sign up" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "failed to sign up", error },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "success" }, { status: 200 });
}
