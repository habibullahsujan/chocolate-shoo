import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Loader2Icon } from 'lucide-react'
import React from 'react'
import { categoriesOptions, statusOptions } from '@/const/const'
import { FieldValues } from 'react-hook-form'
import OrderForm from './OrderForm'
import { useGetAOrderQuery } from '@/redux/services/ordersApi'
import { useEditOrder } from '@/hooks/use-edit-order'
import { useGetAllProductsQuery } from '@/redux/services/productApi'
import { useGetAllCustomersQuery } from '@/redux/services/customerApi'

const EditOrderSheet = () => {
    const { isOpen, onClose, id } = useEditOrder()


    const { data: orderData,isLoading:ordersLoading } = useGetAOrderQuery(id)

    const { data: products, isLoading: productsLoading } = useGetAllProductsQuery({});
    const { data: customers, isLoading: customersLoading } = useGetAllCustomersQuery({})





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

    

    const onSubmit = (values: FieldValues) => {
    }

    const defaultValues = {
        code: '',
        nameEn: '',
        nameAr: '',
        image: '',
        category: '',
        status: '',
        price: '',
    }

    const isLoading=productsLoading|| customersLoading || ordersLoading

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className='space-y-4 overflow-y-scroll'>
                <SheetHeader>
                    <SheetTitle>
                        Edit Product
                    </SheetTitle>
                    <SheetDescription>
                        Edit a product to show in product table.
                    </SheetDescription>
                </SheetHeader>
                {
                    isLoading ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Loader2Icon className='size-4 text-muted-foreground animate-spin' />
                        </div>
                    ) : (
                        <OrderForm
                            customerOptions={customerOptions}
                            productsOptions={productsOptions}
                            onSubmit={onSubmit}
                            defaultValues={defaultValues}
                            categoryOptions={categoriesOptions}
                            statusOptions={statusOptions}
                            disabled={false}
                            id={id}
                            key={id}
                        />
                    )
                }
            </SheetContent>
        </Sheet>
    )
}

export default EditOrderSheet