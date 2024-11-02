import React from 'react'

import Image1 from '@/assets/images/gallery-1.webp'
import Image2 from '@/assets/images/gallery-2.webp'
import Image3 from '@/assets/images/gallery-3.webp'
import Image4 from '@/assets/images/gallery-4.webp'
import Image5 from '@/assets/images/gallery-5.webp'
import Image6 from '@/assets/images/gallery-6.webp'
import Image7 from '@/assets/images/gallery-7.webp'
import Image8 from '@/assets/images/gallery-8.webp'
import SpecialGalleryCard from './SpecialGalleryCard'


const SpecialGallery = () => {
    const specialGallery = [{ img: Image1 }, { img: Image2 }, { img: Image3 }, { img: Image4 }, { img: Image5 }, { img: Image6 }, { img: Image7 }, { img: Image8 },]
    return (
        <section className='px-4 md:px-16 my-24'>

            <h1 className='py-24 font-bold text-4xl font-pacifico text-yellow-700'>Our Special Gallery</h1>

            <div className='grid grid-cols-12 gap-2'>
                {
                    specialGallery.map((item, index) => (<SpecialGalleryCard key={index} item={item} />))
                }
            </div>
        </section>
    )
}

export default SpecialGallery