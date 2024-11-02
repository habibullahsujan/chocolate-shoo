'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { CiExport } from 'react-icons/ci'
import { IoIosAdd } from "react-icons/io";
import { DataTable } from '../(components)/DataTable';
import { orderColumns } from './orderColumns';
import { useOpen } from '@/hooks/use-open';
import { useBulkDeleteOrdersMutation, useGetAllOrdersQuery } from '@/redux/services/ordersApi';
import { Loader2 } from 'lucide-react';

const Orders = () => {
    const { onOpen } = useOpen()

    const { data: ordersData, isLoading } = useGetAllOrdersQuery({});



    const [bulkDeleteOrders, { isLoading: bulkDeleteLoading }] = useBulkDeleteOrdersMutation()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    return (
        <div className='mt-4 p-2 flex flex-col gap-y-2 w-full'>
            <div className="flex items-center justify-between flex-col lg:flex-row">
                <h1 className='font-bold text-xl lg:text-2xl'>Orders</h1>
                <div className='flex gap-x-1 items-center justify-center'>
                    <Button variant='outline' className='flex items-center justify-center gap-x-2'><CiExport className='size-4' />Export</Button>
                    <Button onClick={onOpen} variant={'outline'} className='flex items-center justify-center gap-x-2'><IoIosAdd className='size-4' />Add Order</Button>
                </div>
            </div>
            <div className='container mx-auto bg-white rounded-md shadow-md p-4'>
                {
                    isLoading || bulkDeleteLoading ?
                        <div className='h-screen w-full flex items-center justify-center'>
                            <Loader2 className='animate-spin size-6' />
                        </div>
                        :
                        <DataTable
                            columns={orderColumns}
                            data={ordersData?.data || []}
                            filterKey='nameEn'
                            onDelete={(row) => {
                                const ids = row.map((r) => r.original.id)
                                bulkDeleteOrders(ids)
                            }}
                            disabled={isLoading} />
                }
            </div>
        </div>
    )
}

export default Orders