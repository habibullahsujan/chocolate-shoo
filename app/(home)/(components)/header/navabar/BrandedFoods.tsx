'use client'
import Image from "next/image"
import Link from "next/link"
import BrandedFoods1 from '@/assets/images/branded-foods-1.webp'
import BrandedFoods2 from '@/assets/images/branded-foods-2.webp'

import SubMenus from "./SubMenus"

type TBrandedFoods={
    handleMouseLeave: () => void,
    index: number
}
const BrandedFoods = ({ handleMouseLeave,index }:TBrandedFoods) => {
    return (

        <div>
            <SubMenus handleMouseLeave={handleMouseLeave} index={index}>
                <div className="col-span-2 flex flex-col gap-2">
                    <h2 className="font-pacifico text-lg font-bold">Dark Chocolates</h2>
                    <hr />
                    <Link href={'/'}>Aigner Chocolate</Link>
                    <Link href={'/'}>Blommer Chocolate</Link>
                    <Link href={'/'}>Choco Brownie</Link>
                    <Link href={'/'}>Choco Cake</Link>
                    <Link href={'/'}>Lindt Chocolate</Link>
                </div>
                <div className="col-span-2 flex flex-col gap-2">
                    <h2 className="font-pacifico text-lg font-bold">Milk Chocolates</h2>
                    <hr />
                    <Link href={'/'}>Coco Cup Cake</Link>
                    <Link href={'/'}>Coco Cream Cake</Link>
                    <Link href={'/'}>Juicy Chocolate</Link>
                    <Link href={'/'}>Pie Choco</Link>
                    <Link href={'/'}>Vegi Chocolate</Link>
                </div>
                <div className="col-span-2 flex flex-col gap-2">
                    <h2 className="font-pacifico text-lg font-bold">Nutty Chocolate</h2>
                    <hr />
                    <Link href={'/'}>Strawberry Choco</Link>
                    <Link href={'/'}>Base Choco</Link>
                    <Link href={'/'}>Lindt Chocolate</Link>
                    <Link href={'/'}>Gola Chocolate</Link>
                    <Link href={'/'}>Strawberry Choco</Link>
                </div>
                <div className="col-span-6 flex gap-2">
                    <div>
                        <Image src={BrandedFoods1} alt="branded-foods" />
                    </div>
                    <div>
                        <Image src={BrandedFoods2} alt="branded-foods" />
                    </div>
                </div>
            </SubMenus>

        </div>
    )
}

export default BrandedFoods