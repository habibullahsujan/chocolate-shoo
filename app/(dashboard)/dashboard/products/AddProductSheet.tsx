import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import ProductForm from './ProductForm'
import { useConfirm } from '@/hooks/use-confirm'
import { categoriesOptions, productStatusOptions } from '@/const/const'
import { FieldValues } from 'react-hook-form'
import { useCreateProductMutation } from '@/redux/services/productApi'
import { toast } from 'sonner'
import { useOpenProduct } from '@/hooks/use-open-product'


const AddProductSheet = () => {
    const { isOpen, onClose } = useOpenProduct()
    const [ConfirmDialog] = useConfirm('Are you sure?', 'Are you sure you want to delete this product?')
    const [createProduct] = useCreateProductMutation()



    const defaultValues = {
        code: '',
        nameEn: '',
        nameAr: '',
        image: '',
        category: '',
        status: '',
        price: '',
    }

    const onSubmit = async (values: FieldValues) => {

        const res = await createProduct(values).unwrap()
        if (res) {
            onClose()
            toast.success('Product created successfully')
        } else {
            toast.error('Product creation failed')
        }

    }


    return (
        <>
            <ConfirmDialog />
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent className='space-y-4 overflow-y-scroll'>
                    <SheetHeader>
                        <SheetTitle>
                            Add product
                        </SheetTitle>
                        <SheetDescription>
                            Add new product to show in product table.
                        </SheetDescription>
                    </SheetHeader>
                    <ProductForm
                        key={1}
                        categoryOptions={categoriesOptions}
                        onSubmit={onSubmit}
                        statusOptions={productStatusOptions}
                        defaultValues={defaultValues}
                        disabled={false}

                    />

                </SheetContent>
            </Sheet>

        </>
    )
}

export default AddProductSheet