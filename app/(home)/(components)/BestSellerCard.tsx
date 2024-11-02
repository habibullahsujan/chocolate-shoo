'use client'
import Image, { StaticImageData } from 'next/image'
import { FaOpencart } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CiSearch } from "react-icons/ci";


type TBestSeller={
    title:string;
    img:StaticImageData;
    price:string;
}
const BestSellerCard = ({ item }:{item:TBestSeller}) => {
    return (
        <div className='col-span-4 relative cursor-pointer group'>
            <Image src={item.img} alt='chocolate' />
            <div className='flex gap-x-2 absolute top-1/2 left-[25%] opacity-0 group-hover:opacity-100 transition-all duration-500'>
                <div className='bg-white p-1 rounded-full hover:bg-yellow-600 hover:text-white transition-all'><FaOpencart size={30} /></div>
                <div className='bg-white p-1 rounded-full  hover:bg-yellow-600 hover:text-white transition-all'><IoCopyOutline size={30} /></div>
                <div className='bg-white p-1 rounded-full  hover:bg-yellow-600 hover:text-white transition-all'><MdOutlineFavoriteBorder size={30} /></div>
                <div className='bg-white p-1 rounded-full  hover:bg-yellow-600 hover:text-white transition-all  '><CiSearch size={30} /></div>
            </div>
            <div className='flex flex-col'>
                <span>Name:{item.title}</span>
                <span>Price: RS{item.price}</span>
            </div>
        </div>
    )
}

export default BestSellerCard