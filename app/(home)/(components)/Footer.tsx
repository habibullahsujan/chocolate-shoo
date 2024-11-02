import Link from 'next/link'
import React from 'react'
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className='bg-yellow-700 text-white'>
            <div className='px-4 md:px-16 py-8 '>
                <div className='grid grid-cols-12'>
                    <div className='col-span-6 md:col-span-3 flex flex-col gap-2'>
                        <span className='font-pacifico text-4xl font-bold text-[#f0c76e]'>Cocoa</span>
                        <Link href={'/'}>address</Link>
                        <Link href={'/'}>phone</Link>
                        <Link href={'/'}>email</Link>
                        <Link href={'/'}>social</Link>
                    </div>
                    <div className='col-span-6 md:col-span-3 flex flex-col gap-2'>
                        <span className='font-pacifico text-2xl font-bold text-[#f0c76e]'>Support</span>
                        <Link href={'/'}>Deliveries</Link>
                        <Link href={'/'}>Orders</Link>
                        <Link href={'/'}>Careers</Link>

                        <Link href={'/'}>Refund & Return</Link>

                        <Link href={'/'}>Portfolio</Link>


                    </div>
                    <div className='col-span-6 md:col-span-3 flex flex-col gap-2'>
                        <span className='font-pacifico text-2xl font-bold text-[#f0c76e]'>Information</span>
                        <Link href={'/'}>Advanced Search</Link>
                        <Link href={'/'}>Help & FAQ</Link>
                        <Link href={'/'}>Store Location</Link>
                        <Link href={'/'}> Orders & Returns</Link>
                    </div>
                    <div className='col-span-6 md:col-span-3 flex flex-col gap-2'>
                        <span className='font-pacifico text-2xl font-bold text-[#f0c76e]'>Help</span>
                        <Link href={'/'}>Search</Link>
                        <Link href={'/'}>Help</Link>
                        <Link href={'/'}>Information</Link>
                        <Link href={'/'}>Privacy Policy</Link>
                        <Link href={'/'}>Shipping Details</Link>
                    </div>
                </div>
                <div className='flex-col md:flex-row flex items-center justify-between pt-8'>
                    <p className='text-center text-sm text-gray-300'>@ 2023 Cocoa. All rights reserved.</p>
                    <div className='flex items-center justify-center gap-x-2'>
                        <p className='text-center text-sm text-gray-300'>Payments Accepted: </p><FaCcPaypal className='h-8 w-8' /><FaCcVisa className='h-8 w-8' /><FaCcMastercard className='h-8 w-8' />

                    </div>
                </div>
            </div>


        </footer>
    )
}

export default Footer