import { prisma } from "@/utils/prisma";
import { parse, subDays } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  if (req.method !== "GET") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }

  try {
    const searchParams = req.nextUrl.searchParams;
    const from = searchParams.get("from");
    const to = searchParams.get("to");

    const defaultTo = new Date();
    const defaultFrom = subDays(defaultTo, 30);

    const startDate = from
      ? parse(from, "yyyy-MM-dd", new Date())
      : defaultFrom;
    const endDate = to ? parse(to, "yyyy-MM-dd", new Date()) : defaultTo;

    const result = await prisma.orders.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    if (error) {
      return NextResponse.json(
        { message: "Failed to fetch orders" },
        { status: 500 }
      );
    }
  }
};


export async function POST(req: Request) {
  try {
    const body = await req.json();

    const newOrder = await prisma.orders.create({
      data: body,
    });

    return NextResponse.json(
      { success: true, data: newOrder },
      { status: 201 }
    );
  } catch (err) {
    if (err) {
      return NextResponse.json(
        { success: false, message: "Failed to create product" },
        { status: 500 }
      );
    }
  }
}
