import React from 'react'
import TinyTotalSalesChart from './TinyTotalSalesChart';


type TProps = {
    title: string;
    value: string;
    message: string
}

const DashboardCard = ({ title, value, message }: TProps) => {
    return (
        <div className='flex items-center justify-between border rounded-md shadow-md bg-white p-2'>
            <div>
                <p className='text-gray-500'>{title}</p>
                <h4 className='font-bold text-xl'>{value}</h4>
                <p className='text-gray-500'>{message}</p>
            </div>
            <div className='w-1/3 h-full'>
                <TinyTotalSalesChart />
            </div>
        </div>
    )
}

export default DashboardCard