import React from 'react'
import Image from 'next/image';

interface ProductCardProps{
    title : string;
    description : string;
    price : number;
    imgUrl : string;
}

const ProductCard = ( {title, description, price, imgUrl }:ProductCardProps) => {
  return (
    <div className='flex flex-col space-y-3'>
       <div>
           <Image
             src={imgUrl}
             alt={description}
             fill
             className='object-cover drop-shadow-md'
           />
       </div>
       <div className='flex flex-col space-y-1.5 p-2'>
            <h3>{title}</h3>
            <p>{description}</p>
            <h4>{price}</h4>
       </div>
    </div>
  )
}

export default ProductCard
