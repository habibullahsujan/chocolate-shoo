"use client"



import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import OrderActions from "../(components)/OrderActions"




// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const orderColumns: ColumnDef<any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'orderId',
    header: 'Order ID',
    cell: ({ cell }) => (
      <div>
        <span>{(cell.getValue() as string).split('-')[0]}</span>
      </div>
    )
  },
  {
    id: "nameEn",
    accessorKey: "product.nameEn",
    header: "Product",
    cell: ({ cell }) => (
      <div>
        <span>{cell.getValue() as string}</span>
      </div>
    )

  },

  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ cell }) => (

      <div>
        <span>{format(cell.getValue() as string, 'yyyy-MM-dd')}</span>

      </div>
    )

  },
  {
    accessorKey: 'user.name',
    header: 'Customer',
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity',
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ cell }) => (
      <div>
        <span className={cn('capitalize text-white p-2 rounded-md', cell.getValue() === 'running' && 'bg-orange-500/70',cell.getValue() ==='stopped'&& 'bg-rose-500')}>{cell.getValue() as string}</span>
      </div>
    )
  },

  {
    accessorKey: "unitPrice",
    header: "Unit Price",
    cell: ({ cell }) => (
      <div>
        <span>${cell.getValue() as string}</span>
      </div>
    )
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
    cell: ({ cell }) => (
      <div>
        <span>${cell.getValue() as string}</span>
      </div>
    )
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => <OrderActions id={row.original.id} />
  }
]
