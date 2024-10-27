import { prisma } from "@/utils/prisma";
import { endOfDay,startOfDay } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {



  const defaultFrom = startOfDay(new Date());
  const defaultTo = endOfDay(new Date());



  if (req.method !== "GET") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }

  try {
    const result = await prisma.orders.aggregate({
      _sum: {
        totalPrice: true,
        quantity: true,
      },
      where: {
        date: {
          gte: defaultFrom, // Start of today
          lte: defaultTo, // End of today
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
    if (error) {
      return NextResponse.json(
        { message: "Failed to fetch orders" },
        { status: 500 }
      );
    }
  }
};
