
'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Image1 from '@/assets/images/image-1.webp'
import Image2 from '@/assets/images/image-2.webp'
import Image3 from '@/assets/images/image-3.webp'
import { SetStateAction } from 'react'
interface ImageType {
    src: string;
  }

const Header = ({ setSelectImage, selectImage }: {setSelectImage: React.Dispatch<SetStateAction<ImageType | null>>;
    selectImage: ImageType |null;}) => {

    return (
        <div>
            <div className='flex flex-col items-start h-[55vh]'>
                <h1 className='font-bold text-3xl md:text-6xl text-yellow-700 flex flex-col items-start justify-end flex-1 gap-6 font-pacifico'><span>Special Chocolate</span> <span>For Special Occasions</span></h1>
                <Button variant={'outline'} className='mt-10 border-white  hover:bg-yellow-700 hover:border-yellow-700 transition-all '>Choose a choco</Button>
            </div>
            <div className='md:flex gap-x-4 justify-end mt-14 hidden '>
                <div className={`pb-1 ${selectImage?.src === Image1?.src ? 'border-b-4 border-yellow-300' : ''}`}>
                    <button className={`border-8 border-white ${selectImage?.src === Image1?.src ? 'border-yellow-300' : ''}`} onClick={() => setSelectImage(Image1)}>
                        <Image src={Image1} alt='chocolate' height={150} width={100} />
                    </button>
                </div>
                <div className={`pb-1 ${selectImage?.src === Image2?.src ? 'border-b-4 border-yellow-300' : ''}`}>
                <button onClick={() => setSelectImage(Image2)} className={`border-8 border-white ${selectImage?.src === Image2?.src ? 'border-yellow-300' : ''}`} ><Image height={150} width={100} src={Image2} alt='chocolate' /></button>

                </div>
                <div className={`pb-1 ${selectImage?.src === Image3?.src ? 'border-b-4 border-yellow-300' : ''}`}>
                <button onClick={() => setSelectImage(Image3)} className={`border-8 border-white ${selectImage?.src === Image3?.src ? 'border-yellow-300' : ''}`}><Image src={Image3} alt='chocolate' height={150} width={100} /></button>

                </div>


            </div>
        </div>
    )
}

export default Header