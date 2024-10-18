'use client'


import React from 'react'
import Sidebar from './(components)/Sidebar'


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-[#F5F5F5] flex gap-x-4'>
            <Sidebar />
            {children}

        </div>
    )
}

export default DashboardLayout