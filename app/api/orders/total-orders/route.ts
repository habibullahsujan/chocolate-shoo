import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (req: NextRequest) => {

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
            quantity:true
          },

      })

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