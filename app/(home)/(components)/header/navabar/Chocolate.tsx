import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Img1 from '@/assets/images/chocolate-submenu.webp'
import SubMenus from './SubMenus'
type TChocolateProps={
    handleMouseLeave: () => void,
    index: number
}
const Chocolate = ({ handleMouseLeave, index }:TChocolateProps) => {
    return (
        <SubMenus handleMouseLeave={handleMouseLeave} index={index}>
            <div className='col-span-3'>
                <Image src={Img1} alt='chocolate' />
            </div>
            <div className='col-span-3 flex flex-col gap-1 '>
                <h3 className='font-pacifico font-bold text-lg'>Elite chocolate</h3>
                <hr />
                <Link href={'/'}>Aigner</Link>
                <Link href={'/'}>Blommer</Link>
                <Link href={'/'}>Chcoco Brownie</Link>
                <Link href={'/'}>Choco Cake</Link>
                <Link href={'/'}>Choco Lava</Link>
            </div>
            <div className='col-span-3 flex flex-col gap-1 items-start'>
                <h3 className='font-pacifico font-bold text-lg'>Divine Creations</h3>
                <hr />
                <Link href={'/'}>Coco Chocolate</Link>
                <Link href={'/'}>Coco Cream</Link>
                <Link href={'/'}>Coco Cup</Link>
                <Link href={'/'}>Cream Cake</Link>
                <Link href={'/'}>Creamy Choco</Link>
                <Link href={'/'}>Coco Magic Fudge</Link>
            </div>
            <div className='col-span-3 flex flex-col gap-1 items-start'>
                <h3 className='font-pacifico font-bold text-lg'>
                    Elite chocolate
                </h3>
                <hr />
                <Link href={'/'}>Coco Magic Fudge</Link>
                <Link href={'/'}>Juicy Chocolate</Link>
                <Link href={'/'}>Lindt Chocolate</Link>
                <Link href={'/'}>Strawberry</Link>
                <Link href={'/'}>Baked Chocolate</Link>
            </div>

        </SubMenus>
    )
}

export default Chocolate