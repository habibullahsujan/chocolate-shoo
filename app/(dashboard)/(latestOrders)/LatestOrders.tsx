import { DataTable } from "../dashboard/(components)/DataTable"
import { columns } from "./Columns"


export const data=[
  {
    products:'I-Phone 12 pro max',
    orderId:'#112233',
    date:'Jun, 10, 2024',
    customerName:'Habib',
    status:'delivered',
    amount:'$2000',
  },
  {
    products:'I phone 16 pro max',
    orderId:'#112233',
    date:'Jun, 10, 2024',
    customerName:'Habib',
    status:'pending',
    amount:'$2000',
  },
  {
    products:'Apple Watch',
    orderId:'#112233',
    date:'Jun, 10, 2024',
    customerName:'Habib',
    status:'cancelled',
    amount:'$2000',
  },
  {
    products:'Microsoft Book',
    orderId:'#112233',
    date:'Jun, 10, 2024',
    customerName:'Habib',
    status:'delivered',
    amount:'$2000',
  },
  {
    products:'Apple Pen',
    orderId:'#112233',
    date:'Jun, 10, 2024',
    customerName:'Habib',
    status:'delivered',
    amount:'$2000',
  },
  {
    products:'Airpods',
    orderId:'#112233',
    date:'Jun, 10, 2024',
    customerName:'Habib',
    status:'delivered',
    amount:'$2000',
  },
]

export default function LatestOrders() {

  return (
    <div className="container mx-auto bg-white rounded-md shadow-md p-4">
      <h3 className="font-bold text-xl my-4">Latest Orders</h3>
      <DataTable columns={columns} data={data || []} filterKey="products"/>
    </div>
  )
}
