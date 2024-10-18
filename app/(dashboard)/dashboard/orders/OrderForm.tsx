import CustomInput from '@/components/CustomInput'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { TrashIcon } from 'lucide-react'
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'


const OrderForm = ({ id }: { id?: string }) => {
    const form = useForm()

    const handleSubmit=(values:FieldValues)=>{
        console.log(values)

    }

    
    return (

        <Form {...form}>
            <form className='space-y-4 pt-4' onSubmit={form.handleSubmit(handleSubmit)}>
                <CustomInput type='text' name='id' label='Product ID' placeholder='Write product ID' control={form.control} />

                <CustomInput type='text' name='nameEn' label='Product Name(en)' placeholder='Write product english name' control={form.control} />

                <CustomInput type='text' name='nameAr' label='Product Name(ar)' placeholder='Write product arabic name' control={form.control} />

                <CustomInput type='file' name='image' label='Product Image' control={form.control} placeholder='Upload product image' />



                <Button className='w-full' type='submit' >{id ? 'Save changes' : "Add order"}</Button>
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