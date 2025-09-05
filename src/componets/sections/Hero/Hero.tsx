import React from 'react'
import Image from 'next/image'
import { Button } from '@/componets/ui/buttons/Buttons';

const Hero = () => {
  return (
    <section className='relative w-full h-screen '>
        <Image
            src="/images/ himg.png"
            alt='hero-image'
            fill
            objectFit='cover'
        />
       <div className='absolute max-w-xs sm:max-w-xl p-3 sm:p-5 top-1/2 right-2.5 -translate-y-9/12 bg-[#FFF3E3]  md:max-w-xl xl:max-w-4xl lg:right-12'>
        <div className="flex flex-col space-y-3 xl:space-y-5">
          <h5 className='text-xs  xl:text-lg font-bold'>New Arrival</h5>
          <h1 className='text-3xl font-extrabold text-[#aa8634] md:text-4xl xl:text-5xl'>Discover Our New Collection</h1>
          <p className='md:leading-8 xl:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ab, neque illum soluta rem itaquesit, amet consectetur adipisicing elit. Eligendi voluptate voluptatum. <span className='hidden  md:inline'>Lorem ipsum dolor sit, amet consectetur provident asperiorestemporibus aperiam quis.</span>
              <span className='hidden xl:inline'>adipisicing elit. Veritatis delectus molestiae perferendis anim.</span> 
          </p>
        </div>
        <Button size='default' variant='primary' className=' mt-4 xl:mt-8 xl:text-lg'>
            Buy Now
        </Button> 
       </div>
    </section >
  )
}

export default Hero
