import React, { useState } from 'react'
import Image from 'next/image'
import ProductImage1 from '../assets/image-removebg-preview.png'
import ProductImage from '../assets/Table ronde 165cm Festi 2.svg'
import { PiHeartStraightThin, PiHeartStraightFill } from "react-icons/pi";

import capa from '../assets/Capa_1.svg'
import capa2 from '../assets/Page-1.svg'

const ProductDetail = () => {
    const [isLiked, setIsLiked] = useState(false);

    const handleClick = () => {
        setIsLiked(!isLiked); // Toggle between liked and unliked states
    };

    return (

        <div className='relative grid md:grid-cols-2 gap-2 p-3 py-4  '>

            {/* Left section  */}

            <div className='relative bg-beige flex justify-center items-center rounded-lg'>
                <div className='p-5 w-full'>
                    <Image src={ProductImage1} alt='product image' className='bg-beige w-full h-full object-cover rounded-md'></Image>
                </div>

                <div className='absolute top-4 left-4 flex flex-col justify-start items-center gap-2 w-9 h-1/3'>
                    <div className='hover:cursor-pointer transform transition-transform duration-300 hover:scale-110'>
                        <Image src={ProductImage} alt='product image' className='bg-beige w-full h-full object-cover rounded-md'></Image>
                    </div>
                    <div className='hover:cursor-pointer transform transition-transform duration-300 hover:scale-110'>
                        <Image src={ProductImage} alt='product image' className='bg-beige w-full h-full object-cover rounded-md'></Image>
                    </div>
                    <div className='hover:cursor-pointer transform transition-transform duration-300 hover:scale-110'>
                        <Image src={ProductImage} alt='product image' className='bg-beige w-full h-full object-cover rounded-md'></Image>
                    </div>
                    <div className='hover:cursor-pointer transform transition-transform duration-300 hover:scale-110'>
                        <Image src={ProductImage} alt='product image' className='bg-beige w-full h-full object-cover rounded-md'></Image>
                    </div>
                </div>
            </div>

            {/* Right Section  */}

            <div className='flex flex-col justify-between items-center '>
                {/* Upper Section  */}

                <div className='w-full flex flex-col'>

                    {/* Main Heading  */}
                    <div className='flex justify-between gap-2 font-playfair text-3xl '>
                        <div>
                            Cheese – appareil à raclette 1/2 roue
                        </div>

                        <div onClick={handleClick} className='flex justify-between items-center p-2  gap-3 transform transition-transform duration-300 hover:scale-110 hover:cursor-pointer'>
                            {isLiked ? (
                                <PiHeartStraightFill style={{ color: "red", fontSize: "39px" }} />
                            ) : (
                                <PiHeartStraightThin style={{ color: "#3B4347", fontSize: "39px" }} />
                            )}
                        </div>
                    </div>

                    {/* Sub Heading  */}

                    <div className='flex justify-start items-center gap-2'>
                        <div className='text-lg'>
                            39,50€
                        </div>
                        <div className='text-lgray'>
                            /pièce
                        </div>

                    </div>


                    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full" ></hr>

                    <div className='flex justify-between items-center'>
                        <div className='flex justify-center items-center gap-3'>

                            <div className='flex justify-between items-center gap-2'>
                                <div className='flex justify-between items-center p-2  gap-3 '>
                                    <Image src={capa} alt='' />
                                </div>

                                <div className="flex items-start">
                                    <span className="text-xl ">20</span>
                                    <span className="text-sm ml-1">cm</span>
                                </div>

                            </div>

                            <div className='flex justify-between items-center gap-2'>
                                <div className='flex justify-between items-center p-2  gap-3 '>
                                    <Image src={capa2} alt='' />
                                </div>

                                <div className="flex items-start">
                                    <span className="text-xl ">50</span>
                                    <span className="text-sm ml-0">cm</span>
                                </div>
                            </div>

                        </div>

                        <div className='text-grayy text-base'>
                            RÉF : VABGN5
                        </div>
                    </div>

                    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full" ></hr>

                    {/* Description   */}

                    <div className='flex flex-col text-grayy gap-4'>
                        <div>
                            <div>
                                Location appareil à raclette - Raclette traditionnelle 1/2 roue
                            </div>
                            <div>Réglable en hauteur</div>
                            <div>
                                Appareil à raclette professionnel
                            </div>
                            <div>
                                Boîtier de chauffe horizontal réglable en hauteur
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <div>220V</div>
                            <div>900W</div>
                        </div>
                    </div>

                </div>

                {/* Lower Section   */}

                <div className='w-full flex flex-col gap-3'>

                    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full" ></hr>

                    <div className='flex gap-3 items-center w-full h-full'>
                        {/* Button Increase Decrease  */}
                        <div className="relative flex items-center max-w-[8rem] grow-0 border rounded-md border-gray-300 ">
                            <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="  p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none">
                                <svg className="w-3 h-3 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                </svg>
                            </button>
                            <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className=" border-x-0 b h-11 text-center text-black text-sm  block w-full py-2.5 " placeholder="1" required />
                            <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="  p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none">
                                <svg className="w-3 h-3 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                        </div>

                        <div className="grow hover:bg-[#29b6c4] bg-pop h-full m-0 p-0 flex justify-center items-center rounded-md  transform transition-transform duration-30 ">
                            <button className="bg-inherit text-white font-normal font-inter grow items-center w-full p-0 m-0 uppercase">
                                Ajouter au panier
                            </button>
                        </div>


                    </div>

                </div>

            </div>
        </div>



    )
}

export default ProductDetail