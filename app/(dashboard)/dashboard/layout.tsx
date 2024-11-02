

import React from 'react'
import Sidebar from './(components)/Sidebar'

import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {

    const session = await auth()

    if (!session) {
        return redirect('/auth/sign-in')
    }

    return (
        <div className='bg-[#F5F5F5] flex gap-x-4'>
            <Sidebar />
            <div className='ml-8 lg:ml-48'>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout