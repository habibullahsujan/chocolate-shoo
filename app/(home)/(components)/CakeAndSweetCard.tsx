'use client'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'


type TCakesAndSweetsProps={
    title:string;
    img:StaticImageData;
    span:number;
  }
const CakeAndSweetCard = ({ item }:{item:TCakesAndSweetsProps}) => {
    return (

        <div className={`col-span-12 overflow-hidden ${item.span === 4 && 'md:col-span-4'} ${item.span === 8 && 'md:col-span-8'} relative`}>
            <motion.div whileHover={{ scale: 1.5, rotate: 10 }} initial={{ scale: 1 }}   transition={{ duration: 0.8, }} className={`cursor-pointer relative h-[400px] `}>
                <Image src={item.img} alt='sweets' fill />
            </motion.div>
            <span className='text-4xl font-pacifico absolute top-1/2 text-white left-4 right-1/2'>{item.title}</span>
        </div>



    )
}

export default CakeAndSweetCard