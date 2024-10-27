import { Button } from '@/components/ui/button'
import React from 'react'
import { MdLogout } from 'react-icons/md'

const LogoutButton = () => {
    return (
        <Button className='flex items-start justify-center  ' variant={'outline'}>
            <MdLogout className='size-4' />
            <span className='hidden lg:block'>
                Logout
            </span>
        </Button>
    )
}

export default LogoutButton