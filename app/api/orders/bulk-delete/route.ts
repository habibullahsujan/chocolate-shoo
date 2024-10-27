import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  const ids = await req.json();
  try {
    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { message: "Invalid request, no orders IDs provided" },
        { status: 400 }
      );
    }
    const deleteOrders = await prisma.orders.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    if (deleteOrders.count === 0) {
      return NextResponse.json(
        { message: "No orders found with provided ids" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: `${deleteOrders.count} orders deleted successfully` },
      { status: 200 }
    );
  } catch (err) {
    if (err) {
      return NextResponse.json(
        { message: "Failed to bulk delete orders" },
        { status: 500 }
      );
    }
  }
}
