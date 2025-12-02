import React from 'react'
import ProductCard from '@/componets/Cards/ProductCard'
import { products } from '@/data/Udata'

const ProductSection = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-14 space-y-6  '>
       <h3 className='font-extrabold text-2xl lg:text-3xl xl:text-4xl text-center'>Browse The Range</h3>
       <div className='grid grid-cols-1 place-items-center space-y-6 '>
            {
                products.map(( {title, description, price, imgUrl}, index)=>(
                    <ProductCard
                        key = {index}
                        title={title}
                        description={description}
                        price = {price}
                        imgUrl={imgUrl}
                    />
                ))
            }
       </div>
    </div>
  )
}

export default ProductSection
