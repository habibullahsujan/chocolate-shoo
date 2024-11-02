
import Image from 'next/image'
import React from 'react'
import Image1 from '@/assets/images/chocolate-img-1.jpg'
import Image2 from '@/assets/images/cake-img-1.jpg'
import Image3 from '@/assets/images/chocolate-img-2.webp'
import Image4 from '@/assets/images/cake-img-3.webp'
import Image5 from '@/assets/images/cocoa-img-1.webp'
import CakeAndSweetCard from './CakeAndSweetCard'


const cakesAndSweets = [
  { title: 'Pie makes everyone happy!', img: Image1, span: 4 },
  { title: '', img: Image2, span: 4 },
  { title: '', img: Image3, span: 4 },
  { title: '', img: Image4, span: 4 },
  { title: '', img: Image5, span: 8 },
]

const CakesAndSweets = () => {
  return (
    <section className='px-4 md:px-16 py-8'>
      <h2 className='font-bold text-4xl text-yellow-700 font-pacifico '>Cakes & Sweets</h2>
      <div className='grid grid-cols-12 gap-4 pt-10'>
        {
          cakesAndSweets.map((item, index) => (<CakeAndSweetCard item={item} key={index} />))
        }
      </div>
    </section>
  )
}

export default CakesAndSweets