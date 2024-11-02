import React from 'react'
import image1 from '@/assets/images/best-seller-1.webp'
import image2 from '@/assets/images/best-seller-2.webp'
import image3 from '@/assets/images/best-seller-3.webp'
import image4 from '@/assets/images/best-seller-4.webp'
import image5 from '@/assets/images/best-seller-5.webp'
import image6 from '@/assets/images/best-seller-6.webp'
import Slider from './Slider'




const BestSellers = () => {

    const bestSellers = [
        { title: '', img: image1, price: '100' },
        { title: '', img: image2, price: '200' },
        { title: '', img: image3, price: '300' },
        { title: '', img: image4, price: '400' },
        { title: '', img: image5, price: '500' },
        { title: '', img: image6, price: '600' },
    ]
    return (
        <section className='px-4 md:px-16 my-24'>

            <h1 className='pb-8 font-bold text-4xl font-pacifico text-yellow-700'>Best Sellers</h1>


            <Slider bestSellers={bestSellers}/>

        </section>
    )
}

export default BestSellers