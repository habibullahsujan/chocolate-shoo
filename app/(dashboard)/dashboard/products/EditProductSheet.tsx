import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Loader2Icon } from 'lucide-react'
import React from 'react'
import { useEdit } from '@/hooks/use-edit'
import ProductForm from './ProductForm'
import { categoriesOptions, statusOptions } from '@/const/const'
import { useGetAProductQuery } from '@/redux/services/productApi'
import { FieldValues } from 'react-hook-form'

const EditProductSheet = () => {
    const { isOpen, onClose, id } = useEdit()

    const isLoading = false

    const { data: productData } = useGetAProductQuery(id)

    const onSubmit = (values: FieldValues) => {
        console.log(values)
    }
    
    const defaultValues = productData?.data ? {
        code: productData?.data?.code,
        nameEn: productData?.data?.nameEn,
        nameAr: productData?.data?.nameAr,
        image: productData?.data?.image,
        category: productData?.data?.category,
        status: productData?.data?.status,
        price: productData?.data?.price,
    } : {
        code: '',
        nameEn: '',
        nameAr: '',
        image: '',
        category: '',
        status: '',
        price: '',
    }


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
                        <ProductForm
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

export default EditProductSheet