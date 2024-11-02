
import React from 'react'
import aboutBg from '../../../assets/images/abut-us-bg.webp'
const AboutUs = () => {
    return (
        <section className='px-4 md:px-16 py-32 relative'>
            <div style={{ backgroundImage: `url(${aboutBg?.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='absolute h-[500px] w-[500px]  -top-12 right-0'>
            </div>
            <div className='p-4 bg-glass-white border-glass-border shadow-glass backdrop-blur-glass z-20 rounded-xl'>
                <h2 className='font-bold text-4xl font-pacifico mb-8 text-yellow-700'>About Us</h2>
                <p className='mb-8'>Duis lacinia mauris ut sem suscipit cursus. Praesent tincidunt dolor eget pretium porttitor. Nam malesuada ipsum quis ligula porttitor placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi maximus auctor commodo.</p>
                <p>Praesent rutrum purus ligula, fringilla dignissim eros pellentesque sit amet. Integer vel odio rhoncus, dapibus felis ut, venenatis arcu. Donec dapibus varius ligula et malesuada.</p>
            </div>
        </section>
    )
}

export default AboutUs