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
    const totalSales = await prisma.orders.aggregate({
      _sum: {
        quantity: true, // Sum of total quantity sold
      },
    });

    const totalOrdersQuantity = totalSales._sum.quantity;

    const mostSoldItems = await prisma.orders.groupBy({
      by: ["productId"], // Group by productId
      _sum: {
        quantity: true, // Sum the quantity sold for each product
      },
      orderBy: {
        _sum: {
          quantity: "desc", // Order by the quantity sold (most sold first)
        },
      },
      take: 10, // Get top 10 most sold items (adjust if needed)
    });

    if (!mostSoldItems && !totalOrdersQuantity) {
      return NextResponse.json({ message: "No order found" }, { status: 404 });
    }

    const resultWithPercentage = mostSoldItems?.map((item) => {
      const quantity = item._sum.quantity ?? 0;
      const totalOrdersQt = totalOrdersQuantity ?? 0;
      const percentage = (quantity / totalOrdersQt) * 100;
      return {
        productId: item.productId,
        quantity: item._sum.quantity,
        percentage: percentage.toFixed(2), // Keep 2 decimal places
      };
    });

    const productIds = mostSoldItems.map((item) => item.productId);

    const products = await prisma.products.findMany({
      where: {
        id: {
          in: productIds, // Fetch product details for the most sold items
        },
      },
    });

    const mostSoldItemsWithProduct = resultWithPercentage.map((item) => {
      const product = products.find((p) => p.id === item.productId);
      return {
        ...item,
        productName: product ? product.nameEn : "Unknown", // Attach product name
      };
    });
    return NextResponse.json(
      {
        success: true,
        data: {
          mostSoldItemsWithProduct,
        },
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
