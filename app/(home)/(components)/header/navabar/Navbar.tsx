'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdFavoriteBorder } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { CgDetailsMore } from "react-icons/cg";
import BrandedFoods from './BrandedFoods';
import Chocolate from './Chocolate';
import GIftBoxes from './GIftBoxes';
import Pages from './Pages';
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Users from '@/components/Users';
import { TUser } from '@/types/index';

const Navbar = ({user}:{user:TUser}) => {

    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [index, setIndex] = useState(1)
    const handleMouseEnter = (index: number) => {
        setIndex(index);
        setSubmenuOpen(true);
    };

    const handleMouseLeave = () => {
        setSubmenuOpen(false);
    };

    return (
        <nav className='py-6'>
            <section className='flex items-center justify-between'>
                <div className=''>
                    {/* logo */}
                    <Link href={'/'} className='font-bold text-4xl text-yellow-700 font-pacifico'>Siwar</Link>
                </div>
                <div className='hidden md:block'>
                    {/* menuItem */}
                    <ul className='flex justify-between gap-x-12 text-white'>
                        <button onMouseEnter={() => handleMouseEnter(1)}

                            className='relative'><li>Branded Foods</li>
                            {submenuOpen && index === 1 && <BrandedFoods handleMouseLeave={handleMouseLeave} index={index} />}
                        </button>
                        <button onMouseEnter={() => handleMouseEnter(2)}
                            className=' relative'><li>Chocolate</li>
                            {submenuOpen && index === 2 && <Chocolate handleMouseLeave={handleMouseLeave} index={index} />}
                        </button>
                        <button onMouseEnter={() => handleMouseEnter(3)}
                            className=' relative'><li>Gift Boxes</li>
                            {submenuOpen && index === 3 && <GIftBoxes handleMouseLeave={handleMouseLeave} index={index} />}
                        </button>
                        <button onMouseEnter={() => handleMouseEnter(4)}
                            className=' relative'><li>Pages</li>
                            {submenuOpen && index === 4 && <Pages handleMouseLeave={handleMouseLeave} index={index} />}
                        </button>
                        <Link href={'/home'}><li>New Collection</li></Link>
                    </ul>
                </div>
                <div className='flex items-center gap-x-4 text-white'>
                    <Link href={'/favorite'}><MdFavoriteBorder size={30} /></Link>
                    <Link href={'/cart'}><CiShoppingCart size={30} />
                    </Link>

                    <Users user={user}>
                        <DropdownMenuTrigger>
                            <Link href={'/'}>
                                <CgDetailsMore size={30} />
                            </Link>
                        </DropdownMenuTrigger>
                    </Users>

                </div>


            </section>

        </nav>
    )
}

export default Navbar