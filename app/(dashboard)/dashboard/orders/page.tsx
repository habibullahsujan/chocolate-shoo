'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { CiExport } from 'react-icons/ci'
import { IoIosAdd } from "react-icons/io";
import { DataTable } from '../(components)/DataTable';
import { orderColumns } from './orderColumns';
import { useOpen } from '@/hooks/use-open';

const Orders = () => {
    const {isOpen, onOpen} =useOpen()
    return (
        <div className='mt-4 w-full p-2 flex flex-col gap-y-2 ml-8 lg:ml-48'>
            <div className="flex items-center justify-between flex-col lg:flex-row">
                <h1 className='font-bold text-xl lg:text-2xl'>Orders</h1>
                <div className='flex gap-x-1 items-center justify-center'>
                    <Button variant='outline' className='flex items-center justify-center gap-x-2'><CiExport className='size-4' />Export</Button>
                    <Button onClick={onOpen} variant={'outline'} className='flex items-center justify-center gap-x-2'><IoIosAdd className='size-4' />Add Order</Button>
                </div>
            </div>
            <div className='container mx-auto bg-white rounded-md shadow-md p-4'>
                <DataTable filterKey='name-en'  columns={orderColumns} data={[]}/>
            </div>
        </div>
    )
}

export default Orders