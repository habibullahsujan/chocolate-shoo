import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { SearchIcon } from 'lucide-react'

const SpecialGalleryCard = ({ item }:{item:{img:StaticImageData}}) => {
    return (
        <div className='cursor-pointer col-span-6 md:col-span-3 relative group' >
            <div>
                <Image alt='chocolate' src={item.img} />
            </div>
            <div className=' absolute opacity-0 top-1/2 left-[45%] group-hover:bg-white group-hover:opacity-100 transition-all rounded-full p-1'>
                <SearchIcon className='h-8 w-8 text-yellow-700 ' />
            </div>
        </div>
    )
}

export default SpecialGalleryCard