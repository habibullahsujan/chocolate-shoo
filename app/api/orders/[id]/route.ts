import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
  ) {
    const { id } = params;

    try {
      const order = await prisma.orders.findUnique({
        where: { id },
      });

      if (!order) {
        return NextResponse.json({ error: "Order not found" }, { status: 404 });
      }

      await prisma.orders.delete({
        where: { id },
      });
      return NextResponse.json(
        { message: "Order deleted successfully" },
        { status: 200 }
      );
    } catch (err) {
      if (err) {
        return NextResponse.json(
          { success: false, message: "Failed to delete order" },
          { status: 500 }
        );
      }
    }
  }

  export async function PATCH(
    req: Request,
    { params }: { params: { id: string } }
  ) {
    const body = await req.json();
    const id = params.id;

    try {
      const order = await prisma.orders.findUnique({
        where: { id },
      });

      if (!order) {
        return NextResponse.json({ error: "Order not found" }, { status: 404 });
      }

      const result = await prisma.orders.update({
        where: { id },
        data: body,
      });

      return NextResponse.json({
        success: true,
        data: result,
      });
    } catch (error) {
      if (error) {
        NextResponse.json(
          { message: "Failed to update order" },
          { status: 500 }
        );
      }
    }
  }

  export async function GET(
    req: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id;

    try {
      const order = await prisma.orders.findUnique({
        where: { id },
      });

      if (!order) {
        return NextResponse.json({ error: "Order not found" }, { status: 404 });
      }

      return NextResponse.json({ success: true, data: order }, { status: 200 });
    } catch (error) {
      if (error) {
       return  NextResponse.json(
          { message: "Failed to fetch order" },
          { status: 500 }
        );
      }
    }
  }