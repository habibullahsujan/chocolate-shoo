
'use client'
import React from 'react'
import { FaMoneyBill, FaStore } from 'react-icons/fa';
import { FcStatistics } from 'react-icons/fc';
import { MdDashboard } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { CiSettings, CiShoppingCart } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FaRegMessage } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.svg'
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import LogoutButton from './LogoutButton';


const dashboardItem = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: <MdDashboard className='size-4' />
  }, {
    label: 'Orders',
    href: '/dashboard/orders',
    icon: <CiShoppingCart className='size-4' />
  },
  {
    label: "Products",
    href: '/dashboard/products',
    icon: <FaShoppingBag className='size-4' />
  },
  {
    label: 'Stock',
    href: '/dashboard/stock',
    icon: <FaStore className='size-4' />
  },
  {
    label: "Transactions",
    href: '/dashboard/transactions',
    icon: <AiOutlineTransaction className='size-4' />
  },

  {
    label: "Customers",
    href: '/dashboard/customers',
    icon: <RxAvatar className='size-4' />
  },
  {
    label: "Messages",
    href: '/dashboard/messages',
    icon: <FaRegMessage className='size-4' />
  },
]


const Sidebar = () => {
  const pathName = usePathname();
  return (
    <div className='p-1 lg:p-4 flex flex-col justify-between h-screen w-8 lg:w-48 bg-white fixed'>
      <div className='flex items-center gap-1'>
        <Image src={logo} alt='logo' height={40} width={40} />
        <h1 className='hidden lg:block'>
          Dashboard
        </h1>
      </div>
      <hr />
      <div className='flex flex-col gap-1'>
        {
          dashboardItem.map((item) => (

            <Link href={item.href} key={item.label} className={cn('flex items-center gap-2 rounded-md px-2 py-1 hover:bg-gray-600/20 transition', pathName === item.href && 'bg-gray-600/20')}>
              {item.icon}
              <span className='hidden lg:block'>{item.label}</span>
            </Link>

          ))
        }

      </div>
      <div>
        <Link href={'/dashboard/settings'} className='flex items-center gap-2'><CiSettings className='size-4' /> <span className='hidden lg:block'>Settings</span></Link>
        <LogoutButton />
      </div>
    </div>
  )
}

export default Sidebar