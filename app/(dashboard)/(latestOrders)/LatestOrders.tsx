import { useBulkDeleteOrdersMutation } from "@/redux/services/ordersApi"
import { DataTable } from "../dashboard/(components)/DataTable"
import { orderColumns } from "../dashboard/orders/orderColumns"




// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function LatestOrders({ ordersData }: { ordersData: any[] }) {



  const [bulkDeleteOrders, { isLoading: bulkDeleteLoading }] = useBulkDeleteOrdersMutation()

  return (
    <div className="container mx-auto bg-white rounded-md shadow-md p-4">
      <h3 className="font-bold text-xl my-4">Latest Orders</h3>
      {
        !bulkDeleteLoading && <DataTable columns={orderColumns} data={ordersData || []} filterKey='nameEn'
          onDelete={(row) => {
            const ids = row.map((r) => r.original.id)
            bulkDeleteOrders(ids)
          }} />
      }
    </div>
  )
}
