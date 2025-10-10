'use client'
import React from 'react'
import { EffectCoverflow, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import Image from 'next/image';
import { productsCategories } from '@/data/Udata';

const Collections = () => {
    return (
    <div className='mt-8 p-2 lg:px-6 xl:px-10'>
        <div className='flex flex-col justify-center items-center text-center space-y-1'>
            <h3 className='font-extrabold text-2xl lg:text-3xl xl:text-4xl'>Browse The Range</h3>
            <p className='lg:text-lg xl:text-xl'>Proident dolor ea voluptate adipisicing eu.</p>
        </div>

    <Swiper
         modules={[EffectCoverflow, Autoplay]}
         effect={'coverflow'}
         grabCursor={true}
         centeredSlides={true}
         spaceBetween={20}
         loop={true}
         autoplay={{
            delay:3000,
            disableOnInteraction: false, 
            pauseOnMouseEnter: true, 
            reverseDirection: true,     
            stopOnLastSlide: false, 
         }
         }
         slidesPerView={'auto'}
         coverflowEffect={{
            rotate:20,
            stretch:0,
            depth:100,
            modifier:1,
            slideShadows:true,
         }}
        className="mt-8 py-12" 
    >
        {productsCategories.map((category, index)=>(
            <SwiperSlide key={category.id} className="!w-2xl !h-auto">
                <div className='w-full h-full bg-white rounded-xl 
                 overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300'
                style={{width:"672px"}}
                >
                    <div className='h-[500px] lg:h-[800px] relative'>
                        <Image
                        src={category.image} 
                        alt={category.name}
                        fill
                        className='w-full h-full object-scale-down'
                        />
                    </div>                     
                     <div className='p-2 text-center bg-transparent font-semibold'>
                         <h4 className='text-xl text-gray-800'>{category.name}</h4>
                     </div>
                </div>
              </SwiperSlide>
            ))}
    </Swiper>
    
    </div>
  )
}

export default Collections
