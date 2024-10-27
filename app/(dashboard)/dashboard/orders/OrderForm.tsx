import CustomInput from '@/components/CustomInput'
import CustomSelect from '@/components/CustomSelect'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TrashIcon } from 'lucide-react'
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'


const validationSchema = z.object({
    orderId: z.string(),
    productId: z.string(),
    userId: z.string(),
    status: z.string(),
    unitPrice: z.string(),
    category: z.string(),
    quantity: z.string(),
});

type FormValues = z.infer<typeof validationSchema>;



type Props = {
    id?: string;
    defaultValues?: FormValues;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: (values: any) => void;
    disabled?: boolean;
    categoryOptions: { label: string, value: string }[];
    statusOptions: { label: string, value: string }[];
    productsOptions: { label: string, value: string }[];
    customerOptions: { label: string, value: string }[];

};

const OrderForm = ({ productsOptions, customerOptions, id, defaultValues, onSubmit, categoryOptions, statusOptions, disabled }: Props) => {


    const form = useForm({
        resolver: zodResolver(validationSchema),
        defaultValues: defaultValues
    })

    const handleSubmit = (values: FieldValues) => {
        onSubmit(values)
    }


    return (

        <Form {...form}>
            <form className='space-y-4 pt-4' onSubmit={form.handleSubmit(handleSubmit)}>
                <CustomSelect
                    control={form.control}
                    name="productId"
                    label="Product"
                    placeholder="Select product"
                    options={productsOptions}
                />

                <CustomInput type='date' name='date' label='Date' placeholder='Date...' control={form.control} />

                <CustomSelect
                    control={form.control}
                    name="userId"
                    label="Customer"
                    placeholder="Customer"
                    options={customerOptions}
                />

                <CustomSelect
                    control={form.control}
                    name="category"
                    label="Category"
                    placeholder="Select product category"
                    options={categoryOptions}
                />

                <CustomSelect
                    control={form.control}
                    name="status"
                    label="Status"
                    placeholder="Select product status"
                    options={statusOptions}
                />

                <CustomInput type='number' name='quantity' label='Quantity' placeholder='Quantity' control={form.control} />

                <CustomInput type='number' name='unitPrice' label='Unit Price' placeholder='Unit Price' control={form.control} />

                <Button disabled={disabled} className='w-full' type='submit' >{id ? 'Save changes' : "Add order"}</Button>

                {
                    !!id && <Button
                        className='w-full'
                        variant={'outline'}
                        type='button'
                    >
                        <TrashIcon className='size-4 mr-2' />
                        Delete account
                    </Button>
                }

            </form>
        </Form>
    )
}

export default OrderForm