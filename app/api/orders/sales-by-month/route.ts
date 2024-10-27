import { prisma } from "@/utils/prisma";
import { endOfYear, startOfYear } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  if (req.method !== "GET") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }

  // Get the current year to limit the data by the current year
  const currentYear = new Date().getFullYear();
  const startDate = startOfYear(new Date(currentYear, 0)); // Start of the current year
  const endDate = endOfYear(new Date(currentYear, 11)); // End of the current year

  try {
    const monthlyOrders = await prisma.orders.groupBy({
        by: ['date'],
        _sum: {
          quantity: true,  // Sum of the order quantity
        },
        where: {
          date: {
            gte: startDate, // Filter from the start of the year
            lte: endDate,   // Filter to the end of the year
          },
        },
        orderBy: {
          date: 'asc', // Order the results by date
        },
      });

    return NextResponse.json(
      {
        success: true,
        data: monthlyOrders,
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
