import React from 'react'
import ProductCard from "./ProductCard"

const Recommendations = () => {
  return (
    <div className='py-3  flex flex-col gap-4 w-full px-4  mb-6'>
      {/* Heading  */}
      <div className='flex justify-between items-center w-full py-5 '>
        <div className='md:text-2xl font-space font-normal text-mainn md:whitespace-nowrap'>
          Ces produits pourraient vous intéresser
        </div>

        <div className='uppercase font-inter md:text-none text-xs cursor-pointer whitespace-nowrap'>
          Voir toute la collection
          <hr className="h-[2px] bg-mainn border-1  w-full" ></hr>

        </div>
      </div>


      {/* Similar Articles  */}
      

      <div className="grid grid-cols-2 md:flex  gap-3 md:flex-row justify-between items-center place-self-center md:gap-2 w-full ">
        {Array.from({ length: 3 }).map((_, index) => (
          <ProductCard key={index}/>
        ))}
      </div>


    </div>
  )
}

export default Recommendations