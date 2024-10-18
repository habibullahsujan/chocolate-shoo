'use client'

import { DateRange } from "react-day-picker"
import LatestOrders from "../(latestOrders)/LatestOrders"
import DashboardCard from "./(components)/DashboardCard"
import { DatePickerWithRange } from "./(components)/DatePickerWithRange"
import MostSoldItems from "./(components)/MostSoldItems"
import TotalRevenue from "./(components)/TotalRevenue"
import React from "react"
import { add, format, subDays } from "date-fns"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import qs from 'query-string'
import { useGetAllOrdersQuery } from "@/redux/services/ordersApi"
import { useSession } from "next-auth/react"



const cardInfo = [
  { title: 'Total sales', value: '$200.0K', message: 'Total sales  1000kg' },
  { title: 'Todays sales', value: '$20.0K', message: 'Today total sales 100kg' },
  { title: 'Todays Order', value: '130Kg', message: 'Today total order 130kg' },
]

const productsData = [
  { id: 1, name: 'Siwar Signature', sold: 120 },
  { id: 2, name: 'Halqum Layer', sold: 800 },
  { id: 3, name: 'Almond Dates', sold: 50 },
  { id: 4, name: 'Pistahio Dates', sold: 50 },
  { id: 5, name: 'Mili Baqlawa', sold: 50 },
  { id: 6, name: 'Florentine Logo', sold: 50 },
];
const Dashboard = () => {

  const { data: session } = useSession();
  console.log(session)

const pathname=usePathname()
  const router = useRouter()
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: add(new Date(), { months: 1 }),
  })

  const defaultTo = new Date();
  const defaultFrom = subDays(defaultTo, 30)

  const params = useSearchParams();
  const from = params.get('from') || '';
  const to = params.get('to') || '';

  const paramState = {
    from: from ? new Date(from) : defaultFrom,
    to: to ? new Date(to) : defaultTo
  }

  const {data:ordersData}=useGetAllOrdersQuery({
    from: format(paramState.from, 'yyyy-MM-dd'),
    to: format(paramState.to, 'yyyy-MM-dd'),})

    console.log(ordersData)

  const pushToUrl = (dateRange: DateRange | undefined) => {
    const query = {
      from: format(dateRange?.from || defaultFrom, 'yyyy-MM-dd'),
      to: format(dateRange?.to || defaultTo, 'yyyy-MM-dd'),
    }

    const url = qs.stringifyUrl({
      url: pathname,
      query,

    }, { skipNull: true, skipEmptyString: true })
    router.push(url)
  }

  const onReset = () => {
    setDate(undefined)
    pushToUrl(undefined)
  }


  return (
    <div className="mt-4 w-full p-2 flex flex-col gap-y-2 ml-8 lg:ml-48">
      <div className="flex justify-between items-start lg:items-center gap-y-3 flex-col lg:flex-row">
        <h1 className="text-xl lg:text-4xl font-bold">Welcome to Dashboard</h1>
        <DatePickerWithRange date={date} setDate={setDate} pushToUrl={pushToUrl} onReset={onReset} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-2">
        {
          cardInfo.map((c) => (
            <DashboardCard key={c.title} title={c.title} value={c.value} message={c.message} />
          ))
        }
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-2">
        <TotalRevenue />
        <MostSoldItems products={productsData} />
      </div>
      <LatestOrders  />
    </div>
  )
}

export default Dashboard