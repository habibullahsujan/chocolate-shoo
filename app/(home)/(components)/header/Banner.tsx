'use client'
import React, { useEffect, useState } from 'react'
import Image1 from '@/assets/images/image-1.webp'
import Navbar from './navabar/Navbar';
import Header from './Header';
import { motion } from 'framer-motion'
import { TUser } from '@/types/index';
interface Image {
    src: string;
    // Add other properties if necessary
  }
const Banner = ({user}:{user:TUser}) => {
    const [selectImage, setSelectImage] = useState<Image | null>(null);

    useEffect(() => {
        setSelectImage(Image1)
    }, [])
    return (
        <motion.section className="px-4 md:px-16 header-section h-screen transform transition-transform duration-500 z-10" style={{ backgroundImage: `url(${selectImage?.src})`, backgroundSize: 'cover' }}>
            <Navbar user={user}/>
            <Header selectImage={selectImage} setSelectImage={setSelectImage} />
        </motion.section>
    )
}

export default Banner