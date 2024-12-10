import React, { useState } from 'react'
import Image from 'next/image'
// import ProductImage from '../assets/Table ronde 165cm Festi 2.svg'
import ProductImage from '../assets/Table ronde 165cm Festi 1.png'
import { PiHeartStraightFill, PiHeartStraightThin } from "react-icons/pi";




const ProductCard = () => {


    const [isLiked, setIsLiked] = useState(false);

    const handleClick = () => {
        setIsLiked(!isLiked); // Toggle between liked and unliked states
    };

    return (
        <div className='flex flex-col justify-between basis-1/3 items-center cursor-pointer z-50'>

            {/* Upper Section  */}
            <div className='relative flex flex-col p-3 bg-beige rounded-lg w-full'>
                <div className='flex justify-between items-center w-full'>

                    <div onClick={handleClick} className='flex justify-between items-center p-2  gap-3 transform transition-transform duration-300 hover:scale-110 hover:cursor-pointer'>
                        {isLiked ? (
                            <PiHeartStraightFill style={{ color: "red", fontSize: "1.5rem" }} />
                        ) : (
                            <PiHeartStraightThin style={{ color: "#3B4347", fontSize: "1.5rem" }} />
                        )}
                    </div>

                    <div className='uppercase text-xs rounded-lg flex justify-center items-center'>
                        <div className='bg-white rounded-lg p-1  text-[9px] leading-tight'>Art de la table</div>
                    </div>
                </div>

                {/* Product Image  */}
                <div>
                    <div className='max-w-80 mx-auto p-3'>
                        <Image src={ProductImage} alt='product image' className='bg-beige w-full h-full object-cover rounded-md'></Image>
                    </div>
                </div>
            </div>

            {/* Lower Section  */}

            <div className='flex flex-col gap-2 w-full px-2 pb-3  border-2 rounded-md border-pinkish md:border-none'>
                <div className='flex w-full justify-between items-center font-playfair md:text-sm '>
                    <div className='text-lg'>
                        Title
                    </div>

                    <div className="flex items-start">
                        <span className="text-xl font-inter ">0</span>
                        <span className="text-sm ml-0">€</span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row w-full  justify-between items-center  text-[9px] gap-1 whitespace-nowrap md:text-[10px] lg:text-custom-xs ">
                    {/* Left Section */}
                    <div className="flex items-center gap-1 ">
                        <div className="text-gray-500 ">0,35€/Pièce</div>

                        {/* Dot Separator */}
                        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>

                        <div className="text-gray-500">RÉF : VABGN5</div>
                    </div>

                    {/* Right Section */}
                    <div className="flex justify-start items-center  px-2 py-3 bg-[#F1F4F6] rounded-full font-light h-3">
                        <span className='text-[#546A7D] '>20 pièces</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductCard