'use client'


import React, { useState, useTransition } from 'react'
import CustomInput from '@/components/CustomInput'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import * as z from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { signup } from '@/actions/sign-up'
import { RegisterSchema } from '@/schemas'
import ErrorMessage from '@/components/ErrorMessage'
import SuccessMessage from '@/components/SuccessMessge'



const SignUpForm = () => {

    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        const formData = {
            ...values,
            role: 'user'
        }
        setError('');
        setSuccess('');

        startTransition(() => {
            signup(formData).then(({ success, error }) => {
                setError(error)
                setSuccess(success)

            })
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 w-1/3 mx-auto h-screen flex flex-col  justify-center'>

                <div className='py-12 px-8 m-4 border rounded-md shadow-md'>
                    <h1 className='font-bold text-2xl text-muted-foreground text-center'>Sign up</h1>
                    <div >
                        <CustomInput disabled={isPending} control={form.control} name="name" label="Name" placeholder="Name" className='w-full' type='text' />
                        <CustomInput disabled={isPending} control={form.control} name="email" label="Email" placeholder="Email" className='w-full' type='email' />
                        <CustomInput disabled={isPending} control={form.control} name="password" label="Password" placeholder="Password" className='w-full' type='password' />
                    </div>
                    <ErrorMessage message={error} />
                    <SuccessMessage message={success} />
                    <Button disabled={isPending} type='submit' className='w-full mt-6 mb-2'>Sign up</Button>
                    <div className='flex items-center justify-between my-2'>
                        <div className="border-t border-slate-500 h-1 w-full"></div>
                        <Link href={'/auth/sign-in'} className='text-right text-sm w-full'>Already have an account? Sign in</Link>
                        <div className="border-t border-slate-500 h-1 w-full"></div>
                    </div>
                    <div className='flex flex-col
    items-center gap-y-1'>
                        <Button className='w-full' variant={'outline'}><span className='text-sm font-semibold'>Login With Google </span><FcGoogle className='size-4 ml-2 fill-blue-500' /></Button>
                        <div className='flex items-center justify-between'>
                            <div className="border-t border-slate-500 h-1 w-1/4"></div>
                            Or
                            <div className="border-t border-slate-500 h-1 w-1/4"></div>
                        </div>
                        <Button className='w-full' variant={'outline'}><span className='text-sm font-semibold'>Login With Github </span><FaGithub className='size-4 ml-2 fill-blue-500  ' /></Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}

export default SignUpForm