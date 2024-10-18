'use client'

import AddOrderSheet from '@/app/(dashboard)/dashboard/orders/AddOrderSheet';
import AddProductSheet from '@/app/(dashboard)/dashboard/products/AddProductSheet';
import EditProductSheet from '@/app/(dashboard)/dashboard/products/EditProductSheet';
import { useMountedState } from 'react-use';


export const SheetProvider = () => {
    const isMounted = useMountedState();
    if (!isMounted) return null
    return (
        <>
            <AddOrderSheet />
            <AddProductSheet />
            <EditProductSheet />
        </>
    )
}