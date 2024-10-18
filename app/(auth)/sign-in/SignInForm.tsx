'use client'

import CustomInput from '@/components/CustomInput'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import * as z from "zod"
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import Link from 'next/link'
import { signIn } from "next-auth/react"




import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { zodResolver } from '@hookform/resolvers/zod'
import { convertToFormData } from '@/utils/convertFormData'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'



const validationSchema = z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z.string().min(1, { message: "Password is required" }),
})





const SignInForm = () => {

    const router=useRouter()


    const form = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: zodResolver(validationSchema)
    })

    const onSubmit = async (data: FieldValues) => {


        const formData = convertToFormData(data)
        const res = await signIn('credentials', {
            redirect: false,
            ...formData
        })

        if (res?.ok) {
            toast.success('Sign in successful')
            router.push('/')
        } else {
            toast.error('Sign in failed')

        }

    }





    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 w-1/3 mx-auto h-screen flex flex-col  justify-center'>
                <div className='py-12 px-8 m-4 border rounded-md shadow-md'>
                    <h1 className='font-bold text-2xl text-muted-foreground text-center'>Sign in</h1>
                    <div >
                        <CustomInput control={form.control} name="email" label="Email" placeholder="Email" className='w-full' type='email' />
                        <CustomInput control={form.control} name="password" label="Password" placeholder="Password" className='w-full' type='password' />
                    </div>
                    <Link href={'/forget-password'} className='text-right text-sm underline'>Forgot password?</Link>
                    <Button type='submit' className='w-full my-2'>Sign in</Button>
                    <div className='flex items-center justify-between my-2'>
                        <div className="border-t border-slate-500 h-1 w-full"></div>
                        <Link href={'/sign-up'} className='text-right text-sm w-full'>Don&apos;t have an account? Sign up</Link>
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
                        <Button className='w-full' variant={'outline'}><span className='text-sm font-semibold'>Login With Github </span><FaGithub className='size-4 ml-2 fill-blue-500' /></Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}

export default SignInForm