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
       <div className='absolute w-xs p-3 top-1/2 right-2.5 -translate-y-9/12 bg-[#FFF3E3]'>
        <div className="flex flex-col space-y-3">
          <h5 className='text-xs font-bold'>New Arrival</h5>
          <h1 className='text-3xl font-extrabold text-[#aa8634]'>Discover Our New Collection</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ab, neque illum soluta rem itaque, culpa commodi maxime.</p>
        </div>
        <Button size='default' variant='primary' className='mt-4'>
            Buy Now
        </Button>
       </div>
    </section >
  )
}

export default Hero
