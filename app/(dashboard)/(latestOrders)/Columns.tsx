"use client"

import { ColumnDef } from "@tanstack/react-table"
import Actions from "../dashboard/(components)/Actions"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "products",
        header: "Products",
    },
    {
        accessorKey: "orderId",
        header: "Order ID",
    },
    {
        accessorKey: "date",
        header: "Date",
    },
    {
        accessorKey: "customerName",
        header: "Customer Name",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
    {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => <Actions />
    }

]
