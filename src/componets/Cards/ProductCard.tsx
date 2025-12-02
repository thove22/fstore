import React from 'react'
import Image from 'next/image';

interface ProductCardProps{
    title : string;
    description : string;
    price : string;
    imgUrl : string;
}

const ProductCard = ( {title, description, price, imgUrl }:ProductCardProps) => {
  return (
    <div className='flex flex-col space-y-3 bg-base w-72  sm:w-80 md:w-72 2xl:w-84'>
       <div className='relative w-auto h-64'>
           <Image
             src={imgUrl}
             alt={description}
             fill
           />
       </div>
       <div className='flex flex-col space-y-1.5 p-2'>
            <h3 className=' font-bold text-xl'>{title}</h3>
            <p>{description}</p>
            <h4 className='font-semibold text-lg'>{price}</h4>
       </div>
    </div>
  )
}

export default ProductCard
