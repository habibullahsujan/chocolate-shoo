import Image from "next/image"
import BgImage from '@/assets/images/video-bg.webp'
import { FaPlayCircle } from "react-icons/fa";
import Image1 from '@/assets/images/special-1.jpg'
import Image2 from '@/assets/images/special-2.webp'
import { Button } from "@/components/ui/button"

const WhatMakesUsSpecial = () => {
    return (
        <section className='px-4 md:px-16 my-24'>

            <h2 className='pb-8 font-bold text-4xl font-pacifico text-yellow-700'>What makes us Special?</h2>

            <div className="grid grid-cols-12 gap-3">
                <div className="w-full relative h-[500px] col-span-12" >
                    {/* <iframe height={400} width={'100%'} src="https://www.youtube.com/embed/JgzkfO8nYKo?si=jjfXwCKMcdk_TQaV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
                    <Image src={BgImage} alt="special banner" fill />
                    <Button><FaPlayCircle size={80} className="text-white fill-yellow-800 absolute top-[45%] left-1/2 hover:fill-yellow-500 transition-all" /></Button>
                </div>
                <div className="col-span-12 md:col-span-6 flex">
                    <Image src={Image1} alt="special-2" className="flex-1" />
                </div>
                <div className="col-span-12 md:col-span-6 flex">
                    <Image src={Image2} alt="special-2" className="flex-1" />
                </div>
            </div>
            <div>
                    <p className="py-12 text-lg ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Galley of type and scrambled it to make a type specimen book</p>
                    <p className="text-lg ">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s.remaining essentially unchanged.It was popularised in the 1960s.
                    </p>
                    <Button variant={'secondary'} className="bg-yellow-700 text-white px-12 py-6 my-8 hover:bg-yellow-600">Read More</Button>
                </div>
        </section>
    )
}

export default WhatMakesUsSpecial