import React from 'react'
import ProductCard from "./ProductCard"
// import Carousel from "react-multi-carousel";
import Carousel from './Carousal';
import "react-multi-carousel/lib/styles.css";


const Articles = () => {
  return (
    <div className='py-3  flex flex-col gap-4 w-full  bg-[#FBF9F899] mb-6'>
      {/* Heading  */}
      <div className='flex justify-between items-center w-full py-5 whitespace-nowrap px-4'>
        <div className='md:text-2xl font-space font-normal text-mainn'>
          Articles similaires
        </div>

        <div className='uppercase font-inter md:text-none text-xs cursor-pointer'>
          Voir toute la collection
          <hr className="h-[2px] bg-mainn border-1  w-full" ></hr>

        </div>
      </div>


      {/* Similar Articles  */}

      <Carousel >
        <div className="flex justify-between px-4 items-center gap-5 hover:cursor-pointer ">
          {Array.from({ length: 180}).map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </Carousel>


    </div>
  )
}

export default Articles