import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  const ids = await req.json();
  try {
    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { message: "Invalid request, no products IDs provided" },
        { status: 400 }
      );
    }
    const deleteProducts = await prisma.products.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    if (deleteProducts.count === 0) {
      return NextResponse.json(
        { message: "No products found with provided ids" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: `${deleteProducts.count} products deleted successfully` },
      { status: 200 }
    );
  } catch (err) {
    if (err) {
      return NextResponse.json(
        { message: "Failed to bulk delete products" },
        { status: 500 }
      );
    }
  }
}
