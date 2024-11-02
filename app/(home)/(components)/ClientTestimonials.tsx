
'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { StarIcon } from 'lucide-react'
import React from 'react'


const ClientTestimonials = () => {


    const clientTestimonials = [{ img: '', comment: 'Suspendisse eget risus mollis, molestie lectus vel, pellentesque nulla. Aliquam feugiat lacus in sem fermentum finibus.', name: 'Jay Dixon', profession: 'Engineer', rating: 3 }, { img: '', comment: 'Suspendisse eget risus mollis, molestie lectus vel, pellentesque nulla. Aliquam feugiat lacus in sem fermentum finibus.', name: 'Jay Dixon', profession: 'Engineer', rating: 3 }, { img: '', comment: 'Suspendisse eget risus mollis, molestie lectus vel, pellentesque nulla. Aliquam feugiat lacus in sem fermentum finibus.', name: 'Jay Dixon', profession: 'Engineer', rating: 3 }, { img: '', comment: 'Suspendisse eget risus mollis, molestie lectus vel, pellentesque nulla. Aliquam feugiat lacus in sem fermentum finibus.', name: 'Jay Dixon', profession: 'Engineer', rating: 3 }, { img: '', comment: 'Suspendisse eget risus mollis, molestie lectus vel, pellentesque nulla. Aliquam feugiat lacus in sem fermentum finibus.', name: 'Jay Dixon', profession: 'Engineer', rating: 3 }, { img: '', comment: 'Suspendisse eget risus mollis, molestie lectus vel, pellentesque nulla. Aliquam feugiat lacus in sem fermentum finibus.', name: 'Jay Dixon', profession: 'Engineer', rating: 3 }]


    return (
        <section className='px-4 md:px-16 my-24'>

            <h1 className='py-24 font-bold text-4xl font-pacifico text-yellow-700'>Client Testimonials</h1>


            <Swiper


             slidesPerView={1}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper">


                <div className='grid grid-cols-12 gap-8 relative'>
                    {
                        clientTestimonials.map((item, index) => (

                            <SwiperSlide key={index} >
                                <div className='col-span-12 md:col-span-4 text-center border rounded-md p-4 border-lime-600'>
                                    <div className='flex items-center justify-center mb-4' >
                                        <Avatar >
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <p className='py-4'>{item.comment}</p>
                                    <p className='font-pacifico font-bold text-yellow-700'>{item.name}</p>
                                    <p className='text-yellow-700'>{item.profession}</p>
                                    <div className='flex items-center gap-2 justify-center py-3'>
                                        {[...Array(item.rating)].map((_, index) => (<StarIcon key={index} className='w-6 h-6 text-yellow-800' />))}


                                    </div>
                                </div>
                            </SwiperSlide>

                        ))
                    }

                </div>
            </Swiper>
        </section>
    )
}

export default ClientTestimonials