import React from 'react'
import ProductCard from '@/componets/Cards/ProductCard'
import { products } from '@/data/Udata'

const ProductSection = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-14 space-y-6  '>
       <h3 className='font-extrabold text-2xl lg:text-3xl xl:text-4xl'>Our Products</h3>
       <div className='grid grid-cols-1  md:grid-cols-2 md:space-x-8 lg:space-x-12 2xl:space-x-20 xl:grid-cols-4 place-items-center space-y-8 '>
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
