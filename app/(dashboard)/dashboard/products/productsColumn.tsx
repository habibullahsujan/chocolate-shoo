"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import Actions from "../(components)/Actions"
import Image from "next/image"
import { TProduct } from "@/types"
import { cn } from "@/lib/utils"



export const orderColumns: ColumnDef<TProduct>[] = [
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
    accessorKey: 'code',
    header: 'Code'
  },
  {
    accessorKey: "nameEn",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name(En)
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },

  },
  {
    accessorKey: "nameAr",
    header: "Name(Ar)",
  },
  {
    accessorKey: 'image',
    header: 'Image',
    cell: ({ cell }) => (
      <div>
        <Image src={cell.getValue() as string} height={30} width={30} alt="image" className="rounded-md" />
      </div>
    )
  },
  {
    accessorKey: 'category',
    header: 'Category',
    cell: ({ cell }) => (
      <div>
        <span className="capitalize">{cell.getValue() as string}</span>
      </div>
    )
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ cell }) => (
      <div>
        <span className={cn('capitalize text-white p-2 rounded-md', cell.getValue() === 'running' && 'bg-orange-500',cell.getValue() ==='stopped'&& 'bg-rose-500')}>{cell.getValue() as string}</span>
      </div>
    )
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ cell }) => (
      <div>
        <span className="font-semibold">$ {cell.getValue() as string}</span>
      </div>
    )
  },
  {
    id: 'actions',
    cell: ({ row }) => <Actions id={row.original.id}/>
  }
]
