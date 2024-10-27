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
import { useGetAllOrdersQuery, useGetTodaySalesQuery, useGetTotalSalesQuery, useMostSoldItemsQuery, useSalesByMonthQuery } from "@/redux/services/ordersApi"



const Dashboard = () => {

  const pathname = usePathname()
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

  const { data: ordersData, isLoading } = useGetAllOrdersQuery({
    from: format(paramState.from, 'yyyy-MM-dd'),
    to: format(paramState.to, 'yyyy-MM-dd'),
  })


  const { data: totalSales, isLoading: totalSalesLoading } = useGetTotalSalesQuery({})
  const { data: todaySales, isLoading: todaySalesLoading } = useGetTodaySalesQuery({})

  const { data: mostSoldItems, isLoading: mostSoldItemsLoading } = useMostSoldItemsQuery({})
  const {data:salesByMonth} =useSalesByMonthQuery({})





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
          !totalSalesLoading && <DashboardCard key={"TotalSales"} title={"Total Sales"} value={totalSales?.data?._sum.totalPrice} message={`Total sales ${totalSales?.data?._sum.quantity} kg`} />
        }
        {
          !todaySalesLoading && <DashboardCard key={"TodaySales"} title={"Today Sales"} value={todaySales?.data?._sum.totalPrice || '000'} message={`Total sales ${todaySales?.data?._sum.quantity || '000'} kg`} />
        }
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-2">
        <TotalRevenue />
        {
          !mostSoldItemsLoading && <MostSoldItems products={mostSoldItems?.data?.mostSoldItemsWithProduct} />
        }
      </div>
      {
        !isLoading && <LatestOrders ordersData={ordersData?.data} />
      }
    </div>
  )
}

export default Dashboard