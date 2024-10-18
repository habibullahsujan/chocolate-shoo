import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { useOpen } from '@/hooks/use-open'
import OrderForm from './OrderForm'

const AddOrderSheet = () => {
    const { isOpen, onClose } = useOpen()

    
    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className='space-y-4'>
                <SheetHeader>
                    <SheetTitle>
                        Add order
                    </SheetTitle>
                    <SheetDescription>
                        Add new order to show in order table.
                    </SheetDescription>
                </SheetHeader>
                <OrderForm

                />
            </SheetContent>
        </Sheet>
    )
}

export default AddOrderSheet