import Image from 'next/image'
import React from 'react'
import SubMenus from './SubMenus';
import Img1 from '@/assets/images/gift-boxes1.webp'
type TChocolateProps={
    handleMouseLeave: () => void,
    index: number
}
const GIftBoxes = ({ handleMouseLeave, index }:TChocolateProps) => {
    return (
        <SubMenus handleMouseLeave={handleMouseLeave} index={index}>
            <div className='col-span-3'>
                <Image src={Img1} alt='' />
            </div>
            <div className='col-span-3'>
                <Image src={Img1} alt='' />
            </div>
            <div className='col-span-3'>
                <Image src={Img1} alt='' />
            </div>
            <div className='col-span-3'>
                <Image src={Img1} alt='' />
            </div>
        </SubMenus>

    )
}

export default GIftBoxes