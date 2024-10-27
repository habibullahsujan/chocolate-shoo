import { DataTable } from "../dashboard/(components)/DataTable"
import { orderColumns } from "../dashboard/orders/orderColumns"




// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function LatestOrders({ordersData}:{ordersData:any[]}) {
  const onDelete=()=>{

  }

  return (
    <div className="container mx-auto bg-white rounded-md shadow-md p-4">
      <h3 className="font-bold text-xl my-4">Latest Orders</h3>
      <DataTable onDelete={onDelete}  columns={orderColumns} data={ordersData || []} filterKey="products.nameEn"/>
    </div>
  )
}
