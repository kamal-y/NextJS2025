import React from 'react'
import ProductDetail from '../component/ProductDetail'
import  ProductDescription from './ProductDescription'

const ProductView = () => {
    return (
        <div className='my-4 flex flex-col gap-4  px-4'>
            {/* Top Line  */}
            <div className='mx-5 flex justify-start gap-3 items-center w-full md:w-auto '>
                <div className='text-mainn font-medium text-md'>
                    Home
                </div>

                <div className='rounded-full p-1 bg-gray-200 items-center w-1 h-1 '></div>

                <div className='text-grayy flex items-center justify-center w-fit hover:cursor-pointer'>
                    Art de la table
                </div>
            </div>

            <div className='overflow-x-hidden w-full md:w-auto'>
                <ProductDetail/>
                <ProductDescription/>
            </div>

        </div>
    )
}

export default ProductView