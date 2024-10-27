import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { useOpen } from '@/hooks/use-open'
import OrderForm from './OrderForm'
import { FieldValues } from 'react-hook-form'
import { categoriesOptions, statusOptions } from '@/const/const'
import { useGetAllProductsQuery } from '@/redux/services/productApi'
import { useGetAllCustomersQuery } from '@/redux/services/customerApi'
import { Loader2Icon } from 'lucide-react'
import { useCreateOrderMutation } from '@/redux/services/ordersApi'
import { toast } from 'sonner'




const AddOrderSheet = () => {

    const { isOpen, onClose } = useOpen();


    const { data: products, isLoading: productsLoading } = useGetAllProductsQuery({});
    const { data: customers, isLoading: customersLoading } = useGetAllCustomersQuery({})


    const [createOrder] = useCreateOrderMutation()


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const productsOptions = products?.data?.map((product: any) => ({
        label: product.nameEn,
        value: product.id
    }))
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const customerOptions = customers?.data?.map((customer: any) => ({
        label: customer.name,
        value: customer.id
    }))





    const defaultValues = {
        orderId: '',
        productId: '',
        date: '',
        userId: '',
        category: '',
        status: '',
        unitPrice: '',
        quantity: '',
    }


    const isDisabled = productsLoading || customersLoading
    const onSubmit = async (values: FieldValues) => {


        const data = {
            ...values,
            quantity: Number(values.quantity),
            unitPrice: Number(values.unitPrice),
        }

        const res = await createOrder(data).unwrap()
        if (res) {
            onClose()
            toast.success('Product created successfully')
        } else {
            toast.error('Product creation failed')
        }

    }

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className='space-y-4 overflow-y-scroll'>
                <SheetHeader>
                    <SheetTitle>
                        Add order
                    </SheetTitle>
                    <SheetDescription>
                        Add new order to show in order table.
                    </SheetDescription>
                </SheetHeader>
                {
                    isDisabled ? <Loader2Icon className='h-6 w-6 animate-spin' /> :
                        <OrderForm
                            defaultValues={defaultValues}
                            onSubmit={onSubmit}
                            categoryOptions={categoriesOptions}
                            statusOptions={statusOptions}
                            productsOptions={productsOptions}
                            disabled={isDisabled}
                            customerOptions={customerOptions}
                        />
                }
            </SheetContent>
        </Sheet>
    )
}

export default AddOrderSheet