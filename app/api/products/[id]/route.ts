import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const product = await prisma.products.findUnique({
      where: { id },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    await prisma.products.delete({
      where: { id },
    });
    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    if (err) {
      return NextResponse.json(
        { success: false, message: "Failed to delete product" },
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
    const product = await prisma.products.findUnique({
      where: { id },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const result = await prisma.products.update({
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
        { message: "Failed to update product" },
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
    const product = await prisma.products.findUnique({
      where: { id },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: product }, { status: 200 });
  } catch (error) {
    if (error) {
     return  NextResponse.json(
        { message: "Failed to fetch product" },
        { status: 500 }
      );
    }
  }
}
